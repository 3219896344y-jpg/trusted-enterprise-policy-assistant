/* Run inside V1.1 image; real local WS + real patched continue/chat/interrupt methods.
 * Model API and database are stubs, so this test never reads credentials or pays for calls. */
const assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path'),http=require('node:http');
const WS=require('/app/server/node_modules/ws');
const reliability=require('/app/policy-governance/reliability.cjs');
const {loadClass,fixture,valid}=require('./offline_aibitat_fixture.cjs');
const A=loadClass('/app/server/utils/agents/aibitat/index.js',reliability);
const storage=fs.mkdtempSync(path.join(os.tmpdir(),'policy-offline-'));process.env.STORAGE_DIR=storage;
const scenarios={valid:()=>JSON.stringify(valid()),malformed:()=>'{oops',truncated:()=>'{"behavior":"ANSWER",',missing:()=>JSON.stringify({behavior:'ANSWER'}),type:()=>JSON.stringify({...valid(),facts:'not-array'}),empty:()=>'',extra:()=>JSON.stringify({...valid(),extra:'ignored?'}),long:()=>JSON.stringify({...valid(),facts:['x'.repeat(4001)]}),huge:()=>'{'+ 'x'.repeat(131073),null:()=> 'null'};
const server=http.createServer((_q,r)=>r.end('alive'));const wss=new WS.Server({server});const threads=new Map();const history=[];
wss.on('connection',socket=>socket.on('message',buf=>{
 const q=JSON.parse(buf);let a=threads.get(q.thread);
 if(!a){a=fixture(A,q.thread,d=>history.push(d));threads.set(q.thread,a);
  a.onInterrupt(async()=>{const job=a.job;if(!job)return;a.job=null;await a.continue('离线故障注入轮');});
  a.onTerminate(()=>socket.send(JSON.stringify({thread:q.thread,status:a._governanceStatus,text:reliability.FAILURE_TEXT,citations:a._pendingCitations})));
 }
 a.job=q;
 a.reply=async()=>{
  a._pendingCitations=[{title:'TRAIN-FUNC_2026.txt',text:'员工在报名付费前取得直属主管的书面批准，并由人力资源部登记培训计划。'}];
  a._providerInstance.client.chat.completions.create=async()=>({choices:[{message:{content:scenarios[q.kind]?.()||''},finish_reason:'stop'}]});
  if(q.kind==='callback_throw')throw Error('injected_continue_error');
  const text=await reliability.safeGovern(a,'UNVERIFIED_DRAFT_DO_NOT_SHOW',q.kind==='module_throw'?()=>{throw Error('injected_module_error')}:undefined);
  a.newMessage({from:'ASSISTANT',to:'USER',content:text});
  socket.send(JSON.stringify({thread:q.thread,status:a._governanceStatus,text,citations:a._pendingCitations}));return text;
 };
 a.interrupt({from:'USER',to:'ASSISTANT'});
}));
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const port=server.address().port;
 const ws=new WS('ws://127.0.0.1:'+port);await new Promise(r=>ws.once('open',r));const results=[];
 async function run(thread,kind,expected){
  const answer=await new Promise((res,rej)=>{const timer=setTimeout(()=>rej(Error('offline_ws_timeout')),3000);ws.once('message',b=>{clearTimeout(timer);res(JSON.parse(b))});ws.send(JSON.stringify({thread,kind}));});
  assert.equal(answer.status.governance_status,expected);assert.ok(!answer.text.includes('UNVERIFIED_DRAFT'));
  if(expected==='failed'){assert.equal(answer.citations.length,0);assert.equal(answer.text,reliability.FAILURE_TEXT);assert.ok(answer.status.error_code);}
  const health=await new Promise((res,rej)=>http.get('http://127.0.0.1:'+port,r=>{let s='';r.on('data',x=>s+=x);r.on('end',()=>res(s))}).on('error',rej));assert.equal(health,'alive');
  await new Promise(r=>setImmediate(r));results.push({thread,kind,expected,actual:answer.status.governance_status,error:answer.status.error_code,service_alive:true,draft_exposed:false});
 }
 let id=100;
 for(const kind of ['malformed','truncated','missing','type','empty','extra','long','huge','null','module_throw','callback_throw'])await run(id++,kind,'failed');
 await run(200,'valid','verified');await run(200,'malformed','failed');await run(200,'valid','verified');
 await run(201,'valid','verified');await run(202,'module_throw','failed');await run(203,'valid','verified');
 const audits=fs.readdirSync(path.join(storage,'governance-audit')).map(p=>JSON.parse(fs.readFileSync(path.join(storage,'governance-audit',p))));assert.equal(audits.length,results.length);assert.equal(audits.filter(x=>x.governance_status==='failed').length,results.filter(x=>x.actual==='failed').length);
 ws.close();for(const socket of wss.clients)socket.terminate();await new Promise(r=>wss.close(r));await new Promise(r=>server.close(r));
 console.log(JSON.stringify({passed:results.length,failed:0,model_calls:0,actual_websocket:true,actual_upstream_continue:true,production_http_endpoint_fault_injection:false,audits:audits.length,results}));
})().catch(e=>{console.error(e);process.exitCode=1;server.close();wss.close();});

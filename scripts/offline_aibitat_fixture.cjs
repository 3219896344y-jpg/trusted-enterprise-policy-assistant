/* Offline only. Uses saved upstream methods with provider/telemetry imports stubbed. */
const fs=require('node:fs'),vm=require('node:vm'),events=require('node:events');
function loadClass(file,reliability){
 const module={exports:{}};
 const req=name=>{
  if(name==='events')return events;
  if(name==='uuid')return {v4:require('node:crypto').randomUUID};
  if(name==='./error.js')return {APIError:class APIError extends Error{}};
  if(name.includes('providers'))return {};
  if(name.includes('telemetry'))return {Telemetry:{sendTelemetry(){}}};
  if(name.includes('toolReranker'))return {ToolReranker:class{}};
  if(name==='/app/policy-governance/reliability.cjs')return reliability;
  throw Error('Unexpected offline dependency '+name);
 };
 vm.runInNewContext(fs.readFileSync(file,'utf8'),{module,exports:module.exports,require:req,console,process:{env:{}},AbortController,setTimeout,clearTimeout},{filename:file});
 return module.exports;
}
const quote='员工在报名付费前取得直属主管的书面批准';
const valid=()=>({behavior:'ANSWER',facts:['报名付费前需主管书面批准。'],supports:[[0,'S1',quote,'2026-10-01','functional','current','支持批准要求']],unknown:[],clarifications:[],decisions:[['S1','直接支持']]});
function fixture(A,id,send=()=>{}){
 const a=new A({provider:'deepseek',model:'deepseek-flash',handlerProps:{invocation:{thread_id:id}}});
 a._trackedChatId=id;a.socket={send:(_name,data)=>send(data)};
 a.hasReachedMaximumRounds=()=>false;a.agents.set('USER',{interrupt:'ALWAYS'});a.agents.set('ASSISTANT',{});
 a._providerInstance={model:'deepseek-flash',resetUsage(){},recordUsage(){},getUsage(){return{}},client:{chat:{completions:{create:async()=>({choices:[{message:{content:JSON.stringify(valid())},finish_reason:'stop'}]})}}}};
 a._pendingCitations=[{title:'TRAIN-FUNC_2026.txt',text:quote+'，并由人力资源部登记培训计划。'}];
 return a;
}
module.exports={loadClass,fixture,valid};
if(process.argv[2]==='old-repro'){
 const path=require('node:path');const root=path.resolve(__dirname,'..');
 process.env.STORAGE_DIR=path.join(root,'evidence/v1_1/offline_old_audit');
 const A=loadClass(path.join(root,'../anythingllm-baseline/upstream/anything-llm/server/utils/agents/aibitat/index.js'));
 const a=fixture(A,1);a._providerInstance.client.chat.completions.create=async()=>({choices:[{message:{content:'{"behavior":'},finish_reason:'stop'}]});
 a.reply=async()=>require('../evidence/v1_1/v1_reference/gate.cjs').govern(a,'UNVERIFIED_DRAFT_DO_NOT_SHOW');
 a.onInterrupt(async()=>{await a.continue('离线第二轮');});a.interrupt({from:'USER',to:'ASSISTANT'});
}

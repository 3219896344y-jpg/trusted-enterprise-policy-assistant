/* Local exception boundary: no process-wide rejection handler and no draft fallback. */
const fs=require('node:fs');
const path=require('node:path');
const {randomUUID}=require('node:crypto');
const FAILURE_TEXT='**依据核验暂时不可用**\n\n本轮治理服务发生技术故障，暂时无法可靠核验依据，因此不提供未经核验的制度结论。这不是“制度没有规定”的判断。可以稍后重新发起查询。';
function errorCode(error) {
 const s=String(error?.message||'');
 return /^governance_[a-z_]+(?::[a-z_,]+)?$/.test(s)?s:'governance_internal_error';
}
function signal(agent,status,error=null) {
 const value={type:'governanceStatus',governance_status:status,error_code:error};
 try {agent._governanceStatus=value;} catch {}
 try {agent.socket?.send?.('reportStreamEvent',value);} catch {}
 return value;
}
function audit(agent,trace) {
 try {
  const dir=path.join(process.env.STORAGE_DIR,'governance-audit');fs.mkdirSync(dir,{recursive:true});
  const filename=`${trace.thread_id||'unknown'}-${trace.chat_id||'unknown'}-${randomUUID()}.json`;
  fs.writeFileSync(path.join(dir,filename),JSON.stringify(trace,null,2));return true;
 } catch {
  // No exception details or provider credentials in fallback logs.
  console.error('[policy-governance] governance_audit_write_failed');return false;
 }
}
function fail(agent,error,trace={}) {
 const code=errorCode(error);
 try {agent._pendingCitations=[];} catch {}
 signal(agent,'failed',code);
 const record={...trace,schema_version:4,timestamp:trace.timestamp||new Date().toISOString(),thread_id:trace.thread_id??agent?.handlerProps?.invocation?.thread_id,chat_id:trace.chat_id??agent?.trackedChatId,status:'operational_error',governance_status:'failed',error:code,visible_answer:FAILURE_TEXT,tool_trace_complete:false};
 if(!audit(agent,record))signal(agent,'failed','governance_audit_write_failed');
 return FAILURE_TEXT;
}
async function safeGovern(agent,draft,implementation) {
 try {
  // Lazy require is inside the boundary so module-load failures are also isolated.
  const run=implementation||require('./gate.cjs').govern;
  const answer=await run(agent,draft);
  if(typeof answer!=='string'||!answer.trim())throw Error('governance_empty_answer');
  return answer;
 } catch(error) {return fail(agent,error,{boundary:'outer_module_boundary'});}
}
function asyncFailure(agent,error,route) {
 const answer=fail(agent,error,{boundary:'interrupt_callback',route:{from:route?.from,to:route?.to}});
 try {agent.socket?.send?.('reportStreamEvent',{type:'fullTextResponse',uuid:randomUUID(),content:answer});}catch{}
 // Unexpected continuation faults end this session only; governance failures normally
 // return safely through the original chat-history path and keep the thread usable.
 try {agent.newError?.(route||{},Error('governance_continuation_failed'));}catch{}
 try {agent.terminate?.();}catch{}
}
module.exports={FAILURE_TEXT,errorCode,signal,audit,fail,safeGovern,asyncFailure};

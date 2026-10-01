const assert=require('node:assert/strict');
const fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {safeGovern,FAILURE_TEXT}=require('../src/governance/reliability.cjs');
const {parseGovernance}=require('../src/governance/parse.cjs');
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'policy-reliability-'));
process.env.STORAGE_DIR=dir;
const text='员工应在出发前至少2个工作日提交出差申请，由直属主管批准。';
function agent(){return {model:'deepseek-flash',handlerProps:{invocation:{thread_id:1}},trackedChatId:1,chats:[],_pendingCitations:[{title:'TRAVEL_2025.txt',text}],socket:{send(){}},providerInstance:{model:'deepseek-flash',resetUsage(){},recordUsage(){},getUsage(){return{}},client:{chat:{completions:{create:async()=>({choices:[{message:{content:JSON.stringify({behavior:'ANSWER',facts:['当年的标准要求提前2个工作日提交申请。'],supports:[[0,'S1',text,'2025-08-01','all','historical','支持当年申请时限']],unknown:[],clarifications:[],decisions:[['S1','当年规则']]})}}]})}}}}};}
(async()=>{
 const a=agent(),answer=await safeGovern(a,'UNVERIFIED_DRAFT');
 assert.equal(a._governanceStatus.governance_status,'verified');assert.ok(answer.includes('旧规则不作为当前操作依据'));assert.ok(answer.includes('TRAVEL'));
 assert.throws(()=>parseGovernance('['.repeat(34)+'0'+']'.repeat(34)),/nesting_too_deep/);
 const block=path.join(dir,'not-a-directory');fs.writeFileSync(block,'synthetic');process.env.STORAGE_DIR=block;
 const b=agent();const messages=[];const original=console.error;console.error=(...args)=>messages.push(args.join(' '));
 let failed;try{failed=await safeGovern(b,'UNVERIFIED_DRAFT')}finally{console.error=original}
 assert.equal(failed,FAILURE_TEXT);assert.equal(b._governanceStatus.governance_status,'failed');assert.equal(b._governanceStatus.error_code,'governance_audit_write_failed');assert.deepEqual(b._pendingCitations,[]);assert.ok(messages.length);
 console.log(JSON.stringify({passed:3,failed:0,model_calls:0,checks:['historical_fact_without_required_keyword_gets_explicit_renderer_label','nesting_limit','audit_io_failure_fails_safe_without_throw']}));
})().catch(e=>{console.error(e);process.exitCode=1});

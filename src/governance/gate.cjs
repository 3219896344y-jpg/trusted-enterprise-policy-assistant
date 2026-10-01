/* Independent product layer; called only after the original automatic tool loop.
 * Credentials stay inside AnythingLLM's existing provider instance. */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const registry = require('./registry.json');
const rules = fs.readFileSync(path.join(__dirname,'rules.txt'),'utf8');
const {parseGovernance}=require('./parse.cjs');
const reliability=require('./reliability.cjs');
const schema=require('./schema.cjs');
const sha = s => crypto.createHash('sha256').update(s).digest('hex');
const clean = s => String(s||'').replace(/<document_metadata>[\s\S]*?<\/document_metadata>/g,'').trim();

function candidates(sources) {
 const found=new Map();
 for (const source of sources) {
  const text=clean(source.text||source.pageContent);
  const policy=registry.find(p=>path.basename(p.source_file)===source.title);
  const key=source.title+':'+sha(text);
  if (!found.has(key)) found.set(key,{id:'S'+(found.size+1),source,text,policy:policy||null});
 }
 return [...found.values()];
}

function validate(result, pool) {
 if(!['ANSWER','PARTIAL_ANSWER','CLARIFY','NO_EVIDENCE'].includes(result.behavior)) throw Error('governance_invalid_behavior');
 if(!Array.isArray(result.claims)||!Array.isArray(result.unknown)||!Array.isArray(result.clarifications)) throw Error('governance_invalid_shape');
 const used=new Set(), errors=[];
 for (const claim of result.claims) {
  if(typeof claim.text!=='string'||!claim.text.trim()||!Array.isArray(claim.evidence)||!claim.evidence.length) {errors.push('claim_without_evidence');continue;}
  for (const e of claim.evidence) {
   const c=pool.find(c=>c.id===e.source_id);
   if(!c?.policy||typeof e.quote!=='string'||e.quote.length<8||!c.text.includes(e.quote)) {errors.push('quote_not_in_candidate');continue;}
   const p=c.policy;
   if(!/^\d{4}-\d{2}-\d{2}$/.test(e.business_date||'')) {errors.push('missing_business_date');continue;}
   if(e.business_date<p.effective_date||(p.expiry_date&&e.business_date>p.expiry_date)) {errors.push('source_outside_effective_interval');continue;}
   if(p.status==='expired'&&e.use!=='historical') {errors.push('expired_source_as_current');continue;}
   if(p.department.length===1&&p.department[0]!=='all'&&e.department!==p.department[0]) {errors.push('department_mismatch');continue;}
   if(typeof e.relevance!=='string'||!e.relevance.trim()) {errors.push('missing_relevance_reason');continue;}
   used.add(c.id);
  }
 }
 if(errors.length) throw Error('governance_validation:'+Array.from(new Set(errors)).join(','));
 if(result.behavior==='ANSWER'&&!result.claims.length) throw Error('answer_without_facts');
 if(result.behavior==='PARTIAL_ANSWER'&&(!result.claims.length||!result.unknown.length)) throw Error('partial_missing_side');
 if(result.behavior==='CLARIFY'&&!result.clarifications.length) throw Error('clarify_without_question');
 return used;
}

// Flat wire schema avoids deeply nested generation; normalization never adds facts.
function normalize(wire) {
 schema.check(wire);
 if(!Array.isArray(wire.facts)||!wire.facts.every(x=>typeof x==='string')||!Array.isArray(wire.supports)||!Array.isArray(wire.decisions))throw Error('governance_invalid_shape');
 const claims=wire.facts.map(text=>({text,evidence:[]}));
 for(const row of wire.supports){
  if(!Array.isArray(row)||row.length!==7||!Number.isInteger(row[0])||!claims[row[0]]||!row.slice(1).every(x=>typeof x==='string'))throw Error('governance_invalid_shape');
  const [i,source_id,quote,business_date,department,use,relevance]=row;
  claims[i].evidence.push({source_id,quote,business_date,department,use,relevance});
 }
 for(const list of [wire.unknown,wire.clarifications])if(!Array.isArray(list)||!list.every(x=>typeof x==='string'))throw Error('governance_invalid_shape');
 if(!wire.decisions.every(r=>Array.isArray(r)&&r.length===2&&r.every(x=>typeof x==='string')))throw Error('governance_invalid_shape');
 return {behavior:wire.behavior,claims,unknown:wire.unknown,clarifications:wire.clarifications,source_decisions:wire.decisions.map(([source_id,reason])=>({source_id,reason}))};
}

async function govern(agent,draft) {
 let trace={schema_version:4,timestamp:new Date().toISOString(),tool_trace_complete:false};
 try {
 const pool=candidates(agent._pendingCitations||[]);
 // User/assistant dialogue only; tool internals, gold and evaluation notes never enter this layer.
 const history=agent.chats.filter(m=>m.from==='USER'||m.to==='USER').slice(-20).map(m=>({role:m.from==='USER'?'user':'assistant',content:m.content}));
 const payload={conversation:history,candidates:pool.map(c=>({id:c.id,title:c.source.title,text:c.text,policy:c.policy}))};
 trace={schema_version:4,timestamp:new Date().toISOString(),thread_id:agent.handlerProps.invocation.thread_id,chat_id:agent.trackedChatId,model:agent.model,conversation:history,candidates:payload.candidates,original_draft:draft,draft_sent_to_governance:false,tool_trace_complete:false};
  const provider=agent.providerInstance;
  if(provider.model!=='deepseek-flash')throw Error('governance_unsupported_model');
  provider.resetUsage();
  // Reuse the provider's authenticated client; never access/export its credential.
  // JSON mode constrains syntax only, not grounding or schema correctness.
  const response=await provider.client.chat.completions.create({model:provider.model,messages:[{role:'system',content:rules},{role:'user',content:JSON.stringify(payload)}],response_format:{type:'json_object'},stream:false});
  provider.recordUsage(response.usage||{});
  trace.governance_usage=provider.getUsage();trace.response_format='json_object';
  const content=String(response.choices?.[0]?.message?.content||'').trim();
  trace.raw_governance_output=content;
  if(response.choices?.[0]?.finish_reason==='length')throw Error('governance_invalid_json_truncated');
  const {result:wire,repairs}=parseGovernance(content);trace.format_repairs=repairs;
  const result=normalize(wire);
  const used=validate(result,pool);
  const kept=pool.filter(c=>used.has(c.id));
  trace.decision=result;trace.kept=kept.map(c=>c.id);
  trace.filtered=pool.filter(c=>!used.has(c.id)).map(c=>({source_id:c.id,reason:result.source_decisions?.find(x=>x.source_id===c.id)?.reason||'not_used_to_support_final_answer'}));
  // Keep complete ORIGINAL fragments: no shortening evidence to make precision look better.
  agent._pendingCitations=kept.map(c=>c.source);
  const numbers=new Map(kept.map((c,i)=>[c.id,i+1]));
  const historicalLabel=c=>{const old=[...new Set(c.evidence.filter(e=>e.use==='historical').map(e=>{const p=pool.find(x=>x.id===e.source_id).policy;return p.policy_id+' '+p.version;}))];return old.length?'【历史对照：'+old.join('、')+'；旧规则不作为当前操作依据】 ':'';};
  const facts=result.claims.map(c=>'- '+historicalLabel(c)+c.text+' '+[...new Set(c.evidence.map(e=>numbers.get(e.source_id)))].map(n=>'['+n+']').join('')).join('\n');
  let answer=facts?'**可以确认**\n'+facts:'';
  if(result.unknown.length) answer+='\n\n**当前制度无法确认**\n'+result.unknown.map(x=>'- '+x).join('\n');
  if(result.clarifications.length) answer+='\n\n**需要澄清**\n'+result.clarifications.map(x=>'- '+x).join('\n');
  if(!answer.trim()) throw Error('governance_empty_answer');
  trace.status='completed';trace.governance_status='verified';trace.visible_answer=answer.trim();
  if(!reliability.audit(agent,trace))throw Error('governance_audit_write_failed');
  reliability.signal(agent,'verified');
  return trace.visible_answer;
 } catch(error) {
  return reliability.fail(agent,error,trace);
 }
}
module.exports={govern,candidates,validate,normalize};

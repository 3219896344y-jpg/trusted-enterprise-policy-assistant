/* Strict, bounded wire schema. No repair of missing facts, quotes or business logic. */
const keys=['behavior','facts','supports','unknown','clarifications','decisions'];
const limits={response:131072,text:4000,quote:16000,facts:128,supports:512,decisions:256};
function check(w) {
 const bad=()=>{throw Error('governance_invalid_shape');};
 if(!w||typeof w!=='object'||Array.isArray(w))bad();
 if(keys.some(k=>!Object.hasOwn(w,k)))throw Error('governance_missing_field');
 if(Object.keys(w).some(k=>!keys.includes(k)))throw Error('governance_unexpected_field');
 if(!['ANSWER','PARTIAL_ANSWER','CLARIFY','NO_EVIDENCE'].includes(w.behavior))throw Error('governance_invalid_behavior');
 const strings=(a,max)=>{if(!Array.isArray(a)||a.length>max||a.some(s=>typeof s!=='string'||!s.trim()||s.length>limits.text))bad();};
 strings(w.facts,limits.facts);strings(w.unknown,limits.facts);strings(w.clarifications,limits.facts);
 if(!Array.isArray(w.supports)||w.supports.length>limits.supports)bad();
 for(const s of w.supports){
  if(!Array.isArray(s)||s.length!==7||!Number.isInteger(s[0])||s[0]<0||s[0]>=w.facts.length)bad();
  if(s.slice(1).some(v=>typeof v!=='string'||!v.trim()))bad();
  if(!/^S[1-9]\d*$/.test(s[1])||s[1].length>12||s[2].length>limits.quote||s[6].length>limits.text)bad();
  if(!['all','production','functional'].includes(s[4])||!['current','historical'].includes(s[5]))bad();
  if(!/^\d{4}-\d{2}-\d{2}$/.test(s[3]))bad();
  const date=new Date(s[3]+'T00:00:00Z');if(!Number.isFinite(date.getTime())||date.toISOString().slice(0,10)!==s[3])bad();
 }
 if(!Array.isArray(w.decisions)||w.decisions.length>limits.decisions)bad();
 const seen=new Set();
 for(const row of w.decisions){
  if(!Array.isArray(row)||row.length!==2||row.some(s=>typeof s!=='string'||!s.trim()||s.length>limits.text))bad();
  if(!/^S[1-9]\d*$/.test(row[0])||seen.has(row[0]))bad();seen.add(row[0]);
 }
 return w;
}
module.exports={check,limits};

/* Strict JSON parser retaining duplicate-key information.
 * A repeated empty/null evidence value may be discarded ONLY when its other value is
 * a nonempty array. Conflicting duplicate values are never arbitrated here. */
function parseGovernance(text) {
 if(typeof text!=='string'||!text.trim())throw Error('governance_empty_response');
 if(text.length>131072)throw Error('governance_response_too_large');
 let i=0;const repairs=[];let depth=0;
 const ws=()=>{while(/\s/.test(text[i]||'')&&i<text.length)i++;};
 function string(){const begin=i++;while(i<text.length){if(text[i]==='\\'){i+=2;continue;}if(text[i++]==='"')return JSON.parse(text.slice(begin,i));}throw Error('governance_invalid_json');}
 function value(){
  if(++depth>32)throw Error('governance_nesting_too_deep');
  try {return parseValue();} finally {depth--;}
 }
 function parseValue(){
  ws();const c=text[i];
  if(c==='"')return string();
  if(c==='['){i++;const a=[];ws();if(text[i]===']'){i++;return a;}while(true){a.push(value());ws();if(text[i]===']'){i++;return a;}if(text[i++]!==',')throw Error('governance_invalid_json');}}
  if(c==='{'){
   i++;const o=Object.create(null);ws();if(text[i]==='}'){i++;return o;}
   while(true){ws();if(text[i]!=='"')throw Error('governance_invalid_json');const k=string();ws();if(text[i++]!==':')throw Error('governance_invalid_json');const v=value();
    if(Object.hasOwn(o,k)){
     const empty=x=>x===null||(Array.isArray(x)&&x.length===0);
     const populated=x=>Array.isArray(x)&&x.length>0;
     if(k==='evidence'&&((empty(o[k])&&populated(v))||(populated(o[k])&&empty(v)))){o[k]=populated(o[k])?o[k]:v;repairs.push('discard_redundant_empty_evidence_duplicate');}
     else throw Error('governance_conflicting_duplicate_key');
    }else o[k]=v;
    ws();if(text[i]==='}'){i++;return o;}if(text[i++]!==',')throw Error('governance_invalid_json');
   }
  }
  const match=text.slice(i).match(/^(?:true|false|null|-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)/);
  if(!match)throw Error('governance_invalid_json');i+=match[0].length;return JSON.parse(match[0]);
 }
 const result=value();ws();if(i!==text.length)throw Error('governance_invalid_json');return {result,repairs};
}
module.exports={parseGovernance};

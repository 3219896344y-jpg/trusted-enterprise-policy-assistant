/* Offline UI-state safety checks, not a browser layout test. No model/network. */
'use strict';
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = __dirname;
let checks = 0;
const verify = (value, label) => { assert.ok(value, label); checks++; };

function app(page = 'workspace', search = '') {
  const elements = new Map();
  class Element {
    constructor() { this.innerHTML='';this.textContent='';this.value='';this.hidden=false;this.disabled=false;this.dataset={};this.handlers={};this.classes=new Set();this.classList={add:(...xs)=>xs.forEach(x=>this.classes.add(x)),remove:(...xs)=>xs.forEach(x=>this.classes.delete(x)),toggle:(x,on)=>on===undefined?(this.classes.has(x)?this.classes.delete(x):this.classes.add(x)):(on?this.classes.add(x):this.classes.delete(x))}; }
    addEventListener(name,fn) { this.handlers[name]=fn; }
    setAttribute() {}
    removeAttribute() {}
    focus() {}
    getClientRects() { return [{}]; }
  }
  const doc={body:new Element(),handlers:{},querySelector:s=>{if(!elements.has(s))elements.set(s,new Element());return elements.get(s);},querySelectorAll:()=>[],addEventListener:(n,f)=>doc.handlers[n]=f};
  doc.body.dataset.page=page;
  const window={location:{search},matchMedia:()=>({matches:false}),addEventListener(){},innerWidth:1280};
  const context=vm.createContext({window,document:doc,URLSearchParams,console});
  for(const file of ['replay_data.js','workspace_data.js','workspace.js']) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
  const el=s=>doc.querySelector(s);
  const click=(selector,data)=>doc.handlers.click({target:{closest:s=>s===selector?{dataset:data}:null}});
  const send=()=>el('#query-form').handlers.submit({preventDefault(){}});
  return {el,click,send,data:window.POLICY_REPLAY_DATA,extra:window.POLICY_WORKSPACE_DATA};
}

for (const id of ['normal','clarify','refuse','inference']) {
  const a=app();
  const expected=[...a.data.scenes,...a.extra.scenes].find(s=>s.id===id);
  verify(a.el('#replay-content').innerHTML.includes('你想了解哪项制度'),'empty welcome');
  verify(!a.el('#replay-content').innerHTML.includes('agent-bubble'),'no initial agent answer');
  a.click('[data-fill-prompt]',{fillPrompt:id});
  verify(a.el('#query-input').value===expected.question,`${id}: sample carries exact recorded question/date/department`);
  verify(!a.el('#replay-content').innerHTML.includes('agent-bubble'),`${id}: loading a sample does not answer`);
  a.send();
  verify(a.el('#replay-content').innerHTML.includes('agent-bubble'),`${id}: matched record visible`);
  verify(a.el('#replay-content').innerHTML.includes(expected.v1.turns[0].visible_answer),`${id}: unmodified raw answer retained`);
  verify(a.el('#mode-bar').hidden,`${id}: compare is not in product workspace`);
  verify(!a.el('#replay-content').innerHTML.includes('WHAT TO WATCH'),`${id}: explanation separated`);
  verify(!a.el('.workspace').classes.has('inspector-visible'),`${id}: evidence collapsed by default`);
  a.el('#query-input').value='请替我决定明天能不能得到公司退款，金额123456元。';
  a.send();
  verify(!a.el('#replay-content').innerHTML.includes('agent-bubble'),`${id}: unknown question clears previous answer`);
  verify(!a.el('#evidence-content').innerHTML.includes('evidence-document'),`${id}: unknown question clears previous source`);
  verify(a.el('#composer-feedback').textContent.includes('没有生成新答案'),`${id}: clear non-generated notice`);
}
const changed=app();
changed.click('[data-fill-prompt]',{fillPrompt:'normal'});
changed.el('#query-input').value=changed.el('#query-input').value.replace('2026-10-01','2025-10-01');
changed.send();
verify(!changed.el('#replay-content').innerHTML.includes('agent-bubble'),'changed date cannot inherit recorded answer');
const cases=app('cases','?scene=noise&mode=compare');
verify(cases.el('#replay-content').innerHTML.includes('Baseline B'),'cases retains baseline comparison');
verify(cases.el('#replay-content').innerHTML.includes('WHAT TO WATCH'),'cases retains explanation');
verify(cases.el('#evidence-content').innerHTML.includes('不支持本题'),'cases shows exact original visitor citation rating');
console.log(JSON.stringify({status:'passed',checks,model_calls:0,network_calls:0,scope:'offline presentation-state checks; browser layout separately verified'},null,2));

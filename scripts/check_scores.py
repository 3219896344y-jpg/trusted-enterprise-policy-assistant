"""Recompute arithmetic from published single-rater annotations, not a new semantic judge."""
import hashlib,json,re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def read(p):return json.loads((ROOT/p).read_text(encoding='utf-8-sig'))
def normalize(t):return re.sub(r'<document_metadata>[\s\S]*?</document_metadata>','',t).strip()
for label in ['baseline_b','v1_1']:
 s=read(f'evaluation/{label}_scoring_public.json');r=read(f'evaluation/{label}_results_public.json')
 rows=s['cases'];ok=[c for c in rows if c['operational_status']=='completed']
 core=[c for c in ok if c['expected_behavior'] in ['answer','partial_answer']]
 refusal=[c for c in rows if c['expected_behavior']=='refuse']
 expired=[c for c in ok if c['category']=='expired_policy']
 facts=[f for c in ok for f in c['facts']];cites=[u for c in ok for u in c['citations']]
 values={
 'Answer Correctness':[c['core_correct'] for c in core],
 'Evidence Support Rate':[f['supported'] for f in facts],
 'Citation Accuracy':[u['valid'] for u in cites],
 'Correct Refusal Rate':[c['correct_refusal'] for c in refusal],
 'Expired Policy Error Rate':[c['expired_misuse'] for c in expired],
 'Unsupported Inference Rate':[c['unsupported_inference'] for c in ok]}
 for metric,v in values.items():
  n=sum(x==True for x in v);d=len(v);pending=sum(x is None for x in v)
  expected=s['metrics'][metric]
  assert (n,d,pending)==(expected['numerator'],expected['denominator'],expected['review_required_units']),(label,metric)
  print(f'{label} | {metric}: {n}/{d}; pending={pending}')
 byid={c['case_id']:c for c in r['cases']}
 for c in ok:
  rc=byid[c['case_id']];selected=next(a for a in rc['attempts'] if a['attempt']==rc['selected_attempt'])
  actual={(u['title'],hashlib.sha256(normalize(u['text']).encode()).hexdigest()) for u in selected['turns'][-1]['visible_sources']}
  scored={(u['title'],u['text_sha256']) for u in c['citations']}
  assert actual==scored,(label,c['case_id'],'citation identity')
 print(f'{label} citation identity checks passed; completed={len(ok)}, errors={len(rows)-len(ok)}')
print('PASS. Existing labels and uncertainty retained; no independent re-rating performed.')

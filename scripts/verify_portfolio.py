"""Offline integrity, link and public-file checks; no model or runtime access."""
import collections,hashlib,json,re,sys
from pathlib import Path
from urllib.parse import unquote
ROOT=Path(__file__).resolve().parents[1]
def read(p):return json.loads((ROOT/p).read_text(encoding='utf-8-sig'))
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
errors=[];checks=0
def check(ok,label):
 global checks
 checks+=1
 if not ok:errors.append(label)
manifest=read('evaluation/freeze_manifest.json')
for p,h in manifest['files'].items():check((ROOT/p).exists() and sha(ROOT/p)==h,'frozen hash: '+p)
identity=read('evaluation/v1_1_release_identity.json')
for p,h in identity['included_frozen_files'].items():check(sha(ROOT/p)==h,'V1.1 hash: '+p)
for row in read('evaluation/publication_manifest.json')['assets']:
 p=row.get('public_file',row.get('file'));h=row.get('public_sha256',row.get('sha256'))
 check(sha(ROOT/p)==h,'publication hash: '+p)
frozen=read('evaluation/frozen_test_set.json')['cases']
check(len(frozen)==80 and set(collections.Counter(c['category'] for c in frozen).values())=={10},'80 tests, 8 balanced categories')
for name in ['baseline_b','v1_1']:
 r=read('evaluation/'+name+'_results_public.json')
 check(len(r['cases'])==80 and {c['case_id'] for c in r['cases']}=={c['id'] for c in frozen},name+' case coverage')
 for c in r['cases']:
  for a in c['attempts']:
   for t in a['turns']:
    for s in t['visible_sources']:check(hashlib.sha256(s.get('text','').encode()).hexdigest()==s['text_sha256'],name+' source hash '+c['case_id'])
for p in ROOT.rglob('*'):
 if not p.is_file() or '.git' in p.parts or '__pycache__' in p.parts:continue
 rel=p.relative_to(ROOT).as_posix()
 check(p.stat().st_size<10*1024*1024,'large file: '+rel)
 check(not (set(p.relative_to(ROOT).parts)&{'runtime','storage','lancedb'}) and p.suffix.lower() not in ['.db','.sqlite','.sqlite3','.key','.pem'] and not p.name.startswith('.env'),'private file: '+rel)
 if p.suffix not in ['.md','.html']:continue
 text=p.read_text(encoding='utf-8-sig')
 links=re.findall(r'\]\(([^)]+)\)',text) if p.suffix=='.md' else re.findall(r'(?:href|src)="([^"]+)"',text)
 for target in links:
  target=target.split(' "')[0].strip('<>').split('#')[0]
  if not target or re.match(r'^[a-z]+:',target):continue
  check((p.parent/unquote(target)).exists(),'broken link: '+rel+' -> '+target)
print(json.dumps({'checks':checks,'passed':not errors,'errors':errors},ensure_ascii=False,indent=2))
sys.exit(bool(errors))

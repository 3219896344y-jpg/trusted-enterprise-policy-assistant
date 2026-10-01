import json,re,subprocess,sys
from pathlib import Path
root=Path(sys.argv[1]).resolve()
rules={
 'key_token':rb'\b(?:sk-[A-Za-z0-9_-]{16,}|gh[pousr]_[A-Za-z0-9]{24,}|github_pat_[A-Za-z0-9_]{24,}|AKIA[A-Z0-9]{16})',
 'bearer':rb'(?i)Bearer\s+[A-Za-z0-9_.-]{24,}',
 'assignment':rb'''(?i)(?:api_key|apiKey|access_token|refresh_token|password|cookie|authorization)["\x27]?\s*[:=]\s*["\x27](?!\[REDACTED\]|Bearer|<)[A-Za-z0-9_./+=:-]{24,}["\x27]''',
 'private_key':rb'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----',
 'windows_user_path':rb'(?i)[A-Z]:[\\/]+Users[\\/]+[^\s"\r\n]+',
 'personal_email':rb'(?i)[A-Za-z0-9._%+-]+@(?:gmail\.com|qq\.com|163\.com|outlook\.com|hotmail\.com)',
 'mobile':rb'(?<![\w.])1[3-9]\d{9}(?![\w.])',
 'proxy':rb'(?i)(?:https?_proxy|all_proxy)\s*[=:]\s*["\x27]?(?:https?|socks5)://',
}
def git(*args):return subprocess.check_output(['git','-C',str(root),*args])
def findings(data):return [k for k,p in rules.items() if re.search(p,data)]
entries=git('rev-list','--objects','--all','--reflog').decode().splitlines()
names={x.split(' ',1)[0]:x.partition(' ')[2] for x in entries}
headers=git('cat-file','--batch-all-objects','--batch-check=%(objectname) %(objecttype) %(objectsize)').decode().splitlines()
proc=subprocess.Popen(['git','-C',str(root),'cat-file','--batch'],stdin=subprocess.PIPE,stdout=subprocess.PIPE)
hits=[];counts={}
for line in headers:
 oid,typ,size=line.split();counts[typ]=counts.get(typ,0)+1
 if typ not in ('blob','commit','tag'):continue
 proc.stdin.write((oid+'\n').encode());proc.stdin.flush()
 proc.stdout.readline();data=proc.stdout.read(int(size));proc.stdout.read(1)
 for rule in findings(data):hits.append({'object':oid,'file':names.get(oid,''),'type':typ,'rule':rule})
proc.stdin.close();proc.wait()
work=[];files=git('ls-files','-z').decode().split('\0')
for rel in filter(None,files):
 p=root/rel
 if p.is_file():
  for rule in findings(p.read_bytes()):work.append({'file':rel,'rule':rule})
  if set(p.parts)&{'runtime','storage','lancedb'} or p.suffix.lower() in ('.db','.sqlite','.sqlite3','.key','.pem') or p.name.startswith('.env'):work.append({'file':rel,'rule':'private_runtime_file'})
report={'scope':'tracked current files and ALL local Git objects, including unreachable objects; commit/tag metadata included','object_counts':counts,'tracked_files':len(list(filter(None,files))),'current_findings':work,'history_findings':hits,'matching_values_disclosed':False,'limitations':'Pattern scan does not prove absence. Images and context require manual review.'}
print(json.dumps(report,ensure_ascii=False,indent=2))
sys.exit(bool(work or hits))

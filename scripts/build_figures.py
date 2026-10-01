"""Create portfolio SVG charts directly from published integer annotations, offline."""
import html,json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def text(x,y,s,size=18):return f'<text x="{x}" y="{y}" font-size="{size}">{html.escape(s)}</text>'
def figure(title,sub,rows,footer,height):
 s=f'<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="{height}" viewBox="0 0 1200 {height}"><rect width="100%" height="100%" fill="#f3f7f9"/><g font-family="Microsoft YaHei,Arial,sans-serif" fill="#193044">'
 s+=text(45,48,title,28)+text(45,83,sub,16)
 for i,(label,n,p,bad,op,total) in enumerate(rows):
  y=125+i*68;s+=text(45,y+24,label);x=250
  for count,col in [(n,'#078580'),(p,'#d49d29'),(bad,'#b75159'),(op,'#718096')]:
   width=620*count/total
   if width:s+=f'<rect x="{x:.2f}" y="{y}" width="{width:.2f}" height="30" fill="{col}"/>'
   x+=width
  s+=text(891,y+23,f'{n}/{total} ({100*n/total:.2f}%)',17)
  if p:s+=text(891,y+44,f'另{p}待复核',13)
 for x,col,label in [(45,'#078580','确认通过'),(205,'#d49d29','待复核（不计成功）'),(485,'#b75159','错误'),(615,'#718096','运行失败')]:
  s+=f'<rect x="{x}" y="{height-78}" width="14" height="14" fill="{col}"/>'+text(x+22,height-65,label,16)
 s+=text(45,height-26,footer,15)+'</g></svg>';return s
scores={n:json.loads((ROOT/f'evaluation/{n}_scoring_public.json').read_text(encoding='utf-8')) for n in ['baseline_b','v1_1']}
rows=[]
for metric,label in [('Citation Accuracy','引用'),('Correct Refusal Rate','正确拒答')]:
 for name,group in [('baseline_b','B'),('v1_1','V1.1')]:
  m=scores[name]['metrics'][metric];n,d,p=(m[k] for k in ['numerator','denominator','review_required_units']);rows.append((label+' / '+group,n,p,d-n-p,0,d))
(ROOT/'docs/assets/evaluation.svg').write_text(figure('来源更相关，拒答更可靠','正式单次实验 · 单评审初标 · 横条分母归一化为100%，不隐藏待复核',rows,'模拟制度 / 固定回归集；V1.1有2题治理失败，不进入有效回答的引用分母。',480),encoding='utf-8')
rows=[]
for name,group in [('baseline_b','B'),('v1_1','V1.1')]:
 s=scores[name];m=s['metrics']['Answer Correctness'];planned=[c for c in s['cases'] if c['expected_behavior'] in ['answer','partial_answer']];op=sum(c['operational_status']!='completed' for c in planned);n,p=m['numerator'],m['review_required_units'];d=len(planned)
 rows.append(('核心任务 / '+group,n,p,d-n-p-op,op,d))
(ROOT/'docs/assets/tradeoff.svg').write_text(figure('需要付出的代价：核心任务出现退化','保守端到端口径：两组均使用67道核心答案适用题，保留V1.1运行失败',rows,'V1.1有效返回口径为60/65；不得以更小分母隐藏2题失败，不宣称整体准确率提升。',340),encoding='utf-8')
print('Figures built from public scores; pending and operational failures shown separately.')

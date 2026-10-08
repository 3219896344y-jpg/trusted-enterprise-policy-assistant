/* Presentation layer only: recorded answers, recorded citations, and explicit
 * reading anchors. Never calls a model or simulates a private execution trace. */
(() => {
  'use strict';
  const data = window.POLICY_REPLAY_DATA;
  const extra = window.POLICY_WORKSPACE_DATA;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const repo = 'https://github.com/3219896344y-jpg/trusted-enterprise-policy-assistant/blob/main/';
  const link = (file, label) => `<a href="${repo + String(file || '').split('/').map(encodeURIComponent).join('/')}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`;
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!data || !extra) {
    $('#replay-content').textContent = '静态历史记录未能加载。请保留 replay_data.js 与 workspace_data.js；页面不会生成替代回答。';
    return;
  }
  const scenes = [...data.scenes, ...extra.scenes];
  const casesPage = document.body.dataset.page === 'cases';
  const params = new URLSearchParams(window.location.search);
  const state = { scene: casesPage ? (params.get('scene') || 'noise') : null, mode: casesPage ? (params.get('mode') || 'compare') : 'v1', selected: null, focused: null, focus: 'sources', drawer: false, loadedPrompt: null, unmatched: false };
  const opened = [];
  const names = {
    normal: ['01', '正常制度查询', '金额、范围与版本', '◎'],
    noise: ['02', '来源噪声', '答对，不等于引对', '▤'],
    inference: ['03', '越界推断', '制度要求 ≠ 现实状态', '◈'],
    clarify: ['04', '需要澄清', '缺少部门，先问清楚', '?'],
    refuse: ['05', '无依据拒答', '不把常识补成规定', '∅'],
    technical: ['06', '技术失败', '安全降级，不冒充拒答', '!'],
    reliability: ['07', '失败与恢复', '真实中断与异常隔离', '↺'],
    evaluation: ['08', 'Evaluation', '改善、代价与争议', '↗']
  };
  if (casesPage && !names[state.scene]) state.scene = 'noise';
  if (!['baseline','v1','compare'].includes(state.mode)) state.mode = 'compare';
  const statuses = {
    answer: ['有依据回答', 'ANSWER', '✓'],
    partial: ['部分可答', 'PARTIAL', '◐'],
    clarify: ['需要澄清', 'CLARIFY', '?'],
    refuse: ['无依据拒答', 'NO EVIDENCE', '∅'],
    failed: ['技术失败', 'FAILED', '!'],
    neutral: ['原版历史回答', 'BASELINE', '○']
  };
  function scene() { return scenes.find(s => s.id === state.scene); }
  function groups() { return state.mode === 'compare' ? ['baseline', 'v1'] : [state.mode]; }
  function turnState(turn, group) {
    if (turn.operational_status === 'operational_error' || turn.governance_status_events?.some(e => e.governance_status === 'failed')) return 'failed';
    if (group === 'baseline') return 'neutral';
    return { normal: 'answer', noise: 'answer', inference: 'partial', clarify: 'clarify', refuse: 'refuse' }[state.scene] || 'answer';
  }
  function sourceKey(group, turn, index) { return `${group}-${turn}-${index}`; }
  function sourceRating(view, record) {
    if (view.rating) return view.rating;
    // Older public source views hashed collector metadata as well as content,
    // while citation annotations hashed the corresponding policy body. Match
    // only the same file AND an exact body, never by title or similarity alone.
    const body = text => String(text || '').replace(/^<document_metadata>[\s\S]*?<\/document_metadata>\s*/, '').trim();
    const matches = (record.scoring?.citations || []).filter(c => c.title === view.title && c.text && body(c.text) === body(view.recorded_fragment));
    if (!matches.length || !matches.every(c => c.valid === matches[0].valid && c.reason === matches[0].reason)) return null;
    return matches[0];
  }
  function availableSources() {
    const s = scene();
    if (!s) return [];
    return groups().flatMap(group => s[group].turns.flatMap((turn, ti) => (turn.source_views || []).map(view => ({key: sourceKey(group, ti, view.source_index), group, ti, view, rating:sourceRating(view,s[group])}))));
  }
  function relation(line, group) {
    return extra.answer_evidence_relations[scene()?.case_id]?.[group]?.find(r => r.answer_line === line);
  }
  function formatted(line, group, ti, views, anchor) {
    return esc(line).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\[(\d+)\]/g, (full, n) => {
      const view = views[Number(n) - 1];
      if (!view) return full;
      return `<button type="button" class="inline-citation" data-source="${sourceKey(group, ti, view.source_index)}" ${anchor ? `data-clause="${esc(anchor.clause_id)}"` : ''} aria-label="核对引用${n}，原始引用为文档级">[${n}]</button>`;
    });
  }
  function answerMarkup(turn, group, ti) {
    const views = turn.source_views || [];
    let sectionOpen = false;
    let markup = '';
    turn.visible_answer.split('\n').forEach((line, index) => {
      const heading = line.match(/^\*\*([^*]+)\*\*$/);
      if (heading) {
        if (sectionOpen) markup += '</section>';
        const type = heading[1] === '当前制度无法确认' ? 'unknown' : heading[1] === '需要澄清' ? 'clarification' : heading[1].includes('不可用') ? 'error' : 'confirmed';
        markup += `<section class="answer-section ${type}"><h3>${esc(heading[1])}</h3>`;
        sectionOpen = true;
      } else if (line.trim()) {
        const anchor = relation(line, group);
        const id = `${group}-${ti}-line-${index}`;
        markup += `<div class="answer-line ${anchor ? 'linked-answer' : ''}" id="${id}" ${anchor ? `data-answer-source="${sourceKey(group, ti, anchor.source_index)}" data-clause="${esc(anchor.clause_id)}" tabindex="0" role="button" aria-label="核对这一句的制度依据，${esc(anchor.clause_id)}阅读定位"` : ''}><span>${formatted(line, group, ti, views, anchor)}</span>${anchor ? `<span class="relation-hint">${esc(anchor.clause_id)} <b>↗</b></span>` : ''}</div>`;
      }
    });
    if (sectionOpen) markup += '</section>';
    return markup;
  }
  function question(turn) {
    return `<article class="question-bubble"><div class="message-label"><span class="user-avatar">员</span><span>员工提问 <small>录制输入 · 原文</small></span></div><p>${esc(turn.question)}</p></article>`;
  }
  function statusBadge(turn,group) {
    const kind = turnState(turn,group);
    const status = statuses[kind];
    if (!casesPage) return `<details class="product-status ${kind}"><summary><span>${status[2]}</span>${status[0]} <small>查看记录状态</small></summary><div>阅读分类：${status[1]}；原始运行状态：${esc(turn.operational_status)}。阅读分类不冒充新增Agent执行事件。${(turn.governance_status_events || []).map(e=>`<p>原事件：${esc(e.governance_status)}${e.error_code?` · ${esc(e.error_code)}`:''}</p>`).join('')}</div></details>`;
    return `<div class="answer-state ${kind}"><span class="state-icon">${status[2]}</span><div><strong>${status[0]}</strong><small>${status[1]} · 阅读分类</small></div><span class="state-record">${esc(turn.operational_status)}</span></div>`;
  }
  function record(record, group, commonQuestion) {
    return `<article class="record-panel" data-record-group="${group}"><div class="record-group-label"><span>${group === 'v1' ? 'V1.1 · 受治理的答复' : 'Baseline B · 原版答复'}</span><small>${record.selected_attempt === null ? '未选择成功尝试 · 保留失败' : `原记录尝试 ${esc(record.selected_attempt)}`}</small></div>${record.turns.map((turn, ti) => {
      const kind = turnState(turn, group);
      const status = statuses[kind];
      return `${!commonQuestion || ti > 0 ? question(turn) : ''}${statusBadge(turn,group)}<div class="agent-bubble"><div class="message-label"><span class="avatar">知</span><span>Agent 回答 <small>原始可见输出</small></span></div><div class="answer-text">${answerMarkup(turn, group, ti)}</div><div class="source-list"><div class="source-label"><strong>Citations / 本轮可见引用</strong><span>${turn.source_views.length} 个片段</span></div><div class="source-chip-list">${turn.source_views.map(view => `<button type="button" class="source-chip ${sourceRating(view,record)?.valid === false ? 'noise' : ''}" data-source="${sourceKey(group, ti, view.source_index)}"><span>[${view.source_index + 1}]</span><span>${esc(view.policy?.title || view.title)}<small>${esc(view.title)} · 文档级依据</small></span><b>↗</b></button>`).join('') || '<p class="no-source">本轮没有可见引用。不会事后补造来源。</p>'}</div></div><div class="answer-meta">${(turn.governance_status_events || []).map(e => `<span class="event-tag ${e.governance_status === 'failed' ? 'failed' : ''}">原事件：${esc(e.governance_status)}${e.error_code ? ` · ${esc(e.error_code)}` : ''}</span>`).join('')}<span>完整内部Trace未取得</span></div><details class="raw-answer"><summary>核对未排版原始回答与追溯</summary><pre class="raw-text">${esc(turn.visible_answer)}</pre><p>${link(turn.provenance.file, '本轮原记录')} · <code>${esc(turn.provenance.json_path)}</code></p></details></div>`;
    }).join('')}<div class="record-footer"><code>${esc(record.experiment_id)}</code><br>${link(record.provenance.file, '实验原记录')} · ${link(record.scoring_provenance.file, '已有评分')}</div></article>`;
  }
  function explanation() {
    if (!casesPage) return '';
    const s = scene();
    if (!s) return '';
    const watch = s.watch;
    const text = watch ? `${watch.risk}\n${watch.result}` : s.description;
    return `<aside class="scene-explanation"><span class="eyebrow">WHAT TO WATCH / 这一幕看什么</span><p>${esc(text)}</p>${['normal', 'noise'].includes(s.id) ? '<small>正常查询与来源噪声共用 DIRECT_ANSWER-01；不是额外两次实验。</small>' : ''}</aside>`;
  }
  function clauses(text) {
    const positions = [...text.matchAll(/【(C\d+)】/g)];
    if (!positions.length) return [{id: null, text}];
    const chunks = [{id: null, text: text.slice(0, positions[0].index)}];
    positions.forEach((m, i) => chunks.push({id: m[1], text: text.slice(m.index, positions[i + 1]?.index ?? text.length)}));
    return chunks;
  }
  function evidence() {
    const options = availableSources();
    if (!options.length) {
      $('#evidence-content').innerHTML = `<div class="evidence-empty"><span>∅</span><h3>${state.scene === 'technical' ? '本轮核验失败' : '没有可见引用'}</h3><p>${state.scene === 'technical' ? '技术故障导致安全降级，不是“制度没有答案”。原记录没有可见来源，不补造证据。' : '当前所选历史记录没有可见来源；完整实验出处仍然保留。'}</p></div>${explanation()}`;
      return;
    }
    if (!options.some(o => o.key === state.selected)) state.selected = options[0].key;
    const selected = options.find(o => o.key === state.selected);
    const view = selected.view;
    const policy = view.policy || {};
    const department = policy.text?.match(/部门范围：([^\n；]+)/)?.[1] || (Array.isArray(policy.department) ? policy.department.join(' / ') : policy.department) || '原记录未提供';
    const clause = state.focused?.source === selected.key ? state.focused.clause : null;
    const actual = view.recorded_fragment.replace(/^<document_metadata>[\s\S]*?<\/document_metadata>\s*/, '');
    const fragments = clauses(actual);
    const highlighted = clause ? fragments.find(f => f.id === clause) : null;
    const rating = selected.rating;
    $('#evidence-content').innerHTML = `<div class="evidence-tabs" role="group" aria-label="本轮来源">${options.map(o => `<button type="button" data-source="${o.key}" class="${o.key === selected.key ? 'active' : ''} ${o.rating?.valid === false ? 'noise' : ''}" aria-pressed="${o.key === selected.key}">${o.group === 'baseline' ? 'B' : 'V'} · [${o.view.source_index + 1}] ${esc(o.view.policy?.policy_id || o.view.title)}</button>`).join('')}</div><article class="evidence-document"><div class="document-eyebrow"><span class="document-icon">▤</span><span>原始 Citation：文档级</span><span class="version-state ${policy.status === 'expired' ? 'expired' : ''}">${esc(policy.status || '未登记')}</span></div><h3>${esc(policy.title || view.title)}</h3><p class="document-file">${esc(view.title)}</p><div class="source-fact-grid"><div>版本<strong>${esc(policy.version || '原记录未提供')}</strong></div><div>生效日期<strong>${esc(policy.effective_date || '原记录未提供')}</strong></div><div class="span-two">部门 / 适用范围<strong>${esc(department)}</strong></div></div>${highlighted ? `<div class="evidence-relation"><span>↗ 答案—依据已聚焦</span><strong>${esc(clause)} · 阅读定位</strong><p>来自已有评分锚点，与本轮引用片段精确核对；不是当次模型条款级Citation。</p></div><div class="clause-focus" id="focused-evidence" tabindex="-1"><span>对应制度原文</span><pre>${esc(highlighted.text.trim())}</pre></div>` : '<div class="evidence-reading-note">点击答案中的引用核对文档；标有 C03 / C01 / C07 的结论支持进一步阅读定位。</div>'}<p class="rating-note ${rating?.valid === false ? 'noise' : ''}">${rating ? `已有单评审初标：${rating.valid === true ? '支持本题' : rating.valid === false ? '不支持本题' : '待复核'}${rating.reason ? ` · ${esc(rating.reason)}` : ''}` : '没有对应来源评分；不补造相关性结论。'}</p><details class="recorded-fragment" ${highlighted ? '' : 'open'}><summary>本轮实际可见片段 · 原文</summary><pre class="source-fragment">${esc(view.recorded_fragment)}</pre></details>${policy.text ? `<details class="full-policy"><summary>制度全文 · 同源阅读，不补充历史引用</summary><div class="full-policy-body">${clauses(policy.text).map(f => `<pre class="source-fulltext ${f.id === clause ? 'matched-clause' : ''}" ${f.id ? `data-clause-id="${f.id}"` : ''}>${esc(f.text)}</pre>`).join('')}</div></details>` : ''}<details class="provenance"><summary>来源身份、原记录与SHA256</summary><p>${link(view.provenance.file, '历史来源记录')}<br><code>${esc(view.provenance.json_path)}</code></p><p>引用片段 SHA256<br><code>${esc(view.recorded_fragment_sha256)}</code></p>${policy.source_file ? `<p>${link(policy.source_file, '制度原文件')}<br>${esc(policy.metadata_label)}</p>` : ''}</details></article>${explanation()}`;
    $('#source-counter').textContent = options.length;
  }
  function reliability() {
    const r = data.reliability;
    return `<div class="reliability-lead">错误发生时，技术失败应该停在这一轮，而不是拖垮全部会话。</div><div class="failure-callout"><strong>真实 V1 中断实验</strong><code>governance_invalid_json</code><p>61题完整返回后停止；容器 exit=1，OOMKilled=false。中断实验不作为最终成绩，没有从第62题续跑。</p></div><div class="timeline">${r.steps.map((s,i) => `<article class="timeline-step"><span class="step-no">${String(i+1).padStart(2,'0')}</span><div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div></article>`).join('')}</div><div class="reliability-stats"><article><strong>17/17</strong><small>离线故障注入通过</small></article><article><strong>78/80</strong><small>正式回归有效返回</small></article><article><strong>0</strong><small>服务级中断</small></article></div><p class="limit-note">${esc(r.limitations)}</p><details class="raw-answer"><summary>核对原复盘与故障测试记录</summary><p>${link(r.provenance.file, '公开复盘')} · ${link(r.validation_provenance.file, '故障注入结果')}</p><pre class="raw-text">${esc(r.source_excerpt)}</pre></details>`;
  }
  function evaluation() {
    return `<div class="evaluation-inline-head"><p class="eyebrow">同模型 / 同语料 / 同基础RAG参数</p><h2>主要改善，也保留代价。</h2><p>14份模拟制度 · 80题固定回归 · 单次实验 · 单评审初标</p></div><div class="evaluation-summary">${data.metrics.filter(m => ['Citation Accuracy','Correct Refusal Rate','Unsupported Inference Rate','Answer Correctness'].includes(m.name)).map(m => `<article><h3>${esc(m.label)}</h3><div class="big-change"><span class="old">${esc(m.display.baseline)}</span><b>→</b><span>${esc(m.display.v1)}</span></div><small>${esc(m.notes)}</small></article>`).join('')}</div><div class="evaluation-chart"><img src="../docs/assets/evaluation.svg" alt="冻结评测中的引用准确率与正确拒答对比"></div><div class="limit-note"><strong>有效返回 78/80；2题治理失败；0服务级中断</strong><br>存在答案正确性退化与过度拒答。未将失败或待复核算成成功，不宣称整体准确率提升。</div><a class="primary-button" href="evaluation.html">打开宽版完整 Evaluation →</a><p class="evaluation-source">${link('docs/evaluation_report.md','冻结报告')} · ${link('docs/review_required.md','保留的争议')} · ${link('docs/bad_case_review.md','改善与退化')}</p>`;
  }
  function closeDrawer() {
    state.drawer = false;
    document.body.classList.remove('evidence-open');
    $('.workspace').classList.remove('inspector-visible');
    $('.drawer-scrim').hidden = true;
    $('#evidence-panel').removeAttribute('role');
    $('#evidence-panel').removeAttribute('aria-modal');
  }
  function showDrawer() {
    const needsOverlay = state.mode === 'compare' || window.matchMedia('(max-width: 1050px)').matches || !scene();
    if (!needsOverlay) { $('.workspace').classList.add('inspector-visible'); $('#evidence-panel').focus({preventScroll:true}); return; }
    state.drawer = true;
    document.body.classList.add('evidence-open');
    $('.drawer-scrim').hidden = false;
    $('#evidence-panel').setAttribute('role','dialog');
    $('#evidence-panel').setAttribute('aria-modal','true');
    $('#evidence-panel').focus({preventScroll:true});
  }
  function focusSource(key, clause, lineElement) {
    state.selected = key;
    state.focused = clause ? {source:key,clause} : null;
    $$('.answer-line').forEach(el => el.classList.remove('is-focused', 'is-muted'));
    if (lineElement) $$('.answer-line').forEach(el => el.classList.add(el === lineElement ? 'is-focused' : 'is-muted'));
    $$('.source-chip,.inline-citation').forEach(el => el.classList.toggle('is-selected', el.dataset.source === key));
    evidence();
    showDrawer();
    const target = $('#focused-evidence') || $('.evidence-document');
    if (target) {
      target.classList.remove('focus-arrived');
      void target.offsetWidth;
      target.classList.add('focus-arrived');
      // Scroll only the evidence pane: the answer must remain on screen while
      // its clause is located. scrollIntoView would also move the outer page.
      const pane = $('#evidence-content');
      const top = pane.scrollTop + target.getBoundingClientRect().top - pane.getBoundingClientRect().top - 16;
      pane.scrollTo({top:Math.max(0,top),behavior:reduced()?'auto':'smooth'});
    }
  }
  function render() {
    if (!casesPage) { renderProduct(); return; }
    closeDrawer();
    const s = scene();
    state.selected = null;
    state.focused = null;
    $('.workspace').classList.toggle('compare-workspace', state.mode === 'compare' || !s);
    $('.workspace').classList.toggle('focus-boundary', state.focus === 'boundary');
    $('#mode-bar').hidden = !s;
    $('#compare-focus').hidden = !s || state.mode !== 'compare';
    $$('#mode-bar button').forEach(b => { b.classList.toggle('active',b.dataset.mode===state.mode); b.setAttribute('aria-pressed',String(b.dataset.mode===state.mode)); });
    $('#scene-list').innerHTML = Object.entries(names).map(([id,[n,title,subtitle,icon]]) => `<button class="scene-button ${state.scene === id ? 'active' : ''}" data-scene="${id}" type="button" aria-pressed="${state.scene===id}"><span class="scene-icon">${icon}</span><span class="scene-label">${title}<small>${subtitle}</small></span><span class="scene-number">${n}</span></button>`).join('');
    $('#scene-title').textContent = names[state.scene][1];
    $('#case-label').textContent = s ? `${s.case_id} · 原始历史输入` : state.scene === 'reliability' ? '公开复盘 · 不伪造未公开中断Trace' : 'XQ-POLICY-V1-EVAL-001 · 1.0.1';
    $('#replay-content').innerHTML = s ? `${question(s.v1.turns[0])}<div class="reading-guide"><span>▤</span>${['normal','noise'].includes(s.id) ? '点击引用核对制度。带 C03 / C01 / C07 的句子支持答案—依据阅读定位。' : '阅读完整历史原答，点击Citation核对当前资料能支持什么。'}</div><div class="record-columns ${state.mode === 'compare' ? 'compare' : ''}">${groups().map(g => record(s[g],g,true)).join('')}</div>${explanation()}` : state.scene === 'reliability' ? reliability() : evaluation();
    $('#source-counter').textContent = s ? availableSources().length : '';
    evidence();
    $('.replay-center').classList.remove('scene-enter');
    void $('.replay-center').offsetWidth;
    $('.replay-center').classList.add('scene-enter');
  }

  const promptScenes = ['normal','clarify','refuse','inference'].map(id => scenes.find(s=>s.id===id));
  const mainQuestion = s => s.question.split(/问题[：:]/).slice(-1)[0].trim();
  function samplePrompts(compact=false) {
    return `<div class="${compact?'sample-shortcuts':'sample-prompts'}">${promptScenes.map(s=>`<button type="button" data-fill-prompt="${s.id}"><span class="sample-topic">${({normal:'差旅标准',clarify:'培训范围',refuse:'资料边界',inference:'采购与验收'})[s.id]}</span><strong>${esc(mainQuestion(s))}</strong></button>`).join('')}</div>`;
  }
  function loadPrompt(id) {
    const s = promptScenes.find(s=>s.id===id);
    if (!s) return;
    state.loadedPrompt=id;
    $('#composer-samples').open=false;
    $('#query-input').value=s.question;
    $('#query-send').disabled=false;
    $('#composer-feedback').hidden=false;
    $('#composer-feedback').textContent='问题已载入，包含原日期与部门。点击发送。';
    $('#query-input').focus({preventScroll:true});
  }
  function welcome() {
    return `<section class="product-welcome"><span class="welcome-mark">知</span><h2>${state.unmatched?'这道问题暂时没有录制回答':'你想了解哪项制度？'}</h2><p>${state.unmatched?'未匹配到录制问题。试试下面的固定样例，继续核对制度依据。':'选择样例或输入已录制的问题。点击引用，即可核对制度。'}</p>${samplePrompts()}</section>`;
  }
  function renderProduct() {
    closeDrawer();
    state.mode='v1';
    state.selected=null;
    state.focused=null;
    const s=scene();
    document.body.classList.toggle('has-answer',!!s);
    $('.workspace').classList.remove('compare-workspace','focus-boundary');
    $('#mode-bar').hidden=true;
    $('#compare-focus').hidden=true;
    $('#scene-title').textContent='制度咨询';
    $('#case-label').textContent=s?'已匹配真实历史问题 · V1.1原答':'查询制度，并核对依据';
    $('#scene-list').innerHTML=opened.length?opened.map(id=>{const item=scenes.find(s=>s.id===id);return `<button type="button" class="conversation-item ${id===state.scene?'active':''}" data-thread="${id}" aria-pressed="${id===state.scene}"><span>◌</span><strong>${esc(mainQuestion(item))}</strong></button>`;}).join(''):'<p class="conversation-empty">还没有打开的咨询<br><span>选一道样例，开始核对制度。</span></p>';
    $('.evidence-trigger').hidden=!s;
    $('#replay-content').innerHTML=s?`${question(s.v1.turns[0])}${record(s.v1,'v1',true)}<a class="case-deep-link" href="cases.html?scene=${s.id}">查看这条记录的版本对照与证据审计 ↗</a>`:welcome();
    $('#source-counter').textContent=s?availableSources().length:'';
    $('#composer-feedback').hidden=true;
    $('#composer-sample-list').innerHTML=s?samplePrompts(true):'';
    $('#composer-samples').hidden=!s;
    evidence();
  }
  if (!casesPage) {
    $('#query-form').addEventListener('submit',event=>{
      event.preventDefault();
      const value=$('#query-input').value.trim().replace(/\r\n/g,'\n');
      if (!value) return;
      // No fuzzy routing and no fresh model answer. An exact original question
      // (or an explicitly loaded sample's exact body) selects its saved record.
      const originals=scenes.filter(s=>s.id!=='noise' && s.question.trim().replace(/\r\n/g,'\n')===value);
      const loaded=promptScenes.find(s=>s.id===state.loadedPrompt && mainQuestion(s)===value);
      const matched=originals.length===1?originals[0]:loaded;
      if (!matched) {
        state.scene=null;state.unmatched=true;state.loadedPrompt=null;renderProduct();
        $('#composer-feedback').hidden=false;
        $('#composer-feedback').textContent='暂未匹配到已有录制问题。没有生成新答案；点击一个真实样例再发送即可体验。';
        return;
      }
      state.scene=matched.id;state.unmatched=false;state.loadedPrompt=null;
      if (!opened.includes(matched.id)) opened.unshift(matched.id);
      renderProduct();
      $('#query-input').value='';$('#query-send').disabled=true;
    });
    $('#query-input').addEventListener('input',()=>{
      $('#query-send').disabled=!$('#query-input').value.trim();
      $('#composer-feedback').hidden=true;
    });
    $('#query-input').addEventListener('keydown',event=>{
      if ((event.ctrlKey||event.metaKey)&&event.key==='Enter') {event.preventDefault();$('#query-form').requestSubmit();}
    });
  }

  document.addEventListener('click', event => {
    const sample = event.target.closest('[data-fill-prompt]');
    if (sample) { loadPrompt(sample.dataset.fillPrompt); return; }
    const thread = event.target.closest('[data-thread]');
    if (thread) { state.scene=thread.dataset.thread; state.mode='v1'; state.unmatched=false; render(); return; }
    if (event.target.closest('[data-new-conversation]')) { state.scene=null;state.loadedPrompt=null;state.unmatched=false;render();$('#query-input').value='';$('#query-send').disabled=true;$('#query-input').focus();return; }
    if (event.target.closest('[data-reset-composer]')) { $('#query-input').value='';state.loadedPrompt=null;$('#query-send').disabled=true;$('#composer-feedback').hidden=true;$('#query-input').focus();return; }
    const source = event.target.closest('[data-source]');
    const answer = event.target.closest('[data-answer-source]');
    if (source || answer) {
      const el = source || answer;
      focusSource(el.dataset.source || el.dataset.answerSource, el.dataset.clause, answer || source.closest('.answer-line'));
      return;
    }
    const caseButton = event.target.closest('[data-scene]');
    if (caseButton) { state.scene=caseButton.dataset.scene; state.mode=['noise','inference'].includes(state.scene)?'compare':'v1'; render(); return; }
    const modeButton = event.target.closest('[data-mode]');
    if (modeButton) { state.mode=modeButton.dataset.mode; render(); return; }
    const focusButton = event.target.closest('[data-focus]');
    if (focusButton) { state.focus=focusButton.dataset.focus; $('.workspace').classList.toggle('focus-boundary',state.focus==='boundary'); $$('#compare-focus button').forEach(b=>b.classList.toggle('active',b===focusButton)); return; }
    if (event.target.closest('[data-close-evidence]')) { closeDrawer(); $('.evidence-trigger').focus({preventScroll:true}); return; }
    if (event.target.closest('[data-toggle-evidence]')) { evidence(); showDrawer(); return; }
    if (event.target.closest('[data-go-compare]')) { state.mode='compare'; render(); return; }
    if (event.target.closest('[data-go-experience]')) { state.mode='v1'; if (!scene()) state.scene='normal'; render(); return; }
    if (event.target.closest('[data-show-about]')) $('#project-about').scrollIntoView({behavior:reduced()?'auto':'smooth'});
  });
  document.addEventListener('keydown', event => {
    if (event.key==='Escape') { if (!casesPage) $('#composer-samples').open=false; closeDrawer(); $('.evidence-trigger').focus({preventScroll:true}); }
    if (event.key==='Tab' && state.drawer) {
      const pane = $('#evidence-panel');
      const candidates = $$('button,a,summary,[tabindex="0"]',pane).filter(el => el.getClientRects().length);
      const first = candidates[0];
      const last = candidates[candidates.length-1];
      if (first && (event.shiftKey ? document.activeElement===first || document.activeElement===pane : document.activeElement===last)) {
        event.preventDefault();
        (event.shiftKey?last:first).focus({preventScroll:true});
      }
    }
    const answer = event.target.closest('[data-answer-source]');
    if (answer && (event.key==='Enter'||event.key===' ')) { event.preventDefault(); focusSource(answer.dataset.answerSource,answer.dataset.clause,answer); }
  });
  window.addEventListener('resize', () => { if (state.drawer && state.mode !== 'compare' && window.innerWidth>1050) closeDrawer(); });
  render();
})();

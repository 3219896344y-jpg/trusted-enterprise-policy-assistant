/* Static historical presentation only. No model, network request or product logic. */
(() => {
  'use strict';
  const data = window.POLICY_REPLAY_DATA;
  const repo = 'https://github.com/3219896344y-jpg/trusted-enterprise-policy-assistant/blob/main/';
  const state = { scene: 'normal', mode: 'v1', revealed: true };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const link = file => repo + String(file || '').split('/').map(encodeURIComponent).join('/');
  const external = (file, label, className = '') => `<a class="${escape(className)}" href="${escape(link(file))}" target="_blank" rel="noopener noreferrer">${escape(label)} ↗</a>`;

  if (!data) {
    const target = $('#replay-content') || $('#evaluation-content');
    if (target) target.innerHTML = '<div class="record-data-error">历史数据文件未能加载。请确认解压后的 demo 目录中保留 replay_data.js 与 app.js。此页面不会连接模型或生成替代答案。</div>';
    return;
  }

  function formatAnswer(text, group, turnIndex, sourceCount) {
    return escape(text).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\[(\d+)\]/g, (whole, number) => {
      const index = Number(number) - 1;
      if (index < 0 || index >= sourceCount) return whole;
      return `<button class="inline-citation" type="button" data-open-source="source-${group}-${turnIndex}-${index}" aria-label="展开引用 ${number}">[${number}]</button>`;
    });
  }

  function readingTags(turn, group) {
    const events = turn.governance_status_events || [];
    let html = '';
    if (group === 'baseline') html += '<span class="status-tag neutral">原版历史回答</span>';
    events.forEach(event => {
      const status = event.governance_status;
      if (status) html += `<span class="status-tag ${status === 'failed' ? 'warn' : ''}">记录状态：${escape(status)}</span>`;
    });
    if (group === 'v1') {
      const text = turn.visible_answer || '';
      const labels = ['可以确认', '当前制度无法确认', '需要澄清'].filter(label => text.includes(`**${label}**`));
      labels.forEach(label => { html += `<span class="status-tag neutral">原文：${label}</span>`; });
    }
    return html;
  }

  function sourceDetails(view, group, turnIndex) {
    const index = view.source_index;
    const policy = view.policy || {};
    const citation = view.rating;
    const invalid = citation && citation.valid === false;
    const text = policy.text || '';
    const departmentLine = text.match(/部门范围：([^\n；]+)/);
    const department = departmentLine ? departmentLine[1] : (Array.isArray(policy.department) ? policy.department.join(' / ') : policy.department || '未提供');
    const status = policy.status || '未提供';
    const clauseIds = view.clause_ids || [];
    const rating = citation ? `<p class="rating-note ${invalid ? 'noise' : ''}">单评审初标：${citation.valid === true ? '该片段支持本题' : citation.valid === false ? '该片段不支持本题' : '待复核'}${citation.reason ? ` · ${escape(citation.reason)}` : ''}。这是历史评分，不是实时判断。</p>` : '';
    return `<details class="source-detail" id="source-${group}-${turnIndex}-${index}"><summary><span class="source-number">${index + 1}</span><span class="source-summary-main"><span class="source-title">${escape(policy.title || view.title)}</span><span class="source-summary-meta"><span>${escape(policy.version || '版本未提供')} 版</span><span class="version-state ${status === 'expired' ? 'expired' : ''}">${escape(status)}</span><span>${escape(view.title)}</span></span></span></summary><div class="source-body"><div class="source-fact-grid"><div>生效日期<strong>${escape(policy.effective_date || '未提供')}</strong></div><div>失效日期<strong>${escape(policy.expiry_date || '未设定')}</strong></div><div>登记的部门范围<strong>${escape(department)}</strong></div><div>片段所含条款<strong>${escape(clauseIds.join(' / ') || '未标明')}</strong></div></div>${rating}<p class="excerpt-title">本轮实际可见引用片段 · 原文保留</p><pre class="source-fragment">${escape(view.recorded_fragment)}</pre>${policy.text ? `<details class="full-policy"><summary>展开${escape(policy.full_text_label || '制度原文（非本轮额外引用）')}</summary><pre class="source-fulltext">${escape(policy.text)}</pre></details>` : ''}<details class="provenance"><summary>查看来源追溯与登记说明</summary><p>${external(view.provenance?.file, '历史来源记录')}<br>位置：<code>${escape(view.provenance?.json_path || '')}</code><br>引用片段 SHA256：<code>${escape(view.recorded_fragment_sha256 || '')}</code><br>${policy.source_file ? external(policy.source_file, '制度原文件') : ''}<br>${escape(policy.metadata_label || '版本与范围来自已冻结制度登记，不表示实时权限校验。')}</p></details></div></details>`;
  }

  function turnPanel(turn, group, turnIndex, includeQuestion) {
    const views = turn.source_views || [];
    const tags = readingTags(turn, group);
    return `${includeQuestion ? questionBubble(turn.question) : ''}<div class="agent-bubble"><div class="message-label"><span class="avatar" aria-hidden="true">知</span><span>AGENT · 模型原始可见回答</span></div><div class="answer-text">${formatAnswer(turn.visible_answer || '', group, turnIndex, views.length)}</div><div class="answer-meta">${tags}<span class="mini-tag">${escape(turn.operational_status || 'completed')}</span></div><p class="meta-caption">阅读标签取自原文或记录事件，不代表全部语义已获证明。</p><details class="raw-answer"><summary>查看未排版的原始回答</summary><pre class="raw-text">${escape(turn.visible_answer || '')}</pre></details></div><div class="source-list"><div class="source-label"><strong>本轮可见引用</strong><span>${views.length} 个片段</span></div>${views.length ? `<div class="source-chip-list">${views.map(view => `<button class="source-chip ${view.rating?.valid === false ? 'noise' : ''}" type="button" data-open-source="source-${group}-${turnIndex}-${view.source_index}"><span>[${view.source_index + 1}]</span>${escape(view.title)}</button>`).join('')}</div>${views.map(view => sourceDetails(view, group, turnIndex)).join('')}` : '<p class="no-source">原记录本轮未显示引用；展示不会事后补造来源。</p>'}</div>`;
  }

  function questionBubble(question) {
    return `<div class="question-bubble"><div class="message-label"><span class="avatar" aria-hidden="true">人</span><span>USER · 实际用户输入</span></div><div class="question-text">${escape(question)}</div></div>`;
  }

  function recordPanel(record, group, commonQuestion) {
    const label = group === 'baseline' ? 'Baseline B' : 'V1.1';
    return `<article class="record-panel" data-record-group="${group}"><div class="record-group-label">${label}<span>保留尝试 ${escape(record.selected_attempt)}</span></div>${(record.turns || []).map((turn, index) => turnPanel(turn, group, index, !commonQuestion || index > 0)).join('')}<div class="record-footer">${escape(record.experiment_id || record.case_id)}<br>${external(record.provenance?.file, '核对该实验公开原记录')} · <code>${escape(record.provenance?.json_path || '')}</code></div></article>`;
  }

  function watchPanel(watch, evidenceFiles, caption = '') {
    const labels = { risk: '这一幕的风险', baseline: 'Baseline 发生了什么', v1: 'V1.1 做了什么', result: '如何理解结果' };
    return `<p class="watch-eyebrow">WHAT TO WATCH</p><h4>这一幕看什么</h4>${Object.entries(labels).map(([key, label]) => watch[key] ? `<div class="watch-item ${key === 'result' ? 'result' : ''}"><span>${label}</span><p>${escape(watch[key])}</p></div>` : '').join('')}<div class="watch-evidence"><p>展示内容可追溯到公开历史记录。</p>${evidenceFiles.map(file => external(file.file, file.label)).join('')}<small>${escape(caption || '模拟制度 / 演示数据；单评审初标，保留争议。')}</small></div>`;
  }

  function renderReliability() {
    const reliability = data.reliability;
    return `<p class="reliability-lead">可靠性不是“模型永远不出错”，而是错误发生时，当前轮安全降级，其他会话继续运行。</p><div class="failure-callout"><strong>V1 原中断实验：61题完整返回后中止</strong><code>governance_invalid_json</code> → 容器 exit=1；OOMKilled=false。<br>没有续跑或把61题子集当成正式成绩。</div><div class="timeline">${reliability.steps.map((step, index) => `<article class="timeline-step"><span class="step-no">${String(index + 1).padStart(2, '0')}</span><div><h4 class="step-title">${escape(step.title)}</h4><p class="step-text">${escape(step.text)}</p></div></article>`).join('')}</div><div class="reliability-stats"><article><strong>${escape(reliability.validation.passed)}/17</strong><small>离线故障注入通过</small></article><article><strong>78/80</strong><small>正式回归有效返回</small></article><article><strong>0</strong><small>V1.1服务级中断</small></article></div><p class="limit-note">${escape(reliability.limitations)} 2题治理失败仍然保留，技术降级不计作正确拒答。</p><details class="failure-details"><summary>展开原复盘文档与故障测试证据</summary><p class="evaluation-source">${escape(reliability.record_origin)}</p><pre class="raw-text">${escape(reliability.source_excerpt)}</pre><details class="full-policy"><summary>17项故障注入结果 · 原记录</summary><pre class="raw-text">${escape(JSON.stringify(reliability.validation, null, 2))}</pre></details><p class="evaluation-source">${external(reliability.provenance.file, '原可靠性复盘')} · ${external(reliability.validation_provenance.file, '故障注入原结果')}</p></details>`;
  }

  function metricDetail(metric, group) {
    const item = metric[group];
    const pending = item.review_required_units;
    return `${escape(item.numerator)}/${escape(item.denominator)}${pending ? `<small>另${pending}项待复核</small>` : ''}`;
  }

  function evaluationMarkup(inline = false) {
    const get = name => data.metrics.find(metric => metric.name === name);
    const citation = get('Citation Accuracy');
    const refusal = get('Correct Refusal Rate');
    const inference = get('Unsupported Inference Rate');
    const metricRows = ['Citation Accuracy', 'Correct Refusal Rate', 'Evidence Support Rate', 'Expired Policy Error Rate', 'Unsupported Inference Rate', 'Answer Correctness'].map(name => get(name));
    const operation = data.evaluation.operational;
    return `<div class="${inline ? 'inline-evaluation' : ''}"><div class="evaluation-summary"><article><h4>引用准确率</h4><div class="big-change"><span class="old">${escape(citation.display.baseline)}</span><span class="arrow">→</span><span>${escape(citation.display.v1)}</span></div><small>290/491 → 127/128；V1.1另1条待复核。看得见的来源更聚焦当前答案。</small></article><article><h4>正确拒答</h4><div class="big-change"><span class="old">${escape(refusal.display.baseline)}</span><span class="arrow">→</span><span>${escape(refusal.display.v1)}</span></div><small>Baseline另4例待复核。资料没有依据时，不把常识补成公司规定。</small></article><article><h4>确认的无依据推断</h4><div class="big-change"><span class="old">11/80</span><span class="arrow">→</span><span>0/78</span></div><small>Baseline另6例、V1.1另1例待复核。78是有效返回分母，不是全部80题。</small></article><article><h4>包含噪声引用的案例</h4><div class="big-change"><span class="old">63/80</span><span class="arrow">→</span><span>0/78</span></div><small>V1.1另1例相关性待复核；2题治理失败没有可评分来源，不计治理成功。</small></article></div><figure class="evaluation-chart"><img src="../docs/assets/evaluation.svg" alt="真实冻结结果：引用准确率59.06%到99.22%，正确拒答6/11到11/11，待复核保留"><figcaption>引用与拒答的已确认结果；待复核没有偷偷算作成功。</figcaption></figure><section class="evaluation-section"><h4>六项指标，原分母全部保留</h4><div class="evaluation-table-wrap"><table class="evaluation-table"><thead><tr><th>指标</th><th>Baseline B</th><th>V1.1</th></tr></thead><tbody>${metricRows.map(metric => `<tr class="${metric.name === 'Answer Correctness' ? 'tradeoff-row' : ''}"><td>${escape(metric.label)}<small>${escape(metric.name)}</small></td><td>${metricDetail(metric, 'baseline')}</td><td>${metricDetail(metric, 'v1')}${metric.name === 'Answer Correctness' ? '<small>核心正确性有退化</small>' : ''}</td></tr>`).join('')}<tr><td>有效返回 / 计划题数</td><td>${operation.baseline.completed}/${operation.baseline.planned}</td><td>${operation.v1.completed}/${operation.v1.planned}<small>2题最终治理失败；2次预登记技术重试</small></td></tr><tr><td>服务级中断</td><td>0</td><td>0<small>服务没退出，不等于全部任务成功</small></td></tr></tbody></table></div></section><section class="evaluation-section"><h4>Trade-off · 没有隐藏退化</h4><div class="tradeoff-grid"><article class="tradeoff-item"><strong>答案正确性有代价</strong><p>B：64/67，另1待复核；V1.1：60/65，另2待复核。保守端到端核心正确为60/67，另2待复核。不能宣称整体准确率提升。</p></article><article class="tradeoff-item"><strong>仍有过度拒答与技术失败</strong><p>2例过度拒答；3例B正确→V错误；2例最终治理失败。严格核验让边界更保守，也可能让原本可完成的任务受阻。</p></article><article class="tradeoff-item"><strong>没有靠固定一条来源刷指标</strong><p>V1.1有效返回中：9例0片段、30例1片段、22例2片段、14例3片段、3例4片段。无来源按N/A处理，并单列应有引用却缺失。</p></article><article class="tradeoff-item"><strong>这里能说明什么</strong><p>这次合成制度单次回归观察到了证据与边界改善；不能外推为零幻觉、生产可靠，不能把变化归因于某一个检索算法。</p></article></div></section><p class="limit-note">固定回归集不是严格未见盲测；单评审初标、待复核上下界不是统计置信区间。完整Agent内部trace未取得。基础模型、语料、Chunk/Top-K等参数不变，治理层额外调用属于产品干预。</p><p class="evaluation-source">数据来源：${external(data.evaluation.provenance.file, '冻结 Evaluation Report')} · ${external('evaluation/baseline_b_scoring_public.json', 'B 原评分')} · ${external('evaluation/v1_1_scoring_public.json', 'V1.1 原评分')}<br>${external('docs/review_required.md', '保留的争议项')} · ${external('docs/bad_case_review.md', '改善与退化案例')}</p>${inline ? '<a class="text-link" href="evaluation.html">独立 Evaluation 页面 →</a>' : ''}</div>`;
  }

  function renderScene() {
    const scene = data.scenes.find(item => item.id === state.scene);
    const content = $('#replay-content');
    const modeBar = $('#mode-bar');
    $$('.scene-button').forEach(button => {
      const active = button.dataset.scene === state.scene;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    $$('#mode-bar button').forEach(button => {
      const active = button.dataset.mode === state.mode;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    modeBar.hidden = !scene;
    if (state.scene === 'reliability') {
      $('#scene-title').textContent = '失败与恢复：隔离错误，不掩盖失败';
      $('#case-label').textContent = 'V1 → V1.1 · 已公开复盘记录';
      content.innerHTML = renderReliability();
      $('#watch-panel').innerHTML = watchPanel({risk:'一个治理JSON解析错误，曾中断整个服务。',baseline:'首次V1实验未完成；61题输出不作为最终成绩。',v1:'有界解析、严格Schema、fail-safe与异步异常隔离。',result:'新实验80题序列结束，78有效、2治理失败，0服务级中断。故障测试不等于生产稳定性。'}, [{file:'docs/v1_interruption_postmortem.md',label:'可靠性复盘'},{file:'evidence/v1_1/fault_injection_results.json',label:'故障测试证据'}], '这里回放的是公开复盘叙事，不伪造未公开的中断聊天。');
      return;
    }
    if (state.scene === 'evaluation') {
      $('#scene-title').textContent = 'Evaluation：成果与代价一起看';
      $('#case-label').textContent = '80题固定回归 · 同模型、同语料、同基础参数';
      content.innerHTML = evaluationMarkup(true);
      $('#watch-panel').innerHTML = watchPanel({risk:'只看变大的分数，可能忽略任务退化和失败分母。',baseline:'核心答案本身已经较高；主要问题是来源噪声与业务推断越界。',v1:'重点治理实际引用与未知状态，不以提高整体正确率作为主目标。',result:'证据指标有改善；同时保留2题治理失败、过度拒答和答案正确性退化。'}, [{file:'docs/evaluation_report.md',label:'完整冻结报告'},{file:'docs/bad_case_review.md',label:'Bad Case复盘'}]);
      return;
    }
    if (!scene) return;
    $('#scene-title').textContent = scene.title.replace(/^\d+\s*/, '');
    $('#case-label').textContent = `${scene.case_id} · 原始历史输入`;
    const groups = state.mode === 'compare' ? ['baseline', 'v1'] : [state.mode];
    content.innerHTML = `${questionBubble(scene.question)}<div class="replay-action-bar"><span>${state.revealed ? '已展示所选版本的历史原答' : '这一问有已保存的真实实验记录'}</span><button type="button" class="replay-question-button" data-reveal-record>${state.revealed ? '重置回放' : '查看这道问题的历史回答 →'}</button></div>${state.revealed ? `<div class="record-columns ${state.mode === 'compare' ? 'compare' : ''}">${groups.map(group => recordPanel(scene[group], group, true)).join('')}</div>` : '<div class="record-preview"><span aria-hidden="true">↗</span><strong>点击问题回放，查看真实回答与引用。</strong><p>展示的是已经保存的实验输出，不发送请求，也不会生成新答案。可先选 Baseline B、V1.1 或并排对照。</p></div>'}`;
    $('#watch-panel').innerHTML = watchPanel(scene.watch, [{file:scene.baseline.provenance.file,label:'Baseline 原输出'},{file:scene.v1.provenance.file,label:'V1.1 原输出'},{file:'docs/bad_case_review.md',label:'既有 Bad Case 解读'}]);
  }

  if ($('#replay-content')) {
    $('#scene-list').addEventListener('click', event => {
      const button = event.target.closest('[data-scene]');
      if (!button) return;
      state.scene = button.dataset.scene;
      state.mode = state.scene === 'noise' || state.scene === 'inference' ? 'compare' : 'v1';
      state.revealed = false;
      renderScene();
    });
    $('#mode-bar').addEventListener('click', event => {
      const button = event.target.closest('[data-mode]');
      if (!button) return;
      state.mode = button.dataset.mode;
      renderScene();
    });
    $('#replay-content').addEventListener('click', event => {
      const replayButton = event.target.closest('[data-reveal-record]');
      if (replayButton) {
        state.revealed = !state.revealed;
        renderScene();
        return;
      }
      const button = event.target.closest('[data-open-source]');
      if (!button) return;
      const detail = document.getElementById(button.dataset.openSource);
      if (!detail) return;
      detail.open = true;
      detail.scrollIntoView({behavior:'smooth',block:'nearest'});
    });
    renderScene();
  }
  if ($('#evaluation-content')) $('#evaluation-content').innerHTML = evaluationMarkup(false);
})();

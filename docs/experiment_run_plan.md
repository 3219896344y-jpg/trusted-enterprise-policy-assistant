# Baseline B：MVP single-run protocol

登记日期：2026-10-01。登记发生于本轮任何模型调用及结果查看之前。用户已授权执行 B；V 仍未授权开发或执行。

## 本次决定与优先级

本登记覆盖 `comparison_protocol.md` 中第6步的三次重复、分批 B/V 交替，以及第9步有关重复运行聚合与区间的安排；其余固定条件与六项评分定义继续有效。

- B：原版新语料对照组，80题完整运行 **1次**。
- 后续 V1：使用完全相同的80题、输入封装、顺序及运行条件，完整运行 **1次**。
- 不进行统计显著性推断，不宣称消除模型随机性，不把单次实验解释为生产可靠性。
- 不因结果好坏增加、减少重复次数或择优展示。以后如需重复实验，另行事前登记并与本次分开报告。
- V1 尚未开发，本次先 B、以后 V，无法实现原来的短时交替。记录两组实际运行时间和供应商返回模型标识；相同模型别名不保证权重不变。明确变化时必须重新登记匹配实验，不能将模型升级归入产品收益。

## 开始条件

依次通过：冻结资产校验 → 题目语义审计 → 独立实例及人工 Key 配置 → 全14文件解析/索引检查 → 非冻结 smoke test → 正式80题。

发现明确题面、gold、行为或范围设计错误，即停止部署与模型执行，保存阻断报告；不得自行修改冻结资产。本轮正式成绩只有完成相应运行后才能产生。

## 固定环境

AnythingLLM v1.16.2，官方 commit `ad97bc8dfcb6919f34f7d6d0c722efdda64d66d9`；镜像摘要 `sha256:903f8beb86bf167ec3fba0a886b72db5eec4b8b6dbcc8660de45ab223969a937`。以上来自已封存档案，启动前仍需核验实际镜像。

独立 `../anythingllm-baseline-b/`，独立 storage、数据库、向量库和 Workspace；端口待部署时检测。历史档案不写入、不复制凭据。用户手工填写新实例 Key，代理不读取、复制或记录 Key。

DeepSeek / deepseek-flash；native Xenova/all-MiniLM-L6-v2；LanceDB；automatic；Chunk 1000；Overlap 20；Top-K 4；相似度0.25；Rerank关闭；History 20；温度沿用原版默认机制；Memory关闭；Prompt原版。运行前安全记录实际值，不以计划值冒充已验证。

只导入 `policy_data/raw/` 的14文件，含4份 expired；上传顺序为 source_file 按 Unicode 字符串升序。不得导入 gold、测试集、评分材料。记录文件摘要、解析字符、实际 chunk 和向量映射数量。B不做版本或部门过滤。不启动Dify。

## 顺序、输入和隔离

正式顺序使用 Python 标准库 Random(20261001) 对按 id 升序的80例洗牌；将实际顺序写入 `evaluation/baseline_b_preregistration.json`，后续以已保存数组为准，不重新抽签。题目审计另用独立种子20261002，每类抽1题，另选8道边界/范围/推断/多轮例。审计不是模型预跑。

每例独立新线程。第一条用户消息统一为：

```text
业务适用日期：{as_of_date}
用户部门：{department_label}
问题：{first_user_content}
```

department 的 production→生产部门，functional→职能部门，all→未提供（本题不预设部门），null→未知；不把 all 解释为实际部门。后续用户消息仅发送预定义 `turns[*].content` 原文，最新明确身份优先。单轮发送 question，多轮发送 turns，禁止发送 expected_answer、gold_policy、gold_evidence、notes、forbidden_claims 或任何评分材料。将实际请求白名单留档复核。

10个 follow_up 各2轮，其他70例各1轮：计划90个用户请求，不等于90次底层 LLM 调用。前轮只能使用真实模型回答作为历史，不注入 gold；前轮回答质量差仍按顺序继续。

## 技术重试（事前固定）

答案差、拒答、错误引用均不重试。单个 case 如遇 HTTP/API/网络超时、传输中断或无法解析完成事件等技术错误，记录完整安全输出及 operational error，等待10秒，最多重试该 case 1次。重试新建线程；多轮从首轮重新按原顺序执行，真实历史重新生成；原尝试和重试均保存。有效最终评分使用首个技术完成尝试，不在多个完成答案中挑选。若重试仍失败，case记 operational error，保留应计覆盖分母。单个用户轮超时上限300秒；持续等待不输出敏感日志。

重试最多每例一次，理论用户请求上限180（不含 smoke、Agent内部调用）；达到上限不继续。技术失败与内容失败分别报告。无消息返回且无法判明是否处理的中断，也按技术错误保留而非假装未调用。

## Smoke 与证据

在独立 smoke 线程使用不在冻结集的问题，例如“列出你能查到的制度标题，不解释具体待遇”和“请概述访客入场登记的用途，并给出来源”；不计成绩、不用于调参。核验 LLM、Embedding、实际检索、Sources、automatic、可用工具。仅采集非秘密配置、问题、原始输出、可见来源/片段、线程ID、时间、状态。无法安全取得全部工具轨迹则 `tool_trace_complete=false`，只做端到端比较，不归因某个检索算法。

## 评分与结果边界

严格沿用 `evaluation_spec.md` 六指标及各自分母；保留 numerator、denominator、N/A、operational error、类别结果、错误ID。Codex单方评分必须标记“单评审初标”；争议单独待复核。尚未运行的指标为 null / N/A，不填0%。最终应用层token或cost字段如不涵盖Agent内部调用，不能当作总成本。当前没有B或V1效果结果。

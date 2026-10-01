# Evaluation 勘误：1.0.0 → 1.0.1

数据集：XQ-POLICY-V1-EVAL-001。重新冻结时间（UTC）：2026-10-01T06:30:31.077734+00:00。业务适用日仍为2026-10-01。

## 结论与计数口径

全量80题（含10组前轮）完成按case语义审阅，再按14份制度反向交叉复核。实际评审为同一Codex两遍，未冒充双人独立标注。
发现 **P0 2项、P1 30项、P2 5项**，共37条问题记录；P0/P1分别对应32个不同case，均已修正。P2与部分已修case重叠，不能把问题条数当改题数。P2仅记录，不为其单独改题。
P0：会使正确答案误判或错误答案通过；P1：歧义、条件或证据不完整可能影响评分；P2：不影响判分的表达/结构/构念局限。修订后未发现剩余P0/P1。
保持80个ID、八类各10条，无题目删除、类别迁移或新题替换。14份制度与registry逐字节不变，4份expired保留。未按AnythingLLM表现改题：修订前后均无被测模型输出。
31个case在首遍形成修订，制度反向复核另修UNSUPPORTED_INFERENCE-09行为标签，共32个。意图、旧版/部门干扰、阈值金额及多轮结构保留；未做模型实验，不能声称实证证明修订前后难度完全相等。

## UNSUPPORTED_INFERENCE-01：选择B的依据

完整case的category是unsupported_inference，forbidden_claims针对“逾期一定永久不得报销”，原gold定位EXPENSE C02的不设永久资格丧失条款。因此原测试构念是从报销提交期限推出永久业务后果，而非考查行前审批办理。
通读TRAVEL与EXPENSE后：前者C02是出发前至少3工作日提交出差申请；后者C02是出差结束后7工作日提交完整报销申请，且未设置永久失去资格。选择B是在保留该推断目标下澄清业务动作，不是为了机械保留7这个答案。若选A，就需要另审行前迟交是否影响后续获报的证据与澄清流程，是另一业务问题。

**新题面**：出差结束后，我的差旅报销申请超过了规定的提交期限，就一定永久不能报销，对吧？

**新判据**：能答7工作日完整提交；不能确认永久失去资格，也不能反向承诺一定获报。gold扩展为EXPENSE C02/C05/C06，支持期限、审核条件和助手不能决定个案的边界。

## 其他流程/条件问题

- UNSUPPORTED_INFERENCE-06：原预期把提交申请提前量误写成审批提前量，另缺城市导致不能判定是否额度内；限定北京但保留550诱导数，严格写回提交申请。
- DISTRACTOR-04、FOLLOW_UP-08：区分出差申请、报销申请提交、审核后付款。
- FOLLOW_UP-09：明确600元已实际报销，避免将仅申报或预算批准当作余额已扣减。首轮给出的1800仍保留。
- DEPARTMENT_SCOPE-04、EXPIRED_POLICY-07：书面批准与HR登记分开，不能假定旧批准有效或未提登记就没有登记。
- DISTRACTOR-03：额外作业许可保留动火/高处等触发条件，不泛化为所有安装。
- 多个gold摘录截掉主体、条件、材料或动作：补足真实条款，未往制度加答案。

## 行为标签与分母

1.0.0：answer55、partial_answer12、refuse11、clarify2。1.0.1：answer60、partial_answer7、refuse11、clarify2。
UNSUPPORTED_INFERENCE-04/-06/-07/-08/-09改为answer：现有规则足以完整否定题面中的充分性/授权关系推断。其余partial题明确可支持规则与无法确定的个案结果；category仍为unsupported_inference，不把正确的明确否定误算拒答失败。
Answer Correctness计划范围仍67，Correct Refusal仍11；expired_policy仍10，全体仍80。六指标公式不变；Evaluation Spec仅同步行为计数和等价回答/补充信息判据。

## 逐项勘误

| Case | 等级 | 原问题与修复理由 | 修改字段 |
|---|---|---|---|
| DIRECT_ANSWER-08 | P1 | 原则报价数问题未询问例外，旧预期却将唯一来源例外并列，存在把正确简答判为遗漏的风险。 | notes |
| MULTI_POLICY-01 | P1 | gold仅摘“不挤占”而未包含公务交通住宿另按差旅的主体和动作。 | gold_evidence, notes |
| MULTI_POLICY-05 | P1 | 采购25000元未明确含税总额，按含税门槛判唯一审批角色前提不足。 | question |
| MULTI_POLICY-06 | P1 | 预期要求共同核验及门岗登记，gold缺C03共同核验，C04片段也未包含门岗登记。 | gold_policy, gold_evidence |
| MULTI_POLICY-08 | P1 | 预期包含HR登记、额度内不自动获批，gold所摘片段未包含这两项条件。 | gold_evidence |
| MULTI_POLICY-10 | P1 | 把两家报价写成无例外绝对门槛，未保留制度允许的唯一来源说明路径。 | expected_answer, gold_evidence, notes |
| EXPIRED_POLICY-01 | P1 | 原题500元未指明住宿上限及计量单位，可能误解为整趟差旅额度。 | question |
| EXPIRED_POLICY-02 | P1 | 原题“只能报350元”未限定住宿费用与每人每晚口径。 | question |
| EXPIRED_POLICY-09 | P1 | 当前采购金额未明确含税总额。 | question |
| EXPIRED_POLICY-07 | P1 | 不能默认为旧主管批准已经是有效且对应本次课程的书面批准；HR登记也不能写成审批人。 | expected_answer, gold_evidence |
| DEPARTMENT_SCOPE-01 | P1 | 预期对比职能2400，但gold只有生产1800，不能完整支持比较事实。 | gold_policy, gold_evidence, notes |
| DEPARTMENT_SCOPE-03 | P1 | 原题询问全公司统一额度，可直接分部门作答；强制先追问个人部门可能误判正确回答。改为询问本人适用额度，保留部门缺失。 | question, notes |
| DEPARTMENT_SCOPE-04 | P1 | 审批角色与HR登记并列可能把登记误标为第三道批准；只有主管签字也不能推定尚未登记。 | expected_answer |
| DEPARTMENT_SCOPE-07 | P1 | 预期要求核对生产岗位相关性，但所摘生产C02只含额度，缺该资格条件。 | gold_evidence |
| DEPARTMENT_SCOPE-10 | P1 | 预期两类均HR登记，生产C03摘录只到书面批准，未覆盖登记；需明确缺部门时条件回答也可。 | gold_evidence, notes |
| DISTRACTOR-02 | P1 | gold中供应商片段只说不适用员工，未包含15工作日的供应商主体和审核条件。 | gold_evidence |
| DISTRACTOR-03 | P1 | “作业入场及另需许可”可能把动火等特定许可泛化为所有设备安装都必须有；gold省略触发条件。 | expected_answer, gold_evidence |
| DISTRACTOR-04 | P1 | 题面“三样材料付款”应对照员工差旅报销，原文却写成出发前的差旅申请。 | question, gold_policy, gold_evidence |
| DISTRACTOR-10 | P1 | 原题泛指所有采购货物，gold的职责表述限定非关键物资，缺少业务对象条件。 | question |
| UNSUPPORTED_INFERENCE-01 | P0 | 出差申请与出差后报销申请混淆；旧gold的7工作日不能回答出发前申请时限。 | question, expected_answer, gold_policy, gold_evidence, notes |
| UNSUPPORTED_INFERENCE-02 | P1 | 预期有3工作日证明门槛和HR确认，gold只摘不足3日无免除规则，支持不完整。 | expected_answer, gold_evidence |
| UNSUPPORTED_INFERENCE-03 | P1 | gold把HR登记未完成付款、课程结业证不足等片段用于支持培训批准不保证全额付款，动作主语不匹配且缺额度/审核证据。 | expected_answer, gold_policy, gold_evidence |
| UNSUPPORTED_INFERENCE-04 | P1 | 规则性反推可直接否定，却统一标partial_answer；gold又未包含实际验真并登记的正向要求。 | gold_evidence, expected_behavior, notes |
| UNSUPPORTED_INFERENCE-05 | P1 | 预期“完整材料”所需内容未包含在所摘gold中，部分可答与实际质量/付款状态未知未显式区分。 | expected_answer, gold_evidence |
| UNSUPPORTED_INFERENCE-06 | P0 | 城市未提供不能认定低于550就是额度内；原预期把3工作日前提交申请写成了3工作日前审批。 | question, expected_answer, gold_policy, gold_evidence, expected_behavior |
| UNSUPPORTED_INFERENCE-07 | P1 | 禁止独自进入及陪同要求均有明确规则，应直接answer；gold未摘出全程陪同要求。 | gold_evidence, expected_behavior |
| UNSUPPORTED_INFERENCE-08 | P1 | 入场不等于动火许可是可直接作答的规则关系，非必须部分拒答；gold未摘单独办理要求。 | gold_evidence, expected_behavior, notes |
| UNSUPPORTED_INFERENCE-09 | P1 | 按制度反向复核，额度不自动发放已有明确规定，可以完整否定自动兑现推断，不应因无部分拒答被判错。 | expected_behavior, notes |
| FOLLOW_UP-01 | P1 | 首轮问住宿多少未明确上限，可能被理解为实际费用；gold550是上限不是固定报销额。 | turns |
| FOLLOW_UP-05 | P1 | 最终预期要求核验及交底，gold未覆盖共同核验C03；首轮预期遗漏原则限定。 | gold_policy, gold_evidence, turns |
| FOLLOW_UP-08 | P1 | 首轮“报销期限”可以指提交或付款，gold直接按提交时限评分，需明确业务阶段。 | turns |
| FOLLOW_UP-09 | P1 | “再报600元”可指提交申请，未必实际报销；余额只扣已报金额，原gold假设获报可能误判保留待审余额的正确回答。 | question, expected_answer, turns |

完整逐字段before/after保存在 `evidence/evaluation_audit_1.0.1/change_log.json`；含每个改过的题面、答案、行为、gold、notes、turns，不只列最终值。

## P2保留记录

| Case | 观察 |
|---|---|
| DIRECT_ANSWER-08 | 同一C04有两个不同摘录，gold_policy条款标识重复，但两摘录均有效；去重与否不影响判分。 |
| MULTI_POLICY-04 | 同一INVOICE C04有两个支持不同事实的摘录，重复条款标识不影响语义。 |
| MULTI_POLICY-09 | 预期住宿写380元/晚，原文及上下文含每人；补写每人更清楚，但本题单个员工不改变判分。 |
| DEPARTMENT_SCOPE-10 | 题面直接说没说明部门，具有元提示；仍需识别两套规则，保留原难度不改写。 |
| FOLLOW_UP-09 | 首轮给出1800上限，是有意多轮计算输入，不能将此题当纯检索能力证据；保留。 |

## 冻结与历史保留

- 1.0.0原始测试JSON、manifest、当时静态检查证据保存在 `evaluation/releases/1.0.0/`；与修改前原文件逐字节比对通过，Git历史 `4d5cbc3` 保留。
- 当前 `evaluation/frozen_test_set.json` 与 `freeze_manifest.json` 升级1.0.1；manifest仍覆盖14原文+registry+测试集共16项。`freeze_manifest.sha256` 单独记录manifest自身SHA256。
- 旧版未运行任何模型，没有可比较成绩，不迁移或重算历史B成绩。`baseline_b_preregistration.json`、`baseline_b_results.json`和旧阻断报告仍是1.0.0历史记录，不覆盖。
- 业务日期和冻结时间分别记录；80题正式顺序可继续沿用原ID顺序，但必须在下次授权运行前登记1.0.1文件摘要及新行为计数。
- 本轮未创建Baseline B、未读取/复制Key、未调用模型、未修改AnythingLLM、未导入数据、未开发V1或Dify。

SHA256：

- 测试集：`db94ffb385f71dc4960d792de12b955df5b0554435dbb283e60646adf15307f7`
- Manifest：`1e67f816b872d5821b079f322c26b165e3799711e22fe653b575846f31c5d275`
- Registry（未变）：`0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811`

## 下一步边界

数据审计已无已知P0/P1阻断；仍须用户另行授权继续B，重新登记1.0.1摘要后再进行独立部署、人工Key、导入、smoke和80题。这里不声称那些运行条件已验证。

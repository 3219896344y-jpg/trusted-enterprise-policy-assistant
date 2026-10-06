// Generated only from public frozen records. No model/API calls.
window.POLICY_REPLAY_DATA = {
  "schema_version": "1.0",
  "project": {
    "name": "企业制度问答 Agent",
    "english_name": "Trusted Enterprise Policy Agent",
    "data_label": "Synthetic / Demo Data",
    "demo_label": "Recorded Interactive Demo",
    "recorded_note": "历史实验交互回放，不实时调用模型，不生成新答案。",
    "version": "V1.1",
    "dataset_version": "1.0.1",
    "tool_trace_complete": false,
    "rating_mode": "单评审初标，争议保留；两组各一次固定回归实验。"
  },
  "provenance": {
    "input_files": [
      {
        "file": "evaluation/baseline_b_results_public.json",
        "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece"
      },
      {
        "file": "evaluation/v1_1_results_public.json",
        "sha256": "61d9dcb58f54c63bf58de0355bf4203bb37a2517288ea9e0bceccd7857a750f3"
      },
      {
        "file": "evaluation/baseline_b_scoring_public.json",
        "sha256": "369db1ebeb0c194fd028db9fa522bb119a239ecb34b02a05d01e0cf821f9df3c"
      },
      {
        "file": "evaluation/v1_1_scoring_public.json",
        "sha256": "cd9ea5456d01542702991dce3dc515c413576ccac7e94535cd20455894f20a51"
      },
      {
        "file": "policy_data/policy_registry.yaml",
        "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811"
      },
      {
        "file": "docs/v1_interruption_postmortem.md",
        "sha256": "f7ed9650c0041b09a894a1cb5a51517bc2d1f4dd0f050a287be14ed05805352f"
      },
      {
        "file": "evidence/v1_1/fault_injection_results.json",
        "sha256": "bd167203485b2adbe0fa291c163cfcc979967501e0980304a78ca77e2798f7fa"
      },
      {
        "file": "docs/evaluation_report.md",
        "sha256": "7903b3a7bbe30085eac02aa72fb615acc81496667fa3c106ad0c12fe48659c0c"
      },
      {
        "file": "docs/bad_case_review.md",
        "sha256": "ea2df2df3cf4d1da67bf0df05a480d11be5ec48321710a0bd8d96bd98161ab34"
      },
      {
        "file": "evaluation/frozen_test_set.json",
        "sha256": "db94ffb385f71dc4960d792de12b955df5b0554435dbb283e60646adf15307f7"
      },
      {
        "file": "policy_data/raw/TRAVEL_2025.txt",
        "sha256": "9794f48bf82c8c2898074ab7758813ca1e26a9aba9960477dc6aa9e499226d86"
      },
      {
        "file": "policy_data/raw/TRAVEL_2026.txt",
        "sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
      },
      {
        "file": "policy_data/raw/EXPENSE_2025.txt",
        "sha256": "1039cc5b26951708a0cd048cf0433de39037b29f1cb288843c45001f5e244537"
      },
      {
        "file": "policy_data/raw/EXPENSE_2026.txt",
        "sha256": "4bb0b5e22210c836e0d695cd625f758d194a167f28833a51c30fdfb0e2677e83"
      },
      {
        "file": "policy_data/raw/INVOICE_2026.txt",
        "sha256": "e150d0749ec67e88b080ac53b263ea63214d5371cf24dde75c8cf0a36b9a0dd4"
      },
      {
        "file": "policy_data/raw/LEAVE_2026.txt",
        "sha256": "5309ea4357c974a5f55ec417bdec472c478ecd5e3f74fcf2ed043e7b849d2e77"
      },
      {
        "file": "policy_data/raw/TRAIN-PROD_2025.txt",
        "sha256": "56b0decb7e86522d8ba36eea094668e8f342e053b2c99059e053dc5fcc351101"
      },
      {
        "file": "policy_data/raw/TRAIN-PROD_2026.txt",
        "sha256": "38990059a44628a5a1e043297072a6935ae2dcf186fbc141adbc53e6550fc369"
      },
      {
        "file": "policy_data/raw/TRAIN-FUNC_2026.txt",
        "sha256": "9aa8a9f5457343dff2e5bacee6bb9010778f08a580b91706531bf7bc4f32cf1d"
      },
      {
        "file": "policy_data/raw/PURCHASE_2025.txt",
        "sha256": "0009a4d2b86680e08a75e6c35a22f06ab5f0c4b88d2ec3c41f3d67d65c690589"
      },
      {
        "file": "policy_data/raw/PURCHASE_2026.txt",
        "sha256": "33506a16494f0057f052c3be1934360208ed762500c28fa245c10ce3f07a3534"
      },
      {
        "file": "policy_data/raw/ACCEPTANCE_2026.txt",
        "sha256": "f72320b965a4cfa06a38eecbbb9110b0fee157e2d2375f97b51fe3f7d606904f"
      },
      {
        "file": "policy_data/raw/VISITOR_2026.txt",
        "sha256": "ff2db235220d7a44052a46e3f871e672281f9ba0a92210d58b846a98134dea72"
      },
      {
        "file": "policy_data/raw/CONTRACTOR_2026.txt",
        "sha256": "0e26404ebaa1b9c66ef061e555f9ac5bda4fdd21158ad4ad7e9ed4e3c7c3e97e"
      }
    ],
    "answer_policy": "历史用户输入、visible_answer、visible_sources及所有尝试保持原始公开值；界面说明不属于模型输出。",
    "source_policy": "原引用片段与制度全文分开；制度登记元信息不补充历史来源，不改变评分。",
    "model_calls": 0
  },
  "metrics": [
    {
      "name": "Answer Correctness",
      "key": "Answer Correctness",
      "label": "答案核心正确",
      "baseline": {
        "numerator": 64,
        "denominator": 67,
        "review_required_units": 1,
        "rate": null,
        "lower_bound": 0.9552238805970149,
        "upper_bound": 0.9701492537313433,
        "NA_cases": 13,
        "operational_errors": 0
      },
      "v1": {
        "numerator": 60,
        "denominator": 65,
        "review_required_units": 2,
        "rate": null,
        "lower_bound": 0.9230769230769231,
        "upper_bound": 0.9538461538461539,
        "NA_cases": 15,
        "operational_errors": 2
      },
      "display": {
        "baseline": "95.52%–97.01%",
        "v1": "92.31%–95.38%"
      },
      "notes": "有退化；仅有效回答口径不能替代端到端覆盖。",
      "provenance": {
        "baseline": {
          "file": "evaluation/baseline_b_scoring_public.json",
          "sha256": "369db1ebeb0c194fd028db9fa522bb119a239ecb34b02a05d01e0cf821f9df3c",
          "json_path": "/metrics/Answer Correctness"
        },
        "v1": {
          "file": "evaluation/v1_1_scoring_public.json",
          "sha256": "cd9ea5456d01542702991dce3dc515c413576ccac7e94535cd20455894f20a51",
          "json_path": "/metrics/Answer Correctness"
        }
      }
    },
    {
      "name": "Evidence Support Rate",
      "key": "Evidence Support Rate",
      "label": "事实证据支持",
      "baseline": {
        "numerator": 1041,
        "denominator": 1092,
        "review_required_units": 6,
        "rate": null,
        "lower_bound": 0.9532967032967034,
        "upper_bound": 0.9587912087912088,
        "NA_cases": 2,
        "operational_errors": 0
      },
      "v1": {
        "numerator": 611,
        "denominator": 613,
        "review_required_units": 1,
        "rate": null,
        "lower_bound": 0.9967373572593801,
        "upper_bound": 0.99836867862969,
        "NA_cases": 8,
        "operational_errors": 2
      },
      "display": {
        "baseline": "95.33%–95.88%",
        "v1": "99.67%–99.84%"
      },
      "notes": "按已评分答案事实计；包含待裁决标注上下界。",
      "provenance": {
        "baseline": {
          "file": "evaluation/baseline_b_scoring_public.json",
          "sha256": "369db1ebeb0c194fd028db9fa522bb119a239ecb34b02a05d01e0cf821f9df3c",
          "json_path": "/metrics/Evidence Support Rate"
        },
        "v1": {
          "file": "evaluation/v1_1_scoring_public.json",
          "sha256": "cd9ea5456d01542702991dce3dc515c413576ccac7e94535cd20455894f20a51",
          "json_path": "/metrics/Evidence Support Rate"
        }
      }
    },
    {
      "name": "Citation Accuracy",
      "key": "Citation Accuracy",
      "label": "引用准确率",
      "baseline": {
        "numerator": 290,
        "denominator": 491,
        "review_required_units": 0,
        "rate": 0.5906313645621182,
        "lower_bound": 0.5906313645621182,
        "upper_bound": 0.5906313645621182,
        "NA_cases": 1,
        "operational_errors": 0
      },
      "v1": {
        "numerator": 127,
        "denominator": 128,
        "review_required_units": 1,
        "rate": null,
        "lower_bound": 0.9921875,
        "upper_bound": 1.0,
        "NA_cases": 9,
        "operational_errors": 2
      },
      "display": {
        "baseline": "59.06%",
        "v1": "99.22%"
      },
      "notes": "V1.1 127/128已确认，另1条待复核；99.22%为已确认下界。",
      "provenance": {
        "baseline": {
          "file": "evaluation/baseline_b_scoring_public.json",
          "sha256": "369db1ebeb0c194fd028db9fa522bb119a239ecb34b02a05d01e0cf821f9df3c",
          "json_path": "/metrics/Citation Accuracy"
        },
        "v1": {
          "file": "evaluation/v1_1_scoring_public.json",
          "sha256": "cd9ea5456d01542702991dce3dc515c413576ccac7e94535cd20455894f20a51",
          "json_path": "/metrics/Citation Accuracy"
        }
      }
    },
    {
      "name": "Correct Refusal Rate",
      "key": "Correct Refusal Rate",
      "label": "正确拒答",
      "baseline": {
        "numerator": 6,
        "denominator": 11,
        "review_required_units": 4,
        "rate": null,
        "lower_bound": 0.5454545454545454,
        "upper_bound": 0.9090909090909091,
        "NA_cases": 69,
        "operational_errors": 0
      },
      "v1": {
        "numerator": 11,
        "denominator": 11,
        "review_required_units": 0,
        "rate": 1.0,
        "lower_bound": 1.0,
        "upper_bound": 1.0,
        "NA_cases": 69,
        "operational_errors": 2
      },
      "display": {
        "baseline": "6/11",
        "v1": "11/11"
      },
      "notes": "B 另4例待复核，不能把6/11当成已经裁决的全部结果。",
      "provenance": {
        "baseline": {
          "file": "evaluation/baseline_b_scoring_public.json",
          "sha256": "369db1ebeb0c194fd028db9fa522bb119a239ecb34b02a05d01e0cf821f9df3c",
          "json_path": "/metrics/Correct Refusal Rate"
        },
        "v1": {
          "file": "evaluation/v1_1_scoring_public.json",
          "sha256": "cd9ea5456d01542702991dce3dc515c413576ccac7e94535cd20455894f20a51",
          "json_path": "/metrics/Correct Refusal Rate"
        }
      }
    },
    {
      "name": "Expired Policy Error Rate",
      "key": "Expired Policy Error Rate",
      "label": "失效制度误用",
      "baseline": {
        "numerator": 0,
        "denominator": 10,
        "review_required_units": 0,
        "rate": 0.0,
        "lower_bound": 0.0,
        "upper_bound": 0.0,
        "NA_cases": 70,
        "operational_errors": 0
      },
      "v1": {
        "numerator": 0,
        "denominator": 10,
        "review_required_units": 0,
        "rate": 0.0,
        "lower_bound": 0.0,
        "upper_bound": 0.0,
        "NA_cases": 70,
        "operational_errors": 2
      },
      "display": {
        "baseline": "0/10",
        "v1": "0/10"
      },
      "notes": "本专项两组均未观察到误用，不代表全部场景无错。",
      "provenance": {
        "baseline": {
          "file": "evaluation/baseline_b_scoring_public.json",
          "sha256": "369db1ebeb0c194fd028db9fa522bb119a239ecb34b02a05d01e0cf821f9df3c",
          "json_path": "/metrics/Expired Policy Error Rate"
        },
        "v1": {
          "file": "evaluation/v1_1_scoring_public.json",
          "sha256": "cd9ea5456d01542702991dce3dc515c413576ccac7e94535cd20455894f20a51",
          "json_path": "/metrics/Expired Policy Error Rate"
        }
      }
    },
    {
      "name": "Unsupported Inference Rate",
      "key": "Unsupported Inference Rate",
      "label": "无依据业务推断",
      "baseline": {
        "numerator": 11,
        "denominator": 80,
        "review_required_units": 6,
        "rate": null,
        "lower_bound": 0.1375,
        "upper_bound": 0.2125,
        "NA_cases": 0,
        "operational_errors": 0
      },
      "v1": {
        "numerator": 0,
        "denominator": 78,
        "review_required_units": 1,
        "rate": null,
        "lower_bound": 0.0,
        "upper_bound": 0.01282051282051282,
        "NA_cases": 0,
        "operational_errors": 2
      },
      "display": {
        "baseline": "11/80确认",
        "v1": "0/78确认"
      },
      "notes": "B 另6例、V1.1另1例待复核；V1.1分母排除2例治理失败。",
      "provenance": {
        "baseline": {
          "file": "evaluation/baseline_b_scoring_public.json",
          "sha256": "369db1ebeb0c194fd028db9fa522bb119a239ecb34b02a05d01e0cf821f9df3c",
          "json_path": "/metrics/Unsupported Inference Rate"
        },
        "v1": {
          "file": "evaluation/v1_1_scoring_public.json",
          "sha256": "cd9ea5456d01542702991dce3dc515c413576ccac7e94535cd20455894f20a51",
          "json_path": "/metrics/Unsupported Inference Rate"
        }
      }
    }
  ],
  "scenes": [
    {
      "id": "normal",
      "title": "01 正常制度查询",
      "case_id": "DIRECT_ANSWER-01",
      "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：普通员工现在到北京出差，住宿每人每晚上限是多少？",
      "watch": {
        "risk": "员工需要快速核对当前住宿标准及适用范围。",
        "baseline": "原版核心金额回答正确，但来源中还有与住宿无关的访客片段。",
        "v1": "回答明确当前标准与普通员工适用范围，实际可见来源聚焦差旅制度。",
        "result": "同一真实 DIRECT_ANSWER-01 的产品体验视角；下一场景用同一案例做证据对比，不是另一场额外实验。"
      },
      "baseline": {
        "case_id": "DIRECT_ANSWER-01",
        "category": "direct_answer",
        "timestamp": "2026-10-01T07:01:05.516Z",
        "operational_status": "completed",
        "tool_trace_complete": false,
        "selected_attempt": 1,
        "attempts": [
          {
            "attempt": 1,
            "operational_status": "completed",
            "error": null,
            "turns": [
              {
                "turn": 1,
                "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：普通员工现在到北京出差，住宿每人每晚上限是多少？",
                "timestamp": "2026-10-01T07:01:05.562Z",
                "visible_answer": "**答案：每人每晚上限 550 元。**\n\n依据（有效制度《员工境内差旅管理办法》TRAVEL 2026，生效日期 2026-01-01，业务适用日期 2026-10-01 适用本版）：\n\n- **【C03】住宿标准**：北京、上海、深圳住宿费上限为 **每人每晚 550 元**，其他境内城市为每人每晚 380 元。额度按实际公务住宿夜数核算；未发生住宿不发放等额补贴；实际费用低于上限的，按实际合规费用申请。\n- **【C07】归档与执行**：本版自 2026-01-01 生效并替代 2025 版；2026 年发生的境内差旅使用本版 **550 元/380 元**标准，**不因旧申请模板仍显示旧金额而继续使用旧标准**（即不要参照 2025 版中的旧额度）。\n\n补充提示（如实际需要超标准住宿）：\n\n- **【C05】超标审批**：预计超出标准时，须在**预订前**取得**部门负责人**的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管的出差审批只确认任务必要性，**不能自动替代**部门负责人的住宿超标批准。该条未设定未获批准时的具体处罚或一律不予报销的结论，此类个案应提交财务核验。\n\n如果你能补充\"实际发生日期\"和\"是否已预订\"等事实，可进一步判断超标审批是否需要在预订前完成。",
                "persisted": true,
                "operational_status": "completed",
                "visible_sources": [
                  {
                    "title": "VISITOR_2026.txt",
                    "text": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                    "score": 0.26420873403549194,
                    "text_sha256": "9dfe62b72621b171593a53d9103db28b6d5feb9e3757959ba26a4e9ab0279f39"
                  },
                  {
                    "title": "TRAVEL_2026.txt",
                    "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                    "score": null,
                    "text_sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
                  }
                ]
              }
            ]
          }
        ],
        "experiment_id": "BASELINE-B-XQ-1.0.1-SINGLE-01",
        "scoring": {
          "case_id": "DIRECT_ANSWER-01",
          "category": "direct_answer",
          "expected_behavior": "answer",
          "operational_status": "completed",
          "core_correct": 1,
          "valid_citation_titles": [
            "TRAVEL_2026.txt"
          ],
          "facts": [
            {
              "claim": "京沪深每人每晚550",
              "support": "TRAVEL_2026:C03",
              "fact_id": "DIRECT_ANSWER-01-F001",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                  ]
                }
              ]
            },
            {
              "claim": "其他境内城市380",
              "support": "TRAVEL_2026:C03",
              "fact_id": "DIRECT_ANSWER-01-F002",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                  ]
                }
              ]
            },
            {
              "claim": "按实际公务住宿夜数",
              "support": "TRAVEL_2026:C03",
              "fact_id": "DIRECT_ANSWER-01-F003",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                  ]
                }
              ]
            },
            {
              "claim": "未住宿不发等额补贴",
              "support": "TRAVEL_2026:C03",
              "fact_id": "DIRECT_ANSWER-01-F004",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                  ]
                }
              ]
            },
            {
              "claim": "低于限额按实际合规金额",
              "support": "TRAVEL_2026:C03",
              "fact_id": "DIRECT_ANSWER-01-F005",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                  ]
                }
              ]
            },
            {
              "claim": "2026替代旧版模板不优先",
              "support": "TRAVEL_2026:C07",
              "fact_id": "DIRECT_ANSWER-01-F006",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C07",
                  "visible_quotes": [
                    "【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。"
                  ]
                }
              ]
            },
            {
              "claim": "超标须预订前部门负责人书面批准",
              "support": "TRAVEL_2026:C05",
              "fact_id": "DIRECT_ANSWER-01-F007",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。"
                  ]
                }
              ]
            },
            {
              "claim": "超标批准记录城市日期原因金额",
              "support": "TRAVEL_2026:C05",
              "fact_id": "DIRECT_ANSWER-01-F008",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。"
                  ]
                }
              ]
            },
            {
              "claim": "主管出差审批不替代超标批准",
              "support": "TRAVEL_2026:C05",
              "fact_id": "DIRECT_ANSWER-01-F009",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。"
                  ]
                }
              ]
            },
            {
              "claim": "无未批一律处罚或不报销规则须财务核验",
              "support": "TRAVEL_2026:C05",
              "fact_id": "DIRECT_ANSWER-01-F010",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。"
                  ]
                }
              ]
            }
          ],
          "unsupported_quotes": [],
          "correct_refusal": null,
          "review_required": [],
          "reason": "核心回答完整，适用版本、范围和关键条件正确。",
          "expired_misuse": false,
          "over_refusal": false,
          "unsupported_inference": false,
          "citations": [
            {
              "case_id": "DIRECT_ANSWER-01",
              "title": "VISITOR_2026.txt",
              "text_sha256": "6eb8fa3e970c654c1dd5d36507355af3062639aaee150d5627cdbd94efe0e429",
              "clauses": [
                "C06",
                "C07",
                "C08"
              ],
              "text": "【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
              "valid": false,
              "supporting_anchors": [],
              "reason": "未支持实际回答中的适用事实或明确资料边界；来源噪声。"
            },
            {
              "case_id": "DIRECT_ANSWER-01",
              "title": "TRAVEL_2026.txt",
              "text_sha256": "e051d1dbc805209c0934be3d55294d8df7f379421b59d2bb237d7964039bdc47",
              "clauses": [
                "C01",
                "C02",
                "C03",
                "C04",
                "C05",
                "C06",
                "C07",
                "C08"
              ],
              "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
              "valid": true,
              "supporting_anchors": [
                "C03",
                "C05",
                "C07"
              ],
              "reason": "实际片段含已人工标注的适用事实依据。"
            }
          ],
          "missing_citation": false,
          "metrics": {
            "Answer Correctness": {
              "numerator": 1,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 10,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 1,
              "denominator": 2,
              "review_required_units": 0,
              "rate": 0.5,
              "lower_bound": 0.5,
              "upper_bound": 0.5,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        },
        "provenance": {
          "file": "evaluation/baseline_b_results_public.json",
          "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
          "json_path": "/cases/8"
        },
        "scoring_provenance": {
          "file": "evaluation/baseline_b_scoring_public.json",
          "sha256": "369db1ebeb0c194fd028db9fa522bb119a239ecb34b02a05d01e0cf821f9df3c",
          "json_path": "/cases/8"
        },
        "turns": [
          {
            "turn": 1,
            "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：普通员工现在到北京出差，住宿每人每晚上限是多少？",
            "timestamp": "2026-10-01T07:01:05.562Z",
            "visible_answer": "**答案：每人每晚上限 550 元。**\n\n依据（有效制度《员工境内差旅管理办法》TRAVEL 2026，生效日期 2026-01-01，业务适用日期 2026-10-01 适用本版）：\n\n- **【C03】住宿标准**：北京、上海、深圳住宿费上限为 **每人每晚 550 元**，其他境内城市为每人每晚 380 元。额度按实际公务住宿夜数核算；未发生住宿不发放等额补贴；实际费用低于上限的，按实际合规费用申请。\n- **【C07】归档与执行**：本版自 2026-01-01 生效并替代 2025 版；2026 年发生的境内差旅使用本版 **550 元/380 元**标准，**不因旧申请模板仍显示旧金额而继续使用旧标准**（即不要参照 2025 版中的旧额度）。\n\n补充提示（如实际需要超标准住宿）：\n\n- **【C05】超标审批**：预计超出标准时，须在**预订前**取得**部门负责人**的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管的出差审批只确认任务必要性，**不能自动替代**部门负责人的住宿超标批准。该条未设定未获批准时的具体处罚或一律不予报销的结论，此类个案应提交财务核验。\n\n如果你能补充\"实际发生日期\"和\"是否已预订\"等事实，可进一步判断超标审批是否需要在预订前完成。",
            "persisted": true,
            "operational_status": "completed",
            "visible_sources": [
              {
                "title": "VISITOR_2026.txt",
                "text": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "score": 0.26420873403549194,
                "text_sha256": "9dfe62b72621b171593a53d9103db28b6d5feb9e3757959ba26a4e9ab0279f39"
              },
              {
                "title": "TRAVEL_2026.txt",
                "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "score": null,
                "text_sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
              }
            ],
            "provenance": {
              "file": "evaluation/baseline_b_results_public.json",
              "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
              "json_path": "/cases/8/attempts/0/turns/0"
            },
            "source_views": [
              {
                "source_index": 0,
                "title": "VISITOR_2026.txt",
                "recorded_fragment": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "recorded_fragment_sha256": "9dfe62b72621b171593a53d9103db28b6d5feb9e3757959ba26a4e9ab0279f39",
                "clause_ids": [
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/8/attempts/0/turns/0/visible_sources/0"
                },
                "policy": {
                  "policy_id": "VISITOR",
                  "title": "商务访客预约与厂区接待管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "行政部",
                  "source_file": "policy_data/raw/VISITOR_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "ff2db235220d7a44052a46e3f871e672281f9ba0a92210d58b846a98134dea72",
                  "text": "商务访客预约与厂区接待管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：VISITOR；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。\n\n【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。\n\n【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。\n\n【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。\n\n【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/VISITOR_2026.txt",
                    "sha256": "ff2db235220d7a44052a46e3f871e672281f9ba0a92210d58b846a98134dea72"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/12"
                  }
                },
                "rating": null
              },
              {
                "source_index": 1,
                "title": "TRAVEL_2026.txt",
                "recorded_fragment": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "recorded_fragment_sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1",
                "clause_ids": [
                  "C01",
                  "C02",
                  "C03",
                  "C04",
                  "C05",
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/8/attempts/0/turns/0/visible_sources/1"
                },
                "policy": {
                  "policy_id": "TRAVEL",
                  "title": "员工境内差旅管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "行政部",
                  "source_file": "policy_data/raw/TRAVEL_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1",
                  "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/TRAVEL_2026.txt",
                    "sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/1"
                  }
                },
                "rating": null
              }
            ]
          }
        ]
      },
      "v1": {
        "case_id": "DIRECT_ANSWER-01",
        "category": "direct_answer",
        "timestamp": "2026-10-01T10:18:53.131Z",
        "operational_status": "completed",
        "tool_trace_complete": false,
        "selected_attempt": 1,
        "attempts": [
          {
            "attempt": 1,
            "operational_status": "completed",
            "error": null,
            "turns": [
              {
                "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：普通员工现在到北京出差，住宿每人每晚上限是多少？",
                "timestamp": "2026-10-01T10:18:53.181Z",
                "visible_answer": "**可以确认**\n- 普通员工到北京出差，住宿费上限为每人每晚550元。 [1]\n- 该办法适用于生产部门及职能部门普通员工的境内公务出差。 [1]\n- 2026年10月1日适用2026版标准：2026年发生的境内差旅使用本版550元和380元标准。 [1]",
                "persisted": true,
                "operational_status": "completed",
                "governance_status_events": [
                  {
                    "type": "governanceStatus",
                    "governance_status": "verified",
                    "error_code": null
                  }
                ],
                "visible_sources": [
                  {
                    "title": "TRAVEL_2026.txt",
                    "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                    "score": null,
                    "text_sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
                  }
                ]
              }
            ]
          }
        ],
        "experiment_id": "V1.1-XQ-1.0.1-SINGLE-02",
        "scoring": {
          "core_correct": 1,
          "correct_refusal": null,
          "expired_misuse": false,
          "unsupported_inference": false,
          "over_refusal": false,
          "review_required": [],
          "reason": "北京住宿550元每人每晚及当前适用范围正确。",
          "partial_answer_ok": null,
          "clarification_ok": null,
          "facts": [
            {
              "claim": "北京住宿费每人每晚上限550元",
              "support": "TRAVEL_2026:C03",
              "supported": true,
              "fact_id": "DIRECT_ANSWER-01-F001",
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                  ]
                }
              ]
            },
            {
              "claim": "适用生产和职能普通员工境内公务出差",
              "support": "TRAVEL_2026:C01",
              "supported": true,
              "fact_id": "DIRECT_ANSWER-01-F002",
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C01",
                  "visible_quotes": [
                    "【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。"
                  ]
                }
              ]
            },
            {
              "claim": "2026年境内差旅适用2026版550和380标准",
              "support": "TRAVEL_2026:C07",
              "supported": true,
              "fact_id": "DIRECT_ANSWER-01-F003",
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C07",
                  "visible_quotes": [
                    "【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。"
                  ]
                }
              ]
            }
          ],
          "citations": [
            {
              "title": "TRAVEL_2026.txt",
              "text_sha256": "e051d1dbc805209c0934be3d55294d8df7f379421b59d2bb237d7964039bdc47",
              "valid": true,
              "reason": "当前住宿标准与版本适用直接支持",
              "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
            }
          ],
          "case_id": "DIRECT_ANSWER-01",
          "category": "direct_answer",
          "expected_behavior": "answer",
          "operational_status": "completed",
          "missing_citation": false,
          "metrics": {
            "Answer Correctness": {
              "numerator": 1,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 3,
              "denominator": 3,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 1,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        },
        "provenance": {
          "file": "evaluation/v1_1_results_public.json",
          "sha256": "61d9dcb58f54c63bf58de0355bf4203bb37a2517288ea9e0bceccd7857a750f3",
          "json_path": "/cases/8"
        },
        "scoring_provenance": {
          "file": "evaluation/v1_1_scoring_public.json",
          "sha256": "cd9ea5456d01542702991dce3dc515c413576ccac7e94535cd20455894f20a51",
          "json_path": "/cases/8"
        },
        "turns": [
          {
            "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：普通员工现在到北京出差，住宿每人每晚上限是多少？",
            "timestamp": "2026-10-01T10:18:53.181Z",
            "visible_answer": "**可以确认**\n- 普通员工到北京出差，住宿费上限为每人每晚550元。 [1]\n- 该办法适用于生产部门及职能部门普通员工的境内公务出差。 [1]\n- 2026年10月1日适用2026版标准：2026年发生的境内差旅使用本版550元和380元标准。 [1]",
            "persisted": true,
            "operational_status": "completed",
            "governance_status_events": [
              {
                "type": "governanceStatus",
                "governance_status": "verified",
                "error_code": null
              }
            ],
            "visible_sources": [
              {
                "title": "TRAVEL_2026.txt",
                "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "score": null,
                "text_sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
              }
            ],
            "provenance": {
              "file": "evaluation/v1_1_results_public.json",
              "sha256": "61d9dcb58f54c63bf58de0355bf4203bb37a2517288ea9e0bceccd7857a750f3",
              "json_path": "/cases/8/attempts/0/turns/0"
            },
            "source_views": [
              {
                "source_index": 0,
                "title": "TRAVEL_2026.txt",
                "recorded_fragment": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "recorded_fragment_sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1",
                "clause_ids": [
                  "C01",
                  "C02",
                  "C03",
                  "C04",
                  "C05",
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/v1_1_results_public.json",
                  "sha256": "61d9dcb58f54c63bf58de0355bf4203bb37a2517288ea9e0bceccd7857a750f3",
                  "json_path": "/cases/8/attempts/0/turns/0/visible_sources/0"
                },
                "policy": {
                  "policy_id": "TRAVEL",
                  "title": "员工境内差旅管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "行政部",
                  "source_file": "policy_data/raw/TRAVEL_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1",
                  "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/TRAVEL_2026.txt",
                    "sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/1"
                  }
                },
                "rating": null
              }
            ]
          }
        ]
      }
    },
    {
      "id": "noise",
      "title": "02 答案正确，来源有噪声",
      "case_id": "DIRECT_ANSWER-01",
      "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：普通员工现在到北京出差，住宿每人每晚上限是多少？",
      "watch": {
        "risk": "答案正确，不等于展示给用户的证据都能支持答案。",
        "baseline": "可见来源包括 VISITOR_2026 访客离场/接待片段，不能支持北京住宿额度。",
        "v1": "最终可见来源为 TRAVEL_2026，展开可复核550元标准及2026版生效信息。",
        "result": "现有单评审初标：B 引用1/2正确；V1.1 引用1/1正确。这里没有事后给模型补找来源。"
      },
      "baseline": {
        "case_id": "DIRECT_ANSWER-01",
        "category": "direct_answer",
        "timestamp": "2026-10-01T07:01:05.516Z",
        "operational_status": "completed",
        "tool_trace_complete": false,
        "selected_attempt": 1,
        "attempts": [
          {
            "attempt": 1,
            "operational_status": "completed",
            "error": null,
            "turns": [
              {
                "turn": 1,
                "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：普通员工现在到北京出差，住宿每人每晚上限是多少？",
                "timestamp": "2026-10-01T07:01:05.562Z",
                "visible_answer": "**答案：每人每晚上限 550 元。**\n\n依据（有效制度《员工境内差旅管理办法》TRAVEL 2026，生效日期 2026-01-01，业务适用日期 2026-10-01 适用本版）：\n\n- **【C03】住宿标准**：北京、上海、深圳住宿费上限为 **每人每晚 550 元**，其他境内城市为每人每晚 380 元。额度按实际公务住宿夜数核算；未发生住宿不发放等额补贴；实际费用低于上限的，按实际合规费用申请。\n- **【C07】归档与执行**：本版自 2026-01-01 生效并替代 2025 版；2026 年发生的境内差旅使用本版 **550 元/380 元**标准，**不因旧申请模板仍显示旧金额而继续使用旧标准**（即不要参照 2025 版中的旧额度）。\n\n补充提示（如实际需要超标准住宿）：\n\n- **【C05】超标审批**：预计超出标准时，须在**预订前**取得**部门负责人**的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管的出差审批只确认任务必要性，**不能自动替代**部门负责人的住宿超标批准。该条未设定未获批准时的具体处罚或一律不予报销的结论，此类个案应提交财务核验。\n\n如果你能补充\"实际发生日期\"和\"是否已预订\"等事实，可进一步判断超标审批是否需要在预订前完成。",
                "persisted": true,
                "operational_status": "completed",
                "visible_sources": [
                  {
                    "title": "VISITOR_2026.txt",
                    "text": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                    "score": 0.26420873403549194,
                    "text_sha256": "9dfe62b72621b171593a53d9103db28b6d5feb9e3757959ba26a4e9ab0279f39"
                  },
                  {
                    "title": "TRAVEL_2026.txt",
                    "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                    "score": null,
                    "text_sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
                  }
                ]
              }
            ]
          }
        ],
        "experiment_id": "BASELINE-B-XQ-1.0.1-SINGLE-01",
        "scoring": {
          "case_id": "DIRECT_ANSWER-01",
          "category": "direct_answer",
          "expected_behavior": "answer",
          "operational_status": "completed",
          "core_correct": 1,
          "valid_citation_titles": [
            "TRAVEL_2026.txt"
          ],
          "facts": [
            {
              "claim": "京沪深每人每晚550",
              "support": "TRAVEL_2026:C03",
              "fact_id": "DIRECT_ANSWER-01-F001",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                  ]
                }
              ]
            },
            {
              "claim": "其他境内城市380",
              "support": "TRAVEL_2026:C03",
              "fact_id": "DIRECT_ANSWER-01-F002",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                  ]
                }
              ]
            },
            {
              "claim": "按实际公务住宿夜数",
              "support": "TRAVEL_2026:C03",
              "fact_id": "DIRECT_ANSWER-01-F003",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                  ]
                }
              ]
            },
            {
              "claim": "未住宿不发等额补贴",
              "support": "TRAVEL_2026:C03",
              "fact_id": "DIRECT_ANSWER-01-F004",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                  ]
                }
              ]
            },
            {
              "claim": "低于限额按实际合规金额",
              "support": "TRAVEL_2026:C03",
              "fact_id": "DIRECT_ANSWER-01-F005",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                  ]
                }
              ]
            },
            {
              "claim": "2026替代旧版模板不优先",
              "support": "TRAVEL_2026:C07",
              "fact_id": "DIRECT_ANSWER-01-F006",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C07",
                  "visible_quotes": [
                    "【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。"
                  ]
                }
              ]
            },
            {
              "claim": "超标须预订前部门负责人书面批准",
              "support": "TRAVEL_2026:C05",
              "fact_id": "DIRECT_ANSWER-01-F007",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。"
                  ]
                }
              ]
            },
            {
              "claim": "超标批准记录城市日期原因金额",
              "support": "TRAVEL_2026:C05",
              "fact_id": "DIRECT_ANSWER-01-F008",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。"
                  ]
                }
              ]
            },
            {
              "claim": "主管出差审批不替代超标批准",
              "support": "TRAVEL_2026:C05",
              "fact_id": "DIRECT_ANSWER-01-F009",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。"
                  ]
                }
              ]
            },
            {
              "claim": "无未批一律处罚或不报销规则须财务核验",
              "support": "TRAVEL_2026:C05",
              "fact_id": "DIRECT_ANSWER-01-F010",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。"
                  ]
                }
              ]
            }
          ],
          "unsupported_quotes": [],
          "correct_refusal": null,
          "review_required": [],
          "reason": "核心回答完整，适用版本、范围和关键条件正确。",
          "expired_misuse": false,
          "over_refusal": false,
          "unsupported_inference": false,
          "citations": [
            {
              "case_id": "DIRECT_ANSWER-01",
              "title": "VISITOR_2026.txt",
              "text_sha256": "6eb8fa3e970c654c1dd5d36507355af3062639aaee150d5627cdbd94efe0e429",
              "clauses": [
                "C06",
                "C07",
                "C08"
              ],
              "text": "【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
              "valid": false,
              "supporting_anchors": [],
              "reason": "未支持实际回答中的适用事实或明确资料边界；来源噪声。"
            },
            {
              "case_id": "DIRECT_ANSWER-01",
              "title": "TRAVEL_2026.txt",
              "text_sha256": "e051d1dbc805209c0934be3d55294d8df7f379421b59d2bb237d7964039bdc47",
              "clauses": [
                "C01",
                "C02",
                "C03",
                "C04",
                "C05",
                "C06",
                "C07",
                "C08"
              ],
              "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
              "valid": true,
              "supporting_anchors": [
                "C03",
                "C05",
                "C07"
              ],
              "reason": "实际片段含已人工标注的适用事实依据。"
            }
          ],
          "missing_citation": false,
          "metrics": {
            "Answer Correctness": {
              "numerator": 1,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 10,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 1,
              "denominator": 2,
              "review_required_units": 0,
              "rate": 0.5,
              "lower_bound": 0.5,
              "upper_bound": 0.5,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        },
        "provenance": {
          "file": "evaluation/baseline_b_results_public.json",
          "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
          "json_path": "/cases/8"
        },
        "scoring_provenance": {
          "file": "evaluation/baseline_b_scoring_public.json",
          "sha256": "369db1ebeb0c194fd028db9fa522bb119a239ecb34b02a05d01e0cf821f9df3c",
          "json_path": "/cases/8"
        },
        "turns": [
          {
            "turn": 1,
            "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：普通员工现在到北京出差，住宿每人每晚上限是多少？",
            "timestamp": "2026-10-01T07:01:05.562Z",
            "visible_answer": "**答案：每人每晚上限 550 元。**\n\n依据（有效制度《员工境内差旅管理办法》TRAVEL 2026，生效日期 2026-01-01，业务适用日期 2026-10-01 适用本版）：\n\n- **【C03】住宿标准**：北京、上海、深圳住宿费上限为 **每人每晚 550 元**，其他境内城市为每人每晚 380 元。额度按实际公务住宿夜数核算；未发生住宿不发放等额补贴；实际费用低于上限的，按实际合规费用申请。\n- **【C07】归档与执行**：本版自 2026-01-01 生效并替代 2025 版；2026 年发生的境内差旅使用本版 **550 元/380 元**标准，**不因旧申请模板仍显示旧金额而继续使用旧标准**（即不要参照 2025 版中的旧额度）。\n\n补充提示（如实际需要超标准住宿）：\n\n- **【C05】超标审批**：预计超出标准时，须在**预订前**取得**部门负责人**的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管的出差审批只确认任务必要性，**不能自动替代**部门负责人的住宿超标批准。该条未设定未获批准时的具体处罚或一律不予报销的结论，此类个案应提交财务核验。\n\n如果你能补充\"实际发生日期\"和\"是否已预订\"等事实，可进一步判断超标审批是否需要在预订前完成。",
            "persisted": true,
            "operational_status": "completed",
            "visible_sources": [
              {
                "title": "VISITOR_2026.txt",
                "text": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "score": 0.26420873403549194,
                "text_sha256": "9dfe62b72621b171593a53d9103db28b6d5feb9e3757959ba26a4e9ab0279f39"
              },
              {
                "title": "TRAVEL_2026.txt",
                "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "score": null,
                "text_sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
              }
            ],
            "provenance": {
              "file": "evaluation/baseline_b_results_public.json",
              "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
              "json_path": "/cases/8/attempts/0/turns/0"
            },
            "source_views": [
              {
                "source_index": 0,
                "title": "VISITOR_2026.txt",
                "recorded_fragment": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "recorded_fragment_sha256": "9dfe62b72621b171593a53d9103db28b6d5feb9e3757959ba26a4e9ab0279f39",
                "clause_ids": [
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/8/attempts/0/turns/0/visible_sources/0"
                },
                "policy": {
                  "policy_id": "VISITOR",
                  "title": "商务访客预约与厂区接待管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "行政部",
                  "source_file": "policy_data/raw/VISITOR_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "ff2db235220d7a44052a46e3f871e672281f9ba0a92210d58b846a98134dea72",
                  "text": "商务访客预约与厂区接待管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：VISITOR；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。\n\n【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。\n\n【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。\n\n【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。\n\n【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/VISITOR_2026.txt",
                    "sha256": "ff2db235220d7a44052a46e3f871e672281f9ba0a92210d58b846a98134dea72"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/12"
                  }
                },
                "rating": null
              },
              {
                "source_index": 1,
                "title": "TRAVEL_2026.txt",
                "recorded_fragment": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "recorded_fragment_sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1",
                "clause_ids": [
                  "C01",
                  "C02",
                  "C03",
                  "C04",
                  "C05",
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/8/attempts/0/turns/0/visible_sources/1"
                },
                "policy": {
                  "policy_id": "TRAVEL",
                  "title": "员工境内差旅管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "行政部",
                  "source_file": "policy_data/raw/TRAVEL_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1",
                  "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/TRAVEL_2026.txt",
                    "sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/1"
                  }
                },
                "rating": null
              }
            ]
          }
        ]
      },
      "v1": {
        "case_id": "DIRECT_ANSWER-01",
        "category": "direct_answer",
        "timestamp": "2026-10-01T10:18:53.131Z",
        "operational_status": "completed",
        "tool_trace_complete": false,
        "selected_attempt": 1,
        "attempts": [
          {
            "attempt": 1,
            "operational_status": "completed",
            "error": null,
            "turns": [
              {
                "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：普通员工现在到北京出差，住宿每人每晚上限是多少？",
                "timestamp": "2026-10-01T10:18:53.181Z",
                "visible_answer": "**可以确认**\n- 普通员工到北京出差，住宿费上限为每人每晚550元。 [1]\n- 该办法适用于生产部门及职能部门普通员工的境内公务出差。 [1]\n- 2026年10月1日适用2026版标准：2026年发生的境内差旅使用本版550元和380元标准。 [1]",
                "persisted": true,
                "operational_status": "completed",
                "governance_status_events": [
                  {
                    "type": "governanceStatus",
                    "governance_status": "verified",
                    "error_code": null
                  }
                ],
                "visible_sources": [
                  {
                    "title": "TRAVEL_2026.txt",
                    "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                    "score": null,
                    "text_sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
                  }
                ]
              }
            ]
          }
        ],
        "experiment_id": "V1.1-XQ-1.0.1-SINGLE-02",
        "scoring": {
          "core_correct": 1,
          "correct_refusal": null,
          "expired_misuse": false,
          "unsupported_inference": false,
          "over_refusal": false,
          "review_required": [],
          "reason": "北京住宿550元每人每晚及当前适用范围正确。",
          "partial_answer_ok": null,
          "clarification_ok": null,
          "facts": [
            {
              "claim": "北京住宿费每人每晚上限550元",
              "support": "TRAVEL_2026:C03",
              "supported": true,
              "fact_id": "DIRECT_ANSWER-01-F001",
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                  ]
                }
              ]
            },
            {
              "claim": "适用生产和职能普通员工境内公务出差",
              "support": "TRAVEL_2026:C01",
              "supported": true,
              "fact_id": "DIRECT_ANSWER-01-F002",
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C01",
                  "visible_quotes": [
                    "【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。"
                  ]
                }
              ]
            },
            {
              "claim": "2026年境内差旅适用2026版550和380标准",
              "support": "TRAVEL_2026:C07",
              "supported": true,
              "fact_id": "DIRECT_ANSWER-01-F003",
              "actual_source_anchors": [
                {
                  "file": "TRAVEL_2026.txt",
                  "clause": "C07",
                  "visible_quotes": [
                    "【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。"
                  ]
                }
              ]
            }
          ],
          "citations": [
            {
              "title": "TRAVEL_2026.txt",
              "text_sha256": "e051d1dbc805209c0934be3d55294d8df7f379421b59d2bb237d7964039bdc47",
              "valid": true,
              "reason": "当前住宿标准与版本适用直接支持",
              "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
            }
          ],
          "case_id": "DIRECT_ANSWER-01",
          "category": "direct_answer",
          "expected_behavior": "answer",
          "operational_status": "completed",
          "missing_citation": false,
          "metrics": {
            "Answer Correctness": {
              "numerator": 1,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 3,
              "denominator": 3,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 1,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        },
        "provenance": {
          "file": "evaluation/v1_1_results_public.json",
          "sha256": "61d9dcb58f54c63bf58de0355bf4203bb37a2517288ea9e0bceccd7857a750f3",
          "json_path": "/cases/8"
        },
        "scoring_provenance": {
          "file": "evaluation/v1_1_scoring_public.json",
          "sha256": "cd9ea5456d01542702991dce3dc515c413576ccac7e94535cd20455894f20a51",
          "json_path": "/cases/8"
        },
        "turns": [
          {
            "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：普通员工现在到北京出差，住宿每人每晚上限是多少？",
            "timestamp": "2026-10-01T10:18:53.181Z",
            "visible_answer": "**可以确认**\n- 普通员工到北京出差，住宿费上限为每人每晚550元。 [1]\n- 该办法适用于生产部门及职能部门普通员工的境内公务出差。 [1]\n- 2026年10月1日适用2026版标准：2026年发生的境内差旅使用本版550元和380元标准。 [1]",
            "persisted": true,
            "operational_status": "completed",
            "governance_status_events": [
              {
                "type": "governanceStatus",
                "governance_status": "verified",
                "error_code": null
              }
            ],
            "visible_sources": [
              {
                "title": "TRAVEL_2026.txt",
                "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "score": null,
                "text_sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
              }
            ],
            "provenance": {
              "file": "evaluation/v1_1_results_public.json",
              "sha256": "61d9dcb58f54c63bf58de0355bf4203bb37a2517288ea9e0bceccd7857a750f3",
              "json_path": "/cases/8/attempts/0/turns/0"
            },
            "source_views": [
              {
                "source_index": 0,
                "title": "TRAVEL_2026.txt",
                "recorded_fragment": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "recorded_fragment_sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1",
                "clause_ids": [
                  "C01",
                  "C02",
                  "C03",
                  "C04",
                  "C05",
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/v1_1_results_public.json",
                  "sha256": "61d9dcb58f54c63bf58de0355bf4203bb37a2517288ea9e0bceccd7857a750f3",
                  "json_path": "/cases/8/attempts/0/turns/0/visible_sources/0"
                },
                "policy": {
                  "policy_id": "TRAVEL",
                  "title": "员工境内差旅管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "行政部",
                  "source_file": "policy_data/raw/TRAVEL_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1",
                  "text": "员工境内差旅管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：TRAVEL；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。\n\n【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。\n\n【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。\n\n【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。\n\n【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。\n\n【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。\n\n【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。\n\n【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】适用与行程登记\n本办法适用于生产部门及职能部门普通员工的境内公务出差，不适用于外协人员、访客或私人旅行。申请应写明业务任务、出差城市、起止日期和费用承担部门；跨城市行程逐段登记，日期及城市变化应在原申请下更新。生产员工外出参加与岗位相关的课程，同时涉及差旅和培训时，分别按两个有效制度核对费用性质，不能把培训审批当成出差审批。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】出发前审批\n员工至少提前3个工作日提交出差申请，由直属主管审批。申请未完成前不按已批准行程办理公司承担的预订；紧急任务应在申请中说明原因，但本办法不设口头同意自动替代审批的流程。已批准行程的目的地或日期发生变化时，在原申请中提交变更说明，由直属主管确认后按变更行程执行。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】住宿标准\n北京、上海、深圳住宿费上限为每人每晚550元，其他境内城市为每人每晚380元。额度按实际公务住宿夜数核算，未发生住宿不发放等额补贴，实际费用低于上限时按实际合规费用申请。公务结束后的私人延住应与公务住宿分开列示，不能仅因同一张酒店订单就把全部住宿纳入出差费用。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】交通标准\n普通员工高铁报销限二等座，飞机报销限经济舱。市内公务交通凭有效票据据实申请，同时注明路线、日期和公务事由；私人游览或家属同行的交通支出不属于员工公务交通。退改签应附原订单、变更说明及退款记录，以净实际支出申请，不得同时申报已退回的原票金额。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】超标审批\n住宿预计超出标准时，须在预订前取得部门负责人的书面批准，批准记录列明城市、日期、原因和预计金额。直属主管审批出差只确认任务必要性，不能自动替代部门负责人的住宿超标批准。条款要求办理批准，但没有设定未获批准时的具体处罚、扣款金额或一律不予报销的处理结论，遇此类个案应提交财务核验。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】跨制度交接\n报销提交期限、必备材料及付款时限，统一按有效《员工费用报销管理办法》执行；发票异常按有效《费用票据核验指引》处理。住宿发票应能核对入住和离店日期，出差申请、实际行程和票据存在差异时先附解释材料。差旅标准本身不构成财务审核通过的承诺，资料完整也仍需按报销审批顺序流转。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】归档与执行\n行政部维护有效版本、出差申请和变更记录，财务保存费用审核材料。制度咨询应提供部门、城市及发生日期，缺少关键事实时由维护人员核对后答复。本版自2026年1月1日生效并替代2025版；2026年发生的境内差旅使用本版550元和380元标准，不因旧申请模板仍显示旧金额而继续使用旧标准。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】台账核对\n行政在每月第3个工作日核对上月尚未完成资料交接的出差申请，台账包括申请编号、出差人、费用承担部门、实际出发和返回日期、批准及变更记录。该台账核对日是行政的内部检查节点，不改变员工的报销提交期限；经办人不能等到月度核对后才着手收集材料。行政发现同一申请出现两个不同版本的审批说明时，应保留原记录并注明核对结论，不直接覆盖历史审批内容。业务部门收到待补清单后逐项补充实际行程信息，财务是否进入付款仍按对应有效报销流程核对。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/TRAVEL_2026.txt",
                    "sha256": "87c2ae467ef466cb6eb0287775cbdfe2821f22332eae68e2e84199dede99cca1"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/1"
                  }
                },
                "rating": null
              }
            ]
          }
        ]
      }
    },
    {
      "id": "inference",
      "title": "03 制度要求 ≠ 现实状态",
      "case_id": "UNSUPPORTED_INFERENCE-05",
      "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：设备采购预算批准了，所以设备质量已经合格，可以付款了吧？",
      "watch": {
        "risk": "采购预算批准不能证明设备验收、结算材料或财务审核的实际状态。",
        "baseline": "原回答说“暂时不能付款”“关键设备还缺质量部门的复核记录”；题面未提供这些实际事实。",
        "v1": "保留采购/验收/付款规则，分别说明实际质量、材料和财务状态无法确认，并请求关键设备等事实。",
        "result": "现有初标：B 核心错误并存在无依据推断；V1.1 核心正确、部分回答合格，未将未提供记录理解为未执行。"
      },
      "baseline": {
        "case_id": "UNSUPPORTED_INFERENCE-05",
        "category": "unsupported_inference",
        "timestamp": "2026-10-01T07:13:03.298Z",
        "operational_status": "completed",
        "tool_trace_complete": false,
        "selected_attempt": 1,
        "attempts": [
          {
            "attempt": 1,
            "operational_status": "completed",
            "error": null,
            "turns": [
              {
                "turn": 1,
                "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：设备采购预算批准了，所以设备质量已经合格，可以付款了吧？",
                "timestamp": "2026-10-01T07:13:03.365Z",
                "visible_answer": "**不能这样推断——这个前提本身不成立，暂时不能付款。**\n\n**1）预算批准 ≠ 质量合格。**\n预算批准解决的是\"要不要买、有没有钱\"，属于采购事前环节；设备质量是到货后的实际检查结论，两者是不同事项、不同证据。\n- 《采购验收与对公结算管理办法》【C03】：\"采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。\"\n\n**2）关键设备还缺质量部门的复核记录。**\n- 【C03】：\"关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。\"\n- 【C02】：仓库收货签字只表示完成相应接收检查，\"不等于供应商可以立即收到全部款项\"。\n\n**3）对公结算要看四类材料是否齐全、是否对应同一供应商和事项。**\n- 【C05】：应具备 ①采购批准记录 ②合同或订单 ③验收记录 ④有效发票；\"任何一类缺失均先补正，再提交完整结算审核\"；且\"发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对\"。\n\n**4）付款要等财务审核通过，并按合同节点执行。**\n- 【C06】：完整材料经财务审核通过后，原则上 15 个工作日内支付；\"未完成审核不能从到货日直接倒推出承诺付款日\"。\n\n**5）其他容易误用的旁证也不能替代验收/付款依据：**\n- 外协人员离场记录不等于设备已通过采购验收——【CONTRACTOR C06】【C08】：\"不能拿门岗离场记录替代质量结论\"，\"不以人员离厂反推安装工作必然达到合同要求\"。\n- 财务侧同样明确\"审批完成也不等于已付款\"——【INVOICE C06】。\n\n**建议的下一步核对（请先确认事实，再走流程）：**\n1. 该设备是否被标记为**关键生产设备**？若是，质量部门复核记录是否存在？\n2. 采购批准记录、合同/订单、验收记录、有效发票四类材料是否齐全且指向同一供应商与同一采购事项？\n3. 是否分批到货？未交付部分是否仍需跟踪（【C08】：不能因第一批已签收就把整单写为完成）？\n4. 合同是否约定了明确付款节点？有则按经批准合同执行，而非套用 15 个工作日。\n\n如上述材料齐备且财务审核通过，才进入付款环节；否则应先补正材料、补齐质量复核，再由财务核对付款。\n\n（注：本回答依据公司制度模拟文件，业务场景为供应商对公采购结算，不适用员工个人报销流程；具体争议请以归口部门——采购部/质量部的核验结论为准。）",
                "persisted": true,
                "operational_status": "completed",
                "visible_sources": [
                  {
                    "title": "VISITOR_2026.txt",
                    "text": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                    "score": 0.3670254945755005,
                    "text_sha256": "9dfe62b72621b171593a53d9103db28b6d5feb9e3757959ba26a4e9ab0279f39"
                  },
                  {
                    "title": "INVOICE_2026.txt",
                    "text": "<document_metadata>\nsourceDocument: INVOICE_2026.txt\npublished: 10/1/2026, 6:51:35 AM\n</document_metadata>\n\n【C06】与审批证明区分\n本指引中的验真证明是票据核验结果，不是培训完成证明、病假医疗证明、采购验收证明或访客预约批准。出现同名“证明”字段时应核对业务事项与出具主体，不能拿一种证明替代另一种证明。审批完成也不等于已付款，查询付款状态需结合报销流程记录和实际付款凭证。\n\n【C07】档案与维护\n财务将发票原文件、验真记录、退回补件说明与报销申请编号关联保存。制度维护人员发布变更时注明受影响条款，并提醒使用旧模板的人员核对当前版本。本指引自2026年1月1日起生效，与有效报销办法配套；出现业务额度问题时回到差旅或培训条款，不从票据核验步骤推定额外补贴或奖惩。\n\n【C08】补件清单格式\n票据补件清单必须列明原申请编号、具体错误字段和需补正的材料三项信息。只写“票据有问题”不足以让申请人核对，财务应指出是抬头、金额、日期还是验真材料缺项。经办人补交后注明对应清单项目，保留错误票据与更正文件之间的关联，避免把更正后材料误认为第二笔独立支出。同一业务包含多张发票时逐张核对；其中一张验真通过不能推定剩余票据全部合格，财务仍应保存逐张检查结果供后续复核。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                    "score": 0.36288750171661377,
                    "text_sha256": "0816e2434d419401b38f06bc1d4837c42f1151396ea18caf68ba2c8e9fdbdac1"
                  },
                  {
                    "title": "EXPENSE_2026.txt",
                    "text": "<document_metadata>\nsourceDocument: EXPENSE_2026.txt\npublished: 10/1/2026, 6:51:31 AM\n</document_metadata>\n\n员工费用报销管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：EXPENSE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：财务部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】业务范围\n本办法适用于普通员工的已批准公务费用报销；差旅、培训分别先满足对应有效业务制度。供应商对公采购结算按采购审批与验收制度办理，不适用员工个人报销的提交和付款时限。员工本人同时是采购经办人时，应按业务性质区分，不能因为提交人是员工就把供应商款项改成个人费用。\n\n【C02】提交时限\n差旅费用在出差结束后7个工作日内提交完整申请，培训费用在课程结束后7个工作日内提交完整申请。只有把必备材料提交到报销流程才算提交，个人保存草稿或给同事发票照片不算。申请人应在事项结束后整理材料，对可能影响时限的缺件向直属主管说明，本条没有规定逾期即永久失去报销资格。\n\n【C03】差旅材料\n差旅报销须有经审批的出差申请、有效发票和行程说明；住宿发票应注明入住日期与离店日期。票据日期、地点或金额与获批行程不同的，附差异说明供审核核对。直属主管的聊天回复、酒店订单和支付截图可以作为辅助材料，但不能直接替代本条要求的获批申请及有效发票。\n\n【C04】培训材料\n培训报销须有有效培训批准记录、培训发票、课程介绍和完成培训证明。培训批准的具体人员、预算和适用部门按有效培训制度核对，不能仅凭课程有结业证就判断符合公司全部报销条件。课程延期或取消时，应更新实际发生情况及退款信息，只有实际发生且有制度依据的费用进入审核。\n\n【C05】审批与付款\n申请先由直属主管核实业务真实性，再由财务审核票据。审核通过且无待补材料后，财务在3个工作日内付款；退回补件期间不属于审核通过后的付款等待期。财务发现收款信息或费用金额与材料不一致时，应退回核对，不得仅凭主管同意就跳过票据审核和信息检查。",
                    "score": 0.36248213052749634,
                    "text_sha256": "4d3fe577ec1ab3afa72519ff7dc811aa79bcce931200d6f8b1923f16ea4c3f28"
                  },
                  {
                    "title": "CONTRACTOR_2026.txt",
                    "text": "<document_metadata>\nsourceDocument: CONTRACTOR_2026.txt\npublished: 10/1/2026, 6:51:21 AM\n</document_metadata>\n\n【C06】离场与次日进入\n外协人员当日离场登记，次日再次进入须重新核验批准名单、有效材料和当日安排；多日任务仍按每日实际到场人员核对。现场联系人记录作业交接及遗留事项，记录不等于设备已经通过采购验收。交付设备的质量和供应商付款继续按采购验收及结算规则处理，不能拿门岗离场记录替代质量结论。\n\n【C07】职责与生效\n归口部门核对作业必要性与人员安排，安全管理部门核对相应入场手续，门岗执行名单与记录检查。本版自2026年1月1日起生效，行政维护人员负责发布有效文件和联系人。具体现场事项有疑问时联系归口部门核验，制度问答不能替代作业许可审批、现场交底或授权人员判断。\n\n【C08】名单与交接核对\n公司内部联系人在外协人员到场前核对最终名单、作业区域和计划时段，将批准记录与门岗登记信息对应。外协单位临时换人时，不能只在原名单姓名上手工改字后沿用原核验结论；新人员材料由归口和安全管理部门重新核对。任务结束时记录人员离场和遗留事项，由现场联系人与相关业务部门交接。门岗只据入场记录核验人员，不作设备质量评价；如需判断交付完成，应回到采购验收材料，不以人员离厂反推安装工作必然达到合同要求。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                    "score": 0.3479917049407959,
                    "text_sha256": "8c965bd12e0e526fdf7c445f920a3f4191ea4bb1926d33ee47b0ec74dcecc748"
                  },
                  {
                    "title": "VISITOR_2026.txt",
                    "text": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                    "score": 0.36708009243011475,
                    "text_sha256": "9dfe62b72621b171593a53d9103db28b6d5feb9e3757959ba26a4e9ab0279f39"
                  },
                  {
                    "title": "VISITOR_2026.txt",
                    "text": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n商务访客预约与厂区接待管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：VISITOR；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。\n\n【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。\n\n【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。\n\n【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。\n\n【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。",
                    "score": 0.3605762720108032,
                    "text_sha256": "9bf9044510f773b790aacff7e9d5a52b817b17ab0de82c9e8c1c61e1566c2560"
                  },
                  {
                    "title": "CONTRACTOR_2026.txt",
                    "text": "<document_metadata>\nsourceDocument: CONTRACTOR_2026.txt\npublished: 10/1/2026, 6:51:21 AM\n</document_metadata>\n\n【C06】离场与次日进入\n外协人员当日离场登记，次日再次进入须重新核验批准名单、有效材料和当日安排；多日任务仍按每日实际到场人员核对。现场联系人记录作业交接及遗留事项，记录不等于设备已经通过采购验收。交付设备的质量和供应商付款继续按采购验收及结算规则处理，不能拿门岗离场记录替代质量结论。\n\n【C07】职责与生效\n归口部门核对作业必要性与人员安排，安全管理部门核对相应入场手续，门岗执行名单与记录检查。本版自2026年1月1日起生效，行政维护人员负责发布有效文件和联系人。具体现场事项有疑问时联系归口部门核验，制度问答不能替代作业许可审批、现场交底或授权人员判断。\n\n【C08】名单与交接核对\n公司内部联系人在外协人员到场前核对最终名单、作业区域和计划时段，将批准记录与门岗登记信息对应。外协单位临时换人时，不能只在原名单姓名上手工改字后沿用原核验结论；新人员材料由归口和安全管理部门重新核对。任务结束时记录人员离场和遗留事项，由现场联系人与相关业务部门交接。门岗只据入场记录核验人员，不作设备质量评价；如需判断交付完成，应回到采购验收材料，不以人员离厂反推安装工作必然达到合同要求。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                    "score": 0.33741575479507446,
                    "text_sha256": "8c965bd12e0e526fdf7c445f920a3f4191ea4bb1926d33ee47b0ec74dcecc748"
                  },
                  {
                    "title": "EXPENSE_2026.txt",
                    "text": "<document_metadata>\nsourceDocument: EXPENSE_2026.txt\npublished: 10/1/2026, 6:51:31 AM\n</document_metadata>\n\n【C06】异常交接\n缺失发票、重复票据、电子发票验真和抬头错误按《费用票据核验指引》处理。申请退回时列明缺少项目，申请人保留原申请编号补正后重新提交。补齐材料不代表审核自动通过，财务仍需核对业务一致性。本制度没有赋予报销助手审批、发放款项或决定个案罚款的权限。\n\n【C07】归档与版本\n财务部维护报销制度清单、审核记录和付款凭证，申请人可凭申请编号查询办理状态。制度维护人员发现模板引用旧版本时应更正模板并提示经办人核对，不得把模板文字优先于有效制度。本版自2026年1月1日生效，替代2025版；当前提交时限为7个工作日、审核通过后付款时限为3个工作日。\n\n【C08】退回材料记录\n财务退回申请时列明申请编号、缺项材料和需核对的业务差异，保留申请人原始提交时间及本次退回时间。经办人回复补件时按清单逐项说明新增材料，不另造一个已经审核通过的申请编号；原流程中的批准记录应能与新提交材料对应。没有明确的审核通过记录时，不能把“已收件”“已登记”或“待付款核对”解释为最终批准。本条仅规定材料追踪方法，不设退回一次即终止申请的次数限制，也不据此改变当年有效制度中的提交和付款时限。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                    "score": 0.3189050555229187,
                    "text_sha256": "98bd3647088e9bf0fee35b453767dfce79859e08b27a65f0526c6eb41795890f"
                  },
                  {
                    "title": "ACCEPTANCE_2026.txt",
                    "text": "采购验收与对公结算管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：ACCEPTANCE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。\n\n【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。\n\n【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。\n\n【C04】异常物资\n验收发现不合格或数量异常时，记录异常、隔离待处理并通知采购经办人，待确认处理结果后更新记录。供应商提供说明或承诺补货不能自动改变原异常结论，需求部门也不能以生产急用直接把异常写成合格。本条不规定每一种质量缺陷的责任比例、罚款或保修期限，个案需核对合同与事实。\n\n【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。\n\n【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。\n\n【C07】档案与版本\n仓库保存收货记录，需求与质量部门保存各自验收意见，采购经办人归集并与财务交接。各方对本人检查范围作出记录，不相互代填质量结论。本版从2026年1月1日起生效；使用时先区分员工报销和供应商结算，再核对业务类型、关键设备标记、合同条款及材料完整性。\n\n【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                    "score": null,
                    "text_sha256": "f72320b965a4cfa06a38eecbbb9110b0fee157e2d2375f97b51fe3f7d606904f"
                  }
                ]
              }
            ]
          }
        ],
        "experiment_id": "BASELINE-B-XQ-1.0.1-SINGLE-01",
        "scoring": {
          "case_id": "UNSUPPORTED_INFERENCE-05",
          "category": "unsupported_inference",
          "expected_behavior": "partial_answer",
          "operational_status": "completed",
          "core_correct": 0,
          "valid_citation_titles": [
            "ACCEPTANCE_2026.txt",
            "CONTRACTOR_2026.txt",
            "INVOICE_2026.txt",
            "EXPENSE_2026.txt"
          ],
          "facts": [
            {
              "claim": "预算批准不等质量合格",
              "support": "ACCEPTANCE_2026:C03",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F001",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。"
                  ]
                }
              ]
            },
            {
              "claim": "暂时不能付款",
              "support": null,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F002",
              "supported": false,
              "actual_source_anchors": []
            },
            {
              "claim": "关键设备还缺质量复核记录",
              "support": null,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F003",
              "supported": false,
              "actual_source_anchors": []
            },
            {
              "claim": "关键设备仓库验收",
              "support": "ACCEPTANCE_2026:C03",
              "parent_claim": "关键设备须仓库需求验收及质量复核",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F004",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。"
                  ]
                }
              ]
            },
            {
              "claim": "关键设备需求验收",
              "support": "ACCEPTANCE_2026:C03",
              "parent_claim": "关键设备须仓库需求验收及质量复核",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F005",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。"
                  ]
                }
              ]
            },
            {
              "claim": "关键设备质量复核",
              "support": "ACCEPTANCE_2026:C03",
              "parent_claim": "关键设备须仓库需求验收及质量复核",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F006",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。"
                  ]
                }
              ]
            },
            {
              "claim": "缺复核不视材料齐全",
              "support": "ACCEPTANCE_2026:C03",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F007",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。"
                  ]
                }
              ]
            },
            {
              "claim": "收货不等立即全款",
              "support": "ACCEPTANCE_2026:C02",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F008",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C02",
                  "visible_quotes": [
                    "【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。"
                  ]
                }
              ]
            },
            {
              "claim": "结算需批准记录",
              "support": "ACCEPTANCE_2026:C05",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F009",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "需合同订单",
              "support": "ACCEPTANCE_2026:C05",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F010",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "需验收记录",
              "support": "ACCEPTANCE_2026:C05",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F011",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "需有效发票",
              "support": "ACCEPTANCE_2026:C05",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F012",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "同供应商事项",
              "support": "ACCEPTANCE_2026:C05",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F013",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "缺件补正",
              "support": "ACCEPTANCE_2026:C05",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F014",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "发票不代验收",
              "support": "ACCEPTANCE_2026:C05",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F015",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "验收不省财务核对",
              "support": "ACCEPTANCE_2026:C05",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F016",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "审核后原则15工作日",
              "support": "ACCEPTANCE_2026:C06",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F017",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C06",
                  "visible_quotes": [
                    "【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。"
                  ]
                }
              ]
            },
            {
              "claim": "合同另定按合同",
              "support": "ACCEPTANCE_2026:C06",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F018",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C06",
                  "visible_quotes": [
                    "【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。"
                  ]
                }
              ]
            },
            {
              "claim": "未审核不从到货倒推付款",
              "support": "ACCEPTANCE_2026:C06",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F019",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C06",
                  "visible_quotes": [
                    "【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。"
                  ]
                }
              ]
            },
            {
              "claim": "外协离场不等设备合格",
              "support": "CONTRACTOR_2026:C08",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F020",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "CONTRACTOR_2026.txt",
                  "clause": "C08",
                  "visible_quotes": [
                    "【C08】名单与交接核对\n公司内部联系人在外协人员到场前核对最终名单、作业区域和计划时段，将批准记录与门岗登记信息对应。外协单位临时换人时，不能只在原名单姓名上手工改字后沿用原核验结论；新人员材料由归口和安全管理部门重新核对。任务结束时记录人员离场和遗留事项，由现场联系人与相关业务部门交接。门岗只据入场记录核验人员，不作设备质量评价；如需判断交付完成，应回到采购验收材料，不以人员离厂反推安装工作必然达到合同要求。"
                  ]
                }
              ]
            },
            {
              "claim": "审批完成不等付款",
              "support": "INVOICE_2026:C06",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F021",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "INVOICE_2026.txt",
                  "clause": "C06",
                  "visible_quotes": [
                    "【C06】与审批证明区分\n本指引中的验真证明是票据核验结果，不是培训完成证明、病假医疗证明、采购验收证明或访客预约批准。出现同名“证明”字段时应核对业务事项与出具主体，不能拿一种证明替代另一种证明。审批完成也不等于已付款，查询付款状态需结合报销流程记录和实际付款凭证。"
                  ]
                }
              ]
            },
            {
              "claim": "未交付不得整单完成",
              "support": "ACCEPTANCE_2026:C08",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F022",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C08",
                  "visible_quotes": [
                    "【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。"
                  ]
                }
              ]
            },
            {
              "claim": "供应商不套员工报销",
              "support": "EXPENSE_2026:C01",
              "fact_id": "UNSUPPORTED_INFERENCE-05-F023",
              "supported": true,
              "actual_source_anchors": [
                {
                  "file": "EXPENSE_2026.txt",
                  "clause": "C01",
                  "visible_quotes": [
                    "【C01】业务范围\n本办法适用于普通员工的已批准公务费用报销；差旅、培训分别先满足对应有效业务制度。供应商对公采购结算按采购审批与验收制度办理，不适用员工个人报销的提交和付款时限。员工本人同时是采购经办人时，应按业务性质区分，不能因为提交人是员工就把供应商款项改成个人费用。"
                  ]
                }
              ]
            }
          ],
          "unsupported_quotes": [
            "暂时不能付款",
            "关键设备还缺质量部门的复核记录"
          ],
          "correct_refusal": null,
          "review_required": [],
          "reason": "题面没有实际验收/付款状态，回答把“不能据预算推断”升级为“还缺记录/不能付款”。末尾重新要求核验，未消除前文无条件结论。",
          "expired_misuse": false,
          "over_refusal": false,
          "partial_answer_ok": false,
          "unsupported_inference": true,
          "citations": [
            {
              "case_id": "UNSUPPORTED_INFERENCE-05",
              "title": "VISITOR_2026.txt",
              "text_sha256": "6eb8fa3e970c654c1dd5d36507355af3062639aaee150d5627cdbd94efe0e429",
              "clauses": [
                "C06",
                "C07",
                "C08"
              ],
              "text": "【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
              "valid": false,
              "supporting_anchors": [],
              "reason": "未支持实际回答中的适用事实或明确资料边界；来源噪声。"
            },
            {
              "case_id": "UNSUPPORTED_INFERENCE-05",
              "title": "INVOICE_2026.txt",
              "text_sha256": "32cb6dc2ec8219c6241b694581fcae2d055bea657941b1d2ada282822101b651",
              "clauses": [
                "C06",
                "C07",
                "C08"
              ],
              "text": "【C06】与审批证明区分\n本指引中的验真证明是票据核验结果，不是培训完成证明、病假医疗证明、采购验收证明或访客预约批准。出现同名“证明”字段时应核对业务事项与出具主体，不能拿一种证明替代另一种证明。审批完成也不等于已付款，查询付款状态需结合报销流程记录和实际付款凭证。\n\n【C07】档案与维护\n财务将发票原文件、验真记录、退回补件说明与报销申请编号关联保存。制度维护人员发布变更时注明受影响条款，并提醒使用旧模板的人员核对当前版本。本指引自2026年1月1日起生效，与有效报销办法配套；出现业务额度问题时回到差旅或培训条款，不从票据核验步骤推定额外补贴或奖惩。\n\n【C08】补件清单格式\n票据补件清单必须列明原申请编号、具体错误字段和需补正的材料三项信息。只写“票据有问题”不足以让申请人核对，财务应指出是抬头、金额、日期还是验真材料缺项。经办人补交后注明对应清单项目，保留错误票据与更正文件之间的关联，避免把更正后材料误认为第二笔独立支出。同一业务包含多张发票时逐张核对；其中一张验真通过不能推定剩余票据全部合格，财务仍应保存逐张检查结果供后续复核。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
              "valid": true,
              "supporting_anchors": [
                "C06"
              ],
              "reason": "实际片段含已人工标注的适用事实依据。"
            },
            {
              "case_id": "UNSUPPORTED_INFERENCE-05",
              "title": "EXPENSE_2026.txt",
              "text_sha256": "9c264a29bf25df9d44d45341bdf32d4b70afb417b1407e984606e9663621c60b",
              "clauses": [
                "C01",
                "C02",
                "C03",
                "C04",
                "C05"
              ],
              "text": "员工费用报销管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：EXPENSE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：财务部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】业务范围\n本办法适用于普通员工的已批准公务费用报销；差旅、培训分别先满足对应有效业务制度。供应商对公采购结算按采购审批与验收制度办理，不适用员工个人报销的提交和付款时限。员工本人同时是采购经办人时，应按业务性质区分，不能因为提交人是员工就把供应商款项改成个人费用。\n\n【C02】提交时限\n差旅费用在出差结束后7个工作日内提交完整申请，培训费用在课程结束后7个工作日内提交完整申请。只有把必备材料提交到报销流程才算提交，个人保存草稿或给同事发票照片不算。申请人应在事项结束后整理材料，对可能影响时限的缺件向直属主管说明，本条没有规定逾期即永久失去报销资格。\n\n【C03】差旅材料\n差旅报销须有经审批的出差申请、有效发票和行程说明；住宿发票应注明入住日期与离店日期。票据日期、地点或金额与获批行程不同的，附差异说明供审核核对。直属主管的聊天回复、酒店订单和支付截图可以作为辅助材料，但不能直接替代本条要求的获批申请及有效发票。\n\n【C04】培训材料\n培训报销须有有效培训批准记录、培训发票、课程介绍和完成培训证明。培训批准的具体人员、预算和适用部门按有效培训制度核对，不能仅凭课程有结业证就判断符合公司全部报销条件。课程延期或取消时，应更新实际发生情况及退款信息，只有实际发生且有制度依据的费用进入审核。\n\n【C05】审批与付款\n申请先由直属主管核实业务真实性，再由财务审核票据。审核通过且无待补材料后，财务在3个工作日内付款；退回补件期间不属于审核通过后的付款等待期。财务发现收款信息或费用金额与材料不一致时，应退回核对，不得仅凭主管同意就跳过票据审核和信息检查。",
              "valid": true,
              "supporting_anchors": [
                "C01"
              ],
              "reason": "实际片段含已人工标注的适用事实依据。"
            },
            {
              "case_id": "UNSUPPORTED_INFERENCE-05",
              "title": "CONTRACTOR_2026.txt",
              "text_sha256": "a728a868b8baf18d15157664af2adf0583ac8a9629d5b64b25abb392208c79f6",
              "clauses": [
                "C06",
                "C07",
                "C08"
              ],
              "text": "【C06】离场与次日进入\n外协人员当日离场登记，次日再次进入须重新核验批准名单、有效材料和当日安排；多日任务仍按每日实际到场人员核对。现场联系人记录作业交接及遗留事项，记录不等于设备已经通过采购验收。交付设备的质量和供应商付款继续按采购验收及结算规则处理，不能拿门岗离场记录替代质量结论。\n\n【C07】职责与生效\n归口部门核对作业必要性与人员安排，安全管理部门核对相应入场手续，门岗执行名单与记录检查。本版自2026年1月1日起生效，行政维护人员负责发布有效文件和联系人。具体现场事项有疑问时联系归口部门核验，制度问答不能替代作业许可审批、现场交底或授权人员判断。\n\n【C08】名单与交接核对\n公司内部联系人在外协人员到场前核对最终名单、作业区域和计划时段，将批准记录与门岗登记信息对应。外协单位临时换人时，不能只在原名单姓名上手工改字后沿用原核验结论；新人员材料由归口和安全管理部门重新核对。任务结束时记录人员离场和遗留事项，由现场联系人与相关业务部门交接。门岗只据入场记录核验人员，不作设备质量评价；如需判断交付完成，应回到采购验收材料，不以人员离厂反推安装工作必然达到合同要求。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
              "valid": true,
              "supporting_anchors": [
                "C08"
              ],
              "reason": "实际片段含已人工标注的适用事实依据。"
            },
            {
              "case_id": "UNSUPPORTED_INFERENCE-05",
              "title": "VISITOR_2026.txt",
              "text_sha256": "6369a0a411e71ec0944f7d63b3d8f5406096dee0f0f66d1b77975c6d6fcc6852",
              "clauses": [
                "C01",
                "C02",
                "C03",
                "C04",
                "C05"
              ],
              "text": "商务访客预约与厂区接待管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：VISITOR；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。\n\n【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。\n\n【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。\n\n【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。\n\n【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。",
              "valid": false,
              "supporting_anchors": [],
              "reason": "未支持实际回答中的适用事实或明确资料边界；来源噪声。"
            },
            {
              "case_id": "UNSUPPORTED_INFERENCE-05",
              "title": "EXPENSE_2026.txt",
              "text_sha256": "712974564cbd4c8cdae9f8b03caec2959d10b4a19a389b8bd58e3d5027bb5d6e",
              "clauses": [
                "C06",
                "C07",
                "C08"
              ],
              "text": "【C06】异常交接\n缺失发票、重复票据、电子发票验真和抬头错误按《费用票据核验指引》处理。申请退回时列明缺少项目，申请人保留原申请编号补正后重新提交。补齐材料不代表审核自动通过，财务仍需核对业务一致性。本制度没有赋予报销助手审批、发放款项或决定个案罚款的权限。\n\n【C07】归档与版本\n财务部维护报销制度清单、审核记录和付款凭证，申请人可凭申请编号查询办理状态。制度维护人员发现模板引用旧版本时应更正模板并提示经办人核对，不得把模板文字优先于有效制度。本版自2026年1月1日生效，替代2025版；当前提交时限为7个工作日、审核通过后付款时限为3个工作日。\n\n【C08】退回材料记录\n财务退回申请时列明申请编号、缺项材料和需核对的业务差异，保留申请人原始提交时间及本次退回时间。经办人回复补件时按清单逐项说明新增材料，不另造一个已经审核通过的申请编号；原流程中的批准记录应能与新提交材料对应。没有明确的审核通过记录时，不能把“已收件”“已登记”或“待付款核对”解释为最终批准。本条仅规定材料追踪方法，不设退回一次即终止申请的次数限制，也不据此改变当年有效制度中的提交和付款时限。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
              "valid": false,
              "supporting_anchors": [],
              "reason": "同文档另一段相关，但此C06-C08片段不支持该回答实际制度事实；不能借另一片段计分。"
            },
            {
              "case_id": "UNSUPPORTED_INFERENCE-05",
              "title": "ACCEPTANCE_2026.txt",
              "text_sha256": "1cd9304804cb4022c2a34afaf884e99c03f8a19cfa3626fe5e14919b67c97390",
              "clauses": [
                "C01",
                "C02",
                "C03",
                "C04",
                "C05",
                "C06",
                "C07",
                "C08"
              ],
              "text": "采购验收与对公结算管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：ACCEPTANCE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。\n\n【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。\n\n【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。\n\n【C04】异常物资\n验收发现不合格或数量异常时，记录异常、隔离待处理并通知采购经办人，待确认处理结果后更新记录。供应商提供说明或承诺补货不能自动改变原异常结论，需求部门也不能以生产急用直接把异常写成合格。本条不规定每一种质量缺陷的责任比例、罚款或保修期限，个案需核对合同与事实。\n\n【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。\n\n【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。\n\n【C07】档案与版本\n仓库保存收货记录，需求与质量部门保存各自验收意见，采购经办人归集并与财务交接。各方对本人检查范围作出记录，不相互代填质量结论。本版从2026年1月1日起生效；使用时先区分员工报销和供应商结算，再核对业务类型、关键设备标记、合同条款及材料完整性。\n\n【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
              "valid": true,
              "supporting_anchors": [
                "C02",
                "C03",
                "C05",
                "C06",
                "C08"
              ],
              "reason": "实际片段含已人工标注的适用事实依据。"
            }
          ],
          "missing_citation": false,
          "metrics": {
            "Answer Correctness": {
              "numerator": 0,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 21,
              "denominator": 23,
              "review_required_units": 0,
              "rate": 0.9130434782608695,
              "lower_bound": 0.9130434782608695,
              "upper_bound": 0.9130434782608695,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 4,
              "denominator": 7,
              "review_required_units": 0,
              "rate": 0.5714285714285714,
              "lower_bound": 0.5714285714285714,
              "upper_bound": 0.5714285714285714,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 1,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        },
        "provenance": {
          "file": "evaluation/baseline_b_results_public.json",
          "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
          "json_path": "/cases/75"
        },
        "scoring_provenance": {
          "file": "evaluation/baseline_b_scoring_public.json",
          "sha256": "369db1ebeb0c194fd028db9fa522bb119a239ecb34b02a05d01e0cf821f9df3c",
          "json_path": "/cases/75"
        },
        "turns": [
          {
            "turn": 1,
            "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：设备采购预算批准了，所以设备质量已经合格，可以付款了吧？",
            "timestamp": "2026-10-01T07:13:03.365Z",
            "visible_answer": "**不能这样推断——这个前提本身不成立，暂时不能付款。**\n\n**1）预算批准 ≠ 质量合格。**\n预算批准解决的是\"要不要买、有没有钱\"，属于采购事前环节；设备质量是到货后的实际检查结论，两者是不同事项、不同证据。\n- 《采购验收与对公结算管理办法》【C03】：\"采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。\"\n\n**2）关键设备还缺质量部门的复核记录。**\n- 【C03】：\"关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。\"\n- 【C02】：仓库收货签字只表示完成相应接收检查，\"不等于供应商可以立即收到全部款项\"。\n\n**3）对公结算要看四类材料是否齐全、是否对应同一供应商和事项。**\n- 【C05】：应具备 ①采购批准记录 ②合同或订单 ③验收记录 ④有效发票；\"任何一类缺失均先补正，再提交完整结算审核\"；且\"发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对\"。\n\n**4）付款要等财务审核通过，并按合同节点执行。**\n- 【C06】：完整材料经财务审核通过后，原则上 15 个工作日内支付；\"未完成审核不能从到货日直接倒推出承诺付款日\"。\n\n**5）其他容易误用的旁证也不能替代验收/付款依据：**\n- 外协人员离场记录不等于设备已通过采购验收——【CONTRACTOR C06】【C08】：\"不能拿门岗离场记录替代质量结论\"，\"不以人员离厂反推安装工作必然达到合同要求\"。\n- 财务侧同样明确\"审批完成也不等于已付款\"——【INVOICE C06】。\n\n**建议的下一步核对（请先确认事实，再走流程）：**\n1. 该设备是否被标记为**关键生产设备**？若是，质量部门复核记录是否存在？\n2. 采购批准记录、合同/订单、验收记录、有效发票四类材料是否齐全且指向同一供应商与同一采购事项？\n3. 是否分批到货？未交付部分是否仍需跟踪（【C08】：不能因第一批已签收就把整单写为完成）？\n4. 合同是否约定了明确付款节点？有则按经批准合同执行，而非套用 15 个工作日。\n\n如上述材料齐备且财务审核通过，才进入付款环节；否则应先补正材料、补齐质量复核，再由财务核对付款。\n\n（注：本回答依据公司制度模拟文件，业务场景为供应商对公采购结算，不适用员工个人报销流程；具体争议请以归口部门——采购部/质量部的核验结论为准。）",
            "persisted": true,
            "operational_status": "completed",
            "visible_sources": [
              {
                "title": "VISITOR_2026.txt",
                "text": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "score": 0.3670254945755005,
                "text_sha256": "9dfe62b72621b171593a53d9103db28b6d5feb9e3757959ba26a4e9ab0279f39"
              },
              {
                "title": "INVOICE_2026.txt",
                "text": "<document_metadata>\nsourceDocument: INVOICE_2026.txt\npublished: 10/1/2026, 6:51:35 AM\n</document_metadata>\n\n【C06】与审批证明区分\n本指引中的验真证明是票据核验结果，不是培训完成证明、病假医疗证明、采购验收证明或访客预约批准。出现同名“证明”字段时应核对业务事项与出具主体，不能拿一种证明替代另一种证明。审批完成也不等于已付款，查询付款状态需结合报销流程记录和实际付款凭证。\n\n【C07】档案与维护\n财务将发票原文件、验真记录、退回补件说明与报销申请编号关联保存。制度维护人员发布变更时注明受影响条款，并提醒使用旧模板的人员核对当前版本。本指引自2026年1月1日起生效，与有效报销办法配套；出现业务额度问题时回到差旅或培训条款，不从票据核验步骤推定额外补贴或奖惩。\n\n【C08】补件清单格式\n票据补件清单必须列明原申请编号、具体错误字段和需补正的材料三项信息。只写“票据有问题”不足以让申请人核对，财务应指出是抬头、金额、日期还是验真材料缺项。经办人补交后注明对应清单项目，保留错误票据与更正文件之间的关联，避免把更正后材料误认为第二笔独立支出。同一业务包含多张发票时逐张核对；其中一张验真通过不能推定剩余票据全部合格，财务仍应保存逐张检查结果供后续复核。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "score": 0.36288750171661377,
                "text_sha256": "0816e2434d419401b38f06bc1d4837c42f1151396ea18caf68ba2c8e9fdbdac1"
              },
              {
                "title": "EXPENSE_2026.txt",
                "text": "<document_metadata>\nsourceDocument: EXPENSE_2026.txt\npublished: 10/1/2026, 6:51:31 AM\n</document_metadata>\n\n员工费用报销管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：EXPENSE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：财务部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】业务范围\n本办法适用于普通员工的已批准公务费用报销；差旅、培训分别先满足对应有效业务制度。供应商对公采购结算按采购审批与验收制度办理，不适用员工个人报销的提交和付款时限。员工本人同时是采购经办人时，应按业务性质区分，不能因为提交人是员工就把供应商款项改成个人费用。\n\n【C02】提交时限\n差旅费用在出差结束后7个工作日内提交完整申请，培训费用在课程结束后7个工作日内提交完整申请。只有把必备材料提交到报销流程才算提交，个人保存草稿或给同事发票照片不算。申请人应在事项结束后整理材料，对可能影响时限的缺件向直属主管说明，本条没有规定逾期即永久失去报销资格。\n\n【C03】差旅材料\n差旅报销须有经审批的出差申请、有效发票和行程说明；住宿发票应注明入住日期与离店日期。票据日期、地点或金额与获批行程不同的，附差异说明供审核核对。直属主管的聊天回复、酒店订单和支付截图可以作为辅助材料，但不能直接替代本条要求的获批申请及有效发票。\n\n【C04】培训材料\n培训报销须有有效培训批准记录、培训发票、课程介绍和完成培训证明。培训批准的具体人员、预算和适用部门按有效培训制度核对，不能仅凭课程有结业证就判断符合公司全部报销条件。课程延期或取消时，应更新实际发生情况及退款信息，只有实际发生且有制度依据的费用进入审核。\n\n【C05】审批与付款\n申请先由直属主管核实业务真实性，再由财务审核票据。审核通过且无待补材料后，财务在3个工作日内付款；退回补件期间不属于审核通过后的付款等待期。财务发现收款信息或费用金额与材料不一致时，应退回核对，不得仅凭主管同意就跳过票据审核和信息检查。",
                "score": 0.36248213052749634,
                "text_sha256": "4d3fe577ec1ab3afa72519ff7dc811aa79bcce931200d6f8b1923f16ea4c3f28"
              },
              {
                "title": "CONTRACTOR_2026.txt",
                "text": "<document_metadata>\nsourceDocument: CONTRACTOR_2026.txt\npublished: 10/1/2026, 6:51:21 AM\n</document_metadata>\n\n【C06】离场与次日进入\n外协人员当日离场登记，次日再次进入须重新核验批准名单、有效材料和当日安排；多日任务仍按每日实际到场人员核对。现场联系人记录作业交接及遗留事项，记录不等于设备已经通过采购验收。交付设备的质量和供应商付款继续按采购验收及结算规则处理，不能拿门岗离场记录替代质量结论。\n\n【C07】职责与生效\n归口部门核对作业必要性与人员安排，安全管理部门核对相应入场手续，门岗执行名单与记录检查。本版自2026年1月1日起生效，行政维护人员负责发布有效文件和联系人。具体现场事项有疑问时联系归口部门核验，制度问答不能替代作业许可审批、现场交底或授权人员判断。\n\n【C08】名单与交接核对\n公司内部联系人在外协人员到场前核对最终名单、作业区域和计划时段，将批准记录与门岗登记信息对应。外协单位临时换人时，不能只在原名单姓名上手工改字后沿用原核验结论；新人员材料由归口和安全管理部门重新核对。任务结束时记录人员离场和遗留事项，由现场联系人与相关业务部门交接。门岗只据入场记录核验人员，不作设备质量评价；如需判断交付完成，应回到采购验收材料，不以人员离厂反推安装工作必然达到合同要求。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "score": 0.3479917049407959,
                "text_sha256": "8c965bd12e0e526fdf7c445f920a3f4191ea4bb1926d33ee47b0ec74dcecc748"
              },
              {
                "title": "VISITOR_2026.txt",
                "text": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "score": 0.36708009243011475,
                "text_sha256": "9dfe62b72621b171593a53d9103db28b6d5feb9e3757959ba26a4e9ab0279f39"
              },
              {
                "title": "VISITOR_2026.txt",
                "text": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n商务访客预约与厂区接待管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：VISITOR；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。\n\n【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。\n\n【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。\n\n【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。\n\n【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。",
                "score": 0.3605762720108032,
                "text_sha256": "9bf9044510f773b790aacff7e9d5a52b817b17ab0de82c9e8c1c61e1566c2560"
              },
              {
                "title": "CONTRACTOR_2026.txt",
                "text": "<document_metadata>\nsourceDocument: CONTRACTOR_2026.txt\npublished: 10/1/2026, 6:51:21 AM\n</document_metadata>\n\n【C06】离场与次日进入\n外协人员当日离场登记，次日再次进入须重新核验批准名单、有效材料和当日安排；多日任务仍按每日实际到场人员核对。现场联系人记录作业交接及遗留事项，记录不等于设备已经通过采购验收。交付设备的质量和供应商付款继续按采购验收及结算规则处理，不能拿门岗离场记录替代质量结论。\n\n【C07】职责与生效\n归口部门核对作业必要性与人员安排，安全管理部门核对相应入场手续，门岗执行名单与记录检查。本版自2026年1月1日起生效，行政维护人员负责发布有效文件和联系人。具体现场事项有疑问时联系归口部门核验，制度问答不能替代作业许可审批、现场交底或授权人员判断。\n\n【C08】名单与交接核对\n公司内部联系人在外协人员到场前核对最终名单、作业区域和计划时段，将批准记录与门岗登记信息对应。外协单位临时换人时，不能只在原名单姓名上手工改字后沿用原核验结论；新人员材料由归口和安全管理部门重新核对。任务结束时记录人员离场和遗留事项，由现场联系人与相关业务部门交接。门岗只据入场记录核验人员，不作设备质量评价；如需判断交付完成，应回到采购验收材料，不以人员离厂反推安装工作必然达到合同要求。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "score": 0.33741575479507446,
                "text_sha256": "8c965bd12e0e526fdf7c445f920a3f4191ea4bb1926d33ee47b0ec74dcecc748"
              },
              {
                "title": "EXPENSE_2026.txt",
                "text": "<document_metadata>\nsourceDocument: EXPENSE_2026.txt\npublished: 10/1/2026, 6:51:31 AM\n</document_metadata>\n\n【C06】异常交接\n缺失发票、重复票据、电子发票验真和抬头错误按《费用票据核验指引》处理。申请退回时列明缺少项目，申请人保留原申请编号补正后重新提交。补齐材料不代表审核自动通过，财务仍需核对业务一致性。本制度没有赋予报销助手审批、发放款项或决定个案罚款的权限。\n\n【C07】归档与版本\n财务部维护报销制度清单、审核记录和付款凭证，申请人可凭申请编号查询办理状态。制度维护人员发现模板引用旧版本时应更正模板并提示经办人核对，不得把模板文字优先于有效制度。本版自2026年1月1日生效，替代2025版；当前提交时限为7个工作日、审核通过后付款时限为3个工作日。\n\n【C08】退回材料记录\n财务退回申请时列明申请编号、缺项材料和需核对的业务差异，保留申请人原始提交时间及本次退回时间。经办人回复补件时按清单逐项说明新增材料，不另造一个已经审核通过的申请编号；原流程中的批准记录应能与新提交材料对应。没有明确的审核通过记录时，不能把“已收件”“已登记”或“待付款核对”解释为最终批准。本条仅规定材料追踪方法，不设退回一次即终止申请的次数限制，也不据此改变当年有效制度中的提交和付款时限。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "score": 0.3189050555229187,
                "text_sha256": "98bd3647088e9bf0fee35b453767dfce79859e08b27a65f0526c6eb41795890f"
              },
              {
                "title": "ACCEPTANCE_2026.txt",
                "text": "采购验收与对公结算管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：ACCEPTANCE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。\n\n【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。\n\n【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。\n\n【C04】异常物资\n验收发现不合格或数量异常时，记录异常、隔离待处理并通知采购经办人，待确认处理结果后更新记录。供应商提供说明或承诺补货不能自动改变原异常结论，需求部门也不能以生产急用直接把异常写成合格。本条不规定每一种质量缺陷的责任比例、罚款或保修期限，个案需核对合同与事实。\n\n【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。\n\n【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。\n\n【C07】档案与版本\n仓库保存收货记录，需求与质量部门保存各自验收意见，采购经办人归集并与财务交接。各方对本人检查范围作出记录，不相互代填质量结论。本版从2026年1月1日起生效；使用时先区分员工报销和供应商结算，再核对业务类型、关键设备标记、合同条款及材料完整性。\n\n【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "score": null,
                "text_sha256": "f72320b965a4cfa06a38eecbbb9110b0fee157e2d2375f97b51fe3f7d606904f"
              }
            ],
            "provenance": {
              "file": "evaluation/baseline_b_results_public.json",
              "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
              "json_path": "/cases/75/attempts/0/turns/0"
            },
            "source_views": [
              {
                "source_index": 0,
                "title": "VISITOR_2026.txt",
                "recorded_fragment": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "recorded_fragment_sha256": "9dfe62b72621b171593a53d9103db28b6d5feb9e3757959ba26a4e9ab0279f39",
                "clause_ids": [
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/75/attempts/0/turns/0/visible_sources/0"
                },
                "policy": {
                  "policy_id": "VISITOR",
                  "title": "商务访客预约与厂区接待管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "行政部",
                  "source_file": "policy_data/raw/VISITOR_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "ff2db235220d7a44052a46e3f871e672281f9ba0a92210d58b846a98134dea72",
                  "text": "商务访客预约与厂区接待管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：VISITOR；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。\n\n【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。\n\n【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。\n\n【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。\n\n【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/VISITOR_2026.txt",
                    "sha256": "ff2db235220d7a44052a46e3f871e672281f9ba0a92210d58b846a98134dea72"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/12"
                  }
                },
                "rating": null
              },
              {
                "source_index": 1,
                "title": "INVOICE_2026.txt",
                "recorded_fragment": "<document_metadata>\nsourceDocument: INVOICE_2026.txt\npublished: 10/1/2026, 6:51:35 AM\n</document_metadata>\n\n【C06】与审批证明区分\n本指引中的验真证明是票据核验结果，不是培训完成证明、病假医疗证明、采购验收证明或访客预约批准。出现同名“证明”字段时应核对业务事项与出具主体，不能拿一种证明替代另一种证明。审批完成也不等于已付款，查询付款状态需结合报销流程记录和实际付款凭证。\n\n【C07】档案与维护\n财务将发票原文件、验真记录、退回补件说明与报销申请编号关联保存。制度维护人员发布变更时注明受影响条款，并提醒使用旧模板的人员核对当前版本。本指引自2026年1月1日起生效，与有效报销办法配套；出现业务额度问题时回到差旅或培训条款，不从票据核验步骤推定额外补贴或奖惩。\n\n【C08】补件清单格式\n票据补件清单必须列明原申请编号、具体错误字段和需补正的材料三项信息。只写“票据有问题”不足以让申请人核对，财务应指出是抬头、金额、日期还是验真材料缺项。经办人补交后注明对应清单项目，保留错误票据与更正文件之间的关联，避免把更正后材料误认为第二笔独立支出。同一业务包含多张发票时逐张核对；其中一张验真通过不能推定剩余票据全部合格，财务仍应保存逐张检查结果供后续复核。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "recorded_fragment_sha256": "0816e2434d419401b38f06bc1d4837c42f1151396ea18caf68ba2c8e9fdbdac1",
                "clause_ids": [
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/75/attempts/0/turns/0/visible_sources/1"
                },
                "policy": {
                  "policy_id": "INVOICE",
                  "title": "费用票据核验指引",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "财务部",
                  "source_file": "policy_data/raw/INVOICE_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "e150d0749ec67e88b080ac53b263ea63214d5371cf24dde75c8cf0a36b9a0dd4",
                  "text": "费用票据核验指引\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：INVOICE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：财务部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】用途与责任\n本指引适用于员工公务费用报销中的票据核验，支持差旅和培训审核；它只规定票据检查动作，不授予业务费用报销资格。费用是否属于公司承担范围，应同时核对有效差旅或培训制度。员工提交票据，财务负责核验，业务主管对实际业务的确认不能直接代替财务对票据真实性及一致性的检查。\n\n【C02】票据一致性\n发票抬头应为星桥制造有限公司，发票金额、日期、业务内容应与对应申请一致。抬头错误的发票退回更正，员工应联系开票方重新开具或依法更正后再次提交；提交人的姓名出现在订单中不能替代公司抬头。财务记录退回原因与原申请编号，避免同一张错误票据被作为另一事项重新申报。\n\n【C03】电子票据验真\n电子发票在报销审核中须完成验真并登记验真结果，保存电子原文件以便复核。电子发票符合其他核验要求时，无需额外提交纸质打印件；打印一份电子发票也不增加其真实性。验真服务暂时不可用时，记录待核验状态，等待完成核验后继续审批，不能因文件能够打开就认为验真已经通过。\n\n【C04】缺失与替代材料\n缺失发票时由员工联系开票方补开，补齐前不进入付款环节。支付截图、银行卡扣款信息、课程报名截图或酒店订单仅能作辅助说明，不可直接替代有效发票。申请人应说明实际支付与退款情况，对确实无法补开的个案交财务核验；本指引没有设置用固定比例打折报销替代补票的规则。\n\n【C05】重复与退回\n财务核对发票号码、金额和原申请记录，发现同一张发票已用于其他报销时，暂停本次票据审核并要求经办人说明，不能重复申报相同支出。误上传的票据由申请人更正材料，保留更正记录；撤回申请不自动使该发票成为尚未使用的凭据，应核对原事项是否已支付或退款。\n\n【C06】与审批证明区分\n本指引中的验真证明是票据核验结果，不是培训完成证明、病假医疗证明、采购验收证明或访客预约批准。出现同名“证明”字段时应核对业务事项与出具主体，不能拿一种证明替代另一种证明。审批完成也不等于已付款，查询付款状态需结合报销流程记录和实际付款凭证。\n\n【C07】档案与维护\n财务将发票原文件、验真记录、退回补件说明与报销申请编号关联保存。制度维护人员发布变更时注明受影响条款，并提醒使用旧模板的人员核对当前版本。本指引自2026年1月1日起生效，与有效报销办法配套；出现业务额度问题时回到差旅或培训条款，不从票据核验步骤推定额外补贴或奖惩。\n\n【C08】补件清单格式\n票据补件清单必须列明原申请编号、具体错误字段和需补正的材料三项信息。只写“票据有问题”不足以让申请人核对，财务应指出是抬头、金额、日期还是验真材料缺项。经办人补交后注明对应清单项目，保留错误票据与更正文件之间的关联，避免把更正后材料误认为第二笔独立支出。同一业务包含多张发票时逐张核对；其中一张验真通过不能推定剩余票据全部合格，财务仍应保存逐张检查结果供后续复核。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】用途与责任\n本指引适用于员工公务费用报销中的票据核验，支持差旅和培训审核；它只规定票据检查动作，不授予业务费用报销资格。费用是否属于公司承担范围，应同时核对有效差旅或培训制度。员工提交票据，财务负责核验，业务主管对实际业务的确认不能直接代替财务对票据真实性及一致性的检查。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】票据一致性\n发票抬头应为星桥制造有限公司，发票金额、日期、业务内容应与对应申请一致。抬头错误的发票退回更正，员工应联系开票方重新开具或依法更正后再次提交；提交人的姓名出现在订单中不能替代公司抬头。财务记录退回原因与原申请编号，避免同一张错误票据被作为另一事项重新申报。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】电子票据验真\n电子发票在报销审核中须完成验真并登记验真结果，保存电子原文件以便复核。电子发票符合其他核验要求时，无需额外提交纸质打印件；打印一份电子发票也不增加其真实性。验真服务暂时不可用时，记录待核验状态，等待完成核验后继续审批，不能因文件能够打开就认为验真已经通过。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】缺失与替代材料\n缺失发票时由员工联系开票方补开，补齐前不进入付款环节。支付截图、银行卡扣款信息、课程报名截图或酒店订单仅能作辅助说明，不可直接替代有效发票。申请人应说明实际支付与退款情况，对确实无法补开的个案交财务核验；本指引没有设置用固定比例打折报销替代补票的规则。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】重复与退回\n财务核对发票号码、金额和原申请记录，发现同一张发票已用于其他报销时，暂停本次票据审核并要求经办人说明，不能重复申报相同支出。误上传的票据由申请人更正材料，保留更正记录；撤回申请不自动使该发票成为尚未使用的凭据，应核对原事项是否已支付或退款。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】与审批证明区分\n本指引中的验真证明是票据核验结果，不是培训完成证明、病假医疗证明、采购验收证明或访客预约批准。出现同名“证明”字段时应核对业务事项与出具主体，不能拿一种证明替代另一种证明。审批完成也不等于已付款，查询付款状态需结合报销流程记录和实际付款凭证。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】档案与维护\n财务将发票原文件、验真记录、退回补件说明与报销申请编号关联保存。制度维护人员发布变更时注明受影响条款，并提醒使用旧模板的人员核对当前版本。本指引自2026年1月1日起生效，与有效报销办法配套；出现业务额度问题时回到差旅或培训条款，不从票据核验步骤推定额外补贴或奖惩。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】补件清单格式\n票据补件清单必须列明原申请编号、具体错误字段和需补正的材料三项信息。只写“票据有问题”不足以让申请人核对，财务应指出是抬头、金额、日期还是验真材料缺项。经办人补交后注明对应清单项目，保留错误票据与更正文件之间的关联，避免把更正后材料误认为第二笔独立支出。同一业务包含多张发票时逐张核对；其中一张验真通过不能推定剩余票据全部合格，财务仍应保存逐张检查结果供后续复核。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/INVOICE_2026.txt",
                    "sha256": "e150d0749ec67e88b080ac53b263ea63214d5371cf24dde75c8cf0a36b9a0dd4"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/4"
                  }
                },
                "rating": null
              },
              {
                "source_index": 2,
                "title": "EXPENSE_2026.txt",
                "recorded_fragment": "<document_metadata>\nsourceDocument: EXPENSE_2026.txt\npublished: 10/1/2026, 6:51:31 AM\n</document_metadata>\n\n员工费用报销管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：EXPENSE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：财务部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】业务范围\n本办法适用于普通员工的已批准公务费用报销；差旅、培训分别先满足对应有效业务制度。供应商对公采购结算按采购审批与验收制度办理，不适用员工个人报销的提交和付款时限。员工本人同时是采购经办人时，应按业务性质区分，不能因为提交人是员工就把供应商款项改成个人费用。\n\n【C02】提交时限\n差旅费用在出差结束后7个工作日内提交完整申请，培训费用在课程结束后7个工作日内提交完整申请。只有把必备材料提交到报销流程才算提交，个人保存草稿或给同事发票照片不算。申请人应在事项结束后整理材料，对可能影响时限的缺件向直属主管说明，本条没有规定逾期即永久失去报销资格。\n\n【C03】差旅材料\n差旅报销须有经审批的出差申请、有效发票和行程说明；住宿发票应注明入住日期与离店日期。票据日期、地点或金额与获批行程不同的，附差异说明供审核核对。直属主管的聊天回复、酒店订单和支付截图可以作为辅助材料，但不能直接替代本条要求的获批申请及有效发票。\n\n【C04】培训材料\n培训报销须有有效培训批准记录、培训发票、课程介绍和完成培训证明。培训批准的具体人员、预算和适用部门按有效培训制度核对，不能仅凭课程有结业证就判断符合公司全部报销条件。课程延期或取消时，应更新实际发生情况及退款信息，只有实际发生且有制度依据的费用进入审核。\n\n【C05】审批与付款\n申请先由直属主管核实业务真实性，再由财务审核票据。审核通过且无待补材料后，财务在3个工作日内付款；退回补件期间不属于审核通过后的付款等待期。财务发现收款信息或费用金额与材料不一致时，应退回核对，不得仅凭主管同意就跳过票据审核和信息检查。",
                "recorded_fragment_sha256": "4d3fe577ec1ab3afa72519ff7dc811aa79bcce931200d6f8b1923f16ea4c3f28",
                "clause_ids": [
                  "C01",
                  "C02",
                  "C03",
                  "C04",
                  "C05"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/75/attempts/0/turns/0/visible_sources/2"
                },
                "policy": {
                  "policy_id": "EXPENSE",
                  "title": "员工费用报销管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "财务部",
                  "source_file": "policy_data/raw/EXPENSE_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "4bb0b5e22210c836e0d695cd625f758d194a167f28833a51c30fdfb0e2677e83",
                  "text": "员工费用报销管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：EXPENSE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：财务部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】业务范围\n本办法适用于普通员工的已批准公务费用报销；差旅、培训分别先满足对应有效业务制度。供应商对公采购结算按采购审批与验收制度办理，不适用员工个人报销的提交和付款时限。员工本人同时是采购经办人时，应按业务性质区分，不能因为提交人是员工就把供应商款项改成个人费用。\n\n【C02】提交时限\n差旅费用在出差结束后7个工作日内提交完整申请，培训费用在课程结束后7个工作日内提交完整申请。只有把必备材料提交到报销流程才算提交，个人保存草稿或给同事发票照片不算。申请人应在事项结束后整理材料，对可能影响时限的缺件向直属主管说明，本条没有规定逾期即永久失去报销资格。\n\n【C03】差旅材料\n差旅报销须有经审批的出差申请、有效发票和行程说明；住宿发票应注明入住日期与离店日期。票据日期、地点或金额与获批行程不同的，附差异说明供审核核对。直属主管的聊天回复、酒店订单和支付截图可以作为辅助材料，但不能直接替代本条要求的获批申请及有效发票。\n\n【C04】培训材料\n培训报销须有有效培训批准记录、培训发票、课程介绍和完成培训证明。培训批准的具体人员、预算和适用部门按有效培训制度核对，不能仅凭课程有结业证就判断符合公司全部报销条件。课程延期或取消时，应更新实际发生情况及退款信息，只有实际发生且有制度依据的费用进入审核。\n\n【C05】审批与付款\n申请先由直属主管核实业务真实性，再由财务审核票据。审核通过且无待补材料后，财务在3个工作日内付款；退回补件期间不属于审核通过后的付款等待期。财务发现收款信息或费用金额与材料不一致时，应退回核对，不得仅凭主管同意就跳过票据审核和信息检查。\n\n【C06】异常交接\n缺失发票、重复票据、电子发票验真和抬头错误按《费用票据核验指引》处理。申请退回时列明缺少项目，申请人保留原申请编号补正后重新提交。补齐材料不代表审核自动通过，财务仍需核对业务一致性。本制度没有赋予报销助手审批、发放款项或决定个案罚款的权限。\n\n【C07】归档与版本\n财务部维护报销制度清单、审核记录和付款凭证，申请人可凭申请编号查询办理状态。制度维护人员发现模板引用旧版本时应更正模板并提示经办人核对，不得把模板文字优先于有效制度。本版自2026年1月1日生效，替代2025版；当前提交时限为7个工作日、审核通过后付款时限为3个工作日。\n\n【C08】退回材料记录\n财务退回申请时列明申请编号、缺项材料和需核对的业务差异，保留申请人原始提交时间及本次退回时间。经办人回复补件时按清单逐项说明新增材料，不另造一个已经审核通过的申请编号；原流程中的批准记录应能与新提交材料对应。没有明确的审核通过记录时，不能把“已收件”“已登记”或“待付款核对”解释为最终批准。本条仅规定材料追踪方法，不设退回一次即终止申请的次数限制，也不据此改变当年有效制度中的提交和付款时限。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】业务范围\n本办法适用于普通员工的已批准公务费用报销；差旅、培训分别先满足对应有效业务制度。供应商对公采购结算按采购审批与验收制度办理，不适用员工个人报销的提交和付款时限。员工本人同时是采购经办人时，应按业务性质区分，不能因为提交人是员工就把供应商款项改成个人费用。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】提交时限\n差旅费用在出差结束后7个工作日内提交完整申请，培训费用在课程结束后7个工作日内提交完整申请。只有把必备材料提交到报销流程才算提交，个人保存草稿或给同事发票照片不算。申请人应在事项结束后整理材料，对可能影响时限的缺件向直属主管说明，本条没有规定逾期即永久失去报销资格。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】差旅材料\n差旅报销须有经审批的出差申请、有效发票和行程说明；住宿发票应注明入住日期与离店日期。票据日期、地点或金额与获批行程不同的，附差异说明供审核核对。直属主管的聊天回复、酒店订单和支付截图可以作为辅助材料，但不能直接替代本条要求的获批申请及有效发票。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】培训材料\n培训报销须有有效培训批准记录、培训发票、课程介绍和完成培训证明。培训批准的具体人员、预算和适用部门按有效培训制度核对，不能仅凭课程有结业证就判断符合公司全部报销条件。课程延期或取消时，应更新实际发生情况及退款信息，只有实际发生且有制度依据的费用进入审核。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】审批与付款\n申请先由直属主管核实业务真实性，再由财务审核票据。审核通过且无待补材料后，财务在3个工作日内付款；退回补件期间不属于审核通过后的付款等待期。财务发现收款信息或费用金额与材料不一致时，应退回核对，不得仅凭主管同意就跳过票据审核和信息检查。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】异常交接\n缺失发票、重复票据、电子发票验真和抬头错误按《费用票据核验指引》处理。申请退回时列明缺少项目，申请人保留原申请编号补正后重新提交。补齐材料不代表审核自动通过，财务仍需核对业务一致性。本制度没有赋予报销助手审批、发放款项或决定个案罚款的权限。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】归档与版本\n财务部维护报销制度清单、审核记录和付款凭证，申请人可凭申请编号查询办理状态。制度维护人员发现模板引用旧版本时应更正模板并提示经办人核对，不得把模板文字优先于有效制度。本版自2026年1月1日生效，替代2025版；当前提交时限为7个工作日、审核通过后付款时限为3个工作日。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】退回材料记录\n财务退回申请时列明申请编号、缺项材料和需核对的业务差异，保留申请人原始提交时间及本次退回时间。经办人回复补件时按清单逐项说明新增材料，不另造一个已经审核通过的申请编号；原流程中的批准记录应能与新提交材料对应。没有明确的审核通过记录时，不能把“已收件”“已登记”或“待付款核对”解释为最终批准。本条仅规定材料追踪方法，不设退回一次即终止申请的次数限制，也不据此改变当年有效制度中的提交和付款时限。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/EXPENSE_2026.txt",
                    "sha256": "4bb0b5e22210c836e0d695cd625f758d194a167f28833a51c30fdfb0e2677e83"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/3"
                  }
                },
                "rating": null
              },
              {
                "source_index": 3,
                "title": "CONTRACTOR_2026.txt",
                "recorded_fragment": "<document_metadata>\nsourceDocument: CONTRACTOR_2026.txt\npublished: 10/1/2026, 6:51:21 AM\n</document_metadata>\n\n【C06】离场与次日进入\n外协人员当日离场登记，次日再次进入须重新核验批准名单、有效材料和当日安排；多日任务仍按每日实际到场人员核对。现场联系人记录作业交接及遗留事项，记录不等于设备已经通过采购验收。交付设备的质量和供应商付款继续按采购验收及结算规则处理，不能拿门岗离场记录替代质量结论。\n\n【C07】职责与生效\n归口部门核对作业必要性与人员安排，安全管理部门核对相应入场手续，门岗执行名单与记录检查。本版自2026年1月1日起生效，行政维护人员负责发布有效文件和联系人。具体现场事项有疑问时联系归口部门核验，制度问答不能替代作业许可审批、现场交底或授权人员判断。\n\n【C08】名单与交接核对\n公司内部联系人在外协人员到场前核对最终名单、作业区域和计划时段，将批准记录与门岗登记信息对应。外协单位临时换人时，不能只在原名单姓名上手工改字后沿用原核验结论；新人员材料由归口和安全管理部门重新核对。任务结束时记录人员离场和遗留事项，由现场联系人与相关业务部门交接。门岗只据入场记录核验人员，不作设备质量评价；如需判断交付完成，应回到采购验收材料，不以人员离厂反推安装工作必然达到合同要求。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "recorded_fragment_sha256": "8c965bd12e0e526fdf7c445f920a3f4191ea4bb1926d33ee47b0ec74dcecc748",
                "clause_ids": [
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/75/attempts/0/turns/0/visible_sources/3"
                },
                "policy": {
                  "policy_id": "CONTRACTOR",
                  "title": "外协作业人员入场管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "行政部与安全管理部门",
                  "source_file": "policy_data/raw/CONTRACTOR_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "0e26404ebaa1b9c66ef061e555f9ac5bda4fdd21158ad4ad7e9ed4e3c7c3e97e",
                  "text": "外协作业人员入场管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：CONTRACTOR；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部与安全管理部门\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用对象\n本办法适用于入厂维修、安装等作业的外协人员，普通商务洽谈和参观访客另按访客制度办理。公司内部联系人登记作业单位、人员名单、区域和计划时间，明确与采购订单或作业任务的对应关系。供应商同时承担商务洽谈和安装时，依据实际进入目的分别核对，不用一次访客预约覆盖全部活动。\n\n【C02】申请提前量\n外协单位通过公司内部联系人至少提前2个工作日提交入场申请，说明作业内容、区域、预计起止时间及现场负责人。申请变更人员或区域时更新信息并重新确认，未经登记的替补人员不能直接沿用原名单。批准的采购订单证明业务安排，但不替代人员入场申请和现场核验。\n\n【C03】入场材料与核验\n申请材料包括人员名单、身份信息、作业内容、人员保险证明；由作业归口部门和安全管理部门共同核验。材料应对应计划入场的实际人员，名单完整不意味着所有材料均合格，两个部门分别确认各自核验事项。保险证明不能用培训结业证明、发票验真记录或病假医疗证明替代。\n\n【C04】交底与门岗\n完成核验后，人员入场前须完成现场安全交底并留下记录，门岗依据批准名单及交底记录核验登记。曾在其他厂区接受培训不自动代替本次现场交底，外协单位声明“熟悉现场”也不是免除登记的依据。这里只描述模拟管理手续，不提供实际维修、作业或防护操作方法。\n\n【C05】区域与作业限制\n外协人员只在批准区域和时段活动；确需动火、高处作业等另需的作业许可，应由相应授权流程单独办理。入场批准和安全交底不自动构成上述作业许可，普通访客证也不能作为作业批准。区域、人员或任务变化时联系现场负责人重新核对，不能因合同总范围较广就自行扩大现场活动范围。\n\n【C06】离场与次日进入\n外协人员当日离场登记，次日再次进入须重新核验批准名单、有效材料和当日安排；多日任务仍按每日实际到场人员核对。现场联系人记录作业交接及遗留事项，记录不等于设备已经通过采购验收。交付设备的质量和供应商付款继续按采购验收及结算规则处理，不能拿门岗离场记录替代质量结论。\n\n【C07】职责与生效\n归口部门核对作业必要性与人员安排，安全管理部门核对相应入场手续，门岗执行名单与记录检查。本版自2026年1月1日起生效，行政维护人员负责发布有效文件和联系人。具体现场事项有疑问时联系归口部门核验，制度问答不能替代作业许可审批、现场交底或授权人员判断。\n\n【C08】名单与交接核对\n公司内部联系人在外协人员到场前核对最终名单、作业区域和计划时段，将批准记录与门岗登记信息对应。外协单位临时换人时，不能只在原名单姓名上手工改字后沿用原核验结论；新人员材料由归口和安全管理部门重新核对。任务结束时记录人员离场和遗留事项，由现场联系人与相关业务部门交接。门岗只据入场记录核验人员，不作设备质量评价；如需判断交付完成，应回到采购验收材料，不以人员离厂反推安装工作必然达到合同要求。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】适用对象\n本办法适用于入厂维修、安装等作业的外协人员，普通商务洽谈和参观访客另按访客制度办理。公司内部联系人登记作业单位、人员名单、区域和计划时间，明确与采购订单或作业任务的对应关系。供应商同时承担商务洽谈和安装时，依据实际进入目的分别核对，不用一次访客预约覆盖全部活动。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】申请提前量\n外协单位通过公司内部联系人至少提前2个工作日提交入场申请，说明作业内容、区域、预计起止时间及现场负责人。申请变更人员或区域时更新信息并重新确认，未经登记的替补人员不能直接沿用原名单。批准的采购订单证明业务安排，但不替代人员入场申请和现场核验。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】入场材料与核验\n申请材料包括人员名单、身份信息、作业内容、人员保险证明；由作业归口部门和安全管理部门共同核验。材料应对应计划入场的实际人员，名单完整不意味着所有材料均合格，两个部门分别确认各自核验事项。保险证明不能用培训结业证明、发票验真记录或病假医疗证明替代。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】交底与门岗\n完成核验后，人员入场前须完成现场安全交底并留下记录，门岗依据批准名单及交底记录核验登记。曾在其他厂区接受培训不自动代替本次现场交底，外协单位声明“熟悉现场”也不是免除登记的依据。这里只描述模拟管理手续，不提供实际维修、作业或防护操作方法。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】区域与作业限制\n外协人员只在批准区域和时段活动；确需动火、高处作业等另需的作业许可，应由相应授权流程单独办理。入场批准和安全交底不自动构成上述作业许可，普通访客证也不能作为作业批准。区域、人员或任务变化时联系现场负责人重新核对，不能因合同总范围较广就自行扩大现场活动范围。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】离场与次日进入\n外协人员当日离场登记，次日再次进入须重新核验批准名单、有效材料和当日安排；多日任务仍按每日实际到场人员核对。现场联系人记录作业交接及遗留事项，记录不等于设备已经通过采购验收。交付设备的质量和供应商付款继续按采购验收及结算规则处理，不能拿门岗离场记录替代质量结论。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】职责与生效\n归口部门核对作业必要性与人员安排，安全管理部门核对相应入场手续，门岗执行名单与记录检查。本版自2026年1月1日起生效，行政维护人员负责发布有效文件和联系人。具体现场事项有疑问时联系归口部门核验，制度问答不能替代作业许可审批、现场交底或授权人员判断。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】名单与交接核对\n公司内部联系人在外协人员到场前核对最终名单、作业区域和计划时段，将批准记录与门岗登记信息对应。外协单位临时换人时，不能只在原名单姓名上手工改字后沿用原核验结论；新人员材料由归口和安全管理部门重新核对。任务结束时记录人员离场和遗留事项，由现场联系人与相关业务部门交接。门岗只据入场记录核验人员，不作设备质量评价；如需判断交付完成，应回到采购验收材料，不以人员离厂反推安装工作必然达到合同要求。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/CONTRACTOR_2026.txt",
                    "sha256": "0e26404ebaa1b9c66ef061e555f9ac5bda4fdd21158ad4ad7e9ed4e3c7c3e97e"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/13"
                  }
                },
                "rating": null
              },
              {
                "source_index": 4,
                "title": "VISITOR_2026.txt",
                "recorded_fragment": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "recorded_fragment_sha256": "9dfe62b72621b171593a53d9103db28b6d5feb9e3757959ba26a4e9ab0279f39",
                "clause_ids": [
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/75/attempts/0/turns/0/visible_sources/4"
                },
                "policy": {
                  "policy_id": "VISITOR",
                  "title": "商务访客预约与厂区接待管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "行政部",
                  "source_file": "policy_data/raw/VISITOR_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "ff2db235220d7a44052a46e3f871e672281f9ba0a92210d58b846a98134dea72",
                  "text": "商务访客预约与厂区接待管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：VISITOR；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。\n\n【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。\n\n【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。\n\n【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。\n\n【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/VISITOR_2026.txt",
                    "sha256": "ff2db235220d7a44052a46e3f871e672281f9ba0a92210d58b846a98134dea72"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/12"
                  }
                },
                "rating": null
              },
              {
                "source_index": 5,
                "title": "VISITOR_2026.txt",
                "recorded_fragment": "<document_metadata>\nsourceDocument: VISITOR_2026.txt\npublished: 10/1/2026, 6:52:10 AM\n</document_metadata>\n\n商务访客预约与厂区接待管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：VISITOR；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。\n\n【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。\n\n【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。\n\n【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。\n\n【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。",
                "recorded_fragment_sha256": "9bf9044510f773b790aacff7e9d5a52b817b17ab0de82c9e8c1c61e1566c2560",
                "clause_ids": [
                  "C01",
                  "C02",
                  "C03",
                  "C04",
                  "C05"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/75/attempts/0/turns/0/visible_sources/5"
                },
                "policy": {
                  "policy_id": "VISITOR",
                  "title": "商务访客预约与厂区接待管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "行政部",
                  "source_file": "policy_data/raw/VISITOR_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "ff2db235220d7a44052a46e3f871e672281f9ba0a92210d58b846a98134dea72",
                  "text": "商务访客预约与厂区接待管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：VISITOR；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。\n\n【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。\n\n【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。\n\n【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。\n\n【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。\n\n【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。\n\n【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。\n\n【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】人员界定\n本办法适用于客户洽谈、参观等非作业商务访客；入厂进行维修、安装等作业的外协人员不适用普通访客预约替代作业入场流程。邀请员工在预约中说明来访目的、人员、预计时间和拟访问区域，行政据此核对接待安排。判断适用制度应依据实际活动，不仅依据对方名片或供应商名称。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】预约与批准\n商务访客原则上至少提前1个工作日预约，由接待部门负责人批准。邀请人填写访客姓名、来访目的、预计进入和离开时间、接待联系人与计划区域，行政核对信息完整性。预约成功只说明接待已安排，访客仍需在到达时完成门岗核验和登记，不能用聊天邀请替代已批准预约。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】门岗与访客证\n访客到达后向门岗出示有效身份证明，门岗核对已批准预约，登记后发放当日访客证。访客证限本人当日使用，不得转借；证件遗失或信息不符时联系行政核验，不能直接使用他人的预约进入。邀请员工也应按预约信息接应，不由访客自行决定访问不在预约中的其他部门。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】生产区域陪同\n进入生产区域须由接待人员全程陪同，并按现场标识要求使用相应防护用品。持有访客证不意味着可以独自进入生产区域，陪同人员变更应交接接待责任。计划访问区域变化时由接待人员联系行政核对安排，本条是模拟接待规则，不替代任何真实现场的安全操作要求。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】拍摄与资料\n厂区内拍照、录像须事先取得行政部和被拍摄区域负责人的书面同意。普通预约批准不等于拍摄许可，接待人员口头表示“应该没问题”也不能替代两项书面同意。访客不得仅凭参观身份调阅内部制度档案或生产资料，需要的资料由接待部门按业务范围另行核验提供。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】离场登记\n访客离开时在门岗登记并归还访客证，接待人员确认来访事项已结束；证件未归还时由行政联系核对。一次预约不自动覆盖次日再次来访，日期或访问目的变化时重新办理预约。接待结束不代表双方已形成采购合同、费用报销承诺或长期入厂许可，商务事项按对应正式流程办理。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】维护与边界\n行政部维护本版预约流程、接待区域与联系人信息，自2026年1月1日起生效。维修安装人员即使曾以商务访客身份来过，也应按本次实际作业目的使用外协入场制度。本办法只覆盖预约、登记、陪同和拍摄许可，不推定个人消费由公司承担或未经批准的区域可自由开放。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】预约变更核对\n接待人员核对最终到访名单、时间和计划区域，将变更情况补充到原预约记录中，行政据此安排接待衔接。访客在会谈中临时提出参观其他区域或拍摄时，应按对应批准要求重新核对，不能把原来同意洽谈的记录解释成所有事项均已授权。门岗登记按实际到场人员执行，多人同行也不得共用一人的身份和访客证。行政保存预约、批准及离场记录，业务部门另行保存会谈材料，不能用门岗记录直接证明采购合同成立或承诺承担来访人员全部费用。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/VISITOR_2026.txt",
                    "sha256": "ff2db235220d7a44052a46e3f871e672281f9ba0a92210d58b846a98134dea72"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/12"
                  }
                },
                "rating": null
              },
              {
                "source_index": 6,
                "title": "CONTRACTOR_2026.txt",
                "recorded_fragment": "<document_metadata>\nsourceDocument: CONTRACTOR_2026.txt\npublished: 10/1/2026, 6:51:21 AM\n</document_metadata>\n\n【C06】离场与次日进入\n外协人员当日离场登记，次日再次进入须重新核验批准名单、有效材料和当日安排；多日任务仍按每日实际到场人员核对。现场联系人记录作业交接及遗留事项，记录不等于设备已经通过采购验收。交付设备的质量和供应商付款继续按采购验收及结算规则处理，不能拿门岗离场记录替代质量结论。\n\n【C07】职责与生效\n归口部门核对作业必要性与人员安排，安全管理部门核对相应入场手续，门岗执行名单与记录检查。本版自2026年1月1日起生效，行政维护人员负责发布有效文件和联系人。具体现场事项有疑问时联系归口部门核验，制度问答不能替代作业许可审批、现场交底或授权人员判断。\n\n【C08】名单与交接核对\n公司内部联系人在外协人员到场前核对最终名单、作业区域和计划时段，将批准记录与门岗登记信息对应。外协单位临时换人时，不能只在原名单姓名上手工改字后沿用原核验结论；新人员材料由归口和安全管理部门重新核对。任务结束时记录人员离场和遗留事项，由现场联系人与相关业务部门交接。门岗只据入场记录核验人员，不作设备质量评价；如需判断交付完成，应回到采购验收材料，不以人员离厂反推安装工作必然达到合同要求。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "recorded_fragment_sha256": "8c965bd12e0e526fdf7c445f920a3f4191ea4bb1926d33ee47b0ec74dcecc748",
                "clause_ids": [
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/75/attempts/0/turns/0/visible_sources/6"
                },
                "policy": {
                  "policy_id": "CONTRACTOR",
                  "title": "外协作业人员入场管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "行政部与安全管理部门",
                  "source_file": "policy_data/raw/CONTRACTOR_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "0e26404ebaa1b9c66ef061e555f9ac5bda4fdd21158ad4ad7e9ed4e3c7c3e97e",
                  "text": "外协作业人员入场管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：CONTRACTOR；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：行政部与安全管理部门\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】适用对象\n本办法适用于入厂维修、安装等作业的外协人员，普通商务洽谈和参观访客另按访客制度办理。公司内部联系人登记作业单位、人员名单、区域和计划时间，明确与采购订单或作业任务的对应关系。供应商同时承担商务洽谈和安装时，依据实际进入目的分别核对，不用一次访客预约覆盖全部活动。\n\n【C02】申请提前量\n外协单位通过公司内部联系人至少提前2个工作日提交入场申请，说明作业内容、区域、预计起止时间及现场负责人。申请变更人员或区域时更新信息并重新确认，未经登记的替补人员不能直接沿用原名单。批准的采购订单证明业务安排，但不替代人员入场申请和现场核验。\n\n【C03】入场材料与核验\n申请材料包括人员名单、身份信息、作业内容、人员保险证明；由作业归口部门和安全管理部门共同核验。材料应对应计划入场的实际人员，名单完整不意味着所有材料均合格，两个部门分别确认各自核验事项。保险证明不能用培训结业证明、发票验真记录或病假医疗证明替代。\n\n【C04】交底与门岗\n完成核验后，人员入场前须完成现场安全交底并留下记录，门岗依据批准名单及交底记录核验登记。曾在其他厂区接受培训不自动代替本次现场交底，外协单位声明“熟悉现场”也不是免除登记的依据。这里只描述模拟管理手续，不提供实际维修、作业或防护操作方法。\n\n【C05】区域与作业限制\n外协人员只在批准区域和时段活动；确需动火、高处作业等另需的作业许可，应由相应授权流程单独办理。入场批准和安全交底不自动构成上述作业许可，普通访客证也不能作为作业批准。区域、人员或任务变化时联系现场负责人重新核对，不能因合同总范围较广就自行扩大现场活动范围。\n\n【C06】离场与次日进入\n外协人员当日离场登记，次日再次进入须重新核验批准名单、有效材料和当日安排；多日任务仍按每日实际到场人员核对。现场联系人记录作业交接及遗留事项，记录不等于设备已经通过采购验收。交付设备的质量和供应商付款继续按采购验收及结算规则处理，不能拿门岗离场记录替代质量结论。\n\n【C07】职责与生效\n归口部门核对作业必要性与人员安排，安全管理部门核对相应入场手续，门岗执行名单与记录检查。本版自2026年1月1日起生效，行政维护人员负责发布有效文件和联系人。具体现场事项有疑问时联系归口部门核验，制度问答不能替代作业许可审批、现场交底或授权人员判断。\n\n【C08】名单与交接核对\n公司内部联系人在外协人员到场前核对最终名单、作业区域和计划时段，将批准记录与门岗登记信息对应。外协单位临时换人时，不能只在原名单姓名上手工改字后沿用原核验结论；新人员材料由归口和安全管理部门重新核对。任务结束时记录人员离场和遗留事项，由现场联系人与相关业务部门交接。门岗只据入场记录核验人员，不作设备质量评价；如需判断交付完成，应回到采购验收材料，不以人员离厂反推安装工作必然达到合同要求。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】适用对象\n本办法适用于入厂维修、安装等作业的外协人员，普通商务洽谈和参观访客另按访客制度办理。公司内部联系人登记作业单位、人员名单、区域和计划时间，明确与采购订单或作业任务的对应关系。供应商同时承担商务洽谈和安装时，依据实际进入目的分别核对，不用一次访客预约覆盖全部活动。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】申请提前量\n外协单位通过公司内部联系人至少提前2个工作日提交入场申请，说明作业内容、区域、预计起止时间及现场负责人。申请变更人员或区域时更新信息并重新确认，未经登记的替补人员不能直接沿用原名单。批准的采购订单证明业务安排，但不替代人员入场申请和现场核验。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】入场材料与核验\n申请材料包括人员名单、身份信息、作业内容、人员保险证明；由作业归口部门和安全管理部门共同核验。材料应对应计划入场的实际人员，名单完整不意味着所有材料均合格，两个部门分别确认各自核验事项。保险证明不能用培训结业证明、发票验真记录或病假医疗证明替代。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】交底与门岗\n完成核验后，人员入场前须完成现场安全交底并留下记录，门岗依据批准名单及交底记录核验登记。曾在其他厂区接受培训不自动代替本次现场交底，外协单位声明“熟悉现场”也不是免除登记的依据。这里只描述模拟管理手续，不提供实际维修、作业或防护操作方法。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】区域与作业限制\n外协人员只在批准区域和时段活动；确需动火、高处作业等另需的作业许可，应由相应授权流程单独办理。入场批准和安全交底不自动构成上述作业许可，普通访客证也不能作为作业批准。区域、人员或任务变化时联系现场负责人重新核对，不能因合同总范围较广就自行扩大现场活动范围。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】离场与次日进入\n外协人员当日离场登记，次日再次进入须重新核验批准名单、有效材料和当日安排；多日任务仍按每日实际到场人员核对。现场联系人记录作业交接及遗留事项，记录不等于设备已经通过采购验收。交付设备的质量和供应商付款继续按采购验收及结算规则处理，不能拿门岗离场记录替代质量结论。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】职责与生效\n归口部门核对作业必要性与人员安排，安全管理部门核对相应入场手续，门岗执行名单与记录检查。本版自2026年1月1日起生效，行政维护人员负责发布有效文件和联系人。具体现场事项有疑问时联系归口部门核验，制度问答不能替代作业许可审批、现场交底或授权人员判断。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】名单与交接核对\n公司内部联系人在外协人员到场前核对最终名单、作业区域和计划时段，将批准记录与门岗登记信息对应。外协单位临时换人时，不能只在原名单姓名上手工改字后沿用原核验结论；新人员材料由归口和安全管理部门重新核对。任务结束时记录人员离场和遗留事项，由现场联系人与相关业务部门交接。门岗只据入场记录核验人员，不作设备质量评价；如需判断交付完成，应回到采购验收材料，不以人员离厂反推安装工作必然达到合同要求。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/CONTRACTOR_2026.txt",
                    "sha256": "0e26404ebaa1b9c66ef061e555f9ac5bda4fdd21158ad4ad7e9ed4e3c7c3e97e"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/13"
                  }
                },
                "rating": null
              },
              {
                "source_index": 7,
                "title": "EXPENSE_2026.txt",
                "recorded_fragment": "<document_metadata>\nsourceDocument: EXPENSE_2026.txt\npublished: 10/1/2026, 6:51:31 AM\n</document_metadata>\n\n【C06】异常交接\n缺失发票、重复票据、电子发票验真和抬头错误按《费用票据核验指引》处理。申请退回时列明缺少项目，申请人保留原申请编号补正后重新提交。补齐材料不代表审核自动通过，财务仍需核对业务一致性。本制度没有赋予报销助手审批、发放款项或决定个案罚款的权限。\n\n【C07】归档与版本\n财务部维护报销制度清单、审核记录和付款凭证，申请人可凭申请编号查询办理状态。制度维护人员发现模板引用旧版本时应更正模板并提示经办人核对，不得把模板文字优先于有效制度。本版自2026年1月1日生效，替代2025版；当前提交时限为7个工作日、审核通过后付款时限为3个工作日。\n\n【C08】退回材料记录\n财务退回申请时列明申请编号、缺项材料和需核对的业务差异，保留申请人原始提交时间及本次退回时间。经办人回复补件时按清单逐项说明新增材料，不另造一个已经审核通过的申请编号；原流程中的批准记录应能与新提交材料对应。没有明确的审核通过记录时，不能把“已收件”“已登记”或“待付款核对”解释为最终批准。本条仅规定材料追踪方法，不设退回一次即终止申请的次数限制，也不据此改变当年有效制度中的提交和付款时限。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。",
                "recorded_fragment_sha256": "98bd3647088e9bf0fee35b453767dfce79859e08b27a65f0526c6eb41795890f",
                "clause_ids": [
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/75/attempts/0/turns/0/visible_sources/7"
                },
                "policy": {
                  "policy_id": "EXPENSE",
                  "title": "员工费用报销管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "财务部",
                  "source_file": "policy_data/raw/EXPENSE_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "4bb0b5e22210c836e0d695cd625f758d194a167f28833a51c30fdfb0e2677e83",
                  "text": "员工费用报销管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：EXPENSE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：财务部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】业务范围\n本办法适用于普通员工的已批准公务费用报销；差旅、培训分别先满足对应有效业务制度。供应商对公采购结算按采购审批与验收制度办理，不适用员工个人报销的提交和付款时限。员工本人同时是采购经办人时，应按业务性质区分，不能因为提交人是员工就把供应商款项改成个人费用。\n\n【C02】提交时限\n差旅费用在出差结束后7个工作日内提交完整申请，培训费用在课程结束后7个工作日内提交完整申请。只有把必备材料提交到报销流程才算提交，个人保存草稿或给同事发票照片不算。申请人应在事项结束后整理材料，对可能影响时限的缺件向直属主管说明，本条没有规定逾期即永久失去报销资格。\n\n【C03】差旅材料\n差旅报销须有经审批的出差申请、有效发票和行程说明；住宿发票应注明入住日期与离店日期。票据日期、地点或金额与获批行程不同的，附差异说明供审核核对。直属主管的聊天回复、酒店订单和支付截图可以作为辅助材料，但不能直接替代本条要求的获批申请及有效发票。\n\n【C04】培训材料\n培训报销须有有效培训批准记录、培训发票、课程介绍和完成培训证明。培训批准的具体人员、预算和适用部门按有效培训制度核对，不能仅凭课程有结业证就判断符合公司全部报销条件。课程延期或取消时，应更新实际发生情况及退款信息，只有实际发生且有制度依据的费用进入审核。\n\n【C05】审批与付款\n申请先由直属主管核实业务真实性，再由财务审核票据。审核通过且无待补材料后，财务在3个工作日内付款；退回补件期间不属于审核通过后的付款等待期。财务发现收款信息或费用金额与材料不一致时，应退回核对，不得仅凭主管同意就跳过票据审核和信息检查。\n\n【C06】异常交接\n缺失发票、重复票据、电子发票验真和抬头错误按《费用票据核验指引》处理。申请退回时列明缺少项目，申请人保留原申请编号补正后重新提交。补齐材料不代表审核自动通过，财务仍需核对业务一致性。本制度没有赋予报销助手审批、发放款项或决定个案罚款的权限。\n\n【C07】归档与版本\n财务部维护报销制度清单、审核记录和付款凭证，申请人可凭申请编号查询办理状态。制度维护人员发现模板引用旧版本时应更正模板并提示经办人核对，不得把模板文字优先于有效制度。本版自2026年1月1日生效，替代2025版；当前提交时限为7个工作日、审核通过后付款时限为3个工作日。\n\n【C08】退回材料记录\n财务退回申请时列明申请编号、缺项材料和需核对的业务差异，保留申请人原始提交时间及本次退回时间。经办人回复补件时按清单逐项说明新增材料，不另造一个已经审核通过的申请编号；原流程中的批准记录应能与新提交材料对应。没有明确的审核通过记录时，不能把“已收件”“已登记”或“待付款核对”解释为最终批准。本条仅规定材料追踪方法，不设退回一次即终止申请的次数限制，也不据此改变当年有效制度中的提交和付款时限。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】业务范围\n本办法适用于普通员工的已批准公务费用报销；差旅、培训分别先满足对应有效业务制度。供应商对公采购结算按采购审批与验收制度办理，不适用员工个人报销的提交和付款时限。员工本人同时是采购经办人时，应按业务性质区分，不能因为提交人是员工就把供应商款项改成个人费用。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】提交时限\n差旅费用在出差结束后7个工作日内提交完整申请，培训费用在课程结束后7个工作日内提交完整申请。只有把必备材料提交到报销流程才算提交，个人保存草稿或给同事发票照片不算。申请人应在事项结束后整理材料，对可能影响时限的缺件向直属主管说明，本条没有规定逾期即永久失去报销资格。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】差旅材料\n差旅报销须有经审批的出差申请、有效发票和行程说明；住宿发票应注明入住日期与离店日期。票据日期、地点或金额与获批行程不同的，附差异说明供审核核对。直属主管的聊天回复、酒店订单和支付截图可以作为辅助材料，但不能直接替代本条要求的获批申请及有效发票。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】培训材料\n培训报销须有有效培训批准记录、培训发票、课程介绍和完成培训证明。培训批准的具体人员、预算和适用部门按有效培训制度核对，不能仅凭课程有结业证就判断符合公司全部报销条件。课程延期或取消时，应更新实际发生情况及退款信息，只有实际发生且有制度依据的费用进入审核。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】审批与付款\n申请先由直属主管核实业务真实性，再由财务审核票据。审核通过且无待补材料后，财务在3个工作日内付款；退回补件期间不属于审核通过后的付款等待期。财务发现收款信息或费用金额与材料不一致时，应退回核对，不得仅凭主管同意就跳过票据审核和信息检查。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】异常交接\n缺失发票、重复票据、电子发票验真和抬头错误按《费用票据核验指引》处理。申请退回时列明缺少项目，申请人保留原申请编号补正后重新提交。补齐材料不代表审核自动通过，财务仍需核对业务一致性。本制度没有赋予报销助手审批、发放款项或决定个案罚款的权限。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】归档与版本\n财务部维护报销制度清单、审核记录和付款凭证，申请人可凭申请编号查询办理状态。制度维护人员发现模板引用旧版本时应更正模板并提示经办人核对，不得把模板文字优先于有效制度。本版自2026年1月1日生效，替代2025版；当前提交时限为7个工作日、审核通过后付款时限为3个工作日。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】退回材料记录\n财务退回申请时列明申请编号、缺项材料和需核对的业务差异，保留申请人原始提交时间及本次退回时间。经办人回复补件时按清单逐项说明新增材料，不另造一个已经审核通过的申请编号；原流程中的批准记录应能与新提交材料对应。没有明确的审核通过记录时，不能把“已收件”“已登记”或“待付款核对”解释为最终批准。本条仅规定材料追踪方法，不设退回一次即终止申请的次数限制，也不据此改变当年有效制度中的提交和付款时限。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/EXPENSE_2026.txt",
                    "sha256": "4bb0b5e22210c836e0d695cd625f758d194a167f28833a51c30fdfb0e2677e83"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/3"
                  }
                },
                "rating": null
              },
              {
                "source_index": 8,
                "title": "ACCEPTANCE_2026.txt",
                "recorded_fragment": "采购验收与对公结算管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：ACCEPTANCE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。\n\n【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。\n\n【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。\n\n【C04】异常物资\n验收发现不合格或数量异常时，记录异常、隔离待处理并通知采购经办人，待确认处理结果后更新记录。供应商提供说明或承诺补货不能自动改变原异常结论，需求部门也不能以生产急用直接把异常写成合格。本条不规定每一种质量缺陷的责任比例、罚款或保修期限，个案需核对合同与事实。\n\n【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。\n\n【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。\n\n【C07】档案与版本\n仓库保存收货记录，需求与质量部门保存各自验收意见，采购经办人归集并与财务交接。各方对本人检查范围作出记录，不相互代填质量结论。本版从2026年1月1日起生效；使用时先区分员工报销和供应商结算，再核对业务类型、关键设备标记、合同条款及材料完整性。\n\n【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "recorded_fragment_sha256": "f72320b965a4cfa06a38eecbbb9110b0fee157e2d2375f97b51fe3f7d606904f",
                "clause_ids": [
                  "C01",
                  "C02",
                  "C03",
                  "C04",
                  "C05",
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/baseline_b_results_public.json",
                  "sha256": "7428806cd8e0717b2f61d8f16219c90ec90ca9b66444bae2925f4011da5a8ece",
                  "json_path": "/cases/75/attempts/0/turns/0/visible_sources/8"
                },
                "policy": {
                  "policy_id": "ACCEPTANCE",
                  "title": "采购验收与对公结算管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "采购部",
                  "source_file": "policy_data/raw/ACCEPTANCE_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "f72320b965a4cfa06a38eecbbb9110b0fee157e2d2375f97b51fe3f7d606904f",
                  "text": "采购验收与对公结算管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：ACCEPTANCE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。\n\n【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。\n\n【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。\n\n【C04】异常物资\n验收发现不合格或数量异常时，记录异常、隔离待处理并通知采购经办人，待确认处理结果后更新记录。供应商提供说明或承诺补货不能自动改变原异常结论，需求部门也不能以生产急用直接把异常写成合格。本条不规定每一种质量缺陷的责任比例、罚款或保修期限，个案需核对合同与事实。\n\n【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。\n\n【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。\n\n【C07】档案与版本\n仓库保存收货记录，需求与质量部门保存各自验收意见，采购经办人归集并与财务交接。各方对本人检查范围作出记录，不相互代填质量结论。本版从2026年1月1日起生效；使用时先区分员工报销和供应商结算，再核对业务类型、关键设备标记、合同条款及材料完整性。\n\n【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】异常物资\n验收发现不合格或数量异常时，记录异常、隔离待处理并通知采购经办人，待确认处理结果后更新记录。供应商提供说明或承诺补货不能自动改变原异常结论，需求部门也不能以生产急用直接把异常写成合格。本条不规定每一种质量缺陷的责任比例、罚款或保修期限，个案需核对合同与事实。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】档案与版本\n仓库保存收货记录，需求与质量部门保存各自验收意见，采购经办人归集并与财务交接。各方对本人检查范围作出记录，不相互代填质量结论。本版从2026年1月1日起生效；使用时先区分员工报销和供应商结算，再核对业务类型、关键设备标记、合同条款及材料完整性。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/ACCEPTANCE_2026.txt",
                    "sha256": "f72320b965a4cfa06a38eecbbb9110b0fee157e2d2375f97b51fe3f7d606904f"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/11"
                  }
                },
                "rating": null
              }
            ]
          }
        ]
      },
      "v1": {
        "case_id": "UNSUPPORTED_INFERENCE-05",
        "category": "unsupported_inference",
        "timestamp": "2026-10-01T10:56:39.125Z",
        "operational_status": "completed",
        "tool_trace_complete": false,
        "selected_attempt": 1,
        "attempts": [
          {
            "attempt": 1,
            "operational_status": "completed",
            "error": null,
            "turns": [
              {
                "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：设备采购预算批准了，所以设备质量已经合格，可以付款了吧？",
                "timestamp": "2026-10-01T10:56:39.182Z",
                "visible_answer": "**可以确认**\n- 采购预算/事前批准只确认需求及预算授权，不能替代设备到货后的实际质量检查，因此预算批准本身不能证明设备质量已经合格。 [1][2]\n- 关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。 [1]\n- 非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求；收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。 [1]\n- 供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项；任何一类缺失均先补正，再提交完整结算审核。 [1]\n- 发票证明开票事项但不替代验收；验收合格也不能省略财务对合同、发票和付款条件的核对。 [1]\n- 完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行；未完成审核不能从到货日直接倒推出承诺付款日。 [1]\n- 到货验收、质量复核和供应商结算材料按有效《采购验收与对公结算管理办法》办理；采购申请和有效发票不能替代收货及质量记录。 [2]\n- 《采购验收与对公结算管理办法》适用于公司采购货物或服务的到货验收及供应商对公结算；员工差旅报销不按该办法的验收角色和付款周期办理。 [1]\n\n**当前制度无法确认**\n- 设备实际质量是否已经合格，当前资料无法确认；预算批准本身不构成质量合格结论。\n- 该设备是否已有到货验收记录、质量复核记录（如属关键生产设备）、合同或订单、有效发票等结算材料，当前资料无法确认。\n- 财务审核是否已通过、付款是否已批准及具体付款日，当前资料无法确认；制度仅规定完整材料经财务审核通过后原则上15个工作日内支付，合同另有节点时按合同执行。\n\n**需要澄清**\n- 请确认该设备是否属于关键生产设备：关键生产设备须质量部门复核，非关键物资由仓库和需求部门验收。\n- 请确认当前是否已有到货验收记录、质量复核记录、合同或订单、有效发票，以及财务审核是否通过；这些事实决定能否进入付款。",
                "persisted": true,
                "operational_status": "completed",
                "governance_status_events": [
                  {
                    "type": "governanceStatus",
                    "governance_status": "verified",
                    "error_code": null
                  }
                ],
                "visible_sources": [
                  {
                    "title": "ACCEPTANCE_2026.txt",
                    "text": "采购验收与对公结算管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：ACCEPTANCE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。\n\n【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。\n\n【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。\n\n【C04】异常物资\n验收发现不合格或数量异常时，记录异常、隔离待处理并通知采购经办人，待确认处理结果后更新记录。供应商提供说明或承诺补货不能自动改变原异常结论，需求部门也不能以生产急用直接把异常写成合格。本条不规定每一种质量缺陷的责任比例、罚款或保修期限，个案需核对合同与事实。\n\n【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。\n\n【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。\n\n【C07】档案与版本\n仓库保存收货记录，需求与质量部门保存各自验收意见，采购经办人归集并与财务交接。各方对本人检查范围作出记录，不相互代填质量结论。本版从2026年1月1日起生效；使用时先区分员工报销和供应商结算，再核对业务类型、关键设备标记、合同条款及材料完整性。\n\n【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                    "score": null,
                    "text_sha256": "f72320b965a4cfa06a38eecbbb9110b0fee157e2d2375f97b51fe3f7d606904f"
                  },
                  {
                    "title": "PURCHASE_2026.txt",
                    "text": "采购需求与授权审批办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：PURCHASE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】需求范围\n本办法适用于生产和职能部门采购货物或服务的需求审批，员工个人费用报销不适用本流程。申请列明用途、规格、数量、含税预算、费用承担部门和期望交付时间；采购部负责协调供应商信息及订单准备。与供应商已沟通价格不等于获批下单，不能以口头沟通替代相应审批记录。\n\n【C02】事项与金额\n审批档位按同一采购事项含税总额核对，不能拆单规避门槛。同一用途的一批货物分两张订单仍应合并核对该事项总额，合同内运输、安装等费用计入同一事项。供应商调整报价导致总额跨档时重新取得对应层级批准，不能继续沿用低预算时的审批作为最终授权。\n\n【C03】审批权限\n含税总额不超过3000元，由部门负责人审批；超过3000元且不超过20000元，由部门负责人和财务负责人审批；超过20000元，由部门负责人、财务负责人和总经理审批。3000元计入第一档，20000元计入第二档；各批准应对应同一采购用途与金额，不用其他项目的授权覆盖本次需求。\n\n【C04】询价记录\n含税总额超过10000元的采购，至少取得2家供应商的书面报价；10000元本身不触发本条两家报价要求。不能取得两家报价的，提交唯一来源说明并按原金额层级审批，不能把说明当作取消审批的依据。报价记录包含供应商、规格、价格及有效期，便于审批人员核对可比性。\n\n【C05】紧急与变更\n紧急停线事项仍须先完成对应金额层级的审批，再下单；“紧急”不自动免除书面授权。规格、用途、数量或金额变化时，在原申请下记录变更并重新核对需要的审批人员。采购批准只确认需求和预算授权，不代表质量验收通过、付款已批准或供应商可直接进入厂区。\n\n【C06】验收与付款衔接\n到货验收、质量复核和供应商结算材料按有效《采购验收与对公结算管理办法》办理。采购申请和有效发票不能替代收货及质量记录；对需要入厂安装的供应商人员，另按外协入场制度办理。采购经理在订单上签字不意味着授予其绕过门岗登记、作业交底或其他现场制度的权限。\n\n【C07】维护与版本\n本版2026年1月1日生效，替代2025版的5000元和30000元门槛。采购部维护最新授权表，财务核对付款环节是否有对应批准。对同一采购事项有争议时应说明用途、总金额与订单关联后交采购部核对，问答助手可以指出适用档位，但不能代签或自动批准采购。\n\n【C08】授权记录核对\n采购部在每次正式下单前核对申请编号、最终含税总额及授权人员记录，并登记所使用制度版本。已批准订单发生增量时，按同一事项的变更后总额重新核对，不只看新增部分的金额档位。供应商名称或交付内容变化应在原事项下留存说明，避免把不同事项的报价与批准相互拼接。经办人询问审批层级时应同时提供订单关联关系，无法判断是否同一事项时先联系采购部确认；问答系统给出的档位说明不是一份具有审批效力的授权文件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                    "score": null,
                    "text_sha256": "33506a16494f0057f052c3be1934360208ed762500c28fa245c10ce3f07a3534"
                  }
                ]
              }
            ]
          }
        ],
        "experiment_id": "V1.1-XQ-1.0.1-SINGLE-02",
        "scoring": {
          "core_correct": 1,
          "correct_refusal": null,
          "expired_misuse": false,
          "unsupported_inference": false,
          "over_refusal": false,
          "review_required": [],
          "reason": "明确能确认的规则与未知的实际质量、材料、财务状态；未把未提供记录解释为未执行。必要追问保留关键设备条件。",
          "partial_answer_ok": true,
          "clarification_ok": null,
          "facts": [
            {
              "claim": "采购事前批准只确认需求预算，不能替代实际质量检查或证明质量合格",
              "support": "PURCHASE_2026:C05;ACCEPTANCE_2026:C03",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F001",
              "actual_source_anchors": [
                {
                  "file": "PURCHASE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】紧急与变更\n紧急停线事项仍须先完成对应金额层级的审批，再下单；“紧急”不自动免除书面授权。规格、用途、数量或金额变化时，在原申请下记录变更并重新核对需要的审批人员。采购批准只确认需求和预算授权，不代表质量验收通过、付款已批准或供应商可直接进入厂区。"
                  ]
                },
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。"
                  ]
                }
              ]
            },
            {
              "claim": "关键设备除仓库需求验收外还需质量复核",
              "support": "ACCEPTANCE_2026:C03",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F002",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。"
                  ]
                }
              ]
            },
            {
              "claim": "关键设备缺质量记录不算验收材料齐全",
              "support": "ACCEPTANCE_2026:C03",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F003",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C03",
                  "visible_quotes": [
                    "【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。"
                  ]
                }
              ]
            },
            {
              "claim": "非关键物资仓库核数量外观",
              "support": "ACCEPTANCE_2026:C02",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F004",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C02",
                  "visible_quotes": [
                    "【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。"
                  ]
                }
              ]
            },
            {
              "claim": "非关键物资需求部门核规格使用要求",
              "support": "ACCEPTANCE_2026:C02",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F005",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C02",
                  "visible_quotes": [
                    "【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。"
                  ]
                }
              ]
            },
            {
              "claim": "收货签字不表示供应商立即获得全部款项",
              "support": "ACCEPTANCE_2026:C02",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F006",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C02",
                  "visible_quotes": [
                    "【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。"
                  ]
                }
              ]
            },
            {
              "claim": "结算须采购批准记录",
              "support": "ACCEPTANCE_2026:C05",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F007",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "结算须合同或订单",
              "support": "ACCEPTANCE_2026:C05",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F008",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "结算须验收记录",
              "support": "ACCEPTANCE_2026:C05",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F009",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "结算须有效发票",
              "support": "ACCEPTANCE_2026:C05",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F010",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "材料需同供应商同采购事项",
              "support": "ACCEPTANCE_2026:C05",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F011",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "任一材料缺失先补正再完整审核",
              "support": "ACCEPTANCE_2026:C05",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F012",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "发票不替代验收",
              "support": "ACCEPTANCE_2026:C05",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F013",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "验收合格仍须财务核合同发票付款条件",
              "support": "ACCEPTANCE_2026:C05",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F014",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C05",
                  "visible_quotes": [
                    "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                  ]
                }
              ]
            },
            {
              "claim": "完整材料财务审核通过后原则15工作日支付",
              "support": "ACCEPTANCE_2026:C06",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F015",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C06",
                  "visible_quotes": [
                    "【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。"
                  ]
                }
              ]
            },
            {
              "claim": "合同明确节点按经批准合同",
              "support": "ACCEPTANCE_2026:C06",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F016",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C06",
                  "visible_quotes": [
                    "【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。"
                  ]
                }
              ]
            },
            {
              "claim": "未完成审核不能从到货日倒推承诺付款日",
              "support": "ACCEPTANCE_2026:C06",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F017",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C06",
                  "visible_quotes": [
                    "【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。"
                  ]
                }
              ]
            },
            {
              "claim": "验收质量结算材料按有效验收结算办法",
              "support": "PURCHASE_2026:C06",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F018",
              "actual_source_anchors": [
                {
                  "file": "PURCHASE_2026.txt",
                  "clause": "C06",
                  "visible_quotes": [
                    "【C06】验收与付款衔接\n到货验收、质量复核和供应商结算材料按有效《采购验收与对公结算管理办法》办理。采购申请和有效发票不能替代收货及质量记录；对需要入厂安装的供应商人员，另按外协入场制度办理。采购经理在订单上签字不意味着授予其绕过门岗登记、作业交底或其他现场制度的权限。"
                  ]
                }
              ]
            },
            {
              "claim": "采购申请和发票不能替代收货质量记录",
              "support": "PURCHASE_2026:C06",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F019",
              "actual_source_anchors": [
                {
                  "file": "PURCHASE_2026.txt",
                  "clause": "C06",
                  "visible_quotes": [
                    "【C06】验收与付款衔接\n到货验收、质量复核和供应商结算材料按有效《采购验收与对公结算管理办法》办理。采购申请和有效发票不能替代收货及质量记录；对需要入厂安装的供应商人员，另按外协入场制度办理。采购经理在订单上签字不意味着授予其绕过门岗登记、作业交底或其他现场制度的权限。"
                  ]
                }
              ]
            },
            {
              "claim": "验收结算办法适用采购货物服务及供应商，非员工差旅验收角色周期",
              "support": "ACCEPTANCE_2026:C01",
              "supported": true,
              "fact_id": "UNSUPPORTED_INFERENCE-05-F020",
              "actual_source_anchors": [
                {
                  "file": "ACCEPTANCE_2026.txt",
                  "clause": "C01",
                  "visible_quotes": [
                    "【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。"
                  ]
                }
              ]
            }
          ],
          "citations": [
            {
              "title": "ACCEPTANCE_2026.txt",
              "text_sha256": "1cd9304804cb4022c2a34afaf884e99c03f8a19cfa3626fe5e14919b67c97390",
              "valid": true,
              "reason": "实际验收及付款前提",
              "text": "采购验收与对公结算管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：ACCEPTANCE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。\n\n【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。\n\n【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。\n\n【C04】异常物资\n验收发现不合格或数量异常时，记录异常、隔离待处理并通知采购经办人，待确认处理结果后更新记录。供应商提供说明或承诺补货不能自动改变原异常结论，需求部门也不能以生产急用直接把异常写成合格。本条不规定每一种质量缺陷的责任比例、罚款或保修期限，个案需核对合同与事实。\n\n【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。\n\n【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。\n\n【C07】档案与版本\n仓库保存收货记录，需求与质量部门保存各自验收意见，采购经办人归集并与财务交接。各方对本人检查范围作出记录，不相互代填质量结论。本版从2026年1月1日起生效；使用时先区分员工报销和供应商结算，再核对业务类型、关键设备标记、合同条款及材料完整性。\n\n【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
            },
            {
              "title": "PURCHASE_2026.txt",
              "text_sha256": "9c389cc287bbec7a94aff6f0f90b175e128d704ec757858120f1011a2ef57e6c",
              "valid": true,
              "reason": "采购授权与验收付款区分",
              "text": "采购需求与授权审批办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：PURCHASE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】需求范围\n本办法适用于生产和职能部门采购货物或服务的需求审批，员工个人费用报销不适用本流程。申请列明用途、规格、数量、含税预算、费用承担部门和期望交付时间；采购部负责协调供应商信息及订单准备。与供应商已沟通价格不等于获批下单，不能以口头沟通替代相应审批记录。\n\n【C02】事项与金额\n审批档位按同一采购事项含税总额核对，不能拆单规避门槛。同一用途的一批货物分两张订单仍应合并核对该事项总额，合同内运输、安装等费用计入同一事项。供应商调整报价导致总额跨档时重新取得对应层级批准，不能继续沿用低预算时的审批作为最终授权。\n\n【C03】审批权限\n含税总额不超过3000元，由部门负责人审批；超过3000元且不超过20000元，由部门负责人和财务负责人审批；超过20000元，由部门负责人、财务负责人和总经理审批。3000元计入第一档，20000元计入第二档；各批准应对应同一采购用途与金额，不用其他项目的授权覆盖本次需求。\n\n【C04】询价记录\n含税总额超过10000元的采购，至少取得2家供应商的书面报价；10000元本身不触发本条两家报价要求。不能取得两家报价的，提交唯一来源说明并按原金额层级审批，不能把说明当作取消审批的依据。报价记录包含供应商、规格、价格及有效期，便于审批人员核对可比性。\n\n【C05】紧急与变更\n紧急停线事项仍须先完成对应金额层级的审批，再下单；“紧急”不自动免除书面授权。规格、用途、数量或金额变化时，在原申请下记录变更并重新核对需要的审批人员。采购批准只确认需求和预算授权，不代表质量验收通过、付款已批准或供应商可直接进入厂区。\n\n【C06】验收与付款衔接\n到货验收、质量复核和供应商结算材料按有效《采购验收与对公结算管理办法》办理。采购申请和有效发票不能替代收货及质量记录；对需要入厂安装的供应商人员，另按外协入场制度办理。采购经理在订单上签字不意味着授予其绕过门岗登记、作业交底或其他现场制度的权限。\n\n【C07】维护与版本\n本版2026年1月1日生效，替代2025版的5000元和30000元门槛。采购部维护最新授权表，财务核对付款环节是否有对应批准。对同一采购事项有争议时应说明用途、总金额与订单关联后交采购部核对，问答助手可以指出适用档位，但不能代签或自动批准采购。\n\n【C08】授权记录核对\n采购部在每次正式下单前核对申请编号、最终含税总额及授权人员记录，并登记所使用制度版本。已批准订单发生增量时，按同一事项的变更后总额重新核对，不只看新增部分的金额档位。供应商名称或交付内容变化应在原事项下留存说明，避免把不同事项的报价与批准相互拼接。经办人询问审批层级时应同时提供订单关联关系，无法判断是否同一事项时先联系采购部确认；问答系统给出的档位说明不是一份具有审批效力的授权文件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
            }
          ],
          "case_id": "UNSUPPORTED_INFERENCE-05",
          "category": "unsupported_inference",
          "expected_behavior": "partial_answer",
          "operational_status": "completed",
          "missing_citation": false,
          "metrics": {
            "Answer Correctness": {
              "numerator": 1,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 20,
              "denominator": 20,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 2,
              "denominator": 2,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        },
        "provenance": {
          "file": "evaluation/v1_1_results_public.json",
          "sha256": "61d9dcb58f54c63bf58de0355bf4203bb37a2517288ea9e0bceccd7857a750f3",
          "json_path": "/cases/75"
        },
        "scoring_provenance": {
          "file": "evaluation/v1_1_scoring_public.json",
          "sha256": "cd9ea5456d01542702991dce3dc515c413576ccac7e94535cd20455894f20a51",
          "json_path": "/cases/75"
        },
        "turns": [
          {
            "question": "业务适用日期：2026-10-01\n用户部门：未提供（本题不预设部门）\n问题：设备采购预算批准了，所以设备质量已经合格，可以付款了吧？",
            "timestamp": "2026-10-01T10:56:39.182Z",
            "visible_answer": "**可以确认**\n- 采购预算/事前批准只确认需求及预算授权，不能替代设备到货后的实际质量检查，因此预算批准本身不能证明设备质量已经合格。 [1][2]\n- 关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。 [1]\n- 非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求；收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。 [1]\n- 供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项；任何一类缺失均先补正，再提交完整结算审核。 [1]\n- 发票证明开票事项但不替代验收；验收合格也不能省略财务对合同、发票和付款条件的核对。 [1]\n- 完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行；未完成审核不能从到货日直接倒推出承诺付款日。 [1]\n- 到货验收、质量复核和供应商结算材料按有效《采购验收与对公结算管理办法》办理；采购申请和有效发票不能替代收货及质量记录。 [2]\n- 《采购验收与对公结算管理办法》适用于公司采购货物或服务的到货验收及供应商对公结算；员工差旅报销不按该办法的验收角色和付款周期办理。 [1]\n\n**当前制度无法确认**\n- 设备实际质量是否已经合格，当前资料无法确认；预算批准本身不构成质量合格结论。\n- 该设备是否已有到货验收记录、质量复核记录（如属关键生产设备）、合同或订单、有效发票等结算材料，当前资料无法确认。\n- 财务审核是否已通过、付款是否已批准及具体付款日，当前资料无法确认；制度仅规定完整材料经财务审核通过后原则上15个工作日内支付，合同另有节点时按合同执行。\n\n**需要澄清**\n- 请确认该设备是否属于关键生产设备：关键生产设备须质量部门复核，非关键物资由仓库和需求部门验收。\n- 请确认当前是否已有到货验收记录、质量复核记录、合同或订单、有效发票，以及财务审核是否通过；这些事实决定能否进入付款。",
            "persisted": true,
            "operational_status": "completed",
            "governance_status_events": [
              {
                "type": "governanceStatus",
                "governance_status": "verified",
                "error_code": null
              }
            ],
            "visible_sources": [
              {
                "title": "ACCEPTANCE_2026.txt",
                "text": "采购验收与对公结算管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：ACCEPTANCE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。\n\n【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。\n\n【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。\n\n【C04】异常物资\n验收发现不合格或数量异常时，记录异常、隔离待处理并通知采购经办人，待确认处理结果后更新记录。供应商提供说明或承诺补货不能自动改变原异常结论，需求部门也不能以生产急用直接把异常写成合格。本条不规定每一种质量缺陷的责任比例、罚款或保修期限，个案需核对合同与事实。\n\n【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。\n\n【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。\n\n【C07】档案与版本\n仓库保存收货记录，需求与质量部门保存各自验收意见，采购经办人归集并与财务交接。各方对本人检查范围作出记录，不相互代填质量结论。本版从2026年1月1日起生效；使用时先区分员工报销和供应商结算，再核对业务类型、关键设备标记、合同条款及材料完整性。\n\n【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "score": null,
                "text_sha256": "f72320b965a4cfa06a38eecbbb9110b0fee157e2d2375f97b51fe3f7d606904f"
              },
              {
                "title": "PURCHASE_2026.txt",
                "text": "采购需求与授权审批办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：PURCHASE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】需求范围\n本办法适用于生产和职能部门采购货物或服务的需求审批，员工个人费用报销不适用本流程。申请列明用途、规格、数量、含税预算、费用承担部门和期望交付时间；采购部负责协调供应商信息及订单准备。与供应商已沟通价格不等于获批下单，不能以口头沟通替代相应审批记录。\n\n【C02】事项与金额\n审批档位按同一采购事项含税总额核对，不能拆单规避门槛。同一用途的一批货物分两张订单仍应合并核对该事项总额，合同内运输、安装等费用计入同一事项。供应商调整报价导致总额跨档时重新取得对应层级批准，不能继续沿用低预算时的审批作为最终授权。\n\n【C03】审批权限\n含税总额不超过3000元，由部门负责人审批；超过3000元且不超过20000元，由部门负责人和财务负责人审批；超过20000元，由部门负责人、财务负责人和总经理审批。3000元计入第一档，20000元计入第二档；各批准应对应同一采购用途与金额，不用其他项目的授权覆盖本次需求。\n\n【C04】询价记录\n含税总额超过10000元的采购，至少取得2家供应商的书面报价；10000元本身不触发本条两家报价要求。不能取得两家报价的，提交唯一来源说明并按原金额层级审批，不能把说明当作取消审批的依据。报价记录包含供应商、规格、价格及有效期，便于审批人员核对可比性。\n\n【C05】紧急与变更\n紧急停线事项仍须先完成对应金额层级的审批，再下单；“紧急”不自动免除书面授权。规格、用途、数量或金额变化时，在原申请下记录变更并重新核对需要的审批人员。采购批准只确认需求和预算授权，不代表质量验收通过、付款已批准或供应商可直接进入厂区。\n\n【C06】验收与付款衔接\n到货验收、质量复核和供应商结算材料按有效《采购验收与对公结算管理办法》办理。采购申请和有效发票不能替代收货及质量记录；对需要入厂安装的供应商人员，另按外协入场制度办理。采购经理在订单上签字不意味着授予其绕过门岗登记、作业交底或其他现场制度的权限。\n\n【C07】维护与版本\n本版2026年1月1日生效，替代2025版的5000元和30000元门槛。采购部维护最新授权表，财务核对付款环节是否有对应批准。对同一采购事项有争议时应说明用途、总金额与订单关联后交采购部核对，问答助手可以指出适用档位，但不能代签或自动批准采购。\n\n【C08】授权记录核对\n采购部在每次正式下单前核对申请编号、最终含税总额及授权人员记录，并登记所使用制度版本。已批准订单发生增量时，按同一事项的变更后总额重新核对，不只看新增部分的金额档位。供应商名称或交付内容变化应在原事项下留存说明，避免把不同事项的报价与批准相互拼接。经办人询问审批层级时应同时提供订单关联关系，无法判断是否同一事项时先联系采购部确认；问答系统给出的档位说明不是一份具有审批效力的授权文件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "score": null,
                "text_sha256": "33506a16494f0057f052c3be1934360208ed762500c28fa245c10ce3f07a3534"
              }
            ],
            "provenance": {
              "file": "evaluation/v1_1_results_public.json",
              "sha256": "61d9dcb58f54c63bf58de0355bf4203bb37a2517288ea9e0bceccd7857a750f3",
              "json_path": "/cases/75/attempts/0/turns/0"
            },
            "source_views": [
              {
                "source_index": 0,
                "title": "ACCEPTANCE_2026.txt",
                "recorded_fragment": "采购验收与对公结算管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：ACCEPTANCE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。\n\n【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。\n\n【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。\n\n【C04】异常物资\n验收发现不合格或数量异常时，记录异常、隔离待处理并通知采购经办人，待确认处理结果后更新记录。供应商提供说明或承诺补货不能自动改变原异常结论，需求部门也不能以生产急用直接把异常写成合格。本条不规定每一种质量缺陷的责任比例、罚款或保修期限，个案需核对合同与事实。\n\n【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。\n\n【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。\n\n【C07】档案与版本\n仓库保存收货记录，需求与质量部门保存各自验收意见，采购经办人归集并与财务交接。各方对本人检查范围作出记录，不相互代填质量结论。本版从2026年1月1日起生效；使用时先区分员工报销和供应商结算，再核对业务类型、关键设备标记、合同条款及材料完整性。\n\n【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "recorded_fragment_sha256": "f72320b965a4cfa06a38eecbbb9110b0fee157e2d2375f97b51fe3f7d606904f",
                "clause_ids": [
                  "C01",
                  "C02",
                  "C03",
                  "C04",
                  "C05",
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/v1_1_results_public.json",
                  "sha256": "61d9dcb58f54c63bf58de0355bf4203bb37a2517288ea9e0bceccd7857a750f3",
                  "json_path": "/cases/75/attempts/0/turns/0/visible_sources/0"
                },
                "policy": {
                  "policy_id": "ACCEPTANCE",
                  "title": "采购验收与对公结算管理办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "采购部",
                  "source_file": "policy_data/raw/ACCEPTANCE_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "f72320b965a4cfa06a38eecbbb9110b0fee157e2d2375f97b51fe3f7d606904f",
                  "text": "采购验收与对公结算管理办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：ACCEPTANCE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。\n\n【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。\n\n【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。\n\n【C04】异常物资\n验收发现不合格或数量异常时，记录异常、隔离待处理并通知采购经办人，待确认处理结果后更新记录。供应商提供说明或承诺补货不能自动改变原异常结论，需求部门也不能以生产急用直接把异常写成合格。本条不规定每一种质量缺陷的责任比例、罚款或保修期限，个案需核对合同与事实。\n\n【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。\n\n【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。\n\n【C07】档案与版本\n仓库保存收货记录，需求与质量部门保存各自验收意见，采购经办人归集并与财务交接。各方对本人检查范围作出记录，不相互代填质量结论。本版从2026年1月1日起生效；使用时先区分员工报销和供应商结算，再核对业务类型、关键设备标记、合同条款及材料完整性。\n\n【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】范围与单据\n本办法适用于公司采购货物或服务的到货验收及供应商对公结算，与采购需求审批制度配套使用。员工差旅报销不按本办法的验收角色和付款周期办理。经办人以采购申请及订单编号关联交付记录，分批到货时分别记录数量与日期，不能仅凭一张供应商送货单认定全部合同已经履行。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】普通到货验收\n非关键物资到货后，由仓库保管员核对数量和外观，再由需求部门确认规格和使用要求。收货签字表示完成相应接收检查，不等于供应商可以立即收到全部款项。数量短缺或规格不符应记录差异并通知采购经办人，不能为了赶付款日期先填写与实际不符的验收结论。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】关键设备复核\n关键生产设备除仓库和需求部门验收外，还须由质量部门复核；缺少质量复核记录时不视为验收材料齐全。采购事前批准的是需求及预算，不能替代设备到货后的实际质量检查。设备由供应商安排人员安装的，同时核对外协入场手续，设备验收记录不授予安装人员自由通行权限。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】异常物资\n验收发现不合格或数量异常时，记录异常、隔离待处理并通知采购经办人，待确认处理结果后更新记录。供应商提供说明或承诺补货不能自动改变原异常结论，需求部门也不能以生产急用直接把异常写成合格。本条不规定每一种质量缺陷的责任比例、罚款或保修期限，个案需核对合同与事实。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】结算材料\n供应商对公结算应具备采购批准记录、合同或订单、验收记录和有效发票四类材料，材料应对应同一供应商和采购事项。任何一类缺失均先补正，再提交完整结算审核；发票证明开票事项但不替代验收，验收合格也不能省略财务对合同、发票和付款条件的核对。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】付款节奏\n完整材料经财务审核通过后，供应商款项原则上在15个工作日内支付；合同另有明确付款节点时按经批准合同执行。该15个工作日不适用于员工差旅或培训报销，未完成审核不能从到货日直接倒推出承诺付款日。财务记录审核日期和实际支付信息，便于采购经办人向供应商核对状态。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】档案与版本\n仓库保存收货记录，需求与质量部门保存各自验收意见，采购经办人归集并与财务交接。各方对本人检查范围作出记录，不相互代填质量结论。本版从2026年1月1日起生效；使用时先区分员工报销和供应商结算，再核对业务类型、关键设备标记、合同条款及材料完整性。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】分批到货跟踪\n采购分批到货时，仓库逐批登记实到数量，需求及质量部门按各自职责记录检查意见，采购经办人汇总累计到货和未交付部分。财务核对合同付款节点及完整材料后办理结算，不能因为第一批已签收就把全部订单写为完成。供应商补交物资后保留补交记录与原异常之间的关系，避免异常记录被无痕覆盖。验收咨询应明确普通物资还是关键生产设备、是否分批交付、当前缺少哪一类记录；这些事实会影响需要核对的材料，不能单靠发票金额判断已具备付款条件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/ACCEPTANCE_2026.txt",
                    "sha256": "f72320b965a4cfa06a38eecbbb9110b0fee157e2d2375f97b51fe3f7d606904f"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/11"
                  }
                },
                "rating": null
              },
              {
                "source_index": 1,
                "title": "PURCHASE_2026.txt",
                "recorded_fragment": "采购需求与授权审批办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：PURCHASE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】需求范围\n本办法适用于生产和职能部门采购货物或服务的需求审批，员工个人费用报销不适用本流程。申请列明用途、规格、数量、含税预算、费用承担部门和期望交付时间；采购部负责协调供应商信息及订单准备。与供应商已沟通价格不等于获批下单，不能以口头沟通替代相应审批记录。\n\n【C02】事项与金额\n审批档位按同一采购事项含税总额核对，不能拆单规避门槛。同一用途的一批货物分两张订单仍应合并核对该事项总额，合同内运输、安装等费用计入同一事项。供应商调整报价导致总额跨档时重新取得对应层级批准，不能继续沿用低预算时的审批作为最终授权。\n\n【C03】审批权限\n含税总额不超过3000元，由部门负责人审批；超过3000元且不超过20000元，由部门负责人和财务负责人审批；超过20000元，由部门负责人、财务负责人和总经理审批。3000元计入第一档，20000元计入第二档；各批准应对应同一采购用途与金额，不用其他项目的授权覆盖本次需求。\n\n【C04】询价记录\n含税总额超过10000元的采购，至少取得2家供应商的书面报价；10000元本身不触发本条两家报价要求。不能取得两家报价的，提交唯一来源说明并按原金额层级审批，不能把说明当作取消审批的依据。报价记录包含供应商、规格、价格及有效期，便于审批人员核对可比性。\n\n【C05】紧急与变更\n紧急停线事项仍须先完成对应金额层级的审批，再下单；“紧急”不自动免除书面授权。规格、用途、数量或金额变化时，在原申请下记录变更并重新核对需要的审批人员。采购批准只确认需求和预算授权，不代表质量验收通过、付款已批准或供应商可直接进入厂区。\n\n【C06】验收与付款衔接\n到货验收、质量复核和供应商结算材料按有效《采购验收与对公结算管理办法》办理。采购申请和有效发票不能替代收货及质量记录；对需要入厂安装的供应商人员，另按外协入场制度办理。采购经理在订单上签字不意味着授予其绕过门岗登记、作业交底或其他现场制度的权限。\n\n【C07】维护与版本\n本版2026年1月1日生效，替代2025版的5000元和30000元门槛。采购部维护最新授权表，财务核对付款环节是否有对应批准。对同一采购事项有争议时应说明用途、总金额与订单关联后交采购部核对，问答助手可以指出适用档位，但不能代签或自动批准采购。\n\n【C08】授权记录核对\n采购部在每次正式下单前核对申请编号、最终含税总额及授权人员记录，并登记所使用制度版本。已批准订单发生增量时，按同一事项的变更后总额重新核对，不只看新增部分的金额档位。供应商名称或交付内容变化应在原事项下留存说明，避免把不同事项的报价与批准相互拼接。经办人询问审批层级时应同时提供订单关联关系，无法判断是否同一事项时先联系采购部确认；问答系统给出的档位说明不是一份具有审批效力的授权文件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                "recorded_fragment_sha256": "33506a16494f0057f052c3be1934360208ed762500c28fa245c10ce3f07a3534",
                "clause_ids": [
                  "C01",
                  "C02",
                  "C03",
                  "C04",
                  "C05",
                  "C06",
                  "C07",
                  "C08"
                ],
                "provenance": {
                  "file": "evaluation/v1_1_results_public.json",
                  "sha256": "61d9dcb58f54c63bf58de0355bf4203bb37a2517288ea9e0bceccd7857a750f3",
                  "json_path": "/cases/75/attempts/0/turns/0/visible_sources/1"
                },
                "policy": {
                  "policy_id": "PURCHASE",
                  "title": "采购需求与授权审批办法",
                  "version": "2026",
                  "effective_date": "2026-01-01",
                  "expiry_date": null,
                  "department": [
                    "all"
                  ],
                  "status": "active",
                  "owner": "采购部",
                  "source_file": "policy_data/raw/PURCHASE_2026.txt",
                  "clause_ids": [
                    "C01",
                    "C02",
                    "C03",
                    "C04",
                    "C05",
                    "C06",
                    "C07",
                    "C08"
                  ],
                  "sha256": "33506a16494f0057f052c3be1934360208ed762500c28fa245c10ce3f07a3534",
                  "text": "采购需求与授权审批办法\n模拟制度 / 演示数据\n星桥制造有限公司（虚构）\n制度编号：PURCHASE；版本：2026；状态：active\n生效日期：2026-01-01；失效日期：未设定\n部门范围：公司各部门（业务对象以正文适用条款为准）；维护部门：采购部\n文件用途：本文件为产品设计与测试虚构的普通企业制度，不代表真实企业规定、法律意见或现场作业指令。业务对象以正文适用条款为准，部门范围不构成系统访问权限。\n\n【C01】需求范围\n本办法适用于生产和职能部门采购货物或服务的需求审批，员工个人费用报销不适用本流程。申请列明用途、规格、数量、含税预算、费用承担部门和期望交付时间；采购部负责协调供应商信息及订单准备。与供应商已沟通价格不等于获批下单，不能以口头沟通替代相应审批记录。\n\n【C02】事项与金额\n审批档位按同一采购事项含税总额核对，不能拆单规避门槛。同一用途的一批货物分两张订单仍应合并核对该事项总额，合同内运输、安装等费用计入同一事项。供应商调整报价导致总额跨档时重新取得对应层级批准，不能继续沿用低预算时的审批作为最终授权。\n\n【C03】审批权限\n含税总额不超过3000元，由部门负责人审批；超过3000元且不超过20000元，由部门负责人和财务负责人审批；超过20000元，由部门负责人、财务负责人和总经理审批。3000元计入第一档，20000元计入第二档；各批准应对应同一采购用途与金额，不用其他项目的授权覆盖本次需求。\n\n【C04】询价记录\n含税总额超过10000元的采购，至少取得2家供应商的书面报价；10000元本身不触发本条两家报价要求。不能取得两家报价的，提交唯一来源说明并按原金额层级审批，不能把说明当作取消审批的依据。报价记录包含供应商、规格、价格及有效期，便于审批人员核对可比性。\n\n【C05】紧急与变更\n紧急停线事项仍须先完成对应金额层级的审批，再下单；“紧急”不自动免除书面授权。规格、用途、数量或金额变化时，在原申请下记录变更并重新核对需要的审批人员。采购批准只确认需求和预算授权，不代表质量验收通过、付款已批准或供应商可直接进入厂区。\n\n【C06】验收与付款衔接\n到货验收、质量复核和供应商结算材料按有效《采购验收与对公结算管理办法》办理。采购申请和有效发票不能替代收货及质量记录；对需要入厂安装的供应商人员，另按外协入场制度办理。采购经理在订单上签字不意味着授予其绕过门岗登记、作业交底或其他现场制度的权限。\n\n【C07】维护与版本\n本版2026年1月1日生效，替代2025版的5000元和30000元门槛。采购部维护最新授权表，财务核对付款环节是否有对应批准。对同一采购事项有争议时应说明用途、总金额与订单关联后交采购部核对，问答助手可以指出适用档位，但不能代签或自动批准采购。\n\n【C08】授权记录核对\n采购部在每次正式下单前核对申请编号、最终含税总额及授权人员记录，并登记所使用制度版本。已批准订单发生增量时，按同一事项的变更后总额重新核对，不只看新增部分的金额档位。供应商名称或交付内容变化应在原事项下留存说明，避免把不同事项的报价与批准相互拼接。经办人询问审批层级时应同时提供订单关联关系，无法判断是否同一事项时先联系采购部确认；问答系统给出的档位说明不是一份具有审批效力的授权文件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。\n",
                  "clauses": [
                    {
                      "id": "C01",
                      "text": "【C01】需求范围\n本办法适用于生产和职能部门采购货物或服务的需求审批，员工个人费用报销不适用本流程。申请列明用途、规格、数量、含税预算、费用承担部门和期望交付时间；采购部负责协调供应商信息及订单准备。与供应商已沟通价格不等于获批下单，不能以口头沟通替代相应审批记录。"
                    },
                    {
                      "id": "C02",
                      "text": "【C02】事项与金额\n审批档位按同一采购事项含税总额核对，不能拆单规避门槛。同一用途的一批货物分两张订单仍应合并核对该事项总额，合同内运输、安装等费用计入同一事项。供应商调整报价导致总额跨档时重新取得对应层级批准，不能继续沿用低预算时的审批作为最终授权。"
                    },
                    {
                      "id": "C03",
                      "text": "【C03】审批权限\n含税总额不超过3000元，由部门负责人审批；超过3000元且不超过20000元，由部门负责人和财务负责人审批；超过20000元，由部门负责人、财务负责人和总经理审批。3000元计入第一档，20000元计入第二档；各批准应对应同一采购用途与金额，不用其他项目的授权覆盖本次需求。"
                    },
                    {
                      "id": "C04",
                      "text": "【C04】询价记录\n含税总额超过10000元的采购，至少取得2家供应商的书面报价；10000元本身不触发本条两家报价要求。不能取得两家报价的，提交唯一来源说明并按原金额层级审批，不能把说明当作取消审批的依据。报价记录包含供应商、规格、价格及有效期，便于审批人员核对可比性。"
                    },
                    {
                      "id": "C05",
                      "text": "【C05】紧急与变更\n紧急停线事项仍须先完成对应金额层级的审批，再下单；“紧急”不自动免除书面授权。规格、用途、数量或金额变化时，在原申请下记录变更并重新核对需要的审批人员。采购批准只确认需求和预算授权，不代表质量验收通过、付款已批准或供应商可直接进入厂区。"
                    },
                    {
                      "id": "C06",
                      "text": "【C06】验收与付款衔接\n到货验收、质量复核和供应商结算材料按有效《采购验收与对公结算管理办法》办理。采购申请和有效发票不能替代收货及质量记录；对需要入厂安装的供应商人员，另按外协入场制度办理。采购经理在订单上签字不意味着授予其绕过门岗登记、作业交底或其他现场制度的权限。"
                    },
                    {
                      "id": "C07",
                      "text": "【C07】维护与版本\n本版2026年1月1日生效，替代2025版的5000元和30000元门槛。采购部维护最新授权表，财务核对付款环节是否有对应批准。对同一采购事项有争议时应说明用途、总金额与订单关联后交采购部核对，问答助手可以指出适用档位，但不能代签或自动批准采购。"
                    },
                    {
                      "id": "C08",
                      "text": "【C08】授权记录核对\n采购部在每次正式下单前核对申请编号、最终含税总额及授权人员记录，并登记所使用制度版本。已批准订单发生增量时，按同一事项的变更后总额重新核对，不只看新增部分的金额档位。供应商名称或交付内容变化应在原事项下留存说明，避免把不同事项的报价与批准相互拼接。经办人询问审批层级时应同时提供订单关联关系，无法判断是否同一事项时先联系采购部确认；问答系统给出的档位说明不是一份具有审批效力的授权文件。\n\n文件结束｜模拟制度 / 演示数据｜条款编号用于证据定位，不表示已实现产品引用功能。"
                    }
                  ],
                  "identity_basis": "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配",
                  "full_text_label": "制度原文（非本轮额外引用）",
                  "metadata_label": "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验",
                  "provenance": {
                    "file": "policy_data/raw/PURCHASE_2026.txt",
                    "sha256": "33506a16494f0057f052c3be1934360208ed762500c28fa245c10ce3f07a3534"
                  },
                  "registry_provenance": {
                    "file": "policy_data/policy_registry.yaml",
                    "sha256": "0dba33105281df83b5742d839f59a063ac646ae0030e9cc1f4247053778b6811",
                    "json_path": "/policies/10"
                  }
                },
                "rating": null
              }
            ]
          }
        ]
      }
    }
  ],
  "reliability": {
    "title": "04 失败与恢复",
    "source_excerpt": "# 一次真实中断与可靠性修复\n\n## 问题与影响\n\nV1冻结 `1125eef`，实验 `V1-XQ-1.0.1-SINGLE-01`：61题完整返回后，FOLLOW_UP-09第二轮发生 governance_invalid_json，容器exit=1，OOMKilled=false。该实验永久作为中断实验封存，未续跑、未删除、未用61题子集生成最终成绩。\n\n## 根因证据分级\n\n- **已证实**：保存的861字符治理响应中，supports外层数组缺少闭合符号；标准JSON解析在位置643失败。原gate抛错；多轮EventEmitter的异步中断回调没有隔离拒绝。离线可重现进程exit=1。\n- **高概率机制**：治理解析异常经多轮continue/异步回调传播为未捕获拒绝，从而退出进程。\n- **尚未证明**：生产中断当时的完整进程堆栈未取得，不能把离线复现写成完整生产堆栈证实；不能归因OOM。\n\n## V1.1修复\n\n有界解析 → 严格Schema（必填/类型/未知字段/大小）→ 业务证据校验 → 明确失败状态。失败时清除未经治理的来源、返回“暂时无法可靠核验依据”，记录技术错误。局部Promise与回调隔离，当前轮失败不击穿服务。历史证据采用结构化用途/日期，避免把单一指定措辞当成安全条件。\n\n技术失败与NO_EVIDENCE严格分开，不给失败轮计正确拒答；不猜测补齐不合法JSON。\n\n## 验证与结果\n\n- [17/17故障注入](../evidence/v1_1/fault_injection_results.json)：非法/截断/空JSON、缺字段、错类型、多余字段、长响应、模块与回调异常、多轮第二轮失败后恢复、下一case继续。\n- 使用真实本地WebSocket和上游continue方法，模型与数据库为stub；**不是生产HTTP端点故障注入**。另有3/3边界和4/4测量检查。\n- 独立28题Dev：27有效、1治理错误，核心任务27/28，未观察到过度拒答，0服务级中断。\n- 冻结V1.1 `69aaaf26074ff8722a39857085f99ece122ea0be`，新实验 `V1.1-XQ-1.0.1-SINGLE-02` 从第1题完整执行80题序列：78有效、2最终治理失败、0服务级中断。\n\n## 遗留风险\n\n严格校验能阻止部分未经核验的输出，也会降低可用性；本轮2题quote_not_in_candidate失败即例证。服务没崩不代表所有任务成功，更不代表生产可靠性。语义判断、模型随机性、完整trace缺失和过度拒答仍未解决。本项目在此停止开发。\n",
    "provenance": {
      "file": "docs/v1_interruption_postmortem.md",
      "sha256": "f7ed9650c0041b09a894a1cb5a51517bc2d1f4dd0f050a287be14ed05805352f"
    },
    "record_origin": "以下中断过程来自已公开复盘文档；公开仓库未包含首次中断实验完整聊天/治理响应，因此不伪造原始回放。",
    "steps": [
      {
        "title": "发生了什么",
        "text": "V1实验61题完整返回后，FOLLOW_UP-09第二轮出现 governance_invalid_json，容器exit=1，OOMKilled=false。原中断实验保留，未续跑。"
      },
      {
        "title": "证据确认到哪一步",
        "text": "复盘记录：supports外层数组未闭合、JSON位置643解析失败；原gate抛错与异步回调未隔离拒绝可离线复现。生产中断的完整堆栈没有取得。"
      },
      {
        "title": "V1.1怎么处理",
        "text": "有界解析、严格Schema、明确失败状态、fail-safe与Promise/回调异常隔离。技术失败不冒充正确拒答或无证据回答。"
      },
      {
        "title": "最后实际验证",
        "text": "17/17离线故障注入通过；独立28题Dev为27有效、1治理错误；正式80题序列结束，78有效、2治理失败、0服务级中断。"
      }
    ],
    "validation": {
      "passed": 17,
      "failed": 0,
      "model_calls": 0,
      "actual_websocket": true,
      "actual_upstream_continue": true,
      "production_http_endpoint_fault_injection": false,
      "audits": 17,
      "results": [
        {
          "thread": 100,
          "kind": "malformed",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_invalid_json",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 101,
          "kind": "truncated",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_invalid_json",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 102,
          "kind": "missing",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_missing_field",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 103,
          "kind": "type",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_invalid_shape",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 104,
          "kind": "empty",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_empty_response",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 105,
          "kind": "extra",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_unexpected_field",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 106,
          "kind": "long",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_invalid_shape",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 107,
          "kind": "huge",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_response_too_large",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 108,
          "kind": "null",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_invalid_shape",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 109,
          "kind": "module_throw",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_internal_error",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 110,
          "kind": "callback_throw",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_internal_error",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 200,
          "kind": "valid",
          "expected": "verified",
          "actual": "verified",
          "error": null,
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 200,
          "kind": "malformed",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_invalid_json",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 200,
          "kind": "valid",
          "expected": "verified",
          "actual": "verified",
          "error": null,
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 201,
          "kind": "valid",
          "expected": "verified",
          "actual": "verified",
          "error": null,
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 202,
          "kind": "module_throw",
          "expected": "failed",
          "actual": "failed",
          "error": "governance_internal_error",
          "service_alive": true,
          "draft_exposed": false
        },
        {
          "thread": 203,
          "kind": "valid",
          "expected": "verified",
          "actual": "verified",
          "error": null,
          "service_alive": true,
          "draft_exposed": false
        }
      ]
    },
    "validation_provenance": {
      "file": "evidence/v1_1/fault_injection_results.json",
      "sha256": "bd167203485b2adbe0fa291c163cfcc979967501e0980304a78ca77e2798f7fa"
    },
    "records": {
      "interrupted_experiment_id": "V1-XQ-1.0.1-SINGLE-01",
      "interrupted_commit": "1125eef",
      "v1_1_experiment_id": "V1.1-XQ-1.0.1-SINGLE-02",
      "operational": {
        "planned": 80,
        "completed": 78,
        "failed": 2,
        "retries": 2,
        "unique_successful_threads": 78,
        "completed_user_turns": 88,
        "total_attempts": 82,
        "failed_attempts": 4,
        "submitted_user_turns": 92,
        "persisted_user_turns": 92,
        "governance_failed_turns": 4,
        "governance_error_codes": {
          "governance_validation:quote_not_in_candidate": 2,
          "governance_missing_field": 1,
          "governance_invalid_json": 1
        },
        "recovered_after_retry_case_ids": [
          "DIRECT_ANSWER-04",
          "MULTI_POLICY-10"
        ],
        "service_interruption": false
      },
      "record_kind": "postmortem_reported",
      "complete_interrupted_run_available": false
    },
    "limitations": "故障注入使用真实本地WebSocket及上游continue，模型/数据库为stub，不是生产HTTP端点故障注入；17/17和服务未退出都不证明生产稳定性。"
  },
  "evaluation": {
    "provenance": {
      "file": "docs/evaluation_report.md",
      "sha256": "7903b3a7bbe30085eac02aa72fb615acc81496667fa3c106ad0c12fe48659c0c"
    },
    "planned_per_group": 80,
    "operational": {
      "baseline": {
        "planned": 80,
        "completed": 80,
        "failed": 0,
        "retries": 0,
        "user_turns": 90,
        "unique_threads": 80,
        "persisted_turns": 90,
        "review_required_cases": 10
      },
      "v1": {
        "planned": 80,
        "completed": 78,
        "failed": 2,
        "retries": 2,
        "unique_successful_threads": 78,
        "completed_user_turns": 88,
        "total_attempts": 82,
        "failed_attempts": 4,
        "submitted_user_turns": 92,
        "persisted_user_turns": 92,
        "governance_failed_turns": 4,
        "governance_error_codes": {
          "governance_validation:quote_not_in_candidate": 2,
          "governance_missing_field": 1,
          "governance_invalid_json": 1
        },
        "recovered_after_retry_case_ids": [
          "DIRECT_ANSWER-04",
          "MULTI_POLICY-10"
        ],
        "service_interruption": false
      }
    },
    "categories": {
      "baseline": {
        "direct_answer": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 10,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 111,
              "denominator": 112,
              "review_required_units": 0,
              "rate": 0.9910714285714286,
              "lower_bound": 0.9910714285714286,
              "upper_bound": 0.9910714285714286,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 21,
              "denominator": 35,
              "review_required_units": 0,
              "rate": 0.6,
              "lower_bound": 0.6,
              "upper_bound": 0.6,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          },
          "review_required_case_ids": []
        },
        "multi_policy": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 10,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 252,
              "denominator": 256,
              "review_required_units": 0,
              "rate": 0.984375,
              "lower_bound": 0.984375,
              "upper_bound": 0.984375,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 41,
              "denominator": 68,
              "review_required_units": 0,
              "rate": 0.6029411764705882,
              "lower_bound": 0.6029411764705882,
              "upper_bound": 0.6029411764705882,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 2,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.2,
              "lower_bound": 0.2,
              "upper_bound": 0.2,
              "NA_cases": 0,
              "operational_errors": 0
            }
          },
          "review_required_case_ids": [
            "MULTI_POLICY-03"
          ]
        },
        "no_answer": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 61,
              "denominator": 73,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.8356164383561644,
              "upper_bound": 0.8493150684931506,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 70,
              "denominator": 93,
              "review_required_units": 0,
              "rate": 0.7526881720430108,
              "lower_bound": 0.7526881720430108,
              "upper_bound": 0.7526881720430108,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 5,
              "denominator": 10,
              "review_required_units": 4,
              "rate": null,
              "lower_bound": 0.5,
              "upper_bound": 0.9,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 4,
              "denominator": 10,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.4,
              "upper_bound": 0.5,
              "NA_cases": 0,
              "operational_errors": 0
            }
          },
          "review_required_case_ids": [
            "NO_ANSWER-03",
            "NO_ANSWER-09",
            "NO_ANSWER-02",
            "NO_ANSWER-08"
          ]
        },
        "expired_policy": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 10,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 115,
              "denominator": 117,
              "review_required_units": 0,
              "rate": 0.9829059829059829,
              "lower_bound": 0.9829059829059829,
              "upper_bound": 0.9829059829059829,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 34,
              "denominator": 50,
              "review_required_units": 0,
              "rate": 0.68,
              "lower_bound": 0.68,
              "upper_bound": 0.68,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          },
          "review_required_case_ids": []
        },
        "department_scope": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 8,
              "denominator": 8,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 2,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 115,
              "denominator": 117,
              "review_required_units": 2,
              "rate": null,
              "lower_bound": 0.9829059829059829,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 22,
              "denominator": 69,
              "review_required_units": 0,
              "rate": 0.3188405797101449,
              "lower_bound": 0.3188405797101449,
              "upper_bound": 0.3188405797101449,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 10,
              "review_required_units": 2,
              "rate": null,
              "lower_bound": 0.0,
              "upper_bound": 0.2,
              "NA_cases": 0,
              "operational_errors": 0
            }
          },
          "review_required_case_ids": [
            "DEPARTMENT_SCOPE-09",
            "DEPARTMENT_SCOPE-08"
          ]
        },
        "distractor": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 10,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 140,
              "denominator": 144,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.9722222222222222,
              "upper_bound": 0.9791666666666666,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 38,
              "denominator": 64,
              "review_required_units": 0,
              "rate": 0.59375,
              "lower_bound": 0.59375,
              "upper_bound": 0.59375,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 2,
              "denominator": 10,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.2,
              "upper_bound": 0.3,
              "NA_cases": 0,
              "operational_errors": 0
            }
          },
          "review_required_case_ids": [
            "DISTRACTOR-05"
          ]
        },
        "unsupported_inference": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 8,
              "denominator": 10,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.8,
              "upper_bound": 0.9,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 124,
              "denominator": 131,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.9465648854961832,
              "upper_bound": 0.9541984732824428,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 34,
              "denominator": 62,
              "review_required_units": 0,
              "rate": 0.5483870967741935,
              "lower_bound": 0.5483870967741935,
              "upper_bound": 0.5483870967741935,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 1,
              "denominator": 10,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.1,
              "upper_bound": 0.2,
              "NA_cases": 0,
              "operational_errors": 0
            }
          },
          "review_required_case_ids": [
            "UNSUPPORTED_INFERENCE-04"
          ]
        },
        "follow_up": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 8,
              "denominator": 9,
              "review_required_units": 0,
              "rate": 0.8888888888888888,
              "lower_bound": 0.8888888888888888,
              "upper_bound": 0.8888888888888888,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 123,
              "denominator": 142,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.8661971830985915,
              "upper_bound": 0.8732394366197183,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 30,
              "denominator": 50,
              "review_required_units": 0,
              "rate": 0.6,
              "lower_bound": 0.6,
              "upper_bound": 0.6,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 1,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 9,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 2,
              "denominator": 10,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.2,
              "upper_bound": 0.3,
              "NA_cases": 0,
              "operational_errors": 0
            }
          },
          "review_required_case_ids": [
            "FOLLOW_UP-10"
          ]
        }
      },
      "v1": {
        "direct_answer": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 9,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.9,
              "lower_bound": 0.9,
              "upper_bound": 0.9,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 52,
              "denominator": 52,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 14,
              "denominator": 14,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        },
        "multi_policy": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 10,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 188,
              "denominator": 188,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 28,
              "denominator": 28,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        },
        "no_answer": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 6,
              "denominator": 7,
              "review_required_units": 0,
              "rate": 0.8571428571428571,
              "lower_bound": 0.8571428571428571,
              "upper_bound": 0.8571428571428571,
              "NA_cases": 7,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 2,
              "denominator": 2,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 8,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 10,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        },
        "expired_policy": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 10,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 81,
              "denominator": 81,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 25,
              "denominator": 25,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        },
        "department_scope": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 8,
              "denominator": 8,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 2,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 76,
              "denominator": 76,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 13,
              "denominator": 13,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        },
        "distractor": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 10,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 88,
              "denominator": 88,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 20,
              "denominator": 21,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.9523809523809523,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        },
        "unsupported_inference": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 6,
              "denominator": 8,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.75,
              "upper_bound": 0.875,
              "NA_cases": 2,
              "operational_errors": 2
            },
            "Evidence Support Rate": {
              "numerator": 75,
              "denominator": 76,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.9868421052631579,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 2
            },
            "Citation Accuracy": {
              "numerator": 12,
              "denominator": 12,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 0,
              "operational_errors": 2
            },
            "Correct Refusal Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 2
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 2
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 8,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.0,
              "upper_bound": 0.125,
              "NA_cases": 0,
              "operational_errors": 2
            }
          }
        },
        "follow_up": {
          "cases": 10,
          "metrics": {
            "Answer Correctness": {
              "numerator": 7,
              "denominator": 9,
              "review_required_units": 1,
              "rate": null,
              "lower_bound": 0.7777777777777778,
              "upper_bound": 0.8888888888888888,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Evidence Support Rate": {
              "numerator": 45,
              "denominator": 45,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Citation Accuracy": {
              "numerator": 13,
              "denominator": 13,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 1,
              "operational_errors": 0
            },
            "Correct Refusal Rate": {
              "numerator": 1,
              "denominator": 1,
              "review_required_units": 0,
              "rate": 1.0,
              "lower_bound": 1.0,
              "upper_bound": 1.0,
              "NA_cases": 9,
              "operational_errors": 0
            },
            "Expired Policy Error Rate": {
              "numerator": 0,
              "denominator": 0,
              "review_required_units": 0,
              "rate": null,
              "lower_bound": null,
              "upper_bound": null,
              "NA_cases": 10,
              "operational_errors": 0
            },
            "Unsupported Inference Rate": {
              "numerator": 0,
              "denominator": 10,
              "review_required_units": 0,
              "rate": 0.0,
              "lower_bound": 0.0,
              "upper_bound": 0.0,
              "NA_cases": 0,
              "operational_errors": 0
            }
          }
        }
      }
    },
    "noise": {
      "baseline": {
        "confirmed": 63,
        "denominator": 80,
        "case_ids": [
          "DEPARTMENT_SCOPE-09",
          "DISTRACTOR-10",
          "NO_ANSWER-05",
          "FOLLOW_UP-06",
          "DISTRACTOR-07",
          "DIRECT_ANSWER-01",
          "EXPIRED_POLICY-10",
          "FOLLOW_UP-01",
          "NO_ANSWER-09",
          "UNSUPPORTED_INFERENCE-03",
          "DEPARTMENT_SCOPE-03",
          "DISTRACTOR-02",
          "FOLLOW_UP-10",
          "DIRECT_ANSWER-09",
          "DEPARTMENT_SCOPE-01",
          "UNSUPPORTED_INFERENCE-06",
          "MULTI_POLICY-05",
          "MULTI_POLICY-06",
          "UNSUPPORTED_INFERENCE-01",
          "MULTI_POLICY-08",
          "DEPARTMENT_SCOPE-06",
          "DISTRACTOR-03",
          "NO_ANSWER-04",
          "EXPIRED_POLICY-08",
          "DEPARTMENT_SCOPE-07",
          "DEPARTMENT_SCOPE-08",
          "EXPIRED_POLICY-02",
          "UNSUPPORTED_INFERENCE-09",
          "FOLLOW_UP-05",
          "DEPARTMENT_SCOPE-04",
          "UNSUPPORTED_INFERENCE-02",
          "UNSUPPORTED_INFERENCE-07",
          "UNSUPPORTED_INFERENCE-10",
          "MULTI_POLICY-09",
          "FOLLOW_UP-08",
          "UNSUPPORTED_INFERENCE-04",
          "EXPIRED_POLICY-06",
          "DIRECT_ANSWER-05",
          "DEPARTMENT_SCOPE-02",
          "DISTRACTOR-01",
          "DIRECT_ANSWER-04",
          "NO_ANSWER-06",
          "DISTRACTOR-06",
          "MULTI_POLICY-03",
          "NO_ANSWER-10",
          "MULTI_POLICY-07",
          "EXPIRED_POLICY-07",
          "FOLLOW_UP-04",
          "DISTRACTOR-08",
          "FOLLOW_UP-09",
          "MULTI_POLICY-10",
          "DISTRACTOR-04",
          "DEPARTMENT_SCOPE-05",
          "DIRECT_ANSWER-08",
          "DEPARTMENT_SCOPE-10",
          "DISTRACTOR-05",
          "DIRECT_ANSWER-10",
          "DIRECT_ANSWER-06",
          "MULTI_POLICY-01",
          "UNSUPPORTED_INFERENCE-05",
          "NO_ANSWER-08",
          "FOLLOW_UP-02",
          "EXPIRED_POLICY-01"
        ]
      },
      "v1": {
        "confirmed": 0,
        "denominator": 78,
        "review_required": 1,
        "case_ids": [],
        "review_required_case_ids": [
          "DISTRACTOR-10"
        ]
      }
    },
    "tradeoffs": {
      "answer_correctness_regression": true,
      "baseline_correct_v1_wrong": [
        "UNSUPPORTED_INFERENCE-06",
        "FOLLOW_UP-08",
        "DIRECT_ANSWER-04"
      ],
      "baseline_wrong_v1_correct": [
        "FOLLOW_UP-04",
        "UNSUPPORTED_INFERENCE-05"
      ],
      "over_refusal_case_ids": [
        "UNSUPPORTED_INFERENCE-06",
        "FOLLOW_UP-08"
      ],
      "baseline_correct_v1_operational_error": [
        "UNSUPPORTED_INFERENCE-01",
        "UNSUPPORTED_INFERENCE-10"
      ],
      "conservative_end_to_end_core": {
        "numerator": 60,
        "denominator": 67,
        "review_required_units": 2,
        "rate": null,
        "lower_bound": 0.8955223880597015,
        "upper_bound": 0.9253731343283582,
        "NA_cases": 0,
        "operational_errors": 0
      }
    },
    "limitations": [
      "模拟制度/演示数据",
      "单次固定回归，非严格未见盲测",
      "单评审初标、争议保留",
      "没有统计显著性或生产可靠性推断",
      "tool_trace_complete=false，不能归因于单独检索算法",
      "V1.1存在2治理失败及部分答案正确性退化，不能宣称全部80题成功或整体准确率提升"
    ]
  }
};

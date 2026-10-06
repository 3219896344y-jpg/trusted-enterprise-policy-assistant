"""Build a static, auditable replay from already-public historical records.

This script never calls a model, opens private storage, or changes experiments.
Run from any directory: python -X utf8 demo/build_replay.py
"""
from __future__ import annotations

import copy
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "demo/replay_data.js"


def sha_bytes(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def read_json(path: str):
    return json.loads((ROOT / path).read_text(encoding="utf-8-sig"))


def identity(path: str, json_path: str | None = None) -> dict:
    result = {"file": path, "sha256": sha_bytes((ROOT / path).read_bytes())}
    if json_path is not None:
        result["json_path"] = json_path
    return result


def read_registry() -> list[dict]:
    """Read this repository's simple, frozen YAML without extra packages.

    Only quoted JSON scalars, JSON lists, and null are accepted. Fail rather
    than invent registry metadata if the frozen shape ever changes.
    """
    text = (ROOT / "policy_data/policy_registry.yaml").read_text(encoding="utf-8-sig")
    policies = []
    for block in re.split(r"(?m)^  - policy_id: ", text)[1:]:
        lines = block.splitlines()
        item = {"policy_id": json.loads(lines[0])}
        for line in lines[1:]:
            match = re.fullmatch(r"    ([a-z_0-9]+): (.+)", line)
            if match:
                item[match[1]] = json.loads(match[2])
        file = ROOT / item["source_file"]
        assert sha_bytes(file.read_bytes()) == item["sha256"], item["source_file"]
        item["text"] = file.read_text(encoding="utf-8-sig")
        item["clauses"] = [
            {"id": match.group(1), "text": match.group(0).rstrip()}
            for match in re.finditer(r"【(C\d+)】[^【]+", item["text"])
        ]
        policies.append(item)
    assert len(policies) == 14
    return policies


def case_index(records: dict, case_id: str) -> int:
    indices = [i for i, row in enumerate(records["cases"]) if row["case_id"] == case_id]
    assert len(indices) == 1, case_id
    return indices[0]


def make_record(case_id: str, results_path: str, scoring_path: str,
                registry: list[dict]) -> dict:
    results = read_json(results_path)
    scores = read_json(scoring_path)
    idx = case_index(results, case_id)
    score_idx = case_index(scores, case_id)
    original = results["cases"][idx]
    scoring = scores["cases"][score_idx]
    record = copy.deepcopy(original)
    record["experiment_id"] = scores["experiment_id"]
    record["scoring"] = copy.deepcopy(scoring)
    record["provenance"] = identity(results_path, f"/cases/{idx}")
    record["scoring_provenance"] = identity(scoring_path, f"/cases/{score_idx}")
    attempts = record["attempts"]
    selected = [i for i, a in enumerate(attempts) if a["attempt"] == record["selected_attempt"]]
    assert len(selected) == 1
    attempt_idx = selected[0]
    # Attempts remain exact copies. These enriched selected-turn views are UI-only.
    record["turns"] = copy.deepcopy(attempts[attempt_idx]["turns"])
    for turn_idx, turn in enumerate(record["turns"]):
        turn["provenance"] = identity(results_path, f"/cases/{idx}/attempts/{attempt_idx}/turns/{turn_idx}")
        turn["source_views"] = []
        for source_idx, source in enumerate(turn.get("visible_sources", [])):
            text = source["text"]
            assert sha_bytes(text.encode("utf-8")) == source["text_sha256"]
            view = {
                "source_index": source_idx,
                "title": source["title"],
                "recorded_fragment": text,
                "recorded_fragment_sha256": source["text_sha256"],
                "clause_ids": list(dict.fromkeys(re.findall(r"【(C\d+)】", text))),
                "provenance": identity(results_path, f"/cases/{idx}/attempts/{attempt_idx}/turns/{turn_idx}/visible_sources/{source_idx}"),
                "policy": None,
                "rating": None,
            }
            matches = [p for p in registry if Path(p["source_file"]).name == source["title"]]
            # Exact filename AND actual recorded content must agree. A registry
            # lookup is document metadata, not an added citation or missing evidence.
            body = re.sub(r"^<document_metadata>.*?</document_metadata>\s*", "", text, flags=re.S)
            if len(matches) == 1 and body.strip() in matches[0]["text"]:
                view["policy"] = copy.deepcopy(matches[0])
                view["policy"]["identity_basis"] = "原来源文件名一致，去除采集元信息后的引用正文与制度原文精确匹配"
                view["policy"]["full_text_label"] = "制度原文（非本轮额外引用）"
                view["policy"]["metadata_label"] = "制度版本、日期和部门元信息来自已冻结登记表；不表示实时权限校验"
                view["policy"]["provenance"] = identity(matches[0]["source_file"])
                view["policy"]["registry_provenance"] = identity("policy_data/policy_registry.yaml", f"/policies/{registry.index(matches[0])}")
            ratings = [c for c in scoring.get("citations", [])
                       if c["title"] == source["title"] and c["text_sha256"] == source["text_sha256"]]
            if ratings:
                assert all(c["valid"] == ratings[0]["valid"] and c["reason"] == ratings[0]["reason"] for c in ratings)
                view["rating"] = {"valid": ratings[0]["valid"], "reason": ratings[0]["reason"],
                                  "label": "现有单评审初标（非实时治理结论）"}
            turn["source_views"].append(view)
    return record


def build() -> dict:
    registry = read_registry()
    b_path = "evaluation/baseline_b_results_public.json"
    v_path = "evaluation/v1_1_results_public.json"
    bs_path = "evaluation/baseline_b_scoring_public.json"
    vs_path = "evaluation/v1_1_scoring_public.json"
    bs = read_json(bs_path)
    vs = read_json(vs_path)
    records = {
        cid: {
            "baseline": make_record(cid, b_path, bs_path, registry),
            "v1": make_record(cid, v_path, vs_path, registry),
        } for cid in ("DIRECT_ANSWER-01", "UNSUPPORTED_INFERENCE-05")
    }
    specs = [
        ("normal", "01 正常制度查询", "DIRECT_ANSWER-01", {
            "risk": "员工需要快速核对当前住宿标准及适用范围。",
            "baseline": "原版核心金额回答正确，但来源中还有与住宿无关的访客片段。",
            "v1": "回答明确当前标准与普通员工适用范围，实际可见来源聚焦差旅制度。",
            "result": "同一真实 DIRECT_ANSWER-01 的产品体验视角；下一场景用同一案例做证据对比，不是另一场额外实验。",
        }),
        ("noise", "02 答案正确，来源有噪声", "DIRECT_ANSWER-01", {
            "risk": "答案正确，不等于展示给用户的证据都能支持答案。",
            "baseline": "可见来源包括 VISITOR_2026 访客离场/接待片段，不能支持北京住宿额度。",
            "v1": "最终可见来源为 TRAVEL_2026，展开可复核550元标准及2026版生效信息。",
            "result": "现有单评审初标：B 引用1/2正确；V1.1 引用1/1正确。这里没有事后给模型补找来源。",
        }),
        ("inference", "03 制度要求 ≠ 现实状态", "UNSUPPORTED_INFERENCE-05", {
            "risk": "采购预算批准不能证明设备验收、结算材料或财务审核的实际状态。",
            "baseline": "原回答说“暂时不能付款”“关键设备还缺质量部门的复核记录”；题面未提供这些实际事实。",
            "v1": "保留采购/验收/付款规则，分别说明实际质量、材料和财务状态无法确认，并请求关键设备等事实。",
            "result": "现有初标：B 核心错误并存在无依据推断；V1.1 核心正确、部分回答合格，未将未提供记录理解为未执行。",
        }),
    ]
    scenes = []
    for sid, title, cid, watch in specs:
        pair = records[cid]
        scenes.append({"id": sid, "title": title, "case_id": cid,
                       "question": pair["v1"]["turns"][0]["question"], "watch": watch,
                       **copy.deepcopy(pair)})
    metric_specs = [
        ("Answer Correctness", "答案核心正确", "95.52%–97.01%", "92.31%–95.38%", "有退化；仅有效回答口径不能替代端到端覆盖。"),
        ("Evidence Support Rate", "事实证据支持", "95.33%–95.88%", "99.67%–99.84%", "按已评分答案事实计；包含待裁决标注上下界。"),
        ("Citation Accuracy", "引用准确率", "59.06%", "99.22%", "V1.1 127/128已确认，另1条待复核；99.22%为已确认下界。"),
        ("Correct Refusal Rate", "正确拒答", "6/11", "11/11", "B 另4例待复核，不能把6/11当成已经裁决的全部结果。"),
        ("Expired Policy Error Rate", "失效制度误用", "0/10", "0/10", "本专项两组均未观察到误用，不代表全部场景无错。"),
        ("Unsupported Inference Rate", "无依据业务推断", "11/80确认", "0/78确认", "B 另6例、V1.1另1例待复核；V1.1分母排除2例治理失败。"),
    ]
    metrics = [{"name": key, "key": key, "label": label,
                "baseline": copy.deepcopy(bs["metrics"][key]),
                "v1": copy.deepcopy(vs["metrics"][key]),
                "display": {"baseline": b, "v1": v}, "notes": note,
                "provenance": {"baseline": identity(bs_path, "/metrics/" + key),
                               "v1": identity(vs_path, "/metrics/" + key)}}
               for key, label, b, v, note in metric_specs]
    postmortem_path = "docs/v1_interruption_postmortem.md"
    postmortem = (ROOT / postmortem_path).read_text(encoding="utf-8-sig")
    fault_path = "evidence/v1_1/fault_injection_results.json"
    report_path = "docs/evaluation_report.md"
    reliability = {
        "title": "04 失败与恢复",
        "source_excerpt": postmortem,
        "provenance": identity(postmortem_path),
        "record_origin": "以下中断过程来自已公开复盘文档；公开仓库未包含首次中断实验完整聊天/治理响应，因此不伪造原始回放。",
        "steps": [
            {"title": "发生了什么", "text": "V1实验61题完整返回后，FOLLOW_UP-09第二轮出现 governance_invalid_json，容器exit=1，OOMKilled=false。原中断实验保留，未续跑。"},
            {"title": "证据确认到哪一步", "text": "复盘记录：supports外层数组未闭合、JSON位置643解析失败；原gate抛错与异步回调未隔离拒绝可离线复现。生产中断的完整堆栈没有取得。"},
            {"title": "V1.1怎么处理", "text": "有界解析、严格Schema、明确失败状态、fail-safe与Promise/回调异常隔离。技术失败不冒充正确拒答或无证据回答。"},
            {"title": "最后实际验证", "text": "17/17离线故障注入通过；独立28题Dev为27有效、1治理错误；正式80题序列结束，78有效、2治理失败、0服务级中断。"},
        ],
        "validation": read_json(fault_path),
        "validation_provenance": identity(fault_path),
        "records": {"interrupted_experiment_id": "V1-XQ-1.0.1-SINGLE-01", "interrupted_commit": "1125eef",
                    "v1_1_experiment_id": vs["experiment_id"], "operational": copy.deepcopy(vs["operational"]),
                    "record_kind": "postmortem_reported", "complete_interrupted_run_available": False},
        "limitations": "故障注入使用真实本地WebSocket及上游continue，模型/数据库为stub，不是生产HTTP端点故障注入；17/17和服务未退出都不证明生产稳定性。",
    }
    input_paths = [b_path, v_path, bs_path, vs_path, "policy_data/policy_registry.yaml", postmortem_path,
                   fault_path, report_path, "docs/bad_case_review.md", "evaluation/frozen_test_set.json"]
    input_paths += [p["source_file"] for p in registry]
    return {
        "schema_version": "1.0",
        "project": {"name": "企业制度问答 Agent", "english_name": "Trusted Enterprise Policy Agent",
                    "data_label": "Synthetic / Demo Data", "demo_label": "Recorded Interactive Demo",
                    "recorded_note": "历史实验交互回放，不实时调用模型，不生成新答案。",
                    "version": "V1.1", "dataset_version": "1.0.1", "tool_trace_complete": False,
                    "rating_mode": "单评审初标，争议保留；两组各一次固定回归实验。"},
        "provenance": {"input_files": [identity(p) for p in input_paths],
                       "answer_policy": "历史用户输入、visible_answer、visible_sources及所有尝试保持原始公开值；界面说明不属于模型输出。",
                       "source_policy": "原引用片段与制度全文分开；制度登记元信息不补充历史来源，不改变评分。",
                       "model_calls": 0},
        "metrics": metrics, "scenes": scenes, "reliability": reliability,
        "evaluation": {
            "provenance": identity(report_path), "planned_per_group": 80,
            "operational": {"baseline": copy.deepcopy(bs["operational"]), "v1": copy.deepcopy(vs["operational"])},
            "categories": {"baseline": copy.deepcopy(bs["categories"]), "v1": copy.deepcopy(vs["categories"])},
            "noise": {"baseline": {"confirmed": len(bs["cases_with_citation_noise"]), "denominator": 80,
                                     "case_ids": bs["cases_with_citation_noise"]},
                      "v1": {"confirmed": len(vs["cases_with_citation_noise"]), "denominator": 78,
                             "review_required": len(vs["cases_with_citation_noise_review_required"]),
                             "case_ids": vs["cases_with_citation_noise"],
                             "review_required_case_ids": vs["cases_with_citation_noise_review_required"]}},
            "tradeoffs": {"answer_correctness_regression": True,
                          "baseline_correct_v1_wrong": ["UNSUPPORTED_INFERENCE-06", "FOLLOW_UP-08", "DIRECT_ANSWER-04"],
                          "baseline_wrong_v1_correct": ["FOLLOW_UP-04", "UNSUPPORTED_INFERENCE-05"],
                          "over_refusal_case_ids": vs["over_refusal_case_ids"],
                          "baseline_correct_v1_operational_error": ["UNSUPPORTED_INFERENCE-01", "UNSUPPORTED_INFERENCE-10"],
                          "conservative_end_to_end_core": copy.deepcopy(vs["conservative_end_to_end_core"])},
            "limitations": ["模拟制度/演示数据", "单次固定回归，非严格未见盲测", "单评审初标、争议保留",
                            "没有统计显著性或生产可靠性推断", "tool_trace_complete=false，不能归因于单独检索算法",
                            "V1.1存在2治理失败及部分答案正确性退化，不能宣称全部80题成功或整体准确率提升"],
        },
    }


if __name__ == "__main__":
    data = build()
    OUT.write_text("// Generated only from public frozen records. No model/API calls.\nwindow.POLICY_REPLAY_DATA = "
                   + json.dumps(data, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8", newline="\n")
    print(json.dumps({"output": "demo/replay_data.js", "scenes": len(data["scenes"]),
                      "distinct_case_ids": sorted({s["case_id"] for s in data["scenes"]}),
                      "input_files": len(data["provenance"]["input_files"]), "model_calls": 0}, ensure_ascii=False))

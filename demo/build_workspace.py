"""Presentation-only extraction of additional already-public recorded cases.

No model calls; existing replay_data.js, evaluation and policies are not written.
"""
import json
import re
import copy
import sys
from pathlib import Path
sys.dont_write_bytecode = True
from build_replay import read_registry, make_record, identity

ROOT = Path(__file__).resolve().parent.parent


def presentation_record(case_id, results_path, scoring_path, registry):
    raw = json.loads((ROOT / results_path).read_text(encoding="utf-8-sig"))
    index = next(i for i, row in enumerate(raw["cases"]) if row["case_id"] == case_id)
    original = raw["cases"][index]
    if original["selected_attempt"] is not None:
        return make_record(case_id, results_path, scoring_path, registry)
    # Technical failures have no selected successful attempt. Display the actual
    # saved failed attempt, never relabel it as a selected success.
    scoring = json.loads((ROOT / scoring_path).read_text(encoding="utf-8-sig"))
    score_index = next(i for i, row in enumerate(scoring["cases"]) if row["case_id"] == case_id)
    result = copy.deepcopy(original)
    result.update({"experiment_id": scoring["experiment_id"], "scoring": scoring["cases"][score_index],
                   "provenance": identity(results_path, f"/cases/{index}"),
                   "scoring_provenance": identity(scoring_path, f"/cases/{score_index}"),
                   "presentation_attempt": original["attempts"][-1]["attempt"],
                   "turns": copy.deepcopy(original["attempts"][-1]["turns"])})
    for t, turn in enumerate(result["turns"]):
        assert not turn.get("visible_sources"), "Do not silently invent failed-source enrichment"
        turn["source_views"] = []
        turn["provenance"] = identity(results_path, f"/cases/{index}/attempts/{len(original['attempts'])-1}/turns/{t}")
    return result


def build():
    registry = read_registry()
    b = "evaluation/baseline_b_results_public.json"
    v = "evaluation/v1_1_results_public.json"
    bs = "evaluation/baseline_b_scoring_public.json"
    vs = "evaluation/v1_1_scoring_public.json"
    definitions = [
        ("clarify", "需要澄清", "DEPARTMENT_SCOPE-03", "缺少部门，不偷偷假设适用范围。", "clarify"),
        ("refuse", "无依据拒答", "NO_ANSWER-01", "制度未规定年假天数，不把外部常识写成公司规定。", "refuse"),
        ("technical", "技术失败", "UNSUPPORTED_INFERENCE-01", "治理故障被明确保留，技术失败不算正确拒答。", "failed"),
    ]
    scenes = []
    for sid, title, case_id, description, status in definitions:
        pair = {"baseline": presentation_record(case_id, b, bs, registry),
                "v1": presentation_record(case_id, v, vs, registry)}
        scenes.append({"id": sid, "title": title, "case_id": case_id,
                       "question": pair["v1"]["turns"][0]["question"],
                       "description": description, "reading_status": status,
                       "status_label_basis": "展示层阅读分类，依据原回答与已有评分；不是新增Agent运行事件",
                       **pair})
    normal = make_record("DIRECT_ANSWER-01", v, vs, registry)
    turn = normal["turns"][0]
    bullet_lines = [line for line in turn["visible_answer"].splitlines() if line.startswith("- ")]
    assert len(bullet_lines) == len(normal["scoring"]["facts"]) == 3
    relations = []
    for line, fact in zip(bullet_lines, normal["scoring"]["facts"]):
        assert fact["supported"] is True
        anchor = fact["actual_source_anchors"][0]
        view = next(s for s in turn["source_views"] if s["title"] == anchor["file"])
        for quote in anchor["visible_quotes"]:
            assert quote in view["recorded_fragment"]
            assert quote in view["policy"]["text"]
        relations.append({"answer_line": line, "source_index": view["source_index"],
                          "clause_id": anchor["clause"], "visible_quotes": anchor["visible_quotes"],
                          "fact_id": fact["fact_id"], "rating_provenance": normal["scoring_provenance"],
                          "basis": "已有单评审初标actual_source_anchors；引用片段/制度原文精确匹配。不是实时检索trace。"})
    return {"schema_version": "1.0", "label": "Public recorded presentation views",
            "model_calls": 0, "scenes": scenes,
            "answer_evidence_relations": {"DIRECT_ANSWER-01": {"v1": relations}},
            "input_files": [identity(p) for p in (b, v, bs, vs, "policy_data/policy_registry.yaml")],
            "trace_notice": "tool_trace_complete=false。处理逻辑示意与真实原始输出分开展示。"}


if __name__ == "__main__":
    data = build()
    (ROOT / "demo/workspace_data.js").write_text(
        "// Existing public history only. No live requests or new model output.\nwindow.POLICY_WORKSPACE_DATA = "
        + json.dumps(data, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8", newline="\n")
    print(json.dumps({"presentation_cases": len(data["scenes"]), "verified_clause_relations": 3,
                      "model_calls": 0}, ensure_ascii=False))

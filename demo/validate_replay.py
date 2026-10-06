"""Independently verify recorded replay against its public source files.

Stdlib only. Does not execute browser JavaScript, call models or change sources.
"""
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def sha(value):
    return hashlib.sha256(value).hexdigest()


def load(file):
    return json.loads((ROOT / file).read_text(encoding="utf-8-sig"))


def resolve(document, pointer):
    current = document
    for token in pointer.strip("/").split("/"):
        token = token.replace("~1", "/").replace("~0", "~")
        current = current[int(token)] if isinstance(current, list) else current[token]
    return current


def validate():
    script = (ROOT / "demo/replay_data.js").read_text(encoding="utf-8")
    marker = "window.POLICY_REPLAY_DATA = "
    assert script.count(marker) == 1 and script.rstrip().endswith(";")
    data = json.loads(script.split(marker, 1)[1].rstrip()[:-1])
    checked_inputs = []
    for source in data["provenance"]["input_files"]:
        assert sha((ROOT / source["file"]).read_bytes()) == source["sha256"], source["file"]
        checked_inputs.append(source["file"])
    assert data["provenance"]["model_calls"] == 0
    distinct_pairs = set()
    turns = 0
    sources = 0
    mapped = 0
    for scene in data["scenes"]:
        assert scene["case_id"] in ("DIRECT_ANSWER-01", "UNSUPPORTED_INFERENCE-05")
        for group in ("baseline", "v1"):
            record = scene[group]
            original = resolve(load(record["provenance"]["file"]), record["provenance"]["json_path"])
            assert sha((ROOT / record["provenance"]["file"]).read_bytes()) == record["provenance"]["sha256"]
            for key, value in original.items():
                assert record[key] == value, (scene["id"], group, key)
            scoring = resolve(load(record["scoring_provenance"]["file"]), record["scoring_provenance"]["json_path"])
            assert record["scoring"] == scoring
            assert record["experiment_id"] == load(record["scoring_provenance"]["file"])["experiment_id"]
            selected = [a for a in original["attempts"] if a["attempt"] == original["selected_attempt"]]
            assert len(selected) == 1
            assert len(record["turns"]) == len(selected[0]["turns"])
            for index, turn in enumerate(record["turns"]):
                original_turn = selected[0]["turns"][index]
                assert resolve(load(turn["provenance"]["file"]), turn["provenance"]["json_path"]) == original_turn
                for key, value in original_turn.items():
                    assert turn[key] == value, (scene["id"], group, index, key)
                assert len(turn["source_views"]) == len(original_turn["visible_sources"])
                for view in turn["source_views"]:
                    original_source = original_turn["visible_sources"][view["source_index"]]
                    assert resolve(load(view["provenance"]["file"]), view["provenance"]["json_path"]) == original_source
                    assert view["title"] == original_source["title"]
                    assert view["recorded_fragment"] == original_source["text"]
                    assert view["recorded_fragment_sha256"] == original_source["text_sha256"]
                    assert sha(view["recorded_fragment"].encode("utf-8")) == view["recorded_fragment_sha256"]
                    assert view["clause_ids"] == list(dict.fromkeys(re.findall(r"【(C\d+)】", original_source["text"])))
                    if view["rating"] is not None:
                        matching = [c for c in scoring["citations"] if c["title"] == view["title"]
                                    and c["text_sha256"] == view["recorded_fragment_sha256"]]
                        assert matching
                        assert all(c["valid"] == view["rating"]["valid"] and c["reason"] == view["rating"]["reason"] for c in matching)
                    policy = view["policy"]
                    if policy is not None:
                        assert Path(policy["source_file"]).name == view["title"]
                        raw = ROOT / policy["source_file"]
                        assert sha(raw.read_bytes()) == policy["sha256"]
                        assert raw.read_text(encoding="utf-8-sig") == policy["text"]
                        body = re.sub(r"^<document_metadata>.*?</document_metadata>\s*", "", original_source["text"], flags=re.S)
                        assert body.strip() in policy["text"]
                        assert policy["full_text_label"] == "制度原文（非本轮额外引用）"
                        mapped += 1
                    sources += 1
                turns += 1
            distinct_pairs.add((scene["case_id"], group))
        assert scene["question"] == scene["v1"]["turns"][0]["question"]
    assert [s["id"] for s in data["scenes"]] == ["normal", "noise", "inference"]
    b = load("evaluation/baseline_b_scoring_public.json")
    v = load("evaluation/v1_1_scoring_public.json")
    assert len(data["metrics"]) == 6
    for metric in data["metrics"]:
        assert metric["baseline"] == b["metrics"][metric["name"]]
        assert metric["v1"] == v["metrics"][metric["name"]]
        for group in ("baseline", "v1"):
            reference = metric["provenance"][group]
            assert resolve(load(reference["file"]), reference["json_path"]) == metric[group]
    ca = next(m for m in data["metrics"] if m["name"] == "Citation Accuracy")
    assert ca["display"] == {"baseline": f'{100*b["metrics"]["Citation Accuracy"]["lower_bound"]:.2f}%',
                             "v1": f'{100*v["metrics"]["Citation Accuracy"]["lower_bound"]:.2f}%'}
    ev = data["evaluation"]
    assert ev["operational"] == {"baseline": b["operational"], "v1": v["operational"]}
    assert ev["categories"] == {"baseline": b["categories"], "v1": v["categories"]}
    assert ev["noise"]["baseline"]["confirmed"] == len(b["cases_with_citation_noise"]) == 63
    assert ev["noise"]["baseline"]["case_ids"] == b["cases_with_citation_noise"]
    assert ev["noise"]["v1"]["confirmed"] == len(v["cases_with_citation_noise"]) == 0
    assert ev["noise"]["v1"]["review_required_case_ids"] == v["cases_with_citation_noise_review_required"]
    assert ev["noise"]["v1"]["review_required"] == 1
    assert ev["noise"]["v1"]["denominator"] == v["operational"]["completed"] == 78
    assert ev["tradeoffs"]["over_refusal_case_ids"] == v["over_refusal_case_ids"]
    assert ev["tradeoffs"]["conservative_end_to_end_core"] == v["conservative_end_to_end_core"]
    reliability = data["reliability"]
    assert reliability["source_excerpt"] == (ROOT / reliability["provenance"]["file"]).read_text(encoding="utf-8-sig")
    assert reliability["validation"] == load(reliability["validation_provenance"]["file"])
    assert reliability["validation"]["passed"] == 17 and reliability["validation"]["failed"] == 0
    assert reliability["validation"]["model_calls"] == 0
    assert reliability["records"]["complete_interrupted_run_available"] is False
    assert reliability["records"]["operational"] == v["operational"]
    assert "61题完整返回" in reliability["source_excerpt"]
    assert "OOMKilled=false" in reliability["source_excerpt"]
    assert "尚未证明" in reliability["source_excerpt"]
    return {"status": "passed", "model_calls": 0, "input_files_verified": len(checked_inputs),
            "input_files": checked_inputs, "scenes": 3, "distinct_case_group_pairs": len(distinct_pairs),
            "rendered_selected_turns_including_reused_case": turns,
            "source_instances_including_reused_case": sources, "identity_mapped_source_instances": mapped,
            "metrics_exact": 6, "reliability_fault_records_exact": len(reliability["validation"]["results"]),
            "unchanged_fields": ["question", "visible_answer", "visible_sources", "all_attempts", "operational_status", "case_scores", "aggregate_scores"],
            "notice": "正常查询和来源噪声共享同一真实DA01案例；制度全文不是额外历史引用；中断过程为公开复盘摘要。"}


if __name__ == "__main__":
    result = validate()
    (ROOT / "demo/replay_validation.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
    print(json.dumps({key: value for key, value in result.items() if key != "input_files"}, ensure_ascii=False))

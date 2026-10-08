"""Read-only audit of presentation additions against frozen public records.

Does not call models or rewrite any historical validation/result file.
"""
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def sha(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()


def pointer(value, path):
    for key in path.strip('/').split('/'):
        value = value[int(key)] if isinstance(value, list) else value[key]
    return value


def validate():
    js = (ROOT / "demo/workspace_data.js").read_text(encoding="utf-8")
    marker = "window.POLICY_WORKSPACE_DATA = "
    data = json.loads(js.split(marker)[1].rstrip().removesuffix(';'))
    assert data["model_calls"] == 0
    documents = {}
    for identity in data["input_files"]:
        path = ROOT / identity["file"]
        assert sha(path) == identity["sha256"]
        if path.suffix == '.json':
            documents[identity["file"]] = json.loads(path.read_text(encoding="utf-8-sig"))
    turns_checked = sources_checked = 0
    for scene in data["scenes"]:
        for group in ("baseline", "v1"):
            record = scene[group]
            source = documents[record["provenance"]["file"]]
            original = pointer(source, record["provenance"]["json_path"])
            for key, value in original.items():
                assert record[key] == value, (scene["id"], group, key)
            score = pointer(documents[record["scoring_provenance"]["file"]], record["scoring_provenance"]["json_path"])
            assert record["scoring"] == score
            for turn in record["turns"]:
                original_turn = pointer(source, turn["provenance"]["json_path"])
                for key, value in original_turn.items():
                    assert turn[key] == value
                assert len(turn["source_views"]) == len(original_turn["visible_sources"])
                for view in turn["source_views"]:
                    original_view = original_turn["visible_sources"][view["source_index"]]
                    assert view["recorded_fragment"] == original_view["text"]
                    assert view["recorded_fragment_sha256"] == original_view["text_sha256"]
                    if view["policy"]:
                        policy = view["policy"]
                        assert sha(ROOT / policy["source_file"]) == policy["sha256"]
                        assert (ROOT / policy["source_file"]).read_text(encoding="utf-8-sig") == policy["text"]
                    sources_checked += 1
                turns_checked += 1
    relations = data["answer_evidence_relations"]["DIRECT_ANSWER-01"]["v1"]
    raw = next(r for r in documents["evaluation/v1_1_results_public.json"]["cases"] if r["case_id"] == "DIRECT_ANSWER-01")
    turn = raw["attempts"][0]["turns"][0]
    for relation in relations:
        assert relation["answer_line"] in turn["visible_answer"].splitlines()
        score = pointer(documents[relation["rating_provenance"]["file"]], relation["rating_provenance"]["json_path"])
        fact = next(f for f in score["facts"] if f["fact_id"] == relation["fact_id"])
        anchor = next(a for a in fact["actual_source_anchors"] if a["clause"] == relation["clause_id"])
        assert anchor["visible_quotes"] == relation["visible_quotes"]
        fragment = turn["visible_sources"][relation["source_index"]]["text"]
        assert all(q in fragment for q in relation["visible_quotes"])
    technical = next(s for s in data["scenes"] if s["id"] == "technical")["v1"]
    assert technical["selected_attempt"] is None
    assert technical["operational_status"] == 'operational_error'
    assert not technical["turns"][0]["visible_sources"]
    # Verify the actual source-rating join used by the presentation. Collector
    # metadata may change the raw hash; only an exact same-file body is joined.
    recorded_js = (ROOT / "demo/replay_data.js").read_text(encoding="utf-8")
    recorded = json.loads(recorded_js.split("window.POLICY_REPLAY_DATA = ")[1].rstrip().removesuffix(';'))
    normal = next(s for s in recorded["scenes"] if s["id"] == "normal")
    body = lambda text: re.sub(r"^<document_metadata>.*?</document_metadata>\s*", "", text, flags=re.S).strip()
    joined = []
    for group in ("baseline", "v1"):
        record = normal[group]
        score = pointer(documents[record["scoring_provenance"]["file"]], record["scoring_provenance"]["json_path"])
        assert record["scoring"] == score
        for view in record["turns"][0]["source_views"]:
            matches = [c for c in score["citations"] if c["title"] == view["title"] and c.get("text")
                       and body(c["text"]) == body(view["recorded_fragment"])]
            assert matches and all(c["valid"] == matches[0]["valid"] and c["reason"] == matches[0]["reason"] for c in matches)
            joined.append((group, view["title"], matches[0]["valid"]))
    assert joined == [('baseline', 'VISITOR_2026.txt', False), ('baseline', 'TRAVEL_2026.txt', True), ('v1', 'TRAVEL_2026.txt', True)]
    return {"status": "passed", "model_calls": 0, "historical_cases": len(data["scenes"]),
            "original_turns_checked": turns_checked, "recorded_sources_checked": sources_checked,
            "exact_existing_scoring_anchors": len(relations), "existing_source_ratings_body_matched": len(joined),
            "selected_failed_attempt_not_relabeled": True,
            "citation_granularity": "original document-level; clause positions are explicit reading mappings"}


if __name__ == "__main__":
    print(json.dumps(validate(), ensure_ascii=False))

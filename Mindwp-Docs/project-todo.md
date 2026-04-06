# Project Todo — MindWP Execution Ledger

> Single execution file. This replaces the old active todo and the archive todo copies.
> Keep current work detailed, keep completed work compressed, keep history short.

**Rule block**
- Only the active phase can be detailed.
- Completed work must be compressed.
- No duplicate tasks.
- No raw logs or notes.

**Task ID continuity:** `TASK-001` to `TASK-074` are historical. Current execution tasks use `T-075+`.

---

## 1. Phase Index

| Phase | Scope | State |
|---|---|---|
| 1 | Critical build fixes | Done |
| 2 | Architecture violation fixes | Done |
| 3 | Structure, graph, validation, and hardening | Done |
| 4 | Cleanup | Done |
| 5 | Vocabulary cleanup | Partial, moved forward as Phase 12 execution |
| 6 | Content intelligence and governance | Done |
| 7 | Stabilization and governance alignment | Done |
| 8-LEGACY | Post-audit stabilization | Done |
| 9 | Internal linking intelligence | Done |
| 10 | Content intelligence platform | Done |
| 11 | Conversion intelligence layer | Done |
| 3.1 | Critical code fixes | Done |
| 3.2 | Design system compliance | Done |
| 3.3 | Graph integrity | Done |
| 3.4 | Cleanup and dead code | Skipped |
| 3.5 | System hardening | Done |
| 7A | Section background system | Done |
| 8 | Section system (structural refactor) | Done |
| 9 | System cleanup and alignment | Done |
| 10 | Content architecture audit + governance | Done |
| 10.5 | Content clusters 1-4 + graph amplification | Done |
| 12 | Vocabulary cleanup execution | Post-launch |
| 13–18 | UI polish through deployment | Post-launch |

---

## 2. Active Phase

**System state: LAUNCH-READY**

All phases complete. System verified clean. No active execution phase.

### Phase 10 — Content Architecture Audit + Governance — COMPLETE

| ID | Task | Priority | Status |
|---|---|---|---|
| T-150 | Sync SYSTEM-TRUTH.md to Phase 10 | Critical | [x] |
| T-151 | Sync CONTENT-SYSTEM-ARCHITECTURE.md to Phase 10 | Critical | [x] |
| T-152 | Sync SYSTEM-INDEX.md to Phase 10 | High | [x] |
| T-153 | Sync AI-RULES.md to Phase 10 | High | [x] |
| T-154 | Sync DEV-DASHBOARD.md to Phase 10 | High | [x] |
| T-155 | Sync SYSTEM-INTELLIGENCE-DOC.md to Phase 10 | High | [x] |
| T-156 | Sync CONTENT-GRAPH-SYSTEM.md to Phase 10 | High | [x] |
| T-157 | Sync project-todo.md to Phase 10 | High | [x] |
| T-158 | Sync medium-priority docs (BLUEPRINT, GOVERNANCE, DESIGN-CONTROL, inventories) | Medium | [x] |
| T-159 | Regenerate DECISION-STATE.md and SYSTEM-LOG.md | Low | [x] |

### Phase 10.5 — Content Clusters + Graph Amplification — COMPLETE

Committed as `16f3164` on `phase-10-dashboard`.

- Cluster 1: lead-response-time x automotive/hvac (4 files)
- Cluster 2: crm-pipeline x plumbing/salon (6 files)
- Cluster 3: review-automation x roofing/salon (4 new + 2 existing)
- Cluster 4: local-visibility x hvac/realtor (6 files)
- RESOURCE_INDEX expanded (2 → 59 entries)
- CTA routing fixes (4 reputation resources)
- System correction (CrmPipelineAutomation)
- Generated registries + authority map updated
- SYSTEM-RULES.md added

---

### Post-Launch Backlog

| ID | Task | Priority | Phase |
|---|---|---|---|
| T-160 | Phase 12: Vocabulary cleanup execution | Medium | Post-launch |
| T-161 | Strengthen Weak authority topics (8 topics, score 40-58) | Medium | Post-launch |
| T-162 | Fill Gap authority topics (15 topics, score 5-35) | Low | Post-launch |
| T-163 | Phases 13-18: UI polish through deployment | Low | Post-launch |

---

## 3. Completed Phases

- **Phases 1 to 4:** build recovery, architecture alignment, validation consolidation, and cleanup completed.
- **Phase 5:** vocabulary cleanup started; partial completion only. Remaining work moved forward as Phase 12 execution.
- **Phases 6 to 11:** content governance, content intelligence, stabilization, internal linking, dashboards, and conversion intelligence shipped.
- **Phase 8:** Section system structural refactor completed — SectionWrapper, CardGrid, SplitLayout, Stack primitives built; BEM grid CSS removed; section backgrounds unified to bg-base/bg-alt.
- **Execution visibility layer:** `/dev-dashboard`, script registry, run-script API, reports-structure validator, Phase 7 report isolation, and dev-tools audit completed.
- **Execution interface upgrade:** workflow engine, script history, lazy report viewer, structured output UX, and execution intelligence metadata completed.
- **Phase 3.1:** dead CTA label logic removed, rogue CTA issues closed, invalid gradient references removed.
- **Phase 3.2:** production inline-style violations removed and spacing/font hardcodes migrated to tokens.
- **Phase 3.3:** graph type integrity corrected and authority map regenerated cleanly.
- **Phase 3.4:** cleanup/dead-code phase skipped by user decision.
- **Phase 3.5:** hardening rules added across validators, docs, truth checks, and background enforcement.
- **Phase 7A:** section background system normalized and legacy gradient utility noise removed.
- **Phase 9 + 9.1:** System cleanup, script alignment, validation fixes completed.
- **Phase 10:** Content architecture audit — all 8 decisions locked, all docs synced, intent-based routing propagated.
- **Phase 10.5:** Content clusters 1-4 executed (20 new files), graph amplification applied (RESOURCE_INDEX 2→59, 5 CTA fixes, 1 system correction). Committed `16f3164`.
- **Visual Polish (7B-7E):** Hover/transition, gradient tokenization, icon/badge normalization, and component fixes completed.

---

## 4. Short History Log

- `TASK-001` to `TASK-006`: TypeScript/build recovery and graph pipeline stabilization completed.
- `TASK-007` to `TASK-014`: architecture violations fixed across CTA links, metadata, graph slots, and identifiers.
- `TASK-015` to `TASK-020`: validator pipeline unified and enforced in build flow.
- `TASK-021` to `TASK-023`: dead cleanup items removed.
- `TASK-024` to `TASK-035`: vocabulary cleanup opened; only the first batch completed before execution paused.
- `TASK-050` to `TASK-055`: content governance, scoring, and rewrite-control systems added.
- `TASK-060` to `TASK-065`: governance and documentation alignment audit cycle completed.
- `TASK-070` to `TASK-074`: post-audit stabilization finished.
- `TASK-INT-001` to `TASK-INT-005`: internal-linking intelligence layer completed.
- `CIP-001` to `CIP-007`: content intelligence platform and export tooling completed.
- `CONV-INT-001` to `CONV-INT-011`: conversion intelligence layer completed.
- `EXEC-VIS-001` to `EXEC-VIS-007`: execution visibility layer, reports enforcement, and Phase 7 report isolation completed.
- `EXEC-UX-001` to `EXEC-UX-006`: execution workflows, script intelligence, history tracking, and output UX completed.
- `T-075` to `T-103`: critical fix, compliance, graph-integrity, and hardening batches completed.
- `T-104` to `T-109`: Phase 7A completed.

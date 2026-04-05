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
| 10 | Content architecture audit + governance | Active |
| 12 | Vocabulary cleanup execution | Ready |
| 12.5 | Decision system definition | Future |
| 13–18 | UI polish through deployment | Future |

---

## 2. Active Phase

**Context**
- Phase 7 complete (visual system locked)
- Phase 8 complete (section system refactored — primitives, layout, backgrounds unified)
- Phase 9 complete (system cleanup and alignment)
- Phase 10 in progress (content architecture audit + governance sync)

### Phase 9 — System Cleanup & Alignment

**Goal**
- Audit and clean documentation, scripts, and reports.
- Remove obsolete files, consolidate duplicates, fix doc inconsistencies.
- Extract final system rules from Phase 7/8 docs into SYSTEM-TRUTH.md.

**Source**
- Phase 9 audit plan (conversation-level)

**Success checks**
- All obsolete scripts and stale reports deleted
- Duplicate scripts consolidated
- Doc inconsistencies resolved
- Phase 7/8 guarantees extracted into SYSTEM-TRUTH.md
- All validators passing

| ID | Task | Priority | Status |
|---|---|---|---|
| T-138 | Delete obsolete scripts (10 files) | High | [x] |
| T-139 | Delete stale reports (9 files) | High | [x] |
| T-140 | Merge duplicate scripts (2 pairs) | High | [x] |
| T-141 | Fix doc inconsistencies (project-todo, PHASE-8, DEV-DASHBOARD) | High | [x] |
| T-142 | Clean docs (SYSTEM-INTELLIGENCE-DOC, IMAGE-SYSTEM-ARCHITECTURE, BLOG-PLANNING-INVENTORY) | Medium | [x] |
| T-143 | Extract Phase 7/8 rules into SYSTEM-TRUTH.md | Medium | [x] |
| T-144 | Regenerate system state (system-sync, validate-all) | Medium | [x] |
| T-145 | Final verification (imports, scripts, dashboards) | Low | [x] |

---

### Phase 9.1 — Script Alignment + Validation Fixes

**Goal**
- Fix 3 blocking validator failures (lint, validate-tokens, check-generated)
- Normalize phase7 script naming, clean registry, update dashboard

| ID | Task | Priority | Status |
|---|---|---|---|
| T-146 | Fix lint failures (3 prettier errors) | High | [x] |
| T-147 | Fix token violations (2 hardcoded 2px values) | High | [x] |
| T-148 | Fix check-generated staleness | High | [x] |
| T-149 | Normalize phase7 script naming + registry cleanup | Medium | [x] |

**Next task**
- Phase 9.1 complete — all tasks done

---

### Phase 10 — Content Architecture Audit + Governance

**Goal**
- Full audit of all 211 content nodes (75 blogs, 52 resources, 22 case studies, 21 services, 26 industry-detail, 7 features, 6 industry-category)
- 8 locked architecture decisions (D1–D8) governing linking, routing, slots, limits
- Sync all system docs to Phase 10 source of truth
- Intent-based routing replaces linear funnel

**Source**
- `Mindwp-Docs/PHASE-10-audit-plan.md` (1,553 lines, 18 sections)

**Success checks**
- All system docs aligned to Phase 10 decisions
- SmartRelatedSection recognized as sole linking mechanism
- No references to deprecated internal linking engine or JourneyNavigator
- Intent classification (PROBLEM/SYSTEM/FRAMEWORK, ACTIONABLE/EDUCATIONAL/EXAMPLE) propagated

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
| T-159 | Regenerate DECISION-STATE.md and SYSTEM-LOG.md | Low | [ ] |

---

### Deferred — Visual Polish (Post Phase 9)

| Phase | Goal | Tasks | Status |
|---|---|---|---|
| 7B | Hover & transition standardization | T-110 to T-115 | Done |
| 7C | Gradient tokenization | T-116 to T-118 | Done |
| 7D | Icon and badge normalization | T-119 to T-122 | done |
| 7E | Component fixes and legacy cleanup | T-123 to T-129 | done |

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
- **Phase 8 started:** section system structural refactor initiated after full section architecture audit. Focus: layout abstraction, spacing unification, grid logic deduplication, data normalization.

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

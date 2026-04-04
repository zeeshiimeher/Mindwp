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
| 8 | Section system (structural refactor) | Active |
| 12 | Vocabulary cleanup execution | Ready |
| 12.5 | Decision system definition | Future |
| 13–18 | UI polish through deployment | Future |

---

## 2. Active Phase

**Context**
- Phase 7 complete (visual system locked)
- Phase 8 in progress (structural system refactor)
- All remaining Phase 7 work deferred until Phase 8 completion

### Phase 8 — Section System (Structural Refactor)

**Goal**
- Standardize section architecture using composable primitives.
- Unify spacing system, remove layout duplication, normalize data contracts.

**Source**
- `Mindwp-Docs/PHASE-8-SECTION-SYSTEM.md`

**Success checks**
- All sections use SectionWrapper + LayoutPrimitive composition
- Single spacing system (no l-gap / Tailwind gap mismatch)
- Grid column logic extracted to shared primitive
- Blog/resource sections conform to section layout contract
- Data normalization happens at data boundary, not in components

| ID | Task | File(s) | Priority | Status |
|---|---|---|---|---|
| T-130 | Define spacing system (l-gap alignment with Tailwind gap) | `src/styles/framework.css` | High | [ ] |
| T-131 | Build SectionWrapper primitive | `src/components/reusable/` | High | [ ] |
| T-132 | Build CardGrid primitive | `src/components/reusable/` | High | [ ] |
| T-133 | Build SplitLayout primitive | `src/components/reusable/` | Medium | [ ] |
| T-134 | Refactor first 3 core sections to use primitives | `src/components/reusable/sections/core/` | Medium | [ ] |
| T-135 | Standardize data contracts (shared item/action shapes) | `src/domains/` | Medium | [ ] |
| T-136 | Remove duplicated grid column logic (12+ sections) | `src/components/reusable/sections/core/` | Medium | [ ] |
| T-137 | Enforce section architecture rules | Validators | Low | [ ] |

**Next task**
- T-130 — Define spacing system (l-gap alignment with Tailwind gap).

---

### Deferred — Visual Polish (Post Phase 8)

| Phase | Goal | Tasks | Status |
|---|---|---|---|
| 7B | Hover & transition standardization | T-110 to T-115 | Deferred |
| 7C | Gradient tokenization | T-116 to T-118 | Deferred |
| 7D | Icon and badge normalization | T-119 to T-122 | Deferred |
| 7E | Component fixes and legacy cleanup | T-123 to T-129 | Deferred |

---

## 3. Completed Phases

- **Phases 1 to 4:** build recovery, architecture alignment, validation consolidation, and cleanup completed.
- **Phase 5:** vocabulary cleanup started; partial completion only. Remaining work moved forward as Phase 12 execution.
- **Phases 6 to 11:** content governance, content intelligence, stabilization, internal linking, dashboards, and conversion intelligence shipped.
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

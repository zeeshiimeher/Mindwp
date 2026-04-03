# Project Todo — MindWP Execution Ledger

> Single execution file. This replaces the old active todo and the archive todo copies.
> Rule: keep current work detailed, keep completed work compressed, keep history short.

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
| 8 | Post-audit stabilization | Done |
| 9 | Internal linking intelligence | Done |
| 10 | Content intelligence platform | Done |
| 11 | Conversion intelligence layer | Done |
| 3.1 | Critical code fixes | Done |
| 3.2 | Design system compliance | Done |
| 3.3 | Graph integrity | Done |
| 3.4 | Cleanup and dead code | Skipped |
| 3.5 | System hardening | Done |
| 7A | Section background system | Done |
| 7B | Hover and transition standardization | Active |
| 7C | Gradient tokenization | Queued |
| 7D | Icon and badge normalization | Queued |
| 7E | Component fixes and legacy cleanup | Queued |
| 12 | Vocabulary cleanup execution | Ready |
| 12.5 | Decision system definition | Future |
| 13–18 | UI polish through deployment | Future |

---

## 2. Active Phase

### Phase 7B — Hover & Transition Standardization

**Goal**
- Fix missing hover states, normalize elevation tiers, standardize transitions, and add touch guards.

**Source**
- `Mindwp-Docs/PHASE-7-VISUAL-SYSTEM-AUDIT.md`

**Success checks**
- comparable cards share comparable hover behavior
- keyboard focus exists where interaction exists
- hardcoded transition timing is removed from this phase scope
- hover styles are guarded for hover-capable devices where needed

| ID | Task | File | Priority | Status |
|---|---|---|---|---|
| T-110 | Add Tier 2 hover to DualToneChecklist, ServiceSpectrum, ProcessSteps cards | `src/styles/components.css` | High | [ ] |
| T-111 | Add `:focus-visible` ring to DualToneChecklist, ServiceSpectrum, ProcessSteps | `src/styles/components.css` | High | [ ] |
| T-112 | Normalize hover shadows: standard cards → `--shadow-lg`, feature → `--shadow-xl` | `src/styles/components.css` | Medium | [ ] |
| T-113 | Replace hardcoded `0.2s ease` transitions with `var(--transition-fast)` | `src/styles/components.css` | Medium | [ ] |
| T-114 | Wrap 4 unguarded hover states in `@media (hover: hover)` | `src/styles/components.css` | Medium | [ ] |
| T-115 | Strengthen `benefit-card--link` hover with shadow elevation | `src/styles/components.css` | Low | [ ] |

### Next Queue

| Phase | Goal | Tasks |
|---|---|---|
| 7C | Tokenize repeated gradients | T-116 to T-118 |
| 7D | Normalize icon and badge implementation | T-119 to T-122 |
| 7E | Close component defects and legacy cleanup | T-123 to T-129 |

---

## 3. Completed Phases

- **Phases 1 to 4:** build recovery, architecture alignment, validation consolidation, and cleanup completed.
- **Phase 5:** vocabulary cleanup started; partial completion only. Remaining work moved forward as Phase 12 execution.
- **Phases 6 to 11:** content governance, content intelligence, stabilization, internal linking, dashboards, and conversion intelligence shipped.
- **Phase 3.1:** dead CTA label logic removed, rogue CTA issues closed, invalid gradient references removed.
- **Phase 3.2:** production inline-style violations removed and spacing/font hardcodes migrated to tokens.
- **Phase 3.3:** graph type integrity corrected and authority map regenerated cleanly.
- **Phase 3.4:** cleanup/dead-code phase skipped by user decision.
- **Phase 3.5:** hardening rules added across validators, docs, truth checks, and background enforcement.
- **Phase 7A:** section background system normalized and legacy gradient utility noise removed.

---

## 4. Historical Log

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
- `T-075` to `T-103`: critical fix, compliance, graph-integrity, and hardening batches completed.
- `T-104` to `T-109`: Phase 7A completed.

---

## 5. Operating Rules

- Update this file only for execution state, not for architecture facts.
- Keep only the active phase detailed.
- After any completed implementation batch, run `node scripts/system-sync.mjs`.
- If a task is superseded, remove it instead of duplicating it elsewhere.

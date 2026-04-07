# EXECUTION MEMORY — MindWP

> This document tracks current execution state, architectural decisions, and immediate system priorities.
> It is the active operational memory for the deterministic control layer.
> Updated: 2026-04-08 (Phase 2.8 stabilization pass applied)

---

## CURRENT PHASE

- **Phase:** Phase 2.8 — Content Stabilization + CTA Contract Completion
- **Status:** Warning-only, non-blocking
- **Objective:** Keep the system production-ready by fixing high-impact conversion-path content without changing architecture or scripts

---

## CURRENT SYSTEM STATUS

- **Master command:** `npm run system:report`
- **Master artifact:** `reports/system-report.json`
- **Current status:** `warning`
- **Blocking issues:** `0`
- **Advisory issues:** `3`

### Live advisory state

1. Recommended content metadata missing in `506` places
2. Missing recommended intent metadata on `147` nodes
3. Advisory lint drift remains in a small number of files

### System health snapshot

- `validate-all`: `17` validators total, `0` blocking failed, `1` advisory failed
- `system-state.json`: `WARNING`
- `system-drift.json`: `1` drift item
- Graph availability: `true`
- Graph size: `229` nodes, `9,893` edges

---

## ACTIVE PRIORITIES

1. Keep `system-report.json` as the single inspectable control-layer output
2. Keep CTA contract drift at zero across conversion paths
3. Reduce advisory metadata drift without introducing parallel validation logic
4. Add missing intent only on high-value pages
5. Preserve architecture, validators, and image-system behavior unchanged

---

## DECISION LOG

### D-001 — SYSTEM-CONTRACT.md Is the Only Behavioral Authority

**Status:** Locked

**Decision:** Conversion behavior, CTA rules, intent model, and contact contract live only in `SYSTEM-CONTRACT.md`.

**Impact:**
- Other docs may reference behavior
- Other docs may not redefine behavior
- Code changes must align to contract, not vice versa

---

### D-002 — Validators Consolidated Into Three Core Contract Surfaces

**Status:** Implemented

**Decision:** Replace fragmented metadata, structure, CTA, and conversion validation with:
- `scripts/validators/validate-content-contract.mjs`
- `scripts/validators/validate-domain-structure.mjs`
- `scripts/validators/validate-conversion-contract.mjs`

**Why:** Eliminate duplicate rule systems and reduce drift.

**Impact:**
- Old blog/resources/CTA/conversion split validators are removed
- Contract enforcement is centralized
- Structure enforcement is centralized

---

### D-003 — Lint Is Advisory In System Integrity Flow

**Status:** Implemented

**Decision:** `lint` no longer blocks the system report or aggregate validation flow.

**Why:** Phase 2 requires blocking only on critical integrity failures, not formatting or non-runtime lint drift.

**Impact:**
- `validate-all` can pass blocking integrity checks while still surfacing lint noise
- `system-state.json` and `system-report.json` still expose advisory lint issues

---

### D-004 — Generated Drift Is Blocking

**Status:** Implemented

**Decision:** `check-generated` is part of the blocking validation layer.

**Why:** Generated artifacts out of sync break determinism and invalidate the control layer.

**Impact:**
- Generated files are now integrity-critical
- Freshness is enforced before the system can be considered clean

---

### D-005 — Authority Map Must Exist As a Report Artifact

**Status:** Implemented

**Decision:** `scripts/generators/generate-authority-map.ts` writes both:
- `src/lib/authority/generated/authorityMap.ts`
- `reports/authority-map.json`

**Why:** Sync, dashboards, and system report need a machine-readable authority snapshot from the real generator.

**Impact:**
- `system-sync` no longer depends on an implicit or missing report
- `system-report` can consume authority state without re-deriving it

---

### D-006 — Authority Dashboard Is Visualization Only

**Status:** Implemented

**Decision:** `src/app/dev/authority-dashboard/page.tsx` reads only report files through `src/lib/dev/system-report.ts`.

**Allowed inputs:**
- `reports/system-report.json`
- `reports/system-state.json`
- `reports/system-drift.json`
- `reports/topic-authority-scores.json`
- `reports/content-gaps.json`

**Impact:**
- Old live monitor path removed
- Old dashboard actions removed
- Dashboard no longer computes health from registries at render time

---

## EXECUTION LOG

### E-001 — Validator Surface Simplified
**Date:** 2026-04-07

**Completed:**
- Added merged contract validators
- Removed duplicate validator files
- Reclassified docs, vocabulary, checklist, fix-log, and reports-structure as advisory

---

### E-002 — Image Scripts Relocated Without Behavior Change
**Date:** 2026-04-07

**Completed:**
- Moved image tooling into `scripts/image-system/`
- Updated package scripts, docs, registry entries, and dashboard hints
- Preserved image generation logic exactly

---

### E-003 — System Sync Simplified
**Date:** 2026-04-07

**Completed:**
- `scripts/core/system-sync.mjs` reduced to state + drift generation only
- Current outputs:
	- `reports/system-state.json`
	- `reports/system-drift.json`

**Removed from sync responsibility:**
- decision logs
- system log reconstruction
- doc-derived execution state

---

### E-004 — Master Report Engine Added
**Date:** 2026-04-08

**Completed:**
- Added `scripts/core/system-report.mjs`
- Added `npm run system:report`
- Normalized blocking, advisory, content, conversion, graph, design, summary, and priority output into `reports/system-report.json`

---

### E-005 — Dashboard Alignment Completed
**Date:** 2026-04-08

**Completed:**
- Authority dashboard switched to report-only mode
- `src/lib/dev/systemMonitor.ts` removed
- obsolete dashboard panels removed
- obsolete authority dashboard server actions removed

---

### E-006 — Final Verification Passed
**Date:** 2026-04-08

**Commands executed successfully:**
- `npm run system:report`
- `node scripts/core/validate-all.mjs`
- `node scripts/core/system-sync.mjs`

**Result:**
- no blocking failures
- report pipeline stable
- system remains in `warning` due to advisory issues only

---

### E-007 — CTA Contract Stabilization Pass Completed
**Date:** 2026-04-08

**Completed:**
- Ran `npm run system:report` as the source-of-truth pass
- Converted report output into a launch-priority fix list
- Updated high-impact service, feature, and resource CTA links to use explicit `/contact?system=...&source=...` contract parameters
- Re-ran report until CTA contract drift returned to zero

**Result:**
- `conversion.cta_missing_system`: `0`
- `conversion.cta_missing_source`: `0`
- `conversion.invalid_contact_links`: `0`
- System remains `warning` only because of advisory metadata, advisory intent, and advisory lint drift

---

## CURRENT TASKS

### T-001 — Reduce advisory metadata drift
**Status:** Active
**Priority:** High
**Description:** Reduce missing recommended metadata counts on high-impact pages without changing the blocking contract surface.

### T-002 — Normalize intent coverage
**Status:** Active
**Priority:** High
**Description:** Add explicit intent metadata where missing on service-adjacent and high-value conversion-support pages so advisory intent count can trend downward.

### T-003 — Preserve CTA contract integrity
**Status:** Active
**Priority:** High
**Description:** Keep all content CTAs that route to `/contact` aligned to the explicit `system` + `source` contract.

### T-004 — Clear residual advisory lint noise
**Status:** Active
**Priority:** Medium
**Description:** Remove remaining non-blocking lint warnings to move system status from `warning` to `clean`.

### T-005 — Preserve report-only dashboard boundary
**Status:** Continuous
**Priority:** High
**Description:** Do not reintroduce frontend recomputation or live health logic into dashboards.

---

## LOCKED CONSTRAINTS

These constraints are active and must not change without architectural review:

- **Single CTA entry:** `/contact` is the only conversion endpoint
- **No inline forms:** forms are prohibited on content pages
- **Deterministic routing:** no runtime CTA variability outside contract-defined fallback behavior
- **One source of truth per concern:** no duplicate validators, no duplicate report engines, no dashboard-side recomputation
- **Validators block only on critical integrity:** graph, contract, generated drift, design token violations, inline styles in production UI, internal link integrity
- **Analyzers are advisory:** report only, never block
- **Image system preserved:** path and organization changes allowed, logic changes not allowed in this phase

---

## KNOWN RISKS

### R-001 — Advisory metadata counts remain high
**Impact:** Medium
**Current state:** `506` recommended metadata gaps, `147` missing intent values.

### R-002 — Advisory lint still prevents clean status
**Impact:** Low
**Current state:** non-blocking lint failures still appear in report output, including prettier drift in a small number of service files.

### R-003 — Report-driven dashboard boundary must stay enforced
**Impact:** High
**Current state:** page layer is aligned; future dashboard work must not reintroduce live computation.

### R-004 — Broad advisory cleanup can dilute impact if done indiscriminately
**Impact:** Medium
**Current state:** the remaining advisory backlog is large enough that future passes must stay priority-driven rather than attempting full cleanup.

---

## OPERATIONAL WORKING ORDER

### Start work
1. Run `npm run system:report`
2. Read `reports/system-report.json`
3. Read this file for active priorities and locked constraints

### Finish work
1. Run targeted validators if needed
2. Run `npm run system:report`
3. Confirm `reports/system-report.json`, `reports/system-state.json`, and `reports/system-drift.json` updated cleanly
4. Do not leave blocking failures behind

---

END OF DOCUMENT.

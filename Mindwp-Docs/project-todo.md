# Project Roadmap — MindWP System Governance Remediation

Master task list for all findings from SYSTEM-ALIGNMENT-AUDIT.md, DOC-RECONCILIATION.md, and validator enforcement results.

**Generated:** 2026-04-02
**Input sources:**
1. `Mindwp-Docs/SYSTEM-ALIGNMENT-AUDIT.md` — 6-part audit (M1-M7, G1-G8, D1-D6, R1-R6)
2. `Mindwp-Docs/DOC-RECONCILIATION.md` — Decision validation (Q1-Q6, all decided)
3. `reports/system-state.json` — 121 violations across 5 validators
4. `Mindwp-Docs/archive-reference/project-todo.md` — Prior phases 1-19 (TASK-001 through TASK-074)

**Confirmed decisions (from DOC-RECONCILIATION Q1-Q6):**
- Q1=C: Delete `GOAL_CTA_LABELS` and `CTA_LABELS` — ctaResolver becomes intensity-only
- Q2=A: SVG inline styles exempt; delete `components/layout/` duplicate logos (0 consumers)
- Q3=B: Refactor Header/MobileMenu inline styles to CSS class toggling (Phase 13 task)
- Q4=B: Remove `gradient-cta-5` and `gradient-cta-6` references from components.css
- Q5=B: Fix analysis layer to preserve `industry-detail` / `industry-category` types
- Q6=Yes: Expand `validate-cta.mjs` scope to `src/lib/`, `src/config/`, `src/components/system/`

**Task ID continuation:** New tasks start at T-075 (continuing from TASK-074 in archive).

---

## TASK STATE DEFINITIONS

- `[ ]` TODO — Not started, ready to execute
- `[x]` DONE — Completed and validated
- `[~]` IN PROGRESS — Currently being worked on
- `[HOLD]` — Blocked by dependency
- `[FUTURE]` — Not for current execution cycle

---

## ALREADY COMPLETED (Validator Enforcement Layer — Phase 3 Prompts 1-3)

These governance plan actions were completed during the validator enforcement buildout:

| Governance Action | What Was Done | Status |
|---|---|---|
| A1 — Expand `validate-cta.mjs` scope | Scope expanded to `src/lib/`, `src/config/`, `src/components/system/` (Q6=Yes) | [x] DONE |
| B1 — Add inline style detection | `validate-design-system.cjs` now scans all TSX for `style={{` (shadcn + SVG `<text>` exempt) | [x] DONE |
| B4 — Add gradient token validity check | `validate-design-system.cjs` now checks gradient references against `foundation.css` | [x] DONE |
| B5 — Document shadcn inline style exemption | Exemption added to SYSTEM-TRUTH.md §4.1 | [x] DONE |
| C1 — Token enforcement validator | `scripts/validation/validate-tokens.mjs` created (flags hardcoded spacing + font-size in components.css) | [x] DONE |
| — Inline styles standalone validator | `scripts/validation/validate-inline-styles.mjs` created (scans all TSX, shadcn + SVG `<text>` exempt) | [x] DONE |
| — System log engine | `scripts/generate-system-log.mjs` created (orchestrates all validators → `reports/system-state.json` + `SYSTEM-LOG.md`) | [x] DONE |

---

# ═══════════════════════════════════════════════════════
# PHASE 3.1 — CRITICAL CODE FIXES
# ═══════════════════════════════════════════════════════

Goal: Delete dead code and remove undefined token references. Zero-risk, high-governance-impact.

| ID | Title | Type | Source | Files | Priority | Status |
|---|---|---|---|---|---|---|
| T-075 | Delete `GOAL_CTA_LABELS` from ctaResolver.ts | Fix | M1, Q1=C, A2 | `src/lib/ui/ctaResolver.ts` | Critical | [ ] |
| T-076 | Delete `CTA_LABELS` from ctaResolver.ts | Fix | M1, Q1=C, A2 | `src/lib/ui/ctaResolver.ts` | Critical | [ ] |
| T-077 | Remove `.bg-gradient-cta-5` class from components.css | Fix | M4, Q4=B, B3 | `src/styles/components.css` | High | [ ] |
| T-078 | Remove `.bg-gradient-cta-6` class from components.css | Fix | M4, Q4=B, B3 | `src/styles/components.css` | High | [ ] |
| T-079 | Fix rogue CTA label in `smart-website-systems.ts` | Fix | Validator: CTA wrongLabels=1 | `src/domains/*/data/smart-website-systems.ts` | High | [ ] |

**Expected validator impact:** CTA violations 10→0 (after T-075/T-076/T-079). Design gradient violations 4→0 (after T-077/T-078).

---

# ═══════════════════════════════════════════════════════
# PHASE 3.2 — DESIGN SYSTEM COMPLIANCE
# ═══════════════════════════════════════════════════════

Goal: Eliminate inline style violations and migrate hardcoded token values.

### 3.2a — Inline Style Refactoring

| ID | Title | Type | Source | Files | Priority | Status |
|---|---|---|---|---|---|---|
| T-080 | Refactor `Header.tsx` inline styles to CSS classes | Fix | M2c, Q3=B | `src/global/Header.tsx` | High | [ ] |
| T-081 | Refactor `HeaderMobileMenuIsland.tsx` inline styles to CSS classes | Fix | M2c, Q3=B | `src/global/HeaderMobileMenuIsland.tsx` | High | [ ] |
| T-082 | Refactor `Header.tsx` (layout) inline styles to CSS classes | Fix | M2c, Q3=B | `src/components/layout/Header.tsx` | High | [ ] |
| T-083 | Audit remaining inline style violations (9 var-token) and fix | Fix | Validator: inlineStyles=9 | Various TSX files | Medium | [ ] |

**Expected validator impact:** Inline style violations 9→0 (after T-080 through T-083).

### 3.2b — Token Migration

| ID | Title | Type | Source | Files | Priority | Status |
|---|---|---|---|---|---|---|
| T-084 | Migrate hardcoded spacing values to design tokens | Fix | M6, Validator: spacing=45 | `src/styles/components.css` | Medium | [ ] |
| T-085 | Migrate hardcoded font-size values to design tokens | Fix | M6, Validator: fontSize=12 | `src/styles/components.css` | Medium | [ ] |

**Expected validator impact:** Token violations 57→0 (after T-084/T-085).

---

# ═══════════════════════════════════════════════════════
# PHASE 3.3 — GRAPH INTEGRITY
# ═══════════════════════════════════════════════════════

Goal: Fix the analysis layer to preserve formal `ContentNodeType` values. Eliminate 32 type violations.

| ID | Title | Type | Source | Files | Priority | Status |
|---|---|---|---|---|---|---|
| T-086 | Fix `conversionPriorityEngine.ts` to preserve `industry-detail`/`industry-category` types | Fix | M5, Q5=B, B6 | `src/lib/dev/conversionPriorityEngine.ts` | High | [ ] |
| T-087 | Fix `generate-content-intelligence.ts` to use formal industry types | Fix | M5, Q5=B | `scripts/analyze/generate-content-intelligence.ts` | High | [ ] |
| T-088 | Regenerate `authority-map.json` after type fixes | Fix | M5 | `reports/authority-map.json` | High | [HOLD] |
| T-089 | Verify 32 bare "industry" nodes resolved in graph validation | Validate | Validator: graph=32 | `reports/system-state.json` | High | [HOLD] |

**Dependencies:** T-088 blocked by T-086 + T-087. T-089 blocked by T-088.

**Expected validator impact:** Graph violations 32→0 (after T-086 through T-089).

---

# ═══════════════════════════════════════════════════════
# PHASE 3.4 — CLEANUP & DEAD CODE
# ═══════════════════════════════════════════════════════

Goal: Remove duplicate files, dead docs, and fix doc structure problems.

### 3.4a — Duplicate Component Removal

| ID | Title | Type | Source | Files | Priority | Status |
|---|---|---|---|---|---|---|
| T-090 | Delete `components/layout/HeaderLogoSvg.tsx` (duplicate, 0 consumers) | Cleanup | M2b, Q2=A, D6 | `src/components/layout/HeaderLogoSvg.tsx` | Medium | [ ] |
| T-091 | Delete `components/layout/FooterLogoSvg.tsx` (duplicate, 0 consumers) | Cleanup | M2b, Q2=A, D6 | `src/components/layout/FooterLogoSvg.tsx` | Medium | [ ] |

### 3.4b — Doc Structure Fixes

| ID | Title | Type | Source | Files | Priority | Status |
|---|---|---|---|---|---|---|
| T-092 | Delete `PHASE-7-VISUAL-SYSTEM-AUDIT Dump.md` | Cleanup | D2, A4 | `Mindwp-Docs/PHASE-7-VISUAL-SYSTEM-AUDIT Dump.md` | Medium | [ ] |
| T-093 | Delete empty `archive/` directory | Cleanup | D3 | `Mindwp-Docs/archive/` | Low | [ ] |
| T-094 | Mark `DESIGN-SYSTEM-ARCHITECTURE.md` as superseded or delete | Cleanup | D4 | `Mindwp-Docs/archive-reference/DESIGN-SYSTEM-ARCHITECTURE.md` | Low | [ ] |
| T-095 | Move `PHASE-7-VISUAL-SYSTEM-AUDIT.md` to archive or `phase7-audit/` | Cleanup | D5 | `Mindwp-Docs/PHASE-7-VISUAL-SYSTEM-AUDIT.md` | Low | [ ] |

---

# ═══════════════════════════════════════════════════════
# PHASE 3.5 — SYSTEM HARDENING (Docs + Validators)
# ═══════════════════════════════════════════════════════

Goal: Close governance gaps. Add missing doc rules. Build missing validators for drift prevention.

### 3.5a — Doc Governance Updates

| ID | Title | Type | Source | Files | Priority | Status |
|---|---|---|---|---|---|---|
| T-096 | Add CTA scan scope rule to Foundation §5 | Doc | G4, C4 | `Mindwp-Docs/system/FOUNDATION-AND-POSITIONING.md` | High | [ ] |
| T-097 | Add gradient token lifecycle rule to governing docs | Doc | G6, C5 | `Mindwp-Docs/system/DESIGN-SYSTEM-CONTROL-LAYER.md` | Medium | [ ] |
| T-098 | Document hero system archetypes (SimpleHero vs SplitHeroSection) | Doc | G7, C6 | `Mindwp-Docs/system/DESIGN-SYSTEM-CONTROL-LAYER.md` | Medium | [ ] |
| T-099 | Update "No inline styles" claim in SYSTEM-TRUTH Strengths | Doc | M7 | `Mindwp-Docs/system/SYSTEM-TRUTH.md` | Low | [ ] |
| T-100 | Add hardcoded value allowlist to SYSTEM-TRUTH §8.4 | Doc | M6, G2 | `Mindwp-Docs/system/SYSTEM-TRUTH.md` | Medium | [ ] |

### 3.5b — Validator Hardening

| ID | Title | Type | Source | Files | Priority | Status |
|---|---|---|---|---|---|---|
| T-101 | Create `validate-system-truth.mjs` — auto-check key counts against live data | Validator | R3, C3 | `scripts/validation/validate-system-truth.mjs` | High | [ ] |
| T-102 | Add section background alternation check to `validate-design-system.cjs` | Validator | G8, C2 | `scripts/validate-design-system.cjs` | Medium | [ ] |
| T-103 | Add Graph type reconciliation check (authority-map types vs ContentNodeType) | Validator | G3 | `scripts/validate-graph.ts` | Medium | [HOLD] |

**Dependencies:** T-103 blocked by T-086/T-087 (type fixes must land first, otherwise validator would flag the same 32 violations).

---

# ═══════════════════════════════════════════════════════
# TASK SUMMARY
# ═══════════════════════════════════════════════════════

## By Phase

| Phase | Tasks | Priority Breakdown |
|---|---|---|
| 3.1 — Critical Code Fixes | 5 | 2 Critical, 3 High |
| 3.2 — Design System Compliance | 6 | 3 High, 3 Medium |
| 3.3 — Graph Integrity | 4 | 4 High (2 blocked) |
| 3.4 — Cleanup & Dead Code | 6 | 2 Medium, 4 Low-Medium |
| 3.5 — System Hardening | 8 | 2 High, 5 Medium, 1 Low |
| **Total** | **29** | |

## By Type

| Type | Count |
|---|---|
| Fix (code change) | 14 |
| Cleanup (delete/move) | 6 |
| Doc (governing doc update) | 5 |
| Validator (new/expanded check) | 3 |
| Validate (verification step) | 1 |

## By Status

| Status | Count |
|---|---|
| TODO `[ ]` | 26 |
| HOLD (blocked) | 3 |

## Expected System State After Completion

```
Validators:
  CTA:           10 → 0  (Phase 3.1)
  Design:        13 → 0  (Phase 3.1 + 3.2)
  Graph:         32 → 0  (Phase 3.3)
  Tokens:        57 → 0  (Phase 3.2)
  Inline Styles:  9 → 0  (Phase 3.2)
  ──────────────────────
  Total:        121 → 0

Governance gaps closed: G2, G3, G4, G6, G7, G8
Doc problems resolved: D2, D3, D4, D5, D6
System risks mitigated: R1, R2, R3, R5, R6
```

---

## Execution Order (Recommended)

1. **Phase 3.1** — Critical fixes first (dead code deletion, gradient cleanup). Immediate validator improvement.
2. **Phase 3.4** — Cleanup while context is fresh. Low risk, no code logic changes.
3. **Phase 3.3** — Graph type fixes. Regenerate authority map. Verify.
4. **Phase 3.2** — Design system compliance. Largest effort (inline styles + token migration).
5. **Phase 3.5** — System hardening last. Doc updates + new validators lock the gains.

**Rule:** After each phase, run `node scripts/generate-system-log.mjs` to verify violation counts drop as expected.

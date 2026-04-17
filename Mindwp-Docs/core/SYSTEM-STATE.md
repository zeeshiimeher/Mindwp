# SYSTEM STATE — MindWP

> Runtime snapshot. Current phase, active decisions, constraints, and known risks.
> This document does NOT define architecture — it reflects current system reality.
> If this document conflicts with SYSTEM.md → SYSTEM.md wins.

---

## WHEN TO USE THIS DOC

Use this when you need to know: what phase we are in, what decisions are active, what constraints apply, what risks exist, and what tasks are current.

Architecture → SYSTEM.md. Content rules → CONTENT.md. CTA contracts → CONVERSION.md.

---

# 1. CURRENT SNAPSHOT

**Phase:** Phase 3.0 — System Quality, Content Completeness, and SEO Authority Stabilized
**Status:** Clean
**Objective:** Preserve centralized, report-linked clean state across validation, metadata, crawl alignment, topic authority, and dashboard visibility.

**Platform:** Next.js + TypeScript (strict). Custom BEM CSS. Tailwind v4 bridge. GoHighLevel backend. Vercel target.

**Content graph:** 229 nodes, 9,893 edges, 7 formal content types (`ContentNodeType`).

**System health:**
- Validators: 21 total, 0 blocking, 0 advisory
- Tests: 49 passed, 0 failed, 0 skipped (unit 7, system 21, integration 11, e2e 10)
- System state: CLEAN
- Drift: 0 items
- SEO: 349 routes, 0 missing metadata, 100% canonical/sitemap/OG alignment
- Authority: 42 topics, 42 complete coverage, 0 orphan topics, average score 68

---

# 2. ACTIVE DECISIONS

### D-001 — SYSTEM.md Is the Only Behavioral Authority
**Status:** Locked. Other docs reference behavior but may not redefine it.

### D-002 — Three Core Contract Validators
**Status:** Implemented. `validate-content-contract`, `validate-domain-structure`, `validate-conversion-contract`.

### D-003 — Lint Is Advisory
**Status:** Implemented. Lint does not block system report or validation flow.

### D-004 — Generated Drift Is Blocking
**Status:** Implemented. Generated artifacts out of sync = blocking failure.

### D-005 — Authority Map Exists As Report Artifact
**Status:** Implemented. Written to both `authorityMap.ts` and `reports/authority-map.json`.

### D-006 — Dashboard Is Visualization Only
**Status:** Implemented. Reads report files only. No frontend recomputation.

### D-007 — Shared Route Inventory Governs SEO
**Status:** Implemented. Single inventory for crawl, sitemap, metadata.

### D-008 — Topic Authority Uses Coverage Guarantees
**Status:** Implemented. Each topic needs blog path + internal support path.

### D-009 — One Control Plane Dashboard
**Status:** Implemented. Only `/dev/system-dashboard`. Old content-dashboard removed.

### D-010 — Static OG Fallback
**Status:** Implemented. All routes use `/og-default.png` (1200x630).

## Phase 10 Decisions (Locked)

| # | Decision | Summary |
|---|---|---|
| D1 | Deprecate internal linking engine | 10 files deprecated. Zero production usage. |
| D2 | SmartRelatedSection is sole linking system | Must be on ALL content templates. |
| D3 | Link slot rules LOCKED | service→services; feature→services; industry→services+caseStudies+resources; blog→resources+industries; resource→services+industries; caseStudy→industries+resources |
| D4 | Link limits LOCKED | Max 2 sections, max 3 items, max 6 total |
| D5 | Remove JourneyNavigator | Removed from all templates. |
| D6 | Remove `/conversation` | Permanent redirect to `/contact`. |
| D7 | Feature linking via graph only | No hardcoded service links. |
| D8 | No content expansion in Phase 10 | Fix routing + linking + cleanup only. |

---

# 3. CURRENT CONSTRAINTS

- **Single CTA entry:** `/contact` is the only conversion endpoint
- **No inline forms** on content pages
- **Deterministic CTA routing:** no runtime variability outside contract-defined fallback
- **One source of truth per concern:** no duplicate validators, report engines, or dashboard recomputation
- **Validators block on critical integrity:** graph, contract, generated drift, tokens, inline styles, internal links
- **Analyzers are advisory only**
- **Image system preserved:** path changes allowed, logic changes not allowed

## Permission Boundaries

**Allowed without asking:**
- Run sync and validators
- Read any repo file for context
- Implement tasks from this document
- Fix validator failures within active task scope

**Requires user confirmation:**
- Modify governing docs in Mindwp-Docs/core/
- Add or remove validators
- Change CTA governance or conversion model
- Add new content types
- Make structural CSS changes outside requested scope

---

# 4. CURRENT TASKS

### T-001 — Preserve Clean Report State
**Status:** Continuous | **Priority:** High

### T-002 — Preserve SEO Coverage Guarantees
**Status:** Continuous | **Priority:** High

### T-003 — Preserve Topic Authority Coverage
**Status:** Continuous | **Priority:** High

### T-004 — Preserve CTA Contract Integrity
**Status:** Active | **Priority:** Medium

### T-005 — Preserve Test Health Snapshot
**Status:** Active | **Priority:** Medium

### T-006 — Preserve Report-Only Dashboard Boundary
**Status:** Continuous | **Priority:** High

### T-007 — Keep Contact Submissions Minimal
**Status:** Active | **Priority:** High

### T-008 — Keep Structural Validators Authoritative
**Status:** Active | **Priority:** High

---

# 5. KNOWN RISKS

### R-001 — Shared control points must stay authoritative
Route metadata changes must flow through shared inventory and graph snapshot logic.

### R-002 — Dashboard/report drift
Report-only dashboard boundary must remain enforced.

### R-003 — Topic authority regression
Adding or renaming canonical topics without coverage can reintroduce orphan topics.

### R-004 — Contact delivery requires config
Contact form only works with `RESEND_API_KEY` and `CONTACT_EMAIL` in env.

### R-005 — Test snapshot staleness
Test results only stay meaningful if rerun after behavior changes.

---

# 6. EXECUTION LOG

### E-001 — Validator Surface Simplified
**Date:** 2026-04-07. Merged contract validators. Removed duplicates. Reclassified docs/vocabulary/checklist as advisory.

### E-002 — Image Scripts Relocated
**Date:** 2026-04-07. Moved to `scripts/image-system/`. Logic preserved exactly.

### E-003 — System Sync Simplified
**Date:** 2026-04-07. Reduced to state + drift generation. Outputs: `reports/system-state.json`, `reports/system-drift.json`.

### E-004 — Master Report Engine Added
**Date:** 2026-04-08. Added `system-report.mjs` and `npm run system:report`. Normalized output to `reports/system-report.json`.

### E-005 — Dashboard Alignment
**Date:** 2026-04-08. Report-only mode. Removed monitor, panels, and server actions.

### E-006 — Final Verification
**Date:** 2026-04-08. All commands passed. No blocking failures.

### E-007 — CTA Contract Stabilization
**Date:** 2026-04-08. CTA drift resolved to zero: no missing system, no missing source, no invalid contact links.

### E-008 — Intent Coverage Audit
**Date:** 2026-04-08. All blog/resource files declare intent. Reports claim 147 missing — report/parsing inconsistency, not content defect.

### E-009 — Intent Detection Fixed
**Date:** 2026-04-08. Root cause: graph builder dropped intent. Fixed in `registry.ts` and `types.ts`. Missing intent → 0.

### E-010 — Conversion Clarity Pass
**Date:** 2026-04-08. Updated CTA labels on service/feature pages to system-specific. No new warnings.

### E-011 — Conversion Contract Hardening
**Date:** 2026-04-08. Standardized all CTA hrefs through `buildContactHref()`. Added e2e conversion tests. Added `reports/execution-log.json`.

### E-012 — Contact Flow Simplified
**Date:** 2026-04-08. Direct email via Resend. No CRM, no webhooks, no automation.

### E-013 — Test System Centralized
**Date:** 2026-04-08. Runtime layers added (unit/system/integration/e2e). `npm run test:all` → `reports/test-results.json`. 49 passed.

### E-014 — SEO Authority Completion
**Date:** 2026-04-08. 21/21 validators passed. 0 drift. 100% SEO coverage. 42/42 topics complete.

### E-015 — Content Dashboard Removed
**Date:** 2026-04-08. Deleted route, middleware, robots. Only `/dev/system-dashboard` remains.

### E-016 — Launch Readiness Pass
**Date:** 2026-04-08. Static OG fallback. Zero weak topics. Clean system report.

### E-017 — Enforcement Runtime Migration
**Date:** 2026-04-16. Added canonical page identity, page-scoped CTA registry enforcement, centralized related-content building, and template/adaptor ownership for related-content rendering. Detail routes no longer compose related-content UI.

### E-018 — FAQ + Component Inventory Consolidation
**Date:** 2026-04-16. Consolidated live FAQ rendering on `FAQSection`, removed dead FAQ/related wrappers, regenerated component docs, and switched component-library metadata to generator-owned representative usage plus usage counts.

### E-019 — Structured Audit Reconciliation and Landing Cleanup
**Date:** 2026-04-17. Reconciled the migrated structured audit against the retired raw planning notes, kept the approved service-page rewrite pass and homepage cleanup closed, removed the unwanted related case-study strips from the generic services, features, industries, and blog landing pages, and preserved the case-study hub as the place where proof-grid behavior remains data-driven.

### E-020 — Component Library Review Hardening
**Date:** 2026-04-17. Extended component-library reporting to account for transitive composition through section wrappers, surfaced reusable single-component dependencies inside section entries, normalized live-page links away from dynamic placeholder routes, narrowed preview controls to reviewer-focused switches, set the approved tablet/mobile preview widths, and fixed the preview presentation issues uncovered during the reopened review pass.

---

# 7. PRIORITIES

1. Keep `system-report.json` and `test-results.json` as linked control-layer outputs
2. Keep all blocking validators and runtime test layers green
3. Keep contact path minimal: `/contact` → `/api/contact` → Resend → inbox
4. Preserve zero-gap SEO state
5. Preserve complete canonical-topic coverage
6. Preserve architecture, validators, dashboard report-loading, and static OG fallback

---

END OF DOCUMENT.

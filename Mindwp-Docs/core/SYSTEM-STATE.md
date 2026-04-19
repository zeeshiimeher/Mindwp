# SYSTEM STATE — MindWP

> Runtime snapshot. Current phase, active decisions, constraints, and known risks.
> This document does NOT define architecture — it reflects current system reality.
> Historic execution entries are preserved below as system history.
> If this document conflicts with SYSTEM.md -> SYSTEM.md wins.

---

## WHEN TO USE THIS DOC

Use this when you need to know: the current live state, which decisions still govern the system, which constraints apply now, and what has already happened historically.

Architecture -> SYSTEM.md. Tooling -> TOOLS.md. CTA contracts -> CONVERSION.md.

---

# 1. CURRENT SNAPSHOT

**Snapshot Date:** 2026-04-19
**Phase:** Frozen production control plane with operator-mode internal dashboard
**Status:** PASS
**Objective:** Preserve the locked `system:full` pipeline, frozen report contracts, and historical system record without losing prior operational context.

**Platform:** Next.js + TypeScript (strict). Custom BEM CSS. Tailwind v4 bridge. Vercel target.

**Live system health from current report artifacts:**
- Validators: 22 registered, 0 blocking failures, 1 advisory failure
- Current advisory failure: lint drift in `src/app/dashboard/page.tsx`
- System report: `reports/system-report.json` is `PASS`
- Client dashboard artifact: healthy
- Client dashboard issues: 0
- Client dashboard optimized pages: 227
- Topic authority: 42 topics analyzed, 42 complete coverage, average score 81

**Current execution model:**
- Full-system entrypoint: `npm run system:full`
- Internal operator route: `/dev/system-dashboard`
- Client-safe dashboard artifact: `reports/client-dashboard.json`
- Dashboard remains report-driven; it does not define system truth

**Test artifact note:**
- Do not treat `reports/test-results.json` as current unless a test-producing run has explicitly written it.

---

# 2. ACTIVE DECISIONS

### D-001 — SYSTEM.md Is the Only Behavioral Authority
**Status:** Locked. Other docs reference behavior but may not redefine it.

### D-002 — Full-System Execution Is Locked To `system:full`
**Status:** Implemented. Manual report entrypoints are blocked so validation, snapshots, dashboards, and registries stay aligned.

### D-003 — Lint Is Advisory
**Status:** Implemented. Lint does not block system report or validation flow.

### D-004 — Generated Drift Is Blocking
**Status:** Implemented. Generated artifacts out of sync = blocking failure.

### D-005 — Authority Map Exists As Report Artifact
**Status:** Implemented. Written to both `authorityMap.ts` and `reports/authority-map.json`.

### D-006 — Dashboard Is Visualization Only
**Status:** Implemented. Reads frozen report files only. No dashboard-owned system truth.

### D-007 — Shared Route Inventory Governs SEO
**Status:** Implemented. Single inventory for crawl, sitemap, metadata.

### D-008 — Topic Authority Uses Coverage Guarantees
**Status:** Implemented. Each topic needs blog path + internal support path.

### D-009 — One Internal Control Plane Dashboard
**Status:** Implemented. `/dev/system-dashboard` remains the internal dashboard surface.

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
- **Validators block on critical integrity:** graph, contract, generated drift, tokens, inline styles, internal links, frozen production contracts
- **Analyzers are advisory unless promoted into the locked control layer**
- **Manual report paths are locked:** use `npm run system:full`
- **Image system preserved:** path changes allowed, logic changes not allowed

## Permission Boundaries

**Allowed without asking:**
- Run validators and targeted checks
- Read any repo file for context
- Implement tasks from this document
- Fix validator failures within active task scope
- Update non-governing docs when requested

**Requires user confirmation:**
- Modify governing docs in Mindwp-Docs/core/
- Add or remove validators
- Change CTA governance or conversion model
- Add new content types
- Make structural CSS changes outside requested scope

---

# 4. CURRENT TASKS

### T-001 — Preserve Locked Full-System State
**Status:** Continuous | **Priority:** High

### T-002 — Preserve SEO Coverage Guarantees
**Status:** Continuous | **Priority:** High

### T-003 — Preserve Topic Authority Coverage
**Status:** Continuous | **Priority:** High

### T-004 — Preserve CTA Contract Integrity
**Status:** Continuous | **Priority:** High

### T-005 — Preserve Historical System Records
**Status:** Active | **Priority:** High

### T-006 — Preserve Report-Only Dashboard Boundary
**Status:** Continuous | **Priority:** High

### T-007 — Keep Documentation Aligned To The Current Control Plane
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
Test artifacts only stay meaningful if a current test-producing run has written them.

### R-006 — Advisory lint can hide meaningful drift
The latest full-system snapshot is still PASS, but advisory lint noise can accumulate and hide more important regressions.

---

# 6. EXECUTION LOG

### E-001 — Validator Surface Simplified
**Date:** 2026-04-07. Merged contract validators. Removed duplicates. Reclassified docs/vocabulary/checklist as advisory.

### E-002 — Image Scripts Relocated
**Date:** 2026-04-07. Moved to `scripts/image-system/`. Logic preserved exactly.

### E-003 — System Sync Simplified
**Date:** 2026-04-07. Historical entry. Reduced to state + drift generation with `reports/system-state.json` and `reports/system-drift.json` at that time.

### E-004 — Master Report Engine Added
**Date:** 2026-04-08. Historical basis for the current control plane. The execution surface later evolved from `system:report` into the locked `npm run system:full` entrypoint, which now writes `reports/system-report.json`, `reports/client-dashboard.json`, and snapshot history.

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
**Date:** 2026-04-08. Historical snapshot. Runtime layers added (unit/system/integration/e2e). `npm run test:all` wrote `reports/test-results.json` at that stage.

### E-014 — SEO Authority Completion
**Date:** 2026-04-08. Historical milestone. 21/21 validators passed at that point, with zero drift and full topic coverage.

### E-015 — Content Dashboard Removed
**Date:** 2026-04-08. Deleted route, middleware, robots. Internal dashboard surface consolidated.

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

### E-021 — Operator Dashboard Daily-Mode Pass
**Date:** 2026-04-19. The internal system dashboard was refactored into a thin server wrapper plus a client operator layer with Today’s Focus, fast presets, local-only memory, and condensed system-log presentation.

### E-022 — Current Report Snapshot Reviewed
**Date:** 2026-04-19. `reports/system-report.json` shows `PASS`, 22 validator entries, zero blocking failures, and one advisory lint failure outside the internal system dashboard.

### E-023 — Core Documentation Alignment Pass
**Date:** 2026-04-19. Core docs were re-aligned to the current `system:full` contract while preserving historical system-state entries.

---

# 7. PRIORITIES

1. Keep `reports/system-report.json` authoritative for internal system state.
2. Keep `reports/client-dashboard.json` aligned with the locked full-system run.
3. Keep core docs describing the current repo without deleting historical execution context.
4. Clear advisory lint drift before it spreads into broader dashboard or report surfaces.
5. Preserve graph, CTA, and topic-authority guarantees.

---

END OF DOCUMENT.

# EXECUTION MEMORY — MindWP

> This document tracks current execution state, architectural decisions, and immediate system priorities.
> It is the active operational memory for the deterministic control layer.
> Updated: 2026-04-08 (launch-ready authority and static OG fallback verified)

---

## CURRENT PHASE

- **Phase:** Phase 3.0 — System Quality, Content Completeness, and SEO Authority Stabilized
- **Status:** Clean
- **Objective:** Preserve the centralized, report-linked clean state across validation, metadata, crawl alignment, topic authority, dashboard visibility, and the static OG fallback without changing locked architecture

---

## CURRENT SYSTEM STATUS

- **Master command:** `npm run system:report`
- **Master artifact:** `reports/system-report.json`
- **Current status:** `clean`
- **Blocking issues:** `0`
- **Advisory issues:** `0`

### Live advisory state

- No live advisory items. Current validator, SEO, authority, and lint surfaces are clean.

### System health snapshot

- `validate-all`: `21` validators total, `0` blocking failed, `0` advisory failed
- `test-results.json`: `49` passed, `0` failed, `0` skipped
- Runtime test layers: `unit 7`, `system 21`, `integration 11`, `e2e 10`
- `system-state.json`: `CLEAN`
- `system-drift.json`: `0` drift items
- SEO coverage: `349` routes analyzed, `0` missing metadata, `100%` canonical alignment, `100%` sitemap alignment, `100%` OG coverage
- Authority coverage: `42` topics analyzed, `42` complete coverage topics, `0` orphan topics, average score `68`

---

## ACTIVE PRIORITIES

1. Keep `system-report.json` and `test-results.json` as linked inspectable control-layer outputs
2. Keep all blocking validators and runtime test layers green
3. Keep the contact path minimal: `/contact` -> `/api/contact` -> Resend -> inbox email
4. Preserve zero-gap SEO state: no missing metadata, no duplicate titles/descriptions, no canonical or sitemap misalignment, and no OG gaps
5. Preserve complete canonical-topic coverage with `0` orphan topics and shared inventory-driven crawl logic
6. Preserve architecture, validators, dashboard report-loading, and the single static OG fallback at `/og-default.png`

---

## DECISION LOG

### D-001 — SYSTEM-CONTRACT.md Is the Only Behavioral Authority

**Status:** Locked

**Decision:** Conversion behavior, CTA rules, and contact contract live only in `SYSTEM-CONTRACT.md`.

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

### D-007 — Shared Route Inventory Governs SEO Consistency

**Status:** Implemented

**Decision:** Route-level SEO completeness, sitemap inclusion, canonical alignment, and crawl eligibility are governed from a shared inventory and graph SEO snapshot rather than page-by-page ad hoc checks.

**Impact:**
- `src/lib/content-quality/inventory.ts` is the route-level source of truth for crawl visibility checks
- `validate-content-quality` and `sitemap.ts` now measure against the same inventory
- Metadata fixes are applied through shared control points instead of mass manual route edits

---

### D-008 — Topic Authority Uses Coverage Guarantees

**Status:** Implemented

**Decision:** Canonical topic authority is measured by deterministic coverage guarantees: each topic needs at least one supporting blog path and at least one internal support path.

**Impact:**
- `reports/content-gaps.json` now tracks true coverage gaps and orphan topics
- `reports/topic-authority-scores.json` is aligned to the same coverage model
- Topic authority health is stable and report-driven rather than editorial-threshold driven

---

### D-009 — Split Dashboards Removed In Favor Of One Control Plane

**Status:** Implemented

**Decision:** The old `/content-dashboard` route is removed entirely. The operational dashboard surface now lives only at `/dev/system-dashboard`.

**Impact:**
- No redirect or legacy content-dashboard route remains in the app tree
- Dashboard documentation now points to the unified control plane only
- Middleware, crawl policy, and inventory no longer treat `/content-dashboard` as a live surface

---

### D-010 — Launch Metadata Uses One Static OG Fallback

**Status:** Implemented

**Decision:** Launch metadata no longer uses dynamic per-page OG image selection. All route metadata, inventory snapshots, and graph SEO snapshots now resolve to the single fallback image at `/og-default.png` with the standard `1200x630` dimensions.

**Impact:**
- Social preview coverage remains deterministic across the whole site
- Dashboard and report surfaces no longer drift from runtime metadata on OG images
- Launch SEO behavior is simpler to validate and maintain

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
- System remains `warning` only because of advisory metadata and advisory lint drift

---

### E-008 — Intent Coverage Audit Revealed Report Mismatch
**Date:** 2026-04-08

**Completed:**
- Audited editable blog content under `src/domains/blog/content/*.tsx`
- Audited editable resource content under `src/domains/resources/content/*.tsx`
- Confirmed all scanned blog and resource source files already declare an `intent` field
- Cross-checked live source state against `reports/content-contract-report.json` and `reports/system-report.json`

**Result:**
- Blog content files missing `intent`: `0`
- Resource content files missing `intent`: `0`
- Current reports still claim `147` missing intent values (`88` blog, `59` resource)
- This is not currently fixable through content-only edits and indicates report/parsing inconsistency outside the editable content layer

---

### E-009 — Intent Detection Fixed At Graph Layer
**Date:** 2026-04-08

**Root cause:**
- Content files exported `intent` correctly
- Blog and resource registries imported those files correctly
- The graph builder dropped `intent` because `src/lib/content-graph/registry.ts` only copied `industries`, `systems`, and `topics` into graph nodes
- `validate-content-contract.mjs` reads from structured graph nodes, so it reported intent as missing even when source content was valid

**Files updated:**
- `src/lib/content-graph/types.ts`
- `src/lib/content-graph/registry.ts`

**Result:**
- `content.missing_intent`: `0`
- Missing-intent warnings are resolved without modifying content files
- Remaining blog/resource intent warnings are now correctly classified as legacy-intent normalization warnings, not missing-intent warnings

---

### E-010 — Conversion Clarity Pass Applied To Core Entry Pages
**Date:** 2026-04-08

**Completed:**
- Updated primary CTA labels on high-impact service and feature pages to be system-specific and outcome-focused
- Tightened CTA supporting text to explain what the user gets next with less friction
- Simplified above-the-fold messaging on edited pages without changing structure, routing, or field shapes
- Re-ran `npm run system:report` after the pass

**Result:**
- `blocking.count`: `0`
- `conversion.cta_missing_system`: `0`
- `conversion.cta_missing_source`: `0`
- `conversion.invalid_contact_links`: `0`
- No new warnings or errors were introduced by the edited conversion pages

---

### E-011 — Conversion Contract Hardening Completed
**Date:** 2026-04-08

**Completed:**
- Removed the CTA/contact intent path from runtime CTA rendering, contact form submission, and conversion validation
- Standardized contact URL generation through `buildContactHref()` using canonical `system + sourceType + slug`
- Replaced hardcoded `/contact` and manual `source` construction across services, features, home, case studies, industries, and shared CTA defaults
- Added `tests/e2e/conversion.spec.ts` to verify CTA navigation, contact context propagation, API payload context, and invalid direct `/contact` access
- Added `reports/execution-log.json` as an explicit hardening artifact

**Result:**
- Global CTA routing no longer permits `system=unknown`
- Conversion validator now blocks raw contact literals and manual source assembly in scanned conversion surfaces
- Contact submissions require only canonical `system` and `source` context
- CTA intensity is page-type driven only; no intent override layer remains in conversion runtime

---

### E-011 — CTA Clarity Rollout Extended Across Secondary Conversion Pages
**Date:** 2026-04-08

**Completed:**
- Replaced remaining generic primary CTAs on untouched feature pages with outcome-driven, system-aware labels
- Rolled CTA label upgrades across industry detail pages and industry category pages while keeping each page internally consistent
- Replaced generic case-study CTA labels with result-specific actions aligned to the system shown in each case study
- Upgraded the resource hub CTA title, supporting text, and primary action to match the systems-first positioning
- Spot-checked high-value blog posts and confirmed their existing CTA buttons were already system-specific, so no blog CTA rewrite was required in this pass
- Re-ran `npm run system:report` after the rollout

**Result:**
- `blocking.count`: `0`
- `advisory.count`: `2`
- `conversion.cta_missing_system`: `0`
- `conversion.cta_missing_source`: `0`
- `conversion.invalid_contact_links`: `0`
- CTA copy improvements did not reopen contract drift

---

### E-012 — Contact Flow Simplified To Direct Email Delivery
**Date:** 2026-04-08

**Completed:**
- Replaced the legacy contact page browser post to `/form-handler.php` with a minimal JSON post to `/api/contact`
- Simplified the contact form UI to collect only `name`, `email`, and `message`
- Preserved hidden `system` and `source` context on the `/contact` page for attribution
- Added Resend-backed email delivery to `CONTACT_EMAIL`
- Added `.env.example` entries for `RESEND_API_KEY` and `CONTACT_EMAIL`

**Deliberately not added:**
- CRM writes
- automation workflows
- dashboards for leads
- webhooks
- extra validation layers
- complex success/error UX states

**Operational requirement:**
- Live submissions require `RESEND_API_KEY` and `CONTACT_EMAIL` in `.env.local`

**Result:**
- Contact flow is now a direct email notification path only
- Submission context is limited to `system` + `source`
- Typecheck passed after the change

---

### E-013 — Production Test System Centralized And Report-Linked
**Date:** 2026-04-08

**Completed:**
- Added explicit runtime layers under `tests/unit`, `tests/system`, `tests/integration`, and `tests/e2e`
- Added contract tests for reusable components and layout primitives
- Added runtime/system guarantees for graph alignment, route coverage, metadata consistency, taxonomy alignment, CTA/contact compatibility, related content validity, route protection, and graph cold-start budget
- Added integration coverage for contact API, representative route rendering, all-template rendering, sitemap/robots consistency, validator fixtures, and basic render budgets
- Added Playwright coverage for conversion flows, CTA query params, major route crawl, and rendered internal-link reachability
- Added blocking validators for `validate-template-payload-sufficiency` and `validate-section-structure`
- Added `scripts/run-tests.mjs` and `npm run test:all` to aggregate validators + Vitest layers + Playwright into `reports/test-results.json`
- Wired `test-results.json` into the authority dashboard through the shared report loader
- Normalized stale sitemap navigation from `/sitemap` to `/sitemap.xml`

**Result:**
- Blocking validator failures: `0`
- Runtime blocking layer failures: `0`
- Aggregated test snapshot: `49` passed, `0` failed, `0` skipped
- Dashboard test health is now report-driven rather than computed ad hoc
- Internal-link crawl now catches stale navigation/document endpoint drift at runtime

---

### E-014 — System Quality And SEO Authority Completion Pass Finalized
**Date:** 2026-04-08

**Completed:**
- Added shared topic coverage and route inventory helpers to centralize SEO and authority measurement
- Enriched content graph nodes with route-level SEO snapshots used by validators, reports, and dashboard surfaces
- Added `validate-content-quality.mjs` and integrated its SEO, content, and authority outputs into validation and system reporting
- Moved sitemap generation onto the shared inventory and made robots/canonical/OG behavior consistent through shared metadata defaults
- Repaired duplicate titles, weak descriptions, topic coverage gaps, and residual lint drift without changing locked architecture
- Re-ran `npm run validate:all`, `npm run system:sync`, and `npm run system:report`

**Result:**
- `validate-all`: `21/21` passed, `0` blocking failed, `0` advisory failed
- `system-report.json`: `clean`
- `system-state.json`: `CLEAN`
- `system-drift.json`: `0` drift items
- SEO completeness: `0` missing metadata, `0` duplicate titles, `0` duplicate descriptions
- Crawl alignment: `100%` canonical alignment, `100%` sitemap alignment, `100%` OG coverage
- Authority coverage: `42` topics analyzed, `42` complete coverage topics, `0` orphan topics
- Lint status: clean

---

### E-015 — Content Dashboard Removal Finalized
**Date:** 2026-04-08

**Completed:**
- Deleted the last remaining `src/app/content-dashboard` route file
- Removed `/content-dashboard` from middleware and robots policy
- Updated system docs to reference only `/dev/system-dashboard`

**Result:**
- No content-dashboard route remains in the application
- Unified dashboard documentation and runtime surface are aligned

---

### E-016 — Launch Readiness Pass Completed
**Date:** 2026-04-08

**Completed:**
- Replaced dynamic OG metadata usage with the static fallback image at `/og-default.png`
- Normalized route inventory and graph SEO snapshots to the same OG fallback
- Strengthened existing service and resource topic anchors until all weak canonical topics were cleared
- Reduced multi-system service declarations to one primary system on the previously warned launch pages
- Updated dashboard fix suggestions to render action, target, impact, and time in one deterministic line

**Result:**
- `npm run typecheck`: passed
- `npm run system:report`: passed
- `reports/system-report.json`: `clean`
- `blocking.count`: `0`
- `advisory.count`: `0`
- `reports/topic-authority-scores.json`: `0` weak topics remaining

---

## CURRENT TASKS

### T-001 — Preserve Clean Report State
**Status:** Continuous
**Priority:** High
**Description:** Keep `validate-all`, `system-report`, `system-state`, and `system-drift` aligned at clean status after changes.

### T-002 — Preserve SEO Coverage Guarantees
**Status:** Continuous
**Priority:** High
**Description:** Keep metadata completeness, canonical alignment, sitemap alignment, robots output, and OG coverage at their current zero-gap state.

### T-003 — Preserve Topic Authority Coverage
**Status:** Continuous
**Priority:** High
**Description:** Keep every canonical topic backed by at least one blog path and one internal support path, with `0` orphan topics.

### T-004 — Preserve CTA Contract Integrity
**Status:** Active
**Priority:** Medium
**Description:** Keep all content CTAs that route to `/contact` aligned to the explicit `system` + `source` contract.

### T-005 — Preserve Unified Test Health Snapshot
**Status:** Active
**Priority:** Medium
**Description:** Keep `reports/test-results.json` current and keep the authority dashboard aligned to the shared report contract.

### T-006 — Preserve report-only dashboard boundary
**Status:** Continuous
**Priority:** High
**Description:** Do not reintroduce frontend recomputation or live health logic into dashboards.

### T-007 — Keep contact submissions minimal
**Status:** Active
**Priority:** High
**Description:** Preserve the current direct-email contact path without reintroducing CRM, webhook, automation, or dashboard coupling into the submission flow.

### T-008 — Keep structural validators authoritative
**Status:** Active
**Priority:** High
**Description:** Preserve the new template-payload and section-structure validators as the blocking source of truth for weak page payloads.

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

### R-001 — Clean status depends on shared control points staying authoritative
**Impact:** High
**Current state:** Resolved for now. Future route-level metadata changes must continue to flow through shared inventory, metadata, and graph snapshot logic.

### R-002 — Dashboard/report drift can return if live computation is reintroduced
**Impact:** High
**Current state:** Report-only dashboard boundary is currently enforced and must remain so.

### R-003 — Topic authority can regress through taxonomy edits
**Impact:** Medium
**Current state:** Resolved for now. Adding or renaming canonical topics without corresponding support-path coverage can reintroduce orphan topics or authority gaps.

### R-004 — Contact delivery depends on local email configuration
**Impact:** Medium
**Current state:** The contact form is functional only when `RESEND_API_KEY` and `CONTACT_EMAIL` are present. Without them, `/api/contact` returns a configuration error instead of sending mail.

### R-005 — Test snapshot staleness can hide regressions between runtime passes
**Impact:** Medium
**Current state:** Last aggregated runtime snapshot is still green (`49` passed, `0` failed), but it only stays meaningful if rerun after behavior changes.

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

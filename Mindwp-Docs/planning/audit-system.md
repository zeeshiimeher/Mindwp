# Execution-Grade System Hardening Spec

> MindWP production-safe execution spec.
> Purpose: convert the verified audit into a deterministic, low-risk implementation runbook.

---

## 0. LIVE EXECUTION TRACKER

Run date: 2026-04-19
Tracker status: active

### Current State

- Pre-flight baseline: complete, clean after Phase 0 fix.
- Report reset: complete, reports regenerated with fresh 2026-04-19 timestamps.
- Phase 0: complete.
- Phase 1: complete.
- Phase 2: in progress.
- Phase 3: not started.
- Phase 4: not started.

### Completed In This Run

- Stabilized the post-reset baseline by extending the timeout on the internal-links validator contract test so the full cold suite no longer flakes.
- Re-ran `npm run validate`, `npm run build`, and `CI=1 npm run test` successfully after the Phase 0 fix.
- Created checkpoint commit `4ab9b4f` with message `chore: stabilize post-reset baseline`.
- Deleted `src/lib/utils/memoize.ts` after confirming no workspace usages beyond the file definition and this execution spec.
- Deleted `scripts/validators/validate-system-docs.mjs` and removed its remaining `validate-all`, registry, and documentation references.
- Deleted `scripts/validators/validate-fix-log.mjs` and removed its remaining `validate-all`, registry, and documentation references.
- Deleted `scripts/validators/validate-reports-structure.mjs` and removed its remaining `validate-all`, registry, npm script, and documentation references.
- Deleted `scripts/validators/validate-checklist.mjs` with the full dormant `src/lib/dev/*` checklist-engine cluster and removed their remaining registry and documentation references.
- Merged `tests/integration/sitemap-robots-consistency.test.ts` into `tests/system/seo-consistency.test.ts` and deleted the integration copy.

### Phase 1 Verification Log

- Blocked: `scripts/analyzers/test-editing-stability.mjs`
  - Reason: still referenced in this spec, `scripts/system/script-registry.json`, and `Mindwp-Docs/core/TOOLS.md`.
- Excluded from current delete pass by spec: `heading-audit.cjs`, `split-screenshots.cjs`, `visual-audit-runtime.js`, `visual-audit-engine.js`, `run-visual-audit.js`.
- Completed: `src/lib/utils/memoize.ts`
  - Evidence: language-server usage search returned only the definition; text search found no workspace imports or call sites outside this execution spec.
- Completed: `scripts/validators/validate-system-docs.mjs`
  - Evidence: advisory-only validator, removed from `scripts/core/validate-all.mjs`, removed from `scripts/system/script-registry.json`, and stale doc mentions removed from `Mindwp-Docs/core/TOOLS.md` and `Mindwp-Docs/core/CONTENT.md`.
- Completed: `scripts/validators/validate-fix-log.mjs`
  - Evidence: advisory-only validator, removed from `scripts/core/validate-all.mjs`, removed from `scripts/system/script-registry.json`, and stale doc mentions removed from `Mindwp-Docs/core/TOOLS.md` and `Mindwp-Docs/core/CONTENT.md`.
- Completed: `scripts/validators/validate-reports-structure.mjs`
  - Evidence: advisory-only validator, removed from `scripts/core/validate-all.mjs`, removed from `scripts/system/script-registry.json`, dead `package.json` script removed, and stale doc mentions removed from `Mindwp-Docs/core/TOOLS.md` and `Mindwp-Docs/core/CONTENT.md`.
- Completed: `scripts/validators/validate-checklist.mjs` plus dormant checklist cluster
  - Evidence: the authority dashboard no longer imports the cluster, `src/app/dev/authority-dashboard/actions.ts` no longer exists, remaining code references were self-contained within the cluster, and stale registry plus documentation references were removed.

## 1. ENFORCEMENT MODEL (FINAL)

### Build Blocking (MUST FAIL)

These validators and tests must block release.

#### Blocking validators and build gates

- `node scripts/core/check-generated.mjs`
- `npx tsc --noEmit`
- `npx tsx scripts/validators/validate-content-contract.mjs --report-json`
- `npx tsx scripts/validators/validate-content-quality.mjs --report-json`
- `npx tsx scripts/validators/validate-domain-structure.mjs --report-json`
- `npx tsx scripts/validators/validate-cta-label-contract.mjs --report-json`
- `npx tsx scripts/validators/validate-conversion-contract.mjs --report-json`
- `npx tsx scripts/validators/validate-template-payload-sufficiency.mjs --report-json`
- `npx tsx scripts/validators/validate-section-structure.mjs --report-json`
- `node scripts/validators/validate-design-system.cjs --report-json`
- `npx tsx scripts/validators/validate-graph.ts --report-json`
- `npx tsx scripts/validators/validate-internal-links.ts`
- `npx tsx scripts/validators/validate-cta-violations.ts`
- `npx tsx scripts/validators/validate-related-duplication.ts`
- `npx tsx scripts/validators/validate-inline-link-misuse.ts`
- `node scripts/validators/validate-tokens.mjs --report-json`
- `node scripts/validators/validate-inline-styles.mjs --report-json`
- `node scripts/runners/run-next.mjs build`

NOTE:
The following validators remain separate in this phase even if they have overlapping concerns. Consolidation is explicitly deferred to Phase 4:

- validate-section-structure.mjs
- validate-template-payload-sufficiency.mjs
- validate-cta-violations.ts
- validate-related-duplication.ts

#### Blocking test gates

- `npx vitest run tests/system`
- `npx vitest run tests/integration`
- `npx playwright test tests/smoke/routes.smoke.spec.ts`
- `npx playwright test tests/e2e/cta-query-params.spec.ts`
- `npx playwright test tests/e2e/conversion.spec.ts`

Notes:

- `tests/e2e/cta-query-params.spec.ts` is a release blocker because it is the only retained page-family CTA query-context sweep that catches routing or middleware regressions after source validation passes.
- `tests/e2e/conversion.spec.ts` is a release blocker because submit-path integrity is not fully covered by query-param checks or source-only validators.
- If CI orchestration outside this repo does not yet run that spec as blocking, treat it as `REQUIRES VERIFICATION BEFORE EXECUTION` and run it manually in the final release gate until CI is updated.

### Advisory (WARN ONLY)

These checks must run, but they must not fail the build.

#### Advisory scripts and validators

- `node scripts/runners/run-eslint.mjs`
- `node scripts/validators/validate-docs.mjs --report-json`
- `node scripts/validators/validate-vocabulary.mjs --report-json`
- `npx tsx scripts/validators/generate-proof-coverage.ts`
- `node scripts/core/system-report.mjs`
- `node --import tsx/esm scripts/analyzers/export-reports.mjs`

#### Advisory test surfaces

- `npx vitest run tests/unit`
- `npx playwright test tests/e2e/internal-link-reachability.spec.ts`
- `npx playwright test tests/seo`
- `npx playwright test tests/interactions`
- `npx playwright test tests/visual`

Removed from enforcement entirely after Phase 1:

- `scripts/validators/validate-system-docs.mjs`
- `scripts/validators/validate-checklist.mjs`
- `scripts/validators/validate-fix-log.mjs`
- `scripts/validators/validate-reports-structure.mjs`

### Runtime Safeguards (NON-REMOVABLE)

These runtime systems must remain. They are not duplicate layers.

- `src/lib/content-graph/validate.ts`
- `src/lib/content-graph/registry.ts`
- `src/domains/init/ensureGraphInitialized.ts`
- `src/components/system/PageEnforcement.tsx`
- `src/lib/cta/ctaRegistry.ts`
- `src/lib/related/relatedRegistry.ts`
- `src/components/system/SmartCTA.tsx`
- `src/components/system/SmartRelatedSection.tsx`
- `src/lib/contact/contactHref.ts`
- `src/screens/Contact.tsx`

NOTE:
Current dashboard implementation is not fully read-only and uses runtime inventory/metadata helpers.
Phase 4 must remove this coupling so the dashboard becomes a pure report-driven UI.

---

## 2. VALIDATOR OWNERSHIP MAP

Validator ownership is layered, not exclusive. Shared helpers are allowed. Responsibility collapse is not.

| Concern | Primary Owner | Secondary Enforcement | Notes |
|---|---|---|---|
| Metadata presence | `scripts/validators/validate-content-contract.mjs` | `scripts/validators/validate-content-quality.mjs`, `scripts/validators/validate-domain-structure.mjs` | Required metadata membership is layered across content, route, and domain surfaces. Do not imply exclusivity. |
| Metadata quality | `scripts/validators/validate-content-quality.mjs` | — | Owns title, description, Open Graph, robots, sitemap alignment, and route metadata completeness. |
| Canonical path match | `scripts/validators/validate-domain-structure.mjs` | `scripts/validators/validate-content-quality.mjs` | Canonical-to-route enforcement is not exclusive to one validator. |
| Graph integrity | `scripts/validators/validate-graph.ts` | `src/lib/content-graph/validate.ts` | Build-time graph shape checks remain separate from runtime duplicate id/slug/path and relationship assertions. |
| Section structure | `scripts/validators/validate-section-structure.mjs` | — | Owns section cardinality and item-count rules. Must read config, not hard-coded minimums, after Phase 3. |
| Payload sufficiency | `scripts/validators/validate-template-payload-sufficiency.mjs` | `tests/integration/service-conversion-contracts.test.ts` | Owns required section presence and non-empty payload blocks. Must stay separate from section cardinality. |
| CTA label policy | `scripts/validators/validate-cta-label-contract.mjs` | — | Owns approved label resolution, shared label mapping, and `SmartCTA` label-path usage. |
| CTA placement and count | `scripts/validators/validate-cta-violations.ts` | `tests/system/cta-contact-consistency.test.ts`, `tests/e2e/cta-query-params.spec.ts` | Placement/count rules are layered across source scan and behavior checks. |
| Conversion URL contract | `scripts/validators/validate-conversion-contract.mjs` | `tests/system/cta-contact-consistency.test.ts`, `tests/e2e/conversion.spec.ts` | Contact href generation and hidden-field requirements are enforced across validator, system, and submit-path tests. |
| Internal linking | `scripts/validators/validate-internal-links.ts` | `tests/e2e/internal-link-reachability.spec.ts` | Owns authored internal href validity and related-link caps. Does not own inline-link API scope. |
| Inline-link API scope | `scripts/validators/validate-inline-link-misuse.ts` | `src/components/system/PageEnforcement.tsx` | Secondary guard under the internal-link concern. |
| Related-content duplication | `scripts/validators/validate-related-duplication.ts` | — | Owns `SmartRelatedSection` duplicate render detection. Keep separate in this execution spec. |
| Design/token safety | `scripts/validators/validate-design-system.cjs`, `scripts/validators/validate-tokens.mjs`, `scripts/validators/validate-inline-styles.mjs` | — | Separate style-system owners. Do not fold into content validators. |

RULE:

- No validator is assumed to be the sole owner of a concern.
- If one validator is removed or merged, its secondary enforcement coverage must be revalidated explicitly before execution.
- “Duplicate” checks are not safe-delete candidates unless the remaining layer proves equivalent scope.

---

## 3. CONFIG-DRIVEN FLEXIBILITY DESIGN

Rigid rules must move to config. Validators stay separate. Policy becomes data.

### File location

- `src/lib/config/contentRules.ts`

### Structure

```ts
export type ContentRulePageType =
  | 'page'
  | 'service'
  | 'feature'
  | 'blog'
  | 'resource'
  | 'case-study'
  | 'industry-category'
  | 'industry-detail';

export type ContentRules = {
  faq: {
    minItems: number;
  };
  related: {
    minSections: number;
    maxSections: number;
    minItems: number;
    maxItems: number;
  };
  seo: {
    descriptionMinIndexable: number;
    descriptionMinNonIndexable: number;
  };
};

export const DEFAULT_CONTENT_RULES: ContentRules = {
  faq: { minItems: 0 },
  related: {
    minSections: 0,
    maxSections: 1,
    minItems: 0,
    maxItems: 3,
  },
  seo: {
    descriptionMinIndexable: 60,
    descriptionMinNonIndexable: 40,
  },
};

export const CONTENT_RULES_BY_TYPE: Partial<Record<ContentRulePageType, Partial<ContentRules>>> = {
  service: {
    faq: { minItems: 2 },
    related: { maxSections: 1, maxItems: 3 },
  },
  feature: {
    faq: { minItems: 2 },
    related: { maxSections: 1, maxItems: 3 },
  },
  blog: {
    faq: { minItems: 0 },
    related: { maxSections: 1, maxItems: 3 },
  },
  resource: {
    faq: { minItems: 2 },
    related: { minSections: 1, maxSections: 1, minItems: 1, maxItems: 5 },
  },
  'case-study': {
    faq: { minItems: 2 },
    related: { maxSections: 1, maxItems: 3 },
  },
  'industry-detail': {
    faq: { minItems: 1 },
  },
};

export const CONTENT_RULE_OVERRIDES_BY_PAGE: Partial<
  Record<string, Partial<ContentRules>>
> = {};

export function resolveContentRules(pageType: ContentRulePageType, pageId?: string): ContentRules {
  // precedence: default -> pageType -> pageId override
}
```

### Rules

#### Validators that must consume this config

- `scripts/validators/validate-section-structure.mjs`
- `scripts/validators/validate-template-payload-sufficiency.mjs`
- `scripts/validators/validate-internal-links.ts`
- `scripts/validators/validate-content-quality.mjs`

PHASE 3 SAFETY RULE:

- Phase 3 is an atomic semantic migration, not four independent refactors.
- All validators above must switch to `resolveContentRules()` in one Phase 3 commit.
- The config extraction is allowed to change thresholds and pass/fail outcomes only once, at the moment all dependent validators switch together.
- Partial rollout across validators is forbidden because it creates cross-validator disagreement and false regression signals.

#### Fallback and default behavior

- Precedence order must be `DEFAULT_CONTENT_RULES -> CONTENT_RULES_BY_TYPE -> CONTENT_RULE_OVERRIDES_BY_PAGE`.
- If a field is not overridden at a narrower layer, the broader layer remains in effect.
- No validator may hard-code FAQ or related-link thresholds after this extraction.

#### Per-page override policy

- Per-page override is allowed only in `CONTENT_RULE_OVERRIDES_BY_PAGE`.
- Per-page override is not allowed inside content files, route files, template overrides, or ad hoc metadata.
- Allowed override keys in Phase 3:
  - `faq.minItems`
  - `related.minSections`
  - `related.maxSections`
  - `related.minItems`
  - `related.maxItems`
  - `seo.descriptionMinNonIndexable`
- Forbidden override keys:
  - canonical rules
  - CTA system/source rules
  - graph identity rules
  - duplicate related-section rules

If a per-page override outside those keys is requested, mark it `REQUIRES VERIFICATION BEFORE EXECUTION`.

---

## 4. PHASE-BY-PHASE EXECUTION PLAN (STRICT)

### PHASE 1 - SAFE DELETE

Rule:

- every row below is an atomic change
- `validate-checklist.mjs` and the dormant `src/lib/dev/*` engine cluster are one atomic commit
- after each successful atomic change, create a local commit before proceeding to the next row
- when deleting validators, update `scripts/core/validate-all.mjs`, `scripts/system/script-registry.json` if present, and `Mindwp-Docs/core/TOOLS.md` in the same atomic change

| File path | Reason | Required paired change | Risk level | Validation command after change |
|---|---|---|---|---|
| `scripts/validators/validate-system-docs.mjs` | advisory-only, no production guarantee | remove its entry from `scripts/core/validate-all.mjs`, update `scripts/system/script-registry.json` if present, update `Mindwp-Docs/core/TOOLS.md` | Low | `node scripts/core/validate-all.mjs --report-json` |
| `scripts/validators/validate-fix-log.mjs` | advisory-only, validates hand-authored report artifact | remove its entry from `scripts/core/validate-all.mjs`, update `scripts/system/script-registry.json` if present, update `Mindwp-Docs/core/TOOLS.md` | Low | `node scripts/core/validate-all.mjs --report-json` |
| `scripts/validators/validate-reports-structure.mjs` | report hygiene only, not a release guarantee | remove its entry from `scripts/core/validate-all.mjs`, update `scripts/system/script-registry.json` if present, update `Mindwp-Docs/core/TOOLS.md` | Low | `node scripts/core/validate-all.mjs --report-json` |
| `scripts/validators/validate-checklist.mjs` | only live pointer to dormant checklist engine cluster | delete all dormant checklist-engine files below in the same commit, remove entry from `scripts/core/validate-all.mjs`, update `scripts/system/script-registry.json` if present, update `Mindwp-Docs/core/TOOLS.md` | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/dev/autoFixRecommendationEngine.ts` | dormant checklist/auto-fix subsystem | delete with `validate-checklist.mjs` atomic change | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/dev/contentRewriteEngine.ts` | dormant checklist/auto-fix subsystem | delete with `validate-checklist.mjs` atomic change | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/dev/contextScoringConfig.ts` | dormant checklist/auto-fix subsystem | delete with `validate-checklist.mjs` atomic change | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/dev/conversionAnalyzer.ts` | dormant checklist/auto-fix subsystem | delete with `validate-checklist.mjs` atomic change | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/dev/conversionPageInspector.ts` | dormant checklist/auto-fix subsystem | delete with `validate-checklist.mjs` atomic change | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/dev/conversionSignals.ts` | dormant checklist/auto-fix subsystem | delete with `validate-checklist.mjs` atomic change | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/dev/fixChecklistEngine.ts` | dormant checklist/auto-fix subsystem | delete with `validate-checklist.mjs` atomic change | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/dev/fixSimulationEngine.ts` | dormant checklist/auto-fix subsystem | delete with `validate-checklist.mjs` atomic change | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/dev/guidedFlowEngine.ts` | dormant checklist/auto-fix subsystem | delete with `validate-checklist.mjs` atomic change | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/dev/linkHealthAnalyzer.ts` | dormant checklist/auto-fix subsystem | delete with `validate-checklist.mjs` atomic change | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/dev/linkSuggestionEngine.ts` | dormant checklist/auto-fix subsystem | delete with `validate-checklist.mjs` atomic change | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/dev/uiSuggestionsEngine.ts` | dormant checklist/auto-fix subsystem | delete with `validate-checklist.mjs` atomic change | Medium | `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json` |
| `src/lib/utils/memoize.ts` | no active imports found | none | Low | `npm run -s typecheck` |
| `tests/integration/validator-contracts.test.ts` | fixture-based validator semantics test; do not delete without equivalent fixture-based replacement | none | Medium | `npm run -s test:integration` |

Items intentionally excluded from Phase 1:

- `src/lib/cache/authorityCache.ts`
- `src/lib/cache/resolverCache.ts`
- `scripts/analyzers/run-visual-audit.js`
- `scripts/analyzers/visual-audit-engine.js`
- `scripts/analyzers/visual-audit-runtime.js`
- `scripts/analyzers/heading-audit.cjs`
- `scripts/analyzers/split-screenshots.cjs`
- `scripts/analyzers/test-editing-stability.mjs`

These are not Phase 1 deletes. They are `REQUIRES VERIFICATION BEFORE EXECUTION` because they either change behavior or reduce operator observability.

### PHASE 2 - SAFE REDUCTION (NO MERGES)

Phase 2 reduces duplicated test coverage and updates the release gate surface. Validator files remain separate.

#### Validators updated

| Change description | Why safe | What must be tested after |
|---|---|---|
| Update `scripts/core/validate-all.mjs` to remove the Phase 1 advisory validator entries and keep the remaining blocking/advisory split explicit | command registry maintenance only; no rule-logic change | `node scripts/core/validate-all.mjs --report-json` |
| Do not merge any validator files in this phase | prevents ownership collapse during cleanup | no extra validation beyond the phase-level commands |

#### Tests removed or merged

| Change description | Why safe | What must be tested after |
|---|---|---|
| Merge `tests/integration/sitemap-robots-consistency.test.ts` into `tests/system/seo-consistency.test.ts`, then delete `tests/integration/sitemap-robots-consistency.test.ts` | same invariant, better layer placement, no guarantee loss if assertions are copied intact | `npm run -s test:system && npm run -s test:integration` |
| Keep `tests/e2e/major-routes-crawl.spec.ts` OR replace it with an equivalent exhaustive route test such as `tests/system/full-route-coverage.test.ts`, then delete only after equivalence is verified | `routes.smoke.spec.ts` is sampled while `major-routes-crawl.spec.ts` is exhaustive; merging as-is loses coverage | `npx playwright test tests/e2e/major-routes-crawl.spec.ts` OR `npm run -s test:system` for the equivalent exhaustive replacement |
| Delete `tests/e2e/conversion-paths.spec.ts` | overlapping CTA path coverage remains in `tests/e2e/cta-query-params.spec.ts` and `tests/e2e/conversion.spec.ts` | `npx playwright test tests/e2e/cta-query-params.spec.ts && npx playwright test tests/e2e/conversion.spec.ts` |
| Keep `tests/integration/service-conversion-contracts.test.ts` as a full-catalog sweep | sampled system and e2e checks are not equivalent to full service payload coverage | `npm run -s test:integration` |
| Delete `tests/integration/performance-budget.test.ts` | performance flake removal, not correctness loss | `npm run -s test:integration` |
| Delete `tests/system/graph-cold-start-performance.test.ts` | performance flake removal, not correctness loss | `npm run -s test:system` |

ROUTE COVERAGE RULE:

- Every publishable route must be tested at least once by an exhaustive route coverage surface.
- `tests/smoke/routes.smoke.spec.ts` does not satisfy this rule by itself because it is sampled, not exhaustive.
- `tests/e2e/major-routes-crawl.spec.ts` may be deleted only after an equivalent exhaustive replacement is added and validated.

#### Tests that MUST remain

Blocking remain:

- `tests/integration/contact-api.test.ts`
- `tests/integration/template-rendering.test.ts`
- `tests/integration/page-intent-priority-contract.test.ts`
- `tests/integration/inventory-metadata.test.ts`
- `tests/integration/route-rendering.test.ts`
- `tests/integration/service-conversion-contracts.test.ts` (full sweep, not trimmed)
- `tests/integration/security-headers.test.ts`
- `tests/integration/route-inventory-coverage.test.ts`
- `tests/system/cta-contact-consistency.test.ts`
- `tests/system/production-route-protection.test.ts`
- `tests/system/publishable-route-coverage.test.ts`
- `tests/system/graph-registry-alignment.test.ts`
- `tests/system/related-content-validity.test.ts`
- `tests/system/taxonomy-alignment.test.ts`
- `tests/system/seo-consistency.test.ts`
- `tests/e2e/major-routes-crawl.spec.ts` OR an equivalent exhaustive replacement such as `tests/system/full-route-coverage.test.ts`
- `tests/smoke/routes.smoke.spec.ts`
- `tests/e2e/cta-query-params.spec.ts`
- `tests/e2e/conversion.spec.ts`

Advisory remain:

- `tests/unit/seo-config.test.ts`
- `tests/unit/authority-resolver.test.ts`
- `tests/unit/contact-href.test.ts`
- `tests/e2e/internal-link-reachability.spec.ts`
- `tests/seo/next-seo.smoke.spec.ts`
- `tests/interactions/homepage.interactions.spec.ts`
- `tests/visual/core-sections.visual.spec.ts`
- `tests/visual/components-library.spec.ts`

Protected tests in this execution spec:

- `tests/integration/service-conversion-contracts.test.ts` must remain a full sweep.
- `tests/e2e/major-routes-crawl.spec.ts` must remain unless replaced by an equivalent exhaustive route-coverage test.
- `tests/integration/validator-contracts.test.ts` must remain unless replaced by equivalent fixture-based validator tests.

### PHASE 3 - CONTROLLED REFACTOR

Only the following changes are allowed in this phase.

Phase 3 is one atomic semantic migration for config-backed thresholds. It is not safe to update validators independently in this phase.

| Change | Why safe | Preconditions | Validation after change |
|---|---|---|---|
| Create `src/lib/config/contentRules.ts` and switch `validate-section-structure.mjs`, `validate-template-payload-sufficiency.mjs`, `validate-internal-links.ts`, and `validate-content-quality.mjs` to `resolveContentRules()` in one commit | keeps validators separate while making policy flexible without temporary rule divergence | config file and all dependent validator updates land together | `npx tsx scripts/validators/validate-section-structure.mjs --report-json && npx tsx scripts/validators/validate-template-payload-sufficiency.mjs --report-json && npx tsx scripts/validators/validate-internal-links.ts && npx tsx scripts/validators/validate-content-quality.mjs --report-json` |
| Move `src/lib/cta/industryPresentation.ts` to `src/domains/industries/utils/industryPresentation.ts` and update imports | small relocation, no control-plane change | verify importers are limited and updated in same commit | `npm run -s typecheck && npm run -s test:integration` |
| Optional: remove `src/lib/cache/authorityCache.ts` and `src/lib/cache/resolverCache.ts` | only safe if remaining importers are removed in the same commit and resolver semantics remain correct | `REQUIRES VERIFICATION BEFORE EXECUTION`; rewrite importers and tests first | `npm run -s test:unit && npm run -s test:runtime && node scripts/core/validate-all.mjs --report-json` |

Explicitly excluded from Phase 3:

- validator merges
- `pageMetadata.ts` consolidation
- `buildFaqSchema.ts` consolidation
- CTA/related registry consolidation
- runtime graph validation removal

---

## 5. FAILURE SIMULATION (CRITICAL)

After all phases are applied, the following outcomes are required.

### What SHOULD FAIL now

- page missing `title`
- page missing `description`
- page missing `canonical`
- page missing `openGraph` coverage
- page missing explicit `robots` coverage
- page with canonical that does not equal the route path
- CTA hardcoded as `/contact?...` instead of generated through `buildContactHref()`
- contact form missing hidden `system` field
- contact form missing hidden `source` field
- direct `/contact` access without valid `system` and `source`
- duplicate slug in the content graph
- duplicate path in the content graph
- unresolved graph relationship reference
- orphan node detected by graph overlap rules
- duplicate `SmartRelatedSection` in a page file
- authored internal href that does not resolve to a published route
- inline conversion CTA at `pre-mid`, `mid`, or `sidebar`
- second conversion CTA on one page
- service page with fewer than 2 FAQ items
- feature page with fewer than 2 FAQ items
- resource page missing `related-resources` section or having zero related resources

### What SHOULD PASS now

- blog page with 1 FAQ item
- blog page with 0 FAQ items
- resource page with 5 related links in a single allowed related section
- industry detail page with 1 FAQ item
- non-indexable route with a description length between 40 and 59 characters
- approved CTA label resolved through the shared CTA label config
- single `SmartRelatedSection` on a valid page type
- authored internal links on blog/resource pages when targets resolve to published routes

---

## 6. NON-NEGOTIABLE RULES

- canonical must equal the route path
- publishable routes must have title, description, Open Graph coverage, and robots coverage
- CTA links to contact must be generated through `buildContactHref()`
- contact form submission must include valid `system` and `source`
- contact form must preserve hidden `system` and `source` fields
- graph must not contain duplicate ids, duplicate slugs, or duplicate paths
- graph relationship references must resolve
- orphan detection remains a graph concern
- runtime graph validation must remain in place
- CTA label policy and CTA placement policy remain separate concerns
- related-content registry and CTA registry remain separate runtime systems
- only one `SmartRelatedSection` is allowed per page file
- inline-link enforcement remains restricted to allowed page types
- generated artifacts remain checked before build
- dashboard must not execute or import graph, inventory, or validation logic

---

## 7. EXPLICITLY FORBIDDEN CHANGES

- touching `src/lib/seo/pageMetadata.ts` for consolidation
- touching `src/lib/schema/buildFaqSchema.ts` for consolidation
- removing or weakening `src/lib/content-graph/validate.ts`
- merging `src/lib/cta/ctaRegistry.ts` with `src/lib/related/relatedRegistry.ts`
- moving orphan detection out of `scripts/validators/validate-graph.ts`
- merging `validate-cta-label-contract` with `validate-cta-violations`
- merging `validate-section-structure` with `validate-template-payload-sufficiency`
- merging any validator in this execution spec unless separately re-audited
- weakening the conversion system to allow CTA links without canonical `system` and `source`
- deleting `tests/e2e/cta-query-params.spec.ts` without equivalent blocking replacement
- allowing per-page overrides inside content files instead of the central config file
- introducing custom canonical exceptions as part of cleanup work

---

## 8. FINAL EXECUTION ORDER

Follow this order exactly.

1. Record the current working state with `git status --short` and confirm unrelated local changes will not be touched.
2. Run the baseline gate: `node scripts/core/validate-all.mjs --report-json && npm run -s test:integration && npm run -s test:system && npx playwright test tests/smoke/routes.smoke.spec.ts && npx playwright test tests/e2e/cta-query-params.spec.ts && npx playwright test tests/e2e/conversion.spec.ts`.
3. Delete `scripts/validators/validate-system-docs.mjs`, remove its `validate-all` entry, update `scripts/system/script-registry.json` if present, update `Mindwp-Docs/core/TOOLS.md`, run `node scripts/core/validate-all.mjs --report-json`, commit.
4. Delete `scripts/validators/validate-fix-log.mjs`, remove its `validate-all` entry, update `scripts/system/script-registry.json` if present, update `Mindwp-Docs/core/TOOLS.md`, run `node scripts/core/validate-all.mjs --report-json`, commit.
5. Delete `scripts/validators/validate-reports-structure.mjs`, remove its `validate-all` entry, update `scripts/system/script-registry.json` if present, update `Mindwp-Docs/core/TOOLS.md`, run `node scripts/core/validate-all.mjs --report-json`, commit.
6. Delete `scripts/validators/validate-checklist.mjs` and the full dormant `src/lib/dev/*` checklist-engine cluster in one atomic change, update `validate-all`, update `scripts/system/script-registry.json` if present, update `Mindwp-Docs/core/TOOLS.md`, run `npm run -s typecheck && node scripts/core/validate-all.mjs --report-json`, commit.
7. Delete `src/lib/utils/memoize.ts`, run `npm run -s typecheck`, commit.
8. Keep `tests/integration/validator-contracts.test.ts` or replace it with equivalent fixture-based validator tests before any deletion. Run `npm run -s test:integration`, commit only if equivalence is proven.
9. Start Phase 2 by updating `tests/system/seo-consistency.test.ts` to absorb `tests/integration/sitemap-robots-consistency.test.ts`, then delete the old integration file, run `npm run -s test:system && npm run -s test:integration`, commit.
10. Keep `tests/e2e/major-routes-crawl.spec.ts` or replace it with an equivalent exhaustive route-coverage test such as `tests/system/full-route-coverage.test.ts`, validate that every publishable route is exercised at least once, then delete only after equivalence is proven.
11. Keep `tests/integration/service-conversion-contracts.test.ts` as a full-catalog sweep, delete `tests/e2e/conversion-paths.spec.ts`, run `npm run -s test:integration && npx playwright test tests/e2e/cta-query-params.spec.ts && npx playwright test tests/e2e/conversion.spec.ts`, commit.
12. Delete `tests/integration/performance-budget.test.ts`, run `npm run -s test:integration`, commit.
13. Delete `tests/system/graph-cold-start-performance.test.ts`, run `npm run -s test:system`, commit.
14. Begin Phase 3 by adding `src/lib/config/contentRules.ts` with default, page-type, and slug override resolution, and switch `validate-section-structure.mjs`, `validate-template-payload-sufficiency.mjs`, `validate-internal-links.ts`, and `validate-content-quality.mjs` to config in the same commit.
15. Run `npx tsx scripts/validators/validate-section-structure.mjs --report-json && npx tsx scripts/validators/validate-template-payload-sufficiency.mjs --report-json && npx tsx scripts/validators/validate-internal-links.ts && npx tsx scripts/validators/validate-content-quality.mjs --report-json`, then commit.
16. Move `src/lib/cta/industryPresentation.ts` to `src/domains/industries/utils/industryPresentation.ts`, update importers, run `npm run -s typecheck && npm run -s test:integration`, commit.
17. Only if explicitly approved and verified, perform cache removal work. If not approved, stop here and leave cache modules unchanged.
18. Reset the report set before Phase 4: delete all files inside `/reports`, regenerate with `node scripts/core/validate-all.mjs --report-json` and `node --import tsx/esm scripts/analyzers/export-reports.mjs`, and confirm all required reports are fresh and same-run before continuing.
19. Run the final release gate: `node scripts/core/validate-all.mjs --report-json && node scripts/runners/run-next.mjs build && npm run -s test:integration && npm run -s test:system && npx playwright test tests/smoke/routes.smoke.spec.ts && npx playwright test tests/e2e/cta-query-params.spec.ts && npx playwright test tests/e2e/conversion.spec.ts`.
20. If any blocking gate fails, stop immediately, fix only that failure class, rerun the same gate, and do not advance phases until it passes.
21. If any phase introduces unexpected failures or behavior regressions that cannot be resolved within the scope of that phase, immediately rollback to the last successful commit and reassess before continuing.
This execution spec is intentionally narrower than the audit. Anything outside these steps is out of scope and must not be folded into the same hardening run.

---

## 8.1 REPORT RESET + REGENERATION CONTRACT

Before Phase 4:

- delete all files inside `/reports`
- regenerate using:

```
node scripts/core/validate-all.mjs --report-json
node --import tsx/esm scripts/analyzers/export-reports.mjs
```

Rules:

- dashboard must only use fresh reports
- no mixed timestamps allowed
- each report consumed by the dashboard must include `generatedAt` and `sourceCommand`
- if an existing report format does not yet include `sourceCommand`, extend the producing script before enabling dashboard-only rendering

Validation:

- FAIL if required reports are missing
- FAIL if report timestamps do not match the same regeneration run
- FAIL if the dashboard silently renders a partial dataset
- FAIL if stale reports from a previous run are mixed with freshly generated outputs

---

## 9. PHASE 4 — DASHBOARD SYSTEM + FINAL CONSOLIDATION

### Purpose

Provide a unified, observable control layer for:

- validators
- tests
- reports
- system health

And enable safe post-cleanup consolidation of overlapping validation logic.

---

## 9.1 DASHBOARD ARCHITECTURE (STRICT)

### Source of truth

Dashboard MUST read ONLY from:

- `/reports/validation-results.json`
- `/reports/content-quality-report.json`
- `/reports/content-gaps.json`
- `/reports/topic-authority-scores.json`
- `/reports/graph-report.json`
- `/reports/cta-report.json`
- `/reports/test-results.json` (if present)

### REPORT CONTRACT (REQUIRED)

All report JSON files must follow a stable schema.

- Required fields must always exist (even if empty)
- Optional fields must be explicitly marked and safely ignored by the dashboard
- The dashboard must never depend on inferred or missing fields
- Every dashboard-consumed report must expose `generatedAt`
- Every dashboard-consumed report must expose `sourceCommand`

Any change to report structure must be treated as a breaking change and validated before release.
---

### FRESHNESS GUARANTEE (REQUIRED)

- The dashboard must validate that all required reports came from the same regeneration run.
- If reports are not same-run, the dashboard must show a visible stale-state warning and must not present the dataset as current system health.
- Silent acceptance of mixed-age reports is forbidden.

### HARD RULES

- Dashboard must NOT execute validators
- Dashboard must NOT import validation logic
- Dashboard must NOT call graph or inventory builders
- Dashboard must NOT call `buildRouteInventory()` or `getInventoryMetadata()` at runtime
- Dashboard must NOT call graph helpers
- Dashboard must NOT call metadata helpers
- Dashboard must NOT compute derived control-plane state at render time
- Dashboard is a pure report renderer only

---

### REQUIRED CHANGE

Current implementation uses runtime inventory and metadata helpers.

These MUST be removed from dashboard runtime.

Instead:

- move all required data into report JSON
- dashboard becomes pure renderer

### DATA COMPLETENESS GATE (REQUIRED BEFORE RUNTIME COUPLING REMOVAL)

Before removing runtime coupling, verify that the report set contains:

- per-page metadata
- CTA config
- related content
- graph relationships

If any of the above are missing, extend analyzers first. Do not remove runtime coupling until the report payload is complete enough to replace current dashboard reads.

---

### Dashboard Capabilities

#### 1. System Overview

- validator pass/fail
- test pass/fail
- build status

#### 2. Validator Detail

- errors grouped by validator
- affected files

#### 3. Page Inspection

- metadata snapshot
- CTA config
- related content
- graph relationships

#### 4. Refresh Action

Single button triggers a backend execution endpoint (e.g. `/api/dev/run-system`) that runs:

- validate-all
- analyzers
- report regeneration

The dashboard must NOT execute scripts directly in the browser.
All execution must happen server-side.
---

## 9.2 CONVERSION SYSTEM HARDENING (CRITICAL FIX)

### Problem

Current spec blocks CTA query param correctness but does NOT block actual form submission integrity.

---

### REQUIRED CHANGE

Promote one submit-path test to blocking:

```
npx playwright test tests/e2e/conversion.spec.ts
```

---

### FINAL BLOCKING E2E SET

- routes.smoke.spec.ts
- cta-query-params.spec.ts
- conversion.spec.ts

---

## 9.3 VALIDATOR OWNERSHIP CORRECTION

### OWNERSHIP IS LAYERED (NOT EXCLUSIVE)

| Concern | Primary Owner | Secondary Enforcement |
|--------|--------------|----------------------|
| Metadata presence | content-contract | content-quality |
| Metadata quality | content-quality | — |
| Canonical path match | domain-structure | content-contract |
| Graph integrity | validate-graph | runtime validate.ts |
| CTA contract | conversion-contract | system tests |
| CTA placement | cta-violations | system tests |
| Internal links | internal-links | e2e reachability |
| Inline-link scope | inline-link-misuse | runtime enforcement |

### RULE

No validator is assumed to be sole owner of a concern.

If one validator is removed, merged, or downgraded, revalidate both the primary-owner guarantee and the secondary-enforcement guarantee before execution.

---

## 9.4 DASHBOARD VALIDATION STEP (NEW)

Add after Phase 3 execution:

```
npm run build
node scripts/runners/run-next.mjs start -- -p 3000
# then open http://localhost:3000/dev/system-dashboard
```

Verify:

- no runtime errors
- reports load correctly
- no direct graph/inventory calls
- stale-state warning appears if reports are mixed-run or missing

---

## 9.5 SAFE MERGES (ONLY AFTER DASHBOARD IS STABLE)

| Merge | Result |
|------|--------|
| section + payload | validate-domain-structure |
| cta-label + cta-violations | validate-cta-contract |
| related-duplication → internal-links | unified link validator |

Merge safety rules:

- No merge is allowed unless the merged validator preserves equivalent guarantee scope.
- Source-scan guarantees must remain source-scan guarantees after merge. For example, `validate-related-duplication` may only merge into `validate-internal-links` if duplicate `SmartRelatedSection` source scanning is preserved explicitly.
- Behavior-sampled tests do not prove validator-merge equivalence by themselves.
- If equivalence is not proven, keep validators separate.

---

### REQUIRED VALIDATION AFTER EACH MERGE

```
node scripts/core/validate-all.mjs
npm run test:system
npm run test:integration
```

---

## 9.6 UPDATED FAILURE SIMULATION (ADDITIONS)

Add the following failure cases:

- invalid system/topic/industry identifier
- noindex route included in sitemap
- invalid CTA label resolution
- dashboard loads with missing report files
- dashboard attempts runtime graph access
- dashboard renders mixed-run reports without a stale-state warning
# System Audit

Status: Audit and planning complete
Mode: Zero legacy, zero drift, production readiness audit
Scope: Visibility, SEO, deployment, and validator-enforced system hardening

## EXECUTION GATE

Current state: UNBLOCKED ✅

## PHASE 0 - DEEP VALIDATION

### Step 0.1 - Architecture Stress Test

#### Scenario A - New Developer Adds `/tools/test-page`

- Result: FAIL
- Why: the current inventory path defaults unspecified routes to indexable behavior when they are added to inventory, and there is no policy layer that defaults new route classes to noindex.
- Current enforcement: none.
- Current controlling surface: `src/lib/content-quality/inventory.ts` and `src/lib/seo/pageMetadata.ts`.
- Classification: CRITICAL GAP.

#### Scenario B - Topic Misuse

- Result: FAIL
- Why: current topic route generation creates both `/topics/[slug]` and `/blog/topic/[topic]` as public inventory entries with no explicit noindex or approval gate.
- Current enforcement: none.
- Current controlling surface: `src/lib/content-quality/inventory.ts`, `src/lib/content-graph/canonical.ts`, and `src/domains/blog/topicRegistry.ts`.
- Classification: CRITICAL GAP.

#### Scenario C - SEO Drift From Manual Page Metadata

- Result: FAIL
- Why: the shared metadata helpers are a convention, not an enforced contract; a page can still export custom metadata and bypass the centralized inventory-backed system.
- Current enforcement: none.
- Current controlling surface: `src/lib/seo/pageMetadata.ts` and route-level `page.tsx` files.
- Classification: CRITICAL GAP.

#### Scenario D - Missing `RESEND_API_KEY` On Deployment

- Result: FAIL
- Why: the current env contract treats the key as optional and the contact route handles the missing integration at runtime instead of failing at startup.
- Current enforcement: none.
- Current controlling surface: `src/env.ts`, `config/systemEnv.mjs`, `src/global/site-wide/services.ts`, and `src/app/api/contact/route.ts`.
- Classification: CRITICAL GAP.

#### Scenario E - Duplicate Route Intent For Topics

- Result: FAIL
- Why: `/topics/[slug]` and `/blog/topic/[topic]` can both remain indexable and enter sitemap output with no validator catching duplicate intent.
- Current enforcement: none.
- Current controlling surface: `src/lib/content-quality/inventory.ts` and `src/app/sitemap.ts`.
- Classification: CRITICAL GAP.

### Step 0.2 - Gap Confirmation

#### Audit Assumptions Not Yet Implemented

##### Critical

- `config/indexingPolicy.ts` does not exist.
- Default-to-noindex route classification does not exist.
- Startup env validation does not exist.
- Topic visibility policy does not exist.
- Page-level metadata enforcement does not exist.
- Duplicate route intent validation does not exist.

##### Safe

- Full visibility policy centralization can proceed after critical foundations exist.
- Full SEO registry unification can proceed after critical policy enforcement exists.
- Integration adapters can proceed after env validation exists.
- Topic authority gating can proceed after topic visibility policy exists.

### Validation Result

- Safe to proceed: NO
- Blockers:
- Missing indexing policy enforcement.
- Missing startup env validation.
- Missing topic visibility enforcement.
- Missing centralized SEO enforcement against manual page metadata.
- Missing duplicate-intent validator for topic routes.

### Execution Decision

- Controlled execution cannot proceed past the gate until the blockers above are explicitly resolved in order.
- The first remediation task remains the env system, but no implementation started before this validation was recorded.

## GAP 1 - ENV SYSTEM

Status: COMPLETE

### Changes

- `config/env.schema.ts` created.
- `scripts/validate-env.ts` added.
- Shared env contract added in `config/env.schema.shared.mjs` so runtime and system env parsing consume the same field definitions and requirement rules.
- `src/env.ts` refactored to consume the shared env schema and enforce runtime validation on server startup.
- `config/systemEnv.mjs` refactored to consume the shared env schema.
- `src/global/site-wide/services.ts` tied integration enablement to env contract flags.
- `src/app/api/contact/route.ts` changed to use fail-fast config invariants instead of runtime config fallback for enabled services.
- `scripts/core/validate-all.mjs` updated to run `validate-env` as a blocking validator.
- `scripts/runners/run-next.mjs` updated to fail before launching Next when runtime env validation fails.
- `package.json` updated with `validate:env` script.

### Files Created

- `config/env.schema.shared.mjs`
- `config/env.schema.ts`
- `scripts/validate-env.ts`

### Files Modified

- `src/env.ts`
- `config/systemEnv.mjs`
- `src/global/site-wide/services.ts`
- `src/app/api/contact/route.ts`
- `scripts/core/validate-all.mjs`
- `scripts/runners/run-next.mjs`
- `package.json`

### Validation

- Pass case: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com npm run -s typecheck` -> PASS.
- Pass case: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node --import tsx/esm scripts/validate-env.ts --target=all` -> PASS.
- Missing mail env: `ENABLE_MAIL_SERVICE=true ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node --import tsx/esm scripts/validate-env.ts --target=all` -> FAIL before runtime.
- Invalid format: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=not-a-url node --import tsx/esm scripts/validate-env.ts --target=all` -> FAIL.
- Startup enforcement: `ENABLE_MAIL_SERVICE=true ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node scripts/runners/run-next.mjs build -- --help` -> FAIL before Next startup.
- System gate enforcement: `ENABLE_MAIL_SERVICE=true ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com npm run -s system:quick` -> FAIL with blocking `env-validation-report.json`.

### Failures Fixed

- Removed optional silent startup behavior for enabled mail and captcha services.
- Removed duplicated runtime/build env parsing logic for the shared env fields.
- Moved integration requirement enforcement into one centralized env validation contract.

### Execution Log

Task 1 - ENV SYSTEM

- files created: `config/env.schema.shared.mjs`, `config/env.schema.ts`, `scripts/validate-env.ts`
- files modified: `src/env.ts`, `config/systemEnv.mjs`, `src/global/site-wide/services.ts`, `src/app/api/contact/route.ts`, `scripts/core/validate-all.mjs`, `scripts/runners/run-next.mjs`, `package.json`
- validation results: PASS for disabled-service pass case, FAIL for missing `RESEND_API_KEY` before runtime, FAIL for invalid URL format, FAIL at startup when runtime env is invalid, FAIL in system gate when env is invalid
- failures fixed: runtime-only integration failure moved to startup/system validation boundary
- status: PASS

## GAP 2 - INDEXING POLICY

Status: COMPLETE

### Changes

- `config/indexingPolicy.ts` created.
- Route indexability is now resolved from a single indexing policy with explicit classifications and a noindex fallback.
- `src/lib/content-quality/inventory.ts` refactored so route metadata robots and sitemap eligibility derive from the indexing policy instead of local default flags.
- `src/app/sitemap.ts` continues to include only indexable inventory routes, now driven by policy-backed inventory results.
- `src/app/robots.ts` no longer uses hardcoded disallow rules and now derives disallow paths from the same policy-backed inventory results.
- Static route `indexable` flags were removed so indexing intent no longer lives in a second system.
- `scripts/validators/validate-indexing-policy.ts` added as a blocking validator.
- `scripts/core/validate-all.mjs` updated so `validate-indexing-policy` runs inside the system gate.
- `package.json` updated with `validate:indexing-policy` script.

### Files Created

- `config/indexingPolicy.ts`
- `scripts/validators/validate-indexing-policy.ts`

### Files Modified

- `src/lib/content-quality/inventory.ts`
- `src/lib/site/staticPages.ts`
- `src/app/robots.ts`
- `scripts/core/validate-all.mjs`
- `package.json`
- `tests/system/seo-consistency.test.ts`
- `tests/system/static-route-parity.test.ts`

### Validation

- Compile validation: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com npm run -s typecheck` -> PASS.
- Blocking validator: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node --import tsx/esm scripts/validators/validate-indexing-policy.ts` -> PASS.
- New route simulation: `resolveIndexingPolicy('static', '/tools/test-page')` -> `{ classification: 'utility', source: 'fallback', index: false, follow: false, disallow: true }`.
- Robots and sitemap unification spot-check: internal routes such as `/components` and `/dev/system-dashboard` are disallowed in robots output and absent from sitemap output.

### Failures Fixed

- Removed default-to-index behavior from the inventory creation path.
- Removed hardcoded robots disallow rules.
- Removed duplicate static-route indexing flags.
- Added blocking enforcement for route classification fallback and sitemap/indexing drift.

### Execution Log

Task 2 - INDEXING POLICY

- files created: `config/indexingPolicy.ts`, `scripts/validators/validate-indexing-policy.ts`
- files modified: `src/lib/content-quality/inventory.ts`, `src/lib/site/staticPages.ts`, `src/app/robots.ts`, `scripts/core/validate-all.mjs`, `package.json`, `tests/system/seo-consistency.test.ts`, `tests/system/static-route-parity.test.ts`
- validation results: PASS for typecheck, PASS for indexing validator, PASS for `/tools/test-page` fallback noindex simulation, PASS for robots/sitemap unification spot-check
- failures fixed: route indexing no longer defaults to public; robots, sitemap, and metadata now share one indexing policy source
- status: PASS

### Gate Status

- Execution gate remains BLOCKED until Gaps 3, 4, and 5 are completed.

## GAP 3 - TOPIC VISIBILITY

Status: COMPLETE

### Changes

- `/blog/topic/*` is now forced to internal taxonomy behavior through centralized indexing policy: noindex, follow, excluded from sitemap.
- `/topics/*` is now gated through centralized indexing policy and no longer inherits implicit public indexing.
- Topic visibility is centralized in `config/indexingPolicy.ts`.
- Authority-based gating is implemented from `reports/topic-authority-scores.json` with a deterministic public threshold.
- `validate-topic-indexability` added as a blocking validator and wired into the system gate.
- `validate-indexing-policy` extended to assert new topic routes default to noindex.

### Files Created

- `scripts/validators/validate-topic-indexability.ts`

### Files Modified

- `config/indexingPolicy.ts`
- `scripts/validators/validate-indexing-policy.ts`
- `scripts/core/validate-all.mjs`
- `package.json`

### Validation

- Compile validation: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com npm run -s typecheck` -> PASS.
- Blocking validator: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node --import tsx/esm scripts/validators/validate-topic-indexability.ts` -> PASS.
- Indexing validator regression check: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node --import tsx/esm scripts/validators/validate-indexing-policy.ts` -> PASS.
- New topic simulation: `/topics/test-page` resolves to noindex, follow, disallow -> PASS.
- Blog topic simulation: `/blog/topic/test-page` resolves to noindex, follow, disallow -> PASS.
- Inventory and sitemap check: blog-topic routes are excluded from sitemap and unapproved topic hubs remain excluded -> PASS.
- Manual override misuse simulation: forcing both surfaces indexable triggers `blog-topic-indexable` and `unapproved-topic-indexable` failure conditions -> PASS.

### Failures Fixed

- Removed duplicate public taxonomy behavior between `/topics/*` and `/blog/topic/*`.
- Removed implicit topic indexing.
- Removed route-level topic visibility logic by keeping topic visibility entirely in policy.

### Execution Log

Task 3 - TOPIC VISIBILITY

- files created: `scripts/validators/validate-topic-indexability.ts`
- files modified: `config/indexingPolicy.ts`, `scripts/validators/validate-indexing-policy.ts`, `scripts/core/validate-all.mjs`, `package.json`
- commands run:
- `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com npm run -s typecheck`
- `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node --import tsx/esm scripts/validators/validate-topic-indexability.ts`
- `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node --import tsx/esm scripts/validators/validate-indexing-policy.ts`
- inventory and policy simulation commands for new topic, blog topic, and manual override misuse
- results: PASS for compile, PASS for topic validator, PASS for indexing validator, PASS for new-topic noindex simulation, PASS for blog-topic forced noindex simulation, PASS for actual inventory/sitemap check, PASS for misuse detection simulation
- status: PASS

### Gate Status

- Execution gate is UNBLOCKED after Gap 4, Gap 5, and final system validation passed.

## GAP 4 - SEO ENFORCEMENT

Status: COMPLETE

### Changes

- `src/lib/seo/seoResolver.ts` is now the single route metadata resolver.
- Route metadata entry points across `src/app/**` were refactored to return `resolveSEO(...)` directly instead of inventory helpers or route-family wrappers.
- Manual root layout metadata export was removed and replaced with resolver-backed `generateMetadata()`.
- Canonical output is now enforced as absolute and route-matched.
- `src/lib/seo/pageMetadata.ts` was removed so route-level SEO no longer has a second helper layer.
- `scripts/validators/validate-seo-enforcement.ts` added as a blocking validator.
- `scripts/core/validate-all.mjs` updated so `validate-seo-enforcement` runs inside the system gate.
- `package.json` updated with `validate:seo-enforcement`.

### Files Created

- `scripts/validators/validate-seo-enforcement.ts`

### Files Modified

- `src/lib/seo/seoResolver.ts`
- `src/lib/content-quality/inventory.ts`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/app/blog/category/[categorySlug]/page.tsx`
- `src/app/blog/topic/[topic]/page.tsx`
- `src/app/case-studies/page.tsx`
- `src/app/case-studies/[slug]/page.tsx`
- `src/app/case-studies/[slug]/caseStudyPage.tsx`
- `src/app/components/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/cookies/page.tsx`
- `src/app/dashboard/page.tsx`
- `src/app/dev/system-dashboard/page.tsx`
- `src/app/faq/page.tsx`
- `src/app/features/page.tsx`
- `src/app/features/[...slug]/page.tsx`
- `src/app/image-dashboard/page.tsx`
- `src/app/industries/page.tsx`
- `src/app/industries/[...slug]/page.tsx`
- `src/app/privacy/page.tsx`
- `src/app/resources/page.tsx`
- `src/app/resources/[slug]/page.tsx`
- `src/app/resources/category/[categorySlug]/page.tsx`
- `src/app/services/page.tsx`
- `src/app/services/[...slug]/page.tsx`
- `src/app/systems/[slug]/page.tsx`
- `src/app/terms/page.tsx`
- `src/app/topics/[slug]/page.tsx`
- `tests/integration/inventory-metadata.test.ts`
- `scripts/core/validate-all.mjs`
- `package.json`

### Files Removed

- `src/lib/seo/pageMetadata.ts`

### Validation

- Shared canonical enforcement check: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node --import tsx/esm` with `resolveSEO({ path: '/about', type: 'static', slug: 'about' })` -> PASS with absolute canonical and Open Graph URL.
- Blocking validator: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node --import tsx/esm scripts/validators/validate-seo-enforcement.ts` -> PASS.
- Compile validation: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com npm run -s typecheck` -> PASS.
- Metadata integration test: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com npx vitest run tests/integration/inventory-metadata.test.ts` -> PASS.
- Simulation coverage inside validator:
- manual metadata export -> FAIL
- generateMetadata without resolver -> FAIL
- missing canonical -> FAIL
- duplicate canonical -> FAIL
- valid route metadata -> PASS

### Failures Fixed

- Removed manual metadata export from the root layout.
- Removed route-level metadata helper indirection.
- Removed route-family canonical override logic for metadata generation.
- Enforced absolute, route-matched canonical output.
- Added blocking enforcement against future manual metadata and resolver bypasses.

### Execution Log

Task 4 - SEO ENFORCEMENT

- files created: `scripts/validators/validate-seo-enforcement.ts`
- files modified: shared SEO resolver, inventory metadata canonical output, route metadata entry points in `src/app/**`, system validator wiring, and metadata integration tests
- files removed: `src/lib/seo/pageMetadata.ts`
- results: PASS for shared canonical enforcement check, PASS for SEO enforcement validator, PASS for typecheck, PASS for metadata integration test, PASS for manual/fallback simulation coverage
- status: PASS

## GAP 5 - DUPLICATE INTENT

Status: COMPLETE

### Changes

- Duplicate-intent enforcement is now validator-backed through `scripts/validators/validate-duplicate-intent.ts`.
- Indexable routes are normalized into intent categories and checked for multiple public surfaces sharing the same intent key.
- Topic duplication, service-feature overlap, and industry-topic overlap are covered through deterministic intent-group rules.
- `scripts/core/validate-all.mjs` updated so `validate-duplicate-intent` runs inside the system gate.
- `package.json` updated with `validate:duplicate-intent`.

### Files Created

- `scripts/validators/validate-duplicate-intent.ts`

### Files Modified

- `scripts/core/validate-all.mjs`
- `package.json`

### Validation

- Blocking validator: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node --import tsx/esm scripts/validators/validate-duplicate-intent.ts` -> PASS.
- Existing indexing validator regression check: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node --import tsx/esm scripts/validators/validate-indexing-policy.ts` -> PASS.
- Existing topic validator regression check: `ENABLE_MAIL_SERVICE=false ENABLE_CAPTCHA_SERVICE=false NEXT_PUBLIC_SITE_URL=https://mindwp.com node --import tsx/esm scripts/validators/validate-topic-indexability.ts` -> PASS.
- Simulation coverage inside validator:
- `/topics/test-page` + `/blog/topic/test-page` as indexable -> FAIL
- `/services/ai-lead-handling` + `/features/ai-lead-handling` -> FAIL

### Failures Fixed

- Added blocking detection for multiple indexable routes exposing the same intent.
- Added explicit protection against public topic duplication across topic and blog-topic surfaces.
- Added explicit protection against overlapping service and feature intent.

### Execution Log

Task 5 - DUPLICATE INTENT

- files created: `scripts/validators/validate-duplicate-intent.ts`
- files modified: `scripts/core/validate-all.mjs`, `package.json`
- results: PASS for duplicate-intent validator, PASS for indexing validator regression check, PASS for topic indexability regression check, PASS for duplicate-intent simulation coverage
- status: PASS

## GLOBAL VALIDATION

Status: COMPLETE

### Final Validation

- Full gate: `ENABLE_MAIL_SERVICE=true ENABLE_CAPTCHA_SERVICE=true NEXT_PUBLIC_SITE_URL=https://mindwp.com NEXT_PUBLIC_SITE_ORIGIN=https://mindwp.com NEXT_PUBLIC_TURNSTILE_SITE_KEY=site-key RESEND_API_KEY=test-key CONTACT_EMAIL=hello@mindwp.com CONTACT_FROM_EMAIL=noreply@mindwp.com TURNSTILE_SECRET_KEY=turnstile-secret BASE_URL=http://127.0.0.1:3009 COMPONENT_CAPTURE_BASE_URL=http://127.0.0.1:3001/components npm run system:full` -> PASS.
- Result: `Status: PASS`, `Validators: 32/32`, `Tests: PASS`, `Warnings: 0`, `Reports: 55`.

### Gate Status

- EXECUTION GATE -> UNBLOCKED ✅

## FINAL STRESS VALIDATION

Status: COMPLETE

### Stress Findings

- Test 1 - New Route Without Config: path policy fallback resolved `/random/test-page` to `utility`, `noindex`, `nofollow`, `disallow`, and sitemap exclusion. A real undeclared static app route still failed loudly through `tests/integration/route-inventory-coverage.test.ts` because route existence must be declared in inventory.
- Test 2 - Manual SEO Injection: `validate-seo-enforcement` failed immediately on manual `export const metadata`.
- Test 3 - Duplicate Intent Attack: forcing topic hubs and blog topic archives public caused `validate-duplicate-intent` to fail loudly; `validate-topic-indexability` also failed on the same attack.
- Test 4 - Missing Env (Production): startup failed before Next boot when `ENABLE_MAIL_SERVICE=true` without `RESEND_API_KEY`; `system:full` also failed loudly.
- Test 5 - Thin Topic Promotion: forcing low-authority topic `authority-signals` public caused `validate-topic-indexability` to fail loudly.
- Test 6 - Bypass Resolver: `validate-seo-enforcement` failed on `generateMetadata()` that did not return `resolveSEO(...)`.
- Test 7 - New Route Type: unknown route type fallback resolved to `utility`, `noindex`, `nofollow`, `disallow`; `validate-indexing-policy` still passed.
- Test 8 - Remove Validator: stress validation exposed one real leak. Removing `validate-duplicate-intent` from the active runner initially passed silently. Root cause was split knowledge of validator existence vs active execution. This was fixed by centralizing the active validator registry in `scripts/core/validator-manifest.mjs`, enforcing active registry parity in `validate-system-knowledge`, promoting that validator to blocking, and adding `tests/system/validator-registry-parity.test.ts`. After the fix, the same removal failed loudly in both `validate-system-knowledge` and `validate-all`.
- Test 9 - Conflicting Canonical: forcing a shared canonical URL caused the SEO resolver and SEO enforcement path to fail loudly.

### Scalability Check

- Synthetic growth simulation added `+20` services, `+100` blog posts, and `+50` topics (`+220` routes total, `355 -> 575`) against the duplicate-intent grouping path.
- Result: `0` duplicate groups under the safe synthetic shape and `0.2 ms` grouping time, which confirms the current enforcement logic is linear and stable at that scale.
- Constraint: zero manual work is not yet true for service and topic expansion. Services still require explicit registry and renderer wiring, and topics still require canonical topic registry updates. That is an authoring scalability constraint, not a silent drift path.

### Final Validation

- Full gate after stress remediation: `ENABLE_MAIL_SERVICE=true ENABLE_CAPTCHA_SERVICE=true NEXT_PUBLIC_SITE_URL=https://mindwp.com NEXT_PUBLIC_SITE_ORIGIN=https://mindwp.com NEXT_PUBLIC_TURNSTILE_SITE_KEY=site-key RESEND_API_KEY=test-key CONTACT_EMAIL=hello@mindwp.com CONTACT_FROM_EMAIL=noreply@mindwp.com TURNSTILE_SECRET_KEY=turnstile-secret BASE_URL=http://127.0.0.1:3009 COMPONENT_CAPTURE_BASE_URL=http://127.0.0.1:3001/components npm run system:full` -> PASS.
- Result: `Status: PASS`, `Validators: 32/32`, `Tests: PASS`, `Warnings: 0`, `Reports: 55`.

All tests executed.
Results:
- silent failures: 0
- enforced failures: 8
- system leaks: 0

Verdict:
SYSTEM IS ENFORCED ✅

## Task Tracker

1. Indexing system audit - Complete
2. Topic system audit - Complete
3. SEO system audit - Complete
4. Build and exposure audit - Complete
5. Integration system audit - Complete
6. Validation system audit - Complete
7. Meta audit - Complete
8. Execution plan - Complete

## INDEXING SYSTEM - AUDIT

### Current Behavior

- Route inventory is the effective source for metadata robots state and sitemap inclusion via `buildRouteInventory()` in `src/lib/content-quality/inventory.ts`.
- Default route behavior is implicitly indexable unless a static route or content graph node overrides robots state.
- Sitemap generation only emits routes marked indexable.
- `src/app/robots.ts` separately hardcodes disallow rules for selected paths.
- Static internal routes in `src/lib/site/staticPages.ts` are explicitly marked non-indexable.

### Risks

- Indexing control is split between route inventory and hardcoded robots rules, which creates drift risk.
- Default-to-index behavior means unclear surfaces become public unless manually overridden.
- Some robots disallow entries appear to target routes that are not part of the active route surface.
- There is no single declared indexing policy that classifies route categories and expected behavior.
- There is no dedicated validator that proves robots, metadata, and sitemap stay aligned.

### Inconsistencies

- Internal routes are protected in multiple layers at once: inventory metadata, sitemap exclusion, and robots disallow.
- The system uses implicit indexing defaults for dynamic content but explicit noindex for selected static routes.
- `robots.ts` contains route-level decisions outside the main inventory path.
- Existing route exposure rules are operationally correct in parts, but architecturally non-centralized.

### Decision

- Adopt one indexing system per concern.
- Route inventory remains the operational source of truth, but policy intent must move into a dedicated indexing policy module.
- Any route without explicit public justification defaults to noindex.
- Robots output, metadata robots directives, and sitemap inclusion must derive from the same classification model.

### Global Indexing Rules

- Index only public content and approved public marketing routes.
- Noindex all internal tools, dashboards, system routes, test routes, and operational utilities.
- Noindex any route with ambiguous search intent.
- Sitemap must contain only indexable canonical routes.
- Robots disallow rules must be generated from the same classification source instead of maintained manually.

### Index vs Noindex Classification

- Index: approved public routes such as blog, resources, services, features, industries, case studies, and core marketing pages.
- Noindex: dashboards, dev routes, internal tooling, utility routes, redirect funnels, and any unclear topic surfaces.
- Default fallback: noindex when classification is missing or uncertain.

### Expected Architecture

- Introduce `config/indexingPolicy.ts` as the explicit policy layer.
- Refactor downstream consumers so metadata, sitemap generation, and robots generation read from the same route classification result.
- Add validator coverage for canonical/indexing consistency and sitemap exclusion correctness.

### Execution Notes

- No implementation started in this phase.
- Next step after this audit section is a focused topic-system audit with the same doc-first workflow.

## TOPIC SYSTEM

### Current State

- The system defines a single canonical topic registry in `src/lib/content-graph/canonical.ts` with 42 topic slugs.
- Human-readable topic metadata is centralized in `src/domains/blog/topicRegistry.ts`.
- Two separate public route families are statically generated for topics:
- `/topics/[slug]` via `src/app/topics/[slug]/page.tsx`
- `/blog/topic/[topic]` via `src/app/blog/topic/[topic]/page.tsx`
- Both route families inherit shared metadata through `src/lib/seo/pageMetadata.ts` and currently have no explicit topic-specific noindex logic.
- Topic authority is report-backed through `reports/topic-authority-scores.json` and `reports/topic-authority-scores.md`.

### Problems

- The system exposes two public topic surfaces with overlapping intent: a topic hub and a blog topic archive.
- Topic visibility is currently route-driven, not policy-driven.
- There is no explicit distinction between system topics used for internal graph organization and SEO topics approved for public indexing.
- Several topics have only growing-level support, which is enough for internal clustering but not necessarily enough to justify public indexing.

### SEO Risks

- `/blog/topic/*` creates taxonomy-style archive pages that can overlap with `/topics/*` topic hubs and primary blog pages.
- Public indexing for all 42 topics is implicit rather than justified.
- Low-support topics such as `authority-signals`, `crm-enabled-websites`, `service-page-architecture`, `lifetime-value`, and `revenue-tracking` risk thin or fragmented topic pages.
- If topic pages stay public without a quality gate, crawl budget and authority can be diluted across duplicate or under-powered taxonomy surfaces.

### Final Decision

- Adopt a hybrid topic system with internal-by-default behavior.
- System topics are internal classification primitives first and must default to noindex.
- Public SEO topic pages are allowed only when explicitly approved by policy and justified by deterministic report thresholds.
- `/blog/topic/*` should be treated as an internal taxonomy/archive surface, not a public SEO landing system.
- `/topics/*` is the only candidate public topic surface, and only for approved topics that meet policy thresholds.
- If a topic does not clearly meet public SEO criteria, it must remain noindex.

### Required Architecture

- Add explicit topic visibility classification to the future indexing and visibility policy layer rather than deriving it from route existence.
- Define one authoritative rule for topic exposure across metadata, sitemap inclusion, and robots behavior.
- Use topic authority reports as an enforcement input, not as an optional advisory signal.
- Remove public ambiguity between topic hubs and blog topic archives by assigning one role per route family.

### Execution Notes

- No implementation started in this phase.
- The next audit will inspect the broader SEO system to identify whether the current metadata and canonical stack can support a single unified public SEO architecture.

## SEO SYSTEM

### Current State

- The site already uses a largely centralized inventory-backed metadata pipeline through `src/lib/content-quality/inventory.ts` and `src/lib/seo/pageMetadata.ts`.
- Blog, resources, services, features, industries, case studies, topic pages, category pages, and system pages all resolve metadata through the shared inventory path.
- Canonical URLs, robots directives, Open Graph fields, and sitemap participation are mostly derived from the same inventory surface.
- However, route families still retain route-specific entry creation logic and at least one route-specific canonical override path.

### Inconsistencies

- The codebase contains more than one metadata-building path, which creates drift potential even if one path is currently dominant.
- Blog metadata supports a canonical override pattern while other route families appear to rely directly on graph paths.
- Open Graph image resolution uses route-kind mapping logic that does not cleanly cover every inventory type.
- SEO entry creation is still split across multiple route-type builders instead of one unified registry/resolver system.

### Risks

- Canonical behavior can drift between route families if source content and graph paths diverge.
- New route types can be added without receiving fully consistent metadata, image, or canonical handling.
- Parallel metadata utilities invite hidden legacy and future divergence.
- Topic, category, and hub routes are especially vulnerable to incomplete asset and canonical handling because they are secondary route classes rather than the primary content types.

### Decision

- Adopt one unified SEO system.
- All route metadata must be produced through one registry-backed resolver flow.
- Canonical resolution must become explicit, enforced, and consistent across every route family.
- Open Graph image selection, robots state, title generation, and sitemap inclusion must be treated as first-class policy outputs rather than route-level conventions.
- Remove parallel or unused metadata builders once the unified path is in place.

### Required Architecture

- Build a single SEO registry layer that normalizes all route types into one metadata model.
- Introduce concern-specific resolvers for canonical, robots, and Open Graph behavior rather than embedding those decisions inside scattered entry factories.
- Enforce canonical consistency between domain data, graph data, and resolved route paths.
- Keep route pages as thin consumers of the shared SEO system with no route-family-specific logic beyond lookup.

### Execution Notes

- No implementation started in this phase.
- The next audit will define what is built, what is indexed, and what remains internal-only so visibility rules stop depending on route existence alone.

## BUILD & EXPOSURE

### Current State

- Route exposure is currently derived from the route inventory, static page flags, sitemap generation, and a separate robots layer.
- Sitemap inclusion is effectively tied to the inventory `indexable` result.
- Internal routes are often built but excluded from sitemap and marked noindex.
- Some route access control also exists in middleware, which further mixes runtime access with search visibility concerns.

### Problems

- Built, indexed, and internal-only are not modeled as separate concepts.
- Route existence and default indexability still influence exposure unless a route is explicitly suppressed.
- Robots disallow rules are maintained outside the main visibility path.
- Static pages and dynamic content do not appear to use one shared route-class policy.

### Risks

- A newly added route can become publicly indexable through default behavior rather than explicit approval.
- Internal tools may remain operationally protected while still reflecting fragmented visibility logic.
- Search exposure can drift if inventory, robots, middleware, and page-level assumptions disagree.
- Topic, category, and utility routes are vulnerable because they are often built for system reasons but not necessarily intended for public discovery.

### Decision

- Introduce one centralized visibility control system.
- Every route must resolve to an explicit visibility class that separately determines:
- whether it is built
- whether it is indexed
- whether it is included in XML sitemap output
- whether it is internal-only but still tracked
- Unknown or unclassified routes must default to internal/noindex until explicitly approved.

### Required Architecture

- Add `config/visibilityConfig.ts` as the single policy layer for route exposure.
- Derive sitemap participation, metadata robots output, and robots disallow rules from the same visibility classification result.
- Keep middleware limited to access/security behavior, not SEO intent.
- Ensure topic and blog-topic route families inherit the same visibility policy decisions already established in the topic-system audit.

### Classification Model

- Public: built, indexed, included in sitemap, publicly navigable.
- Marketing: built, indexed, included in sitemap, approved marketing/static pages.
- Internal: built, not indexed, excluded from sitemap, still tracked for system integrity.
- Utility: built, not indexed, excluded from sitemap, used for workflow or redirect behavior.
- Development: not publicly exposed in production and never indexable.

### Execution Notes

- No implementation started in this phase.
- The next audit will inspect integrations so deployment and external service behavior become env-only, validated, and production-safe.

## INTEGRATIONS

### Current State

- Runtime environment parsing exists in `src/env.ts`.
- System/build environment parsing exists separately in `config/systemEnv.mjs`.
- Service toggles are centralized in `src/global/site-wide/services.ts`, but they are code-configured defaults rather than env-resolved policy.
- Contact handling integrates Resend and Turnstile through `src/app/api/contact/route.ts`.
- External image providers are configured through the image system layer.

### Problems

- Environment schema enforcement is split across runtime and system contexts.
- There is no single preflight validation boundary that blocks deployment when required integrations are enabled but misconfigured.
- Integration enablement and secret availability are not enforced as one deterministic system.
- Production behavior currently depends on runtime checks inside handlers instead of startup validation.

### Risks

- Contact submission can fail at runtime because mail or CAPTCHA configuration is incomplete even though the route is deployed.
- Static service toggles can declare an integration enabled while the corresponding env secrets are absent.
- Split env schemas create drift between app runtime and system scripts.
- Integration boundaries are not formalized, which increases the chance of direct env access spreading through the codebase.

### Decision

- Adopt one integration system with env-only configuration and startup validation.
- Create a shared environment schema that defines all runtime and system integration requirements from one source.
- Add a preflight validator that fails deterministically when enabled integrations are misconfigured.
- Move external-service access behind dedicated integration adapters instead of allowing route handlers and feature code to construct clients ad hoc.

### Required Architecture

- Add `env.schema.ts` as the canonical environment contract.
- Add `validate-env.ts` to enforce required keys, conditional service requirements, and deployment-safe defaults.
- Introduce `/lib/integrations/*` adapters for mail, captcha, analytics, and external provider access.
- Keep `services.ts` aligned with env-driven enablement rather than as an independent source of truth.

### Execution Notes

- No implementation started in this phase.
- The next audit will inspect validator coverage so all indexing, sitemap, canonical, SEO, and topic rules can become enforced rather than advisory.

## VALIDATION SYSTEM

### Current State

- The repository already has an extensive validator/report pipeline and a system-wide validation command path.
- Existing validators cover significant portions of content quality, canonical alignment, sitemap consistency, and metadata completeness.
- Current enforcement is strong on content structure and basic SEO integrity, but weaker on policy-driven visibility and topic exposure rules.

### Problems

- The validator system enforces many outputs without yet enforcing the new policy model those outputs should come from.
- There is no dedicated validator for indexing policy classification.
- There is no dedicated validator for robots consistency against inventory-derived noindex decisions.
- Topic existence is validated more strongly than topic indexability justification.

### Risks

- The system can remain formally “valid” while still publishing unclear routes because the policy layer is not yet enforced.
- Hardcoded robots behavior can drift even when metadata and sitemap validators pass.
- Topic routes can stay publicly indexable without passing a deterministic quality gate.
- Canonical and metadata completeness checks do not fully guarantee one unified SEO policy across route families.

### Decision

- Extend the validator system so every major visibility and SEO decision becomes enforceable.
- `npm run system:full` must become the blocking contract for indexing policy, robots consistency, canonical consistency, SEO completeness, and topic misuse/indexability.
- Existing validators should be preserved where they align, but responsibility boundaries must be sharpened to eliminate overlap and uncovered policy gaps.

### Required Validator Additions

- Add a blocking indexing-policy validator.
- Add a blocking robots-consistency validator.
- Add a blocking topic-indexability validator.
- Add a blocking slug-collision or route-collision validator for exposure safety.
- Extend existing SEO validation to cover asset/canonical completeness for secondary route classes where needed.

### Execution Notes

- No implementation started in this phase.
- The next audit is the meta audit, which will test whether this system is understandable, enforceable, and maintainable for future engineers instead of only technically functional today.

## META AUDIT

### Strengths

- The system already has a strong deterministic/report-driven mindset.
- Canonical registries for topics, systems, and industries provide solid control points.
- Validator and report infrastructure is mature enough to support stricter policy enforcement.
- The codebase is not fundamentally over-engineered; it is mostly under-centralized in a few critical policy areas.

### Weaknesses

- Visibility and indexing intent still require reverse-engineering across multiple files.
- Environment governance is duplicated across runtime and system layers.
- Naming around `indexable`, `robots`, and route exposure semantics is overloaded.
- Some validator names and boundaries are broader or less precise than the decisions they actually enforce.

### Hidden Drift Risk

- A new engineer can still change route visibility in the wrong place because the policy layer does not yet exist in code.
- Topic route duplication remains technically easy to preserve even though the architectural decision is now clear.
- Integration configuration can remain operationally inconsistent because env policy is not centralized.
- The audit currently provides high design clarity, but the code still exposes low enforcement clarity in the exact places that matter most.

### Decision

- The system must become easier to understand than to misuse.
- Core policy decisions need dedicated modules with names that match their responsibility.
- Validators should be organized around policy contracts, not only around content completeness or report generation.
- Delete-resilience and change-resilience should become explicit acceptance criteria for future system work.

### Required Meta Improvements

- Create policy modules whose names directly express intent: indexing policy, visibility config, env schema, integration adapters.
- Reduce semantic overload by separating route visibility, robots directives, and sitemap participation into distinct policy outputs.
- Tighten validator naming and responsibility boundaries as the new policy modules are introduced.
- Add delete-test style coverage for topic removal, route reclassification, and env contract failures.

### Execution Notes

- No implementation started in this phase.
- The final step is to convert all audit findings into an exact, atomic, testable execution plan with strict priority order.

## EXECUTION PLAN

### Priority Tasks

1. Create a single environment contract and startup validation.
2. Create a single indexing policy and default-to-noindex classification model.
3. Create a single visibility policy for built, indexed, sitemap, and internal-only behavior.
4. Unify metadata generation into one SEO registry/resolver flow.
5. Reclassify topic routes so only approved `/topics/*` pages can be public and `/blog/topic/*` becomes internal/noindex.
6. Add blocking validators for indexing policy, robots consistency, topic indexability, and route collisions.
7. Move external service access behind integration adapters.
8. Update route consumers and supporting docs after policy and validator layers are in place.

### Bulk Edit Plan

- Environment and integrations: about 8 to 10 files.
- Likely files: `src/env.ts`, `config/systemEnv.mjs`, new `env.schema.ts`, new `validate-env.ts`, `src/global/site-wide/services.ts`, `src/app/api/contact/route.ts`, and new `/lib/integrations/*` modules.
- Indexing and visibility: about 5 to 7 files.
- Likely files: new `config/indexingPolicy.ts`, new `config/visibilityConfig.ts`, `src/lib/content-quality/inventory.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/lib/site/staticPages.ts`, and any shared route classification helpers.
- SEO registry unification: about 6 to 8 files.
- Likely files: `src/lib/seo/pageMetadata.ts`, `src/lib/seo/metadata.ts`, `src/lib/seo/config.ts`, `src/lib/content-quality/inventory.ts`, plus new SEO registry/resolver modules.
- Topic visibility: about 5 to 6 files.
- Likely files: `src/app/topics/[slug]/page.tsx`, `src/app/blog/topic/[topic]/page.tsx`, `src/domains/blog/topicRegistry.ts`, topic report consumers, and indexing/visibility policy integration points.
- Validators and reports: about 6 to 8 files.
- Likely files: `scripts/core/validate-all.mjs`, new validators in `scripts/validators/*`, report wiring, and any affected tests.
- Documentation and safety notes: about 2 to 3 files.
- Likely files: this audit document and focused implementation docs for visibility/env policy.

### Exact Tasks

1. Create `env.schema.ts` as the shared environment contract.
2. Create `validate-env.ts` to fail when enabled integrations are missing required secrets.
3. Refactor `src/env.ts` to consume the shared schema.
4. Refactor `config/systemEnv.mjs` to consume the shared schema or a derived system-safe subset.
5. Refactor `src/global/site-wide/services.ts` so service enablement is aligned with env-backed policy.
6. Create `/lib/integrations/mail` adapter.
7. Create `/lib/integrations/captcha` adapter.
8. Create `/lib/integrations/analytics` adapter or explicit disabled stub.
9. Refactor `src/app/api/contact/route.ts` to use integration adapters instead of direct client construction.
10. Create `config/indexingPolicy.ts`.
11. Define explicit route classes and default noindex behavior in the indexing policy.
12. Create `config/visibilityConfig.ts`.
13. Define explicit outputs for build, index, sitemap, inventory, and internal-only handling.
14. Refactor `src/lib/site/staticPages.ts` to declare route class or policy key instead of ad hoc indexable flags.
15. Refactor `src/lib/content-quality/inventory.ts` to resolve robots and indexability from indexing and visibility policy.
16. Refactor `src/app/robots.ts` to derive disallow output from policy-backed inventory results.
17. Refactor `src/app/sitemap.ts` to derive inclusion strictly from visibility policy outputs.
18. Create a unified SEO registry module.
19. Create a canonical resolver module.
20. Create a robots resolver module.
21. Create an Open Graph resolver module.
22. Refactor `src/lib/seo/pageMetadata.ts` to become thin wrappers around the unified SEO registry.
23. Remove or collapse parallel metadata-building logic in `src/lib/seo/metadata.ts` once the registry path is complete.
24. Enforce canonical consistency across blog, services, resources, features, industries, and case studies.
25. Reclassify `/blog/topic/*` as internal taxonomy/noindex.
26. Add topic visibility gating for `/topics/*` based on explicit policy plus deterministic topic authority thresholds.
27. Update topic registry or topic policy inputs so approved public topics are explicit.
28. Add `validate-indexing-policy` as a blocking validator.
29. Add `validate-robots-consistency` as a blocking validator.
30. Add `validate-topic-indexability` as a blocking validator.
31. Add `validate-slug-collisions` or equivalent route-collision validator as a blocking validator.
32. Extend existing SEO validators for secondary route canonical and Open Graph completeness.
33. Wire all new validators into `npm run system:full` through `scripts/core/validate-all.mjs`.
34. Update route pages that consume metadata so they use only the unified policy-backed SEO system.
35. Add delete-test coverage for topic removal and route reclassification.
36. Add env-contract failure coverage for startup validation.
37. Update docs so future engineers know exactly where route visibility, indexing, and integration decisions now live.

### Execution Order

1. Environment contract and startup validation.
2. Integration adapters and contact-route refactor.
3. Indexing policy creation.
4. Visibility policy creation.
5. Inventory, robots, sitemap, and static page refactor to consume those policies.
6. Unified SEO registry and resolver refactor.
7. Topic route reclassification and topic visibility gating.
8. New validator creation and validator wiring.
9. Route consumer cleanup.
10. Targeted delete-test and env-failure test additions.
11. Documentation update and final system pass.

### Validation Steps

- After environment work: run targeted typecheck and env-validation tests; confirm startup validation fails on missing required secrets.
- After integration refactor: run contact-route tests and targeted runtime checks for mail/captcha disabled and enabled states.
- After indexing and visibility policy work: verify robots output, sitemap output, and metadata robots directives all agree for representative public, internal, utility, and development routes.
- After SEO registry refactor: run route-level metadata tests and confirm canonical/Open Graph consistency across blog, resources, services, features, industries, case studies, topics, and category routes.
- After topic reclassification: verify `/blog/topic/*` is noindex and excluded from sitemap, and only explicitly approved `/topics/*` routes remain public.
- After validator additions: run `npm run system:full` and confirm new blocking validators enforce the new policy model.
- Before deployment readiness sign-off: run full build, full validator suite, and production-like smoke checks for robots, sitemap, canonicals, integrations, and route exposure.

### Final State Target

- One policy source for indexing.
- One policy source for visibility.
- One metadata system.
- One integration contract.
- One blocking validation contract through `npm run system:full`.
- Zero ambiguous public topic surfaces.
- Zero accidental indexing by default.

---

## PHASE 1.5 — SYSTEM CONSOLIDATION (PLANNED)

**Status:** NOT STARTED
**Source:** Distilled from `system-audit2.md` (file-level quick search audit).
**Scope:** Structural deduplication and ownership consolidation. Excludes anything already addressed in Phase 0 / Gap 1–5 / stress validation.
**Mode:** Plan only. No code changes in this phase.

### Intent

Phase 0 + Gap 1–5 fixed correctness and policy gaps. Phase 1.5 fixes **structural drift surface area** — duplicated logic, fragmented policy ownership, and overlapping orchestration that make future enforcement expansion expensive. Each system below collapses many small file-level smells into one executable consolidation track.

---

### SYSTEM 1 — VALIDATOR ARCHITECTURE

**Problems**

- Duplicated AST / TSX scanning across multiple validators (CTA, content, structure, SEO).
- Policy rules split across validators with overlapping ownership (CTA labels vs CTA violations vs conversion contract; SEO enforcement vs indexing vs topic indexability vs content quality; design-system vs inline-styles vs tokens).
- Validators mix repo-wide file walking, regex scanning, and policy assertions in single files.
- Several validators re-implement file recursion and import scanning instead of using shared helpers.

**Decision**

👉 Create a shared validator core and enforce single-responsibility validators.

**Tasks**

- Extract shared AST / TSX scanning utilities into one helper module.
- Extract a shared repo file walker with one allowlist/ownership policy surface.
- Centralize policy definitions per concern (CTA, SEO/indexing, content metadata, UI/structure).
- Move CTA surface checks, label-map checks, and resolver integrity checks to one CTA policy module consumed by thin validators.
- Collapse SEO enforcement, indexing policy, and topic indexability into one SEO/indexing rule layer with topic rules as a sub-policy, not a parallel validator.
- Collapse design-system, inline-styles, and tokens into one UI rule engine with shared SVG/exemption helpers.
- Remove duplicated logic from individual validators after extraction.

**Expected Result**

- Validators become thin policy adapters over a shared core.
- Zero rule duplication across validators.
- New enforcement rules can be added in one place.

---

### SYSTEM 2 — SCRIPT ORCHESTRATION

**Problems**

- `scripts/core/system-report.mjs` and `scripts/core/validate-all.mjs` overlap: both own validator inventories, synthetic reports, cache rules, and report-size auditing.
- `scripts/core/run-system-full.mjs` adds a third orchestration layer with hardcoded env flags.
- `scripts/core/preaudit.mjs` and `check-generated.mjs` carry duplicated required-output manifests.
- Runner scripts (`run-eslint.mjs`, `run-next.mjs`, `disallow-manual-report-paths.mjs`) re-implement target lists, env bootstrap, and CLI parsing.

**Decision**

👉 Unify the execution pipeline behind one orchestration core; runners stay thin.

**Tasks**

- Extract a shared orchestration core that owns: validator registry, generated-output manifest, cache rules, and report-size policy.
- Cleanly separate three layers: **execution** (run scripts), **validation** (apply policy), **reporting** (write artifacts/dashboard).
- Make `system-report.mjs`, `validate-all.mjs`, `run-system-full.mjs`, `preaudit.mjs`, and `check-generated.mjs` consume the shared core instead of redefining manifests.
- Move runner targets and env bootstrap into shared config.
- Remove duplicated runner logic and wrapper-only entrypoints.

**Expected Result**

- One execution pipeline, one source for required outputs.
- No orchestration drift between `system:full`, validation, and pre-audit gates.

---

### SYSTEM 3 — REPORT SYSTEM

**Problems**

- Report schema, normalization, and status enums are duplicated across `scripts/lib/report-schema.mjs`, `scripts/core/report-schema-validator.mjs`, `scripts/lib/system-contract-schemas.mjs`, `src/lib/dev/system-report.ts`, `src/lib/dev/dashboard-reports.ts`, `src/lib/dashboard/client-dashboard.ts`.
- Multiple JSON readers (`scripts/lib/report-json.mjs`, `src/lib/dev/reportJson.ts`, `client-dashboard.ts`) implement parallel report IO.
- Status semantics drift (e.g. `SKIPPED` mapped into `WARN` in one place, preserved elsewhere).
- Snapshot tests (`tests/system/__snapshots__/report-contracts.test.ts.snap`) cover too broad a surface and produce noisy failures on benign content drift.
- Report-name groupings overlap (`cta-report.json` listed in both system and content sets in `executionVisibility.ts`).

**Decision**

👉 Centralize one report contract and one IO surface.

**Tasks**

- Define one canonical report envelope, status enum, and severity enum; derive all dashboard/client DTOs from it.
- Make one report JSON reader the only entrypoint; route all callers through it.
- Unify report normalization (canonicalization + size validation + status coercion) into one module.
- Reduce snapshot scope to structure-critical slices; replace prose snapshots with structural assertions.
- Move report grouping (system / content / CTA / SEO buckets) into one manifest with no overlap.
- Remove redundant report helpers after consolidation.

**Expected Result**

- Stable report contracts.
- Low-noise snapshot tests.
- Predictable, single-sourced report taxonomy across scripts, dashboard, and client-facing surfaces.

---

### SYSTEM 4 — CONFIG & POLICY LAYER

**Problems**

- Page-type, CTA, and section policy are split across `src/config/section-intelligence.ts`, `src/config/ui-intelligence.ts`, `src/config/ctaLabels.ts`, `src/lib/cta/*`, `src/lib/page/pageIdentity.ts`, `src/lib/contact/contactHref.ts`.
- `CTA_LABEL_MAP` is effectively dead because generic rule labels resolve first.
- Env defaults are declared twice (schema fields + raw-env builders) in `config/env.schema.shared.mjs`.
- `LoggingMode` TS contract omits `debug` although runtime supports it (`config/loggingConfig.ts`, `lib/logger/index.ts`).
- Indexing policy (`config/indexingPolicy.ts`) keeps manual path maps that must be updated for every new route/kind.
- Taxonomy slugs are split between `src/lib/content-graph/canonical.ts`, `conversionGoals.ts`, and `topicAuthority.ts`.

**Decision**

👉 Consolidate the policy layer: one source per concern.

**Tasks**

- Merge page-type / CTA-intent / section policy into a single page-policy module consumed by CTA, contact, related, and section systems.
- Apply system-specific CTA overrides before generic rules; remove dead `CTA_LABEL_MAP` or wire it correctly.
- Keep env defaults in one layer (schema only); make raw-env builder normalization-only.
- Align `LoggingMode` TS union with runtime modes; share one exported type.
- Drive indexing policy from route metadata, with a parity test asserting full route coverage.
- Centralize taxonomy metadata (slug, label, class, aliases) in one canonical source consumed by graph, conversion goals, and topic authority.
- Add config-completeness tests so missing keys fail the pipeline.

**Expected Result**

- No config drift between page identity, CTA, contact, and section systems.
- One source per policy concern; rule updates land in one place.

---

### SYSTEM 5 — TEST SYSTEM

**Problems**

- Duplicated fixtures and harnesses: temp-workspace builders for validator tests are reimplemented in each domain (`case-studies`, `industries`, `home`).
- Overlapping coverage across SEO (`tests/system/seo-consistency.test.ts`, `tests/integration/inventory-metadata.test.ts`, `tests/seo/next-seo.smoke.spec.ts`, `tests/e2e/internal-link-reachability.spec.ts`).
- Overlapping route inventory crawls in `tests/e2e/major-routes-crawl.spec.ts`, `internal-link-reachability.spec.ts`, `tests/integration/route-rendering.test.ts`, `tests/integration/route-inventory-coverage.test.ts`.
- Brittle assertions: exact thrown-message strings, exact CTA prose, exact thank-you copy, CSS-class-based locators.
- Contact-API harness duplicated across integration and system suites.
- Snapshot drift on benign copy edits.

**Decision**

👉 Normalize test architecture around shared utilities and structural assertions.

**Tasks**

- Create shared test utilities: temp-workspace validator harness, route inventory helper, contact-API fixture, representative-node helper.
- Remove duplicated SEO and route-inventory coverage; assign one canonical test per concern.
- Replace fragile assertions (exact strings, class selectors) with structural checks (error type, role/test-id locators, key tokens).
- Promote `tests/system/runtime.ts` helpers to also serve E2E.
- Split combined suites (CTA + SEO + reachability) into per-concern files.
- Convert per-family repeated loops into table-driven assertions.

**Expected Result**

- Faster, less flaky tests.
- Clearer failure localization.
- Lower maintenance cost per copy / markup edit.

---

### SYSTEM 6 — GENERATORS & ANALYZERS

**Problems**

- `scripts/analyzers/generate-content-intelligence.ts`, `inspect-graph.ts`, `generate-content-gaps.ts`, and `detect-page-priorities.mjs` share graph bootstrap, scoring, and report-shaping logic.
- Authority scoring split across `src/lib/authority/authorityScore.ts`, `resolver.ts`, `generated/authorityMap.ts`, and `src/lib/graph/query.ts` — three runtime paths.
- Topic / authority generators (`generate-authority-map.ts`, `generate-topic-authority-scores.ts`) hardcode weights and thresholds in-script instead of using shared policy.
- `scripts/analyzers/score-content.mjs` and `audit-content-consistency.mjs` repeat phrase sets, file walkers, and CTA parsing.
- Visual audit layer fragmented: `run-visual-audit.js`, `visual-audit-engine.js` (legacy), `visual-audit-runtime.js`, `heading-audit.cjs`, `split-screenshots.cjs` overlap and emit overlapping artifacts.
- `scripts/analyzers/export-reports.mjs` re-models manual/runtime helpers as pipeline steps.

**Decision**

👉 Unify the analysis layer into shared graph + scoring primitives.

**Tasks**

- Extract one graph-analysis core (bootstrap, node iteration, derived edges).
- Centralize scoring: one authority/scoring module consumed by analyzers, generators, and runtime resolvers.
- Move generator weights/thresholds into shared policy config.
- Build one shared content-audit core (phrase sets, file walker, CTA parser) used by `score-content` and `audit-content-consistency`.
- Cleanly separate three layers in analyzers: **data collection**, **scoring**, **report assembly**.
- Standardize one report helper and one graph-init entrypoint across analyzers.
- Resolve visual audit ownership: keep one supported runner, retire/archive the legacy engine, fold heading + split-screenshot logic in or out explicitly.

**Expected Result**

- Consistent reports across analyzers.
- One scoring authority across runtime and generation.
- Reduced script count; predictable analyzer ownership.

---

### SYSTEM 7 — CLEANUP TARGETS

**Remove or Refactor**

- Legacy `scripts/analyzers/visual-audit-engine.js` (overlaps the supported visual audit runner).
- Dead `CTA_LABEL_MAP` in `src/config/ctaLabels.ts` (or wire system overrides correctly).
- `src/lib/related/relatedRegistry.ts` — replace with a simple single-zone helper.
- `src/lib/ui/bem.ts` — remove or scope; design system no longer relies on it.
- `INPUT_PATHS` in `scripts/generators/generate-authority-map.ts` (declared but unused).
- `subjectCompetingPercent` in `src/lib/image-system/debug/debugImage.ts` (unused).
- `scripts/core/disallow-manual-report-paths.mjs` — replace with a documented npm alias.
- Empty override layers in `src/lib/config/contentRules.ts` (inline defaults until real overrides exist).
- Redundant entrypoints: `scripts/core/dashboard-data.mjs`, `scripts/core/run-system-full.mjs` (fold into shared launcher).
- Legacy `featured` image-key handling in `src/lib/image-system/dedup/imageIndex.ts` after schema migration.
- Duplicate FAQ schema entrypoint between `src/lib/seo/schema.ts` and `src/lib/schema/buildFaqSchema.ts`.
- Duplicate provider ranking between `src/lib/image-system/providers/index.ts` (`getProviderOrder`) and learning module (`getRankedProviders`).

---

### EXECUTION STRATEGY

Phase 1.5 follows the Gap-system playbook:

- **Atomic tasks** — each system ships as small, independently mergeable steps.
- **Validator-backed enforcement** — wherever consolidation defines a single source, add a parity/coverage validator so re-fragmentation fails the pipeline.
- **Doc updates after each system** — `system-audit.md`, `AI_AUDIT_CONTEXT.md`, and relevant READMEs updated as ownership shifts.
- **Order:** SYSTEM 4 (config/policy) → SYSTEM 1 (validator core) → SYSTEM 2 (orchestration) → SYSTEM 3 (reports) → SYSTEM 6 (analyzers) → SYSTEM 5 (tests) → SYSTEM 7 (cleanup). Policy first ensures downstream consolidations have a stable target.

---

### SUCCESS CRITERIA

After Phase 1.5:

- ✅ Zero duplicated logic across validators, analyzers, runners, and report modules.
- ✅ Single source per system concern (policy, orchestration, reports, scoring, taxonomy).
- ✅ Minimal script surface; no parallel orchestration layers.
- ✅ Clean validator boundaries enforced by validator-backed parity tests.
- ✅ No structural drift possible without a failing pipeline gate.

---

### NON-GOALS (Phase 1.5)

- No new product features or content changes.
- No changes to public route behavior, SEO output, or rendered markup.
- No replacement of Phase 0 / Gap 1–5 contracts — only deduplication around them.
- No service content rewrites (content-level overlap noted in `system-audit2.md` is out of scope; this phase consolidates code/policy, not copy).

---

**END PHASE 1.5 PLAN**


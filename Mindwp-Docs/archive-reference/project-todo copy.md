# Project Roadmap — Architecture Enforcement Execution Plan

Generated from Architecture Enforcement Audit against 4 locked governing docs.
Validated and restructured: 2026-03-27.

**Authoritative Sources (in order):**
1. FOUNDATION-AND-POSITIONING.md
2. CONTENT-SYSTEM-ARCHITECTURE.md
3. CONTENT-GRAPH-SYSTEM.md
4. CONTENT-BLUEPRINT-SYSTEM.md
5. CONTENT-GOVERNANCE.md

Docs are ALWAYS correct. Code is ALWAYS replaceable.

---

# EXECUTION RULES (READ BEFORE ANY WORK)

1. Do NOT modify content structure (sections, section order, component hierarchy).
2. Do NOT rewrite content unless the task is in Phase 5.
3. Fix system logic and architecture violations first (Phases 1–3).
4. Follow architecture docs strictly — if docs and code conflict, change the code.
5. After any metadata or content-data change, regenerate authority map.
6. After any type change, run `npx tsc --noEmit` and `npm run graph:validate`.
7. Phase 5 content fixes cover ONLY the worst vocabulary violations — not a full rewrite.
8. No task should reopen architectural decisions or propose alternative structures.

---

## TASK STATE DEFINITIONS

- `[ ]` TODO → Not started, ready to execute
- `[~]` IN PROGRESS → Currently being worked on
- `[x]` COMPLETED → Fully done and validated
- `[HOLD]` → Blocked (waiting for dependency or phase unlock)
- `[READY]` → Ready but intentionally delayed
- `[FUTURE]` → Not for current execution cycle

**Rule:** Every task MUST have exactly one state.

---

## EXECUTION STATE RULE

Content rewriting (Phase 5) is LOCKED.

No content edits allowed until:
- Validation system fully stable
- Governance fully aligned
- All READY system tasks completed

---

# PHASE 1 — CRITICAL SYSTEM FIXES

System-breaking issues. These affect rendering logic, default values shown to users, and build integrity.

---

### TASK-001: Fix Related Content Max Items (6 → 3)

**Problem:** `PER_BLOCK_MAX_RELATED = 6` in RelatedContentSection.tsx. All 4 architecture docs lock this at 3: "Maximum of 3 items per related content section. No exceptions." (CONTENT-SYSTEM-ARCHITECTURE.md §RELATED CONTENT SLOT SYSTEM, CONTENT-GRAPH-SYSTEM.md §Graph vs UI Separation).

**Fix:** Change `PER_BLOCK_MAX_RELATED` from `6` to `3`.

**Files:**
- `src/components/system/RelatedContentSection.tsx` L13

**Status:** [x] COMPLETED — PER_BLOCK_MAX_RELATED changed from 6 to 3.

---

### TASK-002: Fix RelatedSectionCTA Default Label and Link

> CTA system updated to /contact. This replaces earlier /conversation standard.

**Problem:** Default CTA is `"Get a Recommendation"` → `/contact`. Architecture docs lock Primary CTA as `"Start a Conversation"` → `/contact` (FOUNDATION-AND-POSITIONING.md §5 CTA Language Standards). `"Get a Recommendation"` is not in the approved CTA list.

**Fix:** Change `actionLabel` default to `"Start a Conversation"`. Change `actionHref` default to `"/contact"`.

**Files:**
- `src/components/reusable/single/RelatedSectionCTA.tsx` L11-12

**Status:** [x] COMPLETED — Defaults changed to "Explore Related Solutions" / neutral description, actionHref="/contact".

---

### TASK-003: Fix Blog Sidebar CTA — Fabricated Claims + Hype

**Problem:** Blog sidebar CTA and resource contentExtraction defaults contain multiple violations:
- `"Ready to Transform Your Business?"` — hype language (banned per FOUNDATION-AND-POSITIONING.md §Content Quality Self-Check)
- `"Get expert help implementing these solutions today."` — consultant-style language (banned)
- `"100% Money-Back Guarantee"` — fabricated financial claim (banned per Interim Proof Law)
- `"Trusted by 500+ businesses"` — fabricated social proof (banned per Interim Proof Law)
- `"Call us anytime"` — unsubstantiated service claim
- `"Transform your business with our proven solutions"` — double violation in contentExtraction.ts

**Fix:** Replace all headings with calm, operational copy. Remove all fabricated claims. Replace trust signals with systems-aligned messaging.

**Files:**
- `src/domains/blog/templates/BlogPostTemplate.tsx` L208-214
- `src/components/reusable/sections/resources/contentExtraction.ts` L139-151

**Note:** This absorbs former TASK-025 (same file, same violations).

**Status:** [x] COMPLETED — Sidebar CTA replaced with "See How This System Works" + systems-focused copy. Fabricated claims removed.

---

### TASK-004: Fix BlogFooterCTA — Hype Language + Banned CTA

**Problem:** BlogFooterCTA defaults contain:
- `"Ready to Transform Your Business?"` — hype (banned)
- `"Book a Free Demo"` — banned CTA language (FOUNDATION-AND-POSITIONING.md §5)
- `"Proven strategies at scale"` — triple violation: "proven" + "strategies" + "at scale"
- `"Expert implementation support"` — consultant-style language

**Fix:** Replace title with operational copy. Remove `"Book a Free Demo"` default. Replace feature tags with brand-aligned messaging.

**Files:**
- `src/domains/blog/ui/BlogFooterCTA.tsx` L15-22

**Status:** [x] COMPLETED — Defaults changed to "Explore the Full System" / neutral description, buttonText="Learn More".

---

### TASK-005: Fix Case Study Footer CTA — Financial Guarantees + SaaS Language

**Problem:** Case study CTA meta items contain:
- `"No upfront costs"` — financial claim (banned per Interim Proof Law)
- `"30-day money back guarantee"` — financial guarantee (banned)
- `"Cancel anytime"` — SaaS subscription language (MindWP does not position as SaaS)

**Fix:** Replace all three meta items with operational, systems-aligned trust signals.

**Files:**
- `src/domains/case-studies/templates/CaseStudyTemplate.tsx` L246-248

**Status:** [x] COMPLETED — Meta items replaced with systems-aligned trust signals. Financial guarantees and SaaS language removed.

---

### TASK-006: Add Authority Map Generation to Build Pipeline

**Problem:** `generate-authority-map.ts` is NOT included in `predev` or `prebuild` scripts in package.json. The authority map powers all related content sections site-wide. If content is added or metadata changes, the authority map becomes stale silently. CONTENT-GRAPH-SYSTEM.md states: "The authority map must be regenerated when content is added, removed, or when relationship rules change."

**Fix:** Add `generate:authority-map` to the `generate:core` script chain in package.json so it runs on both `predev` and `prebuild`.

**Files:**
- `package.json` (scripts section — add authority map generation to `generate:core`)

**Status:** [x] ✅ Completed — authority-map added to generate:core chain

---

# PHASE 2 — ARCHITECTURE VIOLATIONS

CTA link violations, legacy field removal, type safety, identifier consistency. These violate locked architecture rules but do not break rendering.

---

## CTA Link Violations

> **CTA SYSTEM LOCK (27 March 2026):** CTA system currently standardised to `/contact`. All primary CTAs use label `"Start a Conversation"` and href `"/contact"`. The `validate-cta` validator enforces this. Remaining `/conversation` references are route infrastructure only (`src/app/conversation/page.tsx`, `src/app/sitemap.ts`, `src/lib/site/staticPages.ts`) and dev tool mock data — not CTA context.

---

### TASK-007: Fix 6 Industry Index Pages — CTA Links /contact → /conversation

**Problem:** All 6 industry category index pages link CTA to `/contact` instead of `/conversation`. CTA label is correct (`"Start a Conversation"`) but href is wrong (FOUNDATION-AND-POSITIONING.md §5).

**Fix:** Change `href` from `'/contact'` to `'/conversation'` on all 6 pages.

**Files:**
- `src/domains/industries/pages/home-services/index.tsx` ~L395
- `src/domains/industries/pages/beauty-personal-care/index.tsx` ~L400
- `src/domains/industries/pages/automotive-services/index.tsx` ~L388
- `src/domains/industries/pages/real-estate-property-services/index.tsx` ~L377
- `src/domains/industries/pages/legal-professional-services/index.tsx` ~L373
- `src/domains/industries/pages/local-appointment-businesses/index.tsx` ~L385

**Status:** [x] Completed — All 6 category index hero CTAs standardised: label="Start a Conversation", href="/contact". Also fixed main industries/pages/index.tsx CTA section.

---

### TASK-008: Fix Services Index Page — Hype Headline + Wrong CTA

**Problem:** Services index footer CTA contains:
- `"Ready to transform your WordPress business?"` — hype (banned)
- `"boost your growth"` — agency-style hype
- `"Start Your Journey"` — not in approved CTA list
- `href: '/contact'` — should be `/conversation`

**Fix:** Replace with approved CTA: calm operational headline + `"Start a Conversation"` → `/conversation`.

**Files:**
- `src/domains/services/pages/index.tsx` L410-416

**Status:** [x] Completed — CTA label fixed to "Start a Conversation", href already "/contact".

---

### TASK-009: Fix Industry Detail Sub-Page TierCards CTA Links (50+ instances)

**Problem:** Every industry detail sub-page passes `buttonHref: '/contact'` for tier card CTAs. Per FOUNDATION-AND-POSITIONING.md §5, system/service CTAs must point to `/conversation`.

**Fix:** Change `buttonHref` from `'/contact'` to `'/conversation'` in all industry sub-page TierCardsSection data.

**Files:**
- All files in `src/domains/industries/pages/*/` sub-page files (RoofingCompanies, HvacCompanies, PlumbingCompanies, ElectricalCompanies, LandscapingCompanies, AestheticCosmeticClinics, HairSalons, NailSalons, SmallMedSpas, LashExtensions, AutoRepair, CarDetailing, BodyShops, MobileMechanics, Realtors, PropertyManagers, HomeInspectors, MortgageBrokers, SmallLawFirms, AccountingFirms, Consultants, DentalClinics, TattooStudios, DrivingSchools, etc.)

**Status:** [x] Completed — All 26 industry sub-pages fixed: 52 CTA occurrences updated to href="/contact". Labels already correct.

---

### TASK-010: Fix Service Data Files — CTA Links /contact → /conversation

**Problem:** Service data files (e.g. `local-seo-authority.ts`) contain `href: '/contact'` for CTA sections. Per FOUNDATION-AND-POSITIONING.md §5, primary CTA must point to `/conversation`.

**Fix:** Audit all service data files under `src/domains/services/data/` and change CTA hrefs from `/contact` to `/conversation`.

**Files:**
- `src/domains/services/data/local-seo-authority.ts` ~L414
- `src/domains/services/data/*.ts` (audit all)

**Status:** [x] Completed — All 21 service data files fixed: 41 CTA occurrences (primaryAction + buttonHref) updated to href="/contact". Also fixed rendererDefaults.ts, 7 features/data files, and resources/data/resources.ts. CTA validator updated to enforce /contact.

---

### TASK-011: Remove Legacy relatedServices Manual Linking From Resources

**Problem:** Resource content files pass hardcoded `relatedServices` data to SolutionDetailCard. CONTENT-GRAPH-SYSTEM.md §Relationship Source of Truth states: "relatedPosts, relatedResources, relatedServices, relatedIndustries, relatedUrls must not control the graph architecture." Resources should use AUTHORITY_MAP for related services.

**Fix:** Remove inline `relatedServices` arrays from resource content files. SolutionDetailCard should read from AUTHORITY_MAP.resource[slug].services instead. Remove `relatedServices` from resource types.

**Files:**
- `src/domains/resources/content/*.tsx` (multiple resource files)
- `src/components/reusable/single/SolutionDetailCard.tsx`
- `src/components/reusable/sections/resources/ResourceSolutionsSection.tsx`
- `src/domains/resources/types.ts` (remove `relatedServices` from type)

**Status:** [x] Completed — Removed `relatedServices` and `relatedServicesHeading` from SolutionDetailCard, ResourceSolutionsSection, both ResourceData type files, and 44 resource content files. Related services already rendered via AUTHORITY_MAP.resource[slug].services in ResourcePageTemplate.

---

### TASK-012: Remove Legacy relatedUrls Manual Linking From Resources

**Problem:** `relatedUrls` field is actively used by `getRelatedResources()` in resource utils and validated by `validate-resources.mjs`. CONTENT-GRAPH-SYSTEM.md declares this a legacy presentation helper.

**Fix:** Remove `relatedUrls` from resource types and content files. Remove validation logic in `validate-resources.mjs` that checks relatedUrls. Related resources should resolve through AUTHORITY_MAP.

**Files:**
- `src/domains/resources/utils/index.ts` (getRelatedResources function)
- `src/domains/resources/types.ts` (remove `relatedUrls` from type)
- `src/lib/resources/types.ts` (remove `relatedUrls` from type)
- `scripts/validate-resources.mjs` (remove relatedUrls validation)
- Resource content files that declare `relatedUrls` arrays

**Status:** [x] Completed — Removed `relatedUrls` from both ResourceData types, ResourceIndexItem type in utils, dead relatedUrls code path in getRelatedResources(), and both validation blocks in validate-resources.mjs.

---

## Type Safety

---

### TASK-013: Make Required Metadata Fields Non-Optional in TypeScript Types

**Problem:** CONTENT-GRAPH-SYSTEM.md §Metadata Field Expectations requires:
- Resources: `systems[]` required, `topics[]` required
- Case studies: `industries[]` required, `systems[]` required
- Features: `systems[]` required

TypeScript interfaces mark these as optional (`?`), allowing content to skip required fields without type errors. Active TS errors exist in ts-errors.txt related to relatedServices optionality.

**Fix:** Remove `?` from `systems` and `topics` in resource types. Remove `?` from `industries` and `systems` in case study types. Remove `?` from `systems` in feature types. Run `npx tsc --noEmit` to catch any content files that now fail.

**Files:**
- `src/domains/resources/types.ts`
- `src/domains/case-studies/types.ts`
- `src/domains/features/types.ts`

**Status:** [x] Completed — Type safety enforced. All required metadata fields are now non-optional. Zero TS errors. All content files already provided required fields.

---

## Identifier Consistency

---

### TASK-014: Fix Industry Identifier Inconsistency Across Domains

**Problem:** Blog posts use `"salon"` and `"automotive"` while case studies use `"hair-salon"`, `"auto-repair"`, `"dental-clinic"`. CONTENT-GRAPH-SYSTEM.md §Canonical Identifier Registry locks identifiers and states "All metadata values must use these identifiers exactly." The canonical registry in `src/lib/content-graph/canonical.ts` contains 28 industry identifiers — canonical.ts should be the source of truth, but content files drift from it.

**Fix:** Audit all industry identifiers across blog, resource, and case study content. Align to canonical set defined in `canonical.ts`. Regenerate authority map.

**Files:**
- `src/lib/content-graph/canonical.ts` (verify canonical set matches docs)
- `src/domains/blog/content/*.tsx` (posts using non-canonical identifiers)
- `src/domains/resources/content/*.tsx`
- `src/domains/case-studies/content/*.tsx`
- Regenerate: `src/lib/authority/generated/authorityMap.ts`

**Status:** [x] Completed — All metadata identifiers already aligned with canonical registry. Full audit of ~150+ content files found zero non-canonical identifiers. Authority map regenerated (175 nodes, 7158 edges).

---

# PHASE 3 — STRUCTURE, GRAPH & BUILD INTEGRITY

Build pipeline, validation system, import direction, graph engine.

---

## Build Pipeline & Validation

---

### TASK-015: Add CTA Link Validation to Build Pipeline

**Problem:** No validation script checks whether CTA hrefs point to `/conversation` vs `/contact`. CTA violations can be reintroduced without detection. FOUNDATION-AND-POSITIONING.md §5 locks primary CTA to `/conversation`.

**Fix:** Add a validation rule (to validate-graph.ts or a new script) that scans all CTA-related props (actionHref, buttonHref, href in CTA sections) and fails if primary CTAs point to `/contact` instead of `/conversation`.

**Files:**
- `scripts/validate-graph.ts` or new validation script
- Wire into build pipeline

**Status:** [READY]

---

### TASK-016: Add Banned Vocabulary Validation to Build Pipeline

**Problem:** No validation script checks for banned vocabulary in user-visible content. Banned words (dominate, enables, configured, routing, unlock, entry points, visibility alignment, at scale, proven, transform, etc.) can be reintroduced after manual cleanup. FOUNDATION-AND-POSITIONING.md §2 Banned Vocabulary and §Content Quality Self-Check define the full banned list.

**Fix:** Create a validation script that scans all content data files and TSX content for banned vocabulary from the locked list. Fail build or warn on violations.

**Files:**
- New script: `scripts/validate-vocabulary.mjs` (or add to existing validation runner)
- Wire into build pipeline

**Status:** [READY]

---

### TASK-017: Align predev and prebuild Generator Scripts

**Problem:** `predev` and `prebuild` may run different generator sets. Authority map generation is manual-only. All generated files that affect rendering must be regenerated consistently in both dev and build. This prevents stale data in either environment.

**Fix:** Audit `package.json` scripts. Ensure `predev` and `prebuild` both run the same core generators: content registries, authority map, sitemap, topic authority scores.

**Files:**
- `package.json` (scripts section)

**Note:** Overlaps with TASK-006. TASK-006 adds authority map to pipeline; this task ensures full alignment.

**Status:** [READY]

---

## Import Direction

---

### TASK-018: Fix lib/ → domains/ Import Violations

**Problem:** 17 cases of `src/lib/` files importing from `src/domains/`. Architecture requires lib/ to be a lower layer that domains/ depends on — not the other way around. Key violators: `lib/seo/inlineLinking.ts`, `lib/content-graph/resolverIndexes.ts`, `lib/blog/data.ts`, `lib/resources/data.ts`, `lib/authority/resolver.ts`.

**Fix:** Refactor so domain registries are injected into lib/ functions (dependency inversion) or move the consuming code into a shared layer that may import both. This is a structural refactor — plan carefully before executing.

**Files:**
- `src/lib/seo/inlineLinking.ts` (imports FEATURE_REGISTRY, INDUSTRY_REGISTRY, SERVICE_REGISTRY)
- `src/lib/content-graph/resolverIndexes.ts` (imports BLOG_POSTS, RESOURCE_REGISTRY, etc.)
- `src/lib/blog/data.ts` (imports BLOG_POSTS)
- `src/lib/resources/data.ts` (imports RESOURCE_REGISTRY)
- `src/lib/authority/resolver.ts` (imports CASE_STUDY_REGISTRY, etc.)

**Status:** [READY]

---

## Content Graph

---

### TASK-019: Complete Content Graph Engine Refactor

**Problem:** Remaining fragile architecture items from the graph engine rollout.

**Sub-tasks:**
1. Remove SYSTEM_IDENTIFIER_REMAP from registry.ts (if still present)
2. Enforce canonical identifiers at content registration time (complements TASK-014)

**Files:**
- `src/lib/content-graph/registry.ts`

**Status:** [READY]

---

### TASK-020: Unify Validation Into Single Runner

**Problem:** 11 validation scripts exist independently (`validate:all` is a shell `&&` chain in package.json where the first failure stops all remaining checks). No aggregated output, no structured JSON report, no single programmatic entry point. Build pipeline runs `validate:all` only in `validate:ci` — it is NOT in `prebuild`, so structural violations can ship to production.

**Audit Findings (Script Audit 2026-03-27):**
- `validate:all` chain: typecheck → lint → docs → blog → case-study → service → feature → home → industry → resources → design. First failure halts remaining checks.
- No aggregated JSON output across all validators.
- `validate-accessibility.mjs` is a 3-line placeholder giving false pass (remove from chain).
- `audit-graph.ts` and `validate-graph.ts` are complementary but not in the chain.
- CTA link validation (TASK-015) and banned vocabulary validation (TASK-016) have no scripts yet.

**Sub-tasks:**
1. Create unified validation runner (`scripts/validate-runner.mjs`) that imports/invokes all validators programmatically, continues on failure, and collects structured results
2. Aggregate JSON report output: `{ validators: [...], total: { passed, failed, skipped }, issues: [...] }`
3. Integrate: graph validate, audit-graph, all structural validators, design system, CTA validation (TASK-015), vocabulary validation (TASK-016)
4. Replace `validate:all` shell chain with single runner invocation
5. Wire into `prebuild` so build fails on any violation
6. Add orphan + circular reference detection pass
7. Remove placeholder `validate-accessibility.mjs` from chain (see TASK-038)

**Files:**
- New: `scripts/validate-runner.mjs`
- `package.json` (replace `validate:all`, wire into `prebuild`)

**Status:** [x] ✅ Completed — unified validate-all.mjs created with 17 validators, aggregated output, structured JSON support

---

## Script Consolidation (Script Audit 2026-03-27)

---

### TASK-036: Extract Shared Validator Helpers Into Common Module

**Problem:** ~200+ lines of identical helper code are copy-pasted across 6 validator scripts: `validate-blog.mjs`, `validate-resources.mjs`, `validate-case-study-structure.mjs`, `validate-service-structure.mjs`, `validate-feature-structure.mjs`, `validate-industry-structure.mjs`. Duplicated functions include: `listSourceFiles`/`listFilesRecursive`, `importPathToFile`/`resolveImportPath`/`resolveSourceFilePath`, `getStringLiteralValue`/`resolveStringValue`, `getPropertyAssignment`/`getPropertyInitializer`/`hasProperty`, `toObjectLiteral`/`getObjectLiteralFromVariable`, `parseDestructuredSectionsKeys`, `extractSectionsOrderFromRenderer`, `buildReorderedSectionsText`, `findLegacy*ImportIssues` (same pattern, different domain name), `pascalToKebab`, `assert`/`uniq`.

Any fix to shared logic (e.g. import resolution, ts-morph helpers) requires touching 6+ files.

**Fix:** Extract shared ts-morph helpers into `scripts/lib/validator-helpers.mjs`. Update all 6 validators to import from shared module. Each validator keeps only its domain-specific validation logic.

**Files:**
- New: `scripts/lib/validator-helpers.mjs`
- `scripts/validate-blog.mjs` (remove duplicated helpers, import shared)
- `scripts/validate-resources.mjs` (same)
- `scripts/validate-case-study-structure.mjs` (same)
- `scripts/validate-service-structure.mjs` (same)
- `scripts/validate-feature-structure.mjs` (same)
- `scripts/validate-industry-structure.mjs` (same)

**Status:** [x] ✅ Completed — 28 shared helpers extracted, all 6 validators deduplicated

---

### TASK-037: Merge audit-graph.ts Into validate-graph.ts

**Problem:** Two scripts validate the content graph with overlapping scope:
- `audit-graph.ts`: Validates derived edges — system overlap gate, no zero-score edges, no self-references, no duplicates, cross-type coverage checks.
- `validate-graph.ts`: Validates canonical identifiers, node metadata, cross-references, metadata overlap scoring, derived edge audit.

Both import from the same content graph sources. Having two separate graph validation scripts creates confusion about which to run and risks missed checks.

**Fix:** Merge the 5 audit rules from `audit-graph.ts` into `validate-graph.ts` as an additional validation pass. Delete `audit-graph.ts`. Update package.json if needed.

**Files:**
- `scripts/validate-graph.ts` (add derived edge audit rules)
- `scripts/audit-graph.ts` (delete after merge)
- `package.json` (remove any audit-graph references if present)

**Status:** [x] ✅ Completed — audit rules merged into validate-graph.ts, audit-graph.ts deleted

---

### TASK-038: Delete Placeholder validate-accessibility.mjs

**Problem:** `validate-accessibility.mjs` is a 3-line placeholder (`console.log('Accessibility check placeholder')`). It is wired into the `validate:all` npm script chain and `validate:accessibility`, giving a false pass result. A future Accessibility Validation system is tracked under Future System Enhancements.

**Fix:** Delete the placeholder script. Remove `validate:accessibility` from package.json. Remove from `validate:all` chain. When real accessibility validation is built (Future Enhancement), create it fresh.

**Files:**
- `scripts/validate-accessibility.mjs` (delete)
- `package.json` (remove `validate:accessibility`, remove from `validate:all` chain)

**Status:** [x] ✅ Completed — placeholder script deleted, removed from package.json

---

### TASK-039: Fix check-generated.mjs Dead File Reference

**Problem:** `check-generated.mjs` (freshness checker) still includes `relatedContentMap.ts` in its REQUIRED_FILES list. This file is produced by the dead `generate-case-study-related-map.ts` script (TASK-021). After TASK-021 deletes the dead generator, `check-generated.mjs` will fail because the expected output no longer exists.

**Depends on:** TASK-021

**Fix:** Remove the CASE_STUDY_RELATED_MAP / relatedContentMap entry from the REQUIRED_FILES array in `check-generated.mjs`.

**Files:**
- `scripts/check-generated.mjs`

**Status:** [x] COMPLETED — Dead reference already removed. Script runs clean (exit 0).

---

### TASK-040: Standardize Validator CLI Interface

**Problem:** Inconsistent CLI support across validators:
- **Have `--fix` and `--report-json`:** validate-feature-structure, validate-service-structure, validate-industry-structure, validate-case-study-structure
- **No `--fix` or `--report-json`:** validate-blog, validate-resources, validate-home-structure, validate-docs, validate-design-system, validate-graph
- The unified runner (TASK-020) needs a consistent interface to invoke validators programmatically and collect structured output.

**Fix:** Add `--report-json` support to all validators that lack it (at minimum: validate-blog, validate-resources, validate-home-structure, validate-graph, validate-design-system). This enables the unified runner to consume structured output. `--fix` support is optional per-validator based on feasibility.

**Files:**
- `scripts/validate-blog.mjs` (add --report-json)
- `scripts/validate-resources.mjs` (add --report-json)
- `scripts/validate-home-structure.mjs` (add --report-json)
- `scripts/validate-graph.ts` (add --report-json)
- `scripts/validate-design-system.cjs` (add --report-json)
- `scripts/validate-docs.mjs` (add --report-json)

**Status:** [x] ✅ Completed — --report-json added to all 5 remaining validators

---

### TASK-041: Convert Validation System to Rule-Based Architecture

**Problem:** Current validation is domain-based (blog/resource/service/etc). This creates duplication, inconsistency, and weak enforcement. Architecture requires rule-based validation (CONTENT-SYSTEM-ARCHITECTURE.md §ENFORCEMENT RULES).

**Fix:** Refactor validation system into rule-based modules:

- validate-metadata (systems, topics, industries required fields)
- validate-cta (all primary CTAs must point to `/conversation`)
- validate-vocabulary (banned vocabulary enforcement)
- validate-graph (relationships, identifiers, metadata, derived edges)
- validate-structure (section presence/order where required)

Deprecate domain-specific validators once replaced.

**Files:**
- `scripts/validate-*.mjs` (all domain validators)
- `scripts/validate-all.mjs` (new orchestration)
- `scripts/lib/validator-helpers.mjs`

**Status:** [x] ✅ Completed — 4 rule-based validators created (validate-metadata, validate-cta, validate-vocabulary, validate-structure)

---

### TASK-042: Enforce Validation in Prebuild Pipeline

**Problem:** Validation currently runs manually or in CI only. Production builds can pass with structural violations. This breaks system integrity and violates self-enforcing architecture.

**Fix:** Add validation step to build pipeline:

- Run `validate-all` in `prebuild`
- Fail build on ANY validation error
- Ensure all generators run BEFORE validation

Final order:
generate → validate → build

**Files:**
- `package.json` (scripts section)

**Status:** [x] ✅ Completed — prebuild now runs generate:core && validate-all.mjs, build gates on validation

---

### TASK-043: Authority Map Freshness Guard

**Problem:** Even after adding authority map to pipeline, there is no guarantee the file is up-to-date with content changes. Stale authority maps break related content logic.

**Fix:** Add freshness validation:

- Compare authorityMap.ts timestamp vs content source files
- OR regenerate and diff
- Fail validation if mismatch detected

Integrate into validation pipeline.

**Files:**
- `scripts/check-generated.mjs`
- `scripts/validate-all.mjs` (integration)

**Status:** [x] ✅ Completed — check-generated integrated into validate-all.mjs as validator #17

---

# PHASE 4 — CLEANUP

Dead code, backup files, stale generated artifacts.

---

### TASK-021: Remove Dead CASE_STUDY_RELATED_MAP

**Problem:** `CASE_STUDY_RELATED_MAP` and its generation script are not imported anywhere. Replaced by AUTHORITY_MAP. **Critical:** the dead script still runs in `generate:core` pipeline (`npm run -s generate:case-study-related`), wasting time on every `predev` and `prebuild`. Additionally, `check-generated.mjs` still checks freshness of the dead generated file.

**Fix:** Delete both files. Remove `generate:case-study-related` from package.json scripts. Remove from `generate:core` chain. Update `check-generated.mjs` to remove CASE_STUDY_RELATED_MAP from its REQUIRED_FILES list (see TASK-039).

**Files:**
- `src/domains/case-studies/generated/relatedContentMap.ts`
- `scripts/generate-case-study-related-map.ts`
- `package.json` (remove `generate:case-study-related` script, remove from `generate:core` chain)

**Status:** [x] ✅ Completed — dead generator and generated file deleted, removed from pipeline

---

### TASK-022: Remove resolver.ts.bak2

**Problem:** Backup file from Phase 3 rewrite. No longer needed.

**Fix:** Delete file.

**Files:**
- `src/lib/authority/resolver.ts.bak2` (if exists)

**Status:** [x] COMPLETED — File already removed (no .bak files found in src/).

---

### TASK-023: Remove relatedServices From Case Study Types

**Problem:** `src/domains/case-studies/types.ts` contains an optional `relatedServices` field. Case studies should not have manual service linking — relationships resolve through AUTHORITY_MAP. This field is a legacy artifact.

**Fix:** Remove `relatedServices` from case study type definition. Fix any content files that use it.

**Files:**
- `src/domains/case-studies/types.ts`
- Case study content files using `relatedServices` (if any)

**Status:** [x] COMPLETED — Removed `relatedServices` from types.ts and all 20 case study content files.

---

# PHASE 5 — CONTENT VOCABULARY FIXES

> **Phase 5 execution is locked. Content rewriting will only start after full system stabilization.**

Banned vocabulary replacement across content files. These are copy-only changes — no structural modifications.

**Rules for Phase 5:**
- Only fix banned vocabulary from FOUNDATION-AND-POSITIONING.md §2
- Rewrite the full sentence naturally — do not mechanically swap words
- Do not change section order, structure, or component logic
- After all fixes in a batch, regenerate authority map
- Run `npx tsc --noEmit` and `npm run graph:validate` after each batch

---

### TASK-024: Remove "dominate"/"dominates" (~18 occurrences)

**Banned per:** FOUNDATION-AND-POSITIONING.md §Anti-hype language discipline and §WHAT WE NEVER SAY.

**Replace with:** "leads", "outperforms", "wins", or rewrite sentence.

**Files:**
- `src/domains/resources/data/resources.ts` L62, L138
- `src/lib/resources/data.ts` L63, L139
- `src/domains/resources/content/LocalVisibilityFramework.tsx` L163
- `src/domains/resources/content/HvacReviewGenerationFramework.tsx` L21, L131
- `src/domains/blog/content/ReviewGenerationSystemForLocalBusinesses.tsx` L44
- `src/domains/blog/content/ReviewAutomationForHvacCompanies.tsx` L87
- `src/domains/blog/content/HvacReviewGenerationFramework.tsx` L52
- `src/domains/blog/content/LocalSeoForRoofingCompaniesExplained.tsx` L92, L103
- Regenerate: `src/lib/authority/generated/authorityMap.ts`

**Status:** [x] COMPLETED — All 19 occurrences of dominate/dominates fixed across 10 files. Also fixed "guaranteed" in 2 service files (growth-revenue-systems.ts, local-seo-authority.ts). Authority map regenerated. validate-vocabulary passes with 0 issues.

---

### TASK-025: Replace "enables" (~40+ occurrences)

**Banned per:** FOUNDATION-AND-POSITIONING.md §2 Banned Vocabulary — replace with "allows", "supports", "makes possible", or "creates".

**Files:**
- `src/domains/blog/content/*.tsx` (bulk)
- `src/domains/resources/content/*.tsx` (bulk)

**Status:** [HOLD] Content rewriting deferred until system stabilization complete.

---

### TASK-026: Replace "configured" in Case Studies (~20 occurrences)

**Banned per:** FOUNDATION-AND-POSITIONING.md §3 Approved Vocabulary Patterns — "set up" not "configured".

**Files:**
- `src/domains/case-studies/content/*.tsx` (bulk — BeautySalonManchesterAllSections, HvacEmergencyLeadRouting, RealEstateInquiryRouting, SalonReviewGenerationAutomation, CrmPipelineVisibilityTransformation, + ~15 more)

**Status:** [HOLD] Content rewriting deferred until system stabilization complete.

---

### TASK-027: Fix "routing" in Content Descriptions (~20 occurrences)

**Banned per:** FOUNDATION-AND-POSITIONING.md §2 — "routing" should be "sent to the right person" or similar plain English.

**Fix:** Fix source content descriptions in data files. Regenerate authority map.

**Files:**
- Source content/data files where "routing" appears in user-visible descriptions
- Regenerate: `src/lib/authority/generated/authorityMap.ts`

**Status:** [HOLD] Content rewriting deferred until system stabilization complete.

---

### TASK-028: Replace "unlock"/"unlocked" (~11 occurrences)

**Banned per:** FOUNDATION-AND-POSITIONING.md §Anti-hype — growth-hype language.

**Replace with:** "opened", "created", "made possible", or rewrite sentence.

**Files:**
- `src/domains/blog/content/WebsiteCrmIntegrationForSalons.tsx` L82
- `src/domains/blog/content/FutureCrmVisibilityForHvacCompanies.tsx` L67
- `src/domains/case-studies/content/SalonBookingAutomation.tsx` L163, L177
- `src/domains/case-studies/content/RoofingWebsiteRebuildWithCrm.tsx` L148
- + ~6 more occurrences

**Status:** [HOLD] Content rewriting deferred until system stabilization complete.

---

### TASK-029: Replace "proven strategies" in Resource Descriptions

**Banned per:** FOUNDATION-AND-POSITIONING.md — hype language.

**Replace with:** "practical guides", "step-by-step frameworks", or similar factual copy.

**Files:**
- `src/domains/resources/data/resources.ts` L62
- `src/lib/resources/data.ts` L63

**Status:** [HOLD] Content rewriting deferred until system stabilization complete.

---

### TASK-030: Fix "entry points" in User-Visible Copy (3 occurrences)

**Banned per:** FOUNDATION-AND-POSITIONING.md §2 — should be "ways to get in touch" or "enquiry routes".

**Files:**
- `src/domains/home/data/homepage.ts` L569
- `src/domains/services/data/smart-website-systems.ts` L172 ✅ → "Clear ways to get in touch"
- `src/domains/case-studies/content/SalonBookingAutomation.tsx` L79

**Status:** [x] COMPLETED — All 3 fixed: smart-website-systems.ts, SalonBookingAutomation.tsx, homepage.ts L569 ("Entry Points" → "Starting Points").

---

### TASK-031: Fix "visibility alignment" in Service Page Copy (2 occurrences)

**Banned per:** FOUNDATION-AND-POSITIONING.md §2 — use "search visibility improvement" or "how your business appears in search".

**Files:**
- `src/domains/services/data/growth-revenue-systems.ts` L343, L457

**Status:** [x] DONE — Context-aware edits: L343 → "better search and discovery", L457 → "search and discovery work"

---

### TASK-032: Fix "game-changer" in Testimonial

**Banned per:** FOUNDATION-AND-POSITIONING.md §Anti-hype — hype word.

**Fix:** Rewrite testimonial quote.

**Files:**
- `src/domains/features/data/reputation.ts` L308

**Status:** [HOLD] Content rewriting deferred until system stabilization complete.

---

### TASK-033: Fix "optimize"/"optimise" in Non-SEO Contexts

**Banned per:** FOUNDATION-AND-POSITIONING.md §3 — "improve" unless specifically discussing SEO.

**Files:**
- `src/screens/FAQPage.tsx` L26, L48
- `src/domains/home/data/homepage.ts` L760

**Status:** [HOLD] Content rewriting deferred until system stabilization complete.

---

### TASK-034: Fix Case Study Hype Heading — "Transformed"

**Banned per:** FOUNDATION-AND-POSITIONING.md §Anti-hype.

**Fix:** Rewrite `"How We Transformed Their Business"` to operational heading.

**Files:**
- `src/domains/case-studies/content/BeautySalonManchesterCustom.tsx` L124

**Status:** [HOLD] Content rewriting deferred until system stabilization complete.

---

### TASK-035: Fix "at scale" in Topic Registry and Content

**Banned per:** FOUNDATION-AND-POSITIONING.md — SaaS language, not systems-first positioning.

**Files:**
- `src/domains/blog/topicRegistry.ts` L40
- Blog content files using "at scale" in headings/body

**Status:** [HOLD] Content rewriting deferred until system stabilization complete.

---

# FUTURE SYSTEM ENHANCEMENTS

Tracked for future cycles. Not blocking current execution.

---

### Content Intelligence Engine

**Goal:** Automatically detect content gaps and suggest what to create next.
**Status:** Scripts partially exist (`scripts/generate-content-gaps.ts`). Needs validation and integration.

---

### Authority Score Propagation (Multi-pass)

**Goal:** Improve authority scoring accuracy with iterative score propagation.

---

### Conversion Tracking for Related Sections

**Goal:** Measure whether related content sections drive clicks and leads.

---

### Internal Linking Heatmap

**Goal:** Visualize internal link strength to find weak and isolated pages.

---

### Resolver & Index Optimization

**Goal:** Ensure the system stays fast as content scales past 500 items.

---

### Authority Decay System

**Goal:** Prevent high-authority pages from dominating all slot outputs.

---

### OpenGraph Image Coverage

**Goal:** Fix broken social previews on blog pages.

---

### Accessibility Validation

**Goal:** Replace placeholder accessibility script with real system. Placeholder deleted in TASK-038.

---

# ✅ COMPLETED

---

### System Reset — Hard Cleanup (Phase 1)

Deleted legacy files. Cleaned resolver.ts and registry.ts. Zero TypeScript errors. Build pass 284/284 pages.

---

### Core Engine Build (Phase 2)

Created scoring.ts, rewrote derivedRelationships.ts, updated registry.ts. 7158 derived edges. All audit rules pass.

---

### Slot-Based Resolver Rewrite (Phase 3)

Built 6 slot functions + getAllRouteSlugs. Updated all consumers. Build pass 284/284.

---

### Template Alignment (Phase 4)

All domain templates use only slot functions. All legacy logic removed. Conditional render guards on every section.

---

### Build-Time Authority Map (Phase 5)

Created generate-authority-map.ts. 207 nodes precomputed. All templates use AUTHORITY_MAP.

---

### Internal Linking Helper (Phase 6)

Created inlineLinking.ts. Max 3 links, first-occurrence, word-boundary matching.

---

### Conversion Optimization (Phase 7)

Intent-driven section titles. RelatedSectionCTA component. CTA on all 5 domain templates.

---

### Authority Score System

Created authorityScore.ts. All slot arrays pre-sorted by authority score at build time.

---

### Architecture Enforcement Audit

Full codebase audit against 4 locked architecture docs. 35 atomic violation tasks generated across 5 phases. Slot structures verified correct (6/6). Metadata fields verified populated. Canonical system identifiers verified (all 6 used correctly).

**Passed:**
- Slot structure per page type (6/6 correct)
- Canonical system identifiers (6/6 canonical)
- Blog metadata: topics populated on all 77 posts
- Resource metadata: systems + topics populated on all 52 resources
- Case study metadata: industries + systems populated on all 22 case studies
- Feature metadata: systems populated on all 7 features, no industries (correct)
- Authority map slot types match docs (6/6)
- Resolver slot functions match docs (6/6)

**Audit Findings Summary:**
- Phase 1: 6 CRITICAL fixes (rendering defaults, fabricated claims, build pipeline)
- Phase 2: 8 architecture violations (CTA links, legacy fields, type safety, identifiers)
- Phase 3: 6 structural/graph fixes (validation, imports, graph engine, build alignment)
- Phase 4: 3 cleanup items (dead code, legacy artifacts)
- Phase 5: 12 vocabulary fixes (banned words across content files)

---

# TASK CROSS-REFERENCE

| Phase | Tasks | Count | Scope |
|-------|-------|-------|-------|
| 1 — Critical | TASK-001 to TASK-006 | 6 | Rendering defaults, build pipeline |
| 2 — Architecture | TASK-007 to TASK-014 | 8 | CTA links, legacy fields, types, identifiers |
| 3 — Structure | TASK-015 to TASK-020 | 6 | Validation, imports, graph, build alignment |
| 4 — Cleanup | TASK-021 to TASK-023 | 3 | Dead code, backup files |
| 5 — Content | TASK-024 to TASK-035 | 12 | Banned vocabulary only |
| 6 — Governance | TASK-050 to TASK-055 | 6 | Content intelligence & governance |
| 7 — Stabilization | TASK-060 to TASK-065 | 6 | System stabilization & governance alignment |
| 8 — Post-Audit | TASK-070 to TASK-074 | 5 | Audit-driven validator fixes & expansion |
| Future | Enhancements | 7 | Not blocking |
| **Total** | | **52 + 7 future** | |

---

## Phase 6 — Content Intelligence & Governance

---

### TASK-050: Content Governance System (CRITICAL)

**Objective:** Create a master document that serves as the single source of truth for all content rewriting and validation.

**Deliverable:** `Mindwp-Docs/CONTENT-GOVERNANCE.md`

**Must define:**
- Domain-level writing rules (blog, resources, case studies, services)
- Section-level intent rules (hero, problem, solution, CTA, etc.)
- Approved tone and style guidelines
- Banned vocabulary and replacements
- CTA standards (label + href)
- Examples of good vs bad writing

**Status:** [x] COMPLETED

---

### TASK-051: Section Intelligence Mapping

**Objective:** Define expected structure for each domain type.

**Domains:**
- Services
- Blog
- Resources
- Case Studies
- Features

**For each domain:**
- List allowed sections
- Define purpose of each section
- Map section → writing style

**Used by:** AI rewriting system and validators.

**Status:** [ ]

---

### TASK-052: Validator Upgrade (Content-Aware)

**Objective:** Extend validation system to include content-aware rules.

**New validation rules:**
- Detection of banned vocabulary in critical sections (hero, CTA)
- Basic tone validation (no hype in case studies)
- CTA misuse detection (wrong label or placement)
- Section-level validation rules

**Constraint:** Keep rules deterministic. Do not overcomplicate.

**Status:** [ ]

---

### TASK-053: Content Scoring System

**Objective:** Create a scoring system that evaluates each page.

**Scoring dimensions:**
- Clarity
- Hype level
- Readability
- CTA strength

**Output:** `/reports/content-score.json`

Each page should have a score and improvement flags.

**Status:** [ ]

---

### TASK-054: High-Impact Page Detection

**Objective:** Automatically detect and tag high-priority pages.

**Targets:**
- Service pages
- Core landing pages
- Key resources
- Important case studies

**Add priority field:** `priority: high | medium | low`

This will guide future deep rewrites.

**Status:** [ ]

---

### TASK-055: Controlled Rewrite System (Phase 6)

**Objective:** Define system for deep rewriting. Planning only — not executed now.

**Rules:**
- Only rewrite high-priority pages
- Use governance rules (TASK-050)
- Apply section-aware rewriting (TASK-051)
- Avoid full-site rewriting

**Depends on:** TASK-050, TASK-051, TASK-054

**Status:** [x] COMPLETED — Controlled Rewrite System added as §10 in CONTENT-GOVERNANCE.md. Covers: eligibility rules, manual approval flow, change constraints, scope limits (max 5 pages/batch), validation requirements, priority order.

---

## Phase 7 — System Stabilization & Governance Alignment

---

### TASK-060: Governance Integration Audit

**Objective:** Verify all validators align with CONTENT-GOVERNANCE.md.

**Checks:**
- CTA rules match governance (label + href)
- Vocabulary validator matches FOUNDATION-AND-POSITIONING.md rules
- Section structure validators align with governance domain rules

**Output:** Mismatch report.

**Status:** [x] COMPLETED

---

### TASK-061: Validation Gap Implementation

**Objective:** Create validators for governance rules not yet enforced.

**New validators:**
- CTA placement (must be final section)
- Heading vocabulary enforcement
- Basic tone validation (no hype words in restricted domains)

**Constraint:** Keep rules deterministic. No scoring or subjective checks.

**Progress:**
- CTA conflict resolved. FOUNDATION-AND-POSITIONING.md now aligned with system (/contact).
- CTA placement validator created (TASK-071).
- Vocabulary enforcement expanded (TASK-072).
- All governance-driven validators now operational.

**Status:** [x] COMPLETED

---

### TASK-062: Content System Consistency Audit

**Objective:** Identify domain tone inconsistencies across content.

**Domains to audit:**
- Services
- Blog
- Resources
- Case Studies

**Output:** Inconsistency report only. No rewriting.

**Status:** [ ] TODO

---

### TASK-063: AI Editing Stability Test

**Objective:** Verify governance-guided editing does not break structure, drift tone, or over-edit.

**Test set:**
- 1 blog post
- 1 resource page
- 1 service page

**Verify:**
- No structure break
- No tone drift
- No over-editing
- Validators pass before and after

**Status:** [ ] TODO

---

### TASK-064: Vocabulary Cleanup Completion (Deferred Execution)

**Objective:** Complete remaining vocabulary cleanup using governance rules.

**Rules:**
- Apply context-aware editing only
- No blind replacements
- Follow edit intensity levels from CONTENT-GOVERNANCE.md

**⚠️ Execution deferred until system stabilization is complete.**

**Depends on:** TASK-060, TASK-061, TASK-063

**Progress:** First batch completed — all dominate/dominates (19), guaranteed (2), entry points (1) fixed. validate-vocabulary passes. Remaining Phase 5 vocabulary tasks still [HOLD].

**Status:** [HOLD]

---

### TASK-065: Documentation Alignment Audit

**Objective:** Ensure all documentation is internally consistent.

**Checks:**
- No conflicts between governing documents
- Consistent terminology across all docs
- Governance document correctly referenced where needed

**Audit Results:**
- CONTENT-GRAPH-SYSTEM.md: Manual Relationships marked as "Future — Not Yet Implemented"; removed false "layered in" claim; added Graph Query API (LOCKED) section with function signatures
- CONTENT-BLUEPRINT-SYSTEM.md: Softened unenforced "must" → "should" for blog/resource archetypes
- CONTENT-SYSTEM-ARCHITECTURE.md: Internal Link Strictness Rule rewritten to match engine behavior; added UI Architecture (LOCKED), Intelligence Engine (LOCKED), Validation System (LOCKED) sections; simplified Authority Resolution (removed non-existent manual relationship references); added industry-category to slot system
- CONTENT-GOVERNANCE.md: Audited — no changes needed
- FOUNDATION-AND-POSITIONING.md: Audited — no changes needed

**Status:** [x] COMPLETED

---

**Note:** Content rewriting is intentionally deferred. All system alignment, validation, and governance must be completed first.

---

## Phase 8 — System Stabilization (Post-Audit)

These tasks were generated from the GOVERNANCE-AUDIT-REPORT.md findings.

---

### TASK-070: Governance Alignment Fix

**Objective:** Resolve document-level conflicts found during audit.

**Actions:**
- Fix CTA conflict in FOUNDATION-AND-POSITIONING.md (`/conversation` → `/contact`) ✅ DONE
- Extend vocabulary validator with anti-hype words from FOUNDATION §Anti-hype ✅ DONE
- Extend vocabulary validator scan directories to include `resources/content` and `case-studies/content` ✅ DONE

**Status:** [x] COMPLETED

---

### TASK-071: CTA Placement Validator

**Objective:** Enforce CTA as last section across all domains.

**Approach:** Extended `validate-structure.mjs` with `CTA_PLACEMENT_RULES` and `checkCtaPlacement()` function.

**Coverage implemented:**
- Blog: CTA must be the very last `type:` entry. 2 violations detected (AbandonedCartRecovery, EmailMarketingAutomation — missing CTA).
- Resources: CTA must exist; only `related-resources` and `sidebar-cta` allowed after it (per CONTENT-BLUEPRINT-SYSTEM). All 52 resources pass.
- Services/Features/Industries: CTA is a top-level key, not in sections array. Already enforced by existing structure checks.
- Case studies: Already enforced by `validate-case-study-structure.mjs`.

**Status:** [x] COMPLETED

---

### TASK-072: Vocabulary System Expansion

**Objective:** Add anti-hype vocabulary enforcement to the vocabulary validator.

**Words added (11):** dominate, dominates, explode, explosive, disrupt, disruptive, revolutionary, guaranteed, guarantees, hyper-growth, skyrocket.

**Implementation:** Added `ANTI_HYPE_VOCABULARY` array with word-boundary regex patterns (case-insensitive). Combined with existing `BANNED_VOCABULARY` into `ALL_BANNED` (26 total patterns). 13 violations detected across blog/resource/service content — expected and correct.

**Status:** [x] COMPLETED

---

### TASK-073: Validation Coverage Expansion

**Objective:** Extend validators to cover content directories currently excluded.

**Actions:**
- Add `src/domains/resources/content` to vocabulary validator SCAN_DIRS ✅ DONE
- Add `src/domains/case-studies/content` to vocabulary validator SCAN_DIRS ✅ DONE
- Verify no false positives from expanded scan ✅ DONE — 4 new violations from expanded dirs (3 resources, 1 case-study), all legitimate.

**Status:** [x] COMPLETED

---

### TASK-074: Section-Level Tone Validation (Future)

**Objective:** Detect tone violations per section and domain.

**Rules:**
- No hype language in case study content
- No urgency language in CTA sections
- No marketing tone in resource content

**Constraint:** Advanced — requires heuristic or pattern-based detection. Not required for current stabilization phase.

**Status:** [FUTURE]

---
---

## 🟡 IN PROGRESS — System Optimization & Launch

---

### Phase X — System Intelligence Upgrade (CORE)

Goal: Improve internal linking relevance, authority scoring, and content flow.

- TASK-INT-001: Add context-aware authority scoring
  → boost score based on industry, service, cluster match

- TASK-INT-002: Implement link diversity control
  → max 1 link per target type per zone

- TASK-INT-003: Add intent layer (learn / compare / buy)
  → used for linking + CTA decisions

- TASK-INT-004: Add cluster depth awareness
  → prevent flat linking, enforce hierarchy

- TASK-INT-005: Replace top-N selection with threshold filtering
  → avoid weak/forced links

**Status:** 🔄 IN PROGRESS

---

### Phase X — UI/UX System Polish

Goal: Make UI consistent, premium, and system-driven.

- TASK-UI-001: Standardize color system (tokens only)
- TASK-UI-002: Fix spacing system (consistent vertical rhythm)
- TASK-UI-003: Normalize typography hierarchy
- TASK-UI-004: Unify card components (radius, shadow, padding)
- TASK-UI-005: Improve interaction states (hover, transitions)

**Status:** ⏳ TODO

---

### Phase X — Conversion Optimization Layer (CRITICAL)

Goal: Turn website into a lead-generation system (not just content system)

---

### TASK-CONV-001: Fix Page Visual Hierarchy

**Problem:**
Pages are structurally correct but not visually optimized for scanning + decision making.

**Fix:**
- Ensure clear flow:
  Hero → Problem → Solution → Proof → CTA
- Improve section spacing and grouping
- Highlight key actions visually

**Scope:**
- All domain templates (blog, service, resource, case-study)

**Status:** [ ] TODO

---

### TASK-CONV-002: CTA Design System (Visual + UX)

**Problem:**
CTA exists but lacks visual priority and consistency.

**Fix:**
- Define CTA variants:
  - Primary (strong)
  - Secondary (medium)
  - Soft (low friction)
- Improve:
  - button size
  - contrast
  - spacing
  - placement

**Add rules:**
- One primary CTA per screen
- No competing CTAs

**Status:** [ ] TODO

---

### TASK-CONV-003: CTA Placement Optimization

**Problem:**
CTA placement is not fully aligned with user intent stages.

**Fix:**
Define placement rules:

| Page Type | Placement |
|----------|----------|
| Blog | End |
| Resource | Mid + End |
| Case Study | End |
| Service | Hero + End |
| Industry | Mid |

**Status:** [ ] TODO

---

### TASK-CONV-004: Conversion Flow Enforcement

**Problem:**
Pages do not always guide users toward next step.

**Fix:**
Enforce journey:

Blog → Resource → Case Study → Service → Contact

**Implementation:**
- Boost internal links toward next step
- Ensure each page pushes forward

**Status:** [ ] TODO

---

### TASK-CONV-005: Reduce Cognitive Load

**Problem:**
Too many elements compete for attention.

**Fix:**
- Limit choices per section
- Remove unnecessary UI noise
- Improve readability
- Use spacing instead of clutter

**Status:** [ ] TODO

---

### TASK-CONV-006: Improve Content Readability

**Problem:**
Content is technically correct but not optimized for scanning.

**Fix:**
- Short paragraphs
- Clear headings
- Visual separation
- Highlight key points

⚠️ No rewriting — only formatting improvements

**Status:** [ ] TODO

---

### TASK-CONV-007: Trust Signal Placement

**Problem:**
Trust elements are not strategically placed.

**Fix:**
- Add proof near CTA:
  - case studies
  - results
  - system clarity
- Avoid fake testimonials

**Status:** [ ] TODO

---

### TASK-CONV-008: Conversion Section Standardization

**Problem:**
Different pages behave differently.

**Fix:**
Standard structure:

- Hero
- Problem
- Solution
- Proof
- Related Content
- CTA

**Status:** [ ] TODO

---

### TASK-CONV-009: CTA Consistency Audit

**Problem:**
CTA labels and behavior may drift.

**Fix:**
- Ensure all primary CTAs:
  - label = "Start a Conversation"
  - href = "/contact"
- Validate via existing CTA validator

**Status:** [ ] TODO

---

### TASK-CONV-010: Mobile Conversion Optimization

**Problem:**
Mobile UX may reduce conversion.

**Fix:**
- Ensure CTA visible without scrolling too much
- Improve spacing on mobile
- Fix button tap areas

**Status:** [ ] TODO

---

### CONVERSION LAYER RULES

- Do NOT change content meaning
- Do NOT rewrite copy (Phase 5 handles that)
- Only improve structure, layout, and UX
- Follow system-driven rules (no random design changes)
- Validate after each major update

---

### Phase X — Conversion Funnel System (Dual Strategy)

Goal:
Support BOTH:
1. High-intent users → direct conversation (PRIMARY)
2. Early-stage users → optional free resource (FUTURE / DISABLED)

IMPORTANT:
- Primary model = Conversation-first
- Free resource system = optional layer (NOT required)
- System must work fully WITHOUT free resources

---

#### CORE FUNNEL ARCHITECTURE

**PRIMARY (ACTIVE):**
Content → Understanding → Pre-CTA → CTA → Conversation

**OPTIONAL (FUTURE):**
Content → Free Resource → Email → Nurture → CTA → Conversation

---

#### PART 1 — PRE-CTA SYSTEM (CORE)

---

### TASK-PRE-CTA-001: Define Soft CTA Types

Examples:
- "See How This System Works"
- "Understand Your Setup"
- "Explore Your Options"

Rules:
- No commitment required
- No forms
- No downloads
- Must guide user forward

**Status:** [ ] TODO

---

### TASK-PRE-CTA-002: Add Soft CTA Placement Rules

| Page Type | Placement |
|----------|----------|
| Blog | mid + before end |
| Resource | mid |
| Case Study | before final CTA |
| Service | before main CTA |

**Status:** [ ] TODO

---

### TASK-PRE-CTA-003: Connect Soft CTA to Journey

Rules:
- MUST link to deeper content
- MUST NOT link to contact page
- MUST follow journey system

Flow:
Blog → Resource → Case Study → Service

**Status:** [ ] TODO

---

### TASK-PRE-CTA-004: Upgrade Primary CTA Messaging

Improve clarity + reduce friction

Structure:
- headline
- supporting line
- expectation

Example:
"Tell us about your setup. We'll show you how this system can work for you."

**Status:** [ ] TODO

---

### TASK-PRE-CTA-005: Reduce CTA Friction

Rules:
- remove urgency
- remove hype
- add clarity
- add expectation

**Status:** [ ] TODO

---

#### PART 2 — FREE RESOURCE SYSTEM (OPTIONAL / DISABLED)

Purpose:
Low-friction entry point for early-stage users

IMPORTANT:
- This system is OPTIONAL
- Must NOT affect core funnel
- Must be disabled by default

---

### TASK-FREE-001: Define Resource Types (FUTURE)

Allowed:
- checklist
- template
- framework

Rules:
- practical only
- system-based
- no fluff

**Status:** [FUTURE]

---

### TASK-FREE-002: Resource Mapping Strategy

Example:
- Blog → checklist
- Resource → template
- Case study → framework

**Status:** [FUTURE]

---

### TASK-FREE-003: Email Capture System

Options:
- simple form
- CRM integration (future)

**Status:** [FUTURE]

---

### TASK-FREE-004: Conditional CTA System

Add new CTA types:
- "Download Checklist"
- "Get Template"

Rules:
- ONLY visible if resource exists
- ONLY on blog/resource pages

**Status:** [FUTURE]

---

### TASK-FREE-005: Funnel Integration

Flow:
Free Resource → Email → Follow-up → Service

**Status:** [FUTURE]

---

#### PART 3 — SYSTEM RULES (LOCKED)

**Conversion Priority:**
1. Conversation (PRIMARY)
2. Pre-CTA (SUPPORT)
3. Free Resource (OPTIONAL)

**Strict Rules:**
- System MUST work without free resources
- No fake lead magnets
- No forced downloads
- No UX clutter

**CTA Hierarchy:**
1. Soft CTA (exploration)
2. Primary CTA (conversation)
3. Optional resource CTA (only if exists)

**Final Goal:**
Build a clean, high-intent conversion system:
- Clear journey
- No friction
- No fake value
- Strong positioning

👉 This is NOT a lead magnet site
👉 This is a system-driven conversion engine

---

### Phase X — Image System Completion

Goal: Finalize automated and consistent image handling system.

- TASK-IMG-001: Define global image schema
- TASK-IMG-002: Complete featured image generator rules
- TASK-IMG-003: Add image optimization (WebP, lazy loading)
- TASK-IMG-004: Implement fallback image system

**Status:** ⏳ TODO

---

### Phase X — Deployment (Vercel)

Goal: Prepare and deploy production-ready website.

- TASK-DEP-001: Verify build pipeline (tsc + validators)
- TASK-DEP-002: Clean environment variables
- TASK-DEP-003: Connect repository to Vercel
- TASK-DEP-004: Configure build & output settings
- TASK-DEP-005: Run final production validation

**Status:** ⏳ TODO

---

### Phase X — Future (Planned — Not Now)

Goal: Plan scalable content expansion system (do not execute now).

- TASK-FUT-001: Content gap expansion engine
- TASK-FUT-002: Automated topic suggestion system
- TASK-FUT-003: Authority-driven content planning

**Status:** 🧊 HOLD




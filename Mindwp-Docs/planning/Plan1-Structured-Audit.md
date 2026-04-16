# Plan1 Execution Architecture

Date: 2026-04-16
Source inputs:
- Raw planning notes from `Mindwp-Docs/planning/Plan1.md`
- Verified repo audit across `src/app`, `src/domains`, `src/components`, `src/screens`, `src/lib`, and component-library/devtools surfaces

Purpose:
- Convert the current plan into a fully enforceable, ownership-defined, single-pass execution document.

Execution standard:
- Every rule in this document must map to a runtime owner, file owner, or explicit enforcement mechanism.
- No route-level UI composition is allowed after Phase 0.
- No shared-system exception is allowed unless this document defines both owner and enforcement.
- No code change proceeds without matching documentation updates.

## Verified Repo Reality

- App routes are mostly thin wrappers, but several detail routes still own related-content grouping logic.
- `SmartRelatedSection` is active on service, feature, blog, resource, and case-study detail routes.
- Industries still bypass the shared related-content entry and assemble related UI in `src/app/industries/[...slug]/page.tsx`.
- `SmartCTA` exists, but CTA count and intent are not enforced centrally.
- CTA wrappers still exist and still appear in scanner/docs/barrel surfaces.
- FAQ rendering is duplicated across `FAQSection`, `FaqAccordionSection`, and domain wrappers and aliases.
- `ui-intelligence.ts` and `section-intelligence.ts` are partially active runtime config, not dead files.
- Services are not finalized. Service data and renderers still contain unresolved copy and CTA-density issues.
- Homepage is not finalized. Messaging, CTA density, entry paths, and visual wiring still need alignment.
- Homepage `system-capabilities` currently uses one generic visual shell for all tabs. Only the first tab currently reads as a correct visual state. The remaining tabs reuse the same visual pattern and are not meaningfully differentiated.
- Services landing is still manually curated by slug arrays.
- Features landing, industries landing, blog landing, resources hub, and case studies landing are already data-driven and should remain so.
- The component library already exists, but representative links are partly hardcoded and usage counts are not surfaced.

## System Laws

- 1 `RelatedContentZone` per page.
- 1 default CTA per page.
- 1 FAQ renderer only.
- No UI composition inside `src/app/**/page.tsx`.
- No duplicate component wrappers that add no behavior.
- No dead runtime policy branches.
- No component deletion without usage audit, scanner update, docs regeneration, and import cleanup.

## Page Identity Contract

Every page must provide:

```ts
pageId: string
pageType:
  | 'service'
  | 'feature'
  | 'blog'
  | 'resource'
  | 'case-study'
  | 'industry-detail'
  | 'industry-category'
  | 'page'
```

Rules:
- `pageId` is a stable unique page identifier.
- `pageType` is a required runtime contract, not a derived guess.
- `pageId` and `pageType` are defined by domain template contracts or domain page adapters.
- Routes pass `pageId` and `pageType` through. Routes do not invent CTA or related-content logic from them.
- `pageId` and `pageType` are required inputs for CTA enforcement and related-content building.

Canonical IDs:
- Service detail: `service:${slug}`
- Feature detail: `feature:${slug}`
- Blog detail: `blog:${slug}`
- Resource detail: `resource:${slug}`
- Case study detail: `case-study:${slug}`
- Industry category: `industry-category:${slug}`
- Industry detail: `industry-detail:${slug}`
- Static page or landing page: `page:${routeSlug}`

### Page Identity Enforcement

Rules:
- `pageId` and `pageType` are required in all templates and template-equivalent domain page adapters.
- Missing `pageId` throws a runtime error in development.
- Missing `pageType` throws a runtime error in development.
- Routes must pass identity explicitly.
- Templates and adapters must not derive identity from CTA props or related-content props.

## Ownership Map

| System | Owner | Notes |
| --- | --- | --- |
| CTA enforcement | `SmartCTA` + CTA registry | Controls count, intent, and duplicate detection |
| Related grouping | `buildRelatedContent` | Central builder for labels, grouping, and ordering |
| FAQ rendering | `FAQSection` | Single FAQ renderer across all domains |
| Page layout | Domain templates or domain page adapters | Not routes |
| Page identity | Domain templates or domain page adapters | Required for CTA enforcement and related-content builder |
| Data | `src/domains/*/data` and domain registries | Source of truth |
| Composition | `src/domains/*/templates` or domain page adapters | Not routes |
| Policy config | Active runtime config only | Unused branches removed |
| Component inventory | `componentScanner.ts` + generated docs | Must stay in sync with live component set |

Template-equivalent note:
- Where a domain still uses a renderer or adapter instead of an explicit template file, that renderer or adapter is treated as the composition owner until unified templates are introduced.

## CTA Intent System

Runtime enum:
- `entry`
- `diagnostic`
- `comparison`
- `conversion`

Rules:
- Default page CTA intent is `conversion`.
- Only 1 CTA per intent is allowed on a page.
- Only 1 `conversion` CTA is allowed on a page.
- Inline CTA must not use `conversion` intent.
- Inline CTA must declare intent explicitly.
- CTA position must be declared explicitly.

Runtime CTA positions:
- `hero`
- `pre-mid`
- `mid`
- `sidebar`
- `footer`

Allowed patterns:
- `conversion` at `footer`
- `entry`, `diagnostic`, or `comparison` before `mid`
- `sidebar` CTA only when it is non-`conversion`

Forbidden patterns:
- Inline `conversion` CTA
- Multiple `conversion` CTAs
- Duplicate CTA intent on the same page
- CTA render without `pageId`, `pageType`, `intent`, and `position`

## Enforcement Layer

### CTA Enforcement

Owners:
- `src/components/system/SmartCTA.tsx`
- `src/lib/cta/ctaRegistry.ts`
- Domain templates or domain page adapters that provide `pageId` and `pageType`

Implementation direction:

```ts
registerCTA({
  pageId,
  pageType,
  intent,
  position,
})
```

### CTA Registry Lifecycle

Rules:
- Registry must reset per page render lifecycle.
- Registry must be scoped to `pageId`.
- No global singleton registry is allowed.
- No cross-page registry bleed is allowed.
- Registry must be initialized at the template level.
- `CTARegistryProvider` is required for every page template or template-equivalent domain adapter.

Implementation direction:
- Use React context or a request-scoped store.
- Registry is created from the page identity owner.
- Registry is cleared on page mount or request start.
- Re-renders must reuse only the active page-scoped registry instance.

### CTA Intent Ownership

- Intent is defined ONLY in templates or domain renderers
- Data files MUST NOT define intent
- Routes MUST NOT define intent

Reason:
- Intent is UX decision, not content decision

### Page Lifecycle Ownership (CRITICAL)

- CTA registry is initialized at the TEMPLATE level (not inside SmartCTA)
- Each template must wrap page content with a CTARegistryProvider
- No global registry is allowed

Example:

<CTARegistryProvider pageId={pageId}>
  <TemplateContent />
</CTARegistryProvider>

Rules:
- Registry resets per page render
- No global singleton allowed
- No registry inside SmartCTA
- SmartCTA only reads/writes to active registry

### CTA Intent Validation

Rules:
- `intent` must match the runtime enum.
- Invalid `intent` throws a development error.
- Missing `intent` throws a development error.

### SmartCTA Rendering Rule

Rules:
- CTA must register before rendering.
- If registration fails validation, `SmartCTA` does not render.
- Duplicate detection must happen before visual output.

Rules:
- Every `SmartCTA` render registers itself.
- `SmartCTA` does not render as an untracked CTA.
- Duplicate default `conversion` CTA on the same page throws a development warning or error.
- Duplicate CTA intent on the same page MUST throw a runtime error in development.

SmartCTA must HARD BLOCK render if:
- duplicate conversion CTA detected
- duplicate intent detected
- missing page identity
- missing intent or position

No soft warnings allowed.
- Missing `pageId`, `pageType`, `intent`, or `position` throws a development error.
- Templates decide page identity and allowed inline CTA intent. Routes do not.

### CTA Error Behavior

Development:
- Throw error and block render.

Production:
- Do not crash the page.
- Log the error.
- Skip rendering the invalid CTA.

### CTA Intent Source Contract

- CTA intent MUST be defined inline at the template level.
- Templates are the ONLY source of CTA intent truth.
- Intent MUST NOT come from data files.
- Intent MUST NOT come from config files.
- Intent MUST NOT come from props passed from routes.

Allowed pattern:

<SmartCTA
  intent="diagnostic"
  position="mid"
  ...
/>

Execution impact:
- `SmartCTA` gains required enforcement inputs.
- Templates and domain page adapters pass `pageId`, `pageType`, `intent`, and `position`.
- Existing CTA wrappers are removed after their call sites are migrated.

### Related Content Enforcement

Owners:
- `src/lib/related/buildRelatedContent.ts`
- `src/components/system/SmartRelatedSection.tsx`
- Active related-label runtime config migrated or retained under explicit ownership

Implementation direction:

```ts
buildRelatedContent({
  pageId,
  pageType,
  slug,
  nodeType,
  systems,
  industries,
  categorySlug,
})
```
### RelatedContentZone Enforcement

Rules:
- Only 1 SmartRelatedSection render is allowed per pageId.
- Multiple renders MUST throw a runtime error in development.

Implementation:
- Track renders per pageId (similar to CTA registry).
- Register on mount.
- Throw if already registered.

Goal:
- Prevent multiple related sections from being rendered across templates or nested layouts.

### RelatedContentZone Registry

- Same enforcement pattern as CTA registry
- Track render count per pageId

Rules:
- Only 1 SmartRelatedSection allowed per page
- Duplicate render MUST throw runtime error (dev)

Implementation:
- relatedRegistry scoped per pageId
- register on mount

### Related Content Builder Output Contract

```ts
type RelatedContentOutput = {
  groups: Array<{
    label: string
    items: Array<{
      title: string
      href: string
      description?: string
    }>
  }>
}
```

Rules:
- UI must render only from this structure.
- No transformation is allowed inside the component renderer.
- `SmartRelatedSection` renders the builder output directly.

### Related Content Builder Contract

Required inputs:
- `pageId`
- `pageType`

Optional inputs:
- `slug`
- `categorySlug`
- `nodeType`
- `systems`
- `industries`

Rules:
- Builder must work with only `pageId` and `pageType`.
- Additional inputs enhance relevance but are not required.
- No route should compute derived data for the builder.
- Builder owns fallback behavior when optional inputs are missing.

### Industry Builder Context

Allowed flags:
- `isIndustryPage: boolean`
- `includeCaseStudies: boolean`
- `includeServices: boolean`

Rules:
- No arbitrary flags are allowed.
- All industry flags must be declared in the builder contract.
- Industry behavior differences must resolve inside the builder, not in routes.

### Industry Flag Ownership

- Flags are set only inside templates or domain page adapters.
- Routes MUST NOT set flags.
- Builder reads flags but does not infer them.

Rules:
- Routes do not build related groups.
- Routes do not assemble related labels.
- Routes do not decide related ordering.
- Routes pass only minimal page context.
- `buildRelatedContent` owns labels, grouping, ordering, and page-type-specific differences.
- `SmartRelatedSection` becomes a renderer for the builder output, not the owner of grouping logic.
- Industries use the same builder and same `RelatedContentZone` contract as all other eligible page types.

Required end state:
- Remove all `buildRelatedBlocks` functions from routes.
- Move all route-level related grouping logic into `src/lib/related/buildRelatedContent.ts`.
- Move industry case-study and other related-group decisions into builder context flags, not route logic.

### Route-Level UI Composition Ban

Rule:
- In `src/app/**/page.tsx`, UI composition is forbidden.

Not allowed in routes:
- JSX composition of sections
- Related-content grouping logic
- CTA decisions
- FAQ renderer decisions
- Importing section components for page assembly
- Importing `RelatedContentSection` for page assembly
- Importing `SmartCTA` for page-level decision logic

Allowed in routes:
- Data fetching
- `notFound`, `redirect`, and metadata resolution
- Passing fetched and normalized props into a template or domain page adapter

Enforcement:
- Architecture rule in this document
- ESLint rule documented in `eslint.config.js` to block section-component imports from `src/app/**/page.tsx`
- Domain templates or domain page adapters own page composition after Phase 0

Clarification:

The following are also considered UI composition (and are forbidden):

- Calling helper functions that return JSX
- Mapping arrays into JSX blocks
- Conditional JSX rendering (ternaries or &&)
- Importing any function that returns JSX

Allowed:
- Passing raw data into templates
- Returning a single template or domain adapter

Any JSX logic beyond a single template call is a violation.

### ESLint Enforcement Rule

Target:
- `src/app/**/page.tsx`

Block imports:
- `src/components/**`
- `src/components/system/**`
- `src/components/reusable/**`

Allow:
- templates
- domain adapters
- data
- utils

Goal:
- Prevent UI composition in routes.

Required migration:
- Detail routes stop appending related-content and CTA sections themselves.
- SEO or structured-data UI that currently lives in routes moves into templates or template-owned props.

### ESLint Rule Definition (STRICT)

Target:
- src/app/**/page.tsx

Disallow:
- JSX usage
- Any function returning JSX
- map(() => JSX)
- conditional JSX
- all JSX in routes except the single template return

Allow ONLY:
- return <Template {...props} />
- return <DomainPageAdapter {...props} />

Fail build if:
- JSX appears outside template call
- section component imported
- any route returns JSX other than a single template or domain adapter element

### FAQ Enforcement

Owners:
- `src/components/reusable/single/FAQSection.tsx`
- `src/domains/industries/types.ts`
- `src/domains/case-studies/templates/CaseStudyTemplate.tsx`
- `src/domains/resources/templates/ResourcePageTemplate.tsx`
- Service and feature renderers already using `FAQSection`

Rules:
- `FAQSection` is the only FAQ renderer.
- All FAQ imports point to `FAQSection`.
- Industry FAQ types migrate away from `IndustryFAQSection`.
- Case-study FAQ mapping normalizes into `FAQSection` props.
- Resource FAQ mapping normalizes into `FAQSection` props.
- `FaqAccordionSection`, `IndustryFAQSection`, `ResourceFAQSection`, and `CaseStudyFAQSection` are removed after migration.

Required migration:
- Update industry domain types to use `FAQSection` prop contracts directly.
- Update resource and case-study template mappings to feed `FAQSection`.
- Remove alternate FAQ barrel exports after import migration is complete.

## Policy Layer Refactor

### `src/config/ui-intelligence.ts`

Actively used now:
- `RELATED_SECTION_LABELS`
- `CTA_CONFIG`
- `CLUSTER_PAGE_CONFIG`
- `CONTENT_TYPE_LABELS`

Required refactor:
- `RELATED_SECTION_LABELS` moves under explicit related-content runtime ownership and is consumed by `buildRelatedContent.ts`.
- `CLUSTER_PAGE_CONFIG` and `CONTENT_TYPE_LABELS` remain if cluster pages still depend on them.
- `CTA_CONFIG` leaves `ui-intelligence.ts` if CTA enforcement moves to the CTA registry and related dev analyzers. Keep it only if it remains the active runtime source. Otherwise remove it from this file after migration.
- Delete unused branches only after consumers are moved.

Forbidden action:
- Do not delete `ui-intelligence.ts` blindly.

### `src/config/section-intelligence.ts`

Actively used now:
- `SECTION_BEHAVIOR`

Not active as runtime dependencies now:
- `BLOG_SECTIONS`
- `RESOURCE_SECTIONS`
- `CASE_STUDY_SECTIONS`
- `SERVICE_SECTION_TYPES`
- `DOMAIN_REQUIRED_KEYS`
- `DOMAIN_TONE`

Required refactor:
- Keep `SECTION_BEHAVIOR` only if `SmartRelatedSection` and `GraphAwareSidebar` still need it after shared-system migration.
- Remove unused runtime branches from this file or move them into docs or validator-specific modules if they are still needed outside runtime.
- Do not keep documentation-only config inside an active runtime module.

Forbidden action:
- Do not keep unused config branches in runtime files.
- Do not delete `SECTION_BEHAVIOR` until its consumers are migrated or replaced.

### Policy File Safety Lock

Before deleting ANY config:

Required:
- Search full repo usage
- Confirm ZERO runtime imports
- Confirm devtools not using it
- Confirm full repo verification completed before removal

If unsure:
→ KEEP file
→ Move unused parts to /docs or /validators

NEVER delete blindly

## Shared System Decisions

### Related Content Zone

Rules:
- 1 rendered `RelatedContentZone` per page.
- Services render 1 group: related services.
- Features render 1 group: related services.
- Blog posts render up to 2 groups in one zone.
- Resources render up to 2 groups in one zone.
- Case studies render up to 2 groups in one zone.
- Industries render up to 2 groups in one zone under the same builder contract.
- `RelatedSectionCTA` is removed from the related-content stack.

Owners:
- `buildRelatedContent.ts` for grouping
- `SmartRelatedSection.tsx` for rendering

### CTA System

Rules:
- `SmartCTA` is the only CTA renderer.
- Default page CTA is `conversion` intent.
- Inline CTA must be non-`conversion` intent and must register through the CTA registry.
- Templates or domain page adapters decide allowed CTA placement; routes do not.
- CTA wrappers are migration targets and are removed after call-site migration.

Owners:
- `SmartCTA.tsx`
- `ctaRegistry.ts`
- Template-level page identity

### FAQ System

Rules:
- `FAQSection` is the only renderer.
- All FAQ aliases and wrappers are removed after migration.
- Domain type contracts are updated to point directly at `FAQSection`.

Owner:
- `FAQSection.tsx`

### Industries

Rules:
- Industries follow the same CTA, FAQ, and related-content contracts as other page types.
- No route-level related-content composition remains.
- No separate case-study rail remains outside `RelatedContentZone`.
- Industry-specific related behavior is handled by `buildRelatedContent.ts` through context flags, not route logic.

Owners:
- `buildRelatedContent.ts`
- Industry templates or domain page adapters

## Homepage Visual Correction

Current state:
- Homepage `system-capabilities` renders all tabs through one generic visual shell.
- Only the first tab currently presents a fully correct visual state.
- The remaining tabs exist in data but are not wired as distinct, meaning-specific visuals.

Required fix:
- Each tab must map to its own visual implementation keyed by tab id.
- Each visual must match the content meaning of that tab.
- Animated SVG is required.
- Lottie is not allowed.
- Visual ownership remains in `src/screens/Homepage.tsx` with data keyed from `src/domains/home/data/homepage.ts`.

### Homepage Visual Contract

Each tab MUST define:

{
  id: string
  visualId: string
}

Homepage.tsx:

const VISUAL_MAP = {
  "calls": CallsVisual,
  "leads": LeadsVisual,
  ...
}

Rules:
- No shared visual component
- No fallback visual
- Missing visual MUST throw error (dev)

### Homepage Visual Enforcement

- Each tab MUST have:
  - `id`
  - `visualId`
- `VISUAL_MAP` MUST include all `visualId` values.
- Missing visual MUST throw error in development.
- No fallback visual is allowed.

## Duplicate Removal Contract

No component deletion is allowed without all of the following:
- Usage audit completed
- `src/lib/devtools/componentScanner.ts` updated
- `src/utils/componentDocs.generated.ts` regenerated
- `src/screens/ComponentLibrary.tsx` updated if it depends on removed components or metadata
- Barrel exports updated
- Domain type imports updated

Primary duplicate targets:
- CTA wrappers
- FAQ wrappers and aliases
- `AutoRelatedContentCardsSection`
- `TierCardsSection`
- Feature and industry aliases that add no behavior
- Duplicate or redundant section variants

### Component Removal Workflow

Before deletion:
1. Run scanner.
2. Update usage map.
3. Regenerate docs.
4. Fix imports.
5. Then delete component.

Deletion without regeneration is forbidden.

## Execution Mode: Single Pass

Rules:
- Copilot executes Phase 0 through Phase 6 continuously.
- No manual stop exists between phases.
- No re-audit occurs mid-execution.
- Blocking exceptions are limited to:
  - compile/type/runtime failures that stop safe progress
  - direct repo conflicts that require user resolution
  - the post-execution visual QA pass

Completion rule:
- The main execution pass ends only after all non-visual phases are complete and docs are updated.

### Execution Integrity Rule

- After each phase:
  - TypeScript must pass
  - No temporary TODO allowed
  - No partial migration allowed

- Copilot MUST finish each phase completely before next

- If partial:
  → rollback OR fix immediately

### Phase Completion Rule

A phase is NOT complete unless:
- Code changes are complete.
- Docs are updated.
- Docs match runtime ownership.

Otherwise the phase is incomplete.

## Visual QA Mode (Post Execution)

Rules:
- Visual QA is a separate post-execution mode.
- 1 component or section at a time.
- Baseline screenshot, fix, rerun, then move to the next target.
- No bulk visual-fix passes.
- No multi-component redesign batches inside one visual QA step.

Primary surfaces:
- `tests/visual/components-library.spec.ts`
- `tests/visual/core-sections.visual.spec.ts`
- `scripts/analyzers/run-visual-audit.js`
- `scripts/analyzers/visual-audit-engine.js`
- `reports/visual-audit/`

### Visual QA Flow

Rules:
- Use ComponentLibrary as the source of truth.
- Validate a component in isolation first.
- Validate the same component or section in a real page second.
- A visual fix is not complete until both checks pass.

## Documentation Sync Rules

Rules:
- Every architecture change updates docs in the same execution pass.
- No code change is accepted without documentation alignment.
- No documentation assumption is accepted without repo verification.
- Planning docs and core system docs must stay aligned with runtime ownership.

Required doc surfaces:
- `Mindwp-Docs/core/CONTENT.md`
- `Mindwp-Docs/core/SYSTEM-STATE.md`
- `Mindwp-Docs/core/CONVERSION.md`
- `Mindwp-Docs/core/SYSTEM.md`
- `Mindwp-Docs/planning/Plan1-Structured-Audit.md`

Documentation checklist:
- CTA system updated in docs
- Related-content system updated in docs
- FAQ system updated in docs
- Ownership map updated in docs
- Policy-layer refactor reflected in docs

## Phase Order

### Phase 0 - Enforcement and Ownership Foundation

Goal:
- Make every shared rule enforceable before page cleanup begins.

#### Task 0.1 - Add page identity contract

Owning files:
- Domain templates and domain page adapters
- `src/app/*/[slug]/page.tsx` routes that pass template props

Execution:
- Add required `pageId` and `pageType` to all page-template contracts.
- Ensure routes pass these through without adding page-level UI logic.

#### Task 0.2 - Build CTA enforcement layer

Owning files:
- `src/components/system/SmartCTA.tsx`
- `src/lib/cta/ctaRegistry.ts`
- Templates and domain page adapters that call `SmartCTA`

Execution:
- Add CTA registry.
- Require `intent` and `position`.
- Enforce one default `conversion` CTA and one CTA per intent.

#### Task 0.3 - Build related-content enforcement layer

Owning files:
- `src/lib/related/buildRelatedContent.ts`
- `src/components/system/SmartRelatedSection.tsx`
- Detail routes currently building related groups

Execution:
- Introduce `buildRelatedContent.ts`.
- Remove route-level `buildRelatedBlocks` logic.
- Make `SmartRelatedSection` render builder output only.

#### Task 0.4 - Enforce route-level UI composition ban

Owning files:
- `eslint.config.js`
- `src/app/**/page.tsx`

Execution:
- Document the route rule.
- Add ESLint import restrictions for page routes.
- Move route-owned UI assembly into templates or domain page adapters.

#### Task 0.5 - Lock FAQ enforcement

Owning files:
- `src/components/reusable/single/FAQSection.tsx`
- `src/domains/industries/types.ts`
- `src/domains/resources/templates/ResourcePageTemplate.tsx`
- `src/domains/case-studies/templates/CaseStudyTemplate.tsx`

Execution:
- Normalize all FAQ contracts into `FAQSection`.

#### Task 0.6 - Refactor policy layers

Owning files:
- `src/config/ui-intelligence.ts`
- `src/config/section-intelligence.ts`
- Active consumers

Execution:
- Keep active runtime branches.
- Move or remove unused runtime branches.

Phase exit:
- Every shared rule has an owner and enforcement path.

### Phase 1 - Remove Duplicate CTA and FAQ Systems

Goal:
- Remove duplicate wrappers after the enforcement layer exists.

#### Task 1.1 - Remove CTA wrappers

Owning files:
- `src/components/reusable/sections/service/ServiceCTASection.tsx`
- `src/components/reusable/sections/features/FeatureCTASection.tsx`
- `src/components/reusable/sections/case-studies/CaseStudyCTASection.tsx`
- `src/components/reusable/sections/industries/IndustryCTASection.tsx`
- All call sites
- Barrel exports

Execution:
- Migrate call sites to `SmartCTA` with required enforcement props.
- Remove wrapper files and exports.

#### Task 1.2 - Remove FAQ wrappers and aliases

Owning files:
- `src/components/reusable/sections/core/FaqAccordionSection.tsx`
- `src/components/reusable/sections/industries/IndustryFAQSection.tsx`
- `src/components/reusable/sections/resources/ResourceFAQSection.tsx`
- `src/components/reusable/sections/case-studies/CaseStudyFAQSection.tsx`
- All call sites
- Barrel exports
- Domain type imports

Execution:
- Migrate every call site and type import to `FAQSection`.
- Remove duplicate files and exports.

Phase exit:
- CTA and FAQ rendering each have one implementation path only.

### Phase 2 - Centralize Related Content and Fix Industries

Goal:
- Move all related-content ownership into the shared builder and remove the industry exception.

#### Task 2.1 - Remove route-level related grouping from all detail routes

Owning files:
- `src/app/services/[...slug]/page.tsx`
- `src/app/features/[...slug]/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/app/resources/[slug]/page.tsx`
- `src/app/case-study/[slug]/page.tsx`
- `src/app/industries/[...slug]/page.tsx`

Execution:
- Delete all route-local related-group builders.
- Pass only minimal context into template or domain page adapter.

#### Task 2.2 - Move industry related logic into `buildRelatedContent.ts`

Owning files:
- `src/lib/related/buildRelatedContent.ts`
- `src/app/industries/[...slug]/page.tsx`
- `src/domains/industries/templates/IndustryDetailPageTemplate.tsx`
- `src/domains/industries/templates/IndustryCategoryPageTemplate.tsx`
- `src/lib/cta/industryPresentation.ts`

Execution:
- Remove route-level related-content assembly.
- Remove separate case-study rail logic.
- Handle industry-specific related rules through builder context only.

Phase exit:
- All related-content grouping is centralized.
- Industries follow the shared system.

### Phase 3 - Service Pages

Goal:
- Finish service-page copy and structure after shared contracts are stable.

Shared ownership note:
- Data changes live in `src/domains/services/data/*`.
- Layout changes live in `src/domains/services/renderers/*`.
- Routes stay pass-through only.

#### Task 3.1 - Smart Website Systems
- `src/domains/services/data/smart-website-systems.ts`
- `src/domains/services/renderers/SmartWebsiteSystemsRenderer.tsx`

Execution:
- Rewrite unclear copy into plain language.
- Expand thin descriptions.
- Add the missing included-item entry.
- Reframe the CRM FAQ answer around the default stack.
- Remove or justify inline CTA using the CTA intent system.

#### Task 3.2 - Local SEO / Local Authority
- `src/domains/services/data/local-seo-authority.ts`
- `src/domains/services/renderers/LocalSeoAuthorityRenderer.tsx`

Execution:
- Rewrite vague or repetitive copy.
- Make process and service language concrete.
- Rewrite weak CTA copy.

#### Task 3.3 - AI Lead Handling
- `src/domains/services/data/ai-lead-handling.ts`
- `src/domains/services/renderers/AiLeadHandlingRenderer.tsx`

Execution:
- Rewrite unclear opening line and use-case description.
- Add the missing included-item entry.
- Reframe the CRM FAQ answer around the default stack.

#### Task 3.4 - Reputation & Review Systems
- `src/domains/services/data/reputation-review-systems.ts`
- `src/domains/services/renderers/ReputationReviewSystemsRenderer.tsx`

Execution:
- Rewrite hard-to-read hero and positioning copy.
- Normalize section counts and list counts.

#### Task 3.5 - Missed Call Recovery System
- `src/domains/services/data/missed-call-recovery-system.ts`
- `src/domains/services/renderers/MissedCallRecoverySystemRenderer.tsx`

Execution:
- Tighten the short description item.
- Add the missing proof-card item.
- Remove or justify inline CTA using the CTA intent system.

#### Task 3.6 - Lead Reactivation System
- `src/domains/services/data/lead-reactivation-system.ts`
- `src/domains/services/renderers/LeadReactivationSystemRenderer.tsx`

Execution:
- Balance description lengths.
- Expand scenario details.
- Rewrite qualification and FAQ copy so it does not assume an existing CRM.

#### Task 3.7 - Conversion Layer
- `src/domains/services/data/conversion-layer.ts`
- `src/domains/services/renderers/ConversionLayerRenderer.tsx`

Execution:
- Balance after-state descriptions.
- Replace unclear `handoff` language.

#### Task 3.8 - Unified Communication System
- `src/domains/services/data/unified-communication-system.ts`
- `src/domains/services/renderers/UnifiedCommunicationSystemRenderer.tsx`

Execution:
- Keep the hero ending as `What happened before?`.
- Add the missing qualification item.
- Remove or justify inline CTA using the CTA intent system.

Phase exit:
- Service pages conform to CTA, FAQ, and related-content laws.

### Phase 4 - Homepage Alignment

Goal:
- Align homepage messaging, CTA usage, entry paths, and visuals.

#### Task 4.1 - Messaging and positioning
- `src/screens/Homepage.tsx`
- `src/domains/home/data/homepage.ts`
- `src/app/page.tsx`

Execution:
- Reframe the homepage around build-from-scratch and system setup first.
- Rewrite unclear headlines and descriptions.
- Remove filters that conflict with the target offer.

#### Task 4.2 - CTA enforcement on homepage
- `src/screens/Homepage.tsx`
- `src/components/system/SmartCTA.tsx`
- `src/lib/cta/ctaRegistry.ts`

Execution:
- Apply page identity and CTA intent rules.
- Remove redundant CTA instances.

#### Task 4.3 - Homepage visual correction
- `src/screens/Homepage.tsx`
- `src/domains/home/data/homepage.ts`
- `src/styles/components.css`

Execution:
- Replace the generic visual shell with explicit per-tab visual mapping.
- Use animated SVG only.
- Ensure every tab visual matches its content meaning.

Phase exit:
- Homepage is aligned with the shared system laws.

### Phase 5 - Landing Pages

Goal:
- Clean up landing pages after core systems, industries, services, and homepage are stable.

#### Task 5.1 - Services landing
- `src/domains/services/pages/index.tsx`

Execution:
- Replace manual groupings with an explicit tier-driven rule.
- Rewrite titles and descriptions.
- Keep the data source working.

#### Task 5.2 - Features landing
- `src/domains/features/pages/index.tsx`

Execution:
- Keep the registry-driven model.
- Remove the `xl:l-grid-4` behavior.
- Rewrite hero and CTA copy.

#### Task 5.3 - Industries landing
- `src/domains/industries/pages/index.tsx`

Execution:
- Keep the data source.
- Replace lane-heavy layout with a simple category grid.
- Remove the extra pre-footer CTA card section.

#### Task 5.4 - Case studies landing
- `src/domains/case-studies/pages/index.tsx`

Execution:
- Keep the auto-pull model.
- Rewrite the hero.
- Move to a stable 3-column grid.

#### Task 5.5 - Blog landing and category pages
- `src/domains/blog/ui/BlogLanding.tsx`
- `src/domains/blog/templates/BlogCategoryTemplate.tsx`
- `src/app/blog/category/[categorySlug]/page.tsx`

Execution:
- Keep the data-driven model.
- Remove redundant category badges inside category page cards.

#### Task 5.6 - Resources hub
- `src/domains/resources/pages/ResourcesHub.tsx`
- `src/domains/resources/pages/ResourcesGuidesIsland.tsx`
- `src/domains/resources/api.ts`
- `src/domains/resources/data/resources.ts`

Execution:
- Remove the `new` badge.
- Fix repeated date data.
- Move topic-card count badges into the icon area.
- Increase the initial resource count to 15.
- Remove extra CTA-zone behavior outside the CTA contract.

Phase exit:
- Landing pages remain data-driven and align with shared rules.

### Phase 6 - Component Cleanup and Redesign Prep

Goal:
- Clean up component duplication safely and prepare redesign work without breaking the component system.

#### Task 6.1 - Component library foundation
- `src/screens/ComponentLibrary.tsx`
- `src/lib/devtools/componentScanner.ts`
- `src/utils/componentDocs.generated.ts`
- `src/app/components/page.tsx`
- `tests/visual/components-library.spec.ts`
- `tests/visual/core-sections.visual.spec.ts`

Execution:
- Surface real usage counts.
- Replace hardcoded representative-page fallback logic.
- Keep scanner and generation as the source of truth.

#### Task 6.2 - Usage audit and removal map

Target groups:
- Duplicate wrappers
- Alias sections
- Low-value wrappers
- Tier/package/pathway overlap
- Process-step overlap

Execution:
- Record live usage.
- Mark merge, replacement, or deletion targets.
- Do not delete before scanner/docs/type updates are ready.

#### Task 6.3 - Merge duplicate variants

Primary targets:
- `FeatureChecklistCardsSection`
- `GenericCardsSection`
- `TierCardsSection`
- `ProcessStepsSection` and `StepCardsSplitSection` overlap

Execution:
- Remove redundant variants.
- Keep the smallest set of components that still matches live content needs.

#### Task 6.4 - Redesign prep only

Primary targets:
- `OperationalShiftCardsSection`
- `OutcomeTimelineSection`
- `ProcessStepsSection`
- `SignalResponseSection`
- `TestimonialSpotlightSplitSection`
- `TransformationProofSection`

Execution:
- Prepare redesign targets.
- Defer visual-by-visual execution to the post-execution visual QA mode.

Phase exit:
- Component ownership is simplified.
- Scanner/docs/preview system remain consistent.

## File-First Execution Map

### Enforcement foundation first
- `src/lib/cta/ctaRegistry.ts`
- `src/components/system/SmartCTA.tsx`
- `src/lib/related/buildRelatedContent.ts`
- `src/components/system/SmartRelatedSection.tsx`
- `src/components/system/RelatedContentSection.tsx`
- `src/components/reusable/single/FAQSection.tsx`
- `src/config/ui-intelligence.ts`
- `src/config/section-intelligence.ts`
- `eslint.config.js`

### Route migration next
- `src/app/services/[...slug]/page.tsx`
- `src/app/features/[...slug]/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/app/resources/[slug]/page.tsx`
- `src/app/case-study/[slug]/page.tsx`
- `src/app/industries/[...slug]/page.tsx`

### Duplicate removal after enforcement
- CTA wrapper files
- FAQ wrapper files
- Barrel exports under `src/components/reusable/sections/**`
- Domain type imports such as `src/domains/industries/types.ts`

### Industries before page cleanup
- `src/domains/industries/templates/IndustryDetailPageTemplate.tsx`
- `src/domains/industries/templates/IndustryCategoryPageTemplate.tsx`
- `src/lib/cta/industryPresentation.ts`

### Service pages after system lock
- `src/domains/services/data/*`
- `src/domains/services/renderers/*`

### Homepage before landings
- `src/screens/Homepage.tsx`
- `src/domains/home/data/homepage.ts`
- `src/app/page.tsx`

### Landing pages after homepage
- `src/domains/services/pages/index.tsx`
- `src/domains/features/pages/index.tsx`
- `src/domains/industries/pages/index.tsx`
- `src/domains/case-studies/pages/index.tsx`
- `src/domains/blog/ui/BlogLanding.tsx`
- `src/domains/blog/templates/BlogCategoryTemplate.tsx`
- `src/domains/resources/pages/ResourcesHub.tsx`
- `src/domains/resources/pages/ResourcesGuidesIsland.tsx`

### Component cleanup last in main pass
- `src/lib/devtools/componentScanner.ts`
- `src/utils/componentDocs.generated.ts`
- `src/screens/ComponentLibrary.tsx`
- `src/components/reusable/sections/core/*`
- `src/components/reusable/single/*`

## Execution Guardrails

- No route may build related-content groups.
- No route may decide CTA placement or CTA intent.
- No route may render FAQ variants.
- No component deletion proceeds without usage audit, scanner update, generated-doc regeneration, barrel export cleanup, and domain type import cleanup.
- No policy file is deleted blindly.
- No documentation change is accepted without repo verification.
- No landing-page rebuild replaces a working data source when copy or layout changes are sufficient.

## Execution Failure Handling

Rules:

- If a task causes TypeScript errors:
  → Fix immediately before continuing

- If a shared system breaks (CTA, Related, FAQ):
  → Stop and fix before moving to next phase

- If visual mismatch occurs:
  → Ignore (handled in Visual QA phase)

- If unclear ownership appears:
  → Default to template ownership (not route)

- If conflict between docs and code:
  → Code is source of truth → update docs immediately

- Execution must never skip broken states.
````md
# System Hard Reset Plan — MindWP

> Working plan for the full MindWP UI/data/render rebuild.
> This is a hard reset of the frontend UI layer, not a reset of the business/system layer.

---

## 0. Core Decision

- This is a hard reset.
- This is not a migration.
- This is not backward compatibility work.
- The old UI/component/CSS/data structure does not need to survive.
- The current app is not production-live, so temporary broken UI is acceptable.
- **The Homepage is the current working base.** It is the visual and structural reference for all new pages.
- Figma Make is the visual reference for pages not yet built. It is a guide, not a mandate.
- Do not chase Figma pixel-perfection. Build to the MindWP system and content rules.
- Do not reinterpret Figma design into generic cards or templates.
- Do not simplify custom sections into generic cards.
- Do not let old components, old CSS, old data shapes, or old validators pull the rebuild backward.
- We can ignore dev/ fully, so dont preserve any legacy or backward compatability due to these.
- we can ignore/delete component library and component system so dont preserve any legacy or backward compatability due to these.
- **Dependency direction:** shared types/primitives → used by pages; domain/page data → never imported by shared primitives.
- **Fallout is expected.** Old renderers and templates losing styling during rebuild is acceptable. Do not preserve old CSS for backward compat.
- **Component strategy:** sections stay custom and page-local until they are genuinely needed by a second page.
---

## 1. What Must Be Preserved

- Canonical routes.
- Page identity.
- Page types.
- Canonical system identifiers.
- CTA/contact generation.
- `buildContactHref()`.
- CTA registry behavior.
- `PrimaryCTASection` behavior or equivalent preserved behavior.
- SEO metadata ownership.
- Open Graph ownership.
- Content graph ownership.
- Related-content graph rules.
- Route ownership.
- System hierarchy rules.
- Content hierarchy rules.
- Writing rules.
- No hardcoded contact URLs.
- No inline styles.
- Token-based CSS discipline.
- Fail-loud validation philosophy.

---

## 2. What Can Be Replaced

- Old CSS architecture.
- Old legacy CSS.
- Old compatibility CSS.
- Old reusable section components.
- Old component-system previews.
- Old page renderers.
- Old data files.
- Old generic data shapes.
- Old section order contracts.
- Old validators that force old UI structure.
- Old tests that only protect removed UI structure.
- Old dev prototype routes.
- Old component library assumptions.
- Old naming that creates confusion.
- Any file that only exists for backward compatibility.

---

## 3. Hard Reset Rules

- No `_compat.css`.
- No `styles/_legacy`.
- No old CSS selectors unless intentionally reused.
- No compatibility aliases.
- No old section shells kept “just in case”.
- No old dev prototype preservation.
- No parallel old/new data models.
- No duplicate data blocks.
- No generic `items/cards/points/steps` unless the section is truly generic.
- No premature reusable section library.
- No Tailwind in production.
- No inline styles.
- No hardcoded CSS values outside token source files.
- No copied Figma architecture.
- No preserving old frontend because existing pages use it.
- Broken frontend during reset is acceptable.
- Cleanup must happen continuously, not only at the end.

---

## 4. Git Workflow

- Create branch: `ui-hard-reset`.
- Commit after every stable milestone.
- Keep commits small enough to rollback.
- Suggested commits:
  - `ui-hard-reset: css token foundation`
  - `ui-hard-reset: header footer shell`
  - `ui-hard-reset: homepage renderer data`
  - `ui-hard-reset: smart website renderer data`
  - `ui-hard-reset: local seo renderer data`
  - `ui-hard-reset: feature templates`
  - `ui-hard-reset: industry templates`
  - `ui-hard-reset: case resource blog templates`
  - `ui-hard-reset: remove legacy ui`
  - `ui-hard-reset: validators and tests`
  - `ui-hard-reset: final cleanup`

---

## 5. Workspace Model

- `Mindwp` = production/system repo.
- `Mindwp-Design` = Figma Make design reference.
- Do not import Figma project architecture.
- Do not copy Figma routing.
- Do not copy Figma app structure.
- Do not copy Tailwind as production strategy.
- Copy Figma layout, hierarchy, spacing, content, surfaces, and visual composition.
- Translate Figma Tailwind into semantic custom CSS.
- Compare implementation against Figma screenshots/PDFs section by section.

---

## 6. Width Rules

- Use 1440px as the page/frame reference width.
- Use around 1240px as main inner container width.
- Do not stretch readable content to 1440px.
- Suggested tokens:
  - `--mw-page-max: 1440px`
  - `--mw-container-max: 1240px`
  - `--mw-content-max: 760px`
  - `--mw-text-max: 640px`

---

## 7. CSS Architecture

Create/keep this structure:

```txt
src/styles/
  tokens.css
  reset.css
  typography.css
  layout.css
  primitives.css
  components.css
  pages/
    home.css
    smart-website.css
    local-seo.css
    features.css
    industries.css
    case-study.css
    resource.css
    blog.css
````

`index.css` should import only the new CSS stack.

Do not import `_compat.css`.

Do not import legacy CSS.

---

## 8. Token System

### 8.1 Token Namespace

* Use only `--mw-*` token namespace.
* Replace old flat tokens.
* Hardcoded raw values allowed only in `tokens.css`.

### 8.2 Token Layers

Raw tokens:

* colors
* spacing
* typography
* radius
* shadows
* gradients
* z-index
* motion
* widths

Semantic tokens:

* text primary
* text secondary
* muted text
* surface
* mist surface
* dark surface
* border light
* border dark
* signal active
* risk
* warning
* success

Pattern tokens:

* hero gradient
* CTA gradient
* section padding
* panel radius
* panel shadow
* dark panel surface
* signal glow
* container max
* page max

### 8.3 Token Rules

* Do not create one-off tokens for every section.
* Avoid tokens like `--home-hero-left-special-gap`.
* Prefer scale tokens:

  * `--mw-space-8`
  * `--mw-radius-panel`
  * `--mw-shadow-soft`
  * `--mw-gradient-hero`
  * `--mw-surface-mist`

---

## 9. Token Validator

* Keep token validator.
* Update it for new architecture.
* Scan all normal CSS files under `src/styles`.
* Allow raw values only inside `tokens.css`.
* Require `var(--mw-...)` in normal CSS.
* Keep valid exemptions:

  * `0`
  * `auto`
  * `inherit`
  * `currentColor`
  * `transparent`
  * `calc()`
  * `clamp()`
  * `min()`
  * `max()`
  * `color-mix()`
* Expand checks beyond spacing:

  * colors
  * backgrounds
  * borders
  * shadows
  * spacing
  * font sizes
  * radius
* Do not weaken validator to silence errors.
* Update validator only to match the new token system.

---

## 10. Component Strategy

### 10.1 Keep / Rebuild Shared Components

Keep or rebuild only true shared primitives:

* Header
* Footer
* Logo
* Button
* Badge / Eyebrow
* SectionShell
* Container
* FAQ
* PrimaryCTASection
* RelatedContentSection / RelatedRail
* ArticleShell
* CaseStudyShell

### 10.2 Do Not Keep Old Section Library

Delete or retire old reusable sections unless explicitly selected.

Candidates to retire:

* `GridCardsSection`
* `LayerStackSection`
* `ProcessStepsSection`
* `ScopeSection`
* `BeforeAfterSection`
* `HeroSplitSection`
* `ImageStorySection`
* `JourneyLeakMapSection`
* old homepage sections
* old feature sections
* old industry sections
* old resource sections
* old blog sections
* old single-card primitives
* old generic wrappers

### 10.3 Page-Specific Sections Stay Custom First

Do not prematurely extract these:

Homepage:

* `home-signal-surface`
* `home-business-leakage-map`
* `home-six-system-stack`
* `home-pressure-board`
* `home-implementation-board`

Smart Website:

* `sws-enquiry-leak-path`
* `sws-handoff-board`
* `sws-coverage-ledger`
* `sws-handled-path`
* `sws-build-workbench`

Local SEO:

* `lsa-local-presence-board`
* `lsa-authority-decision-board`
* `lsa-signal-audit`
* `lsa-coverage-map`
* `lsa-visibility-cycle`

Feature:

* `feature-response-surface`
* `feature-review-flow`
* `feature-boundary-board`

Industry:

* `industry-pathway-map`
* `industry-scenario-board`
* `industry-seasonal-board`

Case Study:

* `case-trial-board`
* `case-observed-timeline`
* `case-change-map`

Resource:

* `resource-framework-surface`
* `resource-page-blueprint`

Blog:

* `blog-call-window`
* `blog-situation-map`

Extract later only if a pattern proves reusable.

---

## 11. Header/Footer Plan

* Keep current production Header/Footer JSX logic if it protects nav, graph, CTA, and mobile behavior.
* Do not copy Figma Header/Footer architecture blindly.
* Restyle current Header/Footer to match Figma.
* Header visual match target: 95–99%.
* Footer visual match target: 95–99%.
* Footer must include all six systems:

  * Smart Website Systems
  * Local SEO Authority
  * AI Lead Handling
  * CRM & Automation
  * Reputation & Reviews
  * Revenue Growth
* Footer dark styling must match Figma direction.
* Header width must align with 1240px inner container.
* Header CTA remains `Start a Conversation`.

---

## 12. Data Strategy

### 12.1 General

* Rebuild data files fully where needed.
* Preserve strong old content only if it fits the new design and writing rules.
* Rewrite weak content freely.
* Do not keep old generic models beside new ones.
* Delete old data blocks once replaced.
* Use section-specific contracts.
* Data shape must describe section meaning.

### 12.2 Avoid Generic Shapes

Avoid:

* `items`
* `cards`
* `points`
* `steps`
* `features`

Unless the section is genuinely generic.

Prefer:

* `signals`
* `leakPoints`
* `handoffs`
* `coverageAreas`
* `pressurePoints`
* `scenarioRows`
* `proofStory`
* `implementationPatterns`
* `visibilitySignals`
* `cycleStages`

---

## 13. Homepage Data Contract

Create data shapes such as:

* `hero.signals`
* `businessLeakage.path`
* `businessLeakage.leakPoints`
* `foundation.surface`
* `foundation.underneath`
* `systemStack.stages`
* `putInPlace.zones`
* `fit.strongFit`
* `fit.notFit`
* `clientShift.before`
* `clientShift.after`
* `pressurePoints.points`
* `structureLayers.layers`
* `industries.scenarios`
* `alignment.stages`
* `proofStory`
* `implementationExamples.patterns`
* `faq.items`
* `cta.expectations`

---

## 14. Smart Website Data Contract

Create data shapes such as:

* `hero.feedRows`
* `leakPath.stages`
* `leakPath.primaryIncident`
* `siteContrast.left`
* `siteContrast.right`
* `handoffBoard.source`
* `handoffBoard.receivers`
* `coverageLedger.areas`
* `environmentScenarios`
* `handledPath.stages`
* `proofStory`
* `compoundingSignals.liveSignal`
* `compoundingSignals.effects`
* `buildWorkbench.inputs`
* `buildWorkbench.work`
* `buildWorkbench.workingState`
* `fitFilter`
* `faq.items`
* `cta.expectations`
* `relatedSystems`

---

## 15. Local SEO Data Contract

Create data shapes such as:

* `hero.localSignals`
* `authorityDecisionBoard.criteria`
* `visibilitySignalAudit.families`
* `structuredComparison.left`
* `structuredComparison.right`
* `assumptions.items`
* `coverageMap.areas`
* `visibilityCycle.stages`
* `proofStory`
* `fitFilter`
* `faq.items`
* `cta.expectations`
* `relatedSystems`

---

## 16. Feature Data Contracts

AI Lead Handling feature:

* `hero.chatPreview`
* `failureMoments`
* `handledQuestions`
* `handoffBoundary`
* `systemFit`
* `useCases`
* `coverage`
* `fitFilter`
* `faq`
* `cta`
* `relatedSystems`

Reputation feature:

* `hero.proofTimeline`
* `missedProofMoment`
* `requestFlow`
* `feedbackBoundary`
* `visibilitySupport`
* `useCases`
* `coverage`
* `fitFilter`
* `faq`
* `cta`
* `relatedSystems`

---

## 17. Industry Data Contracts

Industry category:

* `hero.leakPanel`
* `sharedOperatingPattern`
* `industryPathways`
* `commonBreakPoints`
* `systemsByBusinessType`
* `industryRoutes`
* `proofStrip`
* `faq`
* `cta`

Industry detail:

* `hero.enquiryBoard`
* `seasonalLeakPattern`
* `quoteBeforeAfter`
* `whatGetsPutInPlace`
* `startingPoints`
* `workflowExamples`
* `relevantSystems`
* `proofScenario`
* `faq`
* `cta`

---

## 18. Case Study Data Contract

Case study detail:

* `hero.trialBoard`
* `messyReality`
* `whatChanged`
* `conversationPath`
* `workingDifferently`
* `constraints`
* `systemsInvolved`
* `cta`
* `related`

Case study rules:

* no fake metrics
* no polished hype
* observed proof only
* show messy reality
* show structural change
* show what became easier to see or handle

---

## 19. Resource Data Contract

Resource post:

* `hero.frameworkSurface`
* `decisionQuestions`
* `systemFit`
* `qualityThreshold`
* `pageAnatomy`
* `scalabilityChallenge`
* `measurementSignals`
* `keyTakeaways`
* `relatedResources`
* `softCta`

Resource rules:

* framework / decision support
* not a sales page
* useful structure
* soft routing only

---

## 20. Blog Data Contract

Blog post:

* `hero.callSurface`
* `situationOpening`
* `callWindow`
* `compoundingLoss`
* `callerBehaviour`
* `betterHandling`
* `keyTakeaways`
* `relatedSystems`
* `softCta`

Blog rules:

* problem recognition
* not service-page behavior
* not hard sell
* open with real situation
* diagnose before routing

---

## 21. Renderer Strategy

* Rebuild renderers fully.
* Renderer owns page composition.
* Data owns content.
* CSS owns visuals.
* Shared primitives only where stable.
* Do not import old reusable section library.
* Do not maintain old renderers in parallel.
* Delete old renderer once new one works.
* No hidden fallback to old sections.
* No `sectionsAny` casts.
* No silent empty section drops.
* Invalid critical data should throw.

---

## 22. CSS Page Files

Create page CSS files:

* `home.css`
* `smart-website.css`
* `local-seo.css`
* `features.css`
* `industries.css`
* `case-study.css`
* `resource.css`
* `blog.css`

Rules:

* page CSS can be large if needed
* semantic BEM class names
* no hardcoded values outside tokens
* no Tailwind classes
* no inline styles
* match Figma 99%
* cleanup old selectors as new pages are rebuilt

---

## 23. Validator Strategy

### Keep System Validators

Keep and protect:

* CTA validators
* CTA label validators
* contact URL validators
* route ownership validators
* SEO validators
* graph validators
* inline-style validator
* hardcoded contact URL validator
* content enforcement validator
* build safety validators

### Update UI Validators

Update validators that enforce old UI assumptions:

* token validator
* render alignment validator
* section order consistency validator
* section structure validator
* section shell integrity validator
* design system validator
* component system validators
* dev preview validators

### Validator Rule

* Validators should protect system truth.
* Validators should not force old frontend structure.
* Delete or rewrite validators that only protect removed UI architecture.
* Do not weaken validators that protect business/system contracts.

---

## 24. Test Strategy

* Expect tests to fail during hard reset.
* Do not fix old tests just to preserve old UI.
* Delete or rewrite tests tied to removed components.
* Keep tests that protect:

  * CTA/contact behavior
  * route ownership
  * metadata
  * graph rules
  * canonical systems
  * page type identity
* Add new tests after new renderers/data stabilize.
* Final tests should validate new system, not old compatibility.

---

## 25. Dev Routes / Prototype Routes

* Remove old dev routes that force old component system.
* Remove `/dev/sws-visual-prototype` if it exists only for old design.
* Remove or rebuild `/dev/component-system`.
* Do not let dev routes block hard reset.
* If dev preview is needed, rebuild later for new system.

---

## 26. Cleanup Strategy

Cleanup happens continuously.

After each milestone:

* remove replaced files
* remove dead exports
* remove dead imports
* remove old CSS selectors
* remove duplicate data blocks
* remove compatibility aliases
* remove old components no longer referenced
* commit changes

Do not defer all cleanup to the end.

---

## 27. Implementation Milestones

### Milestone 1 — Branch + CSS Foundation

* Create `ui-hard-reset` branch.
* Create new token system.
* Create CSS foundation:

  * `tokens.css`
  * `reset.css`
  * `typography.css`
  * `layout.css`
  * `primitives.css`
  * `components.css`
* Remove `_compat.css` import.
* Remove old legacy CSS imports.
* Update token validator.
* Delete compatibility aliases.
* Delete old section shells from CSS.
* Commit.

### Milestone 2 — Header/Footer

* Keep production Header/Footer JSX logic if useful.
* Restyle Header/Footer to match Figma.
* Update nav labels.
* Update footer service list to six systems.
* Remove old footer/header CSS leftovers.
* Validate CTA/nav behavior.
* Commit.

### Milestone 3 — Homepage

* Rebuild homepage data contract.
* Rebuild homepage renderer.
* Create `home.css`.
* Copy Figma homepage section-by-section.
* Match Figma 99%.
* Delete old homepage components/data.
* Remove old imports.
* Run validation/build.
* Commit.

### Milestone 4 — Smart Website Systems

* Rebuild SWS data contract.
* Rebuild SWS renderer.
* Create `smart-website.css`.
* Match Figma SWS 99%.
* Preserve CTA/contact/SEO/page identity.
* Delete old SWS data/sections.
* Commit.

### Milestone 5 — Local SEO Authority

* Rebuild LSA data contract.
* Rebuild LSA renderer.
* Create `local-seo.css`.
* Match Figma LSA 99%.
* Preserve Local SEO system ownership.
* Delete old LSA data/sections.
* Commit.

### Milestone 6 — Feature Pages

* Rebuild AI Lead Handling feature page.
* Rebuild Reputation feature page.
* Create/update `features.css`.
* Rebuild feature data contracts.
* Remove old feature renderer patterns.
* Commit.

### Milestone 7 — Industry Pages

* Rebuild industry category template.
* Rebuild landscaping industry detail page.
* Create/update `industries.css`.
* Rebuild industry data contracts.
* Remove old industry template assumptions.
* Commit.

### Milestone 8 — Case Study Template

* Rebuild case study template.
* Rebuild fitness case study data.
* Create/update `case-study.css`.
* Remove fake metrics.
* Preserve proof behavior.
* Commit.

### Milestone 9 — Resource Template

* Rebuild resource page template.
* Rebuild Local Service Page Architecture resource data.
* Create/update `resource.css`.
* Preserve entry/resource behavior.
* Commit.

### Milestone 10 — Blog Template

* Rebuild blog post template.
* Rebuild HVAC missed calls blog data.
* Create/update `blog.css`.
* Preserve blog/problem-recognition behavior.
* Commit.

### Milestone 11 — System Cleanup

* Delete old reusable components.
* Delete old section components.
* Delete old primitives.
* Delete old dev routes.
* Delete old CSS files.
* Delete old data blocks.
* Delete stale exports.
* Remove compatibility aliases.
* Commit.

### Milestone 12 — Validator/Test Rewrite

* Update render alignment validators.
* Update section structure validators.
* Update design-system validators.
* Update resource/industry validators.
* Remove validators tied only to old UI.
* Rewrite tests for new contracts.
* Keep CTA/SEO/graph/route tests.
* Commit.

### Milestone 13 — Final QA

* Compare each page to Figma.
* Desktop visual QA first.
* Mobile/responsive QA after desktop is close.
* Validate all pages render.
* Run `system:full`.
* Run build.
* Fix remaining issues.
* Commit final.

---

## 28. Page Build Order

1. Header/Footer
2. Homepage
3. Smart Website Systems
4. Local SEO Authority
5. AI Lead Handling feature
6. Reputation feature
7. Industry category
8. Landscaping industry detail
9. Fitness case study
10. Resource post
11. Blog post
12. Remaining services/features
13. Remaining industries
14. Remaining resources/blogs/case studies

---

## 29. Visual QA Rules

For every page:

* open Figma design
* open localhost page
* compare section by section
* compare spacing
* compare typography
* compare widths
* compare dark surfaces
* compare signal panels
* compare CTA
* compare footer
* fix until close
* do not accept generic substitutions

Target:

* 99% match for approved Figma sections
* 95% minimum where production system logic requires small differences

---

## 30. Copy Rules During Rebuild

* Preserve strong Figma copy.
* Rewrite weak old copy.
* Follow FLOW → HANDLING → RESULT.
* Avoid PAGES → DESIGN → FEATURES.
* Avoid SaaS words.
* Avoid agency words.
* Avoid hype.
* No fake metrics.
* No guarantee language.
* Keep CTAs conversational.
* Keep system boundaries distinct.

---

## 31. Final Definition of Done

The hard reset is done when:

* no legacy CSS is imported
* no `_compat.css`
* no `styles/_legacy`
* no old reusable section library used by rebuilt pages
* no compatibility aliases
* no old/new data models duplicated
* all main pages match Figma direction
* homepage represents full MindWP business
* SWS stays focused on website/enquiry capture
* LSA stays focused on local visibility/authority
* feature/industry/case/resource/blog templates are redesigned
* validators protect new system
* tests align with new contracts
* build passes
* system validation passes
* old UI files are deleted or clearly isolated for later deletion

---

## 32. Non-Negotiable Principle

Frontend can break during reset.

Architecture cannot drift.

Design must follow Figma.

Data must follow section meaning.

CSS must follow tokens.

Validators must protect the new system, not the old UI.

```
---

## MILESTONE 1 — CSS Foundation Cleanup: COMPLETE

**Date:** 2026-05-07
**Branch:** ui-hard-reset
**Commit:** e1a1651

### Audit Summary

**Branch at start:** `redesign/smart-website-prototype` with uncommitted CSS foundation work.
Switched to new `ui-hard-reset` branch carrying all uncommitted changes.

**CSS entry point (src/index.css):**
Clean. Imports 6-layer new stack only (tokens → reset → typography → layout → primitives → components). No legacy imports.

**CSS files in src/styles/ at audit:**

| File | Status |
|---|---|
| tokens.css | NEW — master token source, raw values allowed |
| reset.css | NEW — browser normalisation via var(--mw-*) |
| typography.css | NEW — type scale utility classes |
| layout.css | NEW — containers, grids, section rhythm |
| primitives.css | UPDATED — UI atoms, all var(--mw-*) |
| components.css | UPDATED — component shells, all var(--mw-*) |
| foundation.css | ORPHAN — not imported by new index.css → DELETED |
| framework.css | ORPHAN — not imported by new index.css → DELETED |
| sws-visual-prototype.css | ORPHAN — dev route deleted → DELETED |
| _legacy/ | ISOLATED — not imported by new stack, skipped by validator. Kept: old pages still use l-section, l-container, btn-primary classes. Expected fallout. |

**CSS compatibility traces (Step 3):**

A. Active runtime refs in old components/screens (expected hard-reset fallout, not fixed in this milestone):
- `l-section`, `l-container` — Homepage.tsx, ResourcePageTemplate.tsx, BlogPostTemplate.tsx, Contact.tsx, ComponentLibrary.tsx, several app pages. Defined only in `_legacy/components.legacy.css`.
- `btn-primary`, `btn-outline` — Contact.tsx, RetryButtonIsland.tsx, ErrorBoundary.tsx. Defined only in `_legacy/components.legacy.css`.

B. CSS-only dead selectors (in new primitives.css, confirmed correct):
- `rd-dot--good`, `rd-dot--risk`, `rd-dot--warn`, `rd-dot--info` — defined in new primitives.css. Used by SmartWebsiteSystemsRenderer.tsx, LocalSeoAuthorityRenderer.tsx. OK.

C. Animation classes (rd-animate-fade, is-visible):
- Were in orphaned framework.css. RevealMotion.tsx comment references it.
- layout.css has `.rd-animate-section` keyframe shell but not the full is-visible/data-js-motion pattern.
- Expected fallout. RevealMotion animations non-functional until layout.css extended.

D. Validator references cleaned:
- validate-tokens.mjs SKIP_FILES: removed foundation.css, framework.css, sws-visual-prototype.css (all deleted).

**Dev routes (Step 4):**

| Route | Status |
|---|---|
| /dev/sws-visual-prototype | DELETED — route files removed, CSS deleted |
| /dev/component-system | KEPT — still present, no old-only CSS imports |
| /dev/cta-label-contract | KEPT — referenced by validators |
| /dev/authority-dashboard | KEPT — active |
| /dev/system-dashboard | KEPT — active, referenced in route-inventory test |

**Component gravity (Step 5):**

| Folder | Status |
|---|---|
| src/components/reusable/ | EXISTS — contains IconBenefitCard using btn-primary/btn-outline. Scheduled for rebuild. Not deleted this milestone. |
| src/components/sections/ | EXISTS — PrimaryCTASection, RelatedContentSection, SectionShell, others. Must stay for now. |
| src/components/routing/ | ACTIVE |
| src/components/system/ | ACTIVE — RetryButtonIsland uses btn-primary |
| src/components/ui/ | ACTIVE |

### Files Changed

- `src/index.css` — updated to 6-layer import stack
- `src/styles/tokens.css` — created
- `src/styles/reset.css` — created
- `src/styles/typography.css` — created
- `src/styles/layout.css` — created
- `src/styles/primitives.css` — replaced
- `src/styles/components.css` — replaced
- `scripts/validators/validate-tokens.mjs` — updated SKIP_FILES
- `src/app/dev/component-system/page.tsx` — lint fixed

### Files Deleted

- `src/styles/foundation.css` — orphaned old CSS
- `src/styles/framework.css` — orphaned old CSS
- `src/styles/sws-visual-prototype.css` — orphaned prototype CSS
- `src/app/dev/sws-visual-prototype/layout.tsx` — dead dev route
- `src/app/dev/sws-visual-prototype/page.tsx` — dead dev route

### Checks

- Token validator: **✓ 5 files scanned, clean**
- system:full: **56/56, 0 warnings**
- npx next build: **clean, zero errors**

### Expected Remaining Fallout

- Old screens (Homepage.tsx, Contact.tsx, ResourcePageTemplate.tsx, BlogPostTemplate.tsx) still use `l-section`, `l-container`, `btn-primary`, `btn-outline` — only defined in `_legacy/`. These will lose styling once `_legacy/` is deleted. Scheduled for rebuild in later milestones.
- RevealMotion animations (`rd-animate-fade`, `is-visible`) were in orphaned framework.css — non-functional now. layout.css needs extension when motion system is rebuilt.
- `src/components/reusable/` uses `btn-primary`/`btn-outline` — scheduled for rebuild.

### Next Milestone Candidates

- Header/Footer rebuild (new primitives, no legacy classes)
- Homepage rebuild (remove l-section/l-container gravity)
- RevealMotion animation system in layout.css
- _legacy/ deletion once all consumers migrated

---

## Milestone 2 — Completion Report

> Committed: `1dcaaef` | Branch: `ui-hard-reset`

### Scope

Header/Footer + Layout/Motion Foundation rebuild. Full audit of production Header/Footer against Figma Make design, then restyled to match. RevealMotion motion system restored (was broken after framework.css deletion in Milestone 1).

### Figma Audit Findings

**Header (Figma Make):**
- White/85 glass backdrop, `max-w-[1240px]`, `h-[76px]`
- Nav at 13.5px/500 weight
- CTA: "Start a Conversation" pill button with cyan dot (`bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]`)

**Footer (Figma Make):**
- Background `#061323` (matches `--mw-bg-dark-deep` token)
- 12-col grid: brand col-span-5, 3 link columns each col-span-2
- Services column has all 6 canonical systems
- Bottom bar: copyright + "Connected systems for service businesses." + cyan dot + "All systems operational"

### Files Changed

- `src/global/Header.tsx` — CTA dot indicator (`rd-btn__dot`) added to desktop CTA button
- `src/global/HeaderMobileMenuIsland.tsx` — CTA dot added to mobile CTA button
- `src/global/Footer.tsx` — Services column replaced with all 6 canonical systems at `/systems/` routes; heading renamed "Systems"; footer bottom updated with status indicator
- `src/global/RevealMotion.tsx` — stale comment updated (framework.css → layout.css)
- `src/styles/primitives.css` — `.rd-btn__dot` rule added
- `src/styles/components.css` — `.footer__status` + `.footer__status-dot` rules added
- `src/styles/layout.css` — full RevealMotion `data-js-motion` + `is-visible` system added (replaces broken framework.css system)

### Tokens Used (no new tokens added)

Existing tokens used for new rules:
- `--mw-signal-cyan` / `--mw-glow-cyan` — cyan dot and status dot
- `--mw-space-1-5` — gap in status span
- `--mw-radius-pill` — dot border radius
- `--mw-text-body-sm` / `--mw-text-on-dark-muted` — status text
- `--mw-dur-slow` / `--mw-ease-out` — motion transitions

### Header Changes

- Desktop and mobile CTA button now has `<span class="rd-btn__dot">` — a 6px cyan dot with glow, positioned before or after the label text
- No structural changes to nav or logo

### Footer Changes

- "Services" column renamed to "Systems"
- All 6 canonical systems listed with correct `/systems/[slug]` routes:
  - Smart Website Systems, Local SEO Authority, AI Lead Handling, CRM & Automation, Reputation & Reviews, Revenue Growth
- Footer bottom bar: `footer__copyright` now reads "© {year} MindWP. Connected systems for service businesses."
- New `footer__status` span with pulsing cyan dot and "All systems operational" text
- Utility links (Privacy, Terms, Cookies, Sitemap) retained — required for real site, absent from Figma prototype

### Motion / Layout Changes

- `layout.css`: complete `data-js-motion` + `is-visible` RevealMotion system added
  - Pre-states for: `rd-animate-fade`, `rd-animate-up`, `rd-animate-panel`, `rd-animate-section`, `rd-animate-list`, `rd-animate-stagger`, `rd-animate-line`
  - Visible states with `var(--mw-dur-slow)` / `var(--mw-ease-out)` transitions
  - Stagger delays for 8 children (0ms → 420ms in 60ms steps)
  - `prefers-reduced-motion` override: force-reveal all animated elements
- Fixes the broken RevealMotion island (was looking for CSS in deleted framework.css)

### Legacy Gravity Search Results

- `header__` / `footer__` BEM classes outside global/: **none found**
- `btn-primary` / `btn-outline` in global/: **none found**
- `framework.css` / `foundation.css` references in global/: **none found** (only stale comment in RevealMotion.tsx — fixed)

### Checks

- Token validator: **✓ 5 files scanned, clean**
- system:full: **56/56, 0 warnings**
- npx next build: **clean, zero errors**

### Expected Remaining Fallout

- Old screens (Homepage.tsx, Contact.tsx, ResourcePageTemplate.tsx, BlogPostTemplate.tsx) still use `l-section`, `l-container`, `btn-primary`, `btn-outline` — only defined in `_legacy/`. These will lose styling once `_legacy/` is deleted. Scheduled for rebuild in later milestones.
- `src/components/reusable/single/IconBenefitCard.tsx` uses `btn-primary`/`btn-outline`.
- `src/components/system/RetryButtonIsland.tsx` uses `btn btn-primary`.
- `_legacy/` folder kept — 6 `.legacy.css` files not yet deleted. Will be removed once all consumers are rebuilt.

### Next Milestone Candidates

- Homepage rebuild (remove l-section/l-container gravity, implement new page component structure)
- Smart Website service page rebuild
- `_legacy/` deletion once all consumers migrated

---

## Milestone 3 — Completion Report

> Committed: `6b10018` + `ac75eeb` | Branch: `ui-hard-reset`

### Scope

Full Homepage rebuild: server renderer, homepage data contract, page CSS, plus visual rebuild pass (radial glow bg shapes, hero visual, CTA).

### Files Changed

- `src/screens/Homepage.tsx` — full rebuild. 15 custom page-local sections. No `l-section`, `l-container`, `btn-primary`. Token-based CSS only.
- `src/domains/home/data/homepage.ts` — new typed data contract. `HomepageData` type. Singleton `homepageData` export.
- `src/styles/pages/home.css` — ~2600 lines. All homepage BEM classes. Token-compliant (0 violations). Hero and CTA have `::before`/`::after` radial glow shapes.

### Section Order (15 custom sections, all page-local)

HeroSection → LeakDiagnosisSection → FoundationSection → SystemStackSection → PutInPlaceSection → FitFoundationsSection → ClientShiftSection → PressurePointsSection → StructureLayersSection → IndustriesSection → AlignmentSection → ProofStorySection → ImplementationExamplesSection → FAQSection → CTASection

### Checks

- Token validator: clean
- system:full: 56/56, 0 warnings
- npx next build: clean, zero errors

---

## Milestone 3A — Completion Report (Hardening Pass 1)

> Committed: `7515dae` | Branch: `ui-hard-reset`

### Scope

Homepage system hardening: icon map typed with `HomeIconKey`, reveal motion wired on all 14 non-hero sections, field renames for semantic clarity, copy fixes, `SignalDot` and `StatusBadge` primitives added.

### Files Changed

- `src/domains/home/data/homepage.ts` — `HomeIconKey` union type; `iconKey` on all 9 data arrays; `flowStages` (was `path`); `zones` (was `steps`); `implementationPatterns` (was `patterns`); copy fixes.
- `src/screens/Homepage.tsx` — `HOME_ICON_MAP: Record<HomeIconKey, LucideIcon>`; `rd-animate-*` classes wired on all 14 non-hero sections; field name usage updated.
- `src/components/primitives/SignalDot.tsx` — created.
- `src/components/primitives/StatusBadge.tsx` — created.
- `src/styles/primitives.css` — `.rd-signal-dot` and `.rd-status-badge` added.

### Checks

- system:full: 56/56, 0 warnings
- npx next build: clean, zero errors

---

## Milestone 3B — Completion Report (Base System Hardening)

> Branch: `ui-hard-reset`

### Scope

Architecture and dependency cleanup: shared UI type extraction, dead CSS removal, dot size tokenisation, index.css comment update, doc section-0 strategy correction.

### Files Changed

- `src/types/ui.ts` — created. `AccentKey` and `StatusTone` defined here as shared UI types. Correct dependency root.
- `src/domains/home/data/homepage.ts` — removed local `AccentKey` definition; now imports from `@/types/ui` and re-exports.
- `src/components/primitives/SignalDot.tsx` — import fixed: `AccentKey` from `@/types/ui` (was `@/domains/home/data/homepage`).
- `src/components/primitives/StatusBadge.tsx` — import fixed: `AccentKey` + `StatusTone` from `@/types/ui`; local `StatusVariant` alias removed.
- `src/styles/primitives.css` — dead `.rd-badge` family and `.mw-status-badge` removed; `.rd-dot` raw rem sizes replaced with `--mw-space-*` tokens; "Legacy aliases" comment updated to "Expected fallout — delete when SWS/LSA renderers are rebuilt".
- `src/index.css` — layer-6 comment corrected (removed "grid-cards" stale reference).
- `docs/Planning/System-hard-reset.md` — Section 0 updated: Homepage is working base, Figma is guide not mandate, dependency direction rule added, fallout rule added, component strategy rule added. Milestone 3/3A/3B reports added.

### Dependency Direction Rule (established this milestone)

```
src/types/ui        → imported by: primitives, domain data
domain/page data    → imported by: renderers (screens/)
renderers           → never import from: other renderers or other domain data
```

Shared primitives (`src/components/primitives/`) must never import from `src/domains/*/`.

### Checks

- system:full: 56/56, 0 warnings (expected)
- npx next build: clean

### Expected Remaining Fallout

- `.rd-dot--good/risk/warn/info` still in primitives.css — used by SWS + LSA old renderers. Delete when those renderers are rebuilt.
- `.bg-gradient-base/blue/compare` still in layout.css — used by `SectionShell` → `RelatedContentSection`, `CriteriaComparisonSection`, `BeforeAfterSection`. Delete when those old section components are rebuilt.
- `l-section`, `l-container`, `btn-primary`, `btn-outline` still in `_legacy/` — used by old page templates and screens scheduled for rebuild.
- `hero-split`, `grid-cards` in components.css — used by `HeroSplitSection.tsx`, `GridCardsSection.tsx` (old section components, still referenced by SWS/LSA renderers and dev routes).

### Next Milestone Candidates

- Smart Website Systems renderer rebuild (Milestone 4)
- Local SEO Authority renderer rebuild (Milestone 5)
- `_legacy/` deletion (unblocked once SWS/LSA renderers no longer need it)


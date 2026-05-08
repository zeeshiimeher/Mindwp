# MindWP System Hard Reset — Operating Manual

> Source of truth for the MindWP frontend hard reset.
> This is a hard reset of the UI/data/render layer, not a reset of the business/system layer.
> For the compressed milestone history and open follow-ups, see the bottom of this file.

---

# READ THIS FIRST — Active Build Rules

Before building or editing any new page:

1. Read this document first.
2. Do not create one CSS file per content page.
3. Use the approved CSS ownership model:
   - Homepage: `src/styles/pages/home.css`
   - Flagship service pages: `src/styles/services/[service].css`
   - Shared service styles: `src/styles/services/services-base.css`
   - Feature pages: `src/styles/features/features-base.css`
   - Industry pages: `src/styles/industries/category.css` and `src/styles/industries/detail.css`
   - Case studies: `src/styles/case-studies/case-study.css`
   - Resources: `src/styles/resources/resources.css`
   - Blog: `src/styles/blog/blog.css`
4. Do not add new components to:
   - `src/components/reusable` — old system, quarantined
   - `src/components/sections` — old system, quarantined
5. New reusable components must go into one of:
   - `src/components/layout` — section framing
   - `src/components/primitives` — behavior/accessibility primitives
   - `src/components/conversion` — final conversion panels
   - `src/components/navigation` — related, nav helpers
   - `src/components/content` — full reusable content sections (e.g. FAQSection)
6. Do not create page-named reusable behavior components.
   - Bad: `SWSFaqAccordion`, `SWSCoverageTabs`
   - Good: `Accordion`, `Tabs`, `FAQSection`
7. Use the current base components. Do not invent new framing from scratch:
   - `SectionFrame` — normal section shell (owns `<section>`, `mw-container`, heading block)
   - `HeroFrame` — hero section shell (owns hero `<section>`, split layout, actions, chips, visual slot)
   - `DecisionPanel` — final conversion section (owns actions, reassurance, expectations)
   - `FAQSection` — full FAQ section (wraps SectionFrame + Accordion); use for new pages
   - `Accordion` — disclosure/FAQ primitive only; no section framing
   - `Tabs` — tab primitive only; generic API
   - `RelatedSection` — global related-content section; injected by config wrappers
   - `InlineText` — renders `[[muted:...]]` markers; inline use only
8. Do not use `titleMuted` or `headingMuted` props. Use `[[muted:...]]` inside title strings instead.
9. Related sections are global and wrapper/config-owned. Page renderers must NOT render their own related sections.
10. Do not use old `.rd-*` classes for new work.
11. Do not use raw hex or `rgba()` outside `tokens.css`.
12. Do not invent token names. Confirm the token exists in `tokens.css` first.
13. Do not use old section components or old reusable components in rebuilt/new files.
14. Do not create slug exception lists for related sections.
15. The final conversion section is `DecisionPanel`, not `CTASection` or `PrimaryCTASection`.
16. `CTA` naming is reserved for action/contact/registry infrastructure.
17. Audit first, then edit.

### Do / Don't Rules

Do:
- Confirm token exists before using it.
- Run `grep` repo-wide after deleting or migrating architectural props/components.
- Delete dead CSS and props immediately when replaced.
- Use semantic page class prefixes (`home-*`, `sws-*`, `lsa-*`) for page-specific visuals only.
- Use `SectionFrame` / `HeroFrame` / `FAQSection` / `DecisionPanel` for section shells.

Do not:
- Invent new CSS tokens.
- Keep old files as "approved" just because they still render.
- Empty old files to fake a validator pass.
- Create page-named reusable components (`SWSFaqAccordion`, `LSAHeroPanel`).
- Write manual section wrappers when `SectionFrame` or `HeroFrame` cover the need.
- Hand-write final CTA button markup when `DecisionPanel` should own it.
- Make validators force production code to use exact magic helper names.
- Add validators for every removed prop unless the pattern is likely to return.
- Add new files inside `src/components/reusable` or `src/components/sections`.

## 0. Current State

- Active branch: `ui-hard-reset`. Latest resolved milestone: **6N**.
- Rebuilt and baseline-clean: Homepage, Smart Website Systems, Local SEO Authority.
- Base components operational: `SectionFrame`, `HeroFrame`, `DecisionPanel`, `FAQSection`, `Accordion`, `Tabs`, `RelatedSection`, `InlineText`.
- Deleted: `SectionShell`, `RelatedContentSection`, `SmartRelatedSection` chain, 17 zero-import sections from `sections/`, old component-library route.
- `CaseStudyTemplate.tsx` — `RelatedSection` and `PrimaryCTASection` removed. Still quarantined for old visual sections (`SectionWrapper`, `TestimonialCard`, etc).
- `PrimaryCTASection` still exists — ~30 consumers across unrebuilt domains (blog, features, industries, resources, old services, About, Contact).
- `src/components/reusable/` still exists — all unrebuilt domains depend on it.
- Next rebuild targets: AI Lead Handling, then industry category, remaining features, case study, resource, blog templates.
- See `docs/Planning/Legacy-dependency-map.md` for the live dependency and deletion map.

---

## 1. Core Decision

- This is a hard reset.
- This is not a migration.
- This is not backward compatibility work.
- The old UI/component/CSS/data structure does not need to survive.
- The current app is not production-live, so temporary broken UI is acceptable.
- Fallout from old renderers/templates is expected during rebuild.
- Do not preserve old CSS, old components, old classes, old data shapes, or old validators just because old pages still reference them.
- Do not let dev routes, component libraries, or previews block the hard reset.
- Dev/component-system can be removed or rebuilt later if it preserves old UI gravity.
- Cleanup happens continuously after each milestone.

---

## 2. What Must Be Preserved

- Canonical routes.
- Page identity.
- Page types.
- Canonical system identifiers.
- CTA/contact generation.
- `buildContactHref()`.
- CTA registry behavior.
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

## 3. What Can Be Replaced

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

## 4. Hard Reset Rules

- No `_compat.css`.
- No `styles/_legacy` in the final system.
- `_legacy/` is temporary expected fallout only; do not repair it or use it as fallback.
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

---

## 5. Source-of-Truth Model

- `Mindwp` = production/system repo.
- `Mindwp-Design` = Figma Make design reference.
- Homepage hardening uses the current Homepage as the working base.
- Figma can become visual source again when building new pages such as Smart Website, Local SEO, feature, industry, case, resource, and blog templates.
- Do not import Figma project architecture.
- Do not copy Figma routing.
- Do not copy Figma app structure.
- Do not copy Tailwind as production strategy.
- Translate approved visual direction into semantic custom CSS.

---

## 6. Width Rules

- Use `1440px` as the page/frame reference width.
- Use around `1240px` as the main inner container width.
- Do not stretch readable content to full `1440px`.
- Standard tokens:
  - `--mw-page-max`
  - `--mw-container-max`
  - `--mw-content-max`
  - `--mw-text-max`

---

## 7. Naming Rules

- New system naming should use `mw`.
- Prefer `.mw-*` for new shared primitives and layout classes.
- Prefer `--mw-*` for all tokens.
- `.rd-*` is old/reset-era naming and should be migrated or deleted as the new system stabilizes.
- Do not create `.rd-*` → `.mw-*` compatibility aliases.
- If a `.rd-*` class is used by the new system, migrate it carefully and update references.
- If a `.rd-*` class is only used by old pages, mark it as expected fallout and remove when consumers are rebuilt.

---

## 8. CSS Architecture

Current/new target structure:

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

  services/
    services-base.css
    smart-website.css
    local-seo.css

  features/
    features-base.css

  industries/
    industries-base.css
    category.css
    detail.css

  case-studies/
    case-study.css

  resources/
    resources.css

  blog/
    blog.css
```

Rules:

- `src/index.css` imports only the new CSS stack.
- Do not import `_compat.css`.
- Do not import legacy CSS.
- `tokens.css` is the only raw-value source.
- Page-specific CSS can be large if it preserves page meaning.
- Do not create one CSS file per content page.
- Flagship service pages may have dedicated CSS under `src/styles/services/`.
- Template/content pages must use domain/template CSS files.
- Service-specific CSS belongs in `src/styles/services/`, not `src/styles/pages/`.
- Feature-specific CSS belongs in `src/styles/features/`.
- Industry CSS belongs in `src/styles/industries/`.
- Case study CSS belongs in `src/styles/case-studies/`.
- Resource CSS belongs in `src/styles/resources/`.
- Blog CSS belongs in `src/styles/blog/`.
- Global CSS must not become a dumping ground for page-specific sections.

---

## 9. Token System

### 9.1 Token Namespace

- Use only `--mw-*` token namespace.
- Replace old flat tokens.
- Hardcoded raw values are allowed only in `tokens.css`.

### 9.2 Token Layers

Raw tokens:

- colors
- spacing
- typography
- radius
- shadows
- gradients
- z-index
- motion
- widths

Semantic tokens:

- text primary
- text secondary
- muted text
- surface
- mist surface
- dark surface
- border light
- border dark
- signal active
- risk
- warning
- success

Pattern tokens:

- hero gradient
- CTA gradient
- section padding
- panel radius
- panel shadow
- dark panel surface
- signal glow
- container max
- page max

### 9.3 Token Rules

- Do not create one-off tokens for every section.
- Avoid tokens like `--home-hero-left-special-gap`.
- Prefer scale/semantic tokens like:
  - `--mw-space-8`
  - `--mw-radius-panel`
  - `--mw-shadow-soft`
  - `--mw-gradient-hero`
  - `--mw-surface-mist`
- Repeated `rgba()` values outside `tokens.css` must be tokenized.
- Token validator must catch raw `rgba()` in normal CSS.

---

## 10. Token Validator

- Keep token validator.
- Scan all normal CSS files under `src/styles`.
- Allow raw values only inside `tokens.css`.
- Require `var(--mw-...)` in normal CSS where tokenized values are expected.
- Raw hex and raw `rgba()` outside `tokens.css` should fail.
- Every `var(--mw-*)` reference in normal CSS must point to a token that exists in `tokens.css`.
- Missing token references must fail validation.
- Do not invent token names during page builds.
- Keep valid exemptions such as:
  - `0`
  - `auto`
  - `inherit`
  - `currentColor`
  - `transparent`
  - `calc()`
  - `clamp()`
  - `min()`
  - `max()`
  - `color-mix()` where allowed
- Do not weaken validator to silence errors.
- Update validator only to match the new token system.

---

## 11. Dependency Direction

Shared primitives must never import from page/domain data files.

Correct direction:

```txt
src/types/ui        → imported by primitives and domain data
src/components/*    → imported by renderers/pages
src/domains/*/data  → imported by renderers/pages
renderers/screens   → compose data + primitives + CSS classes
```

Wrong direction:

```txt
src/components/primitives/* → imports from src/domains/home/data/homepage
```

Rules:

- Shared UI-only types live in `src/types/ui.ts` or equivalent shared type files.
- Page/domain data can import shared UI types.
- Shared primitives cannot import from `src/domains/*`.
- Data files must not import React components.

---

## 12. Component Strategy

### 12.1 Shared Primitives Allowed

Keep or rebuild only true shared primitives:

- Header
- Footer
- Logo
- Button
- Badge / Eyebrow
- SignalDot
- StatusBadge
- IconTile
- RevealSection / RevealGroup / RevealItem
- CTA action primitives if they preserve CTA/contact logic
- RelatedRail base when proven useful
- ArticleShell / CaseStudyShell when template rebuild begins

### 12.1A New Component Folders

Do not add new components to:

- `src/components/reusable` — old system, quarantined
- `src/components/sections` — old system, quarantined

New shared components must live in one of:

- `src/components/layout` — section framing (SectionFrame, HeroFrame)
- `src/components/primitives` — behavior/accessibility primitives (Accordion, Tabs, InlineText)
- `src/components/conversion` — final conversion panels (DecisionPanel)
- `src/components/navigation` — related-content, nav helpers (RelatedSection)
- `src/components/content` — full reusable content sections (FAQSection)

Rules:

- Behavior/accessibility primitives go in `src/components/primitives`.
- Layout framing goes in `src/components/layout`.
- Final conversion panels go in `src/components/conversion`.
- Navigation helpers go in `src/components/navigation`.
- Full reusable content sections go in `src/components/content`.
- Do not create page-named reusable behavior components.
- Bad: `SWSFaqAccordion`, `SWSCoverageTabs`, `LSAFaqAccordion`.
- Good: `Accordion`, `Tabs`, `DecisionPanel`, `SectionFrame`, `FAQSection`.

### 12.2 Base Component Responsibilities

**`SectionFrame`** (`src/components/layout/SectionFrame.tsx`):
- Owns `<section>`, `mw-container`, section padding, tone/bg class, heading block (kicker, title, description), children slot.
- Does NOT own page body visuals — those stay in page-specific CSS and renderer JSX.
- Use for all normal content sections in rebuilt pages.

**`HeroFrame`** (`src/components/layout/HeroFrame.tsx`):
- Owns hero `<section>`, container, split layout, copy side (title via InlineText, description, actions, chips), visual slot, texture slot.
- Does NOT own page-specific visual internals — those stay in page CSS.
- Use for hero sections in rebuilt pages.

**`DecisionPanel`** (`src/components/conversion/DecisionPanel.tsx`):
- Owns the final conversion section — actions, heading, reassurance, expectations, gradient bg.
- Renderers pass action data; no manual final-CTA button markup in page renderers.
- Replaces `PrimaryCTASection` / `CTASection` / `SWSCTASection` / `LSACTASection`.

**`FAQSection`** (`src/components/content/FAQSection.tsx`):
- Full reusable content section. Wraps `SectionFrame` + `Accordion`.
- Props: `eyebrow?`, `title`, `description?`, `items`, `initialOpenId?`, `tone?`, `variant?` (`stacked` | `split`), `className?`, `ariaLabel?`.
- New pages should use `FAQSection` rather than manually composing SectionFrame + Accordion.

**`Accordion`** (`src/components/primitives/Accordion.tsx`):
- Disclosure/FAQ primitive only. No section heading, no container, no padding.
- Used internally by `FAQSection`. Use directly only when FAQSection does not apply.

**`Tabs`** (`src/components/primitives/Tabs.tsx`):
- Tab primitive only. Generic API (`items`, `description`, `entries`).
- No page-named tab components.

**`RelatedSection`** (`src/components/navigation/RelatedSection.tsx`):
- Global related-content section. Single server component.
- Injected by domain config wrappers (services, features, industries, case-studies).
- Page renderers must NOT render their own related sections.
- Old chain (`SmartRelatedSection`, `SmartRelatedSectionClient`, `RelatedContentSection`) is deleted.
- Config model:
  ```ts
  relatedSection?: {
    enabled?: boolean;   // default true — set false to suppress
    variant?: 'standard' | 'rail' | 'compact';  // default 'standard'
  }
  ```

**`InlineText`** (`src/components/primitives/InlineText.tsx`):
- Renders `[[muted:...]]` markers as `.mw-text-muted` spans.
- Inline use only — inside headings, titles.
- No forced line breaks.
- Used internally by `SectionFrame` and `HeroFrame`.

### 12.3 Do Not Keep Old Section Library

Old reusable sections were deleted or quarantined. Do not import from:
- `src/components/reusable`
- `src/components/sections`

See `docs/Planning/Legacy-dependency-map.md` for the live deletion map and delete gates.

### 12.4 Page-Specific Sections Stay Custom First

Do not prematurely extract these:

Homepage:

- `home-signal-surface`
- `home-business-leakage-map`
- `home-six-system-stack`
- `home-pressure-board`
- `home-implementation-board`

Smart Website:

- `sws-enquiry-leak-path`
- `sws-handoff-board`
- `sws-coverage-ledger`
- `sws-handled-path`
- `sws-build-workbench`

Local SEO:

- `lsa-local-presence-board`
- `lsa-authority-decision-board`
- `lsa-signal-audit`
- `lsa-coverage-map`
- `lsa-visibility-cycle`

Feature:

- `feature-response-surface`
- `feature-review-flow`
- `feature-boundary-board`

Industry:

- `industry-pathway-map`
- `industry-scenario-board`
- `industry-seasonal-board`

Case Study:

- `case-trial-board`
- `case-observed-timeline`
- `case-change-map`

Resource:

- `resource-framework-surface`
- `resource-page-blueprint`

Blog:

- `blog-call-window`
- `blog-situation-map`

Extract later only if a pattern proves reusable across at least two pages.

---

## 13. Data Strategy

### 13.1 General

- Rebuild data files fully where needed.
- Preserve strong old content only if it fits the new design and writing rules.
- Rewrite weak content freely.
- Do not keep old generic models beside new ones.
- Delete old data blocks once replaced.
- Use section-specific contracts.
- Data shape must describe section meaning.

### 13.2 Avoid Generic Shapes

Avoid:

- `items`
- `cards`
- `points`
- `steps`
- `features`

Unless the section is genuinely generic.

Prefer:

- `signals`
- `leakPoints`
- `handoffs`
- `coverageAreas`
- `pressurePoints`
- `scenarioRows`
- `proofStory`
- `implementationPatterns`
- `visibilitySignals`
- `cycleStages`

---

## 14. Homepage Contract

Homepage is the current baseline for the new system. It uses base components for all shared framing.

### Current section structure

1. Hero — `HeroFrame`
2. Leak Diagnosis — `SectionFrame`
3. Foundation — `SectionFrame`
4. System Stack — `SectionFrame`
5. Put In Place — page-local
6. Fit Foundations — page-local
7. Client Shift — page-local
8. Pressure Points — page-local
9. Structure Layers — `SectionFrame`
10. Industries — `SectionFrame`
11. Alignment — `SectionFrame` (heading via `HeroFrame`-style — confirm renderer)
12. Proof Story — `SectionFrame`
13. Implementation Examples — page-local
14. FAQ — `FAQSection` (variant: split, tone: white)
15. CTA — `DecisionPanel`

### Data contract

- `hero.signals`
- `businessLeakage.flowStages`, `businessLeakage.leakPoints`
- `foundation.surface`, `foundation.underneath`
- `systemStack.journeyStages`
- `putInPlace.zones`
- `fitFoundations.strongFit`, `fitFoundations.poorFit`
- `clientShift.before`, `clientShift.after`
- `pressurePoints.points`
- `structureLayers.layers`
- `industries.scenarios`
- `alignment.stages`
- `proofStory`
- `implementationExamples.implementationPatterns`
- `faq.items`
- `cta.expectations`

### Homepage rules

- Hero uses `HeroFrame`.
- Normal content sections use `SectionFrame` for shell/framing.
- FAQ uses `FAQSection`.
- CTA uses `DecisionPanel`.
- Custom visual / card / grid JSX stays inside section body — not in the shell.
- `home.css` owns only page-specific visual classes after shared framing moves to base components.
- Heading muted segments use `[[muted:...]]` syntax — no `headingMuted` fields.
- Do not compare Homepage to Figma unless explicitly requested.
- Do not extract full Homepage body visuals prematurely.

### Clarification

Homepage sections are page-specific in their body visuals and narrative. Their shells/framing now use shared base components. Page-specific meaning lives inside the section body, not the shell.

---

## 15. Smart Website Contract

Create data shapes such as:

- `hero.feedRows`
- `leakPath.stages`
- `leakPath.primaryIncident`
- `siteContrast.left`
- `siteContrast.right`
- `handoffBoard.source`
- `handoffBoard.receivers`
- `coverageLedger.areas`
- `environmentScenarios`
- `handledPath.stages`
- `proofStory`
- `compoundingSignals.liveSignal`
- `compoundingSignals.effects`
- `buildWorkbench.inputs`
- `buildWorkbench.work`
- `buildWorkbench.workingState`
- `fitFilter`
- `faq.items`
- `cta.expectations`
- `relatedSystems`

---

## 16. Local SEO Contract

Create data shapes such as:

- `hero.localSignals`
- `authorityDecisionBoard.criteria`
- `visibilitySignalAudit.families`
- `structuredComparison.left`
- `structuredComparison.right`
- `assumptions.items`
- `coverageMap.areas`
- `visibilityCycle.stages`
- `proofStory`
- `fitFilter`
- `faq.items`
- `cta.expectations`
- `relatedSystems`

---

## 17. Feature / Industry / Case / Resource / Blog Contracts

Feature pages:

- `hero.chatPreview` / `hero.proofTimeline`
- `failureMoments`
- `handledQuestions`
- `handoffBoundary`
- `systemFit`
- `useCases`
- `coverage`
- `fitFilter`
- `faq`
- `cta`
- `relatedSystems`

Industry category/detail:

- `hero.leakPanel` / `hero.enquiryBoard`
- `sharedOperatingPattern`
- `industryPathways`
- `commonBreakPoints`
- `systemsByBusinessType`
- `seasonalLeakPattern`
- `workflowExamples`
- `relevantSystems`
- `proofScenario`
- `faq`
- `cta`

Case study:

- `hero.trialBoard`
- `messyReality`
- `whatChanged`
- `conversationPath`
- `workingDifferently`
- `constraints`
- `systemsInvolved`
- `cta`
- `related`

Resource:

- `hero.frameworkSurface`
- `decisionQuestions`
- `systemFit`
- `qualityThreshold`
- `pageAnatomy`
- `scalabilityChallenge`
- `measurementSignals`
- `keyTakeaways`
- `relatedResources`
- `softCta`

Blog:

- `hero.callSurface`
- `situationOpening`
- `callWindow`
- `compoundingLoss`
- `callerBehaviour`
- `betterHandling`
- `keyTakeaways`
- `relatedSystems`
- `softCta`

---

## 18. Renderer Strategy

- Rebuild renderers fully.
- Renderer owns page composition.
- Data owns content.
- CSS owns visuals.
- Shared primitives only where stable.
- Do not import old reusable section library.
- Do not maintain old renderers in parallel.
- Delete old renderer once new one works.
- No hidden fallback to old sections.
- No `sectionsAny` casts.
- No silent empty section drops.
- Invalid critical data should throw.

---

## 19. Validator Strategy

### 19.1 Keep System Validators

Keep and protect:

- CTA validators
- CTA label validators
- contact URL validators
- route ownership validators
- SEO validators
- graph validators
- inline-style validator
- hardcoded contact URL validator
- content enforcement validator
- build safety validators
- token existence validator
- legacy quarantine validator

### 19.2 Validator Principles

- Validators protect system truth, not old frontend structure.
- Do not weaken validators to silence errors.
- Do not make validators preserve old UI.
- Do not make validators force magic exact helper names.
- Add validator coverage when a new architectural rule becomes important.
- If a validator blocks intentional architecture, update the validator — not the architecture.
- Use `grep` / search-based cleanup for one-off removed props (e.g. `titleMuted`, `headingMuted`) rather than adding dedicated validators, unless the pattern is likely to return.

### 19.3 Current Architecture Enforcement Validators

Active validators for the new system:

- **Token existence validator** — every `var(--mw-*)` reference must exist in `tokens.css`; raw hex/`rgba()` outside `tokens.css` fails
- **Legacy quarantine validator** (`validate-legacy-quarantine.mjs`) — fails imports from `src/components/reusable` or `src/components/sections` in rebuilt/new files
- **Rebuilt-page old-class validator** — fails `rd-`, `l-section`, `l-container`, `btn-primary`, `btn-outline`, `hero-split`, `grid-cards`, `scope__`, `process-steps`, `layer-stack` in rebuilt files
- **CSS ownership validator** — enforces approved CSS folders; prevents one CSS file per content page
- **New component location validator** — fails new files added under `src/components/reusable` or `src/components/sections`
- **Page-named reusable component validator** — fails page/domain prefixes (`SWS`, `LSA`, `Home`) inside `src/components/*` reusable component filenames
- **Related section validator** — fails slug exception lists such as `SLUGS_WITH_OWN_RELATED`; no page-owned related sections
- **DecisionPanel validator** — enforces final conversion section contract; stops old `PrimaryCTASection`/`CTASection` naming in rebuilt files
- **Content enforcement validator** — SectionFrame imports, DecisionPanel contracts, old forbidden patterns

### 19.4 What Validators Should NOT Do

- Force old `SectionShell` / `PrimaryCTASection` / `SmartRelatedSection` patterns.
- Require page-owned related sections.
- Check for `RelatedContentSection`, `SmartRelatedSection`, `SmartRelatedSectionClient` as required patterns.
- Preserve any old UI that has been intentionally deleted.

---

## 19A. Inline Text / Muted Text Rules

- Use `[[muted:...]]` inside data title strings.
- Do not use `titleMuted` props.
- Do not use `headingMuted` data fields.
- Do not put HTML in data strings.
- Do not put JSX in data strings.
- Do not force line breaks inside data.
- `InlineText` is the renderer primitive — used internally by `SectionFrame` and `HeroFrame`; do not call it from data.

Example:

```ts
title: 'People Search Nearby. [[muted:You Still Miss The Click.]]'
```

---

## 20. Test Strategy

- Expect tests to fail during hard reset.
- Do not fix old tests just to preserve old UI.
- Delete or rewrite tests tied to removed components.
- Keep tests that protect:
  - CTA/contact behavior
  - route ownership
  - metadata
  - graph rules
  - canonical systems
  - page type identity
- Add new tests after new renderers/data stabilize.
- Final tests should validate new system, not old compatibility.

---

## 22. Build Order

1. Header/Footer.
2. Homepage.
3. Homepage/Base final cleanup.
4. Smart Website Systems.
5. Local SEO Authority.
6. Base organization/enforcement cleanup.
7. AI Lead Handling feature.
8. Reputation feature.
9. Industry category.
10. Landscaping industry detail.
11. Fitness case study.
12. Resource post/template.
13. Blog post/template.
14. Remaining services/features.
15. Remaining industries.
16. Remaining resources/blogs/case studies.
17. Per-domain cleanup after each rebuild.
18. Legacy/component cleanup after consumers are gone.
19. Validator/test rewrite for new contracts.
20. Final accessibility/SEO/performance QA.
21. Final visual QA.

---

## 23. Visual QA Rules

For new pages:

- Use Figma/design reference when intentionally building that page.
- Open localhost page.
- Compare section by section.
- Compare spacing, typography, widths, dark surfaces, signal panels, CTA, and footer.
- Do not accept generic substitutions.

For Homepage hardening:

- Do not compare to Figma unless explicitly requested.
- Improve the current system base, not Figma parity.

---

## 24. Copy Rules During Rebuild

- Follow FLOW → HANDLING → RESULT.
- Avoid PAGES → DESIGN → FEATURES.
- Avoid SaaS words.
- Avoid generic agency words.
- Avoid hype.
- No fake metrics.
- No guarantee language.
- Keep CTAs conversational.
- Keep system boundaries distinct.
- Named systems are allowed:
  - Smart Website Systems
  - Local SEO Authority
  - AI Lead Handling
  - CRM & Automation
  - Reputation & Reviews
  - Revenue Growth

---

## 25. Final Definition of Done

The hard reset is done when:

- CSS files follow the approved domain ownership model
- all `var(--mw-*)` references resolve to real tokens
- no page-named reusable behavior components remain
- no slug exception lists for related content remain
- rebuilt pages use `DecisionPanel` or the approved final conversion contract
- shared section framing uses `SectionFrame`, not old `SectionShell`
- no legacy CSS is imported
- no `_compat.css`
- no `styles/_legacy`
- no old reusable section library used by rebuilt pages
- no compatibility aliases
- no old/new data models duplicated
- all main pages follow the new MindWP system direction
- Homepage represents full MindWP business
- SWS stays focused on website/enquiry capture
- LSA stays focused on local visibility/authority
- feature/industry/case/resource/blog templates are redesigned
- validators protect new system
- tests align with new contracts
- no duplicated SEO source of truth
- no placeholder analytics IDs
- no nested page landmarks
- no raw `rgba()` outside `tokens.css`
- no shared primitive importing from domain/page data
- build passes
- system validation passes
- old UI files are deleted or clearly isolated for deletion

---

## 26. Non-Negotiable Principle

Frontend can break during reset.

Architecture cannot drift.

Data must follow section meaning.

CSS must follow tokens.

Validators must protect the new system, not the old UI.

---

## 27. Execution Rules For Every Page Rebuild

Before editing any page or domain:

1. Audit the current route, renderer, data, CSS, validators, tests, and dependencies.
2. Identify what system contracts must be preserved.
3. Identify old UI gravity that must be removed.
4. Identify what can break temporarily.
5. Write a short implementation plan.
6. Execute only confirmed changes.
7. Run validation/build.
8. Commit.

Do not start from assumptions.
Do not copy old structures forward.
Do not rebuild around existing components just because they are already present.
Do not use validators as a reason to preserve old UI.
Update validators when they enforce old UI assumptions.

Every rebuild must answer:

- What page/domain is this?
- What is the page’s business role?
- What data contract does it need?
- What CSS file owns its visual system?
- What shared primitives can it safely use?
- What must stay page-local?
- What old files/classes/components can be deleted now?
- What fallout is expected until other pages are rebuilt?

---

## 28. Page Rebuild Rules

For every page:

- Rebuild the data contract around section meaning.
- Rebuild the renderer around page composition.
- Rebuild CSS around semantic page classes.
- Keep shared primitives small.
- Keep full sections page-local until proven reusable.
- Remove old imports immediately when replaced.
- Delete dead data immediately when replaced.
- Delete dead CSS immediately when replaced.
- Do not keep parallel old/new models.
- Do not leave unused props or dead conditionals.
- Do not leave placeholder data unless documented as intentional.
- Do not use page data as a shared type source.

Page renderer rules:

- Renderer composes sections.
- Data provides content.
- CSS provides visuals.
- Primitives provide tiny repeated UI details.
- Critical missing data should fail loudly.
- No silent empty section drops.
- No `sectionsAny` casts.
- No old reusable section imports.
- No hardcoded contact URLs.
- No large public copy hardcoded in JSX.
- No React components inside data files.

---

## 29. Domain Rebuild Rules

For service domains:

- Each Tier-1 service page gets its own page-specific data contract.
- Each Tier-1 service page gets its own page-specific CSS file.
- SWS must not become the template for LSA.
- LSA must not become a clone of SWS.
- Shared structure is allowed only at primitive level.
- Shared section patterns are extracted only after multiple pages prove the same pattern works.

For feature domains:

- Feature pages explain one capability inside a parent system.
- Feature pages must not behave like full Tier-1 service pages.
- Feature pages must route back to the parent system.
- Feature pages should show capability boundaries and handoff logic.

For industry domains:

- Industry category pages help visitors find their business type.
- Industry detail pages must feel specific to that vertical.
- Do not use generic industry cards as the main pattern.
- Use operating scenarios, first-contact behavior, common leaks, and system fit.

For case studies:

- No fake metrics.
- No exaggerated transformation claims.
- Show messy reality, what changed, what became visible, and constraints.
- Case studies should prove operational clarity, not hype.

For resources:

- Resources are framework/decision-support pages.
- They should not behave like service pages.
- CTA should be soft unless the page is explicitly bottom-funnel.

For blog posts:

- Blog posts are problem-recognition pages.
- Start with a real situation.
- Diagnose before routing.
- Do not turn blog posts into service pages.

---

## 30. CSS Rules For Future Pages

### Shared component CSS

Shared base components own their CSS in global files (`layout.css`, `components.css`, `primitives.css`). Page CSS must not duplicate this:

| CSS class prefix | Owner file | Component |
|---|---|---|
| `mw-section-frame` | `layout.css` | SectionFrame |
| `mw-hero-section` | `layout.css` | HeroFrame |
| `mw-decision-panel` | `components.css` | DecisionPanel |
| `mw-related-section` | `components.css` | RelatedSection |
| `mw-faq-section` | `components.css` | FAQSection |
| `mw-accordion` | `components.css` | Accordion |
| `mw-tabs` | `components.css` | Tabs |
| `mw-text-muted` | `layout.css` | InlineText `[[muted:...]]` |

After migrating a page to `SectionFrame` / `HeroFrame` / `FAQSection` / `DecisionPanel` / `RelatedSection`, remove the corresponding duplicate wrapper/header/intro/action/FAQ/related CSS from the page CSS file.

### Page CSS rules

- Use page CSS files for page-specific sections.
- Use global CSS only for tokens, reset, typography, layout primitives, true primitives, Header/Footer, and stable shared shells.
- Page-specific selectors must use semantic prefixes:
  - `home-*`
  - `sws-*`
  - `lsa-*`
  - `feature-*`
  - `industry-*`
  - `case-*`
  - `resource-*`
  - `blog-*`
- Do not create generic selectors like `.section-card`, `.feature-grid`, `.content-card`, or `.process-step` for page-specific concepts.
- Do not use old `.rd-*` names for new work unless explicitly being migrated.
- Prefer `.mw-*` for new shared primitives.
- Do not create compatibility aliases.
- Do not use utility-class soup in JSX.
- Use semantic classes even when the layout is simple.
- If a repeated style becomes global, move it into primitives only after it is genuinely shared.
- If a style is meaningful only to one page, keep it in that page CSS file.

### CSS quality rules

- No raw hex outside `tokens.css`.
- No raw `rgba()` outside `tokens.css`.
- No random pixel/rem values outside approved token/validator exceptions.
- No inline styles.
- No Tailwind classes in production JSX.
- No CSS comments that preserve legacy behavior.
- No orphan selectors after renderer changes.
- No rendered classes without CSS unless intentionally inherited from a primitive.

---

## 31. Data Contract Rules For Future Pages

Data contract names must describe business meaning, not component shape.

Avoid generic names unless the section is truly generic:

- `items`
- `cards`
- `points`
- `steps`
- `features`
- `blocks`

Prefer specific names:

- `signals`
- `flowStages`
- `leakPoints`
- `handoffs`
- `coverageAreas`
- `environmentScenarios`
- `pressurePoints`
- `implementationPatterns`
- `proofStory`
- `visibilitySignals`
- `cycleStages`
- `relatedSystems`

Data rules:

- Data files may import shared UI types.
- Data files must not import React components.
- Data should not contain layout-only hacks.
- Data should not duplicate SEO if SEO has a canonical source elsewhere.
- Data should not contain dead display strings that can be derived.
- Data should not contain parallel old/new versions of the same section.
- Links should use canonical routes or known route helpers where practical.
- CTA action shapes must stay compatible with CTA validators.

---

## 32. Validator And Script Rules

Before changing a validator, classify it:

1. System validator.
2. UI architecture validator.
3. Old compatibility validator.
4. Dead validator.

System validators must be preserved or strengthened:

- CTA/contact generation.
- Hardcoded contact URL detection.
- Route ownership.
- SEO metadata.
- Content graph.
- Inline styles.
- Token usage.
- Canonical systems.
- Build safety.

UI validators may be rewritten:

- render alignment
- section structure
- design-system naming
- old section shell expectations
- dev preview expectations

Old compatibility validators should be deleted or rewritten.

Validator rules:

- Do not weaken validators to silence errors.
- Do not make validators preserve old UI.
- Add validator coverage when a new rule becomes important.
- If new pages introduce new contracts, update validators to understand the new contracts.
- If a validator blocks intentional architecture, update the validator, not the architecture.

---

## 33. SEO / Analytics / Metadata Rules

- Each canonical route must have one SEO source of truth.
- Do not duplicate metadata in page data if route SEO is owned elsewhere.
- Do not hardcode production URLs when helpers/env exist.
- Canonical URL must use the configured site origin.
- JSON-LD must be intentional and sourced from the correct SEO layer.
- Dead schema conditionals should be removed.
- Social/Twitter metadata should be added through the SEO system, not random page-level fragments.
- Analytics IDs must come from env.
- If analytics env value is missing, analytics scripts should render nothing.
- No hardcoded placeholder IDs such as `G-XXXX`.

---

## 34. Accessibility Rules

- Only one `<main>` landmark per page.
- Use semantic landmarks from app/layout where possible.
- Do not nest `<main>` inside page renderers if layout already provides one.
- Use links for navigation and buttons for actions.
- Decorative icons must be hidden from assistive tech.
- Status indicators cannot rely only on color when meaning matters.
- Disabled placeholder social buttons should not remain in the accessibility tree.
- Motion must respect `prefers-reduced-motion`.
- Focus states must remain visible.
- Heading hierarchy must stay logical.
- FAQ/disclosure controls must remain keyboard-accessible.

---

## 35. Performance Rules

- Keep pages mostly server-rendered unless interactivity is required.
- Use small client islands only where needed.
- Do not add animation libraries for simple reveal effects.
- RevealMotion must stay lightweight.
- Avoid excessive animated nodes.
- Avoid unnecessary hydration from primitives.
- Avoid large reusable components that import page-specific data.
- Be careful with backdrop filters, large shadows, and glow effects.
- Prefer CSS-driven effects over JS-driven effects.
- Do not add heavy image/mockup systems without a clear reason.

---

## 36. Cleanup Rules

Cleanup is part of every milestone.

After each milestone:

- Search for removed selectors.
- Search for removed imports.
- Remove dead props.
- Remove dead data.
- Remove dead CSS.
- Remove dead conditionals.
- Remove orphan files.
- Update validators if needed.
- Update docs if strategy changed.
- Commit the milestone.

Do not leave:

- unused props
- unused data blocks
- dead conditionals
- placeholder IDs
- unused imports
- old aliases
- duplicate SEO definitions
- dead component files
- orphan CSS selectors
- parallel old/new contracts

---

## 37. How To Decide Reuse

Reuse only after proof.

Extract a component when:

- the same pattern appears on at least two pages,
- the pattern keeps its meaning across both pages,
- the component does not force generic cards/grids/process layouts,
- the data contract remains semantic,
- the component reduces duplication without hiding business logic.

Do not extract when:

- the section is still being designed,
- the section is page-defining,
- the section depends heavily on page-specific narrative,
- the component would force generic fields like `items/cards/steps`,
- the component would make future pages look identical.

Default rule:

- primitives now
- sections later
- templates only after patterns prove themselves

---

# Compressed Milestone Summary

| Milestone | Summary |
|---|---|
| 1 | CSS foundation: new `tokens.css` / `reset.css` / `typography.css` / `layout.css` / `primitives.css` / `components.css` stack. `_compat.css` removed. |
| 2 | Header/Footer restyled. RevealMotion restored. |
| 3–3B | Homepage rebuilt (15 sections). Types and primitives (`SignalDot`, `StatusBadge`, `src/types/ui.ts`) established. |
| 4 | SWS visual polish pass — leak map, environment roster, handled path, proof story finalized. |
| 5–5.1 | LSA full rebuild. New semantic data contract, renderer, and page CSS. Token violations and heading hierarchy fixed. |
| 6A–6B | Base components created: `SectionFrame`, `HeroFrame`, `DecisionPanel`, `Accordion`, `Tabs`. SWS + LSA fully migrated. Old component-system dev route deleted in 6D. |
| 6C | `HeroFrame` owns full hero section. Dead home FAQ + CTA CSS removed. |
| 6E | Legacy quarantine map created. 17 zero-import section files deleted from `sections/`. `validate-legacy-quarantine.mjs` created. |
| 6F | Global `RelatedSection` created. `SmartRelatedSection` chain deleted. Config-wrapper injection active for all domains. |
| 6G | `SectionShell` deleted. `sections/` barrel trimmed to `PrimaryCTASection` only. |
| 6H | `InlineText` + `FAQSection` created. `[[muted:...]]` syntax live. Homepage fully migrated to `SectionFrame` / `HeroFrame` / `FAQSection` / `DecisionPanel`. |
| 6K | Control plane cleaned. `generate-global-inventory.mjs` quarantined. CTA + related validators reset. Legacy quarantine validator tightened. |
| 6L | LSA `lsa-cycle` raw section resolved. All rebuilt renderers now use `SectionFrame` for every normal section. |
| 6M | `CaseStudyTemplate` `{ type: 'more' }` and `RelatedSection` removed. All 25 case-study data files cleaned. |
| 6N | `CaseStudyTemplate` `PrimaryCTASection` replaced with `DecisionPanel`. `PRIMARY_CTA_LABEL` used. `slug: metadata.slug` replaces hardcoded `case-study-footer`. |

---

# Current Open Follow-ups

Not yet assigned to a milestone:

- **Homepage landmark** — Remove nested `<main>` landmark inside homepage renderer.
- **Analytics** — Wire Google Analytics through `NEXT_PUBLIC_ANALYTICS_ID`; remove hardcoded placeholder.
- **SVG tokens** — Replace hardcoded gradient hex values in SVG elements with token-backed CSS variables.
- **Footer accessibility** — Remove disabled social buttons from the accessibility tree.
- **SEO** — Add Twitter/X metadata when SEO system supports it.
- **Case-study related injection** — `RelatedSection` not yet injected at wrapper/config level for case studies. Add when the case-study domain is rebuilt.
- **PrimaryCTASection consumers** — ~30 consumers remain across unrebuilt domains (blog, features, industries, resources, old services, About, Contact). Each must be rebuilt before `PrimaryCTASection` can be deleted.


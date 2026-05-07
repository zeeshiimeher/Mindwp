# System Hard Reset Plan — MindWP

> Source of truth for the MindWP frontend hard reset.
> This is a hard reset of the UI/data/render layer, not a reset of the business/system layer.

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

## 0. Current Status

- Active branch: `ui-hard-reset`.
- Homepage is now the working base for the new system.
- Figma Make remains a visual reference for pages not yet rebuilt, but Homepage hardening is no longer a Figma-parity task.
- Header/Footer, token CSS foundation, Homepage renderer/data/CSS, shared UI types, and first primitive cleanup passes are complete.
- Smart Website Systems and Local SEO Authority have been rebuilt.
- Current priority before building more pages: base organization and enforcement cleanup.

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

## 21. Dev Routes / Prototype Routes

- Remove old dev routes that force old component system.
- Remove `/dev/sws-visual-prototype` if it exists only for old design.
- Remove or rebuild `/dev/component-system`.
- Do not let dev routes block hard reset.
- If dev preview is needed, rebuild later for new system.

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

## Milestone 6G — Delete SectionShell / Migrate Remaining Base Framing

**Status:** Complete (branch: `ui-hard-reset`, commit: `ui-hard-reset: delete sectionshell and migrate base framing`)

### What Changed

- `src/components/sections/SectionShell.tsx` — **deleted**. All consumers already rebuilt or migrated.
- `src/components/sections/types.ts` — internal types removed (no remaining external consumers after SectionShell deletion).
- `src/components/sections/index.ts` — trimmed. Only `PrimaryCTASection` barrel export remains.
- SWS + LSA renderers: confirmed no remaining `SectionShell` usage.
- Validators: `SectionShell` references cleaned from `validate-content-enforcement.ts`.

### Delete Gates After 6G

- `SectionShell` is gone.
- `PrimaryCTASection` still remains — ~40 consumers across unrebuilt domains.
- `src/components/sections/` folder remains until PrimaryCTASection gate is met.

### Results

- `system:full` — 57/57 validators, 0 warnings
- `npx next build` — clean

---

## Milestone 6H — Finalize Homepage Section Frames + FAQSection + InlineText

**Status:** Complete (branch: `ui-hard-reset`, commit: `62367b5`)

### What Changed

**`src/components/primitives/InlineText.tsx`** — new file:
- Parses `[[muted:...]]` markers from title strings.
- Renders `.mw-text-muted` spans. No HTML, no forced line breaks.
- Used internally by `SectionFrame` and `HeroFrame`.

**`src/components/layout/SectionFrame.tsx` + `HeroFrame.tsx`** — updated:
- `titleMuted?: string` prop removed.
- Title rendered via `<InlineText value={title} />`.
- Prettier fixed.

**`src/styles/layout.css`** — updated:
- `.mw-section-frame__heading-muted` removed; replaced with shared `.mw-text-muted`.
- `.mw-hero-frame__heading-muted` removed; replaced with `.mw-hero-frame__heading .mw-text-muted` on-dark override.

**`src/domains/home/data/homepage.ts`** — updated:
- `headingMuted` field removed from 8 section types.
- All heading strings updated to use `[[muted:...]]` syntax.
- `cta.heading.muted` unchanged — feeds `DecisionPanel` as `subtitle`, not a `titleMuted` pattern.

**`src/components/content/FAQSection.tsx`** — new file (new folder `src/components/content/`):
- Full reusable FAQ section. Wraps `SectionFrame` + `Accordion`.
- `stacked` (default) and `split` variants.
- Props: `eyebrow?`, `title`, `description?`, `items`, `initialOpenId?`, `tone?`, `variant?`, `className?`, `ariaLabel?`.

**`src/styles/components.css`** — updated:
- `.mw-faq-section__accordion`, `.mw-faq-section--split` CSS added.

**`src/screens/Homepage.tsx`** — updated:
- 5 manual `<section>` wrappers converted to `SectionFrame` (LeakDiagnosis, Foundation, SystemStack, StructureLayers, Industries).
- Hero kept page-local for now (visual complexity).
- FAQ migrated from manual `Accordion` to `FAQSection`.
- HeroFrame/SectionFrame `titleMuted` props removed.

**`SmartWebsiteSystemsRenderer.tsx` + `LocalSeoAuthorityRenderer.tsx`** — updated:
- Manual `SectionFrame + Accordion` FAQ patterns replaced with `FAQSection`.

**`src/styles/pages/home.css`** — cleaned:
- Stale `.home-h2*`, `.home-eyebrow*`, `__inner`, `__header`, `__intro`, `__copy`, `__description` wrappers removed.
- Responsive overrides for removed classes cleaned.
- Page-specific visual classes kept.

### Results

- `system:full` — 57/57 validators, 0 warnings
- `npx next build` — clean

---

## Milestone 6I — Clean System-hard-reset.md

**Status:** Complete (branch: `ui-hard-reset`, date: 2026-05-08)

- Rewrote `READ THIS FIRST` section with current rules.
- Updated component strategy with full base component responsibilities.
- Added `src/components/content` as approved folder.
- Updated Homepage contract to reflect 6H baseline (SectionFrame, HeroFrame, FAQSection, DecisionPanel).
- Updated related section rules: global/config-owned, no page-owned, no old chain references.
- Added Section 19A: Inline Text / Muted Text Rules.
- Updated validator strategy: current enforcement validators, removed old UI patterns.
- Updated CSS rules: shared component CSS ownership table.
- Updated Active Rules block to include 6F/6G/6H learnings.
- Added 6G and 6H milestone summaries.
- Fixed 6F/6E results placeholders.
- Fixed 6C outdated note about Homepage sections staying page-local.
- Fixed Milestone 5.1 SLUGS_WITH_OWN_RELATED note (marked resolved).
- Compressed Milestone 6 Required Work (all done).
- Removed outdated `SmartRelatedSection`, `RelatedContentSection`, `SectionShell`, `titleMuted`, `SLUGS_WITH_OWN_RELATED`, `page-owned related` references from active/rules sections.

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

# Milestone Log

## Milestone 1 — CSS Foundation Cleanup

**Date:** 2026-05-07  
**Branch:** `ui-hard-reset`  
**Commit:** `e1a1651`

### Completed

- Created new CSS stack:
  - `tokens.css`
  - `reset.css`
  - `typography.css`
  - `layout.css`
  - `primitives.css`
  - `components.css`
- Updated `src/index.css` to import the new stack only.
- Removed `_compat.css` import.
- Deleted orphaned CSS:
  - `foundation.css`
  - `framework.css`
  - `sws-visual-prototype.css`
- Deleted old `/dev/sws-visual-prototype` route.
- Updated token validator skip list.

### Checks

- Token validator: clean.
- `system:full`: 56/56.
- `next build`: clean.

### Remaining Fallout

- `_legacy/` remains isolated until old templates/renderers are rebuilt.
- Old pages still reference `l-section`, `l-container`, `btn-primary`, and `btn-outline`.

---

## Milestone 2 — Header/Footer + Motion Foundation

**Branch:** `ui-hard-reset`  
**Commit:** `1dcaaef`

### Completed

- Restyled Header/Footer toward new shell direction.
- Added CTA/status dot styling.
- Footer now lists six canonical systems.
- Restored RevealMotion system in `layout.css`.
- Updated stale RevealMotion comments.

### Checks

- Token validator: clean.
- `system:full`: 56/56.
- `next build`: clean.

### Remaining Fallout

- `.rd-*` naming remains from reset-era primitives and should migrate toward `.mw-*`.
- `_legacy/` remains temporary fallout only.

---

## Milestone 3 — Homepage Rebuild

**Branch:** `ui-hard-reset`  
**Commits:** `6b10018`, `ac75eeb`

### Completed

- Rebuilt Homepage renderer with 15 custom page-local sections.
- Rebuilt Homepage data contract.
- Created `src/styles/pages/home.css`.
- Removed old Homepage dependencies on `l-section`, `l-container`, and old button classes.
- Added hero/CTA visual depth pass.

### Homepage Section Order

1. Hero
2. Leak Diagnosis
3. Foundation
4. System Stack
5. Put In Place
6. Fit Foundations
7. Client Shift
8. Pressure Points
9. Structure Layers
10. Industries
11. Alignment
12. Proof Story
13. Implementation Examples
14. FAQ
15. CTA

### Checks

- Token validator: clean.
- `system:full`: 56/56.
- `next build`: clean.

---

## Milestone 3A — Homepage Hardening Pass 1

**Branch:** `ui-hard-reset`  
**Commit:** `7515dae`

### Completed

- Added `HomeIconKey` union.
- Added `iconKey` to Homepage data arrays.
- Added typed `HOME_ICON_MAP`.
- Wired reveal motion classes on all non-hero sections.
- Renamed key data fields:
  - `path` → `flowStages`
  - `steps` → `zones`
  - `patterns` → `implementationPatterns`
- Added initial `SignalDot` and `StatusBadge` primitives.
- Performed first copy cleanup.

### Checks

- `system:full`: 56/56.
- `next build`: clean.

---

## Milestone 3B — Base System Hardening

**Branch:** `ui-hard-reset`

### Completed

- Created `src/types/ui.ts`.
- Moved `AccentKey` and `StatusTone` into shared UI types.
- Fixed primitive dependency direction:
  - `SignalDot` imports from `@/types/ui`.
  - `StatusBadge` imports from `@/types/ui`.
- Removed dead badge CSS.
- Tokenized dot sizing.
- Updated `index.css` comments.
- Updated this planning doc to define Homepage as current working base.

### Dependency Direction Rule Established

```txt
src/types/ui        → imported by primitives and domain data
domain/page data    → imported by renderers
renderers           → compose data + primitives + styles
```

### Checks

- `system:full`: 56/56.
- `next build`: clean.

### Remaining Fallout

- `.rd-dot--good/risk/warn/info` remains for old SWS/LSA renderers.
- `.bg-gradient-base/blue/compare` remains for old section components.
- `hero-split` and `grid-cards` remain for old section components.
- `_legacy/` remains for old templates/screens.

---

## Milestone 3C — Final Homepage/Base Cleanup

**Status:** Superseded by Milestones 6A–6H.

Key items from the original plan and their resolution:
- Token validator for raw `rgba()` — added in Milestone 6A.
- Dead CSS (home-cta, home FAQ accordion) — removed in 6C.
- Homepage sections using shared framing (SectionFrame, HeroFrame, FAQSection) — completed in 6H.
- `headingMuted` / `titleMuted` removal — completed in 6H via `[[muted:...]]` / `InlineText`.
- `SLUGS_WITH_OWN_RELATED` slug exception patch — replaced in 6A/6F.
- `home.css` stale wrappers — removed in 6H.

Items still open (no target milestone yet):
- Remove nested Homepage `<main>` landmark.
- Wire Google Analytics through `NEXT_PUBLIC_ANALYTICS_ID`.
- Replace SVG hardcoded gradient hex values with token-backed CSS variables.
- Remove disabled footer social buttons from accessibility tree.
- Add Twitter/X metadata when SEO system supports it.

---

## Milestone 4 — Smart Website Systems Polish Pass

**Status:** Complete  
**Branch:** `ui-hard-reset`  
**Commits:** `7f54646` (first pass) + follow-up fixes (second pass)

### What Was Done

**Sections polished (first pass — committed `7f54646`):**
- **Leak Map** — secondary leaks changed from equal-weight cards to stacked bordered row list; stage label left, content right (2-col inner grid)
- **Environment Roster** — added `scenario` field to data contract and renderer; displays as full-width note row below each environment entry
- **Handled Path** — routing stage (emphasis:true) now spans full width at desktop, breaking the 4-equal-column grid; proof points on lead stage render in horizontal row
- **Proof Story** — context panel changed to dark gradient (gradient-hero); acts rendered as a connected narrative strip with dividers instead of 3 equal white panels

**Fixes (second pass — this commit):**
- **Coverage Tabs bar count bug** — was `{total} / {total}` (static); fixed to `{current} / {total}` (updates on tab change)
- **Coverage Tabs ARIA** — added `id` to each tab button (`sws-ctabs-tab-${i}`); added `aria-labelledby` on panel div referencing active tab
- **CSS** — removed 4 empty selectors; removed duplicate CTA section comment block

### Old SWS Gravity Search

Clean. No legacy patterns found:
- No `rd-*` classes in markup or CSS
- No `components/sections` or `components/reusable` imports
- No old data field keys: `leakBoard`, `serviceBridge`, `operatingBuild`, `coreLayer`, `scopeGroups`
- No legacy tokens, hardcoded hex/rgba, or inline styles
- `includedItems` is legitimate (Coverage Ledger tab data)

### Sections Kept As-Is (deliberate)

- **Build Board** — 4 numbered sequential stages with clear step narrative; grid structure justified by sequential process
- **Fit Filter** — two panels (strong fit / not fit) is deliberate binary comparison, not equal-weight card grid
- **No RelatedContentSection** — not present on SWS page; condition in prompt ("if present and generic") does not apply

### Checks

- `node scripts/validators/validate-tokens.mjs` — ✓ pass (7 files scanned)
- `npm run system:full` — ✓ 56/56 validators passing, tests pass
- `npx next build` — ✓ Compiled successfully; 360/360 static pages

### Next Milestone Candidate

Local SEO Authority page (`/services/local-seo-authority`) — same polish pass approach.

---

## Milestone 5 — Local SEO Authority Rebuild

**Commit:** ui-hard-reset: rebuild local seo authority
**Status:** Complete

### What changed

- `src/domains/services/data/local-seo-authority.ts` — full rewrite with new semantic contract: `hero.presenceSurface` (map pack simulation panel), `sections.authorityDecision` (criteria board), `signalAudit` (four signal families with checks), `structuredComparison`, `assumptions`, `coverageMap` (8 zones), `visibilityCycle` (4 phases), `proofStory` (scenario study), `fitFilter`, `faq` (11 items), `relatedSystems`
- `src/domains/services/renderers/LocalSeoAuthorityRenderer.tsx` — full rewrite; named export; no ErrorBoundary, SectionShell, PrimaryCTASection, rd-*; inline `LSACTASection`; `_DOT` aria constants; `requireHeadingDescription` helper; `buildContactHref` with `sourceType: 'service'`
- `src/styles/pages/local-seo.css` — new page CSS (lsa-* classes only, mw-* tokens only, no raw hex)
- `src/index.css` — added `@import './styles/pages/local-seo.css'`
- `scripts/validators/validate-content-enforcement.ts` — updated LSA validator message to reflect inline LSACTASection contract
- `src/domains/services/pages/local-seo-authority/index.tsx` — updated to named import
- `src/app/dev/component-system/page.tsx` — updated all dead LSA section references to inline stubs (old sections removed in data rewrite)

### Checks

- `npm run system:quick` — ✓ 33/33 blocking validators passing
- `npx next build` — ✓ Compiled successfully

---

## Milestone 5.1 — Local SEO Authority Polish Pass

**Commit:** ui-hard-reset: polish local seo authority
**Status:** Complete

### What changed

- `src/styles/tokens.css` — added 5 new tokens: `--mw-signal-teal-surface`, `--mw-shadow-float`, `--mw-radius-2xl`, `--mw-radius-3xl`, `--mw-signal-teal-18`
- `src/styles/pages/local-seo.css` — fixed 33 raw rgba/px violations; added SVG ring classes (`lsa-coverage-map__ring-*`); visual polish: decision board divider bands; visibility cycle 2×2 dark grid; `fill: none` moved to CSS
- `src/domains/services/data/local-seo-authority.ts` — renamed 9 section `heading:` keys to `header:` to match shared convention and satisfy heading-hierarchy validator; `relatedSystems.heading` string converted to `header: { title }` object; `primary: true as const` corrected to `primary: true` to match conversion-contract validator allowlist; `relatedSystems.heading` text updated to `"What connects to local visibility"`
- `src/domains/services/renderers/LocalSeoAuthorityRenderer.tsx` — all 35 `.heading.` section accesses renamed to `.header.`; `relatedSystems.header.title` render updated; SVG raw stroke/fill attributes moved to CSS classes; `data-testid="smart-cta"` added to `LSACTASection` outer element to satisfy publishable assertion
- `src/domains/services/config.tsx` — added `SLUGS_WITH_OWN_RELATED` set; conditional skip of global `SmartRelatedSection` for LSA to prevent duplicate related block

### Issues resolved

- Token violations (33 raw rgba/px) in local-seo.css — all fixed
- Heading hierarchy validator — `heading:` → `header:` rename in 9 sections
- No-hardcoded-content validator — SVG inline rgba moved to CSS; `fill='none'` moved to CSS
- Conversion contract validator — `primary: true as const` corrected; `relatedSystems.header.title` in renderer
- Template rendering test — `data-testid="smart-cta"` added to `LSACTASection`
- Duplicate related services block — temporarily fixed via `SLUGS_WITH_OWN_RELATED` in config.tsx

### Temporary Debt Introduced (resolved in Milestone 6A/6F)

- `SLUGS_WITH_OWN_RELATED` was a temporary slug exception patch.
- It was replaced in Milestone 6A with a formal `options.relatedContent` registry contract.
- The global `RelatedSection` was created in Milestone 6F and fully replaced the old chain.
- `SLUGS_WITH_OWN_RELATED` no longer exists.

### Checks

- `node scripts/validators/validate-tokens.mjs` — ✓ 8 files scanned, 0 violations
- `npm run system:full` — ✓ 55/56 validators passing (1 pre-existing lint error in unmodified dev page)
- `npx next build` — ✓ Compiled successfully (no errors)
- `npx vitest run tests/integration/template-rendering.test.ts` — ✓ passed
- `npx vitest run tests/system/content-enforcement.test.ts` — ✓ passed

---

## Milestone 6 — Base Organization / Enforcement Cleanup

**Status:** Complete (branch: `ui-hard-reset`, Steps 1–15 done)

### Completed Work

1. ✅ Moved service CSS into `src/styles/services/` (`smart-website.css`, `local-seo.css`)
2. ✅ Updated `src/index.css` imports from `pages/` → `services/`
3. ✅ Added 10 missing token definitions to `tokens.css`
4. ✅ Replaced `SLUGS_WITH_OWN_RELATED` patch with formal `options.relatedContent` registry contract
5. ✅ Created `src/components/primitives/Accordion.tsx` — replaces `SWSFaqAccordion`
6. ✅ Created `src/components/primitives/Tabs.tsx` — replaces `SWSCoverageTabs`
7. ✅ Created `src/components/layout/SectionFrame.tsx` — replaces `sws-head`/`lsa-section__header` patterns
8. ✅ Created `src/components/layout/HeroFrame.tsx` — replaces `sws-hero__copy`/`lsa-hero__copy` patterns
9. ✅ Created `src/components/conversion/DecisionPanel.tsx` — replaces `SWSCTASection`, `LSACTASection`, homepage `CTASection`
10. ✅ Migrated SWS, LSA, Homepage CTAs to `DecisionPanel`
11. ✅ Migrated SWS + LSA section headers to `SectionFrame`
12. ✅ Migrated SWS + LSA heroes to `HeroFrame`
13. ✅ Migrated SWS + LSA FAQs to `Accordion`
14. ✅ Migrated SWS coverage tabs to `Tabs`
15. ✅ Removed replaced CSS blocks (sws-head, sws-accordion, sws-cta, sws-ctabs, lsa-section__header, lsa-hero__ copy-side, lsa-cta)
16. ✅ Updated `validate-content-enforcement.ts` messages + added `DecisionPanel` contract check
17. ✅ Updated `validate-primary-cta.ts` to also scan `<DecisionPanel` instances

### Why This Milestone Exists

SWS and LSA proved the new direction, but LSA also exposed base-system gaps:

- Copilot invented token names that did not exist.
- Service CSS was still being created under `src/styles/pages/` instead of a domain folder.
- Page-named behavior components were created inside renderer folders.
- Related content duplication was fixed with a slug exception patch.
- Final conversion sections still use confusing CTA naming.
- Old `PrimaryCTASection` / `SectionShell` validator assumptions remain.

This milestone organizes the base before scaling to more pages.

### All required work completed across Milestones 6A–6H.

---

## Milestone 6B — Enforce Base Components + Remove Old Component System Gravity

**Status:** Complete (branch: `ui-hard-reset`, commit: `ui-hard-reset: enforce base components`)

### Completed Work

1. ✅ `SectionFrame` rewritten as full section wrapper — owns `<section>`, `mw-container`, padding, tone/bg, heading block, children
2. ✅ `HeroFrame` actions changed from `React.ReactNode` to typed array (`HeroFrameAction[]`) with internal `<a>` rendering
3. ✅ `DecisionPanel` cleaned — `variant` replaces `primary: true`, `reassurance` replaces `footer`, `expectationsLabel` added, aria-hidden fixed
4. ✅ `Accordion` JSDoc migration comment removed
5. ✅ `Tabs` rewritten to generic API — `items/description/entries` replaces `bands/purpose/includedItems`; `TabsBand` type removed
6. ✅ `SmartRelatedSection` legacy props removed — `categorySlug`, `systems`, `industries`, `includeCaseStudies`, `includeServices`, `items`, `groups`, `manualContent`, `manualItems`, `manualList`
7. ✅ `SmartWebsiteSystemsRenderer` fully migrated — all 12 content sections use `SectionFrame`, CTA uses `DecisionPanel`, hero uses `HeroFrame`
8. ✅ `LocalSeoAuthorityRenderer` fully migrated — all applicable sections use `SectionFrame`, CTA uses `DecisionPanel`, hero uses `HeroFrame`
9. ✅ `validate-content-enforcement.ts` updated — SectionFrame import check, DecisionPanel contract check, forbidden old patterns (`rd-`, `l-section`)
10. ✅ `/dev/component-system` route deleted — `page.tsx` removed, `INTERNAL_STATIC_ROUTE_PATHS` updated, `STATIC_ROUTE_CONTENT` entry removed
11. ✅ Migration comments removed from all renderer headers and base component JSDoc
12. ✅ `lsa-hero` fixed — removed orphaned `lsa-section` class (CSS rule already deleted); `lsa-hero` has own `padding-block`
13. ✅ Prettier formatting fixed across all touched files
14. ✅ `system:full` passes at 56/56 validators, 0 warnings
15. ✅ `npx next build` clean

### Why This Milestone Exists

After 6A created the base components, 6B enforced them as the only pattern:
- Old section wrapper patterns (`sws-section`, `lsa-section`) removed from CSS and renderer
- Old component-system dev route removed (no more gravity toward old system)
- Validators updated to enforce the new contracts
- Migration comments cleaned (production code must not contain dev scaffolding notes)
- All remaining legacy props removed from SmartRelatedSection

---

## Milestone 6C — Complete Base Component Enforcement Across Homepage / SWS / LSA

**Status:** Complete (branch: `ui-hard-reset`, commit: `ui-hard-reset: complete base component enforcement`)

### Completed Work

1. ✅ `Accordion` — added `initialOpenId?: string` prop for pre-expanding first item
2. ✅ `Homepage` FAQ section — migrated from `<details>/<summary>` to `<Accordion>` with `initialOpenId='home-faq-0'`
3. ✅ `home.css` — dead FAQ accordion CSS removed (`home-faq__item/question/answer/icon`); entire orphaned `home-cta` block removed (~188 lines; CTASection already rendered DecisionPanel directly since 6B)
4. ✅ `HeroFrame` — rewritten to own full hero section: `<section>`, `mw-container`, `mw-hero-section__inner` split layout, visual slot (`right panel`), texture slot (`absolute overlay`)
5. ✅ `layout.css` — added `mw-hero-section` + `mw-hero-section__inner` CSS (padding, grid, responsive)
6. ✅ `SmartWebsiteSystemsRenderer` hero — migrated from manual `<section>/<div>/<HeroFrame>` stack to single `<HeroFrame>` full-section call with `visual` slot
7. ✅ `LocalSeoAuthorityRenderer` hero — migrated from manual `<section>/<inner>/<layout>/<HeroFrame>` stack to single `<HeroFrame>` full-section call with `texture` + `visual` slots
8. ✅ `smart-website.css` — `.sws-hero__inner` + responsive query removed (owned by `mw-hero-section__inner`); `.sws-hero` reduced to background only
9. ✅ `local-seo.css` — `.lsa-hero__inner` + `.lsa-hero__layout` + responsive query removed; `.lsa-hero` reduced to background only
10. ✅ `layout.css` — `SectionShell` references removed from CSS block comments
11. ✅ Remaining custom page sections (`lsa-cycle`, `lsa-faq`, `lsa-related`) — confirmed justified exceptions (custom 2-column layouts / curated data)
12. ✅ Homepage hero — kept page-local in 6C (split heading, dual action system, data-accent chips — not yet compatible with HeroFrame); **migrated to HeroFrame in 6H**.
13. ✅ Homepage sections — kept page-local in 6C; **5 remaining sections migrated to SectionFrame in 6H**. FAQ migrated to FAQSection in 6H.
14. ✅ Prettier formatting fixed across all touched files.
15. ✅ `system:full` passes at 56/56 validators, 0 warnings.
16. ✅ `npx next build` clean.

### Why This Milestone Exists

After 6B enforced SectionFrame and DecisionPanel across section content, 6C completes base component ownership:
- HeroFrame now owns the full hero section element — renderers no longer manually compose `<section>` + container + split layout
- Dead CSS (orphaned home FAQ, orphaned home-cta) removed
- Homepage FAQ delegates to Accordion primitive
- CSS duplication removed: sws/lsa hero wrapper properties deleted now that mw-hero-section owns them

---

## Milestone 6D — Remove Old Component System Gravity

### What Changed

**Deleted files:**
- `src/app/components/` — ComponentLibrary Next.js route (`page.tsx` + `components-client-page.tsx`)
- `src/screens/ComponentLibrary.tsx` — Old component library screen
- `src/utils/componentDocs.generated.ts` — Auto-generated component docs (src/utils/ now empty, removed)
- `src/lib/devtools/componentScanner.ts` — Scanner that imported componentDocs (src/lib/devtools/ now empty, removed)
- `scripts/generators/generate-component-docs.cjs` — Generator for component docs
- `scripts/dev/capture-component-preview.mjs` — Playwright-based capture script
- `tests/visual/components-library.spec.ts` — Visual test for /components route (dead)
- `tests/visual/core-sections.visual.spec.ts` — Visual test using component-library CSS selectors (dead)

**Updated config/scripts:**
- `package.json` — removed `generate:component-docs` script; `generate:core` now starts with `generate:content-registries` (no component-docs step)
- `scripts/core/check-generated.mjs` — removed componentDocs dependency; now checks only content registries + authority map
- `config/env.schema.shared.mjs` — removed `COMPONENT_LIBRARY_ENABLED` and `COMPONENT_CAPTURE_BASE_URL` env vars

**Updated route registration:**
- `src/domains/shared/staticPages.ts` — removed `/components` from `INTERNAL_STATIC_ROUTE_PATHS` + `STATIC_ROUTE_CONTENT`
- `src/proxy.ts` — removed `/components` from `PROTECTED_EXACT_PATHS` + `config.matcher`

**Updated tests:**
- `tests/smoke/routes.smoke.spec.ts` — removed `COMPONENT_LIBRARY_ENABLED` conditional + `/components`-specific assertions
- `tests/integration/route-inventory-coverage.test.ts` — removed `/components` from local `INTERNAL_STATIC_ROUTE_PATHS`
- `tests/helpers/reportAssertions.ts` — removed `COMPONENT_CAPTURE_BASE_URL` from volatile origins

### Still Delete Later (active imports, not yet rebuilt)
- `src/components/reusable/` — 248 imports from old feature/blog/resource/industry/case-study renderers
- `src/components/sections/` — Used by old renderers + active validator contracts (PrimaryCTASection, SectionShell)

### Results
- `system:full` — 56/56 validators, 0 warnings
- `npx next build` — clean

---

## Active Rules (updated through Milestone 6H)

- Old files are quarantined, not approved. They exist only while unrebuilt pages need them.
- Do NOT empty old files to fake a pass. If a file is still imported, it remains functional or its consumer is rebuilt first.
- New work must never import from `src/components/reusable` or `src/components/sections` in rebuilt/new files.
- Related sections are global and config/wrapper-owned. Page renderers must NOT render their own related sections.
- Use `[[muted:...]]` in title strings. Do not use `titleMuted` or `headingMuted`.
- New pages use `FAQSection` (`src/components/content/FAQSection.tsx`) — do not manually compose SectionFrame + Accordion.
- Approved new component folder: `src/components/content` for full reusable content sections.
- See `docs/Planning/Legacy-dependency-map.md` for the live deletion map.
- Quarantine enforced by `scripts/validators/validate-legacy-quarantine.mjs`.

---

## Milestone 6E — Legacy Quarantine + Dependency Kill Map

### What Changed

**Dependency audit completed (full repo scan):**
- Mapped all remaining old-UI consumers across domains
- Confirmed new-system folders are clean (layout/, primitives/, conversion/, navigation/, Homepage, SWS+LSA renderers)
- Identified 17 zero-import sections in `src/components/sections/` with no production imports (only test-imported via barrel)

**Deleted files:**
- `src/components/sections/AccordionFAQSection.tsx`
- `src/components/sections/AuthoritySignalMapSection.tsx`
- `src/components/sections/BeforeAfterSection.tsx`
- `src/components/sections/CompoundingSignalsSection.tsx`
- `src/components/sections/CriteriaComparisonSection.tsx`
- `src/components/sections/GridCardsSection.tsx`
- `src/components/sections/HeroSplitSection.tsx`
- `src/components/sections/ImageStorySection.tsx`
- `src/components/sections/JourneyLeakMapSection.tsx`
- `src/components/sections/LayerStackSection.tsx`
- `src/components/sections/LeakBoardSection.tsx`
- `src/components/sections/OperatingBuildSection.tsx`
- `src/components/sections/ProcessStepsSection.tsx`
- `src/components/sections/ProofStorySection.tsx`
- `src/components/sections/QualificationSection.tsx`
- `src/components/sections/ScopeSection.tsx`
- `src/components/sections/ServiceBridgeSection.tsx`
- `tests/unit/component-contracts.test.tsx` — only tested old reusable/sections components
- `tests/unit/layout-primitives-contract.test.tsx` — only tested old reusable/primitives

**Updated files:**
- `src/components/sections/index.ts` — trimmed to export only PrimaryCTASection, RelatedContentSection, and shared types (quarantine barrel)
- `scripts/validators/validate-content-enforcement.ts` — removed contract checks for 5 deleted section files (HeroSplitSection, ImageStorySection, LayerStackSection, GridCardsSection, ProcessStepsSection) from scanButtonRule; removed all entries from scanVariantRequiredData (9 delete-now sections)
- `scripts/core/system-manifest.mjs` — registered validate-legacy-quarantine validator + added report to expected list
- `docs/Planning/Legacy-dependency-map.md` — created (full deletion map)

**Created files:**
- `scripts/validators/validate-legacy-quarantine.mjs` — enforces no old UI imports in new/rebuilt files

### Quarantine Keep (still needed by unrebuilt pages)
- `src/components/sections/PrimaryCTASection.tsx` — ~40 consumers across all unrebuilt domains
- `src/components/sections/RelatedContentSection.tsx` — SmartRelatedSectionClient dependency
- `src/components/sections/SectionShell.tsx` — internal dependency of both above
- `src/components/sections/icons.ts`, `types.ts` — shared internals
- `src/components/reusable/` (entire folder) — all unrebuilt page domains

### Delete Gates (see Legacy-dependency-map.md for full detail)
- PrimaryCTASection → when About, Contact, all blog/features/industry/resource/case-study/old-service pages rebuilt
- RelatedContentSection → when SmartRelatedSectionClient rebuilt
- `src/components/sections/` folder → when both above deleted
- `src/components/reusable/` folder → when all consuming pages/components rebuilt

### Results
- `system:full` — 56/56 validators, 0 warnings
- `npx next build` — clean

---

## Milestone 6F — Rebuild Global Related Section

### What Changed

**Global `RelatedSection` created:**
- `src/components/navigation/RelatedSection.tsx` — single server component replacing the old SmartRelatedSection → SmartRelatedSectionClient → RelatedContentSection chain
- Props: `{ pageId, pageType, slug?, nodeType?, variant?: 'standard' | 'rail' | 'compact' }`
- Throws on missing data (no silent null fallbacks)
- CSS: `mw-related-section*` block added to `src/styles/components.css` (LSA card design direction; 3-col grid for standard, list for compact)

**LSA page-owned related section removed:**
- `lsa-related` JSX block removed from `LocalSeoAuthorityRenderer.tsx`
- `relatedSystems` data block removed from `src/domains/services/data/local-seo-authority.ts`
- `14. RELATED SYSTEMS` CSS section removed from `src/styles/services/local-seo.css` (~110 lines)
- `relatedSection: { enabled: false }` removed from LSA registry entry in `pageData.ts` — LSA now uses global injection

**Config injection updated:**
- `src/domains/services/config.tsx` — imports RelatedSection, passes `variant` from registry options
- `src/domains/features/config.tsx` — imports RelatedSection
- `src/domains/industries/config.tsx` — imports RelatedSection
- `src/domains/case-studies/templates/CaseStudyTemplate.tsx` — imports RelatedSection

**Deleted files:**
- `src/components/system/SmartRelatedSection.tsx`
- `src/components/system/SmartRelatedSectionClient.tsx`
- `src/components/sections/RelatedContentSection.tsx`
- `src/components/sections/icons.ts`

**Updated files:**
- `src/components/sections/types.ts` — removed `BulletItem` interface and `SectionIconKey` import (only consumers were icons.ts/RelatedContentSection)
- `src/components/sections/index.ts` — removed RelatedContentSection export and BulletItem from types re-export
- `src/domains/services/pageData.ts` — removed `RelatedContentMode` type; added `variant` option to `relatedSection`
- Validators: `validate-related-duplication.ts`, `validate-content-enforcement.ts`, `validate-legacy-quarantine.mjs`
- Tests: `system-integrity.test.ts`, `audit-coverage.test.ts`, `template-safety.test.tsx`, `services/config.test.tsx`, `features/config.test.tsx`, `CaseStudyTemplate.test.tsx`
- Docs: `Legacy-dependency-map.md` updated

### Quarantine Keep (still needed after 6F)
- `src/components/sections/PrimaryCTASection.tsx` — ~40 consumers across all unrebuilt domains
- `src/components/sections/SectionShell.tsx` — internal dependency of PrimaryCTASection
- `src/components/sections/types.ts` — internal dependency of PrimaryCTASection/SectionShell
- `src/components/sections/index.ts` — barrel (now only PrimaryCTASection + types)
- `src/components/reusable/` — all unrebuilt page domains

### Related Config Model (after 6F)
```ts
relatedSection?: {
  enabled?: boolean;       // default true — set false to suppress
  variant?: 'standard' | 'rail' | 'compact';  // default 'standard'
}
```

### Results
- `system:full` — 57/57 validators, 0 warnings (confirmed after 6H)
- `npx next build` — clean

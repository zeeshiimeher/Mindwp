# Industry Domain Rebuild Plan

## Purpose

This file is the direct execution plan for registered MindWP industry category and detail pages.

Use it before Claude Opus industry-domain work. It defines the current inventory, page-type rules, data direction, CSS ownership, and rebuild guardrails for pages under `/industries/[...slug]`.

## Current Inventory

The industry dynamic route is `src/app/industries/[...slug]/page.tsx`.

The registered industry domain contains 32 dynamic pages:

- 6 category pages.
- 26 detail pages.

The separate `/industries` listing route is not one of the 32 category/detail pages. Rebuild the listing after category/detail pages are stable.

## Final Architecture Principle

Industry category/detail pages follow the current MindWP production architecture:

CONTENT → PATTERN → COMPONENT → VARIANT / CONTROL → RENDER

Use:

- `HeroFrame`
- `SectionFrame`
- `FAQSection` where useful
- `DecisionPanel`
- config/wrapper-injected `RelatedSection`
- contact helpers and approved CTA labels
- token-based CSS only

Do not use:

- old industry templates
- old reusable sections
- old section shells
- shared skeleton renderers/helpers
- manual `RelatedSection`
- hardcoded `/contact`
- hardcoded CTA labels
- old `rd-*`, `l-*`, or `btn-*` classes
- raw colors outside `tokens.css`

## Page Type Rules

Category pages cover a group of related business types. They should explain the shared operating pattern, show where work commonly slips, route visitors toward detail pages, and connect the category to relevant MindWP systems.

Detail pages cover one business type. They should stay close to that working day: calls, forms, quotes, bookings, reviews, staff handoff, and missed follow-up.

Industry pages are vertical landing pages. They are not generic service pages, broad guides, or template galleries.

## Category Page Pattern

Category pages may run 10–12 sections because they need to route several business types without becoming a listing page.

Starting direction:

1. Hero.
2. Category leak summary.
3. Shared operating pattern.
4. Category breakpoints.
5. Operating models.
6. Pathway map.
7. System starting points.
8. Detail industry routes.
9. Handled state.
10. Scenario strip.
11. FAQ.
12. Decision panel.

Claude Opus may merge, rename, add, remove, or reorder sections when the page works better. Category pages must remain broader than detail pages.

## Detail Page Pattern

Detail pages usually run 7–10 sections because the page must stay specific to one business type.

Starting direction:

1. Hero.
2. Industry-specific leak pattern.
3. Leak timeline.
4. Before / after operating state.
5. Workbench: what gets put in place.
6. Starting points.
7. Workflow examples.
8. Relevant systems.
9. Scenario.
10. FAQ.
11. Decision panel.

Claude Opus may merge, rename, add, remove, or reorder sections when the page works better. Detail pages must remain tighter and more concrete than category pages.

## Category Visual Direction

Category pages should feel like a vertical operating map, not a directory.

Use visual patterns such as:

- category leak board
- shared operating pattern panel
- business-type pathway map
- operating model comparison
- system starting-point board
- detail route grid/list
- scenario strip

Avoid turning category pages into simple card lists of industries.

## Detail Visual Direction

Detail pages should feel like one business type’s working day.

Use visual patterns such as:

- seasonal or operational timeline
- missed-enquiry / open-quote board
- before / after operating state
- workflow trigger table
- where-to-start selector
- relevant systems map
- scenario / outcome strip

Avoid generic feature grids and service-page style system explanations.

## Proof / Scenario Rule

Industry pages may use scenario examples, but they must be labelled honestly.

Use “Scenario” or “Illustrative example” when the story is not attributed client proof.

Do not imply measured client results, rankings, revenue gains, or conversion improvements without verified proof.

## Category Focus Map

Automotive Services:

- missed calls
- quote follow-up
- booking visibility
- reviews after completed work

Beauty & Personal Care:

- appointment gaps
- repeat visits
- missed DMs
- review consistency
- local trust

Home Services:

- urgent enquiries
- missed calls
- quotes going cold
- service-area visibility
- review capture

Legal & Professional Services:

- consultation requests
- slow replies
- trust proof
- lead ownership
- follow-up discipline

Local Appointment Businesses:

- booking enquiries
- no-shows
- repeat visits
- review timing
- staff handoff

Real Estate & Property Services:

- lead response
- appointment coordination
- document/status visibility
- local proof
- referral trust

## Registered Category Pages

- `/industries/automotive-services`
- `/industries/beauty-personal-care`
- `/industries/home-services`
- `/industries/legal-professional-services`
- `/industries/local-appointment-businesses`
- `/industries/real-estate-property-services`

## Registered Detail Pages

Automotive Services:

- `/industries/automotive-services/auto-repair`
- `/industries/automotive-services/body-shops`
- `/industries/automotive-services/car-detailing`
- `/industries/automotive-services/mobile-mechanics`

Beauty & Personal Care:

- `/industries/beauty-personal-care/aesthetic-cosmetic-clinics`
- `/industries/beauty-personal-care/hair-salons`
- `/industries/beauty-personal-care/lash-lift-and-extensions`
- `/industries/beauty-personal-care/nail-salons`
- `/industries/beauty-personal-care/small-med-spas`

Home Services:

- `/industries/home-services/electrical-companies`
- `/industries/home-services/hvac-companies`
- `/industries/home-services/landscaping-companies`
- `/industries/home-services/plumbing-companies`
- `/industries/home-services/roofing-companies`

Legal & Professional Services:

- `/industries/legal-professional-services/accounting-firms`
- `/industries/legal-professional-services/consultants`
- `/industries/legal-professional-services/small-law-firms`

Local Appointment Businesses:

- `/industries/local-appointment-businesses/dental-clinics`
- `/industries/local-appointment-businesses/driving-schools`
- `/industries/local-appointment-businesses/repair-shops`
- `/industries/local-appointment-businesses/small-private-clinics`
- `/industries/local-appointment-businesses/tattoo-studios`

Real Estate & Property Services:

- `/industries/real-estate-property-services/home-inspectors`
- `/industries/real-estate-property-services/mortgage-brokers`
- `/industries/real-estate-property-services/property-managers`
- `/industries/real-estate-property-services/realtors`

## Data Direction

Industry data should describe business meaning, not visual decoration.

Category data may use semantic groups such as:

- `hero`
- `categoryLeaks`
- `sharedPattern`
- `breakpoints`
- `operatingModels`
- `pathwayMap`
- `startingSystems`
- `detailRoutes`
- `handledState`
- `scenarioStrip`
- `faq`
- `cta`

Detail data may use semantic groups such as:

- `hero`
- `industryPattern`
- `leakTimeline`
- `beforeAfter`
- `workbench`
- `startingPoints`
- `workflowExamples`
- `relevantSystems`
- `scenario`
- `faq`
- `cta`

Claude Opus may change section names and data shapes during final rebuild when it improves the page.

Do not carry forward old component prop data, icon constructors, CSS prefixes, prices, packages, visual props, or hardcoded CTA actions.

## CSS Strategy

Industry CSS belongs in the shared industry CSS files:

- `src/styles/industries/category.css`
- `src/styles/industries/detail.css`

Use token-based CSS only. Do not create one CSS file per industry page by default.

Category-level visual bodies belong in `category.css`. Detail-level visual bodies belong in `detail.css`.

## `/industries` Listing Rule

The `/industries` listing page is separate from the 32 category/detail pages.

Rebuild the listing after category/detail pages are stable.

Keep listing/catalog compatibility only where needed until that listing rebuild happens.

## Claude Opus Freedom Rule

Claude Opus may:

- add, remove, merge, rename, or reorder sections;
- change data shapes;
- replace skeleton placeholders with final page-specific visual JSX;
- adjust tone rhythm and visual emphasis;
- add final CSS in the approved industry CSS files.

Claude Opus must preserve:

- page type;
- industry specificity;
- system boundaries;
- proof honesty;
- CTA discipline;
- wrapper-owned related content;
- token-based CSS rules.

## Build Order

1. Rebuild category pages by category group.
2. Rebuild detail pages by category group.
3. Rebuild `/industries` listing after category/detail pages are stable.
4. Remove dead CSS, stale placeholders, unused data, and old imports after each group.
5. Run validation and build checks.

## Do

- Keep category pages broad enough to route multiple business types.
- Keep detail pages specific to one business type’s working day.
- Use industry working-day language.
- Use direct renderers.
- Use config-injected `RelatedSection`.
- Use contact helpers and approved CTA labels.
- Preserve SEO, graph metadata, route identity, and breadcrumbs.
- Let Claude Opus improve section flow when the page becomes stronger.

## Do Not

- Do not make industry pages read like generic service pages.
- Do not make detail pages as broad as category pages.
- Do not make category pages as thin as simple landing pages.
- Do not use old industry templates.
- Do not use old data shapes as the rebuild blueprint.
- Do not create a shared industry skeleton renderer/helper.
- Do not manually render `RelatedSection`.
- Do not preserve hardcoded `/contact` or `Get Started` actions.
- Do not preserve icon constructors in category/detail data.
- Do not add fake proof, fake metrics, or guarantee claims.

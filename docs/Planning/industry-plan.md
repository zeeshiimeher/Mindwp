# Industry Domain Rebuild Plan

## Purpose

Prepare the industry domain for clean final rebuilds by Claude Opus. This plan records the current repo inventory, page-type rules, approved skeleton architecture, and guardrails for the category/detail pages now registered under `/industries/[...slug]`.

This pass is a setup pass only. It resets old industry category/detail render gravity, removes old data shapes from the registered pages, and leaves direct skeleton renderers that can be rewritten page by page later.

## Current Inventory

The industry dynamic route is `src/app/industries/[...slug]/page.tsx`. It resolves graph nodes of type `industry-category` and `industry-detail`, then renders registered pages through `src/domains/industries/config.tsx`.

The registry contains 32 dynamic pages:

- 6 category pages.
- 26 detail pages.

The separate `/industries` listing route is `src/app/industries/page.tsx`. It is not one of the 32 category/detail pages and is not rebuilt in this pass.

## Final Architecture Principle

Category/detail industry pages must follow the current MindWP architecture:

CONTENT -> PATTERN -> COMPONENT -> VARIANT / CONTROL -> RENDER

Content owns the business meaning. Renderers compose the page directly from semantic data. CSS owns visual treatment. Global related content remains config/wrapper-owned.

Use the current new-system components for category/detail pages:

- `HeroFrame`
- `SectionFrame`
- `FAQSection`
- `DecisionPanel`

Do not use old industry templates, old reusable sections, old section shells, or manual related sections.

## Page Type Rules

Category pages cover a group of business types. They should explain the shared operating pattern, show where enquiries and follow-up commonly slip, and route visitors toward the closest detail page.

Detail pages cover one business type. They should stay close to that working day: calls, forms, quotes, bookings, reviews, staff handoff, and missed follow-up.

Industry pages are vertical landing pages. They are not generic service pages, broad guides, or template galleries.

## Category Page Pattern

Category pages may run 10-12 sections because they need to route several business types without becoming a listing page.

Starting pattern:

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

Claude Opus may merge, rename, add, remove, or reorder sections during final rebuild when the page works better. Category pages must remain broader than detail pages.

## Detail Page Pattern

Detail pages should usually run 7-10 sections because the page must stay specific to one business type.

Starting pattern:

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

Claude Opus may merge, rename, add, remove, or reorder sections during final rebuild when the page works better. Detail pages must remain tighter and more concrete than category pages.

## Registered Category Pages

- `/industries/automotive-services`
- `/industries/beauty-personal-care`
- `/industries/home-services`
- `/industries/legal-professional-services`
- `/industries/local-appointment-businesses`
- `/industries/real-estate-property-services`

## Registered Detail Pages

- `/industries/automotive-services/auto-repair`
- `/industries/automotive-services/body-shops`
- `/industries/automotive-services/car-detailing`
- `/industries/automotive-services/mobile-mechanics`
- `/industries/beauty-personal-care/aesthetic-cosmetic-clinics`
- `/industries/beauty-personal-care/hair-salons`
- `/industries/beauty-personal-care/lash-lift-and-extensions`
- `/industries/beauty-personal-care/nail-salons`
- `/industries/beauty-personal-care/small-med-spas`
- `/industries/home-services/electrical-companies`
- `/industries/home-services/hvac-companies`
- `/industries/home-services/landscaping-companies`
- `/industries/home-services/plumbing-companies`
- `/industries/home-services/roofing-companies`
- `/industries/legal-professional-services/accounting-firms`
- `/industries/legal-professional-services/consultants`
- `/industries/legal-professional-services/small-law-firms`
- `/industries/local-appointment-businesses/dental-clinics`
- `/industries/local-appointment-businesses/driving-schools`
- `/industries/local-appointment-businesses/repair-shops`
- `/industries/local-appointment-businesses/small-private-clinics`
- `/industries/local-appointment-businesses/tattoo-studios`
- `/industries/real-estate-property-services/home-inspectors`
- `/industries/real-estate-property-services/mortgage-brokers`
- `/industries/real-estate-property-services/property-managers`
- `/industries/real-estate-property-services/realtors`

## Data Strategy

Registered category/detail data must be semantic and header-first. Data should describe page meaning and rebuild intent, not visual decoration.

Category data groups:

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

Detail data groups:

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

Do not preserve old component prop data, icon constructors, CSS prefixes, prices, packages, visual props, or hardcoded CTA actions in category/detail data.

## CSS Strategy

Industry CSS belongs in the shared industry CSS files:

- `src/styles/industries/category.css`
- `src/styles/industries/detail.css`

These files should stay minimal during skeleton setup. Use token-based CSS only. Do not create one CSS file per industry page in this pass.

## /industries Listing Decision

The `/industries` listing page is deliberately left for later. It may still use old listing/catalog structures until its own rebuild pass. Do not use listing debt as a reason to keep old category/detail data or templates.

Only touch the listing if an import path must change to keep the build compiling.

## Claude Opus Freedom Rule

Every registered category/detail page must be easy for Claude Opus to rebuild directly later.

That means:

- each category/detail page has direct semantic data;
- each category/detail page has a direct explicit renderer;
- section bodies contain only the skeleton placeholder comment until final rebuild;
- config may map paths to renderers, but it must not hide pages behind a shared skeleton renderer/helper.

The required placeholder inside each skeleton section body is:

```tsx
{
  /* Opus rebuild placeholder: design this section from approved industry-plan.md. */
}
```

## Execution Order

1. Recreate this plan from the audit.
2. Add/import approved industry CSS files.
3. Replace old industry data types with semantic header-first types.
4. Reset all 32 registered category/detail data files.
5. Add direct explicit renderers for all 32 registered category/detail pages.
6. Update industry config to use the direct renderers while preserving wrapper-owned CTA registry and related content.
7. Remove old category/detail templates and unused industry-only wrapper utilities when no consumers remain.
8. Expand validators for the rebuilt industry renderer/CSS surface where needed.
9. Run targeted searches, lint, system checks, typecheck, and build.
10. Commit with `ui-hard-reset: prepare industry domain skeletons`.

## Do

- Keep the dynamic route and registry ownership intact.
- Keep `/industries` listing rebuild separate.
- Use `buildIndustryContactHref()` for category/detail conversion links.
- Use `PRIMARY_CTA_LABEL` for the CTA label.
- Keep `RelatedSection` wrapper-owned in domain config.
- Keep category/detail renderers direct and page-specific.
- Keep skeleton CSS minimal and token-based.
- Preserve SEO, graph metadata, category/detail route identity, and breadcrumbs.
- Keep category pages broader than detail pages.
- Keep detail pages specific to the business type's working day.

## Do Not

- Do not rebuild final industry visuals in the skeleton pass.
- Do not copy old industry templates.
- Do not preserve old data shapes.
- Do not create a shared industry skeleton renderer/helper.
- Do not preserve `cssPrefix` in category/detail data.
- Do not preserve icon constructors in category/detail data.
- Do not preserve hardcoded `/contact`.
- Do not preserve `Get Started`.
- Do not manually render `RelatedSection` in page renderers.
- Do not read or depend on external design folders for this pass.
- Do not edit the homepage, Smart Website Systems, Local SEO Authority, rebuilt service-domain pages, or `/industries` listing except for compile-only compatibility.
- Do not add fake proof, fake metrics, or guarantee claims.

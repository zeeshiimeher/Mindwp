# Industry Domain Rebuild Plan

> Working planning file for the industry-domain audit and rebuild.
> GPT-5.5 will recreate this document after the full industry audit.
> Until then, use this as the temporary direction guardrail.

## Current Decision

Industries will follow the same corrected workflow used for services:

1. Audit the industry registry, routes, data, renderers, and CSS.
2. Classify pages as category pages, detail pages, missing pages, or cleanup candidates.
3. Recreate this file from the audit result.
4. Reset industry pages to direct renderer skeletons.
5. Let Claude Opus rebuild final industry pages from this plan.

Old industry data and renderers are inventory only. They are not design blueprints.

GPT-5.5 should not read or use any external design implementation during the industry audit or skeleton setup. The visual ideas needed for planning are written directly in this document. Do not copy external design code, inline styles, raw colors, Tailwind classes, mock links, local-state patterns, or component structure.

## Page Types

### Industry Category Pages

Industry category pages cover a whole group of business types.

They may run 10–12 sections because they need to explain:

- the shared operating pattern across the category
- where work commonly slips
- the business types inside the category
- which MindWP systems usually matter
- how visitors should choose the closest detail page
- common objections and fit questions

Starting direction:

1. Hero
2. Category leak summary panel
3. Shared operating pattern
4. Category breakpoints
5. Business model / operating types
6. Pathway map by business type
7. System starting points
8. Detail industry routes
9. What changes when handled
10. Scenario / proof strip
11. FAQ
12. CTA

Claude Opus may add, remove, merge, rename, or reorder sections when there is a strong reason. Category pages should stay broader than detail pages.

### Industry Detail Pages

Industry detail pages focus on one business type’s working day.

They should usually run 7–9 sections because they need to stay specific and not become service pages.

Starting direction:

1. Hero
2. Industry-specific leak pattern
3. Before / after operating state
4. What gets put in place
5. Where to start
6. Workflow examples / scenario board
7. Relevant systems
8. FAQ
9. CTA

Claude Opus may add, remove, merge, rename, or reorder sections when there is a strong reason. Detail pages should stay tighter than category pages.

The detail-page visual direction below uses a landscaping example. Treat it as a self-contained direction note for detail pages, not a locked layout.

Useful detail-page rhythm:

1. Dark hero with exact industry moment and an operations panel.
2. Timeline showing where the season or working cycle slips.
3. Before / after section showing one specific business state change.
4. Practical pieces section showing what gets put in place.
5. Where-to-start selector for the first fix.
6. Workflow / scenario board showing trigger, action, and owner.
7. Relevant systems list connected to the industry leak.
8. Scenario / outcome strip with honest proof framing.
9. FAQ.
10. Dark CTA.

For landscaping, the useful content pattern is:

- spring gets busy
- quotes start slipping
- patio and garden enquiries go quiet
- maintenance regulars are not reactivated
- finished work does not become reviews
- open quote board and reminders make work visible
- relevant systems include Smart Website Systems, Local SEO Authority, CRM & Automation, and Reputation & Review

For other detail pages, replace the seasonal examples with that industry's working rhythm. Do not force landscaping language onto other industries.

## Visual Direction Rule

This document contains the visual direction needed for audit, skeleton setup, and later rebuild. Do not require Copilot/GPT to know or read any external Figma, Make, or Mindwp-Design source.

Useful category-page ideas:

- dark hero with a “where work leaks” panel
- shared operating pattern board
- pathway map / table by business type
- repeating break-point cards
- industry route list
- proof strip
- split FAQ
- dark CTA panel

Useful detail-page ideas:

- dark hero with an industry-specific operations panel
- seasonal or operational leak timeline
- before / after operating state
- practical build pieces / workbench table
- where-to-start selector panel
- workflow / scenario board
- relevant systems list
- scenario / outcome strip
- split FAQ
- dark CTA panel

Rebuild all of this inside the real MindWP architecture.

## Architecture Rules

Use:

- `HeroFrame`
- `SectionFrame`
- `FAQSection` where useful
- `DecisionPanel`
- config/wrapper-injected related content
- contact helpers and approved CTA labels
- token-based CSS only

Do not use:

- old `reusable/*` imports
- old `sections/*` imports
- `PrimaryCTASection`
- hardcoded `/contact`
- hardcoded CTA labels
- old `rd-*`, `l-*`, or `btn-*` classes
- raw hex or `rgba()` outside `tokens.css`
- inline styles
- Tailwind classes in production TSX
- copied external design implementation code

## CSS Direction

Industry visual CSS should live in the approved industry-domain CSS location after the audit confirms the current import structure.

Do not create one CSS file per industry page by default.

Use clear prefixes after the industry audit confirms naming.

## Data Direction

Data should describe business meaning, not visual decoration.

Good category data groups may include:

- `hero`
- `sharedPattern`
- `categoryLeaks`
- `operatingModels`
- `startingSystems`
- `detailRoutes`
- `scenarioStrip`
- `faq`
- `cta`

Good detail data groups may include:

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

These are starting directions only. GPT-5.5 should recreate this plan after auditing the real industry registry and current files.

## Do

- Audit before editing.
- Classify category and detail pages before skeleton work.
- Keep GPT-5.5 focused on repo reality, registry/routes, current industry files, and skeleton setup.
- Keep category pages broad enough to route multiple industry types.
- Keep detail pages specific to one business type.
- Use industry working-day language.
- Use seasonal, operational, and job-flow visuals when useful.
- Let Claude Opus change section count, order, names, and data shapes when it improves the page.

## Do Not

- Do not let old industry data shapes become the rebuild blueprint.
- Do not copy external design implementation code.
- Do not ask GPT-5.5 to read external design folders or screenshots during audit or skeleton setup.
- Do not make industry pages read like generic service pages.
- Do not make detail pages as broad as category pages.
- Do not make category pages as thin as simple landing pages.
- Do not add fake proof, fake metrics, or guarantee claims.
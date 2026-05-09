# Service Domain Rebuild Plan

## Purpose

This file is the direct execution plan for the registered MindWP service detail pages.

Use it before Claude Opus service-domain work. It defines which pages stay untouched, which pages get rebuilt, which pages stay simple, and which pages are outside the current service-detail rebuild.

## Final Architecture Principle

Smart Website Systems and Local SEO Authority are the production baseline. They show the final technique all rebuilt service pages must converge toward:

- semantic data groups carry business meaning
- renderers map data into `HeroFrame`, `SectionFrame`, `FAQSection`, and `DecisionPanel`
- custom visual bodies live in renderer JSX
- page or domain CSS owns visual bodies only
- `SectionFrame` owns section shell, heading, tone, rhythm, and container
- `HeroFrame` owns the hero shell
- `FAQSection` owns FAQ presentation
- `DecisionPanel` owns the final CTA
- `RelatedSection` is injected by the service config wrapper
- contact URLs come from the CTA/contact helpers
- rebuilt files do not import old reusable or sections folders
- rebuilt files do not use old `rd-*`, `l-*`, or `btn-*` classes

Current service renderers are direct staging skeletons. Claude Opus should replace placeholders with final page bodies while keeping this production architecture intact.

## Page Classification

### 1. Baseline Keep

- Homepage
- `smart-website-systems` at `/services/smart-website-systems`
- `local-seo-authority` at `/services/local-seo-authority`

Decision: keep these untouched. They remain the reference for final production rebuild technique.

### 2. Reset / Tier-1 Rebuild

- `ai-lead-handling` at `/services/ai-lead-handling`
- `crm-infrastructure-implementation` at `/services/crm-infrastructure-implementation`
- `reputation-review-systems` at `/services/reputation-review-systems`

These are strategic system pages. Claude Opus should rebuild them with full page-specific visual bodies, semantic data groups, and `services.css` rules.

### 3. Builder / Simple Migration

- `elementor` at `/services/elementor`
- `divi5` at `/services/divi5`
- `bricks-builder` at `/services/bricks-builder`

These are simple practical capability pages. They should not become heavy Tier-1 service pages.

### 4. Feature-like / Supporting

- `conversion-layer` at `/services/conversion-layer`
- `lead-reactivation-system` at `/services/lead-reactivation-system`
- `missed-call-recovery-system` at `/services/missed-call-recovery-system`
- `unified-communication-system` at `/services/unified-communication-system`
- `system-migration-platform-consolidation` at `/services/system-migration-platform-consolidation`
- `wordpress-development` at `/services/wordpress-development`
- `ecommerce` at `/services/ecommerce`

These support a parent system or a practical implementation path. Most need lighter treatment than Tier-1 pages.

### 5. Decision / Comparison / Narrow Treatment

- `conversion-funnel-system-vs-landing-page-development` at `/services/conversion-funnel-system-vs-landing-page-development`
- `website-crm-integration-vs-manual-lead-handling` at `/services/website-crm-integration-vs-manual-lead-handling`
- `service-pages-vs-one-generic-services-page` at `/services/service-pages-vs-one-generic-services-page`
- `website-redesign-system-rebuild` at `/services/website-redesign-system-rebuild`

These should stay focused. They are decision-support pages, not full strategic system pages.

### 6. Planned New Tier-1 Service Page

Revenue Growth exists as a canonical system and public concept. Create `/services/revenue-growth` as the final Tier-1 service page after the existing registered service pages are rebuilt and stable.

## CSS Strategy

- Smart Website Systems keeps `src/styles/services/smart-website.css`.
- Local SEO Authority keeps `src/styles/services/local-seo.css`.
- `src/styles/services.css` is the shared service-domain CSS home for newer reset pages.
- Do not create one CSS file per service page by default.
- Builder and simple pages should stay visually light.
- AI Lead Handling starts from the staged renderer and shared `services.css`, not from previous visual attempts.
- Final visual section CSS belongs to Claude Opus rebuild work.
- Claude Opus adds page-specific visual body CSS into `services.css` with clean prefixes.

## Renderer Comment Rule

Renderer comments must stay minimal. Do not add large blocks for purpose, visual intent, data needs, boundaries, or avoid lists inside JSX.

Allowed placeholder inside `SectionFrame` bodies only:

```tsx
{
  /* Opus rebuild placeholder: design this section from approved services-plan.md. */
}
```

Claude Opus should use this file for direction and replace renderer placeholders with final section bodies.

## Reset / Tier-1 Rebuild Group

### AI Lead Handling

- Route: `/services/ai-lead-handling`
- Role: Tier-1 service page for fast response and routing.
- Buyer entry point: calls, forms, DMs, and missed enquiries are arriving but response depends on timing or memory.
- Plain promise: enquiries get a fast first response and a clear handoff without the owner watching every channel.
- Visual motif: first-contact control surface.
- Starting section direction: hero, response gap, channel surface, handled path, AI boundary, scenario readiness, fit filter, FAQ, CTA.
- FAQ decision: keep FAQ. The buyer will need clarity around human handoff, AI boundaries, and what counts as a good fit.
- CTA direction: invite a diagnostic conversation about where first response is failing.
- Boundary risks: avoid chatbot hype, tool pricing, compliance claims, and making AI own website, SEO, CRM, or review work.
- Opus handoff notes: show unhandled vs handled contact states before explaining the system. Keep the owner/team visible in the handoff.

### CRM & Automation

- Route: `/services/crm-infrastructure-implementation`
- Role: Tier-1 service page for lead ownership, follow-up, and visible status after enquiry capture.
- Buyer entry point: leads exist, but nobody can reliably see who owns them, what happened next, or what needs chasing.
- Plain promise: every enquiry has an owner, a next step, and a visible state.
- Visual motif: lead ownership board.
- Starting section direction: hero, ownership gap, lead board, follow-up path, status visibility, handoff boundaries, readiness filter, FAQ, CTA.
- FAQ decision: keep FAQ. Buyers will need clarity around existing tools, team adoption, handoff from forms/calls, and reporting.
- CTA direction: ask what is being missed after the enquiry arrives.
- Boundary risks: do not make CRM own first response, website structure, search visibility, or review generation.
- Opus handoff notes: show status and ownership rather than abstract automation. Avoid vague automation language.

### Reputation & Review

- Route: `/services/reputation-review-systems`
- Role: Tier-1 service page for review request timing, feedback routing, and trust signal visibility.
- Buyer entry point: good work happens, but reviews are inconsistent and negative feedback is not routed early.
- Plain promise: happy customers are asked at the right time, and sensitive feedback is caught before it becomes public damage.
- Visual motif: trust signal loop / review recovery board.
- Starting section direction: hero, trust gap, review timing, feedback route, monitoring board, local trust handoff, fit filter, FAQ, CTA.
- FAQ decision: keep FAQ. Buyers will need clarity around ethical reviews, timing, negative feedback, and Google boundaries.
- CTA direction: ask where reviews or feedback currently fall through.
- Boundary risks: do not imply fake reviews, guaranteed ratings, Local SEO ownership, or traffic acquisition.
- Opus handoff notes: make the loop visible: job finished, ask sent, feedback routed, review captured, signal monitored.

## Builder / Simple Migration Group

### Elementor

- Route: `/services/elementor`
- Role: practical builder capability page.
- Simple page intent: explain when Elementor is an acceptable implementation path inside the wider MindWP model.
- Section count: 5 to 7 including hero and CTA.
- Skeleton approach: hero, fit, delivery path, practical boundaries, next step, CTA.
- Why not Tier-1: the buyer is choosing or maintaining a build method, not selecting a strategic MindWP system.

### Divi 5

- Route: `/services/divi5`
- Role: practical builder capability page.
- Simple page intent: clarify where Divi 5 fits for structured site work without positioning MindWP as a Divi shop.
- Section count: 5 to 7 including hero and CTA.
- Skeleton approach: hero, fit, delivery path, practical boundaries, next step, CTA.
- Why not Tier-1: it is an implementation option under Smart Website Systems, not a system of its own.

### Bricks Builder

- Route: `/services/bricks-builder`
- Role: practical builder capability page.
- Simple page intent: explain when Bricks is useful for a controlled website build or rebuild.
- Section count: 5 to 7 including hero and CTA.
- Skeleton approach: hero, fit, delivery path, practical boundaries, next step, CTA.
- Why not Tier-1: it is a build method, not a strategic service pillar.

## Feature-like / Supporting Group

### Conversion Layer

- Role: revenue-growth supporting module.
- Treatment: focused feature-like page about what happens after enquiries arrive.
- Opus depth: lighter than a Tier-1 page.

### Lead Reactivation System

- Role: revenue-growth supporting module.
- Treatment: focused page for dormant leads, old quotes, and missed follow-up recovery.
- Opus depth: light supporting-page rebuild.

### Missed Call Recovery System

- Role: AI Lead Handling supporting module.
- Treatment: focused page around unanswered calls and recovery routing.
- Opus depth: lighter than the parent AI page.

### Unified Communication System

- Role: AI Lead Handling supporting module.
- Treatment: focused page around channel ownership and message routing.
- Opus depth: light supporting-page rebuild.

### System Migration & Platform Consolidation

- Role: Smart Website implementation pathway.
- Treatment: practical migration/rebuild support page.
- Opus depth: light practical implementation-page rebuild.

### WordPress Development

- Role: Smart Website implementation pathway.
- Treatment: practical capability page that avoids generic WordPress agency positioning.
- Opus depth: light practical capability-page rebuild.

### Ecommerce

- Role: Smart Website commerce pathway.
- Treatment: practical commerce page focused on enquiry/order handling and operational fit.
- Opus depth: light practical commerce-page rebuild.

## Decision / Comparison / Narrow Treatment Group

### Conversion Funnel System vs Landing Page Development

- Role: narrow decision-support comparison.
- Direction: help the buyer decide between a one-off landing page and a connected conversion path.
- Keep focused: decision problem, comparison, when each fits, boundaries, CTA.

### Website CRM Integration vs Manual Lead Handling

- Role: narrow decision-support comparison.
- Direction: explain when manual handling stops being reliable and CRM ownership becomes necessary.
- Keep focused: decision problem, comparison, when each fits, boundaries, CTA.

### Service Pages vs One Generic Services Page

- Role: narrow decision-support comparison.
- Direction: explain when one generic page hides intent and when service-specific pages are needed.
- Keep focused: decision problem, comparison, when each fits, boundaries, CTA.

### Website Redesign System Rebuild

- Role: narrow redesign/rebuild decision page.
- Direction: distinguish surface redesign from rebuilding the handling structure behind the site.
- Keep focused: decision problem, comparison, rebuild triggers, boundaries, CTA.

## Revenue Growth Page Decision

Revenue Growth will become a registered Tier-1 service detail page at `/services/revenue-growth`.

Create it after the existing registered service pages are rebuilt and stable.

Revenue Growth owns post-enquiry improvement: quote recovery, conversion refinement, repeat customer triggers, reactivation, and spend-to-work visibility.

Revenue Growth must not become generic growth hacking, ad campaign management, SEO visibility, or guaranteed revenue claims.

During the current rebuild, Revenue Growth work is represented through registered supporting pages such as `conversion-layer` and `lead-reactivation-system`. The dedicated Revenue Growth page comes after those existing service-domain pages are stable.

## Execution Order

1. Claude Opus rebuilds AI Lead Handling from the direct renderer skeleton.
2. Claude Opus rebuilds CRM & Automation and Reputation & Review.
3. Claude Opus migrates builder/simple pages with light practical flows.
4. Claude Opus migrates supporting and feature-like pages with lighter treatment than Tier-1 pages.
5. Claude Opus migrates comparison and decision pages with narrow decision-support structure.
6. After existing registered service pages are stable, create `/services/revenue-growth` as the final Tier-1 service page.
7. After each group, remove dead CSS, dead imports, stale placeholders, and old data that is no longer used.

## Do

- Keep SWS and LSA untouched.
- Use header-first section data for skeleton pages.
- Use `buildServiceContactHref` and `PRIMARY_CTA_LABEL`.
- Use `HeroFrame`, `SectionFrame`, `FAQSection`, and `DecisionPanel`.
- Let service config inject `RelatedSection`.
- Keep builder pages light.
- Keep decision pages narrow.
- Add final visual section CSS during Claude Opus rebuilds, inside `services.css` unless a separate CSS file is explicitly justified later.
- Create `/services/revenue-growth` after the existing registered service pages are rebuilt and stable.

## Do Not

- Do not create one CSS file per service page by default.
- Do not import from `@/components/reusable/*` or `@/components/sections/*` in reset service renderers.
- Do not use `PrimaryCTASection` in reset service renderers.
- Do not manually render `RelatedSection` inside service renderers.
- Do not hardcode `/contact` or CTA labels.
- Do not use old `rd-*`, `l-*`, or `btn-*` classes.
- Do not use previous AI Lead Handling visual attempts as the final design source.
- Do not treat staging skeletons as final page designs.
- Do not create the Revenue Growth page before the existing registered service pages are rebuilt and stable.

# Service Domain Rebuild Plan

## Purpose

This file is the service-domain reference for the registered MindWP service detail pages.

Use it for service page roles, system boundaries, CSS ownership, cleanup guidance, and future approved refinements. Service detail pages are already rebuilt; do not treat this as a pending rebuild plan.

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

Current service renderers are rebuilt direct renderers. Future edits must keep this production architecture intact.

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

These are strategic system pages. They are rebuilt; future edits should preserve page-specific visual bodies, semantic data groups, and `services.css` rules.

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

### 6. Revenue Growth

Revenue Growth is now part of the rebuilt service-domain set at `/services/revenue-growth`.

## CSS Strategy

- Smart Website Systems keeps `src/styles/services/smart-website.css`.
- Local SEO Authority keeps `src/styles/services/local-seo.css`.
- `src/styles/services.css` is the shared service-domain CSS home for newer reset pages.
- Do not create one CSS file per service page by default.
- Builder and simple pages should stay visually light.
- Future service CSS refinements stay in the existing service CSS ownership model.

## Renderer Comment Rule

Future edits should remove any stale placeholder comments from completed pages and keep renderer comments minimal.

## Page Blueprint Rule

Each page below defines:

- Pattern: the page's structural role and visual direction.
- Sections: the starting section flow Claude Opus should build from.
- Instructions: the specific boundaries and design choices to protect.

The page blueprints below remain useful role and boundary references. Future edits may change section count, order, names, data shapes, and renderer body structure when that produces a stronger page. The page role, system ownership, CTA discipline, proof honesty, and CSS rules must stay intact.

## Reset / Tier-1 Rebuild Group

### AI Lead Handling

- Route: `/services/ai-lead-handling`
- Role: Tier-1 service page for fast first response and routing.
- Pattern: first-contact control surface. The page should feel like incoming calls, forms, messages, and missed enquiries are being caught, qualified, and handed off before they go cold.
- Buyer entry point: calls, forms, DMs, and missed enquiries are arriving but response depends on timing or memory.
- Plain promise: enquiries get a fast first response and a clear handoff without the owner watching every channel.
- Visual motif: first-contact board / response control surface.
- CTA direction: invite a diagnostic conversation about where first response is failing.

Sections:

1. Hero — show the after-hours or missed-contact moment immediately.
2. Response gap — make the cost of slow first reply visible.
3. Channel surface — show phone, form, chat, DM, and missed-call entry points as live states.
4. Handled path — show enquiry received → first response → context captured → routed.
5. AI boundary — clarify what AI handles and where human/team/CRM handoff begins.
6. Scenario / readiness — show a realistic first-contact recovery example without fake proof.
7. Fit filter — who this works for and who it does not fit.
8. FAQ — answer objections about bots, human handoff, accuracy, and setup.
9. CTA — diagnostic invitation.

Instructions:

- Do not make this a chatbot product page.
- Do not imply AI replaces the team.
- Do not make AI own CRM follow-up, website architecture, SEO, reviews, or revenue reporting.
- Show unhandled vs handled contact states before explaining technology.
- Keep owner/team visibility in the handoff.
- Avoid robot visuals, SaaS dashboards, “24/7 assistant” framing, and compliance claims.

### CRM & Automation

- Route: `/services/crm-infrastructure-implementation`
- Role: Tier-1 service page for lead ownership, follow-up, and visible status after enquiry capture.
- Pattern: lead ownership board. The page should show the difference between scattered enquiries and owned work with visible next steps.
- Buyer entry point: leads exist, but nobody can reliably see who owns them, what happened next, or what needs chasing.
- Plain promise: every enquiry has an owner, a next step, and a visible state.
- Visual motif: ownership board / open enquiry control panel.
- CTA direction: ask what is being missed after the enquiry arrives.

Sections:

1. Hero — open with leads arriving but nobody knowing what is still open.
2. Ownership gap — show where enquiries disappear after capture.
3. Lead board — make statuses visible: new, contacted, quoted, waiting, won, lost.
4. Follow-up path — show how chasing stops depending on memory.
5. Team visibility — show who owns what and what needs attention.
6. Handoff boundaries — AI and website feed CRM; CRM owns what happens after capture.
7. Readiness / fit filter — right fit, poor fit, and existing-tool considerations.
8. FAQ — answer tool, adoption, setup, and reporting questions.
9. CTA — diagnostic invitation.

Instructions:

- Do not make this a CRM software feature page.
- Do not make CRM own first response, website structure, SEO, or review generation.
- Show ownership, status, and next action instead of abstract automation.
- Avoid vague “workflow automation” language in public copy.
- The page should feel operational: what is open, who owns it, what happens next.

### Reputation & Review

- Route: `/services/reputation-review-systems`
- Role: Tier-1 service page for review request timing, feedback routing, and trust signal visibility.
- Pattern: trust signal loop. The page should show how finished jobs become public proof and how sensitive feedback is routed before it becomes public damage.
- Buyer entry point: good work happens, but reviews are inconsistent and negative feedback is not routed early.
- Plain promise: happy customers are asked at the right time, and sensitive feedback is caught before it becomes public damage.
- Visual motif: review request loop / feedback recovery board.
- CTA direction: ask where reviews or feedback currently fall through.

Sections:

1. Hero — open with good jobs finishing but no review being captured.
2. Trust gap — show why good work does not automatically become public proof.
3. Review timing — show the right moment to ask after job completion.
4. Feedback route — show public review path vs private issue route.
5. Monitoring board — show review health, unresolved feedback, and trust signals.
6. Local trust handoff — reviews support Local SEO as signals but do not replace LSA.
7. Fit filter — right fit, poor fit, and ethical review expectations.
8. FAQ — answer ethics, timing, negative feedback, and Google-boundary questions.
9. CTA — diagnostic invitation.

Instructions:

- Do not imply fake reviews, guaranteed star ratings, or review manipulation.
- Do not make Reputation own Local SEO, CRM lifecycle, website conversion, or traffic acquisition.
- Keep review signals separate from review operations when bridging to LSA.
- Show the loop: job finished → request sent → feedback routed → review captured → signal monitored.

## Builder / Simple Migration Group

### Elementor

- Route: `/services/elementor`
- Role: practical builder capability page.
- Pattern: simple implementation-fit page, not a strategic system page.
- Simple page intent: explain when Elementor is an acceptable implementation path inside the wider MindWP model.
- Section count: 5 to 7 including hero and CTA.

Sections:

1. Hero — clarify Elementor as a practical build path, not the offer itself.
2. When it fits — business cases where Elementor is a good implementation choice.
3. Delivery path — how structure, responsiveness, speed, and handoff are handled.
4. Boundaries — what Elementor work does not solve on its own.
5. Proof / examples — practical implementation confidence without overdesign.
6. CTA — discuss the build path.

Instructions:

- Do not position MindWP as an Elementor shop.
- Keep the page practical and light.
- Tie Elementor back to Smart Website Systems when strategy is needed.

### Divi 5

- Route: `/services/divi5`
- Role: practical builder capability page.
- Pattern: simple implementation-fit page, not a strategic system page.
- Simple page intent: clarify where Divi 5 fits for structured site work without positioning MindWP as a Divi shop.
- Section count: 5 to 7 including hero and CTA.

Sections:

1. Hero — clarify Divi 5 as a build method.
2. When it fits — businesses already using Divi or needing Divi-compatible work.
3. Delivery path — rebuild, cleanup, responsive structure, and maintainability.
4. Boundaries — what Divi does not solve without a stronger website system.
5. Proof / examples — practical implementation confidence.
6. CTA — discuss the build path.

Instructions:

- Do not make Divi 5 a strategic service pillar.
- Keep the page direct and capability-focused.
- Tie Divi work back to Smart Website Systems when the buyer needs structure beyond builder execution.

### Bricks Builder

- Route: `/services/bricks-builder`
- Role: practical builder capability page.
- Pattern: simple implementation-fit page, not a strategic system page.
- Simple page intent: explain when Bricks is useful for a controlled website build or rebuild.
- Section count: 5 to 7 including hero and CTA.

Sections:

1. Hero — clarify Bricks as a controlled build path.
2. When it fits — performance, structure, flexible layouts, and maintainability cases.
3. Delivery path — component structure, responsive build, speed, and clean handoff.
4. Boundaries — what Bricks does not solve without business/system strategy.
5. Proof / examples — practical implementation confidence.
6. CTA — discuss the build path.

Instructions:

- Do not make Bricks a strategic service pillar.
- Keep the page practical, clean, and lightweight.
- Tie Bricks back to Smart Website Systems when the buyer needs website strategy, conversion, or capture structure.

## Feature-like / Supporting Group

### Conversion Layer

- Route: `/services/conversion-layer`
- Role: Revenue Growth supporting module.
- Pattern: focused post-enquiry conversion page.
- Treatment: show what happens after the enquiry arrives and where conversion leaks.
- Opus depth: lighter than a Tier-1 page.

Sections: hero, conversion leak, decision points, improvement path, boundaries, CTA.

Instructions: keep it post-enquiry; do not turn it into full Revenue Growth or generic CRO.

### Lead Reactivation System

- Route: `/services/lead-reactivation-system`
- Role: Revenue Growth supporting module.
- Pattern: dormant-lead recovery page.
- Treatment: focus on old quotes, stalled enquiries, and missed follow-up recovery.
- Opus depth: light supporting-page rebuild.

Sections: hero, dormant lead problem, recovery triggers, reactivation path, boundaries, CTA.

Instructions: keep it recovery-focused; do not promise revenue guarantees.

### Missed Call Recovery System

- Route: `/services/missed-call-recovery-system`
- Role: AI Lead Handling supporting module.
- Pattern: missed-call-specific recovery page.
- Treatment: focus on unanswered calls and immediate recovery routing.
- Opus depth: lighter than the parent AI page.

Sections: hero, missed-call cost, recovery path, handoff, fit, CTA.

Instructions: keep it narrower than AI Lead Handling; do not turn it into a full AI service page.

### Unified Communication System

- Route: `/services/unified-communication-system`
- Role: AI Lead Handling supporting module.
- Pattern: channel-ownership page.
- Treatment: focus on scattered messages and routing across contact sources.
- Opus depth: light supporting-page rebuild.

Sections: hero, scattered channel problem, channel map, routing path, boundaries, CTA.

Instructions: keep it about channel ownership and message routing; do not turn it into CRM lifecycle management.

### System Migration & Platform Consolidation

- Route: `/services/system-migration-platform-consolidation`
- Role: Smart Website implementation pathway.
- Pattern: practical migration/consolidation page.
- Treatment: show how scattered tools and old platforms are cleaned into a manageable setup.
- Opus depth: light practical implementation-page rebuild.

Sections: hero, platform mess, consolidation path, migration risks, boundaries, CTA.

Instructions: keep it practical; do not turn it into enterprise transformation consulting.

### WordPress Development

- Route: `/services/wordpress-development`
- Role: Smart Website implementation pathway.
- Pattern: practical WordPress capability page.
- Treatment: show WordPress as an implementation base, not the offer.
- Opus depth: light practical capability-page rebuild.

Sections: hero, when WordPress fits, build path, maintenance/handoff, boundaries, CTA.

Instructions: do not make MindWP a generic WordPress agency; connect strategy back to Smart Website Systems.

### Ecommerce

- Route: `/services/ecommerce`
- Role: Smart Website commerce pathway.
- Pattern: practical commerce handling page.
- Treatment: focus on product/order/enquiry handling and operational fit.
- Opus depth: light practical commerce-page rebuild.

Sections: hero, commerce handling problem, order/enquiry path, platform fit, boundaries, CTA.

Instructions: keep it commerce-specific; do not turn it into generic online-store development.

## Decision / Comparison / Narrow Treatment Group

### Conversion Funnel System vs Landing Page Development

- Route: `/services/conversion-funnel-system-vs-landing-page-development`
- Role: narrow decision-support comparison.
- Pattern: choice page between one-off landing page and connected conversion path.

Sections: hero, decision problem, side-by-side comparison, when each fits, boundary, CTA.

Instructions: keep it decision-focused; do not turn it into a full conversion service page.

### Website CRM Integration vs Manual Lead Handling

- Route: `/services/website-crm-integration-vs-manual-lead-handling`
- Role: narrow decision-support comparison.
- Pattern: choice page between manual handling and CRM ownership.

Sections: hero, manual handling limit, side-by-side comparison, when CRM becomes necessary, boundary, CTA.

Instructions: keep it decision-focused; do not turn it into a full CRM page.

### Service Pages vs One Generic Services Page

- Route: `/services/service-pages-vs-one-generic-services-page`
- Role: narrow decision-support comparison.
- Pattern: choice page between one generic service page and service-specific pages.

Sections: hero, hidden-intent problem, side-by-side comparison, when separate pages are needed, boundary, CTA.

Instructions: keep it decision-focused; do not turn it into another Smart Website Systems page.

### Website Redesign System Rebuild

- Route: `/services/website-redesign-system-rebuild`
- Role: narrow redesign/rebuild decision page.
- Pattern: choice page between surface redesign and system rebuild.

Sections: hero, redesign misconception, side-by-side comparison, when rebuild is needed, boundary, CTA.

Instructions: keep it decision-focused; do not turn it into a full SWS page.

## Revenue Growth

Revenue Growth is part of the rebuilt service-domain set at `/services/revenue-growth`.

Revenue Growth owns post-enquiry improvement: quote recovery, conversion refinement, repeat customer triggers, reactivation, and spend-to-work visibility.

Revenue Growth must not become generic growth hacking, ad campaign management, SEO visibility, or guaranteed revenue claims.

Pattern: revenue leak map / recovery ledger.

Sections: hero, revenue leak after enquiry, quote recovery, conversion refinement, repeat customer triggers, spend-to-work visibility, system boundaries, fit filter, FAQ, CTA.

Instructions: keep it post-enquiry and recovery-focused. Do not make it generic marketing, ad management, SEO, growth hacking, or guaranteed revenue outcomes.

## Maintenance Order

1. Keep SWS and LSA stable as production baselines.
2. Keep rebuilt service detail pages stable.
3. Rebuild `/services` listing after service detail pages are confirmed stable.
4. Remove dead CSS, dead imports, stale placeholders, and unused data as they are discovered.
5. Run validation and build checks after approved service-domain refinements.

## Do

- Preserve semantic page data and page-specific visual bodies.
- Allow section count, section order, section names, and section data shapes to change when it improves the page.
- Keep final visual section CSS inside the existing service CSS ownership model.
- Keep `/services/revenue-growth` as part of the rebuilt Tier-1 service set.

## Do Not

- Do not create one CSS file per service page by default.
- Do not import from `@/components/reusable/*` or `@/components/sections/*` in reset service renderers.
- Do not use `PrimaryCTASection` in reset service renderers.
- Do not manually render `RelatedSection` inside service renderers.
- Do not hardcode `/contact` or CTA labels.
- Do not use old `rd-*`, `l-*`, or `btn-*` classes.
- Do not describe completed service pages as pending skeletons.

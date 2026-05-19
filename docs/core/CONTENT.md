# CONTENT — MindWP

Authority for page roles, funnel behavior, editorial boundaries, and content intent.

This doc defines what each page type is allowed to do. It references [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md) for active system ownership instead of repeating system definitions.

Do not duplicate offer definitions here. Apply the offer model only where it affects page role, funnel behavior, editorial boundaries, and content intent.

## Use This Doc

Use this when deciding:

- what a page is
- what funnel role it owns
- what it may explain
- what it must not absorb
- where it should route next
- how blogs, resources, industries, services, and case studies should relate

Identity and buyer truth live in [FOUNDATION.md](./FOUNDATION.md). Public language lives in [WRITING.md](./WRITING.md). CTA posture lives in [CONVERSION.md](./CONVERSION.md).

## Content Decision Order

Before writing, editing, or adding a page:

1. Confirm the buyer's business reality.
2. Confirm the recognition moment.
3. Confirm the page type.
4. Confirm the primary page intent.
5. Confirm the owning active system where relevant.
6. Confirm the funnel role.
7. Choose the communication pattern.
8. Shape the section design.
9. Build in JSX while the pattern is being proven.
10. Extract metadata, graph relationships, shared data, and tighter types after approval.

## Content Hierarchy

| Page Type | Primary Role | Funnel Role | Primary Outcome |
| --- | --- | --- | --- |
| Service | Active system decision page | BOFU | Help the buyer decide whether this system should be reviewed or built. |
| Implementation Service | Website-system implementation pathway | BOFU / commercial | Explain a practical build path under Smart Website Systems. |
| Feature | Capability page inside one active system | MOFU | Explain one capability without turning it into a separate offer. |
| Industry Detail | Vertical application page | late MOFU / controlled BOFU | Translate active systems into one industry's working reality. |
| Industry Category | Navigation and grouping page | MOFU | Help visitors find relevant vertical pathways. |
| Blog | Problem discovery page | TOFU / MOFU | Diagnose one problem, misconception, pattern, or tradeoff. |
| Resource | Framework or decision-support page | MOFU | Explain a method, map, checklist, comparison, or implementation lens. |
| Case Study | Proof or example page | MOFU / proof support | Prove or illustrate operating change. |
| Generic Page | Structural site surface | context-specific | Support navigation, contact, legal, or non-domain context. |

## Homepage Role

The homepage should create recognition before explaining the offer model.

Current homepage principles:

- The website is the base layer where search, trust, enquiry or booking capture, response, follow-up, proof, and improvement connect.
- Traffic without clear services and next steps leaks.
- The buyer or patient journey should feel like find -> verify -> trust -> contact or book -> handled -> proof.

These are content principles, not final section order. The homepage must not explain the system stack before the visitor recognises the business problem.

## Service Pages

Service pages are active system decision pages.

They own:

- BOFU decision support
- conversion framing
- implementation scope
- strongest diagnostic CTA escalation
- proof or proof-style reasoning
- system ownership and boundaries

Each service page must resolve to one active primary system from [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md).

Each primary service page must own one business moment. It may show connected context, but it must not repeat the full MindWP model, re-explain every active system, or absorb adjacent systems. Use the wider connected path only to clarify the current page’s owning problem.

Service pages must not:

- become generic agency service pages
- absorb adjacent systems
- become tutorials
- behave like blog or resource pages
- sell backend tools or platforms
- promise guaranteed rankings, revenue, reviews, or lead volume

Smart Website Systems pages should show the website as the visible control point for clarity, trust, enquiry or booking capture, and connected handling. Local SEO Authority pages should connect find -> verify -> trust -> contact or book, and should make clear that visibility works better when service, treatment, procedure, or location pages and proof are strong.

Lead Response & Handling and Follow-Up & CRM must stay distinct. Lead Response & Handling owns the first response and routing moment after someone reaches out. Follow-Up & CRM owns ownership, status, reminders, and next steps after the first response or quote exists. Pages may reference each other, but neither page should absorb the other system.

Service-page fit and disqualification content is useful when it protects positioning. It should filter out looks-only redesign buyers, cheapest-package shoppers, feature-first buyers, ranking-guarantee seekers, and tool-demo buyers without sounding arrogant.

## Implementation Service Pages

Implementation service pages are active implementation pathways under Smart Website Systems.

They may explain WordPress, Elementor, Bricks, Divi, WooCommerce, and website redesign/system rebuild decisions. They should translate those choices into website clarity, trust, enquiry or booking capture, maintainability, performance, ecommerce fit where relevant, and connected handling.

Implementation pages should explain platform choice only through business fit. The question is not "which builder is best?" The question is whether the implementation path supports a clear, trustworthy, maintainable website system that connects enquiries, bookings, or consultation requests to handling.

They must not:

- become primary systems
- behave like generic builder-agency pages
- lead with technology before the business problem is clear
- turn into affiliate-style platform comparisons
- disconnect from Smart Website Systems

## Feature Pages

Feature pages explain one capability inside one active system.

They may use capability-specific language, integration context, status/state language, and practical configuration detail when needed. Their risk is SaaS drift, not capability clarity.

Feature pages must not:

- present the feature as the whole offer
- create a hidden parallel service
- use generic product landing-page tone
- make backend tools the public product
- invent compliance, pricing, or capability claims

## Industry Pages

Industry detail pages translate MindWP systems into vertical reality for service businesses, specialist clinics, and private practices.

They should lead with working conditions, timing, customer or patient behavior, decision speed, trust concerns, enquiry, booking, or consultation patterns, follow-up pressure, and review/proof expectations.

Healthcare and specialist clinic industry pages should behave like landing pages for the practice front door. They should make the patient's decision path visible: what the patient is trying to understand, what makes them trust the provider, what service, treatment, or procedure page needs to explain, how booking or consultation requests are handled, what follow-up should not depend on memory, and how patient experience becomes reviews or proof. They must not become hospital software pages, EMR implementation pages, medical-claims pages, or generic doctor marketing pages.

If an industry page can apply to another industry with minimal changes, it is invalid.

Industry pages must not:

- become generic service pages
- list all services without business logic
- use interchangeable hero logic
- create new offer categories
- expose internal system taxonomy before recognition
- make unsupported medical, treatment, compliance, or patient-outcome claims
- present healthcare pages as software, EMR, or platform implementation

## Blog Pages

Blogs diagnose.

They should explain one problem, misconception, operating pattern, or tradeoff. A blog should help the reader recognise what is happening before routing them toward a framework, industry context, proof asset, or service page.

Blogs must not:

- behave like direct sales pages
- absorb BOFU service-page structure
- duplicate resource pages with lighter wording
- exist only for keyword variation
- promise outcomes they do not own

## Resource Pages

Resources explain frameworks.

They may cover maps, checklists, comparisons, decision logic, implementation guidance, and diagnostic models. They should reduce ambiguity and help the reader understand how to evaluate the problem.

Resources must not:

- become disguised service pages
- trap readers in endless education
- turn Revenue Recovery into a primary offer
- replace service pages as the conversion owner

Useful resource themes include structure before optimisation, local SEO starting with website clarity, visibility maintained over time, traffic leaking without clear next steps, template website versus website system, implementation pathway fit, and fit/not-fit decision support.

## Case Studies

Case studies prove or illustrate operating change.

They should make clear what kind of evidence they contain:

- Real Case Study: real client work with real attribution or measured/observable outcomes.
- Scenario Study: realistic operational scenario, clearly illustrative.
- System Example: plausible example showing system logic, clearly not client proof.
- Operational Breakdown: explanation of what changed operationally without public attribution.

Only real case studies may imply measured client outcomes or "we helped this client" language.

Case studies should show:

- operating context, practice context, or scenario context
- structural problem
- what changed
- connected handling, booking, follow-up, or ownership change
- observable outcome where real, without inventing treatment, revenue, ranking, or patient-result claims
- constraint, tradeoff, or implementation decision where available

## Funnel Role Boundaries

The preferred content progression is:

```text
Blog -> Resource -> Industry -> Service
```

Meaning:

- Blogs diagnose.
- Resources explain frameworks.
- Industry pages translate systems into vertical reality, including service-business and specialist-clinic realities where approved.
- Service pages own the implementation decision.
- Case studies support trust and proof.

Do not make one page absorb another page type's role. A blog should not become a service page. A resource should not become a sales page. A service page should not become a blog hub.

## Revenue Recovery Rule

Revenue Recovery is a layer/theme only. It exists to stop old Revenue Growth strategy from returning as a primary offer.

It may appear only as a small improvement lens inside resources, case studies, diagnostics, or optimisation context after the active system problem is already understood.

It must not become:

- a service page
- a page type
- a route category
- a primary system
- a CTA category
- a graph pillar
- a navigation pillar
- a content cluster owner
- a related-content cluster
- a panel
- a form
- a service card
- a public offer

Do not plan content around Revenue Recovery. Plan content around the active system, page type, buyer reality, and funnel role.

## Content Validation

Before approving content, confirm:

- the page type is clear
- the page has one primary intent
- the funnel role is correct
- system ownership follows [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md)
- the page does not revive removed names or old offer structures
- the page does not become a generic service catalog
- the page creates buyer recognition before system explanation
- clinic pages create patient/practice recognition before system explanation
- the CTA posture matches [CONVERSION.md](./CONVERSION.md)
- related-content direction supports the next useful step
- metadata and graph rules are extracted after the page meaning is approved

If a page only adds volume, do not add it.

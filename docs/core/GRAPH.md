# GRAPH — MindWP

Authority for related-content direction, content relationships, routing logic, graph metadata, and future resolver behavior.

Graph exists to support the visitor's next useful step. It does not decide the offer model, page role, or page design.

Do not duplicate system definitions here. Use [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md) for system ownership and use this doc only to decide related-content direction, routing logic, graph metadata, and resolver behavior.

## Use This Doc

Use this when planning or implementing:

- related content
- inline editorial links
- related cards
- service-to-resource relationships
- blog-to-resource relationships
- resource-to-service relationships
- industry-to-service relationships
- implementation service relationships
- case-study routing
- graph metadata
- future graph resolvers

Offer ownership comes from [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md). Page roles come from [CONTENT.md](./CONTENT.md).

## Core Principle

Related content should help a visitor move to the next sensible step:

- recognition to understanding
- understanding to decision support
- decision support to service context
- service context to proof
- proof to a practical next step

Related content should not fill space, create SEO clutter, pull the reader away from the current page's purpose, or turn every page into a content hub.

## Content Progression

Preferred progression:

```text
Blog -> Resource -> Industry -> Service
```

This is a directional model, not a rigid chain.

- Blogs diagnose problems.
- Resources explain frameworks.
- Industry pages translate the problem into vertical reality.
- Service pages own the implementation decision.
- Case studies support proof and trust.

Resources should not trap readers in education loops. Service pages should not become blog hubs.

## Ownership Rules

- Domain/config layers should inject stable related sections.
- Page renderers should not add `RelatedSection` as unmanaged filler.
- Inline editorial links are allowed when they support the current section narrative.
- Hand-picked related content is acceptable while page journeys are being proven.
- Formal graph resolver behavior should be extracted after approved page journeys are clear.

Related content must preserve page type, funnel role, page intent, and active system boundaries.

Related content should not make every primary service page repeat the full MindWP model. Each service page owns one business moment. Graph bridges are allowed only when the adjacent item clarifies the current page's owning problem or the next useful step.

## Active System Relationship Rules

Full system ownership is defined in [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md). Graph rules apply that ownership.

Smart Website Systems may relate to service-page clarity, enquiry capture, website conversion, website-to-handling connections, proof, and implementation pathways. It should not become a full local SEO, CRM, or review hub.

Local SEO Authority Systems may relate to local visibility, Google Business Profile direction, service-area relevance, local trust, proof signals, and Smart Website Systems where website trust affects local conversion. It should not become a ranking-guarantee or review-generation chain.

Lead Response & Handling Systems may relate to missed calls, forms, messages, booking handling, response-time resources, and Follow-Up & CRM as the next ownership step. It should not become an AI chatbot or tool-demo chain.

Follow-Up & CRM Systems may relate to ownership, status, quote follow-up, reminders, visible next steps, intake handling, and completed-work handling. It should not become a platform demo or generic automation hub.

Reputation & Review Systems may relate to review timing, feedback routing, proof capture, local trust, and completed-work status. It should not become fake review, manipulation, or generic reputation software content.

Revenue Recovery may appear only as a small improvement lens after the active system problem is understood. It must not become a primary related-content category, related-content cluster, service page, page type, route family, navigation pillar, graph category, CTA category, service card, panel, form, public offer, or equal system. Do not create Revenue Recovery related-content clusters.

Keep the timing boundary between Lead Response & Handling and Follow-Up & CRM clear. Lead Response & Handling may route to Follow-Up & CRM as the next ownership step, but it owns first response and routing. Follow-Up & CRM may reference response context, but it owns owner, status, reminder, and next-step visibility after first response or quote.

## Implementation Service Relationships

Implementation service pages relate upward to Smart Website Systems.

They may relate to:

- Smart Website Systems
- website clarity resources
- website rebuild resources
- enquiry capture and connected-handling resources
- implementation guides in the same path
- proof or scenario studies where the implementation choice mattered

They must not become:

- a separate graph category beside the active systems
- a generic builder-service cluster
- a technology comparison loop
- a service catalog path disconnected from Smart Website Systems

## Related Content By Page Type

Homepage:

- Point to the active systems, strongest proof assets, key resources, and one diagnostic contact path.
- Do not turn the homepage into a blog or resource directory.

Service pages:

- Prioritize proof, implementation-relevant resources, relevant industry contexts, and adjacent systems only where they clarify the page's owning business moment or next useful step.
- Do not send readers into unrelated blogs or early-awareness loops.

Implementation service pages:

- Route upward to Smart Website Systems and sideways only to relevant implementation resources.
- Do not route into builder comparison clutter.

Industry pages:

- Prioritize the active systems that solve that vertical's working problem, relevant proof, and resources that explain the framework.
- Avoid generic service links and multiple equal CTAs.

Blog pages:

- Route to the next useful resource, industry page, case study, active system page, or light diagnostic CTA.
- Do not send readers only to more blogs.

Resource pages:

- Route toward implementation context, active system pages, industry pages, and proof assets.
- Do not trap readers in endless education.

Case studies:

- Route to the active system being proven, the relevant industry context, the framework behind the change, and a diagnostic CTA for a similar weak point.
- Do not use unrelated service recommendations.

## Inline Editorial Links

Inline links are allowed when they:

- clarify a term
- deepen one idea
- provide proof for a claim
- route to a relevant framework
- support an industry-specific point
- bridge to an adjacent active system with clear connected-handling logic

Inline links should not:

- interrupt the narrative
- create mechanical SEO linking
- route to unrelated pages
- expose internal taxonomy before the problem is clear
- send readers backward in funnel maturity without reason

## Metadata Direction

A future graph resolver may use:

- `pageType`
- `funnelRole`
- `primarySystem`
- `supportingSystems[]`
- `industries[]`
- `topics[]`
- `proofType`
- `relatedIntent`
- `nextStepIntent`

Metadata should be extracted after the approved page meaning is clear. Do not force metadata early if it weakens page design or content quality.

## Future Resolver Rules

A resolver should rank related content by:

1. page intent compatibility
2. active system relevance
3. funnel progression
4. industry relevance
5. proof relevance
6. CTA or next-step fit
7. freshness or priority where useful

A resolver must never select content only because it shares a keyword.

## Graph Validation

Before adding related content or graph logic, confirm:

- the current page type is clear
- the funnel role is clear
- the primary active system is clear where relevant
- the related item supports the next useful step
- the related item does not break page intent
- the related item does not revive removed offer structures
- Revenue Recovery does not appear as a related-content category, cluster, route family, service page, page type, navigation pillar, CTA category, service card, panel, form, public offer, or equal system
- implementation service relationships resolve upward to Smart Website Systems
- the related item does not turn a service page into a blog hub
- the related item does not make a primary service page repeat the full MindWP model or absorb an adjacent system
- the related item does not trap a resource reader in education

If any fail, do not add the related item.

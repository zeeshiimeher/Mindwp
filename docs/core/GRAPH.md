

# GRAPH — MindWP

> Authority for related-content direction, content relationships, page routing logic, and future graph behavior.
> Related content must support the approved page journey. It must not break page intent, revive removed service models, or force page design decisions too early.
> Offer ownership comes from [./FOUNDATION.md](./FOUNDATION.md) and [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md).

---

## USE THIS DOC

Use this document when planning or implementing:

- related content
- inline editorial links
- service-to-resource relationships
- blog-to-resource relationships
- resource-to-service relationships
- industry-to-service relationships
- case-study routing
- page metadata relationships
- future graph resolvers
- content suggestions
- related-card sections

This document does not decide the offer model.
This document does not decide page structure.
This document does not create service categories.

It only explains how pages may support the visitor's next useful step without breaking page role or system ownership.

---

## GOVERNING CONTEXT

Graph behavior must follow:

- [./FOUNDATION.md](./FOUNDATION.md) for MindWP identity, buyer, public path, and active system hierarchy
- [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md) for active system ownership and service boundaries
- [./CONTENT.md](./CONTENT.md) for page type, funnel role, and content behavior
- [./WRITING.md](./WRITING.md) for public language boundaries
- [./CONVERSION.md](./CONVERSION.md) for CTA posture and conversion routing

If this document conflicts with those docs, fix the conflict.

Allowed active system values and ownership boundaries come from [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md). Revenue Recovery may appear as an improvement theme or cross-system layer, but it is not a primary public service page and must not become a related-content pillar beside the active systems.

---

## CORE PRINCIPLE

Related content exists to support the visitor's next sensible step.

It must help the visitor move from:

- recognition to understanding
- understanding to decision support
- decision support to service context
- service context to proof
- proof to a practical next step

Related content must not exist just to fill space.
Related content must not pull the visitor away from the current page's purpose.
Related content must not turn every page into a generic content hub.

---

## OWNERSHIP

- Page renderers should not manually add `RelatedSection` as an unmanaged page detail.
- Domain/config layers may inject `RelatedSection` where it belongs.
- Inline editorial links are allowed when they support the current section narrative.
- Related items must preserve funnel role, page intent, and active system boundaries.
- Related content must not introduce removed service names or removed system models.
- Related content must not mention backend CRM, automation, AI, or white-label platform names publicly.

During page creation and rebuild work, inline links and hand-picked related content are acceptable if they support the narrative.
A stronger resolver should be rebuilt only after approved page journeys are clear.

---

## CURRENT RULE

Keep related-content behavior simple and runtime-safe.

Add stronger resolver behavior only when it supports approved page journeys and does not force page design decisions too early.

Do not build a complex graph system before:

- the active offer model is stable
- service pages are planned
- page types are clear
- content inventory is cleaned
- the architecture has been audited
- approved page journeys exist

Graph systems should protect approved decisions, not create decisions prematurely.

---

## PREFERRED CONTENT PROGRESSION

The preferred content progression is:

```text
BLOG → RESOURCE → INDUSTRY → SERVICE
```

This does not mean every page must follow this exact route.
It means related content should respect funnel maturity.

### Blog

Blogs diagnose problems, misconceptions, friction, or tradeoffs.

A blog may route to:

- a resource that explains the framework
- an industry page where the problem is visible in a vertical context
- a case study that proves the problem/change
- an active system page when the reader is clearly ready

Blogs must not loop endlessly to other shallow blog posts.

### Resource

Resources explain frameworks, checklists, comparisons, implementation logic, or decision support.

A resource may route to:

- an industry page that shows the framework in context
- a service page when the reader is ready for implementation
- a case study that validates the framework
- a related resource only if it deepens the same decision

Resources must not trap readers in endless education.

### Industry Page

Industry pages translate the system into one vertical's working reality.

An industry page may route to:

- the most relevant active system page
- a supporting resource
- a relevant case study
- a diagnostic CTA

Industry pages must not become generic service hubs.

### Service Page

Service pages own implementation decisions.

A service page may route to:

- relevant proof
- relevant resources
- relevant industry contexts
- adjacent active systems only as a handoff

Service pages should not behave like blog hubs.

### Case Study

Case studies prove an operating change.

A case study may route to:

- the active system it proves
- the industry it belongs to
- a relevant resource explaining the framework
- a diagnostic CTA for a similar weak point

Case studies must not become sales pages or generic service explainers.

---

## ACTIVE SYSTEM RELATIONSHIPS

Related content should respect which system owns the current page.

### Smart Website Systems

May relate to:

- service-page clarity resources
- enquiry capture resources
- website conversion resources
- case studies about website clarity or enquiry capture
- Lead Response & Handling as a handoff after enquiry capture
- Follow-Up & CRM as a handoff after capture when appropriate

Must not become:

- a full local SEO resolver
- a CRM lifecycle resolver
- a review-generation resolver
- a lead-response service page

### Local SEO Authority Systems

May relate to:

- local visibility resources
- Google Business Profile resources
- service-area relevance resources
- local trust resources
- Reputation & Review as a trust-signal handoff
- Smart Website Systems when the website weakens local trust or conversion

Must not become:

- a rankings-guarantee chain
- a review-generation page
- a full website conversion page
- a generic SEO blog loop

### Lead Response & Handling Systems

May relate to:

- missed-call resources
- response-time resources
- enquiry routing resources
- booking handoff resources
- Follow-Up & CRM as the next ownership step
- Smart Website Systems when form/capture path is the source problem

Must not become:

- an AI chatbot content chain
- a CRM lifecycle page
- a full sales automation page
- a generic tool-demo page

### Follow-Up & CRM Systems

May relate to:

- follow-up resources
- enquiry ownership resources
- pipeline visibility resources
- quote follow-up resources
- Lead Response & Handling as the intake handoff
- Reputation & Review as the completed-work handoff

Must not become:

- a CRM platform demo chain
- a generic automation resource hub
- a full review system page
- a full website conversion page

### Reputation & Review Systems

May relate to:

- review request resources
- feedback routing resources
- proof capture resources
- local trust resources
- Local SEO Authority as the visibility/trust handoff
- Follow-Up & CRM when review requests depend on completed-work status

Must not become:

- fake review content
- review manipulation content
- generic reputation software content
- a full local SEO page

### Revenue Recovery Layer

Revenue Recovery may appear as:

- a theme across related content
- an improvement lens in resources
- a final diagnostic idea after the active system is understood
- a way to explain compounding improvement

Revenue Recovery must not appear as:

- a primary related-content category
- a primary service page
- an additional equal system
- a generic growth marketing route
- a guaranteed revenue claim

### Implementation Services

Implementation service pages relate upward to Smart Website Systems.

They may relate to:

- Smart Website Systems
- service-page clarity resources
- website rebuild resources
- enquiry capture resources
- implementation guides for the same website-system path
- proof or scenario studies where the implementation choice mattered

They must not become:

- a separate graph category beside the active systems
- a generic builder-service cluster
- a technology comparison loop
- a service catalog path disconnected from Smart Website Systems

---

## RELATED CONTENT BY PAGE TYPE

### Homepage

Homepage related content should not overload the visitor.

The homepage may point to:

- the active systems
- one or two strongest proof assets
- one diagnostic contact path
- a small number of key resources if they support the public path

The homepage must not become a blog directory or resource hub.

### Service Pages

Service pages should prioritize:

- proof
- implementation-relevant resources
- adjacent active systems as handoffs only
- industry contexts where the system is especially visible

Service pages should avoid:

- unrelated blogs
- shallow topic clusters
- content that weakens the service decision
- links that pull the reader back into early awareness without reason

### Industry Pages

Industry pages should prioritize:

- the active systems that solve that vertical's working problem
- proof from the same or adjacent industry
- resources that explain the relevant framework

Industry pages should avoid:

- generic content that could apply to any industry
- unrelated service links
- multiple equal CTAs that confuse the next step

### Blog Pages

Blog pages should prioritize:

- the next useful resource
- a relevant active system page only when the reader is likely ready
- a related industry page when vertical context helps
- a case study when proof is useful

Blog pages should avoid:

- sending readers only to more blogs
- turning into service pages
- CTA pressure before recognition

### Resource Pages

Resource pages should prioritize:

- implementation context
- active system pages
- relevant industry pages
- proof assets

Resource pages should avoid:

- endless educational loops
- broad unrelated resources
- turning Revenue Recovery into a primary offer

### Case Studies

Case studies should prioritize:

- the active system being proven
- the industry context
- the relevant framework/resource
- a diagnostic CTA based on the observed weak point

Case studies should avoid:

- unrelated services
- broad blog recommendations
- fake or exaggerated proof routes

---

## INLINE EDITORIAL LINKS

Inline editorial links are allowed when they support the reader in the current section.

They should:

- clarify a term
- deepen one idea
- route to a relevant framework
- support an industry-specific point
- provide proof for a claim
- bridge to an adjacent active system only when the handoff is clear

They should not:

- interrupt the narrative
- create SEO-style internal-link clutter
- route to unrelated service pages
- route to pages with a different funnel role too early
- expose internal taxonomy before the buyer understands the problem

Inline links should feel editorial, not mechanical.

---

## FUTURE GRAPH RESOLVER RULES

A future graph resolver may use metadata such as:

- `pageType`
- `funnelRole`
- `primarySystem`
- `supportingSystems[]`
- `industries[]`
- `topics[]`
- `proofType`
- `relatedIntent`
- `nextStepIntent`

But metadata should be extracted after the approved page system is clear.

Do not force metadata early if it weakens page design or content quality.

A future resolver should rank related content by:

1. page intent compatibility
2. active system relevance
3. funnel progression
4. industry relevance
5. proof relevance
6. CTA/next-step fit
7. freshness or priority where useful

A resolver must never select content only because it shares a keyword.

---

## NOT ALLOWED

Related content must not:

- revive removed service names
- recreate removed service models
- create an additional equal system
- treat Revenue Recovery as a primary service page
- mention backend platform names publicly
- create AI chatbot/vendor positioning
- create CRM reseller positioning
- create rankings-guarantee SEO positioning
- turn service pages into blog hubs
- turn blogs into disguised service pages
- trap resources in endless education
- route industry pages to generic service catalogs
- ignore page type or funnel role
- force page design decisions before approval

---

## GRAPH VALIDATION CHECKLIST

Before adding related content or graph logic, confirm:

- the current page type is clear
- the current funnel role is clear
- the primary active system is clear where relevant
- the related item supports the visitor's next useful step
- the related item does not break the current page intent
- the related item does not revive removed service models
- the related item does not treat Revenue Recovery as a primary service page
- the related item does not expose internal taxonomy too early
- the related item does not turn the page into a service catalog
- the related item strengthens recognition, understanding, proof, or decision support

If any fail, do not add the related item.

---

## CROSS-REFERENCE MAP

- Identity, buyer, public path, and active system hierarchy: [./FOUNDATION.md](./FOUNDATION.md)
- Offer model and system ownership: [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md)
- Page type and funnel behavior: [./CONTENT.md](./CONTENT.md)
- Public writing and banned phrases: [./WRITING.md](./WRITING.md)
- CTA and contact behavior: [./CONVERSION.md](./CONVERSION.md)
- Visual section composition and operational design language: [./DESIGN.md](./DESIGN.md)

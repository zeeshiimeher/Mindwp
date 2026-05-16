# CONTENT — MindWP

> Source of truth for page roles, funnel behavior, editorial boundaries, and content intent.
> If this file conflicts with [./FOUNDATION.md](./FOUNDATION.md) or [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md), fix the conflict immediately.
> This document controls what each page type is allowed to do. Identity, positioning, offer architecture, service hierarchy, and the MindWP build system come from [./FOUNDATION.md](./FOUNDATION.md) and [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md).

---

## USE THIS DOC

Use this doc when deciding what a page is allowed to do.

This document answers:

- what role each page type owns
- how each page type resolves into the active offer model
- what funnel role each page type can support
- what each page type should help the visitor recognise, understand, or decide
- where each page type should route next
- what each page type must not absorb from another page type

---

## CONTENT DECISION ORDER

Before writing, editing, or adding content, decide in this order:

1. Confirm the buyer’s business reality.
2. Confirm the recognition moment the page must create.
3. Confirm the page type.
4. Confirm the behavior type from [./FOUNDATION.md](./FOUNDATION.md): landing, system, or entry.
5. Confirm the primary active system from [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md).
6. Confirm the funnel role.
7. Confirm the primary page intent.
8. Confirm the pattern that best communicates the idea.
9. Confirm CTA posture from [./CONVERSION.md](./CONVERSION.md).

Metadata, relationships, related-content routing, and final data extraction happen after the page or section is approved.

---

## SYSTEM GUARANTEES

- Every routed content surface should have one clear page type.
- Funnel roles are fixed by page type.
- BOFU conversion structure belongs to service pages.
- Other page types escalate upward; they do not absorb service-page behavior.
- Page type, page intent, CTA posture, and content behavior must agree.
- Every service, feature, industry, blog, resource, or case-study page must resolve into one active system unless it is a generic structural page.
- Revenue Recovery is a cross-system improvement layer, not a primary service page or page type.
- Structure alone does not prove authority, specificity, visual quality, or conversion strength.
- Metadata, relationships, and related-content routing are extracted after the approved page system is clear.

---

## UNIFIED CONTENT HIERARCHY

| Page Type         | Primary Role                      | Funnel Role                 | Useful Metadata             | Primary Outcome                               |
| ----------------- | --------------------------------- | --------------------------- | --------------------------- | --------------------------------------------- |
| Service           | System decision page              | BOFU                        | `primarySystem`, `supportingSystems[]`                 | conversion-ready service selection            |
| Feature           | Capability page                   | MOFU                        | `primarySystem`, `supportingSystems[]`                 | explain one system capability in context      |
| Industry Detail   | Vertical application page         | late MOFU / controlled BOFU | `primarySystem`, `supportingSystems[]`, `industries[]` | show how the system applies to one vertical   |
| Industry Category | Taxonomy and navigation page      | MOFU                        | `primarySystem`, `supportingSystems[]`                 | group industry detail pathways                |
| Blog              | Problem discovery page            | TOFU / MOFU                 | `primarySystem`, `supportingSystems[]`, `topics[]`     | diagnose one problem, pattern, or tradeoff    |
| Resource          | Framework and implementation page | MOFU                        | `primarySystem`, `supportingSystems[]`, `topics[]`     | explain one framework, comparison, or method  |
| Case Study        | Proof page                        | MOFU / proof support        | `primarySystem`, `supportingSystems[]`, `industries[]` | validate the system with implementation proof |
| Page              | Generic structural page           | context-specific            | page-owned identity         | support navigation or non-domain surfaces     |

Canonical identifiers are fixed business and content identifiers. Their implementation source may change as the new system is rebuilt.

Allowed active system values are:

- Smart Website Systems
- Local SEO Authority Systems
- Lead Response & Handling Systems
- Follow-Up & CRM Systems
- Reputation & Review Systems

Revenue Recovery may appear as an improvement layer or content theme, but it is not an allowed primary system for service-page ownership.

---

## CONTENT TYPE ROLES

### Service

Service pages own BOFU decision support, conversion framing, implementation scope, and the strongest CTA escalation.

They are the only page type allowed to carry the full decision/conversion structure.

Every service page must resolve to one active system:

- Smart Website Systems
- Local SEO Authority Systems
- Lead Response & Handling Systems
- Follow-Up & CRM Systems
- Reputation & Review Systems

Revenue Recovery must not be created as a primary service page unless the active docs are intentionally updated later.

### Feature

Feature pages explain one capability inside a parent active system.

They support understanding, but they do not become parallel systems, strategic pillars, or hidden service pages.

Feature pages may use more capability-specific language than Tier-1 service pages. Allowed on feature pages: capability labels, feature and function descriptions, integration context, technical clarity, status and state language, and configuration-style explanation when relevant.

The risk on feature pages is SaaS drift, not capability clarity. Feature pages must still avoid generic SaaS landing-page tone, tool-reseller framing, unsupported compliance claims, irrelevant pricing claims, and filler words ("powerful", "seamless", "robust"). A feature page must not present itself as the whole offer.

### Blog

Blog pages diagnose one problem, pattern, misconception, or tradeoff.

They create discovery and route upward into resource, case-study, industry, or service pages.

A blog post should help the reader recognise the problem more clearly. It must not become a disguised service page, a resource with lighter wording, or a shallow SEO variation.

### Resource

Resource pages explain frameworks, architectures, comparisons, checklists, and implementation logic.

They clarify how the system works without replacing service-page decision support.

Resources may explain Revenue Recovery as a framework or improvement lens, but they must not turn Revenue Recovery into a primary service offer.

A resource should feel useful as a decision-support asset. It must not read like a generic blog post with a stronger title.

### Industry Detail

Industry detail pages translate the system into one vertical context.

They must follow landing-page behavior from [./FOUNDATION.md](./FOUNDATION.md): recognition first, explanation second.

They must reflect real situations, dominant problems, timing, urgency, customer behavior, and trust concerns specific to that industry.

If an industry page could apply to another industry with minimal changes, it is invalid.

Industry pages should translate the active systems into that vertical's working reality. They should not become generic service pages and should not introduce service names outside the active model.

### Industry Category

Industry category pages group related industry pathways.

They support navigation and vertical discovery. They must not become generic service pages or broad educational hubs.

### Case Study

Case studies validate a system through implementation proof.

They own trust, validation, BOFU support through proof, and narrative behavior rather than instructional behavior.

Every case study page must clearly represent what kind of evidence it contains. Use one of these types at the content level:

- **Real Case Study**: real client work, real attribution, directional or measured results. May use "we helped" language and testimonial-adjacent proof.
- **Scenario Study**: realistic operational scenario that explains how a system works. Must not imply real client proof.
- **System Example**: demonstrates a system's operational logic through a plausible illustrative example. Must not imply real attribution.
- **Operational Breakdown**: explains what happened operationally without attributing to a named client.

Only a Real Case Study may imply measured outcomes, real attribution, or "we helped this client" language.

Scenario Studies, System Examples, and Operational Breakdowns may use realistic operational storytelling but must not present fictional examples as real client work, invent before/after results, or fabricate attribution.

Case studies must show what was broken, what changed, and what improved. They should earn trust through specificity: constraints, implementation decisions, operational changes, tradeoffs, or visible outcomes where available.

The renderer must support missing sections, reordered sections, varied combinations, and uneven but believable narrative structure.

---

## FUNNEL ROLE SEPARATION

- Blog pages own problem recognition and early discovery.
- Resource pages own framework clarity and decision support before service selection.
- Industry pages own vertical recognition and controlled BOFU transition.
- Service pages own BOFU decision support and direct service conversion.
- Case studies own proof and validation; they support service pages but do not replace them.

If a page absorbs the funnel role of another page type, it has drifted and must be corrected.

Funnel role alone is not sufficient. Each page must also match its behavior type from [./FOUNDATION.md](./FOUNDATION.md).

---

## BOFU ISOLATION RULE

BOFU sections are limited to service pages.

The following structures belong to the BOFU layer:

- decision framing
- failure or escalation blocks
- direct service conversion proof blocks
- strongest CTA escalation

Blog and resource pages may educate, compare, explain, and route upward.
They must not absorb BOFU service structure.

---

## ACTIVE SYSTEM PAGE HIERARCHY RULE

Public content hierarchy must preserve Smart Website gravity and the active five-system model.

Rules:

- Smart Website Systems leads the service narrative as the flagship and visible control point.
- Local SEO Authority Systems, Lead Response & Handling Systems, Follow-Up & CRM Systems, and Reputation & Review Systems remain active public systems, but they must not flatten the offer into an equal-weight service catalog.
- Supporting modules solve narrower operational problems and map upward into one active system.
- Implementation pathways remain delivery-specific routes and do not present themselves as strategic pillars.
- Revenue Recovery is a cross-system improvement layer and must not be treated as a primary service page.

The services landing page may curate these layers deliberately, but it may not flatten them into unrelated agency-style services.

Buyer entry points and the public path are defined in [./FOUNDATION.md](./FOUNDATION.md) and [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md). Content must preserve Smart Website gravity while allowing direct-pain entry points, and page copy must not expose internal taxonomy before the buyer's situation is clear.

---

## SEO INTENT SEPARATION

- Service pages target decision-ready commercial intent.
- Feature pages target capability and solution-comparison intent.
- Industry pages target vertical applicability and context-specific commercial intent.
- Blog pages target informational, problem-aware, misconception, and tradeoff intent.
- Resource pages target framework, comparison, checklist, architecture, and implementation intent.
- Case studies target proof intent.

One page owns one primary search intent. Do not merge multiple intent classes into one page.

Search intent must align with page behavior.
If intent and behavior diverge, the page loses clarity and must be corrected.

---

## CONTENT SYSTEM INTEGRITY

Content integrity depends on aligned meaning:

1. Page type matches page role.
2. Page resolves into one active system where system ownership is relevant.
3. Page intent matches buyer recognition.
4. CTA posture matches page role.
5. Page behavior matches its role and positioning.
6. Content supports authority, trust, and conversion instead of only satisfying structure.
7. Metadata and related-content systems are added after the approved page meaning is clear.

Do not invent parallel identifiers, parallel page roles, or parallel relationship systems.

---

## INTENT ARCHITECTURE CORE RULES

- One page owns one primary intent.
- Topics represent problem spaces, not titles.
- Metadata should support trust and routing after approval; it must not drive weak page design before the page meaning is clear.
- Multiple pages may share a topic only when their search intents differ materially.
- Search intent targeting must respect the page-type hierarchy instead of overriding it.

---

## CONTENT FLOW AND RELATIONSHIPS

The MindWP content build path is:

```text
BUSINESS REALITY → BUYER RECOGNITION → PAGE INTENT → PATTERN → SECTION DESIGN → JSX → APPROVAL → SYSTEMIZATION
```

The preferred content progression is:

```text
BLOG → RESOURCE → INDUSTRY → SERVICE
```

Blogs diagnose problems.
Resources explain frameworks.
Industry pages translate the problem into a vertical reality.
Service pages own the implementation decision.

Relationship handling is shaped after the approved page system is clear.

Content flow must preserve meaning, not just structure:

- routing should support conversion progression
- related content must not break page intent or funnel role
- related-content systems should protect the approved page journey, not dictate it before design approval

Manual presentation helpers may support a page narrative, but final related-content systems should be rebuilt deliberately after the core page system is approved.

---

## RELATED CONTENT SYSTEM — DEFERRED

The related-content system is deferred until the approved page system is clear.

Future related content should respect page behavior:

- Landing pages must not surface unrelated educational chains.
- Blog pages should usually route to a relevant resource, industry page, case study, or active system page.
- Resource pages should route to relevant industry or service pages when the reader is ready for implementation context.
- Industry pages should route toward the active system pages that solve that vertical's problem.
- Service pages should prioritize conversion-relevant content and proof.
- Case studies should route toward the active system, industry, or service context they prove.
- Resources must not trap readers in endless educational loops.

Inline editorial links may support the narrative during page creation. A final graph-ranked related-content system can be rebuilt later if it strengthens user progression.

---

## PAGE-TYPE WRITING STANDARDS

### Blog

Blog posts must:

- teach one concrete problem, bottleneck, tradeoff, or misconception
- use simple operational language
- stay specific and non-hyped
- connect the problem back to one active system
- make the reader recognise a problem before introducing the system angle

Blog posts must not:

- behave like sales pages
- promise outcomes they do not own
- flatten multiple topics into one vague article
- duplicate a resource page with lighter wording
- exist only to capture a keyword variation

### Resource

Resources must:

- clarify how the system works
- reduce ambiguity
- support MOFU understanding
- route upward when direct service action is appropriate
- provide a usable framework, comparison, checklist, architecture, or implementation lens

Resources must not:

- behave like direct sales pages
- absorb BOFU failure or decision structures
- replace service pages as the conversion owner

### Case Study

Each case study must make these elements legible:

- operating context
- structural problem
- implemented active system or system combination
- handoff or workflow change
- measurable or observable outcome
- constraint, tradeoff, or decision where available

Case studies may support service conversion, but the case study itself remains a proof asset rather than the primary BOFU decision page.

---

## EXTENSION CONTRACT

### Add Content

1. Start from the buyer’s business reality.
2. Confirm the page type and funnel role.
3. Confirm the active system relationship, if the content is system-related.
4. Confirm the buyer recognition moment.
5. Choose the pattern that best communicates the page intent.
6. Keep CTA posture inside the conversion contract.
7. Confirm the page adds authority, proof, clarity, recognition, or conversion progression. If it only adds volume, do not add it.
8. Extract metadata, data, and relationships after approval.

### Add a Service or Feature Page

1. Start from the buyer's visible working problem.
2. Confirm the owning active system and page role.
3. Compose the strongest page sections in JSX using the MindWP build system.
4. Keep proof honest and system boundaries clear.
5. Extract stable data after visual approval.

### Add a Related Content Opportunity

1. Confirm the related opportunity strengthens the approved page journey.
2. Use inline editorial links only when they support the page narrative.
3. Rebuild metadata and resolver behavior later if the relationship should become part of the formal related-content system.

---

## ENFORCEMENT MODEL

Current checks are intentionally focused. Manual review owns page intent, buyer recognition, authority strength, specificity, page differentiation, visual quality, and conversion clarity.

Metadata, related-content, section data, and token rules should be extracted around approved pages and proven patterns.

---

## CROSS-REFERENCE MAP

- Identity, system hierarchy, and build logic: [./FOUNDATION.md](./FOUNDATION.md)
- Offer architecture and active system ownership: [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md)
- Public writing style and rewrite rules: [./WRITING.md](./WRITING.md)
- CTA posture and contact behavior: [./CONVERSION.md](./CONVERSION.md)
- Visual principles and section composition: [./DESIGN.md](./DESIGN.md)
- Related-content mechanics are shaped after the approved page system is clear.

---

## CONTENT MODEL VALIDATION

Before approving new or edited content, confirm:

- the page type is clear
- the funnel role is clear
- the page resolves into one active system where system ownership is relevant
- the page does not revive removed service names or old system models
- Revenue Recovery is not treated as a primary service page
- the page does not become a generic service catalog
- the page does not expose internal taxonomy before buyer recognition
- the CTA posture matches the page type
- related-content direction supports the visitor's next useful step

If any of these fail, correct the content plan before writing or implementing sections.

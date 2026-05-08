# CONTENT — MindWP

> Source of truth for content hierarchy, page roles, metadata rules, authority rules, and editorial boundaries.
> If this file conflicts with [./FOUNDATION.md](./FOUNDATION.md), fix the conflict immediately.
> This document controls page roles and content behavior only. Identity, positioning, service hierarchy, and page-behavior definitions still come from [./FOUNDATION.md](./FOUNDATION.md).

---

## USE THIS DOC

Use this doc when deciding what a page is allowed to do.

This document answers:

- what role each page type owns
- what funnel role each page type can support
- what metadata each page type needs
- where each page type should route next
- what each page type must not absorb from another page type

---

## CONTENT DECISION ORDER

Before writing, editing, or adding content, decide in this order:

1. Confirm the page type.
2. Confirm the behavior type from [./FOUNDATION.md](./FOUNDATION.md): landing, system, or entry.
3. Confirm the funnel role.
4. Confirm the primary search intent.
5. Confirm required metadata.
6. Confirm CTA behavior from [./CONVERSION.md](./CONVERSION.md).
7. Confirm related-content behavior from [./GRAPH.md](./GRAPH.md).

Do not write copy until these are clear.

---

## SYSTEM GUARANTEES

- Every routed content surface belongs to one canonical page type.
- Every content node uses canonical metadata from the system, topic, and industry registries.
- Funnel roles are fixed by page type.
- BOFU conversion structure belongs to service pages.
- Other page types escalate upward; they do not absorb service-page behavior.
- Related content is graph-derived and slot-limited.
- Metadata, page role, CTA role, and related-content behavior must agree.
- Structural validation does not prove authority, specificity, or conversion strength.

---

## UNIFIED CONTENT HIERARCHY

| Page Type         | Primary Role                      | Funnel Role                 | Required Metadata           | Primary Outcome                               |
| ----------------- | --------------------------------- | --------------------------- | --------------------------- | --------------------------------------------- |
| Service           | System decision page              | BOFU                        | `systems[]`                 | conversion-ready service selection            |
| Feature           | Capability page                   | MOFU                        | `systems[]`                 | explain one system capability in context      |
| Industry Detail   | Vertical application page         | late MOFU / controlled BOFU | `systems[]`, `industries[]` | show how the system applies to one vertical   |
| Industry Category | Taxonomy and navigation page      | MOFU                        | `systems[]`                 | group industry detail pathways                |
| Blog              | Problem discovery page            | TOFU / MOFU                 | `systems[]`, `topics[]`     | diagnose one problem, pattern, or tradeoff    |
| Resource          | Framework and implementation page | MOFU                        | `systems[]`, `topics[]`     | explain one framework, comparison, or method  |
| Case Study        | Proof page                        | MOFU / proof support        | `systems[]`, `industries[]` | validate the system with implementation proof |
| Page              | Generic structural page           | context-specific            | page-owned identity         | support navigation or non-domain surfaces     |

Source of truth for canonical identifiers: `src/lib/content-graph/canonical.ts`.

---

## CONTENT TYPE ROLES

### Service

Service pages own BOFU decision support, conversion framing, implementation scope, and the strongest CTA escalation.

They are the only page type allowed to carry the full decision/conversion structure.

### Feature

Feature pages explain one capability inside a parent system.

They support understanding, but they do not become parallel systems or strategic pillars.

Feature pages may use more capability-specific language than Tier-1 service pages. Allowed on feature pages: capability labels, feature and function descriptions, integration context, technical clarity, status and state language, and configuration-style explanation when relevant.

The risk on feature pages is SaaS drift, not capability clarity. Feature pages must still avoid generic SaaS landing-page tone, tool-reseller framing, unsupported compliance claims, irrelevant pricing claims, and filler words ("powerful", "seamless", "robust"). A feature page must not present itself as the whole offer.

### Blog

Blog pages diagnose one problem, pattern, misconception, or tradeoff.

They create discovery and route upward into resource, case-study, or service pages.

A blog post should help the reader recognise the problem more clearly. It must not become a disguised service page, a resource with lighter wording, or a shallow SEO variation.

### Resource

Resource pages explain frameworks, architectures, comparisons, checklists, and implementation logic.

They clarify how the system works without replacing service-page decision support.

A resource should feel useful as a decision-support asset. It must not read like a generic blog post with a stronger title.

### Industry Detail

Industry detail pages translate the system into one vertical context.

They must follow landing-page behavior from [./FOUNDATION.md](./FOUNDATION.md): recognition first, explanation second.

They must reflect real situations, dominant problems, timing, urgency, customer behavior, and trust concerns specific to that industry.

If an industry page could apply to another industry with minimal changes, it is invalid.

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

## TIER 1 PAGE HIERARCHY RULE

Public content hierarchy must preserve Smart Website gravity.

Rules:

- Smart Website leads the service narrative.
- Supporting Tier 1 systems remain structurally subordinate to that gravity.
- Tier 2 modules solve narrower operational problems and map upward.
- Tier 3 pages remain implementation pathways and do not present themselves as strategic pillars.

The services landing page may curate these layers deliberately, but it may not flatten them into equal-weight public positioning.

Buyer entry points and the public path are defined in [./FOUNDATION.md](./FOUNDATION.md). Content must preserve Smart Website gravity while allowing direct-pain entry points, and page copy must not expose internal taxonomy before the buyer's situation is clear.

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

Content integrity depends on aligned contracts:

1. Page type matches page role.
2. Metadata matches page subject.
3. CTA behavior matches page role.
4. Related content resolves from metadata rather than editorial shortcuts.
5. Page behavior matches its role and positioning.
6. Content supports authority instead of only satisfying structure.

Do not invent parallel identifiers, parallel page roles, or parallel relationship systems.

---

## INTENT ARCHITECTURE CORE RULES

- One page owns one primary intent.
- Topics represent problem spaces, not titles.
- Metadata supports authority and routing; it does not exist as decorative SEO tagging.
- Multiple pages may share a topic only when their search intents differ materially.
- Search intent targeting must respect the page-type hierarchy instead of overriding it.

---

## CONTENT FLOW AND RELATIONSHIPS

The canonical content path is:

```text
domain data -> registry -> content model -> graph -> resolver -> route -> page -> CTA -> validator
```

Relationship generation, ranking, and authority handling are defined in [./GRAPH.md](./GRAPH.md).

Content flow must preserve meaning, not just structure:

- routing must support conversion progression
- related content must not break page intent or funnel role
- only graph-valid candidates may enter related-content display

Manual presentation helpers do not own related-content truth.

---

## RELATED CONTENT SLOT SYSTEM

- Each eligible page gets one related-content zone.
- The zone shows at most three items.
- The zone is fed by graph-ranked candidates, not ad hoc editorial lists.
- Inline editorial links may support the narrative, but they do not replace the related-content system.

Related content must respect page behavior:

- Landing pages must not surface unrelated educational chains.
- Blog pages must not loop into shallow discovery cycles.
- Service pages must prioritize conversion-relevant content.
- Case studies must route toward the service, industry, or system context they prove.
- Resources must not trap readers in endless educational loops.

If related content weakens user progression, remove or reorder it.

---

## PAGE-TYPE WRITING STANDARDS

### Blog

Blog posts must:

- teach one concrete problem, bottleneck, tradeoff, or misconception
- use simple operational language
- stay specific and non-hyped
- connect the problem back to one canonical system
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
- implemented system
- handoff or workflow change
- measurable or observable outcome
- constraint, tradeoff, or decision where available

Case studies may support service conversion, but the case study itself remains a proof asset rather than the primary BOFU decision page.

---

## EXTENSION CONTRACT

### Add Content

1. Choose the correct page type first.
2. Use canonical identifiers only.
3. Match the funnel role to the page type.
4. Keep CTA behavior inside the conversion contract.
5. Validate metadata, structure, and graph integrity.
6. Confirm the page adds authority, proof, clarity, or conversion progression. If it only adds volume, do not add it.

### Add a Service or Feature Page

1. Add the owning domain data.
2. Assign one canonical primary system.
3. Keep the page inside its tier role.
4. Let related content derive from metadata.
5. Validate the touched slice, then run the full gate.

### Add a Related Content Opportunity

1. Improve metadata quality first.
2. Do not add a manual related-content list as a substitute.
3. Confirm the resolver can discover the relationship naturally.

---

## ENFORCEMENT MODEL

| Concern                                         | Primary Owner                    | Enforced By                                       |
| ----------------------------------------------- | -------------------------------- | ------------------------------------------------- |
| Metadata completeness and canonical identifiers | Domain data and registries       | `validate-content-contract.mjs`                   |
| Route and page structure                        | Section order and authored flow  | `validate-section-order-consistency.mjs`          |
| Graph integrity                                 | Content model and graph registry | `validate-graph.ts`                               |
| Related-content duplication                     | Related-content system           | `validate-related-duplication.ts`                 |
| Internal link and docs hygiene                  | Content and docs surfaces        | `validate-internal-links.ts`, `validate-docs.mjs` |
| Behavior and positioning alignment              | Content layer and page type      | System rules + validators                         |

Automated enforcement confirms contracts and structure.
Manual review still owns authority strength, specificity, page differentiation, and conversion clarity.

---

## CROSS-REFERENCE MAP

- Identity and system hierarchy: [./FOUNDATION.md](./FOUNDATION.md)
- Graph and resolver mechanics: [./GRAPH.md](./GRAPH.md)
- CTA and contact contracts: [./CONVERSION.md](./CONVERSION.md)
- Public writing style and rewrite rules: [./WRITING.md](./WRITING.md)

# CONTENT — MindWP

> Source of truth for content hierarchy, page roles, metadata rules, authority rules, and editorial boundaries.
> If this file conflicts with [./SYSTEM.md](./SYSTEM.md), fix the conflict immediately.

---

## USE THIS DOC

Use this file when creating or editing service, feature, blog, resource, industry, case-study, or landing-page content.

---

## SYSTEM GUARANTEES

- Every routed content surface belongs to one canonical page type.
- Every content node uses canonical metadata from the system, topic, and industry registries.
- Funnel roles are fixed by page type.
- BOFU conversion structure belongs to service pages; other page types escalate upward, not sideways.
- Related content is graph-derived and slot-limited.
- Metadata, page role, CTA role, and related-content behavior must agree.

---

## UNIFIED CONTENT HIERARCHY (CANONICAL DEFINITION)

| Page Type | Primary Role | Funnel Role | Required Metadata | Primary Outcome |
|---|---|---|---|---|
| Service | System decision page | BOFU | `systems[]` | conversion-ready service selection |
| Feature | Capability page | MOFU | `systems[]` | explain one system capability in context |
| Industry Detail | Vertical application page | late MOFU / controlled BOFU | `systems[]`, `industries[]` | show how the system applies to one vertical |
| Industry Category | Taxonomy and navigation page | MOFU | `systems[]` | group industry detail pathways |
| Blog | Problem discovery page | TOFU / MOFU | `systems[]`, `topics[]` | teach one problem or tradeoff |
| Resource | Framework and implementation page | MOFU | `systems[]`, `topics[]` | explain one system, framework, or method |
| Case Study | Proof page | MOFU / proof support | `systems[]`, `industries[]` | validate the system with implementation proof |
| Page | Generic structural page | context-specific | page-owned identity | support navigation or non-domain surfaces |

Source of truth for canonical identifiers: `src/lib/content-graph/canonical.ts`.

---

## CONTENT TYPE DEFINITIONS & ROLES

### Service

Service pages own decision support, conversion framing, implementation scope, and the strongest CTA escalation.

### Feature

Feature pages explain one capability as part of a parent system. A feature does not become a parallel system.

### Blog

Blog pages teach one problem, pattern, or tradeoff. They create discovery and route upward into service or resource pages.

### Resource

Resource pages explain frameworks, architectures, comparisons, and implementation logic. They clarify how the system works without replacing service-page decision support.

### Industry

Industry pages translate the system into a vertical context. They do not become isolated sales narratives detached from the canonical services.

### Case Study

Case studies validate a system through implementation proof. They demonstrate structure, intervention, and outcome without becoming generic sales copy.

---

## FUNNEL ROLE SEPARATION (LOCKED)

- Blog pages own TOFU and early MOFU.
- Resource pages own MOFU explanation and framework clarity.
- Industry pages own late MOFU and controlled BOFU transition.
- Service pages own BOFU decision support and direct service conversion.
- Case studies supply proof and validation; they do not replace service pages.

If a page absorbs the funnel role of another page type, it has drifted and must be corrected.

---

## BOFU CONTENT ISOLATION RULE (LOCKED)

BOFU sections are limited to service pages.

The following structures belong to the BOFU layer:

- decision framing
- failure or escalation blocks
- direct service conversion proof blocks
- strongest CTA escalation

Blog and resource pages may educate, compare, explain, and route upward. They must not absorb BOFU service structure.

---

## TIER 1 PAGE HIERARCHY RULE (LOCKED)

Public content hierarchy must preserve Smart Website gravity.

Rules:

- Smart Website leads the service narrative.
- Supporting Tier 1 systems remain structurally subordinate to that gravity.
- Tier 2 modules solve narrower operational problems and map upward.
- Tier 3 pages remain implementation pathways and do not present themselves as strategic pillars.

The services landing page may curate these layers deliberately, but it may not flatten them into equal-weight public positioning.

---

## SEO INTENT SEPARATION

- Service pages target decision-ready commercial intent.
- Feature pages target capability and solution-comparison intent.
- Industry pages target vertical applicability and context-specific commercial intent.
- Blog pages target informational and problem-aware intent.
- Resource pages target framework, comparison, and implementation intent.
- Case studies target proof intent.

One page owns one primary search intent. Do not merge multiple intent classes into one page.

---

## CONTENT SYSTEM INTEGRITY RULE (LOCKED)

Content integrity depends on four aligned contracts:

1. The page type matches the page role.
2. The metadata matches the page subject.
3. The CTA behavior matches the page role.
4. Related content resolves from metadata rather than editorial shortcuts.

Do not invent parallel identifiers, parallel page roles, or parallel relationship systems.

---

## KEYWORD ARCHITECTURE CORE RULES (LOCKED)

- One page owns one primary intent.
- Topics represent problem spaces, not titles.
- Metadata supports authority and routing; it does not exist as decorative SEO tagging.
- Multiple pages may share a topic only when their search intents differ materially.
- Keyword targeting must respect the page-type hierarchy instead of overriding it.

---

## CONTENT FLOW & RELATIONSHIPS

The canonical content path is:

domain data -> registry -> content model -> graph -> resolver -> route -> page -> CTA -> validator

Relationship generation is metadata-first. The resolver uses metadata overlap to rank related content. Public display remains stricter than the graph itself.

---

## AUTHORITY RESOLUTION SYSTEM (LOCKED)

Authority resolution is graph-owned.

Rules:

- Content declares `systems[]`, `topics[]`, and `industries[]` where required.
- The graph derives relationships from metadata overlap.
- The resolver ranks candidates using the graph and authority rules defined in [./GRAPH.md](./GRAPH.md).
- Only graph-valid candidates may enter the related-content display surface.

Manual presentation helpers do not own related-content truth.

---

## RELATED CONTENT SLOT SYSTEM (LOCKED)

- Each eligible page gets one related-content zone.
- The zone shows at most three items.
- The zone is fed by graph-ranked candidates, not ad hoc editorial lists.
- Inline editorial links may support the narrative, but they do not replace the related-content system.

---

## POSITIONING RULE FOR RESOURCES

Resources explain system logic, architecture, comparisons, and implementation patterns.

Resources must:

- clarify how the system works
- reduce ambiguity
- support MOFU understanding
- route upward when direct service action is appropriate

Resources must not:

- behave like direct sales pages
- absorb BOFU failure or decision structures
- replace service pages as the conversion owner

---

## BLOG WRITING STANDARD (LOCKED)

Blog posts must:

- teach one concrete problem, bottleneck, tradeoff, or misconception
- use simple operational language
- stay specific and non-hyped
- connect the problem back to one canonical system

Blog posts must not:

- behave like sales pages
- promise outcomes they do not own
- flatten multiple topics into one vague article

---

## CASE STUDY ARCHITECTURE

Case studies are proof surfaces.

Each case study must make these elements legible:

- operating context
- structural problem
- implemented system
- handoff or workflow change
- measurable or observable outcome

Case studies may support service conversion, but the case study itself remains a proof asset rather than the primary BOFU decision page.

---

## EXTENSION CONTRACT

### Add Content

1. Choose the correct page type first.
2. Use canonical identifiers only.
3. Match the funnel role to the page type.
4. Keep CTA behavior inside the conversion contract.
5. Validate metadata, structure, and graph integrity.

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

| Concern | Primary Owner | Enforced By |
|---|---|---|
| Metadata completeness and canonical identifiers | Domain data and registries | `validate-content-contract.mjs` |
| Route and page structure | Domain route and page surfaces | `validate-domain-structure.mjs` |
| Graph integrity | Content model and graph registry | `validate-graph.ts` |
| Related-content duplication | Related-content system | `validate-related-duplication.ts` |
| Internal link and docs hygiene | Content and docs surfaces | `validate-internal-links.ts`, `validate-docs.mjs` |

---

## CROSS-REFERENCE MAP

- Identity and system hierarchy: [./SYSTEM.md](./SYSTEM.md)
- Graph and resolver mechanics: [./GRAPH.md](./GRAPH.md)
- CTA and contact contracts: [./CONVERSION.md](./CONVERSION.md)

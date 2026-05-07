# GRAPH — MindWP

> Source of truth for graph ontology, metadata requirements, derived relationships, and authority scoring.
> If this file conflicts with [./FOUNDATION.md](./FOUNDATION.md) or [./CONTENT.md](./CONTENT.md), fix the conflict immediately.
> This document controls graph relationships and related-content resolution only. Identity, positioning, page behavior, page roles, CTA behavior, and writing voice still come from [./FOUNDATION.md](./FOUNDATION.md), [./CONTENT.md](./CONTENT.md), [./CONVERSION.md](./CONVERSION.md), and [./WRITING.md](./WRITING.md).

---

## USE THIS DOC

Use this doc when deciding how pages relate to each other.

This document answers:

- which metadata creates relationships
- which node types participate in the graph
- how related content is ranked
- how UI surfaces consume graph output
- what graph output must not do
- when graph artifacts must be regenerated

---

## GRAPH DECISION ORDER

Before adding or changing graph behavior, decide in this order:

1. Confirm the page type from [./CONTENT.md](./CONTENT.md).
2. Confirm the page behavior from [./FOUNDATION.md](./FOUNDATION.md): landing, system, or entry.
3. Confirm canonical metadata: `systems[]`, `topics[]`, and `industries[]` where applicable.
4. Confirm the primary system used for CTA context.
5. Confirm which relationships are structurally valid.
6. Confirm which relationships are safe for UI exposure.
7. Confirm whether regenerated graph artifacts are required.

Do not add manual related-content shortcuts to avoid fixing metadata.

---

## SYSTEM GUARANTEES

- The graph is metadata-driven.
- Canonical identifiers come from shared registries, not per-page invention.
- Relationships are derived from metadata overlap by default.
- Related-content display is stricter than the graph itself.
- CTA context uses page identity and primary system, not graph display guesses.
- Graph validity does not guarantee UI suitability.
- Related-content output must support the reader's next decision, not only metadata similarity.
- A page may be connected to many nodes, but the UI must expose only relationships that preserve page behavior.

---

## GRAPH MODEL

MindWP treats routed content as a connected graph rather than isolated pages.

The graph exists to support authority flow, decision progression, and deterministic internal routing. It does not exist to show every possible related page.

Each node declares canonical metadata through:

- `systems[]`
- `topics[]`
- `industries[]` where applicable

That metadata feeds:

1. relationship generation
2. authority scoring
3. related-content selection
4. cluster and query APIs

### Behavior Awareness

Behavior types are defined in [./FOUNDATION.md](./FOUNDATION.md).

Behavior does not change which relationships are structurally valid. It controls ranking preference, related-content selection, conversion context, and UI exposure.

If graph output ignores page behavior, it may remain graph-valid, but it is invalid for UI use.

---

## CANONICAL NODE TYPES

| Node Type         | Role                                                |
| ----------------- | --------------------------------------------------- |
| Service           | primary system node and BOFU destination            |
| Feature           | capability node subordinate to a system             |
| Blog              | problem and discovery node                          |
| Resource          | framework and implementation node                   |
| Case Study        | proof node                                          |
| Industry Detail   | vertical application node                           |
| Industry Category | taxonomy container, not a derived-relationship node |

### Feature Rule

Features are not standalone systems.

- A feature must belong to one parent system.
- A feature may connect to blogs, resources, or case studies.
- A feature must not behave like an independent strategic system.
- Feature relationships must route back toward the parent system when conversion context matters.

### Industry Rule

- Industry detail nodes participate in graph relationships.
- Industry category nodes support grouping and navigation.
- Industry category nodes do not pollute derived relationship logic.
- Industry detail nodes must remain context-specific and must not act as generic hubs.
- Industry relationships should reinforce vertical recognition first, then route toward the relevant system or proof context.

---

## CANONICAL IDENTIFIERS

Canonical identifiers come from the shared registry layer.

### Systems

- `smart-website-systems`
- `local-seo-authority`
- `ai-lead-handling`
- `crm-automation`
- `reputation-review`
- `revenue-growth`

### Industries

Examples include:

- `roofing`
- `hvac`
- `plumbing`
- `electrical`
- `landscaping`
- `aesthetic-clinic`
- `hair-salon`
- `nail-salon`
- `med-spa`
- `lash-extensions`

### Topics

Examples include:

- `lead-management`
- `missed-calls`
- `lead-response-time`
- `review-generation`
- `booking-automation`
- `conversion-optimization`
- `crm-visibility`
- `booking-systems`
- `seo-visibility`

New identifiers must be added to the canonical registry before content may use them.

---

## METADATA CONTRACT

Every graph-participating content node uses plural arrays:

- `systems[]`
- `topics[]`
- `industries[]` where applicable

Every routed page also exposes:

- `slug`
- `intent`
- one canonical primary system for conversion context

### Field Expectations By Node Type

| Node Type         | `industries[]` | `systems[]` | `topics[]` |
| ----------------- | -------------- | ----------- | ---------- |
| Blog              | optional       | required    | required   |
| Resource          | optional       | required    | required   |
| Case Study        | required       | required    | optional   |
| Feature           | not used       | required    | optional   |
| Industry Detail   | required       | required    | optional   |
| Industry Category | optional       | required    | optional   |
| Service           | not used       | required    | optional   |

### Primary System Rule

- Each node must have exactly one primary system for CTA resolution.
- Secondary systems may exist for relationship resolution.
- CTA behavior uses only the primary system.
- Related-content ranking may consider secondary systems, but CTA context must not.

### Source Rule

- `source` is generated, not stored manually.
- It uses normalized `{type}/{slug}` format.
- `industry-detail` and `industry-category` normalize to `industry` for source generation.

---

## RELATIONSHIP CONTRACT

Relationships are derived from metadata overlap by default.

The graph uses overlap across:

- `systems[]`
- `topics[]`
- `industries[]`

Manual presentation helpers are not graph authority.

If a desired relationship does not appear, fix the metadata or registry model. Do not add manual related lists as a shortcut.

Disallowed graph owners include:

- `relatedPosts`
- `relatedResources`
- `relatedServices`
- `relatedIndustries`
- `relatedUrls`

### Relationship Types

- `relatesTo`: peer or lateral relationships
- `supports`: supporting or enabling relationships
- `validates`: proof relationships from case-study-style content

### Minimum Expectations

- Blogs should naturally connect upward into resource or service-relevant content.
- Resources should connect through systems and topics.
- Case studies should connect to at least one industry and one system.
- Case studies should reinforce connected service and industry nodes rather than act as discovery hubs.
- Features should connect through their parent system.
- Industry detail nodes should connect through industry plus system metadata.
- Related candidates should help the reader move forward, not sideways into loosely similar content.

---

## GRAPH VS UI

### Graph Layer

- richer and metadata-driven
- stores more valid relationships than the UI exposes
- supports ranking and clustering logic

### UI Layer

- one related-content zone per eligible page
- maximum of three displayed items
- stricter per-page-type exposure rules
- `RelatedSection` is the global related-content display owner — injected by config/wrapper, not page renderers

The graph decides what is valid. The UI decides what is shown.

> **Architecture note:** `RelatedSection` (`src/components/navigation/RelatedSection.tsx`) replaced the old `SmartRelatedSection` → `SmartRelatedSectionClient` → `RelatedContentSection` chain in Milestone 6F. Page renderers must not render their own related sections. Config model:
> ```ts
> relatedSection?: {
>   enabled?: boolean;   // default true
>   variant?: 'standard' | 'rail' | 'compact';  // default 'standard'
> }
> ```
> `SmartRelatedSection`, `SmartRelatedSectionClient`, and `RelatedContentSection` are deleted. `SLUGS_WITH_OWN_RELATED` slug exception lists are forbidden.

### Behavior-Safe Output

UI consumption must respect both graph validity and page behavior.

Examples:

- Landing pages should not surface unrelated educational chains.
- Entry pages should guide toward system, resource, proof, or landing pages depending on intent.
- System pages should surface conversion-relevant content.
- Case studies should route toward the service, industry, or system context they prove.
- Resources should not trap readers in endless educational loops.

If graph-valid results violate page behavior, filter or reorder them.

---

## AUTHORITY RESOLUTION

The authority resolver turns graph-valid candidates into ranked related-content output.

Authority resolution is not a generic related-posts system. It is a progression system that should move the reader toward clearer understanding, stronger proof, or a more relevant conversion path.

### Resolution Flow

1. Nodes declare canonical metadata.
2. Derived edges are generated from metadata overlap.
3. Candidates are scored and ranked.
4. The related-content surface consumes the highest valid results.

### Scoring Formula

```text
score = (systemOverlap * 3) + (topicOverlap * 2) + (industryOverlap * 1)
```

### Ranking Adjustments

The base scoring formula remains unchanged.

A secondary ordering layer may adjust ranking using soft priorities:

- Service nodes have highest conversion priority.
- Industry detail nodes have strong contextual priority.
- Resource nodes support structure and explanation.
- Blog nodes support discovery and should not dominate final output.

This layer must not override base score eligibility. It only refines ordering among valid candidates.

Ranking adjustments must not make weakly related pages appear important simply because they have higher commercial value.

### Intent Sensitivity

Where intent metadata is available, ranking should prefer:

- BOFU over MOFU
- MOFU over TOFU

Intent is a tiebreaker, not a replacement for scoring.

If intent conflicts with relevance score, relevance remains primary.

Do not force BOFU content into TOFU or entry-page contexts before the page has created enough recognition or clarity.

### Static Authority Map

The ranked resolver output is precomputed into the authority-map/report layer and must be regenerated when content, metadata, registry values, scoring rules, behavior filters, or relationship rules change.

---

## QUERY ACCESS RULE

Downstream surfaces should use the graph query API rather than reading raw graph or authority-map internals directly.

Primary query shapes include:

- related content by page identity
- topic cluster lookup
- system cluster lookup
- industry content lookup

Query access stays deterministic. No runtime AI or ad hoc scoring layer is allowed.

Graph queries must return results that are:

- structurally valid
- behavior-aware
- conversion-aligned
- progression-safe

Consumers must not bypass these constraints.

---

## WHAT IS NOT ALLOWED

- Manual related-content lists used to bypass graph metadata.
- Graph-valid output exposed in UI when it weakens page behavior.
- Industry pages turned into generic content hubs.
- Blog-to-blog loops that keep readers in shallow discovery.
- Resource-to-resource loops that create education without progression.
- Case studies treated as generic related articles instead of proof assets.
- Feature pages treated as independent strategic systems.
- Commercial-priority ranking that overrides real relevance.
- Runtime AI, ad hoc scoring, or non-deterministic relationship generation.

---

## CROSS-REFERENCE MAP

- Page roles and exposure rules: [./CONTENT.md](./CONTENT.md)
- Identity and system boundaries: [./FOUNDATION.md](./FOUNDATION.md)
- CTA and contact context: [./CONVERSION.md](./CONVERSION.md)
- Public writing style and related-content language: [./WRITING.md](./WRITING.md)
- Control plane and validation: `scripts/core/system-manifest.mjs`, `scripts/validators/*`, and [../ops/WORKFLOW.md](../ops/WORKFLOW.md)

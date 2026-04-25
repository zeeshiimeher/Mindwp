# GRAPH — MindWP

> Source of truth for graph ontology, metadata requirements, derived relationships, and authority scoring.
> If this file conflicts with [./FOUNDATION.md](./FOUNDATION.md) or [./CONTENT.md](./CONTENT.md), fix the conflict immediately.

---

## USE THIS DOC

Use this doc for graph structure, metadata, relationship resolution, related-content ranking, and graph query access.

---

## SYSTEM GUARANTEES

- The graph is metadata-driven.
- Canonical identifiers come from shared registries, not per-page invention.
- Relationships are derived from metadata overlap by default.
- Related-content display is stricter than the graph itself.
- CTA context uses page identity and primary system, not graph display guesses.

---

## GRAPH MODEL

MindWP treats routed content as a connected graph rather than isolated pages.

Each node declares canonical metadata through:

- `systems[]`
- `topics[]`
- `industries[]` where applicable

That metadata feeds:

1. relationship generation
2. authority scoring
3. related-content selection
4. cluster and query APIs

### Behavior Awareness (NEW)

Behavior types are defined in [./FOUNDATION.md](./FOUNDATION.md) and must be respected.

This classification does not change relationships. It influences ranking preference, related-content selection, and conversion context.

If graph output ignores page behavior → it is invalid for UI use.

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

### Industry Rule

- Industry detail nodes participate in graph relationships.
- Industry category nodes support grouping and navigation.
- Industry category nodes do not pollute derived relationship logic.

### Industry Behavior Constraint (NEW)

Industry detail nodes must remain context-specific and must not act as generic hubs.

Graph relationships must not turn industry pages into broad navigation clusters.

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

### Locked Metadata Fields

Every graph-participating content node uses plural arrays:

- `systems[]`
- `topics[]`
- `industries[]` when applicable

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

### Source Rule

- `source` is generated, not stored manually.
- It uses normalized `{type}/{slug}` format.
- `industry-detail` and `industry-category` normalize to `industry` for source generation.

---

## RELATIONSHIP CONTRACT

### Source Of Truth

Relationships are derived from metadata overlap by default.

The graph uses overlap across:

- `systems[]`
- `topics[]`
- `industries[]`

Manual presentation helpers are not graph authority.

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
- Case studies should reinforce the authority of connected service and industry nodes rather than act as discovery hubs.
- Features should connect through their parent system.
- Industry detail nodes should connect through industry plus system metadata.

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
- `SmartRelatedSection` is the related-content display owner

The graph decides what is valid. The UI decides what is shown.

### Behavior-Safe Output (NEW)

UI consumption must respect both:

- graph validity
- page behavior

Examples:

- Landing pages should not surface unrelated educational chains
- Entry pages should guide toward system or landing pages
- System pages should surface conversion-relevant content

If graph-valid results violate page behavior, they must be filtered or reordered.

---

## AUTHORITY RESOLUTION

The authority resolver turns graph-valid candidates into ranked related-content output.

### Resolution Flow

1. Nodes declare canonical metadata.
2. Derived edges are generated from metadata overlap.
3. Candidates are scored and ranked.
4. The related-content surface consumes the highest valid results.

### Locked Scoring Formula

```text
score = (systemOverlap * 3) + (topicOverlap * 2) + (industryOverlap * 1)
```

### Ranking Adjustments (NON-DESTRUCTIVE LAYER)

The base scoring formula remains unchanged.

A secondary ordering layer may adjust ranking using soft priorities:

- Service nodes (system pages) have highest conversion priority
- Industry detail nodes (landing pages) have strong contextual priority
- Resource nodes support structure and explanation
- Blog nodes support discovery and should not dominate final output

This layer must NOT override base score eligibility.
It only refines ordering among valid candidates.

### Intent Sensitivity (NEW)

Where intent metadata is available, ranking should prefer:

- BOFU (conversion-ready) over MOFU
- MOFU over TOFU

Intent must act as a tiebreaker, not a replacement for scoring.

If intent conflicts with relevance score, relevance remains primary.

### Static Authority Map

The ranked resolver output is precomputed into the authority-map/report layer and must be regenerated when content or relationship rules change.

---

## QUERY ACCESS RULE

Downstream surfaces should use the graph query API rather than reading raw graph or authority-map internals directly.

Primary query shapes include:

- related content by page identity
- topic cluster lookup
- system cluster lookup
- industry content lookup

Query access stays deterministic. No runtime AI or ad hoc scoring layer is allowed.

### Query Responsibility (EXTENDED)

Graph queries must return results that are:

- structurally valid (metadata overlap)
- behavior-aware (page type alignment)
- conversion-aligned (system and intent relevance)

Consumers must not bypass these constraints.

---

## CROSS-REFERENCE MAP

- Page roles and exposure rules: [./CONTENT.md](./CONTENT.md)
- Identity and system boundaries: [./FOUNDATION.md](./FOUNDATION.md)
- CTA and contact context: [./CONVERSION.md](./CONVERSION.md)
- Control plane and validation: [../ops/AUDIT.md](../ops/AUDIT.md)

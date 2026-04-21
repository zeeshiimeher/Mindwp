# GRAPH — MindWP

> Source of truth for graph ontology, metadata requirements, derived relationships, and authority scoring.
> If this file conflicts with `SYSTEM.md` or `CONTENT.md`, fix the conflict immediately.

---

## USE THIS DOC

Use this file when working on graph structure, metadata, relationship resolution, related-content ranking, or graph query access.

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

Rules:

- Only candidates with `score > 0` may render.
- Peer relationships rank before supporting relationships, which rank before validation relationships.
- If fewer than three valid results exist, fallback order is same domain -> services -> highest-scoring remaining valid content.

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

---

## CROSS-REFERENCE MAP

- Page roles and exposure rules: `CONTENT.md`
- Identity and system boundaries: `SYSTEM.md`
- CTA and contact context: `CONVERSION.md`
- Control plane and validation: `TOOLS.md`

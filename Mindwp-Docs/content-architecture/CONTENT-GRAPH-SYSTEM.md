# SYSTEM GOVERNANCE NOTICE (LOCKED)

This document is part of the MindWP Core Architecture System.

Authoritative Sources:

- FOUNDATION-AND-POSITIONING.md
- CONTENT-SYSTEM-ARCHITECTURE.md
- CONTENT-GRAPH-SYSTEM.md
- CONTENT-BLUEPRINT-SYSTEM.md
- CONTENT-GOVERNANCE.md

Rules:

- No other documents may define architecture rules
- Archived documents must not be used as reference
- Planning files must not override system rules
- If conflict exists → core documents always win

---

# CONTENT GRAPH SYSTEM (LOCKED)

Status: Live System Architecture
Version: 2.0
Last Updated: 2026-03-26

Cleaned from: CONTENT-GRAPH-ARCHITECTURE.md

---

## Purpose

This document defines the content graph ontology, relationship model, and authority resolution system for MindWP.

The content graph is a live, implemented system. It governs how content entities connect, how relationships are derived from metadata, and how the authority resolver surfaces related content across the site.

This document is the engineering source of truth for the graph layer.

The content hierarchy, content type roles, exposure rules, and per-page-type slot structure are defined in **CONTENT-SYSTEM-ARCHITECTURE.md**.

Positioning, copy voice, and AI execution lock are defined in **FOUNDATION-AND-POSITIONING.md**.

---

## How the Content Graph Works

Most websites treat pages as isolated units.

MindWP treats content as a graph of connected entities.

Each content item declares metadata:

- industries
- systems
- topics

These declarations allow the system to automatically generate relationships between content layers.

---

## Core Content Entities

| Node Type | Purpose |
|-----------|---------|
| Blog | Discovery layer and problem exploration |
| Resource | System explanation and operational frameworks |
| Industry Category | Taxonomy container for grouping industries |
| Industry Detail | Vertical-specific system application |
| Case Study | Implementation proof |
| Feature | System component capability |
| System (Service) | Infrastructure layer |

---

## Feature Components (System Sub-Layer)

The runtime architecture includes feature pages that represent operational components of Tier 1 systems.

Features are not standalone systems. They belong to a parent system and describe a specific automation capability or operational layer.

Example:

slug: "missed-call-recovery-system"
type: feature
systems: ["ai-lead-handling"]
topics: ["missed-calls"]

Feature nodes always belong to a parent system node. A feature node must never exist without an associated system identifier.

Feature pages do not declare industries, because they represent system capabilities rather than vertical applications. Industry relationships resolve through the hierarchy:

Industry → System → Feature

Feature pages may connect to blog posts, resources, and case studies. However, features must always resolve through their parent system rather than acting as independent system nodes.

---

## Ontology Entities

The graph is powered by shared ontology entities.

### Canonical Systems

- smart-website-systems
- local-seo-authority
- ai-lead-handling
- crm-automation
- reputation-review
- revenue-growth

These are the only approved system identifiers. All metadata must use these values exactly.

### Canonical Industries (Examples)

- roofing
- hvac
- plumbing
- electrical
- landscaping
- aesthetic-clinic
- hair-salon
- nail-salon
- med-spa
- lash-extensions

These identifiers represent industry verticals, not page slugs.

### Canonical Topics (Examples)

- lead-management
- missed-calls
- lead-response-time
- review-generation
- booking-automation
- conversion-optimization
- crm-visibility
- booking-systems
- seo-visibility

Topic identifiers must remain stable over time so multiple posts can build topical authority without creating duplicate clusters.

If a new topic is required, it must be added deliberately to the canonical registry before being used in content metadata.

---

## Industry Node Types

The runtime graph uses two distinct node types for industries.

**Industry Category** nodes act as taxonomy containers that group related industry detail pages.

Examples: home-services, beauty-personal-care, automotive-services

**Industry Detail** nodes represent the actual vertical entities that participate in content relationships through metadata.

Examples: roofing-companies, hvac-companies, hair-salons

Industry detail nodes participate in graph relationships with blog posts, resources, case studies, and systems.

Industry category nodes are primarily used for navigation and taxonomy grouping. They do not participate in derived relationships.

This separation keeps taxonomy containers from polluting the derived relationship graph.

---

## Topic Governance Rule

To prevent topic duplication and SEO cannibalization, every blog post and resource must declare a primary topic from the shared topic ontology.

Each topic should represent a single problem space.

Rules:

- One primary topic per content item
- Multiple posts may exist under a topic, but they must target different search intents
- No two posts should target the exact same query intent

This rule ensures that future content expands topical authority instead of competing with existing content.

The Primary Topic Authority Rule and Unique Topic Cluster Rule are defined in **CONTENT-SYSTEM-ARCHITECTURE.md**.

---

## Content Node Metadata

Every content item must declare metadata used by the graph.

### Metadata Standard (Locked)

All content must declare the following metadata fields in its data object.

industries: string[]
systems: string[]
topics: string[]

These fields must always use plural arrays, even if only one value exists.

---

## Metadata Governance Rule

Metadata must describe the subject of the content, not its presentation category.

Metadata fields power the internal content graph and automatic relationship resolution.

These fields must remain consistent:

industries[]
systems[]
topics[]

If new identifiers are required, they must first be added to the canonical registry before being used.

---

### Graph Consistency Rule (LOCKED)

All content nodes must declare valid metadata that matches the canonical identifier registries. Invalid or orphaned metadata breaks graph relationships.

- systems[] must use canonical system identifiers.
- industries[] must use canonical industry identifiers.
- topics[] must use canonical topic identifiers.
- New identifiers must be added to the canonical registry before use.
- Content without required metadata fields must fail validation.

Cross-reference: Enforcement Rules section in CONTENT-SYSTEM-ARCHITECTURE.md.

---

### Metadata Field Expectations by Node Type

| Node Type        | industries | systems | topics |
|------------------|-----------|--------|--------|
| Blog             | optional  | optional | **required** |
| Resource         | optional  | **required** | **required** |
| Case Study       | **required** | **required** | optional |
| Feature          | — | **required** | optional |
| Industry Detail  | **required** | optional | optional |
| System (Service) | — | optional | optional |

Explanation:

- Blog posts primarily represent topics, and may optionally reference systems or industries.
- Resources explain systems and operational frameworks, and therefore must declare both systems and topics.
- Case studies demonstrate system implementation in a real vertical, so they must declare industries and systems.
- Feature pages represent system components, so they declare systems and optionally topics but not industries.
- Industry detail pages represent vertical entities and declare industries. They may also declare systems and topics when there is clear operational alignment.
- System (Service) pages may declare systems and topics to enable derived relationship matching.

---

### Industry Metadata Rule

Industry detail pages may optionally declare the `industries` metadata field so that content nodes can resolve relationships to a specific vertical.

Example industry detail page:

slug: "roofing-companies"
industries: ["roofing"]

Industry category pages do not need metadata because they function as taxonomy containers.

Examples: home-services, beauty-personal-care, automotive-services

These pages group industries but are not treated as content nodes in the graph.

---

### System Identifier Rule

The `systems` field must use the canonical Tier 1 system slugs so relationships can automatically resolve to the correct system pages.

Approved system identifiers:

- smart-website-systems
- local-seo-authority
- ai-lead-handling
- crm-automation
- reputation-review
- revenue-growth

Service pages may declare the `systems` and `topics` metadata fields to enable the derived relationship engine to compute metadata overlap with other content nodes.

---

### Metadata Usage Rule

Metadata must describe the subject of the content, not the presentation category.

Example blog post:

Title: "Why Roofing Companies Lose Leads"
industries: ["roofing"]
systems: ["ai-lead-handling"]
topics: ["lead-management"]

Example resource:

Title: "Lead Management System for Service Businesses"
industries: ["roofing", "hvac"]
systems: ["ai-lead-handling"]
topics: ["lead-management"]

Example case study:

Title: "Roofing Lead Recovery System"
industries: ["roofing"]
systems: ["ai-lead-handling", "revenue-growth"]
topics: ["lead-recovery"]

This metadata is used by the content graph to generate relationships automatically.

---

### Canonical Identifier Registry (Locked)

To prevent metadata drift and ensure consistent graph relationships, the project maintains a canonical identifier registry for industries, systems, and topics.

All metadata values must use these identifiers exactly. New identifiers should not be invented during content creation.

#### Canonical Industry Identifiers

- roofing
- hvac
- plumbing
- electrical
- landscaping
- aesthetic-clinic
- hair-salon
- nail-salon
- med-spa
- lash-extensions

#### Canonical System Identifiers

- smart-website-systems
- local-seo-authority
- ai-lead-handling
- crm-automation
- reputation-review
- revenue-growth

#### Canonical Topic Identifiers

Topics represent problem spaces, not keywords or titles.

Examples:

- lead-management
- missed-calls
- lead-response-time
- review-generation
- booking-automation
- conversion-optimization
- crm-visibility

If a new topic is required, it must be added to this registry before being used in content metadata.

---

## Relationship Source of Truth

Relationships between content entities are primarily derived from metadata, not manually stored on content objects.

The graph resolver generates relationships based on shared metadata fields:

- industries
- systems
- topics

Derived relationships are the primary source of truth for the content graph.

### Manual Relationships (Future — Not Yet Implemented)

Manual relationships are defined in the type system as a controlled strategic override, but are not currently used by any content node.

When implemented, the rules will be:

- Manual edges are allowed only on service nodes.
- They encode business-strategic connections that metadata overlap alone cannot express.
- They must be reviewed when the service hierarchy changes.
- They do not replace the derived system — they supplement it.

Manual relationships are a governance layer, not the default system.

The following fields are considered legacy presentation helpers and must not control the graph architecture:

- relatedPosts
- relatedResources
- relatedServices
- relatedIndustries
- relatedUrls

The canonical relationship logic comes from metadata-derived edges.

---

## Relationship Rules

Relationship rules operate on content nodes, not taxonomy containers.

Content nodes include: Blog posts, Resources, Case studies, Feature pages, Service pages.

Industry detail pages participate in relationships through the `industries` metadata field.

Minimum connection expectations:

- Blog must connect to: at least one resource (through shared metadata)
- Resources must connect to: one system, one topic, optional industries
- Industry detail pages may connect to: resources, case studies, systems
- Case studies must connect to: one industry, one or more systems
- Feature pages must connect to: one parent system

These connections are resolved automatically through the derived relationship engine based on metadata overlap.

---

## Relationship Types

The graph uses three relationship types:

- **relatesTo** — connects peer nodes at the same level (e.g. service to service).
- **supports** — connects a higher-level node to content it enables (e.g. service to resource).
- **validates** — connects proof content to the systems it demonstrates (e.g. case study to service).

---

## Graph vs UI Separation

The content graph and the display layer operate under different rules.

### Graph Layer (Internal)

- Flexible and metadata-driven
- Bidirectional — nodes can discover each other through forward and reverse edges
- Stores more relationships than are displayed
- Operates on scoring and ranking logic

### UI Layer (Public)

- Strict and controlled
- Maximum of 3 related items per section
- Only high-relevance items appear
- Context-specific — different page types show different related content
- Service pages show only related services

The graph provides the data. The UI decides what to show.

This separation means the graph can be rich and flexible without the UI becoming cluttered.

---

## Authority Resolution System

The authority resolver converts graph relationships into the related content displayed on each page.

### How It Works

1. Content nodes declare metadata (systems, topics, industries).
2. The derived relationship engine generates edges based on metadata overlap.
3. The authority resolver scores and ranks all edges for a given node.
4. The UI displays the top-scoring items, capped at 3 per section.

### Scoring (Conceptual)

- Derived edges with strong metadata overlap score highest.
- The resolver prioritises relationships by type: direct peer relationships first, then supporting relationships, then validation relationships.

### Static Authority Map

The resolver output is pre-computed into a static authority map at build time. This map powers the related content sections across the site.

The authority map must be regenerated when content is added, removed, or when relationship rules change.

The ranking factor definitions (metadata overlap, relationship type priority, derived vs manual behaviour, resolution principle) are locked in **CONTENT-SYSTEM-ARCHITECTURE.md** under **"AUTHORITY RESOLUTION SYSTEM (LOCKED)"**.

---

## Content Relationship & Exposure Rules — Reference

The master definition for all per-page-type content exposure rules is maintained in **CONTENT-SYSTEM-ARCHITECTURE.md** under **"CONTENT RELATIONSHIP & EXPOSURE RULES (LOCKED)"**.

That section defines:
- What related content appears on each page type (Industry, Resource, Service, Case Study, Blog, Feature)
- Global display cap (max 3 per section)
- Dual-layer architecture rule
- Relationship exposure principle
- Anti-drift rules

The **RELATED CONTENT SLOT SYSTEM** defines the exact UI slot structure per page type.

The graph layer implements these rules through the authority resolver and static authority map. The UI layer enforces the per-page-type slot constraints. Do not duplicate those rules here.

---

## Graph Query API (LOCKED)

The graph is accessed exclusively through the Query API (`src/lib/graph/query.ts`). No UI component or downstream system accesses the raw graph or authority map directly.

Exported functions:

- `getRelatedContent(slug, type)` — returns pre-computed related content slots (services, resources, blog, caseStudies, industries) for a page
- `getTopicCluster(topic)` — returns all content nodes sharing a topic identifier
- `getSystemCluster(system)` — returns all content nodes sharing a system identifier
- `getContentByIndustry(industry)` — returns all content nodes in an industry

All functions return deterministic, pre-computed data. No runtime scoring or AI logic.

---

END OF DOCUMENT.

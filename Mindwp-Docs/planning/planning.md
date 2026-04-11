# EXECUTION PLANNING SYSTEM

Model: GPT-5.4

Purpose:
This document is the execution control layer for revenue activation, service-page upgrades, and alignment work across the live MindWP system.

This is a preservation-first planning document.

It must:
- preserve architecture decisions
- preserve phase logic
- preserve constraints and guardrails
- remove duplication and confusion
- make execution order obvious

---

# 1. EXECUTION OVERVIEW

## System We Are Building

MindWP is building a controlled revenue activation layer on top of an already-defined systems-first architecture.

The active objective is:
- strengthen service pages
- align conversion paths
- protect content-role integrity
- route authority content upward into one service architecture

This is not a redesign cycle.
This is not topic expansion.
This is not broad content production.

This is an execution and alignment cycle.

---

## Current System State (Locked)

Completed foundation:
- System Architecture = complete
- Graph System = deterministic and complete
- Authority Layer = complete
- Validation Layer = complete
- Services = defined
- Topics = locked
- Phase 1 CTA ownership migration = complete
- Phase 2 CTA hardening + intelligence layer = complete
- Phase 2.5 CTA tone system = initial implementation complete
- CTA data cleanup = complete

In progress:
- Phase 3 Revenue Activation

Ready after active work:
- Phase 4 Service Alignment

---

## What Is Locked

- Core architecture decisions are locked
- Topics are locked
- Services are defined
- Smart Website Systems remains the strategic gravity layer
- BOFU is isolated to service pages
- Components remain stable building blocks
- Pages are the composition layer

---

## What Is Not Allowed

- no new topics
- no architectural redesign
- no random new pages
- no broad content expansion before alignment work is complete
- no BOFU escalation inside blog or resource pages
- no component mutation to introduce new page behavior
- no bulk execution across multiple page families without a clear phase owner

---

## Domain Priority Context

Execution priority order:
1. Services
2. Service landing page
3. CRM integration content
4. Blogs and resources
5. Case studies
6. Industry pages

Rule:
Revenue-first execution outranks breadth.

---

# 2. EXECUTION MODEL (SIMPLIFIED)

## PHASE: SERVICE SYSTEM UPGRADE (CORE)

Important:
- This is not a new phase
- This is the operating execution model inside existing phases
- It organizes how Phase 3 and Phase 4 work should be executed

Purpose:
Remove overlap between scattered service-page work, revenue activation work, proof work, CTA work, and validation work.

Execution Groups:

### Group A — Content Alignment (MOFU vs BOFU)

Purpose:
Protect content-role integrity before commercial escalation.

Includes:
- blog and resource role correction
- MOFU vs BOFU separation
- service-routing alignment for authority content
- removal of BOFU leakage from non-service content

Primary linked phases:
- Phase 3.1
- Phase 4.8

Core rule:
Blog and resource pages may educate, validate, and route upward, but may not own decision-ready BOFU structure.

---

### Group B — Structure System (Level 5)

Purpose:
Create one universal service-page standard.

Includes:
- Level 5 page structure
- section definitions
- proof rules
- CTA rules
- page classification logic

Primary linked phases:
- Phase 3.2
- Phase 4.1
- Phase 3.6

Core rule:
Service pages move upward by adopting one locked structure, not by improvising page-specific layouts.

---

### Group C — Full Rewrite (Content + Metadata)

Purpose:
Rewrite pages only after structure and role are clear.

Includes:
- service page content rewrites
- metadata and graph alignment
- full page-level commercial upgrades
- domain landing, industry, and case-study rewrite passes

Primary linked phases:
- Phase 4.1
- Phase 4.2
- Phase 4.4
- Phase 4.5
- Phase 4.6

Core rule:
Preserve meaning, rewrite structure where needed, and keep service ownership explicit.

---

### Group D — UI Integrity (Component Rule)

Purpose:
Prevent new behavior from being hidden inside shared components.

Includes:
- page-level composition only
- new sections rather than prop creep
- no logic injection into existing reusable components

Primary linked phases:
- all active phases

Core rule:
Components remain stable. New behavior enters at the page section layer.

---

### Group E — Validation

Purpose:
Keep execution measurable and deterministic.

Includes:
- validation checks
- success criteria checks
- graph and metadata verification
- repo-state audit loop

Primary linked phases:
- Phase 3.7
- Phase 4.2
- final checks after all rewrite groups

Core rule:
No phase advances on assumption. Validation closes the loop.

---

# 3. ORIGINAL PHASES (PRESERVED BUT CLEANED)

## Phase 0 — System Stabilization

Priority: Critical

Purpose:
Stabilize core systems before revenue-layer execution expands.

Execution order:
1. CTA system hardening
2. SEO system centralization
3. Related system validation
4. Location system planning

Status summary:
- CTA system hardening = complete
- CTA tone system = initial implementation complete
- SEO centralization = still a preserved stabilization concern
- Related system validation = deterministic, cleanup only
- Location system = blocked, planning only

Preserved requirements:

CTA system hardening success meant:
- all primary CTAs route through SmartCTA
- no inline primary CTA ownership remains
- CTA labels are centrally controlled

SEO centralization remains responsible for:
- builders for non-service domains
- canonical consistency
- schema consistency
- removal of duplicated manual SEO objects

Related system validation remains responsible for:
- removing dead related fields
- documenting deterministic related-content behavior
- preventing future manual related arrays

Location system remains blocked:
- no location page implementation now
- planning only

Execution-group mapping:
- Group D UI Integrity
- Group E Validation

---

## Phase 3 — Revenue Activation

Priority: Critical

Purpose:
Convert existing content and decision assets into a controlled revenue activation layer without breaking content-role integrity.

Strict execution order:
1. CRM integration patch
2. Service-pages improvement
3. BOFU page 1
4. BOFU page 2
5. BOFU page 3
6. Proof integration
7. Validation fixes

Rules:
- no jumping between subphases
- complete each subphase before moving forward
- keep all execution revenue-first and conversion-focused

---

### Phase 3.1 — CRM Integration Patch (Blocking)

Priority: Critical
Status: In progress

Target pages:
- WebsiteCrmIntegrationForServiceBusinesses.tsx
- WebsiteCrmIntegrationForSalons.tsx
- WebsiteCrmIntegrationExplained.tsx

Original problem set:
- validates = 0
- no service push
- weak CTA

Locked correction:
These pages are MOFU authority + transition assets, not BOFU pages.

Phase 3.1 finding:
BOFU leakage was previously introduced into blog and resource pages.

Required correction:
- keep direct service mapping to crm-infrastructure-implementation
- keep one service-routing CTA
- keep one proof reference
- remove decision sections
- remove failure sections
- remove aggressive BOFU framing

Success criteria:
- validates > 0
- one direct service CTA
- one proof reference
- one service mapping
- no BOFU leakage remains

Execution-group mapping:
- Group A Content Alignment
- Group E Validation

---

### Phase 3.2 — Service-Pages Improvement

Priority: High

Purpose:
Use service-page audits to define and apply the global Level 5 standard.

Preserved anchor:
- LocalServicePageArchitecture.tsx was the original immediate audit target

Expanded operational meaning:
This phase now acts as the bridge between one-page service improvement work and the full Level 5 service-page system.

Required outcomes:
- identify explanatory service-adjacent pages
- define what Level 5 requires
- use comparison, proof, and CTA strengthening only where role allows
- keep BOFU behavior restricted to actual service pages

Execution-group mapping:
- Group B Structure System
- Group D UI Integrity

---

### Phase 3.3 — BOFU Page #1

Priority: Critical

Title:
Website CRM Integration vs Manual Lead Handling

Goal:
Force decision to implement CRM infrastructure.

Service:
crm-infrastructure-implementation

Mandatory page structure:
- problem
- comparison
- proof
- decision section
- single CTA

Execution-group mapping:
- Group B Structure System
- Group C Full Rewrite

---

### Phase 3.4 — BOFU Page #2

Priority: Critical

Title:
Service Pages vs One Generic Services Page

Goal:
Force rebuild decision.

Service:
smart-website-systems

Execution-group mapping:
- Group B Structure System
- Group C Full Rewrite

---

### Phase 3.5 — BOFU Page #3

Priority: Critical

Title:
Conversion Funnel System vs Landing Page Development

Goal:
Force correct service choice.

Service:
conversion-funnel-system

Execution-group mapping:
- Group B Structure System
- Group C Full Rewrite

---

### Phase 3.6 — Proof Integration

Priority: Critical

Primary proof asset:
- RoofingWebsiteRebuildWithCrm

Usage:
- CRM pages
- service pages
- conversion pages

Preserved requirements:
- add inline proof, not footer-only proof
- add metrics-based statements where available
- connect outcome to the service being pushed

Locked proof rules:
- proof must appear mid-content
- proof must show before vs after
- proof must include measurable outcome where possible
- proof must directly support the service being pushed

Execution-group mapping:
- Group B Structure System
- Group E Validation

---

### Phase 3.7 — Validation Fixes

Priority: Critical

Targets:
- validates >= 1 minimum
- validates >= 2 ideal for core pages

Preserved tasks:
- fix CRM cluster service connection
- inject proof where missing
- re-run authority or validation generation as needed

Execution-group mapping:
- Group E Validation

---

## Phase 4 — Service Alignment

Priority: High

Purpose:
Align every topic, service, CTA, page structure, metadata layer, and domain pathway into one controlled service architecture.

Core mapping:
- service-pages -> smart-website-systems
- crm-integration -> crm-infrastructure-implementation
- conversion -> conversion-funnel-system
- infrastructure -> smart-website-systems

Alignment rules:
- every core topic maps upward into one service
- every BOFU page owns one CTA
- generic primary CTA language is not allowed

---

### Phase 4.1 — Service Pages Level 5 Upgrade

Purpose:
Upgrade all service pages to the locked Level 5 standard.

Preserved tasks:
- audit remaining service pages
- add comparison where missing
- add proof where missing
- ensure one clear CTA per page
- align every page to the correct service intent

Execution-group mapping:
- Group B Structure System
- Group C Full Rewrite

---

### Phase 4.2 — Global Metadata and Graph Alignment

Purpose:
Clean systems, topics, and authority relationships across all domains.

Preserved tasks:
- fix topic mappings
- fix systems mappings
- remove duplicate or incorrect associations
- ensure every node has valid service alignment
- rebuild authority map after fixes

Execution-group mapping:
- Group C Full Rewrite
- Group E Validation

---

### Phase 4.3 — CTA Standardization

Purpose:
Standardize CTA intent, service mapping, and placement across domains.

Preserved tasks:
- audit CTAs in all domains
- replace generic CTA language
- ensure one primary CTA per page
- align CTA with one service
- match CTA language to conversion stage

Locked clarification:
The service page standard in Section 4 is now the single source of truth for CTA behavior. This phase executes that standard across domains.

Execution-group mapping:
- Group B Structure System
- Group E Validation

---

### Phase 4.4 — Domain Landing Pages

Purpose:
Turn landing pages into conversion-driven navigation layers.

Preserved execution law:
Work one landing page at a time.

Per-page workflow remains:
1. audit
2. identify gaps
3. patch
4. validate
5. update this document

Execution-group mapping:
- Group C Full Rewrite
- Group E Validation

---

### Phase 4.5 — Industry Pages Rewrite

Purpose:
Upgrade industry pages to stronger positioning and service-routing quality.

Preserved tasks:
- audit all industry pages
- rewrite for specificity and positioning
- add system explanation per industry
- add proof mapping
- align CTA to relevant service

Execution-group mapping:
- Group C Full Rewrite

---

### Phase 4.6 — Case Studies Rewrite

Purpose:
Convert case studies into reusable proof assets.

Preserved mandatory structure:
- problem
- system implemented
- what changed
- results
- business impact

Preserved tasks:
- audit all case studies
- rewrite using proof-first structure
- add before vs after
- add measurable outcomes
- connect explicitly to a service
- make proof reusable across pages

Execution-group mapping:
- Group C Full Rewrite
- Group B Structure System

---

### Phase 4.7 — Writing System Upgrade

Purpose:
Tighten writing guidance by content role.

Preserved tasks:
- update writing instructions
- define case study writing framework
- define BOFU vs MOFU vs TOFU tone
- define CTA writing rules
- define proof integration rules

Execution-group mapping:
- Group A Content Alignment
- Group B Structure System

---

### Phase 4.8 — Blog and Resource Alignment

Purpose:
Align blogs and resources at the metadata and conversion-routing layer without turning this into a broad content-production pass.

Included:
- metadata
- topics
- systems
- service mapping
- targeted CTA alignment
- targeted proof reference alignment

Excluded:
- full content rewrites
- broad writing improvements
- mass optimization
- topic expansion

Preserved tasks:
- audit blogs with validates = 0
- audit resources with weak service linkage
- patch only affected pages
- add one CTA
- add one proof reference
- add one service connection
- revalidate graph output after patches

Execution-group mapping:
- Group A Content Alignment
- Group E Validation

---

# 4. SERVICE PAGE STANDARD (LOCKED)

This section is the single source of truth for service-page execution.

## Page Readiness States

### Level 3 — Explanatory

Traits:
- explains the topic or service
- may have a CTA
- lacks strong comparison, proof, or decision support

### Level 4 — Partially Conversion-Ready

Traits:
- clearer commercial framing
- may include comparison or proof
- still lacks complete decision structure

### Level 5 — Ready

Traits:
- complete commercial page structure
- explicit service ownership
- proof and CTA aligned to one service
- ready to push a decision without drifting into noise or duplication

---

## Universal Level 5 Structure

1. Hero
2. Problem
3. System Explanation
4. Comparison
5. Proof
6. Outcome
7. Decision Support
8. Implementation Scope
9. Mid CTA
10. Final CTA

Rule:
This is the universal structure for Level 5 service pages.

---

## Section Definitions

### 1. Hero

Purpose:
Confirm service relevance immediately.

Must communicate:
- the service
- the buyer problem
- the promised shift
- one primary next step

Role in conversion:
Stops bounce and anchors intent.

---

### 2. Problem

Purpose:
Make the operational cost of the current state clear.

Must communicate:
- what is broken
- why it matters
- why the issue persists

Role in conversion:
Creates urgency and context.

---

### 3. System Explanation

Purpose:
Explain how the service actually works.

Must communicate:
- the operating model
- the layers involved
- what changes after implementation

Role in conversion:
Builds clarity, not abstraction.

---

### 4. Comparison

Purpose:
Make the alternative visible.

Must communicate:
- before vs after
- generic vs system-based
- manual vs structured

Role in conversion:
Clarifies the decision.

---

### 5. Proof

Purpose:
Show that the service creates real change.

Must communicate:
- before state
- intervention
- after state
- measurable improvement where possible

Role in conversion:
Reduces trust friction.

---

### 6. Outcome

Purpose:
Translate implementation into business effect.

Must communicate:
- what improves
- what becomes easier
- what becomes more reliable

Role in conversion:
Moves value from features to business consequence.

---

### 7. Decision Support

Purpose:
Help the reader decide if this service is the right fit now.

Must communicate:
- who it fits
- who it does not fit
- timing and readiness
- practical objections

Role in conversion:
Supports informed commitment.

---

### 8. Implementation Scope

Purpose:
Define what the service includes.

Must communicate:
- scope
- boundaries
- inclusions
- delivery expectations

Role in conversion:
Removes ambiguity.

---

### 9. Mid CTA

Purpose:
Capture action after conviction begins.

Must communicate:
- one service
- one next step
- one clear route

Role in conversion:
Provides a decision point before the bottom of the page.

---

### 10. Final CTA

Purpose:
Close the page with one unambiguous action.

Must communicate:
- one service
- one action
- one commercial next step

Role in conversion:
Final decision capture.

---

## Proof Rules (Locked)

- Proof must appear mid-content
- Proof must not be footer-only
- Proof must show before vs after
- Proof must connect directly to the service being sold
- Proof must not float as generic trust decoration

MOFU proof:
- validates a concept
- supports authority content
- does not push a hard decision

BOFU proof:
- validates a service decision
- supports a service page or BOFU page only
- must remain out of blog and resource content unless reduced to MOFU framing

---

## CTA Rules (Locked)

### Service Page CTA Count

Level 5 service pages should use:
- one hero CTA
- one mid CTA
- one final CTA

No random extra primary CTA blocks.

### Placement

- hero CTA = top
- mid CTA = after proof or outcome
- final CTA = end of page

### Tone

- short tone = fast scan / top-level action
- descriptive tone = clarity / lower-page conviction

Default rule:
Use short tone where speed matters, descriptive tone where decision clarity matters.

### Service Mapping Rule

- one page = one primary service
- one primary CTA = one service
- CTA must not compete with another service on the same page

---

## Metadata System (Mandatory)

Every service page rewrite MUST include:

- Title (SEO + conversion aligned)
- Meta Description (outcome-driven)
- Primary Service (locked)
- System Mapping (correct system)
- Topic alignment (no mismatch)

Rules:

- no generic titles
- no vague descriptions
- must reflect decision intent
- must match page content exactly

Execution Rule:

A page is NOT complete without metadata update.

---

# 5. COMPONENT INTEGRITY SYSTEM

This rule is strict and visible because it controls all future execution.

## Locked Rule

- Do not modify existing reusable components to introduce new page behavior
- Do not inject new logic through existing component props
- Do not extend stable data structures just to squeeze in new behavior
- Create a new page-level section instead
- Insert new behavior explicitly at the page composition layer

## Operating Principle

- Components = stable building blocks
- Pages = composition layer

## Allowed

- new dedicated sections
- page-level composition
- explicit insertion of new section blocks

## Forbidden

- hidden conditions inside shared CTA, hero, or section components
- conditional logic injection for one-off rewrite behavior
- turning reusable components into phase-specific behavior carriers

## Reason

- prevents component bloat
- preserves deterministic behavior
- keeps future audits readable

---

# 6. AUDIT INSIGHTS (LOCKED LEARNINGS)

Purpose:
Store hard learnings centrally so the same mistakes are not repeated.

- BOFU must not exist in blog or resource pages
- Proof must be mid-content
- One page = one service
- CTA must map to one service
- Builders pages remain Level 3 support-path pages unless explicitly reclassified
- Decision sections should not be forced into pages whose role does not allow BOFU behavior
- Service pages are the only true BOFU layer
- Resource and blog pages may educate, validate, compare, and route upward, but they may not become disguised service pages
- Smart Website Systems remains the gravity layer and must not be visually or strategically displaced by supporting systems
- Landing pages pre-sell the click; they do not explain everything

---

# 7. EXECUTION WORKFLOW (SIMPLIFIED)

Use this workflow for all future execution.

1. Audit (Copilot)
2. Plan (GPT)
3. Execute (Copilot / Claude)
4. Validate (GPT)
5. Update this doc

Rules:
- audit repo state, not assumptions
- plan before broad execution
- execute within the active phase and execution group
- validate before moving forward
- record the result here after completion

---

## Per Page Execution Checklist (Locked)

For EACH service page:

1. Audit
  - current sections
  - missing layers
  - weak areas

2. Structure Alignment
  - hero
  - problem
  - system
  - comparison
  - proof
  - outcome
  - decision
  - implementation
  - CTA

3. Content Rewrite
  - rewrite ALL sections
  - preserve meaning
  - upgrade to Level 5

4. Metadata Update
  - title
  - description
  - system
  - service mapping

5. CTA Validation
  - 1 service only
  - correct tone
  - correct placement

6. Proof Validation
  - mid content
  - before/after
  - measurable

7. Final Validation
  - no BOFU leakage outside service
  - no component modification
  - no duplicate logic

8. Mark Complete

---

# 7.1 EXECUTION MODE — STRICT (LOCKED)

Purpose:
Enforce deterministic execution across service pages.

Rules:

- ALL service pages are part of ONE execution batch
- BUT execution MUST be sequential (one page at a time)

Execution Behavior:

1. Create TODO list for ALL service pages
2. Select ONE page
3. Execute full cycle:
  -> audit
  -> rewrite (content + metadata)
  -> validate
  -> mark complete
4. Move to next page ONLY after completion

STRICTLY FORBIDDEN:

- parallel page execution
- bulk rewriting multiple pages
- skipping validation per page

Reason:

- maintain consistency
- prevent system drift
- ensure deterministic results

---

# 8. MODEL ROLE SYSTEM

## GPT (5.4)

Owns:
- planning
- structure decisions
- validation
- success criteria
- planning.md updates

Must not:
- perform bulk repo edits
- generate long-form production content

---

## Copilot

Owns:
- repo audits
- file patching
- system fixes
- metadata fixes
- CTA and structure implementation
- consistent multi-file execution

Must not:
- invent new architecture
- write uncontrolled creative content

---

## Claude

Owns:
- controlled content writing and rewriting
- service page rewrites
- case study rewrites
- industry page rewrites
- targeted blog or resource writing only when explicitly allowed

Must not:
- change system logic
- change metadata logic
- change architecture decisions

---

## Responsibility Rule

- never mix responsibilities loosely
- never let Claude change system logic
- never let Copilot rewrite architecture by implication
- always return to GPT for validation and planning control

---

# 9. PHASE COMPLETION RULES

## Phase 0 complete when

- CTA system is centralized
- SEO builder work is complete where required
- related-system dead fields are resolved
- location system remains blocked but future-ready

## Phase 3 complete when

- CRM patch is complete
- service-page improvement is complete
- all 3 BOFU pages are built in order
- proof integration is complete
- validation fixes are complete

## Phase 4.1 complete when

- all target service pages meet the Level 5 standard
- each page owns one clear primary service
- each page has proof support
- each page has decision-ready structure where appropriate

## Phase 4.2 complete when

- no broken topic mappings remain
- no invalid system associations remain
- authority graph is clean

## Phase 4.3 complete when

- no weak generic primary CTA remains
- every primary CTA maps to one service
- CTA placement follows page-role logic

## Phase 4.4 complete when

- landing pages are upgraded one by one in sequence
- titles, descriptions, and CTA blocks are conversion-driven
- each card or section pushes one clear next step

## Phase 4.5 complete when

- industry pages feel specialized
- proof and CTA alignment are present
- no generic-template feel remains

## Phase 4.6 complete when

- every case study uses proof-first structure
- before vs after is explicit
- measurable outcomes are included where available
- service connection is explicit

## Phase 4.8 complete when

- no targeted blog or resource remains in the zero-validate scope
- each patched page has one CTA
- each patched page has one service mapping
- each patched page has one proof reference
- no unnecessary rewrites were introduced

---

# 10. GLOBAL RULES

- Do not create random content
- Do not expand topics
- Do not over-engineer
- Do not scale content before system stabilization and alignment work are secure
- Do not introduce new pages before SEO and CTA systems are centralized where required
- System fixes come before content fixes
- Do not jump to BOFU pages early
- Do not touch new content before fixing existing problems
- Do not over-optimize graph work early
- Focus on revenue, conversion, and execution

---

# 11. EXECUTION LOG

[Date]

- Completed:
  ->

- Result:
  ->

- Next:
  ->

---

# 12. SUCCESS CONDITION

- consistent execution across the system
- no tone inconsistency from role drift
- no system breakage from component mutation
- clean separation of concerns
- easier auditability for future phases
# FOUNDATION — MindWP

> Root authority for identity, service hierarchy, vocabulary, positioning, and boundary rules.
> If any other document conflicts with this file, fix the conflict immediately.
> This document wins over every other strategy, content, conversion, graph, design, and workflow document.

---

## USE THIS DOC

Read this first in any new session before editing strategy, content, page data, CTAs, routes, graph relationships, or public-facing copy.

This document defines:

- what MindWP is and is not
- which systems exist
- how those systems relate
- which language is allowed
- which positioning boundaries must not be crossed

---

## DOC AUTHORITY ORDER

When documents conflict, follow this order:

1. `FOUNDATION.md` — identity, positioning, service hierarchy, vocabulary, boundaries.
2. `WRITING.md` — voice, phrasing, rewrite rules, banned language.
3. `CONTENT.md` — page roles, funnel roles, content behavior.
4. `CONVERSION.md` — CTA intent, CTA placement, contact routing, conversion rules.
5. `GRAPH.md` — metadata, relationships, authority routing, content graph behavior.
6. `DESIGN.md` — visual rules, CSS constraints, component styling behavior.
7. `ops/*` — setup, workflow, and operational process.
8. `ui/*` — component usage, component mapping, future UI proposals.

If a lower-priority document conflicts with a higher-priority document, update the lower-priority document.
Do not reinterpret this document to fit another document.

---

## CORE IDENTITY

MindWP is a systems-first digital infrastructure consultancy for established service businesses.

MindWP designs and implements connected digital systems that improve:

- enquiry handling
- follow-up reliability
- operational clarity
- conversion efficiency
- internal visibility

MindWP does not position itself as:

- a design-only studio
- a random digital service catalog
- a traffic-only growth agency
- a tool reseller
- a SaaS product

The commercial posture is calm, clear, and operational.
MindWP sells structure before scale and infrastructure before growth.

### Marketing-Adjacent Outcomes

MindWP is not a generic marketing agency. Campaign management, ad spend, generic retainers, and decorative design are not the offer.

However, MindWP systems directly drive marketing-adjacent business outcomes:

- acquisition quality
- local visibility
- enquiry conversion
- follow-up reliability
- reputation trust
- revenue recovery

Do not avoid these outcomes in copy.
Support them through system and infrastructure framing, not campaign-style or agency positioning.

---

## PAGE BEHAVIOR MODEL

All public pages fall into one of three behavior types.
This is a positioning and writing constraint, not a routing change.

A page must not mix behavior types.

- A landing page must not drift into a guide.
- A system page must not become a tool explanation.
- An entry page must not position itself as the final offer.

### 1) Landing Pages

Primary use: industry pages and controlled BOFU pages.

Purpose:

- create recognition in seconds
- reflect a real business situation
- lead naturally to contact

Rules:

- lead with the reader's situation, not MindWP's service
- do not teach broad concepts first
- do not read like guides, blogs, or SEO articles
- do not introduce tools before the problem is recognised
- make the reader think: “this is exactly what happens in my business”

### 2) System Pages

Primary use: service and BOFU system pages.

Purpose:

- explain how structure changes business outcomes
- connect problem → system → result without unnecessary technical detail

Rules:

- remain outcome-first
- explain structure only when it clarifies the business result
- do not become tool explanations or implementation tutorials
- do not expand into adjacent systems beyond bridge rules

### 3) Entry Pages

Primary use: SEO, topic, blog, and resource pages.

Purpose:

- capture intent
- clarify the problem
- route into the correct system or next decision

Rules:

- may educate lightly
- diagnose before explaining
- must not position as standalone services
- must not exist as content for content's sake

### Case Studies

Case studies are proof surfaces inside the existing content model.
They do not create a fourth behavior type.

Rules:

- case studies are observational narratives
- case studies are not sales pages or system explainers
- case studies focus on what was broken, what changed, and what improved
- case studies should include specificity signals where available: constraint, decision, implementation choice, operational change, or visible outcome
- case studies must read like observed business reality, not polished campaign copy

---

## CANONICAL SYSTEM MAP

MindWP operates on six canonical systems. These identifiers are fixed in code and must be used exactly.

| Canonical System        | Role                                      | Owns                                                                       | Does Not Own                                                    |
| ----------------------- | ----------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `smart-website-systems` | Flagship framework and structural gravity | Website architecture, enquiry capture, page flow, conversion clarity       | Search acquisition, CRM follow-up, review collection            |
| `local-seo-authority`   | Visibility layer                          | Local discovery, authority signals, service-page visibility                | Conversion handling, CRM, review operations                     |
| `ai-lead-handling`      | Response and routing layer                | Instant response, missed-call recovery, qualification, booking handoff     | Website strategy, SEO acquisition, reputation management        |
| `crm-automation`        | Pipeline and follow-up layer              | Lead ownership, follow-up workflow, pipeline visibility, lifecycle routing | Search visibility, website architecture, review collection      |
| `reputation-review`     | Trust layer                               | Review generation, negative feedback routing, reputation monitoring        | Traffic acquisition, website conversion handling, CRM pipelines |
| `revenue-growth`        | Improvement and recovery layer            | Conversion refinement, recovery workflows, lifecycle optimization          | Core website foundation, local visibility, review operations    |

Source of truth: `src/lib/content-graph/canonical.ts`.

---

## SERVICE HIERARCHY RULES

### Smart Website Gravity Rule

`smart-website-systems` is the structural flagship and conceptual center of the public service hierarchy.

All other Tier 1 systems:

- integrate into the Smart Website framing
- may sell independently when user intent is direct
- must not displace Smart Website as the dominant public service frame

### Tier Hierarchy Rule

The public service model has three layers:

- Tier 1: strategic systems
- Tier 2: specialized modules
- Tier 3: implementation pathways

Tier 3 pages support execution and acquisition.
They do not become strategic pillars.

### Local SEO Exception

`local-seo-authority` may lead when visitor intent is explicitly SEO-led.
This is a controlled acquisition exception, not a second flagship.

---

## SYSTEM CONTRACT

1. Every public page resolves to one page type and one page identity.
2. Every page belongs to one primary system and may declare supporting metadata.
3. Every page respects its behavior type and writing rules.
4. Validators and reports confirm structural alignment with the canonical model.
5. Passing validators does not automatically confirm positioning strength, persuasion, or authority quality.

Implementation detail lives in [./SYSTEM-ARCHITECTURE.md](./SYSTEM-ARCHITECTURE.md), [./GRAPH.md](./GRAPH.md), and [./CONVERSION.md](./CONVERSION.md).

---

## OWNERSHIP BOUNDARIES

### Route Ownership

- Canonical route ownership lives in `src/app`.
- One content item gets one canonical app route.
- Duplicate alias routes are not allowed.

### Content Ownership

- Content data belongs to domain-owned registries and page-data surfaces.
- Canonical metadata belongs to systems, topics, and industries registries.
- Content relationships derive from metadata, not presentation helpers.

### CTA Ownership

- Page adapters and templates own page identity, CTA intent, and CTA position.
- `PrimaryCTASection` owns CTA rendering.
- `buildContactHref()` owns contextual contact URL generation.
- Route files and data files do not own CTA intent.

### Tool Ownership

- `npm run system:full` owns the full-system run.
- `validate-all.mjs` owns validator orchestration.
- Reports describe system state; they do not define it.

---

## BRIDGE RULES

When one page references an adjacent system, it may do so only as handoff context.

Rules:

- explain the handoff, not the adjacent system in full
- keep the bridge subordinate to the owning page narrative
- return immediately to the owning system
- never change the page's primary system or funnel role

Example:

A Smart Website page may mention that lead handling continues in CRM after enquiry capture.
The same page must not turn into a CRM workflow page.

---

## TERMINOLOGY CONTROL

### Smart Website Language

Use:

- website structure
- enquiry capture
- next step
- page flow
- clarity

Avoid:

- rankings
- pipeline
- review request
- traffic guarantee

### Local SEO Language

Use:

- visibility
- local discovery
- Google Business Profile
- authority signals

Avoid:

- conversion guarantee
- CRM workflow
- review routing

### AI Lead Handling and CRM Language

Use:

- response
- routing
- assignment
- follow-up
- pipeline visibility

Avoid:

- page design
- rankings
- review generation

### Reputation Language

Use:

- review generation
- trust signals
- response handling
- feedback routing

Avoid:

- traffic acquisition
- page structure
- pipeline management

### Cross-System Language Guard

Language must not blur system boundaries or collapse positioning into generic web design.

Never introduce:

- generic agency language
- mixed system terminology in one explanation
- wording that makes all systems sound the same

Each system must remain distinct in role, responsibility, and vocabulary.

If a sentence could apply to multiple systems, or makes MindWP sound like a normal web design provider, it is off-position and must be rewritten.

---

## POSITIONING RULES

MindWP copy must:

- stay calm and consultative
- explain operational logic in plain language
- avoid page-count or package-menu selling
- avoid tool-first positioning
- avoid hype claims or guarantee language

MindWP copy must not use phrases such as:

- skyrocket leads
- guaranteed rankings
- affordable packages
- dominate competitors
- explosive growth

### Experience-Led Positioning

MindWP must be described through what the business experiences changing, not what is built.

Prioritise:

- what goes wrong today
- what improves after implementation
- how enquiries are handled differently
- how opportunities are no longer missed

Avoid leading with:

- deliverables
- features
- tools
- page types

Correct direction:

- “Enquiries come in. They are handled properly.”
- “Follow-up happens without chasing.”
- “Nothing gets missed or delayed.”

If copy starts describing what is built instead of what changes, rewrite it.

### Positioning Enforcement

The business must not be described as:

- web design service
- custom website provider
- agency building websites
- redesign service

Wrong:

- “Custom websites for service businesses”
- “We build websites that convert”
- “Professional website design with automation”

Right direction:

- “Leads come in. Nobody follows up.”
- “People reach out. It goes nowhere.”
- “Enquiries are missed, delayed, or forgotten.”

### Landing Page Positioning Lock

Landing pages, especially industry pages, must lead with:

1. what is happening
2. what is going wrong
3. what changes
4. how it is handled differently

Do not open with services, features, tools, or systems before the problem is clear.

---

## NOT ALLOWED

- Parallel service models that conflict with the six canonical systems.
- Equal-weight public positioning that breaks Smart Website gravity.
- Page-count pricing as a primary positioning device.
- Tool-first public positioning that replaces operational outcomes.
- Vocabulary that crosses system boundaries and creates role drift.
- Audit/history language inside governing docs.
- Generic landing page templates reused across industries.
- Content that can be copied between industries with minimal changes.
- Educational or blog-style introductions on landing pages.
- Language that positions MindWP primarily as a website builder.
- Copy that passes structural validation but weakens authority, specificity, or conversion clarity.
- Case studies that sound generic, invented, over-polished, or disconnected from real operational change.

---

## CROSS-REFERENCE MAP

- Content roles and metadata: [./CONTENT.md](./CONTENT.md)
- Graph ontology and resolver rules: [./GRAPH.md](./GRAPH.md)
- CTA and contact contracts: [./CONVERSION.md](./CONVERSION.md)
- Workflow and setup: [../ops/WORKFLOW.md](../ops/WORKFLOW.md)
- Validator and workflow model: [./SYSTEM-RULES.md](./SYSTEM-RULES.md), [../ops/WORKFLOW.md](../ops/WORKFLOW.md)
---

## UI SYSTEM ALIGNMENT (CRITICAL)

MindWP does not treat UI as decoration or independent design.

UI is:

→ a direct expression of system structure  
→ a reflection of content behavior  
→ a surface for conversion flow  

---

### UI MUST FOLLOW SYSTEM

UI must:

- reflect page behavior (landing, system, entry)
- reflect content structure (FLOW → HANDLING → RESULT)
- support funnel progression
- reinforce system boundaries

UI must NOT:

- introduce new meaning not present in content
- behave like generic SaaS templates
- override system positioning
- flatten differences between page types

---

### COMPONENTS ARE SYSTEM SURFACES

Components are not visual blocks.

They are:

- structured representations of content intent
- mapped to section roles
- aligned with page behavior

Rules:

- A component must exist because of content need, not visual variation
- A component must represent a real section role (problem, proof, process, etc.)
- A component must not duplicate another component with only styling changes

---

### UI QUALITY EXPECTATION

UI must:

- create clear visual hierarchy
- guide reading flow intentionally
- control attention (what user sees first → next)
- support scanning behavior
- avoid repetitive layouts across pages

UI must NOT:

- rely on repeated card grids
- create flat sections with no hierarchy
- use visual variation without structural meaning

---

### DATA → UI CONTRACT

UI must respect real data.

Rules:

- Do not invent UI just to fill space
- Do not invent props without content need
- Prefer extending real data over creating fake structure
- Content richness must come from actual data, not visual placeholders

---

### FINAL PRINCIPLE

MindWP UI is not a design layer.

It is:

→ a deterministic output of system + content + conversion logic

If UI decisions contradict system logic, system logic wins.
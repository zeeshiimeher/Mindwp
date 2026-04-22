# SYSTEM — MindWP

> Root authority for identity, service hierarchy, vocabulary, positioning, and boundary rules.
> If any other document conflicts with this file, fix the conflict immediately.

---

## USE THIS DOC

Read this first in any new session. This file defines what MindWP is, which systems exist, how they relate, and which language is allowed.

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

The commercial posture is calm, clear, and operational. MindWP sells structure before scale and infrastructure before growth.

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

### Smart Website Gravity Rule (LOCKED)

`smart-website-systems` is the structural flagship. It is the conceptual center of the public service hierarchy.

All other Tier 1 systems:

- integrate into the Smart Website framing
- may sell independently when user intent is direct
- must not displace Smart Website as the dominant public service frame

### Tier Hierarchy Rule (LOCKED)

The public service model has three layers:

- Tier 1: strategic systems
- Tier 2: specialized modules
- Tier 3: implementation pathways

Tier 3 pages support execution and acquisition. They do not become strategic pillars.

### Local SEO Exception (LOCKED)

`local-seo-authority` may lead when visitor intent is explicitly SEO-led. This is a controlled acquisition exception, not a second flagship.

---

## FULL SYSTEM FLOW (MANDATORY)

1. A visitor enters through a canonical route.
2. The route resolves to one page type and one page identity.
3. The page belongs to one primary system and may declare supporting metadata.
4. Domain registries feed that metadata into the content model.
5. The graph and resolver turn metadata overlap into structure and related-content candidates.
6. The page template renders the correct narrative for that page type and system role.
7. `CTARegistryProvider` creates page-level enforcement state.
8. `SmartCTA` renders the CTA panel with canonical system and generated source context.
9. `/contact` receives full conversion context and preserves it through submission.
10. Validators confirm that routing, content, CTA, and reports still match the canonical model.

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
- `SmartCTA` owns CTA rendering.
- `buildContactHref()` owns contextual contact URL generation.
- Route files and data files do not own CTA intent.

### Tool Ownership

- `npm run system:full` owns the full-system run.
- `validate-all.mjs` owns validator orchestration.
- Reports describe system state; they do not define it.

---

## BRIDGE RULES (LOCKED)

When one page needs to reference an adjacent system, it may do so only as handoff context.

Rules:

- A bridge sentence explains the handoff, not the adjacent system in full.
- A bridge sentence stays subordinate to the owning page narrative.
- A bridge sentence must return immediately to the owning system.
- A bridge sentence must not change the page's primary system or funnel role.

Example:

- A Smart Website page may mention that lead handling continues in CRM after enquiry capture.
- The same page must not turn into a CRM workflow page.

---

## TERMINOLOGY CONTROL

### Smart Website Language

Use terms such as:

- website structure
- enquiry capture
- next step
- page flow
- clarity

Avoid terms such as:

- rankings
- pipeline
- review request
- traffic guarantee

### Local SEO Language

Use terms such as:

- visibility
- local discovery
- Google Business Profile
- authority signals

Avoid terms such as:

- conversion guarantee
- CRM workflow
- review routing

### AI Lead Handling and CRM Language

Use terms such as:

- response
- routing
- assignment
- follow-up
- pipeline visibility

Avoid terms such as:

- page design
- rankings
- review generation

### Reputation Language

Use terms such as:

- review generation
- trust signals
- response handling
- feedback routing

Avoid terms such as:

- traffic acquisition
- page structure
- pipeline management

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

---
### POSITIONING ENFORCEMENT (CRITICAL)

The business MUST NOT be described as:

- web design service
- custom website provider
- agency building websites
- redesign service

Even partially.

#### WRONG EXAMPLES (REJECT)

❌ "Custom websites for service businesses"  
❌ "We build websites that convert"  
❌ "Professional website design with automation"

#### CORRECT DIRECTION

✅ "Leads come in. Nobody follows up."  
✅ "People reach out. It goes nowhere."  
✅ "Enquiries are missed, delayed, or forgotten."

#### RULE

If the sentence starts describing what we build instead of what goes wrong or what changes → IT IS WRONG.

## NOT ALLOWED

- Parallel service models that conflict with the six canonical systems.
- Equal-weight public positioning that breaks Smart Website gravity.
- Page-count pricing as a primary positioning device.
- Tool-first public positioning that replaces operational outcomes.
- Vocabulary that crosses system boundaries and creates role drift.
- Audit/history language inside governing docs.

---

## CROSS-REFERENCE MAP

- Content roles and metadata: [./CONTENT.md](./CONTENT.md)
- Graph ontology and resolver rules: [./GRAPH.md](./GRAPH.md)
- CTA and contact contracts: [./CONVERSION.md](./CONVERSION.md)
- Workflow and setup: [../ops/WORKFLOW.md](../ops/WORKFLOW.md)
- Audit and enforcement model: [../ops/AUDIT.md](../ops/AUDIT.md)

# FOUNDATION — MindWP

> Authority for MindWP’s business identity, buyer, positioning, service hierarchy, vocabulary, and public boundaries.
> This document defines what MindWP is, who it serves, and how it should be expressed.
> It does not define implementation architecture, validators, generated reports, or fixed page/section structure.

---

## USE THIS DOC

Read this first in any new session before editing strategy, positioning, public-facing copy, service language, page intent, CTAs, or buyer-facing content.

This document defines:

- what MindWP is and is not
- which systems exist
- how those systems relate
- which language is allowed
- which positioning boundaries must not be crossed

---

## DOC AUTHORITY ORDER

When documents conflict, follow this order for business and public-facing decisions:

1. `FOUNDATION.md` — identity, positioning, buyer, service hierarchy, vocabulary, boundaries.
2. `WRITING.md` — voice, phrasing, rewrite rules, banned language.
3. `CONTENT.md` — page roles, funnel roles, content behavior.
4. `CONVERSION.md` — CTA intent, contact posture, proof posture, conversion tone.
5. `DESIGN.md` — visual principles, page quality, section composition, UI direction.
6. Active planning/build-system docs — current implementation workflow and rebuild rules.

Graph, generated reports, validators, strict data contracts, and old control-plane docs are implementation details. They must not override this business identity or force weak page design.
If another document conflicts with this file, update that document.

---

## MINDWP BUILD SYSTEM

MindWP is a business-first, conversion-led website system.

A page is not successful because it passes structure checks. A page is successful when it reflects the buyer’s reality, creates recognition, communicates clearly, looks premium, builds trust, and moves the right visitor toward enquiry.

The build flow is:

**BUSINESS REALITY → BUYER RECOGNITION → PAGE INTENT → PATTERN → SECTION DESIGN → JSX → APPROVAL → SYSTEMIZATION**

1. **Business Reality** — start with what is actually happening in the buyer’s business.
2. **Buyer Recognition** — make the visitor feel, “this is exactly our situation.”
3. **Page Intent** — define what the page must help the visitor understand, believe, or do.
4. **Pattern** — choose the communication pattern that best explains the reality: leak, handoff, stack, split, arc, before/after, priority, fit, proof, scenario, or operating map.
5. **Section Design** — design the section shape that makes the pattern clear and visually strong.
6. **JSX** — build directly with flexible JSX/Tailwind and useful components.
7. **Approval** — judge the section/page visually, strategically, and commercially.
8. **Systemization** — after approval, extract stable pieces into shared components, data, types, and validators.

Validators protect approved decisions. They do not decide the page before it exists.

Useful components such as Hero, SectionFrame, FAQ, DecisionPanel, Container, SectionHeader, Button, SignalDot, and Badge may exist, but they are building blocks, not mandatory gates. A section may use a shared component when it helps, or custom page-owned JSX when the idea requires it.

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

---

## PUBLIC POSITIONING LAYER

### Internal model vs. public-facing explanation

**Internal model (for docs, architecture, and agent context):**
MindWP is a systems-first digital infrastructure consultancy with six connected systems.

**Public-facing explanation (for page copy, CTAs, and buyer-facing content):**
MindWP helps established service businesses stop losing work between the moments where customers find them, contact them, wait for a response, receive quotes, book jobs, leave reviews, and come back later.

**The public idea in plain language:**
- The business already has activity. Calls, enquiries, jobs, customers, reviews, and staff pressure already exist.
- The problem is not always lack of demand. The problem is weak handling between moments.
- Work slips away between search, enquiry, response, follow-up, proof, and repeat business.
- MindWP connects the weak points so work gets handled properly.

Protect these lines. They are positioning anchors, not decorative copy:
- "Work Comes In. Too Much Slips Away."
- "The business is working. The system around it is leaking."
- "These aren't separate problems. They're connected."
- "Nothing depends on someone remembering."
- "Enquiries land somewhere useful."

### Avoid making the buyer decode

Public copy must not ask buyers to parse:
- infrastructure
- layers
- stacks
- internal architecture
- taxonomy
- "systems-first" before the problem is clear

These terms are valid internally. They are not public lead phrases.

The six-system model is the internal structure and the public service offer. But public copy should first show the business path, then introduce systems as the way MindWP handles it.

### Public path (simplified buyer-facing version)

This is how the buyer should understand the journey — not a rewrite of the service hierarchy, just the simplest explanation of the path:

1. Get found locally.
2. Make the website and service offer clear.
3. Capture the enquiry.
4. Respond quickly.
5. Follow up and keep ownership visible.
6. Turn good work into proof and better decisions.

The six canonical systems remain the internal and service model. This path is the public-facing simplification that buyers can follow without decoding architecture.

---

## TARGET AUDIENCE

### Who MindWP is for

- Established service businesses with real activity.
- Businesses with calls, enquiries, jobs, customers, reviews, staff, or repeat work already in motion.
- Businesses with a basic website, weak website, no proper website, Google Business Profile, WhatsApp enquiries, forms, email, spreadsheets, disconnected tools, or half-used CRM.
- Businesses where missed handling costs money: a late reply, an unanswered call, a quote that never followed up.

### Who MindWP is not primarily for

- Brand-new businesses with no traction or established demand.
- Cheap website refresh buyers.
- Businesses only looking for a one-off campaign.
- Owners who only want a tool subscription.

### Important: do not imply buyers already have mature systems

Buyers may have no real system yet.
They may have messy, disconnected tools that were set up years ago.
They may have a website but very weak handling behind it.
They may have SEO demand coming in but no structure to capture or convert it.

Public copy must not assume the reader is one step away from a polished operation. Most are managing with workarounds, memory, and luck.

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

These canonical identifiers are fixed business and public-service identifiers. Their implementation source may change as the new system is rebuilt.

---

## SERVICE HIERARCHY RULES

### Smart Website Gravity Rule

`smart-website-systems` is the structural flagship and conceptual center of the public service hierarchy.

All other Tier 1 systems:

- integrate into the Smart Website framing
- may sell independently when user intent is direct
- must not displace Smart Website as the dominant public service frame

**Public simplification:**
The website is often where work lands first, so it is the easiest place for the buyer to understand the wider handling problem. Smart Website Systems is the visible anchor, not the owner of every system.

**Entry points by pain:**
Other systems can lead when the buyer's visible pain is direct:
- Local SEO Authority leads when the buyer's pain is visibility and local search.
- AI Lead Handling leads when the buyer's pain is missed calls or slow response.
- CRM & Automation leads when the buyer's pain is follow-up failure or ownership gaps.
- Reputation & Review leads when the buyer's pain is trust, review absence, or negative feedback.
- Revenue Growth leads when the buyer's pain is leaking revenue after enquiries arrive.

Smart Website Systems should not swallow every page. It is the structural center, not the forced entry for buyers who arrive with different pain.

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

**Important nuance:** LSA can be an entry point for businesses seeking local visibility even if they have a limited website, a weak website, or no proper website yet. Buyer intent for LSA does not require a fully built-out site — it requires a business with an existing local presence that is not being discovered or verified properly. Do not imply LSA is only for businesses that already have strong digital infrastructure.

---

## SYSTEM CONTRACT

1. Every public page resolves to one page type and one page identity.
2. Every page belongs to one primary system and may declare supporting metadata.
3. Every page respects its behavior type and writing rules.
4. Business reality, buyer recognition, page intent, and section quality come before final architecture.
5. Passing checks does not automatically confirm positioning strength, persuasion, visual quality, trust, or conversion clarity.

Implementation detail belongs in the active build-system and architecture docs. Those documents must support this business-first system, not override it.

---

## OWNERSHIP BOUNDARIES

### Route Ownership

- Canonical route ownership lives in `src/app`.
- One content item gets one canonical app route.
- Duplicate alias routes are not allowed.

### Content Ownership

- During page creation and redesign, sections may own their content directly in JSX.
- After approval, stable content may be extracted into page-owned data files or shared content surfaces.
- Content relationships, graph metadata, and related routing are production systems to rebuild after the approved page system is clear.

### CTA Ownership

- CTAs should follow recognition and proof.
- `DecisionPanel` and contact helpers are useful production tools, not architecture gates during page creation.
- CTA registry, position, and label enforcement should be rebuilt only after the approved page system is clear.

### Tool Ownership

- `npm run build` owns production build verification.
- `npm run check:minimal` owns the light static check for the current build system.
- `npm run check:frontend` owns runtime smoke verification.

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

## SYSTEM PUBLIC FRAMING

These are the plain-language public descriptions for each canonical system. Use these when writing page copy, heroes, and descriptions. The canonical identifiers and technical scope are unchanged.

| System | Public framing | Avoid |
| --- | --- | --- |
| `smart-website-systems` | Website and service pages that catch enquiries and send them to the right next step | "full AI response", "CRM lifecycle", "SEO authority" — these are other systems |
| `local-seo-authority` | Make nearby customers and Google more able to find, verify, and trust the business | "lead handling", "conversion handling", "review operations" — these are other systems |
| `ai-lead-handling` | Fast response and routing for calls, forms, DMs, and missed enquiries | Chatbot hype, AI feature-dump, robotic tone |
| `crm-automation` | Keep every enquiry owned, followed up, and visible | Vague "workflow automation" language |
| `reputation-review` | Ask for reviews at the right time and route feedback properly | Generic "reputation management" fluff |
| `revenue-growth` | Find where money leaks after enquiries and improve what is already working | Generic growth marketing positioning |

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

- Content roles and page behavior: [./CONTENT.md](./CONTENT.md)
- Writing voice and public copy rules: [./WRITING.md](./WRITING.md)
- CTA posture and conversion behavior: [./CONVERSION.md](./CONVERSION.md)
- Visual principles and section composition: [./DESIGN.md](./DESIGN.md)
- Graph, reports, strict architecture, and validators are rebuilt after the approved page system is clear.

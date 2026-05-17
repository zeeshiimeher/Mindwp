# FOUNDATION — MindWP

> Authority for MindWP’s business identity, buyer, positioning, active service hierarchy, vocabulary, and public boundaries.
> This document defines what MindWP is, who it serves, how the active systems work, and how MindWP should be expressed publicly.
> It does not define implementation architecture or fixed page structure.

---

## USE THIS DOC

Read this first in any new session before editing strategy, positioning, public-facing copy, service language, page intent, CTAs, or buyer-facing content.

This document defines:

- what MindWP is and is not
- which active public systems exist
- how those systems relate
- which language is allowed
- which positioning boundaries must not be crossed
- how new AI sessions should understand the project before writing or planning

---

## DOC AUTHORITY ORDER

When documents conflict, follow this order for business and public-facing decisions:

1. `FOUNDATION.md` — identity, positioning, buyer, active service hierarchy, vocabulary, boundaries.
2. `OFFER-ARCHITECTURE.md` — active offer model, system ownership, system boundaries, service hierarchy.
3. `WRITING.md` — voice, phrasing, rewrite rules, banned language.
4. `CONTENT.md` — page roles, funnel roles, content behavior.
5. `CONVERSION.md` — CTA intent, contact posture, proof posture, conversion tone.
6. `DESIGN.md` — visual principles, page quality, section composition, UI direction.
7. Active planning/build-system docs — current implementation workflow and rebuild rules.

Implementation details must not override this business identity or force weak page design.
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
8. **Extraction** — after approval, extract stable pieces into shared components, data, metadata, and tighter types.

Checks protect approved decisions. They do not decide the page before it exists.

Useful components such as HeroFrame, SectionShell, FAQSection, DecisionPanel, Button, SignalDot, and StatusBadge may exist, but they are building blocks, not mandatory gates. A section may use a shared component when it helps, or custom page-owned JSX when the idea requires it.

---

## CORE IDENTITY

MindWP is a systems-first business that builds conversion-focused website systems with connected handling for established service businesses.

MindWP designs and implements website systems and connected handling paths that improve:

- local discovery
- website and service-page clarity
- enquiry capture
- fast response
- follow-up ownership
- review and proof capture
- revenue recovery from work already in motion

MindWP does not position itself as:

- a design-only studio
- a random digital service catalog
- a traffic-only growth agency
- a tool reseller
- a SaaS product
- an AI chatbot vendor
- a rankings-guarantee SEO provider
- a cheap website package business
- a pretty design portfolio only

The commercial posture is calm, clear, practical, premium, and operational.
MindWP sells better handling before bigger growth claims.

---

## PUBLIC POSITIONING LAYER

### Internal model vs. public-facing explanation

**Internal model for docs, planning, architecture, and agent context:**

MindWP is a systems-first business that builds conversion-focused website systems with connected handling, using the active offer model defined in [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md).

**Public-facing explanation for page copy, CTAs, and buyer-facing content:**

MindWP helps established service businesses stop losing work between the moments where customers find them, check whether they trust them, contact them, wait for a response, receive follow-up, leave reviews, and come back later.

**The public idea in plain language:**

- The business already has activity. Calls, enquiries, jobs, customers, reviews, and staff pressure already exist.
- The problem is not always lack of demand. The problem is weak handling between moments.
- Work slips away between search, website visits, calls, forms, messages, response, follow-up, reviews, and repeat business.
- MindWP builds conversion-focused website systems with connected handling around those weak points so work gets handled properly.

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
- platform names
- backend tooling
- "systems-first" before the problem is clear

These terms may be useful internally. They are not public lead phrases.

The active system model is the service structure. Public copy should first show the business path, then introduce systems as the way MindWP handles it.

### Public path: buyer-facing version

This is how the buyer should understand the journey. It is the public explanation of how MindWP prevents work from slipping away:

1. Customers find the business.
2. They check whether they trust it.
3. The website and service pages make the offer clear.
4. They call, message, book, or fill a form.
5. The enquiry lands somewhere useful.
6. Response happens quickly.
7. Follow-up and ownership stay visible.
8. Good work becomes proof, reviews, repeat value, and better decisions.

This path should appear before system taxonomy when the reader is new to MindWP.

---

## TARGET AUDIENCE

### Who MindWP is for

- Established service businesses with real activity.
- Businesses with calls, enquiries, jobs, customers, reviews, staff, or repeat work already in motion.
- Businesses with a basic website, weak website, no proper website, Google Business Profile, WhatsApp enquiries, forms, email, spreadsheets, disconnected tools, or half-used CRM.
- Businesses where missed handling costs money: a late reply, an unanswered call, a quote that never followed up.
- Businesses that need a better public website and a better behind-the-scenes handling path.

### Who MindWP is not primarily for

- Brand-new businesses with no traction or established demand.
- Cheap website refresh buyers.
- Businesses only looking for a one-off campaign.
- Owners who only want a tool subscription.
- Buyers who only want a low-cost page build without strategy or handling improvement.

### Important: do not imply buyers already have mature systems

Buyers may have no real system yet.
They may have messy, disconnected tools that were set up years ago.
They may have a website but very weak handling behind it.
They may have SEO demand coming in but no structure to capture or convert it.

Public copy must not assume the reader is one step away from a polished operation. Most are managing with workarounds, memory, and luck.

### Marketing-adjacent outcomes

MindWP is not a generic marketing agency. Campaign management, ad spend, generic retainers, and decorative design are not the offer.

However, MindWP systems directly drive marketing-adjacent business outcomes:

- acquisition quality
- local visibility
- enquiry conversion
- follow-up reliability
- reputation trust
- revenue recovery

Do not avoid these outcomes in copy.
Support them through system, handling, and business-flow framing, not campaign-style or agency positioning.

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

## ACTIVE OFFER SUMMARY

MindWP operates through the active offer model defined in [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md).

At a high level, the model covers:

- website and service-page clarity
- local visibility and trust
- fast enquiry response and routing
- follow-up ownership and status visibility
- reviews, feedback, and proof capture

Revenue Recovery is a cross-system improvement layer for value already in motion. It is not a primary service page or equal route/category.

Implementation services are active delivery pathways under Smart Website Systems. They are not primary active systems.

Use this document for identity and buyer understanding. Use [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md) for detailed system ownership, non-ownership, implementation pathways, and service hierarchy.

---

## SERVICE HIERARCHY RULES

### Smart Website Gravity Rule

Smart Website Systems is the flagship and visible control point of the public service hierarchy.

All other active systems:

- connect to the Smart Website framing when the buyer journey requires it
- may lead independently when user intent is direct
- must not turn MindWP into a random service catalog
- must not displace Smart Website Systems as the clearest public anchor

**Public simplification:**
The website is often where work lands first, so it is the easiest place for the buyer to understand the wider handling problem. Smart Website Systems is the visible anchor, not the owner of every system.

**Entry points by pain:**

Other systems can lead when the buyer's visible pain is direct:

- Local SEO Authority leads when the buyer's pain is visibility, local search, or local trust.
- Lead Response & Handling leads when the buyer's pain is missed calls, slow response, scattered enquiries, or booking handoff.
- Follow-Up & CRM leads when the buyer's pain is follow-up failure, ownership gaps, status confusion, or memory-dependent work.
- Reputation & Review leads when the buyer's pain is trust, review absence, inconsistent proof, or negative feedback handling.

Smart Website Systems should not swallow every page. It is the structural center, not the forced entry for buyers who arrive with different pain.

### Service Layer Rule

The public service model has three layers:

- Active public systems: the active systems MindWP explains and sells.
- Supporting modules: narrower capabilities that sit inside a system.
- Implementation pathways: delivery-specific routes, features, or use cases.

Supporting modules and implementation pathways do not become strategic pillars.
They must resolve upward into one active public system.

### Implementation Pathway Rule

Implementation services are active delivery pathways under Smart Website Systems.
They may have public pages later, but they are not equal primary systems and must not be framed as a separate strategic offer model.

These pages should explain practical implementation choices through website clarity, trust, enquiry capture, and handoff improvement.
They should not make MindWP sound like a generic WordPress, Elementor, Bricks, Divi, WooCommerce, or redesign agency.
Folder direction and detailed implementation ownership live in [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md) and [./SYSTEM-ARCHITECTURE.md](./SYSTEM-ARCHITECTURE.md).

### Local SEO Exception

Local SEO Authority may lead when visitor intent is explicitly SEO-led.
This is a controlled acquisition exception, not a second flagship and not a rankings-promise page.

Important nuance:
Local SEO Authority can be an entry point for businesses seeking local visibility even if they have a limited website, a weak website, or no proper website yet. Buyer intent for Local SEO Authority does not require a fully built-out site — it requires a business with an existing local presence that is not being discovered or verified properly. Do not imply Local SEO Authority is only for businesses that already have a strong digital setup.

---

## SYSTEM CONTRACT

1. Every public page resolves to one page type and one page identity.
2. Every page belongs to one primary active system and may declare supporting metadata.
3. Every page respects its behavior type and writing rules.
4. Business reality, buyer recognition, page intent, and section quality come before final architecture.
5. Passing checks does not automatically confirm positioning strength, persuasion, visual quality, trust, or conversion clarity.
6. No page may revive removed service models, outdated system names, or backend platform/tool names.

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

- `pnpm build` owns production build verification.
- `pnpm check:minimal` owns the light static check for the current build system.
- `pnpm check:frontend` owns runtime smoke verification.

---

## BRIDGE RULES

When one page references an adjacent system, it may do so only as handoff context.

Rules:

- explain the handoff, not the adjacent system in full
- keep the bridge subordinate to the owning page narrative
- return immediately to the owning system
- never change the page's primary system or funnel role

Example:

A Smart Website page may mention that lead handling continues after enquiry capture.
The same page must not turn into a Follow-Up & CRM page.

---

## LANGUAGE AUTHORITY

This document owns positioning boundaries and public truth.

Use:

- [./WRITING.md](./WRITING.md) for vocabulary, phrasing, rewrite rules, banned words, and system-language translation.
- [./CONVERSION.md](./CONVERSION.md) for CTA labels, diagnostic next steps, and contact posture.
- [./CONTENT.md](./CONTENT.md) for page roles and funnel behavior.
- [./DESIGN.md](./DESIGN.md) for visual translation and section composition.

---

## POSITIONING RULES

MindWP copy must:

- stay calm and consultative
- explain operational logic in plain language
- avoid page-count or package-menu selling
- avoid tool-first positioning
- avoid hype claims or guarantee language
- start with business reality before system language
- explain systems through outcomes

MindWP copy must not use phrases such as:

- skyrocket leads
- guaranteed rankings
- affordable packages
- dominate competitors
- explosive growth
- AI-powered everything
- all-in-one platform
- done-for-you marketing machine

### Experience-Led Positioning

MindWP must be described through what the business experiences changing, not what is built.

Prioritise:

- what goes wrong today
- what improves after implementation
- how enquiries are handled differently
- how opportunities are no longer missed
- how follow-up becomes visible
- how good work becomes proof

Avoid leading with:

- deliverables
- features
- tools
- page types
- backend systems
- software names

Correct direction:

- “Enquiries come in. They are handled properly.”
- “Follow-up happens without chasing.”
- “Nothing gets missed or delayed.”
- “The website makes the offer clear, then sends the enquiry to the right next step.”

If copy starts describing what is built instead of what changes, rewrite it.

### Positioning Enforcement

The business must not be described as:

- web design service
- custom website provider
- agency building websites
- redesign service
- CRM reseller
- AI chatbot provider
- SEO ranking provider

Wrong:

- “Custom websites for service businesses”
- “We build websites that convert”
- “Professional website design with automation”
- “AI chatbot systems for local businesses”
- “CRM automation packages”
- “Rank higher with guaranteed local SEO”

Right direction:

- “Leads come in. Nobody follows up.”
- “People reach out. It goes nowhere.”
- “Enquiries are missed, delayed, or forgotten.”
- “Good work happens, but the proof never gets collected.”
- “The business is getting activity, but the handling around it is weak.”

### Landing Page Positioning Lock

Landing pages, especially industry pages, must lead with:

1. what is happening
2. what is going wrong
3. what changes
4. how it is handled differently

Do not open with services, features, tools, or systems before the problem is clear.

---

## NOT ALLOWED

- Parallel service models that conflict with the active offer model.
- Equal-weight public positioning that breaks Smart Website gravity or turns MindWP into a service catalog.
- Page-count pricing as a primary positioning device.
- Tool-first public positioning that replaces operational outcomes.
- Public mentions of backend CRM, automation, or white-label platform names.
- Public positioning that sells tools instead of outcomes.
- Removed service names or outdated system models inside active docs.
- AI chatbot/vendor positioning.
- SEO ranking-guarantee positioning.
- Vocabulary that crosses system boundaries and creates role drift.
- Audit/history language inside governing docs.
- Generic landing page templates reused across industries.
- Content that can be copied between industries with minimal changes.
- Educational or blog-style introductions on landing pages.
- Language that positions MindWP primarily as a website builder.
- Copy that satisfies structure but weakens authority, specificity, or conversion clarity.
- Case studies that sound generic, invented, over-polished, or disconnected from real operational change.

---

## AI SESSION RULES

New AI sessions must treat this document as active authority.

If unsure, do not invent a new direction.
Choose the option most aligned with:

- established service-business buyers
- practical operational language
- the active offer model in [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md)
- the public buyer path
- Smart Website Systems as flagship
- public tool-name boundaries
- calm premium positioning
- recognition before explanation

AI must not ask approval questions that can be resolved from this document.
Ask only when the docs genuinely do not define the decision.

---

## CROSS-REFERENCE MAP

- Content roles and page behavior: [./CONTENT.md](./CONTENT.md)
- Writing voice and public copy rules: [./WRITING.md](./WRITING.md)
- Offer architecture and active system ownership: [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md)
- CTA posture and conversion behavior: [./CONVERSION.md](./CONVERSION.md)
- Visual principles and section composition: [./DESIGN.md](./DESIGN.md)
- Related-content behavior: [./GRAPH.md](./GRAPH.md)
- Repo mapping and source ownership: [./SYSTEM-ARCHITECTURE.md](./SYSTEM-ARCHITECTURE.md)

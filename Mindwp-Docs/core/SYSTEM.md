# SYSTEM — MindWP

> **This is the single source of truth for all system-level architecture, boundaries, positioning rules, brand identity, and behavioral contracts.**
> All other documents must reference this file. No other document may redefine the rules in this file.
> If any document conflicts with SYSTEM.md → SYSTEM.md wins.

**Status:** Governing Document — LOCKED
**Authority Level:** Root (overrides all other docs)
**Version:** 2.0 — Consolidated
**Created:** 2026-04-10
**Updated:** 2026-04-10

---

## WHEN TO USE THIS DOC

Read this document **first** in any session. It answers:

- What are MindWP's services? → §2
- What is the system flow? → §3
- What can each page talk about? → §4
- What vocabulary does each service use? → §5
- How do pages reference other services? → §6
- How should tools be mentioned? → §7
- Which doc owns which rule? → §8
- How do I detect drift? → §9
- What is permanently locked? → §10–11
- How do I extend the system safely? → §12
- What is the brand identity and positioning? → §13
- What is the execution mode and working order? → §14
- What is the system architecture? → §15
- What are the behavioral contracts? → §16

After reading this, go to the execution doc for your task (see Document Hierarchy at the end).

---

<!-- WHERE THIS FITS -->
<!-- Purpose: Root authority — service map, boundaries, terminology, system flow, drift prevention, brand identity, positioning, behavioral contracts, architecture layers, execution mode -->
<!-- Depends on: Nothing — this is the root -->
<!-- Used by: Every other doc, every content page, every validator, every AI session -->
<!-- Consolidated from: SYSTEM.md, SYSTEM.md, SYSTEM.md, SYSTEM.md, SYSTEM.md -->

---

## ANTI-DRIFT DECLARATION

No document in this system may:
- Redefine service roles
- Redefine terminology per service
- Redefine the system flow
- Redefine page boundaries
- Redefine tool positioning rules
- Redefine connection/bridge rules
- Create new service tiers or categories

If any document contradicts this file, this file is correct.

# 1. SYSTEM OVERVIEW

## 1.1 Identity

MindWP is a systems-first digital infrastructure consultancy for established service businesses.

We do not sell pages. We do not sell tools. We do not sell traffic. We do not sell hype.

We design and implement connected digital systems that improve:
- Enquiry handling
- Follow-up reliability
- Operational clarity
- Conversion efficiency
- Internal visibility

We prepare businesses for scale. We do not sell scale.

## 1.2 Category

**Layer 1 — Company Category:**
Systems-first digital infrastructure consultancy for service businesses.

**Layer 2 — Flagship Framework:**
Smart Website Systems.

Rule:
The category explains what MindWP is.
The flagship framework explains how MindWP is most clearly understood and sold.

We do NOT:
- Run paid ads as core service
- Guarantee rankings
- Promise lead volume
- Compete as design-only studio
- Position as SaaS
- Offer random digital services

---

# 2. SERVICE MAP

## 2.1 The Four Core Services

MindWP has four core services. Each one does one job. Every page, blog post, and case study must know which service it belongs to and stay inside that boundary.

### Smart Website

**What it does:** Builds a website that guides visitors toward getting in touch and captures their details properly.

**Role in the system:** Foundation layer. Everything else depends on this working first.

**The problem it solves:** People visit the website, look around, and leave. Nobody gets in touch. Nobody knows they were there.

**What it does NOT do:**
- Does not handle what happens after someone gets in touch (that's CRM)
- Does not get people to the website (that's SEO)
- Does not collect reviews (that's Reputation)

### CRM & Follow-Up

**What it does:** Tracks every enquiry, assigns it to someone, and makes sure follow-up actually happens.

**Role in the system:** Handles enquiries after they come in. Picks up where the website leaves off.

**The problem it solves:** Leads come in from calls, emails, and forms — some get missed, nobody knows who's handling what, and follow-up only happens when someone remembers.

**What it does NOT do:**
- Does not bring visitors to the website (that's SEO)
- Does not design or build the website (that's Smart Website)
- Does not collect reviews (that's Reputation)

### Local SEO

**What it does:** Makes the business visible on Google when people nearby search for the services they offer.

**Role in the system:** Brings people to the website. Feeds the top of the funnel.

**The problem it solves:** People are searching for exactly what this business does, but they're finding competitors instead.

**What it does NOT do:**
- Does not guarantee leads or conversions (that's the website's job)
- Does not handle enquiries (that's CRM)
- Does not collect reviews (that's Reputation)

### Reputation (Reviews)

**What it does:** Gets more genuine reviews from happy customers and catches unhappy ones before they post publicly.

**Role in the system:** Builds trust after the service is delivered. Supports SEO indirectly.

**The problem it solves:** The business does great work, but their Google reviews don't reflect it. Competitors with worse work have more reviews.

**What it does NOT do:**
- Does not drive traffic to the website (that's SEO)
- Does not capture or track leads (that's CRM)
- Does not change how the website looks or works (that's Smart Website)

## 2.2 Service Tiers (Gravity Model)

Service hierarchy (non-negotiable):

| Layer | Role | Examples |
|---|---|---|
| **Tier 1 — Core Revenue Systems** | Strategic entry points | Smart Website (flagship), Local Authority & SEO, AI Lead Handling, Reputation & Review, Revenue Growth, CRM & Automation |
| **Tier 2 — Specialized Modules** | Modular systems solving specific operational pains | Booking & Scheduling, Missed Call Recovery, Review Automation, Lead Reactivation, Conversion Funnel, Unified Communication |
| **Tier 3 — Implementation** | Execution-layer entry pathways | WordPress Development, Website Redesign, CRM Implementation, Marketing Automation Setup, Funnel & Landing Page Dev, System Migration |

**Gravity rule:** Smart Website Systems is the conceptual framework. All other Tier 1 systems integrate into it. They must never override its dominance in hierarchy, navigation, or homepage composition.

**SEO exception:** Local Authority & SEO Systems is the only Tier 1 system with controlled direct-intent acquisition — may lead when visitor intent is explicitly SEO-led, but must always reinforce website infrastructure context.

No horizontal equal-weight presentation of systems is permitted. Smart Website must retain structural dominance across navigation, homepage, and services architecture.

---

# 3. SYSTEM FLOW

```
SEO → Website → CRM → Reputation
```

1. **SEO** brings people to the website
2. **Website** guides them to get in touch
3. **CRM** tracks the enquiry and handles follow-up
4. **Reputation** asks happy customers for a review after the job is done

Smart Website Infrastructure is the primary framework. It connects:

```
Traffic → Website → Enquiry Capture → Qualification → Follow-Up → Tracking → Ongoing Refinement
```

Smart Website is the gravitational center. All other implementations relate to it.

---

# 4. PAGE BOUNDARIES (STRICT)

Every page must stay in its lane. If a sentence belongs to another service, remove it.

## Smart Website page boundaries

**Talks about:**
- How visitors behave on the site
- Enquiry capture (forms, calls, chat)
- What happens when someone lands on the site
- Page structure, clarity, navigation

**Must NOT talk about:**
- How SEO rankings work or how people find the site
- CRM logic, follow-up sequences, or lead tracking
- Review collection or reputation

## CRM page boundaries

**Talks about:**
- What happens after an enquiry comes in
- Lead tracking, assignment, follow-up
- Visibility into where every lead stands
- Automated reminders and sequences

**Must NOT talk about:**
- Website design, layout, or page structure
- SEO rankings or Google visibility
- Review collection or reputation management

## Local SEO page boundaries

**Talks about:**
- Being found on Google
- Search visibility for local services
- Google Business Profile, directories, service pages
- How Google reads and understands the business

**Must NOT talk about:**
- Conversion rates or enquiry capture (that's the website)
- Lead tracking or follow-up (that's CRM)
- Review collection processes (that's Reputation)

## Reputation page boundaries

**Talks about:**
- Getting reviews from happy customers
- Catching unhappy customers before they post publicly
- Timing of review requests
- Building trust through social proof

**Must NOT talk about:**
- Website traffic or visitor behaviour
- SEO rankings or Google visibility mechanics
- Lead tracking or CRM logic

## The boundary test

Read every sentence on the page. For each one, ask:

> "Does this describe what THIS service does — or does it describe what another service does?"

If it describes another service → delete the sentence or move it to the correct page.

If a sentence mentions the outcome of another service as context (e.g., "once someone finds your site through Google..."), keep it to one line maximum. Never explain how the other service works.

---

# 5. TERMINOLOGY CONTROL (PER SERVICE)

Each service has its own vocabulary. Using the wrong words on the wrong page causes drift and confuses positioning.

## Smart Website — approved language

| Use | Instead of |
|---|---|
| "people land on your site" | "traffic arrives" |
| "they get in touch" | "leads convert" |
| "they take action" | "conversion occurs" |
| "forms send details to the right person" | "lead capture integration" |
| "your site guides them" | "optimized user journey" |
| "clear next step" | "call-to-action optimization" |

**Banned on this page:** ranking, visibility, follow-up sequence, review request, lead pipeline

## CRM & Follow-Up — approved language

| Use | Instead of |
|---|---|
| "your CRM" | "our CRM" or "the platform" |
| "your enquiries" | "inbound leads" |
| "nothing gets missed" | "comprehensive lead management" |
| "follow-up happens on its own" | "automated sequences" |
| "you can see where every lead stands" | "pipeline visibility" |
| "the right person is notified" | "intelligent routing" |

**Banned on this page:** website design, page layout, Google ranking, review collection, search visibility

## Local SEO — approved language

| Use | Instead of |
|---|---|
| "Google can read your site" | "technical SEO optimization" |
| "people can find you" | "increased organic visibility" |
| "you show up when people search nearby" | "local SERP dominance" |
| "your services are listed clearly" | "keyword-optimized service taxonomy" |
| "Google knows what you do and where" | "local signal optimization" |

**Banned on this page:** conversion rate, enquiry capture, CRM, follow-up, lead tracking, review requests

## Reputation (Reviews) — approved language

| Use | Instead of |
|---|---|
| "customers leave reviews" | "review generation" |
| "happy customers are asked" | "automated review solicitation" |
| "asked at the right time" | "optimized review timing" |
| "unhappy customers tell you first" | "negative feedback interception" |
| "your reviews reflect your work" | "reputation optimization" |

**Banned on this page:** website traffic, Google ranking, lead tracking, CRM setup, SEO strategy

## Cross-page vocabulary rule

If you catch yourself using a word from another service's vocabulary → stop. Either:
1. Delete the sentence
2. Rewrite it using this page's approved language
3. Replace it with a single-line bridge (see §6)

---

# 6. CONNECTION RULES (BRIDGE SYSTEM)

The four services work together. But "everything is connected" is a banned phrase — it says nothing. Instead, describe what happens in sequence.

## How to reference other services

When a page needs to mention another service, use a **single-line bridge**. State what happens, not how it works.

**On the Website page, referencing SEO:**
✅ "Once people find your site — through Google, a referral, or a directory — the site takes over."
❌ "Our SEO service drives targeted organic traffic to your optimized landing pages."

**On the CRM page, referencing the Website:**
✅ "When someone fills in a form on your site, their details land in your CRM."
❌ "Our website system integrates seamlessly with the CRM to enable lead capture."

**On the Reputation page, referencing CRM:**
✅ "After a job is marked complete, the customer gets a review request."
❌ "Our CRM triggers an automated review solicitation workflow."

**On the SEO page, referencing the Website:**
✅ "Google reads your site to understand what you do and where you do it."
❌ "Our website infrastructure is built with SEO-optimized architecture."

## Bridge rules

1. Maximum one bridge sentence per section. If you need more, the content belongs on the other page.
2. Bridges describe the outcome of the other service, never the method.
3. Bridges never use the other service's banned vocabulary.
4. If you're writing more than one sentence about another service, stop. You've crossed the boundary.

---

# 7. TOOL POSITIONING

MindWP is not a software company. We set things up for people. The tools we use are implementation details — never selling points.

## The rule

Never lead with a tool name. Never position a tool as the product.

## How to handle tool mentions

**Step 1 — Write the sentence without the tool name.**

> "Your CRM tracks every enquiry and sends follow-up emails on its own."

**Step 2 — Ask: does the reader need to know the tool name to understand this?**

- If no → leave it out. The sentence is complete.
- If yes → add the tool name in parentheses or as a secondary detail.

> "Your CRM tracks every enquiry and sends follow-up emails on its own. (We set this up in GoHighLevel, but you don't need to know that to use it.)"

## Examples

❌ "We use GoHighLevel to automate your follow-ups."
✅ "Follow-up emails go out on their own — you don't have to send them."

❌ "We build your site on WordPress with Elementor."
✅ "Your site is built so you can update it yourself — no developer needed."

❌ "We set up Google Business Profile optimization."
✅ "Google knows what you do, where you are, and when you're open."

## When tool names are acceptable

- In a "what's included" list as a secondary detail: "CRM setup (GoHighLevel)"
- In a FAQ answer when the reader specifically asks about tools
- In technical documentation meant for internal use

Never in a hero, headline, card title, or CTA.

---

# 8. CONTENT OWNERSHIP RULES

Each doc in the system has a defined scope. No doc may absorb responsibilities from another.

| Concern | Governing Document | No Other Doc May Define This |
|---|---|---|
| System identity, positioning, service tiers, gravity model | **SYSTEM.md** (this file) | ✅ |
| Service map, boundaries, terminology, flow, connections | **SYSTEM.md** (this file) | ✅ |
| Tool positioning, drift prevention | **SYSTEM.md** (this file) | ✅ |
| Brand voice, tone, writing principles, rewrite method | **WRITING.md** | ✅ |
| Banned vocabulary (general), quality checks, AI detection | **WRITING.md** | ✅ |
| Page structure templates, page intent framework | **WRITING.md** | ✅ |
| CTA system, contact system, URL contract, validation | **CONVERSION.md** | ✅ |
| CTA tone, banned CTA language | **SYSTEM.md** | ✅ |
| Content type definitions, tier page matrices, exposure rules | **CONTENT.md** | ✅ |
| Graph ontology, metadata, relationship resolution | **GRAPH.md** | ✅ |
| Content archetypes, template section mappings | **CONTENT.md** | ✅ |
| Edit governance, domain behavior rules, edit intensity | **CONTENT.md** | ✅ |
| Technical architecture, CSS, components, validators | **SYSTEM.md** + **DESIGN.md** | ✅ |
| Current system state snapshot | **SYSTEM-STATE.md** | ✅ |
| Execution decisions, priorities | **SYSTEM-STATE.md** | ✅ |
| Behavioral authority index | **SYSTEM.md** | ✅ |
| Execution rules, permissions | **SYSTEM-STATE.md** | ✅ |

**Rule:** If a doc needs to reference a rule owned by another doc, it must use a one-line reference with a pointer, not restate the rule.

**Example (correct):**
> CTA behavior is governed by CONVERSION.md. See that document for all CTA routing and label rules.

**Example (incorrect):**
> CTA labels resolve through CTA_LABEL_MAP. Default fallback is "Start a Conversation". All CTAs route to /contact...
> *(This restates rules owned by CONVERSION.md — violation.)*

---

# 9. DRIFT PREVENTION RULES

## 9.1 What constitutes drift

Drift occurs when:
- A doc restates rules owned by another doc (even if matching)
- A page uses vocabulary from the wrong service
- A page explains how another service works (not just what it achieves)
- A tool name appears in a headline, hero, or CTA
- A supporting system appears equal to Smart Website in hierarchy
- Content creates its own terminology not in canonical.ts

## 9.2 How to detect drift

Run this check on every page before publishing:

**Question 1 — Does this page stay in its role?**
Read the Service Map (§2). Identify which service this page belongs to. Read every section and confirm it only talks about that service's job.

**Question 2 — Does it use the right vocabulary?**
Check every sentence against that service's approved language and banned words (§5).

**Question 3 — Does it accidentally explain another service?**
A page can mention that another service exists. It must not explain how it works.

**Question 4 — Are tool names hidden?**
Check for any tool name appearing in a headline, card title, hero, or CTA (§7).

**Question 5 — Would this confuse positioning?**
Read the page as if you're a potential customer. After reading, can you clearly answer: "What does this one service do?" If the answer is muddled → drift. Fix it.

## 9.3 The one-line test

After every page, write one sentence that summarises what the page is about. If that sentence mentions more than one service → the page needs tightening.

## 9.4 Conflict resolution

| Scenario | Resolution |
|---|---|
| Doc X conflicts with SYSTEM | SYSTEM wins. Fix Doc X. |
| Doc X restates rules from SYSTEM | Remove restatement. Add reference pointer. |
| Code conflicts with docs | Docs win. Fix the code. |
| Two non-core docs conflict | Check SYSTEM ownership table (§8). The designated owner wins. |

---

# 10. SYSTEM LOCK RULES

These rules are permanent. They cannot be overridden by any document, chat session, or AI instruction.

1. **Service count is locked.** There are four core services: Smart Website, CRM & Follow-Up, Local SEO, Reputation. No fifth service may be created.
2. **Tier structure is locked.** Three tiers (Core Revenue, Specialized Modules, Implementation). No fourth tier.
3. **System flow is locked.** SEO → Website → CRM → Reputation. No reordering. No skipping.
4. **Smart Website gravity is permanent.** It is always the flagship. No other system may claim equal weight.
5. **Terminology tables are locked.** Per-service approved/banned vocabulary in §5 cannot be changed without updating this file first.
6. **Page boundaries are locked.** The "talks about" / "must NOT talk about" rules in §4 are non-negotiable.
7. **Bridge rules are locked.** Maximum one bridge sentence per section. No exceptions.
8. **Tool names never lead.** No tool name in any hero, headline, card title, or CTA. No exceptions.
9. **Docs override code.** If docs and code conflict, change the code.
10. **SYSTEM overrides all.** No other doc may contradict this file.

---

# 11. WHAT NOT TO CHANGE

Before making any modification to the documentation system, check this list. If your change touches any of these, **stop and get explicit approval**.

| Protected Element | Why |
|---|---|
| Service definitions (§2.1) | Changing a service definition cascades across every page, every CTA, every validator |
| System flow (§3) | Flow determines page boundaries, terminology, and bridge rules |
| Page boundaries (§4) | Loosening boundaries creates drift within one editing session |
| Terminology tables (§5) | Swapping even one word affects validators and content audits |
| Content ownership table (§8) | Moving ownership without updating cross-links breaks the system |
| Authority stack (Document Hierarchy) | Reordering authority causes conflict resolution failures |
| Gravity model (§2.2) | Smart Website dominance is a positioning decision, not a preference |

---

# 12. HOW TO EXTEND THE SYSTEM SAFELY

If the system needs to grow (new content type, new module, new industry), follow this protocol:

### Adding a new Tier 2 module
1. Confirm it maps upward to an existing Tier 1 system
2. Add it to SYSTEM.md §2.2 tier table
3. Add page composition rules to CONTENT.md
4. Do NOT create a new service boundary — it inherits its parent Tier 1 boundary

### Adding a new industry
1. Add the canonical identifier to `canonical.ts`
2. Add an entry in GRAPH.md canonical industries list
3. Create the industry detail page following CONTENT.md archetypes
4. Do NOT create industry-specific terminology — use the parent service's vocabulary

### Adding a new content type
1. This requires explicit approval — content types are locked in `ContentNodeType`
2. If approved, update: GRAPH.md, CONTENT.md, CONTENT.md
3. Add slot rules to the graph link table in SYSTEM-STATE.md §2.4
4. Update validators

### Adding a new document
1. Define its purpose — one sentence, one job
2. Check the ownership table (§8) — does an existing doc already own this concern?
3. If yes → extend the existing doc, do not create a new one
4. If no → create the doc with REQUIRED READING ORDER and AUTHORITY NOTICE headers
5. Add the doc to the ownership table (§8)
6. Add the doc to SYSTEM.md reading order

### Rule: No change is valid until
- SYSTEM.md is updated (if scope touches locked rules)
- Cross-links are verified (no broken references)
- `npm run validate:all` passes
- `npm run system:report` shows CLEAN

---


---

# 13. FOUNDATION & POSITIONING

> Consolidated from: SYSTEM.md

## 1. Core Identity

> Full identity definition → see SYSTEM.md §1.1

Tone principles:
- Calm
- Clear
- Confident
- Professional
- Measured

## UNIVERSAL COPY LANGUAGE LAW (LOCKED ADDENDUM)

This rule governs public-facing website copy across the full site, including:
- homepage copy
- service pages
- industry pages
- feature pages
- resource pages
- blog pages
- case studies
- CTAs, section headings, and supporting page text

It is not limited to documentation writing.

MindWP website copy must read like plain English written by a clear human operator.

Writing rules:
- Use simple, direct words before advanced or abstract wording.
- Prefer short to medium sentences.
- Keep paragraphs easy to scan.
- Sound calm and structured, not polished to the point of sounding artificial.
- Explain operational ideas in normal business language.

MindWP copy must NOT sound:
- robotic
- overly academic
- over-optimized for SEO
- corporate for the sake of sounding important
- like generic AI marketing copy

Preferred style:
- plain English
- practical explanation
- human tone
- confident without hype
- specific without sounding technical for no reason

Practical test:
If a capable business owner can understand the sentence quickly on first read, it is probably acceptable.
If the sentence sounds overly polished, vague, or machine-generated, rewrite it.

Page-writing test:
- Would a real business owner understand this without rereading it?
- Does it sound like a calm human explaining something useful?
- Does it avoid sounding like AI-generated sales copy?
- Does it explain the idea clearly without trying to sound clever?


### COPYWRITING VOCABULARY RULE (CLARITY FIRST)

Internal concepts such as "structure", "infrastructure", and "architecture" describe how MindWP thinks about systems internally.

However, these words must not be overused in public-facing copy.

Reason:
Most business owners do not naturally think in technical or conceptual terminology. Overusing abstract words can make copy feel vague, repetitive, or overly technical.

Copy must translate internal ideas into outcomes people understand.

Guidelines:

Avoid repeating abstract words such as:
- structure
- infrastructure
- architecture
- structural visibility
- operational structure
- infrastructure layer

Use clearer business language instead.

Prefer wording that describes the outcome:

Examples:

Internal wording → Preferred public wording

structure → organised clearly  
visibility structure → pages search engines can understand  
service structure → how your services are organised  
enquiry routing structure → how enquiries reach the right person  
infrastructure foundation → a clear website foundation

Allowed usage:

The word "structure" may still be used where it refers to something concrete and easily understood, such as:
- website structure
- service structure
- page structure

Rule:
If a sentence still makes perfect sense after removing the word "structure", rewrite it without that word.

Clarity always takes priority over conceptual terminology.

If anything conflicts with this document — this document wins.

## CONTENT WRITING PLAYBOOK (REFERENCE)

> **The Content Writing Playbook has been extracted to its own standalone document.**
> See: **WRITING.md** for the full writing system including:
> - Voice & tone rules
> - Banned vocabulary & approved patterns
> - Sentence construction rules
> - CTA language standards
> - Section heading standards
> - Industry page content rules
> - Homepage section content rules
> - Encoding & technical rules
> - Content quality self-check
> - Clarity-first rule
>
> This document (SYSTEM.md) retains authority over **brand identity, positioning, and CTA tone**.
> Writing execution rules are governed by WRITING.md.
> Service map, boundaries, and terminology are governed by SYSTEM.md.

---

## 2. Strategic Positioning

We operate in a self-defined category:

Digital Infrastructure & System Implementation
for Service Businesses.

We sit before growth agencies.

Growth agencies increase traffic.
We ensure businesses can handle traffic properly.

Infrastructure before growth.

## CATEGORY COMMUNICATION LAW (LOCKED ADDENDUM)\n\n> Category and flagship framework definitions → see SYSTEM.md §1.2\n\nApplication law (tone and messaging guidance, retained here):
- Homepage and positioning copy may define the company with infrastructure language.
- Smart Website Systems remains the named flagship framework and primary strategic gravity.
- Supporting systems must not replace the company category or compete with Smart Website gravity.
- If copy must choose between sounding more strategic or more concrete, use both layers in controlled order rather than collapsing into one.

We do NOT:
- Run paid ads as core service
- Guarantee rankings
- Promise lead volume
- Compete as design-only studio
- Position as SaaS
- Offer random digital services


> Service hierarchy, tiers, and gravity model → see SYSTEM.md §2.2

Content ecosystem flow, case study placement rules, and content relationship & exposure rules are defined in **CONTENT.md**.

## SEO CONTROLLED EXCEPTION LAW (LOCKED)

> Full SEO exception rule → see SYSTEM.md §2.2 (SEO exception)

Messaging rule (tone guidance, retained here as CTA tone authority):

SEO amplifies clarity.
SEO cannot fix confusion.

If any SEO page begins positioning SEO as a standalone growth solution detached from website infrastructure, positioning drift has occurred and must be corrected immediately.

## 3. Smart Website Infrastructure Definition

> Full service definitions, roles, and boundaries → see SYSTEM.md §2
> System flow → see SYSTEM.md §3

Smart Website Infrastructure is the primary framework.

It is NOT:
- A design package
- A page-count offer
- A campaign
- A SaaS tool

Smart Website must:
- Appear first in navigation
- Anchor homepage
- Feel premium
- Feel foundational
- Feel strategic

Approved standalone systems must improve:
- Enquiry handling
- Follow-up reliability
- Operational clarity

If it does not improve these → reject it.

## PHILOSOPHICAL ANCHOR

Leads are important,
but without structured infrastructure
and proper follow-up systems,
they leak.

Growth without structure creates chaos.
Structure before scale creates leverage.

Websites are not marketing assets.
They are business infrastructure.

## 4. Target Market Definition

We serve:
- Established service businesses
- Average sale ≥ $300
- Lifetime value ≥ $1,000
- Businesses already investing in visibility
- Owners who value operational clarity

We avoid:
- Budget-first buyers
- Page-count shoppers
- Guarantee seekers
- Hobby businesses
- Procurement-heavy enterprises

We prefer fewer, better clients.

Front-door industry focus (positioning accelerators, not operational limits):
- Phase 1 primary front door: Home services
  - Roofing
  - HVAC
  - Plumbing
  - Electrical
  - Landscaping
- Phase 1 secondary expansion lane: Beauty & Personal Care
  - Aesthetic clinics
  - Hair / salon
  - Lash / brow

Important boundary:
- Home services receives primary promotional weight, homepage examples, and strongest proof-building effort.
- Beauty & Personal Care remains an active secondary lane, not equal front-door emphasis.
- Other qualified service businesses may still be served where fit is strong, but they must not dilute Phase 1 public focus.

Important rule:
We lead marketing messaging toward these industries when needed.
But we do NOT limit the company to only these industries.

Industry focus must never replace Smart Website gravity.
Industry pages sit under Smart Website context.

Industry pages contextualize Smart Website systems for specific service-business verticals. They are not standalone service offerings and must always reinforce Smart Website as the underlying framework.

## 5. Filtering Law

Filtering is strategic.
Qualification protects positioning.

Strong fit signals:
- They discuss operational pain
- They ask about follow-up timing
- They care about tracking
- They want structure
- They invest in visibility already

Weak fit signals:
- “How much for 5 pages?”
- “Can you beat this freelancer price?”
- “We just want something basic.”
- “Can you guarantee leads?”

Weak fits are filtered calmly.

Red flag exit rule:
If a prospect:
- Only negotiates price
- Demands guarantees
- Wants traffic promises
- Ignores operational discussion
- Compares purely to freelancers

Exit calmly.

Example:
“It sounds like you may be looking for a different type of service. We focus on infrastructure implementation.”

Decision filter (non-negotiable):
- Diagnose before prescribing.
- Structure before selling.
- Silence before discounting.
- Authority before persuasion.
- Long-term positioning over short-term revenue.

Final decision test:
“How does this improve operational clarity?”

If the answer is unclear,
the page or proposal must be rewritten.

## 6. Pricing Philosophy

Public pricing rule:
MindWP does not use broad homepage pricing as a primary conversion device.

Target average range:
$1,500 – $2,500 depending on scope.

Standalone system implementations are priced based on:
- Business complexity
- Workflow depth
- Integration scope
- Operational impact

We do NOT price by:
- Page count
- Plugin count
- Design hours

No defensive discounting.
No geography-based pricing weakness.
No insecurity-based negotiation.

Pricing reflects implementation depth.

Pricing conversation rule:
Never defend price.
Reframe scope, not price.

Pricing visibility law (locked):
- Homepage should not lead with a starting price.
- Public pricing guidance, where used, should appear only in relevant service pages, supporting FAQ areas, or scoped conversation contexts.
- Site-wide default language should prefer:
  - “Structured investment”
  - “Implementation-based pricing”
  - “Scope depends on workflow depth, complexity, and integration needs”

Homepage must NOT:
- Display page-count pricing
- Compare against freelancers
- Justify pricing defensively

Price signals authority.
Authority supports conversion.

## 7. Sales Discipline

Sales identity:
We do not “sell websites.”
We diagnose infrastructure gaps.

We do not pitch features.
We clarify operational weaknesses.

We do not push urgency.
We build calm authority.

Sales objective:
To reveal operational inefficiencies
and position infrastructure as the solution.

Sales must always reinforce:
Smart Website → Primary Gravity
Standalone Systems → Secondary Implementations

Sales call structure:
- Phase 1 — Context Discovery
- Phase 2 — Infrastructure Diagnosis
- Phase 3 — Reframing
- Phase 4 — Solution Alignment
- Phase 5 — Pricing Conversation

Proposal structure rule (mandatory order):
1. Operational Summary
2. Structural Recommendation
3. Scope Outline
4. Investment

Proposals must not:
- Read like marketing brochures
- List plugin stacks
- Overload features
- Justify pricing emotionally

## INTERIM PROOF LAW (LOCKED ADDENDUM)

Until real case studies exist in sufficient number, MindWP must use a hybrid proof model:

- Primary proof = system logic, architecture reasoning, process clarity, and operational diagnosis
- Secondary proof = clearly labeled implementation scenarios and example structures

MindWP must NOT rely on:
- fabricated testimonials
- invented brand logos
- fake performance statistics
- unlabeled fictional case studies

Rule:
If a scenario is illustrative, it must be clearly framed as an example or typical implementation scenario.

## POSITIONING LOCK PROTOCOL (LOCKED)

When copy, page structure, AI output, or new ideas conflict with this document:

- this document wins by default
- no reinterpretation is allowed without an explicit positioning review
- supporting docs and runtime pages must be realigned to this doctrine, not the other way around

Clarity before persuasion.

What not to say (preserved block):
Never say:
- “This will explode your growth.”
- “You’ll dominate competitors.”
- “This guarantees more leads.”
- “This will 10x your revenue.”

Never:
- Sound desperate
- Rush closing
- Offer random bonuses
- Break hierarchy

Anti-hype language discipline:
Avoid words such as:
Dominate, Explode, Disrupt, Revolutionary, Guaranteed, Hyper-growth, Skyrocket.

AI sales guardrail:
AI must maintain infrastructure positioning, preserve pricing confidence, and avoid growth-agency funnel tone.
If AI output sounds like a marketing funnel — reject it.

## 8. Homepage Structural Law

Core principle:
The homepage must establish Smart Website as the flagship framework
before introducing standalone system implementations.

Hierarchy is mandatory.
Homepage is not a services catalog.
Homepage is strategic framing.

Mandatory section order law:
1. Hero Section — Category Position
2. Problem Reframing Section
3. Smart Website Authority Section
4. Infrastructure Layers Section
5. Process / Implementation Clarity
6. Social Proof / Authority
7. Final CTA

Structural requirements:
- Smart Website must appear before CRM, Reputation, Voice AI, Workflows, Booking
- Standalone systems must be framed as operational layers (not additional services)
- Standalone systems must never appear horizontal or equal-weight to Smart Website
- Primary CTA must be consultation/walkthrough/discussion oriented
- Conversion boundary: clarity, not manipulation

Smart Website dominance test:
If a visitor scrolls halfway down the homepage,
they must clearly understand:
Smart Website is the core framework.

If CRM, AI, or other systems feel equal-weight,
the hierarchy is broken.

Smart Website must visually and structurally dominate.

What homepage must never do:
- Lead with CRM
- Lead with AI
- Lead with SEO
- Lead with tools
- List services horizontally at top
- Sound like a SaaS product
- Promise growth
- Use aggressive marketing language
- Promote specialist builder execution services as primary offerings

If Smart Website loses dominance, homepage is compromised.

## 9. Homepage SEO Positioning

Homepage SEO role:
The homepage is a positioning page first.
Traffic page second.

The homepage exists to:
- Define the category (Smart Website Infrastructure)
- Position MindWP as systems-first consultancy
- Support vertical Industry Pages
- Convert qualified visitors

The homepage is NOT:
- A generic web design landing page
- A traffic-heavy keyword page
- An industry-specific SEO page
- A freelancer service listing

Primary homepage keyword focus:
- website for service business

Secondary homepage keywords:
- website with CRM integration
- conversion structured website
- service business website system
- structured website infrastructure
- website lead management system

Keywords to exclude:
- web design agency
- website development company
- WordPress developer
- affordable web design
- freelance web designer

On-page structure alignment:
- H1: Smart Website Infrastructure for Service Businesses
- H2 themes:
  - Structured Websites Built as Business Infrastructure
  - Why Most Service Business Websites Fail Structurally
  - How Smart Website Infrastructure Works
- Meta title direction: Smart Website Infrastructure for Service Businesses | MindWP
- Meta description direction:
  Structured websites built for service businesses — designed to support enquiry handling, CRM integration, and operational clarity.

No keyword stuffing.
Clarity first.


## 10. Expansion & Drift Prevention Rules

Builder & Platform Governance:

Builder-specific capabilities (Bricks, Elementor, Divi, WooCommerce) are classified as execution-layer implementation tools.

They must:
- Remain under Tier 3 Implementation structure
- Link upward to Smart Website or WordPress Development pages
- Avoid headline-level prominence
- Never compete with Smart Website positioning

Tool capability must never override system positioning.
Builder-specific implementation pages must not appear as primary services on the services landing page. They may appear only inside implementation or technology sections and must remain clearly positioned as execution-layer support.

Drift signs:
- Smart Website loses prominence
- Services become horizontal
- Tools appear in headlines
- Pricing becomes reactive
- Hype language appears
- Builder services begin competing with Smart Website positioning

Correct immediately.

Positioning integrity check (every 90 days):
- Is Smart Website still primary?
- Are industries increasing authority or diluting it?
- Are services drifting into horizontal confusion?
- Is pricing confidence intact?
- Is copy still simple English?
- Are we attracting better clients?

If positioning weakens:
Correct immediately.

Authority compounds.
Drift compounds faster.

Expansion sequencing:
1. Improve Smart Website depth
2. Strengthen vertical positioning
3. Offer infrastructure audits
4. Add advisory retainers
5. Build agency partnerships

Never expand sideways into random services.

Homepage SEO expansion rule:
Do not broaden into generic agency keywords until:
- Domain authority increases
- Vertical clusters are mature
- Backlink profile strengthens
- 30+ structured posts are published

Long-term vision:
Authority compounding through consistent infrastructure positioning.
Long-term positioning over short-term revenue.


Platform-Neutral Positioning Rule (Non-Negotiable):

Smart Website Infrastructure must remain platform-agnostic in perception.

Implementation platforms (e.g., WordPress or any future platform) are delivery mechanisms — not category anchors.

Therefore:
- Platform names must not appear in hero headlines.
- Platform names must not define service identity.
- Platform capability must not dominate value messaging.
- Platform references must live in implementation or technology sections only.
- Platform language must support authority, not replace it.

If Smart Website begins to feel like a "WordPress service" instead of an infrastructure framework, positioning has drifted.

Correct immediately.

This rule applies to:
- Homepage
- Smart Website page
- Supporting system pages
- Sales material
- Proposal language
- AI-generated copy

Perception must always be:
Infrastructure-first.
Platform-second.

## SYSTEM IMPLEMENTATION COMPATIBILITY LAW (LOCKED)

MindWP publicly positions its systems as platform‑neutral infrastructure.

However, all operational systems described on service pages must remain realistically implementable within the current operational stack.

Current primary operational platform:
GoHighLevel (GHL)

This platform provides the backbone for:
- CRM pipelines
- workflow automation
- lead routing
- missed call recovery
- SMS and email follow‑up
- review automation
- booking and scheduling
- lead reactivation campaigns
- AI conversation handling where appropriate

Application rules:

- Service page descriptions must never promise functionality that cannot be implemented within the current operational stack.
- System explanations must map logically to real automation workflows and CRM pipelines.
- The website (Smart Website Systems) remains the front‑end infrastructure layer, while operational workflows run inside the CRM system.
- Public messaging must remain platform‑neutral and must not read like a software‑reseller or GoHighLevel agency page.

Important boundary:

Platform capabilities support the infrastructure model but must never replace it in positioning.

Perception must remain:

Infrastructure first  
Systems second  
Platform third

If service pages begin describing capabilities that cannot be realistically delivered through the operational stack, the copy must be corrected immediately.

## 11. AI EXECUTION LOCK (MANDATORY)

This section governs AI behavior during page-by-page implementation.


This lock remains active unless explicitly removed in writing.

### Architecture Lock Rule (Strategic Protection)

Once strategic architecture decisions are documented and marked as locked in the project documentation, AI systems must operate in **execution mode**, not **strategy mode**.

AI may:
- implement the documented architecture
- improve clarity and depth
- correct inconsistencies
- strengthen positioning
- optimize content within the existing framework

AI must NOT:
- reopen strategic debates
- introduce alternative structural models
- present new positioning options
- suggest replacing or restructuring the documented ecosystem
- propose new business models, content hierarchies, or service structures

If an AI system believes a structural issue exists, it must **pause and request explicit approval** before presenting alternatives.

This rule exists to prevent strategic drift and to keep execution aligned with the locked documentation.

Execution priority:
Documentation → Architecture → Implementation.

If documentation is locked, AI must execute the plan rather than redesign it.

---

### Architectural Protection Rule

When executing copy, structure, SEO, UI, or content updates:

- AI must not reinterpret architecture.
- AI must not reopen Tier debates.
- AI must not propose equal-weight service flattening.
- AI must not introduce tool-first positioning.
- AI must not convert Smart Website into generic web design messaging.
- AI must not introduce growth-agency tone.
- AI must not promote builder tools as primary services.
- AI must not alter structural gravity without explicit governance approval.

If a suggestion affects structural hierarchy,
AI must pause and request governance confirmation before proceeding.
AI must treat documentation files as authoritative architecture sources. Runtime code, page copy, and component behavior must align with documentation rather than reinterpret it.

---

### Execution Mode Rule

When working page-by-page:

- Follow existing hierarchy.
- Improve clarity.
- Improve depth.
- Improve positioning.
- Strengthen Smart Website gravity.
- Preserve calm authority tone.
- Never alter tier structure.

Execution must optimize inside the framework,
not redesign the framework.

---

### Copy Discipline Rule

All copy must remain:

- Simple English
- Calm
- Measured
- Professional
- Non-hype
- Operational

Avoid:

- Emotional urgency
- Growth promises
- Revenue multipliers
- Aggressive persuasion
- Tool-centric positioning

If output resembles marketing funnel copy,
it must be rejected and rewritten.
When AI generates content:

It must:

Preserve Smart Website gravity

Maintain hierarchy

Use simple English

Avoid hype

Avoid growth-agency framing

Avoid SaaS tone

Avoid flattening services

It must NOT ask to redefine:

Target market

Flagship offer

Pricing model

Service structure

Pivot into ads or growth

Clarity overrides creativity.

Authority overrides persuasion.

Infrastructure overrides marketing.

---
## TONE & POSITIONING

We position as:
A serious infrastructure consultancy.

Not:
A growth marketing startup.
Not a web design shop.
Not a freelancer-for-hire.

We sell reassurance, not excitement.

Clients should feel calm and confident after speaking with us.

Excitement follows results.
We do not manufacture hype.

------------------------------------------------------------
## WHAT WE NEVER SAY

• “We’ll skyrocket your leads.”
• “Guaranteed rankings.”
• “Affordable packages.”
• “Explosive growth.”
• “Dominate your competitors.”
• “Best in the market.”

We never oversell.
We never exaggerate.
We never promise what we do not control.

### Smart Website Dominance Safeguard

On every service, industry, or system page:

- Smart Website must remain the conceptual anchor.
- Supporting systems must reinforce it.
- No supporting system may visually or structurally override it.
- Builder capabilities must remain implementation-layer references only.

If dominance weakens:
Stop.
Realign.
Then continue.

## ANTI-DRIFT RULE

We must never drift into:

• Growth agency positioning
• Paid media core services
• Traffic promises
• Feature stacking
• Tool-based marketing
• Underpricing from insecurity
• Horizontal service expansion

If Smart Website gravity weakens,
we correct immediately.

------------------------------------------------------------
## DECISION FILTER

Before implementing any change ask:

• Does this increase operational clarity?
• Does this strengthen Smart Website gravity?
• Does this attract better clients?
• Does this reduce confusion?
• Does this feel calm and confident?

------------------------------------------------------------
## CONTENT RELATIONSHIP DISCIPLINE

The system knows more than it shows. The content graph stores all valid relationships, but the UI displays only the highest-relevance items — capped at 3 per section, governed by strict per-page-type rules. Full content exposure rules are defined and locked in **CONTENT.md** under **"CONTENT RELATIONSHIP & EXPOSURE RULES (LOCKED)"**.

If not, reject it.

---

# 14. SYSTEM ARCHITECTURE LAYERS

> Consolidated from: SYSTEM.md

## 1. System Layers

```
┌─────────────────────────────────────────────────────┐
│  GOVERNANCE                                         │
│  governance/CONTENT.md · core/SYSTEM-STATE.md    │
│  Authority stack: FOUNDATION → ARCHITECTURE → GRAPH │
│                   → BLUEPRINT → GOVERNANCE          │
└──────────────────────┬──────────────────────────────┘
                       │ rules flow down
┌──────────────────────▼──────────────────────────────┐
│  CONTENT GRAPH                                      │
│  211 nodes · 7 types · metadata-driven relationships │
│  src/lib/content-graph/ · authority-map.json         │
└──────────────────────┬──────────────────────────────┘
                       │ edges resolve to
┌──────────────────────▼──────────────────────────────┐
│  PRESENTATION                                       │
│  Next.js pages · BEM components · SmartCTA           │
│  src/app/ · src/components/ · src/config/            │
└──────────────────────┬──────────────────────────────┘
                       │ images from
┌──────────────────────▼──────────────────────────────┐
│  IMAGE GENERATION                                   │
│  Sharp pipeline · SVG overlays · 3 layout variants  │
│  src/lib/image-system/ · scripts/generators/         │
│  Providers: Unsplash · Pexels · Pixabay             │
└──────────────────────┬──────────────────────────────┘
                       │ validated by
┌──────────────────────▼──────────────────────────────┐
│  VALIDATION                                         │
│  17 validators (blocking + advisory control layer)  │
│  scripts/validators/ · scripts/core/validate-all.mjs │
└──────────────────────┬──────────────────────────────┘
                       │ reported to
┌──────────────────────▼──────────────────────────────┐
│  OBSERVABILITY                                      │
│  system-report · system-sync · drift                 │
│  /dev/authority-dashboard · reports/ · logs/          │
└─────────────────────────────────────────────────────┘
```

---

## 2. Content Flow

Content type determines routing. No linear funnel.

| Type | Role | Routes To |
|---|---|---|
| Blog | Search capture, problem exploration | Service (PROBLEM), Resource (SYSTEM/FRAMEWORK) |
| Resource | Evergreen frameworks, system explanation | Service (ACTIONABLE/EDUCATIONAL), Case Study (EXAMPLE) |
| Case Study | Implementation proof | Service |
| Service | Conversion destination | /contact |
| Industry | Vertical-specific context | Service |
| Feature | System component detail | Service (via graph) |

Primary CTA everywhere: **"Start a Conversation" → /contact**

---

## 3. Core Rules

1. **Docs override code.** If governance docs and code conflict, change the code.
2. **One file, one job.** No file absorbs responsibilities from another.
3. **Fix → sync → verify.** Every change runs validators then system-sync.
4. **Snapshots are read-only.** Generated files are never manually edited.
5. **ContentNodeType is the only type system.** No derived runtime content types.
6. **BEM everywhere.** Inline styles only for approved shadcn/ui and SVG exceptions.
7. **CONVERSION.md governs CTA behavior.** SmartCTA is the only CTA rendering path.
8. **inventory.ts is the single source of truth for route metadata.** All page metadata resolves from inventory.
9. **Components are pure renderers.** No data fetching, filtering, slicing, or graph queries inside components.

---

## 4. Key Paths

| Area | Location |
|---|---|
| Content graph types | `src/lib/content-graph/types.ts` |
| Route metadata (single source) | `src/lib/content-quality/inventory.ts` |
| SmartCTA (only CTA component) | `src/components/system/SmartCTA.tsx` |
| CTA labels (per-system) | `src/config/ctaLabels.ts` |
| CTA intensity + copy (per-pageType) | `src/config/ui-intelligence.ts` |
| Contact href builder | `src/lib/contact/contactHref.ts` |
| Domain registries | `src/domains/*/registry.ts` |
| Validator framework | `scripts/core/validate-all.mjs` |
| System sync | `scripts/core/system-sync.mjs` |
| System Health dashboard | `src/app/dev/system-dashboard/` |
| Image system pipeline | `src/lib/image-system/` |
| Image CLI generator | `scripts/image-system/image-generate.ts` |
| Image config + thresholds | `src/lib/image-system/config.ts` |
| Generated images | `public/images/<domain>/<slug>/` |

---

## 5. Documentation Map

| Folder | Contains |
|---|---|
| `core/` | System truth, architecture, graph rules, component catalog |
| `governance/` | Content governance hierarchy |
| `planning/` | Content inventory and planning docs |
| `Automatic-Image-Generation-System/` | Image pipeline architecture and testing guide |

Entry point: `core/SYSTEM.md`

---

# 15. BEHAVIORAL CONTRACTS

> Consolidated from: SYSTEM.md

> This section is the **behavioral authority index** mapping ownership across core docs.
> This section does NOT define conversion behavior directly.
> Conversion behavior is governed only by CONVERSION.md.

## 1. OWNERSHIP MAP

| Behavioral Area | Governing Document |
|---|---|
| CTA system (SmartCTA), contact system, URL contract, validation rules | `CONVERSION.md` |
| CTA tone, banned language, positioning | `SYSTEM.md` |
| Page structure and CTA placement within page composition | `CONTENT.md` |
| Content graph ontology, metadata, slug, source generation | `GRAPH.md` |
| Route metadata, SEO, indexability (single source of truth) | `inventory.ts` via `SYSTEM-STATE.md` and `src/lib/seo/pageMetadata.ts` |
| UI purity, component rendering rules | `SYSTEM-STATE.md` |

---

## 2. SINGLE SOURCE OF TRUTH

| Data | Canonical Source | Consumers |
|---|---|---|
| Route metadata (title, description, OG, robots) | `inventory.ts` | Static routes via `getInventoryMetadata()`, parameterized routes via `src/lib/seo/pageMetadata.ts` helpers |
| CTA labels | `CTA_LABEL_MAP` in `src/config/ctaLabels.ts` | `SmartCTA` only |
| CTA intensity + copy | `CTA_CONFIG` in `src/config/ui-intelligence.ts` | `SmartCTA` only |
| Canonical values (systems, topics, industries) | `src/lib/content-graph/canonical.ts` | Graph, inventory, validators |
| Domain content (sections, features, copy) | `src/domains/*/data/{slug}.ts` | Page data layer → template props |
| Navigation links | Derived from inventory (indexable routes) | Nav, Footer |

No data may have two sources. If a value exists in inventory, it must not be redefined in domain data, templates, or page files.

---

## 3. CONTRACT RULES

- Do not duplicate conversion rules in this file
- Do not redefine CTA routing or contact behavior outside `CONVERSION.md`
- If conversion behavior changes, update `CONVERSION.md` first
- If structure changes, update `CONTENT.md`
- If metadata or source-generation rules change, update `GRAPH.md`
- If route metadata ownership changes, update `SYSTEM-STATE.md` and `inventory.ts`

---


---

# 16. EXECUTION CONTROL LAYER

> Consolidated from: SYSTEM.md
> This section controls how AI understands and interacts with the MindWP project.
> It is an execution control layer, not documentation.

## MANDATORY READ (STRICT)

### CURRENT PHASE: BUILD / ALIGNMENT

Before ANY work, AI MUST read ALL of the following files in order:

1. `core/SYSTEM.md` — Root authority: service map, boundaries, terminology, system flow, drift prevention, positioning, contracts
2. `core/CONVERSION.md` — CTA and contact system contracts
3. `core/WRITING.md` — Writing execution rules
4. `core/CONTENT.md` — Content system rules, archetypes, governance
5. `core/GRAPH.md` — Graph structure and edge rules
6. `core/DESIGN.md` — Design system control layer
7. `core/SYSTEM-STATE.md` — Current system reality, execution rules, decisions, execution state
8. `core/TOOLS.md` — Dashboards, scripts, reports

**Rules:**
- Partial reading is NOT allowed
- Do NOT proceed without reading all listed files
- Do NOT skip files based on perceived relevance
- Re-read if context window resets

---

### FUTURE MODE (POST-LAUNCH)

> NOT ACTIVE. Do not use this mode yet.

When system stabilizes post-launch, mandatory read reduces to:

1. `core/SYSTEM.md`
2. `core/SYSTEM-STATE.md`

All other files become read-on-demand.

---

## EXECUTION MODE

You are NOT designing a system.
You are executing inside an existing system.

**Rules:**
- Follow existing patterns. Do not invent new ones.
- All behavior is already defined. Do not assume behavior.
- All architecture is locked. Do not modify architecture.
- All content types are locked. Do not create new types.
- Keep Update SYSTEM-STATE.md once you finish task.

**DO NOT:**
- Create new systems or abstractions
- Modify architecture without explicit instruction
- Assume behavior not defined in docs
- Bypass validators or ignore failures

**If unsure → read SYSTEM-STATE.md**

---

## CONTEXT RULE

- Do NOT rely on chat history or memory
- Do NOT assume previous decisions carry forward
- Always rely on documentation as the source of truth
- Every session starts fresh from these docs

**If context is unclear → re-read mandatory files**

---

## WHERE TO LOOK

| Need | File |
|---|---|
| **Service map, boundaries, terminology, system flow, drift rules, brand identity, positioning, contracts** | `core/SYSTEM.md` |
| CTA and contact system contracts | `core/CONVERSION.md` |
| Writing execution (voice, rewrite method, quality) | `core/WRITING.md` |
| Content rules, archetypes, governance | `core/CONTENT.md` |
| Graph + relationships | `core/GRAPH.md` |
| Design system | `core/DESIGN.md` |
| System reality, execution rules, decisions, execution state | `core/SYSTEM-STATE.md` |
| Dashboards, scripts, reports | `core/TOOLS.md` |
| Content planning | `planning/CONTENT-INVENTORY.md` |
| Image pipeline | `Automatic-Image-Generation-System/IMAGE-SYSTEM.md` |
| Component catalog | `core/GLOBAL-COMPONENTS-CATALOG.md` |

---

## WORKING ORDER

### Start work
1. Run `npm run system:report`
2. Inspect `reports/system-report.json`
3. If CLEAN → continue. If WARNING/BROKEN → inspect `reports/system-drift.json`
4. Read `core/SYSTEM-STATE.md` for current priorities

### Finish work
1. Run targeted validator for changed files
2. Run the matching test layer when runtime behavior changed (`npm run test:unit`, `npm run test:integration`, `npm run test:system`, `npm run test:e2e`)
3. Run `npm run system:report`
4. Confirm `reports/system-report.json`, `reports/system-state.json`, and `reports/system-drift.json` updated
5. Do NOT leave repo in drift or failure state

### Core commands
| Command | Purpose |
|---|---|
| `npm run system:report` | Full system snapshot: validate, sync, analyze, normalize |
| `node scripts/core/validate-all.mjs` | Full validator set |
| `node scripts/core/system-sync.mjs` | Generate state and drift snapshots |
| `npm run test:runtime` | Vitest runtime layers: unit, system, and integration |
| `npm run test:e2e` | Playwright end-to-end runtime flows |
| `npm run test:all` | Validators + unit/system/integration/E2E aggregation with `reports/test-results.json` output |
| `npm run dev` | Local development |
| `npm run build` | Production build |

---

## DATA MODEL

- **Overwrite-only:** `reports/system-report.json`, `reports/system-state.json`, `reports/system-drift.json`
- **Append-only:** `reports/fix-log.json`, `reports/session-log.json`
- **Generated (do not edit):** `core/GLOBAL-COMPONENTS-CATALOG.md`


---

# DOCUMENT HIERARCHY

This is the reading order and authority stack for the entire system:

## Required Reading Order

1. **SYSTEM.md** (this file) — mandatory first read
2. **CONVERSION.md** — CTA and contact system contracts
3. **WRITING.md** — writing execution rules
4. **CONTENT.md** — content types, archetypes, governance
5. **GRAPH.md** — graph structure and edge rules
6. **DESIGN.md** — design system control layer
7. **SYSTEM-STATE.md** — current system reality, execution rules, decisions, execution state
8. **TOOLS.md** — dashboards, scripts, reports
9. **GLOBAL-COMPONENTS-CATALOG.md** — auto-generated component catalog

## Authority Stack

| Priority | Document |
|---|---|
| 0 (ROOT) | **SYSTEM.md** (this file) |
| 1 | CONTENT.md (content architecture, blueprints, governance) |
| 2 | GRAPH.md (graph ontology, metadata, relationships) |
| 3 | CONVERSION.md (CTA, contact, conversion contracts) |
| 4 | WRITING.md (writing method, voice, language rules) |
| 5 | DESIGN.md (design tokens, UI rules, component patterns) |

SYSTEM.md sits above the entire authority stack. It controls the rules that were previously scattered. All other docs retain their existing hierarchy positions for their owned concerns.

---

END OF SYSTEM.


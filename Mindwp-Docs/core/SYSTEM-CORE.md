# SYSTEM CORE — MindWP

> **This is the single source of truth for all system-level architecture, boundaries, and positioning rules.**
> All other documents must reference this file. No other document may redefine the rules in this file.
> If any document conflicts with SYSTEM-CORE → SYSTEM-CORE wins.

**Status:** Governing Document — LOCKED
**Authority Level:** Root (overrides all other docs)
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

After reading this, go to the execution doc for your task (see Document Hierarchy at the end).

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

---

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
| System identity, positioning, service tiers, gravity model | **SYSTEM-CORE.md** (this file) | ✅ |
| Service map, boundaries, terminology, flow, connections | **SYSTEM-CORE.md** (this file) | ✅ |
| Tool positioning, drift prevention | **SYSTEM-CORE.md** (this file) | ✅ |
| Brand voice, tone, writing principles, rewrite method | **CONTENT-WRITING-PLAYBOOK.md** | ✅ |
| Banned vocabulary (general), quality checks, AI detection | **CONTENT-WRITING-PLAYBOOK.md** | ✅ |
| Page structure templates, page intent framework | **CONTENT-WRITING-PLAYBOOK.md** | ✅ |
| CTA system, contact system, URL contract, validation | **CONVERSION-SYSTEM.md** | ✅ |
| CTA tone, banned CTA language | **FOUNDATION-AND-POSITIONING.md** | ✅ |
| Content type definitions, tier page matrices, exposure rules | **CONTENT-SYSTEM-ARCHITECTURE.md** | ✅ |
| Graph ontology, metadata, relationship resolution | **CONTENT-GRAPH-SYSTEM.md** | ✅ |
| Content archetypes, template section mappings | **CONTENT-BLUEPRINT-SYSTEM.md** | ✅ |
| Edit governance, domain behavior rules, edit intensity | **CONTENT-GOVERNANCE.md** | ✅ |
| Technical architecture, CSS, components, validators | **SYSTEM-ARCHITECTURE.md** + **DESIGN-SYSTEM-CONTROL-LAYER.md** | ✅ |
| Current system state snapshot | **SYSTEM-TRUTH.md** | ✅ |
| Execution decisions, priorities | **EXECUTION-MEMORY.md** | ✅ |
| Behavioral authority index | **SYSTEM-CONTRACT.md** | ✅ |
| Execution rules, permissions | **SYSTEM-RULES.md** | ✅ |

**Rule:** If a doc needs to reference a rule owned by another doc, it must use a one-line reference with a pointer, not restate the rule.

**Example (correct):**
> CTA behavior is governed by CONVERSION-SYSTEM.md. See that document for all CTA routing and label rules.

**Example (incorrect):**
> CTA labels resolve through CTA_LABEL_MAP. Default fallback is "Start a Conversation". All CTAs route to /contact...
> *(This restates rules owned by CONVERSION-SYSTEM.md — violation.)*

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
| Doc X conflicts with SYSTEM-CORE | SYSTEM-CORE wins. Fix Doc X. |
| Doc X restates rules from SYSTEM-CORE | Remove restatement. Add reference pointer. |
| Code conflicts with docs | Docs win. Fix the code. |
| Two non-core docs conflict | Check SYSTEM-CORE ownership table (§8). The designated owner wins. |

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
10. **SYSTEM-CORE overrides all.** No other doc may contradict this file.

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
2. Add it to SYSTEM-CORE.md §2.2 tier table
3. Add page composition rules to CONTENT-SYSTEM-ARCHITECTURE.md
4. Do NOT create a new service boundary — it inherits its parent Tier 1 boundary

### Adding a new industry
1. Add the canonical identifier to `canonical.ts`
2. Add an entry in CONTENT-GRAPH-SYSTEM.md canonical industries list
3. Create the industry detail page following CONTENT-BLUEPRINT-SYSTEM.md archetypes
4. Do NOT create industry-specific terminology — use the parent service's vocabulary

### Adding a new content type
1. This requires explicit approval — content types are locked in `ContentNodeType`
2. If approved, update: CONTENT-GRAPH-SYSTEM.md, CONTENT-BLUEPRINT-SYSTEM.md, CONTENT-SYSTEM-ARCHITECTURE.md
3. Add slot rules to the graph link table in SYSTEM-TRUTH.md §2.4
4. Update validators

### Adding a new document
1. Define its purpose — one sentence, one job
2. Check the ownership table (§8) — does an existing doc already own this concern?
3. If yes → extend the existing doc, do not create a new one
4. If no → create the doc with REQUIRED READING ORDER and AUTHORITY NOTICE headers
5. Add the doc to the ownership table (§8)
6. Add the doc to SYSTEM-README.md reading order

### Rule: No change is valid until
- SYSTEM-CORE.md is updated (if scope touches locked rules)
- Cross-links are verified (no broken references)
- `npm run validate:all` passes
- `npm run system:report` shows CLEAN

---

# DOCUMENT HIERARCHY

This is the reading order and authority stack for the entire system:

## Required Reading Order

1. **SYSTEM-CORE.md** (this file) — mandatory first read
2. **SYSTEM-CONTRACT.md** — behavioral authority index
3. **FOUNDATION-AND-POSITIONING.md** — brand identity, CTA tone
4. **CONVERSION-SYSTEM.md** — CTA and contact system contracts
5. **CONTENT-WRITING-PLAYBOOK.md** — writing execution rules
6. **CONTENT-SYSTEM-ARCHITECTURE.md** — content types, service pages, tiers
7. **CONTENT-GRAPH-SYSTEM.md** — graph structure and edge rules
8. **CONTENT-BLUEPRINT-SYSTEM.md** — content archetypes and templates
9. **CONTENT-GOVERNANCE.md** — edit governance hierarchy
10. **SYSTEM-TRUTH.md** — current system reality snapshot

## Authority Stack

| Priority | Document |
|---|---|
| 0 (ROOT) | **SYSTEM-CORE.md** |
| 1 | FOUNDATION-AND-POSITIONING.md |
| 2 | CONTENT-SYSTEM-ARCHITECTURE.md |
| 3 | CONTENT-GRAPH-SYSTEM.md |
| 4 | CONTENT-BLUEPRINT-SYSTEM.md |
| 5 | CONTENT-GOVERNANCE.md |

SYSTEM-CORE.md sits above the existing authority stack. It controls the rules that were previously scattered. All other docs retain their existing hierarchy positions for their owned concerns.

---

END OF SYSTEM CORE.

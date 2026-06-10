# CLAUDE.md

Main orientation for any AI working on MindWP. Read this first, then the task-relevant doc.

## Current phase: Figma-first

**We are designing the whole site in Figma first. Code comes later.** Do not work in code until the full design is approved. The design loop is in [docs/WORKFLOW.md](./docs/WORKFLOW.md).

## Identity

MindWP builds **smart websites** — conversion-focused websites with lead handling built in — for established service businesses and specialist clinics, sold globally across English-speaking markets. Run by a builder shipping WordPress sites since 2015, with a small senior team. Moving off Fiverr to a productized authority business.

The product is the website **and** the handling around it (response, ownership, follow-up, reviews). The differentiator: **the handling is built in, not bolted on** — most websites stop at the contact form; ours carries the enquiry the whole way through. Full identity: [docs/FOUNDATION.md](./docs/FOUNDATION.md). Commercial plan: [docs/STRATEGY.md](./docs/STRATEGY.md).

Public anchor headline: **"Work Comes In. Too Much Slips Away."** — the lead recognition line. But recognition is the opening, not the page: state the concrete offer early and show real proof. Don't sell a philosophy.

## The genre (this is the reset)

The new visual genre is a **proof-&-work-led authority agency** — real builds shown big, human, concrete offer, warm and senior. It explicitly replaces the old SaaS-editorial look (dark/teal-glow anchors, monospace data labels, faux dashboards, fake proof) that every previous rebuild reproduced. **The quality standard is [docs/DESIGN.md](./docs/DESIGN.md), not the existing pages.** When DESIGN.md and an existing frame disagree, DESIGN.md wins.

## Active offer model

Five active primary systems; **Smart Website Systems is the flagship and visual hub.**

1. Smart Website Systems
2. Local SEO Authority Systems
3. Lead Response & Handling Systems
4. Follow-Up & CRM Systems
5. Reputation & Review Systems

Revenue Recovery is a cross-system improvement **lens** only — never a page, route, CTA category, panel, nav pillar, or content cluster. Implementation services (WordPress, Elementor, Bricks, Divi, WooCommerce, website rebuild) sit **under Smart Website Systems** as build pathways, not primary systems. Ownership boundaries: [docs/OFFER-ARCHITECTURE.md](./docs/OFFER-ARCHITECTURE.md).

## Five-system visual rule

The five systems are **never** five equal tiles, a 2×3 grid, or a product "control surface." SWS is the flagship/hub; the other four are connected protections around it — a flagship row + four supporting cells, or a hub + four orbital positions with a real connecting graphic. Calm rows over glowing panels. See [docs/DESIGN.md](./docs/DESIGN.md).

## Hard banned terms

(Enforced by `pnpm check:names` in the later code phase — but honour them now.)

- Vendor/backend names: GoHighLevel, GHL, HighLevel — and never name the backend platform publicly.
- Removed offer names: "AI Lead Handling", "CRM & Automation", "Revenue Growth", "Revenue Growth Systems".
- Removed slugs: `ai-lead-handling`, `crm-automation`, `revenue-growth`, `growth-revenue-systems`, `aichat`, `workflows`.
- Removed routes: `/systems`, `/topics`, `/blog/topic`, `/portfolio`.
- "Revenue Recovery" as a structure; "six systems", "six connected systems", "digital infrastructure consultancy".

## Voice

Lead with working-day objects (calls, forms, quotes, bookings, consultation requests, missed replies, follow-up nobody owns, reviews not requested), then reach the offer and proof. No fake metrics, testimonials, rankings, or client outcomes. Full guide: [docs/WRITING.md](./docs/WRITING.md).

## Doc map

```
CLAUDE.md                     This file — AI orientation
docs/FOUNDATION.md            Identity, buyer truth, positioning
docs/STRATEGY.md              Commercial plan: market, offer, proof, conversion, industries  [NEW]
docs/OFFER-ARCHITECTURE.md    Five-system structure, ownership, implementation services
docs/DESIGN.md                Visual genre spec — the quality standard, kills the old DNA   [NEW]
docs/PAGES.md                 IA/sitemap, page roles, locked homepage spine, CTA posture
docs/WRITING.md               Voice, public language, offer/proof/pricing copy
docs/WORKFLOW.md              Figma-first design loop + per-page review process
docs/archive/                 Superseded: ai-description, website-planning, REPO (code, deferred)
```

## Hard boundaries

- Figma-first: no code work until the design is approved.
- Use only the active 5-system model; never revive removed names.
- The genre is proof-&-work-led ([docs/DESIGN.md](./docs/DESIGN.md)); no SaaS-editorial DNA, faux dashboards, monospace data labels, or dark-glow-default rhythm.
- Never expose the backend platform as the public product; never name it.
- Don't turn implementation services into primary systems.
- Don't merge Lead Response & Handling with Follow-Up & CRM (different timing moments).
- Each primary service page owns one business moment — don't repeat the full model on every page.
- Never invent proof, metrics, testimonials, rankings, guarantees, or client outcomes — authority comes from real work.
- Don't turn specialist clinic pages into medical software, EMR, compliance, or treatment-claim pages.

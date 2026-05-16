# MindWP Page Build Workflow

This is the active page-build planning note for the main MindWP folder.

It explains how to build and rebuild pages. It does not replace the offer architecture in `docs/core/FOUNDATION.md` or `docs/core/OFFER-ARCHITECTURE.md`.

---

## Core Flow

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

1. Business Reality: what is visibly happening in the buyer's business.
2. Buyer Recognition: what the visitor should recognise as their own situation.
3. Page Intent: what the visitor must understand, believe, or decide.
4. Pattern: leak, handoff, stack, split, arc, before/after, priority, fit, proof, scenario, or operating map.
5. Section Design: the actual visual and content shape.
6. JSX: build the page or section directly.
7. Approval: judge the page visually, strategically, and commercially.
8. Systemization: extract stable components, data, metadata, and types after approval.

This workflow is intentionally design-first. It prevents weak pages from being forced through premature types, registries, or generic section templates.

---

## Offer Context For Page Builds

MindWP is a systems-first website and connected handling systems business for established service businesses.

Active public systems:

- Smart Website Systems
- Local SEO Authority Systems
- Lead Response & Handling Systems
- Follow-Up & CRM Systems
- Reputation & Review Systems

Revenue Recovery is a cross-system improvement layer only.

Implementation services, including WordPress, Elementor, Bricks, Divi, WooCommerce, and website rebuild paths, sit under Smart Website Systems as implementation pathways. They are not equal primary systems.

---

## Working Rules

- Start from the buyer's visible working day.
- Create buyer recognition before explaining the system.
- Decide the page intent before composing sections.
- Choose the pattern logic that best explains the problem or decision.
- Compose the actual section in JSX first.
- Use Tailwind utilities plus existing `mw-*` and token classes for fast layout and responsive structure.
- Ask for visual approval before extracting shared primitives or data structures.
- Keep types broad enough to support the current page, then tighten them when the pattern is stable.

---

## Approved Base Components

- `HeroFrame`
- `SectionShell`
- `FAQSection`
- `DecisionPanel`
- `SignalDot`
- `StatusBadge`

Use these when they help. Custom page-owned JSX is appropriate when the section needs a specific business explanation.

---

## Patterns To Prefer

Strong MindWP pages often use:

- leak maps
- handoff surfaces
- signal boards
- before/after panels
- operating maps
- priority maps
- proof stacks
- fit filters
- scenario boards

Avoid generic agency layouts, SaaS dashboard imitation, fake analytics charts, random icon grids, and process steps repeated across every page.

---

## Extraction

After approval, extract only what has proven stable:

- repeated primitives
- shared visual components
- stable data groups
- production metadata
- related-content rules
- tighter types

Extraction is a cleanup phase, not the design starting point.

---

## Active Commands

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run check:names`
- `npm run check:minimal`
- `npm run check:frontend`

---

## Safety

- Never mention GoHighLevel, GHL, or HighLevel publicly.
- Do not invent proof, metrics, rankings, testimonials, or guarantees.
- Do not revive removed service names or removed offer models.
- Do not create a `/systems` public taxonomy unless governing docs are intentionally updated later.
- Keep copy operational, specific, and buyer-first.
- Run build and frontend smoke after meaningful page work.

---

## Note For Future Page Rebuild Sessions

This note is meant to help Claude, Codex, GPT, Copilot, or another AI rebuild pages without losing the business-first thinking.

Do not start with a data model.
Do not start with a section count.
Do not start with a component list.

Start with the business reality, make the buyer recognise it, then design the section that best communicates it.

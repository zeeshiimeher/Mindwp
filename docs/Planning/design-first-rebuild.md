# Design-First Page Rebuild Workflow

Workflow note for future Claude Opus, Codex, GPT, Copilot, or other AI page rebuild sessions.

This doc explains how to rebuild MindWP pages without losing the business-first thinking. It references the core docs instead of repeating them.

## Read First

For page rebuilds, read:

1. [../core/FOUNDATION.md](../core/FOUNDATION.md) for the build flow, buyer truth, and public path.
2. [../core/OFFER-ARCHITECTURE.md](../core/OFFER-ARCHITECTURE.md) for active system ownership.
3. [../core/CONTENT.md](../core/CONTENT.md) for page role and funnel behavior.
4. [../core/DESIGN.md](../core/DESIGN.md) for visual direction and section judgment.
5. [../core/WRITING.md](../core/WRITING.md) for public copy.
6. [../core/CONVERSION.md](../core/CONVERSION.md) for CTA posture.
7. [page-rebuild-briefs.md](./page-rebuild-briefs.md) for page-level brain transfer when planning or rebuilding a specific page.

Read only the parts needed for the page being rebuilt. If page briefs conflict with the core docs, the core docs win.

## Core Flow

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

This workflow is intentionally design-first. It prevents weak pages from being forced through premature data models, registries, or generic section templates.

## Step 1: Review The Existing Page

Before rebuilding, inspect the current page and any page data/renderers that feed it.

Identify:

- what the page currently says
- what useful intent should survive
- where it drifts into generic agency, SaaS, tool, builder, or hype language
- what page type it is
- which active system owns it
- what buyer reality it should start from
- which sections are strong enough to preserve in spirit
- which sections are structurally weak and should be replaced

Do not keep old structure just because it exists. Do not delete useful strategic intent just because the wording is weak.

Existing pages may be reviewed for buyer problems, mental models, warnings, implementation constraints, and pattern clues only. They must not dictate final section order, renderer structure, component choice, page data shape, visual pattern, or final copy.

Useful rebuild principles to carry forward:

- website as visible control point
- traffic leaking without clear service pages or next steps
- find -> verify -> trust -> contact
- structure before optimisation
- implementation choice as business fit
- fit/not-fit qualification

Avoid public infrastructure language, automation-first positioning, technology cards as filler, process steps everywhere, generic CTAs, and systems explained as a stack before recognition.

## Step 2: Define Page Intent

Before JSX, write a short working plan:

- buyer situation
- recognition moment
- page role
- owning active system or implementation pathway
- primary decision the visitor should make
- main pattern for the page
- proof or proof-style support available
- CTA posture

If the page is an implementation service page, confirm it resolves upward to Smart Website Systems.

If the page is a primary service page, confirm the single business moment it owns. It may show connected context, but it must not repeat the full MindWP model or absorb adjacent systems.

Do not plan pages, sections, CTAs, panels, forms, service cards, routes, or graph relationships around Revenue Recovery. It may appear only as a small improvement lens after the active system problem is already understood.

Keep Lead Response & Handling and Follow-Up & CRM separate. Lead Response & Handling owns first response and routing after someone reaches out. Follow-Up & CRM owns owner, status, reminder, and next-step visibility after first response or quote.

## Step 3: Choose Section Patterns

Choose section shapes that make the business logic visible.

Strong MindWP patterns include:

- leak map
- connected-handling surface
- website-as-control-point map
- find-verify-trust-contact path
- signal board
- before/after panel
- operating map
- priority map
- implementation pathway panel
- proof stack
- fit filter
- scenario board
- ownership table
- trust path

Avoid:

- generic agency hero plus card grid
- random process steps
- fake analytics
- SaaS dashboard imitation
- decorative tech visuals
- icon grids without business logic
- builder-first implementation layouts

## Step 4: Create Section Intent Before JSX

For each section, define:

- what the buyer should recognise
- what the section proves or clarifies
- which visual pattern fits
- what text must be visible immediately
- what the next section should make easier to understand

Do not start with a component name. Start with the business point the section must make.

Do not convert page briefs directly into a fixed section sequence. A page brief explains what the page must help the buyer understand; section patterns still come from buyer reality, page intent, design judgment, and the active docs.

## Step 5: Build In Page-Owned JSX

Build directly in JSX while the pattern is being proven.

Allowed:

- page-owned content
- local arrays
- page-local helper components
- repeated JSX
- Tailwind utilities
- existing `mw-*` and token classes
- shared components where they help

Use custom JSX when the section needs a specific operating map, connected-handling surface, leak board, comparison, or proof layout.

For rebuilds based on existing pages, build from current docs and current page intent. Preserve useful thinking, not old section structure.

Shared components like `HeroFrame`, `SectionShell`, `FAQSection`, `DecisionPanel`, `Button`, `SignalDot`, `StatusBadge`, `InlineText`, `Accordion`, and `Tabs` are useful tools, not gates.

## Step 6: Review Like A Buyer

After building, review the page visually and commercially:

- Can the buyer recognise their situation quickly?
- Does the hero open with reality rather than explanation?
- Does each section add a new job?
- Does the design show leaks, connected handling, ownership, trust, proof, response, follow-up, or status?
- Does the page avoid generic agency or SaaS patterns?
- Does the CTA feel diagnostic?
- Is proof real, clearly framed, or absent?
- Does the page fit its active system and page role?
- If it is a primary service page, does it own one business moment instead of repeating the full MindWP model?
- If it mentions connected handling, has the working-day problem been made visible first?
- If it uses a simple CTA label, does nearby context explain the diagnostic purpose?
- If it touches Lead Response or Follow-Up, are first response/routing and ownership/status/next steps kept distinct?

If the page is visually correct but strategically weak, rewrite the section. If the strategy is correct but the section looks generic, redesign the shape.

## Step 7: Extract After Approval

Only after approval, extract:

- stable data groups
- shared section primitives
- reusable visual components
- domain `pageData`
- metadata contracts
- CTA rules
- graph relationships
- tighter types

Extraction is not the starting point. It is the cleanup pass after the page proves its pattern.

## Hand-Off Prompt Shape For Claude

When handing a page rebuild to Claude Opus or another model, include:

- the page route and current source files
- the page type and owning active system
- the buyer situation
- the single business moment the page owns, if it is a primary service page
- the recognition moment
- the main section patterns to consider
- key copy rules from [../core/WRITING.md](../core/WRITING.md)
- CTA posture from [../core/CONVERSION.md](../core/CONVERSION.md)
- clear instruction to build in JSX first and extract after approval
- clear instruction that page briefs and existing pages are context, not fixed section orders

Do not hand off only a component list or data schema.

## Validation

For page work, use the repo commands in [../core/SYSTEM-ARCHITECTURE.md](../core/SYSTEM-ARCHITECTURE.md). Run `pnpm check:frontend` after meaningful visual/page work.

For docs-only planning, source validation is not required.

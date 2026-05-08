# MindWP Repo Agent Instructions

## What MindWP Is

- systems-first digital infrastructure consultancy for service businesses
- not generic web design, not SaaS, not tool reseller, not template business
- primary goal: qualified enquiries and conversion through structured systems
- six canonical systems: Smart Website Systems, Local SEO Authority, AI Lead Handling, CRM & Automation, Reputation & Reviews, Revenue Growth

## Core Architecture

CONTENT → PATTERN → COMPONENT → VARIANT / CONTROL → RENDER

- content owns business meaning
- pattern owns section job
- component owns reusable structure
- renderer maps prepared data and composes sections
- CSS owns visuals

## Source of Truth Order

1. current scoped user prompt
2. `docs/Planning/System-hard-reset.md` — architecture rules, build rules, component ownership, CSS rules, build order
3. `docs/Planning/Legacy-dependency-map.md` — live old dependency map, delete gates
4. `docs/core/*` for business, writing, content, conversion, design, and system rules
5. current code
6. `AGENTS.md` as stable background guidance

Conflict handling:

- Minor implementation differences: follow current prompt and code; mention assumption in report if useful.
- Material conflicts (business positioning, public copy, page mapping, component ownership, data contracts, validators, irreversible edits): inspect relevant files before editing that part.
- Do not stop the whole task for small naming, formatting, import, or local implementation differences.

## New Chat Rule

Every new Copilot chat should:

- read the current user prompt carefully
- identify task type: planning, implementation, review, or setup
- read only the relevant docs and files for that task
- avoid broad repo scans unless the prompt asks for repo-wide work
- produce a short plan before large edits
- execute within the scoped prompt only

## Current New-System Components

Use these for all new/rebuilt pages. Do not use old reusable/sections components:

- `SectionFrame` (`src/components/layout/`) — section shell: owns `<section>`, container, heading block, tone/bg
- `HeroFrame` (`src/components/layout/`) — hero shell: full hero section, split layout, actions, chips, visual slot
- `DecisionPanel` (`src/components/conversion/`) — final conversion section; replaces `PrimaryCTASection`
- `FAQSection` (`src/components/content/`) — full FAQ section; wraps SectionFrame + Accordion
- `RelatedSection` (`src/components/navigation/`) — global related content; injected by domain config wrappers only
- `Accordion` (`src/components/primitives/`) — disclosure primitive; no section framing
- `Tabs` (`src/components/primitives/`) — tab primitive; generic API
- `InlineText` (`src/components/primitives/`) — renders `[[muted:...]]` markers; inline use only
- `SignalDot`, `StatusBadge` (`src/components/primitives/`) — status/signal primitives
- `InternalLink` (`src/global/`) — internal link primitive

## Component Folder Rules

Approved new component folders:

- `src/components/layout` — section framing (SectionFrame, HeroFrame)
- `src/components/primitives` — behavior/accessibility primitives (Accordion, Tabs, InlineText, signals)
- `src/components/conversion` — final conversion panels (DecisionPanel)
- `src/components/navigation` — related content, nav helpers (RelatedSection)
- `src/components/content` — full reusable content sections (FAQSection)

Quarantined (do not import in rebuilt/new files):

- `src/components/reusable` — old system; all unrebuilt domains still depend on it
- `src/components/sections` — old system; delete when PrimaryCTASection gate is met

## CSS Rules

Current CSS stack (in import order):

```
tokens.css        → raw values only; all --mw-* token definitions
reset.css         → browser reset
typography.css    → global type scale
layout.css        → containers, SectionFrame, HeroFrame, motion/layout primitives
primitives.css    → buttons, atoms, Accordion, Tabs, signal/status primitives
components.css    → Header, Footer, DecisionPanel, RelatedSection, FAQSection
page/domain CSS   → page-specific visual bodies only
```

Rules:

- no raw hex or `rgba()` outside `tokens.css`
- no inline styles
- no Tailwind classes in production TSX
- no random hardcoded values — use `--mw-*` tokens only
- page CSS owns page-specific visuals; shared components own shared CSS in global files
- do not invent token names; confirm the token exists in `tokens.css` first

## CTA and Related Rules

- `DecisionPanel` is the final conversion component for all new/rebuilt pages
- `PrimaryCTASection` is quarantine delete-later — do not use in new/rebuilt files
- `RelatedSection` is global/wrapper-owned — injected by domain config wrappers
- Page renderers must NOT manually render related sections
- No hardcoded `/contact` in rebuilt CTA actions — use `buildContactHref()` from `@/lib/contact/contactHref`
- Use `PRIMARY_CTA_LABEL` from `@/lib/cta/primaryAction` as the CTA label

## InlineText / Muted Text Rules

- Use `[[muted:...]]` inside title/heading data strings
- Do not use `titleMuted` prop
- Do not use `headingMuted` data field
- Do not put HTML or JSX in data strings
- `InlineText` is used internally by `SectionFrame` and `HeroFrame`

## Content Rules

- read `WRITING.md` and `CONTENT.md` before writing or reshaping public content
- existing data and content is the first source
- write only operational, specific, non-hype copy
- do not invent fake metrics, testimonials, guarantees, proof, rankings, or client results
- do not add service capabilities not supported by the business
- GoHighLevel is internal and white-label — must not be mentioned publicly

## Execution Discipline

- audit before editing: read the current file first
- bulk work is allowed when the prompt defines scope; inside bulk work, execute task-by-task
- do not patch unrelated systems in parallel
- state intended edits before applying large changes
- run relevant checks after scoped edits
- report files changed, checks run, and remaining blockers
- do not create extra planning or memory files unless explicitly asked

## Validators / Tests

- validators protect the current system, not old UI
- do not weaken validators to silence errors
- update validators if they enforce old UI assumptions
- after every big refactor/task/phase, run `system:full` and `build` — both must be clean

Workspace tasks: `system:quick`, `build`, `system:full`, `system:regen` (if explicitly needed).

## What Not To Create Unless Asked

- prompt files
- MCP configs
- scratch or planning docs
- nested `AGENTS` files
- custom agents
- broad new architecture docs

## Self-Improvement Rule

Do not suggest `AGENTS.md` updates during normal task reports.

Only suggest an update when:

- the same confusion happens more than once
- the current instruction causes wrong behavior
- a missing rule creates real implementation risk
- or the user explicitly asks to improve workspace instructions

When suggesting: keep it short, explain the reason. Do not edit `AGENTS.md` unless the current prompt explicitly allows it.


# MindWP Repo Agent Instructions

## What MindWP Is

- systems-first digital infrastructure consultancy for service businesses
- not generic web design
- not SaaS
- not tool reseller
- not template website business
- not decorative agency site
- primary goal: qualified enquiries and conversion through structured systems

## Core Architecture

- CONTENT → PATTERN → COMPONENT → VARIANT / CONTROL → RENDER
- avoid old render-first drift
- content owns business meaning
- pattern owns section job
- component owns structure
- renderer maps prepared data
- components render only

## Source of Truth

Order:

1. current scoped user prompt
2. `docs/ui/system-xray.md` for system refactor, component, and page mapping work
3. `docs/core/*` for business, writing, content, conversion, design, and system rules, plus `docs/ops/WORKFLOW.md` for workflow rules
4. current code
5. `AGENTS.md` as stable background guidance

Conflict handling:

- For minor implementation differences, follow the current scoped prompt and current code, make the smallest safe choice, and mention the assumption in the final report if useful.
- For material conflicts affecting business positioning, public copy, page mapping, component ownership, data contracts, validators, or irreversible edits, inspect the relevant files before editing that part.
- Do not stop the whole task for small naming, formatting, import, or local implementation differences.

## New Chat Rule

Every new Copilot chat should:

- read the current user prompt carefully
- identify whether the task is planning, implementation, review, or setup
- read only the relevant docs and files for that task
- avoid broad repo scans unless the prompt asks for repo-wide work
- produce a short plan before large edits
- execute within the scoped prompt only

## Execution Discipline

- bulk work is allowed when the prompt defines the scope
- inside bulk work, execute task-by-task
- do not patch unrelated systems in parallel
- state intended edits before applying large changes
- run relevant checks after scoped edits
- report files changed, checks run, and remaining blockers
- do not create extra planning or memory files unless explicitly asked

## Content Rules

- read `WRITING.md` and `CONTENT.md` before writing or reshaping public content
- existing data and content is the first source
- write only operational, specific, non-hype copy
- do not invent fake metrics, testimonials, guarantees, proof, rankings, or client results
- do not add service capabilities not supported by the business
- GoHighLevel is internal and white-label and must not be mentioned publicly

## UI / CSS Rules

- UI must feel like operational infrastructure, not generic SaaS or template design
- use the four-layer CSS system: `foundation.css` → `framework.css` → `primitives.css` → `components.css`
- no inline styles
- no random hardcoded values
- no decorative dashboards
- accent color is a system signal, not decoration
- avoid repeated card-grid sections
- `RelatedContentSection` belongs after `PrimaryCTASection` unless a scoped prompt says otherwise

## Validators / Tests

- validators and tests should align after runtime contracts exist
- do not make validators enforce a system that is not implemented yet
- use workspace tasks when possible: `system:quick`, `build`, `system:full`, and `system:regen` if explicitly needed
_ But After Every big refactor/Task/Phase run system:full and build and make sure both are clean.

## What Not To Create Unless Asked

- prompt files
- MCP configs
- random memory or scratch docs
- nested `AGENTS` files
- custom agents
- broad new architecture docs

## Self-Improvement Rule

Do not suggest `AGENTS.md` updates during normal task reports.

Only suggest an instruction update when:

- the same confusion happens more than once
- the current instruction causes wrong behavior
- a missing rule creates real implementation risk
- or the user explicitly asks to improve workspace instructions

When suggesting an update:

- keep it short
- explain the reason
- do not edit `AGENTS.md` unless the current prompt allows instruction updates

# Website Rebuild Plan — MindWP

This file is the broad rebuild map for the MindWP website.

It is not a page plan, not a prompt library, and not a place to paste full strategy. Page-specific rebuild direction belongs in each renderer comment or in the direct task prompt. Working memory, current notes, and session handoff belong in `docs/Planning/Website-memory-and-plan.md`.

## Purpose

Use this file to keep the rebuild phases clear:

- what Claude should understand first
- what Claude should inspect next
- when design planning happens
- when CSS, tokens, components, and base UI can be improved
- when AI workflow docs should be optimized
- when page rebuilds begin
- what each phase should output

The goal is efficient brain transfer without loading every document into every prompt.

## Current Rebuild Principle

The rebuild hierarchy is:

```text
BUSINESS REALITY
→ BUYER / PRACTICE RECOGNITION
→ PAGE INTENT
→ PATTERN
→ SECTION DESIGN
→ JSX
→ SELF-CHECK AGAINST PHASE ACCEPTANCE CRITERIA
→ REVISION IF NEEDED
→ SYSTEMIZATION AFTER APPROVED PAGES PROVE THE PATTERN
```

In this plan, approval does not mean Claude should stop and ask the user about every small decision. Approval means the work should satisfy the current phase checklist and the page/business argument. Claude should revise its own work until it meets the phase standard. User approval is required only for major direction changes, design-system direction, broad shared-component/token/CSS changes outside the active baseline window, or when the user explicitly asks to review before proceeding.

The codebase should support the page argument. Existing renderers, data shape, reusable components, validators, and old section order are context only. They should not control the rebuild when business meaning needs a stronger page.

Claude should think in this order:

```text
What does the business meaning require?
What section pattern explains it best?
What JSX, components, tokens, and CSS need to exist to express it well?
```

This does not mean Claude should ask one small question at a time. Claude should think through the full phase, simulate how the design and code could work, propose a practical plan, and then wait for approval when the phase requires user review.

## Documentation Ownership

```text
Core docs
= stable business, offer, content, writing, conversion, design, graph, architecture, and execution truth.

CLAUDE.md
= AI routing file. It should tell Claude what to read and how to work without repeating all core docs.

.claude/skills
= short task workflows for planning, rebuilding, reviewing, design-system audit, and related tasks.

docs/Planning/Website-Rebuild.md
= broad rebuild phases, approved phase status, design-system baseline direction, and high-level rebuild sequence.

docs/Planning/Website-memory-and-plan.md
= working memory, session notes, current decisions, repo discoveries, and next-session handoff.

Renderer top comments
= page-specific rebuild briefs and section direction.
```

## Output Rules For Claude

Default output should be summary-style.

Claude should not paste full file contents or large code blocks into chat unless the user explicitly asks for them. The code should live in the files. The chat response should summarize:

- what was read
- what was decided
- what was changed
- why it matters
- validation results
- what needs approval or review

Planning outputs may be longer when the user needs to review a design or rebuild direction, but they should still be readable and decision-focused.

## Phase 1 — Core Understanding Only

### Goal

Understand MindWP as a business and positioning system before touching code.

### Read

- `CLAUDE.md`
- `docs/core/FOUNDATION.md`
- `docs/core/OFFER-ARCHITECTURE.md`
- `docs/core/WRITING.md`
- `docs/core/CONTENT.md`
- `docs/core/CONVERSION.md`

### Do Not Do

- Do not audit the codebase.
- Do not update planning memory.
- Do not update rebuild docs.
- Do not edit source files.
- Do not create page plans.
- Do not rebuild pages.
- Do not read design-system/code/component files yet.

### Output

Summary only:

- current MindWP business/positioning understanding
- what should guide buyer/practice recognition and public language
- what must not control the rebuild
- any contradictions, gaps, weak positioning, or strategic challenges noticed in the non-design core docs

Claude may challenge or stress-test the positioning in summary form only. The user decides what to accept before any docs are updated.

## Phase 2 — Repo And System Understanding

### Goal

Understand how the current source is organized without letting old code, old data shape, or old renderer order become authority.

### Read

- `docs/core/SYSTEM-ARCHITECTURE.md`
- `docs/core/SYSTEM-RULES.md`
- `docs/core/GRAPH.md`
- `README.md`
- relevant source folders:
  - `src/app`
  - `src/domains`
  - `src/components`
  - `src/styles`
  - `src/global`
  - `config`
  - `scripts`

### Do

- Map the repo at a high level.
- Identify what controls routes, data, renderers, components, styles, graph behavior, CTA behavior, and validation.
- Identify reset-base limitations.
- Identify where old source should be treated as context only.

### Do Not Do

- Do not rebuild pages.
- Do not rewrite renderer content.
- Do not overfit the future design to existing data contracts.

### Output

Summary only:

- repo map
- current reset-base constraints
- source areas that matter for rebuild
- source areas that should not control design decisions

## Phase 3 — Design Direction And Website Experience Plan

### Goal

Before changing CSS or components, Claude should form a clear design point of view for the rebuilt MindWP site.

This is one of the most important phases. Claude should not blindly update CSS, colors, tokens, or components. It should first read the design direction, inspect the current baseline, think through what kind of website MindWP should become, simulate how the first pages could look and work, and propose a practical design plan for review.

### Read / Inspect

- `docs/core/DESIGN.md`
- first-three-page renderer comments where useful:
  - homepage renderer comment
  - Smart Website Systems renderer comment
  - Local SEO Authority renderer comment
- `docs/core/WRITING.md`
- `docs/core/CONVERSION.md`
- `docs/Planning/Website-Rebuild.md`
- existing styles and components only enough to know the current baseline:
  - Tailwind config
  - global CSS
  - token/style files
  - `HeroFrame`
  - `SectionShell`
  - `DecisionPanel`
  - `FAQSection`
  - key surface/card/layout primitives
  - reveal/motion classes

### Plan

Claude should propose a compact but useful design plan covering:

- overall visual personality
- color and surface direction
- typography rhythm
- spacing and section rhythm
- background and gradient direction
- border, glow, shadow, and depth usage
- icon style and restraint
- motion/reveal behavior
- section pattern library direction
- interactive section ideas
- proof/showcase treatment
- home-service and clinic/practice visual treatment
- homepage, Smart Website Systems, and Local SEO differences
- what needs to change in CSS/tokens/components to support the plan
- what Claude expects the homepage experience to feel like before coding it
- what Claude expects the SWS and Local SEO pages to feel like as distinct service-page standards
- what should be added now versus avoided until after the first three pages
- what acceptance checklist Phase 4 should use before implementation is considered good enough

### Do Not Do

- Do not rebuild pages.
- Do not implement CSS or component changes yet unless explicitly approved.
- Do not paste full files into chat.

### Output

A design direction proposal that is detailed enough for the user to review, revise, and approve before base implementation.

The proposal should explain what kind of website Claude intends to build: visual personality, surfaces, gradients/backgrounds, section rhythm, interactivity, icons, proof treatment, motion, and component/token needs. It should be summary-style in chat, with fuller planning notes saved in `docs/Planning/` if useful.

## Phase 4 — Design-System Base Implementation

### Goal

After the design direction is approved or clearly accepted for implementation, improve the base CSS, tokens, shared components, and visual primitives only where needed to support the first rebuild pages.

During Phases 1–5 and the first-three-pages baseline window, repo-wide CSS/component/token changes are allowed when they clearly support the approved design direction. The website is not published yet, so direct improvement is preferred over preserving weak legacy constraints.

### Possible Edits

- global CSS
- Tailwind/token/style files
- surface utilities
- typography rhythm
- spacing/radius/shadow/color tokens
- `HeroFrame` variants
- `SectionShell` variants
- `DecisionPanel` support
- `FAQSection` support
- reusable layout/surface primitives
- calm reveal/motion usage
- safe validators or advisory checks if genuinely useful

### Validator Rule

Hard validators should protect only structural drift, such as:

- removed public route families
- removed public feature slugs
- forbidden public platform names
- Revenue Recovery misuse
- public topic hubs
- portfolio/system route drift

Advisory checks may warn about generic copy, visual repetition, CTA nuance, or section-pattern concerns, but should not block Claude’s page design freedom.

### Do Not Do

- Do not rebuild homepage yet.
- Do not rewrite service page content.
- Do not create restrictive data models before pages are proven.
- Do not make shared components control the design.
- Do not add variants, colors, tones, or validators without a clear design/business reason.

### Output

Summary only:

- changed files
- what visual/component capability was added
- why it supports homepage/SWS/Local SEO
- any shared design-system implications
- validation results
- docs updated after execution where useful
- phase checklist result and any self-revisions made

## Phase 5 — AI Workflow And Documentation Optimization

### Goal

After the design direction and base implementation are clearer, optimize the AI brain-transfer system so future sessions can work efficiently without context clutter and without needing long repeated prompts.

### Possible Edits

- `CLAUDE.md`
- `.claude/skills/**`
- `docs/Planning/Website-Rebuild.md`
- `docs/Planning/Website-memory-and-plan.md`
- optional focused planning docs inside `docs/Planning/`

### Update Direction

- `CLAUDE.md` should route Claude to the right docs and workflows.
- Skills should stay short and task-specific.
- Planning docs should hold phase status and active rebuild memory.
- Renderer comments should remain page-specific rebuild briefs.
- Core docs should not be duplicated into routing docs.

### Do Not Do

- Do not bloat `CLAUDE.md`.
- Do not paste full strategy into skills.
- Do not duplicate core docs.
- Do not rebuild pages in this phase.


### Output

Summary only:

- docs updated
- workflow clarified
- what future Claude sessions should read per task type
- how context clutter was reduced
- docs updated after execution
- phase checklist result and any self-revisions made

## Phase 5.5 — Tooling, Dependency, And Skill Proposal

### Goal

After the AI workflow docs are clearer, Claude may review whether the rebuild would benefit from any tooling, dependency, Playwright coverage, scripts, checks, skills, or local workflow improvements.

This is a proposal phase only. Claude must not install dependencies, add packages, change package-manager setup, or introduce new tools without user approval.

### Possible Review Areas

- dependencies that would genuinely improve UI implementation or validation
- packages that should not be added because existing CSS/Tailwind/React is enough
- Playwright route or visual smoke coverage
- validation scripts
- advisory checks
- Claude skills
- local dev workflow
- screenshot/review workflow
- design-system review helpers

### Do Not Do

- Do not install packages.
- Do not run package installation commands.
- Do not add new libraries without approval.
- Do not add heavy validators that block page design freedom.
- Do not add tooling because it is interesting; only propose what supports the rebuild.

### Output

Summary-style proposal only:

- recommended installs or tools, if any
- why each one is needed
- what to skip
- risks or maintenance cost
- exact commands only if the user later approves
- what Claude can do without adding anything

## Baseline Window Rule

Phases 1–5.5 plus the Homepage, Smart Website Systems, and Local SEO Authority rebuilds are the active baseline window.

During this window, Claude may propose and implement broader improvements to CSS, tokens, shared components, visual primitives, and workflow docs when they support the approved direction. It should still report those changes clearly.

After the first three pages are rebuilt and approved, shared design-system changes should become stricter. New pages may still add local page-owned JSX, section-specific styling, or small supporting CSS when justified, but Claude should not keep adding new global colors, tones, variants, or component behavior without a clear reason or explicit user approval.

## Phase 6 — Homepage Rebuild

### Goal

Rebuild the homepage as the first major design/content proof page.

### Read

- `CLAUDE.md`
- `docs/Planning/Website-Rebuild.md`
- `docs/Planning/Website-memory-and-plan.md`
- `src/screens/Homepage.tsx`
- `src/domains/home/data/homepage.ts`
- homepage renderer top comment
- relevant components/styles

### Direction

- Long-form homepage.
- Business/practice recognition first.
- Website as public control point / practice front door.
- Connected handling around the website.
- Page-owned JSX allowed.
- Data file stays limited.
- Old renderer order is context only.
- Content and design move together.
- Shared component/token changes must be reported separately.

### Output

Summary only:

- homepage section arc
- changed files
- visual decisions
- page-owned JSX decisions
- shared component/token/CSS changes if any
- validation results
- planning/memory docs updated if useful
- phase checklist result and any self-revisions made

## Phase 7 — Smart Website Systems Rebuild

### Goal

Rebuild the first service-page standard.

### Read

- approved homepage
- `docs/Planning/Website-Rebuild.md`
- `docs/Planning/Website-memory-and-plan.md`
- `src/domains/services/renderers/SmartWebsiteSystemsRenderer.tsx`
- SWS renderer top comment
- relevant data/components/styles

### Direction

Smart Website Systems owns the website decision:

- website as public control point / practice front door
- service/treatment/procedure clarity
- trust and proof placement
- enquiry/booking paths
- normal website vs website system
- structure first, optimization second
- website-to-handling connection
- implementation pathways under Smart Website Systems

### Output

Summary only:

- section arc
- changed files
- visual decisions
- how it differs from homepage
- shared component/token/CSS changes if any
- validation results
- planning/memory docs updated if useful
- phase checklist result and any self-revisions made

## Phase 8 — Local SEO Authority Rebuild

### Goal

Rebuild the second service-page standard and prove a distinct visual language from SWS.

### Read

- approved homepage
- approved SWS page
- `docs/Planning/Website-Rebuild.md`
- `docs/Planning/Website-memory-and-plan.md`
- `src/domains/services/renderers/LocalSEOAuthorityRenderer.tsx`
- Local SEO renderer top comment
- relevant data/components/styles

### Direction

Local SEO Authority owns:

- local discovery
- find -> verify -> trust -> contact/book
- Google Business Profile and website alignment
- service-area/practice relevance
- local proof and trust signals
- maintained local authority
- no ranking hype

### Output

Summary only:

- section arc
- changed files
- visual decisions
- how it differs from homepage and SWS
- shared component/token/CSS changes if any
- validation results
- planning/memory docs updated if useful
- phase checklist result and any self-revisions made

## Phase 9 — Remaining Primary Service Pages

### Pages

- Lead Response & Handling Systems
- Follow-Up & CRM Systems
- Reputation & Review Systems

### Direction

Each page should read its renderer top comment and stay within its owning system:

- Lead Response & Handling = first response, acknowledgement, routing, and first handoff.
- Follow-Up & CRM = owner, status, next step, reminders, quote/consultation follow-up, repeat/rebook paths.
- Reputation & Review Systems = review request timing, feedback routing, response ownership, proof capture, and trust support.

### Output

Summary only:

- section arc
- changed files
- visual decisions
- how each page differs from approved pages
- validation results

## Phase 10 — Review, Systemize, And Extract

### Goal

After major pages are rebuilt and approved, extract only what has proven stable.

### Possible Work

- reusable components
- data structures
- metadata contracts
- graph rules
- CTA rules
- stricter validators
- design-system documentation
- approved section pattern library

### Rule

Do not systemize before pages prove the design and content direction.

## Prompt Strategy

The rebuild should run in a small number of larger Claude prompts, not dozens of tiny tasks.

Recommended sequence:

1. Prompt 1: Tell Claude to read this file and run Phase 1 only — core understanding summary, no edits.
2. Prompt 2: Run Phases 2 and 3 — repo understanding plus design direction proposal. Save useful design planning notes in `docs/Planning/` if helpful. Wait for user review before Phase 4 implementation.
3. Prompt 3: Run Phase 4 — implement approved design-system base changes, run checks, and update docs after execution.
4. Prompt 4: Run Phase 5 — optimize AI workflow docs and planning memory after base direction is clear.
5. Prompt 5: Run Phase 5.5 — propose any useful tooling, dependency, Playwright, validation, or skill additions. Do not install anything until the user approves.
6. Prompt 6: Run Phase 6 — rebuild homepage.
7. Prompt 7: Run Phase 7 — rebuild Smart Website Systems.
8. Prompt 8: Run Phase 8 — rebuild Local SEO Authority.

If the same Claude terminal still has healthy context, continue into remaining service pages. If context becomes heavy, start a new terminal and let the documentation system transfer the brain.

## New Claude Session Pattern

For future sessions, do not paste the full positioning again. Use the documentation system:

```text
Read CLAUDE.md first.
Then read the task-relevant docs it points to.
Then read docs/Planning/Website-Rebuild.md and docs/Planning/Website-memory-and-plan.md.
Then read the renderer comment for the page being rebuilt.
Treat old renderers/data shape as context only.
Use business meaning to decide section pattern and JSX.
```
# MindWP Design Rebuild Guide

Design-only guidance for rebuilding MindWP pages after the core docs have already been read.

This doc does not define positioning, offer architecture, page roles, system ownership, copy strategy, graph behavior, source architecture, or route structure. Those decisions live in the core docs.

Use this guide only after reading the relevant core docs and understanding the page strategy.

## Purpose

The purpose of this guide is to help future page rebuilds produce better section design.

The goal is not to tell the builder what MindWP is. The core docs do that.

The goal is to help the builder turn the approved page strategy into calm, premium, operational sections that show the buyer's business reality clearly.

## Read Before This Guide

Before using this guide, read the relevant docs for the task:

- `docs/core/FOUNDATION.md` for identity, buyer truth, public path, and build philosophy.
- `docs/core/OFFER-ARCHITECTURE.md` for active systems and ownership.
- `docs/core/CONTENT.md` for page role and funnel behavior.
- `docs/core/WRITING.md` for public language.
- `docs/core/CONVERSION.md` for CTA posture.
- `docs/core/DESIGN.md` for full visual direction.
- `docs/core/SYSTEM-ARCHITECTURE.md` and `docs/core/SYSTEM-RULES.md` when source structure or route ownership matters.

This guide is a design companion, not a replacement for those docs.

## Active Rebuild Flow

Use the existing MindWP flow:

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

This guide mainly covers:

```text
PATTERN -> SECTION DESIGN -> JSX -> APPROVAL
```

Do not use this guide to skip buyer recognition or page intent. Those must already be understood from the core docs and page-specific planning notes.

## Design Goal

Every rebuilt page should feel:

- calm
- premium
- practical
- operational
- service-business aware
- conversion-focused
- commercially serious
- clear before clever
- specific before decorative

The design should show what is happening in the business, not just decorate the page.

A strong MindWP section makes one business reality easier to see.

A weak MindWP section fills space with cards, icons, dashboards, process steps, or abstract diagrams that do not clarify the buyer's situation.

## Design Context

MindWP should look and feel like a calm, premium, operational business system — not a generic agency website, SaaS dashboard, template site, or flashy AI/automation brand.

The design should make the buyer feel:

- this business understands how service companies actually lose work
- the page is showing real operating problems, not decorative marketing ideas
- the system is practical and commercially serious
- the website and handling path are connected without feeling technical
- the brand is premium because it is clear, controlled, and specific

The visual direction should be:

- dark controlled base
- strong but quiet contrast
- precise typography hierarchy
- spacious sections
- calm accent usage
- visible operating paths
- cards and panels with business meaning
- subtle depth, borders, gradients, and glows only when they clarify hierarchy
- custom page-owned visual surfaces where the section needs a specific argument

Avoid making MindWP look like:

- a bright marketing agency template
- a generic web design portfolio
- a SaaS product dashboard
- a crypto/AI startup landing page
- a low-cost WordPress agency
- a local SEO spam site
- a generic automation consultant
- a plugin/tool reseller

## Design System And Token Mindset

MindWP already has design foundations such as tokens, shared styles, Tailwind utilities, `mw-*` classes, layout primitives, and reusable components.

Do not ignore the existing base.

Before changing styles, inspect the existing design files such as:

- token files
- global CSS
- Tailwind config
- shared layout primitives
- component styles
- existing `mw-*` classes
- reusable components like `HeroFrame`, `SectionShell`, `DecisionPanel`, and `FAQSection`

Use the existing visual language where it supports the new design direction.

Change tokens or CSS only when the current base cannot express the approved design standard.

Good reasons to update tokens/CSS:

- section rhythm needs a reusable spacing scale
- panels need a consistent premium surface treatment
- typography hierarchy is inconsistent
- border, glow, shadow, or background treatment needs system-wide alignment
- repeated visual patterns emerge after the first approved pages
- the current tokens make pages feel generic, flat, cramped, or visually inconsistent

Bad reasons to update tokens/CSS:

- because one section needs a one-off effect
- because a generic template style looks nicer
- because a component is easier to force than redesign
- because the old page used a class
- because the builder wants to redesign the whole system before proving pages

## Design Base Workflow

For the first three pages — Homepage, Smart Website Systems, and Local SEO Authority Systems — treat the design system as flexible but not final.

Workflow:

1. Read the core docs and understand the page strategy.
2. Inspect existing tokens, CSS, shared components, and visual primitives.
3. Build the page using existing base where it works.
4. Use page-owned JSX for custom visual arguments.
5. Identify repeated visual needs across the first three pages.
6. Only then update tokens, CSS, or reusable primitives if the need is stable.
7. After the first three pages are approved, document the emerging design standard.

Do not start by redesigning the entire token system before the pages prove the visual direction.

Do not let the existing token system block a stronger page design.

The rule is:

> Existing styles are the starting base, not the design ceiling.

## Desired Visual Standard

The first three rebuilt pages should establish a visual standard that feels:

- more custom than a typical agency site
- more practical than a SaaS landing page
- more premium than a freelancer portfolio
- more grounded than an AI automation brand
- more operational than a normal WordPress service site

The design should use custom visual sections to show business logic:

- how work slips away
- where the website controls the path
- where local trust breaks
- where response or follow-up loses ownership
- where proof is not captured
- what changes after the system is clear


A section is successful when the buyer can understand the business point before reading every word.


## Visual Concept Library

These concepts were extracted from early MindWP visual experiments and current page explorations. They are not final sections, not fixed layouts, and not JSX to copy.

Use them as design logic Claude may adapt, combine, redesign, or replace when they help explain the approved page strategy.

Do not copy old JSX or old section order. Copy the design logic only: signal, leak, ownership, contrast, path, layer, scenario, proof, or diagnostic next step.

### Operational Signal Surface

A panel or visual surface showing real business signals with status states.

Use for:

- hero visuals
- leak diagnosis
- response status
- follow-up visibility
- local trust signals
- review/proof states

Core idea:

> Show the buyer what is happening in the business right now.

Good signals might include:

- local search activity
- service page visit
- form enquiry
- missed call
- quote follow-up due
- review request pending
- proof not captured

Avoid turning this into a fake analytics dashboard, SaaS UI, or random metric card group.

### Layered Website System Surface

A stacked visual showing the visible website surface, the handling layer underneath, and the system/foundation layer below.

Use for:

- Homepage
- Smart Website Systems
- implementation service pages

Core idea:

> The website is what visitors see, but the structure underneath decides whether enquiries are captured, routed, followed up, and improved.

This should feel like business layers, not backend architecture or a technical stack diagram.

### Dominant Leak Moment Map

A sequence of business moments where one or more weak points are visually highlighted.

Example moments:

- discovery
- trust
- website visit
- contact
- response
- follow-up
- review
- proof

Core idea:

> Show the business path, then make the weak moment visually obvious.

This is a diagnostic map, not a numbered process section. Do not make every page a repeated step-by-step process.

### Scattered vs Connected Contrast Panel

A contrast surface showing disconnected activity on one side and a connected operating path on the other.

Use for:

- Smart Website Systems
- Local SEO Authority Systems
- Follow-Up & CRM Systems
- implementation service pages

Core idea:

> The same pieces may already exist, but they work differently when they are connected.

The visual can change per page. Do not repeat the exact same two-card design everywhere.

### Local Coverage / Signal Map

A map-like, grid-like, or signal-board visual showing local trust, service-area relevance, proof, listing/profile signals, and contact readiness.

Use mainly for:

- Local SEO Authority Systems
- industry pages where local search behavior matters
- homepage only when reframed as whole-system context

Core idea:

> Local visibility is not just ranking. It is a trust path from find -> verify -> trust -> contact.

Avoid ranking dashboards, keyword charts, SEO report screenshots, or Google Business Profile-only visuals.

### Maintenance / Compounding Ring

A circular, orbital, or loop-style visual where items sit around a center.

Use only when the page needs to show rhythm, maintenance, repeated improvement, or compounding trust.

Good uses:

- local visibility maintenance
- review/proof rhythm
- ongoing website improvement
- service-area signal upkeep

Core idea:

> Some systems are maintained over time, not installed once.

Important warning:

This is not a default process-step pattern. Do not use the same ring design on every page. The ring is a visual concept, not a required component. Items, styling, spacing, labels, and structure should change per page.

### Illustrative Scenario Board

A story-style visual showing a realistic business situation and what changes when the path is clearer.

Use for:

- homepage scenario sections
- service pages
- case-study previews
- industry pages

Core idea:

> Make the system feel practical through a working-day example.

Rules:

- no fake client proof
- no fake numbers
- no unsupported claims
- clearly label illustrative scenarios if they are not real case studies
- use real proof only when real

### Connected Handling Path Cards

A horizontal, staged, or grouped visual showing what happens after contact.

Example states:

- enquiry arrives
- first response happens
- source/context is recorded
- owner sees it
- follow-up happens
- review/proof request goes out

Use for:

- Lead Response & Handling Systems
- Follow-Up & CRM Systems
- homepage connected-handling sections
- service-page boundary sections

Core idea:

> The enquiry does not just arrive. It moves into ownership.

This should not become a SaaS workflow diagram or backend automation chart.

### Dark Diagnostic CTA Panel

A focused CTA surface with a problem reminder, what MindWP will review, a calm primary action, and optional checklist/context support.

Use for final or major diagnostic CTA moments.

Core idea:

> The next step feels like a useful review, not a sales push.

The panel should stay calm, premium, and specific. It should not become a loud sales banner.

## Images, Illustrations, And Background Assets

MindWP pages do not need to be illustration-heavy, but selective visual assets can help the page feel more custom, premium, and memorable.

Use images or illustrations only when they support the section argument.

Good uses:

- one strong custom illustration or image-led surface on a page
- one or two subtle background image treatments where they improve depth and atmosphere
- abstract operational illustrations that show paths, ownership, signals, or connected moments
- tasteful service-business context imagery when it feels specific and not stock-generic
- background textures, gradients, grids, maps, or blurred surfaces that support the premium operating feel

Avoid:

- random stock photos
- smiling handshake / office meeting clichés
- generic laptop mockups
- fake dashboard screenshots
- AI robot illustrations
- decorative images that do not clarify the business point
- image-heavy pages that feel like a template
- using illustrations to hide weak content

A good rule:

> Use imagery when it helps the buyer understand the business reality faster or makes the page feel more custom without weakening clarity.

For the first three pages, it is acceptable for each page to have one primary custom visual/illustration section and one or two subtle background treatments if they strengthen the design.

Examples:

- Homepage: operating path illustration, leakage surface, or website-control-point visual.
- Smart Website Systems: website-as-control-point illustration or weak-site vs connected-site contrast.
- Local SEO Authority: local find-verify-trust-contact path, service-area signal map, or local trust surface.

Background images should be subtle and controlled. They should not reduce readability or make the page feel busy.

## Component Extension Freedom

Claude may inspect and improve shared components if the approved page design exposes a real limitation.

Important components to inspect before major page rebuilds:

- `HeroFrame`
- `SectionShell`
- `DecisionPanel`
- `FAQSection`
- shared buttons/actions
- shared card/panel primitives
- token/style files that affect these components

Claude is allowed to:

- add a new `HeroFrame` variant
- improve the custom visual slot behavior
- add optional `className` support where missing
- add a new `SectionShell` variant
- add optional section background / tone / density props
- improve spacing, container, or visual rhythm when needed
- add custom classes for specific page sections
- create page-local wrappers around shared components
- update tokens or CSS if repeated page needs prove the change

Claude should not assume existing components are untouchable.

The existing component system is the starting base, not a prison.

However, changes to shared components should be made carefully:

- do not break existing pages unnecessarily
- prefer additive variants over destructive rewrites
- keep defaults stable unless a site-wide improvement is intentional
- use page-local JSX for experimental patterns first
- extract or generalize only after a pattern proves useful

Good component-change reasons:

- the current hero cannot support the required page-specific visual
- sections need more controlled background treatments
- repeated page patterns need a consistent shell variant
- the current component forces generic card layouts
- the design standard needs better spacing, surface, or hierarchy support

Bad component-change reasons:

- changing components before understanding the page
- adding variants for one tiny one-off issue
- making every page look more complex
- replacing proven primitives with trendy effects
- redesigning the whole component system before the first pages are approved

Use this judgment:

> If the design needs freedom, start page-local. If the need repeats across the first three pages, improve the shared base.

## Token/CSS Update Guidance

When updating tokens or shared styles, prefer small, intentional system improvements.

Possible areas to refine after visual direction is proven:

- background layers
- section spacing scale
- panel radius and border treatment
- subtle glow/accent rules
- typography sizing and line-height
- card/panel density
- surface hierarchy
- grid rhythm
- CTA treatment
- diagnostic panel styling
- visual map styling
- status/signal styling

Avoid global changes that make every page louder, brighter, or more decorative.

MindWP should stay calm and controlled.

## Claude Design Mindset

When Claude rebuilds a page, it should think like a senior product/web designer working from strategy.

It should not ask:

- which component can I reuse fastest?
- how many cards does this section need?
- what did the old renderer do?
- how can I make this look trendy?

It should ask:

- what business reality must become visible here?
- what is the buyer supposed to recognise?
- what visual shape best explains this point?
- does this section feel specific to MindWP?
- does the design feel calm, premium, and operational?
- does the page avoid agency, SaaS, AI, SEO, and tool-reseller drift?

Claude may improve the base design system if the page exposes a real design-system limitation, but it should not over-engineer shared tokens before the first pages are approved.

## How To Think Before Designing A Section

Before designing any section, answer:

1. What should the buyer recognise here?
2. What business moment does this section make visible?
3. What should become clearer after this section?
4. What visual pattern best explains the point?
5. What should the next section feel easier to understand because of this one?

Do not start from:

- component name
- card count
- old renderer order
- existing data shape
- generic section pattern
- available reusable component

Start from the business point the section must make.

## Existing Page Rule

Existing pages may be reviewed for:

- useful ideas
- buyer problems
- warnings
- mental models
- visual clues
- implementation constraints

Existing pages must not dictate:

- final section order
- renderer structure
- component choice
- page data shape
- final copy
- final layout
- final visual pattern

Preserve useful intent, not old structure.

## Component Usage

Use existing components where they help the approved section.

Important existing building blocks include:

- `HeroFrame`
- `SectionShell`
- `DecisionPanel`
- `FAQSection`
- `Button`
- `SignalDot`
- `StatusBadge`
- `InlineText`
- `Accordion`
- `Tabs`

These components are useful tools, not gates.

Do not force a section into a generic card grid or old component shape just because a component exists.

## Page-Owned JSX Rule

While proving a rebuilt page, use page-owned JSX freely.

Allowed:

- page-owned content
- local arrays
- page-local helper components
- repeated JSX
- Tailwind utilities
- existing `mw-*` and token classes
- custom layouts inside `SectionShell`
- custom visuals inside `HeroFrame`

Use page-owned JSX for:

- leak maps
- operating paths
- connected-handling surfaces
- signal boards
- before/after panels
- scenario boards
- fit filters
- ownership/status visuals
- website-as-control-point maps
- local trust paths

Extract reusable components and data only after the page is approved.

## Content Placement During Rebuild

During early page rebuilds, do not prematurely force all section content into data files.

For the homepage and first primary service pages:

- Hero content can remain in the page data file when the existing `HeroFrame` expects it.
- Final `DecisionPanel` content can remain in the page data file when useful.
- `FAQSection` content can remain in the page data file when useful.
- Main custom section content can live directly inside the render JSX while the design is being proven.

After the page is approved, stable content groups may be extracted into domain data.

## Preferred Design Patterns

Choose the pattern that explains the business point.

Useful MindWP patterns:

- leak map
- connected-handling surface
- website-as-control-point map
- find-verify-trust-contact path
- enquiry-to-handling path
- operating map
- signal board
- before/after panel
- weak website vs connected website contrast
- local signal board
- service-area relevance map
- implementation pathway panel
- priority map
- fit filter
- proof stack
- scenario board
- ownership table
- trust path
- diagnostic lane map

These are possible section shapes, not mandatory components.

## Pattern Guidance

### Leak Maps

Use when the page needs to show where work slips away.

Good leak moments:

- search to trust
- website visit to enquiry
- enquiry to response
- response to follow-up
- completed work to review
- proof to repeat value

Make the leak specific. Do not create an abstract marketing funnel.

### Connected-Handling Surfaces

Use when the page needs to show what happens after contact.

Show:

- where calls/forms/messages start
- where they land
- who or what owns the next step
- what should happen next
- what fails when the path is unclear

Do not make this look like a SaaS dashboard or backend tool diagram.

### Website-As-Control-Point Maps

Use when the page needs to show that the website is not just a brochure.

Show how the website connects:

- search
- trust
- service clarity
- enquiry capture
- response
- follow-up
- reviews
- proof

This is especially useful for homepage and Smart Website Systems.

### Find-Verify-Trust-Contact Paths

Use when local visibility or industry context matters.

Show the path from local discovery to verification, trust, and contact.

Do not turn this into ranking dashboards or SEO hype.

### Before/After Panels

Use when the section must show operating change.

Before states should be specific:

- forms sit in inboxes
- calls are missed
- quotes depend on memory
- reviews are not requested
- service pages do not clarify the work

After states should be equally specific:

- enquiries land somewhere useful
- response path is visible
- every enquiry has owner/status/next step
- review requests happen at the right time
- service pages make decisions easier

Do not use vague before/after claims like “chaos to growth.”

### Signal Boards

Use when multiple visible signs point to the same system problem.

Good signals:

- unanswered forms
- scattered messages
- no quote follow-up
- weak service pages
- inconsistent review requests
- unclear local trust signals

Every signal needs business meaning.

### Scenario Boards

Use when the page needs to feel grounded in service-business reality.

A scenario should show:

- what kind of business moment is happening
- where work usually slips
- what a clearer path would protect

Do not invent fake proof or fake client results.

### Fit Filters

Use when positioning needs protection.

A fit filter should clarify who the page is for without sounding arrogant.

Good fit filters help exclude:

- cheapest-package shoppers
- looks-only redesign buyers
- ranking-guarantee seekers
- tool-demo buyers
- AI hype buyers

## Hero Guidance

Use `HeroFrame` when possible for consistency.

The hero should:

- create recognition quickly
- open with business reality, not internal taxonomy
- use a page-specific visual
- avoid generic agency claims
- avoid tool/platform language
- avoid service catalog framing

The visual inside `HeroFrame` should be page-specific.

Examples:

- Homepage: operating path / leakage surface.
- Smart Website Systems: website-as-control-point visual.
- Local SEO Authority: find-verify-trust-contact path.
- Lead Response & Handling: first-response/routing surface.
- Follow-Up & CRM: owner/status/next-step board.
- Reputation & Review: completed-work-to-proof path.

## SectionShell Guidance

Use `SectionShell` as the wrapper for major sections when it helps spacing and rhythm.

Do not let `SectionShell` make every section feel identical.

Inside `SectionShell`, use custom JSX for the actual section argument.

Vary section rhythm with:

- full-width maps
- split surfaces
- asymmetric panels
- narrow explanation bands
- before/after comparisons
- scenario boards
- diagnostic panels
- fit filters

## DecisionPanel Guidance

Use `DecisionPanel` for strong diagnostic CTA moments when it fits.

Good final CTA panels should explain:

- what the buyer can send
- what MindWP will review
- what the next conversation will clarify
- what kind of business is a good fit

The CTA should feel useful, not pressured.

## FAQSection Guidance

Use `FAQSection` only when the page needs to answer real buyer hesitation.

Good FAQ topics:

- whether this is just a website redesign
- whether the buyer needs every system
- whether MindWP can work with an existing site
- what a system review looks at
- what happens after the first conversation

Do not include FAQ just because old pages had it.

## Visual Avoid List

Avoid:

- generic agency hero plus card grid
- repeated process steps on every page
- fake analytics
- SaaS dashboard imitation
- decorative code visuals
- glossy platform screens
- random charts
- icons without business logic
- builder-first implementation layouts
- technology cards as filler
- abstract systems stack before buyer recognition
- generic “services” card grids

## Review Checklist

After designing a page, check:

- Does the first screen create buyer recognition?
- Does each section make one business point clearer?
- Does the design show a real business state or operating change?
- Are page-owned custom sections used where generic cards would be weak?
- Are shared components helping rather than controlling the page?
- Does the page avoid generic agency/SaaS/tool patterns?
- Does CTA context explain why the next step is useful?
- Is proof real, clearly illustrative, or absent?
- Does the page feel calm, premium, and operational?
- Does the page avoid copying old renderer order?

## First Three Pages Standard

The first rebuild pass should focus on:

1. Homepage
2. Smart Website Systems
3. Local SEO Authority Systems

These three pages will define the first approved design standard.

After these pages are reviewed visually and strategically, update the docs if a better design standard emerges.

Do not force later pages to follow these three pages blindly, but use them as the first quality bar.
# DESIGN — MindWP

Authority for visual direction, UI/page rebuild guidance, section composition, visual concepts, token/CSS mindset, component design judgment, and page-owned visual design.

Design must make the business reality visible before it makes the system impressive. Offer ownership comes from [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md). Page roles come from [CONTENT.md](./CONTENT.md). Public language comes from [WRITING.md](./WRITING.md). CTA behavior comes from [CONVERSION.md](./CONVERSION.md).

This doc is the single authority for design rebuild guidance.

## Use This Doc

Use this when designing or reviewing:

- homepage sections
- service pages
- implementation service pages
- industry landing pages
- resource layouts
- hero sections
- visual maps
- comparison panels
- proof sections
- CTAs
- page-owned JSX
- shared visual primitives
- token, CSS, and component changes that affect page design

The purpose is not to enforce one layout. The purpose is to keep MindWP from drifting into generic agency layouts, SaaS dashboard imitation, template sameness, decorative tech visuals, SEO hype, AI/tool-reseller framing, or empty icon grids.

## Design Philosophy

MindWP design follows:

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

Design starts by asking what the buyer should see:

- where work is slipping
- where an enquiry lands
- who owns the next step
- what becomes visible
- what changes after the system is built
- how the website and connected handling path work together

Do not let a component library, old renderer, old section order, or data shape decide the page. Shared components are useful building blocks, not gates.

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

The design should make the buyer feel:

- MindWP understands how service companies actually lose work
- the page is showing real operating problems, not decorative marketing ideas
- the system is practical and commercially serious
- the website and handling path are connected without feeling technical
- the brand is premium because it is clear, controlled, and specific

A strong MindWP section makes one business reality easier to see. A weak section fills space with cards, icons, dashboards, process steps, or abstract diagrams that do not clarify the buyer's situation.

## Visual Taste

MindWP should feel practical, operational, calm, premium, business-aware, system-first, conversion-focused, credible, service-business specific, and commercially serious.

The visual tone should be controlled, dark, calm, and precise. Use contrast, spacing, hierarchy, and quiet detail to create confidence. Do not make the site loud to make it feel important.

Preferred qualities:

- dark controlled base
- strong but quiet contrast
- restrained accent usage
- precise typography hierarchy
- spacious sections
- sharp but not sterile panels
- visible operating paths
- visible connected-handling paths
- scannable operating states
- cards and panels with business meaning
- proof placed where it helps decisions
- section rhythm that changes shape as the argument moves
- subtle depth, borders, gradients, and glows only when they clarify hierarchy
- custom page-owned visual surfaces where the section needs a specific argument

Avoid making MindWP look like:

- a bright marketing agency template
- a generic agency split hero plus service grid
- a generic web design portfolio
- a SaaS product dashboard
- a crypto or AI startup landing page
- a low-cost WordPress agency
- a local SEO spam site
- a generic automation consultant
- a plugin or tool reseller
- a template site with interchangeable icon cards

## Operational Design Language

Visuals should show operating states, not abstract technology.

Strong MindWP visuals show:

- a missed call becoming a response path
- a form landing somewhere useful
- a quote moving from sent to followed up
- a completed job turning into a review request
- a local search visitor moving from find to trust to enquiry
- scattered messages becoming owner/status/next step
- a weak service page becoming a clearer decision path
- the website acting as a visible control point

Weak visuals show:

- a dashboard because the topic sounds technical
- a funnel because the topic sounds like marketing
- a timeline because the page needs a section
- a card grid because it is easy
- icons because the copy is too abstract
- a fake analytics screen to imply sophistication
- a backend tool diagram that public buyers should not have to decode

## Design System And Token Mindset

MindWP already has design foundations such as tokens, shared styles, Tailwind utilities, `mw-*` classes, layout primitives, and reusable components.

Do not ignore the existing base. Before changing styles, inspect the existing design files that matter to the task:

- token files
- global CSS
- Tailwind config
- shared layout primitives
- component styles
- existing `mw-*` classes
- reusable components like `HeroFrame`, `SectionShell`, `DecisionPanel`, and `FAQSection`

Use the existing visual language where it supports the new design direction. Change tokens or CSS only when the current base cannot express the approved design standard.

Good reasons to update tokens/CSS:

- section rhythm needs a reusable spacing scale
- panels need a consistent premium surface treatment
- typography hierarchy is inconsistent
- border, glow, shadow, or background treatment needs system-wide alignment
- repeated visual patterns emerge after approved pages
- the current tokens make pages feel generic, flat, cramped, or visually inconsistent

Bad reasons to update tokens/CSS:

- because one section needs a one-off effect
- because a generic template style looks nicer
- because a component is easier to force than redesign
- because the old page used a class
- because the builder wants to redesign the whole system before proving pages


Existing styles are the starting base, not the design ceiling.

## Motion And Reveal Behavior

MindWP already has a global reveal system for one-time in-view animation. Use the existing `mw-animate-*` classes when motion supports section rhythm, visual hierarchy, or proof/showcase surfaces.

Preferred reveal classes:

- `mw-animate-section`
- `mw-animate-list`
- `mw-animate-stagger`
- `mw-animate-fade`
- `mw-animate-up`
- `mw-animate-panel`
- `mw-animate-line`

Motion should be subtle, calm, and purposeful. Use it to help sections enter cleanly, reveal operating maps, stagger proof or signal cards, bring website showcase visuals into view, and make diagnostic CTA panels feel intentional.

Do not animate every element. Do not add a new animation library, page-local observer, scroll-jacking pattern, aggressive parallax, cursor effect, constant loop, fake dashboard motion, or loading delay unless the user explicitly approves it.

The motion contract:

- content remains visible without JavaScript
- animations run once when elements enter view
- reduced-motion users are respected
- no section depends on animation to be understood
- motion supports the business point instead of decorating weak content

Good motion makes the page feel premium and alive. Weak motion makes the page feel like a template, SaaS demo, or visual trick.

## First Three Pages Standard

For the first three major rebuilds, treat the design system as flexible but not final:

1. Homepage
2. Smart Website Systems
3. Local SEO Authority Systems

These pages should establish a visual standard that feels:

- more custom than a typical agency site
- more practical than a SaaS landing page
- more premium than a freelancer portfolio
- more grounded than an AI automation brand
- more operational than a normal WordPress service site

Workflow:

1. Read the task-relevant core docs and understand the page strategy.
2. Inspect existing tokens, CSS, shared components, and visual primitives.
3. Build the page using the existing base where it works.
4. Use page-owned JSX for custom visual arguments.
5. Identify repeated visual needs across the first three pages.
6. Update tokens, CSS, or reusable primitives only when the need is stable.
7. After the first three pages are approved, document the emerging design standard.

Do not start by redesigning the entire token system before the pages prove the visual direction. Do not let the existing token system block a stronger page design.

The first three pages should use custom visual sections to show business logic:

- how work slips away
- where the website controls the path
- where local trust breaks
- where response or follow-up loses ownership
- where proof is not captured
- what changes after the system is clear

A section is successful when the buyer can understand the business point before reading every word.

## Before Designing A Section

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

## Preferred Patterns

Choose the pattern that explains the page intent.

Useful MindWP patterns:

- leak map
- connected-handling surface
- website-as-control-point map
- find-verify-trust-contact path
- enquiry-to-handling path
- operating map
- signal board
- featured card plus support cards
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

These are possible patterns, not mandatory sections. Do not let existing renderer order, old page structure, or reusable component availability decide the rebuild plan.

## Pattern Rules

### Leak Maps

Use leak maps when the page must show where work slips away.

Good leak moments:

- search to trust
- website visit to enquiry
- enquiry to response
- response to follow-up
- completed work to review
- proof to repeat value

Make the leak specific. Do not create an abstract marketing funnel.

### Connected-Handling Surfaces

Use connected-handling surfaces when ownership, response, follow-up, review, or proof paths need to be made visible.

Show:

- where calls, forms, or messages start
- where they land
- who or what owns the next step
- what should happen next
- what fails when the path is unclear

Do not make this look like a SaaS dashboard or backend automation chart.

### Signal Boards

Use signal boards when several visible signs point to the same system problem.

Good signals:

- unanswered forms
- scattered messages
- no quote follow-up
- weak service pages
- inconsistent review requests
- unclear local trust signals

Every signal needs business meaning. Do not use signal boards as decorative icon grids.

### Before/After Panels

Before/after panels should show operating states, not generic benefits.

Before:

- enquiries sit in inboxes
- calls are missed
- nobody owns the next step
- quotes depend on memory
- reviews depend on someone remembering
- service pages do not explain the work

After:

- enquiries land somewhere useful
- response path is visible
- every enquiry has owner/status/next step
- review requests happen at the right time
- service pages make the offer clear

Do not use vague before/after claims like "chaos to growth."

### Operating Maps

Operating maps explain how website systems and connected handling work together.

Use them to show how local discovery, website clarity, response, follow-up, reviews, proof, and improvement connect. Do not turn them into backend diagrams or public tool explanations.

### Website-As-Control-Point Maps

Use website-as-control-point maps when a page needs to show that the website is not sitting alone.

Show how service-page clarity, trust, enquiry capture, response, follow-up, reviews, proof, and improvement connect around the website. This pattern is especially useful for Smart Website Systems and homepage thinking.

### Find-Verify-Trust-Contact Paths

Use find-verify-trust-contact paths for Local SEO Authority and industry pages where local trust matters.

Show the path from local search to checking the business, reading service/location proof, choosing a next step, and making contact. Do not turn this into a rankings dashboard.

### Implementation Pathway Panels

Use implementation pathway panels when a page must explain WordPress, Elementor, Bricks, Divi, WooCommerce, or rebuild choices.

The panel should make the business fit visible: clarity, maintainability, performance, ecommerce need, editing model, enquiry capture, and connected handling. It should not become a technology card grid or builder comparison table.

### Scenario Boards

Use scenario boards when the page needs to feel grounded in service-business reality.

A scenario should show:

- what kind of business moment is happening
- where work usually slips
- what a clearer path would protect

Do not invent fake proof or fake client results.

### Fit Filters

Use fit filters when positioning needs protection.

A fit filter should clarify who the page is for without sounding arrogant.

Good fit filters help exclude:

- cheapest-package shoppers
- looks-only redesign buyers
- ranking-guarantee seekers
- tool-demo buyers
- AI hype buyers

## Visual Concept Library

These concepts were extracted from early MindWP visual experiments and current page explorations. They are not final sections, fixed layouts, or JSX to copy.

Use them as design logic an AI may adapt, combine, redesign, or replace when they help explain the approved page strategy. Existing reveal classes may be used to bring these surfaces into view, but motion must remain secondary to the business point.

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

Good signals might include local search activity, service page visits, form enquiries, missed calls, quote follow-up due, review requests pending, and proof not captured.

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

### Scattered Vs Connected Contrast Panel

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

Important warning: this is not a default process-step pattern. Do not use the same ring design on every page. The ring is a visual concept, not a required component. Items, styling, spacing, labels, and structure should change per page.

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
- smiling handshake or office meeting cliches
- generic laptop mockups
- fake dashboard screenshots
- AI robot illustrations
- decorative images that do not clarify the business point
- image-heavy pages that feel like a template
- using illustrations to hide weak content

Use imagery when it helps the buyer understand the business reality faster or makes the page feel more custom without weakening clarity.

For the first three pages, it is acceptable for each page to have one primary custom visual/illustration section and one or two subtle background treatments if they strengthen the design.

Examples:

- Homepage: operating path illustration, leakage surface, or website-control-point visual.
- Smart Website Systems: website-as-control-point illustration or weak-site vs connected-site contrast.
- Local SEO Authority: local find-verify-trust-contact path, service-area signal map, or local trust surface.

Background images should be subtle and controlled. They should not reduce readability or make the page feel busy.

## Design For Active Systems

Full system ownership is defined in [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md). Design should translate that ownership into visible business states.

Smart Website Systems:

- Show clarity, trust, service-page flow, enquiry capture, and visible next steps.
- Use service-page clarity maps, website-as-control-point sections, enquiry-to-handling diagrams, and trust placement.
- Useful future patterns include before/after website contrast, implementation pathway panels, fit filters, common concern handling, and proof/scenario boards.
- Avoid portfolio-first design and page-count package visuals.

Local SEO Authority Systems:

- Show find, verify, trust.
- Use local presence signal boards, service-area relevance maps, website-foundation-before-visibility contrasts, ongoing maintenance rhythm, and local proof placement.
- Avoid fake ranking dashboards and domination visuals.

Lead Response & Handling Systems:

- Show calls, forms, messages, missed calls, response speed, and routing.
- Use response path maps, after-hours handling paths, missed-call scenarios, and scattered-source before/after panels.
- Avoid making AI visuals the hero idea.

Follow-Up & CRM Systems:

- Show owner, status, next step, quote follow-up, and visible responsibility.
- Use ownership boards, status lane maps, and memory-dependent vs visible follow-up contrasts.
- Avoid SaaS CRM dashboard imitation.

Reputation & Review Systems:

- Show completed work becoming proof.
- Use completed-job-to-review paths, feedback routing surfaces, proof capture boards, and local-trust connections.
- Avoid fake review counters and guaranteed star visuals.

Revenue Recovery:

- Show value still leaking after enquiries arrive only inside an active-system context.
- Treat it as a cross-system improvement lens, never as a primary service page, standalone panel, service card, visual pillar, route, graph category, CTA category, related-content cluster, form, public offer, or design category.

## Implementation Service Page Design

Implementation service pages live under Smart Website Systems.

Examples:

- WordPress Development
- Elementor
- Bricks Builder
- Divi 5
- WooCommerce
- Website Redesign / System Rebuild

Design these pages as website-system implementation pathways.

They should show:

- why this path fits a service business
- what business problem the website must solve
- how clarity, trust, enquiry capture, and connected handling improve
- what the platform or builder is useful for
- how maintainability, editing, performance, ecommerce, or rebuild fit matters where relevant
- how the page connects back to Smart Website Systems

They should not:

- lead with technology fandom
- compare builders like affiliate content
- sell cheap build packages
- make MindWP sound like a generic WordPress agency
- present implementation paths as equal primary systems
- disconnect from website clarity, trust, enquiry capture, and connected handling

## Component Judgment

Use shared components when they strengthen the approved section.

Useful base components include:

- `HeroFrame`
- `SectionShell`
- `FAQSection`
- `DecisionPanel`
- `Button`
- `SignalDot`
- `StatusBadge`
- `InlineText`
- `Accordion`
- `Tabs`

Use custom page-owned JSX when:

- the business reality needs a specific layout
- the section pattern is still being discovered
- a shared component would flatten the message
- the visual needs a custom map, board, connected-handling surface, comparison, or proof stack

Repeated custom JSX is acceptable while proving the page. Extract after approval.

## Component Baseline And Extension Window

Shared components are not untouchable during the baseline design phase, but they should not stay open for constant redesign forever.

The baseline design phase is:

1. Homepage
2. Smart Website Systems
3. Local SEO Authority Systems

During this phase, an AI may inspect and improve shared components if the approved page design exposes a real limitation.

Important components to inspect during the baseline phase:

- `HeroFrame`
- `SectionShell`
- `DecisionPanel`
- `FAQSection`
- shared buttons/actions
- shared card/panel primitives
- token/style files that affect these components

Allowed during the baseline phase when justified by the approved plan:

- add a new `HeroFrame` variant
- improve custom visual slot behavior
- add optional `className` support where missing
- add a new `SectionShell` variant
- add optional section background, tone, or density props
- improve spacing, container, or visual rhythm when needed
- add custom classes for specific page sections
- create page-local wrappers around shared components
- update tokens or CSS if repeated page needs prove the change

After Homepage, Smart Website Systems, and Local SEO Authority Systems are approved, treat `HeroFrame`, `SectionShell`, `DecisionPanel`, `FAQSection`, global tokens, and shared CSS as stable design-system foundations.

Later page rebuilds may still use page-owned JSX, Tailwind, local arrays, and section-specific custom classes where needed, but they should not modify the core shared components, global tokens, or shared CSS unless the user explicitly approves a design-system change.

Good baseline component-change reasons:

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

> Before the first three pages are approved, the design system may be improved carefully. After those pages are approved, protect the shared base and solve page-specific needs locally unless the user explicitly approves a broader design-system update.

## HeroFrame Guidance

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

- Homepage: operating path or leakage surface.
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

## JSX And Styling Rules

Allowed during page design:

- page-owned content
- local arrays
- page-local helper components
- repeated JSX
- custom section layouts
- Tailwind layout and composition utilities
- existing `mw-*` classes and token classes
- existing `mw-animate-*` reveal classes where subtle one-time motion supports the section
- flexible section count
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

Avoid page-specific CSS for migrated pages unless the existing styling surface cannot reasonably express the section.

Use tokens and shared primitives where they help, but do not block design work because an approved abstraction does not exist yet.

## Content Placement During Rebuild

During early page rebuilds, do not prematurely force all section content into data files.

For the homepage and first primary service pages:

- Hero content can remain in the page data file when the existing `HeroFrame` expects it.
- Final `DecisionPanel` content can remain in the page data file when useful.
- `FAQSection` content can remain in the page data file when useful.
- Main custom section content can live directly inside the render JSX while the design is being proven.

After the page is approved, stable content groups may be extracted into domain data.

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

## What To Avoid Visually

Do not use:

- generic agency hero plus service grid
- SaaS dashboard imitation
- fake analytics
- decorative tech visuals
- decorative code visuals
- glossy platform screens
- abstract network diagrams
- random charts
- process-step sections repeated across every page
- icon grids with no business logic
- testimonial-looking proof without real proof
- smooth transformation arcs that feel invented
- over-designed sections that hide the operating point
- motion that distracts from the operating point
- looping or scroll-jacking animation patterns
- builder-first implementation layouts
- technology cards as filler
- abstract systems stack before buyer recognition
- generic "services" card grids

If a section could be dropped into any agency website, redesign it around a real MindWP business moment.

## Approval Standard

A section is strong when:

- the buyer can see the situation without reading every word
- the pattern matches the page intent
- the section explains one clear idea
- the visual supports the active system
- cards are not filler
- icons do not replace logic
- proof is real, clearly framed, or absent
- CTA posture feels diagnostic
- the page feels premium without becoming decorative
- shared components help rather than control the page
- old renderer order is not driving the design

After designing a page, check:

- Does the first screen create buyer recognition?
- Does each section make one business point clearer?
- Does the design show a real business state or operating change?
- Are page-owned custom sections used where generic cards would be weak?
- Does the page avoid generic agency, SaaS, AI, SEO, and tool-reseller patterns?
- Does CTA context explain why the next step is useful?
- Is proof real, clearly illustrative, or absent?
- Does the page feel calm, premium, and operational?
- Does any motion feel subtle, one-time, and supportive rather than decorative or distracting?
- Does the page avoid copying old renderer order?

## Extraction After Approval

Extraction is cleanup after design approval.

Extract:

- stable visual primitives
- repeated section components
- reusable data groups
- production metadata
- graph relationships
- CTA rules
- tighter types

Do not extract if the abstraction weakens the approved section. Keep page-owned JSX until the right reusable shape is obvious.

# DESIGN — MindWP

> Authority for visual direction, section composition, interaction taste, and design-system judgment.
> Offer ownership comes from `FOUNDATION.md` and `OFFER-ARCHITECTURE.md`.
> Design must make the business reality visible before it makes the system impressive.

---

## USE THIS DOC

Use this document when designing or reviewing:

- home and service page sections
- system pages
- implementation pathway pages
- industry landing pages
- resource layouts
- hero sections
- visual maps, comparison panels, proof sections, CTAs, and page-owned JSX

The purpose is not to enforce one layout. The purpose is to keep MindWP from drifting into generic agency design, SaaS dashboards, template-site sameness, or decorative tech visuals.

---

## DESIGN AUTHORITY

MindWP design starts from the active build flow:

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

Design is approved when it helps the buyer recognise:

- what is happening in the business
- where work is slipping
- what becomes visible
- who owns the next step
- how the website and connected handling systems improve the situation

Do not let component availability decide the design. Shared components are useful tools. They are not the strategy.

---

## OPERATIONAL DESIGN LANGUAGE

MindWP should feel:

- practical
- operational
- calm
- premium
- business-aware
- system-first
- conversion-focused
- credible
- service-business specific
- commercially serious

Visuals should show operating states, not abstract technology.

Good MindWP visual language:

- a missed call becoming a response path
- a form landing somewhere useful
- a quote moving from sent to followed up
- a review request happening after completed work
- a local search visitor moving from find to trust to enquiry
- a messy before state becoming a visible owner/status/next step

Weak MindWP visual language:

- decorative dashboards
- random charts
- icon grids without business logic
- generic agency split layouts
- glossy SaaS product UI
- abstract network diagrams
- process steps repeated on every page

---

## VISUAL DIRECTION

The visual tone is premium, dark, calm, and precise.

Use contrast, spacing, and hierarchy to create confidence. Do not make the site loud to make it feel important.

Preferred qualities:

- dark controlled surfaces
- restrained accent color
- clear typography
- strong section rhythm
- visible handoffs
- scannable operating states
- confident whitespace
- sharp but not sterile cards and panels
- proof and detail placed where they help decision-making

Avoid:

- bright generic agency gradients
- template hero blocks
- fake analytics screenshots
- feature grids with no narrative
- decorative code/tech backgrounds
- icons as the main explanation
- oversized process timelines everywhere
- visual clutter that makes the business logic harder to see

---

## PREFERRED SECTION PATTERNS

Choose the section pattern that best explains the page intent.

Strong MindWP patterns include:

- dark split hero
- leak map
- diagnostic lane map
- operating map
- signal board
- featured card plus support cards
- before/after panel
- handoff surface
- priority map
- fit filter
- proof stack
- scenario board
- ownership table
- trust path

The same pattern should not be repeated across a page unless the repetition creates useful rhythm. If every section becomes cards, the page has lost its shape.

---

## PATTERN RULES

### Leak Maps

Use leak maps when the page must show where work slips away.

They should make the gap visible:

- search to trust
- website visit to enquiry
- enquiry to response
- response to follow-up
- completed work to review
- review/proof to repeat value

Do not make leak maps look like abstract funnels. The buyer should recognise the specific business moment.

### Handoff Surfaces

Use handoff surfaces when ownership changes.

Show:

- where the enquiry starts
- where it lands
- who or what owns the next step
- what should happen next
- what fails when the handoff is unclear

### Signal Boards

Use signal boards when multiple visible signs prove the same system problem.

Good signals:

- unanswered forms
- scattered messages
- no quote follow-up
- weak service pages
- inconsistent review requests
- unclear local trust signals

Do not use signal boards as decorative icon grids. Every signal needs a business meaning.

### Before/After Panels

Before/after panels should show operating states, not generic benefits.

Before:

- enquiries sit in inboxes
- nobody owns the next step
- reviews depend on someone remembering
- service pages do not explain the work

After:

- enquiries land somewhere useful
- every enquiry has owner/status/next step
- review requests happen at the right time
- service pages make the offer clear

### Operating Maps

Operating maps are for explaining connected systems.

Use them when the page needs to show how local discovery, website clarity, response, follow-up, reviews, proof, and recovery connect.

Do not turn operating maps into backend diagrams or public tool explanations.

---

## DESIGN FOR ACTIVE SYSTEMS

### Smart Website Systems

Design around clarity, trust, page flow, enquiry capture, and visible next steps.

Useful sections:

- service-page clarity map
- website as control point
- offer confusion before/after
- enquiry path diagram
- trust signal placement

Avoid making the page feel like a portfolio or page-count package.

### Local SEO Authority Systems

Design around find, verify, trust.

Useful sections:

- local presence signal board
- service-area relevance map
- Google Business Profile and website trust handoff
- local proof placement

Avoid ranking dashboards, domination language, and fake SEO charts.

### Lead Response & Handling Systems

Design around calls, forms, messages, missed calls, response speed, and routing.

Useful sections:

- response path map
- missed-call recovery scenario
- after-hours handoff
- scattered enquiry sources before/after

Avoid AI chatbot visuals as the hero idea.

### Follow-Up & CRM Systems

Design around owner, status, next step, follow-up, and quote recovery.

Useful sections:

- ownership board
- status lane map
- memory-dependent vs visible follow-up
- quote follow-up map

Avoid SaaS CRM dashboard imitation.

### Reputation & Review Systems

Design around completed work becoming proof.

Useful sections:

- completed job to review request path
- feedback routing surface
- proof capture board
- local trust handoff

Avoid fake review counters, guaranteed star ratings, and reputation software visuals.

### Revenue Recovery Layer

Revenue Recovery may appear as a cross-system improvement layer.

Use it to show value still leaking after enquiries arrive. Do not design it as a primary service page, pillar, or navigation category.

---

## IMPLEMENTATION SERVICE PAGE DESIGN

Implementation pathway pages live under Smart Website Systems.

Examples:

- WordPress development
- Elementor
- Bricks Builder
- Divi 5
- WooCommerce
- website redesign and system rebuild

Design these pages as implementation paths for a website system, not as generic builder-service pages.

They should show:

- why this implementation path fits a service business
- what business problem the website must solve
- how clarity, trust, enquiry capture, and handoff improve
- what the builder/platform is useful for
- where the page connects back to Smart Website Systems

They should not:

- lead with technology fandom
- compare builders like affiliate content
- sell cheap build packages
- make MindWP sound like a generic WordPress agency
- present implementation services as equal primary systems

---

## COMPONENT JUDGMENT

Use `HeroFrame` when the hero needs a strong, reusable page frame and the content naturally fits the component.

Use `SectionShell` when the section benefits from standard spacing, max-width, and tokenized surface behavior.

Use `FAQSection`, `DecisionPanel`, `SignalDot`, `StatusBadge`, and `Button` when they help the approved section design.

Use custom page-owned JSX when:

- the business reality needs a specific layout
- the section pattern is still being discovered
- a shared component would flatten the message
- the visual needs a custom handoff, map, board, or comparison

Repeated custom JSX is acceptable while proving the page. Extract after approval.

---

## BUILD-SYSTEM DESIGN

Allowed in the MindWP build system:

- Tailwind layout and composition utilities
- JSX-owned content
- local arrays
- page-owned sections
- page-local helper components
- repeated JSX until a pattern proves it should be extracted
- custom section layouts
- flexible section count

Do not block page design work because a section is not using `SectionShell`, `HeroFrame`, a data file, or a shared renderer. Those can be extracted after approval and proven patterns.

---

## TAILWIND AND TOKENS

Use Tailwind for layout, spacing, responsive behavior, and typography while designing.

Prefer MindWP tokens for colors and surfaces when available. Strict token and raw-color enforcement is deferred until approved designs are stable.

Future production target:

- Tailwind for layout and composition.
- MindWP tokens for colors, surfaces, and signals.
- Extract stable repeated visual primitives after approval.

---

## VISUAL TASTE CHECKLIST

Before approving a section, confirm:

- the buyer can see the business situation without reading every word
- the section explains one clear idea
- the visual pattern matches the page intent
- cards are not being used as filler
- icons are not replacing business logic
- the page does not imitate SaaS dashboards
- the page does not look like a generic agency template
- fake analytics, fake metrics, and unsupported proof are absent
- the CTA feels diagnostic and practical
- the design supports the active system that owns the page

---

## EXTRACTION AFTER APPROVAL

Extraction is a cleanup phase, not the design starting point.

Extract only after the page or section is approved:

- shared primitives
- stable visual components
- reusable data groups
- production metadata
- related-content rules
- tighter types

If extraction weakens the approved section, keep the page-owned JSX until the right abstraction is obvious.

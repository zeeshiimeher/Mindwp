

# Homepage Redesign Plan

> Homepage-specific redesign plan.
> This doc is planning only until the shared CSS system and core production components are stable.

---

## Role of the Homepage

The homepage is not a service page.

Service pages prove one offer.
The homepage explains the full MindWP operating system.

Homepage story:

```text
Leaks -> System -> Layers -> Proof -> Fit -> Action
```

Homepage should communicate:

- MindWP understands where service businesses leak work.
- The problem is not only a website problem.
- The fix is an operating system for enquiries, follow-up, visibility, proof, and conversion.
- The business owner should feel understood before they choose a service page.

---

## Design Principle

Homepage should feel like a premium operational command center for service businesses.

Target feeling:

- confident
- diagnostic
- operational
- premium
- human enough for service-business owners
- more custom than service pages

Avoid:

- generic agency homepage
- repeated white-card sections
- static HTML feeling
- SaaS-template sameness
- overusing service-page components without homepage purpose

---

## Dependency Rule

Do not migrate the homepage before:

1. Phase 1 CSS foundation is stable.
2. Header and footer are migrated.
3. Core component families exist.
4. Smart Website page proves the first reusable component pass.
5. Local SEO validates variants or is at least planned clearly.

Homepage planning can happen now.
Homepage execution should wait until the shared system is stable.

---

## Reusable vs Home-Only Components

### Reusable production components allowed on homepage

Use these where the homepage section fits the shared pattern:

- `GridCardsSection`
- `ProcessStepsSection`
- `LayerStackSection`
- `FitCheckSection`
- `AccordionFAQSection`
- `CTASection`
- `ProofStorySection`
- `ImageStorySection` if useful

### Homepage-only components

Use `Home*` prefix for sections that should not be reused on service pages.

Approved homepage-only components:

- `HomeHeroSection`
- `HomeLeakMapSection`
- `HomeSystemCapabilitiesSection`
- `HomeInfrastructureStackSection` if the reusable `LayerStackSection` cannot express it well
- `HomeOutcomeShiftSection` if the outcome section becomes too homepage-specific
- `HomePracticeGallerySection`

Rule:

- `Home*` components are homepage-only.
- Copilot/agent must not reuse `Home*` components on service pages.
- If a homepage section becomes reusable later, extract it into a neutral production component name.

---

## Current Homepage Structure From Screenshot

Current visible flow:

1. Dark hero: “Leads Come In. Most of Them Never Turn Into Work.”
2. Leak cards: “The business is working. The business is also leaking.”
3. Before-system blueprint: “What the business looks like before the system is set up properly.”
4. Setup cards: “What gets put in place so enquiries stop slipping.”
5. Fit section: “This works for established businesses and serious new setups.”
6. Outcome cards: “What changes when things stop slipping.”
7. Tabs: “Where service businesses break.”
8. Infrastructure section: “It’s not a website project. It’s infrastructure.”
9. Industries: “Made for businesses that do the work.”
10. Timeline: “It doesn’t all happen at once. That’s the point.”
11. Case studies/proof: “One business. Before and after.”
12. Practice gallery: “What this looks like in practice.”
13. FAQ: “Straight answers.”
14. Final CTA.
15. Dark footer.

Issue:

- Content direction is strong.
- Visual rhythm is repetitive.
- Too many pale sections with centered headings and white cards.
- The tabs/system-capabilities section has the best interaction opportunity but needs stronger animated visuals.

---

## Section Mapping

| Current Homepage Section | Target Component | Notes |
| --- | --- | --- |
| Hero | `HomeHeroSection` | Homepage-specific, needs animated operational visual. |
| The business is leaking | `GridCardsSection` | Use homepage leak-card variant; stronger visual rhythm. |
| Before-system blueprint | `HomeLeakMapSection` | Signature diagnostic map; homepage-only. |
| What gets put in place | `ProcessStepsSection` or `GridCardsSection` | Use process only if sequence matters; otherwise grid-card setup variant. |
| Fit section | `FitCheckSection` | Preserve fit/not-fit logic. |
| What changes when things stop slipping | `HomeOutcomeShiftSection` or `ProofStorySection` | Outcome-focused homepage section. |
| Where service businesses break | `HomeSystemCapabilitiesSection` | Signature tabbed animated visual section. |
| Infrastructure | `LayerStackSection` or `HomeInfrastructureStackSection` | Prefer reusable unless visual needs are too custom. |
| Industries | `GridCardsSection` | Industry-grid variant. |
| It doesn’t all happen at once | `ProcessStepsSection` | Cycle/timeline variant. |
| Case studies/proof | `ProofStorySection` | Case-study row or featured proof variant. |
| Practice gallery | `HomePracticeGallerySection` | Homepage-only visual example gallery. |
| FAQ | `AccordionFAQSection` | Controlled accordion. |
| Final CTA | `CTASection` | Soft-panel before dark footer. |

---

## Homepage Section Plans

### 1. `HomeHeroSection`

Purpose:

- introduce the full MindWP problem
- establish premium operational tone
- show leads leaking before work begins

Keep:

- dark hero
- strong headline
- primary CTA

Improve:

- add homepage-specific animated operational visual
- no static screenshot
- no generic abstract illustration
- use CSS/SVG/JSX motion only
- no Lottie dependency unless explicitly approved later

Visual idea:

- animated lead flow panel
- missed call -> enquiry -> routed -> follow-up
- rows/pills/status indicators animate subtly
- glow and connector lines move like lightweight Lottie-style motion

Data rule:

- hero visual rows and labels should come from data/props or controlled config
- no hardcoded marketing text inside reusable visual components

---

### 2. Leak Cards Section

Target:

- `GridCardsSection` homepage leak-card variant

Purpose:

- quickly show the hidden leaks
- create recognition

Improve:

- cards should not look like process steps
- stronger hierarchy
- icon/status treatment
- subtle connector or leak-point treatment
- in-view stagger animation

Rule:

- This section should be reusable as a grid-card pattern if needed.
- Do not create `HomeLeakCardsSection` unless the design becomes homepage-only.

---

### 3. `HomeLeakMapSection`

Purpose:

- explain how separate problems connect into one leaking system

Current section:

- left side symptom list
- right side breakpoints list

Redesign idea:

- left: real weekly symptoms
- right: system breakpoints
- animated connectors between symptom cards and breakpoints
- status chips showing where money/work leaks

This should likely be homepage-only.

Rules:

- Do not make it a generic card grid.
- Must feel like a diagnostic map.
- Use in-view animation.
- Do not overuse dots.

---

### 4. Setup Section

Current:

- “What gets put in place so enquiries stop slipping.”

Possible component:

- `ProcessStepsSection` if sequence matters
- `GridCardsSection` if it is a set of setup items

Decision:

- Start with `ProcessStepsSection` only if the copy implies progression.
- Otherwise use `GridCardsSection` setup variant.

Rule:

- Do not make this visually identical to the leak-card section.

---

### 5. Fit Section

Target:

- `FitCheckSection`

Direction:

- preserve the fit/not-fit contrast
- use homepage copy
- keep two-column decision structure

Rule:

- Do not redesign into generic cards.

---

### 6. `HomeOutcomeShiftSection`

Current:

- “What changes when things stop slipping.”

Purpose:

- show the business impact after leaks stop

Possible designs:

- 3 outcome cards with visible sequence
- before-state -> system-change -> outcome
- animated status improvement indicators

Use homepage-only component if it becomes too specific.
Otherwise use `ProofStorySection` variant.

---

### 7. `HomeSystemCapabilitiesSection`

This is the most important homepage custom section.

Current section:

- tabbed interface for service-business breakpoints
- current visuals are too simple/static

Goal:

- turn this into the homepage signature explainer

Tabs:

- Missed Calls
- Dead Leads
- Invisible Online
- Slow Replies
- No Proof Online

Rules:

- each tab needs a unique animated visual
- visuals must not all look like the same card with a different icon
- animation starts when section enters view and/or tab becomes active
- no Lottie dependency yet
- use CSS/SVG/JSX animation
- no fake product screenshots
- no hardcoded marketing copy inside visual components

Visual plan per tab:

#### Missed Calls

Visual:

- incoming call panel
- callback queue
- missed call gets routed into a follow-up queue
- subtle ringing/pulse animation

Motion:

- phone pulse
- line moves from incoming call to queue
- callback row appears

#### Dead Leads

Visual:

- dormant lead list
- reactivation sequence
- old lead moves from cold to re-engaged

Motion:

- list item wakes up
- status changes
- follow-up line animates

#### Invisible Online

Visual:

- local search/map panel
- business visibility signals
- service-area dots

Motion:

- map pins appear
- ranking/status signal grows
- search card highlights

#### Slow Replies

Visual:

- timer + message routing
- response SLA indicator
- queue clears

Motion:

- timer ticks
- message routes to owner/team
- pending status becomes replied

#### No Proof Online

Visual:

- review/reputation panel
- proof cards stack
- trust score rises

Motion:

- review stars/proof indicators appear
- testimonial card slides into proof stack
- trust bar fills

Data/config:

- tab labels from homepage data
- tab copy from homepage data
- visual labels from data or controlled config
- visual animation data should not be hardcoded deep inside JSX if it can be configured cleanly

---

### 8. Infrastructure Section

Current:

- “It’s not a website project. It’s infrastructure.”

Preferred component:

- `LayerStackSection` if reusable variant can work

Fallback:

- `HomeInfrastructureStackSection`

Visual direction:

- system layers
- foundation card
- capture/follow-up/visibility/proof layers
- active layer highlight

Rule:

- Should not duplicate Smart Website `LayerStackSection` exactly.
- Homepage explains the total MindWP infrastructure, not one service page’s scope.

---

### 9. Industries Section

Target:

- `GridCardsSection` industry-grid variant

Improve:

- better cards
- stronger service-business realism
- subtle hover
- not generic industry blocks

Rule:

- Do not overbuild custom component unless layout becomes unique.

---

### 10. Timeline Section

Current:

- “It doesn’t all happen at once. That’s the point.”

Target:

- `ProcessStepsSection` cycle or timeline variant

Rules:

- preserve ordered progression
- use connector animation
- do not make it look like grid cards

---

### 11. Proof Section

Target:

- `ProofStorySection`

Improve:

- stronger featured proof
- case-study cards should not feel like blog cards
- testimonial should feel integrated, not floating randomly

Possible structure:

- one featured proof story
- two supporting cards
- testimonial strip

---

### 12. `HomePracticeGallerySection`

Purpose:

- show examples across industries/practice scenarios
- help visitors see themselves in the system

Rules:

- homepage-only unless later extracted
- use grouped cards
- no heavy interaction needed
- avoid portfolio/gallery cliché

---

### 13. FAQ

Target:

- `AccordionFAQSection` single-column variant

Rules:

- controlled accordion
- one open item at a time
- closed content fully hidden

---

### 14. Final CTA

Target:

- `CTASection` soft-panel variant

Rules:

- footer is dark, so final CTA should be light/soft with contained panel
- no full dark section directly before dark footer unless clearly separated

---

## Data Requirements

Current homepage data should mostly stay as-is.

Possible small additions:

- visual config for `HomeHeroSection`
- visual config for `HomeSystemCapabilitiesSection`
- image/alt/caption data if image-led blocks are introduced
- related next-step metadata only if graph-owned related content is added later

Rules:

- Do not rewrite homepage data massively.
- Keep content in data where possible.
- Visual labels should come from data or controlled config.
- No hardcoded marketing copy deep inside visual components.

---

## Animation Rules

- Use the shared in-view animation system.
- Animations should run when sections enter viewport, not all on page load.
- Tab visuals animate when tab becomes active.
- Use CSS/SVG/JSX only unless Lottie is explicitly approved later.
- Respect `prefers-reduced-motion`.
- No playful/bouncy motion.
- Animation should make the system easier to understand.

---

## Homepage Execution Order

Do not execute homepage redesign until shared system is stable.

Suggested order:

1. Inspect current homepage route/component/data ownership.
2. Map existing homepage sections to reusable or `Home*` components.
3. Create `HomeHeroSection`.
4. Create/rebuild `HomeSystemCapabilitiesSection` with animated tab visuals.
5. Create `HomeLeakMapSection`.
6. Use reusable production components for cards, process, fit, FAQ, CTA, and proof sections.
7. Create `HomePracticeGallerySection` only if reusable grid/proof components do not fit.
8. Connect homepage data/props.
9. Run visual checks desktop/mobile.
10. Run validation.

---

## Validation

Required:

- typecheck
- lint
- build if safe
- relevant validators
- desktop visual check
- mobile visual check
- tab interaction check
- in-view animation check
- reduced-motion check where practical

Do not weaken validators to make homepage redesign pass.
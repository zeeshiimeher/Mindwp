# Design Planning Execution

> Priority-based redesign migration plan.
> Copilot/agent must execute one phase at a time.
> Do not skip phases. Do not jump to page redesign before the CSS system is rebuilt.

---

## Status Snapshot

- Phase 1.1 (CSS rebuild) — DONE
- Phase 2 (foundation/framework/primitives) — DONE
- Phase 3 (components.css system) — DONE
- Phase 4 (reusable redesign components) — DONE
- Phase 5 (Smart Website live page migration) — DONE
- Phase 6 (Local SEO planning + variant inventory) — DONE
- Phase 7 (Local SEO live page migration) — DONE
- Phase 8 (Related content rewire — global progression variant) — DONE
- Phase 9 (cleanup + validation) — PENDING (only remaining work)

system:full → 47/47 PASS · tests PASS · 0 warnings · 81 reports
Live verification: `/services/smart-website-systems` and `/services/local-seo-authority` return HTTP 200 with new sections/* family rendered.

---

## Remaining Work — Phase 9 Cleanup

Pending tasks (in priority order):

1. Remove prototype CSS files under `src/styles/redesign/*` once confirmed unused.
2. Archive or delete prototype-only components in `src/components/redesign/*` that are no longer mounted by any live renderer.
3. Audit old CSS dependencies — grep for legacy `rd-*` prototype-only classes; remove dead selectors.
4. Delete legacy compatibility styles for components migrated to `sections/*`.
5. Remove unused class names from `components.css` (e.g. orphaned `before-after` bridge styles after bridge removal).
6. Remove hardcoded prototype content fixtures used by replaced components.
7. Re-run typecheck, lint, build, and `system:full` after each removal to keep validators green.
8. Confirm CTA contract, graph ownership, route ownership, and accessibility remain intact.

---

## Operating Rules

- Execute one phase at a time.
- Do not run broad refactors unless the current phase explicitly requires it.
- Do not change service positioning.
- Do not expand content volume.
- Domain data files should mostly stay as they are.
- Renderers/templates may change to use new reusable redesign components.
- CTA contracts, graph ownership, route ownership, validators, accessibility, and mobile usability must remain intact.

---

## Final Design Principle

MindWP should not look like it builds websites.

It should look like it understands how service businesses lose, handle, follow up, and convert leads.

---

## Redesign Direction

Direction: **Premium Operational**

Target feeling:

- premium
- calm
- structured
- operational
- trustworthy
- system-led
- human enough for service-business owners

Reference blend:

```text
Stripe confidence
+ Linear precision
+ service-business realism
+ MindWP operational language
```

Avoid:

- generic agency look
- flat static HTML look
- SaaS-template look
- flashy startup look
- page-builder portfolio look
- blog/content-farm look

---

# PHASE 1 — Official CSS System Rebuild ✅ DONE

## Goal

Back up the old CSS, then empty/recreate the official CSS files as the new long-term redesign system.

Do this before page migration.

## Files

Official CSS ownership stays here:

- `src/index.css`
- `src/styles/foundation.css`
- `src/styles/framework.css`
- `src/styles/primitives.css`
- `src/styles/components.css`

Temporary prototype CSS must not become the long-term system:

- `src/styles/redesign/framework.css`
- `src/styles/redesign/smart-website.css`

## Required Action

1. Back up old CSS.
2. Rewrite official files as new system.
3. Do not preserve legacy CSS inside official files unless absolutely required to keep build/layout functional.
4. If compatibility is needed, isolate it in a clearly marked temporary section or separate legacy backup folder.
5. Do not edit React components, renderers, routes, or data files in Phase 1.

## `src/index.css`

index.css = imports only.
body/root base belongs in foundation.css or framework.css.

Allowed:

- CSS imports
- global base wiring
- required Tailwind import order if the project still depends on it
- minimal root/body setup if needed

Not allowed:

- large component styles
- section styles
- page-specific styles

Important:

- Preserve Tailwind/import order if validators or build depend on it.
- Document any import-order risk before changing.

## `src/styles/foundation.css`

Owns tokens only.

Must define a simple, memorable token system:

- simple base color tokens such as `--primary`, `--secondary`, `--accent`, `--surface`, `--ink`, and other readable project tokens
- semantic color tokens
- foreground/on-background tokens
- gradient tokens
- spacing tokens
- container width tokens
- typography tokens
- radius tokens
- shadow tokens
- border tokens
- motion duration tokens
- motion easing tokens
- z-index tokens
- breakpoint tokens or documented breakpoint values

Required container tokens:

```css
--rd-page-max: 1440px;
--rd-content-max: 1180px;
--rd-text-max: 720px;
```

Required breakpoint direction:

```css
/* desktop/default: up to 1440px max container */
/* medium: 980px */
/* tablet: 767px */
/* mobile: 480px */
```

Color rules:

- Base color tokens should stay simple, readable, and reusable.
- Example direction: `--primary: #07111f;`, `--secondary: ...;`, `--accent: ...;`, `--surface: ...;`, `--ink: ...;`.
- Do not make every main token an OKLCH expression if a simple token name with a stable color value is clearer.
- Use the simple base tokens repo-wide instead of hardcoded hex values inside components.
- Use OKLCH and `color-mix(in oklch, ...)` to derive gradients, glow effects, tint effects, overlays, and transparency from the base tokens.
- Gradients must reference base color tokens or derived tokens, not hardcoded color literals.
- Avoid raw hex/rgb/rgba in final component CSS after base tokens exist.
- Define semantic foreground tokens for light, soft, dark, and gradient contexts.

Primary palette decision:

- Use the current Executive Navy / Cyan direction as the main MindWP palette.
- Main base tokens:
  - `--primary: #07111f;`
  - `--secondary: #173b63;`
  - `--accent: #3f9caf;`
  - `--accent-soft: #8dd8e8;`
- This is the default brand palette for Smart Website, CRM, and system/operations sections.

Secondary palette rule:

- Additional service palettes are allowed, but they must stay short.
- Each secondary palette should use maximum 3–4 base tokens.
- Do not create large separate color systems per service.
- Secondary palettes should act as accents, not full brand replacements.

Approved short secondary palettes:

```css
/* Local SEO / trust signals */
--local-primary: #071915;
--local-secondary: #12372f;
--local-accent: #2f9b73;
--local-accent-soft: #9be7c7;

/* Automation / AI / workflow */
--automation-primary: #100f2e;
--automation-secondary: #26306a;
--automation-accent: #2fb8b8;
--automation-accent-soft: #a4f1ef;

/* Proof / case studies / premium authority */
--proof-primary: #111827;
--proof-secondary: #2f3645;
--proof-accent: #c89b3c;
--proof-accent-soft: #f1d99a;
```

Rules:

- Gradients and glows may use these short palettes through `color-mix(in oklch, ...)`.
- Service accents should support the page mood without making pages feel like separate brands.

Gradient roles:

- hero gradient
- dark panel gradient
- blue/system gradient
- compare/before-after gradient
- CTA gradient
- surface gradient
- soft surface gradient
- glow gradient
- Keep gradients simple, but each gradient should be meaningfully different, not just an angle change.

Token model example:

```css
:root {
  --primary: #07111f;
  --secondary: #173b63;
  --accent: #3f9caf;
  --surface: #ffffff;
  --surface-soft: #f6f8fb;
  --ink: #07111f;

  --primary-glow: color-mix(in oklch, var(--accent) 35%, transparent);
  --gradient-hero:
    radial-gradient(circle at 20% 20%, var(--primary-glow), transparent 28%),
    linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
}
```

## `src/styles/framework.css`

Owns layout and utilities.

Must define:

- `rd-section`
- `rd-section--compact`
- `rd-section--spacious`
- `rd-container`
- `rd-container--content`
- `rd-container--text`
- `rd-grid`
- `rd-grid--2`
- `rd-grid--3`
- `rd-split`
- `rd-stack`
- `rd-cluster`
- `rd-panel`
- text-measure utilities
- background utilities
- foreground/contrast utilities
- section header system
- motion utilities
- responsive layout helpers

Rules:

- `rd-section` owns spacing/rhythm only.
- `rd-container` owns width and inline padding.
- Default `rd-container` must use `--rd-page-max: 1440px` as the normal section container max width.
- Do not create or rely on `rd-container--wide`.
- Normal section containers should use `rd-container` only.
- Use smaller container variants such as `rd-container--content` or `rd-container--text` only when a section intentionally needs narrower reading width.
- Prefer default framework classes first; avoid width modifier classes unless a narrower container is required.
- Background decisions come from utilities, not semantic section classes.
- Avoid semantic background classes such as `rd-section--diagnostic`.
- Avoid global hard max-width on section titles/descriptions.
- Section title/description width should be controlled by section-head variants or text-measure utilities.

Required background utilities:

- `bg-body`
- `bg-surface`
- `bg-surface-soft`
- `bg-dark`
- `bg-gradient-hero`
- `bg-gradient-blue`
- `bg-gradient-compare`
- `bg-gradient-cta`
- `bg-gradient-cta-2`
- `bg-gradient-cta-3`
- `bg-gradient-cta-4`

Required foreground utilities:

- `text-on-light`
- `text-on-dark`
- `text-on-soft`
- `text-muted-light`
- `text-muted-dark`

Background/foreground rule:

- Background utilities must set readable default foreground colors.
- Light backgrounds default to dark text.
- Dark and dark-gradient backgrounds default to light text.
- Components inherit section foreground unless intentionally creating a nested surface.

Section header system:

- `rd-section-head`
- `rd-section-head--left`
- `rd-section-head--center`
- `rd-section-head--split`
- `rd-section-kicker`
- `rd-section-title`
- `rd-section-description`

Section header rules:

- Use `div.rd-section-head`, not internal `<header>` wrappers, unless semantic need is clear.
- Kicker must not stretch full width.
- Titles/descriptions inherit section foreground context.
- Avoid forced title max-width for now.

## `src/styles/primitives.css`

Owns reusable UI primitives.

Must define:

- buttons
- links
- cards
- panels
- badges/kickers
- status dots
- icon tiles
- forms
- accordion primitive
- focus states
- default hover states

Button rules:

- Primary hover must not jump to cyan by default.
- Primary on dark: white background, dark text, subtle soft-white hover.
- Primary on light: navy background, white text, deeper navy hover.
- Accent/cyan only when intentionally selected.
- Buttons define their own contrast behavior and do not depend on parent section text color.
- Header CTA uses the same button system.

Global hover rules:

- Hover states must be subtle and tokenized.
- No random color jumps.
- Hover lift must be controlled and consistent.
- Respect reduced-motion preferences.

## `src/styles/components.css`

Owns reusable component and section styles.

Phase 1 scope:

- In Phase 1, add only safe shell styles and shared placeholders in `components.css`.
- Full component-specific styling happens in Phase 3 and Phase 4.

Must eventually include:

- header styles
- footer styles
- `hero-split__*`
- `grid-cards__*`
- `before-after__*`
- `layer-stack__*`
- `process-steps__*`
- `proof-story__*`
- `image-story__*`
- `fit-check__*`
- `accordion-faq__*`
- `cta-section__*`
- `related-content__*`
- `scope-section__*`

BEM rule:

- Keep BEM prefixes short and readable.
- Use `rd-*` only for framework/utilities.
- Use component BEM for component internals.
- Avoid page-specific class names in extracted components.

## Motion System

Phase 1 defines shared motion utilities only. Component-specific animation application happens in Phase 3 and Phase 4.

Required utilities:

- `rd-animate-section`
- `rd-animate-fade`
- `rd-animate-up`
- `rd-animate-stagger`
- `rd-animate-line`
- `rd-animate-float`
- `rd-animate-pulse`
- `rd-animate-glow`
- `rd-animate-panel`
- `rd-animate-list`

Rules:

- Section-level class should trigger child reveal/stagger behavior where practical.
- Use CSS/SVG/JSX animation first.
- Respect `prefers-reduced-motion`.
- No bouncy/playful motion.
- No animation that delays reading.

Hero visual animation direction:

- Should feel like lightweight Lottie-style motion.
- Animate rows, status pills, connector lines, glow, panel float, progress/status changes.
- Do not add a Lottie dependency unless explicitly approved later.
- No fake product screenshots.

## Phase 1 Exit Criteria

- Official CSS files exist with new ownership structure.
- Old CSS is backed up.
- Temporary prototype CSS is no longer the source of design truth.
- Header/footer can be migrated next without depending on old CSS concepts.
- Build/type/lint risks are documented before proceeding.
- Phase 1 validation checks are run or explicitly reported as unsafe to run.
- Phase 1 scope stays limited to CSS ownership, tokens, framework, primitives, safe component shells, and motion utilities.
- Do not start Phase 2 until Phase 1 is fully verified.

## Phase 1 Validation

Run if safe:

- typecheck
- lint
- build only if safe


---

# PHASE 2 — Header and Footer Redesign ✅ DONE

## Goal

Recreate header and footer using the new official CSS system.

They appear on every page, so migrate them before service pages.

## Files to Inspect

- `src/global/Header.tsx`
- `src/global/HeaderMobileMenuIsland.tsx`
- `src/global/Footer.tsx`
- CTA/contact helper usage
- nav/link config usage

## Header Requirements

- Premium but not heavy.
- Works on dark hero pages and light pages.
- Supports desktop nav.
- Supports mobile nav.
- Mobile menu must open/close reliably.
- Header CTA must follow new button primitives.
- CTA contract must stay intact.
- Focus states and keyboard behavior must remain accessible.
- Do not rely on legacy `l-*` helpers or old `btn` styling after migration.

## Footer Requirements

- Footer is dark by default.
- Footer must use new tokens, spacing, layout, link states, and responsive rules.
- Footer should not feel like an old legacy block under redesigned pages.
- Use a four-column structure similar to the current footer.
- Footer should support:
  - service navigation
  - trust links
  - contact path
  - brand positioning
  - resource links
  - legal links
- The section directly above footer should usually be light/soft or use a contained dark panel only.

## Phase 2 Exit Criteria

- Header and footer use new CSS system.
- Desktop nav works.
- Mobile nav works.
- Header CTA works and preserves contract.
- Footer is dark and visually aligned with Premium Operational direction.
- No production route or graph behavior changed.
- Run the phase validation checks and make it clean pass.
- Once phase 2 verified move to phase 3 automatically.
---

# PHASE 3 — Core Component Family Setup ✅ DONE

## Goal

Create the reusable production component families before migrating live pages.

Phase 3 may inspect existing Smart Website prototype components, but only as references for extraction.
Phase 3 owns target naming, shared props, base variants, reusable CSS, and production component file structure.
Phase 3 must create production-ready component shells or extracted components; it must not keep prototype components as the long-term implementation.
Phase 4 applies those production components to the Smart Website context and refines the weak variants.
Do not create one-off page-only components unless absolutely necessary.

## Prototype to Production Mapping

- `ServiceHeroOperational` -> `HeroSplitSection`
- `DiagnosticLeakageSection` -> `GridCardsSection`
- `BeforeAfterSystemPanel` -> `BeforeAfterSection`
- `SystemLayerStack` -> `LayerStackSection`
- `OperationalFlowTimeline` -> `ProcessStepsSection`
- `ProofNarrativePanel` -> `ProofStorySection`
- `FitCheckPanel` -> `FitCheckSection`
- `PrototypeFAQ` -> `AccordionFAQSection`
- `PrototypeCTA` -> `CTASection`

Mapping rule:

- This mapping is for extraction/reference only.
- Do not keep both prototype and production component families long term.
- Prototype components can be renamed, merged, replaced, or deleted after production components are created.
- Production components should live outside the prototype-only redesign folder.

## Target Component Families

- `HeroSplitSection`
- `GridCardsSection`
- `BeforeAfterSection`
- `LayerStackSection`
- `ProcessStepsSection`
- `ProofStorySection`
- `ImageStorySection`
- `FitCheckSection`
- `AccordionFAQSection`
- `CTASection`
- `RelatedContentSection`
- `ScopeSection`

These are target production names, not necessarily current file names.
Existing prototype components may be renamed, merged, or replaced during extraction.

Important:

- `GridCardsSection` is the reusable grid/card section family.
- It replaces the confusing diagnostic-only naming.
- It must be designed well enough to reuse across service, industry, proof, and signal sections.
- It is not only for the Smart Website diagnostic section.

## General Component Rules

- Important text comes from data/props.
- No hardcoded marketing text in reusable components.
- Hero mockup rows come from props/data.
- CTA support bullets come from props/data.
- Image content and alt text come from props/data.
- Diagnostic labels and layer names come from props or controlled config.
- No content expansion during redesign.
- Small copy tightening only when layout requires it.
- Keep class names short, readable, and BEM-style.
- Reusable components describe layout/pattern, not page topic.
- Grid/card sections should use `GridCardsSection`, not page-specific diagnostic component names.
- A weak card grid should be fixed by improving `GridCardsSection` variants, not by creating another one-off cards component.
- `GridCardsSection` and `ProcessStepsSection` must remain visually distinct.
- Do not make grid cards look like process step cards.
- `GridCardsSection` should feel like grouped cards, diagnostic tiles, feature cards, or signal boards.
- `ProcessStepsSection` should feel like ordered movement, timeline, sequence, cycle, or staged progression.

## Component Variant Rule

- Components need variants so pages do not look identical.
- Do not build every variant immediately.
- Build only the variants needed by Smart Website and Local SEO first.
- Add more variants later after the system proves stable.

## Initial Variants Needed

### `HeroSplitSection`

- Smart Website: `operations`
- Local SEO: `visibility`

### `GridCardsSection`

- Purpose: reusable premium card-grid section.
- Smart Website: `diagnostic-grid`
- Local SEO: `signal-board`
- General reuse: `feature-grid`

Design separation:

- Do not reuse the same card treatment as `ProcessStepsSection`.
- Avoid step numbers as the dominant visual unless the variant explicitly needs ordering.
- Use card identity through icon tile, status label, risk/signal treatment, grouped card spacing, and stronger card surface.
- `diagnostic-grid` should look like diagnostic/issue tiles, not timeline steps.
- `signal-board` should look like trust/visibility signal cards, not process stages.

Variant direction:

- `diagnostic-grid`: problem/risk cards with strong hierarchy, status treatment, and optional connector/flow detail.
- `signal-board`: visibility/trust signal cards for Local SEO and similar authority sections.
- `feature-grid`: neutral reusable cards for features, scope, supporting points, or grouped explanations.

### `BeforeAfterSection`

- Smart Website: `split-panel`
- Local SEO: `scorecard`

Design preservation:

- Keep the current `BeforeAfterSystemPanel` visual direction as close as possible.
- This section is already one of the strongest Smart Website prototype sections.
- Preserve the dark split-panel feel, before/after contrast, central bridge/connector, and strong panel hierarchy.
- Improve only what is needed for tokenization, responsiveness, accessibility, reduced dots, and reusable variants.
- Do not flatten it into a generic comparison card grid.
- Do not redesign it into a simple table.
- `BeforeAfterSection` should remain visually distinct from `GridCardsSection`, `ProcessStepsSection`, and `LayerStackSection`.

### `LayerStackSection`

- Smart Website: `interactive-stack`
- Local SEO: `signal-map`

### `ProcessStepsSection`

- Smart Website: `timeline`
- Local SEO: `cycle`

Design preservation:

- Keep the new process component design as close as possible to the approved prototype direction.
- Improve only what is needed for tokens, responsiveness, accessibility, and reusable variants.
- Process cards may use step numbers, connector lines, timeline/cycle motion, and staged progression.
- Do not let `GridCardsSection` copy this visual language.

### `ScopeSection`

- Smart Website: `layered-list` if needed
- Local SEO: `service-map`

### `ProofStorySection`

- Smart Website: `before-change-after`
- Local SEO: `metric-story`

### `ImageStorySection`

- Smart Website: `operational-photo` or `visual-panel`
- Local SEO: `split-evidence` only if useful

### `FitCheckSection`

- Smart Website: `two-column`
- Local SEO: `decision-cards`

Design preservation:

- Keep the current `FitCheckPanel` visual direction as close as possible.
- This section already works well as a qualification block.
- Preserve the strong-fit / not-fit contrast.
- Preserve the two-column decision structure for Smart Website.
- Improve only what is needed for tokenization, spacing, responsiveness, accessibility, and reusable variants.
- Do not redesign it into generic cards.
- Do not make it look like `GridCardsSection`.
- `FitCheckSection` should remain a clear decision/qualification component.

### `AccordionFAQSection`

- `single-column` first
- controlled accordion
- one open item at a time
- closed content fully hidden

### `CTASection`

- Smart Website final CTA: `soft-panel`
- Local SEO final CTA: `split-card`

### `RelatedContentSection`

- service pages: `progression`

## Phase 3 Exit Criteria

- Core reusable components exist or are clearly mapped.
- Component CSS lives in official `components.css`.
- Primitives live in `primitives.css`.
- Framework utilities live in `framework.css`.
- Important content is data-driven.
- Animations use shared utilities.
- Run the phase validation checks and make it clean pass.
- once phase 3 varified automatically move to next phase.

---

# PHASE 4 — Smart Website Component Improvements ✅ DONE

## Goal

Apply and refine the Phase 3 production components in the Smart Website context before migrating the live page.

Phase 4 may use the existing Smart Website prototype only as a visual/content reference.
Phase 4 must not continue building inside prototype-only components if a production component family already exists.
Phase 4 must not invent a second component system.
If a Smart Website section is weak, improve the reusable production component variant that owns that pattern.

## Current Prototype Facts

- Prototype route: `/dev/redesign/smart-website-systems`.
- Prototype route file: `src/app/dev/redesign/smart-website-systems/page.tsx`.
- Prototype page component: `src/components/redesign/smart-website/SmartWebsitePrototypePage.tsx`.
- Prototype CSS: `src/styles/redesign/framework.css` and `src/styles/redesign/smart-website.css`.
- Current prototype has no image-led reality section.
- Current prototype has no related-content section.
- Current prototype naming is page-specific and not extraction-ready.
- Current prototype CSS contains raw colors and semantic background classes.
- Current prototype route hardcodes mockup rows, CTA checklist items, and labels.
- Prototype components are references only after Phase 3 begins extraction.
- Do not treat prototype component names as approved production names.

## Smart Website Section Tasks

### Hero

- Keep two-column operations direction.
- Fix full-width badge.
- Remove duplicate chip/meta groups.
- Visual content comes from props/data.
- Decorative glow should be CSS pseudo-element/background.
- Hero visual should have lightweight Lottie-style motion through CSS/SVG/JSX.

### Where It Leaks

- Use `GridCardsSection` with `diagnostic-grid` variant.
- Current simple/weak card-grid direction is not approved.
- Redesign into a premium reusable grid-card pattern, not a one-off diagnostic component.
- Cards need stronger hierarchy, icon/status treatment, spacing, hover state, and motion.
- Six items should display cleanly as a balanced grid on desktop.
- Optional connector/flow detail is allowed if it improves the diagnostic story.
- Use motion utilities for stagger/reveal.

### Image-Led Reality

- Add one section after Where It Leaks and before Broken vs Fixed.
- Use `ImageStorySection`.
- Purpose: make missed-enquiry problem feel real and human.
- Use operational photo or designed visual panel.
- Avoid generic stock images.
- Copy/image/alt come from data/props.

### Broken vs Fixed

- Keep direction.
- Reduce excessive dots.
- Improve connector and transition animation.
- Preserve the current `BeforeAfterSystemPanel` visual design direction as much as possible.
- Tokenize and clean it, but do not visually restart this section.
- Keep the dark split-panel comparison and connector/bridge treatment.

### System Layers

- Current accordion-card list is not approved as final.
- Redesign as interactive layer explorer.
- Five layers:
  - Visibility
  - Capture
  - Routing
  - Follow-up
  - Proof
- One active/open layer at a time.
- Detail area updates from active layer.
- Closed content hidden.
- Visual style must differ from hero.

### How It Works

- Keep.
- Add connector animation and step reveal.

### Real Outcome

- Present visually as Before -> What changed -> After.
- Strengthen center card.
- Reduce dense text feeling.

### Fit Check

- Keep with minor polish.
- Preserve the current `FitCheckPanel` design direction as much as possible.
- Keep the two-column fit/not-fit structure for Smart Website.
- Tokenize and polish it, but do not visually restart this section.

### FAQ

- Controlled accordion.
- One open item at a time.
- Closed content fully hidden.

### Final CTA

- Not full dark before dark footer.
- Use light/soft section with strong contained panel.
- Support bullets come from props/data.

### Related Content

- Create/improve `RelatedContentSection` during the Smart Website phase.
- Candidates remain graph-owned.
- Redesign presentation only.
- Do not manually hardcode related-content lists.
- Use the `progression` variant for Smart Website service-page context.
- Related section should feel like guided next steps, not generic cards.


## Phase 4 Exit Criteria

- Smart Website reusable components are improved.
- Weak diagnostic/card-grid section is replaced by `GridCardsSection` with the approved `diagnostic-grid` variant.
- System layers are redesigned.
- Image-led reality section exists.
- `RelatedContentSection` progression variant is created or improved without manual related lists.
- Prototype-only page-specific naming is removed from extracted components.
- Run the phase validation checks and make it clean pass.
- once phase 3 varified automatically move to next phase.

---

# PHASE 5 — Smart Website Live Page Migration ✅ DONE

## Goal

Update the real Smart Website page to use the new CSS system and reusable redesign components.

## Files to Inspect

- `src/domains/services/renderers/SmartWebsiteSystemsRenderer.tsx`
- `src/domains/services/data/smart-website-systems.ts`
- `src/domains/services/pages/smart-website-systems/index.tsx`
- CTA/contact helper usage
- related-content resolver/component usage

## Requirements

- Keep domain data mostly unchanged.
- Replace old renderer section stack with reusable redesign components.
- Keep CTA contract intact.
- Add the redesigned `RelatedContentSection` if graph resolver supports service-page related output.
- Do not manually hardcode related content lists.
- Do not move route ownership.
- Do not change production slug.
- After renderer migration, audit TypeScript types and validator expectations before changing data shape.
- If reusable components require adapter props, prefer adapter functions over changing domain data structures.
- Do not weaken validators to make the new renderer pass.
- Update validators only if they encode old structural assumptions that are no longer valid and the new rule preserves the same contract.
- Any validator/type update must be narrow, documented, and contract-preserving.

## Types and Validator Audit

Run this audit after replacing the live renderer section stack:

- TypeScript prop compatibility for all new reusable components.
- Domain data adapter types.
- CTA contract validators.
- Graph/related-content validators.
- Route ownership validators.
- SEO metadata validators.
- Internal link validators.
- Accessibility-sensitive markup checks.
- Content quality validators that may expect old section structure.

Rules:

- Prefer adapting renderer data to component props.
- Avoid changing service data shape unless absolutely necessary.
- Do not modify validators just because class names or DOM shape changed.
- Validator changes are allowed only when they preserve or strengthen the original contract.
- If a validator blocks because it expects old component names instead of contract behavior, update the validator narrowly and document the reason.

## Phase 5 Exit Criteria

- `/services/smart-website-systems` uses new design system.
- Page uses reusable components, not prototype-only components.
- Page includes redesigned related content presentation if graph output is available.
- Build and validators are clean.
- Type and validator audit is complete.
- Any type/validator updates are narrow, documented, and contract-preserving.
- Process-step design remains visually distinct from grid-card design.
- Test the Page visualy using playwright.
- imporve design and css.
- once phase 5 varified automatically move to next phase.

---

# PHASE 6 — Local SEO Component Planning and Variants ✅ DONE

## Goal

Return to Local SEO after Smart Website proves the system.

Local SEO should reuse component families but feel visually different.

## Files to Inspect

- `src/domains/services/renderers/LocalSeoAuthorityRenderer.tsx`
- `src/domains/services/data/local-seo-authority.ts`
- `src/domains/services/pages/local-seo-authority/index.tsx`

## Local SEO Direction

Local SEO should feel like:

- local visibility
- Google trust signals
- listing consistency
- service-area authority
- review strength
- search presence

Color direction:

- Use the main MindWP palette as the base.
- Local SEO may use the short local trust palette as accent tokens only:
  - `--local-primary`
  - `--local-secondary`
  - `--local-accent`
  - `--local-accent-soft`
- Do not make Local SEO feel like a separate brand.

Do not reuse Smart Website enquiry-feed/operations visuals.

## Local SEO Visual Motifs

- search result cards
- map pin/status
- Google profile panel
- listing consistency board
- signal strength bars
- local authority map
- visibility cycle

## Local SEO Mapping

- Hero -> `HeroSplitSection` with `visibility` variant
- Three assumptions -> `GridCardsSection` with `signal-board` variant
- We start with your website -> `LayerStackSection` or `ScopeSection` with `signal-map` direction
- Off-the-shelf SEO comparison -> `BeforeAfterSection` with `scorecard` variant
- What changes when SEO works -> `LayerStackSection` with `signal-map` variant
- What happens after we start -> `ProcessStepsSection` with `cycle` variant
- What we handle -> `ScopeSection` with `service-map` variant
- Real business proof -> `ProofStorySection` with `metric-story` variant
- Is this right fit -> `FitCheckSection` with `decision-cards` variant
- FAQ -> `AccordionFAQSection` with `single-column` variant
- CTA -> `CTASection` with `split-card` variant
- Related -> `RelatedContentSection` with `progression` variant

## Unique Local SEO Patterns

Prefer variants first.

Possible unique patterns:

- `LocalSignalMapSection` as a variant/pattern inside `LayerStackSection` signal-map
- `VisibilityScorecardSection` as a variant/pattern inside `BeforeAfterSection` scorecard

Create a separate unique component only if behavior/layout is genuinely different.

## Phase 6 Exit Criteria

- Local SEO required variants are defined.
- Data gaps are identified.
- No Smart Website-specific visuals are reused blindly.
- start the dev server on 3001 test everything and fix.
- once phase 6 varified automatically move to next phase.

---

# PHASE 7 — Local SEO Live Page Migration ✅ DONE

## Goal

Update the real Local SEO page using the new component variants.

## Requirements

- Keep domain data mostly unchanged.
- Keep route and slug unchanged.
- Use visibility/signal variants.
- Keep CTA contract intact.
- Add related content presentation if graph resolver supports it.
- Do not manually hardcode related content lists.

## Phase 7 Exit Criteria

- `/services/local-seo-authority` uses new design system.
- Page feels visually distinct from Smart Website.
- Build and validators are clean.
- start the dev server on 3001 test everything and fix.
- Test the Page visualy.
- imporve design and css of components.
- once phase 5 varified automatically move to next phase.

---

# PHASE 8 — Related Content Expansion and Cleanup ✅ DONE

## Goal

Finalize related-content presentation after Smart Website and Local SEO migrations.
Read and understand how the current related section is working.

Smart Website can create the first redesigned `RelatedContentSection` during Phase 4/5.
Phase 8 is for expansion, cleanup, and cross-page consistency.

## Current Facts

- Smart Website and Local SEO live renderers currently do not mount related content.
- Related content is graph-derived.
- Current presentation is generic card grouping.

## Requirements

- Preserve graph ownership.
- No manual related lists.
- Reuse the redesigned `RelatedContentSection` from Smart Website work.
- Expand support across service, industry, resource, blog, and case-study cards.
- Ensure the section adapts by page type and funnel role.
- Avoid generic three-card styling.
- Service pages should use progression framing.

## Variants

- `progression`
- `cards`
- `grouped`

Preferred service-page framing:

```text
Understand -> Compare -> Act
```

## Phase 8 Exit Criteria

- Related presentation is consistent across migrated page types.
- Graph ownership preserved.
- Smart Website and Local SEO can render related content without manual lists.
- Related component does not visually overpower CTA or proof sections.
- Test the Page visualy using playwright.
- imporve design and css.
- once phase 8 varified automatically move to next phase.

---

# PHASE 9 — Cleanup and Validation ⏳ PENDING

## Cleanup Tasks

- Remove prototype CSS after production migration.
- Remove or archive prototype-only components after reusable components replace them.
- Audit old CSS dependencies.
- Delete legacy compatibility styles .
- Remove unused classes.
- Remove hardcoded prototype content.

## Validation

Run safe checks:

- typecheck
- lint
- build if safe
- targeted validators already part of the redesign path
- `system:full` only when production migration is ready for full validation

Rules:

- Do not modify validators to make redesign pass.
- Do not weaken CTA contracts.
- Do not weaken graph contracts.
- Do not weaken route ownership.
- Do not weaken accessibility.

## Final Exit Criteria

- Official CSS system owns the redesign.
- Header and footer are migrated.
- Smart Website is migrated.
- Local SEO is migrated.
- Related content presentation is redesigned.
- Prototype CSS is removed.
- Build and validators are clean.

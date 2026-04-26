# REDESIGN GUIDE — MindWP

> Visual decision record for the MindWP redesign.
> Keep this doc short. Strategy discussions happen in chat; this file saves decisions only.
> Does not override `FOUNDATION.md`, `CONTENT.md`, `CONVERSION.md`, `GRAPH.md`, or `WRITING.md`.

## FINAL DESIGN PRINCIPLE

MindWP should not look like it builds websites.

It should look like it understands how service businesses lose, handle, follow up, and convert leads.
```

> Visual decision record for the MindWP redesign.
> Keep this doc short. Strategy discussions happen in chat; this file saves decisions only.
> Does not override `FOUNDATION.md`, `CONTENT.md`, `CONVERSION.md`, `GRAPH.md`, or `WRITING.md`.

---

## DIRECTION

Redesign direction: **Premium Operational**

MindWP should feel like a serious operating system for service businesses.

Target feeling:

- premium
- calm
- structured
- operational
- trustworthy
- system-led
- human enough for service-business owners

Avoid:

- generic agency look
- flat static HTML look
- SaaS-template look
- flashy startup look
- page-builder portfolio look
- blog/content-farm look

---

## REFERENCE BLEND

Use references for patterns only, not copying.

Target blend:

```text
Stripe confidence
+ Linear precision
+ service-business realism
+ MindWP operational language
```

Reference uses:

- Stripe: infrastructure authority, confident hero, premium gradients
- Stripe Sigma: dashboard-style system panels
- Linear-style UI: dark precision, status dots, compact operational details
- Dark.design: dark hero depth and premium atmosphere
- Modern SaaS examples: section rhythm and conversion clarity

---

## CORE PALETTE

```css
--mw-ink: #07111f;
--mw-navy: #0a1628;
--mw-blue: #173b63;
--mw-teal: #3f9caf;
--mw-cyan: #8dd8e8;

--mw-paper: #f6f8fb;
--mw-soft: #eef3f7;
--mw-white: #ffffff;
--mw-line: rgba(10, 22, 40, 0.12);
```

Functional colors:

```css
--mw-good: #2f9b73;
--mw-risk: #c95050;
--mw-warn: #d89b28;
```

Functional colors are for meaning only: risk, fixed, warning, status, before/after.

---

## APPROVED GRADIENTS

Use only these gradient roles unless this doc is updated first.

```css
--gradient-hero:
  radial-gradient(circle at 20% 20%, rgba(63, 156, 175, 0.35), transparent 28%),
  linear-gradient(135deg, #07111f 0%, #0a1628 45%, #173b63 100%);

--gradient-panel-dark:
  linear-gradient(145deg, #07111f 0%, #0f2038 100%);

--gradient-panel-blue:
  linear-gradient(145deg, #0a1628 0%, #173b63 58%, #245b78 100%);

--gradient-system-glow:
  radial-gradient(circle at top right, rgba(63, 156, 175, 0.18), transparent 35%);

--gradient-surface:
  linear-gradient(180deg, #ffffff 0%, #f6f8fb 100%);

--gradient-surface-soft:
  linear-gradient(135deg, #f6f8fb 0%, #eef3f7 55%, #ffffff 100%);

--gradient-diagnostic:
  linear-gradient(135deg, rgba(201, 80, 80, 0.08), rgba(47, 155, 115, 0.08));

--gradient-cta:
  radial-gradient(circle at 80% 20%, rgba(141, 216, 232, 0.22), transparent 30%),
  linear-gradient(135deg, #07111f 0%, #0a1628 52%, #173b63 100%);
```

Gradient roles:

| Token | Use |
| ----- | --- |
| `--gradient-hero` | homepage and major service heroes |
| `--gradient-panel-dark` | proof blocks, system cards, dark CTA containers |
| `--gradient-panel-blue` | system explanation sections and operational visuals |
| `--gradient-system-glow` | subtle background accents only |
| `--gradient-surface` | clean readable light sections |
| `--gradient-surface-soft` | diagnostic and supporting sections |
| `--gradient-diagnostic` | before/after context only |
| `--gradient-cta` | final CTA and high-intent action sections |

Rules:

- no one-off gradients in components
- max two gradient roles per section
- dark gradients need strong contrast
- diagnostic gradients must carry meaning

---

## TYPOGRAPHY

Decision:

```text
Headings: Sora
Body: Inter
UI labels: Inter
```

Rules:

- headings structured and premium
- body highly readable
- UI labels compact
- no decorative or playful fonts

Suggested scale:

```css
--font-hero: clamp(2.6rem, 5vw, 5.4rem);
--font-h1: clamp(2.3rem, 4vw, 4.4rem);
--font-h2: clamp(1.9rem, 3vw, 3.2rem);
--font-h3: clamp(1.25rem, 2vw, 1.7rem);
--font-body-lg: 1.125rem;
--font-body: 1rem;
--font-small: 0.875rem;
```

---

## PAGE RHYTHM

Preferred long-page rhythm:

```text
Dark authority hero
Soft diagnostic section
White explanation section
Dark or blue system visual section
White proof section
Soft industry/resource section
Dark CTA
```

Avoid repeating:

```text
centered heading -> grid of cards
```

---

## SECTION PATTERNS

Approved patterns:

- Diagnostic split: business situation + broken/fixed visual
- Operating timeline: enquiry -> assigned -> followed up -> booked -> reviewed
- Layer stack: visibility, capture, response, follow-up, proof
- Dark proof panel: case-study/proof/what-changed moments
- Interactive tabs: pain points, industries, systems, before/after only

---

## CARD TYPES

Approved card types:

- Default card: white surface, subtle border, soft shadow, operational icon tile
- Premium card: dark navy, teal/cyan border, subtle glow, limited use
- Diagnostic card: risk/fixed contrast, before/after meaning
- System UI card: simplified operational mockup, not screenshot

System UI examples:

```text
New enquiry
Assigned
Follow-up sent
Booked
Review requested
```

---

## SIGNATURE MOTIFS

Use repeatedly:

- system flow lines
- status dots
- operational tiles
- broken vs fixed flow
- layered system stack

Broken/fixed language:

```text
Call missed -> Captured
Form ignored -> Assigned
No follow-up -> Followed up
Invisible -> Visible
```

---

## BUTTONS

Primary CTA:

- light background: dark/navy or teal
- dark background: white button with dark text
- confident, not flashy

Secondary CTA:

- outline or ghost
- lower contrast than primary

Allowed CTA examples:

- Start a Conversation
- Show Me What’s Broken
- Discuss Your Project
- View the System

Avoid hype CTA language.

---

## MOTION

Allowed:

- scroll reveal fade
- slight upward translate
- card hover lift
- tab content fade
- FAQ expand/collapse
- timeline step reveal
- subtle hero gradient movement
- subtle connector-line reveal

Not allowed:

- bouncy motion
- spinning icons
- excessive parallax
- constant motion
- animation that delays reading

Motion should feel calm and useful.

---

## PAGE TEMPLATE DECISIONS

Homepage:

- dark premium hero
- diagnostic section
- system explanation
- industry relevance
- proof/case-study surface
- final dark CTA

Service pages:

- problem recognition
- before/after contrast
- operational flow
- system layer explanation
- proof
- conversion CTA

Industry pages:

- real industry situation
- industry-specific failure points
- practical operational examples
- proof or relevant system connection
- CTA after recognition

Case studies:

- real constraint
- broken state
- what changed
- visible outcome
- proof without over-polish

Resource/blog pages:

- clean and readable
- use new visual system lightly
- avoid over-design

---

## IMPLEMENTATION STRATEGY

Preferred approach:

1. Redesign one important page first.
2. Use `/services/smart-website-systems` as the prototype.
3. Create isolated V2/redesign components.
4. Do not refactor global CSS first.
5. Review rendered result.
6. Extract approved patterns into reusable components.
7. Replace old reusable components gradually.

Do not start with broad token/CSS refactor.

---

## COMPONENT PRIORITY

Start with reusable patterns after prototype approval:

1. service hero
2. diagnostic grid/split
3. before-after panel
4. system layer stack
5. operational flow timeline
6. proof narrative panel
7. fit-check panel
8. authority CTA
9. cards/buttons/badges
10. FAQ

---

## REDESIGN RULES

Preserve:

- content meaning
- domain data
- CTA contracts
- graph contracts
- route ownership
- validators
- page behavior
- accessibility
- mobile usability

Allowed:

- layout changes
- visual hierarchy changes
- component JSX changes
- spacing changes
- card styling
- motion and interaction
- small copy tightening only when design requires it

Not allowed:

- content expansion
- new positioning
- new CTA model
- new graph logic
- route changes
- runtime AI behavior
- random page-by-page styling

---

## FINAL DESIGN PRINCIPLE

MindWP should not look like it builds websites.

It should look like it understands how service businesses lose, handle, follow up, and convert leads.
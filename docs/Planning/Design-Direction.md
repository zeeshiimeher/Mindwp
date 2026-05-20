# Design Direction — MindWP Rebuild Baseline

**Status:** Proposed baseline. Treat as the working direction for the first three pages (Homepage, Smart Website Systems, Local SEO Authority). Stable decisions should be merged into durable design docs or kept as approved baseline memory after those pages are approved. Until then, anything here can be revised when a page rebuild surfaces a better answer.

Phase 4 implementation works against this. After approval, later page rebuilds should not loosen the direction without explicit user approval.

This is design direction only. It is not a page plan. Page plans live in renderer top comments and in `docs/Planning/Website-memory-and-plan.md`.

## Visual Personality In One Line

A dark-controlled, operational, service-business-aware interior — calm, precise, premium, and visibly *connected*. The page should feel like someone watched the business for a day, not like a marketing template.

The baseline must clearly out-position three things buyers see daily:

1. Bright generic agency split-hero plus service-grid layouts.
2. SaaS-product landing pages (dashboards, feature cards, glossy product UI).
3. Cheap WordPress builder/agency sites and local SEO spam.

If a section could be dropped into any of those three categories, redesign it.

## Color And Surface Direction

Anchor: existing `--mw-brand-primary` deep navy (#061323) and `--mw-brand-secondary` blue-teal (#103e5a). These remain the dominant brand presence — already correct for "controlled, dark, calm, precise."

Accent semantics (already in tokens — keep, do not expand):

- Cyan `--mw-signal-cyan` — primary action, "active," website/control point
- Teal `--mw-signal-teal` — local visibility, find-verify-trust, secondary path
- Green `--mw-signal-green` — handled / owned / good state
- Amber `--mw-signal-amber` — follow-up due / weak / warning state
- Red `--mw-signal-red` — leaking / missed / lost state
- Purple `--mw-signal-purple` — proof / review (use sparingly)

Surface hierarchy (already in tokens):

- Light: `--mw-bg-page` → `--mw-bg-mist` → mist-tinted gradients
- Dark: `--mw-bg-brand-primary` → `--mw-brand-primary-mid` → gradient-hero / gradient-dark
- Cards/panels: existing `mw-surface-card`, `mw-surface-card-soft`, `mw-surface-panel`, `mw-surface-panel-dark`, `mw-surface-callout` — keep these; they already differentiate light vs dark surface skins.

The rebuild does not need new brand colors. It needs more disciplined *use* of the existing palette: signal colors only on signal moments, not as decoration.

What likely needs to change:

- A second light-surface gradient besides `gradient-mist` — something subtly cool/teal-grounded so light sections do not all read identical. Either add a `gradient-section-cool` or extend `gradient-section-teal`.
- A dark "panel-on-dark" surface treatment with stronger interior depth (current dark hero relies on radial gradients only — page-owned dark panels currently improvise borders/backgrounds via raw `--mw-white-08/12` instead of a token surface).
- A "trust-light" surface for clinic content blocks: warmer than mist, calmer than callout. May be unnecessary if the existing palette can carry it — defer until SWS clinic sections prove the need.

## Typography Rhythm

The token scale is solid: hero (clamp 48–78px), h1 (clamp 48–64px), h2 (clamp 32–52px), with a wide spread of body, label, and eyebrow tokens. Inter as sans, JetBrains Mono available for tabular accents.

Direction:

- Use `--mw-text-hero` only on the homepage hero. Service-page heroes use `--mw-text-h1` (48–64px) so the homepage hero remains the visual apex.
- Eyebrows (`--mw-text-eyebrow` at 10.5px, uppercase, 0.16em tracking) carry the diagnostic register. They should be the first signal that a section is operational, not decorative.
- Mono is allowed only on operational labels: numbered states, tabular signals, "01/02/03" markers in leak maps and operating boards. Never on body copy or hero subtitles.
- Body lengths should respect `max-width: 56ch` for descriptions (already in section description CSS) — keep that discipline; long copy is the failure mode of "observed" tone.

## Spacing And Section Rhythm

Existing `--mw-section-block` (clamp 4–7rem) is fine for normal sections. Two adjustments worth considering during the baseline:

- A `--mw-section-tight` for chained sections that should feel grouped (e.g. "what changes after the system" + "scenario board" reading as one beat).
- A `--mw-section-anchor` for the rare full-bleed dark anchor section (hero / final CTA). Currently `--mw-section-spacious` (clamp 5–9rem) covers this but is not used.

Section rhythm should breathe with the page argument, not march at fixed cadence. Common failure mode: every `SectionShell` reads the same length. The rebuild should explicitly *vary* surface tones, layout shape, and visual density across consecutive sections, not just content.

Rhythm pattern to aim for on the homepage (illustrative, not prescribed):

```
dark hero with operating signal
→ light mist leak map
→ dark control-point layered map
→ light contrast panel (normal vs system)
→ teal-mist connected-handling surface
→ dark "five systems as one path" surface
→ light before/after panel
→ light scenario board
→ light selective showcase
→ light fit filter
→ light credibility band
→ dark final diagnostic CTA
```

Alternating tone is the rhythm engine. The actual section count stays flexible.

## Backgrounds, Gradients, Borders, Glow, Depth

Existing assets:

- `--mw-gradient-hero` — dark + cyan/teal radial wash. Strong; keep for the homepage hero.
- `--mw-gradient-cta` — same family, slightly different focal point. Use for the final diagnostic CTA only.
- `--mw-gradient-section-dark`, `--mw-gradient-section-mist`, `--mw-gradient-section-teal` — three section tones already exist.
- `--mw-gradient-grid-texture` — dot-grid overlay at ~0.035 opacity for premium depth.

Direction:

- Use the dot-grid texture sparingly: hero, final CTA, one mid-page dark anchor. Not on every dark surface.
- Borders should mostly be `--mw-border-light` on light surfaces and `--mw-border-panel`/`--mw-white-08–12` on dark surfaces. Avoid colored signal borders for static decoration; reserve them for active/leaking states inside operating surfaces.
- Glow is operational only: signal dots, status indicators, the leaking-state highlight in leak maps. No glow on cards as ambient effect.
- Shadows: `--mw-shadow-card` on light surfaces, `--mw-shadow-panel` for elevated maps. Avoid stacking shadow + border + glow on the same surface — pick one elevation language per surface.
- Radii: `--mw-radius-panel` (16px) is the workhorse. `--mw-radius-2xl` (24px) for the major hero visual and final CTA wrap. Avoid mixing radii within a single section.

Critical missing piece for premium feel: a **subtle vertical grid line / axis treatment** for operating maps. The current leak-map JSX uses arrows in copy ("Discovery → Capture → Response") but no visual rail. A 1px guide line connecting state cards would lift these from "cards in a row" to "operating path." This can live as an inline SVG inside page-owned JSX; it does not need a shared component yet.

## Icon Style And Restraint

Library: `lucide-react` (already in use, already in dependencies). Keep it.

Rules:

- Icons appear inside operational containers (signal cards, leak-map states, ownership rows, find-verify-trust steps). Not as standalone decoration in headings.
- Icon size: 14–16px inside small surfaces, 20px max in larger callouts. Never larger.
- Icon weight: `strokeWidth={1.5}` by default. The `1.75/2` defaults look generic; 1.5 reads more premium and aligns with the calm tone.
- Icon color: tinted by signal state (red for leaking, amber for warn, green for handled, cyan for active). Never use the same color for all icons in a row — it removes their function.
- No icon-only feature grids. Every icon needs a business label next to it; if the label is generic, drop the icon.

## Motion And Reveal

Existing system (`mw-animate-fade/up/panel/section/list/stagger/line` with `data-js-motion` + IntersectionObserver) is the right baseline. Do not introduce a motion library.

Direction:

- Reveal happens once on enter. Never loop. Never trigger on scroll.
- Stagger only on grouped reveals where the order is meaningful (leak-map states, find-verify-trust steps, operating board rows). Not on generic card grids.
- `mw-animate-line` on a single SVG path is the highest-value motion in the system — use it on the connecting rail of the leak map and the find-verify-trust path. One reveal per page, max two.
- The pulsing footer status dot (`mw-pulse-dot`) is the only continuous motion that should appear anywhere on the site. Resist adding others.
- All motion must respect `prefers-reduced-motion`; the existing CSS already handles this.

## Section Pattern Library — What The First Three Pages Need

The baseline needs working JSX patterns for these, owned page-locally for now (not extracted to shared components):

| Pattern | Used on | Notes |
| --- | --- | --- |
| Operational signal surface | Homepage hero visual | Already roughed in Section2-style cards; needs to become the hero's right column |
| Leak map (path with one dominant leak) | Homepage, SWS, Local SEO | Page-owned. Add SVG connector line |
| Layered website system surface | Homepage, SWS | Stacked visual: website surface → handling layer → improvement layer |
| Connected-handling path cards | Homepage | Horizontal staged board: enquiry → first response → context → owner → follow-up → review/proof |
| Scattered vs connected contrast | Homepage, SWS | Two-pane operating-state contrast, not "before/after benefit" |
| Service-page anatomy | SWS | Anatomical decision-path of one service/treatment page; SWS-specific |
| Website-as-control-point map | SWS | Concentric or radial visual; the website is the hub |
| Find-verify-trust-contact path | Local SEO | Horizontal path with verification/trust beats; visually distinct from leak map |
| Local signal board | Local SEO | Local search, listing, reviews, service-area, GBP signals — all with state |
| GBP-to-website alignment surface | Local SEO | Two-column "same story" visual |
| Implementation pathway selector | SWS | Six pathways as a fit-by-business surface, not a tech grid |
| Fit filter | All three | Two-column "for / not for" panel, not a feature checklist |
| Scenario board | Homepage | Illustrative-only; clearly labeled |
| Diagnostic CTA panel | All three | Use existing `DecisionPanel`; varies content not shell |

These should be built as page-owned JSX in the first three renderers. Extract to shared components only if two of the three pages reuse the identical visual shape after approval.

## "Five Systems" Visual Treatment On The Homepage

Carry-forward from Phase 1: the five systems must not read as five equal service tiles. The homepage should treat them as **one connected path with five named protections**, not a service grid.

Direction:

- The "Five Systems" section should be a single operating map with five labeled positions on a path, not a 2×3 or 3×2 card grid.
- Smart Website Systems is the visual hub. The other four sit around it as connected moments (Local SEO upstream of contact; Lead Response at the contact moment; Follow-Up & CRM after the first response; Reputation & Review after completed work).
- This is the strongest single visual asset to design well during the baseline. Get this surface right and the homepage carries.

A small radial/concentric "control point" visual with four orbiting positions reads more accurately than tiles. Avoid the obvious orbital cliché — anchor each position to a working-day object (call, form, follow-up, review) rather than abstract orbits.

## Service-Business vs Clinic Visual Treatment

Carry-forward from Phase 1: "practice front door" needs strengthening. Recommended treatment:

- The homepage hero shows one operating signal surface that works for both audiences (calls, forms, follow-up, reviews). Do not split the hero into two columns by audience.
- Lower on the homepage and on service pages, dedicated audience-specific surfaces are warranted: one scenario panel framed as a service business (e.g. roofing or HVAC operating beat), one framed as a clinic (e.g. consultation request flow, patient trust).
- Clinic surfaces should be visually calmer (slightly warmer light surface, less red-signal density, more green/teal). The visual tone signals "trust path" rather than "leak diagnosis." This may be achievable with the existing palette by simply reducing red-signal usage on clinic panels — defer adding a new "trust-light" token until the SWS clinic section proves the need.
- "Practice front door" is the clinic version of "website is the visible control point." Treat it as a parallel anchor framing on clinic sections — same visual pattern (layered website surface), different label.

## Proof / Showcase Treatment

Showcase is **proof support**, not the page argument. Direction:

- Selected work appears as one curated visual band on the homepage and one on SWS. Three to four examples max per band.
- During baseline, avoid auto-scroll carousels and portfolio-gallery behavior. Richer interactive proof treatments (filtered tabs, expandable detail, side-by-side compare) can be reconsidered after the baseline pages are approved.
- Each item must annotate the business point it proves: "clearer service page," "trust above the fold," "enquiry path," "practice front door quality," "handoff connection." If a thumbnail cannot annotate, drop it.
- Use a slight asymmetric layout (one featured + two support, or 60/40 split) rather than a 3-column equal grid — the grid reads portfolio.
- No fake metrics, no fabricated "Results / ROI / 287% increase" labels.
- If real proof is thin during the baseline, prefer scenario boards over a half-built showcase. Showcase is optional during Phase 6; the homepage stands without it.

## Homepage vs SWS vs Local SEO Differentiation

Each page must have a distinct *primary visual argument* so consecutive page views feel different:

- **Homepage**: operating signal surface in hero + connected-handling path + "one connected path with five protections" map. Argument is *the whole picture*.
- **Smart Website Systems**: website-as-control-point map + service-page anatomy + implementation pathway selector. Argument is *the website carries the decision path*.
- **Local SEO Authority**: find-verify-trust-contact horizontal path + local signal board + GBP-to-website alignment surface. Argument is *visibility plus trust path, not rankings*.

The "~20%" repetition guidance from CLAUDE.md is a design smell, not a numeric validator. If two of these three pages start to feel visually interchangeable, redesign — don't measure. Shared shells and rhythm are fine; the primary visual argument of each page must feel distinct.

## What CSS / Tokens / Components Need To Change

**Phase 4 baseline (done):**

- Add `--mw-shadow-dark-lg` token. Referenced from 19 hero/feature visual surfaces but missing from `tokens.css`; before Phase 4 every dark hero panel fell back to no shadow. Value chosen to read against dark navy gradients: `0 24px 60px rgba(0, 0, 0, 0.32)`.

**Deferred to the page rebuilds that need them (Phase 6/7), not pre-built in Phase 4:**

- `SectionShell` `texture` slot. `SectionShell` already supports `className` and `contentClassName`. A `texture` slot mirrors the `HeroFrame` API but no current renderer uses one. Add it the first time a real Phase 6/7 section needs an absolute-positioned overlay; don't ship unused API surface.
- A second light-surface gradient tone beyond `mist` and `teal-mist`. Add it the first time a real section can't be expressed with existing tones; don't bloat tokens speculatively.
- Token conversion of inline hex values in current Homepage Section 2–7 and the SWS recognition section. That JSX is going to be replaced wholesale during the Phase 6/7 page rebuilds — converting it now is waste. The discipline is enforced going forward: any new section JSX written from Phase 4 onward uses `var(--mw-*)` tokens only.

**Defer until pages prove the need:**

- A "trust-light" surface token for clinics.
- New typography tokens — current scale is sufficient.
- New radius or spacing values — current scale is sufficient.
- A shared `OperatingStateCard`, `LeakMap`, `FindVerifyTrustPath`, or `LayeredWebsiteSurface` component — keep page-owned through approval of all three pages, then extract only the ones that genuinely repeat.

## Expected Feel — Homepage

First screen: a calm dark hero with a real-looking "live business signal" surface to the right (calls, forms, follow-up, reviews — with states). The reader sees their own day before reading the headline.

Scroll one: a light leak map with one dominant leak (response/follow-up). The page argues "the business is working; the system around it is leaking" visually.

Scroll two: a dark layered website surface showing the website on top, handling underneath, improvement below. The argument shifts to "the website is the control point."

Scroll three: a contrast panel showing normal website vs website system as operating states, not aesthetics.

Scroll four: a connected-handling path with five named protections, anchored visually to one diagnostic path (not a grid of five tiles).

Scroll five: a before/after operating panel — clear, calm, no revenue claims.

Scroll six: a scenario board with two-to-three realistic working-day beats (one service business, one clinic).

Scroll seven (optional): a small curated showcase band, each item annotated.

Scroll eight: a fit filter that visibly repels poor-fit buyers without being arrogant.

Scroll nine: a quiet credibility section — no founder photo, no logo wall, no fabricated stats.

Final: a dark diagnostic CTA panel with the "what we'll review" expectations.

The page should feel substantial but never repetitive. Tone alternates dark/light. Visuals alternate map/contrast/board/panel.

## Expected Feel — Smart Website Systems

Visually distinct from the homepage because SWS argues *what the website specifically does*, not the whole MindWP picture.

The most page-defining surfaces are:

1. Hero with a website-as-control-point visual (concentric or layered, not a signal feed).
2. Service-page anatomy — a vertical or split surface that walks down one service/treatment page showing problem → explanation → proof → CTA → handoff. The anatomy itself is the visual.
3. Implementation pathway selector — six pathways shown as business-fit panels, not as a tech-stack grid or builder comparison.
4. Boundary section showing what SWS *does not* own (Local SEO, Lead Response, Follow-Up, Reputation) — visually present but visually subordinate, so the page does not absorb its neighbors.

## Expected Feel — Local SEO Authority

Visually distinct from SWS because Local SEO argues *find → verify → trust → contact*, not *clarity in the page*.

The most page-defining surfaces are:

1. Hero with a horizontal find-verify-trust-contact path, ideally with a connecting SVG rail and one dominant weak state highlighted.
2. Local signal board — signals across map listing, GBP, reviews, service-area, website pages, with state.
3. GBP-to-website alignment surface — two columns "same story / different story" with state matching/mismatching.
4. Maintained-not-installed cycle — orbital or cyclic surface only here; do not reuse on other pages.

The visual emphasis should feel more lateral (path-shaped, horizontal) than the homepage and SWS, which lean more central/layered.

## What To Add Now vs Avoid Until After The First Three Pages

**Added during Phase 4 baseline:**

- `--mw-shadow-dark-lg` token.

**Added during page rebuilds when a real section needs them (Phases 6–8):**

- `SectionShell` `texture` slot (parity with `HeroFrame`).
- Any new gradient tone beyond `mist` / `teal-mist`.
- Token conversion of inline hex values inside any JSX being rewritten during the rebuild.

**Build page-locally during rebuilds, extract only if proven across multiple pages:**

- Leak map, find-verify-trust path, layered website surface, connected-handling path cards, local signal board, GBP-to-website alignment surface, service-page anatomy, implementation pathway selector, fit filter, scenario board.

**Avoid until after the first three pages are approved:**

- New shared "Map" or "Path" or "Board" components.
- New surface tokens beyond what the baseline proves.
- New typography tokens.
- A motion library.
- Auto-scroll carousels and portfolio-gallery behavior. Other interactive proof patterns can be reconsidered after baseline.
- A new icon set or icon style.
- Custom illustrations (defer to a later phase if needed at all).
- Image-heavy hero treatments.

## Phase 4 Acceptance Checklist

Phase 4 was intentionally narrow. Confirm:

1. `--mw-shadow-dark-lg` token exists in `tokens.css` and the 19 existing references no longer fall back to no shadow.
2. No new shared `LeakMap` / `FindVerifyTrustPath` / `LayeredWebsiteSurface` components were extracted. These remain page-owned through Phases 6–8.
3. No `SectionShell` `texture` slot or new gradient tones were added speculatively. Either is added the first time a real page rebuild needs it.
4. No mass hex-to-token conversion was attempted in JSX scheduled for rebuild — that work happens inside each Phase 6/7/8 page rebuild.
5. `pnpm check:minimal` (= `pnpm typecheck && pnpm lint && pnpm check:names`) passes. `pnpm check:architecture` passes.
6. No public `/systems`, `/topics`, `/portfolio` paths and no `aichat` / `workflows` slugs were re-introduced; no backend platform names appear in source.

Validation commands used in Phase 4 must already exist in `package.json` scripts. Do not invent commands.

## Open Decisions For User Review

These are design-direction decisions the user should explicitly accept or redirect before Phase 4:

1. Treating the five systems as a single connected map (not five equal tiles) on the homepage — confirmed in Phase 1 carry-forward; this doc applies it visually.
2. "Practice front door" as a parallel anchor framing for clinics on shared sections rather than splitting pages by audience.
3. Reserving `--mw-text-hero` for the homepage only; SWS and Local SEO open with `--mw-text-h1`.
4. Tone-alternation as the rhythm engine — explicit dark/light pattern across the homepage rather than uniform light sections.
5. Implementation pathway selector as a *business-fit* surface, not a builder comparison or tech grid.
6. Showcase as optional in baseline; the homepage can ship without a showcase band if real proof is thin.
7. Token-conversion of current inline hex values counts as Phase 4 work, not a separate cleanup pass.

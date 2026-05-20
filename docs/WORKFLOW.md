# WORKFLOW — Cross-Folder Design Loop

How pages get designed and shipped at MindWP. The canonical workflow going forward.

## Why Two Folders

`Mindwp/` (this repo, production code at the root) accumulated heavy structural discipline — token-only styling, two shell components that standardize every section's silhouette, validators that block builds on drift terms, and 10+ governing docs. That environment is correct for production, but it suppresses design. Three Homepage rebuilds inside this folder produced visually flat results.

`Mindwp/Mindwp-Design/` is a Vite sandbox nested inside this same repo, on the same branch. No validators. No shells. Light token discipline only (a small `theme.css` aligned to Mindwp's brand + signal palette — see `Mindwp-Design/README-active-model.md`). Inline hex, inline `style={}`, raw `<section>` JSX, fast `pnpm dev`. The Figma Make sessions that produced the Hero / LeakDiagnosis / Foundation / SixSystemStack designs work there.

Splitting them is the answer. **Plan in `Mindwp/`. Design + review + revise in `Mindwp-Design/`. Port only when satisfied.**

## The Loop (Sandbox-First)

The port is a separate, **explicit, user-triggered** step. Do not auto-port a finished design. The user inspects the sandbox version, requests revisions until they're satisfied, and then says "port this." Until then, all visual iteration stays in `Mindwp-Design/`.

```
┌─────────────────────────────────────────────────────────────────────┐
│ 1. Plan in Mindwp/                                                  │
│    Which business moment does the page own?                         │
│    What's the recognition?                                          │
│    What's the CTA?                                                  │
│    What's in / not in?                                              │
│    Plans live in chat or in docs/PAGES.md (durable decisions).      │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│ 2. Design in Mindwp-Design/src/app/                                 │
│    Adapt an existing components/<Name>.tsx, or write a fresh one.   │
│    Raw <section>, inline style, glow halos, custom shadows.         │
│    Use var(--mw-*) tokens from theme.css when colors match the      │
│    Mindwp palette; inline hex is fine for everything else.          │
│    Use active 5-system names (see README-active-model.md).          │
│    Iterate in pnpm dev until the page reads well.                   │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│ 3. Review + revise in Mindwp-Design                                 │
│    User scrolls the sandbox dev server and flags problems.          │
│    Each revision happens in the sandbox JSX — no production         │
│    code touched yet.                                                │
│    Repeat until the user signals satisfaction.                      │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
                    [user says "port this now"]
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│ 4. Port to Mindwp/src/screens/<Page>.tsx                            │
│    Hero  → HeroFrame with custom visual in `visual` slot.           │
│    Body  → raw <section> JSX (NOT SectionShell).                    │
│    Style → convert remaining inline hex to var(--mw-*) + mw-*       │
│            classes where matched. Add new tokens for recurring      │
│            patterns. Inline hex stays only for genuine one-offs.    │
│    Names → confirm active 5-system names throughout.                │
│    Links → swap onNav={setPage} for Next.js <Link> / <a href>.      │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│ 5. Validate the port                                                │
│    pnpm check:names       — must pass (strategy drift gate)         │
│    pnpm typecheck         — must pass                               │
│    pnpm lint              — must pass                               │
│    pnpm test:smoke        — Playwright on port 3001                 │
│    (pnpm check:clean-base is warn-only — review warnings, no block) │
└─────────────────────────────────────────────────────────────────────┘
```

The discipline shift: **design lives in the sandbox until the user explicitly authorizes the port.** Do not let validator-passing in production substitute for visual approval.

## Phase 1 — Plan

Plans live in the chat or, for durable decisions, in `docs/PAGES.md`. A plan covers:

- **Business moment** — which one of: find / verify / trust / contact / book / handled / proof.
- **Owning system** — which of the five active systems (or "whole picture" for the homepage).
- **Recognition** — the working-day moment the visitor should see themselves in.
- **Section sequence** (rough, not final) — what arc the page argues.
- **CTA posture** — diagnostic, matching the owning system.
- **What's in / not in** — protects boundaries (e.g. Local SEO page must not absorb response/follow-up).

No JSX in this phase. No edits to `src/`.

## Phase 2 — Design in `Mindwp-Design/`

Open `Mindwp-Design/` in a separate terminal and run `pnpm dev`.

Two starting points:

1. **Adapt an existing component.** The folder contains roughly a dozen draft components from prior Figma Make sessions: `Hero.tsx`, `LeakDiagnosis.tsx`, `Foundation.tsx`, `SixSystemStack.tsx`, `PutInPlace.tsx`, `FitFoundations.tsx`, `ClientShift.tsx`, `Capabilities.tsx`, `Infrastructure.tsx`, `Industries.tsx`, `Visibility.tsx`, `CaseStudy.tsx`, `Examples.tsx`, `FAQ.tsx`, `CTA.tsx`, `Footer.tsx`, plus several pages. `SixSystemStack.tsx` has been updated to the active 5-system model. Some older pages (`AILeadHandling.tsx`, `AIChat.tsx`, etc.) still use pre-reset names — see `Mindwp-Design/README-active-model.md` for the rename map and use active names in new work.
2. **Write a fresh component.** New file in `src/app/components/`. Raw `<section>`. Inline `style={...}`. Use `var(--mw-*)` tokens from `Mindwp-Design/src/app/theme.css` when colors match the brand palette; inline hex is fine for everything else. Whatever Tailwind utility classes the sandbox supports.

Goals during this phase:

- Each section has a **distinct geometry** (not all rounded-card grids).
- Hero leads with the working day, not the system stack.
- The five-system visual respects the visual rule from `docs/PAGES.md` (flagship + connected protections, never five equal tiles).
- Copy uses plausibly specific details ("Postcode N6 — page 3", "Sat 09:14 — unread") — illustrative texture, not invented client outcomes.
- Inline glow halos, custom shadows, lane-board accents, handoff arrow chips are all welcome.
- Use active 5-system names. See `Mindwp-Design/README-active-model.md`.

Iterate. Show the user. Revise. Repeat. Stay in this phase until the user signals they're satisfied.

## Phase 3 — Port to `Mindwp/` (only when the user says so)

Open the source file you're porting to (e.g. `src/screens/Homepage.tsx`) and rewrite it from the Mindwp-Design source. The port is mechanical, with five disciplined conversions:

### 3a. Hero shell

The hero uses `HeroFrame` from `@/components/layout/HeroFrame`. Pass the custom right-side visual as the `visual` prop. Body sections do **not** use `SectionShell` — they are raw `<section>` JSX, each with its own padding/bg/container.

### 3b. Style → tokens + classes

For each inline value in the sandbox JSX, look for a token equivalent in `src/styles/tokens.css` and use it. Common conversions:

| Inline value (sandbox) | Production replacement |
| --- | --- |
| `#061323`, `#103E5A` brand colors | `var(--mw-brand-primary)`, `var(--mw-brand-secondary)` |
| `#35C7D8` cyan | `var(--mw-signal-cyan)` |
| `#14B8A6` teal | `var(--mw-signal-teal)` |
| `#F4B740` amber | `var(--mw-signal-amber)` |
| `#E76F6F` red | `var(--mw-signal-red)` |
| `#9B7DE0` purple | `var(--mw-signal-purple)` |
| `#21B985` green | `var(--mw-signal-green)` |
| `#F6FAFC`, `#FFFFFF`, `#E6EEF3`, `#6F8190`, `#4C5E6F` | mist / page / border-light / text-subtle / text-secondary tokens — check `tokens.css` |
| `shadow-[0_24px_60px_rgba(0,0,0,0.25)]` | `shadow-[var(--mw-shadow-dark-lg)]` |
| 32px or 72px grid texture overlays | `mw-grid-texture-*` utility classes |
| Cyan/teal/green/amber blur halos | `mw-glow-halo--*` utility classes |
| Lane-board top accent stripes | `mw-lane-accent` (or kept inline if one-off) |
| Round handoff chip on a divider | `mw-handoff-chip` |

For recurring values that have no token yet, **add a token** to `tokens.css` or a utility class to `layout.css` / `components.css`. Inline hex stays available for one-off values that don't justify a token.

### 3c. Banned-name rewrite

The sandbox uses pre-reset names. The port must rewrite them:

| Sandbox name | Active model name | Slug |
| --- | --- | --- |
| Smart Website System(s) | Smart Website Systems | `smart-website-systems` |
| Local SEO Authority | Local SEO Authority Systems | `local-seo-authority` |
| AI Lead Handling | Lead Response & Handling Systems | `lead-response-handling` |
| CRM & Automation | Follow-Up & CRM Systems | `follow-up-crm` |
| Reputation & Review | Reputation & Review Systems | `reputation-review-systems` |
| Revenue Growth | **DROP** entirely — Revenue Recovery is a lens only | — |

Any journey rail (`Found → Understood → Captured → Answered → Followed up → Proven → Improved`) should drop "Improved" or rename it to "Maintained" — Revenue Growth is gone.

### 3d. Router stubs → real navigation

Sandbox internal nav uses `onNav={setPage}` with a useState page switcher. Production uses Next.js `<Link>` from `next/link` or plain `<a href="/services/local-seo-authority">`. Convert per-link during the port.

### 3e. Page providers

Keep `CTARegistryProvider` from `@/components/system/PageEnforcement` wrapping the `<main>` — it's wired into route metadata. Other registry/provider wrappers stay too.

## Phase 4 — Validate

```bash
pnpm check:names        # must pass
pnpm typecheck          # must pass
pnpm lint               # must pass
pnpm test:smoke         # ~20 routes Playwright runtime smoke
```

`pnpm check:clean-base` is now warn-only and won't block. Read the warnings; they often point at residual sandbox patterns worth tidying.

If `tests/smoke/homepage.spec.ts` (or the equivalent for the page you're porting) asserts old heading text and you changed it, update the assertion.

## Smoke Test Updates

`tests/smoke/homepage.spec.ts` currently asserts the Phase-6 Homepage heading. After porting a new homepage, update the heading assertion to match the new H1 (likely "Work Comes In. Too Much Slips Away.").

## What This Workflow Replaces

- The old "BUSINESS REALITY → ... → JSX → APPROVAL → SYSTEMIZATION" build flow (which put design last and inside a shell sandwich).
- The four `.claude/skills/mindwp-page-plan|rebuild|review` skill files (deleted; their workflow is now this doc).
- `docs/Planning/Design-Direction.md`, `Website-Rebuild.md`, and `Website-memory-and-plan.md` (deleted; phase planning gives way to "design in sandbox, port when good").

## When To Avoid The Loop

For trivial changes — copy tweaks, link fixes, small CTA wording, a single icon swap — edit directly in `Mindwp/`. The cross-folder loop is for **new pages and significant redesigns**, not micro-edits.

# CLAUDE.md

Main orientation for any AI working on MindWP. Read this first. Read the task-relevant doc next.

## Identity

MindWP builds conversion-focused website systems with connected handling for established service businesses and specialist clinics.

Public anchor headline: **"Work Comes In. Too Much Slips Away."** Use this as the lead recognition line on the homepage and as the rhetorical spine throughout the site. The longer identity sentence above belongs in `FOUNDATION.md` and the About context — not as a hero headline.

## Active Offer Model

Five active primary systems. Smart Website Systems is the flagship and the visual hub on the homepage.

1. Smart Website Systems
2. Local SEO Authority Systems
3. Lead Response & Handling Systems
4. Follow-Up & CRM Systems
5. Reputation & Review Systems

Revenue Recovery is a cross-system improvement **lens** only — never a service page, route, CTA category, panel, navigation pillar, or related-content cluster.

Implementation services (WordPress, Elementor, Bricks, Divi, WooCommerce, website rebuild) sit **under Smart Website Systems**. They are pathways, not primary systems.

Full ownership boundaries live in [docs/OFFER-ARCHITECTURE.md](./docs/OFFER-ARCHITECTURE.md).

## Hard Banned Terms

Protected by `pnpm check:names` (this validator stays strict — it blocks builds):

- Vendor names: GoHighLevel, GHL, HighLevel
- Removed offer names: "AI Lead Handling", "CRM & Automation", "Revenue Growth", "Revenue Growth Systems"
- Removed slugs: `ai-lead-handling`, `crm-automation`, `revenue-growth`, `growth-revenue-systems`, `aichat`, `workflows`
- Removed routes: `/systems`, `/topics`, `/blog/topic`, `/portfolio`
- "Revenue Recovery" as a structure (page, route, category, panel — the words may appear in copy only as a cross-system lens)
- "six systems", "six connected systems", "digital infrastructure consultancy"

Design freely otherwise.

## Voice

Lead with working-day objects: calls, forms, quotes, bookings, consultation requests, missed replies, follow-up nobody owns, reviews not requested. No fake metrics, testimonials, rankings, or client outcomes. Full guide in [docs/WRITING.md](./docs/WRITING.md).

## Design Freedom

The previous repo discipline standardized every section through `SectionShell` + token-only styling and produced visually flat pages. That has been reset:

- **Body sections** — write raw `<section>` JSX with Tailwind + `mw-*` classes. Each section owns its silhouette.
- **Hero** — use `HeroFrame` with the right-side `visual` slot. Good pattern, keep it.
- **`SectionShell`** is `@deprecated` for new pages. Existing baseline renderers still import it; they migrate off when their page's turn to rebuild comes.
- **`mw-*` classes and `var(--mw-*)` tokens are the default** during production work. If a recurring Figma-Make pattern needs a token that doesn't exist yet, add it to `src/styles/tokens.css`. Inline hex / inline `style={}` stays available as an escape hatch for one-offs.
- **Validators are advisory** except `check:names`. `check:clean-base` now warns and exits 0 — use `pnpm check:strict` if you want the old hard gate.

## Design Workflow

Two folders, two jobs. **Design + review + revise in `Mindwp-Design/`. Port to `Mindwp/` only when the user explicitly authorizes it.** Full guide in [docs/WORKFLOW.md](./docs/WORKFLOW.md).

1. **Plan in `Mindwp/`** — strategy, page intent, what business moment the page owns, what CTA, what's in / not in. Plans live in chat or in `docs/PAGES.md` if durable.
2. **Design in `Mindwp-Design/`** (Vite sandbox folder at `Mindwp-Design/`) — `src/app/components/*.tsx`. No validators, no shells, light token discipline (use `theme.css` brand vars where they match; inline hex otherwise). Use active 5-system names — see `Mindwp-Design/README-active-model.md`. Iterate fast in `pnpm dev`.
3. **Review + revise in `Mindwp-Design/`** — show the user the sandbox dev server, take feedback, revise the sandbox JSX. Repeat until the user signals satisfaction. Do **not** port during this phase.
4. **Port to `Mindwp/`** only when the user says "port this now" — copy the final JSX to `src/screens/<Page>.tsx`, swap shells (`HeroFrame` for hero, raw `<section>` for body), convert remaining hex → tokens/`mw-*` classes where matched, swap demo router (`onNav={setPage}`) for Next.js `<Link>` / `<a href>`.
5. **Validate the port** — `pnpm check:names && pnpm typecheck && pnpm test:smoke`.

The discipline: validator-passing in production is not a substitute for visual approval. The user approves the sandbox first.

## Five-System Visual Rule

On the homepage the five systems are **never** rendered as five equal tiles or a 2×3 grid. SWS is the visual flagship/hub. The other four sit as connected protections around it. Two acceptable layouts:

- **Flagship row + 4-cell stack** (a featured SWS card on top, the other four arranged 2×2 or 3+1 below; the Mindwp-Design `SixSystemStack` pattern adapted to five).
- **Hub + 4 orbital positions** (with an actual connecting graphic — not whitespace between cards).

## Doc Map

```
README.md                         Repo overview
CLAUDE.md                         This file — AI orientation
docs/FOUNDATION.md                Identity, buyer truth, positioning, public path
docs/OFFER-ARCHITECTURE.md        Active offer model, system ownership, implementation services
docs/WRITING.md                   Voice, banned phrases, working-day vocabulary, applied copy rules
docs/PAGES.md                     Page roles + CTA posture (merged CONTENT + CONVERSION essentials)
docs/REPO.md                      Source structure, validators, what controls what
docs/WORKFLOW.md                  Cross-folder design loop (Mindwp ↔ Mindwp-Design)
```

## Commands

Use pnpm only.

```
pnpm dev                # local dev (port 3000)
pnpm build              # production build
pnpm typecheck          # tsc --noEmit
pnpm lint
pnpm check:names        # strict: blocks banned terms — strategy drift gate
pnpm check:clean-base   # warn-only (exits 0)
pnpm check:domain-registries
pnpm check:baseline     # typecheck + lint + check:names + check:domain-registries (the fast post-rebuild pair)
pnpm check:strict       # check:baseline + check:clean-base — old hard gate, opt-in
pnpm check:frontend     # 28-route Playwright runtime smoke (locks against running dev server)
pnpm test:smoke         # Playwright smoke suite on port 3001 (safe with pnpm dev running)
```

After a page rebuild: `pnpm check:baseline` (fast), then `pnpm test:smoke` (visual / runtime sanity).

## Hard Boundaries

- Use only the active 5-system model. Do not revive removed names.
- Do not create public `/systems`, `/topics`, or `/portfolio` route families.
- Do not expose backend platform names as the public product.
- Do not turn implementation services into primary systems.
- Do not merge Lead Response & Handling with Follow-Up & CRM (they own different timing moments).
- Do not make every primary service page repeat the full MindWP model — each owns one business moment.
- Do not invent proof, metrics, testimonials, rankings, guarantees, or client outcomes.
- Do not turn specialist clinic pages into medical software, EMR, compliance, or treatment-claim pages.

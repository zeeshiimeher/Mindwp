# MindWP

Production Next.js workspace for the MindWP public site.

MindWP builds **smart websites** — conversion-focused websites with lead handling built in — for established service businesses and specialist clinics, sold globally across English-speaking markets. Public anchor: **"Work Comes In. Too Much Slips Away."**

## Current phase: Figma-first

The whole site is being **designed in Figma first**; the code/build phase comes after the design is approved. The production code below (Next.js, validators, the `Mindwp-Design` sandbox) is the **later build phase** — not active work right now.

Full design loop in [docs/WORKFLOW.md](./docs/WORKFLOW.md).

## Doc Map

| Doc | Purpose |
| --- | --- |
| [CLAUDE.md](./CLAUDE.md) | Main AI orientation, current phase, hard rules, banned terms. |
| [docs/FOUNDATION.md](./docs/FOUNDATION.md) | Identity, buyer truth, positioning. |
| [docs/STRATEGY.md](./docs/STRATEGY.md) | Commercial plan: market, offer, proof, conversion, industries. |
| [docs/OFFER-ARCHITECTURE.md](./docs/OFFER-ARCHITECTURE.md) | Five-system structure, ownership, implementation pathways. |
| [docs/DESIGN.md](./docs/DESIGN.md) | Visual genre spec — the quality standard. |
| [docs/PAGES.md](./docs/PAGES.md) | IA/sitemap, page roles, locked homepage spine, CTA posture. |
| [docs/WRITING.md](./docs/WRITING.md) | Voice, public language, offer/proof/pricing copy. |
| [docs/WORKFLOW.md](./docs/WORKFLOW.md) | Figma-first design loop + per-page review process. |
| [docs/archive/](./docs/archive/) | Superseded docs (ai-description, website-planning, REPO) — deferred. |

Generated files under `reports/` are diagnostic snapshots only, not strategy authority.

## Architecture Overview (later code/build phase)

The following describes the production codebase, which we return to **after** the Figma design is approved.

- `src/app/**` — public Next.js routes (one canonical route per page).
- `src/domains/**` — domain content, page data, renderers, registries.
- `src/screens/**` — top-level page shells (Homepage, About, Contact, etc.).
- `src/components/**` — shared UI primitives. `HeroFrame` is the recommended hero. `SectionShell` is `@deprecated` for new pages — use raw `<section>` JSX.
- `src/styles/**` — tokens, layout primitives, typography, shared visual rules. The `mw-*` classes and `var(--mw-*)` tokens are the default during production work.
- `src/lib/**` — content-graph, CTA, contact, SEO helpers.

Full source map in [docs/archive/REPO.md](./docs/archive/REPO.md) (deferred to the build phase).

## Commands (later code/build phase)

```bash
pnpm install
pnpm dev
pnpm build
pnpm typecheck
pnpm lint
pnpm check:names         # strict — blocks banned terms
pnpm check:clean-base    # warn-only (exits 0)
pnpm check:baseline      # the fast post-rebuild gate
pnpm check:strict        # opt-in old hard gate
pnpm test:smoke          # Playwright smoke (port 3001, safe with pnpm dev running)
pnpm check:frontend      # 28-route runtime smoke (collides with pnpm dev)
```

Use pnpm only.

## Working Philosophy

Right now: **design the whole site in Figma first** to the standard in [docs/DESIGN.md](./docs/DESIGN.md), one page at a time, with one review pass each. Only once the design is approved do we build it in code (the architecture and commands above).

For full AI orientation, read [CLAUDE.md](./CLAUDE.md).

# MindWP

Production Next.js workspace for the MindWP public site.

MindWP builds conversion-focused website systems with connected handling for established service businesses and specialist clinics. Public anchor: **"Work Comes In. Too Much Slips Away."**

## Two Folders

- `Mindwp/` (this repo) — production Next.js site, strategy docs, validators.
- `Mindwp-Design/` (sibling Vite project) — visual design sandbox. Pages are designed there first, then ported here.

Full design loop in [docs/WORKFLOW.md](./docs/WORKFLOW.md).

## Doc Map

| Doc | Purpose |
| --- | --- |
| [CLAUDE.md](./CLAUDE.md) | Main AI orientation, hard rules, banned terms, command list. |
| [docs/FOUNDATION.md](./docs/FOUNDATION.md) | Identity, buyer truth, positioning, public path. |
| [docs/OFFER-ARCHITECTURE.md](./docs/OFFER-ARCHITECTURE.md) | Active 5-system offer model, ownership boundaries, implementation pathways. |
| [docs/WRITING.md](./docs/WRITING.md) | Voice, banned phrases, working-day vocabulary, applied copy rules. |
| [docs/PAGES.md](./docs/PAGES.md) | Page roles + CTA posture. |
| [docs/REPO.md](./docs/REPO.md) | Source structure, validators, what controls what. |
| [docs/WORKFLOW.md](./docs/WORKFLOW.md) | Cross-folder design loop. |

Generated files under `reports/` are diagnostic snapshots only, not strategy authority.

## Architecture Overview

- `src/app/**` — public Next.js routes (one canonical route per page).
- `src/domains/**` — domain content, page data, renderers, registries.
- `src/screens/**` — top-level page shells (Homepage, About, Contact, etc.).
- `src/components/**` — shared UI primitives. `HeroFrame` is the recommended hero. `SectionShell` is `@deprecated` for new pages — use raw `<section>` JSX.
- `src/styles/**` — tokens, layout primitives, typography, shared visual rules. The `mw-*` classes and `var(--mw-*)` tokens are the default during production work.
- `src/lib/**` — content-graph, CTA, contact, SEO helpers.

Full source map in [docs/REPO.md](./docs/REPO.md).

## Commands

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

Pages are designed in `Mindwp-Design/` first (raw `<section>`, inline hex, fast Vite dev loop), then ported here with `HeroFrame` for the hero and raw `<section>` for body sections. During the port, inline hex is converted to `mw-*` classes / `var(--mw-*)` tokens where matched; new tokens are added to `src/styles/tokens.css` when a recurring pattern needs one.

For full AI orientation, read [CLAUDE.md](./CLAUDE.md).

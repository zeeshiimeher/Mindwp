# Repo Map — MindWP

Durable repo and system understanding captured during the Phase 2 audit (rebuild branch `rebuild/baseline-homepage-sws-local-seo`). Read this before exploring source folders from scratch.

This is operational memory, not strategy. For strategy read the core docs. For phase status read `Website-memory-and-plan.md`. For design baseline read `Design-Direction.md`.

When this file becomes stale or wrong, fix it — do not re-derive everything from a fresh full-repo audit.

## Top-Level Layout

```
src/
  app/                              Next.js public routes
    services/[...slug]              primary + implementation
    industries/[...slug]            home-services + healthcare-practices only
    features/[...slug]              7 canonical features
    resources/[slug] + /category
    blog/[slug] + /category
    case-studies/[slug]             proof/work hub (no /portfolio)
    contact, about, privacy, terms, cookies
  domains/
    home/data/homepage.ts           HomepageData type + hero/faq/cta
    services/                       5 primary + 6 implementation
      renderers/, data/, pages/, registry.ts, pageData.ts, types.ts, seo.ts
      implementation/               renderers/, data/, pages/
    features/                       7 features (inbox, voice-calls, calendars, reputation, crm, handling-paths, website-chat)
    industries/                     home-services + healthcare-practices, 16 detail slugs
    blog/, case-studies/, resources/
    shared/staticPages.ts           STATIC_ROUTE_CONTENT registry
  screens/                          page shells: Homepage, About, Contact, ...
  components/
    layout/                         HeroFrame, SectionShell
    conversion/                     DecisionPanel
    content/                        FAQSection
    navigation/                     RelatedSection (guarded — see validators)
    primitives/                     Button, Accordion, Tabs, InlineText, SignalDot, StatusBadge
    system/                         CTARegistry, PageEnforcement, JsonLd
    ui/                             shadcn/radix wrappers — third-party shape
  styles/
    tokens.css      460  source of truth — color, type, spacing, radii, shadow, motion, gradient, z
    reset.css        99
    typography.css  165
    layout.css      666  containers, grids, splits, motion, SectionShell, HeroFrame, bg-*
    primitives.css  701  buttons, surfaces, forms, dots, badges, tabs, accordion
    components.css  788  header, footer, RelatedSection, FAQSection, DecisionPanel
  lib/
    content-graph/                  canonical, registry, validate, scoring, derivedRelationships
    cta/primaryAction.ts            PRIMARY_CTA_LABEL = 'Request a System Review'
    cta/ctaRegistry.ts              page CTA intent/position counting
    contact/contactHref.ts          ContactSourceType + buildContactHref
    seo/                            metadata, schema, OG rendering
    related/, page/, site/, system/
  global/                           Header, Footer, Logo, RevealMotion island
  index.css                         tailwind, then tokens → reset → typography → layout → primitives → components
config/                             routeOwnership, indexingPolicy, contentPolicy, env schema
scripts/                            check-names, check-clean-base, check-domain-registries, check-frontend, check-style-guidance, screenshot-sections
tests/smoke/                        Playwright smoke specs — homepage.spec.ts, routes.spec.ts, helpers.ts
docs/core/                          10 governing docs
docs/Planning/                      rebuild memory (this folder)
docs/ops/CONTENT-INVENTORY.md       planning inventory, never runtime
.claude/skills/                     mindwp-page-plan, mindwp-page-rebuild, mindwp-page-review
```

## What Controls What

| Concern | Owner |
| --- | --- |
| Public routes | `src/app/**` — one canonical route per page |
| Static page titles/descriptions | `src/domains/shared/staticPages.ts` → `STATIC_ROUTE_CONTENT` |
| Route ownership + indexing | `config/routeOwnership.ts` + `config/indexingPolicy.ts` |
| Page data | `src/domains/*/data/*.ts` (light during proving; tighten after approval) |
| Renderers | `src/domains/*/renderers/*.tsx` + `src/screens/*.tsx` |
| Canonical systems | `src/lib/content-graph/canonical.ts` — 5 active, role-typed core/entry/operation/trust/response |
| Graph + related content | `src/lib/content-graph/**` + `src/lib/related/**` |
| CTA labels + sources | `src/lib/cta/primaryAction.ts` (`'Request a System Review'`) + `ctaRegistry.ts` |
| Contact href construction | `src/lib/contact/contactHref.ts` — 8 `ContactSourceType` values |
| SEO/metadata | `src/lib/seo/**` |
| Shared layout | `HeroFrame` (6 tones, split/center, visual + texture slots) + `SectionShell` (6 tones, stack/split, ratio variants) |
| Tokens | `src/styles/tokens.css` is the only file with raw values |
| Reveal/motion | `RevealMotion` island + `mw-animate-*` + `data-js-motion` + IntersectionObserver |

## Active Offer (Source-Verified)

5 active primary systems in `src/lib/content-graph/canonical.ts`:

| Slug | Role |
| --- | --- |
| `smart-website-systems` | core |
| `local-seo-authority` | entry |
| `lead-response-handling` | response |
| `follow-up-crm` | operation |
| `reputation-review-systems` | trust |

6 implementation pathways under SWS in `src/domains/services/implementation/`: `wordpress-development`, `elementor`, `bricks-builder`, `divi5`, `woocommerce`, `website-redesign-system-rebuild`.

7 features in `src/domains/features/renderers/`: `inbox`, `voice-calls`, `calendars`, `reputation`, `crm`, `handling-paths`, `website-chat`.

2 active industry families: `home-services` and `healthcare-practices`. 16 industry detail slugs total (`CANONICAL_INDUSTRIES`).

## Validator Behavior

| Command | What it does | Watch for |
| --- | --- | --- |
| `pnpm typecheck` | `tsc --noEmit` | Strict |
| `pnpm lint` | eslint via custom runner | Strict |
| `pnpm check:names` | Forbidden drift terms (GoHighLevel, GHL, HighLevel, `/systems`, `/topics`, `/portfolio`, `aichat`, `workflows`, Revenue Recovery, removed service ids/labels, etc.) | Comments in `.ts/.tsx/.js/.jsx/.mjs/.css` are stripped before scan, so renderer briefs may name forbidden terms as "avoid" guidance. Markdown is scanned as-is — do not use forbidden terms even in docs. |
| `pnpm check:clean-base` | Source-code drift: deleted component imports, old CTA wrappers, loose `any` types, manual `RelatedSection` in page bodies, `Smart Website` symbol duplication, old utility class residue | The two Smart Website rules are scoped to `src/**`. Doc references to `SmartWebsiteSystemsRenderer` etc. are fine. |
| `pnpm check:domain-registries` | Domain registry integrity | Strict |
| `pnpm check:architecture` | `check:clean-base && check:domain-registries` |  |
| `pnpm check:minimal` | `typecheck && lint && check:names` |  |
| `pnpm check:baseline` | `check:minimal && check:architecture` | Fast — the per-rebuild validation pair. Use after every page rebuild before heavier checks. |
| `pnpm check:frontend` | Boots `next dev` on a free port and runs Playwright across 28 routes for hydration / console / fatal-body checks | Slower. Single-instance lock — collides with an existing `pnpm dev` server on the same project. |
| `pnpm build` | Next.js production build | Slow; not needed for token-only CSS changes |
| `pnpm test` / `pnpm test:smoke` | Playwright smoke suite in `tests/smoke/`. Boots `pnpm build && pnpm start` on port 3001 via `playwright.config.ts`. Production mode — does not collide with `pnpm dev` | Slow first run (build), fast on reuse |
| `pnpm check:guidance` | `check:duplicates && check:style-guidance` |  |
| `pnpm check:all` | `check:minimal && check:architecture && check:guidance && build` | Slow; use before release |

`RelatedSection` is **guarded**: `check-clean-base` blocks the symbol from `src/screens/`, `src/domains/services/renderers/`, `src/domains/features/renderers/`, `src/domains/resources/`, `src/domains/blog/`, `src/domains/case-studies/`. Related content must come from config/domain layers; only `src/components/navigation/RelatedSection.tsx` itself is allowed.

Forbidden public terms (from `check-names.mjs`): `GoHighLevel`, `HighLevel`, `GHL`, removed service ids (`ai-lead-handling`, `crm-automation`, `revenue-growth`, `growth-revenue-systems`, etc.), removed service labels (`AI Lead Handling`, `CRM & Automation`, `Revenue Growth Systems`), `/systems`, `/topics`, `/blog/topic`, `/portfolio`, `aichat`, `workflows`, `topicRegistry`, `BlogTopicTemplate`, `Revenue Recovery`, `revenue-recovery`, `revenueRecovery`, broad `systems[]` metadata field, `six systems` language, `digital infrastructure consultancy`.

## Reset-Base Constraints

Current branch is the post-`ui-hard-reset` rebuild baseline.

- Homepage `Section2`–`Section7` in `src/screens/Homepage.tsx` and the recognition section in `SmartWebsiteSystemsRenderer.tsx` are stripped-down sketches using inline hex values. They are **context only** — slated for wholesale replacement during Phases 6/7. Do not treat their JSX, color choices, or section count as a template.
- All other primary service renderers (`LocalSEOAuthorityRenderer`, `LeadResponseHandlingRenderer`, `FollowUpCRMRenderer`, `ReputationReviewSystemsRenderer`) are at the same baseline: hero + a thin recognition section + FAQ + DecisionPanel only. Phase 8 (Local SEO) and Phase 9 (the remaining three) rebuild these.
- The 6 implementation renderers are short (~180 lines each), structurally similar. They must not template Smart Website Systems; SWS must look visually unlike them.
- `--mw-shadow-dark-lg` token was missing as of pre-Phase-4 and is now present in `tokens.css`. 19 dark-panel surfaces across screens, services, implementation, and feature renderers reference it.
- `docs/Planning/Website-memory-and-plan.md` is the live session-handoff doc. `docs/Planning/Design-Direction.md` is the proposed baseline.
- `_workspace/pids`, `_tmp/screenshots`, `artifacts/`, `reports/`, `Mindwp-Design/` (excluded), `image-system-removal-backup.zip` are noise — do not browse for content authority.
- `src/components/ui/*` are shadcn/radix wrappers and use a separate token shim group at the bottom of `tokens.css` (lines ~422–461). Those compat tokens are not for MindWP-owned CSS.

## What Should Not Control Design Decisions

- Existing Section2–Section7 JSX in `Homepage.tsx`, recognition/FAQ scaffolds in all 5 primary service renderers — useful for buyer-problem clues only.
- Existing service `data/*.ts` files — `hero.visual.rows` is one possible idea, not a contract.
- The 6 implementation renderers as a template for SWS.
- The 7 feature renderers as a template for service pages.
- shadcn `src/components/ui/*` visual idiom — kept inside its own lane.
- `reports/` snapshots — diagnostic, possibly stale, not strategy.
- Generated build output in `.next/`.

## Commands Reference

```
pnpm dev                     local dev (next, webpack, port 3000)
pnpm start                   next start (port via -p or env)
pnpm build                   production build
pnpm typecheck               tsc --noEmit
pnpm lint                    eslint
pnpm lint:fix                eslint --fix
pnpm check:names             forbidden drift terms (comments stripped from source)
pnpm check:clean-base        source-code drift rules
pnpm check:domain-registries domain registry integrity
pnpm check:architecture      clean-base + domain-registries
pnpm check:duplicates        duplicate detection
pnpm check:style-guidance    style guidance
pnpm check:guidance          duplicates + style-guidance
pnpm check:minimal           typecheck + lint + check:names
pnpm check:baseline          minimal + architecture — the per-rebuild validation pair
pnpm check:frontend          28-route runtime smoke (slower; locks against pnpm dev)
pnpm check:all               minimal + architecture + guidance + build (slow)
pnpm check:release           all + frontend
pnpm test                    playwright test (boots production server via playwright.config.ts)
pnpm test:smoke              playwright test tests/smoke (subset of pnpm test)
```

Always pnpm. Never npm/yarn/bun.

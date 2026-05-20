# REPO — MindWP

Durable repo and system map. Read this before exploring source folders.

For strategy read `FOUNDATION.md` + `OFFER-ARCHITECTURE.md`. For voice read `WRITING.md`. For page roles + CTA read `PAGES.md`. For the design loop read `WORKFLOW.md`. For AI orientation read `CLAUDE.md` at root.

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
    layout/                         HeroFrame (recommended hero), SectionShell (@deprecated for new pages)
    conversion/                     DecisionPanel
    content/                        FAQSection
    navigation/                     RelatedSection (guarded — only allowed in src/components/navigation/)
    primitives/                     Button, Accordion, Tabs, InlineText, SignalDot, StatusBadge
    system/                         CTARegistryProvider, PageEnforcement, JsonLd
    ui/                             shadcn/radix wrappers — third-party shape (own token shim group)
  styles/
    tokens.css      460+  source of truth for color, type, spacing, radii, shadow, motion, gradient, z
    reset.css        99
    typography.css  165
    layout.css      666   containers, grids, splits, motion, SectionShell, HeroFrame, bg-*
    primitives.css  701   buttons, surfaces, forms, dots, badges, tabs, accordion
    components.css  788+  header, footer, RelatedSection, FAQSection, DecisionPanel + new utility classes added during homepage port
  lib/
    content-graph/                  canonical, registry, validate, scoring, derivedRelationships
    cta/primaryAction.ts            PRIMARY_CTA_LABEL
    cta/ctaRegistry.ts              page CTA intent/position counting
    contact/contactHref.ts          ContactSourceType + buildContactHref
    seo/                            metadata, schema, OG rendering
    related/, page/, site/, system/
  global/                           Header, Footer, Logo, RevealMotion island
  index.css                         tailwind, then tokens → reset → typography → layout → primitives → components
config/                             routeOwnership, indexingPolicy, contentPolicy, env schema
scripts/                            check-names, check-clean-base, check-domain-registries, check-frontend, check-style-guidance, screenshot-sections
tests/smoke/                        Playwright smoke specs — homepage.spec.ts, routes.spec.ts, helpers.ts
docs/                               6 governing docs (flat — no core/, Planning/, ops/ subfolders)
```

## What Controls What

| Concern | Owner |
| --- | --- |
| Public routes | `src/app/**` — one canonical route per page |
| Static page titles/descriptions | `src/domains/shared/staticPages.ts` → `STATIC_ROUTE_CONTENT` |
| Route ownership + indexing | `config/routeOwnership.ts` + `config/indexingPolicy.ts` |
| Page data | `src/domains/*/data/*.ts` (kept thin while pages are being proven) |
| Renderers | `src/domains/*/renderers/*.tsx` + `src/screens/*.tsx` |
| Canonical systems | `src/lib/content-graph/canonical.ts` — 5 active, role-typed core/entry/operation/trust/response |
| Graph + related content | `src/lib/content-graph/**` + `src/lib/related/**` |
| CTA labels + sources | `src/lib/cta/primaryAction.ts` + `ctaRegistry.ts` |
| Contact href construction | `src/lib/contact/contactHref.ts` — 8 `ContactSourceType` values |
| SEO/metadata | `src/lib/seo/**` |
| Hero pattern | `HeroFrame` (6 tones, split/center, visual + texture slots) — recommended |
| Section pattern (legacy) | `SectionShell` — `@deprecated` for new pages; existing baseline renderers still use it |
| Tokens | `src/styles/tokens.css` is the source of value truth |
| Reveal/motion | `RevealMotion` island + `mw-animate-*` + `data-js-motion` + IntersectionObserver |
| Cross-folder design source | `Mindwp-Design/` (sibling Vite project) — see WORKFLOW.md |

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

| Command | What it does | Blocking |
| --- | --- | --- |
| `pnpm typecheck` | `tsc --noEmit` | yes |
| `pnpm lint` | eslint | yes |
| `pnpm check:names` | Forbidden drift terms (GoHighLevel, GHL, HighLevel, `/systems`, `/topics`, `/portfolio`, `aichat`, `workflows`, Revenue Recovery, removed service ids/labels, etc.) | **yes** — strategy gate, kept strict |
| `pnpm check:clean-base` | Source-code drift: deleted imports, old CTA wrappers, loose `any`, manual `RelatedSection` in page bodies, Smart Website symbol duplication, rd- utility residue | **warn-only** — prints warnings, exits 0 |
| `pnpm check:domain-registries` | Domain registry integrity | yes |
| `pnpm check:baseline` | `typecheck + lint + check:names + check:domain-registries` — the fast post-rebuild gate | yes |
| `pnpm check:strict` | `check:baseline + check:clean-base` — opt-in old hard gate | yes |
| `pnpm check:frontend` | Boots `next dev` on a free port, Playwright across 28 routes (hydration / console / fatal-body) | yes — locks against pnpm dev |
| `pnpm test:smoke` | Playwright smoke in `tests/smoke/`. Boots `pnpm build && pnpm start` on port 3001 — does **not** collide with `pnpm dev` | yes |
| `pnpm build` | Next.js production build | yes |

`check:names` comments are stripped from `.ts/.tsx/.js/.jsx/.mjs/.css` before scanning — renderer briefs can name forbidden terms as "avoid" guidance. Markdown is scanned as-is.

`RelatedSection` is **guarded** by `check:clean-base`: blocked from `src/screens/`, `src/domains/services/renderers/`, `src/domains/features/renderers/`, `src/domains/resources/`, `src/domains/blog/`, `src/domains/case-studies/`. Related content must come from config/domain layers; only `src/components/navigation/RelatedSection.tsx` itself is allowed.

Forbidden public terms (from `check-names.mjs`): GoHighLevel, HighLevel, GHL, removed service ids (`ai-lead-handling`, `crm-automation`, `revenue-growth`, `growth-revenue-systems`, etc.), removed service labels (AI Lead Handling, CRM & Automation, Revenue Growth Systems), `/systems`, `/topics`, `/blog/topic`, `/portfolio`, `aichat`, `workflows`, `topicRegistry`, `BlogTopicTemplate`, Revenue Recovery / revenue-recovery / revenueRecovery, broad `systems[]` metadata field, "six systems" language, "digital infrastructure consultancy".

## Reset-Base Constraints (Current Branch)

Branch: `rebuild/baseline-homepage-sws-local-seo`. Parent: `ui-hard-reset`.

- Homepage was previously rebuilt as a 14-section page (Phase 6). It is being **fully replaced** as part of the environment reset.
- All 5 primary service renderers (`SmartWebsiteSystemsRenderer`, `LocalSEOAuthorityRenderer`, `LeadResponseHandlingRenderer`, `FollowUpCRMRenderer`, `ReputationReviewSystemsRenderer`) are at thin baseline: hero + recognition + FAQ + DecisionPanel only. They get rebuilt one at a time when each page's turn comes — through the cross-folder design loop in `WORKFLOW.md`.
- The 6 implementation renderers are short (~180 lines each), structurally similar. They must not template Smart Website Systems.
- `--mw-shadow-dark-lg` is in `tokens.css`. Other tokens may be added during page ports.
- `SectionShell` is `@deprecated` for new pages — all existing baseline renderers still import it, and that's fine; they migrate off when they rebuild.
- `_workspace/pids`, `_tmp/screenshots`, `artifacts/`, `reports/`, `Mindwp-Design/` (excluded from `Mindwp/` scans), `image-system-removal-backup.zip` are noise — not content authority.
- `src/components/ui/*` are shadcn/radix wrappers with a separate compat token shim group at the bottom of `tokens.css`. Those tokens are not for MindWP-owned CSS.

## What Should Not Control Design Decisions

- The previous Phase 6 Homepage JSX (visual monotony from over-applied shells + signal-card micro-pattern).
- Existing thin-baseline service renderers (useful for buyer-problem clues only).
- The 6 implementation renderers as a template for SWS.
- The 7 feature renderers as a template for service pages.
- shadcn `src/components/ui/*` visual idiom (kept in its own lane).
- `reports/` snapshots (diagnostic, possibly stale).
- Generated `.next/` output.

## Commands Reference

```
pnpm dev                     local dev (port 3000)
pnpm start                   next start
pnpm build                   production build
pnpm typecheck               tsc --noEmit
pnpm lint                    eslint
pnpm lint:fix                eslint --fix
pnpm check:names             forbidden drift terms (strict)
pnpm check:clean-base        source-code drift (warn-only)
pnpm check:domain-registries domain registry integrity
pnpm check:architecture      clean-base + domain-registries
pnpm check:baseline          typecheck + lint + check:names + check:domain-registries — fast gate
pnpm check:strict            check:baseline + check:clean-base — opt-in hard gate
pnpm check:duplicates        duplicate detection (advisory)
pnpm check:style-guidance    style guidance (advisory)
pnpm check:guidance          duplicates + style-guidance
pnpm check:all               check:baseline + check:guidance + build (slow)
pnpm check:frontend          28-route runtime smoke (locks against pnpm dev)
pnpm check:release           check:all + check:frontend
pnpm test                    playwright test (production server)
pnpm test:smoke              playwright smoke (port 3001, safe with pnpm dev)
```

Always pnpm. Never npm/yarn/bun.

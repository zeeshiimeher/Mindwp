# SYSTEM ARCHITECTURE — MindWP

> High-level architecture map for the live repo.
> This document shows ownership and flow.
> It does not override `FOUNDATION.md`, `CONTENT.md`, `CONVERSION.md`, `GRAPH.md`, `DESIGN.md`, or `WRITING.md`.

---

## USE THIS DOC

Use this doc for the shortest accurate map of:

- runtime ownership
- metadata ownership
- Open Graph ownership
- styling ownership
- validation and report flow
- build and deploy gating

Use the governing docs for positioning, writing, CTA behavior, graph rules, and content behavior.

---

## SYSTEM FLOW

```text
Domain content -> Canonical registry -> Route inventory -> SEO -> OG -> Metadata -> Page render
```

Control-plane flow:

```text
Repo state -> validate-all -> reports -> export-reports -> system-report -> build-safe -> production build
```

The runtime lane produces site behavior.
The control plane validates structure and records system state.

---

## RUNTIME LAYERS

### Governance

- `docs/core/*`
- `FOUNDATION.md` is root authority
- scoped governing docs define identity, writing, content, conversion, graph, design, and enforcement

### Domain and Registry Layer

- `src/domains/**`
- canonical identifiers from `src/lib/content-graph/canonical.ts`
- graph bootstrap via `src/domains/init/ensureGraphInitialized.ts`

This layer owns raw domain content and canonical identifiers.

### Identity and Inventory Layer

- `src/lib/content-quality/inventory.ts`
- `config/routeOwnership.ts`
- `config/indexingPolicy.ts`

This layer owns:

- canonical route metadata
- route path normalization
- robots output
- Open Graph URL ownership
- route-to-kind alignment

### SEO Layer

- `src/lib/seo/resolveMetadata.ts`
- `src/lib/seo/seo.ts`
- `src/lib/seo/seoResolver.ts`

This layer owns:

- title composition
- description composition
- canonical URL output
- brand composition in metadata
- final metadata structure handed to routes

### OG Layer

- `src/lib/seo/og/contract.ts`
- `src/lib/seo/og/render.ts`
- `src/app/api/og/route.ts`

This layer owns:

- route-to-OG entity mapping
- layout selection
- deterministic OG URL generation
- API-backed image rendering

### Page and Component Layer

- `src/app/**`
- `src/components/layout/*` — SectionFrame, HeroFrame
- `src/components/primitives/*` — Accordion, Tabs, InlineText, SignalDot, StatusBadge
- `src/components/conversion/*` — DecisionPanel
- `src/components/navigation/*` — RelatedSection
- `src/components/content/*` — FAQSection
- `src/global/*` — Header, Footer, Logo
- page/domain renderers compose these components with domain data

> **Quarantine:** `src/components/reusable` and `src/components/sections` are quarantine/delete-later. They exist only to keep unrebuilt old pages rendering. Do not import from them in rebuilt or new files. See `docs/Planning/Legacy-dependency-map.md`.

Pages resolve content and metadata.
Components render prepared props only.

### Design Layer

- `src/styles/tokens.css` — all raw values; `--mw-*` token namespace
- `src/styles/reset.css`
- `src/styles/typography.css`
- `src/styles/layout.css` — SectionFrame, HeroFrame, mw-container, motion
- `src/styles/primitives.css` — Accordion, Tabs, buttons, badges
- `src/styles/components.css` — DecisionPanel, RelatedSection, FAQSection, Header, Footer
- `src/styles/pages/*` — page-specific visual bodies (home.css)
- `src/styles/services/*` — service page visual bodies (smart-website.css, local-seo.css)

This is the only live CSS system.

---

## CONTROL-PLANE LAYERS

### Validation Entry

- `scripts/core/validate-all.mjs`
- validator definitions from `scripts/core/system-manifest.mjs`
- validator implementations in `scripts/validators/*`

This layer owns repo-wide validation and report generation.

### Generated-Source Integrity

- `scripts/core/check-generated.mjs`
- generator-owned source outputs such as registries and authority map

Generated source drift is validated, not silently ignored.

### Report Export and Derived Analysis

- `scripts/analyzers/export-reports.mjs`
- manifest-owned report outputs under `reports/**`

This layer owns derived report artifacts and report normalization.

### System Summary and Dashboard Inputs

- `scripts/core/system-report.mjs`
- `scripts/core/dashboard-data.mjs`
- `reports/system-report.json`
- `reports/client-dashboard.json`

This layer summarizes the full run and prepares operator-facing outputs.

### Build Gate

- `scripts/runners/build-safe.mjs`
- `package.json` build script

Build runs through the full validation gate first. It should validate the same repo state that standalone `validate-all` and `system:full` validate.

### Snapshot and Deploy

- `scripts/core/build-system-snapshot.mjs`
- `scripts/deploy/**`
- `artifacts/**`

This layer records validated state and gates release.

---

## KEY OWNERS

| Concern | Primary Owner |
| --- | --- |
| Canonical identifiers | `src/lib/content-graph/canonical.ts` |
| Route metadata source | `src/lib/content-quality/inventory.ts` |
| Metadata normalization | `src/lib/seo/resolveMetadata.ts` |
| SEO composition | `src/lib/seo/seo.ts` |
| OG mapping and URL contract | `src/lib/seo/og/contract.ts` |
| OG image rendering | `src/app/api/og/route.ts` and `src/lib/seo/og/render.ts` |
| Section frames | `src/components/layout/SectionFrame.tsx` |
| Hero frames | `src/components/layout/HeroFrame.tsx` |
| Final conversion section | `src/components/conversion/DecisionPanel.tsx` |
| Global related-content | `src/components/navigation/RelatedSection.tsx` |
| FAQ sections | `src/components/content/FAQSection.tsx` |
| CSS system | `src/styles/tokens.css`, `layout.css`, `primitives.css`, `components.css` |
| Validator ownership | `scripts/core/system-manifest.mjs` |
| Validator execution | `scripts/core/validate-all.mjs` |
| Report export | `scripts/analyzers/export-reports.mjs` |
| System summary | `scripts/core/system-report.mjs` |

---

## ARCHITECTURAL RULES

- Code is the source of truth.
- Inventory is the single source of truth for route metadata.
- SEO ownership stays in the SEO layer.
- OG ownership stays in the OG layer and API route.
- Components render; they do not own metadata, graph logic, or styling systems.
- The six-layer CSS stack is the only live design system: `tokens.css -> reset.css -> typography.css -> layout.css -> primitives.css -> components.css -> domain/page CSS`.
- Validators and manifest-owned reports define structural status.
- Generated files and reports are never hand-maintained as an alternative to fixing generators or validators.
- `src/components/reusable` and `src/components/sections` are quarantine/delete-later only. New components go into `layout/`, `primitives/`, `conversion/`, `navigation/`, or `content/`.

---

## DOC ORDER

Read in this order:

1. `FOUNDATION.md`
2. `WRITING.md`
3. `CONTENT.md`
4. `CONVERSION.md`
5. `GRAPH.md`
6. `DESIGN.md`
7. `SYSTEM-RULES.md`

This file stays subordinate to the governing docs and exists only as the short architecture map.
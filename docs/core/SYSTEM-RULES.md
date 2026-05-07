# SYSTEM RULES — MindWP

> Enforceable system constraints derived from the live repo.
> Code is the source of truth.
> If this document conflicts with code, update this document.

**Updated:** 2026-05-01

---

## USE THIS DOC

Use this doc for final system constraints across:

- identity
- route metadata
- SEO
- Open Graph
- component boundaries
- design boundaries
- validator and report ownership
- build and workflow behavior

---

## 1. CORE ENFORCEMENT MODEL

- Governing docs describe expected behavior.
- Runtime code produces behavior.
- Validators enforce structural alignment.
- Reports record validator-owned state.
- Build, `validate-all`, and `system:full` must judge the same repo state.

Primary enforcement owners:

- route metadata: `src/lib/content-quality/inventory.ts`
- metadata normalization: `src/lib/seo/resolveMetadata.ts`
- SEO composition: `src/lib/seo/seo.ts`
- OG rules: `src/lib/seo/og/*`
- validator registry: `scripts/core/system-manifest.mjs`
- validator execution: `scripts/core/validate-all.mjs`

---

## 2. IDENTITY LOCK RULES

- Slugs are defined in the domain layer.
- Canonical route identity is resolved once and consumed downstream.
- UI components do not invent IDs, slugs, or route ownership.
- Route ownership must stay aligned with indexing policy and inventory.

Forbidden:

- duplicate slug ownership across layers
- UI-owned identity derivation
- alternate route identity models that compete with canonical route ownership

---

## 3. INVENTORY LOCK RULES

`src/lib/content-quality/inventory.ts` is the single source of truth for route metadata.

Inventory owns:

- title
- description
- canonical path
- robots
- Open Graph URL output

Rules:

- All route metadata resolves through inventory-backed paths.
- Domain data may provide metadata inputs, but inventory owns normalized output.
- No route should publish its own final metadata structure outside the shared path.

Forbidden:

- manual route metadata objects in page files
- parallel route metadata registries
- duplicate final metadata definitions in route, domain, and inventory layers

---

## 4. SEO LOCK RULES

SEO ownership lives in `src/lib/seo/*`.

Rules:

- `resolveMetadata()` normalizes metadata inputs.
- `buildSEO()` is the SEO composition owner.
- Canonical URLs derive from normalized route paths.
- Brand composition in metadata happens only in the SEO layer.
- UI titles and SEO titles may differ when the SEO layer requires it.

Forbidden:

- SEO logic in components
- manual canonical composition in UI
- manual `openGraph` output in page files that bypasses the shared builder path
- brand injection in content or component layers when SEO owns that concern

---

## 5. OG LOCK RULES

OG ownership lives in `src/lib/seo/og/*` and `src/app/api/og/route.ts`.

Rules:

- Open Graph images are API-backed.
- Route metadata must not hardcode manual OG image URLs.
- The OG system uses exactly three layouts:
  - `standard-content`
  - `service-system`
  - `industry-local`
- Supported entity routes use the `type/slug` contract.
- Unsupported routes may use only deterministic `path` fallback.
- The same route input must always resolve the same OG URL and layout.

Forbidden:

- manual OG image URLs in route metadata
- time-based or random OG layout selection
- component-owned OG rendering logic
- per-page OG styling hacks outside the OG system

Current OG owners:

- contract and URL mapping: `src/lib/seo/og/contract.ts`
- renderer: `src/lib/seo/og/render.ts`
- response surface: `src/app/api/og/route.ts`

---

## 6. COMPONENT LOCK RULES

Components are render surfaces.

Rules:

- Components consume final props.
- Components do not own metadata, graph, inventory, or validator logic.
- Components should not hide fallback behavior that changes system truth.
- Presentation components should not perform ad-hoc sorting, filtering, grouping, or inference that belongs in data preparation.

Forbidden:

- graph queries in component render paths
- metadata generation in components
- styling systems embedded in JSX
- content or route ownership logic inside presentation components

---

## 7. DESIGN LOCK RULES

The only live CSS system is:

```text
tokens.css -> reset.css -> typography.css -> layout.css -> primitives.css -> components.css -> domain/page CSS
```

Rules:

- tokens live in `src/styles/tokens.css` using `--mw-*` namespace
- layout and shared section frames live in `src/styles/layout.css` (`SectionFrame`, `HeroFrame`, `mw-container`)
- reusable atoms live in `src/styles/primitives.css` (`Accordion`, `Tabs`, buttons, badges)
- production component shells live in `src/styles/components.css` (`DecisionPanel`, `RelatedSection`, `FAQSection`, Header, Footer)
- page-specific visual bodies live in domain/page CSS (`src/styles/pages/*`, `src/styles/services/*`)
- no inline production styling
- no parallel page-level styling systems
- no raw hex or `rgba()` outside `tokens.css`
- new components go in `layout/`, `primitives/`, `conversion/`, `navigation/`, or `content/` folders
- `src/components/reusable` and `src/components/sections` are quarantine/delete-later; do not import from them in rebuilt or new files

Legacy CSS under `src/styles/_legacy` is not active design authority.

> **Legacy note:** `foundation.css`, `framework.css`, and the `rd-*` class system are from the old architecture. They remain only as quarantine fallout for unrebuilt pages. They are not active design authority.

---

## 8. GENERATED-SOURCE LOCK RULES

Generator-owned source files are part of the repo state and must stay in sync.

Rules:

- Generated source drift must fail validation.
- Build must not pass by silently correcting stale generated source while `validate-all` or `system:full` fail.
- `check-generated` is the integrity gate for generated source outputs.

Examples of generator-owned source outputs include:

- content registries
- authority map source

> **Note:** The generated component docs source (`componentDocs.generated.ts`) was removed in Milestone 6D when the component library route was deleted. It is no longer a generated output.

---

## 9. VALIDATOR AND REPORT LOCK RULES

The validator system is manifest-owned.

Rules:

- `scripts/core/system-manifest.mjs` owns validator registration.
- `scripts/core/validate-all.mjs` owns validator execution.
- Validators must emit manifest-owned report files.
- Report inventory is manifest-owned, not directory-driven guesswork.
- Generated report artifacts must not be maintained manually as a substitute for fixing the pipeline.

Forbidden:

- orphan report files treated as valid outputs
- undocumented validator ownership
- report cleanup by hand when the manifest or exporter should own it

---

## 10. WORKFLOW LOCK RULES

Workflow must reflect the real control plane.

Rules:

- `validate-all`, `system:full`, and `build` must reflect the same repo state.
- `build` runs through `scripts/runners/build-safe.mjs`.
- `system:full` is the full validation and reporting gate.
- Snapshot and report generation are control-plane concerns, not manual cleanup steps.
- If generator-owned files changed, regenerate them intentionally rather than relying on one command path to repair state invisibly.

Execution behavior must stay aligned with `docs/ops/WORKFLOW.md`.

---

## 11. CONTENT AND GRAPH LOCK RULES

- Canonical values come from `src/lib/content-graph/canonical.ts`.
- Graph relationships come from metadata and graph owners, not manual presentation shortcuts.
- Page behavior must remain aligned with identity, content role, and conversion model.
- Passing validators does not replace manual review of authority, specificity, and persuasion.

---

## 12. FINAL LOCK SUMMARY

These rules are non-negotiable:

1. Code wins over docs.
2. Inventory owns route metadata.
3. SEO lives in the SEO layer.
4. OG output lives in the deterministic API-backed OG system.
5. Components render only.
6. The six-layer CSS stack is the only live design system: `tokens.css -> reset.css -> typography.css -> layout.css -> primitives.css -> components.css -> domain/page CSS`.
7. Generated-source drift fails validation.
8. Validators and reports are manifest-owned.
9. `src/components/reusable` and `src/components/sections` are quarantine/delete-later. New components go in `layout/`, `primitives/`, `conversion/`, `navigation/`, or `content/`.
10. `DecisionPanel` owns CTA rendering in rebuilt/new pages. `PrimaryCTASection` is quarantine/delete-later.
11. `RelatedSection` owns global related-content display. No page-owned related sections. No slug exception lists.
9. Build, `validate-all`, and `system:full` must stay aligned.
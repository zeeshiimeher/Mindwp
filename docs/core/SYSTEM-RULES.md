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
foundation.css -> framework.css -> primitives.css -> components.css
```

Rules:

- tokens live in `src/styles/foundation.css`
- layout and shell rules live in `src/styles/framework.css`
- reusable atoms live in `src/styles/primitives.css`
- production shells live in `src/styles/components.css`
- no inline production styling
- no parallel page-level styling systems

Legacy CSS under `src/styles/_legacy` is not active design authority.

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
- generated component docs source

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
6. The four-layer CSS stack is the only live design system.
7. Generated-source drift fails validation.
8. Validators and reports are manifest-owned.
9. Build, `validate-all`, and `system:full` must stay aligned.

---

## USE THIS DOC

Use this doc for repo-wide lock rules across:

- identity
- metadata
- SEO
- Open Graph
- components
- design
- validators and reports
- build and workflow behavior

---

## 1. CORE ENFORCEMENT MODEL

- Governing docs describe expected behavior.
- Runtime code produces behavior.
- Validators enforce structural alignment.
- Reports record system state.
- Build and `system:full` must evaluate the same repo state.

Primary enforcement owners:

- route metadata: `src/lib/content-quality/inventory.ts`
- SEO composition: `src/lib/seo/*`
- OG rules: `src/lib/seo/og/*`
- validator registry: `scripts/core/system-manifest.mjs`
- validator runner: `scripts/core/validate-all.mjs`

---

## 2. IDENTITY LOCK RULES

- Slugs are defined in the content and domain layer.
- Identity is derived from canonical route ownership and canonical metadata.
- UI components must not own page identity or slug derivation.
- Route aliases must not compete with canonical route ownership.

Forbidden:

- identity logic in `src/components/**`
- duplicate slug definitions across layers
- page-local identity shortcuts that bypass canonical routing

---

## 3. INVENTORY LOCK RULES

`src/lib/content-quality/inventory.ts` is the single source of truth for route metadata.

Rules:

- Every route resolves final metadata through inventory-backed logic.
- Inventory owns title, description, canonical, robots, and Open Graph URL output.
- Domain content may provide inputs, but inventory owns normalized route metadata.
- Routes must not define competing final metadata objects.

Forbidden:

- manual final metadata objects in route files
- parallel route metadata registries
- duplicate metadata ownership across page, domain, and inventory layers

---

## 4. SEO LOCK RULES

SEO ownership lives in `src/lib/seo/*`.

Rules:

- `buildSEO()` is the SEO composition owner.
- `resolveMetadata()` is the metadata normalization owner.
- Canonical URLs derive from normalized route paths.
- Brand composition belongs in the SEO layer, not the content layer.
- Components do not own SEO logic.

Forbidden:

- SEO logic in components
- manual canonical construction in UI code
- route-local `openGraph` structures that bypass the shared builder path
- brand injection in page content just to satisfy metadata composition

---

## 5. OG LOCK RULES

OG ownership lives in `src/lib/seo/og/*` and `src/app/api/og/route.ts`.

Rules:

- Open Graph images are API-backed.
- Route metadata must not hand-author OG image URLs.
- The OG system uses exactly three layouts:
  - `standard-content`
  - `service-system`
  - `industry-local`
- Supported entity routes use the `type/slug` contract.
- Unsupported routes may only use deterministic `path` fallback.
- The same route input must always produce the same OG URL and layout.

Forbidden:

- manual OG image URLs
- OG rendering logic in components
- random or time-based layout selection
- content-based layout guessing
- page-specific style hacks for OG output

---

## 6. COMPONENT LOCK RULES

Components are renderers.

Rules:

- Components consume prepared props.
- Components do not own data logic, metadata logic, or graph logic.
- Components do not own design-system rules.
- Repeated UI behavior should move into shared CSS or shared composition layers.

Forbidden:

- metadata generation inside components
- graph queries inside renderer code paths
- ad-hoc filtering, sorting, grouping, or fallback logic that changes system truth
- component-owned button or layout systems

---

## 7. DESIGN LOCK RULES

The live CSS system is:

```text
foundation.css -> framework.css -> primitives.css -> components.css
```

Rules:

- Tokens belong in `src/styles/foundation.css`.
- Layout and shell patterns belong in `src/styles/framework.css`.
- Reusable atoms belong in `src/styles/primitives.css`.
- Production component shells belong in `src/styles/components.css`.
- Inline production styles are not allowed.
- Parallel page-local styling systems are not allowed.

Legacy CSS under `src/styles/_legacy` is not current design truth.

---

## 8. VALIDATOR AND REPORT LOCK RULES

The validator system is manifest-owned.

Rules:

- `scripts/core/system-manifest.mjs` owns validator registration.
- `scripts/core/validate-all.mjs` owns validator execution.
- Validator report files are manifest-owned artifacts.
- Structural drift must fail loud through validation, not be hidden by special-case build behavior.
- Generated-source drift must be surfaced by validation.

Forbidden:

- undocumented validators
- orphan report files treated as official outputs
- manual edits to generated report artifacts
- build-only mutation paths that hide validation failures from standalone system checks

---

## 9. WORKFLOW LOCK RULES

Operational workflow must reflect the live pipeline.

Rules:

- `validate-all`, `system:full`, and `build` must agree on repo state.
- `build` must not pass by silently fixing repo drift that `system:full` would fail.
- `system:full` is the full validation gate.
- `build-safe` is the only build gate.
- Snapshot and report generation stay in the controlled pipeline.

If generator-owned files are stale, fix the source or run the generator explicitly. Do not rely on one command path to hide the issue.

---

## 10. CONTENT AND GRAPH LOCK RULES

- Canonical values come from `src/lib/content-graph/canonical.ts`.
- Graph relationships come from metadata, not manual related-content shortcuts.
- Page behavior must remain aligned with identity and content role.
- Passing validators does not replace manual review of authority, specificity, and persuasion.

---

## 11. FINAL LOCK SUMMARY

1. Code wins over docs.
2. Inventory owns final route metadata.
3. SEO lives in the SEO layer.
4. OG images come only from the deterministic API-backed OG system.
5. Components render only.
6. The four-layer CSS stack is the only live design system.
7. Validators and reports are manifest-owned.
8. Build and `system:full` must expose the same drift instead of hiding it.
# SYSTEM ARCHITECTURE — MindWP

> High-level architecture map for the live repo surface.
> Shows how the main layers fit together and which runtime owners matter.
> Orientation only. Does not override `FOUNDATION.md`, `CONTENT.md`, `CONVERSION.md`, `GRAPH.md`, or `WRITING.md`.

---

## USE THIS DOC

Use this doc for the shortest architecture map across governance, domain data, graph, presentation, validation, reports, deploy, dashboard, and manual review.

For positioning, writing, CTA behavior, content roles, or graph-scoring decisions, use the governing docs instead.

---

## SYSTEM LAYERS

```text
Governance -> Domain data and registries -> Graph and resolver -> Routes and templates -> CTA/contact -> Validators -> Reports -> Snapshot -> Deploy -> Dashboard -> Manual authority review
```

### Governance

- `FOUNDATION.md` is root authority.
- `WRITING.md`, `CONTENT.md`, `CONVERSION.md`, `GRAPH.md`, and `SYSTEM-RULES.md` are scoped governing docs.

### Domain Data and Registries

- `src/domains/**`
- canonical identifiers from the content-graph registry layer
- content-model aggregation in `src/domains/contentModel.ts`

### Graph and Resolver

- graph initialization through `src/domains/init/ensureGraphInitialized.ts`
- publishable and graph runtime under `src/lib/content-graph/**`
- related-content and authority resolution from metadata overlap, behavior safety, and progression logic

### Routes and Templates

- canonical app routes under `src/app/**`
- page and template surfaces that resolve page identity and page type
- shared publishable runtime for routed node rendering

### CTA and Contact

- `src/components/sections/PrimaryCTASection.tsx`
- `src/lib/cta/ctaRegistry.ts`
- `src/lib/contact/contactHref.ts`
- `/contact` as the single conversion endpoint

### Validation and Reports

- `scripts/core/validate-all.mjs`
- manifest-driven control-plane execution
- generated report artifacts in `reports/**`
- operator visibility through `/dev/system-dashboard`

Validators protect structure. They do not replace manual authority review.

### Deploy and Snapshot

- `scripts/deploy/**`
- predeploy validation gate (`system:quick` + `system:full`)
- snapshot generation via `build-system-snapshot.mjs`
- deploy report output in `artifacts/**`

This layer freezes and records system state at deploy time. It does not change runtime behavior.

### Manual Authority Review

Manual review checks authority, specificity, proof quality, CTA timing, and conversion clarity on important service, industry, case-study, homepage, and CTA surfaces before launch.

This is human judgment. Validators do not replace it.

---

## HUMAN WORKING MODEL

MindWP operates in two lanes:

1. **Runtime lane:** domain registries, graph initialization, routes, templates, CTA behavior, and contact flow.
2. **Control-plane lane:** validators, analyzers, reports, snapshots, deploy gates, and dashboard readers.

Runtime produces behavior.
Control-plane confirms structural alignment.
Manual review confirms authority quality where automation cannot judge it.

---

## FULL SYSTEM FLOW

1. Domain-owned content and registries declare canonical metadata.
2. The content model collects registries into one runtime input surface.
3. Graph initialization builds graph and resolver indexes.
4. App routes resolve canonical params into the correct page or template surface.
5. Publishable nodes render through shared runtime owners.
6. Page adapters create page identity and CTA enforcement scope.
7. `PrimaryCTASection` generates CTA behavior and `/contact` context.
8. Validators and reports confirm structural contracts.
9. Snapshot generation freezes validated system state.
10. Deploy pipeline records artifacts and enforces release gating.
11. Dashboard reads frozen report outputs for operator visibility.
12. Manual review checks authority and conversion quality where automation cannot.
13. Page content respects governing docs.

---

## ARCHITECTURAL RULES

- Governing docs describe expected behavior; code must match them.
- This architecture document explains ownership; it does not create authority above governing docs.
- One content item gets one canonical route.
- Components render content; they do not become graph or report engines.
- Runtime code does not become a dashboard computation layer.
- Dashboards read reports; they do not define system truth.
- Generated files and report artifacts are not edited manually.
- The full refresh path is `npm run system:full`.
- `npm run system:quick` is a safe operator check, not a replacement for the full run.
- Passing validators does not prove positioning strength, persuasion, or authority quality.
- Production release must go through `npm run deploy`.

---

## KEY OWNERS

| Concern                   | Primary Owner                                |
| ------------------------- | -------------------------------------------- |
| Governing docs            | `docs/core/*`                                |
| Content model             | `src/domains/contentModel.ts`                |
| Graph initialization      | `src/domains/init/ensureGraphInitialized.ts` |
| Publishable runtime       | `src/lib/content-graph/publishable.tsx`      |
| CTA rendering             | `src/components/sections/PrimaryCTASection.tsx` |
| CTA registry              | `src/lib/cta/ctaRegistry.ts`                 |
| Contact URL generation    | `src/lib/contact/contactHref.ts`             |
| Validator orchestration   | `scripts/core/validate-all.mjs`              |
| Workflow authority        | `docs/ops/WORKFLOW.md`                       |
| Audit authority           | `docs/ops/AUDIT.md`                          |
| Internal observability    | `/dev/system-dashboard`                      |
| Deploy and snapshot layer | `scripts/deploy/**`, `artifacts/**`          |
| Manual authority review   | Human review guided by `docs/core/*`         |

---

## DOC ORDER

Read in this order:

1. `FOUNDATION.md`
2. `WRITING.md`
3. `CONTENT.md`
4. `CONVERSION.md`
5. `GRAPH.md`
6. `SYSTEM-RULES.md`
7. `../ops/AUDIT.md`
8. `../ops/WORKFLOW.md`

This follows the authority order defined in `FOUNDATION.md` while keeping this file as the short architecture orientation map.

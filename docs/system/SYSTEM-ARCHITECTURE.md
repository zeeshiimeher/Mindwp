# SYSTEM ARCHITECTURE — MindWP

> High-level architecture map for the live repo surface.
> Shows how the main layers fit together and which runtime owners matter.

---

## USE THIS DOC

Use this doc for the shortest architecture map across governance, domain data, graph, presentation, validation, and reports.

If you are new to the repo, read this file for the mental model, then read `../ops/WORKFLOW.md` for the day-to-day command path.

---

## SYSTEM LAYERS

```text
Governance -> Domain data and registries -> Graph and resolver -> Routes and templates -> CTA/contact -> Validators -> Reports -> Snapshot -> Deploy -> Dashboard
```

## PAGE BEHAVIOR (ENFORCED)

All pages must follow the behavior model defined in [./FOUNDATION.md](./FOUNDATION.md).

If a page is written with the wrong behavior → it is invalid even if technically correct.

### Governance

- `FOUNDATION.md`
- supporting core contracts in `CONTENT.md`, `GRAPH.md`, and `CONVERSION.md`

### Domain Data and Registries

- `src/domains/**`
- canonical identifiers from the content-graph registry layer
- content-model aggregation in `src/domains/contentModel.ts`

### Graph and Resolver

- graph initialization through `src/domains/init/ensureGraphInitialized.ts`
- publishable and graph runtime under `src/lib/content-graph/**`
- related-content and authority resolution from metadata overlap

### Routes and Templates

- canonical app routes under `src/app/**`
- page and template surfaces that resolve page identity and page type
- shared publishable runtime for routed node rendering

### CTA and Contact

- `src/components/system/PrimaryCTASection.tsx`
- `src/lib/cta/ctaRegistry.ts`
- `src/lib/contact/contactHref.ts`
- `/contact` as the single conversion endpoint

### Validation and Reports

- `scripts/core/validate-all.mjs`
- manifest-driven control-plane execution
- generated report artifacts in `reports/**`
- operator visibility through `/dev/system-dashboard`

### Deploy and Snapshot (Control Extension)

- `scripts/deploy/**`
- predeploy validation gate (`system:quick` + `system:full`)
- snapshot generation via `build-system-snapshot.mjs`
- deploy report output in `artifacts/**`

This layer extends the control-plane by introducing a validated release step.
It does not change runtime behavior — it freezes and records system state at deploy time.

---

## HUMAN WORKING MODEL

Think about MindWP in two lanes:

1. Runtime lane: domain registries, graph initialization, routes, templates, CTA behavior, and the contact flow.
2. Control-plane lane: validators, analyzers, report writers, snapshot generation, deploy gating, and dashboard readers.

Human rule: the runtime lane produces behavior, and the control-plane lane confirms that behavior. The dashboard only reads the control-plane outputs.

Behavior rule: runtime produces behavior, and validators confirm alignment against the governing docs.

---

## FULL SYSTEM FLOW

1. Domain-owned content and registries declare canonical metadata.
2. The content model collects those registries into one runtime input surface.
3. Graph initialization builds the structured graph and resolver indexes.
4. App routes resolve canonical params into the correct page or template surface.
5. Publishable nodes render through shared runtime owners.
6. Page adapters create page identity and CTA enforcement scope.
7. `PrimaryCTASection` generates the correct CTA behavior and `/contact` context.
8. Validators and reports confirm that runtime behavior still matches the contracts.
9. Snapshot generation freezes the validated system state.
10. Deploy pipeline records artifacts and enforces release gating.
11. The dashboard reads frozen report outputs for operator visibility.
12. Page content respects the governing docs.

---

## ARCHITECTURAL RULES

- Governing docs describe expected behavior; code must match them.
- One content item gets one canonical route.
- Components render content; they do not become graph or report engines.
- Runtime code does not become a dashboard computation layer.
- Dashboards read reports; they do not define system truth.
- Generated files and report artifacts are not edited manually.
- The full refresh path is `npm run system:full`, not a manual side path.
- `npm run system:quick` is a safe operator check, not a replacement for the full source-of-truth run.
- Page content must stay aligned with the governing docs.
- Production release must go through `npm run deploy` to ensure validation, snapshot, and audit integrity.

---

## POSITIONING + WRITING INTEGRATION

Architecture depends on clear document ownership:

- [./FOUNDATION.md](./FOUNDATION.md) owns positioning and page behavior
- [./WRITING.md](./WRITING.md) owns tone and language
- [./SYSTEM-RULES.md](./SYSTEM-RULES.md) owns enforcement and validation constraints

All runtime content must satisfy all three layers.

---

## KEY OWNERS

| Concern                   | Primary Owner                                |
| ------------------------- | -------------------------------------------- |
| Identity and hierarchy    | `docs/system/FOUNDATION.md`                  |
| Content model             | `src/domains/contentModel.ts`                |
| Graph initialization      | `src/domains/init/ensureGraphInitialized.ts` |
| Publishable runtime       | `src/lib/content-graph/publishable.tsx`      |
| CTA rendering             | `src/components/system/PrimaryCTASection.tsx`         |
| CTA registry              | `src/lib/cta/ctaRegistry.ts`                 |
| Contact URL generation    | `src/lib/contact/contactHref.ts`             |
| Validator orchestration   | `scripts/core/validate-all.mjs`              |
| Workflow authority        | `docs/ops/WORKFLOW.md`                       |
| Audit authority           | `docs/ops/AUDIT.md`                          |
| Internal observability    | `/dev/system-dashboard`                      |
| Deploy and snapshot layer | `scripts/deploy/**`, `artifacts/**` |


---

## DOC ORDER

Read in this order:

1. `FOUNDATION.md`
2. `CONTENT.md`
3. `GRAPH.md`
4. `CONVERSION.md`
5. `../ops/AUDIT.md`
6. `../ops/WORKFLOW.md`
7. `SYSTEM-RULES.md`

This ensures behavior, positioning, and execution constraints are always applied after architectural understanding.

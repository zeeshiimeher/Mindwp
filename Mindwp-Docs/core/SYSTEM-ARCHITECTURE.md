# SYSTEM ARCHITECTURE — MindWP

> High-level architecture map for the live repo surface.
> This file explains how the main layers fit together and which runtime owners matter.

---

## USE THIS DOC

Use this file when you need the shortest architecture map across governance, domain data, graph, presentation, validation, and reports.

If you are new to the repo, read this file for the mental model, then read `TOOLS.md` for the commands you actually run.

---

## SYSTEM LAYERS

```text
Governance -> Domain data and registries -> Graph and resolver -> Routes and templates -> CTA/contact -> Validators -> Reports and dashboard
```

### Governance

- `Mindwp-Docs/core/SYSTEM.md`
- supporting core contracts in `CONTENT.md`, `GRAPH.md`, `CONVERSION.md`, and `TOOLS.md`

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

- `src/components/system/SmartCTA.tsx`
- `src/lib/cta/ctaRegistry.ts`
- `src/lib/contact/contactHref.ts`
- `/contact` as the single conversion endpoint

### Validation and Reports

- `scripts/core/validate-all.mjs`
- `npm run system:full`
- `npm run system:quick`
- report artifacts in `reports/**`
- operator visibility through `/dev/system-dashboard`

---

## HUMAN WORKING MODEL

Think about MindWP in two lanes:

1. Runtime lane: domain registries, graph initialization, routes, templates, CTA behavior, and the contact flow.
2. Control-plane lane: validators, analyzers, report writers, and dashboard readers.

Human rule: the runtime lane produces behavior, and the control-plane lane confirms that behavior. The dashboard only reads the control-plane outputs.

---

## FULL SYSTEM FLOW

1. Domain-owned content and registries declare canonical metadata.
2. The content model collects those registries into one runtime input surface.
3. Graph initialization builds the structured graph and resolver indexes.
4. App routes resolve canonical params into the correct page or template surface.
5. Publishable nodes render through shared runtime owners.
6. Page adapters create page identity and CTA enforcement scope.
7. `SmartCTA` generates the correct CTA behavior and `/contact` context.
8. Validators and reports confirm that runtime behavior still matches the contracts.
9. The dashboard reads frozen report outputs for operator visibility.

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

---

## KEY OWNERS

| Concern                   | Primary Owner                                |
| ------------------------- | -------------------------------------------- |
| Identity and hierarchy    | `Mindwp-Docs/core/SYSTEM.md`                 |
| Content model             | `src/domains/contentModel.ts`                |
| Graph initialization      | `src/domains/init/ensureGraphInitialized.ts` |
| Publishable runtime       | `src/lib/content-graph/publishable.tsx`      |
| CTA rendering             | `src/components/system/SmartCTA.tsx`         |
| CTA registry              | `src/lib/cta/ctaRegistry.ts`                 |
| Contact URL generation    | `src/lib/contact/contactHref.ts`             |
| Validator orchestration   | `scripts/core/validate-all.mjs`              |
| Full-system control plane | `npm run system:full`                        |
| Fast operator check       | `npm run system:quick`                       |
| Internal observability    | `/dev/system-dashboard`                      |

---

## DOC ORDER

Read in this order:

1. `SYSTEM.md`
2. `CONTENT.md`
3. `GRAPH.md`
4. `CONVERSION.md`
5. `TOOLS.md`
6. `SYSTEM-STATE.md`

For day-to-day work, the practical order is:

1. `SYSTEM-ARCHITECTURE.md`
2. `TOOLS.md`
3. the narrow domain or contract doc for the surface you are changing

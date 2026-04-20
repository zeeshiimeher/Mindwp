# SYSTEM CONTRACT — MindWP

> Contract index for the live deterministic system.
> Read this first for the short mental model, guarantees, enforcement surface, and extension rules.

---

## SYSTEM GUARANTEES

- Routing is canonical through `src/app` and enforced by `scripts/validators/validate-production-contracts.ts`.
- Content enters the runtime through canonical domain registries collected by `src/domains/contentModel.ts`.
- Graph initialization and authority resolution run through `src/domains/init/ensureGraphInitialized.ts` and the graph/resolver layer.
- Publishable routes render through one shared runtime owner: `src/lib/content-graph/publishable.tsx`.
- CTA panels render through `SmartCTA`, resolve contact URLs through `src/lib/contact/contactHref.ts`, and enforce page-level limits through the CTA registry.
- Contact conversion is single-path: `/contact` is the only form entry route.
- Validators run through one orchestrator: `node scripts/core/validate-all.mjs`.
- Full-system truth is generated through one control-plane entrypoint: `npm run system:full`.

---

## FULL SYSTEM FLOW (MANDATORY)

1. Content is authored in domain-owned data and registry files using canonical systems, topics, and industries.
2. Domain registries are collected into one content-model owner in `src/domains/contentModel.ts`.
3. `ensureGraphInitialized()` builds the content graph from those canonical registry sources.
4. Resolver indexes are derived from the structured graph plus the canonical blog/resource sources.
5. The authority resolver converts graph metadata overlap into ranked related-content candidates.
6. App routes in `src/app` read canonical params and hand off to the correct page or template surface.
7. Publishable pages render through the shared publishable-node runtime for service, feature, industry, blog, resource, and case-study nodes.
8. Page adapters own page identity and mount `CTARegistryProvider` so CTA and related-content rules apply per page.
9. `SmartCTA` resolves label, intent, position, and contextual `/contact` URL from canonical page identity and system metadata.
10. `/contact` receives `system` and `source`, preserves them through the form lifecycle, and passes full conversion context onward.
11. Validators check metadata, routing, CTA ownership, graph integrity, page structure, docs integrity, and production contracts.
12. `npm run system:full` regenerates reports and confirms that the system still matches this contract.

---

## SYSTEM ARCHITECTURE

### Core Primitives

- Canonical systems: `smart-website-systems`, `local-seo-authority`, `ai-lead-handling`, `crm-automation`, `reputation-review`, `revenue-growth`.
- Canonical page types: `service`, `feature`, `blog`, `resource`, `case-study`, `industry-detail`, `industry-category`, `page`.
- Canonical metadata keys: `systems[]`, `topics[]`, `industries[]`, plus stable `slug` and page identity.
- Canonical contact context: `system` plus generated `source` in `{type}/{slug}` format.

### Ownership Boundaries

- Identity, positioning, service hierarchy, terminology, and boundary rules are defined in [../core/SYSTEM.md](../core/SYSTEM.md).
- Content roles, hierarchy, metadata rules, authority rules, and editorial constraints are defined in [../core/CONTENT.md](../core/CONTENT.md).
- CTA, contact, and conversion contracts are defined in [../core/CONVERSION.md](../core/CONVERSION.md).
- Graph ontology and resolver mechanics are defined in [../core/GRAPH.md](../core/GRAPH.md).
- Control-plane commands, reports, and validator execution paths are defined in [../core/TOOLS.md](../core/TOOLS.md).

### Data Flow

- Domain data -> registry -> content model -> graph -> resolver -> route -> page/template -> SmartCTA -> `/contact` -> validators and reports.

---

## ENFORCEMENT MODEL

| Concern | Code Owner | Enforcement | Failure Mode |
|---|---|---|---|
| Canonical route surface | `src/app`, `validate-production-contracts.ts` | Route canonicality check | Blocking validator failure |
| Content metadata contract | Domain registries, canonical registries | `validate-content-contract.mjs` | Invalid or missing metadata fails |
| Domain/page structure | Domain registries, route/page structure | `validate-domain-structure.mjs` | Missing/stale structure fails |
| Graph integrity | `src/domains/contentModel.ts`, graph registry | `validate-graph.ts` | Graph/runtime mismatch fails |
| CTA ownership and placement | `SmartCTA`, CTA registry, page adapters | `validate-cta-violations.ts`, runtime registry assertions | Invalid owner or duplicate/inline conversion CTA fails |
| Contact context generation | `src/lib/contact/contactHref.ts` | Runtime validation and conversion validators | Invalid context throws/fails |
| Production contracts | Registry shapes, graph shapes, route rules | `validate-production-contracts.ts` | Blocking failure |
| Documentation integrity | Docs tree | `validate-docs.mjs` | Warnings reported in docs validation |

---

## EXTENSION RULES

### Add a Service

1. Add canonical service page data and metadata.
2. Ensure the service declares one canonical primary system and valid topics.
3. Let `SERVICE_REGISTRY` derive from canonical page data rather than creating parallel registry logic.
4. Add or update any landing-page curation deliberately; curation is allowed, duplication is not.
5. Run the narrow service or domain validation surface, then run `npm run system:full`.

### Add a Page

1. Choose one canonical page type.
2. Place the route under the canonical app path only once.
3. Mount `CTARegistryProvider` at the page/template boundary.
4. Use `SmartCTA` for page-level CTA panels and generated contact context only.
5. Validate page structure, CTA rules, and production contracts.

### Add Content

1. Author content in the owning domain data surface.
2. Use canonical identifiers from the system, industry, and topic registries.
3. Keep the content inside its funnel role and page-type role.
4. Let graph relationships derive from metadata; do not add manual presentation helpers.
5. Validate content contracts, graph integrity, and related-content behavior.

### Add a Section

1. Add sections only inside the owning template or section model.
2. Preserve page-type CTA limits and funnel-role boundaries.
3. Do not create standalone CTA bands or ad hoc related-content zones.
4. Reuse existing design, section, and payload contracts.
5. Validate the touched slice before running the full gate.

---

## WHAT IS NOT ALLOWED

- Duplicate app routes for the same canonical content.
- Parallel registries, parallel graph inputs, or parallel render runtimes.
- Hardcoded contact query strings or alternate form entry routes.
- Route files or domain data files deciding CTA intent or CTA placement.
- BOFU conversion structure on blog or resource pages.
- Equal-weight service hierarchy that breaks Smart Website gravity.
- Manual related-content presentation helpers replacing graph-derived relationships.
- Tool-first positioning, page-count pricing, hype claims, or non-canonical vocabulary that breaks system boundaries.

---

## SOURCE OF TRUTH MAP

| Concern | Primary Doc | Primary Code Owner |
|---|---|---|
| Identity and service hierarchy | [../core/SYSTEM.md](../core/SYSTEM.md) | Canonical systems and service pages |
| Content roles and metadata | [../core/CONTENT.md](../core/CONTENT.md) | Domain registries and content model |
| Graph and authority resolution | [../core/GRAPH.md](../core/GRAPH.md) | Graph registry, resolver, authority map |
| CTA and contact conversion | [../core/CONVERSION.md](../core/CONVERSION.md) | `SmartCTA`, CTA registry, contact href |
| Tooling and validation | [../core/TOOLS.md](../core/TOOLS.md) | `validate-all`, `system:full`, reports |

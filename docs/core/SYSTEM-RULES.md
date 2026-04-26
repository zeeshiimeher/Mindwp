# System Rules

Rules derived from execution decisions. Enforced by validators where possible.

**Root authority:** [./FOUNDATION.md](./FOUNDATION.md) governs identity, positioning, service hierarchy, vocabulary, and page-behavior definitions.

**Content authority:** [./CONTENT.md](./CONTENT.md) governs page roles, funnel boundaries, metadata behavior, and content ownership.

**Conversion authority:** [./CONVERSION.md](./CONVERSION.md) governs CTA behavior, contact routing, and conversion data contracts.

**Graph authority:** [./GRAPH.md](./GRAPH.md) governs graph relationships, related-content behavior, and authority-map rules.

Rules in this document must not contradict those contracts.

**Updated:** 2026-04-26

---

## 0. Page Behavior Enforcement (NEW — CRITICAL)

Follow the behavior model defined in [./FOUNDATION.md](./FOUNDATION.md).

Enforcement rules:

- Landing pages must validate as recognition-first
- System pages must validate as outcome-first
- Entry pages must validate as routing into systems

If page behavior is unclear → STOP and fix before continuing.

Validation may confirm structure. Manual review must still confirm authority, specificity, and conversion clarity.

---

## 1. Canonical Value Enforcement

All metadata MUST use canonical values from:

```
src/lib/content-graph/canonical.ts
```

Do NOT use:

- UI labels (e.g. `home-services`, `automotive-services`)
- Grouping page slugs
- Inferred categories

If a value is not in `canonical.ts` → it is INVALID.

Reason:

- Ensures graph consistency
- Prevents broken relationships
- Guarantees validator accuracy

---

## 2. Cluster Execution Model

Content expansion may use clusters only when expansion strengthens authority, proof, clarity, or conversion progression.

**Cluster = 1 Topic × 1 System × Multiple Industries**

A cluster may produce:

- Blog (PROBLEM)
- Blog (SYSTEM)
- Resource (ACTIONABLE)

Execution rule:

- Start small (2 industries)
- Validate
- Review for authority and differentiation
- Observe dashboard impact
- Then expand only if the cluster is not creating repetition

Do NOT:

- Scale blindly
- Generate bulk content without validation
- Add content only because a cluster pattern allows it
- Treat content volume as authority

---

## 3. Metadata Validation Constraints

Blog validation rules:

- `seo.title` is the primary metadata source and should stay concise and specific.
- `seo.description` is the canonical summary and should stay clear, concrete, and non-duplicative.
- `seo.canonical` must match the routed page path.
- `seo.openGraph` may override title or description when sharing needs differ, but it must remain semantically aligned with `seo`.

Important:

- Metadata must come from `seo`; legacy metadata fields are invalid.
- Schema builders must derive `name` and `description` from `seo.title` and `seo.description`.
- Do not add keyword arrays or keyword-match rules to content validation.

---

## 4. Execution Principle

We optimise for:

- **Authority > volume**
- **Consistency > creativity**
- **System integrity > speed**
- **Specificity > smoothness**

If anything breaks validation → STOP and fix.

### Execution Clarity Rule (NEW)

All changes must preserve:

- content behavior (landing vs system vs entry)
- positioning (experience-led, not build-led)
- deterministic output (no drift)

If a change improves wording but breaks behavior → REJECT it.

If a change passes validation but makes MindWP sound generic, build-led, agency-like, or tool-led → REJECT it.

---

## 5. Content Scope Rule

All content MUST belong to:

- Existing topics (from `canonical.ts`)
- Existing systems (from `canonical.ts`)
- Existing industries (from `canonical.ts`)

Content types allowed by this rule:

- Blog (`PROBLEM`, `SYSTEM`)
- Resource (`ACTIONABLE`, `EDUCATIONAL`)
- Case Study (`EXAMPLE`)
- Service, Feature, Industry, and Homepage content only when they follow their domain contracts

Do NOT:

- Create new topics
- Create new systems
- Create generic/unclassified content
- Mix multiple topics in one piece

Each content piece = ONE primary topic only.

---

## 6. Execution Boundaries

This system follows STRICT execution boundaries.

Do NOT:

- Redesign content structure
- Modify blueprint formats
- Change CTA logic (governed by [./CONVERSION.md](./CONVERSION.md))
- Alter content graph logic
- Introduce new abstractions
- Rename canonical values

Do ONLY:

- Create or edit content using approved page roles and behavior types
- Follow metadata rules strictly
- Make the smallest effective change unless a full rewrite is explicitly required
- Preserve authority assets when they are already working

---

## 7. Inventory as Single Source of Truth

`src/lib/content-quality/inventory.ts` is the single source of truth for all route metadata.

Rules:

- Every `page.tsx` resolves its metadata from inventory.
- Static routes call `getInventoryMetadata(routePath)` directly.
- Parameterized routes resolve inventory-backed metadata through `src/lib/seo/pageMetadata.ts` helpers.
- `STATIC_ROUTE_SEEDS` in inventory defines metadata for static pages.
- Domain registries feed into inventory via the content graph. Domain data does NOT feed directly into page metadata.
- No page may define its own `title`, `description`, or `openGraph` values outside inventory.
- No parallel route registries (e.g., `staticPages.ts`). One registry: inventory.
- Templates receive content, not metadata. Metadata is resolved before template rendering.
- Navigation links are derived from inventory (indexable routes). No hardcoded nav arrays.

Forbidden:

- Pages importing metadata from domain data files, hardcoded objects, or local constants.
- Any `generateMetadata()` or `export const metadata` containing literal strings.
- Duplicate metadata definitions across domain config and inventory.

---

## 8. UI Purity

Components are pure renderers. They accept props and return JSX.

Rules:

- All data fetching happens in `page.tsx` or a dedicated server-side data layer function called by `page.tsx`.
- All filtering, sorting, slicing, and grouping happens in the data layer before props reach a component.
- Components receive final, ready-to-render arrays.
- Components receive explicit visual directives (icon name, color token, gradient class). No inference from string content.

Forbidden:

- Components calling graph query functions (`getRelatedContent()`, `getServicesBySystem()`, etc.).
- Components calling domain data functions (`getCaseStudiesByIndustry()`, etc.).
- `Math.random()`, `sessionStorage`, `localStorage`, or any non-deterministic logic in components.
- Icon/color/gradient resolution from content strings.
- `Array.filter()`, `Array.sort()`, `Array.slice()` inside component render paths.
- Components importing from `src/domains/*/data/` or `src/lib/content-graph/`.

---

## 9. PrimaryCTASection Mandate

`PrimaryCTASection` is the system CTA component for primary page-level CTA panels. Deterministic contact routing is governed by [./CONVERSION.md](./CONVERSION.md) and enforced through `src/lib/contact/contactHref.ts`.

Rules:

- Primary page CTA panels should render through `PrimaryCTASection`.
- CTA routing and label rules must follow [./CONVERSION.md](./CONVERSION.md).
- Any CTA that routes to contact must preserve canonical `system` plus normalized `source` context.

Forbidden:

- Hardcoded `'/contact'` or `'/contact?...'` string literals in content, templates, or components.
- Manual `source: 'type/slug'` strings or inline `source=type/slug` query literals.
- Literal metadata or page-local metadata objects that bypass inventory.
- Contact routes that bypass `/contact` or drop `system` / `source` context.

### CTA Context Integrity (NEW)

CTA context must match page type and the contract defined in [./CONVERSION.md](./CONVERSION.md).

If CTA tone or context does not match the page contract → it is invalid.

If CTA timing feels pushy before recognition, clarity, or proof is established → it is invalid even if the contract passes.

---

## 10. Graph Execution

The content graph resolves relationships at build time via singleton initialization.

Rules:

- Graph execution must follow [./GRAPH.md](./GRAPH.md).
- Graph query functions are called in `page.tsx` server-side data preparation or generator scripts. Never in components.
- Related content arrays are fully resolved, sorted, and sliced before passing as props.
- `ensureGraphInitialized()` runs once per build via singleton cache. Runtime singleton initialization is allowed.
- Graph edges come from `canonical.ts` registries and domain registries.

Forbidden:

- Components calling graph query functions.
- Runtime relationship inference (e.g., ad-hoc text matching to derive links).
- Dynamic graph mutation or edge creation outside the canonical registry system.
- `Math.random()` or non-deterministic behavior in graph resolution.

### Content Meaning Integrity (NEW)

Graph relationships must preserve the contract defined in [./GRAPH.md](./GRAPH.md).

If a link would confuse a user → it is invalid.

If graph output is valid but weakens page behavior or decision progression → do not expose it in UI.

---

## 11. Content Ownership

Content lives in exactly one place per type.

| Content Type                                          | Canonical Location                   |
| ----------------------------------------------------- | ------------------------------------ |
| Service/Industry/CaseStudy/Blog/Resource/Feature data | `src/domains/*/data/{slug}.ts`       |
| Route metadata (title, description, OG, robots)       | `inventory.ts`                       |
| CTA labels                                            | `src/config/ctaLabels.ts`            |
| CTA intensity + copy                                  | `src/config/ui-intelligence.ts`      |
| Navigation links                                      | Derived from inventory               |
| Canonical values                                      | `src/lib/content-graph/canonical.ts` |

Forbidden:

- Duplicate content definitions across layers.
- Homepage data in screen-level files. Homepage sections use domain data files.
- FAQ content hardcoded in `page.tsx` or component files. FAQ data lives in domain data.
- Navigation links hardcoded in Nav or Footer components.

Required:

- Run validators after every meaningful batch
- Run manual authority review for pages that affect positioning, proof, or conversion

If any task requires structural change → STOP and escalate instead of implementing.

### No Template Duplication Rule (NEW)

Industry-page differentiation must follow [./FOUNDATION.md](./FOUNDATION.md) and [./WRITING.md](./WRITING.md).

If two pages feel similar → do not expand further. Rewrite the weaker page around real business conditions, proof, or decision context.

---

## 12. Permission Boundaries

### Allowed without asking

- Run validators and targeted checks
- Read any repo file for context
- Implement tasks from `EXECUTION-MEMORY.md` on demand only
- Fix validator failures and code defects inside active task scope
- Keep `EXECUTION-MEMORY.md` updated when execution state changes

### Requires user confirmation

- Update SYSTEM-TRUTH.md
- Modify governing docs in `docs/core/`, unless the user explicitly asks for an autopatch
- Add or remove validators
- Change CTA governance or conversion model
- Add new content types
- Make structural CSS architecture changes outside requested scope
- Run image generation in bulk mode

---

## 13. Common Failure Patterns

| Mistake                                    | Correct action                                                                                                 |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Writing plans into SYSTEM-TRUTH.md         | Put execution state in EXECUTION-MEMORY.md                                                                     |
| Adding `type: 'industry'` to a node        | Use `industry-detail` or `industry-category`                                                                   |
| Hardcoding spacing/font values             | Use design tokens                                                                                              |
| Creating CTA label outside approved config | Route through `CTA_CONFIG`                                                                                     |
| Skipping validation after a change         | Run the narrow validator/test needed, then rerun `system:full` when the change affects reports or system state |
| Manually editing generated images          | Regenerate with `--force` flag                                                                                 |
| Reusing industry content patterns           | Rewrite with industry-specific problems and situations                                                         |
| Passing validators and assuming the page is persuasive | Run manual authority, specificity, and conversion review                                                        |

## 14. Deploy Gate Rule (NEW)

Production release MUST go through:

npm run deploy

Direct platform deploy commands are not allowed.

Reason:
Ensures validation, snapshot, and audit integrity.

Final rule: validators protect system structure. Manual review protects authority.
# SYSTEM RULES — MindWP

> Execution rules derived from repo decisions.
> Enforced by validators where possible.
> Must not contradict `FOUNDATION.md`, `CONTENT.md`, `CONVERSION.md`, `GRAPH.md`, or `WRITING.md`.

**Updated:** 2026-04-26

---

## 0. Page Behavior Enforcement

Follow the behavior model defined in [./FOUNDATION.md](./FOUNDATION.md).

Enforcement rules:

- Landing pages must be recognition-first.
- System pages must be outcome-first.
- Entry pages must route into systems or next decisions.

If page behavior is unclear, stop and fix it before continuing.

Validation confirms structure. Manual review confirms authority, specificity, and conversion clarity.

---

## 1. Canonical Value Enforcement

All metadata must use canonical values from:

```text
src/lib/content-graph/canonical.ts
```

Do not use:

- UI labels such as `home-services` or `automotive-services`
- grouping page slugs
- inferred categories

If a value is not in `canonical.ts`, it is invalid.

Reason:

- ensures graph consistency
- prevents broken relationships
- guarantees validator accuracy

---

## 2. Cluster Execution Model

Content expansion may use clusters only when expansion strengthens authority, proof, clarity, or conversion progression.

```text
Cluster = 1 Topic × 1 System × Multiple Industries
```

A cluster may produce:

- Blog (`PROBLEM`)
- Blog (`SYSTEM`)
- Resource (`ACTIONABLE`)

Execution rule:

1. Start small.
2. Validate.
3. Review for authority and differentiation.
4. Observe dashboard impact.
5. Expand only if the cluster is not creating repetition.

Do not:

- scale blindly
- generate bulk content without validation
- add content only because a cluster pattern allows it
- treat content volume as authority

---

## 3. Metadata Validation Constraints

Blog validation rules:

- `seo.title` is the primary metadata source and should stay concise and specific.
- `seo.description` is the canonical summary and should stay clear, concrete, and non-duplicative.
- `seo.canonical` must match the routed page path.
- `seo.openGraph` may override title or description when sharing needs differ, but it must remain semantically aligned with `seo`.

Important:

- Metadata must come from `seo`; legacy metadata fields are invalid.
- Schema builders must derive `name` and `description` from `seo.title` and `seo.description`.
- Do not add keyword arrays or keyword-match rules to content validation.

---

## 4. Execution Principle

Optimise for:

- **Authority > volume**
- **Consistency > creativity**
- **System integrity > speed**
- **Specificity > smoothness**

If anything breaks validation or weakens authority, stop and fix it.

All changes must preserve:

- content behavior
- experience-led positioning
- deterministic output

Reject any change that:

- improves wording but breaks behavior
- passes validation but makes MindWP sound generic, build-led, agency-like, or tool-led

---

## 5. Content Scope Rule

All content must belong to existing canonical values:

- topics
- systems
- industries

Allowed content types:

- Blog (`PROBLEM`, `SYSTEM`)
- Resource (`ACTIONABLE`, `EDUCATIONAL`)
- Case Study (`EXAMPLE`)
- Service, Feature, Industry, and Homepage content when they follow their domain contracts

Do not:

- create new topics
- create new systems
- create generic or unclassified content
- mix multiple primary topics in one piece

Each content piece gets one primary topic.

---

## 6. Execution Boundaries

Do not:

- redesign content structure
- modify blueprint formats
- change CTA logic outside [./CONVERSION.md](./CONVERSION.md)
- alter content graph logic outside [./GRAPH.md](./GRAPH.md)
- introduce new abstractions
- rename canonical values

Do only:

- create or edit content using approved page roles and behavior types
- follow metadata rules strictly
- make the smallest effective change unless a full rewrite is explicitly required
- preserve authority assets when they are already working

---

## 7. Inventory as Single Source of Truth

`src/lib/content-quality/inventory.ts` is the single source of truth for route metadata.

Rules:

- Every `page.tsx` resolves metadata from inventory.
- Static routes call `getInventoryMetadata(routePath)` directly.
- Parameterized routes resolve inventory-backed metadata through `src/lib/seo/pageMetadata.ts` helpers.
- `STATIC_ROUTE_SEEDS` defines metadata for static pages.
- Domain registries feed into inventory through the content graph.
- Domain data does not feed directly into page metadata.
- No page defines its own `title`, `description`, or `openGraph` values outside inventory.
- No parallel route registries are allowed.
- Templates receive content, not metadata.
- Navigation links are derived from inventory indexable routes.

Forbidden:

- pages importing metadata from domain data files, hardcoded objects, or local constants
- `generateMetadata()` or `export const metadata` containing literal strings
- duplicate metadata definitions across domain config and inventory

---

## 8. UI Purity

Components are pure renderers. They accept props and return JSX.

Rules:

- Data fetching happens in `page.tsx` or a dedicated server-side data layer called by `page.tsx`.
- Filtering, sorting, slicing, and grouping happen before props reach a component.
- Components receive final, ready-to-render arrays.
- Components receive explicit visual directives. No inference from string content.

Forbidden:

- components calling graph query functions
- components calling domain data functions
- `Math.random()`, `sessionStorage`, `localStorage`, or non-deterministic component logic
- icon, color, or gradient resolution from content strings
- `Array.filter()`, `Array.sort()`, or `Array.slice()` inside component render paths
- components importing from `src/domains/*/data/` or `src/lib/content-graph/`

---

## 9. PrimaryCTASection Mandate

`PrimaryCTASection` is the system CTA component for primary page-level CTA panels.

Deterministic contact routing is governed by [./CONVERSION.md](./CONVERSION.md) and enforced through `src/lib/contact/contactHref.ts`.

Rules:

- Primary page CTA panels render through `PrimaryCTASection`.
- CTA routing and label rules follow [./CONVERSION.md](./CONVERSION.md).
- Any CTA that routes to contact preserves canonical `system` plus normalized `source` context.

Forbidden:

- hardcoded `'/contact'` or `'/contact?...'` string literals in content, templates, or components
- manual `source: 'type/slug'` strings or inline `source=type/slug` query literals
- literal metadata or page-local metadata objects that bypass inventory
- contact routes that bypass `/contact` or drop `system` / `source` context

CTA context must match page type and the contract defined in [./CONVERSION.md](./CONVERSION.md).

If CTA tone, context, or timing feels pushy before recognition, clarity, or proof is established, it is invalid even if the contract passes.

---

## 10. Graph Execution

The content graph resolves relationships at build time through singleton initialization.

Rules:

- Graph execution follows [./GRAPH.md](./GRAPH.md).
- Graph query functions run in `page.tsx` server-side data preparation or generator scripts, never in components.
- Related content arrays are resolved, sorted, and sliced before passing as props.
- `ensureGraphInitialized()` runs once per build through singleton cache.
- Graph edges come from canonical registries and domain registries.

Forbidden:

- components calling graph query functions
- runtime relationship inference from ad hoc text matching
- dynamic graph mutation or edge creation outside the canonical registry system
- `Math.random()` or non-deterministic graph behavior

If graph output is valid but weakens page behavior or decision progression, do not expose it in UI.

---

## 11. Content Ownership

Content lives in exactly one place per type.

| Content Type                                          | Canonical Location                   |
| ----------------------------------------------------- | ------------------------------------ |
| Service/Industry/CaseStudy/Blog/Resource/Feature data | `src/domains/*/data/{slug}.ts`       |
| Route metadata                                        | `inventory.ts`                       |
| CTA labels                                            | `src/config/ctaLabels.ts`            |
| CTA intensity + copy                                  | `src/config/ui-intelligence.ts`      |
| Navigation links                                      | Derived from inventory               |
| Canonical values                                      | `src/lib/content-graph/canonical.ts` |

Forbidden:

- duplicate content definitions across layers
- homepage data in screen-level files
- FAQ content hardcoded in `page.tsx` or component files
- navigation links hardcoded in Nav or Footer components

Required:

- run validators after every meaningful batch
- run manual authority review for pages that affect positioning, proof, or conversion

If a task requires structural change, stop and escalate instead of implementing.

### No Template Duplication

Industry-page differentiation must follow [./FOUNDATION.md](./FOUNDATION.md) and [./WRITING.md](./WRITING.md).

If two pages feel similar, do not expand further. Rewrite the weaker page around real business conditions, proof, or decision context.

---

## 12. Permission Boundaries

### Allowed without asking

- Run validators and targeted checks.
- Read repo files for context.
- Implement tasks from `EXECUTION-MEMORY.md` on demand only.
- Fix validator failures and code defects inside active task scope.
- Keep `EXECUTION-MEMORY.md` updated when execution state changes.

### Requires user confirmation

- Update `SYSTEM-TRUTH.md`.
- Modify governing docs in `docs/core/`, unless the user explicitly asks for an autopatch.
- Add or remove validators.
- Change CTA governance or conversion model.
- Add new content types.
- Make structural CSS architecture changes outside requested scope.
- Run image generation in bulk mode.

---

## 13. Common Failure Patterns

| Mistake                                             | Correct action                                                                                                 |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Writing plans into `SYSTEM-TRUTH.md`                | Put execution state in `EXECUTION-MEMORY.md`                                                                   |
| Adding `type: 'industry'` to a node                 | Use `industry-detail` or `industry-category`                                                                   |
| Hardcoding spacing/font values                      | Use design tokens                                                                                              |
| Creating CTA label outside approved config          | Route through `CTA_CONFIG`                                                                                     |
| Skipping validation after a change                  | Run the narrow validator/test needed, then rerun `system:full` when the change affects reports or system state |
| Manually editing generated images                   | Regenerate with `--force` flag                                                                                 |
| Reusing industry content patterns                   | Rewrite with industry-specific problems and situations                                                         |
| Passing validators and assuming the page persuades  | Run manual authority, specificity, and conversion review                                                        |

---

## 14. Deploy Gate Rule

Production release must go through:

```bash
npm run deploy
```

Direct platform deploy commands are not allowed.

Reason: validation, snapshot, and audit integrity.

Final rule: validators protect structure. Manual review protects authority.
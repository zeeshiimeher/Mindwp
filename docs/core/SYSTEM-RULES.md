# System Rules

Rules derived from execution decisions. Enforced by validators.

**Behavioral authority:** [./CONVERSION.md](./CONVERSION.md) governs all conversion behavior, CTA routing, and data contracts. Rules in this document must not contradict that contract.

**Updated:** 2026-04-09

---

## 0. Page Behavior Enforcement (NEW — CRITICAL)

Follow the behavior model defined in [./FOUNDATION.md](./FOUNDATION.md).

Enforcement rules:

- Landing pages must validate as recognition-first
- System pages must validate as outcome-first
- Entry pages must validate as routing into systems

If page behavior is unclear → STOP and fix before continuing.

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

Content expansion uses clusters:

**Cluster = 1 Topic × 1 System × Multiple Industries**

Each cluster produces:

- Blog (PROBLEM)
- Blog (SYSTEM)
- Resource (ACTIONABLE)

Execution rule:

- Start small (2 industries)
- Validate
- Observe dashboard impact
- Then expand

Do NOT:

- Scale blindly
- Generate bulk content without validation

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

- **Consistency > creativity**
- **Speed > perfection**
- **System integrity > content volume**

If anything breaks validation → STOP and fix.

### Execution Clarity Rule (NEW)

All changes must preserve:

- content behavior (landing vs system vs entry)
- positioning (experience-led, not build-led)
- deterministic output (no drift)

If a change improves wording but breaks behavior → REJECT it.

---

## 5. Content Scope Rule

All content MUST belong to:

- Existing topics (from `canonical.ts`)
- Existing systems (from `canonical.ts`)
- Existing industries (from `canonical.ts`)

Content types allowed:

- Blog (`PROBLEM`, `SYSTEM`)
- Resource (`ACTIONABLE`, `EDUCATIONAL`)
- Case Study (`EXAMPLE`)

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

- Create content using existing patterns
- Follow metadata rules strictly

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
- Run validators after every batch

If any task requires structural change → STOP and escalate instead of implementing.

### No Template Duplication Rule (NEW)

Industry-page differentiation must follow [./FOUNDATION.md](./FOUNDATION.md) and [./WRITING.md](./WRITING.md).

If two pages feel similar → rewrite one.

---

## 7. Permission Boundaries

### Allowed without asking

- Run validators and targeted checks
- Read any repo file for context
- Implement tasks from EXECUTION-MEMORY.md (On demand Only )
- Fix validator failures and code defects inside active task scope
- Keep Update EXECUTION-MEMORY.md

### Requires user confirmation

- Update SYSTEM-TRUTH.md
- Modify governing docs in docs/system/
- Add or remove validators
- Change CTA governance or conversion model
- Add new content types
- Make structural CSS architecture changes outside requested scope
- Run image generation in bulk mode

---

## 8. Common Failure Patterns

| Mistake                                    | Correct action                                                                                                 |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Writing plans into SYSTEM-TRUTH.md         | Put execution state in EXECUTION-MEMORY.md                                                                     |
| Adding `type: 'industry'` to a node        | Use `industry-detail` or `industry-category`                                                                   |
| Hardcoding spacing/font values             | Use design tokens                                                                                              |
| Creating CTA label outside approved config | Route through `CTA_CONFIG`                                                                                     |
| Skipping validation after a change         | Run the narrow validator/test needed, then rerun `system:full` when the change affects reports or system state |
| Manually editing generated images          | Regenerate with `--force` flag                                                                                 |
| Reusing industry content patterns           | Rewrite with industry-specific problems and situations                                                         |

## Deploy Gate Rule (NEW)

Production release MUST go through:

npm run deploy

Direct platform deploy commands are not allowed.

Reason:
Ensures validation, snapshot, and audit integrity.
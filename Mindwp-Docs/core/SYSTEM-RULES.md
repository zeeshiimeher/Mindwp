# System Rules

Rules derived from execution decisions. Enforced by validators.

**Behavioral authority:** CONVERSION-SYSTEM.md governs all conversion behavior, CTA routing, and data contracts. Rules in this document must not contradict the contract.

**Updated:** 2026-04-09

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

- `metaTitle`: 40–60 characters
- `metaDescription`: 140–160 characters
- `primaryKeyword` MUST appear as a substring in:
  - `title`
  - `metaTitle`
  - `metaDescription`

Important:
- `primaryKeyword` must be a substring match (case-insensitive)
- Avoid long keywords that break `metaTitle` limits

---

## 4. Execution Principle

We optimise for:

- **Consistency > creativity**
- **Speed > perfection**
- **System integrity > content volume**

If anything breaks validation → STOP and fix.

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
- Change CTA logic (governed by CONVERSION-SYSTEM.md)
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

- Every `page.tsx` resolves its metadata from inventory via `buildMetadata(routePath)`.
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

## 9. SmartCTA Mandate

`SmartCTA` is the only CTA rendering component in the system (governed by CONVERSION-SYSTEM.md).

Rules:

- All CTAs render through `SmartCTA`.
- `SmartCTA` receives `pageType`, `system`, and `slug` as props.
- Labels come from `CTA_LABEL_MAP` only.
- Intensity comes from `CTA_CONFIG` only.
- Contact href is built internally by `SmartCTA`.

Forbidden:

- Domain data files containing `buttonText`, `buttonHref`, or `ctaLabel`.
- Components constructing `<CTASection>` directly.
- Components calling `buildContactHref()` directly.
- Hardcoded CTA labels in templates, domain data, or components.

---

## 10. Graph Execution

The content graph resolves relationships at build time via singleton initialization.

Rules:

- Graph query functions are called in `page.tsx` server-side data preparation or generator scripts. Never in components.
- Related content arrays are fully resolved, sorted, and sliced before passing as props.
- `ensureGraphInitialized()` runs once per build via singleton cache. Runtime singleton initialization is allowed.
- Graph edges come from `canonical.ts` registries and domain registries.

Forbidden:

- Components calling graph query functions.
- Runtime relationship inference (e.g., keyword matching to derive links).
- Dynamic graph mutation or edge creation outside the canonical registry system.
- `Math.random()` or non-deterministic behavior in graph resolution.

---

## 11. Content Ownership

Content lives in exactly one place per type.

| Content Type | Canonical Location |
|---|---|
| Service/Industry/CaseStudy/Blog/Resource/Feature data | `src/domains/*/data/{slug}.ts` |
| Route metadata (title, description, OG, robots) | `inventory.ts` |
| CTA labels | `src/config/cta-labels.ts` |
| CTA intensity + copy | `src/config/ui-intelligence.ts` |
| Navigation links | Derived from inventory |
| Canonical values | `src/lib/content-graph/canonical.ts` |

Forbidden:

- Duplicate content definitions across layers.
- Homepage data in screen-level files. Homepage sections use domain data files.
- FAQ content hardcoded in `page.tsx` or component files. FAQ data lives in domain data.
- Navigation links hardcoded in Nav or Footer components.
- Run validators after every batch

If any task requires structural change → STOP and escalate instead of implementing.

---

## 7. Permission Boundaries

### Allowed without asking
- Run sync and validators
- Read any repo file for context
- Implement tasks from EXECUTION-MEMORY.md (On demand Only )
- Fix validator failures and code defects inside active task scope
- Keep Update EXECUTION-MEMORY.md

### Requires user confirmation
- Update SYSTEM-TRUTH.md
- Modify governing docs in Mindwp-Docs/core/
- Add or remove validators
- Change CTA governance or conversion model
- Add new content types
- Make structural CSS architecture changes outside requested scope
- Run image generation in bulk mode

---

## 8. Common Failure Patterns

| Mistake | Correct action |
|---|---|
| Writing plans into SYSTEM-TRUTH.md | Put execution state in EXECUTION-MEMORY.md |
| Adding `type: 'industry'` to a node | Use `industry-detail` or `industry-category` |
| Hardcoding spacing/font values | Use design tokens |
| Creating CTA label outside approved config | Route through `CTA_CONFIG` |
| Skipping validation after a change | Run validate-all → sync → verify clean |
| Manually editing generated images | Regenerate with `--force` flag |

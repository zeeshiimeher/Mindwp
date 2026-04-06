# System Rules

Rules derived from execution decisions. Enforced by validators.

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
- Change CTA logic
- Alter content graph logic
- Introduce new abstractions
- Rename canonical values

Do ONLY:
- Create content using existing patterns
- Follow metadata rules strictly
- Run validators after every batch

If any task requires structural change → STOP and escalate instead of implementing.

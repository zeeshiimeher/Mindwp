# System Rules

Rules derived from execution decisions. Enforced by validators.

**Behavioral authority:** SYSTEM-CONTRACT.md governs all conversion behavior, CTA routing, intent mapping, and data contracts. Rules in this document must not contradict the contract.

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
- Change CTA logic (governed by SYSTEM-CONTRACT.md)
- Alter content graph logic
- Introduce new abstractions
- Rename canonical values

Do ONLY:
- Create content using existing patterns
- Follow metadata rules strictly
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

# CONVERSION SYSTEM — MindWP

<!-- WHERE THIS FITS -->
<!-- Purpose: Single execution authority for CTA, contact, and conversion contracts -->
<!-- Depends on: FOUNDATION-AND-POSITIONING.md (tone), CONTENT-SYSTEM-ARCHITECTURE.md (structure), CONTENT-GRAPH-SYSTEM.md (metadata) -->
<!-- Used by: CTA components, /contact page, validators, system docs -->

> This document is the SINGLE SOURCE OF TRUTH for conversion behavior.
> All CTA, contact, routing, and validation rules must resolve to this contract.

**Status:** Governing Document
**Authority Level:** Execution Authority (Behavior Layer)
**Created:** 2026-04-08
**Updated:** 2026-04-09

---

## 1. SYSTEM LOCK

- Default CTA label fallback is locked: "Start a Conversation"
- Conversion model is conversation-first
- All conversion CTAs route to `/contact`
- All contextual CTA href values MUST resolve to `/contact?system={system}&source={type}/{slug}`
- No inline forms anywhere in the system
- `/contact` is the only form entry point
- `SmartCTA` is the primary system CTA component for page-level CTA panels
- Contact context must be generated through `src/lib/contact/contactHref.ts`; no hardcoded contact query strings are allowed

---

## 2. CTA SYSTEM SPEC

### CTA Input Contract (Required)

| Field | Required | Rule |
|---|---|---|
| `system` | YES | Canonical primary system value from `canonical.ts` |
| `source` | YES | Generated from normalized source type + slug: `{type}/{slug}` |

CTA construction is invalid if either required input is missing or malformed.

### SmartCTA Contract (Locked)

`SmartCTA` renders the primary system CTA panel. It accepts:

| Prop | Required | Rule |
|---|---|---|
| `system` | Recommended | Canonical primary system — resolves label and contact href |
| `sourceType` | Recommended | Normalized conversion source type |
| `slug` | Recommended | Content slug — used for source path generation |

Internally, `SmartCTA`:

1. Resolves `system` through a single normalized `resolvedSystem` value.
2. Calls `resolveCtaLabel(resolvedSystem)` from `src/config/ctaLabels.ts` to get the primary label.
3. Calls `buildContactHref({ system: resolvedSystem, sourceType, slug })` to construct the href.
4. Falls back to the global contact context when explicit CTA context is omitted.

### CTA Label Resolution (Locked)

- `CTA_LABEL_MAP` in `src/config/cta-labels.ts` is the only source of system-specific labels.
- Default fallback label is `"Start a Conversation"`.
- Labels are per-system only. No per-page custom labels.

### Contact URL Generation (Locked)

- `buildContactHref()` is the canonical low-level builder for contextual `/contact` URLs.
- Typed wrappers such as `buildServiceContactHref()` and `buildFeatureContactHref()` are the preferred source-specific helpers where available.
- Manual `source` strings are not allowed in production content or templates.

### URL Contract (Strict)

All contextual CTAs MUST resolve to:

```text
/contact?system={system}&source={type}/{slug}
```

Rules:

- `system` MUST be a canonical value
- `source` MUST be generated, not manually written
- `source` MUST use one of these normalized types:
  - `blog/{slug}`
  - `resource/{slug}`
  - `service/{slug}`
  - `industry/{slug}`
  - `case-study/{slug}`
  - `feature/{slug}`
- `industry-detail` and `industry-category` normalize to `industry` for source generation

### Edge Cases (Locked)

- Missing `system` -> FAIL (invalid CTA)
- Missing `source` -> FAIL (invalid CTA)
- Invalid source `type` -> FAIL
- Invalid canonical `system` -> FAIL
- Fallback is NOT allowed
- Silent recovery is NOT allowed

---

## 3. CONTACT SYSTEM SPEC

### Param Ingestion

- `/contact` MUST read `system` and `source` from the URL
- `system` and `source` MUST persist through the full form lifecycle
- Persistence includes initial render, validation, retry, and submission

### Form Contract

The form MUST capture:

- `system`
- `source`

### Data Flow

```text
/contact
-> read system + source from URL
-> attach to form state
-> validate contract
-> submit
-> pass to backend/CRM
```

### Failure Rules

- If `system` or `source` is missing -> log an error
- No silent fallback
- Do NOT allow submission without `system`
- Do NOT pass incomplete conversion context to backend/CRM

---

## 4. VALIDATION RULES

### CTA Validation Rules

- Every CTA that routes to `/contact` must carry `system` and `source` query params
- No conversion CTA may exist without query params
- No alternate conversion routes are allowed
- No CTA may bypass `/contact`
- Contact URLs must be generated via `buildContactHref()` or a typed scoped helper
- Domain payloads may include `buttonText` and `buttonHref` where template contracts require explicit CTA actions

### Metadata Requirement

Every page MUST define:

- `system` (primary canonical value)
- `slug`

### Source Generation Rule

- `source` MUST be generated from `{type}/{slug}`
- `source` MUST NOT be manually written
- Source generation MUST use normalized conversion types only

---

## 5. PRESENTATION LAYER (UI ONLY)

Presentation rules may change visual emphasis only. They must not override the CTA contract.

### CTA Progression Rule

On pages with multiple CTAs:

- top CTA may present lower intensity than later CTAs
- later CTAs may increase visual intensity as user context increases
- progression changes presentation only
- progression must not change label authority, route, `system`, or `source`

### CTA Tone Balance Rule

- CTA presentation must remain clear, business-relevant, and non-hyped
- Tone may adapt to `intent` through supporting copy and visual emphasis only
- Tone must not override the locked primary CTA label or route contract

---

## 6. FORBIDDEN

- Hardcoded `'/contact'` or `'/contact?...'` string literals in templates, data files, or components
- Manual `source: 'type/slug'` strings or inline `source=type/slug` query fragments
- Contact routes that bypass `/contact`
- Contact actions that drop canonical `system` or normalized `source` context
- Per-page custom label logic that bypasses `resolveCtaLabel()` for `SmartCTA`
- Custom CTA labels per-page (labels are per-system only, from `CTA_LABEL_MAP`)

---

## 7. ENFORCEMENT

- Conversion behavior must be documented only here
- Structural CTA placement rules belong to CONTENT-SYSTEM-ARCHITECTURE.md
- Metadata and source-generation requirements belong to CONTENT-GRAPH-SYSTEM.md
- `validate-cta-label-contract` enforces label alignment
- `validate-conversion-contract` enforces URL contract compliance

---

END OF CONTRACT.
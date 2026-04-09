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

- Primary CTA label is locked: "Start a Conversation"
- Conversion model is conversation-first
- All CTAs route to `/contact`
- All contextual CTA href values MUST resolve to `/contact?system={system}&source={type}/{slug}`
- No inline forms anywhere in the system
- `/contact` is the only form entry point
- `SmartCTA` is the only CTA rendering component in the system
- No component may construct its own CTA section, resolve its own label, or build its own contact href

---

## 2. CTA SYSTEM SPEC

### CTA Input Contract (Required)

| Field | Required | Rule |
|---|---|---|
| `system` | YES | Canonical primary system value from `canonical.ts` |
| `source` | YES | Generated from normalized source type + slug: `{type}/{slug}` |

CTA construction is invalid if either required input is missing or malformed.

### SmartCTA Contract (Locked)

`SmartCTA` is the ONLY component that renders CTAs. It accepts:

| Prop | Required | Rule |
|---|---|---|
| `pageType` | YES | `ContentNodeType` — determines intensity and presentation copy |
| `system` | YES | Canonical primary system — resolves label and contact href |
| `slug` | YES | Content slug — used for source path generation |

Internally, `SmartCTA`:

1. Calls `resolveCtaLabel(system)` from `src/config/cta-labels.ts` to get the label.
2. Calls `buildContactHref(system, type, slug)` to construct the href.
3. Reads `CTA_CONFIG[pageType]` from `src/config/ui-intelligence.ts` to resolve intensity, title, and description.

### CTA Label Resolution (Locked)

- `CTA_LABEL_MAP` in `src/config/cta-labels.ts` is the only source of system-specific labels.
- Default label is `"Start a Conversation"`.
- Labels are per-system only. No per-page custom labels.

### CTA Intensity Resolution (Locked)

- `CTA_CONFIG` in `src/config/ui-intelligence.ts` maps each `ContentNodeType` to `CTAIntensity` (`soft`, `mid`, `strong`) and presentation copy.
- Intensity is determined by page type, not by page-specific overrides.

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

- Every CTA must use `SmartCTA` — no other CTA rendering path is allowed
- Every CTA must include `system` and `source` query params
- No CTA may exist without query params
- No alternate conversion routes are allowed
- No CTA may bypass `/contact`
- No domain data file may contain `buttonText`, `buttonHref`, or `ctaLabel` fields
- No component may call `buildContactHref()` directly — that is SmartCTA's responsibility

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

- Domain data files containing `buttonText`, `buttonHref`, or `ctaLabel` fields
- Service renderers, templates, or sections constructing `<CTASection>` directly
- Any component calling `buildContactHref()` directly
- Hardcoded CTA labels anywhere in templates, domain data, or components
- `RelatedSectionCTA` or any wrapper that bypasses `SmartCTA`
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
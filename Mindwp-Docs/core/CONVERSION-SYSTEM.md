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

---

## 1. SYSTEM LOCK

- Primary CTA label is locked: "Start a Conversation"
- Conversion model is conversation-first
- All CTAs route to `/contact`
- All contextual CTA href values MUST resolve to `/contact?system={system}&source={type}/{slug}`
- No inline forms anywhere in the system
- `/contact` is the only form entry point
- SmartRelatedSection remains the only graph-driven linking system

---

## 2. CTA SYSTEM SPEC

### CTA Input Contract (Required)

| Field | Required | Rule |
|---|---|---|
| `system` | YES | Canonical primary system value |
| `source` | YES | Generated from normalized source type + slug: `{type}/{slug}` |
| `intent` | YES | Must match the locked intent enum |
| `pageType` | YES | Runtime page classification used for validation and presentation resolution |

CTA construction is invalid if any required input is missing or malformed.

### Intent Enum (Locked)

- `problem-aware`
- `system-aware`
- `solution-aware`
- `decision-ready`

### CTA Resolution Logic

CTA resolution is deterministic and runs in this order:

1. Read the canonical primary `system` from page metadata.
2. Read the page `slug` and normalized source `type`.
3. Generate `source` from `{type}/{slug}`.
4. Validate `intent` against the locked enum.
5. Validate `pageType` against the runtime page classification.
6. Resolve CTA `intensity` from `intent`.
7. Resolve CTA presentation from `intent` and `pageType`.
8. Read CTA label from `CTA_CONFIG`.
9. Construct the final href as `/contact?system={system}&source={type}/{slug}`.

Resolver constraints:

- `ctaResolver` resolves intensity and presentation only
- `ctaResolver` does NOT generate labels
- Labels come only from `CTA_CONFIG`
- Intent affects intensity and presentation only
- Intent does NOT override label selection

### Intent To Intensity Mapping (Locked)

| Intent | Intensity | Presentation Effect |
|---|---|---|
| `problem-aware` | `soft` | Context-building, lower visual pressure |
| `system-aware` | `mid` | System-explaining, clearer solution framing |
| `solution-aware` | `mid` | Proof-oriented, stronger implementation framing |
| `decision-ready` | `strong` | Direct action emphasis |

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
- Missing `intent` -> FAIL (invalid CTA)
- Missing `pageType` -> FAIL (invalid CTA)
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

- Every CTA must include `system` and `source`
- No CTA may exist without query params
- No alternate conversion routes are allowed
- No CTA may bypass `/contact`

### Metadata Requirement

Every page MUST define:

- `system` (primary)
- `intent`
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

## 6. ENFORCEMENT

- Conversion behavior must be documented only here
- Structural CTA placement rules belong to CONTENT-SYSTEM-ARCHITECTURE.md
- Metadata and source-generation requirements belong to CONTENT-GRAPH-SYSTEM.md
- Current system reality is reported in SYSTEM-TRUTH.md

---

END OF CONTRACT.
# SYSTEM CONTRACT — MindWP

<!-- WHERE THIS FITS -->
<!-- Purpose: Central behavioral contract — EXECUTION AUTHORITY for all conversion and CTA behavior -->
<!-- Depends on: FOUNDATION-AND-POSITIONING.md (positioning + copy), CONTENT-SYSTEM-ARCHITECTURE.md (structure) -->
<!-- Used by: All CTA components, /contact page, validators -->

> This document is the SINGLE SOURCE OF TRUTH for conversion behavior.
> All other documents must reference this contract — not redefine it.

**Status:** Governing Document
**Authority Level:** Execution Authority (Behavior Layer)
**Created:** 2026-04-07

---

## 1. CONVERSION SYSTEM

### Single Entry Point

- All conversions route to: `/contact`
- No inline forms anywhere in the system
- No alternate conversion routes exist
- `/conversation` page REMOVED — permanent redirect to `/contact`

### Conversion Model

- Conversation-first (NOT booking-first)
- No urgency, no pressure, no hype
- CTA tone governed by FOUNDATION-AND-POSITIONING.md §5

### Conversion Flow

```
Content Page → Smart CTA → /contact?system={system}&source={type}/{slug} → Form → CRM
```

This flow is deterministic. No variability. No conditional paths.

---

## 2. CTA SYSTEM

### Inputs (REQUIRED)

| Field  | Type   | Source                          | Required |
|--------|--------|---------------------------------|----------|
| system | string | Primary system of page (canonical) | YES |
| source | string | Auto-generated: `{type}/{slug}` | YES |
| intent | enum   | From content metadata           | YES |

### Output (STRICT)

All CTAs produce:

```
/contact?system={system}&source={type}/{slug}
```

Examples:
- `/contact?system=crm-automation&source=blog/lead-automation-framework`
- `/contact?system=smart-website&source=service/smart-website-system`

### CTA Label System (CONTROLLED)

Allowed labels ONLY:

- "Start a Conversation" (default / primary)
- "Explore This System"
- "See How This Works"

No custom labels allowed. Labels come ONLY from `CTA_CONFIG` (ui-intelligence.ts) or page data files.

### CTA Intensity Mapping

| Content Type | Intent Level  | Intensity |
|-------------|---------------|-----------|
| Blog        | problem-aware | soft      |
| Resource    | system-aware  | mid       |
| Industry    | solution-aware| mid       |
| Case Study  | solution-aware| mid       |
| Service     | decision-ready| strong    |
| Feature     | decision-ready| strong    |

### CTA Placement Rules

| Page Type         | CTA Placement   |
|-------------------|-----------------|
| Blog              | End             |
| Resource          | Mid + End       |
| Case Study        | End             |
| Service           | Hero + End      |
| Feature           | Hero + End      |
| Industry Detail   | Mid             |
| Industry Category | End             |

### Rules

- All CTAs on a page must use the same system + source context
- No CTA may exist without system + source
- One primary CTA per screen maximum
- No competing CTAs at same intensity level
- `ctaResolver.ts` resolves intensity level ONLY — does NOT produce labels
- `validate-cta.mjs` must scan all CTA label sources: `data/`, `lib/`, `config/`, `components/system/`

### Fallback (NON-BLOCKING)

If missing parameters:

| Field  | Fallback          |
|--------|-------------------|
| system | "unknown"         |
| source | "direct/unknown"  |
| intent | "unknown"         |

User MUST still be able to submit form. Fallbacks trigger dev warnings. No silent failures.

---

## 3. CONTACT SYSTEM

### Input Layer

- Read URL params: `system`, `source`
- Validate format against contract

### Form Layer

Hidden fields included in form:

- `system`
- `source`
- `intent`

### Submission Layer

Payload MUST contain:

```json
{
  "system": "string",
  "source": "string",
  "intent": "string",
  "name": "string",
  "email": "string",
  "message": "string"
}
```

### Behavior Rules

- NEVER block submission due to missing context params
- Apply fallback if params missing (see §2 Fallback)
- Preserve context through entire submission flow
- Values must persist through submission
- Must be included in CRM payload

---

## 4. DATA CONTRACT

### Exact Structure

```typescript
{
  system: string;   // canonical system identifier
  source: string;   // format: {type}/{slug}
  intent: string;   // from intent enum
  name: string;     // user-provided
  email: string;    // user-provided
  message: string;  // user-provided
}
```

### Validation Rules

| Field   | Rule                                           |
|---------|------------------------------------------------|
| system  | Must match canonical systems from `canonical.ts` |
| source  | Must follow `{type}/{slug}` format             |
| intent  | Must match intent enum (problem-aware, solution-aware, system-aware, decision-ready) |
| name    | User input — no system validation              |
| email   | User input — standard email validation         |
| message | User input — no system validation              |

### Source Type Enum (MUST match ContentNodeType)

- blog
- resource
- service
- industry-detail
- case-study
- feature

### Fallback Rules

- Fallback is allowed but must be explicit
- All fallbacks must trigger dev warnings
- No silent failures
- Invalid type → dev warning
- Slug should exist in content registry

---

## 5. INTENT MODEL (LOCKED)

### Core Intents

| Intent         | Description                    |
|----------------|--------------------------------|
| problem-aware  | User recognizes a problem      |
| solution-aware | User evaluating solutions      |
| system-aware   | User understanding systems     |
| decision-ready | User ready to engage           |

### Default Mapping

| Content Type | Default Intent  |
|-------------|-----------------|
| Blog        | problem-aware   |
| Resource    | system-aware    |
| Industry    | solution-aware  |
| Case Study  | solution-aware  |
| Service     | decision-ready  |
| Feature     | decision-ready  |

### Extension Rule

New intents:
- Must be added to this contract first
- Must be added to validators

---

## 6. CONVERSION ROUTING (LOCKED — Phase 10)

Routing is determined by content intent classification, NOT a linear funnel.

### Blog Routing

| Classification | Routes To          |
|---------------|--------------------|
| PROBLEM       | Matching service   |
| SYSTEM        | Matching resource  |
| FRAMEWORK     | Resource or industry |

### Resource Routing

| Classification | Routes To          |
|---------------|--------------------|
| ACTIONABLE    | Matching service   |
| EDUCATIONAL   | Matching service   |
| EXAMPLE       | Matching case study |

### Static Paths

```
Industry Category → Industry Detail → Service
Feature → Service (via SmartRelatedSection)
```

### Routing Rules

- No linear journey progression enforced
- All CTAs route to `/contact` as single entry point
- CTA URLs must include system and source query parameters
- CTA target determined by intent classification, not funnel position
- SmartRelatedSection is the sole linking mechanism

---

## 7. SYSTEM GUARANTEES

This contract guarantees:

1. **All conversions are centralized** — single `/contact` entry point
2. **All leads carry context** — system + source + intent in every submission
3. **No fragmented entry points** — no inline forms, no alternate routes
4. **No undefined behavior** — deterministic CTA routing, explicit fallbacks
5. **Consistent attribution** — every lead traceable to source page and system
6. **No silent failures** — all fallbacks logged, all warnings surfaced

---

## 8. NON-NEGOTIABLES

- No additional forms anywhere in the system
- No CTA without system parameter
- No CTA without source parameter
- No custom CTA labels outside approved list
- No alternate conversion routes
- No booking-first framing
- No urgency or pressure language

---

## 9. CROSS-REFERENCES

| Document | Relationship |
|----------|-------------|
| FOUNDATION-AND-POSITIONING.md §5 | CTA copy standards, tone rules |
| CONTENT-SYSTEM-ARCHITECTURE.md | Page composition structure (hero→problem→solution→proof→CTA) |
| CONTENT-GRAPH-SYSTEM.md | Metadata rules (primary system, intent), source generation |
| SYSTEM-TRUTH.md §2.5 | Conversion intelligence snapshot |

---

## 10. ENFORCEMENT

### Validators

| Validator | Enforces |
|-----------|----------|
| `validate-cta.mjs` | CTA labels, hrefs, placement rules |
| `validate-conversion.ts` | CTA presence, service links, intent routing |
| `validate-metadata.mjs` | System + intent field presence |
| `validate-metadata-completeness.mjs` | Required metadata completeness |

### Implementation Files

| File | Role |
|------|------|
| `src/config/primaryCta.ts` | Global CTA label + href |
| `src/config/ui-intelligence.ts` | CTA_CONFIG (labels, intensity) |
| `src/components/system/SmartCTA.tsx` | CTA rendering component |
| `src/lib/graph/query.ts` | Content graph query API |

---

END OF CONTRACT.

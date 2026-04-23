# CONVERSION — MindWP

> Source of truth for CTA ownership, contact context, page-level CTA enforcement, and `/contact` conversion rules.
> If this file conflicts with [./FOUNDATION.md](./FOUNDATION.md), fix the conflict immediately.

---

## USE THIS DOC

Use this doc for `SmartCTA`, page adapters, CTA placement, contact URLs, and the `/contact` flow.

---

## SYSTEM GUARANTEES

- `/contact` is the only form entry route.
- CTA panels render through `SmartCTA`.
- CTA labels resolve through `src/config/ctaLabels.ts`.
- Contact URLs resolve through `src/lib/contact/contactHref.ts`.
- Page-level CTA rules enforce intent, position, and panel count through the CTA registry.
- Route files and domain data files do not own CTA intent.

---

## OWNERSHIP BOUNDARIES

### Template and Page Adapter Ownership

Templates and page adapters own:

- `pageId`
- `pageType`
- CTA intent
- CTA position
- page-scoped registry setup through `CTARegistryProvider`

### SmartCTA Ownership

`SmartCTA` owns:

- CTA rendering
- label resolution
- contact URL generation
- CTA registration against the active page registry

### Contact Builder Ownership

`buildContactHref()` owns contextual `/contact` URL generation.

Hardcoded contact query strings are not allowed.

---

## CANONICAL CTA CONTRACT

### Required Inputs

Every production CTA that routes to `/contact` needs:

- one canonical `system`
- one generated `source`
- one page identity composed of `pageId` and `pageType`

Canonical source types are:

- `service`
- `feature`
- `industry`
- `blog`
- `resource`
- `case-study`
- `page`
- `global`

`industry-detail` and `industry-category` normalize to `industry` for contact-source generation.

### Contact URL Contract

Canonical contact URLs use this shape:

```text
/contact?system={system}&source={type}/{slug}
```

Rules:

- `system` must be canonical.
- `source` must be generated, not manually composed in page content.
- invalid context throws; silent fallback is not allowed.

---

## CTA INTENT AND PAGE-TYPE MODEL

Default page-intent mapping is owned by `src/lib/page/pageIdentity.ts`.

| Page Type           | Default Intent |
| ------------------- | -------------- |
| `service`           | `conversion`   |
| `feature`           | `comparison`   |
| `industry-detail`   | `comparison`   |
| `industry-category` | `comparison`   |
| `case-study`        | `diagnostic`   |
| `blog`              | `entry`        |
| `resource`          | `entry`        |
| `page`              | `entry`        |

This default may be narrowed by the page template, but it may not break page-level registry rules.
This default may be narrowed by the page template, but it may not break registry rules.

### Case Study CTA Rule (NEW)

Case-study CTAs must stay subordinate to the narrative proof role.

Rules:

- CTA appears only at the end of the case study
- CTA tone stays soft and observational
- CTA must not interrupt the proof narrative with a pushy escalation

---

## CTA REGISTRY RULES (LOCKED)

- `CTARegistryProvider` is required at the page or template boundary.
- One page gets one page-scoped CTA registry.
- One page may not render more CTA panels than its page-type rule allows.
- One page may not render more than one `conversion` CTA.
- Non-homepage pages may not duplicate a CTA intent.
- Inline positions may not use `conversion` intent.

Runtime owners:

- `src/components/system/PageEnforcement.tsx`
- `src/lib/cta/ctaRegistry.ts`

---

## CTA LABEL RESOLUTION

CTA labels are resolved, not manually invented page by page.
CTA labels are resolved, not invented page by page.

Rules:

- `resolveCtaLabel()` is the primary label resolver.
- `CTA_LABEL_MAP` and the page-type rule sets in `src/config/ctaLabels.ts` are the label authorities.
- The default contact label remains `Start a Conversation` where the rule set falls back to canonical defaults.
- Unapproved CTA labels create drift and should be removed.

---

## CONTACT FLOW

1. A page renders `SmartCTA` with canonical `system`, `slug`, `pageId`, and `pageType` context.
2. `SmartCTA` resolves the CTA label.
3. `SmartCTA` generates the contextual `/contact` href.
4. `/contact` reads `system` and `source` from the URL.
5. The form preserves that context through render, validation, retry, and submission.
6. Submission passes complete conversion context onward.

If `system` or `source` is invalid or missing, the conversion contract has failed.
If `system` or `source` is invalid or missing, the conversion contract fails.

---

## WHAT IS NOT ALLOWED

- Alternate form entry routes.
- Hardcoded `/contact?system=...&source=...` strings in production content or templates.
- Route files rendering `SmartCTA` directly.
- Domain data files rendering `SmartCTA` directly.
- Inline conversion CTAs.
- Multiple conversion CTAs on one page.
- Silent fallback when contact context is invalid.

---

## ENFORCEMENT MODEL

| Concern                            | Primary Owner                | Enforced By                            |
| ---------------------------------- | ---------------------------- | -------------------------------------- |
| CTA owner boundary                 | Page adapters and templates  | `validate-cta-violations.ts`           |
| CTA placement and duplication      | CTA registry                 | runtime assertions in `ctaRegistry.ts` |
| Contact context validity           | `buildContactHref()`         | runtime validation in `contactHref.ts` |
| Label contract                     | `ctaLabels.ts`               | CTA label contract validator           |
| Conversion URL and `/contact` flow | contact and conversion layer | conversion contract validator          |

---

## CROSS-REFERENCE MAP

- Page roles and funnel boundaries: [./CONTENT.md](./CONTENT.md)
- System hierarchy and system vocabulary: [./FOUNDATION.md](./FOUNDATION.md)

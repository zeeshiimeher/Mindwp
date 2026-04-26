# CONVERSION — MindWP

> Source of truth for CTA ownership, contact context, page-level CTA enforcement, and `/contact` conversion rules.
> If this file conflicts with [./FOUNDATION.md](./FOUNDATION.md), fix the conflict immediately.
> This document controls CTA behavior only. Identity, positioning, page roles, and writing voice still come from [./FOUNDATION.md](./FOUNDATION.md), [./CONTENT.md](./CONTENT.md), and [./WRITING.md](./WRITING.md).

---

## USE THIS DOC

Use this doc when deciding how a page asks for action.

This document answers:

- which component owns CTA rendering
- which layer owns CTA intent
- how contact URLs are generated
- how `/contact` preserves conversion context
- where CTA panels may appear
- what CTA behavior is not allowed

---

## CONVERSION DECISION ORDER

Before adding or changing a CTA, decide in this order:

1. Confirm the page type from [./CONTENT.md](./CONTENT.md).
2. Confirm the page behavior from [./FOUNDATION.md](./FOUNDATION.md): landing, system, or entry.
3. Confirm the CTA intent allowed for that page type.
4. Confirm the CTA position allowed by the registry.
5. Confirm the canonical system context.
6. Confirm the generated contact source.
7. Confirm the CTA label resolves from `src/config/ctaLabels.ts`.

Do not write or hardcode CTA copy before this is clear.

---

## SYSTEM GUARANTEES

- `/contact` is the only form entry route.
- CTA panels render through `PrimaryCTASection`.
- CTA labels resolve through `src/config/ctaLabels.ts`.
- Contact URLs resolve through `src/lib/contact/contactHref.ts`.
- Page-level CTA rules enforce intent, position, and panel count through the CTA registry.
- Route files and domain data files do not own CTA intent.
- CTA behavior must support the page role; it must not change the page role.
- A valid CTA contract does not automatically mean the CTA is persuasive, well-timed, or authority-safe.

---

## OWNERSHIP BOUNDARIES

### Template and Page Adapter

Templates and page adapters own:

- `pageId`
- `pageType`
- CTA intent
- CTA position
- page-scoped registry setup through `CTARegistryProvider`

### PrimaryCTASection

`PrimaryCTASection` owns:

- CTA rendering
- label resolution
- contact URL generation
- CTA registration against the active page registry

### Contact Builder

`buildContactHref()` owns contextual `/contact` URL generation.

Hardcoded contact query strings are not allowed.

---

## CANONICAL CTA CONTRACT

Every production CTA that routes to `/contact` needs:

- one canonical `system`
- one generated `source`
- one page identity composed of `pageId` and `pageType`

Canonical source types:

- `service`
- `feature`
- `industry`
- `blog`
- `resource`
- `case-study`
- `page`
- `global`

`industry-detail` and `industry-category` normalize to `industry` for contact-source generation.

Canonical contact URLs use this shape:

```text
/contact?system={system}&source={type}/{slug}
```

Rules:

- `system` must be canonical.
- `source` must be generated, not manually composed in page content.
- invalid context throws; silent fallback is not allowed.

---

## CTA INTENT MODEL

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

Intent must follow page behavior:

- landing pages may move toward contact, but must not feel like forced sales pages
- system pages may use conversion intent when the reader is ready to decide
- entry pages usually diagnose or route before asking for direct contact
- case studies prove first, ask later

### Case Study CTA

Case-study CTAs must stay subordinate to the proof narrative.

Rules:

- CTA appears only at the end of the case study
- CTA tone stays soft and observational
- CTA must not interrupt the proof narrative with a pushy escalation
- CTA should route toward the service, industry, or system context proven by the case study

---

## CTA REGISTRY RULES

- `CTARegistryProvider` is required at the page or template boundary.
- One page gets one page-scoped CTA registry.
- One page may not render more CTA panels than its page-type rule allows.
- One page may not render more than one `conversion` CTA.
- Non-homepage pages may not duplicate a CTA intent.
- Inline positions may not use `conversion` intent.
- CTA position must match the page behavior type.
- A technically valid CTA can still be removed if it weakens page flow.

Runtime owners:

- `src/components/system/PageEnforcement.tsx`
- `src/lib/cta/ctaRegistry.ts`

---

## CTA LABEL RESOLUTION

CTA labels are resolved, not manually invented page by page.

Rules:

- `resolveCtaLabel()` is the primary label resolver.
- `CTA_LABEL_MAP` and the page-type rule sets in `src/config/ctaLabels.ts` are label authorities.
- The default contact label remains `Start a Conversation` where the rule set falls back to canonical defaults.
- Unapproved CTA labels create drift and should be removed.
- CTA labels must feel like the next natural step for the page, not a generic sales push.

---

## CONTACT FLOW

1. A page renders `PrimaryCTASection` with canonical `system`, `slug`, `pageId`, and `pageType` context.
2. `PrimaryCTASection` resolves the CTA label.
3. `PrimaryCTASection` generates the contextual `/contact` href.
4. `/contact` reads `system` and `source` from the URL.
5. The form preserves that context through render, validation, retry, and submission.
6. Submission passes complete conversion context onward.

If `system` or `source` is invalid or missing, the conversion contract fails.

---

## WHAT IS NOT ALLOWED

- Alternate form entry routes.
- Hardcoded `/contact?system=...&source=...` strings in production content or templates.
- Route files rendering `PrimaryCTASection` directly.
- Domain data files rendering `PrimaryCTASection` directly.
- Inline conversion CTAs.
- Multiple conversion CTAs on one page.
- Silent fallback when contact context is invalid.
- CTA copy that makes MindWP sound like a normal website builder, agency, SaaS tool, or template provider.
- CTAs that ask for conversion before the page has created enough recognition, clarity, or proof.
- CTA changes made only to improve click volume while weakening authority or trust.

---

## ENFORCEMENT MODEL

| Concern                            | Primary Owner                | Enforced By                            |
| ---------------------------------- | ---------------------------- | -------------------------------------- |
| CTA owner boundary                 | Page adapters and templates  | `validate-cta-violations.ts`           |
| CTA placement and duplication      | CTA registry                 | runtime assertions in `ctaRegistry.ts` |
| Contact context validity           | `buildContactHref()`         | runtime validation in `contactHref.ts` |
| Label contract                     | `ctaLabels.ts`               | CTA label contract validator           |
| Conversion URL and `/contact` flow | contact and conversion layer | conversion contract validator          |

Automated enforcement confirms CTA ownership, placement, duplication, labels, and contact context.
Manual review still owns CTA timing, tone, persuasion, and authority fit.

---

## CROSS-REFERENCE MAP

- Page roles and funnel boundaries: [./CONTENT.md](./CONTENT.md)
- System hierarchy and system vocabulary: [./FOUNDATION.md](./FOUNDATION.md)
- Public writing style and CTA language: [./WRITING.md](./WRITING.md)
- Graph routing and related-content context: [./GRAPH.md](./GRAPH.md)

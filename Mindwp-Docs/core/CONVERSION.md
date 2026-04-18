# CONVERSION SYSTEM — MindWP

> Single source of truth for CTA, contact, and conversion contracts.
> If this document conflicts with SYSTEM.md → SYSTEM.md wins.

---

## WHEN TO USE THIS DOC

Use this when working on CTA components, contact forms, URL routing, or conversion validation.

---

## 1A. CTA TYPE SYSTEM (Locked)

Every CTA in the system maps to exactly one of five types. The type determines the title angle, description pattern, and reader expectation.

### CTA Types

| # | Type | Reader Mindset | Title Pattern | Description Pattern |
|---|---|---|---|---|
| 1 | **Diagnostic** | Something is not working, can't pinpoint why | Question or insight trigger about what's broken | "Tell us / send us [what you have]. We'll [show you what's working and what's not]." |
| 2 | **Visibility** | Competitors are ahead, don't understand why | Question about why they're invisible | "Tell us [what you do and where]. We'll [show you how you appear]." |
| 3 | **Process** | Operational friction, can't see the system failure | Question about where things break down | "Tell us [how things work now]. We'll [show you where they break]." |
| 4 | **Recovery** | Value is being lost from existing contacts | Statement about untouched opportunity | "Tell us [what's going untouched]. We'll [show you what can be recovered]." |
| 5 | **Trust** | Credibility is weak, no system to fix it | Question about review/reputation gaps | "Tell us [how feedback is handled]. We'll [show you what's missing]." |

### Service → CTA Type Mapping

| Service | System | CTA Type | Button Label |
|---|---|---|---|
| Smart Website | smart-website-systems | Diagnostic | "Understand What Makes Websites Convert" |
| WordPress Development | smart-website-systems | Diagnostic | "Understand What Makes Websites Convert" |
| Website Redesign | smart-website-systems | Diagnostic | "Understand What Makes Websites Convert" |
| System Migration | smart-website-systems | Diagnostic | "Understand What Makes Websites Convert" |
| Elementor | smart-website-systems | Diagnostic | "Understand What Makes Websites Convert" |
| Bricks Builder | smart-website-systems | Diagnostic | "Understand What Makes Websites Convert" |
| Divi | smart-website-systems | Diagnostic | "Understand What Makes Websites Convert" |
| WooCommerce | smart-website-systems | Diagnostic | "Understand What Makes Websites Convert" |
| Local SEO | local-seo-authority | Visibility | "Understand What Builds Local Authority" |
| CRM & Follow-Up | crm-automation | Process | "See Where Enquiries Get Lost" |
| AI Lead Handling | ai-lead-handling | Process | "Find Out How AI Lead Handling Works" |
| Unified Communication | ai-lead-handling | Process | "Find Out How AI Lead Handling Works" |
| Missed Call Recovery | ai-lead-handling | Process | "Find Out How AI Lead Handling Works" |
| Booking & Scheduling | ai-lead-handling | Process | "Review How Booking Automation Works" |
| Revenue Growth | revenue-growth | Recovery | "Check Where Revenue Slows Down" |
| Conversion Funnel | revenue-growth | Recovery | "Check Where Revenue Slows Down" |
| Funnel & Landing Page | revenue-growth | Recovery | "Check Where Revenue Slows Down" |
| Marketing Automation | revenue-growth | Recovery | "Check Where Revenue Slows Down" |
| Lead Reactivation | revenue-growth | Recovery | "Check Where Revenue Slows Down" |
| Reputation | reputation-review | Trust | "Review How Review Systems Work" |
| Review Automation | reputation-review | Trust | "Review How Review Systems Work" |

### CTA Type Rules

1. Every CTA title MUST be a question or insight trigger — never an instruction
2. Every CTA description MUST follow "Tell us [X]. We'll [Y]." — the reader provides context, we provide clarity
3. The description MUST answer: what happens after click?
4. No CTA may promise an outcome — only a next step
5. CTA type is determined by service system, not by page slug
6. Titles vary per page (situational). Button labels are per system (locked).

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
| `pageId` | YES at template/adaptor level | Stable page identity used by CTA registry scope |
| `pageType` | YES at template/adaptor level | Canonical runtime page type |

CTA construction is invalid if either required input is missing or malformed.

`CTARegistryProvider` is required at every template or template-equivalent page adapter. `SmartCTA` registers into the active page-scoped registry; it does not own registry lifecycle.

### SmartCTA Contract (Locked)

`SmartCTA` renders the primary system CTA panel. It accepts:

| Prop | Required | Rule |
|---|---|---|
| `system` | Recommended | Canonical primary system — resolves label and contact href |
| `sourceType` | Recommended | Normalized conversion source type |
| `slug` | Recommended | Content slug — used for source path generation |
| `intent` | Required | One of `entry`, `diagnostic`, `comparison`, `conversion` |
| `position` | Required | One of `hero`, `pre-mid`, `mid`, `sidebar`, `footer` |

Internally, `SmartCTA`:

1. Resolves `system` through a single normalized `resolvedSystem` value.
2. Calls `resolveCtaLabel(resolvedSystem)` from `src/config/ctaLabels.ts` to get the primary label.
3. Calls `buildContactHref({ system: resolvedSystem, sourceType, slug })` to construct the href.
4. Registers the CTA against the active page-scoped registry before rendering.
5. Blocks duplicate intent or duplicate conversion CTA output in development.

### CTA Registry Rules (Locked)

- Registry scope is per page via `CTARegistryProvider`.
- Only one `conversion` CTA is allowed on a page.
- Additional CTA panels may only use `entry`, `diagnostic`, or `comparison`.
- Only one CTA per intent is allowed on a page unless the page is an approved homepage exception.
- Inline CTA must not use `conversion` intent.
- Templates and domain page adapters own `intent` and `position`.
- Routes and data files do not decide CTA intent.

### CTA Placement Matrix (Locked)

| Domain | Max CTA Panels | Allowed Positions | Allowed Intents |
|---|---|---|---|
| Services | 3 | hero, optional mid, footer | entry, diagnostic or comparison, conversion |
| Features | 2 | hero, footer | entry, conversion |
| Blog | 2 panels + inline links | sidebar, footer | diagnostic, conversion |
| Resources | 3 | hero, sidebar, footer | entry, diagnostic, conversion |
| Industry Category | 2 | hero, footer | entry, conversion |
| Industry Detail | 2 | hero, footer | entry, conversion |
| Case Studies | 2 | mid within results/process, footer | diagnostic or comparison, conversion |
| Homepage | existing approved positions only | existing approved positions only | existing approved intents only |
| Other hubs | 1 | footer | conversion |

- Mid CTA insertion is allowed only inside existing comparison, solution, process, results, or other proof-capable sections.
- Mid CTA insertion must extend an existing section component; no standalone CTA band or wrapper may be introduced.
- Blog and resources are the only domains that may add inline text links; inline links never replace CTA intent.

### CTA Label Resolution (Locked)

- `CTA_LABEL_MAP` in `src/config/ctaLabels.ts` is the only source of system-specific labels.
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

### CTA Title + Description Structure Rule (Locked)

Every CTA panel (SmartCTA or service CTA section) MUST follow this structure:

| Element | Rule |
|---|---|
| **Title** | Question or insight trigger. Matches reader's situation. Never generic. |
| **Description** | "Tell us / send us [context]. We'll [specific action]." Answers: what happens after click? |
| **Button** | System-specific label from `CTA_LABEL_MAP`. Never custom per-page. |

**Forbidden patterns:**
- "Book a free consultation"
- "Transform your [X] today"
- "Get started now"
- "Discuss your [X] implementation" (too generic)
- "Need more information?" (support tone, not conversion)
- Any title that starts with a verb command ("Book", "Schedule", "Download")

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
- Structural CTA placement rules belong to CONTENT.md
- Metadata and source-generation requirements belong to GRAPH.md
- `validate-cta-label-contract` enforces label alignment
- `validate-conversion-contract` enforces URL contract compliance

---

END OF CONTRACT.
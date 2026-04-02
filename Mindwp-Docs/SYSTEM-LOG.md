# SYSTEM LOG — CURRENT STATE
> Generated: 2026-04-02T18:10:28.298Z
> Status: ❌ 113 violation(s)

---

## CTA SYSTEM
- **Source:** CTA_CONFIG (ui-intelligence.ts)
- **Status:** FAIL
- **Violations:** 6
  - Rogue labels (SR1): 6
  - Wrong primary labels: 0
  - Wrong primary hrefs: 0
  - Banned labels: 0
- **Files scanned:** 178

### Violations
- `src/lib/dev/contentRewriteEngine.ts:57` — SR1 violation: CTA-style label "'Get a" found outside CTA_CONFIG. Labels must come ONLY from CTA_CONFIG or page data.
- `src/lib/dev/guidedFlowEngine.ts:41` — SR1 violation: CTA-style label ""Book a" found outside CTA_CONFIG. Labels must come ONLY from CTA_CONFIG or page data.
- `src/lib/dev/uiSuggestionsEngine.ts:41` — SR1 violation: CTA-style label ""Get a" found outside CTA_CONFIG. Labels must come ONLY from CTA_CONFIG or page data.
- `src/lib/dev/uiSuggestionsEngine.ts:43` — SR1 violation: CTA-style label ""Get a" found outside CTA_CONFIG. Labels must come ONLY from CTA_CONFIG or page data.
- `src/lib/dev/uiSuggestionsEngine.ts:65` — SR1 violation: CTA-style label ""Get a" found outside CTA_CONFIG. Labels must come ONLY from CTA_CONFIG or page data.
- `src/lib/devtools/componentScanner.ts:286` — SR1 violation: CTA-style label "'Book a" found outside CTA_CONFIG. Labels must come ONLY from CTA_CONFIG or page data.

---

## DESIGN SYSTEM
- **Status:** FAIL
- **Total violations:** 9
  - Inline var(--*) tokens (SR3): 9
  - Gradient lifecycle (SR4): 0
  - Button violations: 0
  - Tailwind button violations: 0
  - CTA structure violations: 0

### Violations
- `src/components/layout/Header.tsx:10` — SR3 violation: Inline style using var(--*) token. Use a BEM class instead.
- `src/components/layout/Header.tsx:34` — SR3 violation: Inline style using var(--*) token. Use a BEM class instead.
- `src/domains/resources/templates/ResourcePageTemplate.tsx:403` — SR3 violation: Inline style using var(--*) token. Use a BEM class instead.
- `src/domains/resources/templates/ResourcePageTemplate.tsx:406` — SR3 violation: Inline style using var(--*) token. Use a BEM class instead.
- `src/global/Header.tsx:33` — SR3 violation: Inline style using var(--*) token. Use a BEM class instead.
- `src/global/HeaderMobileMenuIsland.tsx:21` — SR3 violation: Inline style using var(--*) token. Use a BEM class instead.
- `src/global/HeaderMobileMenuIsland.tsx:29` — SR3 violation: Inline style using var(--*) token. Use a BEM class instead.
- `src/global/HeaderMobileMenuIsland.tsx:37` — SR3 violation: Inline style using var(--*) token. Use a BEM class instead.
- `src/global/HeaderMobileMenuIsland.tsx:45` — SR3 violation: Inline style using var(--*) token. Use a BEM class instead.

---

## GRAPH SYSTEM
- **Status:** FAIL
- **Total errors:** 32
  - Invalid types (SR5): 32
  - Other errors: 0
- **Warnings:** 0

### SR5 Violations (first 10)
- SR5 violation (authority-map.json): node "industry:automotive-services" has invalid type "industry" (not in ContentNodeType)
- SR5 violation (authority-map.json): node "industry:automotive-services/auto-repair" has invalid type "industry" (not in ContentNodeType)
- SR5 violation (authority-map.json): node "industry:automotive-services/body-shops" has invalid type "industry" (not in ContentNodeType)
- SR5 violation (authority-map.json): node "industry:automotive-services/car-detailing" has invalid type "industry" (not in ContentNodeType)
- SR5 violation (authority-map.json): node "industry:automotive-services/mobile-mechanics" has invalid type "industry" (not in ContentNodeType)
- SR5 violation (authority-map.json): node "industry:home-services" has invalid type "industry" (not in ContentNodeType)
- SR5 violation (authority-map.json): node "industry:home-services/roofing-companies" has invalid type "industry" (not in ContentNodeType)
- SR5 violation (authority-map.json): node "industry:home-services/hvac-companies" has invalid type "industry" (not in ContentNodeType)
- SR5 violation (authority-map.json): node "industry:home-services/plumbing-companies" has invalid type "industry" (not in ContentNodeType)
- SR5 violation (authority-map.json): node "industry:home-services/electrical-companies" has invalid type "industry" (not in ContentNodeType)
- ... and 22 more

---

## TOKEN SYSTEM
- **Status:** FAIL
- **Total violations:** 57
  - Hardcoded spacing (--space-*): 45
  - Hardcoded font-size (--font-*): 12

### Violations (first 10)
- `src/styles/components.css:70` — Hardcoded spacing: `padding: 0.8rem 1.2rem;` — use --space-* token instead.
- `src/styles/components.css:91` — Hardcoded spacing: `padding: 0.6rem 1rem` — use --space-* token instead.
- `src/styles/components.css:96` — Hardcoded spacing: `padding: 0.8rem 1.2rem` — use --space-* token instead.
- `src/styles/components.css:101` — Hardcoded spacing: `padding: 1rem 1.5rem` — use --space-* token instead.
- `src/styles/components.css:143` — Hardcoded spacing: `padding: 0.6rem 1rem` — use --space-* token instead.
- `src/styles/components.css:308` — Hardcoded spacing: `padding: 0.375rem 0.75rem` — use --space-* token instead.
- `src/styles/components.css:314` — Hardcoded spacing: `padding: 0.25rem 0.5rem` — use --space-* token instead.
- `src/styles/components.css:320` — Hardcoded spacing: `padding: 0.375rem 0.75rem` — use --space-* token instead.
- `src/styles/components.css:321` — Hardcoded font-size: `font-size: 0.7rem` — use --font-* token instead.
- `src/styles/components.css:524` — Hardcoded spacing: `margin-top: 0.125rem` — use --space-* token instead.
- ... and 47 more

---

## INLINE STYLES
- **Status:** FAIL
- **Total violations:** 9
  - var(--*) inline styles: 9
  - Other inline styles: 0

### Violations
- `src/components/layout/Header.tsx:10` — Inline style with var(--*) token. Use a BEM class instead.
- `src/components/layout/Header.tsx:34` — Inline style with var(--*) token. Use a BEM class instead.
- `src/domains/resources/templates/ResourcePageTemplate.tsx:403` — Inline style with var(--*) token. Use a BEM class instead.
- `src/domains/resources/templates/ResourcePageTemplate.tsx:406` — Inline style with var(--*) token. Use a BEM class instead.
- `src/global/Header.tsx:33` — Inline style with var(--*) token. Use a BEM class instead.
- `src/global/HeaderMobileMenuIsland.tsx:21` — Inline style with var(--*) token. Use a BEM class instead.
- `src/global/HeaderMobileMenuIsland.tsx:29` — Inline style with var(--*) token. Use a BEM class instead.
- `src/global/HeaderMobileMenuIsland.tsx:37` — Inline style with var(--*) token. Use a BEM class instead.
- `src/global/HeaderMobileMenuIsland.tsx:45` — Inline style with var(--*) token. Use a BEM class instead.

---

## VALIDATORS
| Validator | Status |
|-----------|--------|
| CTA (validate-cta.mjs) | FAIL |
| Design (validate-design-system.cjs) | FAIL |
| Graph (validate-graph.ts) | FAIL |
| Tokens (validate-tokens.mjs) | FAIL |
| Inline Styles (validate-inline-styles.mjs) | FAIL |

---

## SYSTEM HEALTH

- **Drift items:** 9
- **Validator violations:** 113
- **System status:** BROKEN

| Check | Expected | Actual | Status |
|-------|----------|--------|--------|
| Node count | 243 | 243 | ✅ |
| Edge count | 2742 | 2742 | ✅ |
| Content types | 7 | 7 | ✅ |
| Validators | 25 | 27 | ❌ |
| CTA | — | FAIL | ❌ |
| Design | — | FAIL | ❌ |
| Graph | — | FAIL | ❌ |
| Tokens | — | FAIL | ❌ |
| Inline Styles | — | FAIL | ❌ |

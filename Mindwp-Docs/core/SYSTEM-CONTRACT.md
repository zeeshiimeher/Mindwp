# SYSTEM CONTRACT — MindWP

# SYSTEM CONTRACT — MindWP

<!-- WHERE THIS FITS -->
<!-- Purpose: Contract index for behavioral ownership across core docs -->
<!-- Depends on: CONVERSION-SYSTEM.md, FOUNDATION-AND-POSITIONING.md, CONTENT-SYSTEM-ARCHITECTURE.md, CONTENT-GRAPH-SYSTEM.md -->
<!-- Used by: Core documentation readers who need the ownership map -->

> This document does NOT define conversion behavior directly.
> Conversion behavior is governed only by CONVERSION-SYSTEM.md.

**Status:** Governing Index
**Authority Level:** Cross-Document Contract Map
**Updated:** 2026-04-09

---

## 1. OWNERSHIP MAP

| Behavioral Area | Governing Document |
|---|---|
| CTA system (SmartCTA), contact system, URL contract, validation rules | `CONVERSION-SYSTEM.md` |
| CTA tone, banned language, positioning | `FOUNDATION-AND-POSITIONING.md` |
| Page structure and CTA placement within page composition | `CONTENT-SYSTEM-ARCHITECTURE.md` |
| Content graph ontology, metadata, slug, source generation | `CONTENT-GRAPH-SYSTEM.md` |
| Route metadata, SEO, indexability (single source of truth) | `inventory.ts` via `SYSTEM-RULES.md` and `src/lib/seo/pageMetadata.ts` |
| UI purity, component rendering rules | `SYSTEM-RULES.md` |

---

## 2. SINGLE SOURCE OF TRUTH

| Data | Canonical Source | Consumers |
|---|---|---|
| Route metadata (title, description, OG, robots) | `inventory.ts` | Static routes via `getInventoryMetadata()`, parameterized routes via `src/lib/seo/pageMetadata.ts` helpers |
| CTA labels | `CTA_LABEL_MAP` in `src/config/cta-labels.ts` | `SmartCTA` only |
| CTA intensity + copy | `CTA_CONFIG` in `src/config/ui-intelligence.ts` | `SmartCTA` only |
| Canonical values (systems, topics, industries) | `src/lib/content-graph/canonical.ts` | Graph, inventory, validators |
| Domain content (sections, features, copy) | `src/domains/*/data/{slug}.ts` | Page data layer → template props |
| Navigation links | Derived from inventory (indexable routes) | Nav, Footer |

No data may have two sources. If a value exists in inventory, it must not be redefined in domain data, templates, or page files.

---

## 3. CONTRACT RULES

- Do not duplicate conversion rules in this file
- Do not redefine CTA routing or contact behavior outside `CONVERSION-SYSTEM.md`
- If conversion behavior changes, update `CONVERSION-SYSTEM.md` first
- If structure changes, update `CONTENT-SYSTEM-ARCHITECTURE.md`
- If metadata or source-generation rules change, update `CONTENT-GRAPH-SYSTEM.md`
- If route metadata ownership changes, update `SYSTEM-RULES.md` and `inventory.ts`

---

END OF CONTRACT.

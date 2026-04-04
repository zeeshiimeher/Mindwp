# SYSTEM TRUTH — MindWP

> Consolidated source of truth. Validated against live code.
> Sources: 5 governing docs, reports/, code scan.
> Updated: 2026-04-02 (decisions applied)

**Boundary:** This file defines current system reality only. It does not hold workflows, phase tasks, raw audit notes, or dashboard summaries.

---

## 1. SYSTEM OVERVIEW

**Identity:** Systems-first digital infrastructure consultancy for established service businesses. Not an agency. Not a tool vendor.

**Platform:** Next.js + TypeScript (strict). Custom BEM CSS design system. Tailwind v4 bridge. GoHighLevel backend. Target: Vercel.

**Content graph:** 211 nodes, 2,742 edges, 7 formal content types (`ContentNodeType` is the only allowed type system — see §2.4).

**Validation:** 29 validators. TypeScript clean. ESLint clean. Build passing.

**Conversion model:** Conversation-first. Primary CTA: "Start a Conversation" → /contact. No lead magnets. System works without free resources.

---

## 2. CORE ARCHITECTURE

### 2.1 Governance Hierarchy

| Priority | Source |
|---|---|
| 1 | FOUNDATION-AND-POSITIONING.md |
| 2 | CONTENT-SYSTEM-ARCHITECTURE.md |
| 3 | CONTENT-GRAPH-SYSTEM.md |
| 4 | CONTENT-BLUEPRINT-SYSTEM.md |
| 5 | CONTENT-GOVERNANCE.md |

**Rule:** Docs always win over code. If conflict → change the code.

### 2.2 Service Architecture

| Tier | Role | Systems |
|---|---|---|
| Tier 1 | Core revenue | Smart Website (flagship), Local Authority & SEO, AI Lead Handling, Reputation & Review, Revenue Growth, CRM & Automation |
| Tier 2 | Modular add-ons | Solve specific operational pains, map upward to Tier 1 |
| Tier 3 | Implementation | Entry pathways, visually subordinate, never strategic |

**Gravity rule:** Smart Website Systems is the conceptual framework. All other Tier 1 systems integrate into it. They must never override its dominance in hierarchy, navigation, or homepage composition.

**SEO exception:** Local Authority & SEO is the only Tier 1 system with controlled direct-intent acquisition — may lead when visitor intent is explicitly SEO-led, but must always reinforce website infrastructure context.

### 2.3 Content Flow

```
Blog → Resource → Case Study → Service
Industry Category → Industry Detail → Service
Feature → Service
```

**Roles:**
- Blog: search demand capture, problem exploration (discovery layer)
- Resource: evergreen frameworks, system explanation (education layer)
- Case Study: implementation proof (trust layer)
- Service: conversion-focused system explanation (destination layer)
- Industry: vertical-specific system application (context layer)
- Feature: system component capability (detail layer)

### 2.4 Content Graph

Each node declares `industries`, `systems`, `topics` → relationships auto-generated.

**Formal types (ContentNodeType):** blog, service, resource, case-study, feature, industry-detail, industry-category (7).

**Type integrity rule:** `ContentNodeType` is the ONLY allowed type system for content nodes. No layer (analysis, reporting, dev tooling) may create or store types outside this union. If grouping is needed (e.g., combining industry-detail + industry-category), use a display label — not a type override.

**Node breakdown:** blog (77), resource (52), industry-detail (26), case-study (22), service (21), feature (7), industry-category (6).

**Scoring:** Authority per topic. Levels: Dominant / Strong / Growing / Weak / Gap.

**Linking engine:** Context-aware scoring, link diversity (max 1 per target type per zone), intent layer (learn/compare/buy), cluster depth awareness, threshold-based selection.

### 2.5 Conversion Intelligence

| Intent | Level | Visual |
|---|---|---|
| learn | soft | muted surface |
| compare | mid | gradient-cta-1 |
| buy | strong | gradient-cta-2 |

**CTA config per page type:**
- Blog: soft ("Want to Explore This Further?")
- Resource: mid ("Ready to Apply This?")
- Case Study: mid ("Want Results Like These?")
- Service: strong ("Get Started With This Service")
- Feature: strong ("See This in Action")
- Industry: mid ("Built for Your Industry")

**Journey flow:** Blog→Resource→CaseStudy→Service. Navigator picks first non-empty slot from priority list.

---

## 3. DESIGN SYSTEM SNAPSHOT

### 3.1 CSS Architecture

4-layer system, loaded in order:

| Layer | File | Purpose | Lines |
|---|---|---|---|
| 1 | foundation.css | Design tokens — single source of truth | 366 |
| 2 | primitives.css | CSS reset, base typography, Tailwind v4 bridge | 248 |
| 3 | framework.css | Layout primitives (containers, sections, grids) | 836 |
| 4 | components.css | All BEM component styles | 10,707 |

Then: `@tailwind base`, `@tailwind components`, `@tailwind utilities`.

### 3.2 Color System

**Token V2 flat naming:** `--c-*` (bg, text, primary, border, surface, etc.)

**Token layers:**

| Layer | Pattern | Example |
|---|---|---|
| Raw OKLCH | `--raw-slate-900` | Never used directly |
| Brand primitives | `--brand-primary: #0A1628` | Named hex constants |
| Brand shades | `color-mix(in oklch, var(--brand-primary), white 20%)` | Auto-derived |
| Semantic (V2) | `--c-bg`, `--c-text`, `--c-surface` | Consumed by all components |
| Component helpers | `--btn-primary-bg`, `--card-border` | Scoped to BEM blocks |

**Palette:**
- Primary: #0A1628 (deep navy)
- Secondary: #2E5C8A (steel blue)
- Accent: #4A9AB2 (teal)
- Primary-mid: #1B2845 (dark navy)
- Body text: #3D4B5C (neutral-700)
- Surface: #F9FAFB
- Page bg: #F8FAFC

### 3.3 Gradient System

12 named gradient tokens (hero, primary, cta-1 through cta-4, cta-10 through cta-14, cta-warm, section, bg-light). Key usage:

| Token | Usage |
|---|---|
| `--gradient-hero` | Homepage hero only |
| `--gradient-cta-1` | Default CTA panel |
| `--gradient-cta-2` through `--gradient-cta-4` | Additional CTA gradients |
| `--gradient-cta-10` through `--gradient-cta-14` | Extended CTA palette |
| `--gradient-cta-warm` | Warm-tone CTA variant |
| `--gradient-section` | Section background variant |
| `--gradient-bg-light` | Muted section backgrounds |

**Gradient lifecycle rule:** Tokens MUST be defined in `foundation.css` BEFORE being referenced in `components.css` or any other file. Referencing an undefined gradient token (even with a fallback) is not acceptable. cta-5 through cta-9 do not exist and must not be referenced.

**Application:** Components receive `backgroundColor` prop (class name string) → CSS maps to gradient var.

### 3.4 Typography Scale

Responsive scale across 4 breakpoints (640/768/1024/1280px). Values scale from base to full.

| Token | Role |
|---|---|
| `--font-5xl` | H1 (48.8px at full) |
| `--font-4xl` | H2 |
| `--font-2xl` | H3 |
| `--font-xl` | H4 |
| `--font-lg` | Card titles, prominent text |
| `--font-base` | Body |
| `--font-sm` | Default descriptions |

Heading weight: `400` (`--font-weight-normal`) across all headings.

### 3.5 Spacing Scale

| Token | Value | Primary usage |
|---|---|---|
| `--space-half` (2px) | <1% | Micro icon alignment nudges |
| `--space-2` (8px) | 27% of gap usage | Icon gaps, tight inline |
| `--space-3` (12px) | 16% | Small component gaps |
| `--space-4` (16px) | 20% | Card internal gaps |
| `--space-6` (24px) | 12% | Section grids |
| `--space-8` (32px) | Section-level | Footer bottom |
| `--space-9` (40px) | Section-level | Footer top |

**Token enforcement allowlist:** The token validator (`validate-tokens.mjs`) exempts the following value types:
- `0` / `0px` / `0rem` — resets
- `calc()` expressions — computed compositions of tokens
- `clamp()` expressions — responsive fluid values (e.g. `clamp(var(--font-3xl), 4vw, var(--font-5xl))`)
- `inherit` / `initial` / `auto` / `unset` / `revert`
- Values already using `var(--*)` tokens

### 3.6 Layout System

| Primitive | Purpose | Key values |
|---|---|---|
| `l-container` | Max-width wrapper | 1366px (default), 1080px (narrow), 1180px (wide) |
| `l-section` | Section vertical padding | Responsive scaling: 50%→75%→87.5%→100% |
| `l-stack` | Vertical spacing | Default `--space-4` |
| `l-row` | Horizontal flex | Alignment/wrap modifiers |
| `l-grid` | CSS grid | 2/3/4 column variants with breakpoint overrides |

---

## 4. COMPONENT SYSTEM

### 4.1 Architecture Rules

- **BEM everywhere.** No inline styles except: shadcn/ui components (`src/components/ui/`), SVG text elements (`fontSize`, `fontWeight`, `letterSpacing` only). All other components output pure BEM classes.
- **Static token inline ban:** Inline styles using `var(--*)` are NOT allowed — must use BEM classes in components.css.
- **Server-first.** Route files are Server Components. Interactive behavior isolated to micro client islands.
- **Composition path:** Build in `single/` → Wrap as section in `sections/<domain>/`.
- **Domain wrappers:** Thin re-exports for semantic naming. Zero logic. Stable naming even when core is refactored.
- **Reusable prefix:** BEM blocks prefixed `c-*` to avoid collision (migration in progress — dual naming exists).

### 4.2 Component Inventory

| Layer | Count | Location |
|---|---|---|
| Single components | 37 | `src/components/reusable/single/` |
| Core sections | 32 | `src/components/reusable/sections/core/` |
| Domain sections | 8 dirs | `core/`, `service/`, `features/`, `industries/`, `resources/`, `blog/`, `case-studies/`, `homepage/` |
| System components | 9 | `src/components/system/` |
| Site chrome | 4 | `src/global/` (Header, Footer, Logo, HeaderMobileMenuIsland) |

### 4.3 Key Component Patterns

| Pattern | Detail |
|---|---|
| Compound components | `Card`, `Card.Header`, `Card.Body` — dot-notation sub-components |
| Domain wrappers | `ServiceHeroSection` → forwards all props to `SimpleHero` |
| Section bg pattern | Every section: `--bg-default` / `--bg-white` / `--bg-muted` via CSS modifiers |
| Prop-driven gradients | `backgroundColor` prop → class name → CSS gradient var |
| Intelligence bridge | `SmartCTA`: pageType+intent → intensity → visual class. Labels from `CTA_CONFIG` only — ctaResolver handles intensity, not labels |

### 4.4 Button System

6 variants: primary / secondary / outline / outline-light / white / link.
3 sizes: sm / md (default) / lg.

| Rule | Detail |
|---|---|
| B1 | `btn-primary` → main CTA only, max 1 per visible section |
| B2 | `btn-secondary` → supporting action alongside primary |
| B3 | `btn-outline` → low-priority, pagination, dismiss |
| B4 | `btn-white` → dark backgrounds only |
| B5 | `btn-link` → inline/card actions |

### 4.5 Card System

| Pattern | Components |
|---|---|
| Bordered (1px) | business-use-case-card, feature-list, workflow, feature-card, reusable-card |
| Bordered + shadow | how-it-works-step, case-study-card |
| Stronger border (2px) | problem-solution, technologies card, faq card |

Padding: `--card-padding` (`--space-5` / 20px) used by 20+ components.

---

## 5. INTERACTION SYSTEM

### 5.1 Hover

All wrapped in `@media (hover: hover)` for touch-safety.

| Element | Effect |
|---|---|
| Cards | `translateY(-1px)` + box-shadow elevation |
| Buttons | Background color shift via `color-mix()` |
| Icons / circles | `scale(1.1)` |
| List items / tabs | `background-color` transition |

131 hover patterns. Transitions: `0.2s ease` or `0.3s ease`.

### 5.2 Quantitative

| Metric | Count |
|---|---|
| Hover patterns | 131 |
| Transitions | 52 |
| Transforms (translateY/scale) | 39 |
| Box-shadow references | 94 |
| Border-radius references | 126 |
| `color-mix()` calls | 176 |
| Gradient references | 110 |
| Background/bg- patterns | 492 |

---

## 6. SECTION SYSTEM

### 6.1 Hero Archetypes

| Type | BEM Block | Layout | Usage |
|---|---|---|---|
| SimpleHero | `hero-section` | Centered text, full-width | Standard pages |
| SplitHeroSection | `feature-hero` | 2-column: text + visual | Feature/enhanced pages |

**Homepage hero:** `hero-section--homepage` → `background: var(--gradient-hero)`. Unique — no other page uses this gradient.

**Domain wrappers:** ServiceHeroSection, FeatureHeroSection, IndustryHeroSection — all zero-logic re-exports.

### 6.2 Section Background Rhythm

3-tier system repeated across 10+ section types:

| Modifier | Value |
|---|---|
| `--bg-default` | `var(--c-bg)` |
| `--bg-white` | `var(--c-surface)` |
| `--bg-muted` | `color-mix(in oklch, var(--c-bg), var(--c-surface) 50%)` |

**Goal:** Alternating backgrounds create visual rhythm.

### 6.3 Section Rhythm Rules

| Rule | Detail |
|---|---|
| S1 | Every page-level `<section>` MUST use `l-section` |
| S2 | No override unless hero, CTA, or footer |
| S3 | `l-section--compact` for condensed, `l-section--spacious` for hero/prominent |
| S4 | Blog/resource/case-study detail sections exempt (content-flow, not page sections) |

### 6.4 CTA Section

- BEM block: `cta` + `cta-section`
- Default background: `--gradient-cta-1`
- Receives gradient via `backgroundColor` prop
- SmartCTA bridges content graph to visual: pageType → intensity → gradient class
- CTA labels come ONLY from `CTA_CONFIG` (ui-intelligence.ts) or page data files — ctaResolver handles intensity level only

### 6.5 Homepage Hierarchy (Locked)

Hero → Infrastructure Framing → Smart Website → Supporting Systems → Industries → CTA

---

## 7. SYSTEM RULES

### 7.1 Governance

- Docs are authoritative. Code is replaceable.
- No other documents may define architecture rules.
- Archived docs must not be used as reference.
- AI operates in execution mode, not strategy mode.
- AI must not reopen architectural debates or propose structural alternatives.

### 7.2 Content

- Content hierarchy is locked. No renaming, restructuring, or expansion without consulting CONTENT-SYSTEM-ARCHITECTURE.md.
- Downstream content (blog, resource, case study) extends architecture — does not reopen core decisions.
- Banned vocabulary (37 patterns: 19 banned + 18 anti-hype) enforced via validator.
- Copy must read like plain English by a clear human operator.
- Sentences: 8-18 words average. One idea per sentence. Active voice.

### 7.3 CTA

- Primary: "Start a Conversation" → /contact (LOCKED)
- Secondary: "Explore the Approach" → relevant service
- No urgency, no pressure, no hype
- System works without free resources
- CTA intensity matches page type (soft/mid/strong)
- CTA labels ONLY from `CTA_CONFIG` (ui-intelligence.ts) or page data files
- `ctaResolver.ts` resolves intensity level ONLY — does NOT produce labels
- `validate-cta.mjs` must scan all CTA label sources: `data/`, `lib/`, `config/`, `components/system/`

### 7.4 Design System

- BEM methodology. No inline styles except shadcn/ui and SVG text elements.
- Inline styles using `var(--*)` are NEVER acceptable — use BEM classes.
- All tokens defined in foundation.css only.
- Gradient tokens must exist in foundation.css BEFORE being referenced.
- Components consume tokens. Allowed literals: borders (≤2px), `border-radius: 9999px`, accessibility sizes (44px), media queries. All spacing, padding, font-size MUST use tokens.
- Section padding via `l-section` — no overrides except hero/CTA/footer.
- Max 2 text color tiers per section: `--c-text` + `--c-text-muted`.
- Button primary: max 1 per visible section.
- Card padding: `--card-padding` (`--space-5`).

### 7.5 Component

- Route files: Server Components only.
- Interactive behavior: isolated micro client islands.
- Domain wrappers: thin re-exports, zero logic.
- Domain sections must not introduce route-level `use client`.
- Prefer data-driven composition (props/arrays) over hardcoded JSX.

### 7.6 Tier Hierarchy

- Smart Website Systems dominates. All other Tier 1 systems subordinate.
- Tier 2 must map upward to Tier 1 context.
- Tier 3 must remain visually subordinate. Never positioned as strategic.
- Homepage must reflect locked hierarchy flow.

### 7.7 DO / DON'T Reference

**Color System**

| DO | DON'T |
|---|---|
| Use `--c-*` semantic tokens | Use `--brand-*` directly in components |
| Use `color-mix()` for derived shades | Hardcode hex values |
| Define new tokens in foundation.css | Define tokens in components.css |

**Gradient System**

| DO | DON'T |
|---|---|
| Use `--gradient-*` tokens via `backgroundColor` prop | Inline gradient values in components |
| Use `--gradient-cta-1` for default CTA | Reference undefined gradient tokens (even with fallbacks) |
| Use `--gradient-hero` only for homepage hero | Reuse homepage gradient on other pages |

**Components**

| DO | DON'T |
|---|---|
| Reuse existing single/* components | Create one-off component variants |
| Wrap in domain section for semantic naming | Add logic to domain wrappers |
| Use BEM classes from components.css | Add inline styles or Tailwind for structure (shadcn/ui and SVG text exempt) |
| Keep route files as Server Components | Add `use client` to route-level files |

**Sections**

| DO | DON'T |
|---|---|
| Use `l-section` on every page-level `<section>` | Override section padding (except hero/CTA/footer) |
| Alternate `--bg-default` / `--bg-white` / `--bg-muted` | Place consecutive sections with same background |
| Use `l-container` for max-width | Hardcode max-width values |

---

## SYSTEM STRENGTHS

| Strength | Evidence |
|---|---|
| **Governance is airtight** | 5 locked governing docs. Conflict resolution defined. Rule priority order established. AI execution lock. |
| **Content graph is live and functional** | 211 nodes, 2,742 edges. Authority scoring, gap detection, conversion intelligence all operational. |
| **Validation is comprehensive** | 29 validators. TypeScript strict. ESLint clean. Build green. |
| **Token system is well-layered** | 4-tier color system. Responsive typography. Spacing scale. Layout primitives. |
| **Conversion intelligence is code-complete** | Intent mapping, CTA resolver, journey engine, scoring, priority queue — all built. |
| **Component architecture is disciplined** | BEM everywhere. Server-first. Domain wrappers. Inline styles only in shadcn/ui and SVG text elements. |
| **Dev tooling is rich** | Content dashboard, authority dashboard, 8 dashboard panels, fix simulation, guided flow engine. |
| **Documentation is extensive** | Blueprint system covers all archetypes. Writing playbook locked. Vocabulary governance active. |

---

## MENTAL MODEL

```
GOVERNANCE   →  5 locked docs (Foundation > Architecture > Graph > Blueprint > Governance)
     ↓
CONTENT      →  211 nodes across 7 formal types (ContentNodeType), all flowing toward Service (destination)
     ↓
INTELLIGENCE →  Authority scoring → Gap detection → Conversion scoring → CTA resolution → Journey engine
     ↓
UI           →  foundation.css (tokens) → primitives.css (reset) → framework.css (layout) → components.css (BEM)
     ↓
COMPONENTS   →  single/* → sections/core/* → sections/<domain>/* → system/* (SmartCTA, Journey)
     ↓
VALIDATION   →  29 validators → TypeScript → ESLint → Build pipeline
```

**One sentence:** Governance flows down from locked docs, intelligence flows up from the content graph, the UI renders via token-driven BEM, and 29 validators enforce it all.

---

## DECISION MATRIX

Use this when making any system decision.

| Question | Answer from | Rule |
|---|---|---|
| Can I change the service structure? | CONTENT-SYSTEM-ARCHITECTURE.md | No — locked. Tier hierarchy is permanent. |
| Can I add a new content type? | CONTENT-GRAPH-SYSTEM.md | Only if it fits the 7-type ontology. |
| Can I change CTA copy? | FOUNDATION-AND-POSITIONING.md §5 | "Start a Conversation" is locked. |
| Can I use a banned word? | FOUNDATION-AND-POSITIONING.md §2 | No — rewrite the sentence. |
| Can I add inline styles? | Design system rules | No — BEM classes only (shadcn/ui and SVG text exempt). |
| Can I hardcode a color? | foundation.css | No — use `--c-*` semantic tokens. |
| Can I override section padding? | DESIGN-SYSTEM-CONTROL-LAYER.md | Only for hero, CTA, or footer. |
| Can I add `use client` to a route file? | Component rules | No — isolate to micro islands. |
| Can I create a new domain wrapper? | DESIGN-SYSTEM-CONTROL-LAYER.md | Yes — but zero logic, thin re-export only. |
| Should I change docs or code? | GOVERNANCE | Change code. Docs are always correct. |
| Can I reopen an architectural decision? | AI Execution Lock | No — execute, don't strategize. |
| Which page type gets strong CTA? | ui-intelligence.ts | Service and Feature only. |
| Should I use SimpleHero or SplitHero? | Component patterns | SimpleHero = standard. SplitHero = feature/enhanced content with visual. |
| Can I add a Tier 3 service to homepage? | Tier hierarchy rule | No — Tier 3 must remain visually subordinate. |



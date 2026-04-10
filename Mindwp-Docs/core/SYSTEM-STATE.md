# SYSTEM STATE

Status: Active System Snapshot
Version: 2.0 — Consolidated
Last Updated: 2026-04-10

---

## REQUIRED READING ORDER

1. **SYSTEM.md** (mandatory — read first)
2. **This document** (SYSTEM-STATE.md)

## AUTHORITY NOTICE

This document does NOT override SYSTEM.md.

This document is a consolidated **snapshot of current system reality, execution rules, execution memory, and decision state**. It does not define the system — it reflects it.
If this document conflicts with SYSTEM.md → SYSTEM.md wins.

## WHEN TO USE THIS DOC

Use this document when you need to understand:
- Current system reality and architecture snapshot
- Design system state (CSS, tokens, colors, gradients, typography, spacing, layout)
- Component system inventory and patterns
- Section system rules and primitives
- Execution rules and boundaries
- Decision log, execution log, and current tasks
- Locked constraints and known risks
- Auto-generated decision state

Positioning, identity, service map, and terminology → see SYSTEM.md.
Content type definitions, archetypes, and governance → see CONTENT.md.
Writing method and language rules → see WRITING.md.
Graph ontology and metadata → see GRAPH.md.
Conversion behavior and CTA contracts → see CONVERSION.md.
Design tokens and UI rules → see DESIGN.md.
Tooling, scripts, and dashboards → see TOOLS.md.

---

<!-- WHERE THIS FITS -->
<!-- Purpose: Current system reality + execution rules + execution memory + decision state -->
<!-- Depends on: SYSTEM.md, 5 authority-stack docs, live code scan, reports/ -->
<!-- Used by: system-sync.mjs (drift detection), all planning decisions -->
<!-- Consolidated from: SYSTEM-STATE.md, SYSTEM-STATE.md, SYSTEM-STATE.md, SYSTEM-STATE.md -->

> Consolidated source of truth. Validated against live code.
> Sources: governing docs, reports/, code scan.

**Boundary:** This file defines current system reality, execution rules, and execution state. It does not hold workflows, phase tasks, raw audit notes, or dashboard summaries.


---

# ===== PART 1: SYSTEM TRUTH =====

## 1. SYSTEM OVERVIEW

**Identity:** Systems-first digital infrastructure consultancy for established service businesses. Not an agency. Not a tool vendor.

**Platform:** Next.js + TypeScript (strict). Custom BEM CSS design system. Tailwind v4 bridge. GoHighLevel backend. Automated image generation pipeline (Sharp + SVG overlays). Target: Vercel.

**Content graph:** 229 nodes, 9,893 edges, 7 formal content types (`ContentNodeType` is the only allowed type system — see §2.4). Scoring formula: `(systemOverlap × 3) + (topicOverlap × 2) + (industryOverlap × 1)` — LOCKED.

**Validation:** 21 validators in the aggregate control layer. Blocking failures are `0`; advisory failures are `0`; lint remains advisory in the integrity flow. Current system status is `CLEAN`.

**Conversion model:** Deterministic single-entry conversion path. Default CTA label fallback is locked to "Start a Conversation". System-specific labels resolve through `CTA_LABEL_MAP`. All contextual conversion CTAs route to `/contact?system={system}&source={type}/{slug}`. No inline forms. `/conversation` page REMOVED (Phase 10 Decision 6) — permanent redirect to `/contact`. No fallback conversion path is allowed.

## Conversion Contract

Conversion behavior is governed by **CONVERSION.md** (single execution authority).

CONVERSION.md is the single source of truth for:
- CTA system, contact system, intent model, URL contract, validation rules, and presentation-layer constraints

---

## 2. CORE ARCHITECTURE

### 2.1 Governance Hierarchy

| Priority | Source |
|---|---|
| 0 (ROOT) | SYSTEM.md |
| 1 | SYSTEM.md |
| 2 | CONTENT.md |
| 3 | GRAPH.md |
| 4 | CONTENT.md |
| 5 | CONTENT.md |

**Rule:** Docs always win over code. If conflict → change the code.

### 2.2 Service Architecture

| Tier | Role | Systems |
|---|---|---|
| Tier 1 | Core revenue | Smart Website (flagship), Local Authority & SEO, AI Lead Handling, Reputation & Review, Revenue Growth, CRM & Automation |
| Tier 2 | Modular add-ons | Solve specific operational pains, map upward to Tier 1 |
| Tier 3 | Implementation | Entry pathways, visually subordinate, never strategic |

**Gravity rule:** See SYSTEM.md §2.2 for full gravity model and tier definitions.

**SEO exception:** See SYSTEM.md §2.2 for the controlled acquisition exception.

### 2.3 Content Flow (Phase 10 — Intent-Based Routing)

Content flow is governed by the locked CTA intent model, not a linear funnel. Routing rules → **CONVERSION.md**.

**Default page-type mapping:** Blog → `problem-aware`, Resource → `system-aware`, Industry/Case Study → `solution-aware`, Service/Feature → `decision-ready`.
**Static paths:** Industry Category → Industry Detail → Service. Feature → Service (via SmartRelatedSection).

**Page roles:** Blog (discovery), Resource (education), Case Study (trust), Service (destination), Industry (context), Feature (detail).

### 2.4 Content Graph

Each node declares `industries`, `systems`, `topics` → relationships auto-generated.

**Formal types (ContentNodeType):** blog, service, resource, case-study, feature, industry-detail, industry-category (7).

**Type integrity rule:** `ContentNodeType` is the ONLY allowed type system for content nodes. No layer (analysis, reporting, dev tooling) may create or store types outside this union. If grouping is needed (e.g., combining industry-detail + industry-category), use a display label — not a type override.

**Node breakdown:** blog (88), resource (59), industry-detail (26), case-study (22), service (21), feature (7), industry-category (6).

**Scoring:** Authority per topic. Levels: Dominant / Strong / Growing / Weak / Gap. Locked formula: `(systemOverlap × 3) + (topicOverlap × 2) + (industryOverlap × 1)`.

**Linking system:** SmartRelatedSection (`src/components/system/SmartRelatedSection.tsx`) — sole mechanism for surfacing related content on any page. Calls `getRelatedContent(slug, type)` → resolves via Authority Map → renders cards. Graph-driven, deterministic, validated. Editorial inline links are content-level references only and do not replace graph-driven related-content slots. Page-local service/feature `related` config is not part of the live system.

**Link slot rules (Phase 10 Decision 3 — LOCKED):**

| Source Type | Allowed Slots |
|---|---|
| service | services only |
| feature | services only |
| industry | services, caseStudies, resources |
| blog | resources, industries |
| resource | services, industries |
| caseStudy | industries, resources |

**Link limits (Phase 10 Decision 4 — LOCKED):** Max 2 sections per page, max 3 items per section, max 6 total.

**Deprecated systems (Phase 10):**
- Internal linking engine (`src/lib/internal-linking/`, 10 files) — DEPRECATED. Zero production usage. Dev-tool only.
- JourneyNavigator (`src/components/system/JourneyNavigator.tsx`) — REMOVED from all templates.
- GraphAwareSidebar — DEPRECATED. Not imported by any template.
- `JOURNEY_CONFIG` in `src/config/ui-intelligence.ts` — DEPRECATED.

### 2.5 Conversion Intelligence

Conversion behavior → **CONVERSION.md** (single authority).

Implementation: `SmartCTA` resolves primary CTA labels through `resolveCtaLabel()` and builds contextual contact URLs through `buildContactHref()`. Source-specific helpers in `src/lib/contact/contactHref.ts` provide deterministic `system` + `source` construction for domain data and renderers. `/contact` ingests and persists `system` and `source` through submission. No inline forms. No linear funnel. No JourneyNavigator.

### 2.6 Metadata Access Layer

Route metadata remains inventory-backed. Static routes call `getInventoryMetadata()` directly; parameterized routes resolve metadata through `src/lib/seo/pageMetadata.ts`. Service and feature SEO structures are centralized through `src/domains/services/seo.ts` and `src/domains/features/seo.ts`, with validators enforcing canonical path consistency.

---

## 3. DESIGN SYSTEM SNAPSHOT

### 3.1 CSS Architecture

4-layer system, loaded in order:

| Layer | File | Purpose | Lines |
|---|---|---|---|
| 1 | foundation.css | Design tokens — single source of truth | 366 |
| 2 | primitives.css | CSS reset, base typography, Tailwind v4 bridge | 248 |
| 3 | framework.css | Layout primitives (containers, sections, grids) | 836 |
| 4 | components.css | All BEM component styles | 10,355 |

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

7 core gradient utilities (Phase 8.6 cleanup). Key usage:

| Token | Usage |
|---|---|
| `--gradient-hero` | Homepage hero only |
| `--gradient-cta-1` | Default CTA panel |
| `--gradient-cta-2` through `--gradient-cta-4` | Additional CTA gradients |
| `--gradient-cta-10` through `--gradient-cta-14` | Extended CTA palette |
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
| System components | 8 | `src/components/system/` |
| Site chrome | 4 | `src/global/` (Header, Footer, Logo, HeaderMobileMenuIsland) |

### 4.3 Key Component Patterns

| Pattern | Detail |
|---|---|
| Compound components | `Card`, `Card.Header`, `Card.Body` — dot-notation sub-components |
| Domain wrappers | `ServiceHeroSection` → forwards all props to `SimpleHero` |
| Section bg pattern | Two-tone rhythm: `bg-base` / `bg-alt` via SectionWrapper class (Phase 8.7) |
| Prop-driven gradients | `backgroundColor` prop → class name → CSS gradient var |
| Intelligence bridge | `SmartCTA`: pageType+intent → intensity → visual class. Labels from `CTA_CONFIG` only — ctaResolver handles intensity, not labels |
| Linking system | `SmartRelatedSection` — sole graph-driven related content mechanism. Max 2 sections × 3 items (Phase 10 Decisions 2+4) |

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

**Featured images:** Every content page (blog, resource, case study, industry) has automatically generated featured images. Two variants per page:
- `featured-clean.webp` — resized photo with micro-contrast sharpening
- `featured-overlay.webp` — cinematic SVG overlay with title, label, badge, accent bar, focal zones

Generated by: `src/lib/image-system/` pipeline. 3 layout variants (Editorial/Focused/Impact), brightness-adaptive overlays, WCAG AA contrast verified. See `Automatic-Image-Generation-System/IMAGE-SYSTEM.md`.

### 6.2 Section Background Rhythm (Phase 8.7 — Locked)

Two-tone rhythm system replacing legacy 3-tier backgrounds:

| Class | Value | Usage |
|---|---|---|
| `bg-base` | `var(--c-bg)` (#f8fafc) | 63% of sections |
| `bg-alt` | `var(--c-bg-alt)` (#f1f5f9) | 37% of sections |

**Applied via:** class on SectionWrapper. No ad-hoc section backgrounds.

**Legacy tokens removed:** `--section-bg-base`, `--section-bg-surface`, `--section-bg-muted`, `.bg-section-white`, `.bg-section-light` — all deleted in Phase 8.7.

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

### 6.6 Section Primitives (Phase 8 — Locked)

All sections use composable layout primitives. BEM grid CSS has been permanently removed.

| Primitive | File | Purpose |
|---|---|---|
| SectionWrapper | `primitives/SectionWrapper.tsx` | Outer shell: `<section>` + padding + container + background |
| SectionHeader | Re-export of SectionIntro | Title/badge/description |
| CardGrid | `primitives/CardGrid.tsx` | Responsive grid (1–6 cols), `mode="controlled"` |
| SplitLayout | `primitives/SplitLayout.tsx` | 2-column split, `breakpoint: 'md' | 'lg'` |
| Stack | `primitives/Stack.tsx` | Vertical rhythm via CSS gap |

**Layout ownership:** Primitives own all layout (grid, flex, columns, gaps, breakpoints). BEM owns all visual (card styles, typography, colors, hover states).

**Section backgrounds:** Two-tone rhythm system: `bg-base` (`--c-bg`) / `bg-alt` (`--c-bg-alt`). Applied via class on SectionWrapper. No ad-hoc section backgrounds.

**Phase 8 guarantees:**
- Zero `__grid` or `__layout` display:grid CSS remains in components.css
- All CardGrid sections use `mode="controlled"` (primitives are sole layout source)
- All split sections use SplitLayout with `breakpoint="lg"` where applicable
- 88 total sections, 4 utility files excluded. All refactored.

---

## 7. SYSTEM RULES

### 7.1 Governance

- Docs are authoritative. Code is replaceable.
- No other documents may define architecture rules.
- Archived docs must not be used as reference.
- AI operates in execution mode, not strategy mode.
- AI must not reopen architectural debates or propose structural alternatives.

### 7.2 Content

- Content hierarchy is locked. No renaming, restructuring, or expansion without consulting CONTENT.md.
- Downstream content (blog, resource, case study) extends architecture — does not reopen core decisions.
- Banned vocabulary (37 patterns: 19 banned + 18 anti-hype) enforced via validator.
- Copy must read like plain English by a clear human operator.
- Sentences: 8-18 words average. One idea per sentence. Active voice.

### 7.3 CTA

CTA behavior → **CONVERSION.md**.

Key constraints:
- Primary: "Start a Conversation" → /contact (LOCKED)
- Every contextual CTA must include `system` and `source` query params
- No alternate conversion routes
- No urgency, no pressure, no hype
- Labels ONLY from `CTA_CONFIG` or page data files
- `ctaResolver.ts` resolves intensity ONLY — does NOT produce labels

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
| **Content graph is live and functional** | 229 nodes, 9,893 edges. Authority scoring, gap detection, validation, and dashboard reporting are operational. |
| **Validation is comprehensive** | 17-validator control layer. Blocking integrity checks pass. Advisory drift is visible in system-report.json. |
| **Token system is well-layered** | 4-tier color system. Responsive typography. Spacing scale. Layout primitives. |
| **Conversion intelligence is code-complete** | Intent mapping, CTA resolver, journey engine, scoring, priority queue — all built. |
| **Component architecture is disciplined** | BEM everywhere. Server-first. Domain wrappers. Inline styles only in shadcn/ui and SVG text elements. |
| **Dev tooling is inspectable** | Content dashboard plus report-driven authority dashboard. Master command emits one normalized system report. |
| **Image generation is operational** | 13-phase pipeline. Multi-provider search, intelligence analysis, relevance scoring, composition-aware cropping, cinematic SVG overlays, CTR psychology layer. WCAG AA verified across all domains. |
| **Documentation is extensive** | Blueprint system covers all archetypes. Writing playbook locked. Vocabulary governance active. |

---

## MENTAL MODEL

```
GOVERNANCE   →  5 locked docs (Foundation > Architecture > Graph > Blueprint > Governance)
     ↓
CONTENT      →  229 nodes across 7 formal types (ContentNodeType), all flowing toward Service (destination)
     ↓
INTELLIGENCE →  Authority scoring → Gap detection → Conversion scoring → CTA resolution → SmartRelatedSection
     ↓
UI           →  foundation.css (tokens) → primitives.css (reset) → framework.css (layout) → components.css (BEM)
     ↓
COMPONENTS   →  single/* → sections/core/* → sections/<domain>/* → system/* (SmartCTA, SmartRelatedSection)
     ↓
CONTROL      →  system-report → validate-all → system-sync → report-driven dashboards
```

**One sentence:** Governance flows down from locked docs, intelligence flows up from the content graph, the control layer normalizes state into reports, and dashboards render those reports without recomputation.

---

## 8. PHASE 10 DECISIONS (LOCKED)

These 8 decisions govern all Phase 10 execution. Full details in `PHASE-10-audit-plan.md` Section 0.

| # | Decision | Summary |
|---|----------|---------|
| D1 | Deprecate internal linking engine | 10 files in `src/lib/internal-linking/` deprecated. Zero production usage. |
| D2 | SmartRelatedSection is sole linking system | Only mechanism for surfacing related content. Must be on ALL content-type templates. |
| D3 | Link slot rules LOCKED | service→services; feature→services; industry→services+caseStudies+resources; blog→resources+industries; resource→services+industries; caseStudy→industries+resources |
| D4 | Link limits LOCKED | Max 2 sections, max 3 items per section, max 6 total |
| D5 | Remove JourneyNavigator | Removed from all 3 templates. Must not be treated as active. |
| D6 | Remove `/conversation` | All refs → `/contact`. Page deleted. Redirect added. |
| D7 | Feature linking via graph only | No hardcoded service links. SmartRelatedSection on feature templates. |
| D8 | No content expansion | Zero new content in Phase 10. Fix routing + linking + cleanup only. |

### Phase 10 Governance Rules (Section 16)

| Rule | Summary |
|---|---|
| G1 — System Assignment | Every node: exactly 1 primary system. Optional secondary systems are graph-only. Canonical systems only. |
| G2 — Topic Specificity | Specific + actionable. From canonical registry only. Max 2 per node. |
| G3 — Industry Assignment | Optional for blog/resource. Required for industry-detail + case-study. |
| G4 — Feature→Service | Every feature maps to exactly 1 service. No orphan features. |
| G5 — CTA Routing Integrity | Every CTA uses the `/contact?system={system}&source={type}/{slug}` contract. No generic `/services`. No alternate conversion routes. No circular CTA logic. |
| G6 — Intent Contract | Every routed page defines `system` (primary), `intent`, and `slug`. Intent uses only `problem-aware`, `system-aware`, `solution-aware`, or `decision-ready`. |

---

## DECISION MATRIX

Use this when making any system decision.

| Question | Answer from | Rule |
|---|---|---|
| Can I change the service structure? | CONTENT.md | No — locked. Tier hierarchy is permanent. |
| Can I add a new content type? | GRAPH.md | Only if it fits the 7-type ontology. |
| Can I change CTA copy? | SYSTEM.md §5 | "Start a Conversation" is locked. |
| Can I use a banned word? | SYSTEM.md §2 | No — rewrite the sentence. |
| Can I add inline styles? | Design system rules | No — BEM classes only (shadcn/ui and SVG text exempt). |
| Can I hardcode a color? | foundation.css | No — use `--c-*` semantic tokens. |
| Can I override section padding? | DESIGN.md | Only for hero, CTA, or footer. |
| Can I add `use client` to a route file? | Component rules | No — isolate to micro islands. |
| Can I create a new domain wrapper? | DESIGN.md | Yes — but zero logic, thin re-export only. |
| Should I change docs or code? | GOVERNANCE | Change code. Docs are always correct. |
| Can I reopen an architectural decision? | AI Execution Lock | No — execute, don't strategize. |
| Which page type gets strong CTA? | ui-intelligence.ts | Service and Feature only. |
| Should I use SimpleHero or SplitHero? | Component patterns | SimpleHero = standard. SplitHero = feature/enhanced content with visual. |
| Can I add a Tier 3 service to homepage? | Tier hierarchy rule | No — Tier 3 must remain visually subordinate. |



---

# ===== PART 2: EXECUTION RULES =====

> Consolidated from: SYSTEM-STATE.md
> Rules derived from execution decisions. Enforced by validators.
>
> **Behavioral authority:** CONVERSION.md governs all conversion behavior, CTA routing, and data contracts. Rules in this document must not contradict the contract.

## 1. Canonical Value Enforcement

All metadata MUST use canonical values from:

```
src/lib/content-graph/canonical.ts
```

Do NOT use:
- UI labels (e.g. `home-services`, `automotive-services`)
- Grouping page slugs
- Inferred categories

If a value is not in `canonical.ts` → it is INVALID.

Reason:
- Ensures graph consistency
- Prevents broken relationships
- Guarantees validator accuracy

---

## 2. Cluster Execution Model

Content expansion uses clusters:

**Cluster = 1 Topic × 1 System × Multiple Industries**

Each cluster produces:
- Blog (PROBLEM)
- Blog (SYSTEM)
- Resource (ACTIONABLE)

Execution rule:
- Start small (2 industries)
- Validate
- Observe dashboard impact
- Then expand

Do NOT:
- Scale blindly
- Generate bulk content without validation

---

## 3. Metadata Validation Constraints

Blog validation rules:

- `metaTitle`: 40–60 characters
- `metaDescription`: 140–160 characters
- `primaryKeyword` MUST appear as a substring in:
  - `title`
  - `metaTitle`
  - `metaDescription`

Important:
- `primaryKeyword` must be a substring match (case-insensitive)
- Avoid long keywords that break `metaTitle` limits

---

## 4. Execution Principle

We optimise for:

- **Consistency > creativity**
- **Speed > perfection**
- **System integrity > content volume**

If anything breaks validation → STOP and fix.

---

## 5. Content Scope Rule

All content MUST belong to:

- Existing topics (from `canonical.ts`)
- Existing systems (from `canonical.ts`)
- Existing industries (from `canonical.ts`)

Content types allowed:
- Blog (`PROBLEM`, `SYSTEM`)
- Resource (`ACTIONABLE`, `EDUCATIONAL`)
- Case Study (`EXAMPLE`)

Do NOT:
- Create new topics
- Create new systems
- Create generic/unclassified content
- Mix multiple topics in one piece

Each content piece = ONE primary topic only.

---

## 6. Execution Boundaries

This system follows STRICT execution boundaries.

Do NOT:
- Redesign content structure
- Modify blueprint formats
- Change CTA logic (governed by CONVERSION.md)
- Alter content graph logic
- Introduce new abstractions
- Rename canonical values

Do ONLY:
- Create content using existing patterns
- Follow metadata rules strictly

---

## 7. Inventory as Single Source of Truth

`src/lib/content-quality/inventory.ts` is the single source of truth for all route metadata.

Rules:

- Every `page.tsx` resolves its metadata from inventory.
- Static routes call `getInventoryMetadata(routePath)` directly.
- Parameterized routes resolve inventory-backed metadata through `src/lib/seo/pageMetadata.ts` helpers.
- `STATIC_ROUTE_SEEDS` in inventory defines metadata for static pages.
- Domain registries feed into inventory via the content graph. Domain data does NOT feed directly into page metadata.
- No page may define its own `title`, `description`, or `openGraph` values outside inventory.
- No parallel route registries (e.g., `staticPages.ts`). One registry: inventory.
- Templates receive content, not metadata. Metadata is resolved before template rendering.
- Navigation links are derived from inventory (indexable routes). No hardcoded nav arrays.

Forbidden:

- Pages importing metadata from domain data files, hardcoded objects, or local constants.
- Any `generateMetadata()` or `export const metadata` containing literal strings.
- Duplicate metadata definitions across domain config and inventory.

---

## 8. UI Purity

Components are pure renderers. They accept props and return JSX.

Rules:

- All data fetching happens in `page.tsx` or a dedicated server-side data layer function called by `page.tsx`.
- All filtering, sorting, slicing, and grouping happens in the data layer before props reach a component.
- Components receive final, ready-to-render arrays.
- Components receive explicit visual directives (icon name, color token, gradient class). No inference from string content.

Forbidden:

- Components calling graph query functions (`getRelatedContent()`, `getServicesBySystem()`, etc.).
- Components calling domain data functions (`getCaseStudiesByIndustry()`, etc.).
- `Math.random()`, `sessionStorage`, `localStorage`, or any non-deterministic logic in components.
- Icon/color/gradient resolution from content strings.
- `Array.filter()`, `Array.sort()`, `Array.slice()` inside component render paths.
- Components importing from `src/domains/*/data/` or `src/lib/content-graph/`.

---

## 9. SmartCTA Mandate

`SmartCTA` is the system CTA component for primary page-level CTA panels. Deterministic contact routing is governed by `CONVERSION.md` and enforced through `src/lib/contact/contactHref.ts`.

Rules:

- Primary page CTA panels should render through `SmartCTA`.
- `SmartCTA` resolves its primary label through `resolveCtaLabel(system)`.
- `SmartCTA` builds its primary href through `buildContactHref({ system, sourceType, slug })`.
- Contextual CTA hrefs outside `SmartCTA` must be generated through `buildContactHref()` or a typed scoped helper such as `buildServiceContactHref()`.
- Domain payloads may carry `buttonText` and `buttonHref` fields where template contracts require explicit CTA actions.
- Any CTA that routes to contact must preserve canonical `system` plus normalized `source` context.

Forbidden:

- Hardcoded `'/contact'` or `'/contact?...'` string literals in content, templates, or components.
- Manual `source: 'type/slug'` strings or inline `source=type/slug` query literals.
- Literal metadata or page-local metadata objects that bypass inventory.
- Contact routes that bypass `/contact` or drop `system` / `source` context.

---

## 10. Graph Execution

The content graph resolves relationships at build time via singleton initialization.

Rules:

- Graph query functions are called in `page.tsx` server-side data preparation or generator scripts. Never in components.
- Related content arrays are fully resolved, sorted, and sliced before passing as props.
- `ensureGraphInitialized()` runs once per build via singleton cache. Runtime singleton initialization is allowed.
- Graph edges come from `canonical.ts` registries and domain registries.

Forbidden:

- Components calling graph query functions.
- Runtime relationship inference (e.g., keyword matching to derive links).
- Dynamic graph mutation or edge creation outside the canonical registry system.
- `Math.random()` or non-deterministic behavior in graph resolution.

---

## 11. Content Ownership

Content lives in exactly one place per type.

| Content Type | Canonical Location |
|---|---|
| Service/Industry/CaseStudy/Blog/Resource/Feature data | `src/domains/*/data/{slug}.ts` |
| Route metadata (title, description, OG, robots) | `inventory.ts` |
| CTA labels | `src/config/ctaLabels.ts` |
| CTA intensity + copy | `src/config/ui-intelligence.ts` |
| Navigation links | Derived from inventory |
| Canonical values | `src/lib/content-graph/canonical.ts` |

Forbidden:

- Duplicate content definitions across layers.
- Homepage data in screen-level files. Homepage sections use domain data files.
- FAQ content hardcoded in `page.tsx` or component files. FAQ data lives in domain data.
- Navigation links hardcoded in Nav or Footer components.
- Run validators after every batch

If any task requires structural change → STOP and escalate instead of implementing.

---

## 7. Permission Boundaries

### Allowed without asking
- Run sync and validators
- Read any repo file for context
- Implement tasks from SYSTEM-STATE.md (On demand Only )
- Fix validator failures and code defects inside active task scope
- Keep Update SYSTEM-STATE.md

### Requires user confirmation
- Update SYSTEM-STATE.md
- Modify governing docs in Mindwp-Docs/core/
- Add or remove validators
- Change CTA governance or conversion model
- Add new content types
- Make structural CSS architecture changes outside requested scope
- Run image generation in bulk mode

---

## 8. Common Failure Patterns

| Mistake | Correct action |
|---|---|
| Writing plans into SYSTEM-STATE.md | Put execution state in SYSTEM-STATE.md |
| Adding `type: 'industry'` to a node | Use `industry-detail` or `industry-category` |
| Hardcoding spacing/font values | Use design tokens |
| Creating CTA label outside approved config | Route through `CTA_CONFIG` |
| Skipping validation after a change | Run validate-all → sync → verify clean |
| Manually editing generated images | Regenerate with `--force` flag |

---

# ===== PART 3: EXECUTION MEMORY =====

> Consolidated from: SYSTEM-STATE.md
> Tracks current execution state, architectural decisions, and immediate system priorities.

## CURRENT PHASE

- **Phase:** Phase 3.0 — System Quality, Content Completeness, and SEO Authority Stabilized
- **Status:** Clean
- **Objective:** Preserve the centralized, report-linked clean state across validation, metadata, crawl alignment, topic authority, dashboard visibility, and the static OG fallback without changing locked architecture

---

## CURRENT SYSTEM STATUS

- **Master command:** `npm run system:report`
- **Master artifact:** `reports/system-report.json`
- **Current status:** `clean`
- **Blocking issues:** `0`
- **Advisory issues:** `0`

### Live advisory state

- No live advisory items. Current validator, SEO, authority, and lint surfaces are clean.

### System health snapshot

- `validate-all`: `21` validators total, `0` blocking failed, `0` advisory failed
- `test-results.json`: `49` passed, `0` failed, `0` skipped
- Runtime test layers: `unit 7`, `system 21`, `integration 11`, `e2e 10`
- `system-state.json`: `CLEAN`
- `system-drift.json`: `0` drift items
- SEO coverage: `349` routes analyzed, `0` missing metadata, `100%` canonical alignment, `100%` sitemap alignment, `100%` OG coverage
- Authority coverage: `42` topics analyzed, `42` complete coverage topics, `0` orphan topics, average score `68`

---

## ACTIVE PRIORITIES

1. Keep `system-report.json` and `test-results.json` as linked inspectable control-layer outputs
2. Keep all blocking validators and runtime test layers green
3. Keep the contact path minimal: `/contact` -> `/api/contact` -> Resend -> inbox email
4. Preserve zero-gap SEO state: no missing metadata, no duplicate titles/descriptions, no canonical or sitemap misalignment, and no OG gaps
5. Preserve complete canonical-topic coverage with `0` orphan topics and shared inventory-driven crawl logic
6. Preserve architecture, validators, dashboard report-loading, and the single static OG fallback at `/og-default.png`

---

## DECISION LOG

### D-001 — SYSTEM.md Is the Only Behavioral Authority

**Status:** Locked

**Decision:** Conversion behavior, CTA rules, and contact contract live only in `SYSTEM.md`.

**Impact:**
- Other docs may reference behavior
- Other docs may not redefine behavior
- Code changes must align to contract, not vice versa

---

### D-002 — Validators Consolidated Into Three Core Contract Surfaces

**Status:** Implemented

**Decision:** Replace fragmented metadata, structure, CTA, and conversion validation with:
- `scripts/validators/validate-content-contract.mjs`
- `scripts/validators/validate-domain-structure.mjs`
- `scripts/validators/validate-conversion-contract.mjs`

**Why:** Eliminate duplicate rule systems and reduce drift.

**Impact:**
- Old blog/resources/CTA/conversion split validators are removed
- Contract enforcement is centralized
- Structure enforcement is centralized

---

### D-003 — Lint Is Advisory In System Integrity Flow

**Status:** Implemented

**Decision:** `lint` no longer blocks the system report or aggregate validation flow.

**Why:** Phase 2 requires blocking only on critical integrity failures, not formatting or non-runtime lint drift.

**Impact:**
- `validate-all` can pass blocking integrity checks while still surfacing lint noise
- `system-state.json` and `system-report.json` still expose advisory lint issues

---

### D-004 — Generated Drift Is Blocking

**Status:** Implemented

**Decision:** `check-generated` is part of the blocking validation layer.

**Why:** Generated artifacts out of sync break determinism and invalidate the control layer.

**Impact:**
- Generated files are now integrity-critical
- Freshness is enforced before the system can be considered clean

---

### D-005 — Authority Map Must Exist As a Report Artifact

**Status:** Implemented

**Decision:** `scripts/generators/generate-authority-map.ts` writes both:
- `src/lib/authority/generated/authorityMap.ts`
- `reports/authority-map.json`

**Why:** Sync, dashboards, and system report need a machine-readable authority snapshot from the real generator.

**Impact:**
- `system-sync` no longer depends on an implicit or missing report
- `system-report` can consume authority state without re-deriving it

---

### D-006 — Authority Dashboard Is Visualization Only

**Status:** Implemented

**Decision:** `src/app/dev/authority-dashboard/page.tsx` reads only report files through `src/lib/dev/system-report.ts`.

**Allowed inputs:**
- `reports/system-report.json`
- `reports/system-state.json`
- `reports/system-drift.json`
- `reports/topic-authority-scores.json`
- `reports/content-gaps.json`

**Impact:**
- Old live monitor path removed
- Old dashboard actions removed
- Dashboard no longer computes health from registries at render time

---

### D-007 — Shared Route Inventory Governs SEO Consistency

**Status:** Implemented

**Decision:** Route-level SEO completeness, sitemap inclusion, canonical alignment, and crawl eligibility are governed from a shared inventory and graph SEO snapshot rather than page-by-page ad hoc checks.

**Impact:**
- `src/lib/content-quality/inventory.ts` is the route-level source of truth for crawl visibility checks
- `validate-content-quality` and `sitemap.ts` now measure against the same inventory
- Metadata fixes are applied through shared control points instead of mass manual route edits

---

### D-008 — Topic Authority Uses Coverage Guarantees

**Status:** Implemented

**Decision:** Canonical topic authority is measured by deterministic coverage guarantees: each topic needs at least one supporting blog path and at least one internal support path.

**Impact:**
- `reports/content-gaps.json` now tracks true coverage gaps and orphan topics
- `reports/topic-authority-scores.json` is aligned to the same coverage model
- Topic authority health is stable and report-driven rather than editorial-threshold driven

---

### D-009 — Split Dashboards Removed In Favor Of One Control Plane

**Status:** Implemented

**Decision:** The old `/content-dashboard` route is removed entirely. The operational dashboard surface now lives only at `/dev/system-dashboard`.

**Impact:**
- No redirect or legacy content-dashboard route remains in the app tree
- Dashboard documentation now points to the unified control plane only
- Middleware, crawl policy, and inventory no longer treat `/content-dashboard` as a live surface

---

### D-010 — Launch Metadata Uses One Static OG Fallback

**Status:** Implemented

**Decision:** Launch metadata no longer uses dynamic per-page OG image selection. All route metadata, inventory snapshots, and graph SEO snapshots now resolve to the single fallback image at `/og-default.png` with the standard `1200x630` dimensions.

**Impact:**
- Social preview coverage remains deterministic across the whole site
- Dashboard and report surfaces no longer drift from runtime metadata on OG images
- Launch SEO behavior is simpler to validate and maintain

---

## EXECUTION LOG

### E-001 — Validator Surface Simplified
**Date:** 2026-04-07

**Completed:**
- Added merged contract validators
- Removed duplicate validator files
- Reclassified docs, vocabulary, checklist, fix-log, and reports-structure as advisory

---

### E-002 — Image Scripts Relocated Without Behavior Change
**Date:** 2026-04-07

**Completed:**
- Moved image tooling into `scripts/image-system/`
- Updated package scripts, docs, registry entries, and dashboard hints
- Preserved image generation logic exactly

---

### E-003 — System Sync Simplified
**Date:** 2026-04-07

**Completed:**
- `scripts/core/system-sync.mjs` reduced to state + drift generation only
- Current outputs:
	- `reports/system-state.json`
	- `reports/system-drift.json`

**Removed from sync responsibility:**
- decision logs
- system log reconstruction
- doc-derived execution state

---

### E-004 — Master Report Engine Added
**Date:** 2026-04-08

**Completed:**
- Added `scripts/core/system-report.mjs`
- Added `npm run system:report`
- Normalized blocking, advisory, content, conversion, graph, design, summary, and priority output into `reports/system-report.json`

---

### E-005 — Dashboard Alignment Completed
**Date:** 2026-04-08

**Completed:**
- Authority dashboard switched to report-only mode
- `src/lib/dev/systemMonitor.ts` removed
- obsolete dashboard panels removed
- obsolete authority dashboard server actions removed

---

### E-006 — Final Verification Passed
**Date:** 2026-04-08

**Commands executed successfully:**
- `npm run system:report`
- `node scripts/core/validate-all.mjs`
- `node scripts/core/system-sync.mjs`

**Result:**
- no blocking failures
- report pipeline stable
- system remains in `warning` due to advisory issues only

---

### E-007 — CTA Contract Stabilization Pass Completed
**Date:** 2026-04-08

**Completed:**
- Ran `npm run system:report` as the source-of-truth pass
- Converted report output into a launch-priority fix list
- Updated high-impact service, feature, and resource CTA links to use explicit `/contact?system=...&source=...` contract parameters
- Re-ran report until CTA contract drift returned to zero

**Result:**
- `conversion.cta_missing_system`: `0`
- `conversion.cta_missing_source`: `0`
- `conversion.invalid_contact_links`: `0`
- System remains `warning` only because of advisory metadata and advisory lint drift

---

### E-008 — Intent Coverage Audit Revealed Report Mismatch
**Date:** 2026-04-08

**Completed:**
- Audited editable blog content under `src/domains/blog/content/*.tsx`
- Audited editable resource content under `src/domains/resources/content/*.tsx`
- Confirmed all scanned blog and resource source files already declare an `intent` field
- Cross-checked live source state against `reports/content-contract-report.json` and `reports/system-report.json`

**Result:**
- Blog content files missing `intent`: `0`
- Resource content files missing `intent`: `0`
- Current reports still claim `147` missing intent values (`88` blog, `59` resource)
- This is not currently fixable through content-only edits and indicates report/parsing inconsistency outside the editable content layer

---

### E-009 — Intent Detection Fixed At Graph Layer
**Date:** 2026-04-08

**Root cause:**
- Content files exported `intent` correctly
- Blog and resource registries imported those files correctly
- The graph builder dropped `intent` because `src/lib/content-graph/registry.ts` only copied `industries`, `systems`, and `topics` into graph nodes
- `validate-content-contract.mjs` reads from structured graph nodes, so it reported intent as missing even when source content was valid

**Files updated:**
- `src/lib/content-graph/types.ts`
- `src/lib/content-graph/registry.ts`

**Result:**
- `content.missing_intent`: `0`
- Missing-intent warnings are resolved without modifying content files
- Remaining blog/resource intent warnings are now correctly classified as legacy-intent normalization warnings, not missing-intent warnings

---

### E-010 — Conversion Clarity Pass Applied To Core Entry Pages
**Date:** 2026-04-08

**Completed:**
- Updated primary CTA labels on high-impact service and feature pages to be system-specific and outcome-focused
- Tightened CTA supporting text to explain what the user gets next with less friction
- Simplified above-the-fold messaging on edited pages without changing structure, routing, or field shapes
- Re-ran `npm run system:report` after the pass

**Result:**
- `blocking.count`: `0`
- `conversion.cta_missing_system`: `0`
- `conversion.cta_missing_source`: `0`
- `conversion.invalid_contact_links`: `0`
- No new warnings or errors were introduced by the edited conversion pages

---

### E-011 — Conversion Contract Hardening Completed
**Date:** 2026-04-08

**Completed:**
- Removed the CTA/contact intent path from runtime CTA rendering, contact form submission, and conversion validation
- Standardized contact URL generation through `buildContactHref()` using canonical `system + sourceType + slug`
- Replaced hardcoded `/contact` and manual `source` construction across services, features, home, case studies, industries, and shared CTA defaults
- Added `tests/e2e/conversion.spec.ts` to verify CTA navigation, contact context propagation, API payload context, and invalid direct `/contact` access
- Added `reports/execution-log.json` as an explicit hardening artifact

**Result:**
- Global CTA routing no longer permits `system=unknown`
- Conversion validator now blocks raw contact literals and manual source assembly in scanned conversion surfaces
- Contact submissions require only canonical `system` and `source` context
- CTA intensity is page-type driven only; no intent override layer remains in conversion runtime

---

### E-011 — CTA Clarity Rollout Extended Across Secondary Conversion Pages
**Date:** 2026-04-08

**Completed:**
- Replaced remaining generic primary CTAs on untouched feature pages with outcome-driven, system-aware labels
- Rolled CTA label upgrades across industry detail pages and industry category pages while keeping each page internally consistent
- Replaced generic case-study CTA labels with result-specific actions aligned to the system shown in each case study
- Upgraded the resource hub CTA title, supporting text, and primary action to match the systems-first positioning
- Spot-checked high-value blog posts and confirmed their existing CTA buttons were already system-specific, so no blog CTA rewrite was required in this pass
- Re-ran `npm run system:report` after the rollout

**Result:**
- `blocking.count`: `0`
- `advisory.count`: `2`
- `conversion.cta_missing_system`: `0`
- `conversion.cta_missing_source`: `0`
- `conversion.invalid_contact_links`: `0`
- CTA copy improvements did not reopen contract drift

---

### E-012 — Contact Flow Simplified To Direct Email Delivery
**Date:** 2026-04-08

**Completed:**
- Replaced the legacy contact page browser post to `/form-handler.php` with a minimal JSON post to `/api/contact`
- Simplified the contact form UI to collect only `name`, `email`, and `message`
- Preserved hidden `system` and `source` context on the `/contact` page for attribution
- Added Resend-backed email delivery to `CONTACT_EMAIL`
- Added `.env.example` entries for `RESEND_API_KEY` and `CONTACT_EMAIL`

**Deliberately not added:**
- CRM writes
- automation workflows
- dashboards for leads
- webhooks
- extra validation layers
- complex success/error UX states

**Operational requirement:**
- Live submissions require `RESEND_API_KEY` and `CONTACT_EMAIL` in `.env.local`

**Result:**
- Contact flow is now a direct email notification path only
- Submission context is limited to `system` + `source`
- Typecheck passed after the change

---

### E-013 — Production Test System Centralized And Report-Linked
**Date:** 2026-04-08

**Completed:**
- Added explicit runtime layers under `tests/unit`, `tests/system`, `tests/integration`, and `tests/e2e`
- Added contract tests for reusable components and layout primitives
- Added runtime/system guarantees for graph alignment, route coverage, metadata consistency, taxonomy alignment, CTA/contact compatibility, related content validity, route protection, and graph cold-start budget
- Added integration coverage for contact API, representative route rendering, all-template rendering, sitemap/robots consistency, validator fixtures, and basic render budgets
- Added Playwright coverage for conversion flows, CTA query params, major route crawl, and rendered internal-link reachability
- Added blocking validators for `validate-template-payload-sufficiency` and `validate-section-structure`
- Added `scripts/run-tests.mjs` and `npm run test:all` to aggregate validators + Vitest layers + Playwright into `reports/test-results.json`
- Wired `test-results.json` into the authority dashboard through the shared report loader
- Normalized stale sitemap navigation from `/sitemap` to `/sitemap.xml`

**Result:**
- Blocking validator failures: `0`
- Runtime blocking layer failures: `0`
- Aggregated test snapshot: `49` passed, `0` failed, `0` skipped
- Dashboard test health is now report-driven rather than computed ad hoc
- Internal-link crawl now catches stale navigation/document endpoint drift at runtime

---

### E-014 — System Quality And SEO Authority Completion Pass Finalized
**Date:** 2026-04-08

**Completed:**
- Added shared topic coverage and route inventory helpers to centralize SEO and authority measurement
- Enriched content graph nodes with route-level SEO snapshots used by validators, reports, and dashboard surfaces
- Added `validate-content-quality.mjs` and integrated its SEO, content, and authority outputs into validation and system reporting
- Moved sitemap generation onto the shared inventory and made robots/canonical/OG behavior consistent through shared metadata defaults
- Repaired duplicate titles, weak descriptions, topic coverage gaps, and residual lint drift without changing locked architecture
- Re-ran `npm run validate:all`, `npm run system:sync`, and `npm run system:report`

**Result:**
- `validate-all`: `21/21` passed, `0` blocking failed, `0` advisory failed
- `system-report.json`: `clean`
- `system-state.json`: `CLEAN`
- `system-drift.json`: `0` drift items
- SEO completeness: `0` missing metadata, `0` duplicate titles, `0` duplicate descriptions
- Crawl alignment: `100%` canonical alignment, `100%` sitemap alignment, `100%` OG coverage
- Authority coverage: `42` topics analyzed, `42` complete coverage topics, `0` orphan topics
- Lint status: clean

---

### E-015 — Content Dashboard Removal Finalized
**Date:** 2026-04-08

**Completed:**
- Deleted the last remaining `src/app/content-dashboard` route file
- Removed `/content-dashboard` from middleware and robots policy
- Updated system docs to reference only `/dev/system-dashboard`

**Result:**
- No content-dashboard route remains in the application
- Unified dashboard documentation and runtime surface are aligned

---

### E-016 — Launch Readiness Pass Completed
**Date:** 2026-04-08

**Completed:**
- Replaced dynamic OG metadata usage with the static fallback image at `/og-default.png`
- Normalized route inventory and graph SEO snapshots to the same OG fallback
- Strengthened existing service and resource topic anchors until all weak canonical topics were cleared
- Reduced multi-system service declarations to one primary system on the previously warned launch pages
- Updated dashboard fix suggestions to render action, target, impact, and time in one deterministic line

**Result:**
- `npm run typecheck`: passed
- `npm run system:report`: passed
- `reports/system-report.json`: `clean`
- `blocking.count`: `0`
- `advisory.count`: `0`
- `reports/topic-authority-scores.json`: `0` weak topics remaining

---

## CURRENT TASKS

### T-001 — Preserve Clean Report State
**Status:** Continuous
**Priority:** High
**Description:** Keep `validate-all`, `system-report`, `system-state`, and `system-drift` aligned at clean status after changes.

### T-002 — Preserve SEO Coverage Guarantees
**Status:** Continuous
**Priority:** High
**Description:** Keep metadata completeness, canonical alignment, sitemap alignment, robots output, and OG coverage at their current zero-gap state.

### T-003 — Preserve Topic Authority Coverage
**Status:** Continuous
**Priority:** High
**Description:** Keep every canonical topic backed by at least one blog path and one internal support path, with `0` orphan topics.

### T-004 — Preserve CTA Contract Integrity
**Status:** Active
**Priority:** Medium
**Description:** Keep all content CTAs that route to `/contact` aligned to the explicit `system` + `source` contract.

### T-005 — Preserve Unified Test Health Snapshot
**Status:** Active
**Priority:** Medium
**Description:** Keep `reports/test-results.json` current and keep the authority dashboard aligned to the shared report contract.

### T-006 — Preserve report-only dashboard boundary
**Status:** Continuous
**Priority:** High
**Description:** Do not reintroduce frontend recomputation or live health logic into dashboards.

### T-007 — Keep contact submissions minimal
**Status:** Active
**Priority:** High
**Description:** Preserve the current direct-email contact path without reintroducing CRM, webhook, automation, or dashboard coupling into the submission flow.

### T-008 — Keep structural validators authoritative
**Status:** Active
**Priority:** High
**Description:** Preserve the new template-payload and section-structure validators as the blocking source of truth for weak page payloads.

---

## LOCKED CONSTRAINTS

These constraints are active and must not change without architectural review:

- **Single CTA entry:** `/contact` is the only conversion endpoint
- **No inline forms:** forms are prohibited on content pages
- **Deterministic routing:** no runtime CTA variability outside contract-defined fallback behavior
- **One source of truth per concern:** no duplicate validators, no duplicate report engines, no dashboard-side recomputation
- **Validators block only on critical integrity:** graph, contract, generated drift, design token violations, inline styles in production UI, internal link integrity
- **Analyzers are advisory:** report only, never block
- **Image system preserved:** path and organization changes allowed, logic changes not allowed in this phase

---

## KNOWN RISKS

### R-001 — Clean status depends on shared control points staying authoritative
**Impact:** High
**Current state:** Resolved for now. Future route-level metadata changes must continue to flow through shared inventory, metadata, and graph snapshot logic.

### R-002 — Dashboard/report drift can return if live computation is reintroduced
**Impact:** High
**Current state:** Report-only dashboard boundary is currently enforced and must remain so.

### R-003 — Topic authority can regress through taxonomy edits
**Impact:** Medium
**Current state:** Resolved for now. Adding or renaming canonical topics without corresponding support-path coverage can reintroduce orphan topics or authority gaps.

### R-004 — Contact delivery depends on local email configuration
**Impact:** Medium
**Current state:** The contact form is functional only when `RESEND_API_KEY` and `CONTACT_EMAIL` are present. Without them, `/api/contact` returns a configuration error instead of sending mail.

### R-005 — Test snapshot staleness can hide regressions between runtime passes
**Impact:** Medium
**Current state:** Last aggregated runtime snapshot is still green (`49` passed, `0` failed), but it only stays meaningful if rerun after behavior changes.

---

## OPERATIONAL WORKING ORDER

### Start work
1. Run `npm run system:report`
2. Read `reports/system-report.json`
3. Read this file for active priorities and locked constraints

### Finish work
1. Run targeted validators if needed
2. Run `npm run system:report`
3. Confirm `reports/system-report.json`, `reports/system-state.json`, and `reports/system-drift.json` updated cleanly
4. Do not leave blocking failures behind

---

END OF DOCUMENT.

---

# ===== PART 4: DECISION STATE =====

<!-- AUTO-GENERATED — DO NOT EDIT MANUALLY -->
<!-- Generated by system-sync.mjs. No history. No timeline. -->
<!-- This section contains auto-generated decision state. Content below this marker may be overwritten by system scripts. -->

> Auto-generated by system-sync.mjs. No history. No timeline.

## Active Decisions

- Docs override code
- Primary CTA is locked to `/contact`
- BEM styling is the only approved CSS methodology


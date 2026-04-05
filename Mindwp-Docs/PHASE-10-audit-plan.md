# PHASE 10 — CONTENT + LINKING + GRAPH INTELLIGENCE EXECUTION PLAN

**Generated:** 5 April 2026
**Refined:** 6 April 2026
**Status:** LOCKED ARCHITECTURE — READY FOR EXECUTION
**Type:** System Architecture Document (not a checklist)
**Scope:** Content → Graph → Linking → Conversion alignment
**Predecessor:** Phase 9 — System Cleanup & Alignment (COMPLETE)

---

## 0. CORE SYSTEM DECISIONS (LOCKED)

These 8 decisions are **final**. They govern every task, every batch, and every line of code in Phase 10. Nothing in this plan may contradict them.

### Decision 1 — DEPRECATE Internal Linking Engine

The internal linking engine (`src/lib/internal-linking/`, 10 files) is **deprecated and will be removed from production usage**.

**Reason:** The engine was designed for plain-text paragraph injection (`injectLinksIntoText`, `injectLinksSmart`). MindWP content is stored as structured React sections — not prose paragraphs. The engine's output is consumed **only by dev tools** (`src/lib/dev/`), not by any production template. It creates architectural confusion and non-deterministic link placement. It adds complexity with zero production value.

**Files to deprecate:**
| File | Current Purpose |
|---|---|
| `src/lib/internal-linking/engine.ts` | `generateInternalLinks()` — MAX_LINKS=5, SCORE_THRESHOLD=120 |
| `src/lib/internal-linking/rules.ts` | Candidate selection (authority, cluster, journey buckets) |
| `src/lib/internal-linking/scoring.ts` | Link scoring |
| `src/lib/internal-linking/scoringWeights.ts` | Conversion weights |
| `src/lib/internal-linking/placement.ts` | Zone allocation (intro/body/conclusion) |
| `src/lib/internal-linking/injector.ts` | HTML `<a>` tag injection, anti-spam rules |
| `src/lib/internal-linking/blockParser.ts` | Content zone splitting |
| `src/lib/internal-linking/anchor.ts` | Anchor text generation, partial matching |
| `src/lib/internal-linking/journey.ts` | Funnel progression mapping |
| `src/lib/internal-linking/conversion.ts` | Conversion priority weights |
| `src/lib/internal-linking/types.ts` | Shared types |

**Consumers (dev-only — NOT production):**
| Dev File | Import |
|---|---|
| `src/lib/dev/linkSuggestionEngine.ts` | `generateInternalLinks` |
| `src/lib/dev/linkHealthAnalyzer.ts` | `generateInternalLinks`, `isJourneyNextStep`, `InternalLink` |
| `src/lib/dev/conversionSignals.ts` | `generateInternalLinks`, `isJourneyNextStep` |
| `src/lib/dev/conversionAnalyzer.ts` | `generateInternalLinks`, `isJourneyNextStep`, `SCORING_WEIGHTS`, `CTA_TYPE_SCORES` |
| `src/lib/dev/fixSimulationEngine.ts` | `CTA_TYPE_SCORES`, `SCORING_WEIGHTS` |

**Action:** Do NOT delete the files yet. Mark as deprecated. Dev tools that import from them will be updated in a future phase to consume graph data directly. Phase 10 only ensures no production template references the injection engine.

---

### Decision 2 — SmartRelatedSection Is the ONLY Linking System

`SmartRelatedSection` (`src/components/system/SmartRelatedSection.tsx`) is the **sole mechanism** for surfacing related content on any page.

**How it works:** Calls `getRelatedContent(slug, type)` → resolves via Authority Map → renders cards. Graph-driven, deterministic, validated.

**Current coverage:**
| Template | Has SmartRelatedSection? | Line |
|---|---|---|
| `BlogPostTemplate.tsx` | ✅ Yes | Line 506 |
| `CaseStudyTemplate.tsx` | ✅ Yes | Line 493 |
| `ResourcePageTemplate.tsx` | ✅ Yes | Line 516 |
| Service templates | ❌ Needs verification + addition |
| Feature templates | ❌ Needs verification + addition |
| Industry detail templates | ❌ Needs verification + addition |
| About / FAQ / Contact | ❌ Cannot use (not graph nodes) — manual links only |

**Phase 10 Action:** Ensure `SmartRelatedSection` is present on ALL content-type templates (service, feature, industry-detail). Static pages (About, FAQ, Contact) receive manually authored contextual links instead.

**`RelatedContentSection.tsx` note:** This file already contains the comment "SmartRelatedSection is the graph-aware replacement." No new `RelatedContentSection` usage is permitted.

---

### Decision 3 — Link Slot Rules (LOCKED)

The Authority Map slot allocation per content type is **final**. These slots define what types of content can appear in a page's related sections.

| Source Type | Allowed Slots | Rationale |
|---|---|---|
| `service` | `services` only | Services link to peer services. Conversion stays within service layer. |
| `feature` | `services` only | Features exist to route users to the service that implements them. |
| `industry` | `services`, `caseStudies`, `resources` | Industry pages show relevant services, proof, and education for that industry. |
| `blog` | `resources`, `industries` | Blog educates → routes to deeper resources and relevant industries. |
| `resource` | `services`, `industries` | Resources are mid-funnel → route toward conversion (services) and context (industries). |
| `caseStudy` | `industries`, `resources` | Case studies prove outcomes → route to industry context and related resources. |

**What this means:**
- ❌ Blog does NOT get a `caseStudies` slot. The previous recommendation to add one is **overruled**.
- ❌ No cross-type expansion. Blog→Case Study direct linking is not permitted via SmartRelatedSection.
- The only path from blog to case study is through the journey: blog → resource → case study (via user navigation, not system linking).

---

### Decision 4 — Link Limits (LOCKED)

| Constraint | Value |
|---|---|
| Maximum related sections per page | **2** |
| Maximum items per section | **3** |
| Total maximum related links per page | **6** (2 × 3) |

This replaces the internal linking engine's MAX_LINKS=5 and zone allocation. SmartRelatedSection already renders top-3 per block — the limit is on how many blocks (sections) can appear.

**Enforcement:** `SmartRelatedSection` component must respect `maxSections=2` and `maxItems=3`. If it already does, document as validated. If not, enforce at component level.

---

### Decision 5 — REMOVE JourneyNavigator

`JourneyNavigator` (`src/components/system/JourneyNavigator.tsx`) is **removed from all templates**.

**Reason:** JourneyNavigator implements a hardcoded funnel progression (blog→resource→case-study→service) that duplicates what SmartRelatedSection already does via graph resolution. It adds a separate navigation paradigm ("what to read next" card) that is redundant with the related sections. Two linking systems = confusion.

**Current usage:**
| Template | Line |
|---|---|
| `BlogPostTemplate.tsx` | Line 507 |
| `CaseStudyTemplate.tsx` | Line 494 |
| `ResourcePageTemplate.tsx` | Line 517 |

**Action:** Remove `<JourneyNavigator>` from all 3 templates. Do NOT delete the component file itself yet — mark as deprecated alongside the internal linking engine.

**Config dependency:** `JOURNEY_CONFIG` in `src/config/ui-intelligence.ts` — mark as deprecated but do not remove. Dev tools may reference it.

---

### Decision 6 — REMOVE `/conversation`

`/conversation` is **removed**. This is not a decision-required item — it is locked as Option A.

**All references (17 total) — disposition:**
| File | Change |
|---|---|
| `src/domains/services/data/ai-lead-handling.ts` | Change `href: '/conversation'` → `href: '/contact'` |
| `src/domains/case-studies/content/BeautySalonManchesterAllSections.tsx` | Change `'/conversation?source=all-sections-case-study'` → `'/contact?source=all-sections-case-study'` |
| `src/domains/case-studies/content/BeautySalonManchesterCustom.tsx` | Change `'/conversation?source=beauty-salon-case-study'` → `'/contact?source=beauty-salon-case-study'` |
| `src/lib/site/staticPages.ts` | Remove `/conversation` entry |
| `src/app/sitemap.ts` | Remove `/conversation` from sitemap array |
| `src/app/conversation/page.tsx` | Delete file |
| `src/screens/Conversation.tsx` | Delete file |
| `src/screens/ConversationFormIsland.tsx` | Delete file |
| `src/components/reusable/single/Button.tsx` | Update JSDoc example |
| `src/components/reusable/single/SplitHeroSection.tsx` | Update JSDoc example |
| `src/components/reusable/single/SimpleHero.tsx` | Update JSDoc example |
| `src/components/reusable/single/CTASection.tsx` | Update JSDoc example |
| `src/lib/devtools/componentScanner.ts` | Update 5 mock/example references |

**Redirect:** Add permanent redirect in `next.config.mjs`: `/conversation` → `/contact`

---

### Decision 7 — Feature Linking Via Graph Only

Feature pages link to services **through the content graph only** — via `SmartRelatedSection`.

- ❌ No hardcoded service link slots in feature data structures
- ❌ No manual "Get This Implemented" sections
- The graph already has `feature→service: supports` edge rules. SmartRelatedSection resolves the correct service.
- Decision 3 confirms: feature slot = `services` only.

**Action:** Add `SmartRelatedSection` to feature page templates. The graph does the rest.

---

### Decision 8 — NO Content Expansion in Phase 10

Phase 10 creates **zero new content**. No new blog posts, resources, case studies, or pages.

- ❌ No "Create 1 resource: CRM Pipeline Architecture guide"
- ❌ No "Create 1 blog + 1 resource for booking-automation"
- ❌ No editorial introductions for hub pages
- All content gap recommendations are deferred to Phase 11.

**What Phase 10 IS doing:**
- Fixing routing (CTA destinations)
- Fixing linking (SmartRelatedSection coverage, dead-end elimination)
- Cleaning up deprecated systems
- Manual link additions to static pages (About, FAQ, Contact)

---

## 1. SYSTEM OVERVIEW

### What MindWP Is

MindWP is a systems-first digital infrastructure provider for UK service businesses. The website serves as the primary conversion engine. It operates on a fully automated content graph with 211 content nodes, 7,065 derived edges, 26 validators, and graph-driven related content resolution via SmartRelatedSection.

### Current System Strengths

- **26/26 validators passing** — zero drift, zero violations, system state CLEAN
- **Content graph is fully automated** — all relationships are derived from metadata overlap using a locked scoring formula: `(systemOverlap × 3) + (topicOverlap × 2) + (industryOverlap × 1)`
- **7 formal content types** with strict section schemas: service (21), feature (7), industry-category (6), industry-detail (26), blog (79), resource (51), case-study (22)
- **SmartRelatedSection** — graph-driven related content resolution, deterministic, validated
- **Consistent design system** — 243 tokens, Phase 7 + 8 completed, all sections unified
- **Strong content quality** — problem-first language, quantified outcomes, operational focus, low-pressure CTAs

### Core Problems Discovered

1. **Blog CTA routing failure** — All 79 blog posts route their CTA to `/services` (generic hub) instead of the specific service page matching their `systems[]` metadata. This is the single largest conversion leak.
2. **Dead-end static pages** — About, FAQ, and Contact have zero internal linking to content, services, or proof pages. Users reaching these pages have no onward path.
3. **Orphan conversion page** — `/conversation` exists as a strategy call booking page but has only 1 inbound link (AI Lead Handling hero). The rest of the site is invisible to it. **Decision 6: REMOVE.**
4. **Feature→Service disconnect** — Feature pages cross-link to other features but rarely link to the service pages that deliver those capabilities. **Decision 7: Fix via graph only.**
5. **Cross-industry blog invisibility** — Blog posts with `industries: []` (framework-level content) cannot appear on industry pages because the graph edge gate requires ≥1 system overlap AND industry scoring contributes 0 for empty arrays.
6. **Dual linking systems** — Internal linking engine (injection-based) and SmartRelatedSection (graph-based) coexist, creating architectural confusion. **Decision 1: Deprecate engine. Decision 2: SmartRelatedSection only.**
7. **JourneyNavigator redundancy** — Hardcoded funnel progression duplicates graph-driven related content. **Decision 5: REMOVE.**

---

## 2. PHASE 10 — IDENTIFIED SYSTEM BLUNDERS

These are architectural mistakes that Phase 10 corrects. Documenting them prevents recurrence.

### Blunder 1 — Internal Linking Engine Was Built for Wrong Content Format

**What happened:** A 10-file internal linking engine was built to inject `<a>` tags into plain text paragraphs using sentence-boundary splitting and zone allocation (intro/body/conclusion). But MindWP content is stored as structured React sections with typed components — not prose paragraphs.

**Impact:** The engine's injector (`injectLinksIntoText`, `injectLinksSmart`) was never consumed by any production template. It only runs in dev tools. It was a complete architectural mismatch from day one.

**Root cause:** The linking system was designed before the section schema (Phase 8) was established. When content moved from text to structured sections, the engine was never updated to match.

**Correction:** Decision 1 — deprecate the engine. SmartRelatedSection (Decision 2) operates at the component level and works natively with structured content.

### Blunder 2 — Two Conversion Paths (`/contact` + `/conversation`)

**What happened:** `/conversation` was created as a "strategy call" booking page, differentiated from `/contact`. Over time, the rest of the site standardised on `/contact` as the primary CTA. `/conversation` accumulated only 5 production inbound links while `/contact` became the universal destination.

**Impact:** Two nearly identical conversion pages with different entry points. Splitting analytics, confusing user expectations, creating maintenance burden for a page with near-zero traffic.

**Root cause:** The `/conversation` page was an early experiment that was never consolidated.

**Correction:** Decision 6 — remove `/conversation`, redirect to `/contact`. Source tracking preserved via query params.

### Blunder 3 — All 79 Blog CTAs Route to Generic Hub

**What happened:** Every blog post's CTA `buttonUrl` was set to `'/services'` — the services listing page. This was likely a safe default during initial content creation that was never updated.

**Impact:** A reader finishes an article about "HVAC CRM Pipeline" and clicks "Explore Services" — they land on a hub page listing 21 services. They must find "CRM Infrastructure Implementation" themselves. Most bounce.

**Root cause:** No build-time enforcement that blog CTAs must resolve to a specific service. The system allowed a generic URL because no validator checked for it.

**Correction:** Layer 1A — fix all 79 blog `buttonUrl` values to specific service paths. Long-term: add validator to prevent generic `/services` as a blog CTA destination.

### Blunder 4 — JourneyNavigator Duplicated Graph Linking

**What happened:** JourneyNavigator was built to show "what to read next" based on a hardcoded funnel progression (blog→resource→case-study→service). SmartRelatedSection already resolves related content from the same graph. Both were rendered on the same templates (blog, resource, case-study).

**Impact:** Users see two separate "related content" UI elements with different (sometimes conflicting) recommendations. The page is noisy. The system has two sources of truth for "what comes next."

**Root cause:** JourneyNavigator was built as a UX enhancement without recognising it overlapped with SmartRelatedSection's purpose.

**Correction:** Decision 5 — remove JourneyNavigator from all templates. SmartRelatedSection is the sole linking system.

### Blunder 5 — Feature Pages Existed Outside the Linking System

**What happened:** Feature pages cross-link to other features via "explore" sections but had no connection to the service pages that deliver those capabilities. They also lacked SmartRelatedSection, making them invisible to the graph-driven linking system.

**Impact:** Users exploring features entered a feature-to-feature loop with no exit toward conversion. The graph already knew feature→service relationships (via `supports` edge rules), but no template rendered them.

**Root cause:** Feature page templates were built with hardcoded cross-links to other features, not wired into the content graph.

**Correction:** Decision 7 — add SmartRelatedSection to feature templates. Graph resolves feature→service links automatically.

---

## 3. INTERNAL LINKING ARCHITECTURE (FINAL)

### Before Phase 10

```
┌─────────────────────────────────────────────────────┐
│  DUAL LINKING SYSTEM (BROKEN)                       │
│                                                     │
│  1. Internal Linking Engine (10 files)              │
│     └─ generateInternalLinks() → injectLinksIntoText()
│     └─ Zone allocation: intro(1), body(2), conclusion(1)
│     └─ Journey funnel: blog→resource→case-study→service
│     └─ ⚠ NOT consumed by any production template    │
│                                                     │
│  2. SmartRelatedSection (1 component)               │
│     └─ getRelatedContent() → Authority Map → cards  │
│     └─ Top 3 per block, per slot rules              │
│     └─ ✅ Used by blog, resource, case-study        │
│                                                     │
│  3. JourneyNavigator (1 component)                  │
│     └─ Hardcoded funnel progression                 │
│     └─ "What to read next" card                     │
│     └─ ⚠ Duplicates SmartRelatedSection             │
│                                                     │
│  4. GraphAwareSidebar (1 component)                 │
│     └─ ⚠ NOT imported by any template               │
└─────────────────────────────────────────────────────┘
```

### After Phase 10

```
┌─────────────────────────────────────────────────────┐
│  SINGLE LINKING SYSTEM (SmartRelatedSection)        │
│                                                     │
│  SmartRelatedSection                                │
│     └─ getRelatedContent(slug, type) → Authority Map│
│     └─ Slot rules per Decision 3                    │
│     └─ Max 2 sections, 3 items each (Decision 4)   │
│     └─ Present on ALL content-type templates        │
│                                                     │
│  Manual Links (static pages only)                   │
│     └─ About: contextual links to services/proof    │
│     └─ FAQ: inline links in answer text             │
│     └─ Contact: trust reinforcement links           │
│                                                     │
│  DEPRECATED (kept in codebase, not used):           │
│     └─ src/lib/internal-linking/* (10 files)        │
│     └─ JourneyNavigator component                   │
│     └─ GraphAwareSidebar component                  │
│     └─ JOURNEY_CONFIG in ui-intelligence.ts         │
└─────────────────────────────────────────────────────┘
```

### Slot Resolution Table (Decision 3)

| Source Type | Slot 1 | Slot 2 | Slot 3 |
|---|---|---|---|
| `service` | services | — | — |
| `feature` | services | — | — |
| `industry` | services | caseStudies | resources |
| `blog` | resources | industries | — |
| `resource` | services | industries | — |
| `caseStudy` | industries | resources | — |

### Link Limits (Decision 4)

| Constraint | Value | Enforced By |
|---|---|---|
| Max sections per page | 2 | SmartRelatedSection component |
| Max items per section | 3 | SmartRelatedSection component |
| Max total related links | 6 | 2 × 3 |

---

## 4. PHASE 10 GOAL

### What Phase 10 Is Fixing

Phase 10 corrects the **routing, linking, and system cleanup** layer. It ensures that:

1. Every piece of content routes users toward the correct conversion destination
2. No page is a dead-end
3. SmartRelatedSection is the **sole** graph-driven linking system
4. Deprecated systems (internal linking engine, JourneyNavigator) are removed from production paths
5. `/conversation` is removed and redirected
6. The conversion funnel operates end-to-end without friction

### What Phase 10 Is NOT Doing

- ❌ No new content creation (Decision 8)
- ❌ No content rewrites
- ❌ No design system changes
- ❌ No new content types or section schemas
- ❌ No validator changes
- ❌ No infrastructure or build changes
- ❌ No graph scoring changes (formula is locked)
- ❌ No new page creation
- ❌ No cross-type slot expansion (Decision 3)
- ❌ No blog→caseStudy linking (overruled)

### Expected Outcome After Completion

- Every blog post CTA routes to its matching service page
- About, FAQ, Contact pages have contextual internal links
- `/conversation` removed, redirect in place
- SmartRelatedSection present on ALL content-type templates
- JourneyNavigator removed from all templates
- Internal linking engine marked deprecated, unused in production
- Feature pages link to services via graph
- All 315+ routes participate in the conversion funnel
- Single linking architecture: SmartRelatedSection + manual links (static pages)

---

## 5. LAYERED EXECUTION PLAN

---

### LAYER 1 — CONVERSION ROUTING FIX (CRITICAL)

This layer fixes the primary revenue leak: content pages that educate users but fail to route them to the correct service.

---

#### A. Blog → Service CTA Mapping

**Current State:**
All 79 blog posts have `buttonUrl: '/services'` in their CTA section. This sends every reader to the generic services listing page regardless of what they just read.

**System→Service Slug Mapping:**

| System (from blog `systems[]`) | Service Slug | Service Canonical Path |
|---|---|---|
| `ai-lead-handling` | `ai-lead-handling` | `/services/ai-lead-handling` |
| `crm-automation` | `crm-automation` | `/services/crm-infrastructure-implementation` |
| `smart-website-systems` | `smart-website-systems` | `/services/smart-website-systems` |
| `local-seo-authority` | `local-seo-authority` | `/services/local-seo-authority` |
| `reputation-review` | `reputation-review-systems` | `/services/reputation-review-systems` |
| `revenue-growth` | `growth-revenue-systems` | `/services/growth-revenue-systems` |

**Blog Distribution by Primary System:**

| System | Blog Count | Example Posts |
|---|---|---|
| `ai-lead-handling` | 27 posts (34%) | `lead-automation-framework-for-service-businesses`, `why-hvac-companies-lose-leads-after-hours`, `missed-call-recovery-for-service-businesses` |
| `crm-automation` | 19 posts (24%) | `hvac-crm-pipeline-for-service-companies`, `roofing-crm-pipeline-for-estimates`, `building-revenue-visibility-through-crm-tracking` |
| `smart-website-systems` | 19 posts (24%) | `how-smart-website-systems-work-for-local-businesses`, `service-page-architecture-for-service-businesses`, `why-service-business-websites-fail-to-convert` |
| `local-seo-authority` | 11 posts (14%) | `google-business-profile-system-architecture`, `local-seo-for-roofing-companies-explained`, `local-visibility-framework-for-service-businesses` |
| `reputation-review` | 16 posts (20%) | `review-automation-for-salons`, `reputation-monitoring-systems-for-service-businesses`, `responding-to-negative-reviews-systematically` |

**Note:** Totals exceed 79 because 6 posts reference 2 systems.

**Multi-System Posts (Edge Cases):**

| Blog Slug | Systems | Resolution |
|---|---|---|
| `authority-signals-for-salons` | `['local-seo-authority', 'reputation-review']` | Route to `local-seo-authority` (primary intent is visibility/authority) |
| `autonomous-booking-systems-for-salons` | `['smart-website-systems', 'crm-automation']` | Route to `smart-website-systems` (booking is website infrastructure) |
| `booking-systems-for-salons-explained` | `['smart-website-systems', 'crm-automation']` | Route to `smart-website-systems` (same reasoning) |
| `conversion-tracking-for-hvac-companies` | `['smart-website-systems', 'crm-automation']` | Route to `smart-website-systems` (conversion tracking is website layer) |
| `hvac-emergency-call-handling-mistakes` | `['ai-lead-handling', 'crm-automation']` | Route to `ai-lead-handling` (emergency handling is lead capture) |
| `local-service-page-architecture-for-roofing-companies` | `['local-seo-authority', 'smart-website-systems']` | Route to `local-seo-authority` (service page architecture is SEO-driven) |
| `reducing-salon-no-shows-with-automation` | `['crm-automation', 'ai-lead-handling']` | Route to `crm-automation` (no-show reduction is CRM workflow) |
| `roofing-estimate-follow-up-delays` | `['ai-lead-handling', 'crm-automation']` | Route to `crm-automation` (estimate follow-up is pipeline management) |

**Resolution Logic for Multi-System Posts:**
Use `systems[0]` as the primary system (first listed = highest intent alignment per content architecture rules). For edge cases where `systems[0]` doesn't match the content's primary focus, override manually using the mapping table above.

**Implementation Approach:**
- Each blog content file's CTA section has a `buttonUrl` property
- Change from `'/services'` to the specific service canonical path
- Also update the `buttonLabel` where it says generic "Explore Services" to match the target service
- Long-term: add a build-time validator that rejects generic `/services` as a blog CTA destination

**Risks:**
- If a service page is ever renamed/moved, blog CTAs will break → Mitigation: next build with `dynamicParams = false` will fail on dead link
- Multi-system posts may debate which service to route to → Mitigation: use the mapping table above as the authoritative decision record

---

#### B. Feature → Service Linking (Decision 7: Graph Only)

**Current State:**
Feature pages cross-link to other features via an "explore" section but have minimal links to service pages.

| Feature | Current Outbound Links | Expected Service via Graph |
|---|---|---|
| `aichat` | `/features/calendars`, `/features/inbox`, `/features/crm` | `/services/ai-lead-handling` |
| `calendars` | `/features/aichat`, `/features/inbox`, `/features/crm` | `/services/booking-scheduling-system` |
| `crm` | `/features/aichat`, `/features/calendars`, `/features/inbox`, `/features/mail` | `/services/crm-infrastructure-implementation` |
| `inbox` | `/features/aichat`, `/features/calendars`, `/features/crm` | `/services/unified-communication-system` |
| `reputation` | `/features/aichat`, `/features/crm`, `/features/calendars` | `/services/reputation-review-systems` |
| `voicecalls` | `/features/aichat`, `/features/crm`, `/services/smart-website-systems` | `/services/ai-lead-handling` |
| `workflows` | Explore-related features (dynamic) | `/services/marketing-automation-setup` |

**Approach (per Decision 7):**
- Add `SmartRelatedSection` to feature page templates
- Feature slot rules (Decision 3): `services` only
- The graph's `feature→service: supports` edge rules resolve the correct service
- ❌ No hardcoded service link slots in feature data
- ❌ No manual "Get This Implemented" sections

---

#### C. Service → Contact Flow

**Current State:**
All 21 service pages use `/contact` as their CTA destination. This is correct and consistent.

| Pattern | Count | Status |
|---|---|---|
| Hero CTA → `/contact` | 20/21 | ✅ Correct |
| Hero CTA → `/conversation` | 1/21 (AI Lead Handling) | ⚠️ Fix in Decision 6 |
| Main CTA → `/contact` | 21/21 | ✅ Correct |
| Qualification section present | 21/21 | ✅ Correct |
| FAQ section present | 21/21 | ✅ Correct |

**One Exception — addressed by Decision 6:**
`ai-lead-handling.ts` line 44: `primaryAction: { label: 'Start a Conversation', href: '/conversation' }`
→ Change to `href: '/contact'`

**Assessment:** Service→Contact flow is healthy. Only 1 fix needed (covered by Decision 6 cleanup).

---

#### D. `/conversation` Page Removal (Decision 6: LOCKED)

Decision 6 is **locked**. `/conversation` is removed. See Section 0, Decision 6 for the complete file-by-file changeset.

**Cleanup Summary:**
- 3 production content references → change to `/contact`
- 2 config references → remove entries
- 3 files → delete (page, screen, form island)
- 4 JSDoc examples → update
- 5 dev tool references → update
- 1 redirect → add in `next.config.mjs`

---

### LAYER 2 — DEAD-END ELIMINATION

This layer ensures every page has an onward path. No user should reach a page with no way forward.

---

#### A. About Page (`/about`)

**Current State:**
- Renders from `src/screens/About.tsx`
- Sections: Hero → Problem We Saw → Our Approach → What We Don't Do → How We Work → Final CTA
- Only outbound link: "Start a Conversation" → `/contact`
- No internal links to services, features, case studies, or industries
- No `SmartRelatedSection` (About is not a graph node — cannot use it)

**What's Missing:**
1. After "Our Approach" section → link to `/services/smart-website-systems` (core service that embodies the approach)
2. After "How We Work" section → link to `/case-studies` (proof of the approach)
3. After "What We Don't Do" section → link to `/services` (show what they DO offer)
4. In Final CTA area → add secondary link to `/industries` or `/services` for users not ready to contact

**Implementation Notes:**
- Add 2-3 contextual `<Link>` elements within existing section copy
- Add a "See Our Work" or "Explore Services" secondary action alongside the final CTA
- Do NOT add `SmartRelatedSection` — About is not a content node in the graph

---

#### B. FAQ Page (`/faq`)

**Current State:**
- Renders from `src/screens/FAQPage.tsx`
- 5 tabbed categories: General, SEO, CRM, Pricing, Technical
- 4 questions per category = 20 total
- Zero internal links within any answer
- Only outbound path is the site header/footer navigation

**What's Missing:**
FAQ answers reference capabilities and services without linking to them. Specific gaps:

| Category | Question (Example) | Should Link To |
|---|---|---|
| General | "What does MindWP actually do?" | `/services/smart-website-systems` |
| General | "What types of businesses do you work with?" | `/industries` |
| SEO | "Is SEO included?" | `/services/local-seo-authority` |
| CRM | "Can the system support booking, enquiries, and CRM handling?" | `/services/booking-scheduling-system`, `/services/crm-infrastructure-implementation` |
| CRM | "How does follow-up work after someone contacts us?" | `/services/crm-infrastructure-implementation` |
| Pricing | Pricing-related questions | `/contact` (with context) |
| Technical | Technical capability questions | `/features` |

**Implementation Notes:**
- Add inline links within FAQ answer text (not new sections)
- Use natural anchor text (e.g., "our Local SEO & Authority service" linking to `/services/local-seo-authority`)
- Maximum 1-2 links per answer to avoid clutter
- Prioritise service page links over content links (FAQ intent is evaluation, not education)

---

#### C. Contact Page (`/contact`)

**Current State:**
- Renders from `src/screens/Contact.tsx` (with `ContactClientPage` wrapper)
- Form fields: name, email, phone, company, service dropdown, message
- Includes quick FAQs section
- Alternative CTA present
- No links to services, case studies, or content

**What's Missing:**
1. Quick access links to service pages (for users who want to learn more before submitting)
2. Trust reinforcement: 1-2 case study proof points or "See our results" link to `/case-studies`
3. "Not sure which service?" → link to `/services` or `/faq`

**Implementation Notes:**
- Add a small "Learn more about our services" link set near the service dropdown
- Add a trust section with 1-2 metrics from case studies
- Keep the form as the dominant element — links should be secondary/supporting

---

### LAYER 3 — GRAPH & STRUCTURE CORRECTION

This layer fixes data-level issues that cause wrong or missing relationships in the content graph.

---

#### A. Content Graph Assessment

**Edge Volume — Signal vs Noise:**

The graph produces 7,065 derived edges across 211 nodes. The average node has ~33 edges. The edge gate (≥1 system overlap) is correct.

A blog post about "HVAC CRM Pipeline" (`systems: ['crm-automation']`, `topics: ['crm-pipeline']`, `industries: ['hvac']`) connects to EVERY other node with `crm-automation` in its systems. The graph correctly scores these (industry overlap varies), and SmartRelatedSection shows top-3 per block.

**Verdict:** No change required at graph layer. Graph is healthy. The 7,065 edges are a feature, not a bug — they enable flexible query resolution. SmartRelatedSection handles filtering at render time.

**Authority Map — Slot Rules Already Defined:**

The Authority Map slot allocation is locked per Decision 3. No changes to the Authority Map structure are needed. The previous recommendation to add a `caseStudies` slot to the blog Authority Map is **overruled** by Decision 3.

---

#### B. Cross-Industry Blog Problem

**Current State:**
Blog posts with `industries: []` (empty industry array) cannot appear on industry detail pages. 15+ framework-level posts are invisible to all industry pages.

**Affected Posts (15+ posts):**

| Blog Slug | Systems | Topics | Industries |
|---|---|---|---|
| `lead-automation-framework-for-service-businesses` | `['ai-lead-handling']` | `['lead-management']` | `[]` |
| `google-business-profile-system-architecture` | `['local-seo-authority']` | `['google-business-profile']` | `[]` |
| `lead-response-time-for-service-businesses` | `['ai-lead-handling']` | `['lead-response-time']` | `[]` |
| `crm-pipeline-architecture-for-service-businesses` | `['crm-automation']` | `['crm-pipeline']` | `[]` |
| `lead-routing-models-for-service-companies` | `['ai-lead-handling']` | `['lead-routing']` | `[]` |
| `lead-qualification-framework-for-service-businesses` | `['ai-lead-handling']` | `['lead-qualification']` | `[]` |
| `missed-call-recovery-for-service-businesses` | `['ai-lead-handling']` | `['missed-calls']` | `[]` |
| `service-page-architecture-for-service-businesses` | `['smart-website-systems']` | `['service-page-architecture']` | `[]` |
| `local-visibility-framework-for-service-businesses` | `['local-seo-authority']` | `['local-visibility']` | `[]` |
| `client-reactivation-systems-for-service-businesses` | `['crm-automation']` | `['client-reactivation']` | `[]` |
| `multi-channel-lead-capture-system-for-service-businesses` | `['ai-lead-handling']` | `['lead-capture']` | `[]` |
| `customer-feedback-loop-framework-for-service-businesses` | `['reputation-review']` | `['customer-feedback']` | `[]` |
| `review-generation-system-for-local-businesses` | `['reputation-review']` | `['review-generation']` | `[]` |
| `what-is-a-systems-first-website-for-service-businesses` | `['smart-website-systems']` | `['systems-first-websites']` | `[]` |
| `how-smart-website-systems-work-for-local-businesses` | `['smart-website-systems']` | `['systems-first-websites']` | `[]` |

**Recommended Approach — Universal Flag:**
- Add `universal: true` flag to ContentGraphNode type
- Modify `getContentByIndustry()` to include universal nodes in results
- Clean, explicit, no metadata bloat
- Framework-level content IS universal — pretending it belongs to specific industries is a data integrity compromise

**Note:** This is a graph type change. Must validate all 26 validators after implementation.

---

#### C. Service Overlap Conflicts

**Conflict: `reputation-review-systems` vs `review-automation-system`**

| Attribute | Reputation & Review Systems | Review Automation System |
|---|---|---|
| Slug | `reputation-review-systems` | `review-automation-system` |
| System | `reputation-review` | `reputation-review` |
| Scope | Trust-building, reputation management, negative review response | Automation-specific: timing, channels, templates, governance |

**Problem:** Both map to `reputation-review` system. 16 blog posts connect to both with equal scoring.

**Recommendation:** Add `parent: 'reputation-review-systems'` to the `review-automation-system` node. The existing parent/child scoring boost naturally prioritises the parent for authority links.

**Note:** No other service overlaps found. The 21 services otherwise have clear, distinct domains.

---

### LAYER 4 — CONTENT PRECISION (LIGHT)

This layer addresses small content issues. No rewrites. Only precision fixes.

---

#### A. CTA Clarity

**Blog CTA Button Labels:**
After routing CTAs to specific service pages (Layer 1A), button labels should also be updated:

| System | Current Label (typical) | Recommended Label |
|---|---|---|
| `ai-lead-handling` | "Explore Lead Handling" | "Explore AI Lead Handling" |
| `crm-automation` | "Explore CRM Automation" | "Explore CRM Infrastructure" |
| `smart-website-systems` | "Explore Smart Websites" | "Explore Smart Website Systems" |
| `local-seo-authority` | "Explore Local SEO Services" | "Explore Local SEO & Authority" |
| `reputation-review` | "Explore Review Systems" | "Explore Reputation & Review Systems" |

**Feature CTA Inconsistency:**
- 6 of 7 features: "Start a Conversation" → `/contact`
- `inbox` feature: "See the Unified Inbox in Action" → `#how-it-works` (in-page scroll)

Fix: Make `inbox` CTA consistent → "Start a Conversation" → `/contact`

---

#### B. Section Messaging Alignment

**Homepage Industries Section:**
Currently shows 4 of 6 industry categories. Missing:
- ❌ Real Estate & Property Services
- ❌ Local Appointment Businesses

**Fix:** Add the 2 missing categories to homepage industries data in `src/domains/home/data/homepage.ts`.

**Feature Page Hero Stats:**
Some features use aspirational statistics that may not be substantiated:
- Reputation: "10x More Reviews", "4.8+ Avg Rating", "95% Response Rate"
- Voice Calls: "100% Call Answer Rate", "0 sec Wait Time", "95%+ Satisfaction"

**Recommendation:** Either add "typical" or "target" qualifier, or replace with verifiable metrics from case studies. Minor trust issue, not critical.

---

#### C. Content vs Intent Assessment

**No significant mismatches found.** Content consistently matches its declared intent:
- Blog posts educate (awareness/problem stage)
- Resources provide actionable frameworks (solution stage)
- Case studies prove outcomes (validation stage)
- Service pages describe offerings (conversion stage)

The only mismatch was the CTA destination (all blogs → `/services` hub), addressed in Layer 1A.

---

## 6. AUTHORITY & CONTENT GAP VALIDATION

### Report Data

**Source:** `reports/topic-authority-scores.json` (42 topics, average score 53)
**Source:** `reports/content-gaps.json` (207 nodes, 37 topic gaps)

### Authority Score Tiers

| Tier | Score Range | Topic Count | Topics |
|---|---|---|---|
| **Dominant** (100) | 100 | 3 | `lead-management`, `missed-calls`, `review-generation` |
| **Strong** (73-85) | 73-85 | 7 | `lead-response-time`, `follow-up`, `lead-routing`, `client-reactivation`, `no-show-reduction`, `crm-integration`, `local-visibility` |
| **Growing** (55-70) | 55-70 | 10 | `reputation-monitoring`, `crm-pipeline`, `pipeline-visibility`, `review-automation`, `lead-capture`, `website-infrastructure`, `systems-first-websites`, `booking-systems`, `conversion-optimization`, `emergency-handling` |
| **Weak** (40-55) | 40-55 | 8 | `booking-automation`, `lead-qualification`, `google-business-profile`, `revenue-tracking`, `local-seo`, `service-page-architecture`, `service-reminders`, `conversion-tracking` |
| **Gap** (5-35) | 5-35 | 14 | `customer-lifetime-value`, `crm-enabled-websites`, `authority-signals`, `customer-feedback`, `lifetime-value`, `negative-reviews`, `pipeline-architecture`, `service-pages`, `local-authority`, `feedback-loops`, `local-service-pages`, `negative-review-response`, `revenue-visibility`, `crm-visibility` |

### Phase 10 Stance on Content Gaps (Decision 8)

**Phase 10 creates ZERO new content.** All gap remediation is deferred to Phase 11.

The gaps are documented here for awareness and Phase 11 planning:

**Business-Critical Gaps (for Phase 11):**

| Topic | Score | Issue | Phase 11 Action |
|---|---|---|---|
| `crm-pipeline` | 70 | 4 blogs, 5 case studies, 0 resources | Create 1 resource |
| `local-authority` | 23 | 3 blogs, 1 case study, 0 resources | Create 1 resource |
| `booking-automation` | 55 | 7 case studies, 1 blog, 0 resources | Create 1 blog + 1 resource |

**Gaps to Ignore (topic overlap — consolidate in Phase 11):**

| Topic | Score | Consolidate Into |
|---|---|---|
| `crm-visibility` | 5 | `crm-pipeline` / `pipeline-visibility` |
| `lifetime-value` | 25 | `customer-lifetime-value` |
| `service-pages` | 25 | `service-page-architecture` |
| `local-service-pages` | 20 | `service-page-architecture` |
| `feedback-loops` | 20 | `customer-feedback` |
| `crm-enabled-websites` | 30 | `smart-website-systems` sub-topic |

### Topic Consolidation (Phase 11 — NOT Phase 10)

| Merge From | Merge Into | Reason |
|---|---|---|
| `lifetime-value` | `customer-lifetime-value` | Same concept |
| `service-pages` | `service-page-architecture` | Same concept |
| `local-service-pages` | `service-page-architecture` | Subset |
| `feedback-loops` | `customer-feedback` | Subset |
| `crm-visibility` | `pipeline-visibility` | Overlapping intent |

**Note:** Merging topics = updating `canonical.ts` + re-tagging affected content nodes. This is a Phase 11 governance task.

---

## 7. CONVERSION FLOW ANALYSIS

### Full Journey Map

```
AWARENESS                    EDUCATION                     PROOF                        CONVERSION
───────────                  ──────────                    ─────                        ──────────
Blog (79)          →         Resource (51)        →        Case Study (22)     →        Service (21)      →  /contact
  ↑                            ↑                            ↑                            ↑
  |                            |                            |                            |
Industry Detail (26) ─────→  Topic Hub (42) ──────→       System Hub (6)  ──────→     Feature (7) ────→  /contact
  ↑                                                                                     ↑
  |                                                                                     |
Industry Category (6)                                                                 Features Landing
  ↑
  |
Industries Landing
```

**Note:** The blog→resource→case-study journey is now served entirely by SmartRelatedSection (Decision 2) via the slot rules (Decision 3). JourneyNavigator's hardcoded funnel is removed (Decision 5).

### Friction Points (Post-Decision Analysis)

**Friction 1: Blog → Service (CRITICAL)**
- Reader finishes article → clicks CTA → lands on generic `/services` hub → bounces
- **Fix:** Layer 1A (blog CTA routing to specific service)

**Friction 2: About → Next Step (HIGH)**
- User reads about MindWP → only option is "Start a Conversation" (contact) → not ready → leaves
- **Fix:** Layer 2A (About page contextual links)

**Friction 3: FAQ → Action (HIGH)**
- User reads answer → answer mentions service but doesn't link → question resolved, no forward path
- **Fix:** Layer 2B (FAQ inline links)

**Friction 4: Feature → Service (MEDIUM)**
- User explores features → loops between features → no exit toward conversion
- **Fix:** Layer 1B (SmartRelatedSection on feature templates, Decision 7)

**Friction 5: Blog → Case Study (ADDRESSED BY DECISION 3 — NOT FIXING)**
- Blog about "Salon Booking Automation" cannot directly surface the matching case study
- **Decision 3 overrules this:** Blog slots = `resources` + `industries` only. No `caseStudies` slot.
- The user journey from blog to case study goes: blog → resource (via SmartRelatedSection) → case study (via resource's related section). This is by design — indirect, but intentional.

### Drop-off Points (Updated)

| Stage | Expected Next | Actual Next | Drop-off Risk | Fix |
|---|---|---|---|---|
| Blog CTA | Specific service | Generic `/services` hub | **HIGH** | Layer 1A |
| About page | Services or case studies | Only `/contact` | **HIGH** | Layer 2A |
| FAQ answer | Relevant service | Nothing | **HIGH** | Layer 2B |
| Feature explore | Relevant service | Other features | **MEDIUM** | Layer 1B + Decision 7 |
| Resource CTA | Service or contact | `/contact` (correct) | **LOW** | None needed |
| Case Study CTA | `/contact` | `/contact` (correct) | **LOW** | None needed |
| Service CTA | `/contact` | `/contact` (correct) | **LOW** | None needed |

---

## 8. PRIORITY MATRIX

### CRITICAL (Must fix first — highest conversion impact)

| # | Task | Impact | Batch |
|---|---|---|---|
| C1 | Fix all 79 blog CTA `buttonUrl` values to specific service paths | Fixes primary conversion leak | Batch 1 |
| C2 | Remove `/conversation` page and all references (Decision 6) | Eliminates dead conversion path | Batch 0 |
| C3 | Remove JourneyNavigator from all 3 templates (Decision 5) | Eliminates dual linking system | Batch 0 |

### HIGH (Fix after critical — removes dead-ends, completes architecture)

| # | Task | Impact | Batch |
|---|---|---|---|
| H1 | Add SmartRelatedSection to feature page templates (Decision 7) | Closes feature→service gap | Batch 1 |
| H2 | Add SmartRelatedSection to service page templates (Decision 2) | Ensures complete graph coverage | Batch 1 |
| H3 | Add SmartRelatedSection to industry-detail page templates (Decision 2) | Ensures complete graph coverage | Batch 1 |
| H4 | Add internal links to About page | Prevents About page bounce | Batch 2 |
| H5 | Add internal links to FAQ answers | Captures high-intent visitors | Batch 2 |

### MEDIUM (Improves graph and structure)

| # | Task | Impact | Batch |
|---|---|---|---|
| M1 | Fix cross-industry blog visibility (universal flag) | 15+ framework posts visible on industry pages | Batch 3 |
| M2 | Add `parent` to review-automation-system node | Resolves service overlap conflict | Batch 3 |
| M3 | Add 2 missing industry categories to homepage | Full industry representation | Batch 3 |
| M4 | Fix inbox feature CTA inconsistency | Consistent conversion pattern | Batch 3 |
| M5 | Verify SmartRelatedSection limits (Decision 4: max 2 sections, max 3 items) | Enforce link limits | Batch 1 |

### LOW (Content precision)

| # | Task | Impact | Batch |
|---|---|---|---|
| L1 | Update blog CTA button labels to match target service | Clearer user expectations | Batch 4 |
| L2 | Qualify feature hero stats (aspirational numbers) | Minor trust improvement | Batch 4 |
| L3 | Add trust reinforcement to Contact page | Reduces cold-visit bounce | Batch 4 |

---

## 9. EXECUTION STRATEGY

### Order of Execution

```
PHASE 10 EXECUTION ORDER

BATCH 0: SYSTEM CLEANUP (NEW — Decisions 1, 5, 6)
├── C2: Remove /conversation (Decision 6)
│   ├── Change 3 production href references to /contact
│   ├── Remove from staticPages.ts + sitemap.ts
│   ├── Delete 3 files (page, screen, form)
│   ├── Update 4 JSDoc examples
│   ├── Update 5 dev tool references
│   └── Add redirect in next.config.mjs
├── C3: Remove JourneyNavigator from templates (Decision 5)
│   ├── Remove from BlogPostTemplate.tsx (line 507)
│   ├── Remove from CaseStudyTemplate.tsx (line 494)
│   └── Remove from ResourcePageTemplate.tsx (line 517)
├── Mark internal linking engine as deprecated (Decision 1)
│   └── Add @deprecated JSDoc to engine.ts entry point
│   └── NOTE: Do NOT delete files — dev tools still import them
└── Validate: build passes, all 26 validators green

BATCH 1: CRITICAL ROUTING + SMART RELATED SECTION COVERAGE (Layers 1 + Decisions 2, 4, 7)
├── C1: Blog CTA routing fix (79 files)
│   ├── Change each buttonUrl from '/services' to specific service path
│   └── Use System→Service mapping table (Layer 1A)
├── H1: Add SmartRelatedSection to feature templates (Decision 7)
├── H2: Add SmartRelatedSection to service templates (Decision 2)
├── H3: Add SmartRelatedSection to industry-detail templates (Decision 2)
├── M5: Verify/enforce link limits (Decision 4: max 2 sections, 3 items)
└── Validate: build passes, all 26 validators green, spot-check SmartRelatedSection renders

BATCH 2: DEAD-END ELIMINATION (Layer 2)
├── H4: About page contextual links (1 file)
├── H5: FAQ internal links (1 file)
├── L3: Contact page trust links (1 file)
└── Validate: build passes, manual link verification

BATCH 3: GRAPH CORRECTIONS (Layer 3)
├── M1: Universal flag for cross-industry posts (graph type + resolver)
├── M2: Parent/child for review services (1 node)
├── M3: Homepage industries (1 data file)
├── M4: Inbox CTA fix (1 data file)
└── Validate: graph-report regenerated, validators green

BATCH 4: CONTENT PRECISION (Layer 4)
├── L1: Blog CTA button label updates (79 files)
├── L2: Feature hero stat qualifiers (2 files)
└── Validate: full build, all validators, visual spot-check
```

### Batch Strategy

Each batch:
1. **Make changes** within the batch scope only
2. **Run full build** (`npx next build`) — must pass with exit code 0
3. **Run all validators** — must all pass (26/26)
4. **Commit** — one commit per batch with descriptive message
5. **Only proceed** to next batch after current batch validates

### Validation After Each Batch

| Batch | Validation | Expected Result |
|---|---|---|
| Batch 0 | `npx next build`, grep for `/conversation` | 0 production references, redirect works, JourneyNavigator removed from templates, build passes |
| Batch 1 | `npx next build`, validate all blog CTAs point to `/services/*` specific paths | 79/79 correct, SmartRelatedSection on all content-type templates |
| Batch 2 | `npx next build`, manual link verification | About/FAQ/Contact pages have onward links |
| Batch 3 | `npx next build`, regenerate `graph-report.json` | Graph passes, universal posts visible on industry pages |
| Batch 4 | `npx next build`, full validator run | All 26 validators pass, 0 drift |

### Rollback Safety

- **Git commit after each batch** — rollback = `git revert` the batch commit
- **Batch 0 is safe to revert** — re-adds JourneyNavigator and /conversation (no data loss)
- **Batch 1 is safe to revert** — blog CTAs revert to `/services` (worse but functional)
- **Batch 3 modifies graph types** — if reverted, Batch 4 still works independently
- **No database or external service changes** — entire system is static files and build-time generation

---

## 10. RISK ANALYSIS

### What Can Break

| Risk | Likelihood | Severity | Mitigation |
|---|---|---|---|
| Blog CTA URL typo → broken link on build | Low | High | Static generation with `dynamicParams = false` will fail on dead links |
| Removing `/conversation` breaks bookmarks | Low | Medium | Add redirect in `next.config.mjs`: `/conversation` → `/contact` |
| Removing JourneyNavigator reduces "what next" guidance | Low | Low | SmartRelatedSection provides the same guidance via graph resolution |
| SmartRelatedSection on new templates renders empty | Medium | Medium | Verify graph has edges for feature→service, service→service, industry→service |
| Graph type change (universal flag) breaks validators | Medium | High | Run all 26 validators after change; canonical validation catches type errors |
| Link limits (Decision 4) remove previously visible items | Low | Low | ReviewSmartRelatedSection output before/after to confirm quality |

### What Must Not Change

| Constraint | Reason |
|---|---|
| Primary CTA config (`/contact`) | Locked in `src/config/primaryCta.ts` — all funnels depend on this |
| Graph scoring formula | Locked at `(system × 3) + (topic × 2) + (industry × 1)` |
| Content Graph canonical identifiers | `CANONICAL_SYSTEMS`, `CANONICAL_TOPICS`, `CANONICAL_INDUSTRIES` |
| Section schemas per content type | Governed by `section-intelligence.ts` |
| Design system tokens and visual output | Phase 7+8 completed; no visual changes in Phase 10 |
| Slot rules (Decision 3) | Locked — no cross-type expansion |
| Link limits (Decision 4) | Locked — max 2 sections, max 3 items |

### New Risks from Decisions (Post-Deprecation)

| Risk | Description | Mitigation |
|---|---|---|
| Removing injection engine reduces inline text links | The injection engine was the only system that could place links INSIDE paragraph text. SmartRelatedSection renders as card blocks at section boundaries, not inline. | Accepted trade-off. Inline linking within structured sections was never working in production anyway. Manual inline links on static pages (Layer 2) compensate for the most important cases. |
| SmartRelatedSection must cover ALL content-type templates | After removing JourneyNavigator and deprecating the injection engine, SmartRelatedSection is the ONLY linking mechanism. If any template lacks it, that page type has zero graph-driven links. | Batch 1 explicitly adds SmartRelatedSection to feature, service, and industry-detail templates. Verification step confirms all 7 content types are covered. |

### What Needs Careful Handling

| Area | Why |
|---|---|
| Multi-system blog CTA resolution | 6 posts have 2 systems — use the mapping table in Layer 1A |
| Large batch update (79 blog files) | Use automated script, not manual edits. Verify each change before committing. |
| About/FAQ manual links | Use natural anchor text, max 1-2 links per paragraph |
| SmartRelatedSection slot coverage | After adding to new templates, verify the graph actually has edges for those content types |

---

## 11. SYSTEM SYNC REQUIREMENT

After Phase 10 execution completes, these system documents **must be updated** to reflect the new architecture:

| Document | What to Update |
|---|---|
| `Mindwp-Docs/SYSTEM-TRUTH.md` | Remove internal linking engine as active system. Add SmartRelatedSection as sole linking mechanism. Document Decision 1-8. |
| `Mindwp-Docs/content-architecture/CONTENT-GOVERNANCE.md` | Update linking rules to reflect slot rules (Decision 3) and link limits (Decision 4). Remove journey funnel references. |
| `Mindwp-Docs/content-architecture/CONTENT-GRAPH-SYSTEM.md` | Document universal flag (if implemented in Batch 3). Update Authority Map documentation to reflect locked slot rules. |
| `Mindwp-Docs/DEV-DASHBOARD.md` | Mark internal linking engine as deprecated. Update active system inventory. |
| `Mindwp-Docs/system/DESIGN-SYSTEM-CONTROL-LAYER.md` | Remove JourneyNavigator from component inventory. Mark GraphAwareSidebar as unused. |
| `Mindwp-Docs/SYSTEM-INDEX.md` | Update system component list to reflect Phase 10 changes. |

**Timing:** System sync happens AFTER Batch 4 completes and validates, not during execution batches.

---

## 12. FINAL PHASE SUMMARY

### What Phase 10 Will Achieve

Phase 10 transforms MindWP from a system with broken routing and dual linking architectures into a clean, single-system conversion machine:

1. **Single linking architecture** — SmartRelatedSection is the only graph-driven linking system. Internal linking engine deprecated. JourneyNavigator removed.
2. **Every blog post routes to the correct service** — 79 CTA destinations fixed from generic hub to specific service pages
3. **No dead-end pages** — About, FAQ, and Contact pages gain contextual internal links
4. **One conversion path** — `/conversation` removed, all conversion routes through `/contact`
5. **Features connect to services via graph** — SmartRelatedSection added to feature templates
6. **Complete SmartRelatedSection coverage** — present on ALL content-type templates
7. **Locked link architecture** — slot rules (Decision 3) and limits (Decision 4) enforced
8. **Cross-industry content visible** — universal flag (Batch 3) makes framework posts visible on industry pages
9. **Service overlap resolved** — parent/child hierarchy for reputation services

### System State: Before vs After

| Metric | Before Phase 10 | After Phase 10 |
|---|---|---|
| Linking systems | 3 (injection engine + SmartRelatedSection + JourneyNavigator) | 1 (SmartRelatedSection only) |
| Blog CTA accuracy | 0/79 (all → `/services`) | 79/79 (each → specific service) |
| Dead-end pages | 3 (About, FAQ, Contact) | 0 |
| Conversion paths | 2 (`/contact` + `/conversation`) | 1 (`/contact`) |
| Feature→Service links | 1/7 (only voicecalls) | 7/7 (via SmartRelatedSection) |
| SmartRelatedSection coverage | 3/7 content types | 7/7 content types |
| Max related links per page | 5 (engine) + 3 (SmartRelated) + 1 (Journey) = 9 | 6 (2 sections × 3 items) |
| Cross-industry blog visibility | 0 industry pages | All industry pages |
| Service node conflicts | 1 (reputation overlap) | 0 |

### What Remains for Future Phases

- **Phase 11 — Content Expansion:** 5-8 high-impact content pieces for Gap-level topics (Decision 8 defers all content creation)
- **Phase 11 — Topic Consolidation:** Merge redundant topics in canonical list
- **Phase 11 — Topic/System Hub Editorial:** Add editorial introductions to 48 auto-generated cluster pages
- **Phase 11 — Dev Tool Migration:** Update `src/lib/dev/` tools to consume graph data directly instead of importing from deprecated internal linking engine
- **Phase 12 — Analytics Integration:** Connect conversion tracking to verify Phase 10 routing improvements
- **Phase 12 — OG Image Generation:** Dynamic Open Graph images for blog, resource, case study pages

---

## 13. SEO SYSTEM (GLOBAL)

Every content node in the MindWP system MUST carry structured SEO metadata. This is not optional. Nodes without valid SEO data are system violations.

### Required Fields Per Node

| Field | Type | Required | Description |
|---|---|---|---|
| `seoTitle` | string | ✅ Yes | Page `<title>` tag. Intent-clear, keyword-present, no generic phrasing. |
| `metaDescription` | string | ✅ Yes | `<meta name="description">`. Problem + outcome framing. 140–160 chars. |
| `focusKeywords` | string[] | ✅ Yes | 3–6 keywords. Must align with node's system + intent classification. |

### Title Rules

| Rule | Constraint | Example (Good) | Example (Bad) |
|---|---|---|---|
| Must include primary system keyword | Title must contain the system or capability being described | "AI Lead Handling for HVAC Companies" | "How We Help Businesses" |
| Must signal intent | Reader must know what they'll learn or solve from the title | "Why Salons Lose Calls During Service Hours" | "Phone Systems for Businesses" |
| No generic or brand-first titles | Brand name may appear but must NOT be the lead | "CRM Pipeline Architecture for Service Businesses" | "MindWP — CRM Solutions" |
| Max 60 characters for SERP display | Truncation-safe. Core meaning in first 50 chars. | "Missed Call Recovery for Auto Repair Shops" (43 chars) | "A Complete Guide to Understanding How Missed Call Recovery..." (65+ chars) |

### Description Rules

| Rule | Constraint |
|---|---|
| Must contain problem + outcome | First half = pain/gap. Second half = what the reader gains. |
| 140–160 characters | Below 140 = truncated appearance in SERP. Above 160 = Google rewrites it. |
| No keyword stuffing | Natural language. One primary keyword, one secondary max. |
| Must match page content | Description that doesn't match content triggers pogo-sticking and ranking loss. |

**Template:**
```
[Problem statement]. [What this content delivers / outcome].
```

**Example:**
```
"Most HVAC companies lose emergency leads after hours. Learn how automated call handling captures every enquiry and routes it instantly."
```

### Keyword Rules

| Rule | Constraint |
|---|---|
| 3–6 keywords per node | Fewer than 3 = weak signal. More than 6 = diluted focus. |
| Must align with `systems[]` | At least 1 keyword must match or derive from the node's primary system. |
| Must align with content intent | PROBLEM nodes: pain keywords. SYSTEM nodes: how-it-works keywords. FRAMEWORK nodes: model/strategy keywords. |
| No overlap between nodes on same topic | Two blog posts targeting identical keyword sets = cannibalisation. Each node must have unique primary keyword. |
| Long-tail preferred for blog/resource | Blog: "missed call recovery for HVAC companies" not "missed calls." Resource: "CRM pipeline automation guide" not "CRM." |

### SEO Field Validation

These fields will be enforced by a validator (to be created or extended):

| Validation | Rule |
|---|---|
| `seoTitle` present and non-empty | Required on all 7 content types |
| `seoTitle` length ≤ 60 chars | Warn at 55+, error at 65+ |
| `metaDescription` present and non-empty | Required on all 7 content types |
| `metaDescription` length 140–160 chars | Warn outside range, error below 100 or above 180 |
| `focusKeywords` array length 3–6 | Error if < 3 or > 6 |
| `focusKeywords[0]` appears in `seoTitle` | Primary keyword must be in title |
| No duplicate `focusKeywords[0]` across nodes | Cannibalisation check |

---

## 14. SCHEMA ARCHITECTURE (CENTRALIZED)

All structured data (JSON-LD schema) is generated **centrally from node metadata** — never hardcoded inside components.

### Core Principles

| Principle | Rule |
|---|---|
| No inline schema | Components must NOT contain `<script type="application/ld+json">` blocks. |
| No hardcoded schema | Schema values must NOT be string literals inside components. |
| Single source of truth | Schema is generated from the content node's metadata (title, slug, description, type, dates, author). |
| Build-time generation | Schema is resolved at build time during static generation, not at runtime. |

### Schema Type Mapping

| Content Type | Schema Type | Key Properties |
|---|---|---|
| Blog | `BlogPosting` | `headline`, `description`, `datePublished`, `dateModified`, `author`, `image`, `publisher`, `mainEntityOfPage` |
| Resource (ACTIONABLE) | `HowTo` | `name`, `description`, `step[]`, `totalTime`, `tool[]` |
| Resource (EDUCATIONAL) | `Article` | `headline`, `description`, `datePublished`, `author`, `publisher` |
| Resource (EXAMPLE) | `Article` | `headline`, `description`, `datePublished`, `author`, `about` |
| Service | `Service` | `name`, `description`, `provider`, `areaServed`, `serviceType`, `offers` |
| Case Study | `Article` + `Review` | `headline`, `description`, `datePublished`, `author`, `reviewBody`, `itemReviewed` |
| Feature | `SoftwareApplication` or `Service` | `name`, `description`, `applicationCategory`, `operatingSystem` |
| Industry Detail | `WebPage` + `Service` | `name`, `description`, `about`, `areaServed` |

### Schema Data Sources

All schema properties MUST derive from existing node metadata:

| Schema Property | Source Field |
|---|---|
| `headline` / `name` | `seoTitle` or `title` |
| `description` | `metaDescription` |
| `datePublished` | `publishedDate` from content metadata |
| `dateModified` | `updatedDate` from content metadata (or file mtime) |
| `author` | Global author config (`src/config/site.ts` or equivalent) |
| `publisher` | Global publisher config |
| `image` | OG image path (Phase 12) or default per content type |
| `mainEntityOfPage` | Canonical URL derived from slug + content type |

### Schema Architecture Location

| Concern | Location | Status |
|---|---|---|
| Schema generator functions | `src/lib/seo/schema.ts` (to be created or verified) | Define |
| Schema injection into `<head>` | Layout-level or page-level metadata export | Define |
| Schema validation | Build-time validator or test | Define |
| Schema config (author, publisher, org) | `src/config/site.ts` or `src/config/schema.ts` | Define |

### Schema Validation Rules

| Rule | Enforcement |
|---|---|
| Every content page must emit exactly 1 primary schema block | Build-time validator |
| Schema `@type` must match content type mapping above | Validator check |
| No schema with empty required fields (`name`, `description`) | Validator check |
| No duplicate `mainEntityOfPage` URLs | Cannibalisation check |
| Schema must pass Google Rich Results Test structure | Manual spot-check per content type |

---

## 15. CONTENT MAPPING TABLES

These tables are the authoritative reference for all content node routing, classification, and system alignment. They incorporate the Layer 1 routing analysis.

### BLOG TABLE (75 posts)

| # | Slug | Type | Primary System | Industries | CTA Target | CTA Target Type |
|---|------|------|---------------|-----------|------------|----------------|
| 1 | `why-hvac-companies-lose-leads-after-hours` | PROBLEM | ai-lead-handling | hvac | `/services/ai-lead-handling` | service |
| 2 | `why-hvac-missed-calls-lose-after-hours-revenue` | PROBLEM | ai-lead-handling | hvac | `/services/missed-call-recovery-system` | service |
| 3 | `why-auto-repair-missed-calls-lose-booked-work` | PROBLEM | ai-lead-handling | automotive | `/services/missed-call-recovery-system` | service |
| 4 | `why-auto-repair-shops-lose-phone-leads` | PROBLEM | ai-lead-handling | automotive | `/services/ai-lead-handling` | service |
| 5 | `why-roofing-companies-lose-leads-during-storm-season` | PROBLEM | ai-lead-handling | roofing | `/services/ai-lead-handling` | service |
| 6 | `why-roofing-missed-calls-cost-emergency-jobs` | PROBLEM | ai-lead-handling | roofing | `/services/missed-call-recovery-system` | service |
| 7 | `why-salons-lose-calls-during-service-hours` | PROBLEM | ai-lead-handling | salon | `/services/missed-call-recovery-system` | service |
| 8 | `why-salons-need-lead-handling-systems` | PROBLEM | ai-lead-handling | salon | `/services/ai-lead-handling` | service |
| 9 | `why-service-business-websites-fail-to-convert` | PROBLEM | smart-website-systems | — | `/services/smart-website-systems` | service |
| 10 | `hvac-emergency-call-handling-mistakes` | PROBLEM | ai-lead-handling | hvac | `/services/ai-lead-handling` | service |
| 11 | `roofing-estimate-follow-up-delays` | PROBLEM | ai-lead-handling | roofing | `/services/crm-infrastructure-implementation` | service |
| 12 | `negative-reviews-for-auto-repair-shops` | PROBLEM | reputation-review | automotive | `/services/reputation-review-systems` | service |
| 13 | `responding-to-negative-reviews-systematically` | PROBLEM | reputation-review | — | `/services/reputation-review-systems` | service |
| 14 | `missed-call-recovery-for-service-businesses` | PROBLEM | ai-lead-handling | — | `/services/missed-call-recovery-system` | service |
| 15 | `lead-response-time-for-service-businesses` | PROBLEM | ai-lead-handling | — | `/services/ai-lead-handling` | service |
| 16 | `reducing-salon-no-shows-with-automation` | PROBLEM | crm-automation | salon | `/services/crm-infrastructure-implementation` | service |
| 17 | `why-booking-systems-need-website-infrastructure` | PROBLEM | smart-website-systems | — | `/services/smart-website-systems` | service |
| 18 | `local-seo-vs-website-optimization` | PROBLEM | local-seo-authority | — | `/services/local-seo-authority` | service |
| 19 | `customer-feedback-loop-for-plumbing-companies` | PROBLEM | reputation-review | plumbing | `/services/reputation-review-systems` | service |
| 20 | `future-crm-visibility-for-hvac-companies` | PROBLEM | crm-automation | hvac | `/services/crm-infrastructure-implementation` | service |
| 21 | `future-local-seo-after-google-business-profile-automation` | PROBLEM | local-seo-authority | plumbing | `/services/local-seo-authority` | service |
| 22 | `how-ai-search-changes-local-business-visibility` | PROBLEM | local-seo-authority | — | `/services/local-seo-authority` | service |
| 23 | `tracking-customer-lifetime-value-using-crm` | PROBLEM | crm-automation | — | `/services/crm-infrastructure-implementation` | service |
| 24 | `tracking-salon-client-lifetime-value` | PROBLEM | crm-automation | salon | `/services/crm-infrastructure-implementation` | service |
| 25 | `revenue-visibility-for-roofing-companies` | PROBLEM | crm-automation | roofing | `/services/crm-infrastructure-implementation` | service |
| 26 | `sales-pipeline-visibility-for-hvac-companies` | PROBLEM | crm-automation | hvac | `/services/crm-infrastructure-implementation` | service |
| 27 | `building-revenue-visibility-through-crm-tracking` | PROBLEM | crm-automation | — | `/services/crm-infrastructure-implementation` | service |
| 28 | `conversion-tracking-for-hvac-companies` | PROBLEM | smart-website-systems | hvac | `/services/smart-website-systems` | service |
| 29 | `conversion-tracking-for-service-businesses-explained` | PROBLEM | smart-website-systems | — | `/services/smart-website-systems` | service |
| 30 | `ai-reception-for-automotive-shops` | SYSTEM | ai-lead-handling | automotive | `/resources/auto-repair-lead-handling-example` | resource |
| 31 | `automotive-crm-pipeline-for-repair-jobs` | SYSTEM | crm-automation | automotive | `/resources/automotive-crm-pipeline-for-repair-jobs` | resource |
| 32 | `automotive-review-generation-system` | SYSTEM | reputation-review | automotive | `/resources/automotive-review-generation-system` | resource |
| 33 | `automotive-service-reminders-explained` | SYSTEM | crm-automation | automotive | `/resources/automotive-service-reminder-automation` | resource |
| 34 | `autonomous-booking-systems-for-salons` | SYSTEM | smart-website-systems | salon | `/resources/booking-systems-inside-website-infrastructure` | resource |
| 35 | `booking-systems-for-salons-explained` | SYSTEM | smart-website-systems | salon | `/resources/booking-systems-inside-website-infrastructure` | resource |
| 36 | `client-reactivation-for-salons` | SYSTEM | crm-automation | salon | `/resources/client-reactivation-systems` | resource |
| 37 | `client-reactivation-systems-for-service-businesses` | SYSTEM | crm-automation | — | `/resources/client-reactivation-systems` | resource |
| 38 | `hvac-crm-pipeline-for-service-companies` | SYSTEM | crm-automation | hvac | `/resources/hvac-crm-pipeline-structure` | resource |
| 39 | `roofing-crm-pipeline-for-estimates` | SYSTEM | crm-automation | roofing | `/resources/roofing-crm-pipeline-structure` | resource |
| 40 | `hvac-review-generation-framework` | SYSTEM | reputation-review | hvac | `/resources/hvac-review-generation-framework` | resource |
| 41 | `review-automation-for-hvac-companies` | SYSTEM | reputation-review | hvac | `/resources/hvac-review-generation-framework` | resource |
| 42 | `review-automation-for-roofing-companies` | SYSTEM | reputation-review | roofing | `/resources/roofing-review-generation-system` | resource |
| 43 | `review-automation-for-salons` | SYSTEM | reputation-review | salon | `/resources/salon-review-generation-framework` | resource |
| 44 | `salon-review-generation-framework` | SYSTEM | reputation-review | salon | `/resources/salon-review-generation-framework` | resource |
| 45 | `roofing-review-generation-system` | SYSTEM | reputation-review | roofing | `/resources/roofing-review-generation-system` | resource |
| 46 | `review-generation-system-for-local-businesses` | SYSTEM | reputation-review | — | `/resources/review-generation-system` | resource |
| 47 | `reputation-monitoring-systems-for-service-businesses` | SYSTEM | reputation-review | — | `/resources/reputation-monitoring-systems` | resource |
| 48 | `lead-routing-for-hvac-companies` | SYSTEM | ai-lead-handling | hvac | `/resources/hvac-lead-handling-example` | resource |
| 49 | `lead-qualification-for-roofing-companies` | SYSTEM | ai-lead-handling | roofing | `/resources/roofing-lead-handling-example` | resource |
| 50 | `multi-channel-lead-capture-for-salons` | SYSTEM | ai-lead-handling | salon | `/resources/salon-lead-handling-example` | resource |
| 51 | `how-review-automation-improves-local-authority` | SYSTEM | reputation-review | — | `/resources/how-review-automation-improves-local-authority` | resource |
| 52 | `google-business-profile-for-hvac-companies` | SYSTEM | local-seo-authority | hvac | `/resources/google-business-profile-system-architecture` | resource |
| 53 | `how-smart-website-systems-work-for-local-businesses` | SYSTEM | smart-website-systems | — | `/resources/how-smart-website-systems-work` | resource |
| 54 | `smart-website-systems-for-roofing-companies` | SYSTEM | smart-website-systems | roofing | `/resources/service-page-architecture-that-converts` | resource |
| 55 | `systems-first-website-for-hvac-companies` | SYSTEM | smart-website-systems | hvac | `/resources/what-is-a-systems-first-website` | resource |
| 56 | `website-crm-integration-for-salons` | SYSTEM | smart-website-systems | salon | `/resources/website-crm-integration-explained` | resource |
| 57 | `website-crm-integration-for-service-businesses` | SYSTEM | smart-website-systems | — | `/resources/website-crm-integration-explained` | resource |
| 58 | `lead-automation-framework-for-service-businesses` | FRAMEWORK | ai-lead-handling | — | `/resources/lead-automation-framework` | resource |
| 59 | `lead-qualification-framework-for-service-businesses` | FRAMEWORK | ai-lead-handling | — | `/resources/lead-qualification-framework` | resource |
| 60 | `lead-routing-models-for-service-companies` | FRAMEWORK | ai-lead-handling | — | `/resources/lead-routing-models-for-service-companies` | resource |
| 61 | `multi-channel-lead-capture-system-for-service-businesses` | FRAMEWORK | ai-lead-handling | — | `/resources/multi-channel-lead-capture-systems` | resource |
| 62 | `service-business-follow-up-automation` | FRAMEWORK | ai-lead-handling | — | `/resources/service-business-follow-up-automation-guide` | resource |
| 63 | `crm-pipeline-architecture-for-service-businesses` | FRAMEWORK | crm-automation | — | `/resources/crm-pipeline-architecture` | resource |
| 64 | `sales-pipeline-visibility-framework` | FRAMEWORK | crm-automation | — | `/resources/sales-pipeline-visibility-framework` | resource |
| 65 | `customer-feedback-loop-framework-for-service-businesses` | FRAMEWORK | reputation-review | — | `/resources/customer-feedback-loop-framework` | resource |
| 66 | `google-business-profile-system-architecture` | FRAMEWORK | local-seo-authority | — | `/resources/google-business-profile-system-architecture` | resource |
| 67 | `authority-signals-for-local-search` | FRAMEWORK | local-seo-authority | — | `/resources/authority-signals-for-local-search` | resource |
| 68 | `authority-signals-for-salons` | FRAMEWORK | local-seo-authority | salon | `/resources/authority-signals-for-local-search` | resource |
| 69 | `local-seo-for-roofing-companies-explained` | FRAMEWORK | local-seo-authority | roofing | `/industries/home-services/roofing-companies` | industry |
| 70 | `local-visibility-framework-for-service-businesses` | FRAMEWORK | local-seo-authority | — | `/resources/local-visibility-framework` | resource |
| 71 | `local-service-page-architecture-for-local-businesses` | FRAMEWORK | local-seo-authority | — | `/resources/local-service-page-architecture` | resource |
| 72 | `local-service-page-architecture-for-roofing-companies` | FRAMEWORK | local-seo-authority | roofing | `/resources/local-service-page-architecture` | resource |
| 73 | `service-page-architecture-for-service-businesses` | FRAMEWORK | smart-website-systems | — | `/resources/service-page-architecture-that-converts` | resource |
| 74 | `website-design-that-supports-crm-systems` | FRAMEWORK | smart-website-systems | — | `/resources/designing-websites-that-support-crm-systems` | resource |
| 75 | `what-is-a-systems-first-website-for-service-businesses` | FRAMEWORK | smart-website-systems | — | `/resources/what-is-a-systems-first-website` | resource |

### RESOURCE TABLE (52 resources)

| # | Slug | Type | Primary System | Industries | CTA Target | CTA Target Type |
|---|------|------|---------------|-----------|------------|----------------|
| 1 | `auto-reply-funnel` | ACTIONABLE | ai-lead-handling | — | `/services/ai-lead-handling` | service |
| 2 | `automotive-crm-pipeline-for-repair-jobs` | ACTIONABLE | crm-automation | automotive | `/services/crm-infrastructure-implementation` | service |
| 3 | `automotive-review-generation-system` | ACTIONABLE | reputation-review | automotive | `/services/reputation-review-systems` | service |
| 4 | `automotive-service-reminder-automation` | ACTIONABLE | crm-automation | automotive | `/services/crm-infrastructure-implementation` | service |
| 5 | `client-reactivation-systems` | ACTIONABLE | crm-automation | — | `/services/crm-infrastructure-implementation` | service |
| 6 | `crm-pipeline-automation` | ACTIONABLE | revenue-growth | — | `/services/crm-infrastructure-implementation` | service |
| 7 | `google-business-profile-system-architecture` | ACTIONABLE | local-seo-authority | — | `/services/local-seo-authority` | service |
| 8 | `hvac-crm-pipeline-structure` | ACTIONABLE | crm-automation | hvac | `/services/crm-infrastructure-implementation` | service |
| 9 | `hvac-emergency-call-handling-system` | ACTIONABLE | ai-lead-handling | hvac | `/services/ai-lead-handling` | service |
| 10 | `hvac-review-generation-framework` | ACTIONABLE | reputation-review | hvac | `/services/reputation-review-systems` | service |
| 11 | `lead-qualification-framework` | ACTIONABLE | ai-lead-handling | — | `/services/ai-lead-handling` | service |
| 12 | `missed-call-recovery-system` | ACTIONABLE | ai-lead-handling | — | `/services/missed-call-recovery-system` | service |
| 13 | `reducing-salon-no-shows-with-automation` | ACTIONABLE | crm-automation | salon | `/services/crm-infrastructure-implementation` | service |
| 14 | `responding-to-negative-reviews-systematically` | ACTIONABLE | reputation-review | — | `/services/reputation-review-systems` | service |
| 15 | `roofing-crm-pipeline-structure` | ACTIONABLE | crm-automation | roofing | `/services/crm-infrastructure-implementation` | service |
| 16 | `service-business-follow-up-automation-guide` | ACTIONABLE | ai-lead-handling | — | `/services/ai-lead-handling` | service |
| 17 | `service-page-architecture-that-converts` | ACTIONABLE | smart-website-systems | — | `/services/smart-website-systems` | service |
| 18 | `local-service-page-architecture` | ACTIONABLE | local-seo-authority | — | `/services/local-seo-authority` | service |
| 19 | `review-generation-system` | ACTIONABLE | reputation-review | — | `/services/reputation-review-systems` | service |
| 20 | `customer-feedback-loop-framework` | ACTIONABLE | reputation-review | — | `/services/reputation-review-systems` | service |
| 21 | `authority-signals-for-local-search` | EDUCATIONAL | local-seo-authority | — | `/services/local-seo-authority` | service |
| 22 | `booking-systems-inside-website-infrastructure` | EDUCATIONAL | smart-website-systems | — | `/services/smart-website-systems` | service |
| 23 | `building-revenue-visibility-through-crm-tracking` | EDUCATIONAL | crm-automation | — | `/services/crm-infrastructure-implementation` | service |
| 24 | `conversion-architecture-for-service-websites` | EDUCATIONAL | smart-website-systems | — | `/services/smart-website-systems` | service |
| 25 | `conversion-tracking-for-service-businesses` | EDUCATIONAL | smart-website-systems | — | `/services/smart-website-systems` | service |
| 26 | `crm-pipeline-architecture` | EDUCATIONAL | crm-automation | — | `/services/crm-infrastructure-implementation` | service |
| 27 | `designing-websites-that-support-crm-systems` | EDUCATIONAL | smart-website-systems | — | `/services/smart-website-systems` | service |
| 28 | `how-review-automation-improves-local-authority` | EDUCATIONAL | reputation-review | — | `/services/reputation-review-systems` | service |
| 29 | `how-smart-website-systems-work` | EDUCATIONAL | smart-website-systems | — | `/services/smart-website-systems` | service |
| 30 | `lead-automation-framework` | EDUCATIONAL | ai-lead-handling | — | `/services/ai-lead-handling` | service |
| 31 | `lead-response-time-framework` | EDUCATIONAL | ai-lead-handling | — | `/services/ai-lead-handling` | service |
| 32 | `lead-routing-models-for-service-companies` | EDUCATIONAL | ai-lead-handling | — | `/services/ai-lead-handling` | service |
| 33 | `local-seo-vs-website-optimization` | EDUCATIONAL | local-seo-authority | — | `/services/local-seo-authority` | service |
| 34 | `local-visibility-framework` | EDUCATIONAL | local-seo-authority | — | `/services/local-seo-authority` | service |
| 35 | `multi-channel-lead-capture-systems` | EDUCATIONAL | ai-lead-handling | — | `/services/ai-lead-handling` | service |
| 36 | `reputation-monitoring-systems` | EDUCATIONAL | reputation-review | — | `/services/reputation-review-systems` | service |
| 37 | `sales-pipeline-visibility-framework` | EDUCATIONAL | crm-automation | — | `/services/crm-infrastructure-implementation` | service |
| 38 | `tracking-customer-lifetime-value-using-crm` | EDUCATIONAL | crm-automation | — | `/services/crm-infrastructure-implementation` | service |
| 39 | `website-crm-integration-explained` | EDUCATIONAL | smart-website-systems | — | `/services/smart-website-systems` | service |
| 40 | `what-is-a-systems-first-website` | EDUCATIONAL | smart-website-systems | — | `/services/smart-website-systems` | service |
| 41 | `auto-repair-lead-handling-example` | EXAMPLE | ai-lead-handling | automotive | `/case-studies/auto-repair-missed-call-recovery` | case-study |
| 42 | `hvac-lead-handling-example` | EXAMPLE | ai-lead-handling | hvac | `/case-studies/hvac-emergency-lead-routing` | case-study |
| 43 | `roofing-lead-handling-example` | EXAMPLE | ai-lead-handling | roofing | `/case-studies/roofing-estimate-follow-up-automation` | case-study |
| 44 | `salon-lead-handling-example` | EXAMPLE | ai-lead-handling | salon | `/case-studies/salon-booking-automation` | case-study |
| 45 | `missed-call-recovery-for-auto-repair` | EXAMPLE | ai-lead-handling | automotive | `/case-studies/auto-repair-missed-call-recovery` | case-study |
| 46 | `missed-call-recovery-for-hvac` | EXAMPLE | ai-lead-handling | hvac | `/case-studies/hvac-seasonal-lead-surge-handling` | case-study |
| 47 | `missed-call-recovery-for-roofing` | EXAMPLE | ai-lead-handling | roofing | `/case-studies/storm-season-lead-handling-system` | case-study |
| 48 | `missed-call-recovery-for-salons` | EXAMPLE | ai-lead-handling | salon | `/case-studies/salon-booking-automation` | case-study |
| 49 | `roofing-estimate-follow-up-workflow` | EXAMPLE | ai-lead-handling | roofing | `/case-studies/roofing-estimate-follow-up-automation` | case-study |
| 50 | `roofing-review-generation-system` | EXAMPLE | reputation-review | roofing | `/case-studies/local-authority-system-impact` | case-study |
| 51 | `salon-review-generation-framework` | EXAMPLE | reputation-review | salon | `/case-studies/salon-review-generation-automation` | case-study |
| 52 | `tracking-salon-client-lifetime-value` | EXAMPLE | crm-automation | salon | `/case-studies/salon-no-show-reduction-system` | case-study |

### SERVICE TABLE (21 services)

| # | Slug | Primary System | Role | Linked Features |
|---|------|---------------|------|----------------|
| 1 | `ai-lead-handling` | ai-lead-handling | core | aichat, voicecalls |
| 2 | `missed-call-recovery-system` | ai-lead-handling | core | voicecalls |
| 3 | `crm-infrastructure-implementation` | crm-automation | core | crm |
| 4 | `lead-reactivation-system` | crm-automation | supporting | crm |
| 5 | `smart-website-systems` | smart-website-systems | core | — |
| 6 | `booking-scheduling-system` | smart-website-systems | core | calendars |
| 7 | `local-seo-authority` | local-seo-authority | core | — |
| 8 | `reputation-review-systems` | reputation-review | core | reputation |
| 9 | `review-automation-system` | reputation-review | supporting (child of reputation-review-systems) | reputation |
| 10 | `growth-revenue-systems` | revenue-growth | core | — |
| 11 | `conversion-funnel-system` | smart-website-systems | supporting | — |
| 12 | `marketing-automation-setup` | crm-automation | supporting | workflows |
| 13 | `unified-communication-system` | ai-lead-handling | supporting | inbox |
| 14 | `funnel-landing-page-development` | smart-website-systems | supporting | — |
| 15 | `website-redesign-system-rebuild` | smart-website-systems | supporting | — |
| 16 | `system-migration-platform-consolidation` | smart-website-systems | supporting | — |
| 17 | `wordpress-development` | smart-website-systems | supporting (builder) | — |
| 18 | `elementor` | smart-website-systems | supporting (builder) | — |
| 19 | `divi5` | smart-website-systems | supporting (builder) | — |
| 20 | `bricks-builder` | smart-website-systems | supporting (builder) | — |
| 21 | `woocommerce` | smart-website-systems | supporting (e-commerce) | — |

### INDUSTRY TABLE (26 industry detail pages)

| # | Slug (relative to /industries/) | Category | Supported Systems |
|---|---|---|---|
| 1 | `home-services/hvac-companies` | Home Services | ai-lead-handling, crm-automation, smart-website-systems, local-seo-authority, reputation-review |
| 2 | `home-services/roofing-companies` | Home Services | ai-lead-handling, crm-automation, smart-website-systems, local-seo-authority, reputation-review |
| 3 | `home-services/plumbing-companies` | Home Services | ai-lead-handling, crm-automation, smart-website-systems, local-seo-authority, reputation-review |
| 4 | `home-services/electrical-companies` | Home Services | ai-lead-handling, crm-automation, smart-website-systems, local-seo-authority |
| 5 | `home-services/landscaping-companies` | Home Services | ai-lead-handling, crm-automation, smart-website-systems, local-seo-authority |
| 6 | `beauty-personal-care/hair-salons` | Beauty & Personal Care | ai-lead-handling, crm-automation, smart-website-systems, reputation-review |
| 7 | `beauty-personal-care/nail-salons` | Beauty & Personal Care | ai-lead-handling, crm-automation, smart-website-systems, reputation-review |
| 8 | `beauty-personal-care/aesthetic-cosmetic-clinics` | Beauty & Personal Care | ai-lead-handling, crm-automation, smart-website-systems, reputation-review |
| 9 | `beauty-personal-care/small-med-spas` | Beauty & Personal Care | ai-lead-handling, crm-automation, smart-website-systems, reputation-review |
| 10 | `beauty-personal-care/lash-lift-and-extensions` | Beauty & Personal Care | ai-lead-handling, crm-automation, smart-website-systems, reputation-review |
| 11 | `automotive-services/auto-repair` | Automotive | ai-lead-handling, crm-automation, smart-website-systems, reputation-review |
| 12 | `automotive-services/body-shops` | Automotive | ai-lead-handling, crm-automation, smart-website-systems, reputation-review |
| 13 | `automotive-services/car-detailing` | Automotive | ai-lead-handling, crm-automation, smart-website-systems, reputation-review |
| 14 | `automotive-services/mobile-mechanics` | Automotive | ai-lead-handling, crm-automation, smart-website-systems |
| 15 | `legal-professional-services/small-law-firms` | Legal & Professional | ai-lead-handling, crm-automation, smart-website-systems |
| 16 | `legal-professional-services/accounting-firms` | Legal & Professional | ai-lead-handling, crm-automation, smart-website-systems |
| 17 | `legal-professional-services/consultants` | Legal & Professional | ai-lead-handling, crm-automation, smart-website-systems |
| 18 | `real-estate-property-services/realtors` | Real Estate & Property | ai-lead-handling, crm-automation, smart-website-systems |
| 19 | `real-estate-property-services/property-managers` | Real Estate & Property | ai-lead-handling, crm-automation, smart-website-systems |
| 20 | `real-estate-property-services/mortgage-brokers` | Real Estate & Property | ai-lead-handling, crm-automation, smart-website-systems |
| 21 | `real-estate-property-services/home-inspectors` | Real Estate & Property | ai-lead-handling, crm-automation, smart-website-systems |
| 22 | `local-appointment-businesses/dental-clinics` | Local Appointment | ai-lead-handling, crm-automation, smart-website-systems, reputation-review |
| 23 | `local-appointment-businesses/driving-schools` | Local Appointment | ai-lead-handling, crm-automation, smart-website-systems |
| 24 | `local-appointment-businesses/repair-shops` | Local Appointment | ai-lead-handling, crm-automation, smart-website-systems |
| 25 | `local-appointment-businesses/small-private-clinics` | Local Appointment | ai-lead-handling, crm-automation, smart-website-systems, reputation-review |
| 26 | `local-appointment-businesses/tattoo-studios` | Local Appointment | ai-lead-handling, crm-automation, smart-website-systems |

### CASE STUDY TABLE (22 case studies)

| # | Slug | Primary System | Industry | Inbound From (resource EXAMPLE → case study) |
|---|------|---------------|----------|----------------------------------------------|
| 1 | `auto-repair-missed-call-recovery` | ai-lead-handling | auto-repair | `auto-repair-lead-handling-example`, `missed-call-recovery-for-auto-repair` |
| 2 | `hvac-emergency-lead-routing` | ai-lead-handling | hvac | `hvac-lead-handling-example`, `hvac-emergency-call-handling-system` |
| 3 | `hvac-seasonal-lead-surge-handling` | ai-lead-handling | hvac | `missed-call-recovery-for-hvac` |
| 4 | `storm-season-lead-handling-system` | ai-lead-handling | roofing | `missed-call-recovery-for-roofing` |
| 5 | `roofing-estimate-follow-up-automation` | revenue-growth | roofing | `roofing-lead-handling-example`, `roofing-estimate-follow-up-workflow` |
| 6 | `salon-booking-automation` | smart-website-systems | hair-salon | `salon-lead-handling-example`, `missed-call-recovery-for-salons` |
| 7 | `salon-review-generation-automation` | reputation-review | hair-salon | `salon-review-generation-framework` |
| 8 | `salon-no-show-reduction-system` | crm-automation | hair-salon | `tracking-salon-client-lifetime-value` |
| 9 | `local-authority-system-impact` | local-seo-authority | roofing | `roofing-review-generation-system` |
| 10 | `crm-pipeline-visibility-transformation` | revenue-growth | roofing | — |
| 11 | `hvac-maintenance-plan-reactivation` | revenue-growth | hvac | — |
| 12 | `smart-website-infrastructure-implementation` | smart-website-systems | hvac | — |
| 13 | `roofing-website-rebuild-with-crm` | smart-website-systems | roofing | — |
| 14 | `appointment-business-booking-automation` | smart-website-systems | dental-clinic | — |
| 15 | `appointment-reminder-no-show-reduction` | revenue-growth | dental-clinic | — |
| 16 | `automotive-service-reminder-automation` | revenue-growth | auto-repair | — |
| 17 | `law-firm-client-intake-automation` | revenue-growth | law-firm | — |
| 18 | `law-firm-consultation-booking-system` | smart-website-systems | law-firm | — |
| 19 | `real-estate-inquiry-routing` | ai-lead-handling | realtor | — |
| 20 | `realtor-lead-follow-up-automation` | revenue-growth | realtor | — |
| 21 | `beauty-salon-online-booking-local-seo-manchester-all-sections` | local-seo-authority | hair-salon | — |
| 22 | `beauty-salon-online-booking-local-seo-manchester-custom` | local-seo-authority | hair-salon | — |

---

## 16. SYSTEM GOVERNANCE RULES

These governance rules apply to ALL content nodes in the MindWP system. They are enforced at content creation time, validated at build time, and audited during phase reviews.

### Rule 1 — System Assignment

| Constraint | Rule |
|---|---|
| Every node MUST have exactly 1 primary system | The first entry in `systems[]` is the primary system. |
| Maximum 2 systems per node | Nodes with 3+ systems are too broad. Split or re-tag. |
| Systems must come from `CANONICAL_SYSTEMS` | No ad-hoc system names. Currently: `ai-lead-handling`, `crm-automation`, `smart-website-systems`, `local-seo-authority`, `reputation-review`, `revenue-growth`. |

**Current violations (to audit):**

| Node | Systems Count | Issue |
|---|---|---|
| All blog + resource nodes | Verified ≤ 2 | ✅ Compliant |

### Rule 2 — Topic Specificity

| Constraint | Rule |
|---|---|
| Topics must be specific and actionable | No generic tags like `business`, `growth`, `automation`. |
| Each topic must map to a real user search intent | If nobody would search for that topic, it doesn't belong. |
| Topics must come from `CANONICAL_TOPICS` | Currently 42 canonical topics. No ad-hoc topics. |
| Max 2 topics per node | More than 2 = topic dilution. |

### Rule 3 — Industry Assignment

| Constraint | Rule |
|---|---|
| Industries are OPTIONAL for blog and resource nodes | Cross-industry (framework) content legitimately has `industries: []`. |
| Industries are REQUIRED for industry detail pages | An industry page without an industry tag is structurally broken. |
| Industries are REQUIRED for case studies | Every case study must have a declared industry for proof routing. |
| Industries must come from `CANONICAL_INDUSTRIES` | Currently 28 canonical industries. No ad-hoc industry names. |

### Rule 4 — Feature→Service Alignment

| Constraint | Rule |
|---|---|
| Every feature must map to exactly 1 primary service | Enforced via graph edge rule `feature→service: supports`. |
| Features CANNOT be orphans | A feature with no service link is a dead-end (Decision 7). |
| Feature slot in Authority Map = `services` only (Decision 3) | Features route to services, never to blog/resource/industry. |

**Feature→Service Map (locked):**

| Feature | Primary Service |
|---|---|
| `aichat` | `ai-lead-handling` |
| `calendars` | `booking-scheduling-system` |
| `crm` | `crm-infrastructure-implementation` |
| `inbox` | `unified-communication-system` |
| `reputation` | `reputation-review-systems` |
| `voicecalls` | `ai-lead-handling` |
| `workflows` | `marketing-automation-setup` |

### Rule 5 — CTA Routing Integrity

| Constraint | Rule |
|---|---|
| Blog CTA must match content classification | PROBLEM → service. SYSTEM → resource. FRAMEWORK → resource or industry. |
| Resource CTA must match content classification | ACTIONABLE → service. EDUCATIONAL → service. EXAMPLE → case study. |
| No generic `/services` as blog CTA | Every blog must route to a specific service path. |
| No resource→resource CTAs | Resources must route forward (to service or case study), never laterally. |
| No circular paths | A→B→A routing is a system violation. |
| All CTA target paths must be valid routes | Build-time validation: target path must resolve to an existing page. |

### Rule 6 — Content Classification

| Constraint | Rule |
|---|---|
| Every blog MUST be classified as PROBLEM, SYSTEM, or FRAMEWORK | No unclassified blogs. |
| Every resource MUST be classified as ACTIONABLE, EDUCATIONAL, or EXAMPLE | No unclassified resources. |
| Classification determines CTA routing | Classification is not decorative — it governs the funnel. |
| Classification must be stored in node metadata | Not in comments, not in file names — in the data structure. |

---

## 17. NEW FINDINGS (LIVE SYSTEM NOTES)

This section is updated during audit and execution. Each entry is a discovered issue, pattern, or insight that affects Phase 10 or future phases.

**Format per entry:**

```
### Finding [N] — [Short Title]
- **Impact:** [HIGH / MEDIUM / LOW]
- **Affected Nodes:** [list of slugs or content types]
- **Recommended Action:** [what to do]
- **Phase:** [Phase 10 / Phase 11 / Future]
```

---

### Finding 1 — All Blog CTAs Are Generic `/services`

- **Impact:** HIGH
- **Affected Nodes:** All 75 blog posts
- **Recommended Action:** Replace with intent-classified routing (PROBLEM→service, SYSTEM→resource, FRAMEWORK→resource/industry) per Content Mapping Tables (Section 15)
- **Phase:** Phase 10 — Batch 1

### Finding 2 — All Resource CTAs Route to `/contact` (Skip Funnel)

- **Impact:** MEDIUM
- **Affected Nodes:** All 52 resource pages
- **Recommended Action:** ACTIONABLE + EDUCATIONAL → specific service. EXAMPLE → specific case study. Per Content Mapping Tables (Section 15)
- **Phase:** Phase 10 — Batch 1

### Finding 3 — Resource EXAMPLE Type Has No Case Study for Salon CLV

- **Impact:** LOW
- **Affected Nodes:** `tracking-salon-client-lifetime-value` (resource)
- **Recommended Action:** Routes to `salon-no-show-reduction-system` case study (closest CRM match). Weak transition. Consider routing to `/services/crm-infrastructure-implementation` instead if case study match is insufficient.
- **Phase:** Phase 10 — Batch 1 (routing decision) / Phase 11 (create matching case study)

### Finding 4 — One Blog Has No Resource Match

- **Impact:** LOW
- **Affected Nodes:** `local-seo-for-roofing-companies-explained` (blog, FRAMEWORK)
- **Recommended Action:** Routes to `/industries/home-services/roofing-companies` (industry page). Valid but weaker transition. If a roofing SEO resource is created in Phase 11, update routing.
- **Phase:** Phase 10 — Batch 1 (current routing) / Phase 11 (resource creation)

### Finding 5 — SEO Metadata Not Yet Audited

- **Impact:** MEDIUM
- **Affected Nodes:** All 211 content nodes
- **Recommended Action:** Audit all nodes for `seoTitle`, `metaDescription`, `focusKeywords` compliance per Section 13 rules. Add validator.
- **Phase:** Phase 10 — Layer 1.5 (Graph Integrity Audit)

### Finding 6 — Schema Not Yet Centralized

- **Impact:** MEDIUM
- **Affected Nodes:** All content types
- **Recommended Action:** Verify current schema implementation. If inline, migrate to centralized architecture per Section 14. If absent, create.
- **Phase:** Phase 10 — Batch 3 or Phase 11

---

**END OF PHASE 10 EXECUTION PLAN**

**Status:** LOCKED ARCHITECTURE — READY FOR EXECUTION
**Document Type:** System Architecture + Governance Document
**Governing Decisions:** 8 locked decisions (Section 0)
**Governing Rules:** 6 governance rules (Section 16)
**Content Tables:** 4 complete mapping tables (Section 15)
**Execution Order:** Batch 0 → 1 → 2 → 3 → 4
**Next Step:** Owner approval → Begin Batch 0 execution

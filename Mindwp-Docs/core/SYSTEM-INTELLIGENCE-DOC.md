# System Intelligence Manual

> Single source of truth for all MindWP internal systems.
> Updated: 2026-04-07
>
> Conversion behavior is governed by **SYSTEM-CONTRACT.md**. This document covers tooling, dashboards, scripts, and reports only.

---

## 1. Overview

MindWP has three layers of internal tooling:

1. **Dashboards** — Visual interfaces that show content health, authority scores, conversion readiness, and optimization priorities.
2. **Scripts** — Command-line tools that generate reports, validate rules, and analyze content.
3. **Reports** — JSON and Markdown files that store analysis results. Dashboards read from these reports.

Everything connects through the **Content Graph** — a map of all 211 content pages, their relationships, topics, and authority scores.

**How it works:**
- Scripts analyze content and write results to `/reports/`.
- Dashboards read those reports and display insights.
- Validators check that everything stays consistent.

---

## 2. Dashboards

### Content Dashboard

- **URL:** `/content-dashboard`
- **File:** `src/app/content-dashboard/page.tsx`
- **Access:** Development only (`NODE_ENV=development`)
- **Purpose:** Shows the big picture of your content system — topic authority scores, content gaps, graph health, and where to create new content.

**What it shows:**
- Overview panel (total nodes, topics, average authority score)
- Topic authority distribution (Dominant / Strong / Growing / Weak / Gap)
- Content gaps by topic, resource-industry, and industry-case-study
- Graph health summary (orphans, weak nodes, strong nodes)
- Authority graph visualization (SVG if generated)

**Data sources:**
- `reports/topic-authority-scores.json`
- `reports/content-gaps.json`
- `reports/authority-map.json`

**How to use:**
1. Run `npm run dev` to start the dev server.
2. Go to `http://localhost:3000/content-dashboard`.
3. Review topic scores — anything below "Growing" needs more content.
4. Check content gaps — these are topics missing blog posts, resources, or case studies.
5. Review graph health — orphan nodes need linking.

---

### Authority Dashboard

- **URL:** `/dev/authority-dashboard`
- **File:** `src/app/dev/authority-dashboard/page.tsx`
- **Access:** Development only (force-dynamic)
- **Purpose:** Deep optimization dashboard. Shows conversion scores, link health, priority queue for fixes, bridge insights (content vs. conversion), and page inspector.

**What it shows:**
- Authority summary (node counts, average scores, top/bottom performers)
- Topic clusters with authority levels
- Orphan nodes (pages with no inbound links)
- Link health analysis (issues per page, fix suggestions)
- Conversion intelligence (per-page conversion scores, CTA coverage, revenue opportunities)
- Conversion warnings (pages missing CTAs, service links, or journey steps)
- Priority queue (ranked list of pages to fix, ordered by impact)
- Bridge insights (cross-dashboard analysis: high authority + low conversion, weak topics + high conversion)
- Fix history (logged fixes with score deltas)
- Page inspector (deep-dive into any single page)

**Panels:**
| Panel | File | Purpose |
|-------|------|---------|
| AuthoritySummaryPanel | `panels/AuthoritySummaryPanel.tsx` | Overview stats |
| TopicClustersPanel | `panels/TopicClustersPanel.tsx` | Topics grouped by authority level |
| OrphanNodesPanel | `panels/OrphanNodesPanel.tsx` | Unlinked pages |
| AuthorityNodesPanel | `panels/AuthorityNodesPanel.tsx` | All nodes ranked |
| LinkHealthPanel | `panels/LinkHealthPanel.tsx` | Link quality issues |
| ConversionIntelligencePanel | `panels/ConversionIntelligencePanel.tsx` | Conversion scores |
| ConversionWarningsPanel | `panels/ConversionWarningsPanel.tsx` | Missing conversion elements |
| PriorityQueuePanel | `panels/PriorityQueuePanel.tsx` | Fix priority ranking |
| BridgeInsightsPanel | `panels/BridgeInsightsPanel.tsx` | Content ↔ Conversion bridge |
| FixHistoryPanel | `panels/FixHistoryPanel.tsx` | Logged fix history |
| PageInspector | `panels/PageInspector.tsx` | Single-page deep inspection |

**Data sources:**
- `src/lib/dev/authorityAnalyzer.ts` → reads `reports/topic-authority-scores.json`, `reports/content-gaps.json`
- `src/lib/dev/conversionAnalyzer.ts` → reads content graph + authority map
- `src/lib/dev/linkHealthAnalyzer.ts` → reads content graph
- `src/lib/dev/conversionPriorityEngine.ts` → combines conversion + link health
- `src/lib/dev/dashboardBridge.ts` → bridges content + conversion data
- `src/lib/dev/fixInsightsAnalyzer.ts` → reads `reports/fix-log.json`

**How to use:**
1. Run `npm run dev` to start the dev server.
2. Go to `http://localhost:3000/dev/authority-dashboard`.
3. Start at the priority queue — it tells you which pages to fix first.
4. Use "Bridge Insights" to find pages with high authority but low conversion (quick wins).
5. Use the page inspector to drill into any specific page.
6. After making fixes, append them to `reports/fix-log.json`.

---

## 3. Scripts

### Generation Scripts

These create data that dashboards and validators use.

| Script | Command | Purpose | Output |
|--------|---------|---------|--------|
| generate-authority-map | `npx tsx scripts/generate-authority-map.ts` | Builds the authority relationship map — how services, resources, industries, case studies, and blogs connect | `src/lib/authority/generated/authorityMap.ts` |
| generate-topic-authority-scores | `npx tsx scripts/generate-topic-authority-scores.ts` | Scores each topic based on how much content supports it | `reports/topic-authority-scores.json`, `reports/topic-authority-scores.md` |
| generate-content-registries | `node scripts/generate-content-registries.mjs` | Creates slug→component lookup maps for blog, resources, and case studies | `src/domains/*/registry.ts` |
| generate-global-inventory | `node scripts/generate-global-inventory.mjs` | Generates a catalog of all shared components | `Mindwp-Docs/core/GLOBAL-COMPONENTS-CATALOG.md` |
| generate-component-docs | `node scripts/generators/generate-component-docs.cjs` | Generates component documentation | `Mindwp-Docs/` (doc files) |
| generate-resolver-cache | `npx tsx scripts/generate-resolver-cache.ts` | Pre-computes content graph resolver cache for faster lookups | Cache files |
| check-generated | `node scripts/core/check-generated.mjs` | Freshness guard — checks if generated files are up to date | Exit code 1 if stale |

### Analysis Scripts

These analyze content quality and produce reports.

| Script | Command | Purpose | Output |
|--------|---------|---------|--------|
| generate-content-intelligence | `npx tsx scripts/analyzers/generate-content-intelligence.ts` | Detects content gaps, authority weaknesses, and generates suggestions | `reports/content-intelligence.json` |
| generate-content-gaps | `npx tsx scripts/analyzers/generate-content-gaps.ts` | Finds missing content per topic, system, and industry | `reports/content-gaps.json`, `reports/content-gaps.md` |
| score-content | `node scripts/analyzers/score-content.mjs` | Scores each page on hype words, banned phrases, word count, CTA presence | `reports/content-score.json` |
| detect-page-priorities | `node scripts/analyzers/detect-page-priorities.mjs` | Tags each page as high/medium/low priority based on domain type | `reports/page-priorities.json` |
| audit-content-consistency | `node scripts/analyzers/audit-content-consistency.mjs` | Scans for CTA inconsistencies, banned vocabulary, hype density | `reports/content-consistency-audit.json` |
| export-reports | `node scripts/analyzers/export-reports.mjs` | Exports client and readable reports (use --type=client or --type=readable) | client-report.json + readable-audit-report.json in /reports/ |
| test-editing-stability | `node scripts/analyzers/test-editing-stability.mjs` | Tests that edit operations are safe and reversible | Console output |

### Validation Scripts

These enforce rules. Run individually or all at once with `validate-all`.

| Script | Command | Checks | Fails Build? |
|--------|---------|--------|-------------|
| validate-all | `node scripts/core/validate-all.mjs` | Runs ALL validators below, aggregates results, and writes `reports/validation-results.json` | Yes (if any blocking validator fails) |
| validate-blog | `node scripts/validators/validate-blog.mjs` | Blog domain structure (required fields, section format) | Yes |
| validate-resources | `node scripts/validators/validate-resources.mjs` | Resource domain structure | Yes |
| validate-case-study-structure | `node scripts/validators/validate-case-study-structure.mjs` | Case study structure | Yes |
| validate-service-structure | `node scripts/validators/validate-service-structure.mjs` | Service page structure | Yes |
| validate-feature-structure | `node scripts/validators/validate-feature-structure.mjs` | Feature page structure | Yes |
| validate-home-structure | `node scripts/validators/validate-home-structure.mjs` | Homepage structure | Yes |
| validate-industry-structure | `node scripts/validators/validate-industry-structure.mjs` | Industry page structure | Yes |
| validate-design-system | `node scripts/validators/validate-design-system.cjs` | Design system tokens and naming | Yes |
| validate-docs | `node scripts/validators/validate-docs.mjs` | Documentation formatting, required sections | Yes |
| validate-graph | `npx tsx scripts/validators/validate-graph.ts` | Content graph integrity (edges, orphans) | Yes |
| validate-metadata | `node scripts/validators/validate-metadata.mjs` | Rule-based metadata field validation | Yes |
| validate-metadata-completeness | `node scripts/validators/validate-metadata-completeness.mjs` | Missing or incomplete metadata fields | Yes |
| validate-cta | `node scripts/validators/validate-cta.mjs` | CTA labels, hrefs, placement rules | Yes |
| validate-vocabulary | `node scripts/validators/validate-vocabulary.mjs` | Banned phrases and anti-hype vocabulary | Yes |
| validate-structure | `node scripts/validators/validate-structure.mjs` | Heading structure, tone rules, CTA placement | Yes |
| validate-internal-links | `npx tsx scripts/validators/validate-internal-links.ts` | Max 2 sections × 3 items per page, no duplicates, no repeated anchors | Yes |
| validate-conversion | `npx tsx scripts/validators/validate-conversion.ts` | Missing CTA, no service link, intent routing check | **No** (warnings only) |
| validate-system-docs | `node scripts/validators/validate-system-docs.mjs` | Checks this doc stays aligned with actual systems | **No** (warnings only) |

| validate-checklist | `node scripts/validators/validate-checklist.mjs` | Checks fix checklist engine and integrations | **No** (warnings only) |
| validate-fix-log | `node scripts/validators/validate-fix-log.mjs` | Checks fix history shape and append-only contract expectations | **No** (warnings only) |


### Utility Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| report-content-readiness | `node scripts/analyzers/report-content-readiness.mjs` | Summarizes content readiness across domains |
| image-generate | `npx tsx scripts/generators/image-generate.ts` | CLI for generating images (Unsplash, Pexels, Pixabay) |
| image-inspect | `npx tsx scripts/analyzers/image-inspect.ts` | Inspects image metadata and generates image reports |
| inspect-graph | `npx tsx scripts/analyzers/inspect-graph.ts` | Dev runner for graph structure inspection |
| run-eslint | `node scripts/runners/run-eslint.mjs` | ESLint runner (used by validate-all) |
| run-next | `node scripts/runners/run-next.mjs` | Next.js dev runner (use --filter for filtered stderr mode) |
| add-fix-entry | `node scripts/dev/add-fix-entry.mjs` | CLI for appending fix entries to fix-log.json |
| add-session-entry | `node scripts/dev/add-session-entry.mjs` | CLI for adding optimization session entries to session-log.json |

### Shared Libraries

| File | Purpose |
|------|---------|
| `scripts/lib/validator-helpers.mjs` | 28 shared helper functions used by all validators |

---

## 4. Reports

All reports live in `/reports/`. This directory contains both generated snapshots and append-only histories.

### topic-authority-scores.json

- **Generated by:** `npx tsx scripts/generate-topic-authority-scores.ts`
- **Used by:** Content Dashboard, Authority Dashboard
- **Contains:** Per-topic scores with blog/resource/industry/service/case-study counts, authority level (Dominant/Strong/Growing/Weak/Gap)
- **Purpose:** Shows which topics have deep content coverage and which need more.

### topic-authority-scores.md

- **Generated by:** `npx tsx scripts/generate-topic-authority-scores.ts`
- **Used by:** Human review
- **Contains:** Markdown version of the topic authority scores
- **Purpose:** Readable summary for documentation or sharing.

### content-gaps.json

- **Generated by:** `npx tsx scripts/analyzers/generate-content-gaps.ts`
- **Used by:** Content Dashboard
- **Contains:** Topics with missing content types (blogs, resources, case studies), suggestions for what to create
- **Purpose:** Identifies exactly where content is missing and what to create.

### content-gaps.md

- **Generated by:** Derived from `content-gaps.json`
- **Used by:** Human review
- **Contains:** Markdown version of content gaps
- **Purpose:** Readable gap analysis for planning sessions.

### readable-audit-report.json

- **Generated by:** `npm run analyze:readable-report`
- **Used by:** Human review, planning
- **Contains:** Structured audit report with summary, issues, opportunities, recommendations, priority actions
- **Purpose:** Human-readable version of the full conversion audit — no technical scores, just plain language.

### readable-audit-report.md

- **Generated by:** `npm run analyze:readable-report`
- **Used by:** Human review
- **Contains:** Markdown-formatted readable audit report
- **Purpose:** Print-ready audit summary for stakeholder review.

---

## 5. Intelligence Engines

These are the code modules that power the Authority Dashboard. They live in `src/lib/dev/`.

| Engine | File | Purpose |
|--------|------|---------|
| Authority Analyzer | `src/lib/dev/authorityAnalyzer.ts` | Reads precomputed reports, provides summary stats, top nodes, orphans, clusters, weak topics |
| Conversion Analyzer | `src/lib/dev/conversionAnalyzer.ts` | Calculates per-page conversion scores based on CTA presence, service links, funnel depth, authority |
| Link Health Analyzer | `src/lib/dev/linkHealthAnalyzer.ts` | Checks internal link quality per page, generates fix suggestions |
| Conversion Priority Engine | `src/lib/dev/conversionPriorityEngine.ts` | Ranks pages by fix priority — combines conversion score, link health, authority |
| Conversion Signals | `src/lib/dev/conversionSignals.ts` | Single source of truth for detecting CTA, service link, and journey step presence |
| Conversion Issues | `src/lib/dev/conversionIssues.ts` | Normalized issue types (NO_CTA, NO_SERVICE_LINK, NO_JOURNEY) used by all systems |
| Conversion Page Inspector | `src/lib/dev/conversionPageInspector.ts` | Deep inspection of a single page — aggregates signals, scores, health, suggestions |
| Conversion Warnings Aggregator | `src/lib/dev/conversionWarningsAggregator.ts` | Summarizes conversion signals across ALL pages into dashboard overview |
| Dashboard Bridge | `src/lib/dev/dashboardBridge.ts` | Connects Content Dashboard (SEO) with Authority Dashboard (conversion) — finds quick wins |
| Fix Insights Analyzer | `src/lib/dev/fixInsightsAnalyzer.ts` | Reads fix-log.json, derives fix patterns, avg improvement, most-fixed pages |
| Fix Simulation Engine | `src/lib/dev/fixSimulationEngine.ts` | Predicts conversion score changes for hypothetical fixes before you make them |
| Guided Flow Engine | `src/lib/dev/guidedFlowEngine.ts` | Generates step-by-step optimization guides for improving any page |
| Link Suggestion Engine | `src/lib/dev/linkSuggestionEngine.ts` | Suggests missing internal links based on graph relationships |
| UI Suggestions Engine | `src/lib/dev/uiSuggestionsEngine.ts` | Generates human-readable, actionable UI improvement suggestions (context-aware per page type) |
| Report Generator | `src/lib/dev/reportGenerator.ts` | Builds client-facing reports combining all analysis data |
| Readable Report Generator | `src/lib/dev/readableReportGenerator.ts` | Transforms internal scores into human-readable audit reports with issues, opportunities, and priority actions |
| Readable Report Formatter | `src/lib/dev/readableReportFormatter.ts` | Converts ReadableAuditReport to clean Markdown output |
| Fix Learning Engine | `src/lib/dev/fixLearningEngine.ts` | Learns from fix-log.json history — tracks fix performance, finds best fixes per issue |
| Auto Fix Recommendation | `src/lib/dev/autoFixRecommendationEngine.ts` | Suggests fixes based on learning engine + default rules, with confidence scoring |
| Context Scoring Config | `src/lib/dev/contextScoringConfig.ts` | Per-page-type weights for conversion scoring (CTA, SERVICE_LINK, JOURNEY, PROOF weights per content type) |
| Content Rewrite Engine | `src/lib/dev/contentRewriteEngine.ts` | Generates structured rewrite suggestions (issues, structure changes, sample text) — does NOT auto-rewrite |
| Fix Checklist Engine | `src/lib/dev/fixChecklistEngine.ts` | Consolidated fix checklist per page combining suggestions, simulation, rewrite, and recommendations |
| Session Tracker | `src/lib/dev/sessionTracker.ts` | Reads session-log.json to provide session history summary for the dashboard |

---

## 6. Configuration

| Config | File | Purpose |
|--------|------|---------|
| Primary CTA | `src/config/primaryCta.ts` | Global CTA label, type, and href ("Start a Conversation" → /contact) |
| Section Intelligence | `src/config/section-intelligence.ts` | Defines expected sections, purpose, and writing style for every domain type |
| UI Intelligence | `src/config/ui-intelligence.ts` | Config for graph-powered UI components (related sections, journey nav, cluster layout) |

---

## 7. Workflow

Step-by-step guide for using the system:

### Daily Check

1. Run `npm run dev` and open the **Content Dashboard** (`/content-dashboard`).
2. Check topic authority scores — look for "Weak" or "Gap" topics.
3. Review content gaps — note which topics need new blog posts, resources, or case studies.
4. Switch to the **Authority Dashboard** (`/dev/authority-dashboard`).
5. Check the **Priority Queue** — it tells you which pages to fix first based on impact.
6. Review **Bridge Insights** — find pages with high authority but low conversion (quick wins).

### Fixing a Page

1. Find the page in the Priority Queue or Bridge Insights.
2. Use the **Page Inspector** to see exactly what's wrong (missing CTA, no service link, etc.).
3. Read the **Guided Flow** suggestions for step-by-step improvement instructions.
4. Make the content fix.
5. Log the fix with `node scripts/dev/add-fix-entry.mjs`.
6. Run `node scripts/core/validate-all.mjs` to verify nothing is broken.

### Creating New Content

1. Check **Content Gaps** to see what's needed.
2. Check **Topic Authority Scores** to prioritize high-value topics.
3. Create the content following the domain structure rules.
4. Run `npx tsx scripts/generators/generate-authority-map.ts` to regenerate the authority map.
5. Run `npx tsx scripts/generators/generate-topic-authority-scores.ts` to update scores.
6. Run `node scripts/core/validate-all.mjs` to validate.

### Running All Validators

```bash
node scripts/core/validate-all.mjs
```

This runs all 26 validators and shows pass/fail for each. Use `--report-json` for machine-readable output.

### Regenerating All Reports

```bash
npx tsx scripts/generators/generate-authority-map.ts
npx tsx scripts/generators/generate-topic-authority-scores.ts
npx tsx scripts/analyzers/generate-content-gaps.ts
```

---

## 8. Page Tracking

Every content page has a **slug** — a unique identifier like `/blog/lead-generation` or `/services/local-seo-authority`.

**How slugs connect to systems:**

- **Content Graph:** Every slug is a node. Edges connect related slugs.
- **Authority Map:** Slugs are mapped to authority slots (which services, industries, topics they belong to).
- **Reports:** Reports reference pages by slug.
- **Dashboards:** Both dashboards display data organized by slug.
- **Validators:** Domain validators check that each slug has required structure and metadata.

**Slug format by domain:**

| Domain | Pattern | Example |
|--------|---------|---------|
| Blog | `/blog/{slug}` | `/blog/lead-generation` |
| Case Study | `/case-study/{slug}` | `/case-study/flavor-first` |
| Service | `/services/{category}/{slug}` | `/services/local-seo-authority` |
| Feature | `/features/{category}/{slug}` | `/features/performance/caching` |
| Industry | `/industries/{category}/{slug}` | `/industries/roofing` |
| Resource | `/resources/{slug}` | `/resources/lead-handling` |

---

## 9. System Map

How everything connects:

```
┌─────────────────────────────────────────────────────┐
│                  CONTENT GRAPH                       │
│              211 nodes · 7065 edges                  │
│                  7 content types                     │
└──────────────┬──────────────────┬────────────────────┘
               │                  │
     ┌─────────▼──────┐   ┌──────▼────────────┐
     │   GENERATION    │   │   VALIDATION       │
     │   SCRIPTS       │   │   SCRIPTS          │
     │                 │   │                    │
    │ authority-map   │   │ validate-all (26)  │
     │ topic-scores    │   │ domain validators  │
     │ content-gaps    │   │ rule validators    │
     │ score-content   │   │ conversion audit   │
     │ page-priorities │   │ system-docs check  │
     └────────┬────────┘   └────────────────────┘
              │
     ┌────────▼────────┐
     │     REPORTS      │
     │   /reports/      │
     │                  │
     │ authority-map    │
     │ topic-scores     │
     │ content-gaps     │
     │ validation       │
     └───┬─────────┬────┘
         │         │
   ┌─────▼───┐ ┌──▼──────────────┐
   │ CONTENT  │ │ AUTHORITY        │
   │ DASHBOARD│ │ DASHBOARD        │
   │          │ │                  │
   │ Topics   │ │ Priority Queue   │
   │ Gaps     │ │ Bridge Insights  │
   │ Graph    │ │ Conversion       │
   │ Health   │ │ Link Health      │
   └──────────┘ │ Page Inspector   │
                └──────────────────┘
```

---

## 10. Notes

- All dashboards are **development-only** — they are not visible in production.
- Snapshot reports are generated and overwrite-only.
- Run `validate-all` after any system change to verify nothing is broken.
- When you add a new script, report, or dashboard — update this document or the `validate-system-docs` validator will warn you.

---

## 11. Auto-Update Rule

**Whenever you add:**
- A new script → add it to Section 3 (Scripts)
- A new report → add it to Section 4 (Reports)
- A new dashboard → add it to Section 2 (Dashboards)
- A new intelligence engine → add it to Section 5 (Intelligence Engines)

The `validate-system-docs` validator checks this document against actual files and warns about:
- Dashboards that exist but are not documented
- Reports that exist but are not documented
- Scripts that exist but are not documented
- References in this doc to files that no longer exist

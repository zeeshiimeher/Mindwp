# TOOLS — MindWP

> Scripts, dashboards, reports, and commands.
> If this document conflicts with SYSTEM.md → SYSTEM.md wins.

---

## WHEN TO USE THIS DOC

Use this when working with validators, generators, analyzers, reports, or the system dashboard.

---

## 1. Overview

MindWP has three layers of internal tooling:

1. **Dashboards** — Visual interfaces that show content health, authority scores, conversion readiness, and optimization priorities.
2. **Scripts** — Command-line tools that generate reports, validate rules, and analyze content.
3. **Reports** — JSON and Markdown files that store analysis results. Dashboards read from these reports.

Everything connects through the **Content Graph** — a map of 229 content nodes and the 349 analyzed routes they support through shared metadata, authority, and reporting layers.

**How it works:**
- Scripts analyze content and write results to `/reports/`.
- Dashboards read those reports and display insights.
- Validators check that everything stays consistent.

---

## 2. Dashboards

### System Dashboard

- **URL:** `/dev/system-dashboard`
- **File:** `src/app/dev/system-dashboard/page.tsx`
- **Access:** Development only (force-dynamic)
- **Purpose:** Unified report-driven control dashboard. It replaces the split content and authority dashboards and does not recompute health from registries at render time.

**What it shows:**
- System status (`clean` / `warning` / `broken`)
- System health summary
- Grouped issues (`seo`, `content`, `authority`)
- Critical issues with impact and fix guidance
- Topic authority with deterministic reasons
- Content inventory table joined to issue counts
- Fix suggestions derived from grouped issue output in the format: action -> target -> impact -> time

**Data sources:**
- `reports/system-report.json`
- `src/lib/content-quality/inventory.ts`

**Reader:**
- `src/lib/dev/system-report.ts`

**How to use:**
1. Run `npm run system:report`.
2. Run `npm run dev` to start the dev server.
3. Go to `http://localhost:3000/dev/system-dashboard`.
4. Start with grouped issues and critical issues.
5. Use topic authority reasons and the inventory table to trace exactly what changed and what to fix.

**Launch-ready target:**
- `system-report.json` is `clean`
- `blocking.count = 0`
- `advisory.count = 0`
- `reports/topic-authority-scores.json` contains `0` weak topics

The dashboard is intentionally a visualization layer only. If a metric is missing, fix the report pipeline, not the frontend.

---

## 3. Scripts

### Generation Scripts

These create data that dashboards and validators use.

| Script | Command | Purpose | Output |
|--------|---------|---------|--------|
| generate-authority-map | `npx tsx scripts/generators/generate-authority-map.ts` | Builds the authority relationship map and report snapshot | `src/lib/authority/generated/authorityMap.ts`, `reports/authority-map.json` |
| generate-topic-authority-scores | `npx tsx scripts/generators/generate-topic-authority-scores.ts` | Scores each topic based on how much content supports it | `reports/topic-authority-scores.json`, `reports/topic-authority-scores.md` |
| generate-content-registries | `node scripts/generators/generate-content-registries.mjs` | Creates slug→component lookup maps for blog, resources, and case studies | `src/domains/*/registry.ts` |
| generate-global-inventory | `node scripts/generators/generate-global-inventory.mjs` | Generates a catalog of all shared components | `Mindwp-Docs/core/GLOBAL-COMPONENTS-CATALOG.md` |
| generate-component-docs | `node scripts/generators/generate-component-docs.cjs` | Generates component documentation | `Mindwp-Docs/` (doc files) |
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
| validate-content-contract | `npx tsx scripts/validators/validate-content-contract.mjs` | Required metadata, canonical values, and contract intent mapping | Yes |
| validate-content-quality | `npx tsx scripts/validators/validate-content-quality.mjs` | SEO completeness, duplicate titles/descriptions, canonical/sitemap alignment, OG coverage, weak descriptions, and topic coverage | Yes |
| validate-domain-structure | `npx tsx scripts/validators/validate-domain-structure.mjs` | Required fields and section structure for service, feature, home, industry, and case-study domains | Yes |
| validate-cta-label-contract | `npx tsx scripts/validators/validate-cta-label-contract.mjs` | CTA label contract consistency across routed conversion surfaces | Yes |
| validate-conversion-contract | `npx tsx scripts/validators/validate-conversion-contract.mjs` | CTA routing to `/contact`, system/source validation, and fallback readiness | Yes |
| validate-template-payload-sufficiency | `npx tsx scripts/validators/validate-template-payload-sufficiency.mjs` | Required template payload completeness across service, feature, resource, case-study, and industry pages | Yes |
| validate-section-structure | `npx tsx scripts/validators/validate-section-structure.mjs` | Section cardinality and multi-item payload sufficiency for grid- and card-driven sections | Yes |
| validate-design-system | `node scripts/validators/validate-design-system.cjs` | Design system tokens and naming | Yes |
| check-generated | `node scripts/core/check-generated.mjs` | Generated files are current and in sync with source inputs | Yes |
| validate-docs | `node scripts/validators/validate-docs.mjs` | Documentation formatting and broken links | **No** (warnings only) |
| validate-graph | `npx tsx scripts/validators/validate-graph.ts` | Content graph integrity (edges, orphans) | Yes |
| validate-vocabulary | `node scripts/validators/validate-vocabulary.mjs` | Banned phrases and anti-hype vocabulary sourced from SYSTEM.md | **No** (warnings only) |
| validate-internal-links | `npx tsx scripts/validators/validate-internal-links.ts` | Max 2 sections × 3 items per page, no duplicates, no repeated anchors | Yes |
| validate-tokens | `node scripts/validators/validate-tokens.mjs` | CSS token usage and token-contract compliance in production UI | Yes |
| validate-inline-styles | `node scripts/validators/validate-inline-styles.mjs` | Inline-style policy enforcement outside allowed exceptions | Yes |
| lint | `node scripts/runners/run-eslint.mjs` | Lint and formatting drift | **No** (warnings only in system integrity flow) |

| validate-checklist | `node scripts/validators/validate-checklist.mjs` | Checks fix checklist engine and integrations | **No** (warnings only) |


### Utility Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| system-report | `node scripts/core/system-report.mjs` | Runs validate-all, system-sync, key analyzers, and writes `reports/system-report.json` |
| run-tests | `node scripts/run-tests.mjs` | Runs validators, Vitest layers, and Playwright E2E, then writes `reports/test-results.json` |
| image-generate | `npx tsx scripts/image-system/image-generate.ts` | CLI for generating images (Unsplash, Pexels, Pixabay) |
| image-inspect | `npx tsx scripts/image-system/image-inspect.ts` | Inspects image metadata and generates image reports |
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

### system-report.json

- **Generated by:** `node scripts/core/system-report.mjs`
- **Used by:** Authority Dashboard
- **Contains:** One normalized system snapshot with status, blocking issues, advisory issues, content/conversion/graph/design counts, summary, and priority actions
- **Current scope:** Also includes centralized `seo`, `content_quality`, and `authority` summaries used by the authority dashboard
- **Purpose:** Single control-layer output for inspectable system state.

### topic-authority-scores.json

- **Generated by:** `npx tsx scripts/generate-topic-authority-scores.ts`
- **Used by:** Content Dashboard, Authority Dashboard
- **Contains:** Per-topic scores with blog/resource/service/feature/industry/case-study support, `coverageStatus`, and complete-coverage totals
- **Purpose:** Shows whether each canonical topic has complete support coverage and how strong that coverage is.

### topic-authority-scores.md

- **Generated by:** `npx tsx scripts/generate-topic-authority-scores.ts`
- **Used by:** Human review
- **Contains:** Markdown version of the topic authority scores
- **Purpose:** Readable summary for documentation or sharing.

### content-gaps.json

- **Generated by:** `npx tsx scripts/analyzers/generate-content-gaps.ts`
- **Used by:** Content Dashboard
- **Contains:** Topic coverage snapshots, orphan-topic detection, and coverage-gap output aligned to the canonical topic model
- **Purpose:** Identifies where topic support is missing or at risk of drifting out of complete coverage.

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

1. Run `npm run system:report`.
2. Run `npm run dev` and open the **System Dashboard** (`/dev/system-dashboard`).
3. Review topic authority scores and content gaps.
4. Switch to the **Authority Dashboard** (`/dev/authority-dashboard`).
5. Start with **System Status**, **Blocking Issues**, and **Priority Actions**.

### Fixing a Page

1. Start from `reports/system-report.json` or the Authority Dashboard priority actions.
2. Make the content or system fix.
3. Log the fix with `node scripts/dev/add-fix-entry.mjs` if relevant.
4. Run `npm run system:report`.
5. Confirm the issue count moved in the report outputs.

### Creating New Content

1. Check **Content Gaps** to see what's needed.
2. Check **Topic Authority Scores** to prioritize high-value topics.
3. Create the content following the domain structure rules.
4. Run `npm run system:report` to refresh authority map, scores, validation, and state.

### Running All Validators

```bash
node scripts/core/validate-all.mjs
```

This runs the current 17-validator control layer and writes `reports/validation-results.json`.

### Regenerating Report Artifacts

```bash
npm run system:report
```

This refreshes:
- `reports/system-report.json`
- `reports/system-state.json`
- `reports/system-drift.json`
- `reports/topic-authority-scores.json`
- `reports/content-gaps.json`
- `reports/authority-map.json`

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
│                  CONTENT GRAPH                      │
│              229 nodes · 9893 edges                 │
│                  7 content types                    │
└──────────────┬──────────────────┬───────────────────┘
               │                  │
     ┌─────────▼──────┐   ┌──────▼────────────┐
     │   GENERATION    │   │   VALIDATION      │
     │   SCRIPTS       │   │   CONTROL LAYER   │
     │                 │   │                   │
     │ authority-map   │   │ validate-all (17)│
     │ topic-scores    │   │ check-generated   │
     │ content-gaps    │   │ contract validators│
     └────────┬────────┘   │ design + links    │
              │            └─────────┬─────────┘
              └──────────────┬───────┘
                             │
                    ┌────────▼────────┐
                    │   SYSTEM REPORT  │
                    │ system-report    │
                    │ system-state     │
                    │ system-drift     │
                    └───────┬──────────┘
                            │
                  ┌─────────▼─────────┐
                  │    DASHBOARDS      │
                  │ Content + Authority│
                  │ visualization only │
                  └────────────────────┘
```

---

## 10. Notes

- All dashboards are **development-only** — they are not visible in production.
- Snapshot reports are generated and overwrite-only.
- Run `validate-all` after any system change to verify nothing is broken.
- When you add a new script, report, or dashboard — update this document in the same change.

---

## 11. Auto-Update Rule

**Whenever you add:**
- A new script → add it to Section 3 (Scripts)
- A new report → add it to Section 4 (Reports)
- A new dashboard → add it to Section 2 (Dashboards)
- A new intelligence engine → add it to Section 5 (Intelligence Engines)

Keep this document aligned with the current repo surface so dashboards, reports, scripts, and file references do not drift.

---

## 12. Core Commands

| Command | Purpose |
|---|---|
| `npm run system:report` | Full system snapshot: validate, sync, analyze, normalize |
| `node scripts/core/validate-all.mjs` | Full validator set |
| `node scripts/core/system-sync.mjs` | Generate state and drift snapshots |
| `npm run test:runtime` | Vitest runtime layers: unit, system, integration |
| `npm run test:e2e` | Playwright end-to-end flows |
| `npm run test:all` | Validators + all test layers with `reports/test-results.json` output |
| `npm run dev` | Local development |
| `npm run build` | Production build |

## 13. Working Order

### Start work
1. Run `npm run system:report`
2. Inspect `reports/system-report.json`
3. If CLEAN → continue. If WARNING/BROKEN → inspect `reports/system-drift.json`
4. Read `core/SYSTEM-STATE.md` for current priorities

### Finish work
1. Run targeted validator for changed files
2. Run matching test layer if runtime behavior changed
3. Run `npm run system:report`
4. Confirm reports updated cleanly
5. Do NOT leave repo in drift or failure state

## 14. Data Model

- **Overwrite-only:** `reports/system-report.json`, `reports/system-state.json`, `reports/system-drift.json`
- **Append-only:** `reports/fix-log.json`, `reports/session-log.json`
- **Generated (do not edit):** `core/GLOBAL-COMPONENTS-CATALOG.md`

# AI Audit Context

## System Overview

MindWP is a deterministic local analysis and reporting system for validating site contracts, exporting normalized reports, and rendering operator dashboards from generated artifacts.

Mental model in one line:

`ENGINE -> VALIDATORS -> ANALYZERS -> EXPORT -> REPORTS -> DASHBOARD`

Source of truth is local only:

- `reports/`
- `reports/dashboard/`
- `system/`

Folder boundaries:

- `/system` = docs only
- `/src/system` = runtime knowledge only
- `/src/app/systems` = UI and route layer only

Not allowed:

- assuming GitHub state, PR state, CI state, or remote storage is authoritative
- reading `src/` as the source of audit truth
- editing generated reports directly

## Pipeline Contract

Primary flow:

1. `npm run system:full`
2. `node scripts/core/validate-all.mjs`
3. `node --import tsx/esm scripts/analyzers/export-reports.mjs`
4. `node scripts/core/dashboard-data.mjs`

Execution modes:

- `--mode=summary` = minimal operator output
- `--mode=verbose` = extra step detail
- `--mode=debug` = step inputs, outputs, durations, and warnings

Execution flags:

- `--force` = bypass cache reuse and rerun validators/analyzers
- default mode = reuse existing report outputs when available and surface stale reuse as warnings

Required outputs:

- normalized validator outputs in `reports/*.json`
- normalized dashboard bundle in `reports/dashboard/*.json`
- aggregate system artifacts including `reports/system-report.json` and `reports/system-health.json`

## Report Inventory

Dashboard bundle:

- `reports/dashboard/system.json`
- `reports/dashboard/validators.json`
- `reports/dashboard/graph.json`
- `reports/dashboard/topics.json`
- `reports/dashboard/content.json`
- `reports/dashboard/pipeline.json`

Root reports:

- `reports/authority-map.json`
- `reports/check-generated-report.json`
- `reports/client-dashboard.json`
- `reports/client-report.json`
- `reports/client-report.md`
- `reports/content-consistency-audit.json`
- `reports/content-contract-report.json`
- `reports/content-gaps.json`
- `reports/content-gaps.md`
- `reports/content-intelligence.json`
- `reports/content-quality-report.json`
- `reports/content-score.json`
- `reports/conversion-contract-report.json`
- `reports/cta-label-contract-report.json`
- `reports/cta-report.json`
- `reports/cta-resolver-integrity-report.json`
- `reports/cta-violation-scan.json`
- `reports/design-system-report.json`
- `reports/docs-report.json`
- `reports/domain-structure-report.json`
- `reports/graph-derived-summary.json`
- `reports/graph-report.json`
- `reports/heading-audit-report.json`
- `reports/inline-link-misuse-scan.json`
- `reports/inline-style-report.json`
- `reports/internal-links-report.json`
- `reports/lint-report.json`
- `reports/page-priorities.json`
- `reports/pipeline-report.json`
- `reports/production-contract-report.json`
- `reports/proof-coverage.json`
- `reports/related-duplication-scan.json`
- `reports/section-shell-integrity-report.json`
- `reports/section-structure-report.json`
- `reports/session-log.json`
- `reports/split-screenshots-report.json`
- `reports/system-drift.json`
- `reports/system-health.json`
- `reports/system-knowledge-report.json`
- `reports/system-report.json`
- `reports/system-state.json`
- `reports/template-payload-report.json`
- `reports/test-editing-stability-report.json`
- `reports/token-report.json`
- `reports/topic-authority-scores.json`
- `reports/topic-authority-scores.md`
- `reports/topic-insights.json`
- `reports/typecheck-report.json`
- `reports/ui-purity-report.json`
- `reports/validation-report.json`
- `reports/validation-results.json`
- `reports/visual-audit-engine-report.json`
- `reports/visual-audit-report.json`
- `reports/visual-audit-runtime-report.json`
- `reports/vocabulary-report.json`

## Rules For AI Agents

- Never read `src/` for audit truth when a report exists.
- Never modify files in `reports/` directly.
- Always run `npm run preaudit` before an audit sequence.
- Always run `npm run system:full -- --mode=summary` before drawing conclusions.
- Use `reports/dashboard/*.json` for dashboard-facing interpretations.
- Treat `/dev/system-dashboard` as the single operator dashboard entry point.

## Audit Commands

- `npm run preaudit`
- `npm run system:full -- --mode=summary`
- `npm run system:quick`
- `npm run system:debug`
- `npm run system:clean`
- `npm run export:reports`
- `npm run validate:system-knowledge`

## Failure Interpretation Guide

- `FAIL`: contract drift or blocking issue; audit conclusions are not trustworthy until resolved.
- `WARN`: non-blocking drift, optional coverage gap, or threshold risk; conclusions are usable with operator review.
- `SKIPPED`: step was intentionally not executed by contract, usually because it is optional or manual-only.

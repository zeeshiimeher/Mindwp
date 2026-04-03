#!/usr/bin/env node
/**
 * SYSTEM LOG ENGINE — Current state snapshot generator.
 *
 * Runs all validators, reads their JSON reports, and produces:
 *   1. reports/system-state.json  (machine-readable)
 *   2. Mindwp-Docs/SYSTEM-LOG.md  (human-readable — CURRENT STATE ONLY)
 *
 * Always overwrites. No history. No append. Latest truth only.
 */

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

// ---------------------------------------------------------------------------
// TASK 1 — Execute validators (with --report-json so they write structured output)
// ---------------------------------------------------------------------------

const validators = [
  {
    name: 'cta',
    command: 'node scripts/validation/validate-cta.mjs --report-json',
    report: 'reports/cta-report.json',
  },
  {
    name: 'design',
    command: 'node scripts/validate-design-system.cjs --report-json',
    report: 'reports/design-system-report.json',
  },
  {
    name: 'graph',
    command: 'npx tsx scripts/validate-graph.ts --report-json',
    report: 'reports/graph-report.json',
  },
  {
    name: 'tokens',
    command: 'node scripts/validation/validate-tokens.mjs --report-json',
    report: 'reports/token-report.json',
  },
  {
    name: 'inlineStyles',
    command: 'node scripts/validation/validate-inline-styles.mjs --report-json',
    report: 'reports/inline-style-report.json',
  },
];

/** @type {Record<string, any>} */
const reports = {};

for (const v of validators) {
  try {
    execSync(v.command, { cwd: root, stdio: 'pipe', timeout: 120_000 });
  } catch {
    // Validators exit non-zero on failures — that's expected.
  }

  const reportPath = path.join(root, v.report);
  if (fs.existsSync(reportPath)) {
    reports[v.name] = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  } else {
    console.error(`⚠ Report not found: ${v.report}`);
    reports[v.name] = null;
  }
}

// ---------------------------------------------------------------------------
// TASK 2 — Build system state from validator reports
// ---------------------------------------------------------------------------

const ctaReport = reports.cta;
const designReport = reports.design;
const graphReport = reports.graph;

// CTA breakdown
const ctaIssues = ctaReport?.issues ?? [];
const ctaRogueCount = ctaIssues.filter(
  (i) => i.code === 'rogue_cta_label' || i.code === 'banned_cta_label_system'
).length;
const ctaLabelCount = ctaIssues.filter(
  (i) => i.code === 'wrong_primary_cta_label'
).length;
const ctaHrefCount = ctaIssues.filter(
  (i) => i.code === 'wrong_primary_cta_href'
).length;
const ctaBannedCount = ctaIssues.filter(
  (i) => i.code === 'banned_cta_label'
).length;

// Design breakdown
const designViolations = designReport?.violations ?? [];
const inlineVarCount = designViolations.filter(
  (v) => v.rule === 'INLINE_VAR_TOKEN'
).length;
const gradientCount = designViolations.filter(
  (v) => v.rule === 'GRADIENT_LIFECYCLE'
).length;
const buttonCount = designViolations.filter(
  (v) => v.rule === 'BUTTON_VIOLATION'
).length;
const tailwindButtonCount = designViolations.filter(
  (v) => v.rule === 'TAILWIND_BUTTON_VIOLATION'
).length;
const ctaViolationCount = designViolations.filter(
  (v) => v.rule === 'CTA_VIOLATION'
).length;

// Graph breakdown
const graphErrors = graphReport?.errors ?? [];
const invalidTypeCount = graphErrors.filter((e) => e.includes('SR5')).length;
const otherGraphErrors = graphErrors.length - invalidTypeCount;

// Token breakdown
const tokenReport = reports.tokens;
const tokenViolations = tokenReport?.violations ?? [];
const tokenSpacingCount = tokenViolations.filter((v) => v.rule === 'TOKEN_SPACING').length;
const tokenFontCount = tokenViolations.filter((v) => v.rule === 'TOKEN_FONT_SIZE').length;

// Inline style breakdown
const inlineStyleReport = reports.inlineStyles;
const inlineStyleViolations = inlineStyleReport?.violations ?? [];
const inlineStyleVarCount = inlineStyleViolations.filter((v) => v.rule === 'INLINE_STYLE_VAR').length;
const inlineStylePlainCount = inlineStyleViolations.filter((v) => v.rule === 'INLINE_STYLE').length;

// Construct state
const systemState = {
  generatedAt: new Date().toISOString(),
  cta: {
    source: 'CTA_CONFIG',
    violations: ctaReport?.issueCount ?? 0,
    rogueLabels: ctaRogueCount,
    wrongLabels: ctaLabelCount,
    wrongHrefs: ctaHrefCount,
    bannedLabels: ctaBannedCount,
    scannedFiles: ctaReport?.scannedFiles ?? 0,
    status: ctaReport?.passed ? 'PASS' : 'FAIL',
  },
  design: {
    inlineVarViolations: inlineVarCount,
    gradientViolations: gradientCount,
    buttonViolations: buttonCount,
    tailwindButtonViolations: tailwindButtonCount,
    ctaStructureViolations: ctaViolationCount,
    totalViolations: designReport?.violationCount ?? 0,
    status: designReport?.passed ? 'PASS' : 'FAIL',
  },
  graph: {
    invalidTypes: invalidTypeCount,
    otherErrors: otherGraphErrors,
    warnings: graphReport?.warningCount ?? 0,
    totalErrors: graphReport?.errorCount ?? 0,
    status: graphReport?.passed ? 'PASS' : 'FAIL',
  },
  tokens: {
    spacingViolations: tokenSpacingCount,
    fontSizeViolations: tokenFontCount,
    totalViolations: tokenReport?.violationCount ?? 0,
    status: tokenReport?.passed ? 'PASS' : 'FAIL',
  },
  inlineStyles: {
    varTokenViolations: inlineStyleVarCount,
    plainViolations: inlineStylePlainCount,
    totalViolations: inlineStyleReport?.violationCount ?? 0,
    status: inlineStyleReport?.passed ? 'PASS' : 'FAIL',
  },
  validators: {
    cta: ctaReport?.passed ? 'PASS' : 'FAIL',
    design: designReport?.passed ? 'PASS' : 'FAIL',
    graph: graphReport?.passed ? 'PASS' : 'FAIL',
    tokens: tokenReport?.passed ? 'PASS' : 'FAIL',
    inlineStyles: inlineStyleReport?.passed ? 'PASS' : 'FAIL',
  },
};

// ---------------------------------------------------------------------------
// TASK 3 — Save machine-readable state
// ---------------------------------------------------------------------------

const statePath = path.join(root, 'reports', 'system-state.json');
fs.mkdirSync(path.dirname(statePath), { recursive: true });
fs.writeFileSync(statePath, JSON.stringify(systemState, null, 2) + '\n');
console.log(`✓ Wrote ${path.relative(root, statePath)}`);

// ---------------------------------------------------------------------------
// TASK 4 — Generate human-readable dashboard (CURRENT STATE ONLY)
// ---------------------------------------------------------------------------

const allPass =
  systemState.validators.cta === 'PASS' &&
  systemState.validators.design === 'PASS' &&
  systemState.validators.graph === 'PASS' &&
  systemState.validators.tokens === 'PASS' &&
  systemState.validators.inlineStyles === 'PASS';

const totalViolations =
  systemState.cta.violations +
  systemState.design.totalViolations +
  systemState.graph.totalErrors +
  systemState.tokens.totalViolations +
  systemState.inlineStyles.totalViolations;

const statusLabel = allPass ? 'CLEAN' : totalViolations < 20 ? 'WARNING' : 'BROKEN';
const statusIcon = allPass ? '✅' : totalViolations < 20 ? '⚠️' : '❌';

// --- Critical issues (violations > 0 only, max 5) ---
const criticalItems = [];
if (systemState.cta.violations > 0)
  criticalItems.push(`CTA violations (${systemState.cta.violations})`);
if (systemState.design.totalViolations > 0)
  criticalItems.push(`Design system violations (${systemState.design.totalViolations})`);
if (systemState.graph.totalErrors > 0)
  criticalItems.push(`Graph integrity errors (${systemState.graph.totalErrors})`);
if (systemState.tokens.totalViolations > 0)
  criticalItems.push(`Token violations (${systemState.tokens.totalViolations})`);
if (systemState.inlineStyles.totalViolations > 0)
  criticalItems.push(`Inline style violations (${systemState.inlineStyles.totalViolations})`);

// --- Parse project-todo.md for phase progress + next actions ---
const todoPath = path.join(root, 'Mindwp-Docs', 'project-todo.md');
const todoContent = fs.existsSync(todoPath) ? fs.readFileSync(todoPath, 'utf8') : '';

function parsePhaseProgress(todo) {
  const phases = [];
  // Match phase headers like "# PHASE 3.1 — CRITICAL CODE FIXES"
  const phaseRegex = /^#\s+PHASE\s+([\d.]+)\s*[—–-]\s*(.+)$/gm;
  let match;
  while ((match = phaseRegex.exec(todo)) !== null) {
    const phaseNum = match[1];
    const phaseName = match[2].trim();
    // Count tasks in this phase section (lines with | T-XXX |)
    const sectionStart = match.index;
    const nextPhaseMatch = todo.indexOf('\n# PHASE', sectionStart + 1);
    const nextSummary = todo.indexOf('\n# TASK SUMMARY', sectionStart + 1);
    const sectionEnd = Math.min(
      nextPhaseMatch > -1 ? nextPhaseMatch : todo.length,
      nextSummary > -1 ? nextSummary : todo.length
    );
    const section = todo.slice(sectionStart, sectionEnd);
    const taskLines = section.match(/\|\s*T-\d+\s*\|/g) || [];
    const doneLines = section.match(/\|\s*\[x\]\s*(DONE)?\s*\|/gi) || [];
    if (taskLines.length > 0) {
      phases.push({
        id: phaseNum,
        name: phaseName.replace(/\s*\(.*\)/, ''),
        total: taskLines.length,
        done: doneLines.length,
      });
    }
  }
  return phases;
}

function parseNextActions(todo, max = 5) {
  const actions = [];
  // Find incomplete tasks: | T-XXX | Title | ... | [ ] | or | TODO |
  const taskRegex = /\|\s*(T-\d+)\s*\|\s*([^|]+)\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|\s*\[\s*\]\s*\|/g;
  let match;
  while ((match = taskRegex.exec(todo)) !== null && actions.length < max) {
    const id = match[1].trim();
    const title = match[2].trim().replace(/`/g, '');
    actions.push({ id, title });
  }
  return actions;
}

const phases = parsePhaseProgress(todoContent);
const nextActions = parseNextActions(todoContent);

// --- Build dashboard markdown ---
const md = `# SYSTEM LOG — Decision Dashboard

> Generated: ${systemState.generatedAt}

---

## SYSTEM STATUS

| | |
|---|---|
| **State** | ${statusIcon} **${statusLabel}** |
| **Total Violations** | ${totalViolations} |

**Summary:**

| Validator | Violations | Status |
|-----------|-----------|--------|
| CTA | ${systemState.cta.violations} | ${systemState.cta.status === 'PASS' ? '✅' : '❌'} |
| Design | ${systemState.design.totalViolations} | ${systemState.design.status === 'PASS' ? '✅' : '❌'} |
| Graph | ${systemState.graph.totalErrors} | ${systemState.graph.status === 'PASS' ? '✅' : '❌'} |
| Tokens | ${systemState.tokens.totalViolations} | ${systemState.tokens.status === 'PASS' ? '✅' : '❌'} |
| Inline Styles | ${systemState.inlineStyles.totalViolations} | ${systemState.inlineStyles.status === 'PASS' ? '✅' : '❌'} |

---

## CRITICAL ISSUES

${criticalItems.length === 0 ? 'None. All validators passing.' : criticalItems.map((item) => `- [ ] ${item}`).join('\n')}

---

## PHASE PROGRESS

${phases.length === 0 ? 'No phase data available.' : phases.map((p) => `- **Phase ${p.id}** ${p.name}: ${p.done}/${p.total} complete`).join('\n')}

---

## NEXT ACTIONS

${nextActions.length === 0 ? 'No pending tasks.' : nextActions.map((a, i) => `${i + 1}. **${a.id}** — ${a.title}`).join('\n')}

---

## VALIDATORS

| Validator | Count | Detail |
|-----------|-------|--------|
| CTA | ${systemState.cta.violations} | Rogue: ${ctaRogueCount}, Labels: ${ctaLabelCount}, Hrefs: ${ctaHrefCount}, Banned: ${ctaBannedCount} |
| Design | ${systemState.design.totalViolations} | Inline var: ${inlineVarCount}, Gradient: ${gradientCount}, Button: ${buttonCount}, TW Button: ${tailwindButtonCount}, CTA: ${ctaViolationCount} |
| Graph | ${systemState.graph.totalErrors} | Invalid types: ${invalidTypeCount}, Other: ${otherGraphErrors}, Warnings: ${systemState.graph.warnings} |
| Tokens | ${systemState.tokens.totalViolations} | Spacing: ${tokenSpacingCount}, Font-size: ${tokenFontCount} |
| Inline Styles | ${systemState.inlineStyles.totalViolations} | var(--*): ${inlineStyleVarCount}, Other: ${inlineStylePlainCount} |

Files scanned (CTA): ${systemState.cta.scannedFiles}

---

## LAST UPDATED

${systemState.generatedAt}
`;

const logPath = path.join(root, 'Mindwp-Docs', 'SYSTEM-LOG.md');
fs.mkdirSync(path.dirname(logPath), { recursive: true });
fs.writeFileSync(logPath, md);
console.log(`✓ Wrote ${path.relative(root, logPath)}`);

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------

console.log('');
if (allPass) {
  console.log('✅ SYSTEM STATE: ALL VALIDATORS PASS');
} else {
  console.log(`❌ SYSTEM STATE: ${totalViolations} total violation(s)`);
  console.log(`   CTA: ${systemState.cta.violations} | Design: ${systemState.design.totalViolations} | Graph: ${systemState.graph.totalErrors} | Tokens: ${systemState.tokens.totalViolations} | Inline: ${systemState.inlineStyles.totalViolations}`);
}

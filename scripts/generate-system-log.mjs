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
// TASK 4 — Generate human-readable log (CURRENT STATE ONLY)
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

// Build violation detail lines for CTA
const ctaDetails = [];
if (ctaRogueCount > 0)
  ctaDetails.push(
    ...ctaIssues
      .filter((i) => i.code === 'rogue_cta_label' || i.code === 'banned_cta_label_system')
      .map((i) => `- \`${i.file}:${i.line}\` — ${i.message}`)
  );
if (ctaLabelCount > 0)
  ctaDetails.push(
    ...ctaIssues
      .filter((i) => i.code === 'wrong_primary_cta_label')
      .map((i) => `- \`${i.file}:${i.line}\` — ${i.message}`)
  );
if (ctaHrefCount > 0)
  ctaDetails.push(
    ...ctaIssues
      .filter((i) => i.code === 'wrong_primary_cta_href')
      .map((i) => `- \`${i.file}:${i.line}\` — ${i.message}`)
  );
if (ctaBannedCount > 0)
  ctaDetails.push(
    ...ctaIssues
      .filter((i) => i.code === 'banned_cta_label')
      .map((i) => `- \`${i.file}:${i.line}\` — ${i.message}`)
  );

// Build violation detail lines for Design
const designDetails = [];
if (inlineVarCount > 0)
  designDetails.push(
    ...designViolations
      .filter((v) => v.rule === 'INLINE_VAR_TOKEN')
      .map((v) => `- \`${v.file}:${v.line}\` — ${v.message}`)
  );
if (gradientCount > 0)
  designDetails.push(
    ...designViolations
      .filter((v) => v.rule === 'GRADIENT_LIFECYCLE')
      .map((v) => `- \`${v.file}:${v.line}\` — ${v.message}`)
  );

// Build violation detail lines for Graph (SR5 only — keep concise)
const graphSR5Details = graphErrors
  .filter((e) => e.includes('SR5'))
  .slice(0, 10)
  .map((e) => `- ${e}`);
const graphSR5Remaining = invalidTypeCount - graphSR5Details.length;

// Build violation detail lines for tokens (first 10)
const tokenDetails = tokenViolations
  .slice(0, 10)
  .map((v) => `- \`${v.file}:${v.line}\` — ${v.message}`);
const tokenRemaining = tokenViolations.length - tokenDetails.length;

// Build violation detail lines for inline styles
const inlineStyleDetails = inlineStyleViolations
  .map((v) => `- \`${v.file}:${v.line}\` — ${v.message}`);

const md = `# SYSTEM LOG — CURRENT STATE
> Generated: ${systemState.generatedAt}
> Status: ${allPass ? '✅ ALL PASS' : `❌ ${totalViolations} violation(s)`}

---

## CTA SYSTEM
- **Source:** CTA_CONFIG (ui-intelligence.ts)
- **Status:** ${systemState.cta.status}
- **Violations:** ${systemState.cta.violations}
  - Rogue labels (SR1): ${ctaRogueCount}
  - Wrong primary labels: ${ctaLabelCount}
  - Wrong primary hrefs: ${ctaHrefCount}
  - Banned labels: ${ctaBannedCount}
- **Files scanned:** ${systemState.cta.scannedFiles}
${ctaDetails.length > 0 ? '\n### Violations\n' + ctaDetails.join('\n') + '\n' : ''}
---

## DESIGN SYSTEM
- **Status:** ${systemState.design.status}
- **Total violations:** ${systemState.design.totalViolations}
  - Inline var(--*) tokens (SR3): ${inlineVarCount}
  - Gradient lifecycle (SR4): ${gradientCount}
  - Button violations: ${buttonCount}
  - Tailwind button violations: ${tailwindButtonCount}
  - CTA structure violations: ${ctaViolationCount}
${designDetails.length > 0 ? '\n### Violations\n' + designDetails.join('\n') + '\n' : ''}
---

## GRAPH SYSTEM
- **Status:** ${systemState.graph.status}
- **Total errors:** ${systemState.graph.totalErrors}
  - Invalid types (SR5): ${invalidTypeCount}
  - Other errors: ${otherGraphErrors}
- **Warnings:** ${systemState.graph.warnings}
${graphSR5Details.length > 0 ? '\n### SR5 Violations (first 10)\n' + graphSR5Details.join('\n') + (graphSR5Remaining > 0 ? `\n- ... and ${graphSR5Remaining} more` : '') + '\n' : ''}
---

## TOKEN SYSTEM
- **Status:** ${systemState.tokens.status}
- **Total violations:** ${systemState.tokens.totalViolations}
  - Hardcoded spacing (--space-*): ${tokenSpacingCount}
  - Hardcoded font-size (--font-*): ${tokenFontCount}
${tokenDetails.length > 0 ? '\n### Violations (first 10)\n' + tokenDetails.join('\n') + (tokenRemaining > 0 ? `\n- ... and ${tokenRemaining} more` : '') + '\n' : ''}
---

## INLINE STYLES
- **Status:** ${systemState.inlineStyles.status}
- **Total violations:** ${systemState.inlineStyles.totalViolations}
  - var(--*) inline styles: ${inlineStyleVarCount}
  - Other inline styles: ${inlineStylePlainCount}
${inlineStyleDetails.length > 0 ? '\n### Violations\n' + inlineStyleDetails.join('\n') + '\n' : ''}
---

## VALIDATORS
| Validator | Status |
|-----------|--------|
| CTA (validate-cta.mjs) | ${systemState.validators.cta} |
| Design (validate-design-system.cjs) | ${systemState.validators.design} |
| Graph (validate-graph.ts) | ${systemState.validators.graph} |
| Tokens (validate-tokens.mjs) | ${systemState.validators.tokens} |
| Inline Styles (validate-inline-styles.mjs) | ${systemState.validators.inlineStyles} |
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

#!/usr/bin/env node
/**
 * SYSTEM SYNC ENGINE — Drift detection between SYSTEM-TRUTH.md, code, and validators.
 *
 * Responsibilities:
 *   1. Run validators + system log engine
 *   2. Extract key truth signals from SYSTEM-TRUTH.md
 *   3. Compare against live code and validator outputs
 *   4. Output reports/system-drift.json
 *   5. Overwrite Mindwp-Docs/system/DECISION-STATE.md (current decisions only)
 *   6. Append SYSTEM HEALTH section to SYSTEM-LOG.md
 *
 * No history. No append. Overwrites every run.
 */

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// ---------------------------------------------------------------------------
// STEP 1 — Run generate-system-log.mjs (which runs validators and writes state)
// ---------------------------------------------------------------------------

console.log('▶ Running system log engine...');
try {
  execSync('node scripts/generate-system-log.mjs', {
    cwd: root,
    stdio: 'inherit',
    timeout: 300_000,
  });
} catch {
  console.warn('⚠ System log engine exited with errors (validators may have failures)');
}

// ---------------------------------------------------------------------------
// STEP 2 — Load inputs
// ---------------------------------------------------------------------------

const truthPath = path.join(root, 'Mindwp-Docs', 'SYSTEM-TRUTH.md');
const statePath = path.join(root, 'reports', 'system-state.json');
const todoPath = path.join(root, 'Mindwp-Docs', 'project-todo.md');
const authorityMapPath = path.join(root, 'reports', 'authority-map.json');
const typesPath = path.join(root, 'src', 'lib', 'content-graph', 'types.ts');
const validateAllPath = path.join(root, 'scripts', 'validate-all.mjs');

const truthMd = fs.existsSync(truthPath) ? fs.readFileSync(truthPath, 'utf8') : '';
const systemState = fs.existsSync(statePath)
  ? JSON.parse(fs.readFileSync(statePath, 'utf8'))
  : null;
const todoMd = fs.existsSync(todoPath) ? fs.readFileSync(todoPath, 'utf8') : '';

// ---------------------------------------------------------------------------
// STEP 3 — Extract truth signals from SYSTEM-TRUTH.md
// ---------------------------------------------------------------------------

function extractTruthSignals(md) {
  const signals = {};

  // Node count — e.g. "243 nodes"
  const nodeMatch = md.match(/(\d+)\s+nodes/);
  signals.nodeCount = nodeMatch ? parseInt(nodeMatch[1], 10) : null;

  // Edge count — e.g. "2,742 edges"
  const edgeMatch = md.match(/([\d,]+)\s+edges/);
  signals.edgeCount = edgeMatch ? parseInt(edgeMatch[1].replace(/,/g, ''), 10) : null;

  // Content types count — e.g. "7 formal content types"
  const typeCountMatch = md.match(/(\d+)\s+formal\s+content\s+types/);
  signals.contentTypeCount = typeCountMatch ? parseInt(typeCountMatch[1], 10) : null;

  // Validator count — e.g. "25 validators"
  const validatorMatch = md.match(/(\d+)\s+validators/);
  signals.validatorCount = validatorMatch ? parseInt(validatorMatch[1], 10) : null;

  // Node breakdown — e.g. "blog (77), resource (52), ..."
  const breakdownMatch = md.match(
    /blog\s*\((\d+)\).*?resource\s*\((\d+)\).*?industry-detail\s*\((\d+)\).*?case-study\s*\((\d+)\).*?service\s*\((\d+)\).*?feature\s*\((\d+)\).*?industry-category\s*\((\d+)\)/s
  );
  if (breakdownMatch) {
    signals.nodeBreakdown = {
      blog: parseInt(breakdownMatch[1], 10),
      resource: parseInt(breakdownMatch[2], 10),
      'industry-detail': parseInt(breakdownMatch[3], 10),
      'case-study': parseInt(breakdownMatch[4], 10),
      service: parseInt(breakdownMatch[5], 10),
      feature: parseInt(breakdownMatch[6], 10),
      'industry-category': parseInt(breakdownMatch[7], 10),
    };
  }

  // CSS layers line count — e.g. "components.css ... 10,882"
  const cssMatch = md.match(/components\.css.*?([\d,]+)\s*\|?\s*$/m);
  signals.componentsCssLines = cssMatch
    ? parseInt(cssMatch[1].replace(/,/g, ''), 10)
    : null;

  // Single component count
  const singleMatch = md.match(/Single components\s*\|\s*(\d+)/);
  signals.singleComponentCount = singleMatch ? parseInt(singleMatch[1], 10) : null;

  // Core sections count
  const coreSectionsMatch = md.match(/Core sections\s*\|\s*(\d+)/);
  signals.coreSectionCount = coreSectionsMatch ? parseInt(coreSectionsMatch[1], 10) : null;

  // System components count
  const systemMatch = md.match(/System components\s*\|\s*(\d+)/);
  signals.systemComponentCount = systemMatch ? parseInt(systemMatch[1], 10) : null;

  return signals;
}

const truthSignals = extractTruthSignals(truthMd);

// ---------------------------------------------------------------------------
// STEP 4 — Extract live signals from code
// ---------------------------------------------------------------------------

function extractLiveSignals() {
  const live = {};

  // Authority map node/edge counts
  if (fs.existsSync(authorityMapPath)) {
    const map = JSON.parse(fs.readFileSync(authorityMapPath, 'utf8'));
    live.nodeCount = Array.isArray(map.nodes) ? map.nodes.length : null;
    live.edgeCount = Array.isArray(map.edges) ? map.edges.length : null;

    // Count node types
    if (Array.isArray(map.nodes)) {
      live.nodeBreakdown = {};
      for (const node of map.nodes) {
        const t = node.type ?? 'unknown';
        live.nodeBreakdown[t] = (live.nodeBreakdown[t] || 0) + 1;
      }
    }
  }

  // ContentNodeType count from types.ts
  if (fs.existsSync(typesPath)) {
    const typesSource = fs.readFileSync(typesPath, 'utf8');
    const typeBlock = typesSource.match(
      /export\s+type\s+ContentNodeType\s*=\s*([\s\S]*?);/
    );
    if (typeBlock) {
      const pipes = typeBlock[1].match(/\|/g);
      live.contentTypeCount = pipes ? pipes.length : 1;
    }
  }

  // Validator count from validate-all.mjs
  if (fs.existsSync(validateAllPath)) {
    const src = fs.readFileSync(validateAllPath, 'utf8');
    const matches = src.match(/\{\s*name:\s*'/g);
    live.validatorCount = matches ? matches.length : null;
  }

  // components.css line count
  const cssPath = path.join(root, 'src', 'styles', 'components.css');
  if (fs.existsSync(cssPath)) {
    const lines = fs.readFileSync(cssPath, 'utf8').split('\n').length;
    live.componentsCssLines = lines;
  }

  // Component directory counts
  const singleDir = path.join(root, 'src', 'components', 'reusable', 'single');
  if (fs.existsSync(singleDir)) {
    live.singleComponentCount = fs.readdirSync(singleDir).filter(
      (f) => f.endsWith('.tsx')
    ).length;
  }

  const coreDir = path.join(root, 'src', 'components', 'reusable', 'sections', 'core');
  if (fs.existsSync(coreDir)) {
    live.coreSectionCount = fs.readdirSync(coreDir).filter(
      (f) => f.endsWith('.tsx')
    ).length;
  }

  const systemDir = path.join(root, 'src', 'components', 'system');
  if (fs.existsSync(systemDir)) {
    live.systemComponentCount = fs.readdirSync(systemDir).filter(
      (f) => f.endsWith('.tsx')
    ).length;
  }

  return live;
}

const liveSignals = extractLiveSignals();

// ---------------------------------------------------------------------------
// STEP 5 — Drift detection
// ---------------------------------------------------------------------------

/** @type {Array<{type: string, area: string, field: string, expected: any, actual: any, severity: string}>} */
const driftItems = [];

function addDrift(type, area, field, expected, actual, severity) {
  if (expected != null && actual != null && expected !== actual) {
    driftItems.push({ type, area, field, expected, actual, severity });
  }
}

// A. TRUTH vs CODE
addDrift('TRUTH_VS_CODE', 'graph', 'nodeCount', truthSignals.nodeCount, liveSignals.nodeCount, 'high');
addDrift('TRUTH_VS_CODE', 'graph', 'edgeCount', truthSignals.edgeCount, liveSignals.edgeCount, 'high');
addDrift('TRUTH_VS_CODE', 'graph', 'contentTypeCount', truthSignals.contentTypeCount, liveSignals.contentTypeCount, 'high');
addDrift('TRUTH_VS_CODE', 'validators', 'validatorCount', truthSignals.validatorCount, liveSignals.validatorCount, 'medium');
addDrift('TRUTH_VS_CODE', 'css', 'componentsCssLines', truthSignals.componentsCssLines, liveSignals.componentsCssLines, 'low');
addDrift('TRUTH_VS_CODE', 'components', 'singleComponentCount', truthSignals.singleComponentCount, liveSignals.singleComponentCount, 'low');
addDrift('TRUTH_VS_CODE', 'components', 'coreSectionCount', truthSignals.coreSectionCount, liveSignals.coreSectionCount, 'low');
addDrift('TRUTH_VS_CODE', 'components', 'systemComponentCount', truthSignals.systemComponentCount, liveSignals.systemComponentCount, 'low');

// Check node type breakdown drift
if (truthSignals.nodeBreakdown && liveSignals.nodeBreakdown) {
  const allTypes = new Set([
    ...Object.keys(truthSignals.nodeBreakdown),
    ...Object.keys(liveSignals.nodeBreakdown),
  ]);
  for (const t of allTypes) {
    const expected = truthSignals.nodeBreakdown[t] ?? 0;
    const actual = liveSignals.nodeBreakdown[t] ?? 0;
    if (expected !== actual) {
      driftItems.push({
        type: 'TRUTH_VS_CODE',
        area: 'graph',
        field: `nodeBreakdown.${t}`,
        expected,
        actual,
        severity: 'medium',
      });
    }
  }
  // Check for types in live that are NOT in ContentNodeType
  if (liveSignals.nodeBreakdown) {
    const formalTypes = new Set([
      'blog', 'service', 'resource', 'case-study',
      'feature', 'industry-detail', 'industry-category',
    ]);
    for (const t of Object.keys(liveSignals.nodeBreakdown)) {
      if (!formalTypes.has(t)) {
        driftItems.push({
          type: 'TRUTH_VS_CODE',
          area: 'graph',
          field: `invalidNodeType.${t}`,
          expected: 'not present',
          actual: `${liveSignals.nodeBreakdown[t]} nodes`,
          severity: 'high',
        });
      }
    }
  }
}

// B. TRUTH vs VALIDATORS (rules exist, validator not enforcing)
const totalViolations = systemState
  ? (systemState.cta?.violations ?? 0) +
    (systemState.design?.totalViolations ?? 0) +
    (systemState.graph?.totalErrors ?? 0) +
    (systemState.tokens?.totalViolations ?? 0) +
    (systemState.inlineStyles?.totalViolations ?? 0)
  : 0;

if (systemState) {
  for (const [key, status] of Object.entries(systemState.validators ?? {})) {
    if (status === 'FAIL') {
      driftItems.push({
        type: 'TRUTH_VS_VALIDATORS',
        area: key,
        field: 'status',
        expected: 'PASS',
        actual: 'FAIL',
        severity: 'high',
      });
    }
  }
}

// ---------------------------------------------------------------------------
// STEP 6 — Write drift report
// ---------------------------------------------------------------------------

const driftReport = {
  generatedAt: new Date().toISOString(),
  driftCount: driftItems.length,
  totalViolations,
  drift: driftItems,
};

const driftPath = path.join(root, 'reports', 'system-drift.json');
fs.mkdirSync(path.dirname(driftPath), { recursive: true });
fs.writeFileSync(driftPath, JSON.stringify(driftReport, null, 2) + '\n');
console.log(`\n✓ Wrote ${path.relative(root, driftPath)} (${driftItems.length} drift items)`);

// ---------------------------------------------------------------------------
// STEP 7 — Generate DECISION-STATE.md (overwrite, no append, no history)
// ---------------------------------------------------------------------------

function extractDecisions(todoContent, truthContent) {
  const decisions = [];

  // Extract Q1-Q6 decisions from project-todo.md
  const q1Match = todoContent.match(/Q1[=:]\s*C[^)]*\)?\s*[-—:]*\s*([^\n]+)/i);
  if (q1Match) {
    decisions.push({
      area: 'CTA Labels',
      decision: 'Only from CTA_CONFIG. GOAL_CTA_LABELS and CTA_LABELS scheduled for deletion.',
      source: 'Q1=C',
    });
  }

  const q2Match = todoContent.match(/Q2[=:]\s*A/i);
  if (q2Match) {
    decisions.push({
      area: 'SVG Inline Styles',
      decision: 'Exempt. SVG text elements may use inline fontSize/fontWeight/letterSpacing.',
      source: 'Q2=A',
    });
    decisions.push({
      area: 'Duplicate Logos',
      decision: 'Delete components/layout/ copies (0 consumers). Canonical: src/global/logos/',
      source: 'Q2=A',
    });
  }

  const q3Match = todoContent.match(/Q3[=:]\s*B/i);
  if (q3Match) {
    decisions.push({
      area: 'Header Inline Styles',
      decision: 'Refactor to CSS class toggling + CSS transitions.',
      source: 'Q3=B',
    });
  }

  const q4Match = todoContent.match(/Q4[=:]\s*B/i);
  if (q4Match) {
    decisions.push({
      area: 'Gradient cta-5/cta-6',
      decision: 'Remove references from components.css. Tokens do not exist.',
      source: 'Q4=B',
    });
  }

  const q5Match = todoContent.match(/Q5[=:]\s*B/i);
  if (q5Match) {
    decisions.push({
      area: 'Industry Types',
      decision: 'Preserve industry-detail/industry-category in analysis layer. No bare "industry" type.',
      source: 'Q5=B',
    });
  }

  const q6Match = todoContent.match(/Q6[=:]\s*Yes/i);
  if (q6Match) {
    decisions.push({
      area: 'CTA Validator Scope',
      decision: 'Expanded to scan src/lib/, src/config/, src/components/system/.',
      source: 'Q6=Yes',
    });
  }

  // Extract active rules from SYSTEM-TRUTH.md
  if (truthContent.includes('BEM everywhere')) {
    decisions.push({
      area: 'Component Architecture',
      decision: 'BEM everywhere. No inline styles except shadcn/ui and SVG text elements.',
      source: 'SYSTEM-TRUTH §7.4',
    });
  }

  if (truthContent.includes('Primary: "Start a Conversation"')) {
    decisions.push({
      area: 'Primary CTA',
      decision: '"Start a Conversation" → /contact (LOCKED)',
      source: 'SYSTEM-TRUTH §7.3',
    });
  }

  if (truthContent.includes('Docs always win over code')) {
    decisions.push({
      area: 'Governance',
      decision: 'Docs always win over code. If conflict → change the code.',
      source: 'SYSTEM-TRUTH §7.1',
    });
  }

  if (truthContent.includes('Gradient tokens must exist')) {
    decisions.push({
      area: 'Gradient Lifecycle',
      decision: 'Tokens MUST be defined in foundation.css BEFORE being referenced.',
      source: 'SYSTEM-TRUTH §7.4',
    });
  }

  if (truthContent.includes('ContentNodeType is the ONLY')) {
    decisions.push({
      area: 'Type System',
      decision: 'ContentNodeType is the ONLY allowed type system. No derived types outside the union.',
      source: 'SYSTEM-TRUTH §2.4',
    });
  }

  return decisions;
}

const decisions = extractDecisions(todoMd, truthMd);

const decisionMd = `# DECISION STATE — Active Decisions Only

> Auto-generated by system-sync.mjs. No history. No timeline.
> Generated: ${new Date().toISOString()}

---

| Area | Current Decision | Source |
|------|-----------------|--------|
${decisions.map((d) => `| ${d.area} | ${d.decision} | ${d.source} |`).join('\n')}
`;

const decisionPath = path.join(root, 'Mindwp-Docs', 'system', 'DECISION-STATE.md');
fs.mkdirSync(path.dirname(decisionPath), { recursive: true });
fs.writeFileSync(decisionPath, decisionMd);
console.log(`✓ Wrote ${path.relative(root, decisionPath)} (${decisions.length} decisions)`);

// ---------------------------------------------------------------------------
// STEP 8 — Append SYSTEM HEALTH to SYSTEM-LOG.md
// ---------------------------------------------------------------------------

const logPath = path.join(root, 'Mindwp-Docs', 'SYSTEM-LOG.md');
if (fs.existsSync(logPath)) {
  let log = fs.readFileSync(logPath, 'utf8');

  // Remove existing SYSTEM HEALTH section if present (to replace)
  log = log.replace(/\n---\n\n## SYSTEM HEALTH[\s\S]*$/, '');

  // Determine status
  let status;
  const totalIssues = driftItems.length + totalViolations;
  if (totalIssues === 0) {
    status = 'CLEAN';
  } else if (totalIssues < 20) {
    status = 'WARNING';
  } else {
    status = 'BROKEN';
  }

  const healthSection = `
---

## SYSTEM HEALTH

- **Drift items:** ${driftItems.length}
- **Validator violations:** ${totalViolations}
- **System status:** ${status}

| Check | Expected | Actual | Status |
|-------|----------|--------|--------|
| Node count | ${truthSignals.nodeCount ?? '?'} | ${liveSignals.nodeCount ?? '?'} | ${truthSignals.nodeCount === liveSignals.nodeCount ? '✅' : '❌'} |
| Edge count | ${truthSignals.edgeCount ?? '?'} | ${liveSignals.edgeCount ?? '?'} | ${truthSignals.edgeCount === liveSignals.edgeCount ? '✅' : '❌'} |
| Content types | ${truthSignals.contentTypeCount ?? '?'} | ${liveSignals.contentTypeCount ?? '?'} | ${truthSignals.contentTypeCount === liveSignals.contentTypeCount ? '✅' : '❌'} |
| Validators | ${truthSignals.validatorCount ?? '?'} | ${liveSignals.validatorCount ?? '?'} | ${truthSignals.validatorCount === liveSignals.validatorCount ? '✅' : '❌'} |
| CTA | — | ${systemState?.validators?.cta ?? '?'} | ${systemState?.validators?.cta === 'PASS' ? '✅' : '❌'} |
| Design | — | ${systemState?.validators?.design ?? '?'} | ${systemState?.validators?.design === 'PASS' ? '✅' : '❌'} |
| Graph | — | ${systemState?.validators?.graph ?? '?'} | ${systemState?.validators?.graph === 'PASS' ? '✅' : '❌'} |
| Tokens | — | ${systemState?.validators?.tokens ?? '?'} | ${systemState?.validators?.tokens === 'PASS' ? '✅' : '❌'} |
| Inline Styles | — | ${systemState?.validators?.inlineStyles ?? '?'} | ${systemState?.validators?.inlineStyles === 'PASS' ? '✅' : '❌'} |
`;

  fs.writeFileSync(logPath, log + healthSection);
  console.log(`✓ Updated ${path.relative(root, logPath)} with SYSTEM HEALTH section`);
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------

console.log('\n═══════════════════════════════════════');
const totalIssues = driftItems.length + totalViolations;
if (totalIssues === 0) {
  console.log('✅ SYSTEM STATUS: CLEAN');
} else if (totalIssues < 20) {
  console.log(`⚠️  SYSTEM STATUS: WARNING (${driftItems.length} drift + ${totalViolations} violations = ${totalIssues} total)`);
} else {
  console.log(`❌ SYSTEM STATUS: BROKEN (${driftItems.length} drift + ${totalViolations} violations = ${totalIssues} total)`);
}
console.log('═══════════════════════════════════════');

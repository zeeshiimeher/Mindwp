#!/usr/bin/env node
/**
 * SYSTEM SYNC ENGINE — State and drift generation only.
 *
 * Responsibilities:
 *   1. Read the latest unified validation report
 *   2. Build reports/system-state.json
 *   3. Detect truth drift against live code and write reports/system-drift.json
 *   4. Overwrite Mindwp-Docs/SYSTEM-LOG.md
 *   5. Overwrite Mindwp-Docs/system/DECISION-STATE.md
 *
 * This script does not run validators. Run scripts/core/validate-all.mjs first.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

const truthPath = path.join(root, 'Mindwp-Docs', 'SYSTEM-TRUTH.md');
const indexPath = path.join(root, 'Mindwp-Docs', 'SYSTEM-INDEX.md');
const todoPath = path.join(root, 'Mindwp-Docs', 'project-todo.md');
const statePath = path.join(root, 'reports', 'system-state.json');
const driftPath = path.join(root, 'reports', 'system-drift.json');
const validationReportPath = path.join(root, 'reports', 'validation-results.json');
const authorityMapPath = path.join(root, 'reports', 'authority-map.json');
const typesPath = path.join(root, 'src', 'lib', 'content-graph', 'types.ts');
const validateAllPath = path.join(root, 'scripts', 'core', 'validate-all.mjs');
const systemLogPath = path.join(root, 'Mindwp-Docs', 'SYSTEM-LOG.md');

const truthMd = fs.existsSync(truthPath) ? fs.readFileSync(truthPath, 'utf8') : '';
const indexMd = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, 'utf8') : '';
const todoMd = fs.existsSync(todoPath) ? fs.readFileSync(todoPath, 'utf8') : '';
const validationReport = fs.existsSync(validationReportPath)
  ? JSON.parse(fs.readFileSync(validationReportPath, 'utf8'))
  : null;

function extractTruthSignals(md) {
  const signals = {};
  const nodeMatch = md.match(/(\d+)\s+nodes/);
  const edgeMatch = md.match(/([\d,]+)\s+edges/);
  const typeCountMatch = md.match(/(\d+)\s+formal\s+content\s+types/);
  const validatorMatch = md.match(/(\d+)\s+validators/);
  const breakdownMatch = md.match(
    /blog\s*\((\d+)\).*?resource\s*\((\d+)\).*?industry-detail\s*\((\d+)\).*?case-study\s*\((\d+)\).*?service\s*\((\d+)\).*?feature\s*\((\d+)\).*?industry-category\s*\((\d+)\)/s
  );
  const cssMatch = md.match(/components\.css.*?([\d,]+)\s*\|?\s*$/m);
  const singleMatch = md.match(/Single components\s*\|\s*(\d+)/);
  const coreSectionsMatch = md.match(/Core sections\s*\|\s*(\d+)/);
  const systemMatch = md.match(/System components\s*\|\s*(\d+)/);

  signals.nodeCount = nodeMatch ? parseInt(nodeMatch[1], 10) : null;
  signals.edgeCount = edgeMatch ? parseInt(edgeMatch[1].replace(/,/g, ''), 10) : null;
  signals.contentTypeCount = typeCountMatch ? parseInt(typeCountMatch[1], 10) : null;
  signals.validatorCount = validatorMatch ? parseInt(validatorMatch[1], 10) : null;
  signals.componentsCssLines = cssMatch ? parseInt(cssMatch[1].replace(/,/g, ''), 10) : null;
  signals.singleComponentCount = singleMatch ? parseInt(singleMatch[1], 10) : null;
  signals.coreSectionCount = coreSectionsMatch ? parseInt(coreSectionsMatch[1], 10) : null;
  signals.systemComponentCount = systemMatch ? parseInt(systemMatch[1], 10) : null;

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

  return signals;
}

function extractLiveSignals() {
  const live = {};

  if (fs.existsSync(authorityMapPath)) {
    const map = JSON.parse(fs.readFileSync(authorityMapPath, 'utf8'));
    live.nodeCount = Array.isArray(map.nodes) ? map.nodes.length : null;
    live.edgeCount = Array.isArray(map.edges) ? map.edges.length : null;

    if (Array.isArray(map.nodes)) {
      live.nodeBreakdown = {};
      for (const node of map.nodes) {
        const nodeType = node.type ?? 'unknown';
        live.nodeBreakdown[nodeType] = (live.nodeBreakdown[nodeType] || 0) + 1;
      }
    }
  }

  if (fs.existsSync(typesPath)) {
    const typesSource = fs.readFileSync(typesPath, 'utf8');
    const typeBlock = typesSource.match(/export\s+type\s+ContentNodeType\s*=\s*([\s\S]*?);/);
    if (typeBlock) {
      const pipes = typeBlock[1].match(/\|/g);
      live.contentTypeCount = pipes ? pipes.length : 1;
    }
  }

  if (fs.existsSync(validateAllPath)) {
    const validateAllSource = fs.readFileSync(validateAllPath, 'utf8');
    const matches = validateAllSource.match(/\{\s*name:\s*'/g);
    live.validatorCount = matches ? matches.length : null;
  }

  const cssPath = path.join(root, 'src', 'styles', 'components.css');
  if (fs.existsSync(cssPath)) {
    live.componentsCssLines = fs.readFileSync(cssPath, 'utf8').split('\n').length;
  }

  const singleDir = path.join(root, 'src', 'components', 'reusable', 'single');
  if (fs.existsSync(singleDir)) {
    live.singleComponentCount = fs.readdirSync(singleDir).filter(file => file.endsWith('.tsx')).length;
  }

  const coreDir = path.join(root, 'src', 'components', 'reusable', 'sections', 'core');
  if (fs.existsSync(coreDir)) {
    live.coreSectionCount = fs.readdirSync(coreDir).filter(file => file.endsWith('.tsx')).length;
  }

  const systemDir = path.join(root, 'src', 'components', 'system');
  if (fs.existsSync(systemDir)) {
    live.systemComponentCount = fs.readdirSync(systemDir).filter(file => file.endsWith('.tsx')).length;
  }

  return live;
}

function parseExecutionLedger(todoContent) {
  const activePhaseBlock = todoContent.match(/## 2\. Active Phase\n([\s\S]*?)(?=\n## 3\.)/);
  const block = activePhaseBlock?.[1] ?? '';
  const activePhase = block.match(/###\s+([^\n]+)/)?.[1] ?? null;
  const nextTask = block.match(/\*\*Next task\*\*\n-\s+([^\n]+)/)?.[1] ?? null;

  const taskMatches = [
    ...block.matchAll(/^\|\s*(T-\d+)\s*\|\s*([^|]+?)\|\s*([^|]+?)\|\s*([^|]+?)\|\s*\[(x| )\]\s*\|$/gm),
  ];

  const tasks = taskMatches.map(match => ({
    id: match[1].trim(),
    title: match[2].trim(),
    file: match[3].trim(),
    priority: match[4].trim(),
    done: match[5] === 'x',
  }));

  return {
    activePhase,
    nextTask,
    progress: {
      done: tasks.filter(task => task.done).length,
      total: tasks.length,
    },
    openTasks: tasks.filter(task => !task.done).slice(0, 6),
  };
}

function buildDriftReport(truthSignals, liveSignals, validation) {
  const driftItems = [];

  function addDrift(type, area, field, expected, actual, severity) {
    if (expected != null && actual != null && expected !== actual) {
      driftItems.push({ type, area, field, expected, actual, severity });
    }
  }

  addDrift('TRUTH_VS_CODE', 'graph', 'nodeCount', truthSignals.nodeCount, liveSignals.nodeCount, 'high');
  addDrift('TRUTH_VS_CODE', 'graph', 'edgeCount', truthSignals.edgeCount, liveSignals.edgeCount, 'high');
  addDrift('TRUTH_VS_CODE', 'graph', 'contentTypeCount', truthSignals.contentTypeCount, liveSignals.contentTypeCount, 'high');
  addDrift('TRUTH_VS_CODE', 'validators', 'validatorCount', truthSignals.validatorCount, liveSignals.validatorCount, 'medium');
  addDrift('TRUTH_VS_CODE', 'css', 'componentsCssLines', truthSignals.componentsCssLines, liveSignals.componentsCssLines, 'low');
  addDrift('TRUTH_VS_CODE', 'components', 'singleComponentCount', truthSignals.singleComponentCount, liveSignals.singleComponentCount, 'low');
  addDrift('TRUTH_VS_CODE', 'components', 'coreSectionCount', truthSignals.coreSectionCount, liveSignals.coreSectionCount, 'low');
  addDrift('TRUTH_VS_CODE', 'components', 'systemComponentCount', truthSignals.systemComponentCount, liveSignals.systemComponentCount, 'low');

  if (truthSignals.nodeBreakdown && liveSignals.nodeBreakdown) {
    const allTypes = new Set([
      ...Object.keys(truthSignals.nodeBreakdown),
      ...Object.keys(liveSignals.nodeBreakdown),
    ]);

    for (const nodeType of allTypes) {
      const expected = truthSignals.nodeBreakdown[nodeType] ?? 0;
      const actual = liveSignals.nodeBreakdown[nodeType] ?? 0;
      if (expected !== actual) {
        driftItems.push({
          type: 'TRUTH_VS_CODE',
          area: 'graph',
          field: `nodeBreakdown.${nodeType}`,
          expected,
          actual,
          severity: 'medium',
        });
      }
    }
  }

  if (validation?.total?.blockingFailed > 0) {
    driftItems.push({
      type: 'VALIDATION_STATE',
      area: 'validators',
      field: 'blockingFailed',
      expected: 0,
      actual: validation.total.blockingFailed,
      severity: 'high',
    });
  }

  return {
    generatedAt: new Date().toISOString(),
    driftCount: driftItems.length,
    validationBlockingFailures: validation?.total?.blockingFailed ?? null,
    drift: driftItems,
  };
}

function buildSystemState(validation, drift, execution) {
  const hasValidation = Boolean(validation);
  const blockingFailed = validation?.total?.blockingFailed ?? 0;
  const advisoryFailed = validation?.total?.advisoryFailed ?? 0;

  let status = 'CLEAN';
  if (!hasValidation || blockingFailed > 0 || drift.driftCount > 0) {
    status = hasValidation ? 'BROKEN' : 'WARNING';
  } else if (advisoryFailed > 0) {
    status = 'WARNING';
  }

  return {
    generatedAt: new Date().toISOString(),
    status,
    validation: hasValidation
      ? {
          available: true,
          generatedAt: validation.generatedAt,
          total: validation.total,
          validators: validation.validators,
        }
      : {
          available: false,
          message: 'Run node scripts/core/validate-all.mjs before syncing system state.',
        },
    drift: {
      count: drift.driftCount,
    },
    execution,
  };
}

function renderSystemLog(systemState, drift) {
  const validationRows = systemState.validation.available
    ? systemState.validation.validators
        .map(validator => {
          const kind = validator.blocking ? 'Blocking' : 'Advisory';
          const status = validator.status === 'pass' ? 'PASS' : 'FAIL';
          return `| ${validator.name} | ${kind} | ${status} | ${validator.duration}ms |`;
        })
        .join('\n')
    : '| Validation not available | - | - | - |';

  const driftLines = drift.drift.length
    ? drift.drift.map(item => `- ${item.area}.${item.field}: expected ${item.expected}, actual ${item.actual}`).join('\n')
    : '- No drift detected.';

  const openTaskLines = systemState.execution.openTasks.length
    ? systemState.execution.openTasks.map(task => `- ${task.id} — ${task.title} (${task.priority})`).join('\n')
    : '- No open tasks.';

  return `# SYSTEM LOG — Current State

> Generated: ${systemState.generatedAt}

---

## SYSTEM STATUS

| Item | Value |
|---|---|
| State | ${systemState.status} |
| Validation Report | ${systemState.validation.available ? 'AVAILABLE' : 'MISSING'} |
| Blocking Validator Failures | ${systemState.validation.available ? systemState.validation.total.blockingFailed : 'unknown'} |
| Advisory Validator Failures | ${systemState.validation.available ? systemState.validation.total.advisoryFailed : 'unknown'} |
| Drift Count | ${systemState.drift.count} |

---

## CURRENT EXECUTION

| Item | Value |
|---|---|
| Active Phase | ${systemState.execution.activePhase ?? 'Unknown'} |
| Progress | ${systemState.execution.progress.done} / ${systemState.execution.progress.total} |
| Next Task | ${systemState.execution.nextTask ?? 'None'} |

### Open Tasks

${openTaskLines}

---

## VALIDATION

| Validator | Type | Status | Duration |
|---|---|---|---|
${validationRows}

---

## DRIFT

${driftLines}
`;
}

function extractDecisions(truthContent, indexContent) {
  const decisions = [];

  if (truthContent.includes('Docs always win over code')) {
    decisions.push({
      decision: 'Docs override code',
      reason: 'The governance hierarchy is the fixed authority model for the repo.',
      impact: 'If docs and code conflict, change the code instead of redefining the rule in execution docs.',
      source: 'SYSTEM-TRUTH §2.1',
    });
  }

  if (truthContent.includes('Primary CTA: "Start a Conversation" → /contact')) {
    decisions.push({
      decision: 'Primary CTA is locked',
      reason: 'The conversion model is conversation-first.',
      impact: 'Primary CTA label and href stay "Start a Conversation" → /contact across the system.',
      source: 'SYSTEM-TRUTH §1',
    });
  }

  if (truthContent.includes('ContentNodeType is the ONLY allowed type system')) {
    decisions.push({
      decision: 'ContentNodeType is the only content type system',
      reason: 'Graph integrity depends on one formal union for content nodes.',
      impact: 'Analysis, reporting, and tooling must not introduce derived runtime content types.',
      source: 'SYSTEM-TRUTH §2.4',
    });
  }

  if (indexContent.includes('generated only. It is never authoritative. It is never manually edited.')) {
    decisions.push({
      decision: 'Reports are generated outputs only',
      reason: 'Generated reports are state and analysis artifacts, not governing inputs.',
      impact: 'Do not manually edit anything under reports/ or treat those files as authoritative docs.',
      source: 'SYSTEM-INDEX §3',
    });
  }

  if (truthContent.includes('BEM everywhere')) {
    decisions.push({
      decision: 'Production styling stays in BEM classes',
      reason: 'The component architecture is class-driven with limited exceptions.',
      impact: 'Keep inline styling limited to approved shadcn/ui and SVG text-element cases.',
      source: 'SYSTEM-TRUTH §7.4',
    });
  }

  return decisions;
}

const truthSignals = extractTruthSignals(truthMd);
const liveSignals = extractLiveSignals();
const execution = parseExecutionLedger(todoMd);
const driftReport = buildDriftReport(truthSignals, liveSignals, validationReport);
const systemState = buildSystemState(validationReport, driftReport, execution);

fs.mkdirSync(path.dirname(statePath), { recursive: true });
fs.writeFileSync(statePath, JSON.stringify(systemState, null, 2) + '\n');
console.log(`✓ Wrote ${path.relative(root, statePath)}`);

fs.mkdirSync(path.dirname(driftPath), { recursive: true });
fs.writeFileSync(driftPath, JSON.stringify(driftReport, null, 2) + '\n');
console.log(`✓ Wrote ${path.relative(root, driftPath)} (${driftReport.driftCount} drift items)`);

fs.writeFileSync(systemLogPath, renderSystemLog(systemState, driftReport));
console.log(`✓ Wrote ${path.relative(root, systemLogPath)}`);

const decisions = extractDecisions(truthMd, indexMd);
const decisionMd = `# DECISION STATE — Active Decisions Only

> Auto-generated by system-sync.mjs. No history. No timeline.
> Generated: ${new Date().toISOString()}

---

| Decision | Reason | Impact | Source |
|----------|--------|--------|--------|
${decisions.map((decision) => `| ${decision.decision} | ${decision.reason} | ${decision.impact} | ${decision.source} |`).join('\n')}
`;

const decisionPath = path.join(root, 'Mindwp-Docs', 'system', 'DECISION-STATE.md');
fs.mkdirSync(path.dirname(decisionPath), { recursive: true });
fs.writeFileSync(decisionPath, decisionMd);
console.log(`✓ Wrote ${path.relative(root, decisionPath)} (${decisions.length} decisions)`);

console.log('\n═══════════════════════════════════════');
console.log(
  systemState.status === 'CLEAN'
    ? '✅ SYSTEM STATUS: CLEAN'
    : systemState.status === 'WARNING'
      ? '⚠ SYSTEM STATUS: WARNING'
      : '❌ SYSTEM STATUS: BROKEN'
);
console.log('═══════════════════════════════════════');

if (!validationReport) {
  console.log('Validation report missing. Run node scripts/core/validate-all.mjs before the next sync.');
}

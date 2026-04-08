#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const reportsDir = path.join(root, 'reports');
const reportPath = path.join(reportsDir, 'system-report.json');

const detailedValidatorSources = new Set([
  'validate-content-contract',
  'validate-conversion-contract',
  'validate-graph',
  'validate-tokens',
  'validate-inline-styles',
]);

const pipeline = [
  {
    name: 'generate-authority-map',
    command: 'npm',
    args: ['run', '-s', 'generate:authority-map'],
    expectedOutputs: ['authority-map.json'],
  },
  {
    name: 'validate-all',
    command: 'node',
    args: ['scripts/core/validate-all.mjs'],
    expectedOutputs: ['validation-results.json'],
  },
  {
    name: 'system-sync',
    command: 'node',
    args: ['scripts/core/system-sync.mjs'],
    expectedOutputs: ['system-state.json', 'system-drift.json'],
  },
  {
    name: 'generate-authority-scores',
    command: 'npm',
    args: ['run', '-s', 'generate:authority-scores'],
    expectedOutputs: ['topic-authority-scores.json'],
  },
  {
    name: 'analyze-gaps',
    command: 'npm',
    args: ['run', '-s', 'analyze:gaps'],
    expectedOutputs: ['content-gaps.json'],
  },
];

function runStep(step) {
  try {
    const output = execFileSync(step.command, step.args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: 180_000,
    });
    return {
      name: step.name,
      status: 'pass',
      output: output || '',
    };
  } catch (error) {
    return {
      name: step.name,
      status: 'fail',
      output: [error.stdout, error.stderr].filter(Boolean).join('\n'),
    };
  }
}

function readJson(fileName) {
  const filePath = path.join(reportsDir, fileName);
  if (!fs.existsSync(filePath)) return null;

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function normalizeMessage(message) {
  return String(message ?? '').replace(/\s+/g, ' ').trim();
}

function pushItem(target, { source, code, message, count = 1, details = null }) {
  if (!count || count < 1) return;
  target.push({ source, code, message, count, details });
}

function excerptOutput(output) {
  const lines = String(output ?? '')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .slice(0, 8);

  return lines.join(' | ');
}

function getValidationFailure(validation, name) {
  return validation?.errors?.find(error => error.validator === name) ?? null;
}

function collectBlockingItems(validation, contentReport, conversionReport, graphReport, tokenReport, inlineStyleReport) {
  const items = [];

  if ((contentReport?.summary?.missingSystem ?? 0) > 0) {
    pushItem(items, {
      source: 'validate-content-contract',
      code: 'missing_system',
      count: contentReport.summary.missingSystem,
      message: `Missing required system metadata on ${contentReport.summary.missingSystem} content node(s).`,
    });
  }

  const missingRequiredMetadata = contentReport?.issues?.filter(issue => issue.code === 'missing_required_metadata' && issue.metadataKey !== 'systems') ?? [];
  if (missingRequiredMetadata.length > 0) {
    pushItem(items, {
      source: 'validate-content-contract',
      code: 'missing_required_metadata',
      count: missingRequiredMetadata.length,
      message: `Missing blocking content metadata on ${missingRequiredMetadata.length} node(s).`,
    });
  }

  const invalidContactLinks = conversionReport?.issues?.filter(issue => issue.code !== 'invalid_intent') ?? [];
  if (invalidContactLinks.length > 0) {
    pushItem(items, {
      source: 'validate-conversion-contract',
      code: 'invalid_contact_links',
      count: invalidContactLinks.length,
      message: `Broken CTA contact contract on ${invalidContactLinks.length} location(s).`,
    });
  }

  if ((graphReport?.summary?.invalidEdges ?? 0) > 0) {
    pushItem(items, {
      source: 'validate-graph',
      code: 'invalid_edges',
      count: graphReport.summary.invalidEdges,
      message: `Invalid graph edges detected: ${graphReport.summary.invalidEdges}.`,
    });
  }

  if ((tokenReport?.violationCount ?? 0) > 0) {
    pushItem(items, {
      source: 'validate-tokens',
      code: 'token_violations',
      count: tokenReport.violationCount,
      message: `Design token violations in production CSS: ${tokenReport.violationCount}.`,
    });
  }

  if ((inlineStyleReport?.violationCount ?? 0) > 0) {
    pushItem(items, {
      source: 'validate-inline-styles',
      code: 'inline_style_violations',
      count: inlineStyleReport.violationCount,
      message: `Inline style violations in production UI: ${inlineStyleReport.violationCount}.`,
    });
  }

  for (const validatorName of ['check-generated', 'typecheck', 'validate-internal-links']) {
    const failure = getValidationFailure(validation, validatorName);
    if (!failure) continue;

    pushItem(items, {
      source: validatorName,
      code: 'validator_failed',
      count: 1,
      message: `${validatorName} failed.`,
      details: excerptOutput(failure.output),
    });
  }

  return items;
}

function collectAdvisoryItems(validation, contentReport, conversionReport, graphReport) {
  const items = [];

  const advisoryMetadataCount = Math.max(
    0,
    (contentReport?.summary?.missingMetadata ?? 0) - (contentReport?.summary?.missingSystem ?? 0)
  );
  if (advisoryMetadataCount > 0) {
    pushItem(items, {
      source: 'validate-content-contract',
      code: 'missing_metadata',
      count: advisoryMetadataCount,
      message: `Recommended content metadata is missing in ${advisoryMetadataCount} place(s).`,
    });
  }

  const missingSystemParam = conversionReport?.warnings?.filter(warning => warning.code === 'missing_system_param').length ?? 0;
  if (missingSystemParam > 0) {
    pushItem(items, {
      source: 'validate-conversion-contract',
      code: 'cta_missing_system',
      count: missingSystemParam,
      message: `CTA system param is missing on ${missingSystemParam} page(s).`,
    });
  }

  const missingSourceParam = conversionReport?.warnings?.filter(warning => warning.code === 'missing_source_param').length ?? 0;
  if (missingSourceParam > 0) {
    pushItem(items, {
      source: 'validate-conversion-contract',
      code: 'cta_missing_source',
      count: missingSourceParam,
      message: `CTA source param is missing on ${missingSourceParam} page(s).`,
    });
  }

  if ((graphReport?.summary?.orphanNodes ?? 0) > 0) {
    pushItem(items, {
      source: 'validate-graph',
      code: 'orphan_nodes',
      count: graphReport.summary.orphanNodes,
      message: `Graph orphan nodes detected: ${graphReport.summary.orphanNodes}.`,
    });
  }

  for (const failure of validation?.errors ?? []) {
    if (failure.blocking || detailedValidatorSources.has(failure.validator)) continue;

    pushItem(items, {
      source: failure.validator,
      code: 'validator_warning',
      count: 1,
      message: `${failure.validator} reported advisory issues.`,
      details: excerptOutput(failure.output),
    });
  }

  return items;
}

function buildSummary(blockingItems, advisoryItems) {
  const lines = [];
  const topBlocking = [...blockingItems].sort((left, right) => right.count - left.count).slice(0, 3);
  const topAdvisory = [...advisoryItems].sort((left, right) => right.count - left.count).slice(0, 2);

  if (topBlocking.length === 0 && topAdvisory.length === 0) {
    return ['System report is clean.'];
  }

  for (const item of topBlocking) {
    lines.push(item.message);
  }

  for (const item of topAdvisory) {
    if (lines.length >= 5) break;
    lines.push(item.message);
  }

  return lines;
}

function buildPriority(blockingItems, advisoryItems) {
  const candidates = [
    ...blockingItems.map(item => ({
      count: item.count,
      text: item.code === 'missing_system'
        ? `Add required system metadata (${item.count} node${item.count === 1 ? '' : 's'})`
        : item.code === 'invalid_contact_links'
          ? `Fix CTA contact contract issues (${item.count} location${item.count === 1 ? '' : 's'})`
          : item.code === 'invalid_edges'
            ? `Repair invalid graph edges (${item.count})`
            : item.code === 'token_violations'
              ? `Fix design token violations (${item.count})`
              : item.code === 'inline_style_violations'
                ? `Remove inline styles from production UI (${item.count})`
                : item.code === 'validator_failed'
                  ? `Resolve ${item.source} failure`
                  : item.message,
    })),
    ...advisoryItems.map(item => ({
      count: item.count,
      text: item.code === 'cta_missing_system'
        ? `Fix CTA system param (${item.count} page${item.count === 1 ? '' : 's'})`
        : item.code === 'cta_missing_source'
          ? `Fix CTA source param (${item.count} page${item.count === 1 ? '' : 's'})`
          : item.code === 'orphan_nodes'
              ? `Resolve orphan nodes (${item.count})`
              : item.message,
    })),
  ];

  return candidates
    .sort((left, right) => right.count - left.count)
    .slice(0, 5)
    .map(candidate => candidate.text);
}

function main() {
  fs.mkdirSync(reportsDir, { recursive: true });

  const stepResults = pipeline.map(runStep);
  const validation = readJson('validation-results.json');
  const contentReport = readJson('content-contract-report.json');
  const conversionReport = readJson('conversion-contract-report.json');
  const graphReport = readJson('graph-report.json');
  const tokenReport = readJson('token-report.json');
  const inlineStyleReport = readJson('inline-style-report.json');

  const blockingItems = collectBlockingItems(
    validation,
    contentReport,
    conversionReport,
    graphReport,
    tokenReport,
    inlineStyleReport
  );
  const advisoryItems = collectAdvisoryItems(validation, contentReport, conversionReport, graphReport);

  for (const step of pipeline) {
    const result = stepResults.find(item => item.name === step.name);
    const missingOutputs = step.expectedOutputs.filter(fileName => !fs.existsSync(path.join(reportsDir, fileName)));

    if (result?.status === 'fail' || missingOutputs.length > 0) {
      pushItem(blockingItems, {
        source: step.name,
        code: 'pipeline_step_failed',
        count: 1,
        message: `${step.name} did not complete cleanly.`,
        details: missingOutputs.length > 0
          ? `Missing outputs: ${missingOutputs.join(', ')}`
          : excerptOutput(result?.output),
      });
    }
  }

  const report = {
    status: blockingItems.length > 0 ? 'broken' : advisoryItems.length > 0 ? 'warning' : 'clean',
    blocking: {
      count: blockingItems.length,
      items: blockingItems,
    },
    advisory: {
      count: advisoryItems.length,
      items: advisoryItems,
    },
    content: {
      missing_system: contentReport?.summary?.missingSystem ?? 0,
      missing_metadata: contentReport?.summary?.missingMetadata ?? 0,
    },
    conversion: {
      cta_missing_system: conversionReport?.warnings?.filter(warning => warning.code === 'missing_system_param').length ?? 0,
      cta_missing_source: conversionReport?.warnings?.filter(warning => warning.code === 'missing_source_param').length ?? 0,
      invalid_contact_links: conversionReport?.issues?.filter(issue => issue.code !== 'invalid_intent').length ?? 0,
    },
    graph: {
      invalid_edges: graphReport?.summary?.invalidEdges ?? 0,
      orphan_nodes: graphReport?.summary?.orphanNodes ?? 0,
    },
    design: {
      token_violations: tokenReport?.violationCount ?? 0,
      inline_style_violations: inlineStyleReport?.violationCount ?? 0,
    },
    summary: buildSummary(blockingItems, advisoryItems),
    priority: buildPriority(blockingItems, advisoryItems),
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
  console.log(`✓ Wrote ${path.relative(root, reportPath)}`);

  if (report.status === 'broken') {
    process.exitCode = 1;
  }
}

main();
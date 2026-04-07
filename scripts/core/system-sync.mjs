#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

const statePath = path.join(root, 'reports', 'system-state.json');
const driftPath = path.join(root, 'reports', 'system-drift.json');
const validationReportPath = path.join(root, 'reports', 'validation-results.json');
const authorityMapPath = path.join(root, 'reports', 'authority-map.json');

function readJson(filePath) {
  if (!fs.existsSync(filePath)) return null;

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function buildDrift(validation, authorityMap) {
  const drift = [];

  if (!validation) {
    drift.push({
      type: 'missing_validation_report',
      severity: 'high',
      message: 'validation-results.json is missing. Run node scripts/core/validate-all.mjs first.',
    });
  }

  if (!authorityMap) {
    drift.push({
      type: 'missing_authority_map',
      severity: 'medium',
      message: 'authority-map.json is missing. Run the core generators to refresh dashboard data.',
    });
  }

  if (validation?.total?.blockingFailed > 0) {
    drift.push({
      type: 'blocking_validation_failures',
      severity: 'high',
      message: `${validation.total.blockingFailed} blocking validator(s) are failing.`,
      actual: validation.total.blockingFailed,
    });
  }

  if (validation?.total?.advisoryFailed > 0) {
    drift.push({
      type: 'advisory_validation_failures',
      severity: 'low',
      message: `${validation.total.advisoryFailed} advisory validator(s) are failing.`,
      actual: validation.total.advisoryFailed,
    });
  }

  if (authorityMap && !Array.isArray(authorityMap.nodes)) {
    drift.push({
      type: 'invalid_authority_map',
      severity: 'high',
      message: 'authority-map.json exists but does not contain a nodes array.',
    });
  }

  return {
    generatedAt: new Date().toISOString(),
    driftCount: drift.length,
    drift,
  };
}

function buildSystemState(validation, authorityMap, driftReport) {
  const blockingFailed = validation?.total?.blockingFailed ?? 0;
  const advisoryFailed = validation?.total?.advisoryFailed ?? 0;

  let status = 'CLEAN';
  if (!validation || blockingFailed > 0) {
    status = 'BROKEN';
  } else if (driftReport.driftCount > 0 || advisoryFailed > 0) {
    status = 'WARNING';
  }

  return {
    generatedAt: new Date().toISOString(),
    status,
    validation: validation
      ? {
          available: true,
          generatedAt: validation.generatedAt,
          total: validation.total,
          validators: validation.validators,
        }
      : {
          available: false,
          total: {
            blockingFailed: 0,
            total: 0,
          },
        },
    graph: authorityMap
      ? {
          available: true,
          nodeCount: Array.isArray(authorityMap.nodes) ? authorityMap.nodes.length : 0,
          edgeCount: Array.isArray(authorityMap.edges) ? authorityMap.edges.length : 0,
        }
      : {
          available: false,
          nodeCount: 0,
          edgeCount: 0,
        },
    summary: {
      blockingFailed,
      advisoryFailed,
      driftCount: driftReport.driftCount,
    },
  };
}

function main() {
  const validation = readJson(validationReportPath);
  const authorityMap = readJson(authorityMapPath);
  const driftReport = buildDrift(validation, authorityMap);
  const systemState = buildSystemState(validation, authorityMap, driftReport);

  fs.mkdirSync(path.dirname(statePath), { recursive: true });
  fs.writeFileSync(statePath, JSON.stringify(systemState, null, 2) + '\n');
  console.log(`✓ Wrote ${path.relative(root, statePath)}`);

  fs.mkdirSync(path.dirname(driftPath), { recursive: true });
  fs.writeFileSync(driftPath, JSON.stringify(driftReport, null, 2) + '\n');
  console.log(`✓ Wrote ${path.relative(root, driftPath)} (${driftReport.driftCount} drift items)`);

  console.log('\n═══════════════════════════════════════');
  console.log(
    systemState.status === 'CLEAN'
      ? '✅ SYSTEM STATUS: CLEAN'
      : systemState.status === 'WARNING'
        ? '⚠ SYSTEM STATUS: WARNING'
        : '❌ SYSTEM STATUS: BROKEN'
  );
  console.log('═══════════════════════════════════════');
}

main();
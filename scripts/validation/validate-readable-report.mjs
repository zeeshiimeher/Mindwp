#!/usr/bin/env node
/**
 * Readable Report Validator
 *
 * Validates that the readable report system is structurally sound:
 * - Generator module exports expected functions
 * - Formatter module exports expected functions
 * - Export script exists
 *
 * WARNING-ONLY: never fails the build. Prints warnings for drift.
 *
 * Source: CONTENT-GOVERNANCE.md (Conversion Intelligence System)
 */
/* eslint-disable no-console */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
let warnings = 0;

function warn(msg) {
  console.warn(`  ⚠ ${msg}`);
  warnings++;
}

function checkFileExists(relPath, label) {
  const fullPath = path.join(root, relPath);
  if (!fs.existsSync(fullPath)) {
    warn(`${label} not found at ${relPath}`);
    return false;
  }
  return true;
}

function checkExport(relPath, exportName) {
  const fullPath = path.join(root, relPath);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf-8');
  if (!content.includes(exportName)) {
    warn(`${relPath} missing expected export: ${exportName}`);
  }
}

console.log('[validate-readable-report] Checking readable report system...');

// Check files exist
checkFileExists('src/lib/dev/readableReportGenerator.ts', 'Report generator');
checkFileExists('src/lib/dev/readableReportFormatter.ts', 'Report formatter');
checkFileExists('scripts/analyze/export-readable-report.mjs', 'Export script');

// Check exports
checkExport('src/lib/dev/readableReportGenerator.ts', 'generateReadableReport');
checkExport('src/lib/dev/readableReportFormatter.ts', 'formatReadableReport');

// Check package.json has script
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf-8'));
if (!pkg.scripts?.['analyze:readable-report']) {
  warn('package.json missing "analyze:readable-report" script');
}

if (warnings === 0) {
  console.log('  ✅ Readable report system OK');
} else {
  console.log(`  ${warnings} warning(s) found`);
}

// Always exit 0 — warning only
process.exit(0);

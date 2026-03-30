#!/usr/bin/env node
/**
 * Checklist Validator
 *
 * Validates the fix checklist engine structure:
 * - Module exists and exports expected functions
 * - Depends on required upstream engines
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

console.log('[validate-checklist] Checking fix checklist engine...');

checkFileExists('src/lib/dev/fixChecklistEngine.ts', 'Fix checklist engine');
checkExport('src/lib/dev/fixChecklistEngine.ts', 'generateFixChecklist');

// Upstream dependencies
checkFileExists('src/lib/dev/conversionPageInspector.ts', 'Page inspector (dependency)');
checkFileExists('src/lib/dev/contentRewriteEngine.ts', 'Rewrite engine (dependency)');
checkFileExists('src/lib/dev/autoFixRecommendationEngine.ts', 'Auto fix engine (dependency)');

// Server action integration
const actionsPath = path.join(root, 'src/app/dev/authority-dashboard/actions.ts');
if (fs.existsSync(actionsPath)) {
  const content = fs.readFileSync(actionsPath, 'utf-8');
  if (!content.includes('getFixChecklistAction')) {
    warn('actions.ts missing getFixChecklistAction server action');
  }
  if (!content.includes('getRewriteSuggestion')) {
    warn('actions.ts missing getRewriteSuggestion server action');
  }
}

if (warnings === 0) {
  console.log('  ✅ Fix checklist system OK');
} else {
  console.log(`  ${warnings} warning(s) found`);
}

process.exit(0);

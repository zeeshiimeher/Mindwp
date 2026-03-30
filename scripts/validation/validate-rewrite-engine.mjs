#!/usr/bin/env node
/**
 * Rewrite Engine Validator
 *
 * Validates the content rewrite engine structure:
 * - Module exists and exports expected functions
 * - contextScoringConfig exists with expected exports
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

console.log('[validate-rewrite-engine] Checking rewrite engine...');

// Core files
checkFileExists('src/lib/dev/contentRewriteEngine.ts', 'Content rewrite engine');
checkFileExists('src/lib/dev/contextScoringConfig.ts', 'Context scoring config');
checkFileExists('src/lib/dev/autoFixRecommendationEngine.ts', 'Auto fix recommendation engine');
checkFileExists('src/lib/dev/fixLearningEngine.ts', 'Fix learning engine');

// Expected exports
checkExport('src/lib/dev/contentRewriteEngine.ts', 'generateRewriteSuggestion');
checkExport('src/lib/dev/contextScoringConfig.ts', 'CONTEXT_SCORING');
checkExport('src/lib/dev/contextScoringConfig.ts', 'getContextWeights');
checkExport('src/lib/dev/contextScoringConfig.ts', 'PRIORITY_WEIGHT');
checkExport('src/lib/dev/autoFixRecommendationEngine.ts', 'getAutoFixRecommendations');
checkExport('src/lib/dev/fixLearningEngine.ts', 'getFixPerformance');
checkExport('src/lib/dev/fixLearningEngine.ts', 'getBestFixForIssue');

if (warnings === 0) {
  console.log('  ✅ Rewrite engine system OK');
} else {
  console.log(`  ${warnings} warning(s) found`);
}

process.exit(0);

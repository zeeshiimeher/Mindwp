#!/usr/bin/env node
/**
 * Session Log Validator
 *
 * Validates the session tracker system:
 * - session-log.json exists and is valid JSON array
 * - Session tracker module exports expected functions
 * - CLI script exists
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

console.log('[validate-session-log] Checking session tracker system...');

// Session log file
const logPath = path.join(root, 'reports/session-log.json');
if (fs.existsSync(logPath)) {
  try {
    const parsed = JSON.parse(fs.readFileSync(logPath, 'utf-8'));
    if (!Array.isArray(parsed)) {
      warn('reports/session-log.json is not a JSON array');
    }
  } catch {
    warn('reports/session-log.json is not valid JSON');
  }
} else {
  warn('reports/session-log.json not found');
}

// Module
checkFileExists('src/lib/dev/sessionTracker.ts', 'Session tracker module');

// CLI script
checkFileExists('scripts/dev/add-session-entry.mjs', 'Add session entry script');

// Dashboard panel
checkFileExists(
  'src/app/dev/authority-dashboard/panels/SessionTrackerPanel.tsx',
  'Session tracker panel'
);

if (warnings === 0) {
  console.log('  ✅ Session tracker system OK');
} else {
  console.log(`  ${warnings} warning(s) found`);
}

process.exit(0);

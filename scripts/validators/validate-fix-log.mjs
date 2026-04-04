#!/usr/bin/env node
/**
 * Fix Log Validator
 *
 * Validates the fix history system:
 * - fix-log.json exists and is a JSON array
 * - each entry matches the active fix history contract
 * - entry ids are unique when present
 *
 * WARNING-ONLY: never fails the build. Prints warnings for drift.
 */
/* eslint-disable no-console */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const logPath = path.join(root, 'reports', 'fix-log.json');
let warnings = 0;

const VALID_TYPES = new Set(['ui', 'bug', 'refactor']);
const VALID_IMPACTS = new Set(['high', 'medium', 'low']);

function warn(message) {
  console.warn(`  ⚠ ${message}`);
  warnings++;
}

function isObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function isIsoDate(value) {
  return typeof value === 'string' && !Number.isNaN(Date.parse(value));
}

function validateEntry(entry, index, seenIds) {
  const label = `reports/fix-log.json entry ${index}`;

  if (!isObject(entry)) {
    warn(`${label} is not an object`);
    return;
  }

  if (typeof entry.id !== 'string' || entry.id.trim() === '') {
    warn(`${label} is missing string field id`);
  } else if (seenIds.has(entry.id)) {
    warn(`${label} has duplicate id ${entry.id}`);
  } else {
    seenIds.add(entry.id);
  }

  if (!isIsoDate(entry.timestamp)) {
    warn(`${label} is missing valid ISO timestamp field timestamp`);
  }

  if (typeof entry.title !== 'string' || entry.title.trim() === '') {
    warn(`${label} is missing string field title`);
  }

  if (typeof entry.component !== 'string' || entry.component.trim() === '') {
    warn(`${label} is missing string field component`);
  }

  if (typeof entry.type !== 'string' || !VALID_TYPES.has(entry.type)) {
    warn(`${label} has invalid type; expected one of ${[...VALID_TYPES].join(', ')}`);
  }

  if (typeof entry.impact !== 'string' || !VALID_IMPACTS.has(entry.impact)) {
    warn(`${label} has invalid impact; expected one of ${[...VALID_IMPACTS].join(', ')}`);
  }

  if (entry.status !== 'completed') {
    warn(`${label} must have status "completed"`);
  }

  if (!isIsoDate(entry.date)) {
    warn(`${label} is missing valid ISO date field date`);
  }

  if (typeof entry.slug !== 'string' || entry.slug.trim() === '') {
    warn(`${label} is missing string field slug`);
  }

  if (typeof entry.fixType !== 'string' || entry.fixType.trim() === '') {
    warn(`${label} is missing string field fixType`);
  }

  if (typeof entry.scoreBefore !== 'number' || Number.isNaN(entry.scoreBefore)) {
    warn(`${label} is missing numeric field scoreBefore`);
  }

  if (typeof entry.scoreAfter !== 'number' || Number.isNaN(entry.scoreAfter)) {
    warn(`${label} is missing numeric field scoreAfter`);
  }

  if (typeof entry.notes !== 'string' || entry.notes.trim() === '') {
    warn(`${label} is missing string field notes`);
  }
}

function main() {
  console.log('[validate-fix-log] Checking fix history system...');

  if (!fs.existsSync(logPath)) {
    warn('reports/fix-log.json not found');
  } else {
    try {
      const parsed = JSON.parse(fs.readFileSync(logPath, 'utf-8'));
      if (!Array.isArray(parsed)) {
        warn('reports/fix-log.json is not a JSON array');
      } else {
        const seenIds = new Set();
        parsed.forEach((entry, index) => validateEntry(entry, index, seenIds));
      }
    } catch {
      warn('reports/fix-log.json is not valid JSON');
    }
  }

  if (warnings === 0) {
    console.log('  ✅ Fix history system OK');
  } else {
    console.log(`  ${warnings} warning(s) found`);
  }

  process.exit(0);
}

main();
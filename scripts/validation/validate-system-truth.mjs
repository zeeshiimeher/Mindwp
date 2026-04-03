#!/usr/bin/env node
/**
 * SYSTEM-TRUTH drift validator.
 *
 * Compares key claims in SYSTEM-TRUTH.md against live code:
 *   - Content graph node count
 *   - Content graph edge count
 *   - ContentNodeType count
 *   - Validator count
 *   - components.css line count (±50 tolerance)
 *
 * Exits 0 if SYSTEM-TRUTH matches code.
 * Exits 1 with itemised drift on mismatch.
 *
 * Source: project-todo.md T-101
 */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const TRUTH_PATH = path.join(root, 'Mindwp-Docs', 'SYSTEM-TRUTH.md');
const AUTHORITY_MAP = path.join(root, 'reports', 'authority-map.json');
const TYPES_PATH = path.join(root, 'src', 'lib', 'content-graph', 'types.ts');
const VALIDATE_ALL = path.join(root, 'scripts', 'validate-all.mjs');
const COMPONENTS_CSS = path.join(root, 'src', 'styles', 'components.css');

/** @type {Array<{field:string, expected:number, actual:number}>} */
const drift = [];

// ---------------------------------------------------------------------------
// Parse truth signals
// ---------------------------------------------------------------------------

const truthMd = fs.readFileSync(TRUTH_PATH, 'utf8');

function extractNumber(regex) {
  const m = truthMd.match(regex);
  return m ? parseInt(m[1].replace(/,/g, ''), 10) : null;
}

const truth = {
  nodeCount: extractNumber(/(\d+)\s+nodes/),
  edgeCount: extractNumber(/([\d,]+)\s+edges/),
  contentTypeCount: extractNumber(/(\d+)\s+formal\s+content\s+types/),
  validatorCount: extractNumber(/(\d+)\s+validators/),
  componentsCssLines: extractNumber(/components\.css.*?([\d,]+)\s*\|?\s*$/m),
};

// ---------------------------------------------------------------------------
// Extract live signals
// ---------------------------------------------------------------------------

const live = {};

if (fs.existsSync(AUTHORITY_MAP)) {
  const map = JSON.parse(fs.readFileSync(AUTHORITY_MAP, 'utf8'));
  live.nodeCount = Array.isArray(map.nodes) ? map.nodes.length : null;
  live.edgeCount = Array.isArray(map.edges) ? map.edges.length : null;
}

if (fs.existsSync(TYPES_PATH)) {
  const src = fs.readFileSync(TYPES_PATH, 'utf8');
  const block = src.match(/export\s+type\s+ContentNodeType\s*=\s*([\s\S]*?);/);
  if (block) {
    const pipes = block[1].match(/\|/g);
    live.contentTypeCount = pipes ? pipes.length : 1;
  }
}

if (fs.existsSync(VALIDATE_ALL)) {
  const src = fs.readFileSync(VALIDATE_ALL, 'utf8');
  const matches = src.match(/\{\s*name:\s*'/g);
  live.validatorCount = matches ? matches.length : null;
}

if (fs.existsSync(COMPONENTS_CSS)) {
  live.componentsCssLines = fs.readFileSync(COMPONENTS_CSS, 'utf8').split('\n').length;
}

// ---------------------------------------------------------------------------
// Compare
// ---------------------------------------------------------------------------

function check(field, expected, actual, tolerance = 0) {
  if (expected == null || actual == null) return;
  if (Math.abs(expected - actual) > tolerance) {
    drift.push({ field, expected, actual });
  }
}

check('nodeCount', truth.nodeCount, live.nodeCount);
check('edgeCount', truth.edgeCount, live.edgeCount);
check('contentTypeCount', truth.contentTypeCount, live.contentTypeCount);
check('validatorCount', truth.validatorCount, live.validatorCount);
check('componentsCssLines', truth.componentsCssLines, live.componentsCssLines, 50);

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

if (drift.length === 0) {
  console.log('✓ SYSTEM-TRUTH drift check passed.');
  process.exit(0);
} else {
  console.error(`✗ SYSTEM-TRUTH drift: ${drift.length} mismatch(es):`);
  for (const d of drift) {
    console.error(`  ${d.field}: TRUTH says ${d.expected}, code says ${d.actual}`);
  }
  process.exitCode = 1;
}

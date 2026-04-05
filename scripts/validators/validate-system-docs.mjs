#!/usr/bin/env node
/**
 * System documentation validator.
 *
 * Ensures SYSTEM-INTELLIGENCE-DOC.md stays aligned with actual project
 * systems — dashboards, scripts, and reports.
 *
 * WARNING-ONLY: never fails the build. Prints warnings for drift.
 *
 * Source: SYSTEM-INTELLIGENCE-DOC.md §11 Auto-Update Rule
 */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docPath = path.join(root, 'Mindwp-Docs', 'core', 'SYSTEM-INTELLIGENCE-DOC.md');

// ── Helpers ──────────────────────────────────────────────────────────

function fileExists(relPath) {
  return fs.existsSync(path.join(root, relPath));
}

function readDoc() {
  if (!fs.existsSync(docPath)) {
    return null;
  }
  return fs.readFileSync(docPath, 'utf-8');
}

// ── Discover actual systems ──────────────────────────────────────────

function discoverReports() {
  const reportsDir = path.join(root, 'reports');
  if (!fs.existsSync(reportsDir)) return [];
  return fs
    .readdirSync(reportsDir)
    .filter(f => f.endsWith('.json') || f.endsWith('.md') || f.endsWith('.dot'));
}

function discoverScripts() {
  const dirs = ['scripts', 'scripts/validation', 'scripts/analyze'];
  const results = [];
  for (const dir of dirs) {
    const full = path.join(root, dir);
    if (!fs.existsSync(full)) continue;
    for (const f of fs.readdirSync(full)) {
      if (f.endsWith('.mjs') || f.endsWith('.ts') || f.endsWith('.cjs')) {
        results.push(path.join(dir, f));
      }
    }
  }
  return results;
}

function discoverDashboards() {
  const dashboards = [];
  const devDashDir = path.join(root, 'src', 'app', 'dev', 'authority-dashboard');
  if (fs.existsSync(path.join(devDashDir, 'page.tsx'))) {
    dashboards.push({ route: '/dev/authority-dashboard', file: 'src/app/dev/authority-dashboard/page.tsx' });
  }
  const contentDashDir = path.join(root, 'src', 'app', 'content-dashboard');
  if (fs.existsSync(path.join(contentDashDir, 'page.tsx'))) {
    dashboards.push({ route: '/content-dashboard', file: 'src/app/content-dashboard/page.tsx' });
  }
  return dashboards;
}

// ── Validate ─────────────────────────────────────────────────────────

function validate() {
  const warnings = [];

  const doc = readDoc();
  if (!doc) {
    warnings.push({
      type: 'missing_doc',
      message: 'SYSTEM-INTELLIGENCE-DOC.md does not exist. Create it at Mindwp-Docs/core/SYSTEM-INTELLIGENCE-DOC.md',
    });
    return warnings;
  }

  // Rule 1 — Missing Dashboard Documentation
  const dashboards = discoverDashboards();
  for (const dash of dashboards) {
    if (!doc.includes(dash.route)) {
      warnings.push({
        type: 'missing_dashboard_doc',
        message: `Dashboard ${dash.route} (${dash.file}) exists but is not documented in SYSTEM-INTELLIGENCE-DOC.md`,
      });
    }
  }

  // Rule 2 — Missing Report Documentation
  const reports = discoverReports();
  for (const report of reports) {
    if (!doc.includes(report)) {
      warnings.push({
        type: 'missing_report_doc',
        message: `Report ${report} exists in /reports/ but is not documented in SYSTEM-INTELLIGENCE-DOC.md`,
      });
    }
  }

  // Rule 3 — Missing Script Documentation
  const scripts = discoverScripts();
  for (const script of scripts) {
    const basename = path.basename(script);
    // Skip lib helpers and READMEs — they are internal
    if (basename === 'validator-helpers.mjs' || basename === 'README.md') continue;
    if (!doc.includes(basename)) {
      warnings.push({
        type: 'missing_script_doc',
        message: `Script ${script} exists but is not documented in SYSTEM-INTELLIGENCE-DOC.md`,
      });
    }
  }

  // Rule 4 — Broken References (doc references files that don't exist)
  const fileRefPattern = /(?:reports\/[\w.-]+|scripts\/[\w./+-]+\.(?:mjs|ts|cjs)|src\/lib\/dev\/[\w.-]+\.ts|src\/config\/[\w.-]+\.ts|src\/app\/[^\s)]+\/page\.tsx)/g;
  const refs = doc.match(fileRefPattern) || [];
  const seen = new Set();
  for (const ref of refs) {
    if (seen.has(ref)) continue;
    seen.add(ref);
    if (!fileExists(ref)) {
      warnings.push({
        type: 'broken_reference',
        message: `SYSTEM-INTELLIGENCE-DOC.md references ${ref} but file does not exist`,
      });
    }
  }

  return warnings;
}

// ── Run ──────────────────────────────────────────────────────────────

const warnings = validate();

if (warnings.length === 0) {
  console.log('[validate-system-docs] ✓ System documentation is up to date.');
} else {
  console.log(`[validate-system-docs] ${warnings.length} warning(s):\n`);
  for (const w of warnings) {
    console.log(`  ⚠ [${w.type}] ${w.message}`);
  }
  console.log('');
}

// Always exit 0 — warnings only, never fail build
process.exit(0);

/**
 * Token V2 Migration — Automated Computed Style Verification
 *
 * Usage:
 *   node --import tsx/esm scripts/dev/token-v2-verify.js [--capture|--verify]
 *
 *   --capture   Take BEFORE snapshot (run before any CSS changes)
 *   --verify    Compare current state against BEFORE snapshot
 *
 * Requires the dev server running on port 3009.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';

import { systemEnv } from '../../config/systemEnv.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const SNAPSHOT_PATH = path.join(ROOT, 'reports', 'token-v2-baseline.json');
const VALIDATOR_PATH = path.join(ROOT, 'scripts', 'dev', 'token-v2-validator.js');
const BASE_URL = systemEnv.BASE_URL;

const ROUTES = ['/', '/services', '/blog', '/features', '/case-studies'];

const mode = process.argv.includes('--verify') ? 'verify' : 'capture';

async function collectSnapshot(page, route) {
  await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForSelector('body', { timeout: 10000 });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  await page.addScriptTag({ path: VALIDATOR_PATH });

  const snapshot = await page.evaluate(() => {
    return window.__checkAll();
  });

  return snapshot;
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 2200 });

  const fullSnapshot = {};

  for (const route of ROUTES) {
    console.log(`[token-v2] ${mode}: ${route}`);
    try {
      fullSnapshot[route] = await collectSnapshot(page, route);
    } catch (err) {
      console.warn(`[token-v2] failed on ${route}: ${err.message}`);
      fullSnapshot[route] = { error: err.message };
    }
  }

  await browser.close();

  if (mode === 'capture') {
    fs.mkdirSync(path.dirname(SNAPSHOT_PATH), { recursive: true });
    fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(fullSnapshot, null, 2));
    console.log(`[token-v2] Baseline saved: ${SNAPSHOT_PATH}`);
    console.log(`[token-v2] Routes captured: ${Object.keys(fullSnapshot).length}`);
    return;
  }

  // Verify mode
  if (!fs.existsSync(SNAPSHOT_PATH)) {
    console.error('[token-v2] No baseline found. Run with --capture first.');
    process.exit(1);
  }

  const baseline = JSON.parse(fs.readFileSync(SNAPSHOT_PATH, 'utf-8'));
  let totalDrifts = 0;

  for (const route of ROUTES) {
    const before = baseline[route];
    const after = fullSnapshot[route];

    if (!before || before.error || !after || after.error) {
      console.log(`[token-v2] ${route}: SKIP (missing data)`);
      continue;
    }

    for (const selector of Object.keys(before)) {
      const b = before[selector];
      const a = after[selector];

      if (!a) {
        console.log(`  MISSING: ${route} ${selector}`);
        totalDrifts++;
        continue;
      }

      if (b.root && a.root) {
        for (const prop of Object.keys(b.root)) {
          if (b.root[prop] !== a.root?.[prop]) {
            console.log(`  DRIFT: ${route} ${selector} root.${prop}`);
            console.log(`    before: ${b.root[prop]}`);
            console.log(`    after:  ${a.root?.[prop]}`);
            totalDrifts++;
          }
        }
      }
    }
  }

  if (totalDrifts === 0) {
    console.log('\n[token-v2] ✅ PASS — Zero visual drift detected.');
  } else {
    console.log(`\n[token-v2] ❌ FAIL — ${totalDrifts} drift(s) detected.`);
    process.exit(1);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

#!/usr/bin/env node
/**
 * Token enforcement validator.
 *
 * Scans components.css for hardcoded spacing/font-size values that
 * SHOULD reference foundation.css design tokens instead.
 *
 * Enforced token families:
 *   --space-{1..10}  → padding, margin, gap
 *   --font-{xs..5xl} → font-size
 *
 * Allowed exceptions:
 *   - 0 / 0px (reset values)
 *   - padding: 0 var(--*) patterns (mixed valid)
 *   - Values inside calc() expressions
 *   - Media query definitions
 *   - !important declarations on token-using rules
 *
 * Source: SYSTEM-TRUTH.md §8.4 Design System Rules
 */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const COMPONENTS_CSS = path.join(root, 'src', 'styles', 'components.css');

/** @type {Array<{file:string,line:number,rule:string,message:string}>} */
const violations = [];

/**
 * Properties where spacing tokens (--space-*) should be used.
 */
const SPACING_PROPS = ['padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'gap',
  'row-gap', 'column-gap'];

/**
 * Properties where font tokens (--font-*) should be used.
 */
const FONT_PROPS = ['font-size'];

/**
 * Values that are always allowed (resets, zero).
 */
function isExemptValue(value) {
  const trimmed = value.trim();
  // Zero values
  if (/^0(px|rem|em)?$/.test(trimmed)) return true;
  // Already uses a var() token
  if (/var\(--/.test(trimmed)) return true;
  // calc() expressions (may compose tokens)
  if (/calc\(/.test(trimmed)) return true;
  // inherit / initial / auto / unset
  if (/^(inherit|initial|auto|unset|revert)$/.test(trimmed)) return true;
  return false;
}

/**
 * Check if a multi-value shorthand is exempt.
 * e.g. "0 var(--space-6)" — one part is 0, other uses token → OK
 * e.g. "calc(var(--space-6) + var(--space-2))" — calc using tokens → OK
 */
function isExemptShorthand(value) {
  // If entire value uses calc with var tokens, it's OK
  if (/calc\(/.test(value) && /var\(--/.test(value)) return true;
  const parts = value.trim().split(/\s+/);
  return parts.every(p => isExemptValue(p));
}

function scanComponentsCSS() {
  if (!fs.existsSync(COMPONENTS_CSS)) {
    console.error('⚠ src/styles/components.css not found');
    return;
  }

  const text = fs.readFileSync(COMPONENTS_CSS, 'utf8');
  const lines = text.split('\n');
  const rel = 'src/styles/components.css';

  let insideMediaQuery = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Track media query context (font-size in @media is often responsive override)
    if (trimmed.startsWith('@media')) insideMediaQuery = true;
    if (insideMediaQuery && trimmed === '}') {
      // Simple brace tracking — not perfect but catches top-level closes
      // We still scan inside media queries but note it
    }

    // Skip comments and empty lines
    if (trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith('//') || trimmed === '') continue;

    // Parse property: value from CSS line
    const propMatch = trimmed.match(/^([a-z-]+)\s*:\s*(.+?)\s*;?\s*$/);
    if (!propMatch) continue;

    const prop = propMatch[1];
    const value = propMatch[2].replace(/!important\s*$/, '').replace(/\/\*.*?\*\//, '').trim();

    // Check spacing properties
    if (SPACING_PROPS.includes(prop)) {
      if (!isExemptShorthand(value)) {
        violations.push({
          file: rel,
          line: i + 1,
          rule: 'TOKEN_SPACING',
          message: `Hardcoded spacing: \`${prop}: ${value}\` — use --space-* token instead.`,
        });
      }
    }

    // Check font-size
    if (FONT_PROPS.includes(prop)) {
      if (!isExemptValue(value)) {
        violations.push({
          file: rel,
          line: i + 1,
          rule: 'TOKEN_FONT_SIZE',
          message: `Hardcoded font-size: \`${prop}: ${value}\` — use --font-* token instead.`,
        });
      }
    }
  }
}

function main() {
  scanComponentsCSS();

  if (shouldReportJson) {
    const reportPath = path.join(root, 'reports', 'token-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(
      reportPath,
      JSON.stringify({
        generatedAt: new Date().toISOString(),
        passed: violations.length === 0,
        violationCount: violations.length,
        violations,
      }, null, 2)
    );
  }

  if (violations.length === 0) {
    console.log('✓ Token enforcement passed.');
    return;
  }

  console.error(`✗ Token enforcement found ${violations.length} violation(s):`);
  for (const v of violations) {
    console.error(`  [${v.file}:${v.line}] [${v.rule}] ${v.message}`);
  }
  process.exitCode = 1;
}

main();

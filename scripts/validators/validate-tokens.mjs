#!/usr/bin/env node
/**
 * Token enforcement validator.
 *
 * Scans all CSS files under src/styles/ (excluding tokens.css and known
 * legacy/generated files) for:
 *
 *   1. TOKEN_SPACING  — hardcoded spacing values on padding/margin/gap props
 *                       that should reference --mw-* tokens instead.
 *   2. TOKEN_FONT_SIZE — hardcoded font-size values that should use --mw-* tokens.
 *   3. TOKEN_RAW_HEX  — raw hex colour codes (#xxx or #xxxxxx) in property values
 *                       outside of tokens.css. Only tokens.css may have raw hex.
 *
 * Allowed exceptions:
 *   - 0 / 0px (reset values)
 *   - Values already using var(--...)
 *   - calc() / clamp() expressions
 *   - inherit / initial / auto / unset
 *   - 1px (border reset)
 *   - Inline comment lines
 */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

/** Files to skip — only tokens.css may contain raw values. */
const SKIP_FILES = new Set([
  'tokens.css',
]);

/** Directories to skip entirely. */
const SKIP_DIRS = new Set(['_legacy']);

/** @type {Array<{file:string,line:number,rule:string,message:string}>} */
const violations = [];

/**
 * Properties where spacing tokens (--mw-space-*) should be used.
 */
const SPACING_PROPS = new Set([
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'gap',
  'row-gap',
  'column-gap',
]);

/**
 * Properties where font-size tokens (--mw-text-*) should be used.
 */
const FONT_PROPS = new Set(['font-size']);

/**
 * Values that are always allowed (resets, zero, computed functions).
 */
function isExemptValue(value) {
  const trimmed = value.trim();
  if (/^0(px|rem|em)?$/.test(trimmed)) return true;           // zero resets
  if (trimmed === '1px') return true;                           // border resets
  if (/var\(--/.test(trimmed)) return true;                    // uses a token
  if (/calc\(/.test(trimmed)) return true;                     // calc expression
  if (/clamp\(/.test(trimmed)) return true;                    // clamp expression
  if (/^(inherit|initial|auto|unset|revert|none)$/.test(trimmed)) return true;
  return false;
}

/**
 * Check multi-value shorthands (e.g. "0 var(--mw-space-4)").
 * All individual parts must be exempt for the shorthand to pass.
 */
function isExemptShorthand(value) {
  if (/calc\(/.test(value) && /var\(--/.test(value)) return true;
  if (/clamp\(/.test(value)) return true;
  const parts = value.trim().split(/\s+/);
  return parts.every(p => isExemptValue(p));
}

/**
 * Recursively collect .css files under src/styles/, respecting skip lists.
 * @param {string} dir  absolute path
 * @returns {string[]}  absolute paths of CSS files to scan
 */
function collectCssFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) {
        results.push(...collectCssFiles(path.join(dir, entry.name)));
      }
    } else if (entry.name.endsWith('.css') && !SKIP_FILES.has(entry.name)) {
      results.push(path.join(dir, entry.name));
    }
  }
  return results;
}

/**
 * Scan a single CSS file for token violations.
 * @param {string} absPath
 */
function scanFile(absPath) {
  const rel = path.relative(root, absPath);
  const text = fs.readFileSync(absPath, 'utf8');
  const lines = text.split('\n');

  let insideComment = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Track multi-line comment blocks (/* ... */)
    if (!insideComment && trimmed.includes('/*')) insideComment = true;
    if (insideComment) {
      if (trimmed.includes('*/')) insideComment = false;
      continue;
    }

    // Skip single-line comment syntax and empty lines
    if (trimmed === '' || trimmed.startsWith('//')) continue;

    // Skip @-rules (media, keyframes, import, layer, etc.)
    if (trimmed.startsWith('@')) continue;

    // Parse "property: value;" from CSS declaration lines
    const propMatch = trimmed.match(/^([\w-]+)\s*:\s*(.+?)\s*;?\s*$/);
    if (!propMatch) continue;

    const prop = propMatch[1];
    const value = propMatch[2]
      .replace(/!important\s*$/, '')
      .replace(/\/\*.*?\*\//, '')
      .trim();

    // ── Check 1: spacing token enforcement ──────────────────────────────
    if (SPACING_PROPS.has(prop)) {
      if (!isExemptShorthand(value)) {
        violations.push({
          file: rel,
          line: i + 1,
          rule: 'TOKEN_SPACING',
          message: `Hardcoded spacing: \`${prop}: ${value}\` — use a --mw-space-* token instead.`,
        });
      }
    }

    // ── Check 2: font-size token enforcement ────────────────────────────
    if (FONT_PROPS.has(prop)) {
      if (!isExemptValue(value)) {
        violations.push({
          file: rel,
          line: i + 1,
          rule: 'TOKEN_FONT_SIZE',
          message: `Hardcoded font-size: \`${prop}: ${value}\` — use a --mw-text-* token instead.`,
        });
      }
    }

    // ── Check 3: raw hex colour ──────────────────────────────────────────
    // Any #xxx or #xxxxxx or #xxxxxxxx in a declaration value is a violation
    // (colours must be defined in tokens.css and referenced via var(--mw-*))
    if (/#[0-9a-fA-F]{3,8}\b/.test(value)) {
      violations.push({
        file: rel,
        line: i + 1,
        rule: 'TOKEN_RAW_HEX',
        message: `Raw hex colour in \`${prop}: ${value}\` — reference a --mw-* token via var() instead.`,
      });
    }
  }
}

function main() {
  const stylesDir = path.join(root, 'src', 'styles');

  if (!fs.existsSync(stylesDir)) {
    console.error('⚠  src/styles/ directory not found');
    process.exitCode = 1;
    return;
  }

  const cssFiles = collectCssFiles(stylesDir);

  if (cssFiles.length === 0) {
    console.warn('⚠  No CSS files found to scan in src/styles/');
    return;
  }

  for (const file of cssFiles) {
    scanFile(file);
  }

  if (shouldReportJson) {
    const reportPath = path.join(root, 'reports', 'token-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(
      reportPath,
      JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          scannedFiles: cssFiles.map(f => path.relative(root, f)),
          passed: violations.length === 0,
          violationCount: violations.length,
          violations,
        },
        null,
        2
      )
    );
  }

  if (violations.length === 0) {
    console.log(`✓ Token enforcement passed (${cssFiles.length} files scanned).`);
    return;
  }

  console.error(`✗ Token enforcement found ${violations.length} violation(s):`);
  for (const v of violations) {
    console.error(`  [${v.file}:${v.line}] [${v.rule}] ${v.message}`);
  }
  process.exitCode = 1;
}

main();

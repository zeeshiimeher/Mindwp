#!/usr/bin/env node
/**
 * Global inline style scanner.
 *
 * Scans ALL .tsx files for ANY inline style={{ usage.
 * This is broader than the SR3 check in validate-design-system.cjs
 * (which only catches var(--*) inline styles).
 *
 * Exemptions:
 *   - src/components/ui/ (shadcn components — third-party)
 *   - SVG <text> / <tspan> elements (fontSize, fontWeight, letterSpacing)
 *
 * Source: SYSTEM-STATE.md (Architecture Rules)
 */

import fs from 'node:fs';
import path from 'node:path';

import { listProductionUiFiles } from '../lib/contract-validator-helpers.mjs';

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

/** @type {Array<{file:string,line:number,rule:string,message:string}>} */
const violations = [];

function toRel(absPath) {
  return path.relative(root, absPath).replaceAll(path.sep, '/');
}

/**
 * Check if the style attribute at lineIndex is on an SVG <text> or <tspan> element.
 * Looks backward up to 5 lines for an opening <text or <tspan tag.
 */
function isSvgTextContext(lines, lineIndex) {
  for (let j = lineIndex; j >= Math.max(0, lineIndex - 5); j--) {
    if (/<text(\s|>|$)/.test(lines[j]) || /<tspan(\s|>|$)/.test(lines[j])) {
      return true;
    }
    if (/<[a-zA-Z]/.test(lines[j]) && !/<text/.test(lines[j]) && !/<tspan/.test(lines[j]) && j !== lineIndex) {
      return false;
    }
  }
  return false;
}

function scanFile(fileAbs) {
  const rel = toRel(fileAbs);

  // Exemption: shadcn/ui components
  if (rel.includes('components/ui/')) return;

  const text = fs.readFileSync(fileAbs, 'utf8');
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (/style\s*=\s*\{\{/.test(line)) {
      // Exemption: SVG text elements
      if (isSvgTextContext(lines, i)) continue;

      // Classify the violation
      const hasVarToken = /var\(--/.test(line);
      let rule = 'INLINE_STYLE';
      let message = 'Inline style detected. Use a BEM class instead.';

      if (hasVarToken) {
        rule = 'INLINE_STYLE_VAR';
        message = 'Inline style with var(--*) token. Use a BEM class instead.';
      }

      violations.push({ file: rel, line: i + 1, rule, message });
    }
  }
}

function main() {
  const files = listProductionUiFiles(root);
  for (const f of files) {
    scanFile(f);
  }

  if (shouldReportJson) {
    const reportPath = path.join(root, 'reports', 'inline-style-report.json');
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
    console.log('✓ Inline style scan passed (0 inline styles found).');
    return;
  }

  const varCount = violations.filter(v => v.rule === 'INLINE_STYLE_VAR').length;
  const plainCount = violations.filter(v => v.rule === 'INLINE_STYLE').length;

  console.error(`✗ Inline style scan found ${violations.length} violation(s):`);
  console.error(`  var(--*) inline styles: ${varCount}`);
  console.error(`  other inline styles: ${plainCount}`);
  console.error('');
  for (const v of violations) {
    console.error(`  [${v.file}:${v.line}] [${v.rule}] ${v.message}`);
  }
  process.exitCode = 1;
}

main();

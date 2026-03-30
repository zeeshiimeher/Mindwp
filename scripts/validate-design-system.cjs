#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Design system enforcement guard (no auto-fix).
 *
 * Scans: src/**
 * Fails (exit code 1) on:
 * - shadcn Button regressions
 * - Tailwind utility classes applied directly on <a>/<button> (when using `.btn`)
 * - Footer CTA sections missing required CTA system classes
 */
const fs = require('fs');
const path = require('path');

const WORKSPACE_ROOT = process.cwd();
const cliArgs = new Set(process.argv.slice(2));
const shouldReportJson = cliArgs.has('--report-json');
const SRC_ROOT = path.join(WORKSPACE_ROOT, 'src');

/** @type {Array<{file:string,line:number,rule:string,message:string}>} */
const violations = [];

function isFile(p) {
  try {
    return fs.statSync(p).isFile();
  } catch {
    return false;
  }
}

function walkFiles(dir) {
  /** @type {string[]} */
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out.push(...walkFiles(full));
      continue;
    }
    if (!ent.isFile()) continue;
    if (full.endsWith('.md')) continue;
    out.push(full);
  }
  return out;
}

function toRel(absPath) {
  return path.relative(WORKSPACE_ROOT, absPath).replaceAll(path.sep, '/');
}

function lineOfIndex(text, index) {
  // 1-based line number
  let line = 1;
  for (let i = 0; i < index && i < text.length; i++) {
    if (text[i] === '\n') line++;
  }
  return line;
}

function addViolationLine(fileAbs, lineNumber, rule, message) {
  violations.push({
    file: toRel(fileAbs),
    line: lineNumber,
    rule,
    message,
  });
}

function scanButtonViolations(fileAbs, text) {
  // Only scan code-like files (avoid false positives in CSS/content files).
  if (!/\.(ts|tsx|js|jsx|html)$/.test(fileAbs)) return;

  // Only treat "Button" as a violation when it is coming from shadcn's module.
  // This prevents false positives for our own design-system components named Button
  // and for code examples in comments.
  const shadcnButtonImportRe =
    /import\s*\{[^}]*\bButton\b[^}]*\}\s*from\s*["'][^"']*components\/ui\/button[^"']*["']/g;
  const shadcnButtonVariantsImportRe =
    /import\s*\{[^}]*\bbuttonVariants\b[^}]*\}\s*from\s*["'][^"']*components\/ui\/button[^"']*["']/g;

  const hasShadcnButtonImport = shadcnButtonImportRe.test(text) || shadcnButtonVariantsImportRe.test(text);

  // Flag shadcn imports directly.
  {
    let m;
    while ((m = shadcnButtonImportRe.exec(text))) {
      addViolationLine(
        fileAbs,
        lineOfIndex(text, m.index),
        'BUTTON_VIOLATION',
        'shadcn Button import detected (from `components/ui/button`).',
      );
    }
  }

  {
    let m;
    while ((m = shadcnButtonVariantsImportRe.exec(text))) {
      addViolationLine(
        fileAbs,
        lineOfIndex(text, m.index),
        'BUTTON_VIOLATION',
        'shadcn `buttonVariants` import detected (from `components/ui/button`).',
      );
    }
  }

  // Only flag shadcn JSX/usage when the shadcn button module is imported.
  if (!hasShadcnButtonImport) return;

  const patterns = [
    {
      rule: 'BUTTON_VIOLATION',
      re: /<Button\b/g,
      message: 'shadcn <Button> JSX usage detected.',
    },
    {
      rule: 'BUTTON_VIOLATION',
      re: /\bbuttonVariants\b/g,
      message: 'shadcn `buttonVariants` usage detected.',
    },
    {
      rule: 'BUTTON_VIOLATION',
      re: /data-slot\s*=\s*["']button["']/g,
      message: '`data-slot="button"` detected.',
    },
  ];

  for (const p of patterns) {
    let m;
    while ((m = p.re.exec(text))) {
      addViolationLine(fileAbs, lineOfIndex(text, m.index), p.rule, p.message);
    }
  }
}

function scanTailwindButtonViolations(fileAbs, text) {
  // Only scan TS/TSX/JS/JSX for JSX tags.
  if (!/\.(ts|tsx|js|jsx)$/.test(fileAbs)) return;

  const forbiddenPrefixes = ['px-', 'py-', 'rounded-', 'bg-', 'hover:', 'group-hover:'];

  // Scan opening tags, allowing multi-line props.
  const tagRe = /<(a|button)\b/g;
  let m;
  while ((m = tagRe.exec(text))) {
    const startIdx = m.index;
    const endIdx = text.indexOf('>', startIdx);
    if (endIdx === -1) continue;
    const tagChunk = text.slice(startIdx, endIdx + 1);

    // Only consider if className/class exists on the element.
    const classAttrMatch =
      tagChunk.match(/className\s*=\s*{?\s*`([^`]*)`/s) ||
      tagChunk.match(/className\s*=\s*{?\s*"([^"]*)"/s) ||
      tagChunk.match(/className\s*=\s*{?\s*'([^']*)'/s) ||
      tagChunk.match(/class\s*=\s*"([^"]*)"/s) ||
      tagChunk.match(/class\s*=\s*'([^']*)'/s);

    if (!classAttrMatch) continue;

    const classValue = classAttrMatch[1] || '';
    const classTokens = classValue.split(/\s+/).filter(Boolean);

    // Only enforce Tailwind utility blocking on elements that are intended to be buttons
    // (i.e., using the global `.btn` system). This avoids false positives on regular links.
    const isGlobalButton = classTokens.includes('btn');
    if (!isGlobalButton) continue;

    let hasViolation = false;
    let offending = '';
    for (const token of classTokens) {
      if (token === 'text-link') continue; // allowed non-Tailwind utility class

      if (token.startsWith('text-')) {
        hasViolation = true;
        offending = token;
        break;
      }

      for (const pref of forbiddenPrefixes) {
        if (token.startsWith(pref)) {
          hasViolation = true;
          offending = token;
          break;
        }
      }
      if (hasViolation) break;
    }

    if (hasViolation) {
      addViolationLine(
        fileAbs,
        lineOfIndex(text, startIdx),
        'TAILWIND_BUTTON_VIOLATION',
        `Tailwind utility class detected on <${m[1]}> element: \`${offending}\``,
      );
    }
  }
}

function extractSections(text) {
  /** @type {Array<{start:number,end:number,body:string}>} */
  const sections = [];
  let idx = 0;
  while (true) {
    const start = text.indexOf('<section', idx);
    if (start === -1) break;
    const end = text.indexOf('</section>', start);
    if (end === -1) break;
    sections.push({
      start,
      end: end + '</section>'.length,
      body: text.slice(start, end + '</section>'.length),
    });
    idx = end + '</section>'.length;
  }
  return sections;
}

function isFooterCTAIntent(sectionBody) {
  const h2Idx = sectionBody.indexOf('<h2');
  if (h2Idx === -1) return false;

  // Require a supporting <p> very near the <h2> (prevents false positives from content sections).
  const h2CloseIdx = sectionBody.indexOf('</h2>', h2Idx);
  if (h2CloseIdx === -1) return false;
  const afterH2Window = sectionBody.slice(h2CloseIdx + 5, h2CloseIdx + 5 + 400);
  const pNearH2 = afterH2Window.includes('<p');
  if (!pNearH2) return false;

  // Require 1–2 .btn anchor actions within a short window after the <h2>.
  const afterH2ForButtons = sectionBody.slice(h2Idx, h2Idx + 2000);
  const btnAnchors = [...afterH2ForButtons.matchAll(/<a\s+[^>]*className\s*=\s*["'][^"']*\bbtn\b[^"']*["'][^>]*>/g)].length;
  if (btnAnchors < 1 || btnAnchors > 2) return false;

  // Conversion intent heuristic: CTA buttons to demo/contact/pricing.
  const hasConversionHref = /<a\s+[^>]*href\s*=\s*["']\/(demo|contact|pricing)\b[^"']*["']/g.test(afterH2ForButtons);
  return hasConversionHref;
}

function scanCtaViolations(fileAbs, text) {
  // Only scan TS/TSX/JS/JSX for JSX tags.
  if (!/\.(ts|tsx|js|jsx)$/.test(fileAbs)) return;

  const sections = extractSections(text);
  const lastTwo = sections.slice(-2);
  for (const s of lastTwo) {
    if (!isFooterCTAIntent(s.body)) continue;

    const hasFooterCtaClass = s.body.includes('footer-cta');
    const hasPanelClass = s.body.includes('cta__panel');

    if (!(hasFooterCtaClass && hasPanelClass)) {
      addViolationLine(
        fileAbs,
        lineOfIndex(text, s.start),
        'CTA_VIOLATION',
        'Footer CTA intent detected (h2 + paragraph + 1–2 btn actions) but missing required CTA system classes (`footer-cta` and `cta__panel`).',
      );
    }
  }
}

function main() {
  if (!isFile(path.join(WORKSPACE_ROOT, 'package.json'))) {
    console.error('[validate-design-system] package.json not found in current working directory.');
    process.exitCode = 1;
    return;
  }

  if (!fs.existsSync(SRC_ROOT)) {
    console.error('[validate-design-system] source directory not found (expected src/).');
    process.exitCode = 1;
    return;
  }

  const files = walkFiles(SRC_ROOT);
  for (const abs of files) {
    const text = fs.readFileSync(abs, 'utf8');
    scanButtonViolations(abs, text);
    scanTailwindButtonViolations(abs, text);
    scanCtaViolations(abs, text);
  }

  if (violations.length > 0) {
    console.error('[validate-design-system] Validation failed. Fix the following violations:\n');
    for (const v of violations) {
      console.error(`[validate-design-system] ${v.file}:${v.line}`);
      console.error(`[validate-design-system]   [${v.rule}] ${v.message}`);
      console.error('[validate-design-system]');
    }
    if (shouldReportJson) {
      const reportPath = path.join(WORKSPACE_ROOT, 'reports', 'design-system-report.json');
      fs.mkdirSync(path.dirname(reportPath), { recursive: true });
      fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), passed: false, violationCount: violations.length, violations }, null, 2));
    }
    process.exitCode = 1;
    return;
  }

  console.log('✅ Design system validation passed.');

  if (shouldReportJson) {
    const reportPath = path.join(WORKSPACE_ROOT, 'reports', 'design-system-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), passed: true, violationCount: 0, violations: [] }, null, 2));
  }
}

main();

#!/usr/bin/env node
/**
 * Section background alternation check.
 *
 * Scans page renderer TSX files for consecutive section components
 * and checks that adjacent sections don't share the same background tier.
 *
 * Background tiers:
 *   white  — backgroundColor="bg-white" | "bg-surface"
 *   grey   — backgroundColor="bg-background" | "bg-muted/30" | omitted/default
 *   special— gradient/brand backgrounds (not checked)
 *
 * Source: project-todo.md T-102
 */

import fs from 'node:fs';
import path from 'node:path';
import { globSync } from 'node:fs';

const root = process.cwd();

/** @type {Array<{file:string, line:number, message:string}>} */
const warnings = [];

/**
 * Resolve a backgroundColor prop value to a tier.
 * @returns {'white'|'grey'|'special'|null}
 */
function resolveTier(bgValue) {
  if (!bgValue) return 'grey'; // default is grey/page-bg
  const v = bgValue.toLowerCase().trim();
  if (v.includes('white') || v.includes('surface')) return 'white';
  if (v.includes('background') || v.includes('muted') || v === 'default' || v === '') return 'grey';
  if (v.includes('gradient') || v.includes('primary') || v.includes('brand') || v.includes('cta')) return 'special';
  return 'grey'; // unknown → treat as grey
}

/**
 * Extract section components and their backgroundColor props from a renderer file.
 */
function extractSections(text) {
  const sections = [];
  // Match JSX components ending in "Section" with optional backgroundColor prop
  const sectionRe = /(<\w*Section\b[^>]*)(\/?>)/g;
  let match;

  while ((match = sectionRe.exec(text)) !== null) {
    const tag = match[1];
    const lineNum = text.substring(0, match.index).split('\n').length;

    // Extract backgroundColor prop
    const bgMatch = tag.match(/backgroundColor\s*=\s*[{"']([^"'}]+)[}"']/);
    const bgValue = bgMatch ? bgMatch[1] : null;

    sections.push({ line: lineNum, bg: bgValue, tier: resolveTier(bgValue) });
  }

  return sections;
}

function scanRenderers() {
  const rendererDirs = [
    path.join(root, 'src', 'domains', 'services', 'renderers'),
    path.join(root, 'src', 'domains', 'features', 'renderers'),
    path.join(root, 'src', 'domains', 'industries', 'renderers'),
  ];

  for (const dir of rendererDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

    for (const file of files) {
      const abs = path.join(dir, file);
      const rel = path.relative(root, abs);
      const text = fs.readFileSync(abs, 'utf8');
      const sections = extractSections(text);

      // Check for consecutive same-tier (non-special) sections
      for (let i = 1; i < sections.length; i++) {
        const prev = sections[i - 1];
        const curr = sections[i];

        // Skip special tiers (gradients, brand) — intentional pattern-breakers
        if (prev.tier === 'special' || curr.tier === 'special') continue;

        if (prev.tier === curr.tier) {
          warnings.push({
            file: rel,
            line: curr.line,
            message: `Consecutive sections share "${curr.tier}" background (prev at L${prev.line}, current at L${curr.line}). Consider alternating bg-white ↔ bg-background.`,
          });
        }
      }
    }
  }
}

scanRenderers();

if (warnings.length === 0) {
  console.log('✓ Section background alternation check passed.');
} else {
  console.warn(`⚠ Section background: ${warnings.length} warning(s):`);
  for (const w of warnings) {
    console.warn(`  [${w.file}:${w.line}] ${w.message}`);
  }
  // Warnings only — do not fail the build
}

/**
 * Internal Link Validator
 *
 * Validates two link layers before build:
 *   - SmartRelatedSection link limits and duplicate targets
 *   - Authored internal href literals against the published route inventory
 *
 * Usage: npx tsx scripts/validators/validate-internal-links.ts
 */

import fs from 'node:fs/promises';
import path from 'node:path';

import { AUTHORITY_MAP } from '../../src/lib/authority/generated/authorityMap';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { buildRouteInventory } from '../../src/lib/content-quality/inventory';
import { buildRelatedContent } from '../../src/lib/related/buildRelatedContent';
import { getRelatedContent } from '../../src/lib/graph/query';
import type { ContentNodeType } from '../../src/lib/content-graph/types';
import { normalizeInternalTarget } from '../../src/lib/seo/config';

const MAX_SECTIONS_PER_PAGE = 1;
const MAX_TOTAL_LINKS = 3;
const SOURCE_SCAN_ROOTS = ['src/app', 'src/components', 'src/domains', 'src/screens'];
const AUTHORED_HREF_PATTERN = /(?:href\s*:\s*|href=)(['"])(\/[^'"\s}]*)\1/g;
const INTERNAL_LINK_BASE_ORIGIN = 'https://mindwp.local';
const root = process.env.MINDWP_LINK_SCAN_ROOT
  ? path.resolve(process.env.MINDWP_LINK_SCAN_ROOT)
  : process.cwd();

interface Violation {
  slug: string;
  type: string;
  rule: string;
  detail: string;
}

const violations: Violation[] = [];

async function collectSourceFiles(dirPath: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const files = await Promise.all(
      entries.map(async entry => {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
          return collectSourceFiles(fullPath);
        }

        if (!/\.(ts|tsx)$/.test(entry.name)) {
          return [];
        }

        return [fullPath];
      })
    );

    return files.flat();
  } catch {
    return [];
  }
}

function normalizeAuthoredTarget(href: string): string | null {
  const target = normalizeInternalTarget(href, {
    baseOrigin: INTERNAL_LINK_BASE_ORIGIN,
  });

  if (
    !target ||
    target.startsWith('/api/') ||
    target.startsWith('/_next/') ||
    target.startsWith('/images/') ||
    /\.[a-z0-9]+$/i.test(target)
  ) {
    return null;
  }

  return target;
}

function stripComments(content: string) {
  return content
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|\s+)\/\/.*$/gm, '$1');
}

async function validateAuthoredInternalLinks(validPaths: Set<string>) {
  const sourceFiles = (
    await Promise.all(SOURCE_SCAN_ROOTS.map(scanRoot => collectSourceFiles(path.join(root, scanRoot))))
  ).flat();

  for (const filePath of sourceFiles) {
    const relativePath = path.relative(root, filePath).replace(/\\/g, '/');
    const content = await fs.readFile(filePath, 'utf8');
    const scanSource = stripComments(content);

    for (const match of scanSource.matchAll(AUTHORED_HREF_PATTERN)) {
      const rawHref = match[2];
      const target = normalizeAuthoredTarget(rawHref);

      if (!target || validPaths.has(target)) {
        continue;
      }

      violations.push({
        slug: relativePath,
        type: 'source',
        rule: 'invalid-authored-target',
        detail: `Authored internal href ${rawHref} does not resolve to a published route (${target})`,
      });
    }
  }
}

function validateRelatedContent(slug: string, type: ContentNodeType) {
  const related = getRelatedContent(slug, type);
  const output = buildRelatedContent({
    pageId: `${type}:${slug}`,
    pageType: type,
    slug,
    nodeType: type,
  });
  const groups = output.groups ?? [];

  if (groups.length > MAX_SECTIONS_PER_PAGE) {
    violations.push({
      slug,
      type,
      rule: 'max-sections',
      detail: `${groups.length} sections (max ${MAX_SECTIONS_PER_PAGE})`,
    });
  }

  const items = groups.flatMap(group => group.items);
  const seenHrefs = new Set<string>();

  if (items.length > MAX_TOTAL_LINKS) {
    violations.push({
      slug,
      type,
      rule: 'max-total-links',
      detail: `${items.length} total related links (max ${MAX_TOTAL_LINKS})`,
    });
  }

  for (const item of items) {
    if (seenHrefs.has(item.href)) {
      violations.push({
        slug,
        type,
        rule: 'duplicate-target',
        detail: `Duplicate related target: ${item.href}`,
      });
    }

    seenHrefs.add(item.href);
  }

  for (const slot of Object.values(related)) {
    for (const item of slot) {
      if (item.score <= 0) {
        violations.push({
          slug,
          type,
          rule: 'zero-score-target',
          detail: `Related target ${item.slug} has score ${item.score}`,
        });
      }
    }
  }
}

// ── Scan all authority map entries ────────────────────────────────────────────

const typeMap: [keyof typeof AUTHORITY_MAP, ContentNodeType][] = [
  ['service', 'service'],
  ['feature', 'feature'],
  ['industry', 'industry-category'],
  ['blog', 'blog'],
  ['resource', 'resource'],
  ['caseStudy', 'case-study'],
];

let totalPages = 0;

await ensureGraphInitialized();

const inventoryEntries = await buildRouteInventory();
const validPaths = new Set(inventoryEntries.map(entry => entry.path));

for (const [mapKey, nodeType] of typeMap) {
  const entries = AUTHORITY_MAP[mapKey];
  for (const slug of Object.keys(entries)) {
    totalPages++;
    validateRelatedContent(slug, nodeType);
  }
}

await validateAuthoredInternalLinks(validPaths);

// ── Report ───────────────────────────────────────────────────────────────────

if (violations.length > 0) {
  console.error(`\n✗ Internal link validation FAILED — ${violations.length} violation(s):\n`);
  for (const v of violations) {
    console.error(`  [${v.rule}] ${v.type}/${v.slug}: ${v.detail}`);
  }
  console.error('');
  process.exit(1);
} else {
  console.log(
    `✓ Internal link validation passed (${totalPages} pages, max ${MAX_SECTIONS_PER_PAGE} related section, max ${MAX_TOTAL_LINKS} related items, authored href targets valid, 0 violations)`
  );
}

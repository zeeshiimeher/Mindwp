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

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { createReportSchema } from '../../lib/reports/reportSchema';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { env } from '../../src/env';
import { AUTHORITY_MAP } from '../../src/lib/authority/generated/authorityMap';
import { type ContentRulePageType, resolveContentRules } from '../../src/lib/config/contentRules';
import type { ContentNodeType } from '../../src/lib/content-graph/types';
import { buildRouteInventory } from '../../src/lib/content-quality/inventory';
import { getRelatedContent } from '../../src/lib/graph/query';
import { buildRelatedContent } from '../../src/lib/related/buildRelatedContent';
import { normalizeInternalTarget } from '../../src/lib/seo/config';

const SOURCE_SCAN_ROOTS = ['src/app', 'src/components', 'src/domains', 'src/screens'];
const AUTHORED_HREF_PATTERN = /(?:href\s*:\s*|href=)(['"])(\/[^'"\s}]*)\1/g;
const INTERNAL_LINK_BASE_ORIGIN = 'https://mindwp.local';
const root = env.MINDWP_LINK_SCAN_ROOT ? path.resolve(env.MINDWP_LINK_SCAN_ROOT) : process.cwd();
const reportPath = path.join(root, 'reports', 'internal-links-report.json');
const sourceCommand = 'npx tsx scripts/validators/validate-internal-links.ts';
const logger = createLogger({
  label: 'validate-internal-links',
  mode: resolveLoggingMode(process.argv.slice(2), env),
  rootDir: root,
});

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
  let target: string | null;

  try {
    target = normalizeInternalTarget(href, {
      baseOrigin: INTERNAL_LINK_BASE_ORIGIN,
    });
  } catch {
    return '__INVALID_INTERNAL_URL__';
  }

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
  return content.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|\s+)\/\/.*$/gm, '$1');
}

function resolvePageTypeForAuthorityMapKey(
  mapKey: keyof typeof AUTHORITY_MAP
): ContentRulePageType {
  if (mapKey === 'caseStudy') {
    return 'case-study';
  }

  if (mapKey === 'industry') {
    return 'industry';
  }

  return mapKey;
}

async function validateAuthoredInternalLinks(validPaths: Set<string>) {
  const sourceFiles = (
    await Promise.all(
      SOURCE_SCAN_ROOTS.map(scanRoot => collectSourceFiles(path.join(root, scanRoot)))
    )
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

function validateRelatedContent(
  slug: string,
  type: ContentNodeType,
  pageType: ContentRulePageType
) {
  const rules = resolveContentRules(pageType, slug).internalLinks;
  let related;
  let output;

  try {
    related = getRelatedContent(slug, type);
    output = buildRelatedContent({
      pageId: `${type}:${slug}`,
      pageType: type,
      slug,
      nodeType: type,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    if (
      message.startsWith('Missing graph source node') ||
      message.startsWith('No related content available')
    ) {
      return;
    }

    throw error;
  }

  const groups = output.groups ?? [];

  if (groups.length > rules.maxSectionsPerPage) {
    violations.push({
      slug,
      type,
      rule: 'max-sections',
      detail: `${groups.length} sections (max ${rules.maxSectionsPerPage})`,
    });
  }

  const items = groups.flatMap(group => group.items);
  const seenHrefs = new Set<string>();

  if (items.length > rules.maxTotalLinks) {
    violations.push({
      slug,
      type,
      rule: 'max-total-links',
      detail: `${items.length} total related links (max ${rules.maxTotalLinks})`,
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
  const pageType = resolvePageTypeForAuthorityMapKey(mapKey);
  for (const slug of Object.keys(entries)) {
    totalPages++;
    validateRelatedContent(slug, nodeType, pageType);
  }
}

await validateAuthoredInternalLinks(validPaths);

// ── Report ───────────────────────────────────────────────────────────────────

const report = createReportSchema({
  name: 'internal-links-report',
  status: violations.length > 0 ? 'FAIL' : 'PASS',
  summary: {
    total: totalPages + violations.length,
    passed: totalPages,
    failed: violations.length,
    warnings: 0,
  },
  issues: violations,
  data: {
    totalPages,
    validPaths: validPaths.size,
    scanRoots: SOURCE_SCAN_ROOTS,
  },
  sourceCommand,
});

logger.writeReport(reportPath, report);

if (violations.length > 0) {
  logger.printErrors(
    violations.map(v => `[${v.rule}] ${v.type}/${v.slug}: ${v.detail}`),
    'violations',
    logger.isVerbose() ? 20 : 5
  );
  logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);
  process.exit(1);
} else {
  const rules = resolveContentRules('static').internalLinks;
  logger.printTotals({
    ...report.summary,
    maxSectionsPerPage: rules.maxSectionsPerPage,
    maxTotalLinks: rules.maxTotalLinks,
  });
  logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);
}

/**
 * Related Content Link Validator
 *
 * Validates SmartRelatedSection link limits:
 *   - Max 1 section per page
 *   - Max 3 items total per page
 *   - No duplicate targets
 *   - No zero-score items
 *
 * Scans the authority map to validate all related content outputs.
 *
 * Usage: npx tsx scripts/validators/validate-internal-links.ts
 */

import { AUTHORITY_MAP } from '../../src/lib/authority/generated/authorityMap';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { buildRelatedContent } from '../../src/lib/related/buildRelatedContent';
import { getRelatedContent } from '../../src/lib/graph/query';
import type { ContentNodeType } from '../../src/lib/content-graph/types';

const MAX_SECTIONS_PER_PAGE = 1;
const MAX_TOTAL_LINKS = 3;

interface Violation {
  slug: string;
  type: string;
  rule: string;
  detail: string;
}

const violations: Violation[] = [];

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

for (const [mapKey, nodeType] of typeMap) {
  const entries = AUTHORITY_MAP[mapKey];
  for (const slug of Object.keys(entries)) {
    totalPages++;
    validateRelatedContent(slug, nodeType);
  }
}

// ── Report ───────────────────────────────────────────────────────────────────

if (violations.length > 0) {
  console.error(`\\n✗ Related content validation FAILED — ${violations.length} violation(s):\\n`);
  for (const v of violations) {
    console.error(`  [${v.rule}] ${v.type}/${v.slug}: ${v.detail}`);
  }
  console.error('');
  process.exit(1);
} else {
  console.log(
    `✓ Related content validation passed (${totalPages} pages, max ${MAX_SECTIONS_PER_PAGE} section, max ${MAX_TOTAL_LINKS} items, 0 violations)`
  );
}

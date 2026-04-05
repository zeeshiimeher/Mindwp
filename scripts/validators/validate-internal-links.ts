/**
 * Related Content Link Validator (Phase 10)
 *
 * Validates SmartRelatedSection link limits:
 *   - Max 2 sections per page
 *   - Max 3 items per section
 *   - Max 6 total related links per page
 *
 * Scans the authority map to validate all related content outputs.
 *
 * Usage: npx tsx scripts/validators/validate-internal-links.ts
 */

import { AUTHORITY_MAP } from '../../src/lib/authority/generated/authorityMap';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { getRelatedContent } from '../../src/lib/graph/query';
import type { ContentNodeType } from '../../src/lib/content-graph/types';

const MAX_SECTIONS_PER_PAGE = 2;
const MAX_ITEMS_PER_SECTION = 3;
const MAX_TOTAL_LINKS = MAX_SECTIONS_PER_PAGE * MAX_ITEMS_PER_SECTION;

interface Violation {
  slug: string;
  type: string;
  rule: string;
  detail: string;
}

const violations: Violation[] = [];

function validateRelatedContent(slug: string, type: ContentNodeType) {
  const related = getRelatedContent(slug, type);
  const slotKeys = Object.keys(related) as (keyof typeof related)[];

  // Count non-empty sections and total items
  let sectionCount = 0;
  let totalItems = 0;
  const seenSlugs = new Set<string>();

  for (const key of slotKeys) {
    const items = related[key];
    if (items && items.length > 0) {
      sectionCount++;

      // Rule 1: max 3 items per section
      if (items.length > MAX_ITEMS_PER_SECTION) {
        violations.push({
          slug,
          type,
          rule: 'section-overflow',
          detail: `Section "${key}" has ${items.length} items (max ${MAX_ITEMS_PER_SECTION})`,
        });
      }

      totalItems += items.length;

      // Rule 2: no duplicate targets across sections
      for (const item of items) {
        if (seenSlugs.has(item.slug)) {
          violations.push({
            slug,
            type,
            rule: 'duplicate-target',
            detail: `Duplicate related target: ${item.slug}`,
          });
        }
        seenSlugs.add(item.slug);
      }
    }
  }

  // Rule 3: max 2 sections per page
  if (sectionCount > MAX_SECTIONS_PER_PAGE) {
    violations.push({
      slug,
      type,
      rule: 'max-sections',
      detail: `${sectionCount} sections (max ${MAX_SECTIONS_PER_PAGE})`,
    });
  }

  // Rule 4: max 6 total links per page
  if (totalItems > MAX_TOTAL_LINKS) {
    violations.push({
      slug,
      type,
      rule: 'max-total-links',
      detail: `${totalItems} total related links (max ${MAX_TOTAL_LINKS})`,
    });
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
    `✓ Related content validation passed (${totalPages} pages, max ${MAX_SECTIONS_PER_PAGE} sections × ${MAX_ITEMS_PER_SECTION} items, 0 violations)`
  );
}

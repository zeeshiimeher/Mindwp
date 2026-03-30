/**
 * Internal Link Validator
 *
 * Anti-spam guard. Checks:
 *   - Max 5 links per page
 *   - No duplicate targets
 *   - No same anchor repeated
 *
 * Runs against the full authority map to validate all link outputs.
 *
 * Usage: npx tsx scripts/validation/validate-internal-links.mjs
 */

import { AUTHORITY_MAP } from '../../src/lib/authority/generated/authorityMap';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { generateInternalLinks } from '../../src/lib/internal-linking/engine';
import { splitContentBlocks } from '../../src/lib/internal-linking/blockParser';
import { placeLinks } from '../../src/lib/internal-linking/placement';
import type { ContentNodeType } from '../../src/lib/content-graph/types';
import type { InternalLink } from '../../src/lib/internal-linking/types';

const MAX_LINKS_PER_PAGE = 5;

interface Violation {
  slug: string;
  type: string;
  rule: string;
  detail: string;
}

const violations: Violation[] = [];

function validateLinks(slug: string, type: ContentNodeType, links: InternalLink[]) {
  // Rule 1: max 5 links
  if (links.length > MAX_LINKS_PER_PAGE) {
    violations.push({
      slug,
      type,
      rule: 'max-links',
      detail: `${links.length} links (max ${MAX_LINKS_PER_PAGE})`,
    });
  }

  // Rule 2: no duplicate targets
  const targets = links.map(l => l.targetSlug);
  const uniqueTargets = new Set(targets);
  if (uniqueTargets.size < targets.length) {
    const dupes = targets.filter((t, i) => targets.indexOf(t) !== i);
    violations.push({
      slug,
      type,
      rule: 'duplicate-target',
      detail: `Duplicate targets: ${[...new Set(dupes)].join(', ')}`,
    });
  }

  // Rule 3: no same anchor repeated
  const anchors = links.map(l => l.anchor);
  const uniqueAnchors = new Set(anchors);
  if (uniqueAnchors.size < anchors.length) {
    const dupes = anchors.filter((a, i) => anchors.indexOf(a) !== i);
    violations.push({
      slug,
      type,
      rule: 'duplicate-anchor',
      detail: `Duplicate anchors: ${[...new Set(dupes)].join(', ')}`,
    });
  }

  // Rule 4: intro max 1 link (placement check)
  const sampleText = 'Intro paragraph one.\n\nIntro paragraph two.\n\nBody paragraph.\n\nConclusion.';
  const blocks = splitContentBlocks(sampleText);
  const placed = placeLinks(blocks, links);
  if (placed.intro.length > 1) {
    violations.push({
      slug,
      type,
      rule: 'intro-max-1',
      detail: `Intro has ${placed.intro.length} links (max 1)`,
    });
  }

  // Rule 5: conclusion should contain service link if a non-intro service link exists
  const introSlugs = new Set(placed.intro.map(l => l.targetSlug));
  const unusedServiceLink = links.some(l => l.targetType === 'service' && !introSlugs.has(l.targetSlug));
  if (unusedServiceLink && placed.conclusion.length === 0 && blocks.conclusion.length > 0) {
    violations.push({
      slug,
      type,
      rule: 'conclusion-service',
      detail: 'Service link available but not placed in conclusion',
    });
  }

  // Rule 6: no same target across blocks (global dedup)
  const allPlaced = [...placed.intro, ...placed.body, ...placed.conclusion];
  const placedTargets = allPlaced.map(l => l.targetSlug);
  const uniquePlacedTargets = new Set(placedTargets);
  if (uniquePlacedTargets.size < placedTargets.length) {
    const dupes = placedTargets.filter((t, i) => placedTargets.indexOf(t) !== i);
    violations.push({
      slug,
      type,
      rule: 'cross-block-duplicate',
      detail: `Same target in multiple blocks: ${[...new Set(dupes)].join(', ')}`,
    });
  }

  // Rule 7: max 1 link per block zone (structural)
  if (placed.intro.length > 1) {
    violations.push({ slug, type, rule: 'intro-overload', detail: `Intro has ${placed.intro.length} links (max 1)` });
  }
  if (placed.body.length > 2) {
    violations.push({ slug, type, rule: 'body-overload', detail: `Body has ${placed.body.length} links (max 2)` });
  }
  if (placed.conclusion.length > 1) {
    violations.push({ slug, type, rule: 'conclusion-overload', detail: `Conclusion has ${placed.conclusion.length} links (max 1)` });
  }

  // Rule 8: max total placed links = 5
  if (allPlaced.length > MAX_LINKS_PER_PAGE) {
    violations.push({
      slug,
      type,
      rule: 'total-placed-overflow',
      detail: `${allPlaced.length} placed links (max ${MAX_LINKS_PER_PAGE})`,
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
let totalLinks = 0;

// Graph must be initialized for context-aware scoring
await ensureGraphInitialized();

for (const [mapKey, nodeType] of typeMap) {
  const entries = AUTHORITY_MAP[mapKey];
  for (const slug of Object.keys(entries)) {
    const links = generateInternalLinks(slug, nodeType);
    totalPages++;
    totalLinks += links.length;
    validateLinks(slug, nodeType, links);
  }
}

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
    `✓ Internal link validation passed (${totalPages} pages, ${totalLinks} links, 0 violations)`
  );
}

/**
 * Conversion Validation (Warning-only)
 *
 * Detects conversion weaknesses WITHOUT breaking the build.
 * This is an audit layer — it highlights problems for humans to fix.
 *
 * Rules:
 *   1. Missing CTA — page has no CTA section/structure
 *   2. No service link — blog/resource pages have no path to monetization
 *   3. No content progression — page has no related content via SmartRelatedSection
 *
 * STRICT_MODE = false → warnings only, never exits non-zero
 */

import { AUTHORITY_MAP } from '../../src/lib/authority/generated/authorityMap';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { getRelatedContent } from '../../src/lib/graph/query';
import type { ContentNodeType } from '../../src/lib/content-graph/types';

// --- Issue constants (inlined) ---

const ISSUE_TYPES = {
  NO_CTA: 'no_cta',
  NO_SERVICE_LINK: 'no_service_link',
  NO_RELATED_CONTENT: 'no_related_content',
} as const;

const ISSUE_MESSAGES: Record<string, string> = {
  [ISSUE_TYPES.NO_CTA]: 'Page has no CTA and no service path',
  [ISSUE_TYPES.NO_SERVICE_LINK]: 'No service link found (weak conversion path)',
  [ISSUE_TYPES.NO_RELATED_CONTENT]: 'Page has no related content via SmartRelatedSection',
};

// --- Config ---

const STRICT_MODE = false;

// Pages that structurally include a CTA (built into their template/data)
const TYPES_WITH_STRUCTURAL_CTA = new Set<ContentNodeType>([
  'service',
  'feature',
  'industry-category',
  'industry-detail',
  'case-study',
]);

// Types where a missing service link is a conversion concern
const TYPES_NEEDING_SERVICE_LINK = new Set<ContentNodeType>([
  'blog',
  'resource',
]);

// --- Types ---

interface ConversionWarning {
  slug: string;
  type: string;
  rule: string;
  message: string;
  severity: 'warning';
}

// --- Detection ---

function detectWarnings(
  slug: string,
  type: ContentNodeType
): ConversionWarning[] {
  const warnings: ConversionWarning[] = [];
  const related = getRelatedContent(slug, type);

  // Rule 1 — Missing CTA
  // Blog and resource pages may lack a structural CTA
  if (!TYPES_WITH_STRUCTURAL_CTA.has(type)) {
    // Check if any related content targets a service (acts as soft CTA path)
    const hasServicePath = related.services && related.services.length > 0;
    if (!hasServicePath) {
      warnings.push({
        slug,
        type,
        rule: ISSUE_TYPES.NO_CTA,
        message: ISSUE_MESSAGES[ISSUE_TYPES.NO_CTA],
        severity: 'warning',
      });
    }
  }

  // Rule 2 — No service link (for blog/resource)
  if (TYPES_NEEDING_SERVICE_LINK.has(type)) {
    const hasServiceLink = related.services && related.services.length > 0;
    if (!hasServiceLink) {
      warnings.push({
        slug,
        type,
        rule: ISSUE_TYPES.NO_SERVICE_LINK,
        message: ISSUE_MESSAGES[ISSUE_TYPES.NO_SERVICE_LINK],
        severity: 'warning',
      });
    }
  }

  // Rule 3 — No content progression (no related content from graph)
  const allSlots = Object.values(related);
  const hasAnyRelated = allSlots.some(items => items && items.length > 0);
  if (!hasAnyRelated) {
    warnings.push({
      slug,
      type,
      rule: ISSUE_TYPES.NO_RELATED_CONTENT,
      message: 'Page has no related content via SmartRelatedSection (no intent-based progression)',
      severity: 'warning',
    });
  }

  return warnings;
}

// --- Scan all authority map entries ---

const typeMap: [keyof typeof AUTHORITY_MAP, ContentNodeType][] = [
  ['service', 'service'],
  ['feature', 'feature'],
  ['industry', 'industry-category'],
  ['blog', 'blog'],
  ['resource', 'resource'],
  ['caseStudy', 'case-study'],
];

let totalPages = 0;
const allWarnings: ConversionWarning[] = [];

await ensureGraphInitialized();

for (const [mapKey, nodeType] of typeMap) {
  const entries = AUTHORITY_MAP[mapKey];
  for (const slug of Object.keys(entries)) {
    totalPages++;
    const warnings = detectWarnings(slug, nodeType);
    allWarnings.push(...warnings);
  }
}

// --- Summarize ---

const ruleCount: Record<string, number> = {};
for (const w of allWarnings) {
  ruleCount[w.rule] = (ruleCount[w.rule] ?? 0) + 1;
}

console.log(`\n⚠ Conversion validation: ${allWarnings.length} warning(s) across ${totalPages} pages\n`);

if (allWarnings.length > 0) {
  for (const [rule, count] of Object.entries(ruleCount)) {
    console.log(`  ${rule}: ${count}`);
  }
  console.log('');
}

// --- Strict mode (future) ---

if (STRICT_MODE && allWarnings.length > 0) {
  console.error('STRICT_MODE enabled — treating warnings as errors');
  process.exit(1);
}

// Always exit 0 — this validator is advisory only
console.log('✓ Conversion validation complete (warnings only — no build failure)');

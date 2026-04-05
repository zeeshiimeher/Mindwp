/**
 * Phase 10 — Content Alignment Audit
 *
 * READ-ONLY audit. Does NOT modify any files.
 *
 * Validates:
 * 1. CTA logic vs getCTAConfig expectations
 * 2. Intent classification (blogs: PROBLEM/SYSTEM/FRAMEWORK, resources: ACTIONABLE/EDUCATIONAL/EXAMPLE)
 * 3. System mapping completeness and validity
 * 4. Related content coverage via SmartRelatedSection
 *
 * Usage: npx tsx scripts/analyzers/phase10-content-audit.ts
 */

import { BLOG_POSTS } from '../../src/domains/blog/registry';
import { CASE_STUDY_REGISTRY } from '../../src/domains/case-studies/registry';
import { FEATURE_REGISTRY } from '../../src/domains/features/registry';
import { INDUSTRY_REGISTRY } from '../../src/domains/industries/registry';
import { resources } from '../../src/domains/resources/generatedRegistry';
import { SERVICE_REGISTRY } from '../../src/domains/services/registry';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { getRelatedContent } from '../../src/lib/graph/query';
import { SYSTEM_TO_SERVICE_PATH } from '../../src/lib/ui/ctaEngine';
import { CANONICAL_SYSTEMS } from '../../src/lib/content-graph/canonical';
import type { ContentNodeType } from '../../src/lib/content-graph/types';

// ── Types ────────────────────────────────────────────────────────────

interface ContentItem {
  slug: string;
  contentType: ContentNodeType;
  intent?: string;
  systems: string[];
  industries: string[];
  currentCTAUrl: string | null;
}

interface CTAMismatch {
  slug: string;
  contentType: string;
  expectedTarget: string;
  actualCTA: string | null;
  reason: string;
}

interface IntentIssue {
  slug: string;
  contentType: string;
  issue: string;
  detail: string;
}

interface SystemIssue {
  slug: string;
  contentType: string;
  issue: string;
  detail: string;
}

interface RelatedContentIssue {
  slug: string;
  contentType: string;
  filledSlots: number;
  totalItems: number;
  detail: string;
}

// ── Helpers ──────────────────────────────────────────────────────────

function extractBlogCTAUrl(sections: any[]): string | null {
  for (const section of sections) {
    if (section.type === 'cta') {
      return section.buttonUrl ?? section.button?.url ?? null;
    }
  }
  return null;
}

function extractResourceCTAUrl(sections: any[]): string | null {
  for (const section of sections) {
    if (section.type === 'cta') {
      return section.buttonUrl ?? section.button?.url ?? null;
    }
  }
  return null;
}

// ── Step 1: Extract all content ──────────────────────────────────────

const allContent: ContentItem[] = [];

// Blogs
for (const [slug, post] of Object.entries(BLOG_POSTS)) {
  allContent.push({
    slug,
    contentType: 'blog',
    intent: (post as any).intent ?? undefined,
    systems: post.systems ?? [],
    industries: post.industries ?? [],
    currentCTAUrl: extractBlogCTAUrl(post.sections ?? []),
  });
}

// Resources
for (const resource of resources) {
  allContent.push({
    slug: resource.slug,
    contentType: 'resource',
    intent: (resource as any).intent ?? undefined,
    systems: resource.systems ?? [],
    industries: resource.industries ?? [],
    currentCTAUrl: extractResourceCTAUrl(resource.sections ?? []),
  });
}

// Case Studies
for (const [slug, cs] of Object.entries(CASE_STUDY_REGISTRY)) {
  allContent.push({
    slug,
    contentType: 'case-study',
    intent: undefined,
    systems: cs.systems ?? [],
    industries: cs.industries ?? [],
    currentCTAUrl: null, // Case studies use template CTA
  });
}

// Services
for (const [slug, svc] of Object.entries(SERVICE_REGISTRY)) {
  allContent.push({
    slug,
    contentType: 'service',
    intent: undefined,
    systems: svc.systems ?? [],
    industries: [],
    currentCTAUrl: '/contact', // All services CTA → /contact
  });
}

// Features
for (const feat of FEATURE_REGISTRY) {
  allContent.push({
    slug: feat.slug,
    contentType: 'feature',
    intent: undefined,
    systems: feat.systems ?? [],
    industries: [],
    currentCTAUrl: null, // Features use template CTA
  });
}

// Industries
for (const [slug, ind] of Object.entries(INDUSTRY_REGISTRY)) {
  allContent.push({
    slug,
    contentType: ind.type === 'detail' ? 'industry-detail' : 'industry-category',
    intent: undefined,
    systems: ind.systems ?? [],
    industries: ind.industries ?? [],
    currentCTAUrl: null, // Industries use template CTA
  });
}

// ── Step 2: Validate CTA Logic ───────────────────────────────────────

const ctaMismatches: CTAMismatch[] = [];

const canonicalSystems = new Set(CANONICAL_SYSTEMS);

for (const item of allContent) {
  if (item.contentType === 'blog') {
    // Phase 10 rule: blog CTA must route to specific service (not /services hub)
    const expectedServicePath = item.systems.length > 0
      ? SYSTEM_TO_SERVICE_PATH[item.systems[0]] ?? null
      : null;

    if (item.currentCTAUrl === '/services') {
      ctaMismatches.push({
        slug: item.slug,
        contentType: 'blog',
        expectedTarget: expectedServicePath ?? '(no system → cannot resolve)',
        actualCTA: '/services',
        reason: 'Blog CTA routes to generic /services hub instead of specific service page',
      });
    } else if (expectedServicePath && item.currentCTAUrl && item.currentCTAUrl !== expectedServicePath) {
      ctaMismatches.push({
        slug: item.slug,
        contentType: 'blog',
        expectedTarget: expectedServicePath,
        actualCTA: item.currentCTAUrl,
        reason: `Blog CTA doesn't match expected service path from systems[0]='${item.systems[0]}'`,
      });
    } else if (!item.currentCTAUrl) {
      ctaMismatches.push({
        slug: item.slug,
        contentType: 'blog',
        expectedTarget: expectedServicePath ?? '/contact',
        actualCTA: '(none)',
        reason: 'Blog has no CTA section',
      });
    }
  }

  if (item.contentType === 'resource') {
    // Resources CTA should route to /contact (via primaryCta)
    // Phase 10 may want these to route to specific services too
    if (!item.currentCTAUrl) {
      ctaMismatches.push({
        slug: item.slug,
        contentType: 'resource',
        expectedTarget: '/contact',
        actualCTA: '(none)',
        reason: 'Resource has no CTA section',
      });
    }
  }
}

// ── Step 3: Validate Intent Classification ───────────────────────────

const intentIssues: IntentIssue[] = [];

const VALID_BLOG_INTENTS = ['PROBLEM', 'SYSTEM', 'FRAMEWORK'];
const VALID_RESOURCE_INTENTS = ['ACTIONABLE', 'EDUCATIONAL', 'EXAMPLE'];

for (const item of allContent) {
  if (item.contentType === 'blog') {
    if (!item.intent) {
      intentIssues.push({
        slug: item.slug,
        contentType: 'blog',
        issue: 'MISSING_INTENT',
        detail: `No intent classification. Must be one of: ${VALID_BLOG_INTENTS.join(', ')}`,
      });
    } else if (!VALID_BLOG_INTENTS.includes(item.intent)) {
      intentIssues.push({
        slug: item.slug,
        contentType: 'blog',
        issue: 'INVALID_INTENT',
        detail: `Intent '${item.intent}' is not valid. Must be: ${VALID_BLOG_INTENTS.join(', ')}`,
      });
    }
  }

  if (item.contentType === 'resource') {
    if (!item.intent) {
      intentIssues.push({
        slug: item.slug,
        contentType: 'resource',
        issue: 'MISSING_INTENT',
        detail: `No intent classification. Must be one of: ${VALID_RESOURCE_INTENTS.join(', ')}`,
      });
    } else if (!VALID_RESOURCE_INTENTS.includes(item.intent)) {
      intentIssues.push({
        slug: item.slug,
        contentType: 'resource',
        issue: 'INVALID_INTENT',
        detail: `Intent '${item.intent}' is not valid. Must be: ${VALID_RESOURCE_INTENTS.join(', ')}`,
      });
    }
  }
}

// ── Step 4: Validate System Mapping ──────────────────────────────────

const systemIssues: SystemIssue[] = [];

for (const item of allContent) {
  // Check missing systems (blogs and resources must have at least one)
  if (['blog', 'resource'].includes(item.contentType)) {
    if (item.systems.length === 0) {
      systemIssues.push({
        slug: item.slug,
        contentType: item.contentType,
        issue: 'MISSING_SYSTEM',
        detail: 'No system assigned. Cannot resolve CTA target.',
      });
      continue;
    }

    // Check each system is canonical
    for (const sys of item.systems) {
      if (!canonicalSystems.has(sys)) {
        systemIssues.push({
          slug: item.slug,
          contentType: item.contentType,
          issue: 'INVALID_SYSTEM',
          detail: `System '${sys}' is not in CANONICAL_SYSTEMS`,
        });
      }
    }

    // Check system maps to a service
    const primarySystem = item.systems[0];
    if (!SYSTEM_TO_SERVICE_PATH[primarySystem]) {
      systemIssues.push({
        slug: item.slug,
        contentType: item.contentType,
        issue: 'UNMAPPED_SYSTEM',
        detail: `Primary system '${primarySystem}' has no service path mapping in SYSTEM_TO_SERVICE_PATH`,
      });
    }

    // Check for multiple systems (not an error, but noteworthy)
    if (item.systems.length > 1) {
      systemIssues.push({
        slug: item.slug,
        contentType: item.contentType,
        issue: 'MULTI_SYSTEM',
        detail: `${item.systems.length} systems: [${item.systems.join(', ')}]. CTA routes to '${item.systems[0]}' (first).`,
      });
    }
  }

  // Features need systems for graph linking
  if (item.contentType === 'feature' && item.systems.length === 0) {
    systemIssues.push({
      slug: item.slug,
      contentType: 'feature',
      issue: 'MISSING_SYSTEM',
      detail: 'Feature has no system — graph cannot derive service links',
    });
  }
}

// ── Step 5: Validate Related Content Coverage ────────────────────────

await ensureGraphInitialized();

const relatedContentIssues: RelatedContentIssue[] = [];

for (const item of allContent) {
  const related = getRelatedContent(item.slug, item.contentType);
  const slots = Object.keys(related) as (keyof typeof related)[];

  let filledSlots = 0;
  let totalItems = 0;

  for (const key of slots) {
    const items = related[key];
    if (items && items.length > 0) {
      filledSlots++;
      totalItems += items.length;
    }
  }

  if (totalItems === 0) {
    relatedContentIssues.push({
      slug: item.slug,
      contentType: item.contentType,
      filledSlots: 0,
      totalItems: 0,
      detail: 'EMPTY — no related content from any slot. SmartRelatedSection renders nothing.',
    });
  } else if (filledSlots === 1 && totalItems <= 1) {
    relatedContentIssues.push({
      slug: item.slug,
      contentType: item.contentType,
      filledSlots,
      totalItems,
      detail: `WEAK — only ${filledSlots} slot with ${totalItems} item(s). Low diversity.`,
    });
  }
}

// ── Step 6: Output Report ────────────────────────────────────────────

console.log('\n');
console.log('═══════════════════════════════════════════════════════════════');
console.log('  PHASE 10 — CONTENT ALIGNMENT AUDIT REPORT');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`  Generated: ${new Date().toISOString()}`);
console.log(`  Total content items scanned: ${allContent.length}`);
console.log('');

// Summary counts by type
const typeCounts = new Map<string, number>();
for (const item of allContent) {
  typeCounts.set(item.contentType, (typeCounts.get(item.contentType) ?? 0) + 1);
}
console.log('  Content breakdown:');
for (const [type, count] of typeCounts) {
  console.log(`    ${type}: ${count}`);
}
console.log('');

// ── Section 1: CTA Mismatches ────────────────────────────────────────

console.log('───────────────────────────────────────────────────────────────');
console.log(`  1. CTA MISMATCHES (${ctaMismatches.length} issues)`);
console.log('───────────────────────────────────────────────────────────────');

if (ctaMismatches.length === 0) {
  console.log('  ✓ All CTAs match expected routing.\n');
} else {
  // Group by reason
  const byReason = new Map<string, CTAMismatch[]>();
  for (const m of ctaMismatches) {
    const key = m.reason.includes('generic /services') ? 'GENERIC_HUB' :
                m.reason.includes('no CTA') ? 'MISSING_CTA' :
                m.reason.includes("doesn't match") ? 'WRONG_TARGET' : 'OTHER';
    if (!byReason.has(key)) byReason.set(key, []);
    byReason.get(key)!.push(m);
  }

  for (const [reason, items] of byReason) {
    console.log(`\n  [${reason}] — ${items.length} item(s):`);
    for (const m of items) {
      console.log(`    ${m.contentType}/${m.slug}`);
      console.log(`      actual:   ${m.actualCTA}`);
      console.log(`      expected: ${m.expectedTarget}`);
      console.log(`      reason:   ${m.reason}`);
    }
  }
  console.log('');
}

// ── Section 2: Intent Classification ─────────────────────────────────

console.log('───────────────────────────────────────────────────────────────');
console.log(`  2. INTENT CLASSIFICATION (${intentIssues.length} issues)`);
console.log('───────────────────────────────────────────────────────────────');

if (intentIssues.length === 0) {
  console.log('  ✓ All content has valid intent classification.\n');
} else {
  const blogMissing = intentIssues.filter(i => i.contentType === 'blog' && i.issue === 'MISSING_INTENT');
  const resourceMissing = intentIssues.filter(i => i.contentType === 'resource' && i.issue === 'MISSING_INTENT');
  const invalid = intentIssues.filter(i => i.issue === 'INVALID_INTENT');

  if (blogMissing.length > 0) {
    console.log(`\n  [BLOG — MISSING INTENT] ${blogMissing.length} blog post(s) with no intent:`);
    for (const i of blogMissing) {
      console.log(`    - ${i.slug}`);
    }
  }

  if (resourceMissing.length > 0) {
    console.log(`\n  [RESOURCE — MISSING INTENT] ${resourceMissing.length} resource(s) with no intent:`);
    for (const i of resourceMissing) {
      console.log(`    - ${i.slug}`);
    }
  }

  if (invalid.length > 0) {
    console.log(`\n  [INVALID INTENT] ${invalid.length} item(s):`);
    for (const i of invalid) {
      console.log(`    - ${i.contentType}/${i.slug}: ${i.detail}`);
    }
  }
  console.log('');
}

// ── Section 3: System Mapping ────────────────────────────────────────

console.log('───────────────────────────────────────────────────────────────');
console.log(`  3. SYSTEM MAPPING (${systemIssues.length} issues)`);
console.log('───────────────────────────────────────────────────────────────');

if (systemIssues.length === 0) {
  console.log('  ✓ All systems are valid and mapped.\n');
} else {
  const missing = systemIssues.filter(i => i.issue === 'MISSING_SYSTEM');
  const invalid = systemIssues.filter(i => i.issue === 'INVALID_SYSTEM');
  const unmapped = systemIssues.filter(i => i.issue === 'UNMAPPED_SYSTEM');
  const multi = systemIssues.filter(i => i.issue === 'MULTI_SYSTEM');

  if (missing.length > 0) {
    console.log(`\n  [MISSING_SYSTEM] ${missing.length} item(s):`);
    for (const i of missing) {
      console.log(`    - ${i.contentType}/${i.slug}: ${i.detail}`);
    }
  }

  if (invalid.length > 0) {
    console.log(`\n  [INVALID_SYSTEM] ${invalid.length} item(s):`);
    for (const i of invalid) {
      console.log(`    - ${i.contentType}/${i.slug}: ${i.detail}`);
    }
  }

  if (unmapped.length > 0) {
    console.log(`\n  [UNMAPPED_SYSTEM] ${unmapped.length} item(s):`);
    for (const i of unmapped) {
      console.log(`    - ${i.contentType}/${i.slug}: ${i.detail}`);
    }
  }

  if (multi.length > 0) {
    console.log(`\n  [MULTI_SYSTEM] ${multi.length} item(s) (informational):`);
    for (const i of multi) {
      console.log(`    - ${i.contentType}/${i.slug}: ${i.detail}`);
    }
  }
  console.log('');
}

// ── Section 4: Related Content Coverage ──────────────────────────────

console.log('───────────────────────────────────────────────────────────────');
console.log(`  4. RELATED CONTENT COVERAGE (${relatedContentIssues.length} issues)`);
console.log('───────────────────────────────────────────────────────────────');

if (relatedContentIssues.length === 0) {
  console.log('  ✓ All pages have adequate related content.\n');
} else {
  const empty = relatedContentIssues.filter(i => i.totalItems === 0);
  const weak = relatedContentIssues.filter(i => i.totalItems > 0);

  if (empty.length > 0) {
    console.log(`\n  [EMPTY — No related content] ${empty.length} page(s):`);
    for (const i of empty) {
      console.log(`    - ${i.contentType}/${i.slug}`);
    }
  }

  if (weak.length > 0) {
    console.log(`\n  [WEAK — Low coverage] ${weak.length} page(s):`);
    for (const i of weak) {
      console.log(`    - ${i.contentType}/${i.slug}: ${i.detail}`);
    }
  }
  console.log('');
}

// ── Summary ──────────────────────────────────────────────────────────

console.log('═══════════════════════════════════════════════════════════════');
console.log('  SUMMARY');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`  Total content items: ${allContent.length}`);
console.log(`  CTA mismatches:      ${ctaMismatches.length}`);
console.log(`  Intent issues:       ${intentIssues.length}`);
console.log(`  System issues:       ${systemIssues.length}`);
console.log(`  Related coverage:    ${relatedContentIssues.length}`);
const total = ctaMismatches.length + intentIssues.length + systemIssues.length + relatedContentIssues.length;
console.log(`  ────────────────────`);
console.log(`  TOTAL ISSUES:        ${total}`);
console.log('═══════════════════════════════════════════════════════════════\n');

// ── Write JSON report ────────────────────────────────────────────────

import { writeFileSync } from 'node:fs';

const report = {
  generatedAt: new Date().toISOString(),
  totalContent: allContent.length,
  contentBreakdown: Object.fromEntries(typeCounts),
  ctaMismatches,
  intentIssues,
  systemIssues,
  relatedContentIssues,
  summary: {
    ctaMismatches: ctaMismatches.length,
    intentIssues: intentIssues.length,
    systemIssues: systemIssues.length,
    relatedContentIssues: relatedContentIssues.length,
    total,
  },
};

writeFileSync('reports/phase10-content-audit.json', JSON.stringify(report, null, 2));
console.log('  ✓ Wrote reports/phase10-content-audit.json\n');

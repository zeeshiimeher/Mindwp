/**
 * Validate Content Mapping (Phase 10.1)
 *
 * Checks:
 * - every blog/resource has a mapping entry
 * - intent is valid for content type
 * - CTA target matches primarySystem via SYSTEM_TO_SERVICE_PATH
 * - no undefined/invalid systems
 *
 * Usage: npx tsx scripts/analyzers/validate-content-mapping.ts
 */

import { BLOG_POSTS } from '../../src/domains/blog/registry';
import { resources } from '../../src/domains/resources/generatedRegistry';
import { CANONICAL_SYSTEMS } from '../../src/lib/content-graph/canonical';
import { SYSTEM_TO_SERVICE_PATH } from '../../src/lib/ui/ctaEngine';
import { CONTENT_MAPPING } from '../../src/system/content/contentMapping';

const VALID_BLOG_INTENTS = new Set(['PROBLEM', 'SYSTEM', 'FRAMEWORK']);
const VALID_RESOURCE_INTENTS = new Set(['ACTIONABLE', 'EDUCATIONAL', 'EXAMPLE']);
const canonicalSystems = new Set(CANONICAL_SYSTEMS);

interface ValidationError {
  slug: string;
  contentType: string;
  check: string;
  message: string;
}

const errors: ValidationError[] = [];

// ── Check: every blog has a mapping ──────────────────────────────────

for (const slug of Object.keys(BLOG_POSTS)) {
  const key = `blog:${slug}`;
  const mapping = CONTENT_MAPPING[key];

  if (!mapping) {
    errors.push({ slug, contentType: 'blog', check: 'MISSING_MAPPING', message: 'No mapping entry found' });
    continue;
  }

  if (mapping.contentType !== 'blog') {
    errors.push({ slug, contentType: 'blog', check: 'WRONG_TYPE', message: `Mapping says '${mapping.contentType}', expected 'blog'` });
  }

  if (!VALID_BLOG_INTENTS.has(mapping.intent)) {
    errors.push({ slug, contentType: 'blog', check: 'INVALID_INTENT', message: `Intent '${mapping.intent}' is not valid. Must be: PROBLEM, SYSTEM, FRAMEWORK` });
  }

  if (mapping.primarySystem && !canonicalSystems.has(mapping.primarySystem)) {
    errors.push({ slug, contentType: 'blog', check: 'INVALID_SYSTEM', message: `System '${mapping.primarySystem}' is not in CANONICAL_SYSTEMS` });
  }

  if (mapping.primarySystem && mapping.ctaTarget) {
    const expected = SYSTEM_TO_SERVICE_PATH[mapping.primarySystem];
    if (expected && mapping.ctaTarget !== expected) {
      errors.push({ slug, contentType: 'blog', check: 'CTA_MISMATCH', message: `ctaTarget '${mapping.ctaTarget}' doesn't match SYSTEM_TO_SERVICE_PATH['${mapping.primarySystem}'] = '${expected}'` });
    }
  }

  if (!mapping.primarySystem && !mapping.ctaTarget) {
    errors.push({ slug, contentType: 'blog', check: 'NO_CTA_RESOLUTION', message: 'No primarySystem and no ctaTarget — CTA cannot be resolved' });
  }
}

// ── Check: every resource has a mapping ──────────────────────────────

for (const resource of resources) {
  const slug = resource.slug;
  const key = `resource:${slug}`;
  const mapping = CONTENT_MAPPING[key];

  if (!mapping) {
    errors.push({ slug, contentType: 'resource', check: 'MISSING_MAPPING', message: 'No mapping entry found' });
    continue;
  }

  if (mapping.contentType !== 'resource') {
    errors.push({ slug, contentType: 'resource', check: 'WRONG_TYPE', message: `Mapping says '${mapping.contentType}', expected 'resource'` });
  }

  if (!VALID_RESOURCE_INTENTS.has(mapping.intent)) {
    errors.push({ slug, contentType: 'resource', check: 'INVALID_INTENT', message: `Intent '${mapping.intent}' is not valid. Must be: ACTIONABLE, EDUCATIONAL, EXAMPLE` });
  }

  if (mapping.primarySystem && !canonicalSystems.has(mapping.primarySystem)) {
    errors.push({ slug, contentType: 'resource', check: 'INVALID_SYSTEM', message: `System '${mapping.primarySystem}' is not in CANONICAL_SYSTEMS` });
  }

  if (mapping.primarySystem && mapping.ctaTarget) {
    const expected = SYSTEM_TO_SERVICE_PATH[mapping.primarySystem];
    if (expected && mapping.ctaTarget !== expected && mapping.ctaTarget !== '/contact') {
      errors.push({ slug, contentType: 'resource', check: 'CTA_MISMATCH', message: `ctaTarget '${mapping.ctaTarget}' doesn't match expected path` });
    }
  }
}

// ── Check: no orphaned mappings ──────────────────────────────────────

const allBlogSlugs = new Set(Object.keys(BLOG_POSTS));
const allResourceSlugs = new Set(resources.map(r => r.slug));

for (const [key, mapping] of Object.entries(CONTENT_MAPPING)) {
  const slug = mapping.slug;
  if (mapping.contentType === 'blog' && !allBlogSlugs.has(slug)) {
    errors.push({ slug, contentType: mapping.contentType, check: 'ORPHANED_MAPPING', message: `Mapping '${key}' exists but no blog content found` });
  }
  if (mapping.contentType === 'resource' && !allResourceSlugs.has(slug)) {
    errors.push({ slug, contentType: mapping.contentType, check: 'ORPHANED_MAPPING', message: `Mapping '${key}' exists but no resource content found` });
  }
}

// ── Output ───────────────────────────────────────────────────────────

const mappingCount = Object.keys(CONTENT_MAPPING).length;
const blogCount = Object.values(CONTENT_MAPPING).filter(m => m.contentType === 'blog').length;
const resourceCount = Object.values(CONTENT_MAPPING).filter(m => m.contentType === 'resource').length;

console.log('\n═══════════════════════════════════════════════════════════════');
console.log('  CONTENT MAPPING VALIDATION');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`  Mappings: ${mappingCount} (${blogCount} blogs, ${resourceCount} resources)`);
console.log(`  Expected: ${allBlogSlugs.size} blogs, ${allResourceSlugs.size} resources`);
console.log(`  Errors:   ${errors.length}`);
console.log('');

if (errors.length === 0) {
  console.log('  ✓ All mappings valid.');
} else {
  const byCheck = new Map<string, ValidationError[]>();
  for (const e of errors) {
    if (!byCheck.has(e.check)) byCheck.set(e.check, []);
    byCheck.get(e.check)!.push(e);
  }

  for (const [check, items] of byCheck) {
    console.log(`  [${check}] — ${items.length} error(s):`);
    for (const e of items) {
      console.log(`    ${e.contentType}/${e.slug}: ${e.message}`);
    }
    console.log('');
  }
}

console.log('═══════════════════════════════════════════════════════════════\n');

process.exit(errors.length > 0 ? 1 : 0);

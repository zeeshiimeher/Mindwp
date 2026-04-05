/**
 * Generate Content Mapping from Phase 10 Audit
 *
 * Reads registries for titles + audit JSON for system data,
 * infers intent from slug/title patterns, resolves CTA targets.
 *
 * Usage: npx tsx scripts/generators/generate-content-mapping.ts
 */

import { writeFileSync } from 'node:fs';
import { BLOG_POSTS } from '../../src/domains/blog/registry';
import { resources } from '../../src/domains/resources/generatedRegistry';
import { SYSTEM_TO_SERVICE_PATH } from '../../src/lib/ui/ctaEngine';

// ── Intent inference rules ───────────────────────────────────────────

type BlogIntent = 'PROBLEM' | 'SYSTEM' | 'FRAMEWORK';
type ResourceIntent = 'ACTIONABLE' | 'EDUCATIONAL' | 'EXAMPLE';

interface InferResult<T> {
  intent: T;
  confidence: 'high' | 'low';
  matchedRule: string;
}

const BLOG_RULES: { pattern: RegExp; intent: BlogIntent; rule: string }[] = [
  { pattern: /\b(why|mistakes?|lose|losing|fail|miss(ed)?|cost|problem|delays?|broke)\b/i, intent: 'PROBLEM', rule: 'problem-keyword' },
  { pattern: /\b(how|system|automation|automat(e|ed|ing)|setup|implement|integrat|build|work|handling|monitor|routing|capture|recovery|reactivat|response|generation|tracking|reminders?|follow[- ]?up)\b/i, intent: 'SYSTEM', rule: 'system-keyword' },
  { pattern: /\b(framework|model|architecture|explained|visibility|signals?|vs\b|future|what[- ]is)\b/i, intent: 'FRAMEWORK', rule: 'framework-keyword' },
];

const RESOURCE_RULES: { pattern: RegExp; intent: ResourceIntent; rule: string }[] = [
  { pattern: /\b(example|case|sample|demo|walkthrough)\b/i, intent: 'EXAMPLE', rule: 'example-keyword' },
  { pattern: /\b(framework|architecture|model|signals?|visibility|explained|vs\b|what[- ]is)\b/i, intent: 'EDUCATIONAL', rule: 'educational-keyword' },
  { pattern: /\b(how|guide|setup|implement|automat|system|build|handling|capture|recovery|routing|monitor|tracking|reactivat|generation|reminders?|follow[- ]?up|funnel|pipeline|workflow|loop)\b/i, intent: 'ACTIONABLE', rule: 'actionable-keyword' },
];

function inferBlogIntent(slug: string, title: string): InferResult<BlogIntent> {
  const text = `${slug} ${title}`;
  for (const { pattern, intent, rule } of BLOG_RULES) {
    if (pattern.test(text)) {
      return { intent, confidence: 'high', matchedRule: rule };
    }
  }
  return { intent: 'SYSTEM', confidence: 'low', matchedRule: 'default-fallback' };
}

function inferResourceIntent(slug: string, title: string): InferResult<ResourceIntent> {
  const text = `${slug} ${title}`;
  for (const { pattern, intent, rule } of RESOURCE_RULES) {
    if (pattern.test(text)) {
      return { intent, confidence: 'high', matchedRule: rule };
    }
  }
  return { intent: 'ACTIONABLE', confidence: 'low', matchedRule: 'default-fallback' };
}

// ── Generate mappings ────────────────────────────────────────────────

interface MappingEntry {
  slug: string;
  contentType: 'blog' | 'resource';
  intent: string;
  primarySystem?: string;
  ctaTarget?: string;
  notes?: string;
}

const mappings: MappingEntry[] = [];
const lowConfidence: { slug: string; contentType: string; inferredIntent: string }[] = [];

// Blogs
for (const [slug, post] of Object.entries(BLOG_POSTS)) {
  const title = post.title ?? slug;
  const systems: string[] = post.systems ?? [];
  const primarySystem = systems[0] ?? undefined;
  const { intent, confidence, matchedRule } = inferBlogIntent(slug, title);

  const ctaTarget = primarySystem && SYSTEM_TO_SERVICE_PATH[primarySystem]
    ? SYSTEM_TO_SERVICE_PATH[primarySystem]
    : undefined;

  const notes: string[] = [];
  if (confidence === 'low') {
    notes.push(`low-confidence: fallback rule (${matchedRule})`);
    lowConfidence.push({ slug, contentType: 'blog', inferredIntent: intent });
  }
  if (systems.length > 1) {
    notes.push(`multi-system: [${systems.join(', ')}] → using '${primarySystem}'`);
  }
  if (!primarySystem) {
    notes.push('no system assigned');
  }
  if (!ctaTarget) {
    notes.push('no CTA target resolvable');
  }

  mappings.push({
    slug,
    contentType: 'blog',
    intent,
    primarySystem,
    ctaTarget,
    notes: notes.length > 0 ? notes.join('; ') : undefined,
  });
}

// Resources
for (const resource of resources) {
  const slug = resource.slug;
  const title = resource.title ?? slug;
  const systems: string[] = resource.systems ?? [];
  const primarySystem = systems[0] ?? undefined;
  const { intent, confidence, matchedRule } = inferResourceIntent(slug, title);

  const ctaTarget = primarySystem && SYSTEM_TO_SERVICE_PATH[primarySystem]
    ? SYSTEM_TO_SERVICE_PATH[primarySystem]
    : '/contact';

  const notes: string[] = [];
  if (confidence === 'low') {
    notes.push(`low-confidence: fallback rule (${matchedRule})`);
    lowConfidence.push({ slug, contentType: 'resource', inferredIntent: intent });
  }
  if (systems.length > 1) {
    notes.push(`multi-system: [${systems.join(', ')}] → using '${primarySystem}'`);
  }
  if (!primarySystem) {
    notes.push('no system assigned');
  }

  mappings.push({
    slug,
    contentType: 'resource',
    intent,
    primarySystem,
    ctaTarget,
    notes: notes.length > 0 ? notes.join('; ') : undefined,
  });
}

// ── Write TypeScript mapping file ────────────────────────────────────

const blogMappings = mappings.filter(m => m.contentType === 'blog');
const resourceMappings = mappings.filter(m => m.contentType === 'resource');

let output = `/**
 * Content Mapping System (Phase 10.1)
 *
 * Centralized control layer for content intent, primary system, and CTA targets.
 * Used by ctaResolver to drive deterministic CTA routing without editing content files.
 *
 * Generated from reports/phase10-content-audit.json
 * Validated by scripts/analyzers/validate-content-mapping.ts
 *
 * AUTO-GENERATED — Do not edit manually without re-running validator.
 * Generated: ${new Date().toISOString()}
 * Total: ${mappings.length} mappings (${blogMappings.length} blogs, ${resourceMappings.length} resources)
 */

import type { BlogIntent, ResourceIntent } from '@/lib/ui/ctaEngine';

export type ContentMapping = {
  slug: string;
  contentType: 'blog' | 'resource';
  intent: BlogIntent | ResourceIntent;
  primarySystem?: string;
  ctaTarget?: string;
  notes?: string;
};

/** Lookup helper: returns mapping for a given contentType + slug */
export function getContentMapping(contentType: 'blog' | 'resource', slug: string): ContentMapping | undefined {
  return CONTENT_MAPPING[contentType + ':' + slug];
}

export const CONTENT_MAPPING: Record<string, ContentMapping> = {\n`;

for (const m of mappings) {
  const key = `${m.contentType}:${m.slug}`;
  const parts = [
    `    slug: '${m.slug}'`,
    `    contentType: '${m.contentType}'`,
    `    intent: '${m.intent}'`,
  ];
  if (m.primarySystem) parts.push(`    primarySystem: '${m.primarySystem}'`);
  if (m.ctaTarget) parts.push(`    ctaTarget: '${m.ctaTarget}'`);
  if (m.notes) parts.push(`    notes: '${m.notes.replace(/'/g, "\\'")}' `);

  output += `  '${key}': {\n${parts.join(',\n')},\n  },\n`;
}

output += `};\n`;

writeFileSync('src/system/content/contentMapping.ts', output);

// ── Summary ──────────────────────────────────────────────────────────

console.log('\n═══════════════════════════════════════════════════════════════');
console.log('  CONTENT MAPPING GENERATION — Summary');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`  Total mapped:     ${mappings.length}`);
console.log(`    Blogs:          ${blogMappings.length}`);
console.log(`    Resources:      ${resourceMappings.length}`);
console.log(`  Low confidence:   ${lowConfidence.length}`);
console.log('');

if (lowConfidence.length > 0) {
  console.log('  Low-confidence inferences:');
  for (const lc of lowConfidence) {
    console.log(`    - ${lc.contentType}/${lc.slug} → ${lc.inferredIntent}`);
  }
  console.log('');
}

// Check for unmapped
const allBlogSlugs = new Set(Object.keys(BLOG_POSTS));
const allResourceSlugs = new Set(resources.map(r => r.slug));
const mappedBlogSlugs = new Set(blogMappings.map(m => m.slug));
const mappedResourceSlugs = new Set(resourceMappings.map(m => m.slug));

const unmappedBlogs = [...allBlogSlugs].filter(s => !mappedBlogSlugs.has(s));
const unmappedResources = [...allResourceSlugs].filter(s => !mappedResourceSlugs.has(s));

if (unmappedBlogs.length > 0 || unmappedResources.length > 0) {
  console.log('  ⚠ UNMAPPED CONTENT:');
  for (const s of unmappedBlogs) console.log(`    - blog/${s}`);
  for (const s of unmappedResources) console.log(`    - resource/${s}`);
} else {
  console.log('  ✓ All blogs and resources mapped.');
}

// Intent distribution
const intentDist = new Map<string, number>();
for (const m of mappings) {
  const key = `${m.contentType}:${m.intent}`;
  intentDist.set(key, (intentDist.get(key) ?? 0) + 1);
}
console.log('\n  Intent distribution:');
for (const [key, count] of [...intentDist.entries()].sort()) {
  console.log(`    ${key}: ${count}`);
}

console.log('\n  ✓ Wrote src/system/content/contentMapping.ts');
console.log('═══════════════════════════════════════════════════════════════\n');

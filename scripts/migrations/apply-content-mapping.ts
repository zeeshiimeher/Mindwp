/**
 * Phase 10.2 — Apply Content Mapping to Content Files
 *
 * For each entry in CONTENT_MAPPING:
 * 1. Locate the content file
 * 2. Add `intent` field after `title` (blogs) or after `description` (resources)
 * 3. Replace CTA target: `/services` → specific service path (blogs), `primaryCta.href` → specific path (resources)
 * 4. Preserve all formatting and structure
 *
 * Usage: npx tsx scripts/migrations/apply-content-mapping.ts
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { CONTENT_MAPPING } from '../../src/system/content/contentMapping';

const BLOG_DIR = 'src/domains/blog/content';
const RESOURCE_DIR = 'src/domains/resources/content';

// ── Build slug → filename maps ───────────────────────────────────────

function buildSlugToFileMap(dir: string, slugPattern: RegExp): Map<string, string> {
  const map = new Map<string, string>();
  const files = readdirSync(dir).filter(f => f.endsWith('.tsx'));

  for (const file of files) {
    const filepath = join(dir, file);
    const content = readFileSync(filepath, 'utf-8');
    const match = content.match(slugPattern);
    if (match) {
      map.set(match[1], filepath);
    }
  }
  return map;
}

// Blog files: slug directly in object literal as `slug: 'slug-name'`
const blogSlugMap = buildSlugToFileMap(BLOG_DIR, /slug:\s*'([^']+)'/);

// Resource files: some use `slug` variable, some use string literal
// Need to handle both: `slug: 'name'` and `const slug = 'name'`
function buildResourceSlugMap(): Map<string, string> {
  const map = new Map<string, string>();
  const files = readdirSync(RESOURCE_DIR).filter(f => f.endsWith('.tsx'));

  for (const file of files) {
    const filepath = join(RESOURCE_DIR, file);
    const content = readFileSync(filepath, 'utf-8');

    // Try const slug = 'xxx'
    let match = content.match(/const slug\s*=\s*'([^']+)'/);
    if (match) {
      map.set(match[1], filepath);
      continue;
    }

    // Try slug: 'xxx' in the export
    match = content.match(/slug:\s*'([^']+)'/);
    if (match) {
      map.set(match[1], filepath);
    }
  }
  return map;
}

const resourceSlugMap = buildResourceSlugMap();

// ── Migration ────────────────────────────────────────────────────────

interface MigrationResult {
  slug: string;
  contentType: string;
  file: string;
  changes: string[];
  success: boolean;
  error?: string;
}

const results: MigrationResult[] = [];

for (const [key, mapping] of Object.entries(CONTENT_MAPPING)) {
  const { slug, contentType, intent, ctaTarget } = mapping;

  const fileMap = contentType === 'blog' ? blogSlugMap : resourceSlugMap;
  const filepath = fileMap.get(slug);

  if (!filepath) {
    results.push({
      slug,
      contentType,
      file: '(not found)',
      changes: [],
      success: false,
      error: `Could not locate file for ${contentType}/${slug}`,
    });
    continue;
  }

  let content = readFileSync(filepath, 'utf-8');
  const changes: string[] = [];

  try {
    if (contentType === 'blog') {
      // 1. Add intent after title line in the export block
      // Blog files: `export const xxx: BlogPostData = {` then `title: '...',`
      if (!content.includes(`intent: '`)) {
        // Find the BlogPostData export, then the title line within it
        const exportIdx = content.indexOf('BlogPostData = {');
        if (exportIdx !== -1) {
          const afterExport = content.slice(exportIdx);
          const titleMatch = afterExport.match(/(  title:\s*['"][^'"]*['"],?\n)/);
          if (titleMatch) {
            const titleLine = titleMatch[1];
            const absoluteIdx = exportIdx + afterExport.indexOf(titleLine);
            content = content.slice(0, absoluteIdx + titleLine.length)
              + `  intent: '${intent}',\n`
              + content.slice(absoluteIdx + titleLine.length);
            changes.push(`added intent: '${intent}'`);
          }
        }
      } else {
        changes.push('intent already present — skipped');
      }

      // 2. Replace CTA target: buttonUrl: '/services' → specific path
      if (ctaTarget && content.includes("buttonUrl: '/services'")) {
        content = content.replace(
          /buttonUrl:\s*'\/services'/g,
          `buttonUrl: '${ctaTarget}'`,
        );
        changes.push(`CTA: /services → ${ctaTarget}`);
      }
    }

    if (contentType === 'resource') {
      // 1. Add intent after description field ONLY in the ResourceData export block
      if (!content.includes(`intent: '`)) {
        const exportIdx = content.indexOf('ResourceData = {');
        if (exportIdx !== -1) {
          const afterExport = content.slice(exportIdx);
          // Find the description field in the export block
          // It can be single-line: `description: '...',` or multi-line: `description:\n    '...',`
          const descMatch = afterExport.match(/(  description:\s*\n?\s*'[\s\S]*?',\n)/);
          if (descMatch) {
            const descBlock = descMatch[1];
            const absoluteIdx = exportIdx + afterExport.indexOf(descBlock);
            content = content.slice(0, absoluteIdx + descBlock.length)
              + `  intent: '${intent}',\n`
              + content.slice(absoluteIdx + descBlock.length);
            changes.push(`added intent: '${intent}'`);
          } else {
            changes.push('WARNING: could not locate description field for intent insertion');
          }
        } else {
          changes.push('WARNING: could not find ResourceData export');
        }
      } else {
        changes.push('intent already present — skipped');
      }

      // 2. Replace CTA target: primaryCta.href → specific path
      if (ctaTarget && ctaTarget !== '/contact') {
        // Resources use: url: primaryCta.href
        if (content.includes('url: primaryCta.href')) {
          content = content.replace(
            /url:\s*primaryCta\.href/g,
            `url: '${ctaTarget}'`,
          );
          changes.push(`CTA: primaryCta.href → ${ctaTarget}`);
        }
      }
      // If ctaTarget is /contact, that's already what primaryCta.href resolves to — no change needed
    }

    writeFileSync(filepath, content);
    results.push({ slug, contentType, file: filepath, changes, success: true });
  } catch (err: any) {
    results.push({
      slug,
      contentType,
      file: filepath,
      changes,
      success: false,
      error: err.message,
    });
  }
}

// ── Report ───────────────────────────────────────────────────────────

const successful = results.filter(r => r.success);
const failed = results.filter(r => !r.success);
const withChanges = successful.filter(r => r.changes.length > 0 && !r.changes.every(c => c.includes('skipped')));

console.log('\n═══════════════════════════════════════════════════════════════');
console.log('  PHASE 10.2 — CONTENT MIGRATION RESULTS');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`  Total mappings processed: ${results.length}`);
console.log(`  Files updated:            ${withChanges.length}`);
console.log(`  Failures:                 ${failed.length}`);
console.log('');

if (failed.length > 0) {
  console.log('  ✗ FAILURES:');
  for (const r of failed) {
    console.log(`    ${r.contentType}/${r.slug}: ${r.error}`);
  }
  console.log('');
}

console.log('  Changes per file:');
for (const r of successful) {
  if (r.changes.length > 0) {
    console.log(`    ${r.contentType}/${r.slug}:`);
    for (const c of r.changes) {
      console.log(`      → ${c}`);
    }
  }
}

console.log('\n═══════════════════════════════════════════════════════════════\n');

process.exit(failed.length > 0 ? 1 : 0);

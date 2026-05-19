#!/usr/bin/env node
// ─── Image System CLI ───────────────────────────────────────────────
// Main entry point for image generation commands
// Keep the image system seperate ignore image system related files
// Usage:
//   pnpm exec tsx scripts/image-system/image-generate.ts --mode test --slug <post-slug>
//   pnpm exec tsx scripts/image-system/image-generate.ts --domain blog
//   pnpm exec tsx scripts/image-system/image-generate.ts --domain resources
//   pnpm exec tsx scripts/image-system/image-generate.ts --domain industries
//   pnpm exec tsx scripts/image-system/image-generate.ts --domain case-studies
//   pnpm exec tsx scripts/image-system/image-generate.ts --slug <post-slug>
//   pnpm exec tsx scripts/image-system/image-generate.ts --queue start
//   pnpm exec tsx scripts/image-system/image-generate.ts --queue status
//   pnpm exec tsx scripts/image-system/image-generate.ts --queue resume

import fs from 'fs';
import path from 'path';

import { systemEnv, withSystemEnvOverrides } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';

const logger = createLogger({ label: 'image-generate', mode: 'summary', rootDir: process.cwd() });

// ─── Helpers ────────────────────────────────────────────────────────

function loadEnv() {
  const envPath = path.resolve('.env.local');
  if (!fs.existsSync(envPath)) {
    logger.error('❌ .env.local not found. Create it with API keys:');
    logger.error('   UNSPLASH_ACCESS_KEY=...');
    logger.error('   PEXELS_API_KEY=...');
    logger.error('   PIXABAY_API_KEY=...');
    process.exit(1);
  }

  const content = fs.readFileSync(envPath, 'utf-8');
  const overrides: Record<string, string> = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx < 0) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (!(key in overrides)) {
      overrides[key] = value;
    }
  }

  return overrides;
}

// ─── Argument Parsing ───────────────────────────────────────────────

interface CliArgs {
  mode?: 'test' | 'bulk';
  domain?: string;
  slug?: string;
  queue?: string;
  dryRun?: boolean;
  regenerate?: boolean;
  fresh?: boolean;
  diagram?: boolean;
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const parsed: CliArgs = {};

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--mode':
        parsed.mode = args[++i] as 'test' | 'bulk';
        break;
      case '--domain':
        parsed.domain = args[++i];
        break;
      case '--slug':
        parsed.slug = args[++i];
        break;
      case '--queue':
        parsed.queue = args[++i];
        break;
      case '--dry-run':
        parsed.dryRun = true;
        break;
      case '--regenerate':
      case '--force':
        parsed.regenerate = true;
        break;
      case '--fresh':
        parsed.fresh = true;
        break;
      case '--diagram':
        parsed.diagram = true;
        break;
    }
  }

  return parsed;
}

// ─── Content Loaders ────────────────────────────────────────────────
// Dynamic imports to load content registries

type ContentDomain = 'blog' | 'resources' | 'industries' | 'case-studies' | 'features' | 'services';
type ContentMetadata = {
  title: string;
  summary: string;
  topics: string[];
  activeSystems: string[];
  tags: string[];
  sectionHeadings: string[];
  slug: string;
};

async function loadBlogPost(slug: string): Promise<ContentMetadata | null> {
  try {
    const registryPath = path.resolve('src/domains/blog/registry.ts');
    if (!fs.existsSync(registryPath)) {
      logger.error('Blog registry not found. Run: pnpm generate:content-registries');
      return null;
    }

    // Load all blog content files and find the matching slug
    const contentDir = path.resolve('src/domains/blog/content');
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.tsx'));

    for (const file of files) {
      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      // Check if this file contains our slug
      if (!content.includes(`'${slug}'`) && !content.includes(`"${slug}"`)) continue;

      // Extract data using regex patterns from the TypeScript source
      // Find the export-level title: appears right after slug in the export block
      // Handles both `slug,\n  title:` (variable ref) and `slug: '...',\n  title:` (inline)
      const exportTitleMatch = content.match(
        /slug(?:,|:\s*['"][^'"]+['"]\s*,)\s*\n\s+title:\s*['"]([^'"]{5,80})['"]/
      );
      const headingsMatches = [...content.matchAll(/heading:\s*['"]([^'"]+)['"]/g)];
      const title = exportTitleMatch?.[1] ?? headingsMatches[0]?.[1] ?? slug;

      const seoDescriptionMatch = content.match(/seo:\s*\{[\s\S]*?description:\s*['"]([^'"]+)['"]/);
      const topicsMatch = content.match(/topics:\s*\[([\s\S]*?)\]/);
      const primarySystemMatch = content.match(/primarySystem:\s*['"]([^'"]+)['"]/);
      const supportingSystemsMatch = content.match(/supportingSystems:\s*\[([\s\S]*?)\]/);
      const tagsMatch = content.match(/tags:\s*\[([\s\S]*?)\]/);

      return {
        title,
        summary: seoDescriptionMatch?.[1] ?? '',
        topics: extractArrayValues(topicsMatch?.[1] ?? ''),
        activeSystems: [
          ...(primarySystemMatch?.[1] ? [primarySystemMatch[1]] : []),
          ...extractArrayValues(supportingSystemsMatch?.[1] ?? ''),
        ],
        tags: extractArrayValues(tagsMatch?.[1] ?? ''),
        sectionHeadings: headingsMatches.map(m => m[1]),
        slug,
      };
    }

    logger.error(`Blog post not found: ${slug}`);
    return null;
  } catch (err) {
    logger.error(`Failed to load blog post: ${err instanceof Error ? err.message : String(err)}`);
    return null;
  }
}

function extractArrayValues(content: string): string[] {
  const matches = [...content.matchAll(/['"]([^'"]+)['"]/g)];
  return matches.map(m => m[1]);
}

async function loadAllBlogSlugs(): Promise<string[]> {
  const contentDir = path.resolve('src/domains/blog/content');
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.tsx'));
  const slugs: string[] = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
    if (slugMatch) slugs.push(slugMatch[1]);
  }

  return slugs;
}

async function loadAllResourceSlugs(): Promise<string[]> {
  const contentDir = path.resolve('src/domains/resources/content');
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.tsx'));
  const slugs: string[] = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
    if (slugMatch) slugs.push(slugMatch[1]);
  }

  return slugs;
}

async function loadAllIndustrySlugs(): Promise<string[]> {
  const registryPath = path.resolve('src/domains/industries/registry.ts');
  if (!fs.existsSync(registryPath)) return [];

  const { getIndustryDetailSlugs } = await import('../../src/domains/industries/registry.ts');
  return getIndustryDetailSlugs();
}

async function loadIndustryMetadata(slug: string): Promise<ContentMetadata | null> {
  const registryPath = path.resolve('src/domains/industries/registry.ts');
  if (!fs.existsSync(registryPath)) return null;

  const { getIndustryBySlug } = await import('../../src/domains/industries/registry.ts');
  const industry = getIndustryBySlug(slug);

  if (!industry) return null;

  return {
    title: industry.hero.title,
    summary: industry.seo.description,
    topics: industry.topics ?? [],
    activeSystems: [industry.primarySystem, ...(industry.supportingSystems ?? [])],
    tags: industry.industries ?? [],
    sectionHeadings: [],
    slug,
  };
}

async function loadContentMetadata(
  slug: string,
  domain: ContentDomain
): Promise<ContentMetadata | null> {
  if (domain === 'industries') {
    return loadIndustryMetadata(slug);
  }

  // Features + services use /data/ directory with .ts files instead of /content/ with .tsx
  const isDataDomain = domain === 'features' || domain === 'services';
  const subDir = isDataDomain ? 'data' : 'content';
  const ext = isDataDomain ? '.ts' : '.tsx';
  const contentDir = path.resolve(`src/domains/${domain}/${subDir}`);
  if (!fs.existsSync(contentDir)) return null;

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(ext));

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    if (!content.includes(`'${slug}'`) && !content.includes(`"${slug}"`)) continue;

    // Find the export-level title: appears right after slug in the export block
    // Handles both `slug,\n  title:` (variable ref) and `slug: '...',\n  title:` (inline)
    const exportTitleMatch = content.match(
      /slug(?:,|:\s*['"][^'"]+['"]\s*,)\s*\n\s+title:\s*['"]([^'"]{5,80})['"]/
    );
    // Features/services: hero title is the display title
    const heroTitleMatch = content.match(/hero:\s*\{[\s\S]*?title:\s*['"]([^'"]{5,120})['"]/);
    const headingsMatches = [...content.matchAll(/heading:\s*['"]([^'"]+)['"]/g)];
    const title = exportTitleMatch?.[1] ?? heroTitleMatch?.[1] ?? headingsMatches[0]?.[1] ?? slug;

    const seoDescriptionMatch = content.match(/seo:\s*\{[\s\S]*?description:\s*['"]([^'"]+)['"]/);
    const topicsMatch = content.match(/topics:\s*\[([\s\S]*?)\]/);
    const primarySystemMatch = content.match(/primarySystem:\s*['"]([^'"]+)['"]/);
    const supportingSystemsMatch = content.match(/supportingSystems:\s*\[([\s\S]*?)\]/);
    const tagsMatch = content.match(/tags:\s*\[([\s\S]*?)\]/);

    return {
      title,
      summary: seoDescriptionMatch?.[1] ?? '',
      topics: extractArrayValues(topicsMatch?.[1] ?? ''),
      activeSystems: [
        ...(primarySystemMatch?.[1] ? [primarySystemMatch[1]] : []),
        ...extractArrayValues(supportingSystemsMatch?.[1] ?? ''),
      ],
      tags: extractArrayValues(tagsMatch?.[1] ?? ''),
      sectionHeadings: headingsMatches.map(m => m[1]),
      slug,
    };
  }

  return null;
}

// ─── Default Test Slugs (hardcoded for quick testing) ───────────────

const DEFAULT_TEST_SLUGS: Record<ContentDomain, string> = {
  blog: 'lead-response-time-for-service-businesses',
  'case-studies': 'hvac-seasonal-enquiry-follow-up',
  resources: 'authority-signals-for-local-search',
  industries: 'home-services/plumbing-companies',
  features: 'crm',
  services: 'follow-up-crm',
};

// ─── Pipeline Import ────────────────────────────────────────────────

async function importPipeline() {
  return await import('../../src/lib/image-system/pipeline/processor.js');
}

async function importQueue() {
  return await import('../../src/lib/image-system/queue/queueManager.js');
}

async function importDedup() {
  return await import('../../src/lib/image-system/dedup/imageIndex.js');
}

async function importSemantic() {
  return await import('../../src/lib/image-system/semantic/queryGenerator.js');
}

async function importDiagrams() {
  return await import('../../src/lib/image-system/diagrams/diagramGenerator.js');
}

async function importCharts() {
  return await import('../../src/lib/image-system/diagrams/chartGenerator.js');
}

// ─── Commands ───────────────────────────────────────────────────────

async function runTestMode(
  slug: string,
  domain: ContentDomain = 'blog',
  regenerate = false,
  fresh = false
) {
  logger.info('');
  logger.info('╔══════════════════════════════════════════════════════╗');
  logger.info('║           MindWP Image System — TEST MODE           ║');
  logger.info('╚══════════════════════════════════════════════════════╝');
  logger.info('');
  logger.info(`🧪 Testing: ${domain}/${slug}`);
  if (regenerate) logger.info('🔄 Regenerate mode: reprocessing same source image');
  if (fresh) logger.info('🆕 Fresh mode: searching for a completely new image');
  logger.info('');

  const metadata =
    domain === 'blog' ? await loadBlogPost(slug) : await loadContentMetadata(slug, domain);
  if (!metadata) {
    logger.error(`❌ Could not load ${domain} post: ${slug}`);
    process.exit(1);
  }

  logger.info(`📝 Title: ${metadata.title}`);
  logger.info(`🧾 Summary: ${metadata.summary || '(none)'}`);
  logger.info(`🏷️  Topics: ${metadata.topics.join(', ') || '(none)'}`);
  logger.info(`⚙️  Active systems: ${metadata.activeSystems.join(', ') || '(none)'}`);
  logger.info(`🏷️  Tags: ${metadata.tags.join(', ') || '(none)'}`);
  logger.info(`📋 Section Headings: ${metadata.sectionHeadings.join(', ') || '(none)'}`);
  logger.info('');

  // Generate semantic queries
  const pipeline = await importPipeline();
  const semantic = await importSemantic();
  const dedup = await importDedup();

  // Handle regenerate/fresh modes
  let blockedImageId: string | undefined;

  if (fresh) {
    // Get the previous image ID BEFORE clearing the entry
    const existingEntry = dedup.getImageEntry(slug, 'featured-clean');
    if (existingEntry) {
      blockedImageId = existingEntry.imageId;
      logger.info(
        `🚫 Will skip previous image: ${existingEntry.provider}/${existingEntry.imageId}`
      );
    }
  }

  if (regenerate || fresh) {
    for (const variant of ['featured-clean', 'featured-overlay'] as const) {
      if (dedup.hasImage(slug, variant)) {
        dedup.removeImage(slug, variant);
        logger.info(`🗑️  Cleared previous index entry: ${variant}`);
      }
    }
    // Clean up new flat naming
    const overlayPath = `public/images/${domain}/${slug}.webp`;
    const rawPath = `public/images/${domain}/${slug}-raw.webp`;
    for (const p of [overlayPath, rawPath]) {
      if (fs.existsSync(p)) {
        fs.unlinkSync(p);
        logger.info(`🗑️  Deleted existing: ${p}`);
      }
    }
    // Also clean up legacy per-slug folder if present
    const legacyDir = `public/images/${domain}/${slug}`;
    if (fs.existsSync(legacyDir) && fs.statSync(legacyDir).isDirectory()) {
      fs.rmSync(legacyDir, { recursive: true });
      logger.info(`🗑️  Deleted legacy folder: ${legacyDir}`);
    }
    if (dedup.hasImage(slug, 'featured' as any)) {
      dedup.removeImage(slug, 'featured' as any);
      logger.info('🗑️  Cleared legacy index entry: featured');
    }
  }

  const queries = semantic.generateSemanticQueries(metadata, domain);
  logger.info('🔍 Generated Search Queries:');
  for (const q of queries) {
    logger.info(`   - "${q.query}" (score: ${q.score}, source: ${q.source})`);
  }
  logger.info('');

  // Process the image
  logger.info('🚀 Starting image pipeline...');
  logger.info('');

  const result = await pipeline.processImage(metadata, domain, 'featured-clean', blockedImageId);

  if (result) {
    logger.info('');
    logger.info('✅ Image generated successfully!');
    logger.info(`   📁 Clean:   public/images/${domain}/${slug}-raw.webp`);
    logger.info(`   📁 Overlay: public/images/${domain}/${slug}.webp`);
    logger.info(`   🏢 Provider: ${result.provider}`);
    logger.info(`   🆔 Image ID: ${result.imageId}`);
    logger.info(`   📊 Score: ${result.relevanceScore}`);
    logger.info(`   🔗 Hash: ${result.hash}`);
  } else {
    logger.info('');
    logger.info('⚠️  No suitable image found. Try running again or check API keys.');
  }

  logger.info('');
  logger.info('────────────────────────────────────────────────────────');
  logger.info('Test complete. Review the output image before enabling bulk mode.');
  logger.info('');
}

async function runBulkMode(domain: ContentDomain) {
  logger.info('');
  logger.info('╔══════════════════════════════════════════════════════╗');
  logger.info('║           MindWP Image System — BULK MODE           ║');
  logger.info('╚══════════════════════════════════════════════════════╝');
  logger.info('');
  logger.info(`📦 Domain: ${domain}`);
  logger.info('');

  let slugs: string[] = [];

  switch (domain) {
    case 'blog':
      slugs = await loadAllBlogSlugs();
      break;
    case 'resources':
      slugs = await loadAllResourceSlugs();
      break;
    case 'industries':
      slugs = await loadAllIndustrySlugs();
      break;
    default: {
      // Features + services use /data/ directory with .ts files
      const isDataDomain = domain === 'features' || domain === 'services';
      const subDir = isDataDomain ? 'data' : 'content';
      const ext = isDataDomain ? '.ts' : '.tsx';
      const contentDir = path.resolve(`src/domains/${domain}/${subDir}`);
      if (fs.existsSync(contentDir)) {
        const files = fs.readdirSync(contentDir).filter(f => f.endsWith(ext));
        for (const file of files) {
          const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
          const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
          if (slugMatch) slugs.push(slugMatch[1]);
        }
      }
    }
  }

  logger.info(`📄 Found ${slugs.length} posts in ${domain}`);

  const dedup = await importDedup();
  const pipeline = await importPipeline();
  const queue = await importQueue();

  // Filter out posts that already have images
  const needed = slugs.filter(s => !dedup.hasImage(s, 'featured-clean'));
  logger.info(`🔍 ${needed.length} posts need featured images`);
  logger.info('');

  let processed = 0;
  let succeeded = 0;
  let failed = 0;

  for (const slug of needed) {
    processed++;
    logger.info(`[${processed}/${needed.length}] Processing: ${slug}`);

    const metadata = await loadContentMetadata(slug, domain);
    if (!metadata) {
      logger.info(`   ⚠️  Could not load metadata, skipping`);
      failed++;
      continue;
    }

    try {
      const result = await pipeline.processImage(metadata, domain, 'featured-clean');
      if (result) {
        logger.info(`   ✅ ${result.provider}/${result.imageId} (score: ${result.relevanceScore})`);
        succeeded++;
      } else {
        logger.info(`   ⚠️  No suitable image found`);
        failed++;
      }
    } catch (err) {
      logger.error(`   ❌ Error: ${err instanceof Error ? err.message : String(err)}`);
      failed++;
    }
  }

  logger.info('');
  logger.info('═══════════════════════════════════════════');
  logger.info(`✅ Succeeded: ${succeeded}`);
  logger.info(`❌ Failed: ${failed}`);
  logger.info(`📊 Total: ${processed}/${needed.length}`);
  logger.info('═══════════════════════════════════════════');
}

async function runSinglePost(slug: string) {
  logger.info(`\n🔄 Generating image for: ${slug}\n`);

  // Try blog first, then other domains
  const domains: ContentDomain[] = [
    'blog',
    'resources',
    'case-studies',
    'industries',
    'features',
    'services',
  ];
  const pipeline = await importPipeline();

  for (const domain of domains) {
    const metadata = await loadContentMetadata(slug, domain);
    if (!metadata) continue;

    logger.info(`Found in domain: ${domain}`);
    const result = await pipeline.processImage(metadata, domain, 'featured-clean');

    if (result) {
      logger.info(
        `\n✅ Output: ${result.outputPath} (${result.provider}, score: ${result.relevanceScore})`
      );
    } else {
      logger.info('\n⚠️  No suitable image found');
    }
    return;
  }

  logger.error(`❌ Post not found in any domain: ${slug}`);
}

async function showQueueStatus() {
  const queue = await importQueue();
  const status = queue.getQueueStatus();

  logger.info('\n📊 Queue Status:');
  logger.info(`   Total: ${status.total}`);
  logger.info(`   Pending: ${status.pending}`);
  logger.info(`   Processing: ${status.processing}`);
  logger.info(`   Completed: ${status.completed}`);
  logger.info(`   Failed: ${status.failed}`);
  logger.info(`   Skipped: ${status.skipped}`);
}

async function resumeQueue() {
  const queue = await importQueue();
  const pipeline = await importPipeline();

  const reset = queue.resetFailedJobs();
  if (reset > 0) logger.info(`♻️  Reset ${reset} failed jobs`);

  let job = queue.getNextPendingJob();
  let count = 0;

  while (job) {
    count++;
    logger.info(`\n[Queue] Processing: ${job.domain}/${job.slug} (${job.imageType})`);

    queue.updateJobStatus(job.domain, job.slug, job.imageType, 'processing');

    const metadata = await loadContentMetadata(job.slug, job.domain);
    if (!metadata) {
      queue.updateJobStatus(job.domain, job.slug, job.imageType, 'skipped', 'metadata not found');
      job = queue.getNextPendingJob();
      continue;
    }

    try {
      const result = await pipeline.processImage(metadata, job.domain, job.imageType);
      if (result) {
        queue.updateJobStatus(job.domain, job.slug, job.imageType, 'completed');
        logger.info(`   ✅ Done (score: ${result.relevanceScore})`);
      } else {
        queue.updateJobStatus(job.domain, job.slug, job.imageType, 'failed', 'no suitable image');
      }
    } catch (err) {
      queue.updateJobStatus(
        job.domain,
        job.slug,
        job.imageType,
        'failed',
        err instanceof Error ? err.message : 'unknown error'
      );
    }

    job = queue.getNextPendingJob();
  }

  logger.info(`\n✅ Queue processing complete. Processed ${count} jobs.`);
  await showQueueStatus();
}

async function runDiagramTest(slug: string) {
  logger.info('');
  logger.info('╔══════════════════════════════════════════════════════╗');
  logger.info('║      MindWP Image System — DIAGRAM TEST MODE       ║');
  logger.info('╚══════════════════════════════════════════════════════╝');
  logger.info('');
  logger.info(`📊 Generating diagram for resource: ${slug}`);
  logger.info('');

  const metadata = await loadContentMetadata(slug, 'resources');
  if (!metadata) {
    logger.error(`❌ Could not load resource: ${slug}`);
    process.exit(1);
  }

  logger.info(`📝 Title: ${metadata.title}`);
  logger.info(`📋 Headings: ${metadata.sectionHeadings.join(', ')}`);
  logger.info('');

  // Load the resource file sections for diagram extraction
  const contentDir = path.resolve('src/domains/resources/content');
  const files = fs.readdirSync(contentDir).filter((f: string) => f.endsWith('.tsx'));
  let sections: Array<{
    type: string;
    heading?: string;
    content?: string | string[];
    steps?: Array<{ label: string }>;
  }> = [];

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    if (!content.includes(`'${slug}'`) && !content.includes(`"${slug}"`)) continue;

    // Extract section types and headings
    const sectionMatches = [
      ...content.matchAll(/\{\s*type:\s*['"](\w+)['"][\s\S]*?heading:\s*['"]([^'"]+)['"]/g),
    ];
    for (const m of sectionMatches) {
      sections.push({ type: m[1], heading: m[2] });
    }

    // Priority 1: Solution-cards / pillar cards — best for diagrams (structured pillars)
    const solutionCardsMatch = content.match(
      /type:\s*['"]solution-cards['"][\s\S]*?heading:\s*['"]([^'"]+)['"]/
    );
    if (solutionCardsMatch) {
      const arrayMatches = [
        ...content.matchAll(/const\s+\w+\s*(?::\s*[^=]+)?\s*=\s*\[([\s\S]*?)\];/g),
      ];
      for (const am of arrayMatches) {
        const block = am[1];
        if (block.includes('description:')) {
          const cardTitles = [...block.matchAll(/title:\s*['"]([^'"]+)['"]/g)];
          if (cardTitles.length >= 3) {
            sections.push({
              type: 'steps',
              heading: solutionCardsMatch[1],
              steps: cardTitles.map(t => ({ label: t[1] })),
            });
            break;
          }
        }
      }
    }

    // Priority 2: Steps arrays (match both label: and title: fields)
    if (!sections.some(s => s.type === 'steps')) {
      const stepsMatches = [...content.matchAll(/steps:\s*\[([\s\S]*?)\]\s*[,;}\n]/g)];
      for (const m of stepsMatches) {
        const labels = [...m[1].matchAll(/(?:label|title):\s*['"]([^'"]+)['"]/g)];
        if (labels.length >= 3) {
          sections.push({
            type: 'steps',
            heading: 'Process Flow',
            steps: labels.map(l => ({ label: l[1] })),
          });
        }
      }
    }

    // Extract takeaways as diagram nodes (if no steps found yet)
    if (!sections.some(s => s.type === 'steps')) {
      const takeawaysMatch = content.match(/const\s+takeaways\s*=\s*\[([\s\S]*?)\];/);
      if (takeawaysMatch) {
        const items = [...takeawaysMatch[1].matchAll(/['"]([^'"]{10,80})['"]/g)];
        if (items.length >= 3) {
          sections.push({
            type: 'steps',
            heading: 'Key Takeaways',
            steps: items.map(t => ({ label: t[1] })),
          });
        }
      }
    }
    break;
  }

  const diagrams = await importDiagrams();
  const diagramData = diagrams.extractDiagramSteps(sections);

  if (!diagramData) {
    logger.info('⚠️  No suitable diagram data found in this resource.');
    logger.info('   Resources need sections with type "steps" or numbered lists.');
    return;
  }

  logger.info(`📊 Found diagram: "${diagramData.title}" (${diagramData.nodes.length} nodes)`);
  for (const node of diagramData.nodes) {
    logger.info(`   ${node.index + 1}. ${node.label}`);
  }

  const svgContent = diagrams.renderDiagramSvg(diagramData);

  // Convert SVG to WebP using sharp
  const sharp = (await import('sharp')).default;
  const outputBuffer = await sharp(Buffer.from(svgContent))
    .resize(1200, undefined)
    .webp({ quality: 90 })
    .toBuffer();

  const outputDir = `public/images/resources/${slug}`;
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = `${outputDir}/diagram.webp`;
  fs.writeFileSync(outputPath, outputBuffer);

  const meta = await sharp(outputBuffer).metadata();
  logger.info('');
  logger.info(`✅ Diagram generated!`);
  logger.info(`   📁 Output: ${outputPath}`);
  logger.info(`   📐 Size: ${meta.width}×${meta.height}`);
  logger.info(`   💾 File: ${(outputBuffer.length / 1024).toFixed(0)}KB`);
  logger.info('');
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  const envOverrides = loadEnv();

  await withSystemEnvOverrides(envOverrides, async () => {
    const keys = {
      unsplash: systemEnv.UNSPLASH_ACCESS_KEY,
      pexels: systemEnv.PEXELS_API_KEY,
      pixabay: systemEnv.PIXABAY_API_KEY,
    };

    const missingKeys = Object.entries(keys)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingKeys.length > 0) {
      logger.warn(`⚠️  Missing API keys: ${missingKeys.join(', ')}`);
      logger.warn('   Some providers will be skipped.');
      logger.warn('');
    }

    const args = parseArgs();

    if (args.queue) {
      switch (args.queue) {
        case 'status':
          await showQueueStatus();
          break;
        case 'start':
        case 'resume':
          await resumeQueue();
          break;
        default:
          logger.error(`Unknown queue command: ${args.queue}`);
      }
      return;
    }

    if (args.mode === 'test' || (!args.mode && !args.domain && args.slug)) {
      const domain = (args.domain ?? 'blog') as ContentDomain;
      const slug = args.slug ?? DEFAULT_TEST_SLUGS[domain];
      await runTestMode(slug, domain, args.regenerate ?? false, args.fresh ?? false);
      return;
    }

    if (args.diagram) {
      const slug = args.slug ?? DEFAULT_TEST_SLUGS.resources;
      await runDiagramTest(slug);
      return;
    }

    if (args.domain) {
      const validDomains: ContentDomain[] = ['blog', 'resources', 'industries', 'case-studies'];
      if (!validDomains.includes(args.domain as ContentDomain)) {
        logger.error(`Invalid domain: ${args.domain}`);
        logger.error(`Valid domains: ${validDomains.join(', ')}`);
        process.exit(1);
      }
      await runBulkMode(args.domain as ContentDomain);
      return;
    }

    if (args.slug) {
      await runSinglePost(args.slug);
      return;
    }

    logger.info('');
    logger.info('MindWP Image System');
    logger.info('═══════════════════');
    logger.info('');
    logger.info('Quick Test Commands (hardcoded default slugs):');
    logger.info(
      '  pnpm exec tsx scripts/image-system/image-generate.ts --mode test                          # blog default'
    );
    logger.info(
      '  pnpm exec tsx scripts/image-system/image-generate.ts --mode test --domain case-studies    # case-study default'
    );
    logger.info(
      '  pnpm exec tsx scripts/image-system/image-generate.ts --mode test --domain resources       # resource default'
    );
    logger.info(
      '  pnpm exec tsx scripts/image-system/image-generate.ts --diagram                            # resource diagram'
    );
    logger.info('');
    logger.info('Test with custom slug:');
    logger.info('  pnpm exec tsx scripts/image-system/image-generate.ts --mode test --slug <slug>');
    logger.info(
      '  pnpm exec tsx scripts/image-system/image-generate.ts --mode test --domain case-studies --slug <slug>'
    );
    logger.info('');
    logger.info('Regenerate / Fresh:');
    logger.info(
      '  pnpm exec tsx scripts/image-system/image-generate.ts --mode test --regenerate             # re-overlay same image'
    );
    logger.info(
      '  pnpm exec tsx scripts/image-system/image-generate.ts --mode test --fresh                  # find new image'
    );
    logger.info('');
    logger.info('Inspect generated images:');
    logger.info('  pnpm exec tsx scripts/image-system/image-inspect.ts');
    logger.info('');
    logger.info('Bulk mode:');
    logger.info('  pnpm exec tsx scripts/image-system/image-generate.ts --domain blog');
    logger.info('  pnpm exec tsx scripts/image-system/image-generate.ts --domain resources');
    logger.info('  pnpm exec tsx scripts/image-system/image-generate.ts --domain case-studies');
    logger.info('  pnpm exec tsx scripts/image-system/image-generate.ts --domain industries');
    logger.info('');
  });
}

main().catch(err => {
  logger.error(`Fatal error: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});

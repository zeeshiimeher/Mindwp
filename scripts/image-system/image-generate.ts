#!/usr/bin/env node
// ─── Image System CLI ───────────────────────────────────────────────
// Main entry point for image generation commands
// Keep the image system seperate ignore image system related files
// Usage:
//   npx tsx scripts/image-system/image-generate.ts --mode test --slug <post-slug>
//   npx tsx scripts/image-system/image-generate.ts --domain blog
//   npx tsx scripts/image-system/image-generate.ts --domain resources
//   npx tsx scripts/image-system/image-generate.ts --domain industries
//   npx tsx scripts/image-system/image-generate.ts --domain case-studies
//   npx tsx scripts/image-system/image-generate.ts --slug <post-slug>
//   npx tsx scripts/image-system/image-generate.ts --queue start
//   npx tsx scripts/image-system/image-generate.ts --queue status
//   npx tsx scripts/image-system/image-generate.ts --queue resume

import fs from 'fs';
import path from 'path';

import { systemEnv, withSystemEnvOverrides } from '../../config/systemEnv.mjs';

// ─── Helpers ────────────────────────────────────────────────────────

function loadEnv() {
  const envPath = path.resolve('.env.local');
  if (!fs.existsSync(envPath)) {
    console.error('❌ .env.local not found. Create it with API keys:');
    console.error('   UNSPLASH_ACCESS_KEY=...');
    console.error('   PEXELS_API_KEY=...');
    console.error('   PIXABAY_API_KEY=...');
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
  primaryKeyword: string;
  topics: string[];
  systems: string[];
  tags: string[];
  sectionHeadings: string[];
  slug: string;
};

async function loadBlogPost(slug: string): Promise<ContentMetadata | null> {
  try {
    const registryPath = path.resolve('src/domains/blog/registry.ts');
    if (!fs.existsSync(registryPath)) {
      console.error('Blog registry not found. Run: npm run generate:content-registries');
      return null;
    }

    // Load all blog content files and find the matching slug
    const contentDir = path.resolve('src/domains/blog/content');
    const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.tsx'));

    for (const file of files) {
      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      // Check if this file contains our slug
      if (!content.includes(`'${slug}'`) && !content.includes(`"${slug}"`)) continue;

      // Extract data using regex patterns from the TypeScript source
      // Find the export-level title: appears right after slug in the export block
      // Handles both `slug,\n  title:` (variable ref) and `slug: '...',\n  title:` (inline)
      const exportTitleMatch = content.match(/slug(?:,|:\s*['"][^'"]+['"]\s*,)\s*\n\s+title:\s*['"]([^'"]{5,80})['"]/);
      const headingsMatches = [...content.matchAll(/heading:\s*['"]([^'"]+)['"]/g)];
      const title = exportTitleMatch?.[1] ?? headingsMatches[0]?.[1] ?? slug;

      const keywordMatch = content.match(/primaryKeyword:\s*['"]([^'"]+)['"]/);
      const topicsMatch = content.match(/topics:\s*\[([\s\S]*?)\]/);
      const systemsMatch = content.match(/systems:\s*\[([\s\S]*?)\]/);
      const tagsMatch = content.match(/tags:\s*\[([\s\S]*?)\]/);

      return {
        title,
        primaryKeyword: keywordMatch?.[1] ?? '',
        topics: extractArrayValues(topicsMatch?.[1] ?? ''),
        systems: extractArrayValues(systemsMatch?.[1] ?? ''),
        tags: extractArrayValues(tagsMatch?.[1] ?? ''),
        sectionHeadings: headingsMatches.map((m) => m[1]),
        slug,
      };
    }

    console.error(`Blog post not found: ${slug}`);
    return null;
  } catch (err) {
    console.error('Failed to load blog post:', err);
    return null;
  }
}

function extractArrayValues(content: string): string[] {
  const matches = [...content.matchAll(/['"]([^'"]+)['"]/g)];
  return matches.map((m) => m[1]);
}

async function loadAllBlogSlugs(): Promise<string[]> {
  const contentDir = path.resolve('src/domains/blog/content');
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.tsx'));
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

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.tsx'));
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
    primaryKeyword: industry.seo.keywords[0] ?? industry.hero.title,
    topics: industry.topics ?? [],
    systems: industry.systems ?? [],
    tags: industry.industries ?? [],
    sectionHeadings: (industry.sections ?? [])
      .map((section: { title?: string }) => section.title)
      .filter((title: string | undefined): title is string => Boolean(title)),
    slug,
  };
}

async function loadContentMetadata(slug: string, domain: ContentDomain): Promise<ContentMetadata | null> {
  if (domain === 'industries') {
    return loadIndustryMetadata(slug);
  }

  // Features + services use /data/ directory with .ts files instead of /content/ with .tsx
  const isDataDomain = domain === 'features' || domain === 'services';
  const subDir = isDataDomain ? 'data' : 'content';
  const ext = isDataDomain ? '.ts' : '.tsx';
  const contentDir = path.resolve(`src/domains/${domain}/${subDir}`);
  if (!fs.existsSync(contentDir)) return null;

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(ext));

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    if (!content.includes(`'${slug}'`) && !content.includes(`"${slug}"`)) continue;

    // Find the export-level title: appears right after slug in the export block
    // Handles both `slug,\n  title:` (variable ref) and `slug: '...',\n  title:` (inline)
    const exportTitleMatch = content.match(/slug(?:,|:\s*['"][^'"]+['"]\s*,)\s*\n\s+title:\s*['"]([^'"]{5,80})['"]/);
    // Features/services: hero title is the display title
    const heroTitleMatch = content.match(/hero:\s*\{[\s\S]*?title:\s*['"]([^'"]{5,120})['"]/);
    const headingsMatches = [...content.matchAll(/heading:\s*['"]([^'"]+)['"]/g)];
    const title = exportTitleMatch?.[1] ?? heroTitleMatch?.[1] ?? headingsMatches[0]?.[1] ?? slug;

    const keywordMatch = content.match(/primaryKeyword:\s*['"]([^'"]+)['"]/);
    const topicsMatch = content.match(/topics:\s*\[([\s\S]*?)\]/);
    const systemsMatch = content.match(/systems:\s*\[([\s\S]*?)\]/);
    const tagsMatch = content.match(/tags:\s*\[([\s\S]*?)\]/);

    return {
      title,
      primaryKeyword: keywordMatch?.[1] ?? '',
      topics: extractArrayValues(topicsMatch?.[1] ?? ''),
      systems: extractArrayValues(systemsMatch?.[1] ?? ''),
      tags: extractArrayValues(tagsMatch?.[1] ?? ''),
      sectionHeadings: headingsMatches.map((m) => m[1]),
      slug,
    };
  }

  return null;
}

// ─── Default Test Slugs (hardcoded for quick testing) ───────────────

const DEFAULT_TEST_SLUGS: Record<ContentDomain, string> = {
  blog: 'lead-response-time-for-service-businesses',
  'case-studies': 'appointment-business-booking-automation',
  resources: 'authority-signals-for-local-search',
  industries: 'plumbing', // update when industry content is available
  features: 'crm',
  services: 'crm-infrastructure-implementation',
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

async function runTestMode(slug: string, domain: ContentDomain = 'blog', regenerate = false, fresh = false) {
  console.log('');
  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║           MindWP Image System — TEST MODE           ║');
  console.log('╚══════════════════════════════════════════════════════╝');
  console.log('');
  console.log(`🧪 Testing: ${domain}/${slug}`);
  if (regenerate) console.log('🔄 Regenerate mode: reprocessing same source image');
  if (fresh) console.log('🆕 Fresh mode: searching for a completely new image');
  console.log('');

  const metadata = domain === 'blog'
    ? await loadBlogPost(slug)
    : await loadContentMetadata(slug, domain);
  if (!metadata) {
    console.error(`❌ Could not load ${domain} post: ${slug}`);
    process.exit(1);
  }

  console.log(`📝 Title: ${metadata.title}`);
  console.log(`🔑 Primary Keyword: ${metadata.primaryKeyword}`);
  console.log(`🏷️  Topics: ${metadata.topics.join(', ') || '(none)'}`);
  console.log(`⚙️  Systems: ${metadata.systems.join(', ') || '(none)'}`);
  console.log(`🏷️  Tags: ${metadata.tags.join(', ') || '(none)'}`);
  console.log(`📋 Section Headings: ${metadata.sectionHeadings.join(', ') || '(none)'}`);
  console.log('');

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
      console.log(`🚫 Will skip previous image: ${existingEntry.provider}/${existingEntry.imageId}`);
    }
  }

  if (regenerate || fresh) {
    for (const variant of ['featured-clean', 'featured-overlay'] as const) {
      if (dedup.hasImage(slug, variant)) {
        dedup.removeImage(slug, variant);
        console.log(`🗑️  Cleared previous index entry: ${variant}`);
      }
    }
    // Clean up new flat naming
    const overlayPath = `public/images/${domain}/${slug}.webp`;
    const rawPath = `public/images/${domain}/${slug}-raw.webp`;
    for (const p of [overlayPath, rawPath]) {
      if (fs.existsSync(p)) {
        fs.unlinkSync(p);
        console.log(`🗑️  Deleted existing: ${p}`);
      }
    }
    // Also clean up legacy per-slug folder if present
    const legacyDir = `public/images/${domain}/${slug}`;
    if (fs.existsSync(legacyDir) && fs.statSync(legacyDir).isDirectory()) {
      fs.rmSync(legacyDir, { recursive: true });
      console.log(`🗑️  Deleted legacy folder: ${legacyDir}`);
    }
    if (dedup.hasImage(slug, 'featured' as any)) {
      dedup.removeImage(slug, 'featured' as any);
      console.log('🗑️  Cleared legacy index entry: featured');
    }
  }

  const queries = semantic.generateSemanticQueries(metadata, domain);
  console.log('🔍 Generated Search Queries:');
  for (const q of queries) {
    console.log(`   - "${q.query}" (score: ${q.score}, source: ${q.source})`);
  }
  console.log('');

  // Process the image
  console.log('🚀 Starting image pipeline...');
  console.log('');

  const result = await pipeline.processImage(metadata, domain, 'featured-clean', blockedImageId);

  if (result) {
    console.log('');
    console.log('✅ Image generated successfully!');
    console.log(`   📁 Clean:   public/images/${domain}/${slug}-raw.webp`);
    console.log(`   📁 Overlay: public/images/${domain}/${slug}.webp`);
    console.log(`   🏢 Provider: ${result.provider}`);
    console.log(`   🆔 Image ID: ${result.imageId}`);
    console.log(`   📊 Score: ${result.relevanceScore}`);
    console.log(`   🔗 Hash: ${result.hash}`);
  } else {
    console.log('');
    console.log('⚠️  No suitable image found. Try running again or check API keys.');
  }

  console.log('');
  console.log('────────────────────────────────────────────────────────');
  console.log('Test complete. Review the output image before enabling bulk mode.');
  console.log('');
}

async function runBulkMode(domain: ContentDomain) {
  console.log('');
  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║           MindWP Image System — BULK MODE           ║');
  console.log('╚══════════════════════════════════════════════════════╝');
  console.log('');
  console.log(`📦 Domain: ${domain}`);
  console.log('');

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
        const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(ext));
        for (const file of files) {
          const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
          const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
          if (slugMatch) slugs.push(slugMatch[1]);
        }
      }
    }
  }

  console.log(`📄 Found ${slugs.length} posts in ${domain}`);

  const dedup = await importDedup();
  const pipeline = await importPipeline();
  const queue = await importQueue();

  // Filter out posts that already have images
  const needed = slugs.filter((s) => !dedup.hasImage(s, 'featured-clean'));
  console.log(`🔍 ${needed.length} posts need featured images`);
  console.log('');

  let processed = 0;
  let succeeded = 0;
  let failed = 0;

  for (const slug of needed) {
    processed++;
    console.log(`[${processed}/${needed.length}] Processing: ${slug}`);

    const metadata = await loadContentMetadata(slug, domain);
    if (!metadata) {
      console.log(`   ⚠️  Could not load metadata, skipping`);
      failed++;
      continue;
    }

    try {
      const result = await pipeline.processImage(metadata, domain, 'featured-clean');
      if (result) {
        console.log(`   ✅ ${result.provider}/${result.imageId} (score: ${result.relevanceScore})`);
        succeeded++;
      } else {
        console.log(`   ⚠️  No suitable image found`);
        failed++;
      }
    } catch (err) {
      console.error(`   ❌ Error:`, err);
      failed++;
    }
  }

  console.log('');
  console.log('═══════════════════════════════════════════');
  console.log(`✅ Succeeded: ${succeeded}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📊 Total: ${processed}/${needed.length}`);
  console.log('═══════════════════════════════════════════');
}

async function runSinglePost(slug: string) {
  console.log(`\n🔄 Generating image for: ${slug}\n`);

  // Try blog first, then other domains
  const domains: ContentDomain[] = ['blog', 'resources', 'case-studies', 'industries', 'features', 'services'];
  const pipeline = await importPipeline();

  for (const domain of domains) {
    const metadata = await loadContentMetadata(slug, domain);
    if (!metadata) continue;

    console.log(`Found in domain: ${domain}`);
    const result = await pipeline.processImage(metadata, domain, 'featured-clean');

    if (result) {
      console.log(`\n✅ Output: ${result.outputPath} (${result.provider}, score: ${result.relevanceScore})`);
    } else {
      console.log('\n⚠️  No suitable image found');
    }
    return;
  }

  console.error(`❌ Post not found in any domain: ${slug}`);
}

async function showQueueStatus() {
  const queue = await importQueue();
  const status = queue.getQueueStatus();

  console.log('\n📊 Queue Status:');
  console.log(`   Total: ${status.total}`);
  console.log(`   Pending: ${status.pending}`);
  console.log(`   Processing: ${status.processing}`);
  console.log(`   Completed: ${status.completed}`);
  console.log(`   Failed: ${status.failed}`);
  console.log(`   Skipped: ${status.skipped}`);
}

async function resumeQueue() {
  const queue = await importQueue();
  const pipeline = await importPipeline();

  const reset = queue.resetFailedJobs();
  if (reset > 0) console.log(`♻️  Reset ${reset} failed jobs`);

  let job = queue.getNextPendingJob();
  let count = 0;

  while (job) {
    count++;
    console.log(`\n[Queue] Processing: ${job.domain}/${job.slug} (${job.imageType})`);

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
        console.log(`   ✅ Done (score: ${result.relevanceScore})`);
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

  console.log(`\n✅ Queue processing complete. Processed ${count} jobs.`);
  await showQueueStatus();
}

async function runDiagramTest(slug: string) {
  console.log('');
  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║      MindWP Image System — DIAGRAM TEST MODE       ║');
  console.log('╚══════════════════════════════════════════════════════╝');
  console.log('');
  console.log(`📊 Generating diagram for resource: ${slug}`);
  console.log('');

  const metadata = await loadContentMetadata(slug, 'resources');
  if (!metadata) {
    console.error(`❌ Could not load resource: ${slug}`);
    process.exit(1);
  }

  console.log(`📝 Title: ${metadata.title}`);
  console.log(`📋 Headings: ${metadata.sectionHeadings.join(', ')}`);
  console.log('');

  // Load the resource file sections for diagram extraction
  const contentDir = path.resolve('src/domains/resources/content');
  const files = fs.readdirSync(contentDir).filter((f: string) => f.endsWith('.tsx'));
  let sections: Array<{ type: string; heading?: string; content?: string | string[]; steps?: Array<{ label: string }> }> = [];

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    if (!content.includes(`'${slug}'`) && !content.includes(`"${slug}"`)) continue;

    // Extract section types and headings
    const sectionMatches = [...content.matchAll(/\{\s*type:\s*['"](\w+)['"][\s\S]*?heading:\s*['"]([^'"]+)['"]/g)];
    for (const m of sectionMatches) {
      sections.push({ type: m[1], heading: m[2] });
    }

    // Priority 1: Solution-cards / pillar cards — best for diagrams (structured pillars)
    const solutionCardsMatch = content.match(/type:\s*['"]solution-cards['"][\s\S]*?heading:\s*['"]([^'"]+)['"]/);
    if (solutionCardsMatch) {
      const arrayMatches = [...content.matchAll(/const\s+\w+\s*(?::\s*[^=]+)?\s*=\s*\[([\s\S]*?)\];/g)];
      for (const am of arrayMatches) {
        const block = am[1];
        if (block.includes('description:')) {
          const cardTitles = [...block.matchAll(/title:\s*['"]([^'"]+)['"]/g)];
          if (cardTitles.length >= 3) {
            sections.push({
              type: 'steps',
              heading: solutionCardsMatch[1],
              steps: cardTitles.map((t) => ({ label: t[1] })),
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
            steps: labels.map((l) => ({ label: l[1] })),
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
            steps: items.map((t) => ({ label: t[1] })),
          });
        }
      }
    }
    break;
  }

  const diagrams = await importDiagrams();
  const diagramData = diagrams.extractDiagramSteps(sections);

  if (!diagramData) {
    console.log('⚠️  No suitable diagram data found in this resource.');
    console.log('   Resources need sections with type "steps" or numbered lists.');
    return;
  }

  console.log(`📊 Found diagram: "${diagramData.title}" (${diagramData.nodes.length} nodes)`);
  for (const node of diagramData.nodes) {
    console.log(`   ${node.index + 1}. ${node.label}`);
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
  console.log('');
  console.log(`✅ Diagram generated!`);
  console.log(`   📁 Output: ${outputPath}`);
  console.log(`   📐 Size: ${meta.width}×${meta.height}`);
  console.log(`   💾 File: ${(outputBuffer.length / 1024).toFixed(0)}KB`);
  console.log('');
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
      console.warn(`⚠️  Missing API keys: ${missingKeys.join(', ')}`);
      console.warn('   Some providers will be skipped.');
      console.warn('');
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
          console.error(`Unknown queue command: ${args.queue}`);
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
        console.error(`Invalid domain: ${args.domain}`);
        console.error(`Valid domains: ${validDomains.join(', ')}`);
        process.exit(1);
      }
      await runBulkMode(args.domain as ContentDomain);
      return;
    }

    if (args.slug) {
      await runSinglePost(args.slug);
      return;
    }

    console.log('');
    console.log('MindWP Image System');
    console.log('═══════════════════');
    console.log('');
    console.log('Quick Test Commands (hardcoded default slugs):');
    console.log('  npx tsx scripts/image-system/image-generate.ts --mode test                          # blog default');
    console.log('  npx tsx scripts/image-system/image-generate.ts --mode test --domain case-studies    # case-study default');
    console.log('  npx tsx scripts/image-system/image-generate.ts --mode test --domain resources       # resource default');
    console.log('  npx tsx scripts/image-system/image-generate.ts --diagram                            # resource diagram');
    console.log('');
    console.log('Test with custom slug:');
    console.log('  npx tsx scripts/image-system/image-generate.ts --mode test --slug <slug>');
    console.log('  npx tsx scripts/image-system/image-generate.ts --mode test --domain case-studies --slug <slug>');
    console.log('');
    console.log('Regenerate / Fresh:');
    console.log('  npx tsx scripts/image-system/image-generate.ts --mode test --regenerate             # re-overlay same image');
    console.log('  npx tsx scripts/image-system/image-generate.ts --mode test --fresh                  # find new image');
    console.log('');
    console.log('Inspect generated images:');
    console.log('  npx tsx scripts/image-system/image-inspect.ts');
    console.log('');
    console.log('Bulk mode:');
    console.log('  npx tsx scripts/image-system/image-generate.ts --domain blog');
    console.log('  npx tsx scripts/image-system/image-generate.ts --domain resources');
    console.log('  npx tsx scripts/image-system/image-generate.ts --domain case-studies');
    console.log('  npx tsx scripts/image-system/image-generate.ts --domain industries');
    console.log('');
  });
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});

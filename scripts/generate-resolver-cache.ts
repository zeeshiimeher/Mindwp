// Resolver Cache Generation Script
// Usage: npx tsx scripts/generate-resolver-cache.ts
// Precomputes ALL resolver outputs + authority scores to JSON for build-time use.

import fs from 'node:fs';
import path from 'node:path';

import { ensureGraphInitialized, getResolver } from '../src/domains/init/ensureGraphInitialized';
import { computeAuthorityScores, sortByAuthority } from '../src/lib/authority/authorityScore';
import type { AuthorityItem } from '../src/lib/authority/resolver';
import { getContentGraph } from '../src/lib/content-graph/registry';
import type { ContentNodeType } from '../src/lib/content-graph/types';

const root = process.cwd();
const OUTPUT_DIR = path.join(root, 'src', 'lib', 'generated');

interface CachedSlots {
  [slotName: string]: AuthorityItem[];
}

interface ResolverCacheEntry {
  slug: string;
  type: ContentNodeType;
  slots: CachedSlots;
}

interface ResolverCacheData {
  generatedAt: string;
  nodeCount: number;
  entries: Record<string, ResolverCacheEntry>;
}

interface AuthorityScoresData {
  generatedAt: string;
  scores: Record<string, number>;
}

async function main() {
  await ensureGraphInitialized();

  const resolver = getResolver();
  const {
    getAllRouteSlugs,
    getServiceSlots,
    getFeatureSlots,
    getIndustrySlots,
    getBlogSlots,
    getResourceSlots,
    getCaseStudySlots,
  } = resolver;

  const slugs = getAllRouteSlugs();
  const entries: Record<string, ResolverCacheEntry> = {};

  for (const slug of slugs.services.sort()) {
    const raw = getServiceSlots(slug);
    entries[`service:${slug}`] = {
      slug,
      type: 'service',
      slots: { services: sortByAuthority(raw.services) },
    };
  }

  for (const slug of slugs.features.sort()) {
    const raw = getFeatureSlots(slug);
    entries[`feature:${slug}`] = {
      slug,
      type: 'feature',
      slots: { services: sortByAuthority(raw.services) },
    };
  }

  for (const slug of slugs.industries.sort()) {
    const raw = getIndustrySlots(slug);
    entries[`industry:${slug}`] = {
      slug,
      type: 'industry-detail',
      slots: {
        services: sortByAuthority(raw.services),
        caseStudies: sortByAuthority(raw.caseStudies),
        resources: sortByAuthority(raw.resources),
      },
    };
  }

  for (const slug of slugs.blogPosts.sort()) {
    const raw = getBlogSlots(slug);
    entries[`blog:${slug}`] = {
      slug,
      type: 'blog',
      slots: {
        resources: sortByAuthority(raw.resources),
        industries: sortByAuthority(raw.industries),
      },
    };
  }

  for (const slug of slugs.resources.sort()) {
    const raw = getResourceSlots(slug);
    entries[`resource:${slug}`] = {
      slug,
      type: 'resource',
      slots: {
        services: sortByAuthority(raw.services),
        industries: sortByAuthority(raw.industries),
      },
    };
  }

  for (const slug of slugs.caseStudies.sort()) {
    const raw = getCaseStudySlots(slug);
    entries[`case-study:${slug}`] = {
      slug,
      type: 'case-study',
      slots: {
        industries: sortByAuthority(raw.industries),
        resources: sortByAuthority(raw.resources),
      },
    };
  }

  // --- Write resolver cache ---

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const nodeCount = Object.keys(getContentGraph()).length;

  const cacheData: ResolverCacheData = {
    generatedAt: new Date().toISOString(),
    nodeCount,
    entries,
  };

  const cachePath = path.join(OUTPUT_DIR, 'resolverCache.json');
  fs.writeFileSync(cachePath, JSON.stringify(cacheData, null, 2), 'utf-8');

  // --- Write authority scores ---

  const scores = computeAuthorityScores();

  const scoresData: AuthorityScoresData = {
    generatedAt: new Date().toISOString(),
    scores,
  };

  const scoresPath = path.join(OUTPUT_DIR, 'authorityScores.json');
  fs.writeFileSync(scoresPath, JSON.stringify(scoresData, null, 2), 'utf-8');

  // --- Summary ---
  const entryCount = Object.keys(entries).length;
  const scoreCount = Object.keys(scores).length;

  // eslint-disable-next-line no-console
  console.log(`[resolver-cache] Generated ${entryCount} entries → ${cachePath}`);
  // eslint-disable-next-line no-console
  console.log(`[authority-scores] Generated ${scoreCount} scores → ${scoresPath}`);
}

await main();

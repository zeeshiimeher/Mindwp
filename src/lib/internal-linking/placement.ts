import type { ContentBlocks } from './blockParser';
import type { InternalLink } from './types';

/**
 * LINK PLACEMENT ENGINE
 *
 * Purpose:
 * Maps links to content zones (intro / body / conclusion)
 * to control distribution and prevent clustering.
 *
 * Zone rules:
 * - Intro: max 1 link, authority only
 * - Body: max 2 links, cluster content
 * - Conclusion: max 1 link, service (conversion)
 *
 * Diversity rule:
 * - Max 1 link per targetType per zone
 */

export interface PlacedLinks {
  intro: InternalLink[];
  body: InternalLink[];
  conclusion: InternalLink[];
}

// --- Diversity filter: max 1 link per targetType in a zone ---

function enforceDiversity(links: InternalLink[]): InternalLink[] {
  const seen = new Set<string>();
  const result: InternalLink[] = [];
  for (const link of links) {
    if (seen.has(link.targetType)) continue;
    seen.add(link.targetType);
    result.push(link);
  }
  return result;
}

export function placeLinks(blocks: ContentBlocks, links: InternalLink[]): PlacedLinks {
  const placed: PlacedLinks = {
    intro: [],
    body: [],
    conclusion: [],
  };

  // --- Intro zone: authority link only ---
  const introLink = links.find(l => l.reason === 'authority');
  if (introLink && blocks.intro.length > 0) {
    placed.intro.push(introLink);
  }

  // --- Body zone: cluster links (diverse types) ---
  if (blocks.body.length > 0) {
    const clusterLinks = links.filter(l => l.reason === 'cluster');
    placed.body = enforceDiversity(clusterLinks).slice(0, 2);
  }

  // --- Conclusion zone: service link (conversion) ---
  const serviceLinks = links.filter(l => l.targetType === 'service' && !placed.intro.includes(l));
  const bestService = serviceLinks[0];
  if (bestService && blocks.conclusion.length > 0) {
    placed.conclusion.push(bestService);
  }

  // Enforce hard limits per zone
  placed.intro = placed.intro.slice(0, 1);
  placed.body = placed.body.slice(0, 2);
  placed.conclusion = placed.conclusion.slice(0, 1);

  return placed;
}

// ─── Content-Aware Placement Engine ─────────────────────────────────
// Determines optimal image placement within blog and resource content

import { PLACEMENT_CONFIG } from '../config';
import type { ContentDomain, PlacementAnchor } from '../types';

interface SectionInfo {
  type: string;
  heading?: string;
  wordCount: number;
  index: number;
}

/** Count words in a section's content */
function countSectionWords(section: {
  content?: string | string[];
  list?: string[];
  items?: Array<{ description?: string } | string>;
  steps?: Array<{ description?: string }>;
}): number {
  let text = '';

  if (typeof section.content === 'string') text += section.content;
  else if (Array.isArray(section.content)) text += section.content.join(' ');

  if (section.list) text += ' ' + section.list.join(' ');

  if (section.items) {
    for (const item of section.items) {
      if (typeof item === 'string') text += ' ' + item;
      else if (typeof item === 'object' && 'description' in item && item.description) {
        text += ' ' + item.description;
      }
    }
  }

  if (section.steps) {
    for (const step of section.steps) {
      if (step.description) text += ' ' + step.description;
    }
  }

  return text.split(/\s+/).filter(Boolean).length;
}

/** Check if a section heading contains trigger keywords */
function hasTriggerKeyword(heading: string): boolean {
  const lower = heading.toLowerCase();
  return PLACEMENT_CONFIG.triggerKeywords.some(kw => lower.includes(kw));
}

/** Determine image type based on section context */
function determineImageType(heading: string): 'contextual' | 'diagram' | 'chart' {
  const lower = heading.toLowerCase();
  if (['workflow', 'pipeline', 'process', 'architecture', 'system'].some(k => lower.includes(k))) {
    return 'diagram';
  }
  if (['metric', 'performance', 'comparison', 'rate', 'conversion'].some(k => lower.includes(k))) {
    return 'chart';
  }
  return 'contextual';
}

/** Find optimal placement anchors for blog content images */
export function findBlogPlacements(
  sections: Array<{
    type: string;
    heading?: string;
    content?: string | string[];
    list?: string[];
    items?: unknown[];
    steps?: unknown[];
  }>
): PlacementAnchor[] {
  const sectionInfos: SectionInfo[] = sections.map((s, i) => ({
    type: s.type,
    heading: 'heading' in s ? (s.heading as string) : undefined,
    wordCount: countSectionWords(s as Parameters<typeof countSectionWords>[0]),
    index: i,
  }));

  // Skip if already has an image section
  if (sections.some(s => s.type === 'image')) return [];

  // Strategy 1: After section 2 (index 2)
  if (sectionInfos.length > 2) {
    const s = sectionInfos[2];
    return [
      {
        afterSectionIndex: 2,
        reason: `After section 2: "${s.heading ?? s.type}"`,
        imageType: s.heading ? determineImageType(s.heading) : 'contextual',
      },
    ];
  }

  // Strategy 2: After first long section (>350 words)
  for (const info of sectionInfos) {
    if (info.wordCount > PLACEMENT_CONFIG.blogMinWordsForContent && info.type === 'content') {
      return [
        {
          afterSectionIndex: info.index,
          reason: `After long section (${info.wordCount} words): "${info.heading}"`,
          imageType: info.heading ? determineImageType(info.heading) : 'contextual',
        },
      ];
    }
  }

  return [];
}

/** Find optimal placement anchors for resource content images */
export function findResourcePlacements(
  sections: Array<{ type: string; heading?: string; content?: string | string[] }>
): PlacementAnchor[] {
  const placements: PlacementAnchor[] = [];

  for (let i = 0; i < sections.length && placements.length < 2; i++) {
    const heading = sections[i].heading;
    if (!heading) continue;

    if (hasTriggerKeyword(heading)) {
      placements.push({
        afterSectionIndex: i,
        reason: `After trigger section: "${heading}"`,
        imageType: determineImageType(heading),
      });
    }
  }

  return placements;
}

/** Get placement anchors for any domain */
export function getPlacementAnchors(
  domain: ContentDomain,
  sections: Array<{ type: string; heading?: string; content?: string | string[] }>
): PlacementAnchor[] {
  switch (domain) {
    case 'blog':
      return findBlogPlacements(sections);
    case 'resources':
      return findResourcePlacements(sections);
    case 'industries':
      return []; // No content images
    case 'case-studies':
      return findBlogPlacements(sections); // Same logic as blog, max 1
    default:
      return [];
  }
}

/**
 * Link Suggestion Engine (Graph-Based)
 *
 * Suggests links for pages with weak related content.
 * Uses SmartRelatedSection slot expectations to identify gaps.
 */

import { getContentGraph } from '@/lib/content-graph/registry';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { RELATED_SECTION_LABELS } from '@/config/ui-intelligence';
import { getRelatedContent } from '@/lib/graph/query';

export interface LinkSuggestion {
  targetSlug: string;
  targetPath: string;
  reason: string;
  score: number;
  expectedImprovement: number;
  autoFixCandidate: boolean;
}

export interface PageSuggestions {
  sourceSlug: string;
  suggestedLinks: LinkSuggestion[];
}

const SLOT_TO_RELATED_KEY: Record<string, keyof ReturnType<typeof getRelatedContent>> = {
  services: 'services',
  resources: 'resources',
  blog: 'blog',
  caseStudies: 'caseStudies',
  industries: 'industries',
};

export function suggestLinksForPage(
  slug: string,
  type: ContentNodeType,
): PageSuggestions {
  const related = getRelatedContent(slug, type);
  const labels = RELATED_SECTION_LABELS[type] ?? {};
  const suggestions: LinkSuggestion[] = [];

  for (const [slotKey, label] of Object.entries(labels)) {
    const relatedKey = SLOT_TO_RELATED_KEY[slotKey];
    if (!relatedKey) continue;

    const items = related[relatedKey];
    if (items.length === 0) {
      suggestions.push({
        targetSlug: '',
        targetPath: '',
        reason: `Empty slot: ${label.title} — add matching content with shared metadata`,
        score: 0,
        expectedImprovement: 15,
        autoFixCandidate: false,
      });
    }
  }

  return { sourceSlug: slug, suggestedLinks: suggestions };
}

export function suggestLinksForWeakPages(): PageSuggestions[] {
  const graph = getContentGraph();
  const results: PageSuggestions[] = [];

  for (const node of Object.values(graph)) {
    const page = suggestLinksForPage(node.slug, node.type);
    if (page.suggestedLinks.length > 0) {
      results.push(page);
    }
  }

  return results;
}

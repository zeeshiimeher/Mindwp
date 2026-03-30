import type { AuthorityMapItem, ContentNodeType } from '@/lib/graph/query';
import { getRelatedContent } from '@/lib/graph/query';

/**
 * LINK CANDIDATE RULES
 *
 * Purpose:
 * Selects link candidates from the content graph for a given page.
 * All candidates come from the Query API — no manual selection.
 *
 * Candidate categories:
 * - Authority: related services (drives conversion flow)
 * - Cluster: related blog + resource content (topic reinforcement)
 * - Journey: ordered funnel path (resource → service → case study)
 */

export interface LinkCandidates {
  authority: AuthorityMapItem[];
  cluster: AuthorityMapItem[];
  journey: AuthorityMapItem[];
}

export function getLinkCandidates(slug: string, type: ContentNodeType): LinkCandidates {
  const related = getRelatedContent(slug, type);

  return {
    authority: related.services,
    cluster: [...related.blog, ...related.resources],
    journey: [related.resources[0], related.services[0], related.caseStudies[0]].filter(
      (item): item is AuthorityMapItem => Boolean(item)
    ),
  };
}

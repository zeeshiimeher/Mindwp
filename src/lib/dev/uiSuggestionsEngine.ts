/**
 * UI Suggestions Engine
 *
 * Generates human-readable, actionable UI suggestions for a page
 * based on its conversion signals, score, and link health.
 * 5 core rules + context-aware page-type suggestions.
 * Uses contextScoringConfig for per-type weight awareness.
 */

import type { ContentNodeType } from '@/lib/content-graph/types';
import { getContextWeights, PRIORITY_WEIGHT } from '@/lib/dev/contextScoringConfig';
import type { ConversionScore } from '@/lib/dev/conversionAnalyzer';
import type { ConversionSignals } from '@/lib/dev/conversionSignals';
import type { LinkHealthResult } from '@/lib/dev/linkHealthAnalyzer';

export type SuggestionSeverity = 'critical' | 'warning' | 'info';

export interface UISuggestion {
  id: string;
  rule: string;
  severity: SuggestionSeverity;
  title: string;
  description: string;
  action: string;
}

// ─── High-value content types that especially need proof elements ────────────

const PROOF_TYPES: Set<ContentNodeType> = new Set([
  'service',
  'feature',
  'industry-category',
  'industry-detail',
]);

// ─── Rules ───────────────────────────────────────────────────────────────────

const CTA_ACTION_BY_TYPE: Partial<Record<ContentNodeType, string>> = {
  blog: 'Add a soft CTA at the end of the article (e.g., "Want help with this? Talk to our team").',
  service:
    'Add a primary CTA in the hero section AND at the end (e.g., "Get a Free Consultation").',
  feature:
    'Add a primary CTA in the hero section AND at the end (e.g., "Get a Free Consultation").',
  'case-study':
    'Add a CTA linking to the related service page (e.g., "Get Similar Results for Your Business").',
  resource: 'Add a related content CTA (e.g., "Ready to implement? See our services").',
};

function ruleMissingCTA(
  signals: ConversionSignals,
  score: ConversionScore,
  _health: LinkHealthResult
): UISuggestion | null {
  if (signals.hasCTA) return null;
  const weights = getContextWeights(score.type);
  return {
    id: 'missing-cta',
    rule: 'missing-cta',
    severity: weights.CTA >= 30 ? 'critical' : 'critical',
    title: 'No CTA detected',
    description:
      'This page has no call-to-action. Visitors have no clear next step toward conversion.',
    action:
      CTA_ACTION_BY_TYPE[score.type] ??
      'Add a primary CTA section (e.g., "Get a Free Consultation", "See How It Works") above the fold or after the main content.',
  };
}

const SERVICE_LINK_ACTION_BY_TYPE: Partial<Record<ContentNodeType, string>> = {
  blog: 'Weave contextual links to 1-2 relevant service pages within the article body.',
  'case-study':
    'Link to the service page this case study demonstrates (e.g., "See the service behind these results").',
  resource:
    'Add a "Related Services" section with links to services that complement this resource.',
};

function ruleNoServiceLink(
  signals: ConversionSignals,
  score: ConversionScore,
  _health: LinkHealthResult
): UISuggestion | null {
  if (signals.hasServiceLink) return null;
  return {
    id: 'no-service-link',
    rule: 'no-service-link',
    severity: 'critical',
    title: 'No service link',
    description:
      'This page does not link to any service page. Visitors cannot discover what you offer.',
    action:
      SERVICE_LINK_ACTION_BY_TYPE[score.type] ??
      'Add contextual links to 1-2 relevant service pages in the body or a "Related Services" section.',
  };
}

const RELATED_ACTION_BY_TYPE: Partial<Record<ContentNodeType, string>> = {
  blog: 'Add a "What to Read Next" section linking to related blog posts or a relevant service page.',
  resource: 'Add a related content linking to the service or feature this resource supports.',
  service: 'Add links to case studies or feature pages that show results or deeper capabilities.',
  'case-study':
    'Add a next-step linking to a related service or another case study in the same industry.',
};

function ruleNoRelatedContent(
  signals: ConversionSignals,
  score: ConversionScore,
  _health: LinkHealthResult
): UISuggestion | null {
  if (signals.hasRelatedContent) return null;
  return {
    id: 'no-related-content',
    rule: 'no-related-content',
    severity: 'warning',
    title: 'No related content',
    description:
      'This page does not link to a logical next step in the content graph (e.g., blog → service, service → case study).',
    action:
      RELATED_ACTION_BY_TYPE[score.type] ??
      'Add a "What to Do Next" or "Learn More" section linking to the next stage content type.',
  };
}

function ruleWeakConversion(
  _signals: ConversionSignals,
  score: ConversionScore,
  _health: LinkHealthResult
): UISuggestion | null {
  if (score.totalScore >= 50) return null;
  return {
    id: 'weak-conversion',
    rule: 'weak-conversion',
    severity: 'warning',
    title: `Weak conversion score (${score.totalScore})`,
    description:
      'This page has a low overall conversion score. Multiple conversion elements are missing or insufficient.',
    action:
      'Review the score breakdown above and address the lowest-scoring components: CTA, service links, related content links, or authority connections.',
  };
}

function ruleNoProof(
  _signals: ConversionSignals,
  score: ConversionScore,
  health: LinkHealthResult
): UISuggestion | null {
  if (!PROOF_TYPES.has(score.type)) return null;
  // Check if any link points to a case-study
  const hasCaseStudyLink = health.links?.some(l => l.targetSlug?.includes('case-stud')) ?? false;
  if (hasCaseStudyLink) return null;
  return {
    id: 'no-proof',
    rule: 'no-proof',
    severity: 'info',
    title: 'No proof element linked',
    description:
      'This high-value page does not link to a case study or proof element. Social proof increases conversion.',
    action:
      'Add a "See Results" or "Case Study" link to a relevant case study that demonstrates outcomes.',
  };
}

// ─── Engine ──────────────────────────────────────────────────────────────────

const RULES = [
  ruleMissingCTA,
  ruleNoServiceLink,
  ruleNoRelatedContent,
  ruleWeakConversion,
  ruleNoProof,
];

export function generateUISuggestions(
  signals: ConversionSignals,
  score: ConversionScore,
  health: LinkHealthResult
): UISuggestion[] {
  const suggestions: UISuggestion[] = [];
  for (const rule of RULES) {
    const result = rule(signals, score, health);
    if (result) suggestions.push(result);
  }
  // Sort: by priority weight (critical > warning > info), then by context weight
  suggestions.sort((a, b) => {
    const pa = PRIORITY_WEIGHT[a.severity] ?? 0;
    const pb = PRIORITY_WEIGHT[b.severity] ?? 0;
    return pb - pa;
  });
  return suggestions;
}

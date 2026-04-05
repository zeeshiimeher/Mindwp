/**
 * Content Rewrite Engine
 *
 * Generates structured rewrite suggestions for a page based on its
 * conversion analysis. Does NOT rewrite content automatically.
 * Provides 2-3 sample text snippets showing what could be added.
 * Uses existing analyzers — no AI.
 */

import type { ContentNodeType } from '@/lib/content-graph/types';
import { getContextWeights } from '@/lib/dev/contextScoringConfig';
import { inspectPage, type PageInspection } from '@/lib/dev/conversionPageInspector';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface RewriteSuggestion {
  slug: string;
  type: ContentNodeType;
  currentScore: number;
  issues: RewriteIssue[];
  structureSuggestions: StructureSuggestion[];
  sampleRewrites: SampleRewrite[];
}

export interface RewriteIssue {
  element: string;
  status: 'missing' | 'weak';
  impact: 'high' | 'medium' | 'low';
  explanation: string;
}

export interface StructureSuggestion {
  placement: string;
  element: string;
  reason: string;
}

export interface SampleRewrite {
  label: string;
  context: string;
  sample: string;
}

// ─── CTA samples by page type ───────────────────────────────────────────────

const CTA_SAMPLES: Record<string, SampleRewrite> = {
  blog: {
    label: 'Soft CTA (end of article)',
    context: 'Add after the conclusion paragraph',
    sample:
      'Ready to put this into practice? Our team can help you implement this approach. [Talk to us →](/contact)',
  },
  service: {
    label: 'Primary CTA (hero section)',
    context: 'Add in the hero or top section',
    sample:
      'Get a free consultation to see how this service can transform your workflow. [Get Started →](/contact)',
  },
  feature: {
    label: 'Primary CTA (hero section)',
    context: 'Add in the hero or top section',
    sample: 'See this feature in action. [Request a Demo →](/contact)',
  },
  'case-study': {
    label: 'Results CTA',
    context: 'Add after the results section',
    sample: 'Want similar results for your business? [See how we can help →](/services)',
  },
  resource: {
    label: 'Next-step CTA',
    context: 'Add after the main content',
    sample:
      'Ready to implement? Our services can take you from knowledge to results. [Explore Services →](/services)',
  },
};

const SERVICE_LINK_SAMPLES: Record<string, SampleRewrite> = {
  blog: {
    label: 'Contextual service link',
    context: 'Weave into a relevant paragraph in the article body',
    sample:
      'This is exactly the kind of challenge our [WordPress development service](/services/wordpress-development) is designed to solve.',
  },
  'case-study': {
    label: 'Service reference',
    context: 'Add in the approach or methodology section',
    sample:
      'We used our [custom WordPress solutions](/services/wordpress-development) to deliver these results.',
  },
  resource: {
    label: 'Related service section',
    context: 'Add a "Related Services" section at the end',
    sample:
      '## Related Services\nNeed help implementing these concepts? [See our WordPress development services →](/services/wordpress-development)',
  },
};

const RELATED_CONTENT_SAMPLES: Record<string, SampleRewrite> = {
  blog: {
    label: 'Next reading suggestion',
    context: 'Add a "What to Read Next" section at the end',
    sample:
      '## What to Read Next\nDive deeper into this topic with our [detailed guide →](/resources) or see [how we solved this for a client →](/case-studies).',
  },
  service: {
    label: 'Proof link',
    context: 'Add after the benefits section',
    sample:
      'See the results our clients have achieved. [Read our latest case study →](/case-studies)',
  },
  resource: {
    label: 'Implementation path',
    context: 'Add at the end of the resource',
    sample:
      '## Ready to Implement?\nTake the next step: [explore our features →](/features) or [talk to our team →](/contact).',
  },
};

// ─── Engine ──────────────────────────────────────────────────────────────────

function buildIssues(inspection: PageInspection): RewriteIssue[] {
  const issues: RewriteIssue[] = [];
  const weights = getContextWeights(inspection.node.type);

  if (!inspection.signals.hasCTA) {
    issues.push({
      element: 'CTA',
      status: 'missing',
      impact: weights.CTA >= 30 ? 'high' : 'medium',
      explanation: `No call-to-action found. CTA weight for ${inspection.node.type} pages is ${weights.CTA}.`,
    });
  }

  if (!inspection.signals.hasServiceLink) {
    issues.push({
      element: 'Service Link',
      status: 'missing',
      impact: weights.SERVICE_LINK >= 25 ? 'high' : 'medium',
      explanation: `No service page link found. Service link weight for ${inspection.node.type} pages is ${weights.SERVICE_LINK}.`,
    });
  }

  if (!inspection.signals.hasRelatedContent) {
    issues.push({
      element: 'Related Content',
      status: 'missing',
      impact: weights.RELATED >= 25 ? 'high' : 'medium',
      explanation: `No related content link found. Related content weight for ${inspection.node.type} pages is ${weights.RELATED}.`,
    });
  }

  if (inspection.conversionScore.totalScore < 50 && issues.length === 0) {
    issues.push({
      element: 'Overall Conversion',
      status: 'weak',
      impact: 'medium',
      explanation: `Conversion score is ${inspection.conversionScore.totalScore}/100. Multiple elements may need strengthening.`,
    });
  }

  return issues;
}

function buildStructureSuggestions(inspection: PageInspection): StructureSuggestion[] {
  const suggestions: StructureSuggestion[] = [];
  const type = inspection.node.type;

  if (!inspection.signals.hasCTA) {
    const placement =
      type === 'service' || type === 'feature'
        ? 'Hero section AND after main content'
        : 'After the main content / conclusion';
    suggestions.push({ placement, element: 'CTA Section', reason: 'No CTA detected on page' });
  }

  if (!inspection.signals.hasServiceLink) {
    const placement =
      type === 'blog' ? 'Within article body (contextual)' : 'Dedicated "Related Services" section';
    suggestions.push({
      placement,
      element: 'Service Link',
      reason: 'No link to any service page',
    });
  }

  if (!inspection.signals.hasRelatedContent) {
    suggestions.push({
      placement: 'End of page',
      element: 'Related Content',
      reason: 'No related content connections',
    });
  }

  return suggestions;
}

function buildSampleRewrites(inspection: PageInspection): SampleRewrite[] {
  const samples: SampleRewrite[] = [];
  const type = inspection.node.type;

  // Max 3 samples
  if (!inspection.signals.hasCTA && CTA_SAMPLES[type]) {
    samples.push(CTA_SAMPLES[type]);
  }
  if (samples.length < 3 && !inspection.signals.hasServiceLink && SERVICE_LINK_SAMPLES[type]) {
    samples.push(SERVICE_LINK_SAMPLES[type]);
  }
  if (
    samples.length < 3 &&
    !inspection.signals.hasRelatedContent &&
    RELATED_CONTENT_SAMPLES[type]
  ) {
    samples.push(RELATED_CONTENT_SAMPLES[type]);
  }

  return samples;
}

/**
 * Generate structured rewrite suggestions for a page.
 * Returns null if the slug doesn't exist.
 */
export function generateRewriteSuggestion(slug: string): RewriteSuggestion | null {
  const inspection = inspectPage(slug);
  if (!inspection) return null;

  return {
    slug,
    type: inspection.node.type,
    currentScore: inspection.conversionScore.totalScore,
    issues: buildIssues(inspection),
    structureSuggestions: buildStructureSuggestions(inspection),
    sampleRewrites: buildSampleRewrites(inspection),
  };
}

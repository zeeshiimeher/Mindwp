/**
 * Readable Report Generator
 *
 * Transforms internal conversion intelligence into human-readable insights.
 * NO scores. NO technical terms. Business language only.
 *
 * Uses existing analyzers — does not modify any data.
 */

import { analyzeAllConversions, getConversionSummary } from '@/lib/dev/conversionAnalyzer';
import { getPriorityQueue } from '@/lib/dev/conversionPriorityEngine';
import { getHealthSummary } from '@/lib/dev/linkHealthAnalyzer';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ReadableAuditReport {
  generatedAt: string;
  summary: string;
  issues: { title: string; description: string; impact: string }[];
  opportunities: { title: string; description: string }[];
  recommendations: { action: string; explanation: string }[];
  priorityActions: {
    slug: string;
    issue: string;
    action: string;
    expectedImprovement: string;
    recommendedFixId?: string;
  }[];
  expectedOutcome: { improvement: string; notes?: string };
}

// ─── Summary ─────────────────────────────────────────────────────────────────

function buildSummary(
  avgScore: number,
  lowCount: number,
  total: number,
  healthCritical: number
): string {
  const lowPct = total > 0 ? Math.round((lowCount / total) * 100) : 0;

  if (avgScore < 40) {
    return 'Your website has significant conversion weaknesses. Most pages are not guiding visitors toward taking action. There are clear opportunities to improve lead generation by fixing structure and navigation.';
  }
  if (avgScore < 60) {
    return `Your website is getting traffic but not converting visitors into leads effectively. Around ${lowPct}% of pages have weak conversion paths. Fixing the highest-impact pages first will improve results.`;
  }
  if (avgScore < 80) {
    return `Your website has a solid foundation but some pages are underperforming. ${lowCount} pages have weak conversion paths. Targeted improvements to these pages will strengthen overall performance.`;
  }
  return `Your website is performing well overall. ${healthCritical > 0 ? `${healthCritical} pages need attention for link health.` : 'Most pages are well-connected and guide visitors effectively.'}`;
}

// ─── Issues ──────────────────────────────────────────────────────────────────

function buildIssues(
  conversions: ReturnType<typeof analyzeAllConversions>,
  healthSummary: ReturnType<typeof getHealthSummary>
): ReadableAuditReport['issues'] {
  const issues: ReadableAuditReport['issues'] = [];
  const total = conversions.length;

  const noCTA = conversions.filter(c => c.ctaScore === 0).length;
  const noServiceLink = conversions.filter(c => c.serviceLinkScore === 0).length;
  const noJourney = conversions.filter(c => c.journeyScore === 0).length;

  if (noCTA > 0) {
    issues.push({
      title: 'Pages without a clear call-to-action',
      description: `${noCTA} out of ${total} pages do not guide visitors on what to do next.`,
      impact: 'Potential leads are lost because visitors have no clear next step.',
    });
  }

  if (noServiceLink > 0) {
    issues.push({
      title: 'Weak connection to services',
      description: `${noServiceLink} pages are not directing users toward your services.`,
      impact: 'Visitors cannot easily discover what you offer, reducing conversion chances.',
    });
  }

  if (noJourney > 0) {
    issues.push({
      title: 'No clear user journey',
      description: `${noJourney} pages are not guiding visitors step-by-step through your content.`,
      impact: 'Users leave without taking action because there is no clear path forward.',
    });
  }

  if (healthSummary.critical > 0) {
    issues.push({
      title: 'Pages with poor internal linking',
      description: `${healthSummary.critical} pages have critical link health issues — too few links or missing key connections.`,
      impact: 'Search engines and visitors struggle to navigate your content.',
    });
  }

  return issues;
}

// ─── Opportunities ───────────────────────────────────────────────────────────

function buildOpportunities(
  conversions: ReturnType<typeof analyzeAllConversions>,
  priorityQueue: ReturnType<typeof getPriorityQueue>
): ReadableAuditReport['opportunities'] {
  const opportunities: ReadableAuditReport['opportunities'] = [];

  // High authority + low conversion = quick wins
  const highAuthLow = conversions.filter(
    c => c.conversionPriority >= 70 && c.totalScore < 50
  ).length;
  if (highAuthLow > 0) {
    opportunities.push({
      title: 'High-traffic pages underperforming',
      description: `${highAuthLow} important pages receive attention but do not convert visitors. These are your biggest quick wins.`,
    });
  }

  // Critical priority pages
  if (priorityQueue.criticalCount > 0) {
    opportunities.push({
      title: 'Critical pages ready for improvement',
      description: `${priorityQueue.criticalCount} pages have been identified as critical priority. Fixing these will have the highest impact on overall performance.`,
    });
  }

  // Service pages with low scores
  const weakServices = conversions.filter(
    c => (c.type === 'service' || c.type === 'feature') && c.totalScore < 60
  ).length;
  if (weakServices > 0) {
    opportunities.push({
      title: 'Service pages need attention',
      description: `${weakServices} service and feature pages are not converting well. These are your most important pages for lead generation.`,
    });
  }

  return opportunities;
}

// ─── Recommendations ─────────────────────────────────────────────────────────

function buildRecommendations(
  conversions: ReturnType<typeof analyzeAllConversions>
): ReadableAuditReport['recommendations'] {
  const recommendations: ReadableAuditReport['recommendations'] = [];
  const noCTA = conversions.filter(c => c.ctaScore === 0).length;
  const noServiceLink = conversions.filter(c => c.serviceLinkScore === 0).length;
  const noJourney = conversions.filter(c => c.journeyScore === 0).length;

  if (noCTA > 0) {
    recommendations.push({
      action: 'Add clear calls-to-action',
      explanation:
        'Guide visitors toward contacting you or engaging with your services. Every important page should have a clear next step.',
    });
  }

  if (noServiceLink > 0) {
    recommendations.push({
      action: 'Improve internal linking to services',
      explanation:
        'Connect your content pages to relevant service pages so visitors can easily find what you offer.',
    });
  }

  if (noJourney > 0) {
    recommendations.push({
      action: 'Build clear user journeys',
      explanation:
        'Guide visitors through a logical path: from learning (blog/resource) to understanding (case study) to taking action (service/contact).',
    });
  }

  // Always recommend prioritizing high-value pages
  recommendations.push({
    action: 'Focus on highest-impact pages first',
    explanation:
      'Start with service pages and high-traffic content. Small improvements on important pages deliver the biggest results.',
  });

  return recommendations;
}

// ─── Priority Actions ────────────────────────────────────────────────────────

const ISSUE_TO_FIX: Record<string, { action: string; fixId: string }> = {
  'Missing CTA': { action: 'Add a call-to-action section', fixId: 'add-cta' },
  'Missing service link': {
    action: 'Add a link to a related service page',
    fixId: 'add-service-link',
  },
  'Missing journey link': {
    action: 'Add a link to the next step in the user journey',
    fixId: 'add-journey-link',
  },
  'Critical link health': {
    action: 'Add 2-3 internal links to improve connectivity',
    fixId: 'add-links',
  },
  'Weak link health': { action: 'Improve internal link quality', fixId: 'improve-links' },
};

function buildPriorityActions(
  priorityQueue: ReturnType<typeof getPriorityQueue>
): ReadableAuditReport['priorityActions'] {
  return priorityQueue.entries.slice(0, 10).map(entry => {
    const topIssue = entry.issues[0] ?? 'Low conversion score';
    const fixInfo = ISSUE_TO_FIX[topIssue];
    return {
      slug: entry.slug,
      issue: topIssue,
      action: fixInfo?.action ?? 'Review and improve conversion elements',
      expectedImprovement:
        entry.category === 'critical'
          ? 'High impact expected'
          : entry.category === 'high'
            ? 'Noticeable improvement expected'
            : 'Moderate improvement expected',
      recommendedFixId: fixInfo?.fixId,
    };
  });
}

// ─── Expected Outcome ────────────────────────────────────────────────────────

function buildExpectedOutcome(
  summary: ReturnType<typeof getConversionSummary>,
  priorityQueue: ReturnType<typeof getPriorityQueue>
): ReadableAuditReport['expectedOutcome'] {
  const criticalAndHigh = priorityQueue.criticalCount + priorityQueue.highCount;

  if (criticalAndHigh > 10) {
    return {
      improvement:
        'Significant improvement in lead generation and conversion rates across the website',
      notes: `${criticalAndHigh} pages have been identified for high-impact optimization. Fixing these systematically will strengthen your entire content system.`,
    };
  }

  if (criticalAndHigh > 0) {
    return {
      improvement: 'Improved lead generation and higher conversion rates on key pages',
      notes: 'Based on current structure and content authority analysis.',
    };
  }

  return {
    improvement: 'Maintained strong performance with targeted fine-tuning',
    notes: 'Your website is already performing well. Focus on continuous improvement.',
  };
}

// ─── Public API ──────────────────────────────────────────────────────────────

export function generateReadableReport(): ReadableAuditReport {
  const conversions = analyzeAllConversions();
  const conversionSummary = getConversionSummary();
  const healthSummary = getHealthSummary();
  const priorityQueue = getPriorityQueue();

  const lowCount = conversions.filter(c => c.status === 'low').length;

  return {
    generatedAt: new Date().toISOString(),
    summary: buildSummary(
      conversionSummary.avgScore,
      lowCount,
      conversions.length,
      healthSummary.critical
    ),
    issues: buildIssues(conversions, healthSummary),
    opportunities: buildOpportunities(conversions, priorityQueue),
    recommendations: buildRecommendations(conversions),
    priorityActions: buildPriorityActions(priorityQueue),
    expectedOutcome: buildExpectedOutcome(conversionSummary, priorityQueue),
  };
}

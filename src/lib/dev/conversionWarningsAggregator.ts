/**
 * Conversion Warnings Aggregator
 *
 * Combines conversion signals across all pages into a single summary.
 * Used by the dashboard to show an overview of conversion health
 * without needing per-page drill-down.
 *
 * Reuses conversionSignals for detection (zero duplication).
 * Reuses ISSUE_TYPES for normalized issue identification.
 */

import { getContentGraph } from '@/lib/content-graph/registry';
import { ISSUE_TYPES, type IssueType } from '@/lib/dev/conversionIssues';
import { getConversionSignals } from '@/lib/dev/conversionSignals';

// --- Types ---

export interface ConversionWarningsSummary {
  totalPages: number;

  pagesWithNoCTA: number;
  pagesWithNoServiceLink: number;
  pagesWithNoJourney: number;

  criticalPages: { slug: string; issueCount: number }[];
  warningPages: { slug: string; issueType: IssueType }[];

  topIssues: { type: IssueType; count: number }[];
}

// --- Main function ---

export function getConversionWarningsSummary(): ConversionWarningsSummary {
  const graph = getContentGraph();
  const nodes = Object.values(graph);

  let pagesWithNoCTA = 0;
  let pagesWithNoServiceLink = 0;
  let pagesWithNoJourney = 0;

  const criticalPages: ConversionWarningsSummary['criticalPages'] = [];
  const warningPages: ConversionWarningsSummary['warningPages'] = [];

  const issueCounts: Record<IssueType, number> = {
    [ISSUE_TYPES.NO_CTA]: 0,
    [ISSUE_TYPES.NO_SERVICE_LINK]: 0,
    [ISSUE_TYPES.NO_JOURNEY]: 0,
  };

  for (const node of nodes) {
    const signals = getConversionSignals(node.slug, node.type);

    let issueCount = 0;
    let firstIssue: IssueType | null = null;

    if (!signals.hasCTA) {
      pagesWithNoCTA++;
      issueCounts[ISSUE_TYPES.NO_CTA]++;
      issueCount++;
      firstIssue ??= ISSUE_TYPES.NO_CTA;
    }

    if (!signals.hasServiceLink) {
      pagesWithNoServiceLink++;
      issueCounts[ISSUE_TYPES.NO_SERVICE_LINK]++;
      issueCount++;
      firstIssue ??= ISSUE_TYPES.NO_SERVICE_LINK;
    }

    if (!signals.hasJourneyNextStep) {
      pagesWithNoJourney++;
      issueCounts[ISSUE_TYPES.NO_JOURNEY]++;
      issueCount++;
      firstIssue ??= ISSUE_TYPES.NO_JOURNEY;
    }

    if (issueCount >= 2) {
      criticalPages.push({ slug: node.slug, issueCount });
    } else if (issueCount === 1 && firstIssue) {
      warningPages.push({ slug: node.slug, issueType: firstIssue });
    }
  }

  // Sort critical by worst first
  criticalPages.sort((a, b) => b.issueCount - a.issueCount);

  const topIssues = Object.entries(issueCounts)
    .map(([type, count]) => ({ type: type as IssueType, count }))
    .filter(i => i.count > 0)
    .sort((a, b) => b.count - a.count);

  return {
    totalPages: nodes.length,
    pagesWithNoCTA,
    pagesWithNoServiceLink,
    pagesWithNoJourney,
    criticalPages,
    warningPages,
    topIssues,
  };
}

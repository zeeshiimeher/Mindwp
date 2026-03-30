/**
 * Report Generator
 *
 * Builds a client-facing content intelligence report
 * combining link health, authority data, and fix suggestions.
 */

import { analyzeAllConversions, getConversionSummary } from '@/lib/dev/conversionAnalyzer';
import { analyzeAllPages, getHealthSummary } from '@/lib/dev/linkHealthAnalyzer';
import { type PageSuggestions, suggestLinksForWeakPages } from '@/lib/dev/linkSuggestionEngine';

// --- Types ---

export interface ContentIntelligenceReport {
  generatedAt: string;
  summary: {
    totalPages: number;
    healthy: number;
    weak: number;
    critical: number;
    avgLinkScore: number;
  };
  weakPages: Array<{
    slug: string;
    path: string;
    type: string;
    status: string;
    totalLinks: number;
    avgScore: number;
    issues: string[];
    suggestions: string[];
  }>;
  topOpportunities: Array<{
    sourceSlug: string;
    suggestedTarget: string;
    targetPath: string;
    reason: string;
    score: number;
  }>;
  revenueOpportunities: Array<{
    slug: string;
    path: string;
    type: string;
    conversionGoal: string;
    totalScore: number;
    status: string;
  }>;
  lowConversionPages: Array<{
    slug: string;
    path: string;
    type: string;
    ctaScore: number;
    serviceLinkScore: number;
    journeyScore: number;
    totalScore: number;
  }>;
  ctaIssues: {
    pagesWithoutServiceLink: number;
    pagesWithoutJourneyLink: number;
    avgConversionScore: number;
  };
}

// --- Build report ---

export function generateReport(): ContentIntelligenceReport {
  const healthSummary = getHealthSummary();
  const allResults = analyzeAllPages();
  const weakSuggestions = suggestLinksForWeakPages();
  const conversionSummary = getConversionSummary();
  const allConversions = analyzeAllConversions();

  // Weak + critical pages
  const weakPages = allResults
    .filter(r => r.status !== 'healthy')
    .map(r => ({
      slug: r.slug,
      path: r.path,
      type: r.type,
      status: r.status,
      totalLinks: r.totalLinks,
      avgScore: r.avgScore,
      issues: r.issues,
      suggestions: r.suggestions,
    }));

  // Top opportunities across all suggestions
  const topOpportunities = extractTopOpportunities(weakSuggestions);

  // Revenue opportunities: high-priority pages with non-high conversion
  const revenueOpportunities = allConversions
    .filter(c => c.conversionPriority >= 70 && c.status !== 'high')
    .slice(0, 20)
    .map(c => ({
      slug: c.slug,
      path: c.path,
      type: c.type,
      conversionGoal: c.conversionGoal,
      totalScore: c.totalScore,
      status: c.status,
    }));

  // Low conversion pages
  const lowConversionPages = allConversions
    .filter(c => c.status === 'low')
    .slice(0, 20)
    .map(c => ({
      slug: c.slug,
      path: c.path,
      type: c.type,
      ctaScore: c.ctaScore,
      serviceLinkScore: c.serviceLinkScore,
      journeyScore: c.journeyScore,
      totalScore: c.totalScore,
    }));

  // CTA issues
  const ctaIssues = {
    pagesWithoutServiceLink: conversionSummary.pagesWithoutServiceLink,
    pagesWithoutJourneyLink: conversionSummary.pagesWithoutJourneyLink,
    avgConversionScore: conversionSummary.avgScore,
  };

  return {
    generatedAt: new Date().toISOString(),
    summary: {
      totalPages: healthSummary.total,
      healthy: healthSummary.healthy,
      weak: healthSummary.weak,
      critical: healthSummary.critical,
      avgLinkScore: healthSummary.avgScore,
    },
    weakPages,
    topOpportunities,
    revenueOpportunities,
    lowConversionPages,
    ctaIssues,
  };
}

// --- Extract top improvement opportunities ---

function extractTopOpportunities(
  suggestions: PageSuggestions[]
): ContentIntelligenceReport['topOpportunities'] {
  const all: ContentIntelligenceReport['topOpportunities'] = [];

  for (const page of suggestions) {
    for (const link of page.suggestedLinks) {
      all.push({
        sourceSlug: page.sourceSlug,
        suggestedTarget: link.targetSlug,
        targetPath: link.targetPath,
        reason: link.reason,
        score: link.score,
      });
    }
  }

  return all.sort((a, b) => b.score - a.score).slice(0, 20);
}

// --- Format as Markdown ---

export function formatReportAsMarkdown(report: ContentIntelligenceReport): string {
  const lines: string[] = [];

  lines.push('# Content Intelligence Report');
  lines.push('');
  lines.push(`Generated: ${new Date(report.generatedAt).toLocaleString()}`);
  lines.push('');

  // Summary
  lines.push('## Summary');
  lines.push('');
  lines.push(`| Metric | Value |`);
  lines.push(`|--------|-------|`);
  lines.push(`| Total Pages | ${report.summary.totalPages} |`);
  lines.push(`| Healthy | ${report.summary.healthy} |`);
  lines.push(`| Weak | ${report.summary.weak} |`);
  lines.push(`| Critical | ${report.summary.critical} |`);
  lines.push(`| Avg Link Score | ${report.summary.avgLinkScore} |`);
  lines.push('');

  // Weak Pages
  if (report.weakPages.length > 0) {
    lines.push('## Weak Pages');
    lines.push('');
    for (const page of report.weakPages) {
      lines.push(`### ${page.path}`);
      lines.push('');
      lines.push(`- **Status:** ${page.status}`);
      lines.push(`- **Links:** ${page.totalLinks} | **Avg Score:** ${page.avgScore}`);
      if (page.issues.length > 0) {
        lines.push(`- **Issues:**`);
        for (const issue of page.issues) {
          lines.push(`  - ${issue}`);
        }
      }
      if (page.suggestions.length > 0) {
        lines.push(`- **Suggestions:**`);
        for (const suggestion of page.suggestions) {
          lines.push(`  - ${suggestion}`);
        }
      }
      lines.push('');
    }
  }

  // Top Opportunities
  if (report.topOpportunities.length > 0) {
    lines.push('## Top Improvement Opportunities');
    lines.push('');
    lines.push('| Source | Suggested Target | Reason | Score |');
    lines.push('|--------|-----------------|--------|-------|');
    for (const opp of report.topOpportunities) {
      lines.push(`| ${opp.sourceSlug} | ${opp.targetPath} | ${opp.reason} | ${opp.score} |`);
    }
    lines.push('');
  }

  // Recommendations
  lines.push('## Recommendations');
  lines.push('');
  lines.push('1. **Strengthen weak pages** — Add internal links to pages with fewer than 2 links');
  lines.push(
    '2. **Improve authority coverage** — Ensure every content page links to at least 1 service page'
  );
  lines.push('3. **Increase topic relevance** — Link to pages that share the same topic cluster');
  lines.push(
    '4. **Industry alignment** — Add industry-specific links where industry metadata exists'
  );
  lines.push('');

  // Revenue Opportunities
  if (report.revenueOpportunities.length > 0) {
    lines.push('## Revenue Opportunities');
    lines.push('');
    lines.push('High-priority pages with below-target conversion scores:');
    lines.push('');
    lines.push('| Page | Type | Goal | Score | Status |');
    lines.push('|------|------|------|-------|--------|');
    for (const opp of report.revenueOpportunities) {
      lines.push(
        `| ${opp.path} | ${opp.type} | ${opp.conversionGoal} | ${opp.totalScore} | ${opp.status} |`
      );
    }
    lines.push('');
  }

  // Low Conversion Pages
  if (report.lowConversionPages.length > 0) {
    lines.push('## Low Conversion Pages');
    lines.push('');
    lines.push('| Page | Type | CTA | Service | Journey | Total |');
    lines.push('|------|------|-----|---------|---------|-------|');
    for (const page of report.lowConversionPages) {
      lines.push(
        `| ${page.path} | ${page.type} | ${page.ctaScore} | ${page.serviceLinkScore} | ${page.journeyScore} | ${page.totalScore} |`
      );
    }
    lines.push('');
  }

  // CTA Issues
  lines.push('## CTA Issues');
  lines.push('');
  lines.push(`| Metric | Value |`);
  lines.push(`|--------|-------|`);
  lines.push(`| Pages Without Service Link | ${report.ctaIssues.pagesWithoutServiceLink} |`);
  lines.push(`| Pages Without Journey Link | ${report.ctaIssues.pagesWithoutJourneyLink} |`);
  lines.push(`| Avg Conversion Score | ${report.ctaIssues.avgConversionScore} |`);
  lines.push('');

  return lines.join('\n');
}

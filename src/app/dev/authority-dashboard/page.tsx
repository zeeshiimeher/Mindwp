import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import {
  getOrphanNodes,
  getReportSummary,
  getTopAuthorityNodes,
  groupByCluster,
} from '@/lib/dev/authorityAnalyzer';
import { analyzeAllConversions, getConversionSummary } from '@/lib/dev/conversionAnalyzer';
import { getPriorityQueue } from '@/lib/dev/conversionPriorityEngine';
import { getConversionWarningsSummary } from '@/lib/dev/conversionWarningsAggregator';
import { getBridgeInsights } from '@/lib/dev/dashboardBridge';
import { getFixInsights } from '@/lib/dev/fixInsightsAnalyzer';
import { analyzeAllPages, getHealthSummary } from '@/lib/dev/linkHealthAnalyzer';
import { suggestLinksForWeakPages } from '@/lib/dev/linkSuggestionEngine';
import { generateReport } from '@/lib/dev/reportGenerator';
import { getSessionSummary } from '@/lib/dev/sessionTracker';

import { AuthorityNodesPanel } from './panels/AuthorityNodesPanel';
import { AuthoritySummaryPanel } from './panels/AuthoritySummaryPanel';
import { BridgeInsightsPanel } from './panels/BridgeInsightsPanel';
import { ConversionIntelligencePanel } from './panels/ConversionIntelligencePanel';
import { ConversionWarningsPanel } from './panels/ConversionWarningsPanel';
import { FixHistoryPanel } from './panels/FixHistoryPanel';
import { LinkHealthPanel } from './panels/LinkHealthPanel';
import { PriorityQueuePanel } from './panels/PriorityQueuePanel';
import { SessionTrackerPanel } from './panels/SessionTrackerPanel';
import { TopicClustersPanel } from './panels/TopicClustersPanel';
import { ExportReportButton } from './ExportReportButton';
import { PageInspector } from './PageInspector';

export const dynamic = 'force-dynamic';

export default async function AuthorityDashboardPage() {
  await ensureGraphInitialized();

  // Authority data
  const summary = getReportSummary();
  const topNodes = getTopAuthorityNodes(20);
  const orphans = getOrphanNodes();
  const clusters = groupByCluster();

  // Link health data
  const healthSummary = getHealthSummary();
  const allPageHealth = analyzeAllPages();
  const weakPages = allPageHealth.filter(r => r.status !== 'healthy');
  const weakSuggestions = suggestLinksForWeakPages();

  // Export report data
  const report = generateReport();
  const reportJson = JSON.stringify(report, null, 2);

  // Conversion intelligence data
  const conversionSummary = getConversionSummary();
  const allConversions = analyzeAllConversions();
  const lowConversionPages = allConversions.filter(c => c.status === 'low').slice(0, 20);
  const revenueOpportunities = allConversions
    .filter(c => c.conversionPriority >= 70 && c.status !== 'high')
    .slice(0, 15);
  const ctaCoverage = {
    withServiceLink: allConversions.filter(c => c.serviceLinkScore > 0).length,
    withJourneyLink: allConversions.filter(c => c.journeyScore > 0).length,
    total: allConversions.length,
  };

  // Conversion warnings data (from aggregator)
  const conversionWarnings = getConversionWarningsSummary();

  // Priority queue
  const priorityQueue = getPriorityQueue();

  // Slug list for page inspector
  const allSlugs = allConversions.map(c => ({ slug: c.slug, type: c.type, path: c.path }));

  // Fix log insights
  const fixInsights = getFixInsights();

  // Bridge insights (Content ↔ Conversion)
  const bridgeInsights = getBridgeInsights();

  // Session tracker
  const sessionSummary = getSessionSummary();

  return (
    <div style={{ maxWidth: 1060, margin: '0 auto', padding: '2rem', fontFamily: 'system-ui' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem',
        }}
      >
        <h1 style={{ fontSize: '1.75rem', margin: 0 }}>Content Intelligence Dashboard</h1>
        <ExportReportButton reportJson={reportJson} />
      </div>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Dev-only view. Data from <code>reports/</code> — generated at{' '}
        {new Date(summary.generatedAt).toLocaleString()}
      </p>

      {/* --- OVERVIEW SECTION --- */}
      <AuthoritySummaryPanel
        totalNodes={summary.totalNodes}
        topicsAnalyzed={summary.topicsAnalyzed}
        averageScore={summary.averageScore}
        orphanCount={orphans.length}
      />

      <LinkHealthPanel
        healthSummary={healthSummary}
        weakPages={weakPages}
        weakSuggestions={weakSuggestions}
      />

      {/* --- ANALYSIS SECTION --- */}
      <ConversionIntelligencePanel
        conversionSummary={conversionSummary}
        ctaCoverage={ctaCoverage}
        revenueOpportunities={revenueOpportunities}
        lowConversionPages={lowConversionPages}
      />

      <ConversionWarningsPanel warnings={conversionWarnings} />

      <PriorityQueuePanel queue={priorityQueue} />

      <TopicClustersPanel clusters={clusters} />

      {/* --- INSPECT SECTION --- */}
      <PageInspector slugs={allSlugs} />

      {/* --- ACTION SECTION --- */}
      <BridgeInsightsPanel insights={bridgeInsights} />

      <AuthorityNodesPanel topNodes={topNodes} orphans={orphans} />

      {/* --- LEARNING SECTION --- */}
      <FixHistoryPanel insights={fixInsights} />

      <SessionTrackerPanel summary={sessionSummary} />
    </div>
  );
}

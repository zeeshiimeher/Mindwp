/**
 * Conversion Warnings Panel (NEW)
 *
 * Uses aggregator data to show: summary cards, top issues, critical pages, warning pages.
 */

import { ISSUE_MESSAGES } from '@/lib/dev/conversionIssues';
import type { ConversionWarningsSummary } from '@/lib/dev/conversionWarningsAggregator';

import { SummaryCard } from './SummaryCard';

interface Props {
  warnings: ConversionWarningsSummary;
}

export function ConversionWarningsPanel({ warnings }: Props) {
  return (
    <>
      <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
        Conversion Warnings
      </h2>
      <section style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <SummaryCard label='Total Pages' value={warnings.totalPages} />
        <SummaryCard label='No CTA' value={warnings.pagesWithNoCTA} color='#ef4444' />
        <SummaryCard
          label='No Service Link'
          value={warnings.pagesWithNoServiceLink}
          color='#ef4444'
        />
        <SummaryCard label='No Journey' value={warnings.pagesWithNoJourney} color='#eab308' />
      </section>

      {/* Top Issues */}
      {warnings.topIssues.length > 0 && (
        <>
          <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Top Issues</h3>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.875rem',
              marginBottom: '1.5rem',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem' }}>Issue</th>
                <th style={{ padding: '0.5rem' }}>Description</th>
                <th style={{ padding: '0.5rem' }}>Count</th>
              </tr>
            </thead>
            <tbody>
              {warnings.topIssues.map(issue => (
                <tr key={issue.type} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                    {issue.type}
                  </td>
                  <td style={{ padding: '0.5rem', fontSize: '0.8rem' }}>
                    {ISSUE_MESSAGES[issue.type] ?? issue.type}
                  </td>
                  <td style={{ padding: '0.5rem', fontWeight: 600 }}>{issue.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Critical Pages */}
      {warnings.criticalPages.length > 0 && (
        <>
          <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#ef4444' }}>
            Critical Pages ({warnings.criticalPages.length})
          </h3>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.875rem',
              marginBottom: '1.5rem',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem' }}>Slug</th>
                <th style={{ padding: '0.5rem' }}>Issues</th>
              </tr>
            </thead>
            <tbody>
              {warnings.criticalPages.slice(0, 20).map(p => (
                <tr key={p.slug} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                    {p.slug}
                  </td>
                  <td style={{ padding: '0.5rem', color: '#ef4444', fontWeight: 600 }}>
                    {p.issueCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Warning Pages */}
      {warnings.warningPages.length > 0 && (
        <>
          <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#eab308' }}>
            Warning Pages ({warnings.warningPages.length})
          </h3>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.875rem',
              marginBottom: '1.5rem',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem' }}>Slug</th>
                <th style={{ padding: '0.5rem' }}>Issue</th>
              </tr>
            </thead>
            <tbody>
              {warnings.warningPages.slice(0, 20).map(p => (
                <tr key={p.slug} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                    {p.slug}
                  </td>
                  <td style={{ padding: '0.5rem', fontSize: '0.8rem' }}>
                    {ISSUE_MESSAGES[p.issueType] ?? p.issueType}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

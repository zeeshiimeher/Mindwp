/**
 * Fix History Panel
 *
 * Shows fix log insights: summary cards, recent fixes, top fixed pages.
 * Handles empty state gracefully.
 */

import type { FixInsights } from '@/lib/dev/fixInsightsAnalyzer';

import { SummaryCard } from './SummaryCard';

interface Props {
  insights: FixInsights;
}

export function FixHistoryPanel({ insights }: Props) {
  if (insights.totalFixes === 0) {
    return (
      <>
        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
          Fix History
        </h2>
        <div
          style={{
            padding: '1.5rem',
            border: '1px dashed #d1d5db',
            borderRadius: 8,
            color: '#999',
            fontSize: '0.875rem',
            textAlign: 'center',
          }}
        >
          No fixes logged yet. Apply conversion fixes and log them in{' '}
          <code>reports/fix-log.json</code> to track progress.
        </div>
      </>
    );
  }

  return (
    <>
      <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>Fix History</h2>
      <section style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <SummaryCard label='Total Fixes' value={insights.totalFixes} />
        <SummaryCard label='Avg Improvement' value={insights.avgImprovement} color='#22c55e' />
      </section>

      {/* Fixes by Type */}
      {insights.fixesByType.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Fixes by Type</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {insights.fixesByType.map(f => (
              <div
                key={f.type}
                style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: 6,
                  fontSize: '0.8rem',
                }}
              >
                <span style={{ fontWeight: 600 }}>{f.type}</span>{' '}
                <span style={{ color: '#666' }}>({f.count})</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Fixes */}
      {insights.recentFixes.length > 0 && (
        <>
          <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Recent Fixes</h3>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.8rem',
              marginBottom: '1.5rem',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.4rem' }}>Date</th>
                <th style={{ padding: '0.4rem' }}>Slug</th>
                <th style={{ padding: '0.4rem' }}>Fix</th>
                <th style={{ padding: '0.4rem' }}>Before</th>
                <th style={{ padding: '0.4rem' }}>After</th>
                <th style={{ padding: '0.4rem' }}>+Gain</th>
              </tr>
            </thead>
            <tbody>
              {insights.recentFixes.map((fix, idx) => (
                <tr key={`${fix.slug}-${idx}`} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.4rem' }}>{fix.date}</td>
                  <td style={{ padding: '0.4rem', fontFamily: 'monospace' }}>{fix.slug}</td>
                  <td style={{ padding: '0.4rem' }}>{fix.fixType}</td>
                  <td style={{ padding: '0.4rem' }}>{fix.scoreBefore}</td>
                  <td style={{ padding: '0.4rem' }}>{fix.scoreAfter}</td>
                  <td style={{ padding: '0.4rem', color: '#22c55e', fontWeight: 600 }}>
                    +{fix.scoreAfter - fix.scoreBefore}
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

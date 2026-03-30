/**
 * Bridge Insights Panel
 *
 * Surfaces cross-dashboard insights: fix vs create vs ROI decisions.
 * Text-based, no charts — lightweight read-only panel.
 */

import type { BridgeInsights } from '@/lib/dev/dashboardBridge';

import { SummaryCard } from './SummaryCard';

interface Props {
  insights: BridgeInsights;
}

export function BridgeInsightsPanel({ insights }: Props) {
  const {
    highAuthorityLowConversion,
    weakTopicsHighConversion,
    bestContentTypes,
    contentOpportunities,
  } = insights;

  return (
    <>
      <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
        Content ↔ Conversion Insights
      </h2>

      <section style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <SummaryCard label='Fix First' value={highAuthorityLowConversion.length} color='#ef4444' />
        <SummaryCard label='Create More' value={weakTopicsHighConversion.length} color='#22c55e' />
        <SummaryCard label='Opportunities' value={contentOpportunities.length} color='#6366f1' />
      </section>

      {/* 1. Fix First — High Authority, Low Conversion */}
      {highAuthorityLowConversion.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
            Fix First (High Authority, Low Conversion)
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem' }}>Page</th>
                <th style={{ padding: '0.5rem' }}>Authority</th>
                <th style={{ padding: '0.5rem' }}>Conversion</th>
              </tr>
            </thead>
            <tbody>
              {highAuthorityLowConversion.map(row => (
                <tr key={row.slug} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                    {row.slug}
                  </td>
                  <td style={{ padding: '0.5rem' }}>{row.authorityScore}</td>
                  <td style={{ padding: '0.5rem', color: '#ef4444' }}>{row.conversionScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 2. Create More Content — Weak Topics, High Conversion */}
      {weakTopicsHighConversion.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
            Create More Content (Weak Topic, High Conversion)
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem' }}>Topic</th>
                <th style={{ padding: '0.5rem' }}>Avg Conversion</th>
              </tr>
            </thead>
            <tbody>
              {weakTopicsHighConversion.map(row => (
                <tr key={row.topic} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.5rem' }}>{row.topic}</td>
                  <td style={{ padding: '0.5rem', color: '#22c55e' }}>{row.avgConversionScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 3. Best Performing Content Types */}
      {bestContentTypes.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
            Best Performing Content Types
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem' }}>Type</th>
                <th style={{ padding: '0.5rem' }}>Avg Conversion</th>
              </tr>
            </thead>
            <tbody>
              {bestContentTypes.map(row => (
                <tr key={row.type} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.5rem' }}>{row.type}</td>
                  <td style={{ padding: '0.5rem', fontWeight: 600 }}>{row.avgConversionScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 4. Content Opportunities */}
      {contentOpportunities.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Content Opportunities</h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.875rem', lineHeight: 1.7 }}>
            {contentOpportunities.map((opp, i) => (
              <li key={i}>{opp.suggestion}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Empty state */}
      {highAuthorityLowConversion.length === 0 &&
        weakTopicsHighConversion.length === 0 &&
        contentOpportunities.length === 0 && (
          <p style={{ color: '#999', fontSize: '0.875rem' }}>
            No cross-dashboard insights found. All pages are well-balanced.
          </p>
        )}
    </>
  );
}

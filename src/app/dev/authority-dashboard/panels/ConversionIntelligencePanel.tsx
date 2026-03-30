/**
 * Conversion Intelligence Panel
 *
 * Shows: conversion summary cards, CTA coverage cards, revenue opportunities table, low conversion pages table.
 */

import type { ConversionScore } from '@/lib/dev/conversionAnalyzer';

import { SummaryCard } from './SummaryCard';

interface ConversionSummary {
  total: number;
  high: number;
  medium: number;
  low: number;
  avgScore: number;
  pagesWithoutServiceLink: number;
  pagesWithoutJourneyLink: number;
}

interface CTACoverage {
  withServiceLink: number;
  withJourneyLink: number;
  total: number;
}

interface Props {
  conversionSummary: ConversionSummary;
  ctaCoverage: CTACoverage;
  revenueOpportunities: ConversionScore[];
  lowConversionPages: ConversionScore[];
}

export function ConversionIntelligencePanel({
  conversionSummary,
  ctaCoverage,
  revenueOpportunities,
  lowConversionPages,
}: Props) {
  return (
    <>
      {/* Conversion Summary */}
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Conversion Intelligence</h2>
      <section style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <SummaryCard label='Avg Conversion' value={conversionSummary.avgScore} />
        <SummaryCard label='High' value={conversionSummary.high} color='#22c55e' />
        <SummaryCard label='Medium' value={conversionSummary.medium} color='#eab308' />
        <SummaryCard label='Low' value={conversionSummary.low} color='#ef4444' />
        <SummaryCard
          label='No Service Link'
          value={conversionSummary.pagesWithoutServiceLink}
          color='#ef4444'
        />
        <SummaryCard
          label='No Journey Link'
          value={conversionSummary.pagesWithoutJourneyLink}
          color='#eab308'
        />
      </section>

      {/* CTA Coverage */}
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>CTA Coverage</h2>
      <section style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <SummaryCard
          label='With Service Link'
          value={ctaCoverage.withServiceLink}
          color='#22c55e'
        />
        <SummaryCard
          label='With Journey Link'
          value={ctaCoverage.withJourneyLink}
          color='#22c55e'
        />
        <SummaryCard label='Total Pages' value={ctaCoverage.total} />
      </section>

      {/* Revenue Opportunities */}
      {revenueOpportunities.length > 0 && (
        <>
          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
            Revenue Opportunities ({revenueOpportunities.length})
          </h2>
          <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
            High-priority pages (services, features, case studies) with low conversion scores.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem' }}>Page</th>
                <th style={{ padding: '0.5rem' }}>Type</th>
                <th style={{ padding: '0.5rem' }}>Goal</th>
                <th style={{ padding: '0.5rem' }}>Score</th>
                <th style={{ padding: '0.5rem' }}>Service</th>
                <th style={{ padding: '0.5rem' }}>Journey</th>
              </tr>
            </thead>
            <tbody>
              {revenueOpportunities.map(c => (
                <tr key={c.slug} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                    {c.path}
                  </td>
                  <td style={{ padding: '0.5rem' }}>{c.type}</td>
                  <td style={{ padding: '0.5rem' }}>{c.conversionGoal}</td>
                  <td
                    style={{ padding: '0.5rem', color: c.status === 'low' ? '#ef4444' : '#eab308' }}
                  >
                    {c.totalScore}
                  </td>
                  <td style={{ padding: '0.5rem' }}>
                    {c.serviceLinkScore > 0 ? '\u2713' : '\u2717'}
                  </td>
                  <td style={{ padding: '0.5rem' }}>{c.journeyScore > 0 ? '\u2713' : '\u2717'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Low Conversion Pages */}
      {lowConversionPages.length > 0 && (
        <>
          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
            Low Conversion Pages ({lowConversionPages.length})
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem' }}>Page</th>
                <th style={{ padding: '0.5rem' }}>Type</th>
                <th style={{ padding: '0.5rem' }}>CTA</th>
                <th style={{ padding: '0.5rem' }}>Service</th>
                <th style={{ padding: '0.5rem' }}>Journey</th>
                <th style={{ padding: '0.5rem' }}>Authority</th>
                <th style={{ padding: '0.5rem' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {lowConversionPages.map(c => (
                <tr key={c.slug} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                    {c.path}
                  </td>
                  <td style={{ padding: '0.5rem' }}>{c.type}</td>
                  <td style={{ padding: '0.5rem' }}>{c.ctaScore}</td>
                  <td style={{ padding: '0.5rem' }}>{c.serviceLinkScore}</td>
                  <td style={{ padding: '0.5rem' }}>{c.journeyScore}</td>
                  <td style={{ padding: '0.5rem' }}>{c.authorityScore}</td>
                  <td style={{ padding: '0.5rem', color: '#ef4444', fontWeight: 600 }}>
                    {c.totalScore}
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

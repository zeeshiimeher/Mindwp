/**
 * Priority Queue Panel
 *
 * Shows: priority summary cards + ranked fix queue table.
 */

import type { PriorityQueue } from '@/lib/dev/conversionPriorityEngine';

import { SummaryCard } from './SummaryCard';

const CATEGORY_COLORS: Record<string, string> = {
  critical: '#ef4444',
  high: '#f97316',
  medium: '#eab308',
  low: '#22c55e',
};

interface Props {
  queue: PriorityQueue;
}

export function PriorityQueuePanel({ queue }: Props) {
  return (
    <>
      <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
        Priority Queue
      </h2>
      <section style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <SummaryCard label='Total Pages' value={queue.totalPages} />
        <SummaryCard label='Critical' value={queue.criticalCount} color='#ef4444' />
        <SummaryCard label='High' value={queue.highCount} color='#f97316' />
        <SummaryCard label='Medium' value={queue.mediumCount} color='#eab308' />
        <SummaryCard label='Low' value={queue.lowCount} color='#22c55e' />
      </section>

      {queue.entries.length > 0 && (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
              <th style={{ padding: '0.5rem' }}>#</th>
              <th style={{ padding: '0.5rem' }}>Page</th>
              <th style={{ padding: '0.5rem' }}>Type</th>
              <th style={{ padding: '0.5rem' }}>Priority</th>
              <th style={{ padding: '0.5rem' }}>Conversion</th>
              <th style={{ padding: '0.5rem' }}>Links</th>
              <th style={{ padding: '0.5rem' }}>Authority</th>
              <th style={{ padding: '0.5rem' }}>Issues</th>
            </tr>
          </thead>
          <tbody>
            {queue.entries.slice(0, 30).map((entry, idx) => (
              <tr key={entry.slug} style={{ borderBottom: '1px solid #f3f4f6' }}>
                <td style={{ padding: '0.5rem', color: '#999' }}>{idx + 1}</td>
                <td style={{ padding: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                  {entry.path}
                </td>
                <td style={{ padding: '0.5rem' }}>{entry.type}</td>
                <td style={{ padding: '0.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.15rem 0.5rem',
                      borderRadius: 4,
                      background: CATEGORY_COLORS[entry.category] ?? '#999',
                      color: '#fff',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                    }}
                  >
                    {entry.priorityScore} ({entry.category})
                  </span>
                </td>
                <td style={{ padding: '0.5rem' }}>{entry.conversionScore}</td>
                <td
                  style={{
                    padding: '0.5rem',
                    color:
                      entry.linkHealthStatus === 'healthy'
                        ? '#22c55e'
                        : entry.linkHealthStatus === 'weak'
                          ? '#eab308'
                          : '#ef4444',
                  }}
                >
                  {entry.linkHealthStatus}
                </td>
                <td style={{ padding: '0.5rem' }}>{entry.authorityConnections}</td>
                <td style={{ padding: '0.5rem', fontSize: '0.8rem', color: '#666' }}>
                  {entry.issues.join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

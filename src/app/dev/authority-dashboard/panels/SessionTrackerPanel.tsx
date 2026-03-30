'use client';

/**
 * Session Tracker Panel
 *
 * Displays session history from session-log.json on the authority dashboard.
 */

import type { SessionSummary } from '@/lib/dev/sessionTracker';

interface Props {
  summary: SessionSummary;
}

export function SessionTrackerPanel({ summary }: Props) {
  if (summary.totalSessions === 0) {
    return (
      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Session Tracker</h2>
        <p style={{ fontSize: '0.8rem', color: '#666' }}>
          No sessions recorded yet. Use{' '}
          <code style={{ fontSize: '0.75rem' }}>scripts/dev/add-session-entry.mjs</code> to log
          optimization sessions.
        </p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Session Tracker</h2>

      {/* Summary Stats */}
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          marginBottom: '1rem',
          fontSize: '0.8rem',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <strong>{summary.totalSessions}</strong> sessions
        </div>
        <div>
          <strong>{summary.totalSlugsFixed}</strong> slugs fixed
        </div>
        <div>
          Avg improvement: <strong>+{summary.avgImprovement}</strong> pts
        </div>
      </div>

      {/* Recent Sessions */}
      {summary.recentSessions.length > 0 && (
        <>
          <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Recent Sessions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {summary.recentSessions.map((entry, i) => (
              <div
                key={i}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: 6,
                  fontSize: '0.8rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600 }}>{entry.action}</span>
                  <span style={{ color: '#999', fontSize: '0.75rem' }}>
                    {new Date(entry.date).toLocaleDateString()}
                  </span>
                </div>
                <div style={{ color: '#666', marginTop: '0.25rem' }}>
                  Slugs: {entry.slugsAffected.join(', ')}
                </div>
                {entry.notes && (
                  <div style={{ color: '#888', marginTop: '0.15rem', fontStyle: 'italic' }}>
                    {entry.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Top Improved Slugs */}
      {summary.topImprovedSlugs.length > 0 && (
        <>
          <h3 style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
            Top Improved Pages
          </h3>
          <table
            style={{
              width: '100%',
              maxWidth: 400,
              borderCollapse: 'collapse',
              fontSize: '0.8rem',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.3rem' }}>Slug</th>
                <th style={{ padding: '0.3rem' }}>Total Improvement</th>
              </tr>
            </thead>
            <tbody>
              {summary.topImprovedSlugs.map(s => (
                <tr key={s.slug} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td
                    style={{
                      padding: '0.3rem',
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                    }}
                  >
                    {s.slug}
                  </td>
                  <td style={{ padding: '0.3rem', color: '#22c55e', fontWeight: 600 }}>
                    +{s.improvement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

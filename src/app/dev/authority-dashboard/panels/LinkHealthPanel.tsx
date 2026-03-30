/**
 * Link Health Panel
 *
 * Shows: health summary cards + weak pages with issues/suggestions + suggested links table.
 */

import type { LinkHealthResult } from '@/lib/dev/linkHealthAnalyzer';
import type { LinkSuggestion } from '@/lib/dev/linkSuggestionEngine';

import { SummaryCard } from './SummaryCard';

const STATUS_COLORS: Record<string, string> = {
  healthy: '#22c55e',
  weak: '#eab308',
  critical: '#ef4444',
};

interface Props {
  healthSummary: {
    total: number;
    healthy: number;
    weak: number;
    critical: number;
    avgScore: number;
  };
  weakPages: LinkHealthResult[];
  weakSuggestions: { sourceSlug: string; suggestedLinks: LinkSuggestion[] }[];
}

export function LinkHealthPanel({ healthSummary, weakPages, weakSuggestions }: Props) {
  return (
    <>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Link Health</h2>
      <section style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <SummaryCard label='Pages Analyzed' value={healthSummary.total} />
        <SummaryCard label='Healthy' value={healthSummary.healthy} color='#22c55e' />
        <SummaryCard label='Weak' value={healthSummary.weak} color='#eab308' />
        <SummaryCard label='Critical' value={healthSummary.critical} color='#ef4444' />
        <SummaryCard label='Avg Link Score' value={healthSummary.avgScore} />
      </section>

      {/* Fix Suggestions (weak pages) */}
      {weakPages.length > 0 && (
        <>
          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
            Fix Suggestions ({weakPages.length} pages)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {weakPages.slice(0, 20).map(page => (
              <div
                key={page.slug}
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: 8,
                  padding: '1rem',
                  borderLeft: `4px solid ${STATUS_COLORS[page.status] ?? '#999'}`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                  }}
                >
                  <code style={{ fontSize: '0.875rem' }}>{page.path}</code>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.15rem 0.5rem',
                      borderRadius: 4,
                      background: STATUS_COLORS[page.status] ?? '#999',
                      color: '#fff',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    {page.status}
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem' }}>
                  {page.totalLinks} links | avg score {page.avgScore} | impact:{' '}
                  <span
                    style={{
                      fontWeight: 600,
                      color:
                        page.impact === 'high'
                          ? '#ef4444'
                          : page.impact === 'medium'
                            ? '#eab308'
                            : '#999',
                    }}
                  >
                    {page.impact}
                  </span>
                </div>
                {page.issues.length > 0 && (
                  <ul
                    style={{
                      margin: '0.25rem 0',
                      paddingLeft: '1.25rem',
                      fontSize: '0.8rem',
                      color: '#b91c1c',
                    }}
                  >
                    {page.issues.map(issue => (
                      <li key={issue}>{issue}</li>
                    ))}
                  </ul>
                )}
                {page.suggestions.length > 0 && (
                  <ul
                    style={{
                      margin: '0.25rem 0',
                      paddingLeft: '1.25rem',
                      fontSize: '0.8rem',
                      color: '#1d4ed8',
                    }}
                  >
                    {page.suggestions.map(s => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Suggested Links (Auto Repair Preview) */}
      {weakSuggestions.length > 0 && (
        <>
          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
            Suggested Links (Auto-Repair Preview)
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem' }}>Source</th>
                <th style={{ padding: '0.5rem' }}>Suggested Target</th>
                <th style={{ padding: '0.5rem' }}>Reason</th>
                <th style={{ padding: '0.5rem' }}>Score</th>
                <th style={{ padding: '0.5rem' }}>Improvement</th>
                <th style={{ padding: '0.5rem' }}>Auto-Fix</th>
              </tr>
            </thead>
            <tbody>
              {weakSuggestions.flatMap(page =>
                page.suggestedLinks.slice(0, 3).map(link => (
                  <tr
                    key={`${page.sourceSlug}-${link.targetSlug}`}
                    style={{ borderBottom: '1px solid #f3f4f6' }}
                  >
                    <td style={{ padding: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      {page.sourceSlug}
                    </td>
                    <td style={{ padding: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      {link.targetPath}
                    </td>
                    <td style={{ padding: '0.5rem', fontSize: '0.8rem' }}>{link.reason}</td>
                    <td style={{ padding: '0.5rem' }}>{link.score}</td>
                    <td style={{ padding: '0.5rem', color: '#22c55e' }}>
                      +{link.expectedImprovement}
                    </td>
                    <td style={{ padding: '0.5rem' }}>
                      {link.autoFixCandidate ? (
                        <span style={{ color: '#22c55e', fontWeight: 600 }}>Safe</span>
                      ) : (
                        <span style={{ color: '#999' }}>Review</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

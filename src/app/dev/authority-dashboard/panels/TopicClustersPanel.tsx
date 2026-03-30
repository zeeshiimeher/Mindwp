/**
 * Topic Clusters Panel
 *
 * Shows: strong / medium / weak topic cluster tables.
 */

import type { TopicScore } from '@/lib/dev/authorityAnalyzer';

const STRENGTH_COLORS: Record<string, string> = {
  strong: '#22c55e',
  medium: '#eab308',
  weak: '#ef4444',
};

interface Props {
  clusters: Record<string, TopicScore[]>;
}

export function TopicClustersPanel({ clusters }: Props) {
  return (
    <>
      <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
        Topic Clusters
      </h2>
      {(['strong', 'medium', 'weak'] as const).map(level => (
        <div key={level} style={{ marginBottom: '1.5rem' }}>
          <h3
            style={{
              color: STRENGTH_COLORS[level],
              textTransform: 'capitalize',
              marginBottom: '0.5rem',
            }}
          >
            {level} ({clusters[level]?.length ?? 0})
          </h3>
          {clusters[level]?.length > 0 ? (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                  <th style={{ padding: '0.5rem' }}>Topic</th>
                  <th style={{ padding: '0.5rem' }}>Score</th>
                  <th style={{ padding: '0.5rem' }}>Level</th>
                  <th style={{ padding: '0.5rem' }}>Blog</th>
                  <th style={{ padding: '0.5rem' }}>Resource</th>
                  <th style={{ padding: '0.5rem' }}>Service</th>
                  <th style={{ padding: '0.5rem' }}>Industry</th>
                  <th style={{ padding: '0.5rem' }}>Case Study</th>
                </tr>
              </thead>
              <tbody>
                {clusters[level].map(s => (
                  <tr key={s.topic} style={{ borderBottom: '1px solid #f3f4f6' }}>
                    <td style={{ padding: '0.5rem', fontWeight: 500 }}>{s.topic}</td>
                    <td style={{ padding: '0.5rem' }}>{s.score}</td>
                    <td style={{ padding: '0.5rem' }}>{s.level}</td>
                    <td style={{ padding: '0.5rem' }}>{s.blogCount}</td>
                    <td style={{ padding: '0.5rem' }}>{s.resourceCount}</td>
                    <td style={{ padding: '0.5rem' }}>{s.serviceCount}</td>
                    <td style={{ padding: '0.5rem' }}>{s.industryCount}</td>
                    <td style={{ padding: '0.5rem' }}>{s.caseStudyCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p style={{ color: '#999', fontSize: '0.875rem' }}>None</p>
          )}
        </div>
      ))}
    </>
  );
}

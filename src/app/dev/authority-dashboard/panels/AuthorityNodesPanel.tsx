/**
 * Authority Nodes Panel
 *
 * Shows: top authority nodes table + orphan/weak nodes table.
 */

import type { AuthorityNode } from '@/lib/dev/authorityAnalyzer';

interface Props {
  topNodes: AuthorityNode[];
  orphans: AuthorityNode[];
}

export function AuthorityNodesPanel({ topNodes, orphans }: Props) {
  return (
    <>
      {/* Top Authority Nodes */}
      <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
        Top Authority Nodes
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
            <th style={{ padding: '0.5rem' }}>ID</th>
            <th style={{ padding: '0.5rem' }}>Type</th>
            <th style={{ padding: '0.5rem' }}>Health</th>
          </tr>
        </thead>
        <tbody>
          {topNodes.map(n => (
            <tr key={n.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                {n.id}
              </td>
              <td style={{ padding: '0.5rem' }}>{n.type}</td>
              <td style={{ padding: '0.5rem', color: '#22c55e' }}>{n.health}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Orphan & Weak Nodes */}
      {orphans.length > 0 && (
        <>
          <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
            Orphan &amp; Weak Nodes ({orphans.length})
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem' }}>ID</th>
                <th style={{ padding: '0.5rem' }}>Type</th>
                <th style={{ padding: '0.5rem' }}>Health</th>
              </tr>
            </thead>
            <tbody>
              {orphans.map(n => (
                <tr key={n.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.5rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                    {n.id}
                  </td>
                  <td style={{ padding: '0.5rem' }}>{n.type}</td>
                  <td style={{ padding: '0.5rem', color: '#ef4444' }}>{n.health}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

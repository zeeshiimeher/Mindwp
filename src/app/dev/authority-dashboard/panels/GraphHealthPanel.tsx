import type { GraphHealthData } from '@/lib/dev/systemMonitor';

const STATUS_COLORS = {
  healthy: '#22c55e',
  warning: '#eab308',
  critical: '#ef4444',
} as const;

function getStatus(empty: number, weak: number): keyof typeof STATUS_COLORS {
  if (empty > 0) return 'critical';
  if (weak > 0) return 'warning';
  return 'healthy';
}

export function GraphHealthPanel({ data }: { data: GraphHealthData }) {
  const status = getStatus(data.emptyNodes, data.weakNodes);

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        padding: '1.25rem',
        marginBottom: '1.5rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: STATUS_COLORS[status],
            display: 'inline-block',
          }}
        />
        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Graph Health</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{data.totalNodes}</div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Total Nodes</div>
        </div>
        <div>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: data.emptyNodes > 0 ? '#ef4444' : '#22c55e',
            }}
          >
            {data.emptyNodes}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Empty (0 related)</div>
        </div>
        <div>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: data.weakNodes > 0 ? '#eab308' : '#22c55e',
            }}
          >
            {data.weakNodes}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Weak (&lt;2 related)</div>
        </div>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{data.avgRelated}</div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Avg Related/Node</div>
        </div>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
            <th style={{ textAlign: 'left', padding: '0.4rem' }}>Type</th>
            <th style={{ textAlign: 'right', padding: '0.4rem' }}>Total</th>
            <th style={{ textAlign: 'right', padding: '0.4rem' }}>Empty</th>
            <th style={{ textAlign: 'right', padding: '0.4rem' }}>Weak</th>
          </tr>
        </thead>
        <tbody>
          {data.byType.map(row => (
            <tr key={row.type} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '0.4rem' }}>{row.type}</td>
              <td style={{ textAlign: 'right', padding: '0.4rem' }}>{row.total}</td>
              <td
                style={{
                  textAlign: 'right',
                  padding: '0.4rem',
                  color: row.empty > 0 ? '#ef4444' : undefined,
                }}
              >
                {row.empty}
              </td>
              <td
                style={{
                  textAlign: 'right',
                  padding: '0.4rem',
                  color: row.weak > 0 ? '#eab308' : undefined,
                }}
              >
                {row.weak}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

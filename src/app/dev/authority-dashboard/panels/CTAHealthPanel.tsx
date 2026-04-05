import type { CTAHealthData } from '@/lib/dev/systemMonitor';

export function CTAHealthPanel({ data }: { data: CTAHealthData }) {
  const pctWithIntent =
    data.totalPages > 0 ? Math.round((data.withIntent / data.totalPages) * 100) : 0;

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
            background: data.withoutIntent === 0 ? '#22c55e' : '#eab308',
            display: 'inline-block',
          }}
        />
        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>CTA Health</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{pctWithIntent}%</div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Intent Coverage</div>
        </div>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#22c55e' }}>
            {data.withIntent}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>With Intent</div>
        </div>
        <div>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: data.withoutIntent > 0 ? '#eab308' : '#22c55e',
            }}
          >
            {data.withoutIntent}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Missing Intent</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '0.85rem', margin: '0 0 0.5rem', color: '#374151' }}>
            Intent Distribution
          </h3>
          {data.intentDistribution.map(row => (
            <div
              key={row.intent}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                padding: '0.2rem 0',
              }}
            >
              <span style={{ color: '#6b7280' }}>{row.intent}</span>
              <span style={{ fontWeight: 600 }}>{row.count}</span>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{ fontSize: '0.85rem', margin: '0 0 0.5rem', color: '#374151' }}>
            CTA Routing
          </h3>
          {data.routingBreakdown.map(row => (
            <div
              key={row.targetType}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                padding: '0.2rem 0',
              }}
            >
              <span style={{ color: '#6b7280' }}>→ {row.targetType}</span>
              <span style={{ fontWeight: 600 }}>{row.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { ValidatorStatusData } from '@/lib/dev/systemMonitor';

function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

export function ValidatorStatusPanel({ data }: { data: ValidatorStatusData | null }) {
  if (!data) {
    return (
      <div
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: 8,
          padding: '1.25rem',
          marginBottom: '1.5rem',
        }}
      >
        <h2 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem' }}>System Integrity</h2>
        <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
          No validation results found. Run <code>node scripts/core/validate-all.mjs</code> to
          generate.
        </p>
      </div>
    );
  }

  const allPassed = data.blockingFailed === 0;

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
            background: allPassed ? '#22c55e' : '#ef4444',
            display: 'inline-block',
          }}
        />
        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>System Integrity</h2>
        <span style={{ fontSize: '0.75rem', color: '#9ca3af', marginLeft: 'auto' }}>
          {new Date(data.generatedAt).toLocaleString()}
        </span>
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
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#22c55e' }}>{data.passed}</div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Passed</div>
        </div>
        <div>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: data.blockingFailed > 0 ? '#ef4444' : '#22c55e',
            }}
          >
            {data.blockingFailed}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Blocking Failed</div>
        </div>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{data.total}</div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Total</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.25rem' }}>
        {data.validators.map(v => (
          <div
            key={v.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              padding: '0.25rem 0.4rem',
              borderRadius: 4,
              background: v.status === 'pass' ? '#f0fdf4' : '#fef2f2',
            }}
          >
            <span>{v.status === 'pass' ? '✓' : '✗'}</span>
            <span style={{ flex: 1 }}>{v.name}</span>
            <span style={{ color: '#9ca3af', fontSize: '0.7rem' }}>
              {formatDuration(v.duration)}
            </span>
            {v.blocking && v.status === 'fail' && (
              <span style={{ color: '#ef4444', fontWeight: 600, fontSize: '0.65rem' }}>
                BLOCKING
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

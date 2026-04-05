import type { ContentHealthData } from '@/lib/dev/systemMonitor';

export function ContentHealthPanel({ data }: { data: ContentHealthData }) {
  const hasGaps =
    data.missingSystems.length > 0 ||
    data.missingTopics.length > 0 ||
    data.missingIndustries.length > 0;

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
            background: hasGaps ? '#eab308' : '#22c55e',
            display: 'inline-block',
          }}
        />
        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Content Coverage</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{data.totalContent}</div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Total Content</div>
        </div>
        <div>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: data.missingSystems.length > 0 ? '#ef4444' : '#22c55e',
            }}
          >
            {data.missingSystems.length}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Missing Systems</div>
        </div>
        <div>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: data.missingTopics.length > 0 ? '#eab308' : '#22c55e',
            }}
          >
            {data.missingTopics.length}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Missing Topics</div>
        </div>
        <div>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: data.missingIndustries.length > 0 ? '#eab308' : '#22c55e',
            }}
          >
            {data.missingIndustries.length}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Missing Industries</div>
        </div>
        <div>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color:
                data.industryCoveragePercent >= 90
                  ? '#22c55e'
                  : data.industryCoveragePercent >= 70
                    ? '#eab308'
                    : '#ef4444',
            }}
          >
            {data.industryCoveragePercent}%
          </div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Industry Coverage</div>
        </div>
      </div>

      {data.missingSystems.length > 0 && (
        <details style={{ marginBottom: '0.75rem' }}>
          <summary
            style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}
          >
            Missing Systems ({data.missingSystems.length})
          </summary>
          <div style={{ maxHeight: 200, overflowY: 'auto', marginTop: '0.4rem' }}>
            {data.missingSystems.map(item => (
              <div
                key={`${item.type}:${item.slug}`}
                style={{ fontSize: '0.75rem', color: '#6b7280', padding: '0.15rem 0' }}
              >
                <span style={{ color: '#9ca3af' }}>{item.type}/</span>
                {item.slug}
              </div>
            ))}
          </div>
        </details>
      )}

      {data.missingTopics.length > 0 && (
        <details style={{ marginBottom: '0.75rem' }}>
          <summary
            style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}
          >
            Missing Topics ({data.missingTopics.length})
          </summary>
          <div style={{ maxHeight: 200, overflowY: 'auto', marginTop: '0.4rem' }}>
            {data.missingTopics.map(item => (
              <div
                key={`${item.type}:${item.slug}`}
                style={{ fontSize: '0.75rem', color: '#6b7280', padding: '0.15rem 0' }}
              >
                <span style={{ color: '#9ca3af' }}>{item.type}/</span>
                {item.slug}
              </div>
            ))}
          </div>
        </details>
      )}

      {data.missingIndustries.length > 0 && (
        <details>
          <summary
            style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}
          >
            Missing Industries ({data.missingIndustries.length})
          </summary>
          <div style={{ maxHeight: 200, overflowY: 'auto', marginTop: '0.4rem' }}>
            {data.missingIndustries.map(item => (
              <div
                key={`${item.type}:${item.slug}`}
                style={{ fontSize: '0.75rem', color: '#6b7280', padding: '0.15rem 0' }}
              >
                <span style={{ color: '#9ca3af' }}>{item.type}/</span>
                {item.slug}
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

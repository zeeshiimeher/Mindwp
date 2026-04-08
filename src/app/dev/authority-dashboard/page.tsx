import { readSystemDashboardData } from '@/lib/dev/system-report';

export const dynamic = 'force-dynamic';

const cardStyle = {
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  padding: '1.25rem',
  marginBottom: '1.5rem',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '1rem',
};

function formatDuration(duration: number | undefined) {
  if (!duration || Number.isNaN(duration)) {
    return 'n/a';
  }

  if (duration < 1000) {
    return `${Math.round(duration)}ms`;
  }

  return `${(duration / 1000).toFixed(1)}s`;
}

function formatTimestamp(value: string | undefined) {
  if (!value) {
    return 'n/a';
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return 'n/a';
  }

  return date.toLocaleString();
}

function StatusChip({ status }: { status: 'clean' | 'warning' | 'broken' }) {
  const palette =
    status === 'clean'
      ? { bg: '#dcfce7', fg: '#166534' }
      : status === 'warning'
        ? { bg: '#fef3c7', fg: '#92400e' }
        : { bg: '#fee2e2', fg: '#991b1b' };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 999,
        padding: '0.35rem 0.75rem',
        fontSize: '0.8rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        background: palette.bg,
        color: palette.fg,
      }}
    >
      {status}
    </span>
  );
}

function IssueList({
  title,
  items,
  emptyLabel,
}: {
  title: string;
  items: Array<{ source: string; message: string; count: number; details?: string | null }>;
  emptyLabel: string;
}) {
  return (
    <section style={cardStyle}>
      <h2 style={{ fontSize: '1.1rem', margin: '0 0 0.9rem' }}>{title}</h2>
      {items.length === 0 ? (
        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>{emptyLabel}</p>
      ) : (
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {items.map(item => (
            <div
              key={`${item.source}:${item.message}`}
              style={{ border: '1px solid #f3f4f6', borderRadius: 6, padding: '0.85rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <strong style={{ fontSize: '0.9rem' }}>{item.message}</strong>
                <span style={{ color: '#6b7280', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                  {item.count}
                </span>
              </div>
              <div style={{ marginTop: '0.35rem', color: '#6b7280', fontSize: '0.8rem' }}>
                {item.source}
              </div>
              {item.details ? (
                <div style={{ marginTop: '0.35rem', color: '#9ca3af', fontSize: '0.75rem' }}>
                  {item.details}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default async function AuthorityDashboardPage() {
  const { systemReport, systemState, systemDrift, topicAuthority, contentGaps, testResults } =
    readSystemDashboardData();

  if (!systemReport) {
    return (
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '2rem', fontFamily: 'system-ui' }}>
        <h1 style={{ fontSize: '1.75rem', margin: '0 0 0.25rem' }}>System Health</h1>
        <p style={{ color: '#666', marginBottom: '2rem', fontSize: '0.9rem' }}>
          Run <code>npm run system:report</code> to generate the dashboard source files.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1060, margin: '0 auto', padding: '2rem', fontFamily: 'system-ui' }}>
      <div style={{ ...cardStyle, display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', margin: '0 0 0.25rem' }}>System Health</h1>
          <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
            Report-driven visualization layer for system status and priority actions.
          </p>
        </div>
        <StatusChip status={systemReport.status} />
      </div>

      <section style={cardStyle}>
        <h2 style={{ fontSize: '1.1rem', margin: '0 0 0.9rem' }}>System Status</h2>
        <div style={gridStyle}>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>{systemReport.blocking.count}</div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Blocking Issues</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>{systemReport.advisory.count}</div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Advisory Issues</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {systemState?.graph?.nodeCount ?? 0}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Graph Nodes</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {systemDrift?.driftCount ?? 0}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Drift Items</div>
          </div>
        </div>
      </section>

      <section style={cardStyle}>
        <h2 style={{ fontSize: '1.1rem', margin: '0 0 0.9rem' }}>Test Health</h2>
        {!testResults ? (
          <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>
            Run <code>npm run test:all</code> to generate the test health snapshot.
          </p>
        ) : (
          <>
            <div style={gridStyle}>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>{testResults.passed}</div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Passed Tests</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>{testResults.failed}</div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Failed Tests</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>{testResults.skipped}</div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Skipped Tests</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
                  {testResults.validators?.blockingFailed ?? 0}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>
                  Blocking Validator Failures
                </div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
                  {formatDuration(testResults.duration)}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Last Run Duration</div>
              </div>
            </div>

            <div style={{ marginTop: '1rem', display: 'grid', gap: '0.75rem' }}>
              {Object.entries(testResults.categories).map(([layer, summary]) => (
                <div
                  key={layer}
                  style={{
                    border: '1px solid #f3f4f6',
                    borderRadius: 6,
                    padding: '0.85rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div
                      style={{ fontWeight: 700, fontSize: '0.92rem', textTransform: 'capitalize' }}
                    >
                      {layer}
                    </div>
                    <div style={{ color: '#6b7280', fontSize: '0.8rem' }}>
                      {summary.failed} failed, {summary.passed} passed, {summary.skipped} skipped
                    </div>
                  </div>
                  <div style={{ color: '#6b7280', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                    {formatDuration(summary.duration)}
                  </div>
                </div>
              ))}
            </div>

            <p style={{ margin: '1rem 0 0', color: '#6b7280', fontSize: '0.85rem' }}>
              Last run: {formatTimestamp(testResults.lastRunTimestamp)}
            </p>
          </>
        )}
      </section>

      <IssueList
        title='Blocking Issues'
        items={systemReport.blocking.items}
        emptyLabel='No blocking issues.'
      />

      <IssueList
        title='Advisory Issues'
        items={systemReport.advisory.items}
        emptyLabel='No advisory issues.'
      />

      <section style={cardStyle}>
        <h2 style={{ fontSize: '1.1rem', margin: '0 0 0.9rem' }}>Content Health</h2>
        <div style={gridStyle}>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {systemReport.content.missing_system}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Missing System</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {systemReport.content.missing_metadata}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Missing Metadata</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {systemReport.conversion.invalid_contact_links}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>CTA Issues</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {topicAuthority?.averageScore ?? 0}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Avg Topic Authority</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {contentGaps?.topicGaps?.length ?? 0}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Topic Gaps</div>
          </div>
        </div>
      </section>

      <section style={cardStyle}>
        <h2 style={{ fontSize: '1.1rem', margin: '0 0 0.9rem' }}>Conversion Health</h2>
        <div style={gridStyle}>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {systemReport.conversion.cta_missing_system}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>CTA Missing System</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {systemReport.conversion.cta_missing_source}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>CTA Missing Source</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {systemReport.conversion.invalid_contact_links}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Invalid Contact Links</div>
          </div>
        </div>
      </section>

      <section style={cardStyle}>
        <h2 style={{ fontSize: '1.1rem', margin: '0 0 0.9rem' }}>Graph Health</h2>
        <div style={gridStyle}>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {systemReport.graph.invalid_edges}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Invalid Edges</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {systemReport.graph.orphan_nodes}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Orphan Nodes</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {systemState?.graph?.edgeCount ?? 0}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Authority Edges</div>
          </div>
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>
              {contentGaps?.stats?.topics ?? 0}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>Topics Analyzed</div>
          </div>
        </div>
      </section>

      <section style={cardStyle}>
        <h2 style={{ fontSize: '1.1rem', margin: '0 0 0.9rem' }}>Priority Actions</h2>
        {systemReport.priority.length === 0 ? (
          <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>No priority actions.</p>
        ) : (
          <ol style={{ margin: 0, paddingLeft: '1.1rem' }}>
            {systemReport.priority.slice(0, 5).map(item => (
              <li key={item} style={{ marginBottom: '0.5rem' }}>
                {item}
              </li>
            ))}
          </ol>
        )}
      </section>

      <section style={cardStyle}>
        <h2 style={{ fontSize: '1.1rem', margin: '0 0 0.9rem' }}>Summary</h2>
        <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
          {systemReport.summary.map(item => (
            <li key={item} style={{ marginBottom: '0.5rem' }}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

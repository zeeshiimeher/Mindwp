import type { ReactNode } from 'react';

import {
  buildRouteInventory,
  getInventoryMetadata,
  type RouteInventoryEntry,
} from '@/lib/content-quality/inventory';
import {
  getSystemIssues,
  readSystemDashboardData,
  type SystemIssue,
} from '@/lib/dev/system-report';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getInventoryMetadata('/dev/system-dashboard');
}

const CONTENT_KINDS = new Set([
  'service',
  'industry-category',
  'industry-detail',
  'feature',
  'blog',
  'resource',
  'case-study',
  'blog-category',
  'resource-category',
  'blog-topic',
  'topic-hub',
  'system-hub',
]);

const categoryTone = {
  seo: { bg: '#e0f2fe', border: '#7dd3fc', text: '#075985' },
  content: { bg: '#fef3c7', border: '#fbbf24', text: '#92400e' },
  authority: { bg: '#dcfce7', border: '#86efac', text: '#166534' },
} as const;

const severityTone = {
  critical: { bg: '#fee2e2', border: '#fca5a5', text: '#991b1b' },
  warning: { bg: '#fef3c7', border: '#fcd34d', text: '#92400e' },
} as const;

const statusTone: Record<string, { bg: string; border: string; text: string }> = {
  dominant: { bg: '#dcfce7', border: '#86efac', text: '#166534' },
  strong: { bg: '#dbeafe', border: '#93c5fd', text: '#1d4ed8' },
  growing: { bg: '#fef3c7', border: '#fcd34d', text: '#a16207' },
  weak: { bg: '#ffedd5', border: '#fdba74', text: '#c2410c' },
  gap: { bg: '#fee2e2', border: '#fca5a5', text: '#991b1b' },
};

function formatKind(kind: string) {
  return kind.replace(/-/g, ' ');
}

function summarizeInventory(entries: RouteInventoryEntry[]) {
  const contentEntries = entries.filter(entry => CONTENT_KINDS.has(entry.kind));

  return {
    totalRoutes: entries.length,
    indexableRoutes: entries.filter(entry => entry.indexable).length,
    contentRoutes: contentEntries.length,
    internalRoutes: entries.filter(entry => !entry.indexable).length,
    contentEntries,
  };
}

function getCriticalIssues(issues: SystemIssue[]) {
  return issues.filter(issue => issue.severity === 'critical');
}

function buildIssuePathCountMap(issues: SystemIssue[]) {
  const counts = new Map<string, number>();

  for (const issue of issues) {
    if (!issue.path) {
      continue;
    }

    counts.set(issue.path, (counts.get(issue.path) ?? 0) + 1);
  }

  return counts;
}

function buildFixSuggestions(issues: SystemIssue[]) {
  const fixes = new Map<
    string,
    {
      count: number;
      severity: 'critical' | 'warning';
      category: SystemIssue['category'];
      impact: string;
      targets: Set<string>;
    }
  >();

  for (const issue of issues) {
    const key = `${issue.category}::${issue.fix}`;
    const current = fixes.get(key);

    if (!current) {
      fixes.set(key, {
        count: 1,
        severity: issue.severity,
        category: issue.category,
        impact: issue.impact,
        targets: new Set(issue.path ? [issue.path] : []),
      });
      continue;
    }

    current.count += 1;
    if (issue.path) {
      current.targets.add(issue.path);
    }
    if (issue.severity === 'critical') {
      current.severity = 'critical';
    }
  }

  return [...fixes.entries()]
    .map(([key, value]) => {
      const [, fix] = key.split('::');
      return {
        ...value,
        fix,
        targets: [...value.targets].sort(),
      };
    })
    .sort((left, right) => {
      if (left.severity !== right.severity) {
        return left.severity === 'critical' ? -1 : 1;
      }

      return right.count - left.count;
    });
}

function estimateFixTime(count: number) {
  if (count <= 1) {
    return '5-10 min';
  }

  if (count <= 3) {
    return '10-20 min';
  }

  return '20-30 min';
}

function formatFixTarget(targets: string[]) {
  if (targets.length === 0) {
    return 'shared control-plane source';
  }

  if (targets.length === 1) {
    return targets[0];
  }

  const preview = targets.slice(0, 2).join(', ');
  return targets.length > 2 ? `${preview} +${targets.length - 2} more` : preview;
}

function Badge({
  children,
  tone,
}: {
  children: ReactNode;
  tone: { bg: string; border: string; text: string };
}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 999,
        border: `1px solid ${tone.border}`,
        background: tone.bg,
        color: tone.text,
        fontSize: '0.74rem',
        fontWeight: 700,
        letterSpacing: '0.02em',
        padding: '0.22rem 0.6rem',
        textTransform: 'capitalize',
      }}
    >
      {children}
    </span>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section
      style={{
        border: '1px solid #d6d3d1',
        borderRadius: 20,
        background: 'rgba(255,255,255,0.86)',
        boxShadow: '0 20px 60px rgba(41, 37, 36, 0.08)',
        padding: '1.25rem',
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <h2 style={{ margin: 0, fontSize: '1.12rem', color: '#1c1917' }}>{title}</h2>
        {description ? (
          <p
            style={{ margin: '0.4rem 0 0', color: '#57534e', fontSize: '0.9rem', lineHeight: 1.5 }}
          >
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export default async function SystemDashboardPage() {
  const { systemReport } = readSystemDashboardData();

  if (!systemReport) {
    return (
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem', fontFamily: 'system-ui' }}>
        <Section
          title='System Dashboard'
          description='Run the unified report pipeline first so the control plane has a deterministic data snapshot to render.'
        >
          <p style={{ margin: 0, color: '#57534e', fontSize: '0.95rem' }}>
            Run <code>npm run system:report</code> and reload this page.
          </p>
        </Section>
      </div>
    );
  }

  const inventory = await buildRouteInventory();
  const inventorySummary = summarizeInventory(inventory);
  const groupedIssues = getSystemIssues(systemReport);
  const allIssues = [...groupedIssues.seo, ...groupedIssues.content, ...groupedIssues.authority];
  const criticalIssues = systemReport.criticalIssues?.length
    ? systemReport.criticalIssues
    : getCriticalIssues(allIssues);
  const issuePathCounts = buildIssuePathCountMap(allIssues);
  const fixSuggestions = buildFixSuggestions(allIssues);
  const authorityScores = [...(systemReport.topicAuthority?.scores ?? [])].sort(
    (left, right) => left.score - right.score || left.topic.localeCompare(right.topic)
  );

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top left, rgba(251, 191, 36, 0.18), transparent 28%), radial-gradient(circle at top right, rgba(56, 189, 248, 0.16), transparent 26%), linear-gradient(180deg, #fafaf9 0%, #f5f5f4 100%)',
        color: '#1c1917',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem' }}>
        <header
          style={{
            marginBottom: '1.5rem',
            borderRadius: 28,
            border: '1px solid rgba(214, 211, 209, 0.9)',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.94), rgba(254,249,195,0.82) 42%, rgba(224,242,254,0.82))',
            boxShadow: '0 28px 80px rgba(41, 37, 36, 0.12)',
            padding: '1.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ maxWidth: 820 }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#a16207',
                }}
              >
                Deterministic Control Plane
              </div>
              <h1 style={{ margin: '0.45rem 0 0.4rem', fontSize: '2.2rem', lineHeight: 1.05 }}>
                System Dashboard
              </h1>
              <p style={{ margin: 0, color: '#57534e', fontSize: '1rem', lineHeight: 1.6 }}>
                One report-driven surface for health, grouped issues, authority reasoning, and
                inventory visibility.
              </p>
            </div>
            <Badge
              tone={
                systemReport.status === 'broken'
                  ? severityTone.critical
                  : systemReport.status === 'warning'
                    ? severityTone.warning
                    : categoryTone.authority
              }
            >
              {systemReport.status}
            </Badge>
          </div>
        </header>

        <div
          style={{
            display: 'grid',
            gap: '1rem',
            marginBottom: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          }}
        >
          {[
            { label: 'Critical Issues', value: criticalIssues.length, tone: severityTone.critical },
            {
              label: 'Warnings',
              value: allIssues.filter(issue => issue.severity === 'warning').length,
              tone: severityTone.warning,
            },
            {
              label: 'Inventory Routes',
              value: inventorySummary.totalRoutes,
              tone: categoryTone.content,
            },
            {
              label: 'Indexable Routes',
              value: inventorySummary.indexableRoutes,
              tone: categoryTone.seo,
            },
            {
              label: 'Authority Average',
              value: systemReport.topicAuthority.averageScore,
              tone: categoryTone.authority,
            },
            {
              label: 'Complete Topics',
              value: systemReport.topicAuthority.completeCoverageTopics,
              tone: categoryTone.authority,
            },
          ].map(card => (
            <div
              key={card.label}
              style={{
                borderRadius: 18,
                border: `1px solid ${card.tone.border}`,
                background: card.tone.bg,
                padding: '1rem',
              }}
            >
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: card.tone.text }}>
                {card.label}
              </div>
              <div
                style={{
                  marginTop: '0.4rem',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#1c1917',
                }}
              >
                {card.value}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            marginBottom: '1rem',
          }}
        >
          <Section
            title='Issue Breakdown'
            description='Grouped counts show where the system is failing, and whether the problem is blocking or advisory.'
          >
            <div style={{ display: 'grid', gap: '0.9rem' }}>
              {(['seo', 'content', 'authority'] as const).map(category => {
                const counts = systemReport.issue_counts[category];
                const tone = categoryTone[category];
                const topTitles = groupedIssues[category].slice(0, 2).map(issue => issue.title);

                return (
                  <div
                    key={category}
                    style={{
                      border: `1px solid ${tone.border}`,
                      background: tone.bg,
                      borderRadius: 16,
                      padding: '0.95rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            color: tone.text,
                            textTransform: 'capitalize',
                          }}
                        >
                          {category}
                        </div>
                        <div style={{ marginTop: '0.35rem', fontSize: '1.55rem', fontWeight: 800 }}>
                          {counts.total}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', fontSize: '0.84rem', color: '#44403c' }}>
                        <div>{counts.critical} critical</div>
                        <div>{counts.warning} warning</div>
                      </div>
                    </div>
                    {topTitles.length > 0 ? (
                      <div style={{ marginTop: '0.75rem', display: 'grid', gap: '0.35rem' }}>
                        {topTitles.map(title => (
                          <div key={title} style={{ fontSize: '0.82rem', color: '#44403c' }}>
                            {title}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ marginTop: '0.75rem', fontSize: '0.82rem', color: '#78716c' }}>
                        No grouped issues.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Section>

          <Section
            title='Fix Suggestions'
            description='These are the repeated fixes implied by the grouped issue model. The most frequent critical fixes stay at the top.'
          >
            {fixSuggestions.length === 0 ? (
              <div style={{ color: '#57534e', fontSize: '0.92rem' }}>
                No active fixes suggested. The control plane is clean.
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '0.8rem' }}>
                {fixSuggestions.slice(0, 8).map(suggestion => (
                  <div
                    key={`${suggestion.category}:${suggestion.fix}`}
                    style={{
                      border: '1px solid #e7e5e4',
                      borderRadius: 14,
                      padding: '0.9rem',
                      background: '#fff',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        alignItems: 'center',
                      }}
                    >
                      <Badge tone={severityTone[suggestion.severity]}>{suggestion.severity}</Badge>
                      <span style={{ fontSize: '0.78rem', color: '#78716c' }}>
                        {suggestion.count} issue(s)
                      </span>
                    </div>
                    <div
                      style={{
                        marginTop: '0.55rem',
                        fontWeight: 700,
                        color: '#1c1917',
                        lineHeight: 1.6,
                        fontSize: '0.9rem',
                      }}
                    >
                      [Fix] {suggestion.fix} {' → '} {formatFixTarget(suggestion.targets)} {' → '}
                      Impact: {suggestion.impact} {' → '} Time: {estimateFixTime(suggestion.count)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Section>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            marginBottom: '1rem',
          }}
        >
          <Section
            title='Critical Issues'
            description='Each issue is shown with why it matters and the deterministic fix path required to clear it.'
          >
            {criticalIssues.length === 0 ? (
              <div style={{ color: '#166534', fontSize: '0.95rem' }}>
                No critical issues. The current report is self-consistent and operationally clean.
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '0.9rem' }}>
                {criticalIssues.map(issue => (
                  <article
                    key={issue.id}
                    style={{
                      border: `1px solid ${severityTone.critical.border}`,
                      background: '#fff',
                      borderRadius: 16,
                      padding: '1rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '0.6rem',
                      }}
                    >
                      <Badge tone={severityTone[issue.severity]}>{issue.severity}</Badge>
                      <Badge tone={categoryTone[issue.category]}>{issue.category}</Badge>
                      <span style={{ fontSize: '0.78rem', color: '#78716c' }}>
                        {issue.entityType}/{issue.slug}
                      </span>
                    </div>
                    <h3 style={{ margin: 0, fontSize: '1rem' }}>{issue.title}</h3>
                    <p
                      style={{
                        margin: '0.5rem 0 0',
                        fontSize: '0.9rem',
                        color: '#44403c',
                        lineHeight: 1.6,
                      }}
                    >
                      {issue.description}
                    </p>
                    <div
                      style={{
                        marginTop: '0.7rem',
                        fontSize: '0.84rem',
                        color: '#57534e',
                        lineHeight: 1.5,
                      }}
                    >
                      <strong style={{ color: '#1c1917' }}>Impact:</strong> {issue.impact}
                    </div>
                    <div
                      style={{
                        marginTop: '0.45rem',
                        fontSize: '0.84rem',
                        color: '#57534e',
                        lineHeight: 1.5,
                      }}
                    >
                      <strong style={{ color: '#1c1917' }}>Fix:</strong> {issue.fix}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </Section>

          <Section
            title='System Health Summary'
            description='The summary stays compact, but every number is tied to a deterministic issue surface or inventory count.'
          >
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              {systemReport.summary.map(item => (
                <div
                  key={item}
                  style={{
                    borderRadius: 14,
                    border: '1px solid #e7e5e4',
                    background: '#fff',
                    padding: '0.9rem',
                    fontSize: '0.9rem',
                    color: '#44403c',
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </Section>
        </div>

        <Section
          title='Topic Authority'
          description='Reasons expose why a topic is healthy, growing, weak, or broken instead of reducing authority to a bare score.'
        >
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr
                  style={{ textAlign: 'left', color: '#57534e', borderBottom: '1px solid #d6d3d1' }}
                >
                  <th style={{ padding: '0 0 0.75rem' }}>Topic</th>
                  <th style={{ padding: '0 0 0.75rem' }}>Status</th>
                  <th style={{ padding: '0 0 0.75rem' }}>Score</th>
                  <th style={{ padding: '0 0 0.75rem' }}>Reasons</th>
                </tr>
              </thead>
              <tbody>
                {authorityScores.map(topic => {
                  const tone = statusTone[topic.status ?? 'gap'] ?? statusTone.gap;

                  return (
                    <tr
                      key={topic.topic}
                      style={{ borderBottom: '1px solid #e7e5e4', verticalAlign: 'top' }}
                    >
                      <td
                        style={{
                          padding: '0.9rem 0.75rem 0.9rem 0',
                          fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                        }}
                      >
                        {topic.topic}
                      </td>
                      <td style={{ padding: '0.9rem 0.75rem 0.9rem 0' }}>
                        <Badge tone={tone}>
                          {topic.status ?? topic.level?.toLowerCase() ?? 'gap'}
                        </Badge>
                      </td>
                      <td style={{ padding: '0.9rem 0.75rem 0.9rem 0', fontWeight: 700 }}>
                        {topic.score}
                      </td>
                      <td style={{ padding: '0.9rem 0' }}>
                        <div style={{ display: 'grid', gap: '0.32rem' }}>
                          {(topic.reasons ?? []).map(reason => (
                            <div
                              key={`${topic.topic}:${reason}`}
                              style={{ color: '#44403c', lineHeight: 1.5 }}
                            >
                              {reason}
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Section>

        <div style={{ height: '1rem' }} />

        <Section
          title='Content Inventory Table'
          description='Inventory is the single source of truth for route-level visibility. Issue counts are joined onto it directly from the unified system report.'
        >
          <div style={{ maxHeight: 540, overflow: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr
                  style={{
                    textAlign: 'left',
                    color: '#57534e',
                    borderBottom: '1px solid #d6d3d1',
                    position: 'sticky',
                    top: 0,
                    background: '#fafaf9',
                  }}
                >
                  <th style={{ padding: '0 0 0.8rem' }}>Path</th>
                  <th style={{ padding: '0 0 0.8rem' }}>Kind</th>
                  <th style={{ padding: '0 0 0.8rem' }}>Index</th>
                  <th style={{ padding: '0 0 0.8rem' }}>Topics</th>
                  <th style={{ padding: '0 0 0.8rem' }}>Systems</th>
                  <th style={{ padding: '0 0 0.8rem' }}>Issues</th>
                </tr>
              </thead>
              <tbody>
                {inventorySummary.contentEntries.map(entry => (
                  <tr key={entry.key} style={{ borderBottom: '1px solid #e7e5e4' }}>
                    <td style={{ padding: '0.8rem 0.75rem 0.8rem 0', color: '#1c1917' }}>
                      {entry.path}
                    </td>
                    <td
                      style={{
                        padding: '0.8rem 0.75rem 0.8rem 0',
                        color: '#57534e',
                        textTransform: 'capitalize',
                      }}
                    >
                      {formatKind(entry.kind)}
                    </td>
                    <td style={{ padding: '0.8rem 0.75rem 0.8rem 0' }}>
                      <Badge tone={entry.indexable ? categoryTone.authority : severityTone.warning}>
                        {entry.indexable ? 'index' : 'noindex'}
                      </Badge>
                    </td>
                    <td style={{ padding: '0.8rem 0.75rem 0.8rem 0', color: '#57534e' }}>
                      {entry.topics.length}
                    </td>
                    <td style={{ padding: '0.8rem 0.75rem 0.8rem 0', color: '#57534e' }}>
                      {entry.systems.length}
                    </td>
                    <td style={{ padding: '0.8rem 0' }}>
                      <span
                        style={{
                          fontWeight: 700,
                          color: issuePathCounts.get(entry.path) ? '#991b1b' : '#166534',
                        }}
                      >
                        {issuePathCounts.get(entry.path) ?? 0}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </div>
  );
}

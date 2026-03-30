'use client';

/**
 * Page Inspector
 *
 * Client component that displays single-page conversion inspection data.
 * Fetches data on demand via server action when a slug is selected.
 */

import { useCallback, useState, useTransition } from 'react';

import type { RewriteSuggestion } from '@/lib/dev/contentRewriteEngine';
import type { PageInspection } from '@/lib/dev/conversionPageInspector';
import type { FixChecklist } from '@/lib/dev/fixChecklistEngine';

import { getFixChecklistAction, getPageInspection, getRewriteSuggestion } from './actions';

interface Props {
  slugs: { slug: string; type: string; path: string }[];
}

export function PageInspector({ slugs }: Props) {
  const [selectedSlug, setSelectedSlug] = useState('');
  const [inspection, setInspection] = useState<PageInspection | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSelect = useCallback(
    (slug: string) => {
      setSelectedSlug(slug);
      if (!slug) {
        setInspection(null);
        return;
      }
      startTransition(async () => {
        const result = await getPageInspection(slug);
        setInspection(result);
      });
    },
    [startTransition]
  );

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Page Inspector</h2>

      {/* Slug Selector */}
      <select
        value={selectedSlug}
        onChange={e => handleSelect(e.target.value)}
        style={{
          padding: '0.5rem',
          fontSize: '0.875rem',
          borderRadius: 4,
          border: '1px solid #d1d5db',
          width: '100%',
          maxWidth: 400,
          marginBottom: '1rem',
        }}
      >
        <option value=''>Select a page to inspect…</option>
        {slugs.map(s => (
          <option key={s.slug} value={s.slug}>
            {s.path} ({s.type})
          </option>
        ))}
      </select>

      {isPending && <p style={{ color: '#666', fontSize: '0.875rem' }}>Loading inspection…</p>}

      {inspection && !isPending && <InspectionResult data={inspection} />}
    </div>
  );
}

function InspectionResult({ data }: { data: PageInspection }) {
  const {
    node,
    signals,
    conversionScore,
    linkHealth,
    linkSuggestions,
    uiSuggestions,
    simulation,
    guidedFlow,
  } = data;

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        padding: '1.5rem',
        marginTop: '0.5rem',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '1rem' }}>
        <code style={{ fontSize: '1rem', fontWeight: 600 }}>{node.path}</code>
        <span
          style={{
            marginLeft: '0.75rem',
            fontSize: '0.75rem',
            padding: '0.15rem 0.5rem',
            borderRadius: 4,
            background: '#e5e7eb',
            textTransform: 'uppercase',
          }}
        >
          {node.type}
        </span>
        {node.conversionGoal && (
          <span
            style={{
              marginLeft: '0.5rem',
              fontSize: '0.75rem',
              padding: '0.15rem 0.5rem',
              borderRadius: 4,
              background: '#dbeafe',
              color: '#1d4ed8',
            }}
          >
            goal: {node.conversionGoal}
          </span>
        )}
      </div>

      {/* Signals */}
      <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Conversion Signals</h3>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <SignalBadge label='CTA' active={signals.hasCTA} />
        <SignalBadge label='Service Link' active={signals.hasServiceLink} />
        <SignalBadge label='Journey Next Step' active={signals.hasJourneyNextStep} />
      </div>

      {/* Conversion Score */}
      <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Conversion Score</h3>
      <table
        style={{
          borderCollapse: 'collapse',
          fontSize: '0.8rem',
          marginBottom: '1rem',
          width: '100%',
          maxWidth: 400,
        }}
      >
        <tbody>
          <ScoreRow label='CTA Score' value={conversionScore.ctaScore} />
          <ScoreRow label='Service Link' value={conversionScore.serviceLinkScore} />
          <ScoreRow label='Journey' value={conversionScore.journeyScore} />
          <ScoreRow label='Authority' value={conversionScore.authorityScore} />
          <ScoreRow label='Total' value={conversionScore.totalScore} bold />
        </tbody>
      </table>
      <div
        style={{
          display: 'inline-block',
          fontSize: '0.75rem',
          padding: '0.15rem 0.5rem',
          borderRadius: 4,
          background:
            conversionScore.status === 'high'
              ? '#dcfce7'
              : conversionScore.status === 'medium'
                ? '#fef9c3'
                : '#fef2f2',
          color:
            conversionScore.status === 'high'
              ? '#166534'
              : conversionScore.status === 'medium'
                ? '#854d0e'
                : '#991b1b',
          fontWeight: 600,
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}
      >
        {conversionScore.status}
      </div>

      {/* Link Health */}
      <h3 style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: '0.5rem' }}>Link Health</h3>
      <div style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>
        {linkHealth.totalLinks} links | avg score {linkHealth.avgScore} |{' '}
        <span
          style={{
            fontWeight: 600,
            color:
              linkHealth.status === 'healthy'
                ? '#22c55e'
                : linkHealth.status === 'weak'
                  ? '#eab308'
                  : '#ef4444',
          }}
        >
          {linkHealth.status}
        </span>
      </div>
      {linkHealth.issues.length > 0 && (
        <ul
          style={{
            paddingLeft: '1.25rem',
            fontSize: '0.8rem',
            color: '#b91c1c',
            marginBottom: '0.5rem',
          }}
        >
          {linkHealth.issues.map(i => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      )}
      {linkHealth.suggestions.length > 0 && (
        <ul
          style={{
            paddingLeft: '1.25rem',
            fontSize: '0.8rem',
            color: '#1d4ed8',
            marginBottom: '1rem',
          }}
        >
          {linkHealth.suggestions.map(s => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}

      {/* Link Suggestions */}
      {linkSuggestions.suggestedLinks.length > 0 && (
        <>
          <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            Suggested Links ({linkSuggestions.suggestedLinks.length})
          </h3>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.8rem',
              marginBottom: '1rem',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.4rem' }}>Target</th>
                <th style={{ padding: '0.4rem' }}>Reason</th>
                <th style={{ padding: '0.4rem' }}>Score</th>
                <th style={{ padding: '0.4rem' }}>+Improvement</th>
                <th style={{ padding: '0.4rem' }}>Auto-Fix</th>
              </tr>
            </thead>
            <tbody>
              {linkSuggestions.suggestedLinks.map(link => (
                <tr key={link.targetSlug} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.4rem', fontFamily: 'monospace' }}>{link.targetPath}</td>
                  <td style={{ padding: '0.4rem' }}>{link.reason}</td>
                  <td style={{ padding: '0.4rem' }}>{link.score}</td>
                  <td style={{ padding: '0.4rem', color: '#22c55e' }}>
                    +{link.expectedImprovement}
                  </td>
                  <td style={{ padding: '0.4rem' }}>
                    {link.autoFixCandidate ? (
                      <span style={{ color: '#22c55e', fontWeight: 600 }}>Safe</span>
                    ) : (
                      <span style={{ color: '#999' }}>Review</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* UI Suggestions */}
      {uiSuggestions.length > 0 && (
        <>
          <h3 style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
            Suggestions ({uiSuggestions.length})
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {uiSuggestions.map(s => (
              <div
                key={s.id}
                style={{
                  padding: '0.75rem',
                  borderRadius: 6,
                  borderLeft: `4px solid ${
                    s.severity === 'critical'
                      ? '#ef4444'
                      : s.severity === 'warning'
                        ? '#eab308'
                        : '#3b82f6'
                  }`,
                  background:
                    s.severity === 'critical'
                      ? '#fef2f2'
                      : s.severity === 'warning'
                        ? '#fefce8'
                        : '#eff6ff',
                  fontSize: '0.8rem',
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{s.title}</div>
                <div style={{ color: '#555', marginBottom: '0.25rem' }}>{s.description}</div>
                <div style={{ color: '#1d4ed8' }}>{s.action}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Fix Simulation */}
      {simulation.fixes.length > 0 && (
        <>
          <h3 style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
            Fix Simulation
          </h3>
          <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem' }}>
            Current: {simulation.currentTotal} | Max possible: {simulation.maxPossibleScore}
          </div>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.8rem',
              marginBottom: '1rem',
              maxWidth: 500,
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '0.4rem' }}>Fix</th>
                <th style={{ padding: '0.4rem' }}>Current</th>
                <th style={{ padding: '0.4rem' }}>After</th>
                <th style={{ padding: '0.4rem' }}>+Gain</th>
              </tr>
            </thead>
            <tbody>
              {simulation.fixes.map(f => (
                <tr key={f.fixType} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '0.4rem' }}>{f.label}</td>
                  <td style={{ padding: '0.4rem' }}>{f.currentScore}</td>
                  <td style={{ padding: '0.4rem' }}>{f.simulatedScore}</td>
                  <td style={{ padding: '0.4rem', color: '#22c55e', fontWeight: 600 }}>
                    +{f.improvement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Guided Flow */}
      {guidedFlow.steps.length > 0 && (
        <>
          <h3 style={{ fontSize: '0.9rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
            Optimization Guide ({guidedFlow.steps.length} steps)
          </h3>
          <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem' }}>
            Projected total after all steps: {guidedFlow.projectedTotal} (from{' '}
            {guidedFlow.currentTotal})
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {guidedFlow.steps.map(step => (
              <div
                key={step.stepNumber}
                style={{
                  padding: '0.75rem',
                  borderRadius: 6,
                  border: '1px solid #e5e7eb',
                  fontSize: '0.8rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.25rem',
                  }}
                >
                  <span style={{ fontWeight: 600 }}>
                    Step {step.stepNumber}: {step.label}
                  </span>
                  <span style={{ color: '#22c55e', fontWeight: 600 }}>+{step.improvement} pts</span>
                </div>
                <div style={{ color: '#555', marginBottom: '0.25rem' }}>{step.instructions}</div>
                <div style={{ color: '#999', fontSize: '0.75rem' }}>
                  Cumulative score: {step.cumulativeTotal}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Rewrite Suggestions & Fix Checklist */}
      <RewritePanel slug={node.slug} />
      <ChecklistPanel slug={node.slug} />
    </div>
  );
}

function RewritePanel({ slug }: { slug: string }) {
  const [rewrite, setRewrite] = useState<RewriteSuggestion | null>(null);
  const [isPending, startTransition] = useTransition();
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    startTransition(async () => {
      const result = await getRewriteSuggestion(slug);
      setRewrite(result);
      setLoaded(true);
    });
  }, [slug, startTransition]);

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Rewrite Suggestions</h3>
      {!loaded && (
        <button
          onClick={handleLoad}
          disabled={isPending}
          style={{
            padding: '0.4rem 1rem',
            fontSize: '0.8rem',
            borderRadius: 4,
            border: '1px solid #3b82f6',
            background: '#eff6ff',
            color: '#1d4ed8',
            cursor: isPending ? 'wait' : 'pointer',
          }}
        >
          {isPending ? 'Generating…' : 'Generate Rewrite Suggestions'}
        </button>
      )}
      {loaded && rewrite && (
        <div style={{ fontSize: '0.8rem' }}>
          {rewrite.issues.length > 0 && (
            <>
              <h4 style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>Issues</h4>
              {rewrite.issues.map(issue => (
                <div
                  key={issue.element}
                  style={{
                    padding: '0.5rem',
                    marginBottom: '0.25rem',
                    borderLeft: `3px solid ${issue.impact === 'high' ? '#ef4444' : issue.impact === 'medium' ? '#eab308' : '#9ca3af'}`,
                    background: '#fafafa',
                    borderRadius: 4,
                  }}
                >
                  <strong>{issue.element}</strong> ({issue.status}) — {issue.explanation}
                </div>
              ))}
            </>
          )}
          {rewrite.structureSuggestions.length > 0 && (
            <>
              <h4 style={{ fontSize: '0.85rem', margin: '0.75rem 0 0.25rem' }}>
                Structure Changes
              </h4>
              {rewrite.structureSuggestions.map(ss => (
                <div
                  key={ss.element}
                  style={{
                    padding: '0.5rem',
                    marginBottom: '0.25rem',
                    background: '#f0f9ff',
                    borderRadius: 4,
                  }}
                >
                  <strong>{ss.element}</strong> → {ss.placement}
                  <div style={{ color: '#666' }}>{ss.reason}</div>
                </div>
              ))}
            </>
          )}
          {rewrite.sampleRewrites.length > 0 && (
            <>
              <h4 style={{ fontSize: '0.85rem', margin: '0.75rem 0 0.25rem' }}>
                Sample Text ({rewrite.sampleRewrites.length})
              </h4>
              {rewrite.sampleRewrites.map(sr => (
                <div
                  key={sr.label}
                  style={{
                    padding: '0.75rem',
                    marginBottom: '0.5rem',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: 6,
                  }}
                >
                  <div style={{ fontWeight: 600, marginBottom: '0.15rem' }}>{sr.label}</div>
                  <div style={{ color: '#666', marginBottom: '0.25rem', fontSize: '0.75rem' }}>
                    {sr.context}
                  </div>
                  <div
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                      background: '#f1f5f9',
                      padding: '0.5rem',
                      borderRadius: 4,
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {sr.sample}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
      {loaded && !rewrite && (
        <div style={{ fontSize: '0.8rem', color: '#666' }}>No rewrite suggestions available.</div>
      )}
    </div>
  );
}

function ChecklistPanel({ slug }: { slug: string }) {
  const [checklist, setChecklist] = useState<FixChecklist | null>(null);
  const [isPending, startTransition] = useTransition();
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    startTransition(async () => {
      const result = await getFixChecklistAction(slug);
      setChecklist(result);
      setLoaded(true);
    });
  }, [slug, startTransition]);

  const priorityColor: Record<string, string> = {
    high: '#ef4444',
    medium: '#eab308',
    low: '#9ca3af',
  };

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Fix Checklist</h3>
      {!loaded && (
        <button
          onClick={handleLoad}
          disabled={isPending}
          style={{
            padding: '0.4rem 1rem',
            fontSize: '0.8rem',
            borderRadius: 4,
            border: '1px solid #22c55e',
            background: '#f0fdf4',
            color: '#166534',
            cursor: isPending ? 'wait' : 'pointer',
          }}
        >
          {isPending ? 'Generating…' : 'Generate Fix Checklist'}
        </button>
      )}
      {loaded && checklist && (
        <div style={{ fontSize: '0.8rem' }}>
          <div style={{ marginBottom: '0.5rem', color: '#666' }}>
            Score: {checklist.currentScore}/100 | {checklist.highCount} high,{' '}
            {checklist.mediumCount} medium, {checklist.lowCount} low
          </div>
          {checklist.items.map(item => (
            <div
              key={item.id}
              style={{
                padding: '0.75rem',
                marginBottom: '0.5rem',
                borderLeft: `4px solid ${priorityColor[item.priority] ?? '#9ca3af'}`,
                background: '#fafafa',
                borderRadius: 6,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600 }}>{item.title}</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    color: priorityColor[item.priority],
                    fontWeight: 600,
                  }}
                >
                  {item.priority}
                </span>
              </div>
              <div style={{ color: '#555', marginTop: '0.15rem' }}>{item.description}</div>
              <div style={{ color: '#1d4ed8', marginTop: '0.25rem' }}>{item.action}</div>
              <div style={{ color: '#999', fontSize: '0.7rem', marginTop: '0.15rem' }}>
                {item.category} · {item.expectedImprovement}
              </div>
            </div>
          ))}
        </div>
      )}
      {loaded && !checklist && (
        <div style={{ fontSize: '0.8rem', color: '#666' }}>No checklist available.</div>
      )}
    </div>
  );
}

function SignalBadge({ label, active }: { label: string; active: boolean }) {
  return (
    <span
      style={{
        fontSize: '0.75rem',
        padding: '0.2rem 0.6rem',
        borderRadius: 4,
        background: active ? '#dcfce7' : '#fef2f2',
        color: active ? '#166534' : '#991b1b',
        fontWeight: 600,
      }}
    >
      {active ? '\u2713' : '\u2717'} {label}
    </span>
  );
}

function ScoreRow({ label, value, bold }: { label: string; value: number; bold?: boolean }) {
  return (
    <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
      <td style={{ padding: '0.3rem 0.5rem', fontWeight: bold ? 700 : 400 }}>{label}</td>
      <td style={{ padding: '0.3rem 0.5rem', fontWeight: bold ? 700 : 400, textAlign: 'right' }}>
        {value}
      </td>
    </tr>
  );
}

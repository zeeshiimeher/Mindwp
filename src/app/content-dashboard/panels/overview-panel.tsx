import type { GraphDiagnostics, GraphNode, TopicScore } from '../dashboard';
import type { TopicGap } from '../dashboard';

import { Card, NoData, Stat } from './shared';

interface Props {
  contentGaps: {
    stats: {
      totalNodes: number;
      blogs: number;
      resources: number;
      industries: number;
      caseStudies: number;
      topics: number;
    };
    topicGaps: TopicGap[];
  } | null;
  authorityScores: {
    topicsAnalyzed: number;
    averageScore: number;
    scores: TopicScore[];
  } | null;
  authorityMap: {
    nodes: GraphNode[];
    diagnostics: GraphDiagnostics;
  } | null;
}

export function OverviewPanel({ contentGaps, authorityScores, authorityMap }: Props) {
  const stats = contentGaps?.stats;

  return (
    <Card title='Content Overview'>
      {!stats && !authorityScores ? (
        <NoData report='npm run generate:content-gaps' />
      ) : (
        <div className='space-y-6'>
          {/* Top row stats */}
          <div className='grid grid-cols-3 gap-4 sm:grid-cols-6'>
            <Stat label='Blogs' value={stats?.blogs ?? '—'} color='text-blue-600' />
            <Stat label='Resources' value={stats?.resources ?? '—'} color='text-purple-600' />
            <Stat label='Industries' value={stats?.industries ?? '—'} color='text-green-600' />
            <Stat label='Case Studies' value={stats?.caseStudies ?? '—'} color='text-red-600' />
            <Stat label='Topics' value={stats?.topics ?? '—'} color='text-teal-600' />
            <Stat
              label='Graph Nodes'
              value={authorityMap?.nodes.length ?? '—'}
              color='text-gray-700'
            />
          </div>

          {/* Authority score summary */}
          {authorityScores && (
            <div className='rounded-lg bg-gray-50 p-4'>
              <div className='flex items-center justify-between'>
                <div>
                  <div className='text-sm font-medium text-gray-600'>Average Authority Score</div>
                  <div className='mt-1 text-3xl font-bold text-gray-900'>
                    {authorityScores.averageScore}
                    <span className='text-lg text-gray-400'>/100</span>
                  </div>
                </div>
                <div className='text-right'>
                  <div className='text-sm text-gray-500'>
                    {authorityScores.topicsAnalyzed} topics analyzed
                  </div>
                  {authorityMap && (
                    <div className='mt-1 text-xs text-gray-400'>
                      {authorityMap.diagnostics.orphans.length} orphan nodes ·{' '}
                      {authorityMap.diagnostics.strong.length} strong
                    </div>
                  )}
                </div>
              </div>

              {/* Mini bar chart of score distribution */}
              <div className='mt-4'>
                <ScoreDistribution scores={authorityScores.scores} />
              </div>
            </div>
          )}

          {/* Gap totals */}
          {contentGaps && (
            <div className='grid grid-cols-3 gap-3'>
              <div className='rounded-lg border border-red-100 bg-red-50 p-3 text-center'>
                <div className='text-lg font-bold text-red-700'>{contentGaps.topicGaps.length}</div>
                <div className='text-xs text-red-500'>Topic Gaps</div>
              </div>
              <div className='rounded-lg border border-orange-100 bg-orange-50 p-3 text-center'>
                <div className='text-lg font-bold text-orange-700'>
                  {contentGaps.topicGaps.reduce((s, g) => s + g.suggestions.length, 0)}
                </div>
                <div className='text-xs text-orange-500'>Suggestions</div>
              </div>
              <div className='rounded-lg border border-blue-100 bg-blue-50 p-3 text-center'>
                <div className='text-lg font-bold text-blue-700'>
                  {contentGaps.topicGaps.reduce((s, g) => s + g.missing.length, 0)}
                </div>
                <div className='text-xs text-blue-500'>Missing Layers</div>
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

// ── Inline score distribution (server-rendered bars) ─────────────────
function ScoreDistribution({ scores }: { scores: TopicScore[] }) {
  const buckets = [
    { label: 'Dominant', min: 90, max: 100, color: 'bg-green-500' },
    { label: 'Strong', min: 75, max: 89, color: 'bg-blue-500' },
    { label: 'Growing', min: 60, max: 74, color: 'bg-yellow-500' },
    { label: 'Weak', min: 40, max: 59, color: 'bg-orange-500' },
    { label: 'Gap', min: 0, max: 39, color: 'bg-red-500' },
  ];

  const total = scores.length || 1;

  return (
    <div className='space-y-1.5'>
      {buckets.map(b => {
        const count = scores.filter(s => s.score >= b.min && s.score <= b.max).length;
        const pct = Math.round((count / total) * 100);
        return (
          <div key={b.label} className='flex items-center gap-2 text-xs'>
            <span className='w-16 text-gray-500'>{b.label}</span>
            <div className='h-2.5 flex-1 overflow-hidden rounded-full bg-gray-200'>
              <div className={`h-full rounded-full ${b.color}`} style={{ width: `${pct}%` }} />
            </div>
            <span className='w-6 text-right text-gray-600'>{count}</span>
          </div>
        );
      })}
    </div>
  );
}

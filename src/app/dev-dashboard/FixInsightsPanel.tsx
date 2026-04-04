'use client';

import { useMemo, useState } from 'react';

import type { FixImpact, FixInsights, FixLogEntry } from '@/lib/dev/fixInsightsAnalyzer';

type FixFilter = 'all' | 'ui' | 'bug' | 'refactor';
type SortMode = 'recent' | 'impact';

const impactOrder: Record<FixImpact, number> = {
  high: 0,
  medium: 1,
  low: 2,
};

function formatTimestamp(value: string): string {
  if (!value) {
    return 'Unknown time';
  }

  return new Date(value).toLocaleString();
}

function formatImpact(value: FixImpact): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function impactClasses(value: FixImpact): string {
  if (value === 'high') return 'border-rose-200 bg-rose-50 text-rose-700';
  if (value === 'medium') return 'border-amber-200 bg-amber-50 text-amber-700';
  return 'border-emerald-200 bg-emerald-50 text-emerald-700';
}

function countForImpact(insights: FixInsights, impact: FixImpact): number {
  return insights.byImpact.find(item => item.impact === impact)?.count ?? 0;
}

function getFilteredComponentList(
  insights: FixInsights,
  filter: FixFilter,
  highImpactOnly: boolean
): Array<{ component: string; count: number }> {
  const filteredEntries = insights.recentFixes.filter(entry => {
    const matchesFilter = filter === 'all' ? true : entry.type === filter;
    const matchesImpact = highImpactOnly ? entry.impact === 'high' : true;
    return matchesFilter && matchesImpact;
  });

  if (filteredEntries.length === 0) {
    return highImpactOnly ? [] : insights.mostAffectedComponents;
  }

  const counts = new Map<string, number>();
  for (const entry of filteredEntries) {
    counts.set(entry.component, (counts.get(entry.component) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([component, count]) => ({ component, count }))
    .sort((a, b) => b.count - a.count || a.component.localeCompare(b.component))
    .slice(0, 5);
}

function getMostAffectedComponent(
  insights: FixInsights
): { component: string; count: number } | null {
  return insights.mostAffectedComponents[0] ?? null;
}

function filterAndSortRecentFixes(
  recentFixes: FixLogEntry[],
  filter: FixFilter,
  sortMode: SortMode,
  highImpactOnly: boolean
): FixLogEntry[] {
  const filtered = recentFixes.filter(entry => {
    const matchesFilter = filter === 'all' ? true : entry.type === filter;
    const matchesImpact = highImpactOnly ? entry.impact === 'high' : true;
    return matchesFilter && matchesImpact;
  });

  const sorted = [...filtered];
  if (sortMode === 'impact') {
    sorted.sort((left, right) => {
      const byImpact = impactOrder[left.impact] - impactOrder[right.impact];
      if (byImpact !== 0) return byImpact;
      return (right.timestamp || right.date).localeCompare(left.timestamp || left.date);
    });
    return sorted;
  }

  sorted.sort((left, right) =>
    (right.timestamp || right.date).localeCompare(left.timestamp || left.date)
  );
  return sorted;
}

export function FixInsightsPanel({ insights }: { insights: FixInsights }) {
  const [filter, setFilter] = useState<FixFilter>('all');
  const [sortMode, setSortMode] = useState<SortMode>('recent');
  const [highImpactOnly, setHighImpactOnly] = useState(false);

  const mostAffectedComponent = getMostAffectedComponent(insights);
  const recentFixes = useMemo(
    () => filterAndSortRecentFixes(insights.recentFixes, filter, sortMode, highImpactOnly),
    [filter, highImpactOnly, insights.recentFixes, sortMode]
  );
  const visibleComponents = useMemo(
    () => getFilteredComponentList(insights, filter, highImpactOnly),
    [filter, highImpactOnly, insights]
  );

  const availableFilters: FixFilter[] = ['all', 'ui', 'bug', 'refactor'];

  return (
    <section className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
      <div className='mb-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between'>
        <div>
          <h2 className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>
            Fix Insights
          </h2>
          <p className='mt-1 max-w-2xl text-sm text-slate-600'>
            Scan the log fast: what changed, which components keep reappearing, and whether high
            impact fixes are concentrated in one area.
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-2'>
          <button
            type='button'
            onClick={() => setHighImpactOnly(current => !current)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
              highImpactOnly
                ? 'border-rose-600 bg-rose-600 text-white'
                : 'border-slate-200 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-900'
            }`}
          >
            High Impact Only
          </button>

          {availableFilters.map(option => {
            const isActive = filter === option;
            return (
              <button
                key={option}
                type='button'
                onClick={() => setFilter(option)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  isActive
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-900'
                }`}
              >
                {option}
              </button>
            );
          })}

          <select
            aria-label='Sort recent fixes'
            value={sortMode}
            onChange={event => setSortMode(event.target.value as SortMode)}
            className='rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 outline-none transition focus:border-slate-900'
          >
            <option value='recent'>Sort: Recent</option>
            <option value='impact'>Sort: Impact</option>
          </select>
        </div>
      </div>

      {insights.totalFixes === 0 ? (
        <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-10 text-center'>
          <div className='text-sm font-semibold text-slate-900'>No fix history yet</div>
          <p className='mt-2 text-sm text-slate-500'>
            Append entries to reports/fix-log.json with scripts/dev/add-fix-entry.mjs to make this
            panel useful.
          </p>
        </div>
      ) : (
        <div className='space-y-6'>
          <div className='grid gap-4 lg:grid-cols-3'>
            <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
              <div className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-500'>
                Total Fixes
              </div>
              <div className='mt-3 text-2xl font-semibold text-slate-950'>
                {insights.totalFixes}
              </div>
              <p className='mt-2 text-sm text-slate-500'>Full append-only fix count.</p>
            </div>

            <div className='rounded-2xl border border-rose-200 bg-rose-50 p-4'>
              <div className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-500'>
                High Impact Fixes
              </div>
              <div className='mt-3 text-2xl font-semibold text-rose-600'>
                {countForImpact(insights, 'high')}
              </div>
              <p className='mt-2 text-sm text-slate-500'>Largest measured gains.</p>
            </div>

            <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
              <div className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-500'>
                Most Affected Component
              </div>
              <div className='mt-3 text-lg font-semibold text-slate-950'>
                {mostAffectedComponent?.component ?? 'None'}
              </div>
              <p className='mt-2 text-sm text-slate-500'>
                {mostAffectedComponent
                  ? `${mostAffectedComponent.count} logged fixes`
                  : 'No component hotspots yet.'}
              </p>
            </div>
          </div>

          <div className='grid gap-6 xl:grid-cols-[1.4fr_1fr]'>
            <section className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
              <div className='mb-4 flex items-center justify-between gap-3'>
                <div>
                  <h3 className='text-sm font-semibold text-slate-950'>Recent Fixes</h3>
                  <p className='mt-1 text-sm text-slate-500'>
                    Latest entries, optimized for fast scanning.
                  </p>
                </div>
                <span className='text-xs uppercase tracking-[0.16em] text-slate-400'>
                  {recentFixes.length}
                </span>
              </div>

              <div className='space-y-3'>
                {recentFixes.length > 0 ? (
                  recentFixes.slice(0, 10).map((entry, index) => (
                    <article
                      key={entry.id ?? `${entry.timestamp}-${entry.component}-${index}`}
                      className='rounded-xl border border-slate-200 bg-white p-4'
                    >
                      <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
                        <div>
                          <h4 className='text-sm font-semibold text-slate-950'>{entry.title}</h4>
                          <p className='mt-1 text-sm text-slate-600'>{entry.component}</p>
                        </div>

                        <div className='flex flex-wrap items-center gap-2'>
                          <span
                            className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${impactClasses(entry.impact)}`}
                          >
                            {formatImpact(entry.impact)}
                          </span>
                          <span className='rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500'>
                            {entry.type}
                          </span>
                        </div>
                      </div>

                      <div className='mt-3 grid gap-2 text-xs uppercase tracking-[0.14em] text-slate-400 sm:grid-cols-[1fr_auto_auto] sm:items-center'>
                        <span>{formatTimestamp(entry.timestamp || entry.date)}</span>
                        <span className='rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-center'>
                          {entry.component}
                        </span>
                        <span className='text-right'>
                          {entry.scoreBefore} → {entry.scoreAfter}
                        </span>
                      </div>
                    </article>
                  ))
                ) : (
                  <p className='text-sm text-slate-400'>No fixes match the current scan mode.</p>
                )}
              </div>
            </section>

            <div className='space-y-6'>
              <section className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                <div className='mb-4'>
                  <h3 className='text-sm font-semibold text-slate-950'>
                    Most Problematic Components
                  </h3>
                  <p className='mt-1 text-sm text-slate-500'>
                    Repeat-fix hotspots in the current scan view.
                  </p>
                </div>

                <div className='space-y-3'>
                  {visibleComponents.length > 0 ? (
                    visibleComponents.map(item => (
                      <div
                        key={item.component}
                        className='flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3'
                      >
                        <div className='text-sm font-medium text-slate-900'>{item.component}</div>
                        <div className='text-sm font-semibold text-slate-500'>{item.count}</div>
                      </div>
                    ))
                  ) : (
                    <p className='text-sm text-slate-400'>
                      No component hotspots in the current scan view.
                    </p>
                  )}
                </div>
              </section>

              <section className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                <div className='mb-4'>
                  <h3 className='text-sm font-semibold text-slate-950'>Breakdown</h3>
                  <p className='mt-1 text-sm text-slate-500'>Type and impact mix at a glance.</p>
                </div>

                <div className='space-y-4'>
                  <div>
                    <div className='mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400'>
                      Type
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {insights.byType.map(item => (
                        <span
                          key={item.type}
                          className='rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600'
                        >
                          {item.type}: {item.count}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className='mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400'>
                      Impact
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {insights.byImpact.map(item => (
                        <span
                          key={item.impact}
                          className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${impactClasses(item.impact)}`}
                        >
                          {item.impact}: {item.count}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

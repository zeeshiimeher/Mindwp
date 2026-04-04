'use client';

import { useEffect, useState } from 'react';

interface ReportEntry {
  name: string;
  path: string;
  updatedAt: string;
}

interface ReportGroup {
  id: string;
  label: string;
  reports: ReportEntry[];
}

interface ReportsResponse {
  groups: ReportGroup[];
}

function formatTimestamp(value: string): string {
  return new Date(value).toLocaleString();
}

export function ReportViewer() {
  const [groups, setGroups] = useState<ReportGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadReports() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/dev-dashboard/reports', { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Unable to load reports.');
        }

        const payload = (await response.json()) as ReportsResponse;
        if (!cancelled) {
          setGroups(payload.groups ?? []);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : 'Unable to load reports.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadReports();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
      <div className='mb-4'>
        <h2 className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>
          Report Viewer
        </h2>
        <p className='mt-1 text-sm text-slate-600'>
          Lazy-loaded latest reports, grouped for daily scanning.
        </p>
      </div>

      {loading ? <p className='text-sm text-slate-500'>Loading reports…</p> : null}
      {error ? <p className='text-sm text-rose-600'>{error}</p> : null}

      {!loading && !error ? (
        <div className='grid gap-5 lg:grid-cols-2 2xl:grid-cols-4'>
          {groups.map(group => (
            <section key={group.id} className='rounded-xl border border-slate-200 bg-slate-50 p-4'>
              <div className='flex items-center justify-between gap-3'>
                <h3 className='text-sm font-semibold text-slate-950'>{group.label}</h3>
                <span className='text-[11px] uppercase tracking-[0.16em] text-slate-400'>
                  {group.reports.length}
                </span>
              </div>

              <ul className='mt-4 space-y-3 text-sm text-slate-600'>
                {group.reports.length > 0 ? (
                  group.reports.map(report => (
                    <li key={report.path}>
                      <a
                        href={`/${report.path}`}
                        className='font-medium text-slate-900 underline-offset-4 hover:underline'
                      >
                        {report.name}
                      </a>
                      <div className='mt-1 text-xs uppercase tracking-[0.14em] text-slate-400'>
                        {formatTimestamp(report.updatedAt)}
                      </div>
                    </li>
                  ))
                ) : (
                  <li className='text-slate-400'>No current reports.</li>
                )}
              </ul>
            </section>
          ))}
        </div>
      ) : null}
    </div>
  );
}

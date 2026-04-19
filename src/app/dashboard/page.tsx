import Link from 'next/link';
import type { ReactNode } from 'react';

import { getInventoryMetadata } from '@/lib/content-quality/inventory';
import { readClientDashboardReport } from '@/lib/dashboard/client-dashboard';

export const dynamic = 'force-dynamic';

type SearchParamValue = string | string[] | undefined;
type SearchParams = Record<string, SearchParamValue>;

const statusTone = {
  healthy: 'border-emerald-300 bg-emerald-100 text-emerald-900',
  'needs attention': 'border-amber-300 bg-amber-100 text-amber-900',
  improving: 'border-blue-300 bg-blue-100 text-blue-900',
} as const;

const pageStatusTone = {
  Healthy: 'border-emerald-300 bg-emerald-100 text-emerald-900',
  'Needs Improvement': 'border-amber-300 bg-amber-100 text-amber-900',
  Improving: 'border-blue-300 bg-blue-100 text-blue-900',
} as const;

export async function generateMetadata() {
  return getInventoryMetadata('/dashboard');
}

function toSingleValue(value: SearchParamValue) {
  return Array.isArray(value) ? (value[0] ?? '') : (value ?? '');
}

function Badge({ children, tone }: { children: ReactNode; tone: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${tone}`}
    >
      {children}
    </span>
  );
}

function MetricCard({
  label,
  value,
  tooltip,
}: {
  label: string;
  value: string | number;
  tooltip: string;
}) {
  return (
    <div
      title={tooltip}
      className='grid gap-1.5 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'
    >
      <div className='text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500'>
        {label}
      </div>
      <div className='text-3xl font-black text-slate-950'>{value}</div>
    </div>
  );
}

function SectionCard({
  title,
  description,
  children,
  tone = 'border-slate-200 bg-white',
}: {
  title: string;
  description?: string;
  children: ReactNode;
  tone?: string;
}) {
  return (
    <section
      className={`rounded-[28px] border p-5 shadow-[0_26px_70px_rgba(15,23,42,0.08)] ${tone}`}
    >
      <h2 className='text-[1.05rem] font-bold text-slate-950'>{title}</h2>
      {description ? <p className='mt-2 text-sm leading-6 text-slate-600'>{description}</p> : null}
      <div className='mt-4'>{children}</div>
    </section>
  );
}

function EmptyState({ title, body }: { title: string; body?: string }) {
  return (
    <div className='rounded-3xl border border-emerald-200 bg-emerald-50 p-5'>
      <div className='text-base font-bold text-emerald-900'>{title}</div>
      <p className='mt-2 text-sm leading-6 text-emerald-800'>
        {body ?? "Everything is running smoothly. We're continuously monitoring and optimizing."}
      </p>
    </div>
  );
}

function improveInsight(insight: string, status: 'Healthy' | 'Needs Improvement' | 'Improving') {
  if (status === 'Healthy' && insight.toLowerCase().includes('performing well')) {
    return 'This page converts visitors effectively with strong structure and clear calls to action.';
  }

  if (status === 'Improving' && insight.toLowerCase().includes('improving')) {
    return 'This page is moving in the right direction and the current improvements are strengthening clarity and conversion.';
  }

  if (status === 'Needs Improvement' && insight.toLowerCase().includes('needs')) {
    return 'This page has a clear opportunity to improve clarity, lead flow, or page structure for better performance.';
  }

  return insight;
}

function DashboardLinkButton({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-2xl border px-4 py-3 text-sm font-bold transition ${
        active
          ? 'border-slate-950 bg-slate-950 text-white shadow-md'
          : 'border-slate-300 bg-white/90 text-slate-800 hover:border-slate-400'
      }`}
    >
      {label}
    </Link>
  );
}

export default async function ClientDashboardPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const params = (await searchParams) ?? {};
  const report = readClientDashboardReport();

  if (!report) {
    return (
      <div className='mx-auto max-w-6xl px-6 py-8'>
        <SectionCard
          title='Performance Dashboard'
          description='Run the unified system update to generate the client-facing dashboard snapshot.'
        >
          <p className='text-sm text-slate-600'>
            This page only renders the client-safe dashboard artifact.
          </p>
        </SectionCard>
      </div>
    );
  }

  const showAllPages = toSingleValue(params.pages) === 'all';
  const pagesNeedingAttention = report.pages.filter(page => page.status !== 'Healthy');
  const rankedPages = [...report.pages].sort((left, right) => {
    const statusOrder = { 'Needs Improvement': 0, Improving: 1, Healthy: 2 } as const;
    if (statusOrder[left.status] !== statusOrder[right.status]) {
      return statusOrder[left.status] - statusOrder[right.status];
    }

    return left.route.localeCompare(right.route);
  });
  const visiblePages = showAllPages
    ? rankedPages
    : pagesNeedingAttention.length > 0
      ? rankedPages.filter(page => page.status !== 'Healthy').slice(0, 10)
      : rankedPages.slice(0, 10);
  const workingOnItems = report.priorities.slice(0, 3);

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_22%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_20%),linear-gradient(180deg,#f8fafc_0%,#eff6ff_100%)] text-slate-950'>
      <div className='mx-auto max-w-7xl px-6 py-8'>
        <header className='mb-5 grid gap-4 rounded-[30px] border border-blue-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(239,246,255,0.96),rgba(240,253,250,0.92))] p-6 shadow-[0_26px_70px_rgba(15,23,42,0.08)]'>
          <div className='flex flex-wrap items-start justify-between gap-4'>
            <div className='max-w-3xl'>
              <div className='text-xs font-extrabold uppercase tracking-[0.12em] text-blue-700'>
                Client Performance Dashboard
              </div>
              <h1 className='mt-1 text-[2.35rem] font-black leading-none text-slate-950'>
                Your website is performing well. Here&apos;s what&apos;s improving next.
              </h1>
              <p className='mt-2 text-base leading-7 text-slate-700'>
                Clear insights into your website performance, lead generation, and growth
                opportunities.
              </p>
            </div>
            <Badge tone={statusTone[report.status]}>{report.summary.systemHealth}</Badge>
          </div>
          <div className='flex flex-wrap gap-3 text-sm text-slate-600'>
            <span>Updated: {report.generatedAt}</span>
            <span>Overall site health: {report.summary.systemHealth}</span>
            <span>Recent improvements: {report.summary.improvementsMade}</span>
          </div>
          <div className='flex flex-wrap gap-3'>
            <DashboardLinkButton href='/dashboard' label='Client Dashboard' active />
            <DashboardLinkButton href='/system-dashboard' label='Operator Dashboard' />
            <DashboardLinkButton href='/image-dashboard' label='Image Dashboard' />
          </div>
        </header>

        <div className='mb-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          <MetricCard
            label='Pages Performing Well'
            value={report.summary.pagesOptimized}
            tooltip='Pages currently showing strong structure and clear conversion support.'
          />
          <MetricCard
            label='Opportunities to Improve'
            value={report.summary.issues}
            tooltip='Areas where the site can improve clarity, growth, or lead generation.'
          />
          <MetricCard
            label='Highest-Priority Opportunities'
            value={report.summary.criticalIssues}
            tooltip='The number of top-impact items currently worth immediate attention.'
          />
          <MetricCard
            label='Recent Improvements'
            value={report.summary.improvementsMade}
            tooltip='The number of meaningful positive changes recorded in the latest update.'
          />
        </div>

        <div className='mb-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]'>
          <SectionCard
            title='Priority Actions'
            description='The next improvements most likely to strengthen lead capture, clarity, and growth.'
            tone='border-blue-200 bg-white'
          >
            {report.priorities.length === 0 ? (
              <EmptyState title='No priority actions are open right now.' />
            ) : (
              <div className='grid gap-3'>
                {report.priorities.slice(0, 5).map(priority => (
                  <div
                    key={`${priority.impact}:${priority.message}`}
                    className='grid gap-2 rounded-3xl border border-blue-200 bg-blue-50/40 p-4 transition hover:-translate-y-0.5 hover:shadow-md'
                  >
                    <div className='flex flex-wrap items-center justify-between gap-3'>
                      <div className='text-[0.98rem] font-bold text-slate-950'>
                        {priority.message}
                      </div>
                      <span className='text-xs font-extrabold uppercase tracking-[0.12em] text-blue-700'>
                        {priority.impact}
                      </span>
                    </div>
                    <div className='text-sm leading-6 text-slate-700'>
                      {priority.routes.length > 0
                        ? `This improvement affects ${priority.routes.length} page${priority.routes.length === 1 ? '' : 's'} and is aimed at strengthening outcomes where they matter most.`
                        : `This improvement targets a broader site-wide opportunity that can raise clarity and performance.`}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </SectionCard>

          <SectionCard
            title="What We're Working On"
            description='A simple view of active improvements so you can see direction, not just status.'
            tone='border-emerald-200 bg-emerald-50/70'
          >
            {workingOnItems.length === 0 ? (
              <EmptyState title='We are in a monitoring and optimization phase.' />
            ) : (
              <div className='grid gap-3'>
                {workingOnItems.map(item => (
                  <div
                    key={`${item.impact}:${item.message}:working`}
                    className='rounded-3xl border border-emerald-200 bg-white p-4'
                  >
                    <div className='text-sm font-bold text-slate-950'>{item.message}</div>
                    <div className='mt-1 text-sm leading-6 text-slate-700'>
                      Current focus: strengthen {item.impact.toLowerCase()} across{` `}
                      {item.routes.length > 0
                        ? `${item.routes.length} key page${item.routes.length === 1 ? '' : 's'}.`
                        : 'the highest-value parts of the site.'}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </SectionCard>
        </div>

        <div className='mb-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]'>
          <SectionCard
            title='Momentum'
            description='A clear picture of improvement over time, without technical noise.'
            tone='border-slate-200 bg-white'
          >
            <div className='grid gap-3 md:grid-cols-3'>
              <div className='rounded-3xl border border-emerald-200 bg-emerald-50 p-4'>
                <div className='text-xs font-extrabold uppercase tracking-[0.12em] text-emerald-800'>
                  Resolved
                </div>
                <div className='mt-1 text-3xl font-black text-emerald-900'>
                  {report.changes.resolvedIssues.length}
                </div>
              </div>
              <div className='rounded-3xl border border-amber-200 bg-amber-50 p-4'>
                <div className='text-xs font-extrabold uppercase tracking-[0.12em] text-amber-800'>
                  Watching
                </div>
                <div className='mt-1 text-3xl font-black text-amber-900'>
                  {report.changes.newIssues.length}
                </div>
              </div>
              <div className='rounded-3xl border border-blue-200 bg-blue-50 p-4'>
                <div className='text-xs font-extrabold uppercase tracking-[0.12em] text-blue-800'>
                  Pages Improved
                </div>
                <div className='mt-1 text-3xl font-black text-blue-900'>
                  {report.changes.pagesImproved}
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title='Business Impact'
            description='A business-language view of where current opportunities can create the most value.'
            tone='border-slate-200 bg-white'
          >
            <div className='grid gap-3 md:grid-cols-2 xl:grid-cols-4'>
              {report.impacts.map(impact => (
                <div
                  key={impact.impact}
                  className='grid gap-1 rounded-3xl border border-slate-200 bg-slate-50 p-4'
                >
                  <div className='text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500'>
                    {impact.impact}
                  </div>
                  <div className='text-3xl font-black text-slate-950'>{impact.issues}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <SectionCard
          title='Page Performance'
          description='A focused page view that highlights what needs attention first and keeps healthy pages from overwhelming the signal.'
          tone='border-slate-200 bg-white'
        >
          <div className='grid gap-4'>
            <div className='flex flex-wrap items-center justify-between gap-3'>
              <div className='text-sm text-slate-600'>
                {showAllPages
                  ? `Showing all ${rankedPages.length} pages.`
                  : pagesNeedingAttention.length > 0
                    ? 'Showing pages that currently need attention.'
                    : 'Showing the top 10 pages for a quick health check.'}
              </div>
              <Link
                href={showAllPages ? '/dashboard' : '/dashboard?pages=all'}
                className='inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700'
              >
                {showAllPages ? 'Show Priority Pages' : 'Show All Pages'}
              </Link>
            </div>

            {visiblePages.length === 0 ? (
              <EmptyState title='No page-level improvements need attention right now.' />
            ) : (
              <div className='grid gap-3'>
                <div className='hidden gap-3 px-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-500 md:grid md:grid-cols-[minmax(0,1.1fr)_0.5fr_1.6fr]'>
                  <span>Page</span>
                  <span>Status</span>
                  <span>Insight</span>
                </div>
                {visiblePages.map(page => (
                  <Link
                    key={page.route}
                    href={page.route}
                    className='grid gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md md:grid-cols-[minmax(0,1.1fr)_0.5fr_1.6fr] md:items-start'
                  >
                    <div className='break-words font-bold text-slate-950'>{page.route}</div>
                    <Badge tone={pageStatusTone[page.status]}>{page.status}</Badge>
                    <div className='text-sm leading-6 text-slate-700'>
                      {improveInsight(page.insight, page.status)}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

import type { ReactNode } from 'react';

import type {
  DashboardBundle,
  DashboardReport,
  DashboardStatus,
} from '@/lib/dev/dashboard-reports';

function toneForStatus(status: DashboardStatus) {
  if (status === 'PASS') {
    return 'border-emerald-300 bg-emerald-50 text-emerald-900';
  }

  if (status === 'WARN') {
    return 'border-amber-300 bg-amber-50 text-amber-900';
  }

  if (status === 'FAIL') {
    return 'border-rose-300 bg-rose-50 text-rose-900';
  }

  return 'border-stone-300 bg-stone-100 text-stone-800';
}

function formatValue(value: unknown) {
  if (typeof value === 'number') {
    return value.toLocaleString();
  }

  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  if (value == null) {
    return 'n/a';
  }

  return JSON.stringify(value);
}

function StatusBadge({ status }: { status: DashboardStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${toneForStatus(
        status
      )}`}
    >
      {status}
    </span>
  );
}

function Surface({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className='rounded-[28px] border border-stone-200 bg-white/95 p-5 shadow-[0_20px_60px_rgba(28,25,23,0.08)]'>
      <div className='mb-4 flex flex-wrap items-start justify-between gap-3'>
        <div>
          <h2 className='text-base font-semibold text-stone-950'>{title}</h2>
          {subtitle ? <p className='mt-1 text-sm text-stone-600'>{subtitle}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}

function SummaryGrid({ report }: { report: DashboardReport<Record<string, unknown>> }) {
  return (
    <div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-5'>
      <div className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
        <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-500'>
          Status
        </div>
        <div className='mt-2'>
          <StatusBadge status={report.status} />
        </div>
      </div>
      <div className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
        <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-500'>
          Total
        </div>
        <div className='mt-2 text-2xl font-black text-stone-950'>{report.summary.total}</div>
      </div>
      <div className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
        <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-500'>
          Passed
        </div>
        <div className='mt-2 text-2xl font-black text-stone-950'>{report.summary.passed}</div>
      </div>
      <div className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
        <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-500'>
          Failed
        </div>
        <div className='mt-2 text-2xl font-black text-stone-950'>{report.summary.failed}</div>
      </div>
      <div className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
        <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-500'>
          Warnings
        </div>
        <div className='mt-2 text-2xl font-black text-stone-950'>{report.summary.warnings}</div>
      </div>
    </div>
  );
}

function KeyValueList({ entries }: { entries: Array<{ label: string; value: unknown }> }) {
  return (
    <div className='grid gap-3 md:grid-cols-2'>
      {entries.map(entry => (
        <div key={entry.label} className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
          <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-500'>
            {entry.label}
          </div>
          <div className='mt-2 break-words text-sm font-medium text-stone-900'>
            {formatValue(entry.value)}
          </div>
        </div>
      ))}
    </div>
  );
}

function ValidatorList({ report }: { report: DashboardReport<Record<string, unknown>> }) {
  const validationResults = report.data.validationResults as
    | { data?: { validators?: Array<Record<string, unknown>> } }
    | undefined;
  const validators = validationResults?.data?.validators ?? [];

  return (
    <div className='grid gap-3'>
      {validators.slice(0, 12).map(validator => (
        <div
          key={String(validator.name)}
          className='rounded-2xl border border-stone-200 bg-stone-50 p-4'
        >
          <div className='flex flex-wrap items-center justify-between gap-3'>
            <div>
              <div className='text-sm font-bold text-stone-950'>{String(validator.name)}</div>
              <div className='text-xs text-stone-600'>
                {validator.blocking ? 'Blocking validator' : 'Advisory validator'}
              </div>
            </div>
            <StatusBadge status={String(validator.status).toUpperCase() as DashboardStatus} />
          </div>
        </div>
      ))}
    </div>
  );
}

function AnalyzerList({ report }: { report: DashboardReport<Record<string, unknown>> }) {
  const pipeline = report.data.pipeline as
    | { data?: { analyzers?: Array<Record<string, unknown>> } }
    | undefined;
  const analyzers = pipeline?.data?.analyzers ?? [];

  return (
    <div className='grid gap-3'>
      {analyzers.map(analyzer => (
        <div
          key={String(analyzer.name)}
          className='rounded-2xl border border-stone-200 bg-stone-50 p-4'
        >
          <div className='flex flex-wrap items-center justify-between gap-3'>
            <div>
              <div className='text-sm font-bold text-stone-950'>{String(analyzer.name)}</div>
              <div className='text-xs text-stone-600'>
                {Array.isArray(analyzer.outputs)
                  ? analyzer.outputs.join(', ')
                  : 'No outputs listed'}
              </div>
            </div>
            <StatusBadge status={String(analyzer.status).toUpperCase() as DashboardStatus} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PureSystemDashboard({ reports }: { reports: DashboardBundle }) {
  const systemData = reports.system.data;
  const graphData = reports.graph.data;
  const topicsData = reports.topics.data;
  const contentData = reports.content.data;

  return (
    <div className='mx-auto grid max-w-7xl gap-6 px-6 py-8'>
      <Surface
        title='System Dashboard'
        subtitle='Pure report reader for normalized dashboard artifacts.'
      >
        <SummaryGrid report={reports.system} />
      </Surface>

      <Surface title='System' subtitle='Snapshot from reports/dashboard/system.json'>
        <KeyValueList
          entries={[
            { label: 'Overall status', value: systemData.status },
            { label: 'Generated at', value: systemData.timestamp },
            { label: 'Duration (ms)', value: systemData.durationMs },
            {
              label: 'Validation status',
              value: (systemData.validate as Record<string, unknown>)?.status,
            },
            { label: 'Tests status', value: (systemData.tests as Record<string, unknown>)?.status },
            {
              label: 'Reports status',
              value: (systemData.reports as Record<string, unknown>)?.status,
            },
          ]}
        />
      </Surface>

      <Surface title='Validators' subtitle='Normalized validator status and report linkage'>
        <SummaryGrid report={reports.validators} />
        <div className='mt-4'>
          <ValidatorList report={reports.validators} />
        </div>
      </Surface>

      <Surface title='Graph' subtitle='Authority map, graph validation, and derived summary'>
        <SummaryGrid report={reports.graph} />
        <div className='mt-4'>
          <KeyValueList
            entries={[
              {
                label: 'Authority map status',
                value: (graphData.authorityMap as Record<string, unknown>)?.status,
              },
              {
                label: 'Graph report status',
                value: (graphData.graphReport as Record<string, unknown>)?.status,
              },
              {
                label: 'Derived summary status',
                value: (graphData.graphDerivedSummary as Record<string, unknown>)?.status,
              },
            ]}
          />
        </div>
      </Surface>

      <Surface title='Topics' subtitle='Topic authority scores and topic insight report'>
        <SummaryGrid report={reports.topics} />
        <div className='mt-4'>
          <KeyValueList
            entries={[
              {
                label: 'Topics analyzed',
                value: (
                  (topicsData.scores as Record<string, unknown>)?.data as Record<string, unknown>
                )?.topicsAnalyzed,
              },
              {
                label: 'Average score',
                value: (
                  (topicsData.scores as Record<string, unknown>)?.data as Record<string, unknown>
                )?.averageScore,
              },
              {
                label: 'Insights status',
                value: (topicsData.insights as Record<string, unknown>)?.status,
              },
            ]}
          />
        </div>
      </Surface>

      <Surface
        title='Content'
        subtitle='Content gap, quality, score, consistency, and intelligence reports'
      >
        <SummaryGrid report={reports.content} />
        <div className='mt-4'>
          <KeyValueList
            entries={[
              {
                label: 'Gaps status',
                value: (contentData.gaps as Record<string, unknown>)?.status,
              },
              {
                label: 'Quality status',
                value: (contentData.quality as Record<string, unknown>)?.status,
              },
              {
                label: 'Score status',
                value: (contentData.score as Record<string, unknown>)?.status,
              },
              {
                label: 'Consistency status',
                value: (contentData.consistency as Record<string, unknown>)?.status,
              },
              {
                label: 'Intelligence status',
                value: (contentData.intelligence as Record<string, unknown>)?.status,
              },
            ]}
          />
        </div>
      </Surface>

      <Surface
        title='Pipeline'
        subtitle='Generator, analyzer, and validator coverage from pipeline.json'
      >
        <SummaryGrid report={reports.pipeline} />
        <div className='mt-4'>
          <AnalyzerList report={reports.pipeline} />
        </div>
      </Surface>
    </div>
  );
}

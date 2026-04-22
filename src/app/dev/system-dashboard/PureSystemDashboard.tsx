import Link from 'next/link';
import type { ReactNode } from 'react';

import type {
  DashboardAnalyzerCoverage,
  DashboardBundle,
  DashboardFailureDrilldownItem,
  DashboardIntegrityStrip,
  DashboardLastRunDetails,
  DashboardLastRunSummary,
  DashboardReport,
  DashboardStatus,
  DashboardTimelineStep,
  DashboardWarningPanelItem,
} from '@/lib/dev/dashboard-reports';

type DashboardTone = 'PASS' | 'FAIL' | 'WARN' | 'INFO';

function toAnchorId(name: string) {
  return `validator-${name.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`;
}

const sectionNavigation = [
  { id: 'overview', label: 'Overview' },
  { id: 'validators', label: 'Validators' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'graph', label: 'Graph' },
  { id: 'topics', label: 'Topics' },
  { id: 'content', label: 'Content' },
] as const;

const reportQuickLinks = [
  { href: '/dev/system-dashboard/reports/system-report', label: 'Open Raw Report' },
  { href: '/dev/system-dashboard/reports/pipeline-report', label: 'Open Pipeline Report' },
  { href: '/dev/system-dashboard/reports/validation-report', label: 'Open Validation Report' },
] as const;

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

function toneForSignal(tone: DashboardTone) {
  if (tone === 'FAIL') {
    return 'border-rose-300 bg-rose-50 text-rose-950';
  }

  if (tone === 'WARN') {
    return 'border-amber-300 bg-amber-50 text-amber-950';
  }

  if (tone === 'PASS') {
    return 'border-emerald-300 bg-emerald-50 text-emerald-950';
  }

  return 'border-stone-300 bg-stone-50 text-stone-900';
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
  sectionId,
  title,
  subtitle,
  children,
}: {
  sectionId?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={sectionId}
      className='scroll-mt-24 rounded-[28px] border border-stone-200 bg-white/95 p-5 shadow-[0_20px_60px_rgba(28,25,23,0.08)]'
    >
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

function DashboardHero({
  status,
  timestamp,
  durationMs,
  quickLinks,
}: {
  status: DashboardStatus;
  timestamp: unknown;
  durationMs: unknown;
  quickLinks: ReactNode;
}) {
  return (
    <div className='rounded-[28px] border border-stone-950 bg-stone-950 p-6 text-white shadow-[0_30px_80px_rgba(28,25,23,0.24)]'>
      <div className='flex flex-wrap items-start justify-between gap-4'>
        <div className='max-w-2xl'>
          <div className='text-[11px] font-bold uppercase tracking-[0.18em] text-stone-300'>
            System Health
          </div>
          <div className='mt-3 flex flex-wrap items-center gap-3'>
            <span className='text-4xl font-black tracking-tight sm:text-5xl'>{status}</span>
            <StatusBadge status={status} />
          </div>
          <p className='mt-3 text-sm leading-6 text-stone-300'>
            Deterministic control-plane state from the current report bundle.
          </p>
        </div>
        <div className='flex flex-col items-start gap-3'>{quickLinks}</div>
      </div>
      <div className='mt-5 grid gap-3 sm:grid-cols-3'>
        <div className='rounded-2xl border border-stone-700 bg-stone-900/80 p-4'>
          <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-400'>
            Generated At
          </div>
          <div className='mt-2 text-sm font-medium text-stone-100'>{formatValue(timestamp)}</div>
        </div>
        <div className='rounded-2xl border border-stone-700 bg-stone-900/80 p-4'>
          <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-400'>
            Duration
          </div>
          <div className='mt-2 text-sm font-medium text-stone-100'>
            {typeof durationMs === 'number'
              ? `${durationMs.toLocaleString()} ms`
              : formatValue(durationMs)}
          </div>
        </div>
        <div className='rounded-2xl border border-stone-700 bg-stone-900/80 p-4'>
          <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-400'>
            Scan Goal
          </div>
          <div className='mt-2 text-sm font-medium text-stone-100'>
            Status, issues, warnings, and slow steps in one pass.
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionNavigation() {
  return (
    <nav className='sticky top-4 z-10 rounded-[28px] border border-stone-200 bg-white/95 p-3 shadow-[0_20px_60px_rgba(28,25,23,0.08)] backdrop-blur'>
      <div className='flex flex-wrap gap-2'>
        {sectionNavigation.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className='rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-stone-700 transition hover:border-stone-300 hover:bg-white'
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
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

function IntegrityStrip({ entries }: { entries: DashboardIntegrityStrip }) {
  return (
    <div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-4'>
      <div className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
        <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-500'>
          Reports Status
        </div>
        <div className='mt-2'>
          <StatusBadge status={entries.reportsStatus} />
        </div>
      </div>
      <div className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
        <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-500'>
          Validator Coverage
        </div>
        <div className='mt-2 text-2xl font-black text-stone-950'>
          {entries.validatorCoveragePct}%
        </div>
      </div>
      <div className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
        <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-500'>
          Analyzer Coverage
        </div>
        <div className='mt-2 text-2xl font-black text-stone-950'>
          {entries.analyzerCoveragePct}%
        </div>
      </div>
      <div className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
        <div className='text-[11px] font-bold uppercase tracking-[0.12em] text-stone-500'>
          Drift
        </div>
        <div className='mt-2 text-2xl font-black text-stone-950'>
          {entries.drift ? 'Detected' : 'Clear'}
        </div>
      </div>
    </div>
  );
}

function LastRunSummary({ summary }: { summary: DashboardLastRunSummary }) {
  return (
    <KeyValueList
      entries={[
        { label: 'Duration (ms)', value: summary.durationMs },
        { label: 'Total reports', value: summary.totalReports },
        { label: 'Passed', value: summary.passed },
        { label: 'Failed', value: summary.failed },
        { label: 'Warnings', value: summary.warnings },
      ]}
    />
  );
}

function LastRunDetails({ details }: { details: DashboardLastRunDetails }) {
  return (
    <KeyValueList
      entries={[
        { label: 'Time', value: details.time },
        { label: 'Duration (ms)', value: details.durationMs },
        { label: 'Status', value: details.status },
        { label: 'Cache hits', value: details.cacheHits },
      ]}
    />
  );
}

function QuickLinks() {
  return (
    <div className='flex flex-wrap gap-3'>
      {reportQuickLinks.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className='rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-stone-700 transition hover:border-stone-300 hover:bg-white'
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function OverviewSignalCard({
  title,
  summary,
  tone,
  items,
  emptyLabel,
}: {
  title: string;
  summary?: string;
  tone: DashboardTone;
  items: Array<{ title: string; detail?: string; status?: DashboardStatus }>;
  emptyLabel: string;
}) {
  return (
    <div className={`rounded-[24px] border p-4 ${toneForSignal(tone)}`}>
      <div className='flex items-start justify-between gap-3'>
        <div>
          <h3 className='text-sm font-bold'>{title}</h3>
          {summary ? <p className='mt-1 text-xs leading-5 opacity-80'>{summary}</p> : null}
        </div>
        <div className='rounded-full border border-current/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em]'>
          {items.length}
        </div>
      </div>
      <div className='mt-3 grid gap-2'>
        {items.length > 0 ? (
          items.slice(0, 6).map(item => (
            <div
              key={`${title}-${item.title}-${item.detail ?? ''}`}
              className='rounded-2xl border border-current/15 bg-white/70 px-3 py-3'
            >
              <div className='flex items-start justify-between gap-3'>
                <div>
                  <div className='text-sm font-semibold'>{item.title}</div>
                  {item.detail ? (
                    <div className='mt-1 text-xs opacity-80'>{item.detail}</div>
                  ) : null}
                </div>
                {item.status ? <StatusBadge status={item.status} /> : null}
              </div>
            </div>
          ))
        ) : (
          <div className='rounded-2xl border border-dashed border-current/25 bg-white/60 px-3 py-4 text-sm opacity-75'>
            {emptyLabel}
          </div>
        )}
      </div>
    </div>
  );
}

function FailureDrilldown({
  items,
  title,
}: {
  items: DashboardFailureDrilldownItem[];
  title: string;
}) {
  return (
    <div className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
      <div className='mb-3 flex items-center justify-between gap-3'>
        <div className='text-sm font-bold text-stone-950'>{title}</div>
        <div className='text-xs font-semibold uppercase tracking-[0.12em] text-stone-500'>
          {items.length}
        </div>
      </div>
      <div className='grid gap-2'>
        {items.length > 0 ? (
          items.map(item => (
            <a
              key={`${item.name}-${item.reportFile}`}
              href={`#${toAnchorId(item.name)}`}
              className='rounded-xl border border-stone-200 bg-white px-3 py-3 text-sm text-stone-900 transition hover:border-stone-300'
            >
              <div className='flex flex-wrap items-center justify-between gap-2'>
                <div className='font-medium'>{item.name}</div>
                <StatusBadge status={item.reportStatus} />
              </div>
              <div className='mt-1 text-xs text-stone-500'>{item.reportFile}</div>
            </a>
          ))
        ) : (
          <div className='rounded-xl border border-dashed border-stone-200 px-3 py-4 text-sm text-stone-500'>
            No entries.
          </div>
        )}
      </div>
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
      {validators.map(validator => (
        <div
          key={String(validator.name)}
          id={toAnchorId(String(validator.name))}
          className='rounded-2xl border border-stone-200 bg-stone-50 p-4'
        >
          <div className='flex flex-wrap items-center justify-between gap-3'>
            <div>
              <div className='text-sm font-bold text-stone-950'>{String(validator.name)}</div>
              <div className='text-xs text-stone-600'>
                {validator.blocking ? 'Blocking validator' : 'Advisory validator'}
              </div>
              <div className='text-xs text-stone-500'>
                {String(validator.reportFile ?? 'No report file')}
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
  const analyzers = (report.data.analyzerCoverage as DashboardAnalyzerCoverage[] | undefined) ?? [];

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
                {Array.isArray(analyzer.outputs) && analyzer.outputs.length > 0
                  ? analyzer.outputs.join(', ')
                  : analyzer.skipped
                    ? 'Skipped by pipeline contract'
                    : 'No outputs listed'}
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='text-xs text-stone-500'>
                {analyzer.durationMs.toLocaleString()} ms
              </div>
              <StatusBadge status={String(analyzer.status).toUpperCase() as DashboardStatus} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ValidatorGroups({ report }: { report: DashboardReport<Record<string, unknown>> }) {
  const groups =
    (report.data.groups as Record<string, Array<Record<string, unknown>>> | undefined) ?? {};
  const sections = [
    { title: 'Failures', items: groups.failed ?? [] },
    { title: 'Warnings', items: groups.warnings ?? [] },
    { title: 'Passed', items: groups.passed ?? [] },
  ];

  return (
    <div className='grid gap-4'>
      {sections.map(section => {
        const tone =
          section.title === 'Failures' ? 'FAIL' : section.title === 'Warnings' ? 'WARN' : 'INFO';
        const content = (
          <div className='grid gap-2'>
            {section.items.length > 0 ? (
              section.items.slice(0, 8).map(item => (
                <div
                  key={String(item.name)}
                  className='rounded-xl border border-stone-200 bg-white px-3 py-2'
                >
                  <div className='flex items-center justify-between gap-3'>
                    <div>
                      <div className='text-sm font-medium text-stone-900'>{String(item.name)}</div>
                      <div className='text-xs text-stone-500'>
                        {String(item.reportFile ?? 'No report file')}
                      </div>
                    </div>
                    {'status' in item && item.status ? (
                      <StatusBadge status={String(item.status).toUpperCase() as DashboardStatus} />
                    ) : null}
                  </div>
                </div>
              ))
            ) : (
              <div className='rounded-xl border border-dashed border-stone-200 px-3 py-4 text-sm text-stone-500'>
                No entries.
              </div>
            )}
          </div>
        );

        if (section.title === 'Passed') {
          return (
            <details
              key={section.title}
              className='rounded-2xl border border-stone-200 bg-stone-50 p-4'
            >
              <summary className='flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-stone-950'>
                <span>{section.title}</span>
                <span className='text-xs font-semibold uppercase tracking-[0.12em] text-stone-500'>
                  {section.items.length}
                </span>
              </summary>
              <div className='mt-3'>{content}</div>
            </details>
          );
        }

        return (
          <div key={section.title} className={`rounded-2xl border p-4 ${toneForSignal(tone)}`}>
            <div className='mb-3 flex items-center justify-between gap-3'>
              <div className='text-sm font-bold'>{section.title}</div>
              <div className='text-xs font-semibold uppercase tracking-[0.12em] opacity-80'>
                {section.items.length}
              </div>
            </div>
            {content}
          </div>
        );
      })}
    </div>
  );
}

function PipelineTimeline({ report }: { report: DashboardReport<Record<string, unknown>> }) {
  const steps = (report.data.timelineSteps as DashboardTimelineStep[] | undefined) ?? [];

  return (
    <div className='grid gap-3'>
      {steps.map(step => (
        <div key={step.name} className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
          <div className='flex flex-wrap items-center justify-between gap-3'>
            <div>
              <div className='text-sm font-bold text-stone-950'>{step.name}</div>
              <div className='text-xs text-stone-600'>
                {Array.isArray(step.outputs) && step.outputs.length > 0
                  ? step.outputs.join(', ')
                  : (step.reason ?? 'No declared outputs')}
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='text-xs text-stone-500'>{step.durationMs.toLocaleString()} ms</div>
              <StatusBadge status={step.status} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SlowestSteps({ report }: { report: DashboardReport<Record<string, unknown>> }) {
  const steps = (report.data.slowestSteps as DashboardTimelineStep[] | undefined) ?? [];

  return (
    <div className='grid gap-3'>
      {steps.map(step => (
        <div key={step.name} className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
          <div className='flex flex-wrap items-center justify-between gap-3'>
            <div>
              <div className='text-sm font-bold text-stone-950'>{step.name}</div>
              <div className='text-xs text-stone-600'>
                {Array.isArray(step.outputs) && step.outputs.length > 0
                  ? step.outputs.join(', ')
                  : (step.reason ?? 'No declared outputs')}
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='text-xs text-stone-500'>{step.durationMs.toLocaleString()} ms</div>
              <StatusBadge status={step.status} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function WarningsPanel({ report }: { report: DashboardReport<Record<string, unknown>> }) {
  const warnings = (report.data.warningsPanel as
    | {
        validators?: DashboardWarningPanelItem[];
        skippedAnalyzers?: DashboardWarningPanelItem[];
        sizeWarnings?: DashboardWarningPanelItem[];
        staleReports?: DashboardWarningPanelItem[];
      }
    | undefined) ?? {
    validators: [],
    skippedAnalyzers: [],
    sizeWarnings: [],
    staleReports: [],
  };
  const sections = [
    { title: 'WARN Validators', items: warnings.validators ?? [] },
    { title: 'Skipped Analyzers', items: warnings.skippedAnalyzers ?? [] },
    { title: 'Size Warnings', items: warnings.sizeWarnings ?? [] },
    { title: 'Stale Reports', items: warnings.staleReports ?? [] },
  ];

  return (
    <div className='grid gap-4 xl:grid-cols-2'>
      {sections.map(section => (
        <div key={section.title} className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
          <div className='mb-3 flex items-center justify-between gap-3'>
            <div className='text-sm font-bold text-stone-950'>{section.title}</div>
            <div className='text-xs font-semibold uppercase tracking-[0.12em] text-stone-500'>
              {section.items.length}
            </div>
          </div>
          <div className='grid gap-2'>
            {section.items.length > 0 ? (
              section.items.map(item => (
                <div
                  key={`${section.title}-${item.name}-${item.detail}`}
                  className='rounded-xl border border-stone-200 bg-white px-3 py-3'
                >
                  <div className='flex flex-wrap items-center justify-between gap-2'>
                    <div className='text-sm font-medium text-stone-900'>{item.name}</div>
                    <StatusBadge status={item.status} />
                  </div>
                  <div className='mt-1 text-xs text-stone-500'>{item.detail}</div>
                </div>
              ))
            ) : (
              <div className='rounded-xl border border-dashed border-stone-200 px-3 py-4 text-sm text-stone-500'>
                No entries.
              </div>
            )}
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
  const integrityStrip = systemData.integrityStrip as DashboardIntegrityStrip | undefined;
  const lastRunDetails = systemData.lastRunDetails as DashboardLastRunDetails | undefined;
  const lastRunSummary = systemData.lastRunSummary as DashboardLastRunSummary | undefined;
  const systemHealth = (systemData.systemHealth as Record<string, unknown> | undefined)?.data as
    | Record<string, unknown>
    | undefined;
  const failureDrilldown = (reports.validators.data.failureDrilldown as
    | { failures?: DashboardFailureDrilldownItem[]; warnings?: DashboardFailureDrilldownItem[] }
    | undefined) ?? { failures: [], warnings: [] };
  const testsData = (systemData.tests as Record<string, unknown> | undefined) ?? {};
  const pipelineWarnings = (reports.pipeline.data.warningsPanel as
    | {
        validators?: DashboardWarningPanelItem[];
        skippedAnalyzers?: DashboardWarningPanelItem[];
        sizeWarnings?: DashboardWarningPanelItem[];
        staleReports?: DashboardWarningPanelItem[];
      }
    | undefined) ?? {
    validators: [],
    skippedAnalyzers: [],
    sizeWarnings: [],
    staleReports: [],
  };
  const topIssueItems = [
    ...(failureDrilldown.failures ?? []).map(item => ({
      title: item.name,
      detail: item.reportFile,
      status: item.reportStatus,
    })),
    ...((testsData.failedFiles as string[] | undefined) ?? []).map(file => ({
      title: file,
      detail: 'Failed test file',
      status: 'FAIL' as DashboardStatus,
    })),
  ];
  const slowStepItems = (
    (reports.pipeline.data.slowestSteps as DashboardTimelineStep[] | undefined) ?? []
  ).map(step => ({
    title: step.name,
    detail: `${step.durationMs.toLocaleString()} ms${step.outputs && step.outputs.length > 0 ? ` | ${step.outputs.join(', ')}` : ''}`,
    status: step.status,
  }));
  const recentWarningItems = [
    ...(pipelineWarnings.validators ?? []).map(item => ({
      title: item.name,
      detail: item.detail,
      status: item.status,
    })),
    ...(pipelineWarnings.staleReports ?? []).map(item => ({
      title: item.name,
      detail: item.detail,
      status: item.status,
    })),
    ...(pipelineWarnings.sizeWarnings ?? []).map(item => ({
      title: item.name,
      detail: item.detail,
      status: item.status,
    })),
  ];

  return (
    <div className='mx-auto grid max-w-7xl gap-6 px-6 py-8'>
      <SectionNavigation />

      <Surface
        sectionId='overview'
        title='System Overview'
        subtitle='Single control panel for deterministic audit state.'
      >
        <div className='grid gap-4'>
          <DashboardHero
            status={String(systemData.status ?? 'PASS').toUpperCase() as DashboardStatus}
            timestamp={systemData.timestamp}
            durationMs={systemData.durationMs}
            quickLinks={<QuickLinks />}
          />
          {integrityStrip ? <IntegrityStrip entries={integrityStrip} /> : null}
          <SummaryGrid report={reports.system} />
          <div className='grid gap-4 xl:grid-cols-3'>
            <OverviewSignalCard
              title='Top Issues'
              summary='Critical failures first: failed validators and failed test files.'
              tone='FAIL'
              items={topIssueItems}
              emptyLabel='No critical issues recorded.'
            />
            <OverviewSignalCard
              title='Top Slow Steps'
              summary='Most expensive pipeline steps from the current report bundle.'
              tone='WARN'
              items={slowStepItems}
              emptyLabel='No slow-step data recorded.'
            />
            <OverviewSignalCard
              title='Recent Warnings'
              summary='Warnings and stale conditions that still deserve attention.'
              tone='INFO'
              items={recentWarningItems}
              emptyLabel='No warnings recorded.'
            />
          </div>
          {lastRunDetails ? <LastRunDetails details={lastRunDetails} /> : null}
          {lastRunSummary ? <LastRunSummary summary={lastRunSummary} /> : null}
        </div>
        <div className='mt-4'>
          <KeyValueList
            entries={[
              { label: 'Overall status', value: systemData.status },
              { label: 'Generated at', value: systemData.timestamp },
              { label: 'Duration (ms)', value: systemData.durationMs },
              {
                label: 'Validation status',
                value: (systemData.validate as Record<string, unknown>)?.status,
              },
              {
                label: 'Tests status',
                value: (systemData.tests as Record<string, unknown>)?.status,
              },
              {
                label: 'Reports status',
                value: (systemData.reports as Record<string, unknown>)?.status,
              },
              { label: 'Health drift', value: systemHealth?.drift },
              {
                label: 'Health coverage (validators)',
                value: (systemHealth?.coverage as Record<string, unknown> | undefined)?.validators,
              },
              {
                label: 'Health coverage (analyzers)',
                value: (systemHealth?.coverage as Record<string, unknown> | undefined)?.analyzers,
              },
            ]}
          />
        </div>
      </Surface>

      <Surface
        sectionId='validators'
        title='Validators'
        subtitle='Failures first, warnings second, passed validators lowered in visual priority'
      >
        <SummaryGrid report={reports.validators} />
        <div className='mt-4 grid gap-4 xl:grid-cols-2'>
          <FailureDrilldown items={failureDrilldown.failures ?? []} title='Failure Drilldown' />
          <FailureDrilldown items={failureDrilldown.warnings ?? []} title='Warning Drilldown' />
        </div>
        <div className='mt-4'>
          <ValidatorGroups report={reports.validators} />
        </div>
        <details className='mt-4 rounded-2xl border border-stone-200 bg-stone-50 p-4'>
          <summary className='cursor-pointer list-none text-sm font-bold text-stone-950'>
            All Validators
          </summary>
          <div className='mt-4'>
            <ValidatorList report={reports.validators} />
          </div>
        </details>
      </Surface>

      <Surface
        sectionId='pipeline'
        title='Pipeline'
        subtitle='Timing visibility with slow steps and warnings promoted above full trace output'
      >
        <SummaryGrid report={reports.pipeline} />
        <div className='mt-4 grid gap-4 xl:grid-cols-[1.3fr_0.9fr]'>
          <div>
            <SlowestSteps report={reports.pipeline} />
          </div>
          <div>
            <WarningsPanel report={reports.pipeline} />
          </div>
        </div>
        <details className='mt-4 rounded-2xl border border-stone-200 bg-stone-50 p-4'>
          <summary className='cursor-pointer list-none text-sm font-bold text-stone-950'>
            Full Timeline
          </summary>
          <div className='mt-4'>
            <PipelineTimeline report={reports.pipeline} />
          </div>
        </details>
        <details className='mt-4 rounded-2xl border border-stone-200 bg-stone-50 p-4'>
          <summary className='cursor-pointer list-none text-sm font-bold text-stone-950'>
            Analyzer Coverage
          </summary>
          <div className='mt-4'>
            <AnalyzerList report={reports.pipeline} />
          </div>
        </details>
      </Surface>

      <Surface
        sectionId='graph'
        title='Graph'
        subtitle='Authority map, graph validation, and derived summary'
      >
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

      <Surface
        sectionId='topics'
        title='Topics'
        subtitle='Topic authority scores and topic insight report'
      >
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
        sectionId='content'
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
    </div>
  );
}

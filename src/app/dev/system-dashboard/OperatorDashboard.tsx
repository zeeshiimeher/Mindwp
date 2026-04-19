'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import type {
  ContractIntegrityReport,
  PageIntelligenceItem,
  PageStatus,
  PriorityItem,
  PriorityLevel,
  PriorityType,
  SlowTestReport,
  StatusChangeItem,
  TestFileReport,
  UnifiedHealthStatus,
  UnifiedStepStatus,
  UnifiedSystemReport,
  ValidationDetailReport,
} from '@/lib/dev/system-report';

type FilterPreset = 'needs-attention' | 'high-impact' | 'all-healthy';
type ConfidenceLevel = 'High' | 'Medium' | 'Low';
type ActionStatus = 'pending' | 'in-progress' | 'completed';
type StoredActionState = {
  inProgress: string[];
  completed: string[];
  dismissed: string[];
  focusMode: boolean;
};

const STORAGE_KEY = 'mindwp:operator-dashboard:v2';
const MAX_WORKING_SET = 3;

const statusTone: Record<UnifiedStepStatus | PageStatus, string> = {
  PASS: 'border-emerald-300 bg-emerald-100 text-emerald-900',
  FAIL: 'border-rose-300 bg-rose-100 text-rose-900',
  SKIPPED: 'border-amber-200 bg-amber-50 text-amber-900',
  OK: 'border-emerald-300 bg-emerald-100 text-emerald-900',
  WARNING: 'border-amber-300 bg-amber-100 text-amber-900',
};

const healthTone: Record<UnifiedHealthStatus, string> = {
  OK: 'border-emerald-300 bg-emerald-100 text-emerald-900',
  ISSUES: 'border-amber-300 bg-amber-100 text-amber-900',
};

const priorityTone: Record<PriorityLevel, string> = {
  HIGH: 'border-rose-300 bg-rose-100 text-rose-900',
  MEDIUM: 'border-amber-300 bg-amber-100 text-amber-900',
  LOW: 'border-emerald-300 bg-emerald-100 text-emerald-900',
};

const confidenceTone: Record<ConfidenceLevel, string> = {
  High: 'border-emerald-300 bg-emerald-100 text-emerald-900',
  Medium: 'border-amber-300 bg-amber-100 text-amber-900',
  Low: 'border-rose-300 bg-rose-100 text-rose-900',
};

const typeReasonMap: Record<PriorityType, string> = {
  conversion: 'Conversion path is weaker than it should be.',
  cta: 'Call-to-action pattern needs attention.',
  contract: 'Required page structure is drifting.',
  content: 'Page content is not supporting the next decision clearly.',
  lint: 'Implementation cleanup is still visible in the run.',
};

const typeHintMap: Record<PriorityType, string> = {
  conversion: 'Tighten the next action on the affected page.',
  cta: 'Standardize the CTA and restore the lead path.',
  contract: 'Bring the page back to the expected structure.',
  content: 'Clarify the page message and support content.',
  lint: 'Clean the implementation issue before it spreads.',
};

const pageTypeMap: Array<{ type: PriorityType; label: string; matchers: string[] }> = [
  { type: 'cta', label: 'CTA', matchers: ['cta', 'call to action', 'lead capture'] },
  { type: 'conversion', label: 'Conversion', matchers: ['conversion', 'capture path', 'lead'] },
  {
    type: 'contract',
    label: 'Structure',
    matchers: ['contract', 'structure', 'template', 'domain'],
  },
  { type: 'content', label: 'Content', matchers: ['content', 'copy', 'coverage', 'quality'] },
  { type: 'lint', label: 'Implementation', matchers: ['lint', 'typecheck', 'implementation'] },
];

function priorityKey(priority: PriorityItem) {
  return `${priority.level}:${priority.type}:${priority.route ?? 'system'}:${priority.message}`;
}

function routeAnchor(route: string) {
  return `page-${route
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/(^-|-$)/g, '')
    .toLowerCase()}`;
}

function formatDuration(durationMs: number) {
  if (durationMs >= 1000) {
    return `${(durationMs / 1000).toFixed(durationMs >= 10_000 ? 0 : 1)}s`;
  }

  return `${Math.round(durationMs)} ms`;
}

function getDefaultPreset(report: UnifiedSystemReport): FilterPreset {
  const hasAttention = report.priorities.some(priority => priority.level !== 'LOW');
  const hasProblemPages = report.pages.some(page => page.status !== 'OK');

  if (hasAttention || hasProblemPages) {
    return 'needs-attention';
  }

  return 'all-healthy';
}

function loadStoredState(validKeys: Set<string>): StoredActionState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { inProgress: [], completed: [], dismissed: [], focusMode: false };
    }

    const parsed = JSON.parse(raw) as Partial<StoredActionState>;
    return {
      inProgress: (parsed.inProgress ?? [])
        .filter(key => validKeys.has(key))
        .slice(0, MAX_WORKING_SET),
      completed: (parsed.completed ?? []).filter(key => validKeys.has(key)),
      dismissed: (parsed.dismissed ?? []).filter(key => validKeys.has(key)),
      focusMode: parsed.focusMode === true,
    };
  } catch {
    return { inProgress: [], completed: [], dismissed: [], focusMode: false };
  }
}

function buildContractIssues(contracts: ContractIntegrityReport) {
  return [...contracts.featureIssues, ...contracts.serviceIssues];
}

function buildReportHealthIssues(reports: {
  missing: string[];
  stale: string[];
  errors: string[];
}) {
  return [
    ...reports.missing.map(file => `Missing report: ${file}`),
    ...reports.stale.map(file => `Stale report: ${file}`),
    ...reports.errors,
  ];
}

function buildLastChangedMap(changes: StatusChangeItem[]) {
  return new Set(changes.map(change => change.route));
}

function detectPrimaryIssueType(page: PageIntelligenceItem): PriorityType {
  const joined = page.issues.join(' ').toLowerCase();

  if (page.cta.issues > 0) {
    return 'cta';
  }

  for (const entry of pageTypeMap) {
    if (entry.matchers.some(matcher => joined.includes(matcher))) {
      return entry.type;
    }
  }

  if (page.content.status !== 'OK') {
    return 'content';
  }

  return 'conversion';
}

function issueLabel(type: PriorityType) {
  return pageTypeMap.find(entry => entry.type === type)?.label ?? 'Attention';
}

function priorityRank(level: PriorityLevel) {
  return level === 'HIGH' ? 0 : level === 'MEDIUM' ? 1 : 2;
}

function getConfidence(
  report: UnifiedSystemReport,
  activePriorities: PriorityItem[]
): {
  level: ConfidenceLevel;
  reason: string;
} {
  const blockingFailure = report.validate.blockingFailed > 0 || report.status === 'FAIL';
  const highCount = activePriorities.filter(priority => priority.level === 'HIGH').length;
  const newIssueCount = report.changes.newIssues.length;

  if (blockingFailure || highCount >= 3) {
    return {
      level: 'Low',
      reason: 'Blocking health or several high-priority items need attention.',
    };
  }

  if (highCount === 0 && newIssueCount === 0 && report.validate.warningCount <= 1) {
    return {
      level: 'High',
      reason: 'Validation is stable and no new urgent work appeared.',
    };
  }

  return {
    level: 'Medium',
    reason: 'System is safe, but there are active items worth checking today.',
  };
}

function filterPrioritiesByPreset(
  priorities: PriorityItem[],
  preset: FilterPreset,
  pageByRoute: Map<string, PageIntelligenceItem>
) {
  if (preset === 'all-healthy') {
    return [];
  }

  if (preset === 'high-impact') {
    return priorities.filter(priority => {
      if (priority.level === 'HIGH') {
        return true;
      }

      const page = priority.route ? pageByRoute.get(priority.route) : null;
      return Boolean(page && page.conversionPriority > 0);
    });
  }

  return priorities.filter(priority => priority.level !== 'LOW' || priority.type === 'lint');
}

function filterPagesByPreset(
  pages: PageIntelligenceItem[],
  preset: FilterPreset,
  changedRoutes: Set<string>
) {
  const filtered = pages.filter(page => {
    if (preset === 'all-healthy') {
      return page.status === 'OK';
    }

    if (preset === 'high-impact') {
      return page.conversionPriority > 0 || page.status !== 'OK';
    }

    return page.status !== 'OK';
  });

  return filtered.sort((left, right) => {
    const leftChanged = changedRoutes.has(left.route) ? 1 : 0;
    const rightChanged = changedRoutes.has(right.route) ? 1 : 0;

    if (rightChanged !== leftChanged) {
      return rightChanged - leftChanged;
    }

    if (right.conversionPriority !== left.conversionPriority) {
      return right.conversionPriority - left.conversionPriority;
    }

    return right.issues.length - left.issues.length || left.route.localeCompare(right.route);
  });
}

function changeMessages(items: StatusChangeItem[]) {
  return items.map(item => `${item.route}: ${item.previousStatus} -> ${item.nextStatus}`);
}

function getProgressCopy(completed: number, total: number) {
  if (total === 0) {
    return '0 / 0 actions completed';
  }

  return `${completed} / ${total} actions completed`;
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

function Surface({
  title,
  description,
  children,
  tone = 'border-stone-200 bg-white/90',
}: {
  title: string;
  description?: string;
  children: ReactNode;
  tone?: string;
}) {
  return (
    <SectionWrapper
      padding='none'
      container='none'
      className={`rounded-[28px] border p-5 shadow-[0_20px_60px_rgba(28,25,23,0.08)] ${tone}`}
    >
      <div className='mb-4 flex flex-wrap items-start justify-between gap-3'>
        <div>
          <h2 className='text-[1.02rem] font-semibold text-stone-950'>{title}</h2>
          {description ? <p className='mt-1 text-sm text-stone-600'>{description}</p> : null}
        </div>
      </div>
      {children}
    </SectionWrapper>
  );
}

function EmptyState({ title, body }: { title: string; body?: string }) {
  return (
    <div className='rounded-3xl border border-emerald-200 bg-emerald-50 p-4'>
      <div className='text-sm font-bold text-emerald-900'>{title}</div>
      {body ? <p className='mt-1 text-sm leading-6 text-emerald-800'>{body}</p> : null}
    </div>
  );
}

function ActionButton({
  children,
  onClick,
  tone,
}: {
  children: ReactNode;
  onClick: () => void;
  tone: string;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`rounded-xl border px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] transition hover:-translate-y-0.5 ${tone}`}
    >
      {children}
    </button>
  );
}

function ShortcutRow({
  status,
  onFixNow,
  onDone,
  onBackToPending,
  onReviewFirst,
  onIgnore,
}: {
  status: ActionStatus;
  onFixNow: () => void;
  onDone: () => void;
  onBackToPending: () => void;
  onReviewFirst: () => void;
  onIgnore: () => void;
}) {
  if (status === 'in-progress') {
    return (
      <div className='flex flex-wrap gap-2'>
        <ActionButton onClick={onDone} tone='border-emerald-400 bg-emerald-500 text-white'>
          Done
        </ActionButton>
        <ActionButton onClick={onBackToPending} tone='border-blue-300 bg-blue-50 text-blue-900'>
          Back To Pending
        </ActionButton>
        <ActionButton onClick={onReviewFirst} tone='border-stone-300 bg-white text-stone-800'>
          Review First
        </ActionButton>
      </div>
    );
  }

  return (
    <div className='flex flex-wrap gap-2'>
      <ActionButton onClick={onFixNow} tone='border-emerald-300 bg-emerald-50 text-emerald-900'>
        Fix Now
      </ActionButton>
      <ActionButton onClick={onReviewFirst} tone='border-stone-300 bg-white text-stone-800'>
        Review First
      </ActionButton>
      <ActionButton onClick={onIgnore} tone='border-amber-300 bg-amber-50 text-amber-900'>
        Ignore
      </ActionButton>
    </div>
  );
}

function MetricPill({
  label,
  value,
  tone,
}: {
  label: string;
  value: string | number;
  tone: string;
}) {
  return (
    <div className='rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-sm'>
      <div className='text-[11px] font-extrabold uppercase tracking-[0.12em] text-stone-500'>
        {label}
      </div>
      <div className='mt-1 flex items-center gap-2'>
        <span className='text-2xl font-black text-stone-950'>{value}</span>
        <Badge tone={tone}>{label}</Badge>
      </div>
    </div>
  );
}

function ErrorList({ items }: { items: string[] }) {
  if (items.length === 0) {
    return <p className='text-sm text-stone-600'>No recorded issues.</p>;
  }

  return (
    <ul className='grid gap-2 pl-4 text-sm leading-6 text-stone-700'>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ValidatorItem({ validator }: { validator: ValidationDetailReport }) {
  return (
    <div className='grid gap-2 rounded-2xl border border-stone-200 bg-stone-50 p-4'>
      <div className='flex flex-wrap items-center justify-between gap-3'>
        <div>
          <div className='text-sm font-bold text-stone-900'>{validator.name}</div>
          <div className='text-xs text-stone-600'>
            {validator.blocking ? 'Blocking validator' : 'Advisory validator'}
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-stone-600'>{formatDuration(validator.durationMs)}</span>
          <Badge tone={statusTone[validator.status]}>{validator.status}</Badge>
        </div>
      </div>
      {validator.errors.length > 0 ? <ErrorList items={validator.errors} /> : null}
      {validator.warnings.length > 0 ? <ErrorList items={validator.warnings} /> : null}
    </div>
  );
}

function TestFileItem({ file }: { file: TestFileReport }) {
  return (
    <div className='grid gap-2 rounded-2xl border border-stone-200 bg-stone-50 p-4'>
      <div className='flex flex-wrap items-center justify-between gap-3'>
        <div className='break-words text-sm font-bold text-stone-900'>{file.file}</div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-stone-600'>{formatDuration(file.durationMs)}</span>
          <Badge tone={statusTone[file.status]}>{file.status}</Badge>
        </div>
      </div>
      <div className='flex flex-wrap gap-3 text-xs text-stone-600'>
        <span>Tests: {file.tests}</span>
        <span>Failed: {file.failed}</span>
        <span>Skipped: {file.skipped}</span>
      </div>
      {file.failedTests.length > 0 ? <ErrorList items={file.failedTests} /> : null}
    </div>
  );
}

function SlowTestItem({ test }: { test: SlowTestReport }) {
  return (
    <div className='rounded-2xl border border-stone-200 bg-stone-50 p-4'>
      <div className='text-sm font-bold text-stone-900'>{test.name}</div>
      <div className='mt-1 break-words text-xs text-stone-600'>{test.file}</div>
      <div className='mt-2 flex items-center gap-2'>
        <span className='text-xs text-stone-600'>{formatDuration(test.durationMs)}</span>
        <Badge tone={statusTone[test.status]}>{test.status}</Badge>
      </div>
    </div>
  );
}

function PresetButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`rounded-2xl border px-4 py-3 text-sm font-bold transition ${
        active
          ? 'border-stone-950 bg-stone-950 text-white shadow-md'
          : 'border-stone-300 bg-white text-stone-800 hover:border-stone-400'
      }`}
    >
      {label}
    </button>
  );
}

function HeaderActionButton({
  active = false,
  children,
  onClick,
}: {
  active?: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`rounded-2xl border px-4 py-3 text-sm font-bold transition ${
        active
          ? 'border-stone-950 bg-stone-950 text-white shadow-md'
          : 'border-stone-300 bg-white/90 text-stone-800 hover:border-stone-400'
      }`}
    >
      {children}
    </button>
  );
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
          ? 'border-stone-950 bg-stone-950 text-white shadow-md'
          : 'border-stone-300 bg-white/90 text-stone-800 hover:border-stone-400'
      }`}
    >
      {label}
    </Link>
  );
}

export default function OperatorDashboard({ report }: { report: UnifiedSystemReport }) {
  const [preset, setPreset] = useState<FilterPreset>(() => getDefaultPreset(report));
  const [storedActions, setStoredActions] = useState<StoredActionState>({
    inProgress: [],
    completed: [],
    dismissed: [],
    focusMode: false,
  });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const validKeys = new Set(report.priorities.map(priorityKey));
    setStoredActions(loadStoredState(validKeys));
    setHydrated(true);
  }, [report.priorities]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    const validKeys = new Set(report.priorities.map(priorityKey));

    const nextState = {
      inProgress: storedActions.inProgress
        .filter(key => validKeys.has(key))
        .slice(0, MAX_WORKING_SET),
      completed: storedActions.completed.filter(key => validKeys.has(key)),
      dismissed: storedActions.dismissed.filter(key => validKeys.has(key)),
      focusMode: storedActions.focusMode,
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  }, [hydrated, report.priorities, storedActions]);

  const pageByRoute = new Map(report.pages.map(page => [page.route, page]));
  const inProgressSet = new Set(storedActions.inProgress);
  const completedSet = new Set(storedActions.completed);
  const dismissedSet = new Set(storedActions.dismissed);
  const actionablePriorities = report.priorities.filter(priority => {
    const key = priorityKey(priority);
    return !dismissedSet.has(key);
  });
  const pendingPriorities = actionablePriorities.filter(priority => {
    const key = priorityKey(priority);
    return !completedSet.has(key) && !inProgressSet.has(key);
  });
  const inProgressPriorities = storedActions.inProgress
    .map(key => actionablePriorities.find(priority => priorityKey(priority) === key) ?? null)
    .filter((priority): priority is PriorityItem => Boolean(priority))
    .slice(0, MAX_WORKING_SET);
  const completedPriorities = report.priorities.filter(priority =>
    completedSet.has(priorityKey(priority))
  );
  const todayFocus = [...pendingPriorities]
    .sort((left, right) => {
      const leftPage = left.route ? pageByRoute.get(left.route) : null;
      const rightPage = right.route ? pageByRoute.get(right.route) : null;
      const leftScore =
        (leftPage?.conversionPriority ?? 0) +
        (left.level === 'HIGH' ? 20 : left.level === 'MEDIUM' ? 10 : 0);
      const rightScore =
        (rightPage?.conversionPriority ?? 0) +
        (right.level === 'HIGH' ? 20 : right.level === 'MEDIUM' ? 10 : 0);

      return rightScore - leftScore || priorityRank(left.level) - priorityRank(right.level);
    })
    .slice(0, 3);
  const confidence = getConfidence(report, pendingPriorities);
  const changedRoutes = buildLastChangedMap(report.changes.statusChanged);
  const visiblePriorities = filterPrioritiesByPreset(pendingPriorities, preset, pageByRoute).slice(
    0,
    8
  );
  const visiblePages = filterPagesByPreset(report.pages, preset, changedRoutes).slice(0, 10);
  const validatorIssues = report.validate.validators.filter(
    validator => validator.errors.length > 0 || validator.warnings.length > 0
  );
  const reportHealthStatus: UnifiedHealthStatus =
    report.reports.missing.length === 0 &&
    report.reports.stale.length === 0 &&
    report.reports.errors.length === 0
      ? 'OK'
      : 'ISSUES';
  const progressCompleted = completedPriorities.length;
  const progressTotal = actionablePriorities.length;
  const focusMode = storedActions.focusMode;

  function getActionStatus(priority: PriorityItem): ActionStatus {
    const key = priorityKey(priority);

    if (completedSet.has(key)) {
      return 'completed';
    }

    if (inProgressSet.has(key)) {
      return 'in-progress';
    }

    return 'pending';
  }

  function updateState(next: (current: StoredActionState) => StoredActionState) {
    setStoredActions(current => next(current));
  }

  function markInProgress(priority: PriorityItem) {
    const key = priorityKey(priority);
    updateState(current => ({
      inProgress: [key, ...current.inProgress.filter(item => item !== key)].slice(
        0,
        MAX_WORKING_SET
      ),
      completed: current.completed.filter(item => item !== key),
      dismissed: current.dismissed.filter(item => item !== key),
      focusMode: current.focusMode,
    }));
  }

  function markCompleted(priority: PriorityItem) {
    const key = priorityKey(priority);
    updateState(current => ({
      inProgress: current.inProgress.filter(item => item !== key),
      completed: current.completed.includes(key) ? current.completed : [key, ...current.completed],
      dismissed: current.dismissed.filter(item => item !== key),
      focusMode: current.focusMode,
    }));
  }

  function dismissPriority(priority: PriorityItem) {
    const key = priorityKey(priority);
    updateState(current => ({
      inProgress: current.inProgress.filter(item => item !== key),
      completed: current.completed.filter(item => item !== key),
      dismissed: current.dismissed.includes(key) ? current.dismissed : [...current.dismissed, key],
      focusMode: current.focusMode,
    }));
  }

  function moveToPending(priority: PriorityItem) {
    const key = priorityKey(priority);
    updateState(current => ({
      inProgress: current.inProgress.filter(item => item !== key),
      completed: current.completed.filter(item => item !== key),
      dismissed: current.dismissed.filter(item => item !== key),
      focusMode: current.focusMode,
    }));
  }

  function resetToday() {
    updateState(current => ({
      inProgress: [],
      completed: [],
      dismissed: [],
      focusMode: current.focusMode,
    }));
  }

  function toggleFocusMode() {
    updateState(current => ({
      ...current,
      focusMode: !current.focusMode,
    }));
  }

  function reviewPriority(priority: PriorityItem) {
    if (priority.route) {
      window.location.hash = routeAnchor(priority.route);
      return;
    }

    window.location.hash = 'system-logs';
  }

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_26%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_22%),linear-gradient(180deg,#fff7ed_0%,#fafaf9_48%,#f0fdf4_100%)] text-stone-900'>
      <div className='mx-auto max-w-7xl px-6 py-6'>
        <header className='mb-4 grid gap-4 rounded-[30px] border border-amber-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(254,249,195,0.84)_42%,rgba(236,253,245,0.82))] p-6 shadow-[0_24px_80px_rgba(41,37,36,0.12)]'>
          <div className='flex flex-wrap items-start justify-between gap-4'>
            <div className='max-w-3xl'>
              <div className='text-xs font-extrabold uppercase tracking-[0.14em] text-amber-700'>
                Daily Operator Mode
              </div>
              <h1 className='mt-1 text-[2.2rem] font-black leading-none text-stone-950'>
                Daily command center
              </h1>
              <p className='mt-2 text-sm leading-6 text-stone-700'>
                Answer three questions fast: what should I do today, what matters most, and is the
                system safe.
              </p>
            </div>
            <div className='grid gap-2'>
              <Badge tone={statusTone[report.status]}>{report.status}</Badge>
              <Badge tone={confidenceTone[confidence.level]}>
                System confidence: {confidence.level}
              </Badge>
            </div>
          </div>

          <div className='flex flex-wrap gap-3'>
            <DashboardLinkButton href='/system-dashboard' label='Operator Dashboard' active />
            <DashboardLinkButton href='/dashboard' label='Client Dashboard' />
            <DashboardLinkButton href='/image-dashboard' label='Image Dashboard' />
          </div>

          <div className='flex flex-wrap gap-3'>
            <HeaderActionButton active={focusMode} onClick={toggleFocusMode}>
              {focusMode ? 'Exit Focus Mode' : 'Focus Mode'}
            </HeaderActionButton>
            <HeaderActionButton onClick={resetToday}>Reset Today</HeaderActionButton>
          </div>

          <div className='grid gap-3 md:grid-cols-2 xl:grid-cols-5'>
            <MetricPill label='System' value={report.status} tone={statusTone[report.status]} />
            <MetricPill
              label='Progress Today'
              value={getProgressCopy(progressCompleted, progressTotal)}
              tone={progressCompleted > 0 ? priorityTone.LOW : priorityTone.MEDIUM}
            />
            <MetricPill
              label='Confidence'
              value={confidence.level}
              tone={confidenceTone[confidence.level]}
            />
            <MetricPill
              label='Working set'
              value={inProgressPriorities.length}
              tone={inProgressPriorities.length > 0 ? priorityTone.MEDIUM : priorityTone.LOW}
            />
            <MetricPill
              label='Needs attention'
              value={pendingPriorities.length}
              tone={statusTone.WARNING}
            />
            <MetricPill label='Completed' value={progressCompleted} tone={priorityTone.LOW} />
          </div>

          <div className='flex flex-wrap gap-3 text-xs text-stone-600'>
            <span>Generated: {report.timestamp}</span>
            <span>Run time: {formatDuration(report.durationMs)}</span>
            <span>{confidence.reason}</span>
          </div>
        </header>

        <div className='grid gap-4'>
          <Surface
            title="Today's Focus"
            description='Top 3 pending actions only.'
            tone='border-stone-200 bg-white'
          >
            {todayFocus.length === 0 ? (
              <EmptyState
                title={
                  inProgressPriorities.length > 0
                    ? 'Finish the current working set, then the next focus will appear.'
                    : 'System is stable. No immediate actions required.'
                }
              />
            ) : (
              <div className='grid gap-3 xl:grid-cols-3'>
                {todayFocus.map((priority, index) => (
                  <div
                    key={priorityKey(priority)}
                    className='grid gap-3 rounded-3xl border border-stone-200 bg-stone-50 p-4'
                  >
                    <div className='flex items-start justify-between gap-3'>
                      <div className='flex gap-3'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white'>
                          {index + 1}
                        </div>
                        <div>
                          <div className='text-sm font-bold text-stone-950'>{priority.message}</div>
                          <div className='mt-1 text-xs text-stone-600'>
                            {typeReasonMap[priority.type]}
                          </div>
                        </div>
                      </div>
                      <div className='grid justify-items-end gap-2'>
                        <Badge tone={priorityTone[priority.level]}>{priority.level}</Badge>
                        <Badge tone='border-stone-300 bg-white text-stone-700'>Pending</Badge>
                      </div>
                    </div>
                    <ShortcutRow
                      status={getActionStatus(priority)}
                      onFixNow={() => markInProgress(priority)}
                      onDone={() => markCompleted(priority)}
                      onBackToPending={() => moveToPending(priority)}
                      onReviewFirst={() => reviewPriority(priority)}
                      onIgnore={() => dismissPriority(priority)}
                    />
                  </div>
                ))}
              </div>
            )}
          </Surface>

          <Surface
            title='Currently Working On'
            description='Max 3 active actions. Finish these before pulling in more work.'
            tone='border-blue-200 bg-blue-50/60'
          >
            {inProgressPriorities.length === 0 ? (
              <EmptyState title='No actions are currently in progress.' />
            ) : (
              <div className='grid gap-3 xl:grid-cols-3'>
                {inProgressPriorities.map(priority => (
                  <div
                    key={priorityKey(priority)}
                    className='grid gap-3 rounded-3xl border border-blue-200 bg-white p-4'
                  >
                    <div className='flex flex-wrap items-start justify-between gap-3'>
                      <div>
                        <div className='text-sm font-bold text-stone-950'>{priority.message}</div>
                        <div className='mt-1 text-xs text-stone-600'>
                          {priority.action || typeHintMap[priority.type]}
                        </div>
                      </div>
                      <div className='grid justify-items-end gap-2'>
                        <Badge tone={priorityTone[priority.level]}>{priority.level}</Badge>
                        <Badge tone='border-blue-300 bg-blue-100 text-blue-900'>In Progress</Badge>
                      </div>
                    </div>
                    <div className='flex flex-wrap gap-3 text-xs text-stone-600'>
                      <span>{priority.route ?? 'System-wide'}</span>
                      <span>{issueLabel(priority.type)}</span>
                    </div>
                    <ShortcutRow
                      status='in-progress'
                      onFixNow={() => markInProgress(priority)}
                      onDone={() => markCompleted(priority)}
                      onBackToPending={() => moveToPending(priority)}
                      onReviewFirst={() => reviewPriority(priority)}
                      onIgnore={() => dismissPriority(priority)}
                    />
                  </div>
                ))}
              </div>
            )}
          </Surface>

          {!focusMode ? (
            <>
              <Surface
                title='Quick Filters'
                description='Instant presets for priorities and page intelligence.'
                tone='border-stone-200 bg-white'
              >
                <div className='flex flex-wrap gap-3'>
                  <PresetButton
                    active={preset === 'needs-attention'}
                    label='🔥 Needs Attention'
                    onClick={() => setPreset('needs-attention')}
                  />
                  <PresetButton
                    active={preset === 'high-impact'}
                    label='🚀 High Impact'
                    onClick={() => setPreset('high-impact')}
                  />
                  <PresetButton
                    active={preset === 'all-healthy'}
                    label='🟢 All Healthy'
                    onClick={() => setPreset('all-healthy')}
                  />
                </div>
              </Surface>

              <div className='grid gap-4 xl:grid-cols-[1.05fr_1.25fr]'>
                <Surface
                  title='Priority Queue'
                  description='Only the actions that still matter.'
                  tone='border-amber-200 bg-amber-50/75'
                >
                  {visiblePriorities.length === 0 ? (
                    <EmptyState title='No open priority actions in this view.' />
                  ) : (
                    <div className='grid gap-3'>
                      {visiblePriorities.map(priority => (
                        <div
                          key={priorityKey(priority)}
                          className='grid gap-3 rounded-3xl border border-amber-200 bg-white p-4'
                        >
                          <div className='flex flex-wrap items-start justify-between gap-3'>
                            <div>
                              <div className='text-sm font-bold text-stone-950'>
                                {priority.message}
                              </div>
                              <div className='mt-1 text-xs text-stone-600'>
                                {typeReasonMap[priority.type]}
                              </div>
                            </div>
                            <div className='grid justify-items-end gap-2'>
                              <Badge tone={priorityTone[priority.level]}>{priority.level}</Badge>
                              <Badge tone='border-stone-300 bg-white text-stone-700'>Pending</Badge>
                            </div>
                          </div>
                          <div className='flex flex-wrap gap-3 text-xs text-stone-600'>
                            <span>{issueLabel(priority.type)}</span>
                            <span>{priority.route ?? 'System-wide'}</span>
                            <span>{priority.action || typeHintMap[priority.type]}</span>
                          </div>
                          <ShortcutRow
                            status={getActionStatus(priority)}
                            onFixNow={() => markInProgress(priority)}
                            onDone={() => markCompleted(priority)}
                            onBackToPending={() => moveToPending(priority)}
                            onReviewFirst={() => reviewPriority(priority)}
                            onIgnore={() => dismissPriority(priority)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </Surface>

                <Surface
                  title='Page Intelligence'
                  description='Filtered pages only, sorted for daily review.'
                  tone='border-stone-200 bg-white'
                >
                  {visiblePages.length === 0 ? (
                    <EmptyState title='No pages match this operator preset.' />
                  ) : (
                    <div className='grid gap-3'>
                      {visiblePages.map(page => {
                        const primaryType = detectPrimaryIssueType(page);
                        return (
                          <div
                            key={page.route}
                            id={routeAnchor(page.route)}
                            className='grid gap-3 rounded-3xl border border-stone-200 bg-stone-50 p-4 md:grid-cols-[minmax(0,1.5fr)_0.6fr_0.6fr_1fr] md:items-center'
                          >
                            <div className='grid gap-1'>
                              <Link
                                href={page.route}
                                className='break-words text-sm font-bold text-stone-950 hover:underline'
                              >
                                {page.route}
                              </Link>
                              <div className='text-xs text-stone-600'>
                                {typeHintMap[primaryType]}
                              </div>
                            </div>
                            <Badge tone={statusTone[page.status]}>
                              {page.status === 'OK' ? 'Healthy' : 'Needs attention'}
                            </Badge>
                            <div className='text-sm font-semibold text-stone-700'>
                              {page.issues.length} issue(s)
                            </div>
                            <div className='text-sm font-semibold text-stone-700'>
                              {issueLabel(primaryType)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </Surface>
              </div>

              <Surface
                title='Daily Signals'
                description='Only what changed since the last run.'
                tone='border-stone-200 bg-white'
              >
                <div className='grid gap-4 xl:grid-cols-4'>
                  <div className='rounded-3xl border border-emerald-200 bg-emerald-50 p-4'>
                    <div className='text-[11px] font-extrabold uppercase tracking-[0.12em] text-emerald-800'>
                      Resolved
                    </div>
                    <div className='mt-1 text-3xl font-black text-emerald-900'>
                      {report.changes.resolvedIssues.length}
                    </div>
                  </div>
                  <div className='rounded-3xl border border-amber-200 bg-amber-50 p-4'>
                    <div className='text-[11px] font-extrabold uppercase tracking-[0.12em] text-amber-800'>
                      New
                    </div>
                    <div className='mt-1 text-3xl font-black text-amber-900'>
                      {report.changes.newIssues.length}
                    </div>
                  </div>
                  <div className='rounded-3xl border border-blue-200 bg-blue-50 p-4'>
                    <div className='text-[11px] font-extrabold uppercase tracking-[0.12em] text-blue-800'>
                      Pages changed
                    </div>
                    <div className='mt-1 text-3xl font-black text-blue-900'>
                      {report.changes.statusChanged.length}
                    </div>
                  </div>
                  <div className='rounded-3xl border border-stone-200 bg-stone-50 p-4'>
                    <div className='text-[11px] font-extrabold uppercase tracking-[0.12em] text-stone-600'>
                      Report health
                    </div>
                    <div className='mt-2'>
                      <Badge tone={healthTone[reportHealthStatus]}>{reportHealthStatus}</Badge>
                    </div>
                  </div>
                </div>
              </Surface>

              <Surface
                title='System Logs'
                description='Collapsed by default. Expand only when you need operational detail.'
                tone='border-stone-200 bg-white'
              >
                <div id='system-logs' className='grid gap-4'>
                  <details className='rounded-3xl border border-stone-200 bg-stone-50 p-4'>
                    <summary className='cursor-pointer list-none text-sm font-bold text-stone-950'>
                      Safety overview
                    </summary>
                    <div className='mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
                      <div className='grid gap-2 rounded-2xl border border-stone-200 bg-white p-4'>
                        <Badge
                          tone={
                            report.system.contracts.features === 'OK' &&
                            report.system.contracts.services === 'OK'
                              ? healthTone.OK
                              : healthTone.ISSUES
                          }
                        >
                          Contracts
                        </Badge>
                        <ErrorList items={buildContractIssues(report.system.contracts)} />
                      </div>
                      <div className='grid gap-2 rounded-2xl border border-stone-200 bg-white p-4'>
                        <Badge tone={healthTone[report.system.graph.status]}>Graph</Badge>
                        <div className='text-sm text-stone-700'>
                          Nodes: {report.system.graph.nodes} | Orphans:{' '}
                          {report.system.graph.orphanNodes} | Invalid edges:{' '}
                          {report.system.graph.invalidEdges}
                        </div>
                      </div>
                      <div className='grid gap-2 rounded-2xl border border-stone-200 bg-white p-4'>
                        <Badge tone={healthTone[report.system.cta.status]}>CTA</Badge>
                        <div className='text-sm text-stone-700'>
                          Total: {report.system.cta.total} | Duplicate intents:{' '}
                          {report.system.cta.duplicateIntents} | Missing source:{' '}
                          {report.system.cta.missingSource}
                        </div>
                      </div>
                      <div className='grid gap-2 rounded-2xl border border-stone-200 bg-white p-4'>
                        <Badge tone={healthTone[reportHealthStatus]}>Reports</Badge>
                        <ErrorList items={buildReportHealthIssues(report.reports)} />
                      </div>
                    </div>
                  </details>

                  <details className='rounded-3xl border border-stone-200 bg-stone-50 p-4'>
                    <summary className='cursor-pointer list-none text-sm font-bold text-stone-950'>
                      Validators
                    </summary>
                    <div className='mt-4 grid gap-3'>
                      {(validatorIssues.length > 0
                        ? validatorIssues
                        : report.validate.validators
                      ).map(validator => (
                        <ValidatorItem key={validator.name} validator={validator} />
                      ))}
                    </div>
                  </details>

                  <details className='rounded-3xl border border-stone-200 bg-stone-50 p-4'>
                    <summary className='cursor-pointer list-none text-sm font-bold text-stone-950'>
                      Tests and typecheck
                    </summary>
                    <div className='mt-4 grid gap-4 xl:grid-cols-2'>
                      <div className='grid gap-3'>
                        {report.tests.slowTests.slice(0, 4).map(test => (
                          <SlowTestItem key={`${test.file}:${test.name}`} test={test} />
                        ))}
                        {report.tests.files.slice(0, 4).map(file => (
                          <TestFileItem key={file.file} file={file} />
                        ))}
                      </div>
                      <div className='rounded-2xl border border-stone-200 bg-white p-4'>
                        <div className='text-sm font-bold text-stone-950'>Typecheck</div>
                        <div className='mt-1 text-xs text-stone-600'>
                          {report.typecheck.errorCount} error(s) in{' '}
                          {formatDuration(report.typecheck.durationMs)}
                        </div>
                        <div className='mt-3'>
                          <ErrorList items={report.typecheck.errors} />
                        </div>
                      </div>
                    </div>
                  </details>

                  <details className='rounded-3xl border border-stone-200 bg-stone-50 p-4'>
                    <summary className='cursor-pointer list-none text-sm font-bold text-stone-950'>
                      Change log
                    </summary>
                    <div className='mt-4 grid gap-4 xl:grid-cols-3'>
                      <div className='rounded-2xl border border-rose-200 bg-white p-4'>
                        <div className='text-sm font-bold text-rose-900'>New issues</div>
                        <div className='mt-2'>
                          <ErrorList items={report.changes.newIssues.map(issue => issue.message)} />
                        </div>
                      </div>
                      <div className='rounded-2xl border border-emerald-200 bg-white p-4'>
                        <div className='text-sm font-bold text-emerald-900'>Resolved</div>
                        <div className='mt-2'>
                          <ErrorList
                            items={report.changes.resolvedIssues.map(issue => issue.message)}
                          />
                        </div>
                      </div>
                      <div className='rounded-2xl border border-amber-200 bg-white p-4'>
                        <div className='text-sm font-bold text-amber-900'>Status changed</div>
                        <div className='mt-2'>
                          <ErrorList items={changeMessages(report.changes.statusChanged)} />
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </Surface>
              {completedPriorities.length > 0 ? (
                <Surface
                  title='Completed Today'
                  description='Moved out of the main workflow so finished work does not clutter the queue.'
                  tone='border-emerald-200 bg-emerald-50/60'
                >
                  <div className='grid gap-3'>
                    {completedPriorities.slice(0, 8).map(priority => (
                      <div
                        key={priorityKey(priority)}
                        className='grid gap-3 rounded-3xl border border-emerald-200 bg-white/70 p-4 opacity-70'
                      >
                        <div className='flex flex-wrap items-start justify-between gap-3'>
                          <div>
                            <div className='text-sm font-bold text-stone-900'>
                              {priority.message}
                            </div>
                            <div className='mt-1 text-xs text-stone-600'>
                              {priority.route ?? 'System-wide'}
                            </div>
                          </div>
                          <Badge tone='border-emerald-300 bg-emerald-100 text-emerald-900'>
                            Completed
                          </Badge>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                          <ActionButton
                            onClick={() => moveToPending(priority)}
                            tone='border-stone-300 bg-white text-stone-800'
                          >
                            Reopen
                          </ActionButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </Surface>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

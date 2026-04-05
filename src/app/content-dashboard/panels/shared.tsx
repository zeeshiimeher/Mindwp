import type { TopicGap, TopicScore } from '../dashboard';

// ── Shared card wrapper ──────────────────────────────────────────────
export function Card({
  title,
  children,
  className = '',
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      <h2 className='mb-4 text-lg font-semibold text-gray-800'>{title}</h2>
      {children}
    </div>
  );
}

// ── Stat box ─────────────────────────────────────────────────────────
export function Stat({
  label,
  value,
  color = 'text-gray-900',
}: {
  label: string;
  value: string | number;
  color?: string;
}) {
  return (
    <div className='text-center'>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className='mt-1 text-xs text-gray-500'>{label}</div>
    </div>
  );
}

// ── Level badge ──────────────────────────────────────────────────────
const LEVEL_STYLES: Record<string, string> = {
  Dominant: 'bg-green-100 text-green-800',
  Strong: 'bg-blue-100 text-blue-800',
  Growing: 'bg-yellow-100 text-yellow-800',
  Weak: 'bg-orange-100 text-orange-800',
  Gap: 'bg-red-100 text-red-800',
};

export function LevelBadge({ level }: { level: string }) {
  const style = LEVEL_STYLES[level] ?? 'bg-gray-100 text-gray-800';
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${style}`}
    >
      {level}
    </span>
  );
}

// ── Health badge ─────────────────────────────────────────────────────
const HEALTH_STYLES: Record<string, string> = {
  orphan: 'bg-red-100 text-red-800',
  weak: 'bg-yellow-100 text-yellow-800',
  strong: 'bg-green-100 text-green-800',
  normal: 'bg-gray-100 text-gray-800',
};

export function HealthBadge({ health }: { health: string }) {
  const style = HEALTH_STYLES[health] ?? 'bg-gray-100 text-gray-800';
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${style}`}
    >
      {health}
    </span>
  );
}

// ── Missing layer pills ─────────────────────────────────────────────
const MISSING_STYLES: Record<string, string> = {
  blog: 'bg-blue-50 text-blue-700',
  resource: 'bg-purple-50 text-purple-700',
  industry: 'bg-green-50 text-green-700',
  'case-study': 'bg-red-50 text-red-700',
};

export function MissingPill({ type }: { type: string }) {
  const style = MISSING_STYLES[type] ?? 'bg-gray-50 text-gray-700';
  return (
    <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-xs font-medium ${style}`}>
      {type}
    </span>
  );
}

// ── No data fallback ─────────────────────────────────────────────────
export function NoData({ report }: { report: string }) {
  return (
    <div className='flex items-center justify-center rounded-lg bg-gray-50 px-4 py-12 text-sm text-gray-400'>
      No data — run{' '}
      <code className='mx-1 rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-600'>
        {report}
      </code>{' '}
      to generate
    </div>
  );
}

// Re-export types for convenience
export type { TopicGap, TopicScore };

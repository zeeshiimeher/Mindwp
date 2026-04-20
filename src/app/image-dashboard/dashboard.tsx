import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import type { ImageLogEntry, LearningMemory } from '@/lib/image-system/types';

// ─── Data Loaders ───────────────────────────────────────────────────

const DATA_DIR = 'src/lib/image-system/data';

function loadLog(): ImageLogEntry[] {
  const filePath = path.resolve(DATA_DIR, 'imageLog.json');
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as ImageLogEntry[];
}

function loadMemory(): LearningMemory {
  const filePath = path.resolve(DATA_DIR, 'learningMemory.json');
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as LearningMemory;
}

// ─── Aggregation ────────────────────────────────────────────────────

function computeOverview(log: ImageLogEntry[]) {
  if (log.length === 0) return { total: 0, avgScore: 0, successRate: 0 };
  const total = log.length;
  const avgScore = Math.round((log.reduce((s, e) => s + e.score, 0) / total) * 10) / 10;
  const successRate = Math.round((log.filter(e => e.score >= 8).length / total) * 100);
  return { total, avgScore, successRate };
}

function scoreDistribution(log: ImageLogEntry[]) {
  const buckets = { '9-10': 0, '7-8': 0, '5-6': 0, '<5': 0 };
  for (const e of log) {
    if (e.score >= 9) buckets['9-10']++;
    else if (e.score >= 7) buckets['7-8']++;
    else if (e.score >= 5) buckets['5-6']++;
    else buckets['<5']++;
  }
  return buckets;
}

function commonIssues(log: ImageLogEntry[]) {
  const counts: Record<string, number> = {};
  for (const e of log) {
    for (const issue of e.issues) {
      counts[issue] = (counts[issue] ?? 0) + 1;
    }
  }
  return Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8);
}

function domainPerformance(log: ImageLogEntry[]) {
  const groups: Record<string, number[]> = {};
  for (const e of log) {
    if (!groups[e.domain]) groups[e.domain] = [];
    groups[e.domain].push(e.score);
  }
  return Object.fromEntries(
    Object.entries(groups).map(([d, scores]) => [
      d,
      Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10,
    ])
  );
}

// ─── Styles ─────────────────────────────────────────────────────────

const card = 'rounded-lg border border-zinc-800 bg-zinc-900/60 p-5';
const heading2 = 'text-lg font-semibold text-white mb-3';
const statLabel = 'text-xs font-medium text-zinc-400 uppercase tracking-wider';
const statValue = 'text-2xl font-bold text-white mt-1';

// ─── Components ─────────────────────────────────────────────────────

function ScoreBar({ label, value, max }: { label: string; value: number; max: number }) {
  const filledSegments = max > 0 ? Math.round((value / max) * 20) : 0;
  return (
    <div className='flex items-center gap-3'>
      <span className='w-12 text-xs text-zinc-400 text-right'>{label}</span>
      <div className='flex flex-1 gap-0.5'>
        {Array.from({ length: 20 }, (_, index) => (
          <span
            key={`${label}-${index}`}
            className={
              index < filledSegments
                ? 'h-2 flex-1 rounded-full bg-blue-500'
                : 'h-2 flex-1 rounded-full bg-zinc-800'
            }
          />
        ))}
      </div>
      <span className='w-8 text-xs text-zinc-300 text-right'>{value}</span>
    </div>
  );
}

function Badge({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${color}`}>
      {children}
    </span>
  );
}

function scoreBadgeColor(score: number) {
  if (score >= 9) return 'bg-emerald-500/20 text-emerald-400';
  if (score >= 7) return 'bg-blue-500/20 text-blue-400';
  if (score >= 5) return 'bg-amber-500/20 text-amber-400';
  return 'bg-red-500/20 text-red-400';
}

// ─── Dashboard ──────────────────────────────────────────────────────

export default function ImageDashboard() {
  const log = loadLog();
  const memory = loadMemory();
  const overview = computeOverview(log);
  const dist = scoreDistribution(log);
  const issues = commonIssues(log);
  const domPerf = domainPerformance(log);
  const recent = [...log].reverse().slice(0, 12);
  const maxDist = Math.max(...Object.values(dist), 1);

  return (
    <main className='min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-10'>
      <header className='mb-8'>
        <h1 className='text-2xl font-bold text-white tracking-tight'>Image System Dashboard</h1>
        <p className='text-sm text-zinc-400 mt-1'>
          Visual debug scores, auto-tune history, and learning memory
        </p>
        <div className='mt-4 flex flex-wrap gap-3'>
          <Link
            href='/image-dashboard'
            className='rounded-2xl border border-zinc-100 bg-zinc-100 px-4 py-3 text-sm font-bold text-zinc-950 transition hover:border-white hover:bg-white'
          >
            Image Dashboard
          </Link>
          <Link
            href='/dev/system-dashboard'
            className='rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-bold text-zinc-100 transition hover:border-zinc-500'
          >
            Operator Dashboard
          </Link>
          <Link
            href='/dashboard'
            className='rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-bold text-zinc-100 transition hover:border-zinc-500'
          >
            Client Dashboard
          </Link>
        </div>
      </header>

      {log.length === 0 ? (
        <div className={card}>
          <p className='text-zinc-400 text-sm'>
            No image generation data yet. Run{' '}
            <code className='text-zinc-200 bg-zinc-800 px-1.5 py-0.5 rounded text-xs'>
              npx tsx scripts/image-system/image-generate.ts --mode test --domain blog --force
            </code>{' '}
            to generate your first images.
          </p>
        </div>
      ) : (
        <div className='space-y-6'>
          {/* ── Overview Stats ── */}
          <SectionWrapper
            padding='none'
            container='none'
            className='grid grid-cols-1 sm:grid-cols-3 gap-4'
          >
            <div className={card}>
              <p className={statLabel}>Total Generated</p>
              <p className={statValue}>{overview.total}</p>
            </div>
            <div className={card}>
              <p className={statLabel}>Avg Score</p>
              <p className={statValue}>{overview.avgScore}</p>
            </div>
            <div className={card}>
              <p className={statLabel}>Success Rate (≥8)</p>
              <p className={statValue}>{overview.successRate}%</p>
            </div>
          </SectionWrapper>

          {/* ── Score Distribution + Domain Performance ── */}
          <SectionWrapper
            padding='none'
            container='none'
            className='grid grid-cols-1 md:grid-cols-2 gap-4'
          >
            <div className={card}>
              <h2 className={heading2}>Score Distribution</h2>
              <div className='space-y-2'>
                {Object.entries(dist).map(([label, value]) => (
                  <ScoreBar key={label} label={label} value={value} max={maxDist} />
                ))}
              </div>
            </div>
            <div className={card}>
              <h2 className={heading2}>Domain Performance</h2>
              {Object.keys(domPerf).length > 0 ? (
                <div className='space-y-3'>
                  {Object.entries(domPerf).map(([domain, avg]) => (
                    <div key={domain} className='flex items-center justify-between'>
                      <span className='text-sm text-zinc-300'>{domain}</span>
                      <Badge color={scoreBadgeColor(avg)}>{avg}</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <p className='text-sm text-zinc-500'>No domain data yet</p>
              )}
            </div>
          </SectionWrapper>

          {/* ── Common Issues ── */}
          {issues.length > 0 && (
            <SectionWrapper padding='none' container='none' className={card}>
              <h2 className={heading2}>Common Issues</h2>
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
                {issues.map(([issue, count]) => (
                  <div
                    key={issue}
                    className='flex items-center justify-between bg-zinc-800/50 rounded-md px-3 py-2'
                  >
                    <span className='text-xs text-zinc-300 truncate'>{issue}</span>
                    <span className='text-xs font-semibold text-zinc-400 ml-2'>{count}</span>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          )}

          {/* ── Recent Images ── */}
          <SectionWrapper padding='none' container='none' className={card}>
            <h2 className={heading2}>Recent Generations</h2>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='text-zinc-400 text-xs uppercase tracking-wider border-b border-zinc-800'>
                    <th className='text-left py-2 pr-4'>Slug</th>
                    <th className='text-left py-2 pr-4'>Domain</th>
                    <th className='text-center py-2 pr-4'>Layout</th>
                    <th className='text-center py-2 pr-4'>Score</th>
                    <th className='text-center py-2 pr-4'>Iter</th>
                    <th className='text-left py-2'>Fixes</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map((entry, i) => (
                    <tr key={i} className='border-b border-zinc-800/50 hover:bg-zinc-800/30'>
                      <td className='py-2 pr-4 text-zinc-200 max-w-[200px] truncate'>
                        {entry.slug}
                      </td>
                      <td className='py-2 pr-4 text-zinc-400'>{entry.domain}</td>
                      <td className='py-2 pr-4 text-center text-zinc-300'>L{entry.layout}</td>
                      <td className='py-2 pr-4 text-center'>
                        <Badge color={scoreBadgeColor(entry.score)}>{entry.score}</Badge>
                      </td>
                      <td className='py-2 pr-4 text-center text-zinc-400'>{entry.iteration}</td>
                      <td className='py-2 text-zinc-500 text-xs'>
                        {entry.fixesApplied.length > 0 ? entry.fixesApplied.join(', ') : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionWrapper>

          {/* ── Best Configs (Learning Memory) ── */}
          {Object.keys(memory).length > 0 && (
            <SectionWrapper padding='none' container='none' className={card}>
              <h2 className={heading2}>Best Configs (Learning Memory)</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                {Object.entries(memory).map(([key, config]) => (
                  <div key={key} className='bg-zinc-800/50 rounded-md p-3 space-y-1'>
                    <p className='text-xs font-semibold text-zinc-200'>{key}</p>
                    <div className='text-[11px] text-zinc-400 space-y-0.5'>
                      <p>
                        layout: L{config.layout} · count: {config.count}
                      </p>
                      <p>
                        titleScale: {config.titleScale.toFixed(2)} · maxWidth: {config.maxTextWidth}
                      </p>
                      <p>
                        gradient: {config.gradientStrength.toFixed(2)} · vignette:{' '}
                        {config.vignetteStrength.toFixed(2)}
                      </p>
                      <p>
                        avgScore:{' '}
                        <span
                          className={config.avgScore >= 8 ? 'text-emerald-400' : 'text-amber-400'}
                        >
                          {config.avgScore.toFixed(1)}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          )}
        </div>
      )}
    </main>
  );
}

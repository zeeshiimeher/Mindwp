'use client';

import { useState } from 'react';

export type ExecutionSectionStatus = 'success' | 'warning' | 'error' | 'running';

export interface ExecutionOutputSection {
  id: string;
  title: string;
  status: ExecutionSectionStatus;
  output: string;
  duration: number;
}

interface ExecutionOutputPanelProps {
  label: string | null;
  sections: ExecutionOutputSection[];
  progress: {
    completed: number;
    total: number;
    currentLabel: string | null;
  } | null;
  onClear: () => void;
}

function getStatusClasses(status: ExecutionSectionStatus): string {
  if (status === 'success') {
    return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200';
  }

  if (status === 'warning' || status === 'running') {
    return 'border-amber-500/30 bg-amber-500/10 text-amber-200';
  }

  return 'border-rose-500/30 bg-rose-500/10 text-rose-200';
}

function classifyLine(line: string): string {
  if (/fail|error|broken|invalid|fatal/i.test(line)) {
    return 'text-rose-300';
  }

  if (/warn|warning|drift/i.test(line)) {
    return 'text-amber-200';
  }

  if (/pass|passed|success|clean|wrote|completed/i.test(line)) {
    return 'text-emerald-200';
  }

  return 'text-slate-300';
}

export function ExecutionOutputPanel({
  label,
  sections,
  progress,
  onClear,
}: ExecutionOutputPanelProps) {
  const [copyState, setCopyState] = useState<'idle' | 'done' | 'error'>('idle');

  async function copyOutput() {
    try {
      const text = sections
        .map(section => `${section.title}\n${section.output || 'Completed with no output.'}`)
        .join('\n\n');

      await navigator.clipboard.writeText(text);
      setCopyState('done');
    } catch {
      setCopyState('error');
    }

    setTimeout(() => setCopyState('idle'), 1200);
  }

  return (
    <section className='rounded-2xl border border-slate-200 bg-slate-950 p-5 text-slate-100 shadow-sm'>
      <div className='mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between'>
        <div>
          <h2 className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-300'>
            Output
          </h2>
          <p className='mt-1 text-sm text-slate-400'>
            Structured execution logs for the current run.
          </p>
          {label ? (
            <p className='mt-2 text-xs uppercase tracking-[0.16em] text-slate-500'>{label}</p>
          ) : null}
          {progress ? (
            <p className='mt-2 text-xs uppercase tracking-[0.16em] text-amber-200'>
              {progress.completed}/{progress.total} completed
              {progress.currentLabel ? ` • running ${progress.currentLabel}` : ''}
            </p>
          ) : null}
        </div>

        <div className='flex flex-wrap gap-2'>
          <button
            type='button'
            onClick={copyOutput}
            disabled={sections.length === 0}
            className='rounded-full border border-slate-700 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:border-slate-500 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-40'
          >
            {copyState === 'done'
              ? 'Copied'
              : copyState === 'error'
                ? 'Copy Failed'
                : 'Copy Output'}
          </button>
          <button
            type='button'
            onClick={onClear}
            disabled={sections.length === 0}
            className='rounded-full border border-slate-700 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:border-slate-500 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-40'
          >
            Clear
          </button>
        </div>
      </div>

      <div className='max-h-[34rem] space-y-3 overflow-auto rounded-xl border border-slate-800 bg-black/40 p-3'>
        {sections.length > 0 ? (
          sections.map((section, index) => (
            <details
              key={section.id}
              open={index === 0 || section.status === 'error' || section.status === 'running'}
              className='overflow-hidden rounded-xl border border-slate-800 bg-slate-950/70'
            >
              <summary className='flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3'>
                <div>
                  <div className='text-sm font-semibold text-slate-100'>{section.title}</div>
                  <div className='mt-1 text-xs uppercase tracking-[0.16em] text-slate-500'>
                    {section.duration}ms
                  </div>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${getStatusClasses(section.status)}`}
                >
                  {section.status}
                </span>
              </summary>

              <div className='border-t border-slate-800 px-4 py-3'>
                <pre className='whitespace-pre-wrap break-words font-mono text-xs leading-6'>
                  {(section.output || 'Completed with no output.')
                    .split('\n')
                    .map((line, lineIndex) => (
                      <div key={`${section.id}-${lineIndex}`} className={classifyLine(line)}>
                        {line || ' '}
                      </div>
                    ))}
                </pre>
              </div>
            </details>
          ))
        ) : (
          <p className='p-4 text-sm text-slate-500'>
            No scripts or workflows have been run in this session.
          </p>
        )}
      </div>
    </section>
  );
}

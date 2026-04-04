import {
  loadExecutionSystemStatus,
  loadScriptHistory,
  loadScriptRegistry,
} from '@/lib/dev/executionVisibility';

import { ReportViewer } from './ReportViewer';
import { ScriptExplorer } from './ScriptExplorer';

const toolSurfaces = [
  {
    name: 'Authority Dashboard',
    href: '/dev/authority-dashboard',
    note: 'Specialized authority, conversion, and fix intelligence.',
  },
  {
    name: 'Content Dashboard',
    href: '/content-dashboard',
    note: 'Graph, topic authority, and content gap reporting.',
  },
];

function formatTimestamp(value: string | null): string {
  if (!value) {
    return 'Unavailable';
  }

  return new Date(value).toLocaleString();
}

export default function Dashboard() {
  const status = loadExecutionSystemStatus();
  const scripts = loadScriptRegistry();
  const history = loadScriptHistory();

  return (
    <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      <header className='mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-slate-500'>
            Execution Visibility Layer
          </p>
          <h1 className='mt-2 text-3xl font-semibold tracking-tight text-slate-950'>
            Dev Dashboard
          </h1>
          <p className='mt-2 max-w-3xl text-sm text-slate-600'>
            Registry-backed script control, current system state, and standardized report
            visibility.
          </p>
        </div>

        <div className='rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm'>
          Scripts remain the source of truth
        </div>
      </header>

      <section className='mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
        <div className='mb-4'>
          <h2 className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>
            Top Bar
          </h2>
          <p className='mt-1 text-sm text-slate-600'>
            Pulled directly from the current synced state files.
          </p>
        </div>

        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
            <div className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-500'>
              Status
            </div>
            <div className='mt-3 text-2xl font-semibold text-slate-950'>{status.status}</div>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
            <div className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-500'>
              Drift
            </div>
            <div className='mt-3 text-2xl font-semibold text-slate-950'>{status.driftCount}</div>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
            <div className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-500'>
              Validators
            </div>
            <div className='mt-3 text-2xl font-semibold text-slate-950'>
              {status.validatorState}
            </div>
            <div className='mt-1 text-xs uppercase tracking-[0.14em] text-slate-400'>
              {status.validatorCount} validators
            </div>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
            <div className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-500'>
              Last Sync
            </div>
            <div className='mt-3 text-sm font-medium text-slate-950'>
              {formatTimestamp(status.lastSync)}
            </div>
          </div>
        </div>
      </section>

      <section className='mb-8'>
        <ScriptExplorer scripts={scripts} history={history} />
      </section>

      <section className='mb-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]'>
        <ReportViewer />

        <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
          <div className='mb-4'>
            <h2 className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>
              Related Tools
            </h2>
            <p className='mt-1 text-sm text-slate-600'>
              Existing dashboards kept as specialized analysis surfaces.
            </p>
          </div>

          <div className='space-y-3'>
            {toolSurfaces.map(tool => (
              <a
                key={tool.href}
                href={tool.href}
                className='block rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-900 hover:bg-white'
              >
                <div className='text-sm font-semibold text-slate-950'>{tool.name}</div>
                <div className='mt-1 text-sm text-slate-600'>{tool.note}</div>
                <div className='mt-2 font-mono text-xs text-slate-400'>{tool.href}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

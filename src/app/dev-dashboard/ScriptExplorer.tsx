'use client';

import { useState } from 'react';

import {
  type ScriptHistoryEntry,
  type ScriptIntent,
  type ScriptRegistryEntry,
} from '@/lib/dev/executionVisibility';
import {
  executeWorkflowSequentially,
  getWorkflowDefinition,
  loadWorkflowDefinitions,
  type WorkflowDefinition,
  type WorkflowStepResult,
} from '@/lib/dev/workflows';

import { ExecutionOutputPanel, type ExecutionOutputSection } from './ExecutionOutputPanel';

interface ScriptExplorerProps {
  scripts: ScriptRegistryEntry[];
  history: ScriptHistoryEntry[];
}

interface ScriptRunResult {
  scriptId: string;
  success: boolean;
  output: string;
  error: string | null;
  duration: number;
}

interface ProgressState {
  completed: number;
  total: number;
  currentLabel: string | null;
}

type QuickAction =
  | { type: 'script'; id: string; label: string }
  | { type: 'workflow'; id: string; label: string };

const workflows = loadWorkflowDefinitions();
const workflowPanels = ['system', 'content', 'design', 'debug'] as const;
const intentOrder: ScriptIntent[] = ['system', 'content', 'design', 'build', 'audit', 'debug'];
const categoryOrder: ScriptRegistryEntry['type'][] = [
  'validator',
  'generator',
  'analyzer',
  'runner',
  'phase-task',
];

const quickActions: QuickAction[] = [
  { type: 'script', id: 'validate-all', label: 'Validate' },
  { type: 'script', id: 'system-sync', label: 'Sync' },
  { type: 'script', id: 'dev-server', label: 'Dev' },
];

function formatIntentLabel(intent: ScriptIntent): string {
  return intent.charAt(0).toUpperCase() + intent.slice(1);
}

function formatTypeLabel(type: ScriptRegistryEntry['type']): string {
  return type === 'phase-task' ? 'Phase Task' : type.charAt(0).toUpperCase() + type.slice(1);
}

function formatTimeLabel(value: ScriptRegistryEntry['estimatedTime']): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatWorkflowPanelLabel(panel: WorkflowDefinition['panel']): string {
  return panel.charAt(0).toUpperCase() + panel.slice(1);
}

function formatTimestamp(value: string): string {
  return new Date(value).toLocaleString();
}

function toOutputSection(label: string, result: ScriptRunResult): ExecutionOutputSection {
  return {
    id: `${result.scriptId}-${result.duration}`,
    title: label,
    status: result.success ? 'success' : 'error',
    output: result.output || result.error || 'Completed with no output.',
    duration: result.duration,
  };
}

function updateHistoryEntries(
  entries: ScriptHistoryEntry[],
  script: ScriptRegistryEntry,
  result: ScriptRunResult
): ScriptHistoryEntry[] {
  const nextEntry: ScriptHistoryEntry = {
    scriptId: script.id,
    name: script.name,
    intent: script.intent,
    group: script.group,
    status: result.success ? 'success' : 'error',
    duration: result.duration,
    lastRun: new Date().toISOString(),
  };

  return [...entries.filter(entry => entry.scriptId !== script.id), nextEntry].sort((left, right) =>
    right.lastRun.localeCompare(left.lastRun)
  );
}

export function ScriptExplorer({ scripts, history }: ScriptExplorerProps) {
  const [historyEntries, setHistoryEntries] = useState(history);
  const [pendingActionId, setPendingActionId] = useState<string | null>(null);
  const [outputLabel, setOutputLabel] = useState<string | null>(null);
  const [outputSections, setOutputSections] = useState<ExecutionOutputSection[]>([]);
  const [progress, setProgress] = useState<ProgressState | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const visibleScripts = scripts.filter(script => showAdvanced || script.group !== 'advanced');
  const scriptsById = new Map(scripts.map(script => [script.id, script]));

  async function runScript(scriptId: string): Promise<WorkflowStepResult> {
    const response = await fetch('/api/run-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ scriptId }),
    });

    const payload = (await response.json()) as ScriptRunResult;
    const script = scriptsById.get(scriptId);

    if (script) {
      setHistoryEntries(currentEntries => updateHistoryEntries(currentEntries, script, payload));
    }

    return payload;
  }

  async function handleRunScript(scriptId: string) {
    const script = scriptsById.get(scriptId);
    if (!script) {
      return;
    }

    setPendingActionId(scriptId);
    setOutputLabel(script.name);
    setOutputSections([]);
    setProgress({ completed: 0, total: 1, currentLabel: script.name });

    try {
      const result = await runScript(scriptId);
      setOutputSections([toOutputSection(script.name, result)]);
      setProgress({ completed: 1, total: 1, currentLabel: null });
    } catch (error) {
      setOutputSections([
        {
          id: `${scriptId}-request-error`,
          title: script.name,
          status: 'error',
          output: error instanceof Error ? error.message : 'Unknown request failure.',
          duration: 0,
        },
      ]);
      setProgress({ completed: 1, total: 1, currentLabel: null });
    } finally {
      setPendingActionId(null);
    }
  }

  async function handleRunWorkflow(workflowId: string) {
    const workflow = getWorkflowDefinition(workflowId);
    if (!workflow) {
      return;
    }

    setPendingActionId(workflowId);
    setOutputLabel(workflow.name);
    setOutputSections([]);

    try {
      const result = await executeWorkflowSequentially(workflow, runScript, nextProgress => {
        const currentScript = nextProgress.currentScriptId
          ? (scriptsById.get(nextProgress.currentScriptId)?.name ?? nextProgress.currentScriptId)
          : null;

        setProgress({
          completed: nextProgress.completedSteps,
          total: nextProgress.totalSteps,
          currentLabel: currentScript,
        });
      });

      setOutputSections(
        result.results.map(step => {
          const script = scriptsById.get(step.scriptId);
          return toOutputSection(script?.name ?? step.scriptId, step);
        })
      );
      setProgress({
        completed: result.results.length,
        total: workflow.scripts.length,
        currentLabel: null,
      });
    } catch (error) {
      setOutputSections([
        {
          id: `${workflowId}-workflow-error`,
          title: workflow.name,
          status: 'error',
          output: error instanceof Error ? error.message : 'Unknown workflow failure.',
          duration: 0,
        },
      ]);
      setProgress({ completed: 0, total: workflow.scripts.length, currentLabel: null });
    } finally {
      setPendingActionId(null);
    }
  }

  return (
    <div className='space-y-8'>
      <section className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
        <div className='mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <h2 className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>
              Quick Actions
            </h2>
            <p className='mt-1 text-sm text-slate-600'>
              Run the most common actions from one place.
            </p>
          </div>
        </div>

        <div className='grid gap-3 md:grid-cols-2 xl:grid-cols-4'>
          {quickActions.map(action => (
            <button
              key={action.id}
              type='button'
              onClick={() => handleRunScript(action.id)}
              disabled={pendingActionId !== null}
              className='rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50'
            >
              <div className='text-sm font-semibold text-slate-950'>{action.label}</div>
              <div className='mt-2 text-xs uppercase tracking-[0.16em] text-slate-400'>
                {pendingActionId === action.id ? 'Running' : 'script'}
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
        <div className='mb-4'>
          <h2 className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>
            Workflows
          </h2>
          <p className='mt-1 text-sm text-slate-600'>
            Multi-step execution paths grouped by operational intent.
          </p>
        </div>

        <div className='space-y-5'>
          {workflowPanels.map(panel => {
            const panelWorkflows = workflows.filter(workflow => workflow.panel === panel);

            return (
              <section key={panel} className='space-y-3'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-sm font-semibold text-slate-900'>
                    {formatWorkflowPanelLabel(panel)}
                  </h3>
                  <span className='text-xs uppercase tracking-[0.16em] text-slate-400'>
                    {panelWorkflows.length} workflows
                  </span>
                </div>

                <div className='grid gap-3 lg:grid-cols-3'>
                  {panelWorkflows.map(workflow => (
                    <article
                      key={workflow.id}
                      className='rounded-2xl border border-slate-200 bg-slate-50 p-4'
                    >
                      <div className='flex items-start justify-between gap-3'>
                        <div>
                          <h4 className='text-sm font-semibold text-slate-950'>{workflow.name}</h4>
                          <p className='mt-1 text-sm text-slate-600'>{workflow.description}</p>
                        </div>
                        <span className='rounded-full bg-slate-900 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white'>
                          {workflow.estimatedTime}
                        </span>
                      </div>

                      <div className='mt-3 text-xs uppercase tracking-[0.14em] text-slate-400'>
                        {workflow.scripts.length} steps
                      </div>

                      <div className='mt-3 flex flex-wrap gap-2'>
                        {workflow.scripts.map(scriptId => (
                          <span
                            key={scriptId}
                            className='rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500'
                          >
                            {scriptsById.get(scriptId)?.name ?? scriptId}
                          </span>
                        ))}
                      </div>

                      <button
                        type='button'
                        onClick={() => handleRunWorkflow(workflow.id)}
                        disabled={pendingActionId !== null}
                        className='mt-4 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 transition hover:border-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50'
                      >
                        {pendingActionId === workflow.id ? 'Running…' : 'Run Workflow'}
                      </button>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
        <div className='mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <h2 className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>
              Script Explorer
            </h2>
            <p className='mt-1 text-sm text-slate-600'>
              Intent-grouped scripts with daily tools surfaced first.
            </p>
          </div>

          <button
            type='button'
            onClick={() => setShowAdvanced(current => !current)}
            className='rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 transition hover:border-slate-900 hover:bg-slate-50'
          >
            {showAdvanced ? 'Hide Advanced' : 'Show Advanced'}
          </button>
        </div>

        <div className='space-y-6'>
          {intentOrder.map(intent => {
            const intentScripts = visibleScripts.filter(script => script.intent === intent);
            if (intentScripts.length === 0) {
              return null;
            }

            return (
              <section key={intent} className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-sm font-semibold text-slate-900'>
                    {formatIntentLabel(intent)}
                  </h3>
                  <span className='text-xs uppercase tracking-[0.16em] text-slate-400'>
                    {intentScripts.length} scripts
                  </span>
                </div>

                <div className='space-y-4'>
                  {categoryOrder.map(type => {
                    const categoryScripts = intentScripts.filter(script => script.type === type);
                    if (categoryScripts.length === 0) {
                      return null;
                    }

                    return (
                      <div key={`${intent}-${type}`} className='space-y-3'>
                        <div className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-400'>
                          {formatTypeLabel(type)}
                        </div>

                        <div className='grid gap-3 lg:grid-cols-2 2xl:grid-cols-3'>
                          {categoryScripts.map(script => {
                            const lastRun = historyEntries.find(
                              entry => entry.scriptId === script.id
                            );

                            return (
                              <article
                                key={script.id}
                                className='rounded-2xl border border-slate-200 bg-slate-50 p-4'
                              >
                                <div className='flex items-start justify-between gap-3'>
                                  <div>
                                    <h4 className='text-sm font-semibold text-slate-950'>
                                      {script.name}
                                    </h4>
                                    <p className='mt-1 text-sm text-slate-600'>
                                      {script.description}
                                    </p>
                                  </div>
                                  <span className='rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500'>
                                    {formatTimeLabel(script.estimatedTime)}
                                  </span>
                                </div>

                                <div className='mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.16em]'>
                                  <span className='rounded-full border border-slate-200 bg-white px-2.5 py-1 text-slate-500'>
                                    {script.group}
                                  </span>
                                  <span className='rounded-full border border-slate-200 bg-white px-2.5 py-1 text-slate-500'>
                                    P{script.priority}
                                  </span>
                                  <span
                                    className={`rounded-full border px-2.5 py-1 ${
                                      lastRun?.status === 'error'
                                        ? 'border-rose-200 bg-rose-50 text-rose-700'
                                        : lastRun
                                          ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                                          : 'border-slate-200 bg-white text-slate-400'
                                    }`}
                                  >
                                    {lastRun ? lastRun.status : 'never run'}
                                  </span>
                                </div>

                                <div className='mt-3 text-xs text-slate-500'>
                                  {lastRun
                                    ? `Last run ${formatTimestamp(lastRun.lastRun)} • ${lastRun.duration}ms`
                                    : 'No recorded run yet.'}
                                </div>

                                <div className='mt-4 flex items-center justify-between gap-3'>
                                  <div className='font-mono text-[11px] text-slate-400'>
                                    {script.path}
                                  </div>
                                  {script.runnable ? (
                                    <button
                                      type='button'
                                      onClick={() => handleRunScript(script.id)}
                                      disabled={pendingActionId !== null}
                                      className='rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 transition hover:border-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50'
                                    >
                                      {pendingActionId === script.id ? 'Running…' : 'Run'}
                                    </button>
                                  ) : (
                                    <span className='text-xs uppercase tracking-[0.16em] text-slate-400'>
                                      Manual
                                    </span>
                                  )}
                                </div>
                              </article>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <ExecutionOutputPanel
        label={outputLabel}
        sections={outputSections}
        progress={progress}
        onClear={() => {
          setOutputLabel(null);
          setOutputSections([]);
          setProgress(null);
        }}
      />
    </div>
  );
}

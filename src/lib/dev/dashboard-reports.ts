import { readReportJson } from './reportJson';

export type DashboardStatus = 'PASS' | 'FAIL' | 'WARN' | 'SKIPPED';

export interface DashboardSummary {
  total: number;
  passed: number;
  failed: number;
  warnings: number;
}

export interface DashboardReport<TData = unknown> {
  name: string;
  status: DashboardStatus;
  summary: DashboardSummary;
  issues?: unknown[];
  data: TData;
}

export interface DashboardTimelineStep {
  name: string;
  status: DashboardStatus;
  durationMs: number;
  outputs?: string[];
  skipped?: boolean;
  reason?: string;
}

export interface DashboardAnalyzerCoverage {
  name: string;
  status: DashboardStatus;
  outputs: string[];
  skipped: boolean;
  durationMs: number;
}

export interface DashboardIntegrityStrip {
  reportsStatus: DashboardStatus;
  validatorCoveragePct: number;
  analyzerCoveragePct: number;
  drift: boolean;
}

export interface DashboardLastRunSummary {
  durationMs: number;
  totalReports: number;
  passed: number;
  failed: number;
  warnings: number;
}

export interface DashboardLastRunDetails {
  time: string;
  durationMs: number;
  status: DashboardStatus;
  cacheHits: number;
}

export interface DashboardFailureDrilldownItem {
  name: string;
  status: DashboardStatus;
  reportFile: string;
  reportStatus: DashboardStatus;
  blocking: boolean;
}

export interface DashboardWarningPanelItem {
  name: string;
  detail: string;
  status: DashboardStatus;
}

export interface DashboardBundle {
  system: DashboardReport<Record<string, unknown>>;
  validators: DashboardReport<Record<string, unknown>>;
  graph: DashboardReport<Record<string, unknown>>;
  topics: DashboardReport<Record<string, unknown>>;
  content: DashboardReport<Record<string, unknown>>;
  pipeline: DashboardReport<Record<string, unknown>>;
}

function readDashboardReport<TData>(fileName: string) {
  return readReportJson<DashboardReport<TData>>(`dashboard/${fileName}`);
}

export function readDashboardBundle(): DashboardBundle | null {
  const system = readDashboardReport<Record<string, unknown>>('system.json');
  const validators = readDashboardReport<Record<string, unknown>>('validators.json');
  const graph = readDashboardReport<Record<string, unknown>>('graph.json');
  const topics = readDashboardReport<Record<string, unknown>>('topics.json');
  const content = readDashboardReport<Record<string, unknown>>('content.json');
  const pipeline = readDashboardReport<Record<string, unknown>>('pipeline.json');

  if (!system || !validators || !graph || !topics || !content || !pipeline) {
    return null;
  }

  return {
    system,
    validators,
    graph,
    topics,
    content,
    pipeline,
  };
}

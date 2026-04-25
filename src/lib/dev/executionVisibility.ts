import fs from 'node:fs';
import path from 'node:path';

import {
  getDashboardReportFiles,
  getReportFiles,
  getRequiredCommands,
  getValidatorDefinitions,
} from '../../../scripts/core/system-manifest.mjs';

import { readJsonFile } from './reportJson';

export type ScriptIntent = 'system' | 'content' | 'design' | 'build' | 'audit' | 'debug';
export type ScriptGroup = 'daily' | 'occasional' | 'advanced';
export type EstimatedTime = 'fast' | 'medium' | 'slow';

export type ScriptCategory =
  | 'core'
  | 'validators'
  | 'generators'
  | 'analyzers'
  | 'runners'
  | 'visual';

export type ScriptType = 'validator' | 'generator' | 'analyzer' | 'runner' | 'utility';

export interface ScriptRegistryEntry {
  id: string;
  name: string;
  category: ScriptCategory;
  intent: ScriptIntent;
  group: ScriptGroup;
  priority: number;
  estimatedTime: EstimatedTime;
  path: string;
  description: string;
  type: ScriptType;
  runnable: boolean;
  command?: string;
}

interface UnifiedSystemReportSnapshot {
  status?: 'PASS' | 'FAIL';
  timestamp?: string;
  validate?: {
    status?: 'PASS' | 'FAIL';
    validatorCount?: number;
    blockingFailed?: number;
  };
}

export type ScriptRunStatus = 'success' | 'error';

interface ScriptHistoryDocument {
  generatedAt?: string | null;
  scripts?: ScriptHistoryEntry[];
}

export interface ScriptHistoryEntry {
  scriptId: string;
  name: string;
  intent: ScriptIntent;
  group: ScriptGroup;
  status: ScriptRunStatus;
  duration: number;
  lastRun: string;
}

export interface ExecutionSystemStatus {
  status: 'CLEAN' | 'WARNING' | 'ERROR';
  rawStatus: 'CLEAN' | 'WARNING' | 'BROKEN' | 'UNKNOWN';
  driftCount: number;
  validatorCount: number;
  validatorState: 'PASS' | 'FAIL';
  lastSync: string | null;
  validationGeneratedAt: string | null;
}

export type ReportGroup = 'system' | 'content' | 'audit' | 'debug';

export interface DashboardReportFile {
  name: string;
  path: string;
  group: ReportGroup;
  updatedAt: string;
}

const root = process.cwd();
const reportsDir = path.join(root, 'reports');
const scriptHistoryPath = path.join(reportsDir, 'script-history.json');

const reportGroupOrder: ReportGroup[] = ['system', 'content', 'audit', 'debug'];
const scriptGroupOrder: ScriptGroup[] = ['daily', 'occasional', 'advanced'];
const dashboardReportNames = new Set(
  getDashboardReportFiles().map(filePath => path.basename(filePath))
);
const durableReportNames = new Set(getReportFiles().map(filePath => path.basename(filePath)));

function compareScriptGroups(left: ScriptGroup, right: ScriptGroup): number {
  return scriptGroupOrder.indexOf(left) - scriptGroupOrder.indexOf(right);
}

function ensureReportsDir(): void {
  fs.mkdirSync(reportsDir, { recursive: true });
}

function writeJsonFile(filePath: string, data: unknown): void {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
}

function collectCurrentReportFiles(): DashboardReportFile[] {
  if (!fs.existsSync(reportsDir)) {
    return [];
  }

  const files: DashboardReportFile[] = [];

  const addFilesFromDir = (dirPath: string, relativeDir: string): void => {
    if (!fs.existsSync(dirPath)) {
      return;
    }

    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
      if (entry.name === '.DS_Store') {
        continue;
      }

      const absolutePath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        if (relativeDir === 'reports' && entry.name === 'visual-audit') {
          addFilesFromDir(absolutePath, `${relativeDir}/${entry.name}`);
        }
        continue;
      }

      const relativePath = `${relativeDir}/${entry.name}`;
      const stats = fs.statSync(absolutePath);
      files.push({
        name: entry.name,
        path: relativePath,
        group: classifyReportGroup(relativePath),
        updatedAt: stats.mtime.toISOString(),
      });
    }
  };

  addFilesFromDir(reportsDir, 'reports');

  return files.sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
}

export function loadScriptRegistry(): ScriptRegistryEntry[] {
  const requiredCommands = getRequiredCommands().map((command, index) => ({
    id: command.name,
    name: command.name,
    category: 'core' as const,
    intent: command.name === 'build' ? ('build' as const) : ('system' as const),
    group: 'daily' as const,
    priority: index + 1,
    estimatedTime: command.name === 'system:quick' ? ('fast' as const) : ('medium' as const),
    path: 'package.json',
    description: command.description,
    type: 'runner' as const,
    runnable: true,
    command: `npm run ${command.name}`,
  }));
  const validators = getValidatorDefinitions().map((validator, index) => ({
    id: validator.name,
    name: validator.name,
    category: validator.category === 'core' ? ('core' as const) : ('validators' as const),
    intent:
      validator.category === 'seo' || validator.category === 'content'
        ? ('content' as const)
        : validator.category === 'structure'
          ? ('design' as const)
          : ('system' as const),
    group: validator.blocking === false ? ('occasional' as const) : ('daily' as const),
    priority: index + 10,
    estimatedTime: validator.blocking === false ? ('medium' as const) : ('fast' as const),
    path: [validator.command, ...validator.args].join(' '),
    description: `Run ${validator.name}.`,
    type: 'validator' as const,
    runnable: true,
    command: `npm run validate:all -- --only=${validator.name}`,
  }));

  return [...requiredCommands, ...validators].sort((left, right) => {
    if (left.priority !== right.priority) {
      return left.priority - right.priority;
    }

    const groupDelta = compareScriptGroups(left.group, right.group);
    if (groupDelta !== 0) {
      return groupDelta;
    }

    return left.name.localeCompare(right.name);
  });
}

export function getScriptRegistryEntry(scriptId: string): ScriptRegistryEntry | null {
  return loadScriptRegistry().find(script => script.id === scriptId) ?? null;
}

export function buildScriptCommand(script: ScriptRegistryEntry): string | null {
  if (script.command) {
    return script.command;
  }

  const extension = path.extname(script.path);

  if (extension === '.ts' || extension === '.tsx') {
    return `npx tsx ${script.path}`;
  }

  if (extension === '.mjs' || extension === '.cjs' || extension === '.js') {
    return `node ${script.path}`;
  }

  return null;
}

export function loadScriptHistory(): ScriptHistoryEntry[] {
  const history = readJsonFile<ScriptHistoryDocument>(scriptHistoryPath);

  if (!history || !Array.isArray(history.scripts)) {
    return [];
  }

  return history.scripts
    .filter(entry => typeof entry.scriptId === 'string')
    .sort((left, right) => right.lastRun.localeCompare(left.lastRun));
}

export function recordScriptHistory(entry: ScriptHistoryEntry): void {
  ensureReportsDir();

  const history = readJsonFile<ScriptHistoryDocument>(scriptHistoryPath) ?? {
    generatedAt: null,
    scripts: [],
  };

  const nextEntries = (history.scripts ?? []).filter(item => item.scriptId !== entry.scriptId);
  nextEntries.push(entry);
  nextEntries.sort((left, right) => right.lastRun.localeCompare(left.lastRun));

  writeJsonFile(scriptHistoryPath, {
    generatedAt: new Date().toISOString(),
    scripts: nextEntries,
  });
}

export function loadExecutionSystemStatus(): ExecutionSystemStatus {
  const report = readJsonFile<UnifiedSystemReportSnapshot>(
    path.join(reportsDir, 'system-report.json')
  );
  const rawStatus =
    report?.status === 'PASS' ? 'CLEAN' : report?.status === 'FAIL' ? 'BROKEN' : 'UNKNOWN';
  const status = rawStatus === 'BROKEN' ? 'ERROR' : rawStatus === 'UNKNOWN' ? 'WARNING' : rawStatus;
  const validatorCount = report?.validate?.validatorCount ?? 0;
  const blockingFailures = report?.validate?.blockingFailed ?? 0;

  return {
    status,
    rawStatus,
    driftCount: 0,
    validatorCount,
    validatorState: blockingFailures > 0 ? 'FAIL' : 'PASS',
    lastSync: report?.timestamp ?? null,
    validationGeneratedAt: report?.timestamp ?? null,
  };
}

function classifyReportGroup(reportPath: string): ReportGroup {
  const fileName = path.basename(reportPath);

  if (reportPath.startsWith('reports/visual-audit/') || fileName.includes('audit')) {
    return 'audit';
  }

  if (dashboardReportNames.has(fileName)) {
    return 'system';
  }

  if (
    fileName.includes('content') ||
    fileName.includes('topic') ||
    fileName.includes('authority') ||
    fileName.includes('client') ||
    fileName.includes('priority') ||
    fileName.includes('cta')
  ) {
    return 'content';
  }

  if (durableReportNames.has(fileName)) {
    return 'system';
  }

  return 'debug';
}

export function listLatestReports(): DashboardReportFile[] {
  return collectCurrentReportFiles();
}

export function listLatestReportsByGroup(): Array<{
  id: ReportGroup;
  label: string;
  reports: DashboardReportFile[];
}> {
  const labelMap: Record<ReportGroup, string> = {
    system: 'System Reports',
    content: 'Content Reports',
    audit: 'Audit Reports',
    debug: 'Debug Reports',
  };

  const reports = collectCurrentReportFiles();

  return reportGroupOrder.map(group => ({
    id: group,
    label: labelMap[group],
    reports: reports.filter(report => report.group === group).slice(0, 6),
  }));
}

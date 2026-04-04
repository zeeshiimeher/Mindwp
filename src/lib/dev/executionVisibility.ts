import fs from 'node:fs';
import path from 'node:path';

export type ScriptIntent = 'system' | 'content' | 'design' | 'build' | 'audit' | 'debug';
export type ScriptGroup = 'daily' | 'occasional' | 'advanced';
export type EstimatedTime = 'fast' | 'medium' | 'slow';

export type ScriptCategory =
  | 'core'
  | 'validators'
  | 'generators'
  | 'analyzers'
  | 'runners'
  | 'phase7';

export type ScriptType = 'validator' | 'generator' | 'analyzer' | 'runner' | 'phase-task';

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

interface ScriptRegistryDocument {
  scripts: ScriptRegistryEntry[];
}

interface ValidationSnapshot {
  generatedAt?: string;
  total?: {
    passed?: number;
    failed?: number;
    blockingFailed?: number;
    advisoryFailed?: number;
    total?: number;
  };
  validators?: Array<{
    name: string;
    status: 'pass' | 'fail';
    duration: number;
    blocking: boolean;
  }>;
}

interface SystemStateSnapshot {
  generatedAt?: string;
  status?: 'CLEAN' | 'WARNING' | 'BROKEN';
  validation?: {
    total?: {
      blockingFailed?: number;
      total?: number;
    };
  };
}

interface DriftSnapshot {
  generatedAt?: string;
  driftCount?: number;
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
const registryPath = path.join(root, 'scripts', 'system', 'script-registry.json');
const scriptHistoryPath = path.join(reportsDir, 'script-history.json');

const systemReportNames = new Set([
  'blog-report.json',
  'case-study-structure-report.json',
  'cta-report.json',
  'design-system-report.json',
  'docs-report.json',
  'feature-structure-report.json',
  'home-structure-report.json',
  'industry-structure-report.json',
  'inline-style-report.json',
  'metadata-completeness.json',
  'metadata-report.json',
  'resources-report.json',
  'service-structure-report.json',
  'structure-report.json',
  'validation-results.json',
  'system-state.json',
  'system-drift.json',
  'token-report.json',
  'vocabulary-report.json',
]);

const contentReportNames = new Set([
  'authority-map.dot',
  'authority-map.json',
  'client-report.json',
  'client-report.md',
  'cta-report.json',
  'content-gaps.json',
  'content-gaps.md',
  'content-intelligence.json',
  'content-score.json',
  'fix-log.json',
  'fix-log.md',
  'page-priorities.json',
  'topic-authority-scores.json',
  'topic-authority-scores.md',
]);

const debugReportNames = new Set([
  'graph-report.json',
  'script-history.json',
  'session-log.json',
  'token-v2-baseline.json',
]);

const reportGroupOrder: ReportGroup[] = ['system', 'content', 'audit', 'debug'];
const scriptGroupOrder: ScriptGroup[] = ['daily', 'occasional', 'advanced'];

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
        if (relativeDir === 'reports' && entry.name === 'phase7') {
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

function readJsonFile<T>(filePath: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
  } catch {
    return null;
  }
}

export function loadScriptRegistry(): ScriptRegistryEntry[] {
  const registry = readJsonFile<ScriptRegistryDocument>(registryPath);
  if (!registry || !Array.isArray(registry.scripts)) {
    return [];
  }

  return registry.scripts.sort((left, right) => {
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
  const systemState = readJsonFile<SystemStateSnapshot>(path.join(reportsDir, 'system-state.json'));
  const drift = readJsonFile<DriftSnapshot>(path.join(reportsDir, 'system-drift.json'));
  const validation = readJsonFile<ValidationSnapshot>(
    path.join(reportsDir, 'validation-results.json')
  );

  const rawStatus = systemState?.status ?? 'UNKNOWN';
  const status = rawStatus === 'BROKEN' ? 'ERROR' : rawStatus === 'UNKNOWN' ? 'WARNING' : rawStatus;
  const validatorCount =
    validation?.validators?.length ?? systemState?.validation?.total?.total ?? 0;
  const blockingFailures =
    validation?.total?.blockingFailed ?? systemState?.validation?.total?.blockingFailed ?? 0;

  return {
    status,
    rawStatus,
    driftCount: drift?.driftCount ?? 0,
    validatorCount,
    validatorState: blockingFailures > 0 ? 'FAIL' : 'PASS',
    lastSync: systemState?.generatedAt ?? null,
    validationGeneratedAt: validation?.generatedAt ?? null,
  };
}

function classifyReportGroup(reportPath: string): ReportGroup {
  const fileName = path.basename(reportPath);

  if (reportPath.startsWith('reports/phase7/') || fileName.includes('audit')) {
    return 'audit';
  }

  if (systemReportNames.has(fileName)) {
    return 'system';
  }

  if (debugReportNames.has(fileName)) {
    return 'debug';
  }

  if (contentReportNames.has(fileName)) {
    return 'content';
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

import fs from 'node:fs';
import path from 'node:path';

export type UnifiedStepStatus = 'PASS' | 'FAIL' | 'SKIPPED';
export type UnifiedHealthStatus = 'OK' | 'ISSUES';
export type PriorityLevel = 'HIGH' | 'MEDIUM' | 'LOW';
export type PriorityType = 'conversion' | 'cta' | 'contract' | 'content' | 'lint';
export type PageStatus = 'OK' | 'WARNING' | 'FAIL';

export interface UnifiedStepReport {
  status: UnifiedStepStatus;
  command: string | null;
  durationMs: number;
  errors: string[];
}

export interface ValidationStepReport extends UnifiedStepReport {
  total: number;
  warnings: string[];
  warningCount: number;
  validatorCount: number;
  passed: number;
  failed: number;
  blockingFailed: number;
  advisoryFailed: number;
  validators: ValidationDetailReport[];
}

export interface ValidationDetailReport {
  name: string;
  status: UnifiedStepStatus;
  blocking: boolean;
  durationMs: number;
  warnings: string[];
  errors: string[];
}

export interface TypecheckStepReport extends UnifiedStepReport {
  errorCount: number;
}

export interface TestFileReport {
  file: string;
  status: UnifiedStepStatus;
  tests: number;
  durationMs: number;
  passed: number;
  failed: number;
  skipped: number;
  failedTests: string[];
}

export interface SlowTestReport {
  name: string;
  file: string;
  durationMs: number;
  status: UnifiedStepStatus;
}

export interface TestStepReport extends UnifiedStepReport {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  files: TestFileReport[];
  slowTests: SlowTestReport[];
  failedFiles: string[];
}

export interface E2EStepReport extends UnifiedStepReport {
  skipped: boolean;
  total: number;
  passed: number;
  failed: number;
  skippedCount: number;
  failedFiles: string[];
}

export interface UnifiedReportFile {
  name: string;
  path: string;
  generatedAt: string;
  sourceCommand: string;
  updatedAt: string;
  ageMs: number;
}

export interface ReportsStepReport extends UnifiedStepReport {
  generatedAt: string;
  fileCount: number;
  freshestGeneratedAt: string | null;
  stalestGeneratedAt: string | null;
  files: UnifiedReportFile[];
  missing: string[];
  stale: string[];
}

export interface ContractIntegrityReport {
  features: UnifiedHealthStatus;
  services: UnifiedHealthStatus;
  featureIssues: string[];
  serviceIssues: string[];
  scanned: Record<string, number>;
}

export interface GraphHealthReport {
  status: UnifiedHealthStatus;
  nodes: number;
  orphanNodes: number;
  invalidEdges: number;
  issues: string[];
}

export interface CTAHealthReport {
  status: UnifiedHealthStatus;
  total: number;
  duplicateIntents: number;
  missingSource: number;
  issues: string[];
}

export interface UnifiedSystemIntelligence {
  contracts: ContractIntegrityReport;
  graph: GraphHealthReport;
  cta: CTAHealthReport;
}

export interface PriorityItem {
  level: PriorityLevel;
  type: PriorityType;
  message: string;
  route: string | null;
  source: string;
  action: string;
}

export interface PageIntelligenceStatus {
  status: PageStatus;
  issues: number;
}

export interface PageIntelligenceItem {
  route: string;
  type: string;
  status: PageStatus;
  conversionPriority: number;
  cta: PageIntelligenceStatus;
  content: {
    status: PageStatus | 'OK' | 'WARNING';
  };
  issues: string[];
}

export interface StatusChangeItem {
  route: string;
  previousStatus: PageStatus;
  nextStatus: PageStatus;
}

export interface ReportChanges {
  newIssues: PriorityItem[];
  resolvedIssues: PriorityItem[];
  statusChanged: StatusChangeItem[];
}

export interface UnifiedSystemReport {
  status: 'PASS' | 'FAIL';
  timestamp: string;
  sourceCommand: string;
  durationMs: number;
  validate: ValidationStepReport;
  typecheck: TypecheckStepReport;
  types?: TypecheckStepReport;
  tests: TestStepReport;
  e2e: E2EStepReport;
  reports: ReportsStepReport;
  system: UnifiedSystemIntelligence;
  priorities: PriorityItem[];
  pages: PageIntelligenceItem[];
  changes: ReportChanges;
}

function readJson<T>(fileName: string): T | null {
  const filePath = path.join(process.cwd(), 'reports', fileName);

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
  } catch {
    return null;
  }
}

export function readSystemReport(): UnifiedSystemReport | null {
  return readJson<UnifiedSystemReport>('system-report.json');
}

import fs from 'node:fs';
import path from 'node:path';

export type ClientDashboardStatus = 'healthy' | 'needs attention' | 'improving';
export type ClientPageStatus = 'Healthy' | 'Needs Improvement' | 'Improving';

export interface ClientDashboardSummary {
  systemHealth: 'Healthy' | 'Needs Attention' | 'Improving';
  issues: number;
  criticalIssues: number;
  pagesOptimized: number;
  improvementsMade: number;
}

export interface ClientPriorityAction {
  impact: 'Leads' | 'Visibility' | 'Content' | 'Performance';
  message: string;
  routes: string[];
  count: number;
}

export interface ClientPageInsight {
  route: string;
  status: ClientPageStatus;
  insight: string;
}

export interface ClientImpactGroup {
  impact: 'Leads' | 'Visibility' | 'Content' | 'Performance';
  issues: number;
}

export interface ClientDashboardChanges {
  newIssues: string[];
  resolvedIssues: string[];
  pagesImproved: number;
}

export interface ClientDashboardReport {
  generatedAt: string;
  sourceCommand: string;
  status: ClientDashboardStatus;
  summary: ClientDashboardSummary;
  priorities: ClientPriorityAction[];
  pages: ClientPageInsight[];
  impacts: ClientImpactGroup[];
  changes: ClientDashboardChanges;
}

function readJson<T>(fileName: string): T | null {
  const filePath = path.join(process.cwd(), 'reports', fileName);

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
  } catch {
    return null;
  }
}

export function readClientDashboardReport(): ClientDashboardReport | null {
  return readJson<ClientDashboardReport>('client-dashboard.json');
}

import fs from 'node:fs';
import path from 'node:path';

export interface SystemReportItem {
  source: string;
  code: string;
  message: string;
  count: number;
  details?: string | null;
}

export interface SystemReportSnapshot {
  status: 'clean' | 'warning' | 'broken';
  blocking: {
    count: number;
    items: SystemReportItem[];
  };
  advisory: {
    count: number;
    items: SystemReportItem[];
  };
  content: {
    missing_system: number;
    missing_intent: number;
    missing_metadata: number;
  };
  conversion: {
    cta_missing_system: number;
    cta_missing_source: number;
    invalid_contact_links: number;
  };
  graph: {
    invalid_edges: number;
    orphan_nodes: number;
  };
  design: {
    token_violations: number;
    inline_style_violations: number;
  };
  summary: string[];
  priority: string[];
}

export interface SystemStateSnapshot {
  status: string;
  graph?: {
    nodeCount: number;
    edgeCount: number;
  };
  summary?: {
    blockingFailed: number;
    advisoryFailed: number;
    driftCount: number;
  };
}

export interface DriftItem {
  type: string;
  severity: string;
  message: string;
}

export interface DriftSnapshot {
  driftCount: number;
  drift: DriftItem[];
}

export interface TopicAuthoritySnapshot {
  topicsAnalyzed: number;
  averageScore: number;
  scores: Array<{
    topic: string;
    score: number;
    level: string;
  }>;
}

export interface ContentGapsSnapshot {
  stats?: {
    topics?: number;
  };
  topicGaps?: Array<{ topic: string }>;
  resourceIndustryGaps?: Array<{ slug: string }>;
  industryCaseStudyGaps?: Array<{ slug: string }>;
}

function readJson<T>(fileName: string): T | null {
  const filePath = path.join(process.cwd(), 'reports', fileName);

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
  } catch {
    return null;
  }
}

export function readSystemDashboardData() {
  return {
    systemReport: readJson<SystemReportSnapshot>('system-report.json'),
    systemState: readJson<SystemStateSnapshot>('system-state.json'),
    systemDrift: readJson<DriftSnapshot>('system-drift.json'),
    topicAuthority: readJson<TopicAuthoritySnapshot>('topic-authority-scores.json'),
    contentGaps: readJson<ContentGapsSnapshot>('content-gaps.json'),
  };
}

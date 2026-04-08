import fs from 'node:fs';
import path from 'node:path';

export interface SystemReportItem {
  source: string;
  code: string;
  message: string;
  count: number;
  details?: string | null;
}

export interface SystemIssue {
  id: string;
  severity: 'critical' | 'warning';
  category: 'seo' | 'content' | 'authority';
  entityType: string;
  slug: string;
  title: string;
  description: string;
  impact: string;
  fix: string;
  autoFixable: boolean;
  source: string;
  code: string;
  details?: unknown;
  path?: string | null;
  count?: number;
}

export interface SystemIssueGroups {
  seo: SystemIssue[];
  content: SystemIssue[];
  authority: SystemIssue[];
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
  issues: SystemIssueGroups;
  issue_counts: {
    seo: { total: number; critical: number; warning: number };
    content: { total: number; critical: number; warning: number };
    authority: { total: number; critical: number; warning: number };
  };
  content: {
    missing_system: number;
    missing_metadata: number;
  };
  seo: {
    missing_metadata: number;
    duplicate_titles: number;
    duplicate_descriptions: number;
    canonical_misalignment: number;
    sitemap_misalignment: number;
    open_graph_gaps: number;
    missing_robots: number;
  };
  content_quality: {
    weak_descriptions: number;
    empty_headings: number;
  };
  authority: {
    topics_without_blog: number;
    topics_without_internal_path: number;
    orphan_topics: number;
    average_score: number;
  };
  topicAuthority: {
    averageScore: number;
    topicsAnalyzed: number;
    completeCoverageTopics: number;
    scores: TopicAuthoritySnapshot['scores'];
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
  criticalIssues: SystemIssue[];
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
  completeCoverageTopics?: number;
  scores: Array<{
    topic: string;
    score: number;
    level: string;
    status?: string;
    coverageStatus?: string;
    reasons?: string[];
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

export interface TestResultsSnapshot {
  generatedAt: string;
  lastRunTimestamp: string;
  passed: number;
  failed: number;
  skipped: number;
  duration: number;
  categories: {
    unit: {
      passed: number;
      failed: number;
      skipped: number;
      duration: number;
      status: 'passed' | 'failed';
    };
    system: {
      passed: number;
      failed: number;
      skipped: number;
      duration: number;
      status: 'passed' | 'failed';
    };
    integration: {
      passed: number;
      failed: number;
      skipped: number;
      duration: number;
      status: 'passed' | 'failed';
    };
    e2e: {
      passed: number;
      failed: number;
      skipped: number;
      duration: number;
      status: 'passed' | 'failed';
    };
  };
  validators?: {
    passed: number;
    failed: number;
    blockingFailed: number;
    advisoryFailed: number;
    total: number;
    duration: number;
    status: 'passed' | 'failed';
  };
}

export interface ValidationResultsSnapshot {
  generatedAt: string;
  seo?: {
    pagesAnalyzed: number;
    missingMetadata: number;
    duplicateTitles: number;
    duplicateDescriptions: number;
    canonicalMisalignment: number;
    sitemapMisalignment: number;
    openGraphGaps: number;
    missingRobots: number;
    canonicalAlignment: number;
    sitemapAlignment: number;
    openGraphCoverage: number;
  } | null;
  content?: {
    weakDescriptions: number;
    emptyHeadings: number;
  } | null;
  authority?: {
    topicsAnalyzed: number;
    topicsWithoutBlog: number;
    orphanTopics: number;
    topicsWithoutInternalPath: number;
  } | null;
}

export interface ContentQualitySnapshot {
  generatedAt: string;
  issueCount: number;
  warningCount: number;
  summary?: ValidationResultsSnapshot;
  issues?: SystemIssue[];
  warnings?: SystemIssue[];
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
    testResults: readJson<TestResultsSnapshot>('test-results.json'),
    validationResults: readJson<ValidationResultsSnapshot>('validation-results.json'),
    contentQuality: readJson<ContentQualitySnapshot>('content-quality-report.json'),
  };
}

export function getSystemIssues(systemReport: SystemReportSnapshot | null): SystemIssueGroups {
  return (
    systemReport?.issues ?? {
      seo: [],
      content: [],
      authority: [],
    }
  );
}

/**
 * Authority Analyzer
 *
 * Dev-only helpers for visualizing content authority.
 * Reads precomputed reports — no runtime graph computation.
 */

import fs from 'node:fs';
import path from 'node:path';

// --- Types ---

export interface AuthorityNode {
  id: string;
  type: string;
  health: 'strong' | 'moderate' | 'weak' | 'orphan';
}

export interface TopicScore {
  topic: string;
  blogCount: number;
  resourceCount: number;
  industryCount: number;
  serviceCount: number;
  caseStudyCount: number;
  score: number;
  level: string;
}

interface AuthorityMapReport {
  nodes: AuthorityNode[];
  edges: unknown[];
}

interface TopicScoresReport {
  generatedAt: string;
  topicsAnalyzed: number;
  averageScore: number;
  scores: TopicScore[];
}

// --- Data loading ---

function loadJSON<T>(filename: string): T {
  const filePath = path.join(process.cwd(), 'reports', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as T;
}

// --- Analysis functions ---

export function getTopAuthorityNodes(limit = 20): AuthorityNode[] {
  const report = loadJSON<AuthorityMapReport>('authority-map.json');
  return report.nodes.filter(n => n.health === 'strong').slice(0, limit);
}

export function getWeakTopics(threshold = 40): TopicScore[] {
  const report = loadJSON<TopicScoresReport>('topic-authority-scores.json');
  return report.scores.filter(s => s.score < threshold).sort((a, b) => a.score - b.score);
}

export function getOrphanNodes(): AuthorityNode[] {
  const report = loadJSON<AuthorityMapReport>('authority-map.json');
  return report.nodes.filter(n => n.health === 'orphan' || n.health === 'weak');
}

export function groupByCluster(): Record<string, TopicScore[]> {
  const report = loadJSON<TopicScoresReport>('topic-authority-scores.json');
  const groups: Record<string, TopicScore[]> = {
    strong: [],
    medium: [],
    weak: [],
  };

  for (const score of report.scores) {
    if (score.score > 80) {
      groups.strong.push(score);
    } else if (score.score >= 40) {
      groups.medium.push(score);
    } else {
      groups.weak.push(score);
    }
  }

  return groups;
}

export function getReportSummary(): {
  totalNodes: number;
  topicsAnalyzed: number;
  averageScore: number;
  generatedAt: string;
} {
  const mapReport = loadJSON<AuthorityMapReport>('authority-map.json');
  const topicReport = loadJSON<TopicScoresReport>('topic-authority-scores.json');
  return {
    totalNodes: mapReport.nodes.length,
    topicsAnalyzed: topicReport.topicsAnalyzed,
    averageScore: topicReport.averageScore,
    generatedAt: topicReport.generatedAt,
  };
}

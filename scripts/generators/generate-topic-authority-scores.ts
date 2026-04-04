import fs from 'node:fs';
import path from 'node:path';

import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';

import { CANONICAL_TOPICS } from '../../src/lib/content-graph/canonical';
import {
  getContentGraph,
  buildGraphIndexes,
} from '../../src/lib/content-graph/registry';
import type { ContentGraphNode } from '../../src/lib/content-graph/types';

// ── Score weights & thresholds ───────────────────────────────────────
const WEIGHTS = {
  blog: 25,
  resource: 25,
  industry: 20,
  service: 15,
  caseStudy: 15,
} as const;

const FULL_THRESHOLDS = {
  blog: 5,
  resource: 1,
  industry: 2,
  service: 1,
  caseStudy: 2,
} as const;

// ── Authority levels ─────────────────────────────────────────────────
type AuthorityLevel = 'Dominant' | 'Strong' | 'Growing' | 'Weak' | 'Gap';

function classifyLevel(score: number): AuthorityLevel {
  if (score >= 90) return 'Dominant';
  if (score >= 75) return 'Strong';
  if (score >= 60) return 'Growing';
  if (score >= 40) return 'Weak';
  return 'Gap';
}

const LEVEL_EMOJI: Record<AuthorityLevel, string> = {
  Dominant: '🟢',
  Strong: '🔵',
  Growing: '🟡',
  Weak: '🟠',
  Gap: '🔴',
};

// ── Types ────────────────────────────────────────────────────────────
interface TopicScore {
  topic: string;
  blogCount: number;
  resourceCount: number;
  industryCount: number;
  serviceCount: number;
  caseStudyCount: number;
  score: number;
  level: AuthorityLevel;
}

// ── Scoring ──────────────────────────────────────────────────────────
function partialScore(count: number, threshold: number, weight: number): number {
  return Math.min(count / threshold, 1) * weight;
}

function scoreTopic(nodes: ContentGraphNode[]): Omit<TopicScore, 'topic'> {
  const blogCount = nodes.filter(n => n.type === 'blog').length;
  const resourceCount = nodes.filter(n => n.type === 'resource').length;
  const industryCount = nodes.filter(
    n => n.type === 'industry-category' || n.type === 'industry-detail',
  ).length;
  const serviceCount = nodes.filter(n => n.type === 'service').length;
  const caseStudyCount = nodes.filter(n => n.type === 'case-study').length;

  const score = Math.round(
    partialScore(blogCount, FULL_THRESHOLDS.blog, WEIGHTS.blog) +
      partialScore(resourceCount, FULL_THRESHOLDS.resource, WEIGHTS.resource) +
      partialScore(industryCount, FULL_THRESHOLDS.industry, WEIGHTS.industry) +
      partialScore(serviceCount, FULL_THRESHOLDS.service, WEIGHTS.service) +
      partialScore(caseStudyCount, FULL_THRESHOLDS.caseStudy, WEIGHTS.caseStudy),
  );

  return {
    blogCount,
    resourceCount,
    industryCount,
    serviceCount,
    caseStudyCount,
    score,
    level: classifyLevel(score),
  };
}

// ── Markdown report ──────────────────────────────────────────────────
function generateMarkdown(scores: TopicScore[]): string {
  const lines: string[] = [];
  const sorted = [...scores].sort((a, b) => b.score - a.score);
  const avg = Math.round(sorted.reduce((s, t) => s + t.score, 0) / sorted.length);

  lines.push('# Topic Authority Scores');
  lines.push('');
  lines.push(`> Generated: ${new Date().toISOString().split('T')[0]}`);
  lines.push('');

  // Summary table
  lines.push('## Summary');
  lines.push('');
  lines.push(`| Metric | Value |`);
  lines.push(`|--------|-------|`);
  lines.push(`| Topics analyzed | ${sorted.length} |`);
  lines.push(`| Average score | ${avg} |`);
  lines.push(`| Dominant (≥90) | ${sorted.filter(t => t.level === 'Dominant').length} |`);
  lines.push(`| Strong (75–89) | ${sorted.filter(t => t.level === 'Strong').length} |`);
  lines.push(`| Growing (60–74) | ${sorted.filter(t => t.level === 'Growing').length} |`);
  lines.push(`| Weak (40–59) | ${sorted.filter(t => t.level === 'Weak').length} |`);
  lines.push(`| Gap (<40) | ${sorted.filter(t => t.level === 'Gap').length} |`);
  lines.push('');

  // Leaderboard
  lines.push('## Leaderboard');
  lines.push('');
  lines.push('| # | Topic | Score | Level | Blogs | Resources | Industries | Services | Case Studies |');
  lines.push('|---|-------|-------|-------|-------|-----------|------------|----------|--------------|');
  for (let i = 0; i < sorted.length; i++) {
    const t = sorted[i];
    lines.push(
      `| ${i + 1} | ${t.topic} | ${t.score} | ${LEVEL_EMOJI[t.level]} ${t.level} | ${t.blogCount} | ${t.resourceCount} | ${t.industryCount} | ${t.serviceCount} | ${t.caseStudyCount} |`,
    );
  }
  lines.push('');

  // Detailed per-topic
  lines.push('## Detailed Breakdown');
  lines.push('');
  for (const t of sorted) {
    lines.push(`### ${LEVEL_EMOJI[t.level]} ${t.topic}`);
    lines.push('');
    lines.push(`| Metric | Count | Threshold | Weight | Earned |`);
    lines.push(`|--------|-------|-----------|--------|--------|`);
    lines.push(
      `| Blogs | ${t.blogCount} | ≥ ${FULL_THRESHOLDS.blog} | ${WEIGHTS.blog} | ${Math.round(partialScore(t.blogCount, FULL_THRESHOLDS.blog, WEIGHTS.blog))} |`,
    );
    lines.push(
      `| Resources | ${t.resourceCount} | ≥ ${FULL_THRESHOLDS.resource} | ${WEIGHTS.resource} | ${Math.round(partialScore(t.resourceCount, FULL_THRESHOLDS.resource, WEIGHTS.resource))} |`,
    );
    lines.push(
      `| Industries | ${t.industryCount} | ≥ ${FULL_THRESHOLDS.industry} | ${WEIGHTS.industry} | ${Math.round(partialScore(t.industryCount, FULL_THRESHOLDS.industry, WEIGHTS.industry))} |`,
    );
    lines.push(
      `| Services | ${t.serviceCount} | ≥ ${FULL_THRESHOLDS.service} | ${WEIGHTS.service} | ${Math.round(partialScore(t.serviceCount, FULL_THRESHOLDS.service, WEIGHTS.service))} |`,
    );
    lines.push(
      `| Case Studies | ${t.caseStudyCount} | ≥ ${FULL_THRESHOLDS.caseStudy} | ${WEIGHTS.caseStudy} | ${Math.round(partialScore(t.caseStudyCount, FULL_THRESHOLDS.caseStudy, WEIGHTS.caseStudy))} |`,
    );
    lines.push(`| **Total** | | | **100** | **${t.score}** |`);
    lines.push('');
  }

  return lines.join('\n');
}

// ── Main ─────────────────────────────────────────────────────────────
async function main() {
  await ensureGraphInitialized();

  const root = path.resolve(import.meta.dirname, '../..');
  const reportsDir = path.join(root, 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });

  const graphRecord = getContentGraph();
  const allNodes = Object.values(graphRecord);
  const indexes = buildGraphIndexes(allNodes);

  const scores: TopicScore[] = [];

  for (const topic of CANONICAL_TOPICS) {
    const nodes = indexes.topics.get(topic) ?? [];
    scores.push({ topic, ...scoreTopic(nodes) });
  }

  const sorted = [...scores].sort((a, b) => b.score - a.score);
  const avg = Math.round(sorted.reduce((s, t) => s + t.score, 0) / (sorted.length || 1));

  // 1. Markdown
  const mdPath = path.join(reportsDir, 'topic-authority-scores.md');
  fs.writeFileSync(mdPath, generateMarkdown(scores), 'utf-8');

  // 2. JSON
  const jsonPath = path.join(reportsDir, 'topic-authority-scores.json');
  fs.writeFileSync(
    jsonPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        topicsAnalyzed: scores.length,
        averageScore: avg,
        scores: sorted,
      },
      null,
      2,
    ),
    'utf-8',
  );

  // ── Console summary ────────────────────────────────────────────
  const strongest = sorted.slice(0, 5);
  const weakest = sorted.slice(-5).reverse();

  const levelCounts: Record<AuthorityLevel, number> = {
    Dominant: 0,
    Strong: 0,
    Growing: 0,
    Weak: 0,
    Gap: 0,
  };
  for (const s of scores) levelCounts[s.level]++;

  const W = 51;
  const line = (text: string) => `║  ${text.padEnd(W - 4)}║`;

  console.log('');
  console.log('╔' + '═'.repeat(W - 2) + '╗');
  console.log('║   TOPIC AUTHORITY SCORES — SUMMARY           ║');
  console.log('╠' + '═'.repeat(W - 2) + '╣');
  console.log(line(`Topics analyzed:       ${scores.length}`));
  console.log(line(`Average authority:     ${avg}/100`));
  console.log('╠' + '═'.repeat(W - 2) + '╣');
  console.log(line('Distribution:'));
  console.log(line(`  🟢 Dominant (≥90):   ${levelCounts.Dominant}`));
  console.log(line(`  🔵 Strong  (75–89):  ${levelCounts.Strong}`));
  console.log(line(`  🟡 Growing (60–74):  ${levelCounts.Growing}`));
  console.log(line(`  🟠 Weak    (40–59):  ${levelCounts.Weak}`));
  console.log(line(`  🔴 Gap     (<40):    ${levelCounts.Gap}`));
  console.log('╠' + '═'.repeat(W - 2) + '╣');
  console.log(line('Strongest topics:'));
  for (const t of strongest) {
    console.log(line(`  ${String(t.score).padStart(3)}/100  ${t.topic}`));
  }
  console.log('╠' + '═'.repeat(W - 2) + '╣');
  console.log(line('Weakest topics:'));
  for (const t of weakest) {
    console.log(line(`  ${String(t.score).padStart(3)}/100  ${t.topic}`));
  }
  console.log('╠' + '═'.repeat(W - 2) + '╣');
  console.log(line('OUTPUT'));
  console.log(line('  MD:   reports/topic-authority-scores.md'));
  console.log(line('  JSON: reports/topic-authority-scores.json'));
  console.log('╚' + '═'.repeat(W - 2) + '╝');
  console.log('');
}

await main();

import fs from 'node:fs';
import path from 'node:path';

import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';

import {
  getContentGraph,
  buildGraphIndexes,
} from '../../src/lib/content-graph/registry';
import type { ContentGraphNode } from '../../src/lib/content-graph/types';

// ── Thresholds ───────────────────────────────────────────────────────
const MIN_BLOGS_PER_TOPIC = 3;
const MIN_RESOURCES_PER_TOPIC = 1;
const MIN_INDUSTRIES_PER_RESOURCE = 2;
const MIN_CASE_STUDIES_PER_INDUSTRY = 1;

// ── Types ────────────────────────────────────────────────────────────
interface TopicGap {
  topic: string;
  blogCount: number;
  resourceCount: number;
  industryCount: number;
  caseStudyCount: number;
  missing: string[];
  suggestions: string[];
}

// ── Helpers ──────────────────────────────────────────────────────────
function nodesByType(
  nodes: ContentGraphNode[],
  type: string,
): ContentGraphNode[] {
  return nodes.filter(n => n.type === type);
}

function industriesForResource(
  resourceNode: ContentGraphNode,
  allNodes: ContentGraphNode[],
): string[] {
  // An industry "implements" a resource when they share a topic AND
  // the industry node exists in the graph.
  const resourceTopics = new Set(resourceNode.topics ?? []);
  if (resourceTopics.size === 0) return [];

  const industryNodes = allNodes.filter(
    n => n.type === 'industry-category' || n.type === 'industry-detail',
  );
  const matched: string[] = [];
  for (const ind of industryNodes) {
    const indTopics = ind.topics ?? [];
    if (indTopics.some(t => resourceTopics.has(t))) {
      matched.push(ind.slug);
    }
  }
  return matched;
}

function slugLabel(slug: string): string {
  return slug.replace(/-/g, ' ');
}

// ── Main analysis ────────────────────────────────────────────────────
async function analyzeGaps() {
  await ensureGraphInitialized();

  const graphRecord = getContentGraph();
  const allNodes = Object.values(graphRecord);
  const indexes = buildGraphIndexes(allNodes);

  const blogs = nodesByType(allNodes, 'blog');
  const resources = nodesByType(allNodes, 'resource');
  const industries = allNodes.filter(
    n => n.type === 'industry-category' || n.type === 'industry-detail',
  );
  const caseStudies = nodesByType(allNodes, 'case-study');

  // Collect ALL known topics from the graph
  const allTopics = Array.from(indexes.topics.keys()).sort();

  // ── Per-topic analysis ──────────────────────────────────────────
  const gaps: TopicGap[] = [];

  for (const topic of allTopics) {
    const topicNodes = indexes.topics.get(topic) ?? [];
    const topicBlogs = topicNodes.filter(n => n.type === 'blog');
    const topicResources = topicNodes.filter(n => n.type === 'resource');
    const topicIndustries = topicNodes.filter(
      n => n.type === 'industry-category' || n.type === 'industry-detail',
    );
    const topicCaseStudies = topicNodes.filter(n => n.type === 'case-study');

    const missing: string[] = [];
    const suggestions: string[] = [];

    // Blog coverage
    if (topicBlogs.length < MIN_BLOGS_PER_TOPIC) {
      missing.push('blog');
      const needed = MIN_BLOGS_PER_TOPIC - topicBlogs.length;
      suggestions.push(
        `${needed} more blog post${needed > 1 ? 's' : ''} covering "${slugLabel(topic)}"`,
      );
    }

    // Resource coverage
    if (topicResources.length < MIN_RESOURCES_PER_TOPIC) {
      missing.push('resource');
      suggestions.push(`resource framework for "${slugLabel(topic)}"`);
    }

    // Industry implementations for resources
    if (topicResources.length > 0 && topicIndustries.length < MIN_INDUSTRIES_PER_RESOURCE) {
      missing.push('industry');
      // Suggest specific industries that don't cover this topic yet
      const coveredIndustrySlugs = new Set(topicIndustries.map(n => n.slug));
      const allIndustrySlugs = industries.map(n => n.slug);
      const uncovered = allIndustrySlugs
        .filter(s => !coveredIndustrySlugs.has(s))
        .slice(0, 3);
      for (const ind of uncovered) {
        suggestions.push(`${slugLabel(ind)} — ${slugLabel(topic)} implementation`);
      }
    }

    // Case study proof
    if (topicCaseStudies.length < MIN_CASE_STUDIES_PER_INDUSTRY && topicIndustries.length > 0) {
      missing.push('case-study');
      // Suggest case studies for the industries that cover this topic
      const industryLabels = topicIndustries.slice(0, 3).map(n => slugLabel(n.slug));
      for (const label of industryLabels) {
        suggestions.push(`${label} — ${slugLabel(topic)} case study`);
      }
    }

    if (missing.length > 0) {
      gaps.push({
        topic,
        blogCount: topicBlogs.length,
        resourceCount: topicResources.length,
        industryCount: topicIndustries.length,
        caseStudyCount: topicCaseStudies.length,
        missing,
        suggestions,
      });
    }
  }

  // ── Resource→Industry gap (cross-check) ─────────────────────────
  const resourceIndustryGaps: { slug: string; industryCount: number; suggestions: string[] }[] = [];
  for (const res of resources) {
    const impls = industriesForResource(res, allNodes);
    if (impls.length < MIN_INDUSTRIES_PER_RESOURCE) {
      const industryLabels = industries
        .filter(i => !impls.includes(i.slug))
        .slice(0, 3)
        .map(i => `${slugLabel(i.slug)} — ${slugLabel(res.slug)} adaptation`);
      resourceIndustryGaps.push({
        slug: res.slug,
        industryCount: impls.length,
        suggestions: industryLabels,
      });
    }
  }

  // ── Industry→CaseStudy gap ──────────────────────────────────────
  const industryCaseStudyGaps: { slug: string; caseStudyCount: number; suggestions: string[] }[] = [];
  for (const ind of industries) {
    const indTopics = new Set(ind.topics ?? []);
    const matched = caseStudies.filter(cs =>
      (cs.topics ?? []).some(t => indTopics.has(t)) ||
      (cs.industries ?? []).includes(ind.slug),
    );
    if (matched.length < MIN_CASE_STUDIES_PER_INDUSTRY) {
      industryCaseStudyGaps.push({
        slug: ind.slug,
        caseStudyCount: matched.length,
        suggestions: [`${slugLabel(ind.slug)} proof-of-results case study`],
      });
    }
  }

  return {
    allTopics,
    gaps,
    resourceIndustryGaps,
    industryCaseStudyGaps,
    stats: {
      totalNodes: allNodes.length,
      blogs: blogs.length,
      resources: resources.length,
      industries: industries.length,
      caseStudies: caseStudies.length,
      topics: allTopics.length,
    },
  };
}

// ── Markdown report ──────────────────────────────────────────────────
function generateMarkdown(result: ReturnType<typeof analyzeGaps>): string {
  const { gaps, resourceIndustryGaps, industryCaseStudyGaps, stats } = result;
  const lines: string[] = [];

  lines.push('# Content Gap Report');
  lines.push('');
  lines.push(`> Generated: ${new Date().toISOString().split('T')[0]}`);
  lines.push('');
  lines.push('## Overview');
  lines.push('');
  lines.push(`| Metric | Count |`);
  lines.push(`|--------|-------|`);
  lines.push(`| Total nodes | ${stats.totalNodes} |`);
  lines.push(`| Blogs | ${stats.blogs} |`);
  lines.push(`| Resources | ${stats.resources} |`);
  lines.push(`| Industries | ${stats.industries} |`);
  lines.push(`| Case studies | ${stats.caseStudies} |`);
  lines.push(`| Topics analyzed | ${stats.topics} |`);
  lines.push(`| **Topic gaps detected** | **${gaps.length}** |`);
  lines.push(`| Resource → industry gaps | ${resourceIndustryGaps.length} |`);
  lines.push(`| Industry → case-study gaps | ${industryCaseStudyGaps.length} |`);
  lines.push('');

  // ── Topic gaps ──────────────────────────────────────────────────
  if (gaps.length > 0) {
    lines.push('## Topic Coverage Gaps');
    lines.push('');
    for (const gap of gaps) {
      lines.push(`### Topic: \`${gap.topic}\``);
      lines.push('');
      lines.push('| Content type | Count | Threshold | Status |');
      lines.push('|-------------|-------|-----------|--------|');
      lines.push(
        `| Blogs | ${gap.blogCount} | ≥ ${MIN_BLOGS_PER_TOPIC} | ${gap.missing.includes('blog') ? '❌ Gap' : '✅'} |`,
      );
      lines.push(
        `| Resources | ${gap.resourceCount} | ≥ ${MIN_RESOURCES_PER_TOPIC} | ${gap.missing.includes('resource') ? '❌ Gap' : '✅'} |`,
      );
      lines.push(
        `| Industries | ${gap.industryCount} | ≥ ${MIN_INDUSTRIES_PER_RESOURCE} | ${gap.missing.includes('industry') ? '❌ Gap' : '✅'} |`,
      );
      lines.push(
        `| Case studies | ${gap.caseStudyCount} | ≥ ${MIN_CASE_STUDIES_PER_INDUSTRY} | ${gap.missing.includes('case-study') ? '❌ Gap' : '✅'} |`,
      );
      lines.push('');
      if (gap.suggestions.length > 0) {
        lines.push('**Suggested content:**');
        lines.push('');
        for (const s of gap.suggestions) {
          lines.push(`- ${s}`);
        }
        lines.push('');
      }
    }
  }

  // ── Resource→Industry gaps ──────────────────────────────────────
  if (resourceIndustryGaps.length > 0) {
    lines.push('## Resource → Industry Coverage Gaps');
    lines.push('');
    lines.push('Resources with fewer than 2 industry implementations:');
    lines.push('');
    for (const r of resourceIndustryGaps) {
      lines.push(`- **${r.slug}** — ${r.industryCount} industries`);
      for (const s of r.suggestions) {
        lines.push(`  - ${s}`);
      }
    }
    lines.push('');
  }

  // ── Industry→CaseStudy gaps ─────────────────────────────────────
  if (industryCaseStudyGaps.length > 0) {
    lines.push('## Industry → Case Study Coverage Gaps');
    lines.push('');
    lines.push('Industries with no case study proof:');
    lines.push('');
    for (const i of industryCaseStudyGaps) {
      lines.push(`- **${i.slug}** — ${i.caseStudyCount} case studies`);
      for (const s of i.suggestions) {
        lines.push(`  - ${s}`);
      }
    }
    lines.push('');
  }

  return lines.join('\n');
}

// ── Main ─────────────────────────────────────────────────────────────
async function main() {
  const root = path.resolve(import.meta.dirname, '../..');
  const reportsDir = path.join(root, 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });

  const result = await analyzeGaps();
  const { gaps, resourceIndustryGaps, industryCaseStudyGaps, stats } = result;

  const totalSuggestions =
    gaps.reduce((sum, g) => sum + g.suggestions.length, 0) +
    resourceIndustryGaps.reduce((sum, g) => sum + g.suggestions.length, 0) +
    industryCaseStudyGaps.reduce((sum, g) => sum + g.suggestions.length, 0);

  // 1. Markdown report
  const mdPath = path.join(reportsDir, 'content-gaps.md');
  fs.writeFileSync(mdPath, generateMarkdown(result), 'utf-8');

  // 2. JSON data
  const jsonPath = path.join(reportsDir, 'content-gaps.json');
  fs.writeFileSync(
    jsonPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        stats,
        topicGaps: gaps,
        resourceIndustryGaps,
        industryCaseStudyGaps,
      },
      null,
      2,
    ),
    'utf-8',
  );

  // ── Summary ──────────────────────────────────────────────────────
  const W = 49;
  const line = (text: string) => `║  ${text.padEnd(W - 4)}║`;

  console.log('');
  console.log('╔' + '═'.repeat(W - 2) + '╗');
  console.log('║   CONTENT GAP REPORT — SUMMARY              ║');
  console.log('╠' + '═'.repeat(W - 2) + '╣');
  console.log(line(`Topics analyzed:         ${stats.topics}`));
  console.log(line(`Topic gaps detected:     ${gaps.length}`));
  console.log(line(`Resource→Industry gaps:  ${resourceIndustryGaps.length}`));
  console.log(line(`Industry→CaseStudy gaps: ${industryCaseStudyGaps.length}`));
  console.log(line(`Suggested content items: ${totalSuggestions}`));
  console.log('╠' + '═'.repeat(W - 2) + '╣');
  console.log(line('Gap breakdown by missing type:'));

  const missingCounts: Record<string, number> = {};
  for (const g of gaps) {
    for (const m of g.missing) {
      missingCounts[m] = (missingCounts[m] || 0) + 1;
    }
  }
  for (const [type, count] of Object.entries(missingCounts).sort((a, b) => b[1] - a[1])) {
    console.log(line(`  ${type.padEnd(22)} ${String(count).padStart(4)}`));
  }

  console.log('╠' + '═'.repeat(W - 2) + '╣');
  console.log(line('OUTPUT'));
  console.log(line('  MD:   reports/content-gaps.md'));
  console.log(line('  JSON: reports/content-gaps.json'));
  console.log('╚' + '═'.repeat(W - 2) + '╝');
  console.log('');
}

await main();

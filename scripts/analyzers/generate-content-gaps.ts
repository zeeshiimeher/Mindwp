import fs from 'node:fs';
import path from 'node:path';

import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { getContentGraph } from '../../src/lib/content-graph/registry';
import type { ContentGraphNode } from '../../src/lib/content-graph/types';
import {
  buildTopicCoverageSnapshots,
  slugLabel,
} from '../../src/lib/content-quality/topicCoverage';

interface TopicGap {
  topic: string;
  blogCount: number;
  resourceCount: number;
  serviceCount: number;
  featureCount: number;
  industryCount: number;
  caseStudyCount: number;
  supportCount: number;
  missing: string[];
  suggestions: string[];
}

function nodesByType(nodes: ContentGraphNode[], type: string): ContentGraphNode[] {
  return nodes.filter(node => node.type === type);
}

function generateSuggestions(gap: TopicGap): string[] {
  const suggestions: string[] = [];

  if (gap.blogCount === 0) {
    suggestions.push(`Add or retag one blog post for "${slugLabel(gap.topic)}"`);
  }

  if (gap.supportCount === 0) {
    suggestions.push(
      `Add or retag one supporting resource, service, feature, industry, or case study for "${slugLabel(gap.topic)}"`
    );
  }

  return suggestions;
}

async function analyzeGaps() {
  await ensureGraphInitialized();

  const graphRecord = getContentGraph();
  const allNodes = Object.values(graphRecord);
  const blogs = nodesByType(allNodes, 'blog');
  const resources = nodesByType(allNodes, 'resource');
  const services = nodesByType(allNodes, 'service');
  const features = nodesByType(allNodes, 'feature');
  const industries = allNodes.filter(
    node => node.type === 'industry-category' || node.type === 'industry-detail'
  );
  const caseStudies = nodesByType(allNodes, 'case-study');

  const topicCoverage = buildTopicCoverageSnapshots(allNodes);
  const gaps: TopicGap[] = topicCoverage
    .filter(snapshot => !snapshot.hasSupportingPost || !snapshot.hasInternalLinkPath)
    .map(snapshot => {
      const missing = [
        ...(snapshot.hasSupportingPost ? [] : ['blog']),
        ...(snapshot.hasInternalLinkPath ? [] : ['internal-link-path']),
      ];

      return {
        topic: snapshot.topic,
        blogCount: snapshot.blogCount,
        resourceCount: snapshot.resourceCount,
        serviceCount: snapshot.serviceCount,
        featureCount: snapshot.featureCount,
        industryCount: snapshot.industryCount,
        caseStudyCount: snapshot.caseStudyCount,
        supportCount: snapshot.supportCount,
        missing,
        suggestions: generateSuggestions({
          topic: snapshot.topic,
          blogCount: snapshot.blogCount,
          resourceCount: snapshot.resourceCount,
          serviceCount: snapshot.serviceCount,
          featureCount: snapshot.featureCount,
          industryCount: snapshot.industryCount,
          caseStudyCount: snapshot.caseStudyCount,
          supportCount: snapshot.supportCount,
          missing,
          suggestions: [],
        }),
      };
    });

  return {
    topicCoverage,
    gaps,
    resourceIndustryGaps: [],
    industryCaseStudyGaps: [],
    stats: {
      totalNodes: allNodes.length,
      blogs: blogs.length,
      resources: resources.length,
      services: services.length,
      features: features.length,
      industries: industries.length,
      caseStudies: caseStudies.length,
      topics: topicCoverage.length,
      orphanTopics: topicCoverage.filter(snapshot => snapshot.isOrphan).length,
    },
  };
}

function generateMarkdown(result: Awaited<ReturnType<typeof analyzeGaps>>): string {
  const { gaps, stats } = result;
  const lines: string[] = [];

  lines.push('# Content Gap Report');
  lines.push('');
  lines.push(`> Generated: ${new Date().toISOString().split('T')[0]}`);
  lines.push('');
  lines.push('## Coverage Objective');
  lines.push('');
  lines.push(
    'Each canonical topic must have at least one supporting blog post and at least one internal support path from a resource, service, feature, industry page, or case study.'
  );
  lines.push('');
  lines.push('## Overview');
  lines.push('');
  lines.push('| Metric | Count |');
  lines.push('|--------|-------|');
  lines.push(`| Total nodes | ${stats.totalNodes} |`);
  lines.push(`| Blogs | ${stats.blogs} |`);
  lines.push(`| Resources | ${stats.resources} |`);
  lines.push(`| Services | ${stats.services} |`);
  lines.push(`| Features | ${stats.features} |`);
  lines.push(`| Industries | ${stats.industries} |`);
  lines.push(`| Case studies | ${stats.caseStudies} |`);
  lines.push(`| Topics analyzed | ${stats.topics} |`);
  lines.push(`| Orphan topics | ${stats.orphanTopics} |`);
  lines.push(`| Topic gaps detected | ${gaps.length} |`);
  lines.push('');

  if (gaps.length > 0) {
    lines.push('## Topic Coverage Gaps');
    lines.push('');
    for (const gap of gaps) {
      lines.push(`### Topic: \`${gap.topic}\``);
      lines.push('');
      lines.push('| Coverage type | Count | Required | Status |');
      lines.push('|---------------|-------|----------|--------|');
      lines.push(
        `| Blogs | ${gap.blogCount} | ≥ 1 | ${gap.blogCount > 0 ? '✅' : '❌ Gap'} |`
      );
      lines.push(
        `| Support paths | ${gap.supportCount} | ≥ 1 | ${gap.supportCount > 0 ? '✅' : '❌ Gap'} |`
      );
      lines.push(
        `| Resources | ${gap.resourceCount} | info | ${gap.resourceCount > 0 ? 'present' : '—'} |`
      );
      lines.push(
        `| Services | ${gap.serviceCount} | info | ${gap.serviceCount > 0 ? 'present' : '—'} |`
      );
      lines.push(
        `| Features | ${gap.featureCount} | info | ${gap.featureCount > 0 ? 'present' : '—'} |`
      );
      lines.push(
        `| Industries | ${gap.industryCount} | info | ${gap.industryCount > 0 ? 'present' : '—'} |`
      );
      lines.push(
        `| Case studies | ${gap.caseStudyCount} | info | ${gap.caseStudyCount > 0 ? 'present' : '—'} |`
      );
      lines.push('');
      if (gap.suggestions.length > 0) {
        lines.push('**Suggested fixes:**');
        lines.push('');
        for (const suggestion of gap.suggestions) {
          lines.push(`- ${suggestion}`);
        }
        lines.push('');
      }
    }
  }

  return lines.join('\n');
}

async function main() {
  const root = path.resolve(import.meta.dirname, '../..');
  const reportsDir = path.join(root, 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });

  const result = await analyzeGaps();
  const { gaps, stats, topicCoverage } = result;

  const mdPath = path.join(reportsDir, 'content-gaps.md');
  fs.writeFileSync(mdPath, generateMarkdown(result), 'utf-8');

  const jsonPath = path.join(reportsDir, 'content-gaps.json');
  fs.writeFileSync(
    jsonPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        stats,
        topicCoverage,
        topicGaps: gaps,
        resourceIndustryGaps: [],
        industryCaseStudyGaps: [],
      },
      null,
      2,
    ),
    'utf-8',
  );

  const W = 49;
  const line = (text: string) => `║  ${text.padEnd(W - 4)}║`;

  console.log('');
  console.log('╔' + '═'.repeat(W - 2) + '╗');
  console.log('║   CONTENT GAP REPORT — SUMMARY              ║');
  console.log('╠' + '═'.repeat(W - 2) + '╣');
  console.log(line(`Topics analyzed:         ${stats.topics}`));
  console.log(line(`Orphan topics:           ${stats.orphanTopics}`));
  console.log(line(`Topic gaps detected:     ${gaps.length}`));
  console.log(line(`Support objective:       1 blog + 1 path`));
  console.log('╠' + '═'.repeat(W - 2) + '╣');
  console.log(line('OUTPUT'));
  console.log(line('  MD:   reports/content-gaps.md'));
  console.log(line('  JSON: reports/content-gaps.json'));
  console.log('╚' + '═'.repeat(W - 2) + '╝');
  console.log('');
}

await main();
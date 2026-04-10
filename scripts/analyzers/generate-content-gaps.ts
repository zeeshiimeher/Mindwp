import fs from 'node:fs';
import path from 'node:path';

import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { getContentGraph } from '../../src/lib/content-graph/registry';
import {
  buildTopicValidationSnapshots,
  type TopicClassification,
  type ValidationRequirement,
  type ValidationStatus,
} from '../../src/lib/content-quality/topicAuthority';
import { buildTopicCoverageSnapshots } from '../../src/lib/content-quality/topicCoverage';

interface TopicGap {
  topic: string;
  classification: TopicClassification;
  blogCount: number;
  resourceCount: number;
  serviceCount: number;
  featureCount: number;
  industryCount: number;
  caseStudyCount: number;
  supportCount: number;
  score: number;
  validationStatus: ValidationStatus;
  validatingCaseStudyCount: number;
  validatingResourceCount: number;
  missingValidation: ValidationRequirement[];
  missing: string[];
  suggestions: string[];
}

function nodesByType(nodes: ReturnType<typeof Object.values<ReturnType<typeof getContentGraph>>>, type: string) {
  return nodes.filter(node => node.type === type);
}

function buildAuthorityScore(snapshot: {
  blogCount: number;
  resourceCount: number;
  serviceCount: number;
  featureCount: number;
  industryCount: number;
  caseStudyCount: number;
}): number {
  return Math.round(
    Math.min(snapshot.blogCount, 1) * 30 +
      Math.min(snapshot.resourceCount, 1) * 15 +
      Math.min(snapshot.serviceCount, 1) * 15 +
      Math.min(snapshot.featureCount, 1) * 10 +
      Math.min(snapshot.industryCount, 1) * 10 +
      Math.min(snapshot.caseStudyCount, 1) * 20
  );
}

function buildValidationGaps(nodes: ReturnType<typeof Object.values<ReturnType<typeof getContentGraph>>>) {
  const topicCoverage = buildTopicCoverageSnapshots(nodes);
  const validationSnapshots = new Map(
    buildTopicValidationSnapshots(nodes).map(snapshot => [snapshot.topic, snapshot])
  );

  const gaps: TopicGap[] = topicCoverage
    .map(snapshot => {
      const validation = validationSnapshots.get(snapshot.topic);
      if (!validation) {
        throw new Error(`Missing validation snapshot for topic ${snapshot.topic}`);
      }

      const score = Math.round(
        Math.min(snapshot.blogCount, 1) * 30 +
          Math.min(snapshot.resourceCount, 1) * 15 +
          Math.min(snapshot.serviceCount, 1) * 15 +
          Math.min(snapshot.featureCount, 1) * 10 +
          Math.min(snapshot.industryCount, 1) * 10 +
          Math.min(snapshot.caseStudyCount, 1) * 20
      );

      const missing = [
        ...(validation.missingValidation.length > 0 ? validation.missingValidation : []),
        ...(validation.validatesCount === 0 ? ['validates'] : []),
        ...(score < 70 ? ['weak-authority'] : []),
      ];

      return {
        topic: snapshot.topic,
        classification: validation.classification,
        blogCount: snapshot.blogCount,
        resourceCount: snapshot.resourceCount,
        serviceCount: snapshot.serviceCount,
        featureCount: snapshot.featureCount,
        industryCount: snapshot.industryCount,
        caseStudyCount: snapshot.caseStudyCount,
        supportCount: snapshot.supportCount,
        score,
        validationStatus: validation.validationStatus,
        validatingCaseStudyCount: validation.validatingCaseStudyCount,
        validatingResourceCount: validation.validatingResourceCount,
        missingValidation: validation.missingValidation,
        missing,
        suggestions: validation.suggestedFixes,
      };
    })
    .filter(gap => gap.classification === 'core' && gap.missing.length > 0);

  return { topicCoverage, gaps };
}

function generateMarkdown(result: {
  gaps: TopicGap[];
  stats: {
    totalNodes: number;
    blogs: number;
    resources: number;
    services: number;
    features: number;
    industries: number;
    caseStudies: number;
    topics: number;
    orphanTopics: number;
  };
}): string {
  const { gaps, stats } = result;
  const lines: string[] = [];

  lines.push('# Content Gap Report');
  lines.push('');
  lines.push(`> Generated: ${new Date().toISOString().split('T')[0]}`);
  lines.push('');
  lines.push('## Coverage Objective');
  lines.push('');
  lines.push(
    'Each core topic must have at least one validating case study and at least one validating resource. Core topics under 70 authority are treated as weak even when they are present.'
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
  lines.push(`| Validation gaps detected | ${gaps.length} |`);
  lines.push('');

  if (gaps.length > 0) {
    lines.push('## Core Topic Validation Gaps');
    lines.push('');
    for (const gap of gaps) {
      lines.push(`### Topic: \`${gap.topic}\``);
      lines.push('');
      lines.push('| Coverage type | Count | Required | Status |');
      lines.push('|---------------|-------|----------|--------|');
      lines.push(
        `| Classification | ${gap.classification} | core | ${gap.classification === 'core' ? '✅' : '—'} |`
      );
      lines.push(
        `| Authority score | ${gap.score} | ≥ 70 | ${gap.score >= 70 ? '✅' : '❌ Weak'} |`
      );
      lines.push(
        `| Validating case studies | ${gap.validatingCaseStudyCount} | ≥ 1 | ${gap.validatingCaseStudyCount > 0 ? '✅' : '❌ Gap'} |`
      );
      lines.push(
        `| Validating resources | ${gap.validatingResourceCount} | ≥ 1 | ${gap.validatingResourceCount > 0 ? '✅' : '❌ Gap'} |`
      );
      lines.push(
        `| Services on topic | ${gap.serviceCount} | info | ${gap.serviceCount > 0 ? 'present' : '—'} |`
      );
      lines.push(
        `| Missing validation | ${gap.missingValidation.join(', ') || 'none'} | none | ${gap.missingValidation.length === 0 ? '✅' : '❌ Gap'} |`
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
  await ensureGraphInitialized();

  const root = path.resolve(import.meta.dirname, '../..');
  const reportsDir = path.join(root, 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });

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
  const { topicCoverage, gaps } = buildValidationGaps(allNodes);
  const stats = {
    totalNodes: allNodes.length,
    blogs: blogs.length,
    resources: resources.length,
    services: services.length,
    features: features.length,
    industries: industries.length,
    caseStudies: caseStudies.length,
    topics: topicCoverage.length,
    orphanTopics: topicCoverage.filter(snapshot => snapshot.isOrphan).length,
  };
  const result = { gaps, stats };

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
  console.log(line(`Support objective:       1 case study + 1 resource`));
  console.log('╠' + '═'.repeat(W - 2) + '╣');
  console.log(line('OUTPUT'));
  console.log(line('  MD:   reports/content-gaps.md'));
  console.log(line('  JSON: reports/content-gaps.json'));
  console.log('╚' + '═'.repeat(W - 2) + '╝');
  console.log('');
}

await main();
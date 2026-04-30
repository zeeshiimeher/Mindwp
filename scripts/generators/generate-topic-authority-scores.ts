import fs from 'node:fs';
import path from 'node:path';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { systemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { CANONICAL_TOPICS } from '../../src/lib/content-graph/canonical';
import { getContentGraph } from '../../src/lib/content-graph/registry';
import {
  buildTopicValidationSnapshots,
  type TopicClassification,
  type ValidationRequirement,
  type ValidationStatus,
} from '../../src/lib/content-quality/topicAuthority';
import { buildTopicCoverageSnapshots } from '../../src/lib/content-quality/topicCoverage';
import { buildGeneratedMarkdownNotice } from '../lib/generated-file-metadata.mjs';
import { createReportSchema } from '../lib/report-schema.mjs';

const WEIGHTS = {
  blog: 30,
  resource: 15,
  service: 15,
  feature: 10,
  industry: 10,
  caseStudy: 20,
} as const;

const FULL_THRESHOLDS = {
  blog: 1,
  resource: 1,
  service: 1,
  feature: 1,
  industry: 1,
  caseStudy: 1,
} as const;

type AuthorityLevel = 'Dominant' | 'Strong' | 'Growing' | 'Weak' | 'Gap';
type CoverageStatus = 'complete' | 'gap';
type AuthorityStatus = 'dominant' | 'strong' | 'growing' | 'weak' | 'gap';

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

const logger = createLogger({
  label: 'topic-authority',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: process.cwd(),
});
const root = path.resolve(import.meta.dirname, '../..');
const reportsDir = path.join(root, 'reports');
const markdownPath = path.join(reportsDir, 'topic-authority-scores.md');
const jsonPath = path.join(reportsDir, 'topic-authority-scores.json');
const INPUT_PATHS: string[] = [
  path.join(root, 'src', 'domains', 'blog', 'registry.ts'),
  path.join(root, 'src', 'domains', 'case-studies', 'registry.ts'),
  path.join(root, 'src', 'domains', 'features', 'registry.ts'),
  path.join(root, 'src', 'domains', 'industries', 'registry.ts'),
  path.join(root, 'src', 'domains', 'resources', 'generatedRegistry.ts'),
  path.join(root, 'src', 'domains', 'services', 'registry.ts'),
  path.join(root, 'src', 'domains', 'contentModel.ts'),
  path.join(root, 'src', 'domains', 'init'),
  path.join(root, 'src', 'lib', 'content-graph'),
  path.join(root, 'src', 'lib', 'content-quality'),
  path.join(root, 'scripts', 'generators', 'generate-topic-authority-scores.ts'),
];

interface TopicScore {
  topic: string;
  classification: TopicClassification;
  blogCount: number;
  resourceCount: number;
  serviceCount: number;
  featureCount: number;
  industryCount: number;
  caseStudyCount: number;
  supportCount: number;
  validatingCaseStudyCount: number;
  validatingResourceCount: number;
  validatesCount: number;
  requiredValidation: ValidationRequirement[];
  missingValidation: ValidationRequirement[];
  validationStatus: ValidationStatus;
  suggestedFixes: string[];
  score: number;
  level: AuthorityLevel;
  status: AuthorityStatus;
  coverageStatus: CoverageStatus;
  reasons: string[];
}

interface TopicScoreSeed {
  topic: string;
  classification: TopicClassification;
  blogCount: number;
  resourceCount: number;
  serviceCount: number;
  featureCount: number;
  industryCount: number;
  caseStudyCount: number;
  supportCount: number;
  validatingCaseStudyCount: number;
  validatingResourceCount: number;
  validatesCount: number;
  requiredValidation: ValidationRequirement[];
  missingValidation: ValidationRequirement[];
  validationStatus: ValidationStatus;
  suggestedFixes: string[];
  score: number;
  level: AuthorityLevel;
  status: AuthorityStatus;
  coverageStatus: CoverageStatus;
  reasons: string[];
}

function partialScore(count: number, threshold: number, weight: number): number {
  return Math.min(count / threshold, 1) * weight;
}

function scoreTopic(topic: TopicScore): number {
  return Math.round(
    partialScore(topic.blogCount, FULL_THRESHOLDS.blog, WEIGHTS.blog) +
      partialScore(topic.resourceCount, FULL_THRESHOLDS.resource, WEIGHTS.resource) +
      partialScore(topic.serviceCount, FULL_THRESHOLDS.service, WEIGHTS.service) +
      partialScore(topic.featureCount, FULL_THRESHOLDS.feature, WEIGHTS.feature) +
      partialScore(topic.industryCount, FULL_THRESHOLDS.industry, WEIGHTS.industry) +
      partialScore(topic.caseStudyCount, FULL_THRESHOLDS.caseStudy, WEIGHTS.caseStudy)
  );
}

function toStatus(level: AuthorityLevel, coverageStatus: CoverageStatus): AuthorityStatus {
  if (coverageStatus === 'gap') {
    return 'gap';
  }

  return level.toLowerCase() as AuthorityStatus;
}

function buildReasons(topic: {
  classification: TopicClassification;
  blogCount: number;
  resourceCount: number;
  serviceCount: number;
  featureCount: number;
  industryCount: number;
  caseStudyCount: number;
  supportCount: number;
  validatingCaseStudyCount: number;
  validatingResourceCount: number;
  missingValidation: ValidationRequirement[];
  validationStatus: ValidationStatus;
  coverageStatus: CoverageStatus;
  score: number;
}): string[] {
  const reasons = [
    topic.blogCount > 0
      ? `${topic.blogCount} supporting blog ${topic.blogCount === 1 ? 'post is' : 'posts are'} attached to this topic.`
      : 'No supporting blog posts are attached to this topic.',
    topic.supportCount > 0
      ? `${topic.supportCount} internal support ${topic.supportCount === 1 ? 'path is' : 'paths are'} attached across resources, services, features, industries, and case studies.`
      : 'No internal support paths are attached across resources, services, features, industries, or case studies.',
    `Coverage status is ${topic.coverageStatus}; weighted authority score is ${topic.score}/100.`,
  ];

  if (topic.caseStudyCount > 0) {
    reasons.push(
      `${topic.caseStudyCount} case ${topic.caseStudyCount === 1 ? 'study reinforces' : 'studies reinforce'} proof for this topic.`
    );
  } else {
    reasons.push('No case studies currently reinforce proof for this topic.');
  }

  if (topic.classification === 'core') {
    reasons.push(
      `Validation coverage: ${topic.validatingCaseStudyCount} case ${topic.validatingCaseStudyCount === 1 ? 'study' : 'studies'} and ${topic.validatingResourceCount} resource ${topic.validatingResourceCount === 1 ? 'count' : 'counts'} toward required proof.`
    );

    if (topic.missingValidation.length > 0) {
      reasons.push(`Missing required validation: ${topic.missingValidation.join(', ')}.`);
    }
  }

  return reasons;
}

function generateMarkdown(scores: TopicScore[]): string {
  const lines: string[] = [];
  const sorted = [...scores].sort((left, right) => right.score - left.score);
  const avg = Math.round(sorted.reduce((sum, topic) => sum + topic.score, 0) / sorted.length);

  lines.push('# Topic Authority Scores');
  lines.push('');
  lines.push(`> Generated: ${new Date().toISOString().split('T')[0]}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push('| Metric | Value |');
  lines.push('|--------|-------|');
  lines.push(`| Topics analyzed | ${sorted.length} |`);
  lines.push(`| Average score | ${avg} |`);
  lines.push(
    `| Complete coverage | ${sorted.filter(topic => topic.coverageStatus === 'complete').length} |`
  );
  lines.push(
    `| Coverage gaps | ${sorted.filter(topic => topic.coverageStatus === 'gap').length} |`
  );
  lines.push(`| Dominant (≥90) | ${sorted.filter(topic => topic.level === 'Dominant').length} |`);
  lines.push(`| Strong (75–89) | ${sorted.filter(topic => topic.level === 'Strong').length} |`);
  lines.push(`| Growing (60–74) | ${sorted.filter(topic => topic.level === 'Growing').length} |`);
  lines.push(`| Weak (40–59) | ${sorted.filter(topic => topic.level === 'Weak').length} |`);
  lines.push(`| Gap (<40) | ${sorted.filter(topic => topic.level === 'Gap').length} |`);
  lines.push('');
  lines.push('## Leaderboard');
  lines.push('');
  lines.push(
    '| # | Topic | Class | Score | Level | Coverage | Validation | Blogs | Resources | Services | Features | Industries | Case Studies |'
  );
  lines.push(
    '|---|-------|-------|-------|-------|----------|------------|-------|-----------|----------|----------|------------|--------------|'
  );
  for (let index = 0; index < sorted.length; index += 1) {
    const topic = sorted[index];
    lines.push(
      `| ${index + 1} | ${topic.topic} | ${topic.classification} | ${topic.score} | ${LEVEL_EMOJI[topic.level]} ${topic.level} | ${topic.coverageStatus} | ${topic.validationStatus} | ${topic.blogCount} | ${topic.resourceCount} | ${topic.serviceCount} | ${topic.featureCount} | ${topic.industryCount} | ${topic.caseStudyCount} |`
    );
  }
  lines.push('');

  return lines.join('\n');
}

async function main() {
  await ensureGraphInitialized();
  fs.mkdirSync(reportsDir, { recursive: true });
  const generatedAt = new Date().toISOString();

  const allNodes = Object.values(getContentGraph());
  const coverage = buildTopicCoverageSnapshots(allNodes, CANONICAL_TOPICS);
  const validationCoverage = new Map(
    buildTopicValidationSnapshots(allNodes, CANONICAL_TOPICS).map(snapshot => [
      snapshot.topic,
      snapshot,
    ])
  );

  const scores: TopicScore[] = coverage.map(snapshot => {
    const validation = validationCoverage.get(snapshot.topic);
    if (!validation) {
      throw new Error(`Missing validation snapshot for topic ${snapshot.topic}`);
    }

    const base: TopicScoreSeed = {
      topic: snapshot.topic,
      classification: validation.classification,
      blogCount: snapshot.blogCount,
      resourceCount: snapshot.resourceCount,
      serviceCount: snapshot.serviceCount,
      featureCount: snapshot.featureCount,
      industryCount: snapshot.industryCount,
      caseStudyCount: snapshot.caseStudyCount,
      supportCount: snapshot.supportCount,
      validatingCaseStudyCount: validation.validatingCaseStudyCount,
      validatingResourceCount: validation.validatingResourceCount,
      validatesCount: validation.validatesCount,
      requiredValidation: validation.requiredValidation,
      missingValidation: validation.missingValidation,
      validationStatus: validation.validationStatus,
      suggestedFixes: validation.suggestedFixes,
      score: 0,
      level: 'Gap',
      status: 'gap',
      coverageStatus:
        snapshot.hasSupportingPost && snapshot.hasInternalLinkPath ? 'complete' : 'gap',
      reasons: [],
    };

    const score = scoreTopic(base);
    const level = classifyLevel(score);
    return {
      ...base,
      score,
      level,
      status: toStatus(level, base.coverageStatus),
      reasons: buildReasons({
        ...base,
        score,
      }),
    };
  });

  const sorted = [...scores].sort((left, right) => right.score - left.score);
  const avg = Math.round(
    sorted.reduce((sum, topic) => sum + topic.score, 0) / (sorted.length || 1)
  );

  logger.writeReport(
    markdownPath,
    `${buildGeneratedMarkdownNotice({
      generatedBy: 'node --import tsx/esm scripts/generators/generate-topic-authority-scores.ts',
      source: 'content graph, domain registries',
      generatedAt,
    })}${generateMarkdown(scores)}`
  );

  logger.writeReport(
    jsonPath,
    createReportSchema({
      name: 'topic-authority-scores',
      status: 'PASS',
      generatedAt,
      summary: {
        total: scores.length,
        passed: scores.filter(topic => topic.coverageStatus === 'complete').length,
        failed: 0,
        warnings: scores.filter(topic => topic.coverageStatus === 'gap').length,
      },
      issues: [],
      data: {
        generatedAt,
        topicsAnalyzed: scores.length,
        averageScore: avg,
        completeCoverageTopics: scores.filter(topic => topic.coverageStatus === 'complete').length,
        validatedCoreTopics: scores.filter(
          topic => topic.classification === 'core' && topic.validationStatus === 'validated'
        ).length,
        scores: sorted,
      },
      sourceCommand: 'node --import tsx/esm scripts/generators/generate-topic-authority-scores.ts',
    })
  );

  const strongest = sorted.slice(0, 5);
  const weakest = sorted.slice(-5).reverse();
  const levelCounts: Record<AuthorityLevel, number> = {
    Dominant: 0,
    Strong: 0,
    Growing: 0,
    Weak: 0,
    Gap: 0,
  };

  for (const score of scores) {
    levelCounts[score.level] += 1;
  }

  logger.printTotals({
    topics: scores.length,
    averageAuthority: `${avg}/100`,
    completeCoverage: scores.filter(topic => topic.coverageStatus === 'complete').length,
    dominant: levelCounts.Dominant,
    strong: levelCounts.Strong,
    growing: levelCounts.Growing,
    weak: levelCounts.Weak,
    gap: levelCounts.Gap,
  });
  logger.printSummary(
    `strongest -> ${strongest.map(topic => `${topic.topic} (${topic.score})`).join(', ')}`
  );
  logger.printSummary(
    `weakest -> ${weakest.map(topic => `${topic.topic} (${topic.score})`).join(', ')}`
  );
  logger.printSummary(`report -> ${logger.relativePath(markdownPath)}`);
  logger.printSummary(`report -> ${logger.relativePath(jsonPath)}`);

  for (const topic of sorted) {
    logger.printNodeLine({
      scope: topic.classification,
      slug: topic.topic,
      supports: topic.supportCount,
      validates: topic.validatesCount,
      total: topic.score,
      status: topic.validationStatus,
    });
  }
}

await main();

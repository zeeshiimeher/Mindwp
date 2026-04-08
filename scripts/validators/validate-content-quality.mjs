#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { BLOG_POSTS } from '../../src/domains/blog/registry';
import { RESOURCE_REGISTRY } from '../../src/domains/resources/registry';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { getStructuredContentGraph } from '../../src/lib/content-graph/registry';
import { buildRouteInventory } from '../../src/lib/content-quality/inventory';
import { buildTopicCoverageSnapshots } from '../../src/lib/content-quality/topicCoverage';
import { normalizePath } from '../../src/lib/seo/config';
import { createSystemIssue } from '../lib/system-issues.mjs';

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'content-quality-report.json');

function addIssue(target, payload) {
  target.push(payload);
}

function slugFromPath(pathname) {
  if (pathname === '/') {
    return 'home';
  }

  return String(pathname).replace(/^\/+|\/+$/g, '').replace(/\//g, '--');
}

function buildRouteIssue({ entry, severity, category, code, title, description, impact, fix, details = null }) {
  return {
    message: description,
    ...createSystemIssue({
    source: 'validate-content-quality',
    code,
    severity,
    category,
    entityType: entry.kind,
    slug: slugFromPath(entry.path),
    title,
    description,
    impact,
    fix,
    autoFixable: false,
    details,
    path: entry.path,
    }),
  };
}

function buildTopicIssue({ snapshot, severity, code, title, description, impact, fix }) {
  return {
    message: description,
    ...createSystemIssue({
    source: 'validate-content-quality',
    code,
    severity,
    category: 'authority',
    entityType: 'topic',
    slug: snapshot.topic,
    title,
    description,
    impact,
    fix,
    autoFixable: false,
    path: `/topics/${snapshot.topic}`,
    }),
  };
}

function countEmptyHeadings(items) {
  let count = 0;

  for (const item of items) {
    for (const section of item.sections ?? []) {
      if (typeof section?.heading === 'string' && section.heading.trim().length === 0) {
        count += 1;
      }

      if (typeof section?.title === 'string' && section.title.trim().length === 0) {
        count += 1;
      }
    }
  }

  return count;
}

function buildDuplicateMap(entries, field) {
  const buckets = new Map();

  for (const entry of entries) {
    const rawValue = entry[field];
    if (typeof rawValue !== 'string') continue;

    const value = rawValue.trim().toLowerCase();
    if (!value) continue;

    const existing = buckets.get(value) ?? [];
    existing.push(entry.path);
    buckets.set(value, existing);
  }

  return Array.from(buckets.entries())
    .filter(([, paths]) => paths.length > 1)
    .map(([value, paths]) => ({ value, paths }));
}

async function main() {
  await ensureGraphInitialized();

  const routeEntries = await buildRouteInventory();
  const graphNodes = getStructuredContentGraph().nodes;
  const topicCoverage = buildTopicCoverageSnapshots(graphNodes);
  const sitemapModule = await import('../../src/app/sitemap.ts');
  const sitemapEntries = await sitemapModule.default();
  const sitemapPaths = new Set(
    sitemapEntries.map(entry => normalizePath(new URL(entry.url).pathname))
  );

  const issues = [];
  const warnings = [];

  for (const entry of routeEntries) {
    const label = `${entry.kind}/${entry.path}`;

    if (!entry.title) {
      addIssue(
        issues,
        buildRouteIssue({
          entry,
          severity: 'critical',
          category: 'seo',
          code: 'missing_title',
          title: 'Missing SEO title',
          description: `${label} is missing a title.`,
          impact: 'The route loses deterministic metadata coverage and becomes harder to debug operationally.',
          fix: `Add a deterministic title for ${entry.path} through the inventory-backed metadata source.`,
        })
      );
    }

    if (!entry.description) {
      addIssue(
        issues,
        buildRouteIssue({
          entry,
          severity: 'critical',
          category: 'seo',
          code: 'missing_description',
          title: 'Missing SEO description',
          description: `${label} is missing a description.`,
          impact: 'The route loses deterministic search-summary coverage and report clarity.',
          fix: `Add a deterministic description for ${entry.path} through the inventory-backed metadata source.`,
        })
      );
    }

    if (!entry.canonical) {
      addIssue(
        issues,
        buildRouteIssue({
          entry,
          severity: 'critical',
          category: 'seo',
          code: 'missing_canonical',
          title: 'Missing canonical path',
          description: `${label} is missing a canonical path.`,
          impact: 'Canonical alignment cannot be validated for this route.',
          fix: `Set the canonical path for ${entry.path} from the shared inventory source.`,
        })
      );
    }

    if (!entry.openGraph?.title || !entry.openGraph?.description || !entry.openGraph?.images?.length) {
      addIssue(
        issues,
        buildRouteIssue({
          entry,
          severity: 'critical',
          category: 'seo',
          code: 'missing_open_graph',
          title: 'Missing open graph coverage',
          description: `${label} is missing open graph coverage.`,
          impact: 'The route loses deterministic social metadata and completeness guarantees.',
          fix: `Provide open graph title, description, and image coverage for ${entry.path}.`,
        })
      );
    }

    if (typeof entry.robots?.index !== 'boolean' || typeof entry.robots?.follow !== 'boolean') {
      addIssue(
        issues,
        buildRouteIssue({
          entry,
          severity: 'critical',
          category: 'seo',
          code: 'missing_robots',
          title: 'Missing robots coverage',
          description: `${label} is missing explicit robots coverage.`,
          impact: 'Crawl intent is no longer self-explaining or deterministically validated.',
          fix: `Add explicit robots coverage for ${entry.path} in the shared metadata source.`,
        })
      );
    }

    if (entry.canonical !== entry.path) {
      addIssue(
        issues,
        buildRouteIssue({
          entry,
          severity: 'critical',
          category: 'seo',
          code: 'canonical_misalignment',
          title: 'Canonical misalignment',
          description: `${label} canonical ${entry.canonical} does not match route ${entry.path}.`,
          impact: 'The route drifts from inventory-backed crawl alignment.',
          fix: `Align the canonical path to ${entry.path} or update the shared route inventory if the route changed.`,
        })
      );
    }

    if (entry.indexable && !sitemapPaths.has(entry.path)) {
      addIssue(
        issues,
        buildRouteIssue({
          entry,
          severity: 'critical',
          category: 'seo',
          code: 'missing_from_sitemap',
          title: 'Missing from sitemap',
          description: `${label} is indexable but missing from the sitemap.`,
          impact: 'Crawl alignment is broken between the route inventory and sitemap output.',
          fix: `Ensure ${entry.path} remains in the inventory-driven sitemap set.`,
        })
      );
    }

    if (!entry.indexable && sitemapPaths.has(entry.path)) {
      addIssue(
        issues,
        buildRouteIssue({
          entry,
          severity: 'critical',
          category: 'seo',
          code: 'noindex_in_sitemap',
          title: 'Noindex route present in sitemap',
          description: `${label} is noindex but still present in the sitemap.`,
          impact: 'Search directives conflict across crawl surfaces.',
          fix: `Remove ${entry.path} from the sitemap source or mark it indexable in the shared inventory.`,
        })
      );
    }

    if (entry.description.length < 50) {
      warnings.push(
        buildRouteIssue({
          entry,
          severity: 'warning',
          category: 'content',
          code: 'weak_description',
          title: 'Weak route description',
          description: `${label} description is shorter than 50 characters.`,
          impact: 'The route stays valid but provides low-context summaries in SEO and control-plane surfaces.',
          fix: `Expand the description for ${entry.path} so it clearly explains purpose and outcome.`,
        })
      );
    }
  }

  for (const duplicate of buildDuplicateMap(routeEntries, 'title')) {
    const entry = routeEntries.find(candidate => candidate.path === duplicate.paths[0]);
    if (!entry) continue;

    addIssue(
      issues,
      buildRouteIssue({
        entry,
        severity: 'critical',
        category: 'seo',
        code: 'duplicate_title',
        title: 'Duplicate SEO title',
        description: `Duplicate title detected across ${duplicate.paths.length} routes.`,
        impact: 'Search surfaces lose route-level differentiation and dashboard diagnostics become ambiguous.',
        fix: `Give each affected route a distinct title: ${duplicate.paths.join(', ')}.`,
        details: duplicate.paths,
      })
    );
  }

  for (const duplicate of buildDuplicateMap(routeEntries, 'description')) {
    const entry = routeEntries.find(candidate => candidate.path === duplicate.paths[0]);
    if (!entry) continue;

    addIssue(
      issues,
      buildRouteIssue({
        entry,
        severity: 'critical',
        category: 'content',
        code: 'duplicate_description',
        title: 'Duplicate route description',
        description: `Duplicate description detected across ${duplicate.paths.length} routes.`,
        impact: 'Operators lose route-specific context and SEO descriptions become indistinct.',
        fix: `Write route-specific descriptions for: ${duplicate.paths.join(', ')}.`,
        details: duplicate.paths,
      })
    );
  }

  for (const snapshot of topicCoverage) {
    if (!snapshot.hasSupportingPost) {
      addIssue(
        issues,
        buildTopicIssue({
          snapshot,
          severity: 'critical',
          code: 'topic_missing_blog',
          title: 'Topic missing supporting blog',
          description: `Canonical topic ${snapshot.topic} has no supporting blog post.`,
          impact: 'The topic loses editorial support and authority traceability.',
          fix: `Add or retag at least one blog post for the ${snapshot.topic} topic.`,
        })
      );
    }

    if (!snapshot.hasInternalLinkPath) {
      addIssue(
        issues,
        buildTopicIssue({
          snapshot,
          severity: 'critical',
          code: 'topic_missing_internal_path',
          title: 'Topic missing internal support path',
          description: `Canonical topic ${snapshot.topic} has no internal support path.`,
          impact: 'The topic cannot prove internal coverage through resources, services, features, industries, or case studies.',
          fix: `Add or retag one internal support path for the ${snapshot.topic} topic.`,
        })
      );
    }
  }

  const emptyHeadingCount =
    countEmptyHeadings(Object.values(BLOG_POSTS)) + countEmptyHeadings(Object.values(RESOURCE_REGISTRY));

  if (emptyHeadingCount > 0) {
    addIssue(
      issues,
      {
        message: `Content contains ${emptyHeadingCount} empty heading fields.`,
        ...createSystemIssue({
        source: 'validate-content-quality',
        code: 'empty_headings',
        severity: 'critical',
        category: 'content',
        entityType: 'content-collection',
        slug: 'content',
        title: 'Empty heading fields detected',
        description: `Content contains ${emptyHeadingCount} empty heading fields.`,
        impact: 'Structured content becomes less trustworthy and harder to render or audit consistently.',
        fix: 'Populate or remove empty heading and title fields in the affected structured content entries.',
        autoFixable: false,
        path: 'content',
        }),
      }
    );
  }

  const missingMetadataCount = issues.filter(issue =>
    ['missing_title', 'missing_description', 'missing_canonical', 'missing_open_graph', 'missing_robots'].includes(issue.code)
  ).length;
  const duplicateTitleCount = issues.filter(issue => issue.code === 'duplicate_title').length;
  const duplicateDescriptionCount = issues.filter(issue => issue.code === 'duplicate_description').length;
  const canonicalMisalignmentCount = issues.filter(issue => issue.code === 'canonical_misalignment').length;
  const missingFromSitemapCount = issues.filter(issue => issue.code === 'missing_from_sitemap').length;
  const noindexInSitemapCount = issues.filter(issue => issue.code === 'noindex_in_sitemap').length;
  const topicsWithoutBlog = topicCoverage.filter(snapshot => !snapshot.hasSupportingPost).length;
  const orphanTopics = topicCoverage.filter(snapshot => snapshot.isOrphan).length;
  const topicsWithoutInternalPath = topicCoverage.filter(snapshot => !snapshot.hasInternalLinkPath).length;
  const weakDescriptionCount = warnings.filter(warning => warning.code === 'weak_description').length;
  const openGraphGapCount = issues.filter(issue => issue.code === 'missing_open_graph').length;
  const missingRobotsCount = issues.filter(issue => issue.code === 'missing_robots').length;
  const sitemapIssueCount = missingFromSitemapCount + noindexInSitemapCount;
  const pagesAnalyzed = routeEntries.length;

  const report = {
    generatedAt: new Date().toISOString(),
    passed: issues.length === 0,
    pageCount: pagesAnalyzed,
    issueCount: issues.length,
    warningCount: warnings.length,
    summary: {
      seo: {
        pagesAnalyzed,
        missingMetadata: missingMetadataCount,
        duplicateTitles: duplicateTitleCount,
        duplicateDescriptions: duplicateDescriptionCount,
        canonicalMisalignment: canonicalMisalignmentCount,
        sitemapMisalignment: sitemapIssueCount,
        openGraphGaps: openGraphGapCount,
        missingRobots: missingRobotsCount,
        canonicalAlignment:
          pagesAnalyzed === 0
            ? 100
            : Math.round(((pagesAnalyzed - canonicalMisalignmentCount) / pagesAnalyzed) * 100),
        sitemapAlignment:
          pagesAnalyzed === 0
            ? 100
            : Math.round(((pagesAnalyzed - sitemapIssueCount) / pagesAnalyzed) * 100),
        openGraphCoverage:
          pagesAnalyzed === 0
            ? 100
            : Math.round(((pagesAnalyzed - openGraphGapCount) / pagesAnalyzed) * 100),
      },
      content: {
        weakDescriptions: weakDescriptionCount,
        emptyHeadings: emptyHeadingCount,
      },
      authority: {
        topicsAnalyzed: topicCoverage.length,
        topicsWithoutBlog,
        orphanTopics,
        topicsWithoutInternalPath,
      },
    },
    issues,
    warnings,
  };

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');

  if (warnings.length > 0) {
    console.warn(`⚠ Content quality validation: ${warnings.length} warning(s):`);
    for (const warning of warnings) {
      console.warn(`  - ${warning.message}`);
    }
    console.warn('');
  }

  if (issues.length === 0) {
    console.log(`✓ Content quality validation passed (${pagesAnalyzed} routes checked).`);
    return;
  }

  console.error(`✗ Content quality validation found ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`  - ${issue.message}`);
  }
  process.exitCode = 1;
}

main().catch(error => {
  console.error(
    `[validate-content-quality] ${error instanceof Error ? error.message : String(error)}`
  );
  process.exitCode = 1;
});
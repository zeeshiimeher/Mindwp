import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { chromium } from '@playwright/test';

import { ensureAuditServer } from '../dev/audit-server.mjs';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized.ts';
import { getContentGraph } from '../../src/lib/content-graph/registry.ts';
import { STATIC_PAGES } from '../../src/lib/site/staticPages.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const REPORTS_DIR = path.join(ROOT, 'reports');
const PHASE7_REPORTS_DIR = path.join(REPORTS_DIR, 'phase7');
const HISTORY_DIR = path.join(PHASE7_REPORTS_DIR, 'history');
const ENGINE_PATH = path.join(ROOT, 'scripts/phase7/visual-audit-v1.js');

const BASE_URL = 'http://127.0.0.1:3009';
const DEFAULT_BASE_URL = process.env.VISUAL_AUDIT_BASE_URL || BASE_URL;
const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 2200 },
  { name: 'mobile', width: 390, height: 1600 },
];

const SAMPLE_LIMITS = {
  feature: 3,
  blog: 3,
  resource: 3,
  'case-study': 3,
  'industry-category': 2,
  'industry-detail': 2,
};

const EVALUATE_TIMEOUT_MS = 15000;

function flattenSlugPayload(value) {
  if (typeof value === 'string') {
    return value.trim() ? [value.trim()] : [];
  }

  if (Array.isArray(value)) {
    return value.flatMap(item => flattenSlugPayload(item));
  }

  return [];
}

function normalizeServiceParamToUrl(entry) {
  const slugPayload = entry && typeof entry === 'object' && 'slug' in entry ? entry.slug : entry;
  const segments = flattenSlugPayload(slugPayload);
  if (segments.length === 0) return null;
  return `/services/${segments.join('/')}`;
}

async function resolveServiceRoutes() {
  const serviceRouteModule = await import(
    pathToFileURL(path.join(ROOT, 'src/app/services/[...slug]/page.tsx')).href
  );

  if (typeof serviceRouteModule.generateStaticParams !== 'function') {
    throw new Error('Unable to resolve service generateStaticParams().');
  }

  const params = await serviceRouteModule.generateStaticParams();
  const urls = params.map(normalizeServiceParamToUrl).filter(Boolean);
  return Array.from(new Set(urls)).sort((left, right) => left.localeCompare(right));
}

function sortNodesByPath(nodes) {
  return [...nodes].sort((left, right) => left.path.localeCompare(right.path));
}

function sampleGraphNodes(nodes, limit) {
  return sortNodesByPath(nodes).slice(0, limit);
}

function compareSeverity(left, right) {
  const severityRank = { critical: 0, warning: 1 };
  return (
    severityRank[left.severity] - severityRank[right.severity] ||
    left.message.localeCompare(right.message)
  );
}

function sortIssueArray(issues) {
  return [...issues].sort((left, right) => compareSeverity(left, right));
}

function sortSuggestions(suggestions) {
  return [...suggestions].sort((left, right) => left.localeCompare(right));
}

function sortRouteReports(routes) {
  return [...routes].sort((left, right) => left.path.localeCompare(right.path));
}

function getOverviewRoutes() {
  const wantedRoutes = new Set([
    '/',
    '/services',
    '/features',
    '/industries',
    '/blog',
    '/resources',
    '/case-studies',
  ]);

  return STATIC_PAGES.filter(page => wantedRoutes.has(page.url)).map(page => ({
    path: page.url,
    family: page.url === '/' ? 'homepage' : 'overview',
    templateKind: page.url === '/' ? 'homepage' : 'overview',
    source: 'static-pages',
  }));
}

export async function resolveAuditRoutes() {
  const previousNodeEnv = process.env.NODE_ENV;

  try {
    process.env.NODE_ENV = 'production';
    await ensureGraphInitialized();
  } finally {
    process.env.NODE_ENV = previousNodeEnv;
  }

  const graph = Object.values(getContentGraph());

  const routes = [];
  const seenPaths = new Set();

  for (const route of getOverviewRoutes()) {
    if (seenPaths.has(route.path)) continue;
    seenPaths.add(route.path);
    routes.push(route);
  }

  const serviceUrls = await resolveServiceRoutes();
  for (const serviceUrl of serviceUrls) {
    if (seenPaths.has(serviceUrl)) continue;
    seenPaths.add(serviceUrl);
    routes.push({
      path: serviceUrl,
      family: 'services',
      templateKind: 'service-detail',
      source: 'services-generateStaticParams',
    });
  }

  const featureNodes = sampleGraphNodes(
    graph.filter(node => node.type === 'feature'),
    SAMPLE_LIMITS.feature
  );
  const blogNodes = sampleGraphNodes(
    graph.filter(node => node.type === 'blog'),
    SAMPLE_LIMITS.blog
  );
  const resourceNodes = sampleGraphNodes(
    graph.filter(node => node.type === 'resource'),
    SAMPLE_LIMITS.resource
  );
  const caseStudyNodes = sampleGraphNodes(
    graph.filter(node => node.type === 'case-study'),
    SAMPLE_LIMITS['case-study']
  );
  const industryCategoryNodes = sampleGraphNodes(
    graph.filter(node => node.type === 'industry-category'),
    SAMPLE_LIMITS['industry-category']
  );
  const industryDetailNodes = sampleGraphNodes(
    graph.filter(node => node.type === 'industry-detail'),
    SAMPLE_LIMITS['industry-detail']
  );

  const sampledGroups = [
    ...featureNodes.map(node => ({ ...node, family: 'features', templateKind: 'feature-detail' })),
    ...blogNodes.map(node => ({ ...node, family: 'blog', templateKind: 'blog-template' })),
    ...resourceNodes.map(node => ({
      ...node,
      family: 'resources',
      templateKind: 'resource-template',
    })),
    ...caseStudyNodes.map(node => ({
      ...node,
      family: 'case-studies',
      templateKind: 'case-study-template',
    })),
    ...industryCategoryNodes.map(node => ({
      ...node,
      family: 'industries',
      templateKind: 'industry-category-template',
    })),
    ...industryDetailNodes.map(node => ({
      ...node,
      family: 'industries',
      templateKind: 'industry-detail-template',
    })),
  ];

  for (const node of sampledGroups) {
    if (seenPaths.has(node.path)) continue;
    seenPaths.add(node.path);
    routes.push({
      path: node.path,
      family: node.family,
      templateKind: node.templateKind,
      source: 'content-graph-sample',
    });
  }

  return routes.sort((left, right) => left.path.localeCompare(right.path));
}

async function waitForPageReadiness(page) {
  await page.waitForSelector('body', { timeout: 10000 });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
}

async function waitForPageReady(page, url) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 15000,
      });
      await page.waitForSelector('body', { timeout: 5000 });
      return true;
    } catch {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  throw new Error(`Page not ready after retries: ${url}`);
}

async function safeGoto(page, url) {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
      });
      await waitForPageReadiness(page);
      return;
    } catch (error) {
      if (attempt === 1) {
        throw error;
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
}

function summarizeSeverity(routeReports) {
  return routeReports.reduce(
    (summary, routeReport) => {
      if (routeReport.error) {
        summary.total += 1;
        summary.critical += 1;
        return summary;
      }

      for (const viewportReport of routeReport.viewports) {
        summary.total += viewportReport.summary.componentIssues.total;
        summary.total += viewportReport.summary.sectionIssues.total;
        summary.critical += viewportReport.summary.componentIssues.critical;
        summary.critical += viewportReport.summary.sectionIssues.critical;
        summary.warning += viewportReport.summary.componentIssues.warning;
        summary.warning += viewportReport.summary.sectionIssues.warning;
      }
      return summary;
    },
    { total: 0, critical: 0, warning: 0 }
  );
}

function normalizeIssueKey(issue) {
  return `${issue.severity}|${issue.code || ''}|${issue.message}|${issue.elementPath || ''}`;
}

function dedupeIssues(issues) {
  const seen = new Set();
  const deduped = [];
  for (const issue of issues) {
    const key = normalizeIssueKey(issue);
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(issue);
  }
  return deduped;
}

function aggregateRepeatedBlocks(routeReports) {
  const blockMap = new Map();

  for (const routeReport of routeReports) {
    for (const viewportReport of routeReport.viewports) {
      for (const component of viewportReport.components) {
        const key = component.name;
        const bucket = blockMap.get(key) || {
          name: key,
          occurrences: 0,
          routes: new Set(),
          scores: [],
          statuses: new Map(),
        };

        bucket.occurrences += 1;
        bucket.routes.add(routeReport.path);
        bucket.scores.push(component.score);
        bucket.statuses.set(component.status, (bucket.statuses.get(component.status) || 0) + 1);
        blockMap.set(key, bucket);
      }
    }
  }

  return [...blockMap.values()]
    .filter(entry => entry.occurrences > 1)
    .map(entry => ({
      name: entry.name,
      occurrences: entry.occurrences,
      routeCount: entry.routes.size,
      averageScore: Math.round(
        entry.scores.reduce((sum, score) => sum + score, 0) / entry.scores.length
      ),
      statuses: Object.fromEntries(entry.statuses),
    }))
    .sort(
      (left, right) => left.averageScore - right.averageScore || left.name.localeCompare(right.name)
    );
}

function aggregateCrossRouteComponents(routeReports) {
  const componentMap = new Map();

  for (const routeReport of routeReports) {
    if (routeReport.error) continue;

    for (const viewportReport of routeReport.viewports) {
      for (const component of viewportReport.components) {
        const key = component.name;
        const bucket = componentMap.get(key) || {
          name: key,
          routes: new Set(),
          scores: [],
          spacingValues: new Set(),
          colors: new Set(),
        };

        bucket.routes.add(routeReport.path);
        bucket.scores.push(component.score);

        for (const snapshot of component.snapshots) {
          for (const metadata of Object.values(snapshot.styles.spacing || {})) {
            if (metadata && metadata.value) bucket.spacingValues.add(metadata.value);
          }

          for (const metadata of Object.values(snapshot.styles.colors || {})) {
            if (metadata && metadata.value) bucket.colors.add(metadata.value);
          }
        }

        componentMap.set(key, bucket);
      }
    }
  }

  return [...componentMap.values()]
    .map(entry => {
      const minScore = Math.min(...entry.scores);
      const maxScore = Math.max(...entry.scores);
      const issues = [];

      if (entry.spacingValues.size > 6) {
        issues.push('spacing inconsistency across routes');
      }
      if (entry.colors.size > 6) {
        issues.push('color inconsistency across routes');
      }
      if (maxScore - minScore > 20) {
        issues.push(`score variance ${maxScore - minScore}`);
      }

      return {
        name: entry.name,
        routeCount: entry.routes.size,
        minScore,
        maxScore,
        issues,
      };
    })
    .filter(
      entry =>
        entry.issues.length > 0 &&
        entry.routeCount > 1 &&
        entry.name !== 'div' &&
        entry.name !== 'section'
    )
    .sort(
      (left, right) =>
        right.issues.length - left.issues.length || left.name.localeCompare(right.name)
    );
}

function aggregateDesignSystem(routeReports) {
  const spacingViolations = [];
  const colorViolations = [];

  for (const routeReport of routeReports) {
    if (routeReport.error) continue;

    for (const viewportReport of routeReport.viewports) {
      for (const violation of viewportReport.designSystem?.spacingViolations || []) {
        spacingViolations.push(violation);
      }
      for (const violation of viewportReport.designSystem?.colorViolations || []) {
        colorViolations.push(violation);
      }
    }
  }

  spacingViolations.sort(
    (left, right) =>
      left.route.localeCompare(right.route) || left.component.localeCompare(right.component)
  );
  colorViolations.sort(
    (left, right) =>
      left.route.localeCompare(right.route) || left.component.localeCompare(right.component)
  );

  const dedupeByKey = (items, keyBuilder) => {
    const seen = new Set();
    const result = [];
    for (const item of items) {
      const key = keyBuilder(item);
      if (seen.has(key)) continue;
      seen.add(key);
      result.push(item);
    }
    return result;
  };

  return {
    spacingViolations: dedupeByKey(
      spacingViolations,
      item => `${item.route}|${item.component}|${item.field}|${item.value}|${item.elementPath}`
    ),
    colorViolations: dedupeByKey(
      colorViolations,
      item => `${item.route}|${item.component}|${item.field}|${item.value}|${item.elementPath}`
    ),
  };
}

function getWorstRoutes(routeReports) {
  return sortRouteReports(routeReports)
    .slice()
    .sort(
      (left, right) =>
        left.summary.averageScore - right.summary.averageScore ||
        right.summary.issueCount - left.summary.issueCount
    )
    .slice(0, 10)
    .map(route => ({
      path: route.path,
      score: route.summary.averageScore,
      issues: route.summary.issueCount,
      status: route.summary.status,
    }));
}

function buildRouteSummary(viewports) {
  const scores = [];
  let componentCount = 0;
  let sectionCount = 0;
  let issueCount = 0;

  for (const viewport of viewports) {
    componentCount += viewport.components.length;
    sectionCount += viewport.sections.length;
    issueCount += viewport.summary.componentIssues.total;
    issueCount += viewport.summary.sectionIssues.total;

    for (const component of viewport.components) {
      scores.push(component.score);
    }
    for (const section of viewport.sections) {
      scores.push(section.score);
    }
  }

  const averageScore = scores.length
    ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)
    : 100;

  return {
    averageScore,
    status: averageScore >= 80 ? 'good' : averageScore >= 60 ? 'needs-improvement' : 'critical',
    componentCount,
    sectionCount,
    issueCount,
  };
}

function extractTopFindings(routeReports) {
  const findings = [];

  for (const routeReport of routeReports) {
    if (routeReport.error) {
      findings.push({
        route: routeReport.path,
        viewport: 'route',
        type: 'route',
        name: routeReport.templateKind,
        severity: 'critical',
        message: routeReport.message,
        suggestion: 'Review the audit server log and retry this route once the page is stable.',
      });
      continue;
    }

    for (const viewportReport of routeReport.viewports) {
      for (const component of viewportReport.components) {
        for (const issue of component.issues) {
          findings.push({
            route: routeReport.path,
            viewport: viewportReport.viewport,
            type: 'component',
            name: component.name,
            severity: issue.severity,
            message: issue.message,
            suggestion: issue.suggestion || component.suggestions[0] || '',
          });
        }
      }

      for (const section of viewportReport.sections) {
        for (const issue of section.issues) {
          findings.push({
            route: routeReport.path,
            viewport: viewportReport.viewport,
            type: 'section',
            name: section.name,
            severity: issue.severity,
            message: issue.message,
            suggestion: issue.suggestion || section.suggestions[0] || '',
          });
        }
      }
    }
  }

  const deduped = [];
  const seen = new Set();

  for (const finding of findings.sort(
    (left, right) => compareSeverity(left, right) || left.route.localeCompare(right.route)
  )) {
    const key = `${finding.route}|${finding.name}|${finding.message}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(finding);
  }

  return deduped.slice(0, 15);
}

function sanitizeIssues(issues, limit = 5) {
  return sortIssueArray(dedupeIssues(issues))
    .slice(0, limit)
    .map(issue => ({
      severity: issue.severity,
      code: issue.code,
      message: issue.message,
      suggestion: issue.suggestion || '',
    }));
}

function sanitizeRouteReport(routeReport) {
  if (routeReport.error) {
    return {
      path: routeReport.path,
      family: routeReport.family,
      templateKind: routeReport.templateKind,
      source: routeReport.source,
      error: true,
      message: routeReport.message,
      summary: routeReport.summary,
      viewports: [],
    };
  }

  return {
    path: routeReport.path,
    family: routeReport.family,
    templateKind: routeReport.templateKind,
    source: routeReport.source,
    summary: routeReport.summary,
    viewports: routeReport.viewports.map(viewport => ({
      viewport: viewport.viewport,
      summary: viewport.summary,
      topComponentIssues: viewport.components
        .filter(component => component.issues.length > 0)
        .slice(0, 5)
        .map(component => ({
          name: component.name,
          score: component.score,
          issues: sanitizeIssues(component.issues, 3),
        })),
      topSectionIssues: viewport.sections
        .filter(section => section.issues.length > 0)
        .slice(0, 5)
        .map(section => ({
          name: section.name,
          score: section.score,
          issues: sanitizeIssues(section.issues, 3),
        })),
      designSystem: {
        spacingViolations: (viewport.designSystem?.spacingViolations || []).slice(0, 20),
        colorViolations: (viewport.designSystem?.colorViolations || []).slice(0, 20),
      },
    })),
  };
}

function formatMarkdown(report) {
  const lines = [];
  lines.push('# Visual Audit Report');
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Generated: ${report.meta.generatedAt}`);
  lines.push(`- Base URL: ${report.meta.baseUrl}`);
  lines.push(`- Routes: ${report.meta.totalRoutes}`);
  lines.push(`- Total issues: ${report.summary.issues.total}`);
  lines.push(`- Critical: ${report.summary.issues.critical}`);
  lines.push(`- Warnings: ${report.summary.issues.warning}`);
  lines.push('');
  lines.push('## Top Problems');
  lines.push('');
  for (const finding of report.topFindings) {
    lines.push(`- ${finding.route} | ${finding.name}: ${finding.message}`);
  }
  lines.push('');

  lines.push('## Worst Routes');
  lines.push('');
  for (const route of report.worstRoutes) {
    lines.push(`- ${route.path} | score ${route.score} | issues ${route.issues} | ${route.status}`);
  }
  lines.push('');

  if (report.crossRouteComponents.length > 0) {
    lines.push('## Component Problems');
    lines.push('');
    for (const component of report.crossRouteComponents.slice(0, 15)) {
      lines.push(
        `- ${component.name}: ${component.issues.join('; ')} across ${component.routeCount} routes`
      );
    }
    lines.push('');
  }

  lines.push('## Design System Violations');
  lines.push('');
  lines.push(`- Spacing issues: ${report.designSystem.spacingViolations.length}`);
  for (const violation of report.designSystem.spacingViolations.slice(0, 10)) {
    lines.push(
      `- ${violation.route} | ${violation.component} | ${violation.field} ${violation.value}px`
    );
  }
  lines.push(`- Color issues: ${report.designSystem.colorViolations.length}`);
  for (const violation of report.designSystem.colorViolations.slice(0, 10)) {
    lines.push(
      `- ${violation.route} | ${violation.component} | ${violation.field} ${violation.value}`
    );
  }
  lines.push('');

  lines.push('## Route Summaries');
  lines.push('');
  for (const route of report.routes) {
    const errorSuffix = route.error ? ` | error ${route.message}` : '';
    lines.push(
      `- ${route.path} | score ${route.summary.averageScore} | issues ${route.summary.issueCount} | ${route.summary.status}${errorSuffix}`
    );
  }

  return `${lines.join('\n').trim()}\n`;
}

function logConsoleSummary(report) {
  console.group('Visual Audit Report');
  console.log(`Routes audited: ${report.summary.totalRoutes}`);
  console.log(
    `Issues: ${report.summary.issues.total} total | ${report.summary.issues.critical} critical | ${report.summary.issues.warning} warning`
  );

  for (const route of report.routes.slice(0, 10)) {
    console.log(`${route.path} -> ${route.summary.status} (${route.summary.averageScore})`);
  }

  console.groupEnd();
}

function shouldEnsureLocalAuditServer(baseUrl) {
  try {
    const parsedUrl = new URL(baseUrl);
    return (
      (parsedUrl.hostname === 'localhost' || parsedUrl.hostname === '127.0.0.1') &&
      parsedUrl.port === '3009'
    );
  } catch {
    return false;
  }
}

export async function runVisualAudit(options = {}) {
  const baseUrl = options.baseUrl || DEFAULT_BASE_URL;
  const routes = await resolveAuditRoutes();
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const routeReports = [];

  try {
    if (shouldEnsureLocalAuditServer(baseUrl)) {
      console.log('[audit] checking server...');
      await ensureAuditServer();
    }

    console.log('[audit] waiting for page readiness...');
    try {
      await waitForPageReady(page, baseUrl);
    } catch (error) {
      console.warn(
        `[audit] initial page readiness check did not stabilize: ${error instanceof Error ? error.message : String(error)}`
      );
    }

    for (const route of routes) {
      console.log(`[audit] auditing route: ${route.path}`);
      console.time(`[audit] ${route.path}`);

      try {
        const viewports = [];

        for (const viewport of VIEWPORTS) {
          await page.setViewportSize({ width: viewport.width, height: viewport.height });

          const pageErrors = [];
          const handlePageError = error => {
            pageErrors.push(String(error));
          };

          page.on('pageerror', handlePageError);

          try {
            await safeGoto(page, `${baseUrl}${route.path}`);
            await page.addScriptTag({ path: ENGINE_PATH });

            const viewportReport = await Promise.race([
              page.evaluate(
                ({ routePath, viewportName }) => {
                  return window.__MINDWP_VISUAL_AUDIT__.runVisualAudit({
                    route: routePath,
                    viewport: viewportName,
                  });
                },
                { routePath: route.path, viewportName: viewport.name }
              ),
              new Promise((_, reject) => {
                setTimeout(() => reject(new Error('Audit timeout (15s)')), EVALUATE_TIMEOUT_MS);
              }),
            ]).catch(error => ({
              error: true,
              message: error instanceof Error ? error.message : String(error),
              route: route.path,
              viewport: viewport.name,
              components: [],
              sections: [],
              designSystem: { spacingViolations: [], colorViolations: [] },
              summary: {
                componentCount: 0,
                sectionCount: 0,
                componentIssues: { total: 0, critical: 0, warning: 0 },
                sectionIssues: { total: 0, critical: 0, warning: 0 },
              },
            }));

            viewportReport.components = [...viewportReport.components]
              .map(component => ({
                ...component,
                issues: sortIssueArray(dedupeIssues(component.issues)),
                suggestions: sortSuggestions(component.suggestions),
              }))
              .sort(
                (left, right) =>
                  left.name.localeCompare(right.name) || left.rootPath.localeCompare(right.rootPath)
              );

            viewportReport.sections = [...viewportReport.sections]
              .map(section => ({
                ...section,
                issues: sortIssueArray(dedupeIssues(section.issues)),
                suggestions: sortSuggestions(section.suggestions),
              }))
              .sort(
                (left, right) =>
                  left.name.localeCompare(right.name) || left.rootPath.localeCompare(right.rootPath)
              );

            viewportReport.designSystem = {
              spacingViolations: [...(viewportReport.designSystem?.spacingViolations || [])].sort(
                (left, right) =>
                  left.component.localeCompare(right.component) ||
                  left.field.localeCompare(right.field)
              ),
              colorViolations: [...(viewportReport.designSystem?.colorViolations || [])].sort(
                (left, right) =>
                  left.component.localeCompare(right.component) ||
                  left.field.localeCompare(right.field)
              ),
            };

            if (pageErrors.length > 0) {
              viewportReport.runtimeErrors = [...pageErrors].sort((left, right) =>
                left.localeCompare(right)
              );
            }

            viewports.push(viewportReport);
          } finally {
            page.off('pageerror', handlePageError);
          }
        }

        routeReports.push({
          ...route,
          viewports,
          summary: buildRouteSummary(viewports),
        });
      } catch (error) {
        routeReports.push({
          ...route,
          error: true,
          message: error instanceof Error ? error.message : String(error),
          viewports: [],
          summary: {
            averageScore: 0,
            status: 'critical',
            componentCount: 0,
            sectionCount: 0,
            issueCount: 1,
          },
        });
      } finally {
        console.timeEnd(`[audit] ${route.path}`);
      }
    }
  } finally {
    await browser.close();
  }

  const sortedRouteReports = sortRouteReports(routeReports);
  const crossRouteComponents = aggregateCrossRouteComponents(sortedRouteReports);
  const designSystem = aggregateDesignSystem(sortedRouteReports);
  const worstRoutes = getWorstRoutes(sortedRouteReports);
  const generatedAt = new Date().toISOString();

  const report = {
    meta: {
      generatedAt,
      totalRoutes: sortedRouteReports.length,
      environment: 'local-audit',
      baseUrl,
    },
    generatedAt,
    baseUrl,
    summary: {
      totalRoutes: sortedRouteReports.length,
      issues: summarizeSeverity(sortedRouteReports),
    },
    routes: sortedRouteReports,
    repeatedBlocks: aggregateRepeatedBlocks(sortedRouteReports),
    crossRouteComponents,
    designSystem,
    worstRoutes,
    topFindings: extractTopFindings(sortedRouteReports),
  };

  const compactReport = {
    ...report,
    routes: sortedRouteReports.map(sanitizeRouteReport),
    repeatedBlocks: report.repeatedBlocks.slice(0, 25),
    crossRouteComponents: report.crossRouteComponents.slice(0, 25),
    designSystem: {
      spacingViolations: report.designSystem.spacingViolations.slice(0, 100),
      colorViolations: report.designSystem.colorViolations.slice(0, 100),
    },
  };

  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }

  if (!fs.existsSync(PHASE7_REPORTS_DIR)) {
    fs.mkdirSync(PHASE7_REPORTS_DIR, { recursive: true });
  }

  if (!fs.existsSync(HISTORY_DIR)) {
    fs.mkdirSync(HISTORY_DIR, { recursive: true });
  }

  const jsonPath = path.join(PHASE7_REPORTS_DIR, 'visual-audit.json');
  const markdownPath = path.join(PHASE7_REPORTS_DIR, 'visual-audit.md');
  const historyBaseName = `visual-audit-${Date.now()}`;
  const historyJsonPath = path.join(HISTORY_DIR, `${historyBaseName}.json`);
  const historyMarkdownPath = path.join(HISTORY_DIR, `${historyBaseName}.md`);

  const markdown = formatMarkdown(compactReport);
  fs.writeFileSync(jsonPath, JSON.stringify(compactReport, null, 2));
  fs.writeFileSync(markdownPath, markdown);
  fs.writeFileSync(historyJsonPath, JSON.stringify(compactReport, null, 2));
  fs.writeFileSync(historyMarkdownPath, markdown);
  logConsoleSummary(compactReport);
  console.log('[audit] completed');

  return compactReport;
}

const isEntrypoint = process.argv[1]
  ? path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
  : false;

if (isEntrypoint) {
  runVisualAudit().catch(error => {
    console.error('[visual-audit] Failed:', error);
    process.exit(1);
  });
}

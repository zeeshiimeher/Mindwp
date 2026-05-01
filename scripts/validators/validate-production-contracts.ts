#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

import { FEATURE_REGISTRY } from '../../src/domains/features/registry.ts';
import {
  ensureGraphInitialized,
  getInitializedContentGraph,
} from '../../src/domains/init/ensureGraphInitialized.ts';
import { SERVICE_REGISTRY } from '../../src/domains/services/registry.ts';
import { createCTARegistry, getCTARegistrySnapshot } from '../../src/lib/cta/ctaRegistry';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { systemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');
const root = process.cwd();
const reportPath = path.join(root, 'reports', 'production-contract-report.json');
const logger = createLogger({
  label: 'validate-production-contracts',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: root,
});
const DISALLOWED_LEGACY_ROUTE_FILES = ['src/app/case-study/[slug]/page.tsx'];

const featureRegistryEntrySchema = z
  .object({
    slug: z.string(),
    path: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.any(),
    systems: z.array(z.string()).optional(),
    topics: z.array(z.string()).optional(),
  })
  .strict();

const serviceRegistryEntrySchema = z
  .object({
    slug: z.string(),
    path: z.string(),
    title: z.string(),
    description: z.string(),
    badge: z.string(),
    category: z.string(),
    systems: z.array(z.string()),
    topics: z.array(z.string()),
  })
  .strict();

const ctaEntrySchema = z
  .object({
    pageId: z.string(),
    pageType: z.string(),
    instanceId: z.string(),
    intent: z.enum(['entry', 'diagnostic', 'comparison', 'conversion']),
    position: z.enum(['hero', 'pre-mid', 'mid', 'sidebar', 'footer']),
  })
  .strict();

const ctaSnapshotSchema = z
  .object({
    countsByIntent: z
      .object({
        entry: z.number(),
        diagnostic: z.number(),
        comparison: z.number(),
        conversion: z.number(),
      })
      .strict(),
    countsByPosition: z
      .object({
        hero: z.number(),
        'pre-mid': z.number(),
        mid: z.number(),
        sidebar: z.number(),
        footer: z.number(),
      })
      .strict(),
    totalPanels: z.number(),
    entries: z.array(ctaEntrySchema),
  })
  .strict();

const attributedEdgeSchema = z
  .object({
    id: z.string(),
    source: z.enum(['manual', 'derived']),
  })
  .strict();

const contentGraphNodeSchema = z
  .object({
    id: z.string(),
    slug: z.string(),
    type: z.enum([
      'service',
      'industry-category',
      'industry-detail',
      'feature',
      'blog',
      'resource',
      'case-study',
    ]),
    path: z.string(),
    title: z.string().optional(),
    description: z.string().optional(),
    canonical: z.string().optional(),
    openGraph: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        url: z.string().optional(),
        images: z.array(z.string()).optional(),
      })
      .strict()
      .optional(),
    robots: z
      .object({
        index: z.boolean(),
        follow: z.boolean(),
      })
      .strict()
      .optional(),
    seo: z.record(z.string(), z.unknown()).optional(),
    hero: z.record(z.string(), z.unknown()).optional(),
    cta: z.record(z.string(), z.unknown()).optional(),
    parent: z.string().optional(),
    vertical: z.enum(['roofing-hvac', 'aesthetic-clinic']).optional(),
    coreFramework: z.boolean().optional(),
    industries: z.array(z.string()).optional(),
    systems: z.array(z.string()).optional(),
    topics: z.array(z.string()).optional(),
    relatesTo: z.array(attributedEdgeSchema).optional(),
    supports: z.array(attributedEdgeSchema).optional(),
    validates: z.array(attributedEdgeSchema).optional(),
    components: z.array(z.string()).optional(),
    conversionGoal: z.enum(['lead', 'consultation', 'demo', 'email-capture', 'none']).optional(),
    conversionPriority: z.number().optional(),
  })
  .strict();

const contentGraphSchema = z.record(z.string(), contentGraphNodeSchema);

type CheckResult = {
  name: string;
  status: 'pass' | 'fail';
  details: string;
};

function writeReport(results: CheckResult[]) {
  const report = {
    generatedAt: new Date().toISOString(),
    passed: results.every(result => result.status === 'pass'),
    total: results.length,
    failed: results.filter(result => result.status === 'fail').length,
    checks: results,
  };

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
}

async function main() {
  const results: CheckResult[] = [];

  try {
    z.array(featureRegistryEntrySchema).parse(FEATURE_REGISTRY);
    results.push({
      name: 'feature-registry',
      status: 'pass',
      details: `Validated ${FEATURE_REGISTRY.length} feature registry entries.`,
    });
  } catch (error) {
    results.push({
      name: 'feature-registry',
      status: 'fail',
      details:
        error instanceof Error ? error.message : 'Unknown feature registry contract failure.',
    });
  }

  try {
    z.record(z.string(), serviceRegistryEntrySchema).parse(SERVICE_REGISTRY);
    results.push({
      name: 'service-registry',
      status: 'pass',
      details: `Validated ${Object.keys(SERVICE_REGISTRY).length} service registry entries.`,
    });
  } catch (error) {
    results.push({
      name: 'service-registry',
      status: 'fail',
      details:
        error instanceof Error ? error.message : 'Unknown service registry contract failure.',
    });
  }

  try {
    const ctaRegistry = createCTARegistry({
      pageId: 'service:contract-freeze',
      pageType: 'service',
      primarySystem: 'smart-website-systems',
    });
    const snapshot = getCTARegistrySnapshot(ctaRegistry);
    ctaSnapshotSchema.parse(snapshot);
    results.push({
      name: 'cta-registry',
      status: 'pass',
      details: 'Validated CTA registry snapshot shape and intent/position counters.',
    });
  } catch (error) {
    results.push({
      name: 'cta-registry',
      status: 'fail',
      details: error instanceof Error ? error.message : 'Unknown CTA registry contract failure.',
    });
  }

  try {
    await ensureGraphInitialized();
    const graph = await getInitializedContentGraph();
    contentGraphSchema.parse(graph);
    results.push({
      name: 'content-graph-registry',
      status: 'pass',
      details: `Validated ${Object.keys(graph).length} content graph nodes.`,
    });
  } catch (error) {
    results.push({
      name: 'content-graph-registry',
      status: 'fail',
      details: error instanceof Error ? error.message : 'Unknown content graph contract failure.',
    });
  }

  try {
    const existingLegacyRouteFiles = DISALLOWED_LEGACY_ROUTE_FILES.filter(relativePath =>
      fs.existsSync(path.join(root, relativePath))
    );
    if (existingLegacyRouteFiles.length > 0) {
      throw new Error(
        `Legacy app route aliases must be deleted: ${existingLegacyRouteFiles.join(', ')}`
      );
    }

    results.push({
      name: 'route-canonicality',
      status: 'pass',
      details: 'Validated that legacy duplicate app route aliases are absent.',
    });
  } catch (error) {
    results.push({
      name: 'route-canonicality',
      status: 'fail',
      details: error instanceof Error ? error.message : 'Unknown route canonicality failure.',
    });
  }

  writeReport(results);

  if (shouldReportJson) {
    logger.printSummary('report-json flag active; full payload preserved in file output');
  }

  const failures = results.filter(result => result.status === 'fail');
  if (failures.length > 0) {
    logger.printErrors(
      failures.map(failure => `${failure.name}: ${failure.details}`),
      'failures',
      20
    );
    process.exit(1);
  }

  logger.printSummary('passed');
}

main().catch(error => {
  logger.printErrors([error instanceof Error ? error.message : String(error)], 'crash', 5);
  process.exit(1);
});

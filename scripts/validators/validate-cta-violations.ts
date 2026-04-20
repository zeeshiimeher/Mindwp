import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { systemEnv } from '../../config/systemEnv.mjs';
import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { normalizeRawReport } from '../lib/report-schema.mjs';

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const reportPath = path.join(root, 'reports', 'cta-violation-scan.json');
const sourceCommand = 'npx tsx scripts/validators/validate-cta-violations.ts';
const logger = createLogger({
  label: 'validate-cta-violations',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: root,
});

type ViolationEntry = {
  page: string;
  violations: string[];
};

function fixHintForViolation(violation: string) {
  if (violation.includes('Route files must not render SmartCTA directly')) {
    return 'Move SmartCTA ownership into a page adapter, template, or renderer outside src/app.';
  }

  if (violation.includes('Domain data files must not render SmartCTA directly')) {
    return 'Keep domain data declarative and move CTA rendering into a template or renderer.';
  }

  if (violation.includes('Inline conversion CTA detected')) {
    return 'Use entry, diagnostic, or comparison for inline CTA positions and keep conversion CTAs at the footer.';
  }

  if (violation.includes('conversion CTAs in one file')) {
    return 'Reduce the file to a single conversion CTA and keep additional panels non-conversion.';
  }

  return 'Align the file with the CTA ownership and placement contract.';
}

export function formatViolationReport(report: ViolationEntry[]) {
  const lines = [`CTA violation scan failed: ${report.length} file(s)`];

  for (const entry of report) {
    lines.push(`- ${entry.page}`);
    for (const violation of entry.violations) {
      lines.push(`  cause: ${violation}`);
      lines.push(`  fix: ${fixHintForViolation(violation)}`);
    }
  }

  lines.push(`Report: ${reportPath}`);
  return lines.join('\n');
}

function isForbiddenCtaOwner(relativePath: string) {
  if (relativePath.startsWith('src/app/') && !relativePath.startsWith('src/app/dev/')) {
    return 'Route files must not render SmartCTA directly. Own CTA intent and position in page adapters or renderers.';
  }

  if (/^src\/domains\/[^/]+\/data\//.test(relativePath)) {
    return 'Domain data files must not render SmartCTA directly. Keep CTA ownership in templates or renderers.';
  }

  return null;
}

async function collectTsxFiles(dirPath: string): Promise<string[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async entry => {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        return collectTsxFiles(fullPath);
      }

      if (!entry.name.endsWith('.tsx')) {
        return [];
      }

      return [fullPath];
    })
  );

  return files.flat();
}

function extractSmartCtaBlocks(content: string) {
  return content.match(/<SmartCTA\b[\s\S]*?\/>/g) ?? [];
}

export async function runCtaViolationScan() {
  const report: ViolationEntry[] = [];
  const files = await collectTsxFiles(srcRoot);

  for (const filePath of files) {
    const relativePath = path.relative(root, filePath).replace(/\\/g, '/');
    if (
      relativePath === 'src/components/system/SmartCTA.tsx' ||
      relativePath.startsWith('src/components/')
    ) {
      continue;
    }

    const content = await fs.readFile(filePath, 'utf8');
    const blocks = extractSmartCtaBlocks(content);
    if (blocks.length === 0) {
      continue;
    }

    const violations: string[] = [];
    const forbiddenOwnerViolation = isForbiddenCtaOwner(relativePath);
    let conversionCount = 0;

    if (forbiddenOwnerViolation) {
      violations.push(forbiddenOwnerViolation);
    }

    for (const block of blocks) {
      const intentMatch = block.match(/intent='([^']+)'/);
      const positionMatch = block.match(/position='([^']+)'/);
      const modeMatch = block.match(/mode='([^']+)'/);
      const mode = modeMatch?.[1] ?? 'full';
      const intent = intentMatch?.[1] ?? (mode === 'actions-only' ? 'entry' : 'conversion');
      const position = positionMatch?.[1] ?? (mode === 'actions-only' ? 'hero' : 'footer');

      if (intent === 'conversion') {
        conversionCount += 1;
      }

      if (intent === 'conversion' && ['pre-mid', 'mid', 'sidebar'].includes(position)) {
        violations.push(`Inline conversion CTA detected at ${position}`);
      }
    }

    if (conversionCount > 1) {
      violations.push(`Detected ${conversionCount} conversion CTAs in one file`);
    }

    if (violations.length > 0) {
      report.push({ page: relativePath, violations });
    }
  }

  const normalizedReport = normalizeRawReport({
    name: 'cta-violation-scan',
    payload: report,
    sourceCommand,
  });

  await fs.mkdir(path.dirname(reportPath), { recursive: true });
  await fs.writeFile(reportPath, `${JSON.stringify(normalizedReport, null, 2)}\n`, 'utf8');

  return normalizedReport;
}

async function main() {
  const report = await runCtaViolationScan();
  const issues = (report.issues ?? []) as ViolationEntry[];

  if ((report.summary.failed ?? 0) > 0) {
    logger.printErrors([formatViolationReport(issues)], 'violations', 1);
    logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);
    process.exit(1);
  }

  logger.printTotals(report.summary);
  logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
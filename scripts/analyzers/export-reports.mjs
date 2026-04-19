/**
 * Export Reports (unified)
 *
 * Regenerates report artifacts that are not emitted directly by validate-all.
 * Usage:
 *   node --import tsx/esm scripts/analyzers/export-reports.mjs --type=client
 *   node --import tsx/esm scripts/analyzers/export-reports.mjs --type=readable
 *   node --import tsx/esm scripts/analyzers/export-reports.mjs              (both)
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const EXPORT_SOURCE_COMMAND = 'node --import tsx/esm scripts/analyzers/export-reports.mjs';

const typeArg = process.argv.find(a => a.startsWith('--type='));
const requestedType = typeArg ? typeArg.split('=')[1] : 'all';

async function init() {
  const { ensureGraphInitialized } = await import(
    path.join(ROOT, 'src/domains/init/ensureGraphInitialized.ts')
  );
  await ensureGraphInitialized();

  const reportsDir = path.join(ROOT, 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  return reportsDir;
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
}

function runTsScript(relativePath) {
  const scriptPath = path.join(ROOT, relativePath);
  const result = spawnSync(process.execPath, ['--import', 'tsx/esm', scriptPath], {
    cwd: ROOT,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    throw new Error(`Failed to run ${relativePath}`);
  }
}

function stampReportSource(reportsDir, fileName, sourceCommand) {
  const filePath = path.join(reportsDir, fileName);
  const report = readJson(filePath);

  if (!report || typeof report !== 'object' || Array.isArray(report)) {
    return;
  }

  writeJson(filePath, {
    ...report,
    generatedAt: typeof report.generatedAt === 'string' ? report.generatedAt : new Date().toISOString(),
    sourceCommand,
  });
}

function buildMarkdownSummary(report) {
  const lines = [
    '# Client Report',
    '',
    `Generated at: ${report.generatedAt}`,
    '',
    '## Summary',
    '',
    `- Total pages: ${report.summary.totalPages}`,
    `- Healthy: ${report.summary.healthy}`,
    `- Weak: ${report.summary.weak}`,
    `- Critical: ${report.summary.critical}`,
    '',
    '## Report Files',
    '',
  ];

  for (const item of report.reports) {
    lines.push(`- ${item.name}`);
  }

  lines.push('');
  return lines.join('\n');
}

function buildClientReport(reportsDir) {
  const validationResults = readJson(path.join(reportsDir, 'validation-results.json')) ?? {};
  const contentQuality = readJson(path.join(reportsDir, 'content-quality-report.json')) ?? {};
  const graphReport = readJson(path.join(reportsDir, 'graph-report.json')) ?? {};
  const reportNames = fs.readdirSync(reportsDir).filter(name => !name.startsWith('.')).sort();

  const report = {
    generatedAt: new Date().toISOString(),
    sourceCommand: EXPORT_SOURCE_COMMAND,
    summary: {
      totalPages: validationResults?.seo?.pagesAnalyzed ?? 0,
      healthy: Math.max((validationResults?.seo?.pagesAnalyzed ?? 0) - (contentQuality?.issueCount ?? 0), 0),
      weak: contentQuality?.warningCount ?? 0,
      critical: contentQuality?.issueCount ?? validationResults?.total?.blockingFailed ?? 0,
    },
    validation: validationResults?.total ?? null,
    contentQuality: {
      issueCount: contentQuality?.issueCount ?? 0,
      warningCount: contentQuality?.warningCount ?? 0,
    },
    graph: {
      errorCount: graphReport?.errorCount ?? 0,
      warningCount: graphReport?.warningCount ?? 0,
    },
    reports: reportNames.map(name => ({ name })),
  };

  const jsonPath = path.join(reportsDir, 'client-report.json');
  writeJson(jsonPath, report);
  console.log(`[export-reports] Written: ${jsonPath}`);

  const mdPath = path.join(reportsDir, 'client-report.md');
  fs.writeFileSync(mdPath, buildMarkdownSummary(report));
  console.log(`[export-reports] Written: ${mdPath}`);

  console.log(
    `  Summary: ${report.summary.totalPages} pages | ${report.summary.healthy} healthy | ${report.summary.weak} weak | ${report.summary.critical} critical`
  );
}

function buildCtaReport(reportsDir) {
  const validationResults = readJson(path.join(reportsDir, 'validation-results.json')) ?? {};
  const validators = new Map(
    (validationResults.validators ?? []).map(validator => [validator.name, validator])
  );
  const trackedValidators = [
    'validate-cta-label-contract',
    'validate-conversion-contract',
    'validate-cta-violations',
  ];
  const entries = trackedValidators.map(name => {
    const validator = validators.get(name);
    return {
      name,
      status: validator?.status ?? 'missing',
      blocking: validator?.blocking ?? true,
      duration: validator?.duration ?? null,
    };
  });

  writeJson(path.join(reportsDir, 'cta-report.json'), {
    generatedAt: new Date().toISOString(),
    sourceCommand: EXPORT_SOURCE_COMMAND,
    status: entries.some(entry => entry.status !== 'pass') ? 'warning' : 'clean',
    validators: entries,
  });
}

async function exportClient(reportsDir) {
  console.log('[export-reports] Generating topic authority scores...');
  runTsScript('scripts/generators/generate-topic-authority-scores.ts');
  stampReportSource(
    reportsDir,
    'topic-authority-scores.json',
    'node --import tsx/esm scripts/generators/generate-topic-authority-scores.ts'
  );

  console.log('[export-reports] Generating content gaps report...');
  runTsScript('scripts/analyzers/generate-content-gaps.ts');
  stampReportSource(
    reportsDir,
    'content-gaps.json',
    'node --import tsx/esm scripts/analyzers/generate-content-gaps.ts'
  );

  stampReportSource(reportsDir, 'validation-results.json', 'node scripts/core/validate-all.mjs --report-json');
  stampReportSource(reportsDir, 'content-quality-report.json', 'npx tsx scripts/validators/validate-content-quality.mjs --report-json');
  stampReportSource(reportsDir, 'graph-report.json', 'npx tsx scripts/validators/validate-graph.ts');

  console.log('[export-reports] Generating client intelligence report...');
  buildClientReport(reportsDir);
  console.log('[export-reports] Generating CTA report...');
  buildCtaReport(reportsDir);
}

async function exportReadable(reportsDir) {
  console.log('[export-reports] Readable report generator has been removed. Skipping.');
}

async function main() {
  const reportsDir = await init();

  if (requestedType === 'client' || requestedType === 'all') {
    await exportClient(reportsDir);
  }

  if (requestedType === 'readable' || requestedType === 'all') {
    await exportReadable(reportsDir);
  }

  console.log('[export-reports] Done.');
}

main().catch(err => {
  console.error('[export-reports] Failed:', err);
  process.exit(1);
});

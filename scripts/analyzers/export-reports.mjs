/**
 * Export Reports (unified)
 *
 * Generates client or readable reports.
 * Usage:
 *   node --import tsx/esm scripts/analyzers/export-reports.mjs --type=client
 *   node --import tsx/esm scripts/analyzers/export-reports.mjs --type=readable
 *   node --import tsx/esm scripts/analyzers/export-reports.mjs              (both)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

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

async function exportClient(reportsDir) {
  const { generateReport, formatReportAsMarkdown } = await import(
    path.join(ROOT, 'src/lib/dev/reportGenerator.ts')
  );

  console.log('[export-reports] Generating client intelligence report...');
  const report = generateReport();

  const jsonPath = path.join(reportsDir, 'client-report.json');
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
  console.log(`[export-reports] Written: ${jsonPath}`);

  const mdPath = path.join(reportsDir, 'client-report.md');
  fs.writeFileSync(mdPath, formatReportAsMarkdown(report));
  console.log(`[export-reports] Written: ${mdPath}`);

  console.log(
    `  Summary: ${report.summary.totalPages} pages | ${report.summary.healthy} healthy | ${report.summary.weak} weak | ${report.summary.critical} critical`
  );
}

async function exportReadable(reportsDir) {
  const { generateReadableReport } = await import(
    path.join(ROOT, 'src/lib/dev/readableReportGenerator.ts')
  );
  const { formatReadableReport } = await import(
    path.join(ROOT, 'src/lib/dev/readableReportFormatter.ts')
  );

  console.log('[export-reports] Generating readable audit report...');
  const report = generateReadableReport();

  const jsonPath = path.join(reportsDir, 'readable-audit-report.json');
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
  console.log(`[export-reports] Written: ${jsonPath}`);

  const mdPath = path.join(reportsDir, 'readable-audit-report.md');
  fs.writeFileSync(mdPath, formatReadableReport(report));
  console.log(`[export-reports] Written: ${mdPath}`);

  console.log(
    `  Summary: ${report.issues.length} issues | ${report.opportunities.length} opportunities | ${report.recommendations.length} recommendations | ${report.priorityActions.length} priority actions`
  );
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

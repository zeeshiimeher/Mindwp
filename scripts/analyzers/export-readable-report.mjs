/**
 * Export Readable Audit Report
 *
 * Generates reports/readable-audit-report.json and reports/readable-audit-report.md
 * Usage: node --import tsx/esm scripts/analyzers/export-readable-report.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

async function main() {
  const { ensureGraphInitialized } = await import(
    path.join(ROOT, 'src/domains/init/ensureGraphInitialized.ts')
  );
  await ensureGraphInitialized();

  const { generateReadableReport } = await import(
    path.join(ROOT, 'src/lib/dev/readableReportGenerator.ts')
  );
  const { formatReadableReport } = await import(
    path.join(ROOT, 'src/lib/dev/readableReportFormatter.ts')
  );

  console.log('[export-readable-report] Generating readable audit report...');

  const report = generateReadableReport();

  const reportsDir = path.join(ROOT, 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

  const jsonPath = path.join(reportsDir, 'readable-audit-report.json');
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
  console.log(`[export-readable-report] Written: ${jsonPath}`);

  const mdPath = path.join(reportsDir, 'readable-audit-report.md');
  fs.writeFileSync(mdPath, formatReadableReport(report));
  console.log(`[export-readable-report] Written: ${mdPath}`);

  console.log('[export-readable-report] Done.');
  console.log(
    `  Summary: ${report.issues.length} issues | ${report.opportunities.length} opportunities | ${report.recommendations.length} recommendations | ${report.priorityActions.length} priority actions`
  );
}

main().catch(err => {
  console.error('[export-readable-report] Failed:', err);
  process.exit(1);
});

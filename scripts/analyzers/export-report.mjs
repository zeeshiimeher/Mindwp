/**
 * Export Content Intelligence Report
 *
 * Generates reports/client-report.json and reports/client-report.md
 * Usage: node --import tsx/esm scripts/analyzers/export-report.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

async function main() {
  // Ensure graph is initialized before imports that depend on it
  const { ensureGraphInitialized } = await import(
    path.join(ROOT, 'src/domains/init/ensureGraphInitialized.ts')
  );
  await ensureGraphInitialized();

  const { generateReport, formatReportAsMarkdown } = await import(
    path.join(ROOT, 'src/lib/dev/reportGenerator.ts')
  );

  console.log('[export-report] Generating content intelligence report...');

  const report = generateReport();

  const reportsDir = path.join(ROOT, 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

  // JSON
  const jsonPath = path.join(reportsDir, 'client-report.json');
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
  console.log(`[export-report] Written: ${jsonPath}`);

  // Markdown
  const mdPath = path.join(reportsDir, 'client-report.md');
  fs.writeFileSync(mdPath, formatReportAsMarkdown(report));
  console.log(`[export-report] Written: ${mdPath}`);

  console.log('[export-report] Done.');
  console.log(
    `  Summary: ${report.summary.totalPages} pages | ${report.summary.healthy} healthy | ${report.summary.weak} weak | ${report.summary.critical} critical`
  );
}

main().catch(err => {
  console.error('[export-report] Failed:', err);
  process.exit(1);
});

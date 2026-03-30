/**
 * Readable Report Formatter
 *
 * Converts a ReadableAuditReport into clean Markdown.
 * No scores, no technical terms — business language only.
 */

import type { ReadableAuditReport } from './readableReportGenerator';

export function formatReadableReport(report: ReadableAuditReport): string {
  const lines: string[] = [];

  lines.push('# Website Audit Report');
  lines.push('');
  lines.push(
    `> Generated: ${new Date(report.generatedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`
  );
  lines.push('');
  lines.push('---');
  lines.push('');

  // Summary
  lines.push('## Summary');
  lines.push('');
  lines.push(report.summary);
  lines.push('');
  lines.push('---');
  lines.push('');

  // Key Issues
  if (report.issues.length > 0) {
    lines.push('## Key Issues');
    lines.push('');
    for (const issue of report.issues) {
      lines.push(`### ${issue.title}`);
      lines.push('');
      lines.push(issue.description);
      lines.push('');
      lines.push(`**Impact:** ${issue.impact}`);
      lines.push('');
    }
    lines.push('---');
    lines.push('');
  }

  // Opportunities
  if (report.opportunities.length > 0) {
    lines.push('## Opportunities');
    lines.push('');
    for (const opp of report.opportunities) {
      lines.push(`### ${opp.title}`);
      lines.push('');
      lines.push(opp.description);
      lines.push('');
    }
    lines.push('---');
    lines.push('');
  }

  // Recommendations
  if (report.recommendations.length > 0) {
    lines.push('## Recommendations');
    lines.push('');
    for (const rec of report.recommendations) {
      lines.push(`- **${rec.action}** — ${rec.explanation}`);
    }
    lines.push('');
    lines.push('---');
    lines.push('');
  }

  // Priority Actions
  if (report.priorityActions.length > 0) {
    lines.push('## Priority Actions');
    lines.push('');
    lines.push('These pages should be addressed first:');
    lines.push('');
    for (let i = 0; i < report.priorityActions.length; i++) {
      const pa = report.priorityActions[i];
      lines.push(`${i + 1}. **${pa.slug}** — ${pa.action}`);
      lines.push(`   - Issue: ${pa.issue}`);
      lines.push(`   - Expected: ${pa.expectedImprovement}`);
    }
    lines.push('');
    lines.push('---');
    lines.push('');
  }

  // Expected Outcome
  lines.push('## Expected Outcome');
  lines.push('');
  lines.push(report.expectedOutcome.improvement);
  if (report.expectedOutcome.notes) {
    lines.push('');
    lines.push(`*${report.expectedOutcome.notes}*`);
  }
  lines.push('');

  return lines.join('\n');
}

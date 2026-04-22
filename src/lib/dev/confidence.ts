import type { PriorityItem, PriorityLevel, UnifiedSystemReport } from './system-report';

export type ConfidenceLevel = 'High' | 'Medium' | 'Low';

export function priorityRank(level: PriorityLevel) {
  return level === 'HIGH' ? 0 : level === 'MEDIUM' ? 1 : 2;
}

export function getConfidence(
  report: UnifiedSystemReport,
  activePriorities: PriorityItem[]
): {
  level: ConfidenceLevel;
  reason: string;
} {
  const blockingFailure = report.validate.blockingFailed > 0 || report.status === 'FAIL';
  const highCount = activePriorities.filter(priority => priority.level === 'HIGH').length;
  const newIssueCount = report.changes.newIssues.length;

  if (blockingFailure || highCount >= 3) {
    return {
      level: 'Low',
      reason: 'Blocking health or several high-priority items need attention.',
    };
  }

  if (highCount === 0 && newIssueCount === 0 && report.validate.warningCount <= 1) {
    return {
      level: 'High',
      reason: 'Validation is stable and no new urgent work appeared.',
    };
  }

  return {
    level: 'Medium',
    reason: 'System is safe, but there are active items worth checking today.',
  };
}

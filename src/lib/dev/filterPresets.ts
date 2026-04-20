import type {
  PageIntelligenceItem,
  PriorityItem,
  StatusChangeItem,
  UnifiedSystemReport,
} from './system-report';

export type FilterPreset = 'needs-attention' | 'high-impact' | 'all-healthy';

export function getDefaultPreset(report: UnifiedSystemReport): FilterPreset {
  const hasAttention = report.priorities.some(priority => priority.level !== 'LOW');
  const hasProblemPages = report.pages.some(page => page.status !== 'OK');

  if (hasAttention || hasProblemPages) {
    return 'needs-attention';
  }

  return 'all-healthy';
}

export function buildLastChangedMap(changes: StatusChangeItem[]) {
  return new Set(changes.map(change => change.route));
}

export function filterPrioritiesByPreset(
  priorities: PriorityItem[],
  preset: FilterPreset,
  pageByRoute: Map<string, PageIntelligenceItem>
) {
  if (preset === 'all-healthy') {
    return [];
  }

  if (preset === 'high-impact') {
    return priorities.filter(priority => {
      if (priority.level === 'HIGH') {
        return true;
      }

      const page = priority.route ? pageByRoute.get(priority.route) : null;
      return Boolean(page && page.conversionPriority > 0);
    });
  }

  return priorities.filter(priority => priority.level !== 'LOW' || priority.type === 'lint');
}

export function filterPagesByPreset(
  pages: PageIntelligenceItem[],
  preset: FilterPreset,
  changedRoutes: Set<string>
) {
  const filtered = pages.filter(page => {
    if (preset === 'all-healthy') {
      return page.status === 'OK';
    }

    if (preset === 'high-impact') {
      return page.conversionPriority > 0 || page.status !== 'OK';
    }

    return page.status !== 'OK';
  });

  return filtered.sort((left, right) => {
    const leftChanged = changedRoutes.has(left.route) ? 1 : 0;
    const rightChanged = changedRoutes.has(right.route) ? 1 : 0;

    if (rightChanged !== leftChanged) {
      return rightChanged - leftChanged;
    }

    if (right.conversionPriority !== left.conversionPriority) {
      return right.conversionPriority - left.conversionPriority;
    }

    return right.issues.length - left.issues.length || left.route.localeCompare(right.route);
  });
}

export function getProgressCopy(completed: number, total: number) {
  if (total === 0) {
    return '0 / 0 actions completed';
  }

  return `${completed} / ${total} actions completed`;
}

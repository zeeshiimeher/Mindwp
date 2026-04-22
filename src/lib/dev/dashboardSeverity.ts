import type {
  PageStatus,
  PriorityLevel,
  UnifiedHealthStatus,
  UnifiedStepStatus,
} from './system-report';

export type DashboardSeverity = 'danger' | 'warning' | 'success' | 'neutral' | 'info';
export type DashboardConfidenceLevel = 'High' | 'Medium' | 'Low';

const severityToneMap: Record<DashboardSeverity, string> = {
  danger: 'border-rose-300 bg-rose-100 text-rose-900',
  warning: 'border-amber-300 bg-amber-100 text-amber-900',
  success: 'border-emerald-300 bg-emerald-100 text-emerald-900',
  neutral: 'border-stone-300 bg-white text-stone-700',
  info: 'border-blue-300 bg-blue-100 text-blue-900',
};

export function getSeverityTone(severity: DashboardSeverity): string {
  return severityToneMap[severity];
}

export function getStatusSeverity(status: UnifiedStepStatus | PageStatus): DashboardSeverity {
  switch (status) {
    case 'FAIL':
      return 'danger';
    case 'SKIPPED':
    case 'WARNING':
      return 'warning';
    case 'PASS':
    case 'OK':
      return 'success';
  }
}

export function getHealthSeverity(status: UnifiedHealthStatus): DashboardSeverity {
  return status === 'OK' ? 'success' : 'warning';
}

export function getPrioritySeverity(level: PriorityLevel): DashboardSeverity {
  switch (level) {
    case 'HIGH':
      return 'danger';
    case 'MEDIUM':
      return 'warning';
    case 'LOW':
      return 'success';
  }
}

export function getConfidenceSeverity(level: DashboardConfidenceLevel): DashboardSeverity {
  switch (level) {
    case 'Low':
      return 'danger';
    case 'Medium':
      return 'warning';
    case 'High':
      return 'success';
  }
}

/**
 * Conversion Issue Types (Normalized)
 *
 * Single source of truth for all conversion issue identifiers,
 * messages, and impact levels. Every system that creates or reads
 * conversion issues MUST use these constants.
 *
 * Used by: validator, aggregator, inspector, priority engine,
 *          suggestions engine, fix log.
 */

// --- Normalized issue type identifiers ---

export const ISSUE_TYPES = {
  NO_CTA: 'no_cta',
  NO_SERVICE_LINK: 'no_service_link',
  NO_JOURNEY: 'no_journey',
} as const;

export type IssueType = (typeof ISSUE_TYPES)[keyof typeof ISSUE_TYPES];

// --- Human-readable messages per issue type ---

export const ISSUE_MESSAGES: Record<IssueType, string> = {
  [ISSUE_TYPES.NO_CTA]: 'Page has no CTA and no service path',
  [ISSUE_TYPES.NO_SERVICE_LINK]: 'No service link found (weak conversion path)',
  [ISSUE_TYPES.NO_JOURNEY]: 'Page does not lead to next step in conversion journey',
};

// --- Default impact per issue type ---

export const ISSUE_IMPACT: Record<IssueType, 'high' | 'medium' | 'low'> = {
  [ISSUE_TYPES.NO_CTA]: 'high',
  [ISSUE_TYPES.NO_SERVICE_LINK]: 'high',
  [ISSUE_TYPES.NO_JOURNEY]: 'medium',
};

// --- Issue factory ---

export interface ConversionIssue {
  type: IssueType;
  message: string;
  impact: 'high' | 'medium' | 'low';
}

export function createIssue(type: IssueType): ConversionIssue {
  return {
    type,
    message: ISSUE_MESSAGES[type],
    impact: ISSUE_IMPACT[type],
  };
}

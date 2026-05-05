import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export interface CriteriaRow {
  /** Stable key for list rendering. */
  id: string;
  /** The decision criterion being compared. */
  label: string;
  /** How the current/package approach handles this criterion. */
  currentApproach: string;
  /** How the system approach handles this criterion. */
  systemApproach: string;
  /** Why the difference matters — the decision signal. */
  decisionSignal: string;
}

export interface CriteriaComparisonSectionProps {
  tone?: SectionTone;
  density?: SectionDensity;
  heading: SectionHeading;
  /** 3–6 criteria rows. Each must compare approaches, not list features. */
  criteria: readonly CriteriaRow[];
  /** Column header for the current/legacy approach. */
  leftLabel?: string;
  /** Column header for the system approach. */
  rightLabel?: string;
}

/**
 * CriteriaComparisonSection — compare approaches across decision criteria.
 *
 * Each row shows a criterion, the current/package approach, the system
 * approach, and a decision signal explaining why the difference matters.
 *
 * Not a pricing table. Not a feature matrix. Not before/after outcomes.
 * Helps the reader decide between approaches based on explicit criteria.
 *
 * Phase 1 component. No variants.
 */
export function CriteriaComparisonSection({
  tone = 'light',
  density = 'default',
  heading,
  criteria,
  leftLabel,
  rightLabel,
}: CriteriaComparisonSectionProps) {
  if (heading.title.trim().length === 0 || heading.description.trim().length === 0) {
    throw new Error('[CriteriaComparisonSection] Invalid data: heading required');
  }

  if (criteria.length < 3 || criteria.length > 6) {
    throw new Error('[CriteriaComparisonSection] Invalid data: 3–6 criteria rows required');
  }

  for (const row of criteria) {
    if (
      row.id.trim().length === 0 ||
      row.label.trim().length === 0 ||
      row.currentApproach.trim().length === 0 ||
      row.systemApproach.trim().length === 0 ||
      row.decisionSignal.trim().length === 0
    ) {
      throw new Error('[CriteriaComparisonSection] Invalid data: all criterion fields required');
    }
  }

  return (
    <SectionShell
      tone={tone}
      density={density}
      heading={heading}
      sectionClassName='criteria-comparison'
    >
      <div className='criteria-comparison__table' role='table' aria-label={heading.title}>
        {/* Column headers */}
        <div className='criteria-comparison__header' role='row'>
          <div className='criteria-comparison__col-label' role='columnheader'>
            <span className='sr-only'>Criterion</span>
          </div>
          <div className='criteria-comparison__col-current' role='columnheader'>
            {leftLabel}
          </div>
          <div className='criteria-comparison__col-system' role='columnheader'>
            {rightLabel}
          </div>
          <div className='criteria-comparison__col-signal' role='columnheader'>
            Why it matters
          </div>
        </div>

        {/* Criteria rows */}
        {criteria.map(row => (
          <div key={row.id} className='criteria-comparison__row' role='row'>
            <div className='criteria-comparison__criterion' role='cell'>
              <span className='criteria-comparison__criterion-label'>{row.label}</span>
            </div>
            <div
              className='criteria-comparison__cell criteria-comparison__cell--current'
              role='cell'
            >
              {row.currentApproach}
            </div>
            <div
              className='criteria-comparison__cell criteria-comparison__cell--system'
              role='cell'
            >
              {row.systemApproach}
            </div>
            <div
              className='criteria-comparison__cell criteria-comparison__cell--signal'
              role='cell'
            >
              {row.decisionSignal}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

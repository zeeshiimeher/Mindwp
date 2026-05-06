import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionFootnote, SectionHeading, SectionTone } from './types';

export type LeakStatus = 'critical' | 'warning' | 'stable';

export interface JourneyLeakStage {
  /** Stable key for list rendering. */
  id: string;
  /** Short stage label displayed as a marker (e.g. "Discovery"). */
  label: string;
  /** Heading for this stage. */
  title: string;
  /** What breaks or goes wrong at this stage. Must be specific. */
  leak: string;
  /** What the leak costs the business. Must not simply restate the leak. */
  impact: string;
  /** Optional: what the system does instead. Represent real system action only. */
  handled?: string;
  /** Optional: honest illustrative metric or range. Never fake proof. */
  metric?: string;
  /** Optional: signal severity. */
  status?: LeakStatus;
}

export interface JourneyLeakMapSectionProps {
  tone?: SectionTone;
  density?: SectionDensity;
  heading: SectionHeading;
  /** 3–5 leak stages. Ordered by point of failure in the enquiry lifecycle. */
  stages: readonly JourneyLeakStage[];
  footnote?: SectionFootnote;
}

const STATUS_STAGE_CLASS_DOT: Record<LeakStatus, string> = {
  critical: 'journey-leak__stage--critical',
  warning: 'journey-leak__stage--warning',
  stable: 'journey-leak__stage--stable',
};

/**
 * JourneyLeakMapSection — lifecycle leak diagnosis for Smart Website Systems.
 *
 * Shows where the enquiry journey breaks at each stage: what fails, what it
 * costs, and what the system does about it. This is diagnosis, not process.
 *
 * Phase 1 component. No variant — single approved pattern.
 */
export function JourneyLeakMapSection({
  tone = 'soft',
  density = 'default',
  heading,
  stages,
  footnote,
}: JourneyLeakMapSectionProps) {
  if (heading.title.trim().length === 0 || heading.description.trim().length === 0) {
    throw new Error('[JourneyLeakMapSection] Invalid data: heading required');
  }

  if (stages.length < 3 || stages.length > 5) {
    throw new Error('[JourneyLeakMapSection] Invalid data: 3–5 stages required');
  }

  for (const stage of stages) {
    if (
      stage.id.trim().length === 0 ||
      stage.label.trim().length === 0 ||
      stage.title.trim().length === 0 ||
      stage.leak.trim().length === 0 ||
      stage.impact.trim().length === 0
    ) {
      throw new Error('[JourneyLeakMapSection] Invalid data: stage fields required');
    }

    if (stage.handled !== undefined && stage.handled.trim().length === 0) {
      throw new Error(
        '[JourneyLeakMapSection] Invalid data: handled must not be blank if provided'
      );
    }

    if (stage.metric !== undefined && stage.metric.trim().length === 0) {
      throw new Error('[JourneyLeakMapSection] Invalid data: metric must not be blank if provided');
    }
  }

  return (
    <SectionShell tone={tone} density={density} heading={heading} sectionClassName='journey-leak'>
      <ol className='journey-leak__stages rd-animate-stagger' aria-label={heading.title}>
        {stages.map((stage, index) => (
          <li
            key={stage.id}
            className={`journey-leak__stage${stage.status ? ` ${STATUS_STAGE_CLASS_DOT[stage.status]}` : ''}`}
          >
            {/* Left rail: number + vertical connector */}
            <div className='journey-leak__stage-marker' aria-hidden='true'>
              <span className='journey-leak__stage-number'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className='journey-leak__stage-connector' />
            </div>

            {/* Right: diagnosis card */}
            <div className='journey-leak__stage-body rd-animate-up'>
              <div className='journey-leak__stage-head'>
                <span className='journey-leak__stage-tag'>{stage.label}</span>
                <h3 className='journey-leak__stage-title'>{stage.title}</h3>
              </div>

              <dl className='journey-leak__stage-fields'>
                <div className='journey-leak__field journey-leak__field--leak'>
                  <dt className='journey-leak__field-label'>Leak</dt>
                  <dd className='journey-leak__field-value'>{stage.leak}</dd>
                </div>
                {stage.handled ? (
                  <div className='journey-leak__field journey-leak__field--handled'>
                    <dt className='journey-leak__field-label'>Handled</dt>
                    <dd className='journey-leak__field-value'>{stage.handled}</dd>
                  </div>
                ) : null}
                <div className='journey-leak__field journey-leak__field--impact'>
                  <dt className='journey-leak__field-label'>Impact</dt>
                  <dd className='journey-leak__field-value'>{stage.impact}</dd>
                </div>
              </dl>

              {stage.metric ? <p className='journey-leak__stage-metric'>{stage.metric}</p> : null}
            </div>
          </li>
        ))}
      </ol>

      {footnote ? <p className='journey-leak__footnote'>{footnote.text}</p> : null}
    </SectionShell>
  );
}

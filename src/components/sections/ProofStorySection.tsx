import { resolveSectionIcon, type SectionIconKey } from './icons';
import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export type ProofStoryVariant = 'before-change-after' | 'metric-story';

export interface ProofStoryColumn {
  label: string;
  title: string;
  body: string;
  iconKey?: SectionIconKey;
  /** Optional metric to feature on the column (e.g. "+34%"). */
  metric?: string;
  metricCaption?: string;
}

export interface ProofStorySectionProps {
  variant?: ProofStoryVariant;
  tone?: SectionTone;
  density?: SectionDensity;
  heading: SectionHeading;
  before: ProofStoryColumn;
  change: ProofStoryColumn;
  after: ProofStoryColumn;
  /** Optional attribution / source line displayed below the trio. */
  attribution?: string;
}

/**
 * ProofStorySection — Before → What changed → After narrative.
 *
 * Replaces prototype `ProofNarrativePanel`. Centre column ("change") is
 * intentionally stronger than the outer columns to anchor the story.
 */
export function ProofStorySection({
  variant = 'before-change-after',
  tone = 'soft',
  density = 'default',
  heading,
  before,
  change,
  after,
  attribution,
}: ProofStorySectionProps) {
  return (
    <SectionShell
      tone={tone}
      density={density}
      heading={heading}
      align='center'
      sectionClassName={`proof-story proof-story--${variant}`}
    >
      <div className='proof-story__inner rd-animate-stagger'>
        <ProofColumn column={before} kind='before' />
        <ProofColumn column={change} kind='change' />
        <ProofColumn column={after} kind='after' />
      </div>
      {attribution ? <p className='proof-story__attribution'>{attribution}</p> : null}
    </SectionShell>
  );
}

function ProofColumn({
  column,
  kind,
}: {
  column: ProofStoryColumn;
  kind: 'before' | 'change' | 'after';
}) {
  const Icon = resolveSectionIcon(column.iconKey);
  return (
    <article className={`proof-story__col proof-story__col--${kind}`}>
      <header className='proof-story__col-head'>
        {Icon ? (
          <span className='rd-icon-tile' aria-hidden='true'>
            <Icon size={20} />
          </span>
        ) : null}
        <span className='proof-story__col-label'>{column.label}</span>
      </header>
      <h3 className='proof-story__col-title'>{column.title}</h3>
      <p className='proof-story__col-body'>{column.body}</p>
      {column.metric ? (
        <p className='proof-story__metric'>
          <span className='proof-story__metric-value'>{column.metric}</span>
          {column.metricCaption ? (
            <span className='proof-story__metric-caption'>{column.metricCaption}</span>
          ) : null}
        </p>
      ) : null}
    </article>
  );
}

export type { ProofStorySectionProps as ProofStoryProps };

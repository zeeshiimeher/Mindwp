import { SectionWrapper } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-operational-shift-cards-section';

interface OperationalShiftItem {
  before: string;
  after: string;
}

export interface OperationalShiftCardsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  painPoints: OperationalShiftItem[];
  backgroundColor?: string;
  cssPrefix?: string;
  currentStateLabel?: string;
  structuredStateLabel?: string;
}

export function OperationalShiftCardsSection({
  badge,
  title,
  description,
  painPoints,
  backgroundColor = '',
  cssPrefix = '',
  currentStateLabel = 'Common starting point',
  structuredStateLabel = 'What the structured version changes',
}: OperationalShiftCardsSectionProps) {
  return (
    <SectionWrapper padding='compact' background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <div className='l-grid l-gap-6 md:l-grid-3'>
        {painPoints.map((point, index) => (
          <Card key={index} className={cn(`${BLOCK}__card`, 'card-base h-full p-6')}>
            <div className={`${BLOCK}__panels l-stack l-gap-4`}>
              <div className='l-stack l-gap-3'>
                <div className={`${BLOCK}__state ${BLOCK}__state--before`}>
                  <p className={`${BLOCK}__eyebrow ${BLOCK}__eyebrow--before`}>
                    {currentStateLabel}
                  </p>
                  <p className={`${BLOCK}__copy ${BLOCK}__copy--before`}>{point.before}</p>
                </div>

                <div className={`${BLOCK}__state ${BLOCK}__state--after`}>
                  <p className={`${BLOCK}__eyebrow ${BLOCK}__eyebrow--after`}>
                    {structuredStateLabel}
                  </p>
                  <p className={`${BLOCK}__copy ${BLOCK}__copy--after`}>{point.after}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

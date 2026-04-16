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
            <div className='l-stack l-gap-4'>
              <div className='l-stack l-gap-3'>
                <div className='rounded-2xl bg-muted/40 p-4'>
                  <p className='text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground before-label'>
                    {currentStateLabel}
                  </p>
                  <p className='mt-2 text-sm leading-6 text-foreground before-description'>{point.before}</p>
                </div>

                <div className='rounded-2xl border border-border/60 bg-background p-4'>
                  <p className='text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground after-label'>
                    {structuredStateLabel}
                  </p>
                  <p className='mt-2 text-sm leading-6 text-foreground after-description'>{point.after}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

import { SectionWrapper, SplitLayout } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-decision-fit-section';

export interface DecisionFitSectionProps {
  badge?: string;
  title: string;
  description?: string;
  strongFitTitle: string;
  strongFitItems: string[];
  notFitTitle: string;
  notFitItems: string[];
  backgroundColor?: string;
  cssPrefix?: string;
}

export function DecisionFitSection({
  badge,
  title,
  description,
  strongFitTitle,
  strongFitItems,
  notFitTitle,
  notFitItems,
  backgroundColor = '',
  cssPrefix = '',
}: DecisionFitSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <SplitLayout breakpoint='lg' ratio='50/50' gap={8}>
        <Card className={`${BLOCK}__column ${BLOCK}__column--fit`}>
          <h3 className={`${BLOCK}__title`}>{strongFitTitle}</h3>
          <ul className={`${BLOCK}__list l-stack`}>
            {strongFitItems.map((item, index) => (
              <li key={index} className={`${BLOCK}__item`}>
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card className={`${BLOCK}__column ${BLOCK}__column--not-fit`}>
          <h3 className={`${BLOCK}__title`}>{notFitTitle}</h3>
          <ul className={`${BLOCK}__list l-stack`}>
            {notFitItems.map((item, index) => (
              <li key={index} className={`${BLOCK}__item`}>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </SplitLayout>
    </SectionWrapper>
  );
}
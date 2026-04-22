import { SectionWrapper, SplitLayout } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-alternating-detail-rows-section';

export interface AlternatingDetailItem {
  title: string;
  description: string;
  points: string[];
}

export interface AlternatingDetailRowsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  items: AlternatingDetailItem[];
  backgroundColor?: string;
  cssPrefix?: string;
}

export function AlternatingDetailRowsSection({
  badge,
  title,
  description,
  items,
  backgroundColor = '',
  cssPrefix = '',
}: AlternatingDetailRowsSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <div className={`${BLOCK}__rows l-stack l-gap-8`}>
        {items.map((item, index) => (
          <SplitLayout
            key={item.title}
            breakpoint='lg'
            ratio='50/50'
            gap={8}
            reverse={index % 2 === 1}
          >
            <div className={`${BLOCK}__content`}>
              <h3 className={`${BLOCK}__title`}>{item.title}</h3>
              <p className={`${BLOCK}__description`}>{item.description}</p>
            </div>

            <Card className={`${BLOCK}__card`}>
              <ul className={`${BLOCK}__points l-stack`}>
                {item.points.map(point => (
                  <li key={point} className={`${BLOCK}__point`}>
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          </SplitLayout>
        ))}
      </div>
    </SectionWrapper>
  );
}

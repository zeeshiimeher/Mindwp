import { SectionWrapper, SplitLayout } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-comparison-evidence-band';

export interface ComparisonEvidenceItem {
  title: string;
  description: string;
}

export interface ComparisonEvidenceBandProps {
  badge?: string;
  title: string;
  description?: string;
  beforeTitle: string;
  beforeItems: string[];
  afterTitle: string;
  afterItems: string[];
  evidenceItems: ComparisonEvidenceItem[];
  backgroundColor?: string;
  cssPrefix?: string;
}

export function ComparisonEvidenceBand({
  badge,
  title,
  description,
  beforeTitle,
  beforeItems,
  afterTitle,
  afterItems,
  evidenceItems,
  backgroundColor = '',
  cssPrefix = '',
}: ComparisonEvidenceBandProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <SplitLayout breakpoint='lg' ratio='50/50' gap={8}>
        <div className={`${BLOCK}__comparison l-stack l-gap-6`}>
          <Card className={`${BLOCK}__comparison-card ${BLOCK}__comparison-card--before`}>
            <h3 className={`${BLOCK}__comparison-title`}>{beforeTitle}</h3>
            <ul className={`${BLOCK}__comparison-list l-stack`}>
              {beforeItems.map((item, index) => (
                <li key={index} className={`${BLOCK}__comparison-item`}>
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className={`${BLOCK}__comparison-card ${BLOCK}__comparison-card--after`}>
            <h3 className={`${BLOCK}__comparison-title`}>{afterTitle}</h3>
            <ul className={`${BLOCK}__comparison-list l-stack`}>
              {afterItems.map((item, index) => (
                <li key={index} className={`${BLOCK}__comparison-item`}>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className={`${BLOCK}__evidence l-stack l-gap-6`}>
          {evidenceItems.map((item, index) => (
            <Card key={`${item.title}-${index}`} className={`${BLOCK}__evidence-card`}>
              <h3 className={`${BLOCK}__evidence-title`}>{item.title}</h3>
              <p className={`${BLOCK}__evidence-description`}>{item.description}</p>
            </Card>
          ))}
        </div>
      </SplitLayout>
    </SectionWrapper>
  );
}

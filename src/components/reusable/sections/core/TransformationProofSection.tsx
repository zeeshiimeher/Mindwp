import { SectionWrapper } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-transformation-proof-section';

export interface TransformationProofSectionProps {
  badge?: string;
  title: string;
  description?: string;
  before: {
    title: string;
    points: string[];
  };
  build: {
    title: string;
    description: string;
    highlights?: string[];
  };
  after: {
    title: string;
    results: string[];
  };
  backgroundColor?: string;
  cssPrefix?: string;
}

export function TransformationProofSection({
  badge,
  title,
  description,
  before,
  build,
  after,
  backgroundColor = '',
  cssPrefix = '',
}: TransformationProofSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <div className={`${BLOCK}__grid`}>
        <div className={`${BLOCK}__before`}>
          <Card className={`${BLOCK}__card ${BLOCK}__card--before`}>
            <h3 className={`${BLOCK}__title`}>{before.title}</h3>
            <ul className={`${BLOCK}__list ${BLOCK}__list--before`}>
              {before.points.map((point, index) => (
                <li key={index} className={`${BLOCK}__item`}>
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className={`${BLOCK}__build`}>
          <Card className={`${BLOCK}__card ${BLOCK}__card--build`}>
            <h3 className={`${BLOCK}__title`}>{build.title}</h3>
            <p className={`${BLOCK}__description`}>{build.description}</p>
            {(build.highlights ?? []).length > 0 && (
              <ul className={`${BLOCK}__list ${BLOCK}__list--build`}>
                {(build.highlights ?? []).map((highlight, index) => (
                  <li key={index} className={`${BLOCK}__item`}>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>

        <div className={`${BLOCK}__after`}>
          <Card className={`${BLOCK}__card ${BLOCK}__card--after`}>
            <h3 className={`${BLOCK}__title`}>{after.title}</h3>
            <ul className={`${BLOCK}__list ${BLOCK}__list--after`}>
              {after.results.map((result, index) => (
                <li key={index} className={`${BLOCK}__item`}>
                  {result}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}

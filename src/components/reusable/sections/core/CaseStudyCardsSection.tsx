import { CaseStudyCard } from '@/components/reusable/single';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-case-study-cards-section';

export interface CaseStudyCardsSectionItem {
  slug: string;
  industry: string;
  client: string;
  location: string;
  metaDescription: string;
  publishDate?: string;
}

export interface CaseStudyCardsSectionProps {
  title?: string;
  description?: string;
  studies: CaseStudyCardsSectionItem[];
  cssPrefix?: string;
}

export function CaseStudyCardsSection({
  title = 'Related Case Studies',
  description = 'Examples of how the system supports businesses in this industry.',
  studies,
  cssPrefix = '',
}: CaseStudyCardsSectionProps) {
  if (!studies.length) return null;

  return (
    <section className={cn(BLOCK, 'l-section', cssPrefix)}>
      <div className={cn(`${BLOCK}__container`, 'l-container')}>
        <div className={`${BLOCK}__header`}>
          <h2 className={`${BLOCK}__title`}>{title}</h2>
          <p className={`${BLOCK}__description`}>{description}</p>
        </div>

        <div className={`${BLOCK}__grid`}>
          {studies.map(study => (
            <CaseStudyCard
              key={study.slug}
              variant='compact'
              slug={study.slug}
              industry={study.industry}
              title={study.client}
              location={study.location}
              description={study.metaDescription}
              publishDate={study.publishDate}
              buttonVariant='outline'
              className={`industry-case-studies-card-${study.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

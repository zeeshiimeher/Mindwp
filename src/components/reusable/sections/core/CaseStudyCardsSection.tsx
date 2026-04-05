import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
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
    <SectionWrapper id={undefined} container='none' className={cn(BLOCK, cssPrefix)}>
      <div className={cn(`${BLOCK}__container`, 'l-container')}>
        <div className={`${BLOCK}__header`}>
          <h2 className={`${BLOCK}__title`}>{title}</h2>
          <p className={`${BLOCK}__description`}>{description}</p>
        </div>

        <CardGrid columns={1} gap={8} mode='controlled' className='md:l-grid-2 lg:l-grid-3'>
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
        </CardGrid>
      </div>
    </SectionWrapper>
  );
}

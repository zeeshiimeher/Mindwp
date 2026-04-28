import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { RelatedContentSection as ProductionRelatedContentSection } from '@/components/sections';
import type { RelatedContentOutput } from '@/lib/related/buildRelatedContent';

type RelatedContentSectionProps = {
  content: RelatedContentOutput;
};

export default function RelatedContentSection({ content }: RelatedContentSectionProps) {
  if (content.groups.length === 0) {
    if (!content.emptyState) {
      throw new Error('Related content section requires groups or an explicit empty state.');
    }

    return (
      <SectionWrapper className='related-content__empty' padding='default'>
        <div className='l-container l-container--narrow l-stack'>
          <h2>{content.emptyState.title}</h2>
          <p>{content.emptyState.description}</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <>
      {content.groups.map(group => (
        <ProductionRelatedContentSection
          key={group.label}
          variant='progression'
          tone='soft'
          heading={{
            kicker: 'Related',
            title: group.label,
            ...(group.description ? { description: group.description } : {}),
          }}
          items={group.items.map((item, index) => ({
            id: `${group.label}-${index}`,
            title: item.title,
            href: item.href,
            ...(item.description ? { summary: item.description } : {}),
          }))}
        />
      ))}
    </>
  );
}

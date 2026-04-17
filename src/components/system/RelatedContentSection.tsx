import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import type { RelatedContentOutput } from '@/lib/related/buildRelatedContent';

type RelatedContentSectionProps = {
  content: RelatedContentOutput;
};

export default function RelatedContentSection({ content }: RelatedContentSectionProps) {
  if (content.groups.length === 0) {
    if (!content.emptyState) {
      return null;
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
        <RelatedCardsSection
          key={group.label}
          title={group.label}
          {...(group.description ? { description: group.description } : {})}
          items={group.items.map(item => ({
            title: item.title,
            desc: item.description ?? '',
            href: item.href,
          }))}
          showArrows
        />
      ))}
    </>
  );
}

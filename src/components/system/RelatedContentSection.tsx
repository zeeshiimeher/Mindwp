import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import { RelatedSectionCTA } from '@/components/reusable/single/RelatedSectionCTA';

export type RelatedContentBlock = {
  title: string;
  description?: string;
  items: Array<{
    title: string;
    desc: string;
    href: string;
  }>;
};

type RelatedContentSectionProps = {
  blocks: RelatedContentBlock[];
  showCTA?: boolean;
};

export default function RelatedContentSection({
  blocks,
  showCTA = false,
}: RelatedContentSectionProps) {
  if (blocks.length === 0) return null;

  return (
    <>
      {blocks.map(block => (
        <RelatedCardsSection
          key={block.title}
          title={block.title}
          {...(block.description ? { description: block.description } : {})}
          items={block.items}
          showArrows
        />
      ))}
      {showCTA ? <RelatedSectionCTA /> : null}
    </>
  );
}

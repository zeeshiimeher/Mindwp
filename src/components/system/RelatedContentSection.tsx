/**
 * RELATED CONTENT SECTION
 *
 * Purpose:
 * Renders related content blocks from precomputed authority data.
 * Max 3 items per block (architecture-locked limit).
 *
 * Note: SmartRelatedSection is the graph-aware replacement.
 * This component handles pre-structured block data only.
 */

import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import type { AuthorityMapItem } from '@/lib/authority/generated/authorityMap';

export type RelatedContentBlock = {
  title: string;
  items: AuthorityMapItem[];
};

type RelatedContentSectionProps = {
  blocks: RelatedContentBlock[];
};

const PER_BLOCK_MAX_RELATED = 3;

export default function RelatedContentSection({ blocks }: RelatedContentSectionProps) {
  const visibleBlocks = blocks
    .map(block => ({
      title: block.title,
      items: block.items.slice(0, PER_BLOCK_MAX_RELATED),
    }))
    .filter(block => block.items.length > 0);

  if (visibleBlocks.length === 0) return null;

  return (
    <>
      {visibleBlocks.map(block => (
        <RelatedCardsSection
          key={block.title}
          title={block.title}
          items={block.items.map(item => ({
            title: item.title,
            desc: 'Explore this related page',
            href: item.path,
          }))}
          showArrows
        />
      ))}
    </>
  );
}

/**
 * SmartRelatedSection
 *
 * Graph-powered related content with contextual titles.
 * Replaces hardcoded "Related Posts" with titles driven by page type + slot.
 *
 * Data flow: slug + type → getRelatedContent() → RELATED_SECTION_LABELS → RelatedCardsSection
 */

import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import { RelatedSectionCTA } from '@/components/reusable/single/RelatedSectionCTA';
import { SECTION_BEHAVIOR } from '@/config/section-intelligence';
import { RELATED_SECTION_LABELS } from '@/config/ui-intelligence';
import type { AuthorityMapItem } from '@/lib/authority/generated/authorityMap';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { getRelatedContent, type RelatedContent } from '@/lib/graph/query';

// ── Types ────────────────────────────────────────────────────────────

type SlotKey = keyof RelatedContent;

interface SmartRelatedSectionProps {
  slug: string;
  type: ContentNodeType;
  /** Override which slots to render (default: all non-empty) */
  slots?: SlotKey[];
  /** Show the recommendation CTA at the bottom */
  showCTA?: boolean;
  /** Section type — controls behavior via section-intelligence rules */
  sectionType?: string;
}

// ── Component ────────────────────────────────────────────────────────

export function SmartRelatedSection({
  slug,
  type,
  slots: slotOverride,
  showCTA = true,
  sectionType,
}: SmartRelatedSectionProps) {
  // If section behavior says no links, skip rendering
  const behavior = sectionType ? SECTION_BEHAVIOR[sectionType] : undefined;
  if (behavior && !behavior.allowLinks) return null;

  const related = getRelatedContent(slug, type);
  const labels = RELATED_SECTION_LABELS[type] ?? {};

  // Determine which slots to render
  const slotKeys: SlotKey[] = slotOverride ?? (Object.keys(labels) as SlotKey[]);

  const blocks: Array<{
    key: SlotKey;
    title: string;
    description: string;
    items: AuthorityMapItem[];
  }> = [];

  for (const key of slotKeys) {
    const items = related[key];
    if (!items || items.length === 0) continue;

    const label = labels[key];
    if (!label) continue;

    blocks.push({
      key,
      title: label.title,
      description: label.description,
      items,
    });
  }

  if (blocks.length === 0) return null;

  // Decision 4: max 2 sections per page
  const renderedBlocks = blocks.slice(0, 2);

  return (
    <>
      {renderedBlocks.map(block => (
        <RelatedCardsSection
          key={block.key}
          title={block.title}
          description={block.description}
          items={block.items.map(item => ({
            title: item.title,
            desc: item.description,
            href: item.path,
          }))}
          showArrows
        />
      ))}
      {showCTA && behavior?.allowCTA !== false && <RelatedSectionCTA />}
    </>
  );
}

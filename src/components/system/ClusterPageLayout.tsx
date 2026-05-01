/**
 * ClusterPageLayout
 *
 * Pure renderer for cluster pages.
 *
 * Rules:
 * - Receives fully prepared data
 * - Renders only
 */

import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
// ── Types ────────────────────────────────────────────────────────────

export interface ClusterPageSectionItem {
  title: string;
  description: string;
  href: string;
}

export interface ClusterPageSection {
  id: string;
  title: string;
  description: string;
  items: ClusterPageSectionItem[];
}

interface ClusterPageLayoutProps {
  title: string;
  description: string;
  itemCount: number;
  sections: ClusterPageSection[];
}

// ── Component ────────────────────────────────────────────────────────

export function ClusterPageLayout({
  title,
  description,
  itemCount,
  sections,
}: ClusterPageLayoutProps) {
  if (title.trim().length === 0 || description.trim().length === 0 || sections.length === 0) {
    throw new Error('[ClusterPageLayout] Invalid data');
  }

  return (
    <div className='cluster-page'>
      <header className='cluster-page__header l-container'>
        <h1 className='cluster-page__title'>{title}</h1>
        <p className='cluster-page__description'>{description}</p>
        <p className='cluster-page__count'>
          {itemCount} piece{itemCount !== 1 ? 's' : ''} of content
        </p>
      </header>

      {sections.map(section => {
        if (section.items.length === 0) {
          throw new Error('[ClusterPageLayout] Invalid data');
        }

        return (
          <RelatedCardsSection
            key={section.id}
            title={section.title}
            description={section.description}
            items={section.items.map(item => ({
              title: item.title,
              desc: item.description,
              href: item.href,
            }))}
            showArrows
          />
        );
      })}
    </div>
  );
}

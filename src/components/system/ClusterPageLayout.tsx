/**
 * ClusterPageLayout
 *
 * Pure renderer for cluster pages.
 *
 * Rules:
 * - Receives fully prepared data
 * - Renders only
 */

import { SectionShell } from '@/components/layout/SectionShell';
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
          <SectionShell
            key={section.id}
            id={section.id}
            heading={{
              title: section.title,
              description: section.description,
            }}
            tone='white'
          >
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
              {section.items.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className='mw-surface-card p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--mw-shadow-md)]'
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </a>
              ))}
            </div>
          </SectionShell>
        );
      })}
    </div>
  );
}

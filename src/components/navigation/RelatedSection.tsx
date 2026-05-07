import { ArrowRight } from 'lucide-react';

import type { ContentNodeType } from '@/lib/graph/query';
import type { PageType } from '@/lib/page/pageIdentity';
import { buildRelatedContent } from '@/lib/related/buildRelatedContent';

export type RelatedSectionVariant = 'standard' | 'rail' | 'compact';

export type RelatedSectionItem = {
  title: string;
  href: string;
  description?: string;
  label?: string;
};

export type RelatedSectionProps = {
  pageId: string;
  pageType: PageType;
  slug?: string;
  nodeType?: ContentNodeType;
  variant?: RelatedSectionVariant;
};

function inferItemLabel(href: string): string {
  if (href.startsWith('/services/')) return 'Connected system';
  if (href.startsWith('/resources/')) return 'Resource';
  if (href.startsWith('/industries/')) return 'Industry';
  if (href.startsWith('/blog/')) return 'Article';
  return 'Related';
}

/**
 * RelatedSection — global related-content section.
 *
 * Server component. Resolves items from the content graph via buildRelatedContent.
 * Injected globally by domain config wrappers (services/config.tsx, features/config.tsx).
 * Page renderers must NOT render their own related sections.
 *
 * CSS: src/styles/components.css (.mw-related-section*)
 */
export function RelatedSection({
  pageId,
  pageType,
  slug,
  nodeType,
  variant = 'standard',
}: RelatedSectionProps) {
  const content = buildRelatedContent({ pageId, pageType, slug, nodeType });

  if (content.groups.length === 0) {
    throw new Error('[RelatedSection] No related content available.');
  }

  const firstGroup = content.groups[0];

  if (!firstGroup) {
    throw new Error('[RelatedSection] Invalid data');
  }

  const { label, description, items } = firstGroup;

  return (
    <section
      className={`mw-related-section mw-related-section--${variant}`}
      aria-label='Related content'
    >
      <div className='mw-container'>
        <div className='mw-related-section__inner'>
          <header className='mw-related-section__header'>
            <h2 className='mw-related-section__title'>{label}</h2>
            <p className='mw-related-section__description'>{description}</p>
          </header>
          <div className='mw-related-section__rail mw-animate-up'>
            {items.map(item => (
              <a key={item.href} href={item.href} className='mw-related-section__item'>
                <div className='mw-related-section__item-bar'>
                  <span className='mw-related-section__label'>{inferItemLabel(item.href)}</span>
                  <span className='mw-related-section__dot' aria-hidden='true' />
                </div>
                <div className='mw-related-section__item-title'>{item.title}</div>
                <div className='mw-related-section__connect-label'>Connection</div>
                <div className='mw-related-section__reason'>{item.description}</div>
                <span className='mw-related-section__cta'>
                  View system
                  <ArrowRight size={14} aria-hidden='true' />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

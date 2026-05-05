import { ArrowRight } from 'lucide-react';

import { resolveSectionIcon, type SectionIconKey } from './icons';
import { SectionShell } from './SectionShell';
import type { SectionDensity, SectionHeading, SectionTone } from './types';

export type RelatedContentVariant = 'progression';

export interface RelatedContentItem {
  /** Stable id for keys. */
  id: string;
  /** Step / phase label (e.g. "Next step", "Foundation"). */
  step?: string;
  iconKey?: SectionIconKey;
  title: string;
  summary?: string;
  href: string;
  description: string;
  cta: string;
}

export interface RelatedContentSectionProps {
  variant?: RelatedContentVariant;
  tone?: SectionTone;
  density?: SectionDensity;
  heading: SectionHeading;
  /** Already-resolved candidates from the graph. UI does NOT fetch. */
  items: readonly RelatedContentItem[];
}

/**
 * RelatedContentSection — guided next-step links from the graph.
 *
 * Candidates remain graph-owned. This component is presentation-only:
 * callers (renderers / page wrappers) are responsible for resolving
 * related candidates and passing them in. Do NOT hardcode lists here.
 */
export function RelatedContentSection({
  variant = 'progression',
  tone = 'light',
  density = 'compact',
  heading,
  items,
}: RelatedContentSectionProps) {
  if (items.length === 0) {
    // RelatedContentSection requires groups or an explicit empty state to be handled by caller.
    throw new Error('[RelatedContentSection] Invalid data: items array is empty.');
  }

  for (const item of items) {
    if (
      item.id.trim().length === 0 ||
      item.title.trim().length === 0 ||
      item.description.trim().length === 0 ||
      item.cta.trim().length === 0 ||
      item.href.trim().length === 0
    ) {
      throw new Error('[RelatedContentSection] Invalid data');
    }
  }

  return (
    <SectionShell
      tone={tone}
      density={density}
      heading={heading}
      sectionClassName={`related-content related-content--${variant}`}
    >
      <ol className='related-content__list rd-animate-stagger'>
        {items.map((item, index) => {
          const Icon = resolveSectionIcon(item.iconKey);
          return (
            <li key={item.id} className='related-content__item'>
              <a href={item.href} className='related-content__card rd-card'>
                <div className='related-content__head'>
                  <span className='related-content__index'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.step ? <span className='related-content__step'>{item.step}</span> : null}
                </div>
                <div className='related-content__body'>
                  {Icon ? (
                    <span className='rd-icon-tile rd-icon-tile--sm' aria-hidden='true'>
                      <Icon size={14} />
                    </span>
                  ) : null}
                  <h3 className='related-content__title'>{item.title}</h3>
                  {item.summary ? <p className='related-content__summary'>{item.summary}</p> : null}
                </div>
                <span className='related-content__cta'>
                  <span>{item.cta}</span>
                  <ArrowRight size={14} aria-hidden='true' />
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </SectionShell>
  );
}

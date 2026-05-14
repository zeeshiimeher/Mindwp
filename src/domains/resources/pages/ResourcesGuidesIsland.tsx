'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type ResourceListItem = {
  title: string;
  url: string;
  categoryLabel: string;
  excerpt: string;
  freshnessBadge?: string;
  dateLabel: string;
  dateText: string;
};

type ResourcesGuidesIslandProps = {
  resources: ResourceListItem[];
  initialVisibleCount: number;
  readGuideLabel: string;
  loadMoreLabel: string;
};

export function ResourcesGuidesIsland({
  resources,
  initialVisibleCount,
  readGuideLabel,
  loadMoreLabel,
}: ResourcesGuidesIslandProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const visibleResources = resources.slice(0, visibleCount);
  const hasMoreResources = visibleCount < resources.length;

  return (
    <>
      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {visibleResources.map(resource => (
          <article
            key={resource.url}
            className='flex h-full flex-col rounded-[var(--mw-radius-xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-sm)]'
          >
            <p className='mw-text-eyebrow mw-text-signal-cyan'>{resource.categoryLabel}</p>
            <h3>{resource.title}</h3>
            <p>{resource.excerpt}</p>

            <div className='mt-auto pt-5'>
              <a className='mw-btn mw-btn--secondary' href={resource.url}>
                <span>{readGuideLabel}</span>
                <ArrowRight size={14} aria-hidden='true' />
              </a>
            </div>
          </article>
        ))}
      </div>

      {hasMoreResources && (
        <div className='mt-8 flex justify-center'>
          <button
            type='button'
            className='mw-btn mw-btn--secondary'
            onClick={() =>
              setVisibleCount(current => Math.min(current + initialVisibleCount, resources.length))
            }
          >
            {loadMoreLabel}
          </button>
        </div>
      )}
    </>
  );
}

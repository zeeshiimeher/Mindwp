import { ArrowRight } from 'lucide-react';

import { SectionShell } from '@/components/layout/SectionShell';
import type { ResourceCategory } from '@/domains/resources/types';

export type ResourceCategoryTemplateProps = {
  category: ResourceCategory;
  label: string;
  description?: string;
  count: number;
  resources: Array<{
    title: string;
    url: string;
    categoryLabel: string;
    excerpt: string;
    freshnessBadge?: string;
    dateLabel: string;
    dateText: string;
  }>;
};

export default function ResourceCategoryTemplate({
  label,
  description,
  count,
  resources,
}: ResourceCategoryTemplateProps) {
  return (
    <main>
      <SectionShell
        ariaLabel={`${label} resources`}
        tone='mist'
        heading={{
          eyebrow: `${count} guides`,
          title: label,
          description,
        }}
      >
        {resources.length === 0 ? (
          <p>No guides published yet.</p>
        ) : (
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {resources.map(resource => (
              <article key={resource.url} className='flex h-full flex-col mw-surface-card p-6'>
                <div className='mb-4 flex flex-wrap items-center gap-2'>
                  <p className='mw-text-eyebrow mw-text-signal-cyan'>{resource.categoryLabel}</p>
                  {resource.freshnessBadge ? (
                    <span className='rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'>
                      {resource.freshnessBadge}
                    </span>
                  ) : null}
                </div>

                <p className='mw-text-body-sm mw-text-secondary'>
                  {resource.dateLabel}: {resource.dateText}
                </p>
                <h3>{resource.title}</h3>
                <p>{resource.excerpt}</p>

                <div className='mt-auto pt-5'>
                  <a className='mw-btn mw-btn--secondary' href={resource.url}>
                    <span>Read Guide</span>
                    <ArrowRight size={14} aria-hidden='true' />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </SectionShell>
    </main>
  );
}

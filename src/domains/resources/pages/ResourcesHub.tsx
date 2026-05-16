import { ArrowRight } from 'lucide-react';

import { SectionFrame } from '@/components/layout/SectionFrame';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { RESOURCE_HUB_DATA } from '@/domains/resources/api';
import { buildContactHref } from '@/lib/contact/contactHref';

import { ResourcesGuidesIsland } from './ResourcesGuidesIsland';

type ResourceCategoryItem = {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: 'true' | boolean }>;
  count: number;
  href: string;
};

type ResourceItem = {
  title: string;
  url: string;
  categoryLabel: string;
  excerpt: string;
  freshnessBadge?: string;
  dateLabel: string;
  dateText: string;
};

const TOPIC_CARD_CTA_LABEL = 'See the problem cluster';
const GUIDE_CARD_CTA_LABEL = 'Open the system guide';

export function ResourcesHub({
  categoryItems,
  resourceItems,
}: {
  categoryItems: ResourceCategoryItem[];
  resourceItems: ResourceItem[];
}) {
  const hubData = RESOURCE_HUB_DATA;

  return (
    <CTARegistryProvider
      pageId='page:resources'
      pageType='page'
      primarySystem='smart-website-systems'
    >
      <main>
        <SectionFrame
          ariaLabel='Resources hub hero'
          tone='mist'
          heading={{
            eyebrow: hubData.hero.eyebrow,
            title: hubData.hero.title,
            description: hubData.hero.description,
          }}
        >
          <div className='flex flex-wrap gap-3'>
            <a className='mw-btn mw-btn--primary' href='#guides'>
              Browse guides
            </a>
            <a className='mw-btn mw-btn--secondary' href='/services/smart-website-systems'>
              View service systems
            </a>
          </div>
        </SectionFrame>

        <SectionFrame
          ariaLabel='Resource topic categories'
          tone='white'
          heading={{
            eyebrow: 'Topics',
            title: hubData.topics.title,
            description: hubData.topics.description,
          }}
        >
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {categoryItems.map(category => {
              const IconComponent = category.icon;

              return (
                <a
                  key={category.id}
                  href={category.href}
                  className='group flex h-full flex-col mw-surface-card p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--mw-shadow-md)]'
                >
                  <div className='mb-5 flex items-center justify-between gap-4'>
                    <span className='grid size-10 place-items-center rounded-full border border-[var(--mw-border-light)] bg-[var(--mw-bg-mist)] text-[var(--mw-signal-cyan)]'>
                      <IconComponent className='size-5' aria-hidden='true' />
                    </span>
                    <span className='rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'>
                      {category.count} {hubData.topics.countSuffix}
                    </span>
                  </div>

                  <h3>{category.name}</h3>
                  <p>{category.description}</p>

                  <span className='mt-auto inline-flex items-center gap-2 pt-5 mw-text-body-sm mw-text-signal-cyan'>
                    {TOPIC_CARD_CTA_LABEL}
                    <ArrowRight size={14} aria-hidden='true' />
                  </span>
                </a>
              );
            })}
          </div>
        </SectionFrame>

        <SectionFrame
          id='guides'
          ariaLabel='Featured resource guides'
          tone='mist'
          heading={{
            eyebrow: hubData.guides.eyebrow,
            title: hubData.guides.title,
            description: hubData.guides.description,
          }}
        >
          <ResourcesGuidesIsland
            resources={resourceItems}
            initialVisibleCount={hubData.guides.initialVisibleCount}
            readGuideLabel={GUIDE_CARD_CTA_LABEL}
            loadMoreLabel={hubData.guides.loadMoreLabel}
          />

          <p className='mt-8 mw-text-secondary'>{hubData.guides.comingSoonText}</p>
        </SectionFrame>

        <SectionFrame
          ariaLabel='Resources next step'
          tone='white'
          heading={{
            eyebrow: hubData.cta.heading.eyebrow ?? 'Next step',
            title: hubData.cta.heading.title,
            description: hubData.cta.heading.description,
          }}
        >
          <div className='grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center'>
            <p>
              If one of these guides names the bottleneck clearly, the next step is to map it to the
              service system that removes the manual handoff behind it.
            </p>
            <a
              className='mw-btn mw-btn--primary'
              href={buildContactHref({
                system: 'resource',
                sourceType: 'resource',
                slug: 'resource-help',
              })}
            >
              <span>Start a Conversation</span>
              <ArrowRight size={14} aria-hidden='true' />
            </a>
          </div>
        </SectionFrame>
      </main>
    </CTARegistryProvider>
  );
}

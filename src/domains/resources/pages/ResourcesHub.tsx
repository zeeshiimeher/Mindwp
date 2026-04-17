import { type AnchorHTMLAttributes, type ReactNode } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Badge } from '@/components/reusable/single/Badge';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { SmartCTA } from '@/components/system/SmartCTA';
import { Card } from '@/components/ui/card';
import { RESOURCE_HUB_DATA } from '@/domains/resources/api';

import { ResourcesGuidesIsland } from './ResourcesGuidesIsland';

type InternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  children: ReactNode;
};

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

const TOPIC_CARD_CTA_LABEL = 'View Resources';
const GUIDE_CARD_CTA_LABEL = 'Read Guide';

function InternalLink({ href, children, ...props }: InternalLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

export function ResourcesHub({
  categoryItems,
  resourceItems,
}: {
  categoryItems: ResourceCategoryItem[];
  resourceItems: ResourceItem[];
}) {
  const hubData = RESOURCE_HUB_DATA;

  return (
    <CTARegistryProvider pageId='page:resources' pageType='page'>
      <div className='resources-hub'>
        <main>
        {/* Hero Section */}
        <SectionWrapper className='resources-hub__hero' background='bg-gradient-surface-muted'>
          <div className='resources-hub__hero-content'>
            <div className='resources-hub__hero-badge'>
              <Badge variant='secondary' context='hero'>
                <BookOpen className='badge__icon' />
                {hubData.hero.badge}
              </Badge>
            </div>

            <h1 className='resources-hub__title'>{hubData.hero.title}</h1>

            <p className='resources-hub__subtitle'>{hubData.hero.description}</p>

            <div className='resources-hub__hero-actions'>
              <SmartCTA
                system='smart-website-systems'
                pageType='page'
                slug='resources'
                intent='entry'
                position='hero'
                mode='actions-only'
                primaryActionVariant='secondary'
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Categories */}
        <SectionWrapper className='resources-hub__topics'>
          <div className='resources-hub__section-header'>
            <h2 className='resources-hub__section-title'>{hubData.topics.title}</h2>
            <p className='resources-hub__section-subtitle'>{hubData.topics.description}</p>
          </div>

          <div className='resources-hub__topics-grid'>
            {categoryItems.map(category => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className='resources-hub__topic-card'>
                  <InternalLink
                    href={category.href}
                    className='link-primary resources-hub__topic-link'
                  >
                    <div className='resources-hub__topic-top'>
                      <div className='l-row l-items-center l-gap-3'>
                        <div className='resources-hub__topic-icon-wrap'>
                          <IconComponent className='resources-hub__topic-icon' aria-hidden='true' />
                          <Badge variant='outline' size='sm' context='meta'>
                            {category.count} {hubData.topics.countSuffix}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className='l-stack l-gap-2'>
                      <h3 className='resources-hub__topic-title'>{category.name}</h3>
                      <p className='resources-hub__topic-desc'>{category.description}</p>
                    </div>
                    <div className='resources-hub__topic-cta'>
                      {TOPIC_CARD_CTA_LABEL}
                      <ArrowRight className='resources-hub__topic-arrow' aria-hidden='true' />
                    </div>
                  </InternalLink>
                </Card>
              );
            })}
          </div>
        </SectionWrapper>

        {/* Featured Resources */}
        <SectionWrapper id='guides' className='resources-hub__guides'>
          <div className='resources-hub__section-header'>
            <div className='resources-hub__section-badge'>
              <Badge variant='secondary' context='section'>
                {hubData.guides.badge}
              </Badge>
            </div>
            <h2 className='resources-hub__section-title'>{hubData.guides.title}</h2>
            <p className='resources-hub__section-subtitle'>{hubData.guides.description}</p>
          </div>

          <ResourcesGuidesIsland
            resources={resourceItems}
            initialVisibleCount={hubData.guides.initialVisibleCount}
            readGuideLabel={GUIDE_CARD_CTA_LABEL}
            loadMoreLabel={hubData.guides.loadMoreLabel}
          />

          {/* Coming Soon Cards */}
          <div className='resources-hub__coming-soon'>
            <p className='resources-hub__coming-soon-text'>{hubData.guides.comingSoonText}</p>
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SmartCTA
          system='smart-website-systems'
          pageType='page'
          slug='resources'
          intent='conversion'
          position='footer'
          title={hubData.cta.title}
          description={hubData.cta.description}
          primaryActionVariant='white'
          cssPrefix='footer-cta'
          backgroundColor='bg-gradient-primary'
        />
        </main>
      </div>
    </CTARegistryProvider>
  );
}

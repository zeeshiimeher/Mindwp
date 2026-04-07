import { type AnchorHTMLAttributes, type ReactNode } from 'react';
import { ArrowRight, BookOpen, MessageSquare } from 'lucide-react';

import { CTASection } from '@/components/reusable/single';
import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/ui/card';
import { categories, RESOURCE_HUB_DATA, resources } from '@/domains/resources/api';
import { formatIsoDate, isRecentIsoDate } from '@/domains/resources/utils/dates';
import { buildContactHref } from '@/lib/contact/contactHref';

import { ResourcesGuidesIsland } from './ResourcesGuidesIsland';

type InternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  children: ReactNode;
};

function InternalLink({ href, children, ...props }: InternalLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

export function ResourcesHub() {
  const hubData = RESOURCE_HUB_DATA;
  const resourcesHubContactHref = (href: string) =>
    buildContactHref(href, {
      system: 'smart-website-systems',
      source: 'page/resources',
    });

  const categoryItems = categories.map(category => {
    const count = resources.filter(resource => resource.category === category.id).length;

    return {
      id: category.slug,
      name: category.label,
      description: category.description,
      icon: category.iconComponent,
      count,
      href: `/resources/category/${category.slug}`,
    };
  });

  const resourceItems = resources
    .slice()
    .sort((a, b) => {
      const aDate = Date.parse(`${a.updatedAt ?? a.publishedAt}T00:00:00Z`);
      const bDate = Date.parse(`${b.updatedAt ?? b.publishedAt}T00:00:00Z`);
      return bDate - aDate;
    })
    .map(resource => {
      const categoryLabel =
        categories.find(c => c.id === resource.category)?.label ?? String(resource.category);

      const lastChanged = resource.updatedAt ?? resource.publishedAt;
      const isUpdated = Boolean(resource.updatedAt);
      const freshnessBadge = isRecentIsoDate(lastChanged, 60)
        ? isUpdated
          ? 'Updated'
          : 'New'
        : undefined;
      const dateLabel = isUpdated ? 'Updated' : 'Published';

      return {
        title: resource.title,
        url: resource.seo.canonical,
        categoryLabel,
        excerpt: resource.description,
        freshnessBadge,
        dateLabel,
        dateText: formatIsoDate(lastChanged),
      };
    });

  return (
    <div className='resources-hub'>
      <main>
        {/* Hero Section */}
        <section className='resources-hub__hero l-section bg-gradient-surface-muted'>
          <div className='l-container resources-hub__hero-content'>
            <div className='resources-hub__hero-badge'>
              <Badge variant='secondary' context='hero'>
                <BookOpen className='badge__icon' />
                {hubData.hero.badge}
              </Badge>
            </div>

            <h1 className='resources-hub__title'>{hubData.hero.title}</h1>

            <p className='resources-hub__subtitle'>{hubData.hero.description}</p>

            <div className='resources-hub__hero-actions'>
              <Button
                href={resourcesHubContactHref(hubData.hero.primaryAction.href)}
                variant='secondary'
                label={hubData.hero.primaryAction.label}
                icon={ArrowRight}
                showDefaultIcon
              />
              <Button
                href={hubData.hero.secondaryAction.href}
                variant='outline'
                label={hubData.hero.secondaryAction.label}
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className='resources-hub__topics l-section'>
          <div className='l-container'>
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
                      <IconComponent className='resources-hub__topic-icon' aria-hidden='true' />
                      <div className='resources-hub__topic-top'>
                        <h3 className='resources-hub__topic-title'>{category.name}</h3>
                        <Badge variant='outline' size='sm' context='meta'>
                          {category.count} {hubData.topics.countSuffix}
                        </Badge>
                      </div>
                      <p className='resources-hub__topic-desc'>{category.description}</p>
                      <div className='resources-hub__topic-cta'>
                        {hubData.topics.cardCtaLabel}
                        <ArrowRight className='resources-hub__topic-arrow' aria-hidden='true' />
                      </div>
                    </InternalLink>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section id='guides' className='resources-hub__guides l-section'>
          <div className='l-container'>
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
              readGuideLabel={hubData.guides.cardCtaLabel}
              loadMoreLabel={hubData.guides.loadMoreLabel}
            />

            {/* Coming Soon Cards */}
            <div className='resources-hub__coming-soon'>
              <p className='resources-hub__coming-soon-text'>{hubData.guides.comingSoonText}</p>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className='resources-hub__faq l-section'>
          <div className='l-container'>
            <Card className='resources-hub__faq-card'>
              <MessageSquare className='resources-hub__faq-icon' aria-hidden='true' />
              <h2 className='resources-hub__faq-title'>{hubData.faqPreview.title}</h2>
              <p className='resources-hub__faq-text'>{hubData.faqPreview.description}</p>
              <Button
                href={hubData.faqPreview.action.href}
                variant='outline'
                label={hubData.faqPreview.action.label}
                icon={ArrowRight}
                showDefaultIcon
              />
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title={hubData.cta.title}
          description={hubData.cta.description}
          primaryAction={{
            variant: 'white',
            label: hubData.cta.primaryAction.label,
            href: resourcesHubContactHref(hubData.cta.primaryAction.href),
          }}
          cssPrefix='footer-cta'
          backgroundColor='bg-gradient-primary'
        />
        <div className='resources-hub__cta-actions'>
          <Button
            href={hubData.cta.secondaryAction.href}
            variant='outline-light'
            label={hubData.cta.secondaryAction.label}
          />
        </div>
      </main>
    </div>
  );
}

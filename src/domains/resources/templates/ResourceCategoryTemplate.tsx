import { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/ui/card';
import { categories, getCategoryColors, resources } from '@/domains/resources/api';
import type { ResourceCategory } from '@/domains/resources/types';
import { formatIsoDate, isRecentIsoDate } from '@/domains/resources/utils/dates';

export type ResourceCategoryTemplateProps = {
  category: ResourceCategory;
};

export default function ResourceCategoryTemplate({ category }: ResourceCategoryTemplateProps) {
  const categoryMeta = categories.find(c => c.id === category);

  const label = categoryMeta?.label;
  const description = categoryMeta?.description;
  const colors = getCategoryColors(category);

  const resourcesInCategory = useMemo(() => {
    return resources.filter(resource => resource.category === category);
  }, [category]);

  const viewResources = useMemo(() => {
    if (!categoryMeta) return [];
    return resourcesInCategory
      .slice()
      .sort((a, b) => {
        const aDate = Date.parse(`${a.updatedAt ?? a.publishedAt}T00:00:00Z`);
        const bDate = Date.parse(`${b.updatedAt ?? b.publishedAt}T00:00:00Z`);
        return bDate - aDate;
      })
      .map(resource => {
        const lastChanged = resource.updatedAt ?? resource.publishedAt;
        const isUpdated = Boolean(resource.updatedAt);
        const freshnessBadge = isRecentIsoDate(lastChanged, 60)
          ? isUpdated
            ? 'Updated'
            : 'New'
          : undefined;

        return {
          title: resource.title,
          url: resource.seo.canonical,
          categoryLabel: categoryMeta.label,
          excerpt: resource.description,
          freshnessBadge,
          dateLabel: isUpdated ? 'Updated' : 'Published',
          dateText: formatIsoDate(lastChanged),
        };
      });
  }, [resourcesInCategory, categoryMeta]);

  const count = resourcesInCategory.length;

  if (!categoryMeta) {
    if (process.env.NODE_ENV === 'development') {
      throw new Error('Invalid ResourceCategory passed to ResourceCategoryTemplate');
    }
    return null;
  }

  return (
    <div className='resource-category'>
      <main>
        {/* HERO */}
        <section className='resource-category__hero l-section'>
          <div className='l-container resource-category__hero-content'>
            <Badge context='hero' cssPrefix={colors.badgeClass}>
              {count} guides
            </Badge>

            <h1>{label}</h1>

            <p className='resource-category__description'>{description}</p>
          </div>
        </section>

        {/* GRID */}
        <section className='resource-category__grid-section l-section'>
          <div className='l-container'>
            {viewResources.length === 0 ? (
              <p className='resource-category__empty'>No guides published yet.</p>
            ) : (
              <div className='resource-category__grid'>
                {viewResources.map(resource => (
                  <Card key={resource.url} className='resource-card resource-card--interactive'>
                    <div className='resource-card__body'>
                      <div className='resource-card__meta'>
                        <div className='resource-card__badges'>
                          <Badge size='sm' context='meta' cssPrefix={colors.badgeClass}>
                            {resource.categoryLabel}
                          </Badge>
                          {resource.freshnessBadge && (
                            <Badge variant='secondary' size='sm' context='meta'>
                              {resource.freshnessBadge}
                            </Badge>
                          )}
                        </div>
                        <span className='resource-card__date'>
                          {resource.dateLabel}: {resource.dateText}
                        </span>
                      </div>

                      <h3 className='resource-card__title'>{resource.title}</h3>
                      <p className='resource-card__excerpt'>{resource.excerpt}</p>

                      <Button
                        href={resource.url}
                        variant='outline'
                        label='Read Guide'
                        icon={ArrowRight}
                        showDefaultIcon
                        cssPrefix='btn-block'
                      />
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

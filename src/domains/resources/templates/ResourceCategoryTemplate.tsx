import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/ui/card';
import type { ResourceCategory } from '@/domains/resources/types';

export type ResourceCategoryTemplateProps = {
  category: ResourceCategory;
  label: string;
  description?: string;
  badgeClassName: string;
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
  badgeClassName,
  count,
  resources,
}: ResourceCategoryTemplateProps) {

  return (
    <div className='resource-category'>
      <main>
        {/* HERO */}
        <section className='resource-category__hero l-section'>
          <div className='l-container resource-category__hero-content'>
            <Badge context='hero' cssPrefix={badgeClassName}>
              {count} guides
            </Badge>

            <h1>{label}</h1>

            <p className='resource-category__description'>{description}</p>
          </div>
        </section>

        {/* GRID */}
        <section className='resource-category__grid-section l-section'>
          <div className='l-container'>
            {resources.length === 0 ? (
              <p className='resource-category__empty'>No guides published yet.</p>
            ) : (
              <div className='resource-category__grid'>
                {resources.map(resource => (
                  <Card key={resource.url} className='resource-card resource-card--interactive'>
                    <div className='resource-card__body'>
                      <div className='resource-card__meta'>
                        <div className='resource-card__badges'>
                          <Badge size='sm' context='meta' cssPrefix={badgeClassName}>
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

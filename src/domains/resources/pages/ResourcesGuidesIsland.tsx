'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/ui/card';

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
      <div className='resources-hub__guides-grid'>
        {visibleResources.map(resource => (
          <Card key={resource.url} className='resource-card resource-card--interactive'>
            <div className='resource-card__body'>
              <div className='resource-card__meta'>
                <Badge variant='outline' size='sm' context='meta'>
                  {resource.categoryLabel}
                </Badge>
              </div>

              <h3 className='resource-card__title'>{resource.title}</h3>
              <p className='resource-card__excerpt'>{resource.excerpt}</p>

              <Button
                href={resource.url}
                variant='outline'
                label={readGuideLabel}
                icon={ArrowRight}
                showDefaultIcon
                cssPrefix='btn-block'
              />
            </div>
          </Card>
        ))}
      </div>

      {hasMoreResources && (
        <div className='resources-hub__load-more'>
          <Button
            variant='outline'
            label={loadMoreLabel}
            cssPrefix='btn-block'
            onClick={() =>
              setVisibleCount(current => Math.min(current + initialVisibleCount, resources.length))
            }
          />
        </div>
      )}
    </>
  );
}

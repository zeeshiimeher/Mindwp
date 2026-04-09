/* Automated resource-category page.
  Handles all category slugs from registry metadata; no per-category components. */

import { getCategoryBySlug, getCategoryColors, resources } from '@/domains/resources/api';
import { ResourceNotFound } from '@/domains/resources/pages/ResourceNotFound';
import ResourceCategoryTemplate from '@/domains/resources/templates/ResourceCategoryTemplate';
import { formatIsoDate, isRecentIsoDate } from '@/domains/resources/utils/dates';

type ResourceCategoryPageProps = {
  params?: {
    categorySlug?: string;
  };
};

export function ResourceCategoryPage({ params }: ResourceCategoryPageProps) {
  const categorySlug = params?.categorySlug;

  // Find the category data by slug
  const categoryData = categorySlug ? getCategoryBySlug(categorySlug) : undefined;

  if (!categoryData) {
    return (
      <ResourceNotFound
        title='Category Not Found'
        description="The resource category you're looking for doesn't exist."
      />
    );
  }

  return (
    <ResourceCategoryTemplate
      category={categoryData.id}
      label={categoryData.label}
      description={categoryData.description}
      badgeClassName={getCategoryColors(categoryData.id).badgeClass}
      count={resources.filter(resource => resource.category === categoryData.id).length}
      resources={resources
        .filter(resource => resource.category === categoryData.id)
        .slice()
        .sort((left, right) => {
          const leftDate = Date.parse(`${left.updatedAt ?? left.publishedAt}T00:00:00Z`);
          const rightDate = Date.parse(`${right.updatedAt ?? right.publishedAt}T00:00:00Z`);
          return rightDate - leftDate;
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
            categoryLabel: categoryData.label,
            excerpt: resource.description,
            freshnessBadge,
            dateLabel: isUpdated ? 'Updated' : 'Published',
            dateText: formatIsoDate(lastChanged),
          };
        })}
    />
  );
}

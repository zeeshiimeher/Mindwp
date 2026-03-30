/* Automated resource-category page.
  Handles all category slugs from registry metadata; no per-category components. */

import { getCategoryBySlug } from '@/domains/resources/api';
import { ResourceNotFound } from '@/domains/resources/pages/ResourceNotFound';
import ResourceCategoryTemplate from '@/domains/resources/templates/ResourceCategoryTemplate';

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

  return <ResourceCategoryTemplate category={categoryData.id} />;
}

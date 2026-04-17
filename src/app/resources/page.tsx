import { Suspense } from 'react';

import { categories, resources } from '@/domains/resources/api';
import { ResourcesHub } from '@/domains/resources/pages/ResourcesHub';
import { getInventoryMetadata } from '@/lib/content-quality/inventory';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/resources');
}

export default function Page() {
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

  const resourceItems = [...resources]
    .sort((left, right) => {
      const leftDate = Date.parse(`${left.updatedAt ?? left.publishedAt}T00:00:00Z`);
      const rightDate = Date.parse(`${right.updatedAt ?? right.publishedAt}T00:00:00Z`);
      return rightDate - leftDate;
    })
    .map(resource => {
      const categoryLabel =
        categories.find(category => category.id === resource.category)?.label ??
        String(resource.category);

      return {
        title: resource.title,
        url: resource.seo.canonical,
        categoryLabel,
        excerpt: resource.description,
        freshnessBadge: undefined,
        dateLabel: '',
        dateText: '',
      };
    });

  return (
    <Suspense fallback={<div className='l-section' aria-hidden='true' />}>
      <ResourcesHub categoryItems={categoryItems} resourceItems={resourceItems} />
    </Suspense>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/system/JsonLd';
import { categories } from '@/domains/resources/api';
import ResourceCategoryTemplate from '@/domains/resources/templates/ResourceCategoryTemplate';
import { buildMetadata } from '@/lib/seo/metadata';
import { buildBreadcrumbSchema } from '@/lib/seo/schema';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

function resolveCategory(categorySlug: string) {
  return categories.find(cat => cat.slug === categorySlug);
}

export function generateStaticParams() {
  return categories.map(category => ({ categorySlug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = resolveCategory(categorySlug);

  if (!category) {
    return buildMetadata({
      title: 'Category Not Found',
      description: "The resource category you're looking for doesn't exist.",
      path: '/resources',
      noindex: true,
      nofollow: true,
    });
  }

  const title = `${category.label} Resources`;
  const description = category.description;
  const canonicalPath = `/resources/category/${category.slug}`;

  return buildMetadata({
    title,
    description,
    path: canonicalPath,
  });
}

export default async function Page({ params }: { params: Promise<{ categorySlug: string }> }) {
  const { categorySlug } = await params;
  const category = resolveCategory(categorySlug);
  if (!category) {
    notFound();
  }

  const canonicalPath = `/resources/category/${category.slug}`;
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: category.label, path: canonicalPath },
  ]);

  return (
    <>
      <JsonLd id='resource-category-breadcrumb-jsonld' schema={breadcrumbSchema} />
      <ResourceCategoryTemplate category={category.id} />
    </>
  );
}

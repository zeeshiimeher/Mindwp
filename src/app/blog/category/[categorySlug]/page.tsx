import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/system/JsonLd';
import { getAllCategorySlugs, getCategoryBySlug } from '@/domains/blog/api';
import { BLOG_CATEGORY_NOT_FOUND_SEO } from '@/domains/blog/config';
import { BlogCategoryTemplate } from '@/domains/blog/templates/BlogCategoryTemplate';
import { buildMetadata } from '@/lib/seo/metadata';
import { buildBreadcrumbSchema } from '@/lib/seo/schema';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

function resolveCategory(categorySlug: string) {
  return getCategoryBySlug(categorySlug);
}

export function generateStaticParams() {
  return getAllCategorySlugs().map(categorySlug => ({ categorySlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = resolveCategory(categorySlug);

  if (!category) {
    return buildMetadata(BLOG_CATEGORY_NOT_FOUND_SEO);
  }

  const title = `${category.name} Articles`;
  const description = category.description;
  const canonicalPath = `/blog/category/${category.slug}`;

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

  const canonicalPath = `/blog/category/${category.slug}`;
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: category.name, path: canonicalPath },
  ]);

  return (
    <>
      <JsonLd id='blog-category-breadcrumb-jsonld' schema={breadcrumbSchema} />
      <BlogCategoryTemplate category={category.category} />
    </>
  );
}

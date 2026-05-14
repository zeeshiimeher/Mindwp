import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/system/JsonLd';
import { blogPosts, getAllCategorySlugs, getCategoryBySlug } from '@/domains/blog/api';
import { BlogCategoryTemplate } from '@/domains/blog/templates/BlogCategoryTemplate';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { buildBreadcrumbSchema } from '@/lib/seo/schema';
import { resolveSEO } from '@/lib/seo/seoResolver';

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
    return {};
  }

  return resolveSEO({
    path: `/blog/category/${category.slug}`,
    type: 'blog-category',
    slug: category.slug,
  });
}

export default async function Page({ params }: { params: Promise<{ categorySlug: string }> }) {
  await ensureGraphInitialized();

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
      <BlogCategoryTemplate
        title={category.name}
        description={category.description || 'Articles in this category.'}
        articleCount={blogPosts.filter(post => post.category === category.category).length}
        posts={blogPosts.filter(post => post.category === category.category)}
      />
    </>
  );
}

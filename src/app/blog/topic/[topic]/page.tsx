import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/system/JsonLd';
import {
  getallTopicSlugs,
  getPostsForTopic,
  getTopicBySlug,
  getTopicHubSections,
} from '@/domains/blog/api';
import { BlogTopicTemplate } from '@/domains/blog/templates/BlogTopicTemplate';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { buildBreadcrumbSchema } from '@/lib/seo/schema';
import { resolveSEO } from '@/lib/seo/seoResolver';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

export function generateStaticParams() {
  return getallTopicSlugs().map(topic => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const meta = getTopicBySlug(topic);

  if (!meta) {
    return {};
  }

  return resolveSEO({ path: `/blog/topic/${meta.slug}`, type: 'blog-topic', slug: meta.slug });
}

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
  await ensureGraphInitialized();

  const { topic } = await params;
  const meta = getTopicBySlug(topic);
  if (!meta) {
    notFound();
  }

  const sections = getTopicHubSections(topic);
  const totalPosts = getPostsForTopic(topic).length;
  const canonicalPath = `/blog/topic/${meta.slug}`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: meta.name, path: canonicalPath },
  ]);

  return (
    <>
      <JsonLd id='blog-topic-breadcrumb-jsonld' schema={breadcrumbSchema} />
      <BlogTopicTemplate topic={meta} sections={sections} totalPosts={totalPosts} />
    </>
  );
}

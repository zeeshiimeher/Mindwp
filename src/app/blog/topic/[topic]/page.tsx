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
import { buildMetadata } from '@/lib/seo/metadata';
import { buildBreadcrumbSchema } from '@/lib/seo/schema';

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
    return buildMetadata({
      title: 'Topic Not Found',
      description: "The blog topic you're looking for doesn't exist.",
      path: '/blog',
      noindex: true,
      nofollow: true,
    });
  }

  return buildMetadata({
    title: `${meta.name} – Expert Insights & Resources`,
    description: meta.description,
    path: `/blog/topic/${meta.slug}`,
  });
}

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
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

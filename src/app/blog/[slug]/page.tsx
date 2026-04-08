import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/system/JsonLd';
import { BLOG_AUTHORS } from '@/domains/blog/api';
import { BLOG_POSTS } from '@/domains/blog/registry';
import { BlogPostTemplate } from '@/domains/blog/templates/BlogPostTemplate';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { getImage } from '@/lib/image-system/resolver';
import { buildMetadata } from '@/lib/seo/metadata';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo/schema';

import type { ContentGraphNode } from '../../../lib/content-graph/types';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

const getBlogGraphNodes = async (): Promise<ContentGraphNode[]> => {
  await ensureGraphInitialized();
  const reactModule = await import('react');
  globalThis.React ??= reactModule.default;

  const { getContentGraph } = await import('../../../lib/content-graph/registry');
  return Object.values(getContentGraph())
    .filter(node => node.type === 'blog')
    .sort((a, b) => a.slug.localeCompare(b.slug));
};

const getBlogNodeBySlug = async (slug: string): Promise<ContentGraphNode | null> => {
  const nodes = await getBlogGraphNodes();
  return nodes.find(node => node.slug === slug) ?? null;
};

export async function generateStaticParams() {
  const blogNodes = await getBlogGraphNodes();
  return blogNodes.map(node => ({ slug: node.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blogNode = await getBlogNodeBySlug(slug);
  if (!blogNode) {
    return {};
  }

  const post = BLOG_POSTS[slug];
  if (!post) {
    return {};
  }

  const title = post.seo.title;
  const description = post.seo.description;
  const canonicalPath = post.seo.canonical || blogNode.path;

  return buildMetadata({
    title,
    description,
    keywords: post.seo.keywords,
    path: canonicalPath,
    type: 'article',
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogNode = await getBlogNodeBySlug(slug);
  if (!blogNode) {
    notFound();
  }

  const post = BLOG_POSTS[slug];
  if (!post) {
    notFound();
  }

  const canonicalPath = blogNode.path;
  const authorName = BLOG_AUTHORS[post.authorKey]?.name;
  const articleSchema = buildArticleSchema({
    headline: post.title,
    description: post.metaDescription,
    path: canonicalPath,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    ...(authorName ? { authorName } : {}),
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: canonicalPath },
  ]);

  return (
    <>
      <script
        id='article-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <JsonLd id='blog-breadcrumb-jsonld' schema={breadcrumbSchema} />
      <BlogPostTemplate
        title={post.title}
        slug={post.slug}
        metaTitle={post.metaTitle}
        metaDescription={post.metaDescription}
        primaryKeyword={post.primaryKeyword}
        supportingKeywords={post.supportingKeywords}
        category={post.category}
        publishDate={post.publishDate}
        tags={post.tags}
        sections={post.sections}
        systems={post.systems}
        featuredImage={getImage(slug, 'blog', 'featured-clean')}
      />
    </>
  );
}

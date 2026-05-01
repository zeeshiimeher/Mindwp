import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/system/JsonLd';
import { BLOG_AUTHORS } from '@/domains/blog/api';
import { BLOG_POSTS } from '@/domains/blog/registry';
import { BlogPostTemplate } from '@/domains/blog/templates/BlogPostTemplate';
import { getInitializedContentGraph } from '@/domains/init/ensureGraphInitialized';
import { getImage } from '@/lib/image-system/resolver';
import { extractSEOInput, resolveMetadata } from '@/lib/seo/resolveMetadata';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo/schema';
import { buildSEO } from '@/lib/seo/seo';

import type { ContentGraphNode } from '../../../lib/content-graph/types';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

const blogGraphNodesPromise = getInitializedContentGraph().then(graph =>
  Object.values(graph)
    .filter(node => node.type === 'blog')
    .sort((a, b) => a.slug.localeCompare(b.slug))
);

const getBlogGraphNodes = async (): Promise<ContentGraphNode[]> => {
  return blogGraphNodesPromise;
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

  return buildSEO(extractSEOInput(post, blogNode.path), blogNode.path);
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
  const resolvedMetadata = resolveMetadata(post, canonicalPath);
  const authorName = BLOG_AUTHORS[post.authorKey]?.name;
  const articleSchema = buildArticleSchema({
    headline: post.title,
    description: resolvedMetadata.description ?? post.seo.description,
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
        pageId={`blog:${post.slug}`}
        title={post.title}
        slug={post.slug}
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

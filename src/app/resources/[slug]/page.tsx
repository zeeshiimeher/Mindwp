import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import JsonLd from '@/components/system/JsonLd';
import { SmartRelatedSection } from '@/components/system/SmartRelatedSection';
import type { RelatedContentBlock } from '@/components/system/RelatedContentSection';
import { RELATED_SECTION_LABELS } from '@/config/ui-intelligence';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { RESOURCE_REGISTRY } from '@/domains/resources/registry';
import ResourcePageTemplate from '@/domains/resources/templates/ResourcePageTemplate';
import type { ResourceFAQItem } from '@/domains/resources/templates/types';
import type { ResourceSection } from '@/domains/resources/types';
import { getInventoryMetadata } from '@/lib/content-quality/inventory';
import { getRelatedContent, type RelatedContent } from '@/lib/graph/query';
import { buildFaqSchema } from '@/lib/schema/buildFaqSchema';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/seo/schema';

import type { ContentGraphNode } from '../../../lib/content-graph/types';

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

const getResourceGraphNodes = async (): Promise<ContentGraphNode[]> => {
  await ensureGraphInitialized();
  const reactModule = await import('react');
  globalThis.React ??= reactModule.default;

  const { getContentGraph } = await import('../../../lib/content-graph/registry');
  return Object.values(getContentGraph())
    .filter(node => node.type === 'resource')
    .sort((a, b) => a.slug.localeCompare(b.slug));
};

const getResourceNodeBySlug = async (slug: string): Promise<ContentGraphNode | null> => {
  const nodes = await getResourceGraphNodes();
  return nodes.find(node => node.slug === slug) ?? null;
};

function getResourceFaqs(sections: ResourceSection[]): ResourceFAQItem[] {
  return sections.flatMap(section => (section.type === 'faq' ? (section.items ?? []) : []));
}

async function resolveResource(slug: string) {
  const node = await getResourceNodeBySlug(slug);
  if (!node) return null;

  const resource = RESOURCE_REGISTRY[slug];
  if (!resource) return null;

  return { node, resource };
}

function buildRelatedBlocks(slug: string): RelatedContentBlock[] {
  const related = getRelatedContent(slug, 'resource');
  const labels = RELATED_SECTION_LABELS.resource ?? {};
  const slotKeys = Object.keys(labels) as Array<keyof RelatedContent>;
  const blocks: RelatedContentBlock[] = [];

  for (const key of slotKeys) {
    const items = related[key];
    const label = labels[key];
    if (!label || !items || items.length === 0) {
      continue;
    }

    blocks.push({
      title: label.title,
      description: label.description,
      items: items.slice(0, 3).map(item => ({
        title: item.title,
        desc: item.description,
        href: item.path,
      })),
    });

    if (blocks.length === 2) {
      break;
    }
  }

  return blocks;
}

export async function generateStaticParams() {
  const nodes = await getResourceGraphNodes();
  return nodes.map(node => ({ slug: node.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = await resolveResource(slug);
  if (!resolved) {
    return {};
  }

  return getInventoryMetadata(resolved.node.path);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resolved = await resolveResource(slug);
  if (!resolved) {
    notFound();
  }

  const { node, resource } = resolved;

  const canonicalPath = node.path;
  const articleSchema = buildArticleSchema({
    headline: resource.title,
    description: resource.description,
    path: canonicalPath,
    datePublished: resource.publishedAt,
    dateModified: resource.updatedAt ?? resource.publishedAt,
    type: 'Article',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: resource.title, path: canonicalPath },
  ]);
  const faqSchema = buildFaqSchema(getResourceFaqs(resource.sections));
  const schemaEntries: Array<{ id: string; schema: Record<string, unknown> }> = [
    { id: 'resource-jsonld', schema: articleSchema },
    ...(faqSchema ? [{ id: 'resource-faq-jsonld', schema: faqSchema }] : []),
    { id: 'resource-breadcrumb-jsonld', schema: breadcrumbSchema },
  ];

  const relatedBlocks = buildRelatedBlocks(slug);

  return (
    <>
      {schemaEntries.map(entry => (
        <JsonLd key={entry.id} id={entry.id} schema={entry.schema} />
      ))}
      <ResourcePageTemplate
        url={canonicalPath}
        currentSlug={slug}
        title={resource.title}
        description={resource.description}
        category={resource.category}
        publishedAt={resource.publishedAt}
        updatedAt={resource.updatedAt}
        seo={resource.seo}
        sections={resource.sections}
        systems={resource.systems}
      />
      {relatedBlocks.length > 0 ? <SmartRelatedSection blocks={relatedBlocks} /> : null}
    </>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ClusterPageLayout, type ClusterPageSection } from '@/components/system/ClusterPageLayout';
import { CLUSTER_PAGE_CONFIG, CONTENT_TYPE_LABELS } from '@/config/ui-intelligence';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { CANONICAL_TOPICS } from '@/lib/content-graph/canonical';
import type { ContentGraphNode, ContentNodeType } from '@/lib/content-graph/types';
import { getTopicCluster } from '@/lib/graph/query';
import { resolveSEO } from '@/lib/seo/seoResolver';

function formatSlugLabel(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

function buildSections(nodes: ContentGraphNode[]): ClusterPageSection[] {
  const grouped = new Map<ContentNodeType, ContentGraphNode[]>();

  for (const node of nodes) {
    const current = grouped.get(node.type) ?? [];
    current.push(node);
    grouped.set(node.type, current);
  }

  return CLUSTER_PAGE_CONFIG.topic.sectionOrder.flatMap(nodeType => {
    const typeNodes = grouped.get(nodeType) ?? [];
    if (typeNodes.length === 0) {
      return [];
    }

    const title = CONTENT_TYPE_LABELS[nodeType];
    return [
      {
        id: nodeType,
        title,
        description: `${typeNodes.length} ${title.toLowerCase()} in this cluster`,
        items: typeNodes.map(node => ({
          title: formatSlugLabel(node.slug),
          description: `/${node.path}`,
          href: `/${node.path}`,
        })),
      },
    ];
  });
}

export const dynamicParams = false;
export const revalidate = false;
export const dynamic = 'force-static';

export async function generateStaticParams() {
  return CANONICAL_TOPICS.map(topic => ({ slug: topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!(CANONICAL_TOPICS as readonly string[]).includes(slug)) return {};

  return resolveSEO({ path: `/topics/${slug}`, type: 'topic-hub', slug });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  await ensureGraphInitialized();
  const { slug } = await params;

  if (!(CANONICAL_TOPICS as readonly string[]).includes(slug)) {
    notFound();
  }

  const cluster = getTopicCluster(slug);

  // Don't render topic pages with no content
  if (cluster.nodes.length === 0) {
    notFound();
  }

  return (
    <ClusterPageLayout
      title={`${CLUSTER_PAGE_CONFIG.topic.titlePrefix} ${formatSlugLabel(slug)}`}
      description={CLUSTER_PAGE_CONFIG.topic.description}
      itemCount={cluster.nodes.length}
      sections={buildSections(cluster.nodes)}
    />
  );
}

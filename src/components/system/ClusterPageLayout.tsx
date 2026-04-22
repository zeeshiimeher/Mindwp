/**
 * ClusterPageLayout
 *
 * Auto-generated hub pages for topic/system/industry clusters.
 * Groups all graph nodes by content type, renders in configured order.
 *
 * Data flow:
 *   clusterType + identifier
 *   → getTopicCluster() / getSystemCluster() / getContentByIndustry()
 *   → group by node type
 *   → CLUSTER_PAGE_CONFIG.sectionOrder
 *   → RelatedCardsSection per group
 *
 * Rules:
 * - No hardcoding of slugs or paths
 * - All data from graph query API
 * - No duplication of graph logic
 */

import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import {
  CLUSTER_PAGE_CONFIG,
  type ClusterType,
  CONTENT_TYPE_LABELS,
} from '@/config/ui-intelligence';
import type { ContentGraphNode, ContentNodeType } from '@/lib/content-graph/types';
import { getContentByIndustry, getSystemCluster, getTopicCluster } from '@/lib/graph/query';

// ── Types ────────────────────────────────────────────────────────────

interface ClusterPageLayoutProps {
  clusterType: ClusterType;
  identifier: string;
}

// ── Helpers ──────────────────────────────────────────────────────────

function slugLabel(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function getClusterNodes(clusterType: ClusterType, identifier: string): ContentGraphNode[] {
  switch (clusterType) {
    case 'topic':
      return getTopicCluster(identifier).nodes;
    case 'system':
      return getSystemCluster(identifier).nodes;
    case 'industry':
      return getContentByIndustry(identifier).nodes;
  }
}

function groupByType(nodes: ContentGraphNode[]): Map<ContentNodeType, ContentGraphNode[]> {
  const groups = new Map<ContentNodeType, ContentGraphNode[]>();
  for (const node of nodes) {
    const existing = groups.get(node.type) ?? [];
    existing.push(node);
    groups.set(node.type, existing);
  }
  return groups;
}

// ── Component ────────────────────────────────────────────────────────

export function ClusterPageLayout({ clusterType, identifier }: ClusterPageLayoutProps) {
  const config = CLUSTER_PAGE_CONFIG[clusterType];
  const nodes = getClusterNodes(clusterType, identifier);
  const grouped = groupByType(nodes);

  const title = `${config.titlePrefix} ${slugLabel(identifier)}`;

  return (
    <div className='cluster-page'>
      <header className='cluster-page__header l-container'>
        <h1 className='cluster-page__title'>{title}</h1>
        <p className='cluster-page__description'>{config.description}</p>
        <p className='cluster-page__count'>
          {nodes.length} piece{nodes.length !== 1 ? 's' : ''} of content
        </p>
      </header>

      {config.sectionOrder.map(nodeType => {
        const typeNodes = grouped.get(nodeType);
        if (!typeNodes || typeNodes.length === 0) return null;

        const label = CONTENT_TYPE_LABELS[nodeType] ?? nodeType;

        return (
          <RelatedCardsSection
            key={nodeType}
            title={label}
            description={`${typeNodes.length} ${label.toLowerCase()} in this cluster`}
            items={typeNodes.map(node => ({
              title: slugLabel(node.slug),
              desc: `/${node.path}`,
              href: `/${node.path}`,
            }))}
            showArrows
          />
        );
      })}
    </div>
  );
}

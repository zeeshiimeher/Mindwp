// @vitest-environment node

import { describe, expect, test } from 'vitest';

import { clearResolverCache, createResolver } from '@/lib/authority/resolver';
import type { ContentGraphNode, ResolverDependencies, ResolverIndexes } from '@/lib/content-graph/types';

function buildResolverIndexes(nodes: ContentGraphNode[]): ResolverIndexes {
  return {
    blogPostsList: [],
    resourceList: [],
    graphNodes: nodes,
    blogSlugIndex: new Map(),
    blogTopicIndex: new Map(),
    blogSystemIndex: new Map(),
    blogIndustryIndex: new Map(),
    resourceSlugIndex: new Map(),
    resourceTopicIndex: new Map(),
    resourceSystemIndex: new Map(),
    resourceIndustryIndex: new Map(),
    resourceUrlIndex: new Map(),
    resourceCategoryIndex: new Map(),
    nodeSlugIndex: new Map(nodes.map(node => [node.slug, node])),
    nodeIdIndex: new Map(nodes.map(node => [node.id.toLowerCase(), node])),
    nodeTypeBuckets: new Map([['service', nodes]]),
    nodeTypeSlugIndex: new Map([
      ['service', new Map(nodes.map(node => [node.slug.toLowerCase(), node]))],
    ]),
    reverseRelationIndex: new Map(),
    nodeTokenIndex: new Map(),
    nodeOrderIndex: new Map(nodes.map((node, index) => [node.id, index])),
  };
}

describe('unit: authority resolver', () => {
  test('prefers graph metadata over dependency fallback copy for authority items', () => {
    clearResolverCache();

    const sourceNode: ContentGraphNode = {
      id: 'service:source',
      slug: 'source',
      type: 'service',
      path: '/services/source',
      title: 'Source Title',
      description: 'Source description',
      systems: ['crm'],
      relatesTo: [{ id: 'service:target', source: 'manual' }],
      supports: [],
      validates: [],
    };

    const targetNode: ContentGraphNode = {
      id: 'service:target',
      slug: 'target',
      type: 'service',
      path: '/services/target',
      title: 'Graph Title',
      description: 'Graph description',
      systems: ['crm'],
      relatesTo: [],
      supports: [],
      validates: [],
    };

    const deps: ResolverDependencies = {
      caseStudies: {},
      features: [],
      industries: {},
      getServiceBySlug: slug =>
        slug === 'target'
          ? {
              slug,
              badge: 'Dependency Badge',
              title: 'Dependency Title',
              description: 'Dependency description',
            }
          : undefined,
    };

    const resolver = createResolver(deps, buildResolverIndexes([sourceNode, targetNode]));
    const slots = resolver.getServiceSlots('source');

    expect(slots.services).toHaveLength(1);
    expect(slots.services[0]).toMatchObject({
      slug: 'target',
      title: 'Graph Title',
      description: 'Graph description',
    });
  });
});
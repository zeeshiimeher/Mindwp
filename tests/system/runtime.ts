import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { isPublishableNodeType, toCatchAllParam } from '@/lib/content-graph/publishable';
import { getContentGraph } from '@/lib/content-graph/registry';
import type { ContentGraphNode, ContentNodeType } from '@/lib/content-graph/types';

let initialized = false;

export async function initRuntime() {
  if (initialized) {
    return;
  }

  await ensureGraphInitialized();
  initialized = true;
}

export function getGraphNodes(type?: ContentNodeType): ContentGraphNode[] {
  const nodes = Object.values(getContentGraph()).sort((left, right) =>
    left.path.localeCompare(right.path)
  );
  return type ? nodes.filter(node => node.type === type) : nodes;
}

export function unique<T>(values: Iterable<T>): T[] {
  return [...new Set(values)];
}

export function sourceTypeForNode(node: ContentGraphNode) {
  switch (node.type) {
    case 'industry-category':
    case 'industry-detail':
      return 'industry';
    default:
      return node.type;
  }
}

export function primarySystemForNode(node: ContentGraphNode): string {
  return node.systems?.[0] ?? 'smart-website-systems';
}

export { isPublishableNodeType, toCatchAllParam };

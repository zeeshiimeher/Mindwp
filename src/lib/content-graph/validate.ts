import { getContentGraph } from './registry';
import type { ContentGraphNode, ContentNodeType } from './types';

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`[graph-migration] ${message}`);
  }
}

export function validateContentGraph(graph: Record<string, ContentGraphNode>): true {
  const nodes = Object.values(graph);
  const slugSet = new Set<string>();
  const idSet = new Set<string>();
  const pathSet = new Set<string>();

  let hasSmartWebsiteCore = false;

  for (const node of nodes) {
    assert(typeof node.id === 'string' && node.id.length > 0, 'Node has empty id');
    assert(!idSet.has(node.id), `Duplicate id detected: ${node.id}`);
    idSet.add(node.id);

    assert(typeof node.slug === 'string' && node.slug.length > 0, `Node ${node.id} has empty slug`);

    assert(!slugSet.has(node.slug), `Duplicate slug detected: ${node.slug}`);
    slugSet.add(node.slug);

    assert(
      typeof node.path === 'string' && node.path.trim().length > 0,
      `Node ${node.id} has empty path`
    );

    assert(!pathSet.has(node.path), `Duplicate path detected: ${node.path}`);
    pathSet.add(node.path);

    assert(Boolean(node.type), `Node ${node.id} has undefined type`);

    const nodeType = node.type as ContentNodeType;
    assert(typeof nodeType === 'string' && nodeType.length > 0, `Node ${node.id} has invalid type`);

    if (node.type === 'industry-detail') {
      assert(Boolean(node.parent), `Industry detail node missing parent: ${node.id}`);
    }

    if (node.slug === 'smart-website-systems') {
      assert(node.type === 'service', 'Smart Website node must be type service');
      assert(node.coreFramework === true, 'Smart Website node must be marked coreFramework=true');
      hasSmartWebsiteCore = true;
    }
  }

  for (const node of nodes) {
    const references = [
      ...(node.relatesTo ?? []),
      ...(node.supports ?? []),
      ...(node.validates ?? []),
    ];
    for (const edge of references) {
      const isResolved = idSet.has(edge.id) || slugSet.has(edge.id);
      assert(isResolved, `Node ${node.id} has unresolved relationship reference: ${edge.id}`);
    }
  }

  assert(hasSmartWebsiteCore, 'Smart Website node not found or not marked coreFramework=true');

  return true;
}

export function runGraphValidation(): boolean {
  return validateContentGraph(getContentGraph());
}

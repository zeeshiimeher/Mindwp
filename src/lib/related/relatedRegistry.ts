import type { PageIdentity } from '@/lib/page/pageIdentity';

export type RelatedContentRegistry = {
  pageId: string;
  zoneIds: Set<string>;
};

export function createRelatedContentRegistry(pageIdentity: PageIdentity): RelatedContentRegistry {
  return {
    pageId: pageIdentity.pageId,
    zoneIds: new Set(),
  };
}

export function registerRelatedContentZone(
  registry: RelatedContentRegistry,
  pageId: string,
  zoneId: string
) {
  if (registry.pageId !== pageId) {
    return;
  }

  if (registry.zoneIds.has(zoneId)) {
    return;
  }

  registry.zoneIds.add(zoneId);
}

export function unregisterRelatedContentZone(
  registry: RelatedContentRegistry,
  pageId: string,
  zoneId: string
) {
  if (registry.pageId !== pageId) {
    return;
  }

  registry.zoneIds.delete(zoneId);
}

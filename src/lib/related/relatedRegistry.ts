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
    throw new Error(
      `Related content registry mismatch. Expected pageId "${registry.pageId}" but received "${pageId}".`
    );
  }

  if (registry.zoneIds.has(zoneId)) {
    return;
  }

  if (registry.zoneIds.size > 0) {
    throw new Error(`Duplicate RelatedContentZone detected for pageId "${pageId}".`);
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

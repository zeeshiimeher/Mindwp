import type { AuthorityItem } from '../authority/resolver';

/**
 * In-memory cache for resolver slot outputs.
 * Key format: `${type}:${slug}` (e.g. "service:ai-lead-handling")
 */

type SlotResult = Record<string, AuthorityItem[]>;

const cache = new Map<string, SlotResult>();

export function getCachedResolver(key: string): SlotResult | undefined {
  return cache.get(key);
}

export function setCachedResolver(key: string, data: SlotResult): void {
  cache.set(key, data);
}

export function clearResolverCache(): void {
  cache.clear();
}

export function resolverCacheSize(): number {
  return cache.size;
}

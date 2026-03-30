/**
 * In-memory cache for authority scores per node slug.
 * Avoids recomputation inside loops when scores are accessed repeatedly.
 */

const cache = new Map<string, number>();

export function getCachedAuthority(slug: string): number | undefined {
  return cache.get(slug);
}

export function setCachedAuthority(slug: string, score: number): void {
  cache.set(slug, score);
}

export function bulkSetAuthority(scores: Record<string, number>): void {
  for (const [slug, score] of Object.entries(scores)) {
    cache.set(slug, score);
  }
}

export function clearAuthorityCache(): void {
  cache.clear();
}

export function authorityCacheSize(): number {
  return cache.size;
}

// ─── Provider Manager ───────────────────────────────────────────────
// Manages provider priority, fallback, and dynamic ordering based on learning

/* eslint-disable no-console */

import { DEFAULT_PROVIDER_ORDER, getProviderKeys } from '../config';
import { loadProviderScores } from '../learning/providerLearning';
import type { ContentDomain, ProviderName, ProviderScores, ProviderSearchResult } from '../types';

import { searchPexels } from './pexels';
import { searchPixabay } from './pixabay';
import { searchUnsplash } from './unsplash';

const searchFunctions: Record<
  ProviderName,
  (query: string, apiKey: string, perPage?: number) => Promise<ProviderSearchResult>
> = {
  unsplash: searchUnsplash,
  pexels: searchPexels,
  pixabay: searchPixabay,
};

/** Get dynamic provider order based on learned scores for a domain */
export function getProviderOrder(domain: ContentDomain, scores?: ProviderScores): ProviderName[] {
  if (!scores) {
    try {
      scores = loadProviderScores();
    } catch {
      return [...DEFAULT_PROVIDER_ORDER];
    }
  }

  const domainScores = scores[domain];
  if (!domainScores) return [...DEFAULT_PROVIDER_ORDER];

  return [...DEFAULT_PROVIDER_ORDER].sort(
    (a, b) => (domainScores[b] ?? 0) - (domainScores[a] ?? 0)
  );
}

/** Search all providers in priority order and combine results */
export async function searchAllProviders(
  query: string,
  domain: ContentDomain,
  perPage = 10
): Promise<ProviderSearchResult[]> {
  const keys = getProviderKeys();
  const order = getProviderOrder(domain);
  const results: ProviderSearchResult[] = [];

  for (const provider of order) {
    const key = keys[provider];
    if (!key) {
      console.warn(`[provider] No API key for ${provider}, skipping`);
      continue;
    }

    try {
      const result = await searchFunctions[provider](query, key, perPage);
      results.push(result);
    } catch (err) {
      console.warn(`[provider] ${provider} search failed:`, err);
    }
  }

  return results;
}

/** Search providers sequentially with fallback — stop at first good result */
export async function searchWithFallback(
  query: string,
  domain: ContentDomain,
  minResults = 1,
  perPage = 10
): Promise<ProviderSearchResult | null> {
  const keys = getProviderKeys();
  const order = getProviderOrder(domain);

  for (const provider of order) {
    const key = keys[provider];
    if (!key) continue;

    try {
      const result = await searchFunctions[provider](query, key, perPage);
      if (result.images.length >= minResults) {
        return result;
      }
    } catch (err) {
      console.warn(`[provider] ${provider} fallback search failed:`, err);
    }
  }

  return null;
}

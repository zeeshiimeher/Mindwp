// ─── Unsplash Provider ──────────────────────────────────────────────

/* eslint-disable no-console */

import { PROVIDER_ENDPOINTS } from '../config';
import type { ProviderImage, ProviderSearchResult } from '../types';

export async function searchUnsplash(
  query: string,
  apiKey: string,
  perPage = 10
): Promise<ProviderSearchResult> {
  const url = new URL(`${PROVIDER_ENDPOINTS.unsplash}/search/photos`);
  url.searchParams.set('query', query);
  url.searchParams.set('per_page', String(perPage));
  url.searchParams.set('orientation', 'landscape');
  // Vary page across runs for image variety
  url.searchParams.set('page', String(1 + (Date.now() % 3)));

  const response = await fetch(url.toString(), {
    headers: { Authorization: `Client-ID ${apiKey}` },
  });

  if (!response.ok) {
    console.warn(`[unsplash] Search failed (${response.status}): ${query}`);
    return { provider: 'unsplash', images: [], totalResults: 0 };
  }

  const data = (await response.json()) as {
    total: number;
    results: Array<{
      id: string;
      width: number;
      height: number;
      description: string | null;
      alt_description: string | null;
      tags: Array<{ title: string }>;
      urls: { regular: string; full: string; raw: string };
      links: { download_location: string };
      user: { name: string };
    }>;
  };

  const images: ProviderImage[] = data.results.map(img => ({
    id: img.id,
    provider: 'unsplash' as const,
    url: img.urls.regular,
    downloadUrl: `${img.urls.raw}&w=1600&q=80&fit=max`,
    width: img.width,
    height: img.height,
    description: img.description ?? img.alt_description ?? '',
    tags: img.tags?.map(t => t.title) ?? [],
    photographer: img.user.name,
    license: 'unsplash',
    isEditorial: false,
  }));

  return { provider: 'unsplash', images, totalResults: data.total };
}

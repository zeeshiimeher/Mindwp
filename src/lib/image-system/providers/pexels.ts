// ─── Pexels Provider ────────────────────────────────────────────────

import { PROVIDER_ENDPOINTS } from '../config';
import type { ProviderImage, ProviderSearchResult } from '../types';

export async function searchPexels(
  query: string,
  apiKey: string,
  perPage = 10
): Promise<ProviderSearchResult> {
  const url = new URL(`${PROVIDER_ENDPOINTS.pexels}/search`);
  url.searchParams.set('query', query);
  url.searchParams.set('per_page', String(perPage));
  url.searchParams.set('orientation', 'landscape');
  // Vary page across runs for image variety
  url.searchParams.set('page', String(1 + (Date.now() % 3)));

  const response = await fetch(url.toString(), {
    headers: { Authorization: apiKey },
  });

  if (!response.ok) {
    console.warn(`[pexels] Search failed (${response.status}): ${query}`);
    return { provider: 'pexels', images: [], totalResults: 0 };
  }

  const data = (await response.json()) as {
    total_results: number;
    photos: Array<{
      id: number;
      width: number;
      height: number;
      alt: string;
      src: { large2x: string; original: string };
      photographer: string;
    }>;
  };

  const images: ProviderImage[] = data.photos.map(img => ({
    id: String(img.id),
    provider: 'pexels' as const,
    url: img.src.large2x,
    downloadUrl: img.src.large2x,
    width: img.width,
    height: img.height,
    description: img.alt ?? '',
    tags: [],
    photographer: img.photographer,
    license: 'pexels',
    isEditorial: false,
  }));

  return { provider: 'pexels', images, totalResults: data.total_results };
}

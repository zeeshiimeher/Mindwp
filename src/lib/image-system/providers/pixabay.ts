// ─── Pixabay Provider ───────────────────────────────────────────────

import { PROVIDER_ENDPOINTS } from '../config';
import type { ProviderImage, ProviderSearchResult } from '../types';

export async function searchPixabay(
  query: string,
  apiKey: string,
  perPage = 10
): Promise<ProviderSearchResult> {
  const url = new URL(PROVIDER_ENDPOINTS.pixabay);
  url.searchParams.set('key', apiKey);
  url.searchParams.set('q', query);
  url.searchParams.set('per_page', String(perPage));
  url.searchParams.set('orientation', 'horizontal');
  url.searchParams.set('image_type', 'photo');
  url.searchParams.set('safesearch', 'true');
  url.searchParams.set('min_width', '1600');
  // Vary page across runs for image variety
  url.searchParams.set('page', String(1 + (Date.now() % 3)));

  const response = await fetch(url.toString());

  if (!response.ok) {
    console.warn(`[pixabay] Search failed (${response.status}): ${query}`);
    return { provider: 'pixabay', images: [], totalResults: 0 };
  }

  const data = (await response.json()) as {
    totalHits: number;
    hits: Array<{
      id: number;
      imageWidth: number;
      imageHeight: number;
      tags: string;
      largeImageURL: string;
      fullHDURL?: string;
      imageURL?: string;
      user: string;
    }>;
  };

  const images: ProviderImage[] = data.hits.map(img => ({
    id: String(img.id),
    provider: 'pixabay' as const,
    url: img.largeImageURL,
    downloadUrl: img.fullHDURL ?? img.largeImageURL,
    width: img.imageWidth,
    height: img.imageHeight,
    description: img.tags,
    tags: img.tags.split(',').map(t => t.trim()),
    photographer: img.user,
    license: 'pixabay',
    isEditorial: false,
  }));

  return { provider: 'pixabay', images, totalResults: data.totalHits };
}

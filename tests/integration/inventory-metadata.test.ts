// @vitest-environment node

import { describe, expect, test } from 'vitest';

import { getInventoryMetadata } from '@/lib/content-quality/inventory';
import { resolveOGImagePathForRoute } from '@/lib/seo/og/contract';
import { resolveSEO } from '@/lib/seo/seoResolver';
import { env } from '@/env';

type OpenGraphImage = string | URL | { url?: string | URL };

function getFirstOpenGraphImage(images: OpenGraphImage | OpenGraphImage[] | undefined) {
  if (!images) {
    return undefined;
  }

  return Array.isArray(images) ? images[0] : images;
}

function toImageUrl(image: OpenGraphImage | undefined) {
  if (!image) {
    return undefined;
  }

  if (typeof image === 'string') {
    return image;
  }

  if (image instanceof URL) {
    return image.toString();
  }

  return typeof image.url === 'string' ? image.url : image.url?.toString();
}

describe('integration: inventory metadata', () => {
  test('resolves complete metadata for known publishable routes', async () => {
    const metadata = await getInventoryMetadata('/contact');
    const expectedCanonical = new URL('/contact', env.NEXT_PUBLIC_SITE_URL).toString();

    expect(metadata.title).toBeTruthy();
    expect(metadata.description).toBeTruthy();
    expect(metadata.alternates?.canonical).toBe(expectedCanonical);
    expect(metadata.openGraph?.title).toBeTruthy();
    expect(metadata.robots).toEqual({ index: true, follow: true });
  });

  test('uses deterministic API-backed open graph images for publishable routes', async () => {
    const serviceMetadata = await getInventoryMetadata('/services/smart-website-systems');
    const resourceMetadata = await getInventoryMetadata(
      '/resources/hvac-review-generation-framework'
    );

    const serviceImage = getFirstOpenGraphImage(serviceMetadata.openGraph?.images);
    const resourceImage = getFirstOpenGraphImage(resourceMetadata.openGraph?.images);

    expect(toImageUrl(serviceImage)).toBe(
      resolveOGImagePathForRoute('/services/smart-website-systems')
    );
    expect(toImageUrl(resourceImage)).toBe(
      resolveOGImagePathForRoute('/resources/hvac-review-generation-framework')
    );
  });

  test('throws when inventory-backed metadata is missing', async () => {
    await expect(resolveSEO({ path: '/__missing-route__' })).rejects.toThrow(
      'Missing SEO inventory entry for /__missing-route__'
    );
  });
});

import type { MetadataRoute } from 'next';

import { buildSitemapRoutePaths } from '@/lib/content-quality/inventory';
import { toAbsoluteUrl } from '@/lib/seo/config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await buildSitemapRoutePaths();
  const now = new Date();

  return routes
    .sort((a, b) => a.localeCompare(b))
    .map(route => ({
      url: toAbsoluteUrl(route),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '/' ? 1 : 0.7,
    }));
}

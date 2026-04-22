import type { MetadataRoute } from 'next';

import { buildRouteInventory } from '@/lib/content-quality/inventory';
import { toAbsoluteUrl } from '@/lib/seo/config';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const inventory = await buildRouteInventory();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: inventory.filter(entry => !entry.indexable).map(entry => entry.path),
    },
    sitemap: toAbsoluteUrl('/sitemap.xml'),
  };
}

import type { MetadataRoute } from 'next';

import { LIVE_ROUTES } from '@/config/routes';
import { toAbsoluteUrl } from '@/lib/seo/metadata';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return LIVE_ROUTES.map(path => ({
    url: toAbsoluteUrl(path),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}

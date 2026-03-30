import type { MetadataRoute } from 'next';

import { toAbsoluteUrl } from '@/lib/seo/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/docs/', '/archive/'],
    },
    sitemap: toAbsoluteUrl('/sitemap.xml'),
  };
}

import type { MetadataRoute } from 'next';

import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { toAbsoluteUrl } from '@/lib/seo/config';

const STATIC_ROUTES = [
  '/',
  '/about',
  '/blog',
  '/blog/category/ai-lead-handling',
  '/blog/category/beauty-personal-care-industry',
  '/blog/category/crm-automation',
  '/blog/category/future-local-business-tech',
  '/blog/category/home-services-industry',
  '/blog/category/local-authority-seo',
  '/blog/category/reputation-review',
  '/blog/category/smart-website-systems',
  '/case-studies',
  '/components',
  '/contact',
  '/cookies',
  '/faq',
  '/features',
  '/industries',
  '/privacy',
  '/resources',
  '/resources/category/crm-automation',
  '/services',
  '/terms',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await ensureGraphInitialized();
  const reactModule = await import('react');
  globalThis.React ??= reactModule.default;

  const { getContentGraph } = await import('../lib/content-graph/registry');

  const routeSet = new Set<string>(STATIC_ROUTES);

  const sitemapTypes = new Set([
    'service',
    'industry-category',
    'industry-detail',
    'feature',
    'blog',
    'resource',
    'case-study',
  ]);

  for (const node of Object.values(getContentGraph())) {
    if (!sitemapTypes.has(node.type)) continue;
    routeSet.add(node.path);
  }

  const now = new Date();

  return Array.from(routeSet)
    .sort((a, b) => a.localeCompare(b))
    .map(route => ({
      url: toAbsoluteUrl(route),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '/' ? 1 : 0.7,
    }));
}

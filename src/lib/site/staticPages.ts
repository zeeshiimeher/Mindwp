import { buildGlobalContactHref } from '@/lib/contact/contactHref';

export type StaticPage = {
  name: string;
  url: string;
  /** Whether this page should appear in the human-friendly /sitemap page. */
  showOnHumanSitemap?: boolean;
};

/**
 * Canonical static page inventory.
 *
 * Used by:
 * - Human sitemap page (src/pages/Sitemap.tsx)
 */
const globalContactHref = buildGlobalContactHref();

export const STATIC_PAGES: StaticPage[] = [
  { name: 'Homepage', url: '/' },
  { name: 'About Us', url: '/about' },
  { name: 'Services Overview', url: '/services' },
  { name: 'Features Overview', url: '/features' },
  { name: 'Industries Overview', url: '/industries' },
  { name: 'Case Studies', url: '/case-studies' },
  { name: 'FAQ', url: '/faq' },
  { name: 'Blog', url: '/blog' },
  { name: 'Start a Conversation', url: globalContactHref },
  { name: 'Contact Us', url: globalContactHref },
  { name: 'Sitemap (this page)', url: '/sitemap' },
  { name: 'Privacy Policy', url: '/privacy' },

  // Still included in sitemap.xml, but kept out of the human sitemap page (existing UI behavior).
  { name: 'Terms', url: '/terms', showOnHumanSitemap: false },
  { name: 'Cookie Policy', url: '/cookies', showOnHumanSitemap: false },
];

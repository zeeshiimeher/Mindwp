import type { Metadata } from 'next';

import { SEO_CONFIG } from '@/lib/seo/seo';

export const DEFAULT_OG_IMAGE_PATH = SEO_CONFIG.defaultOG;
export const DEFAULT_OG_IMAGE = {
  url: DEFAULT_OG_IMAGE_PATH,
  width: 1200,
  height: 630,
} as const;

export function buildDefaultRootMetadata(): Metadata {
  return {
    metadataBase: new URL(SEO_CONFIG.baseUrl),
    title: {
      default: SEO_CONFIG.siteName,
      template: `%s${SEO_CONFIG.separator}${SEO_CONFIG.siteName}`,
    },
    openGraph: {
      siteName: SEO_CONFIG.siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

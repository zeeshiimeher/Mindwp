import type { Metadata } from 'next';

import { getMetadataBase, SITE_NAME } from '@/lib/seo/config';

export const DEFAULT_OG_IMAGE_PATH = '/og-default.png';
export const DEFAULT_OG_IMAGE = {
  url: DEFAULT_OG_IMAGE_PATH,
  width: 1200,
  height: 630,
} as const;

export function buildDefaultRootMetadata(): Metadata {
  return {
    metadataBase: getMetadataBase(),
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    openGraph: {
      siteName: SITE_NAME,
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}

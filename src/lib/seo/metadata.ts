import type { Metadata } from 'next';

import { getMetadataBase, normalizePath, SITE_NAME, toAbsoluteUrl } from '@/lib/seo/config';

export const DEFAULT_OG_IMAGE_PATH = '/og-default.png';
export const DEFAULT_OG_IMAGE = {
  url: DEFAULT_OG_IMAGE_PATH,
  width: 1200,
  height: 630,
} as const;

type MetadataType = 'website' | 'article';

type BuildMetadataInput = {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  type?: MetadataType;
  noindex?: boolean;
  nofollow?: boolean;
};

export function buildMetadata({
  title,
  description,
  keywords,
  path,
  type = 'website',
  noindex = false,
  nofollow = false,
}: BuildMetadataInput): Metadata {
  const normalizedPath = normalizePath(path);
  const normalizedTitle =
    normalizedPath === '/' ? title : title.replace(/\s*\|\s*MindWP\s*$/i, '').trim();

  return {
    metadataBase: getMetadataBase(),
    title: normalizedPath === '/' ? { absolute: normalizedTitle } : normalizedTitle,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      title: normalizedTitle,
      description,
      url: toAbsoluteUrl(normalizedPath),
      type,
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: normalizedTitle,
      description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
    },
  };
}

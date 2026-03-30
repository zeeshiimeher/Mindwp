import type { Metadata } from 'next';

import { getMetadataBase, normalizePath, SITE_NAME, toAbsoluteUrl } from '@/lib/seo/config';

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
    },
    twitter: {
      card: 'summary_large_image',
      title: normalizedTitle,
      description,
    },
    ...(noindex || nofollow
      ? {
          robots: {
            index: !noindex,
            follow: !nofollow,
          },
        }
      : {}),
  };
}

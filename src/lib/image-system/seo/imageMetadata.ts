// ─── Image SEO Metadata Generator ──────────────────────────────────
// Generates alt text, title attributes, and EXIF metadata for images.

import type { ContentDomain } from '../types';

const BRAND_NAME = 'MindWP';

export interface ImageSeoMetadata {
  alt: string;
  title: string;
  description: string;
}

/** Generate SEO-optimized alt, title, and description for a featured image */
export function generateImageSeo(
  postTitle: string,
  summary: string,
  domain: ContentDomain
): ImageSeoMetadata {
  const cleanSummary = summary.replace(/-/g, ' ').trim();
  const alt = cleanSummary ? `${postTitle} — ${cleanSummary}` : `${postTitle} illustration`;

  // Title: {title} | Brand
  const title = `${postTitle} | ${BRAND_NAME}`;

  // Description: short contextual sentence
  const description = cleanSummary
    ? `Featured image for ${postTitle} — ${cleanSummary}`
    : `Featured image for ${postTitle} — a ${domain} page`;

  return { alt, title, description };
}

/** Build EXIF-compatible metadata object for Sharp's withMetadata() */
export function buildExifMetadata(seo: ImageSeoMetadata): {
  exif: { IFD0: Record<string, string> };
} {
  return {
    exif: {
      IFD0: {
        ImageDescription: seo.alt,
        DocumentName: seo.title,
        Artist: 'MindWP',
        Copyright: `© ${new Date().getFullYear()} MindWP`,
      },
    },
  };
}

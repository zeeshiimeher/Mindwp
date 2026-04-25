import { normalizePath } from '@/lib/seo/config';
import { DEFAULT_OG_IMAGE_PATH } from '@/lib/seo/metadata';

type ResolvedMetadataRecord = Record<string, unknown>;

export type ResolvedPageMetadata = {
  title?: string;
  description?: string;
  canonical: string;
  openGraph: {
    title?: string;
    description?: string;
    url: string;
    images: string[];
  };
  robots: {
    index: boolean;
    follow: boolean;
  };
  seo?: ResolvedMetadataRecord;
  hero?: ResolvedMetadataRecord;
  cta?: ResolvedMetadataRecord;
};

function asRecord(value: unknown): ResolvedMetadataRecord | null {
  return value && typeof value === 'object' ? (value as ResolvedMetadataRecord) : null;
}

function readString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : undefined;
}

export function resolveMetadata(
  pageData: unknown,
  fallbackCanonical: string
): ResolvedPageMetadata {
  const source = asRecord(pageData) ?? {};
  const seo = asRecord(source.seo);
  const hero = asRecord(source.hero);
  const templateOverrides = asRecord(source.templateOverrides);
  const cta = asRecord(source.cta) ?? asRecord(templateOverrides?.cta);
  const robots = asRecord(source.robots);
  const openGraph = asRecord(seo?.openGraph);
  const title = readString(seo?.title) ?? readString(source.title);
  const description = readString(seo?.description) ?? readString(source.description);
  const canonicalValue =
    readString(seo?.canonical) ?? readString(source.canonical) ?? readString(source.path);

  if (!title || !description || !canonicalValue) {
    throw new Error('Invalid SEO metadata');
  }

  const canonical = normalizePath(canonicalValue ?? fallbackCanonical);

  return {
    title,
    description,
    canonical,
    openGraph: {
      title: readString(openGraph?.title) ?? title,
      description: readString(openGraph?.description) ?? description,
      url: normalizePath(readString(openGraph?.url) ?? canonical),
      images: [DEFAULT_OG_IMAGE_PATH],
    },
    robots: {
      index:
        typeof robots?.index === 'boolean'
          ? robots.index
          : typeof robots?.noindex === 'boolean'
            ? !robots.noindex
            : true,
      follow:
        typeof robots?.follow === 'boolean'
          ? robots.follow
          : typeof robots?.nofollow === 'boolean'
            ? !robots.nofollow
            : true,
    },
    ...(seo ? { seo } : {}),
    ...(hero ? { hero } : {}),
    ...(cta ? { cta } : {}),
  };
}

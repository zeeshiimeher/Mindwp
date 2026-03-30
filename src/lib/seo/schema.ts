import { buildFaqSchema as buildFaqSchemaFromItems } from '@/lib/schema/buildFaqSchema';
import { SITE_NAME, SITE_ORIGIN, toAbsoluteUrl } from '@/lib/seo/config';

type BreadcrumbItemInput = {
  name: string;
  path: string;
};

type ArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  type?: 'Article' | 'BlogPosting';
  authorName?: string;
};

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
};

type FAQSchemaInput = {
  questions: Array<{ question: string; answer: string }>;
};

type SoftwareApplicationSchemaInput = {
  name: string;
  description: string;
  path: string;
  applicationCategory?: string;
  operatingSystem?: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbItemInput[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function buildArticleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  type = 'Article',
  authorName = SITE_NAME,
}: ArticleSchemaInput) {
  const absoluteUrl = toAbsoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': type,
    headline,
    description,
    url: absoluteUrl,
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl,
    },
  };
}

export function buildServiceSchema({ name, description, path, areaServed }: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: toAbsoluteUrl(path),
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    ...(areaServed ? { areaServed } : {}),
  };
}

export function buildFAQSchema({ questions }: FAQSchemaInput) {
  return buildFaqSchemaFromItems(questions);
}

export function buildSoftwareApplicationSchema({
  name,
  description,
  path,
  applicationCategory = 'BusinessApplication',
  operatingSystem = 'Web Browser',
}: SoftwareApplicationSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: toAbsoluteUrl(path),
    applicationCategory,
    operatingSystem,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
  };
}

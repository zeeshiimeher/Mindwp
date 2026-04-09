import { buildServiceSchema } from '@/lib/seo/schema';

type BuildServiceSeoInput = {
  slug: string;
  title: string;
  description: string;
  schemaName: string;
  schemaDescription: string;
  areaServed?: string;
};

export function getServiceCanonicalPath(slug: string) {
  return `/services/${slug}`;
}

export function buildServiceSeo({
  slug,
  title,
  description,
  schemaName,
  schemaDescription,
  areaServed = 'UK',
}: BuildServiceSeoInput) {
  const canonical = getServiceCanonicalPath(slug);

  return {
    title,
    description,
    canonical,
    schema: {
      service: buildServiceSchema({
        name: schemaName,
        description: schemaDescription,
        path: canonical,
        areaServed,
      }),
    },
  };
}

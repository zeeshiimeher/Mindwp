import { buildSoftwareApplicationSchema } from '@/lib/seo/schema';

type BuildFeatureSeoInput = {
  slug: string;
  title: string;
  description: string;
  schemaName: string;
  schemaDescription: string;
  applicationCategory?: string;
  operatingSystem?: string;
};

export function getFeatureCanonicalPath(slug: string) {
  return `/features/${slug}`;
}

export function buildFeatureSeo({
  slug,
  title,
  description,
  schemaName,
  schemaDescription,
  applicationCategory,
  operatingSystem,
}: BuildFeatureSeoInput) {
  const canonical = getFeatureCanonicalPath(slug);

  return {
    title,
    description,
    canonical,
    schema: {
      primary: buildSoftwareApplicationSchema({
        name: schemaName,
        description: schemaDescription,
        path: canonical,
        applicationCategory,
        operatingSystem,
      }),
    },
  };
}

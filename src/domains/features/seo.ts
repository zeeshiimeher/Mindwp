type BuildFeatureSeoInput = {
  slug: string;
  title: string;
  description: string;
};

export function getFeatureCanonicalPath(slug: string) {
  return `/features/${slug}`;
}

export function buildFeatureSeo({ slug, title, description }: BuildFeatureSeoInput) {
  const canonical = getFeatureCanonicalPath(slug);

  return {
    title,
    description,
    canonical,
  };
}

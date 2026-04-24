type BuildServiceSeoInput = {
  slug: string;
  title: string;
  description: string;
};

export function getServiceCanonicalPath(slug: string) {
  return `/services/${slug}`;
}

export function buildServiceSeo({
  slug,
  title,
  description,
}: BuildServiceSeoInput) {
  const canonical = getServiceCanonicalPath(slug);

  return {
    title,
    description,
    canonical,
  };
}

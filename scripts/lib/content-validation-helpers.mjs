const PAGE_DATA_LOADERS = {
  feature: async slug => {
    const { getFeaturePageDataBySlug } = await import('../../src/domains/features/registry.ts');
    return getFeaturePageDataBySlug(slug) ?? null;
  },
  industry: async path => {
    const { getIndustryDataByPath } = await import('../../src/domains/industries/config.tsx');
    return getIndustryDataByPath(path) ?? null;
  },
  service: async slug => {
    const { getServicePageDataBySlug } = await import('../../src/domains/services/pageData.ts');
    return getServicePageDataBySlug(slug) ?? null;
  },
};

export function hasText(value) {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.some(item => hasText(item));
  }

  return Boolean(value);
}

export function hasActionLabel(action) {
  return hasText(action?.children) || hasText(action?.label) || hasText(action?.text);
}

export function isActionableButton(action) {
  return Boolean(action && (action.href || action.onClick) && hasActionLabel(action));
}

export async function loadPagesByType(pageType) {
  const { getInitializedContentGraph } =
    await import('../../src/domains/init/ensureGraphInitialized.ts');
  const graph = await getInitializedContentGraph();
  const nodes = Object.values(graph)
    .filter(node => {
      if (pageType === 'industry') {
        return node.type === 'industry-category' || node.type === 'industry-detail';
      }

      return node.type === pageType;
    })
    .sort((left, right) => left.path.localeCompare(right.path));

  const values = await Promise.all(
    nodes.map(async node => {
      const loader = PAGE_DATA_LOADERS[pageType];
      const lookupKey = pageType === 'industry' ? node.path : node.slug;
      const data = await loader(lookupKey);

      if (!data) {
        throw new Error(`Missing ${pageType} page data for ${lookupKey}.`);
      }

      return data;
    })
  );

  return values;
}

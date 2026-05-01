import { BLOG_POSTS } from '@/domains/blog/registry';
import { getBlogRenderedSectionTypes } from '@/domains/blog/templates/BlogPostTemplate';
import type { BlogPostData } from '@/domains/blog/types';
import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { getCaseStudyRenderedSectionTypes } from '@/domains/case-studies/templates/CaseStudyTemplate';
import type { CaseStudyData } from '@/domains/case-studies/types';
import { FEATURE_DOMAIN_REGISTRY } from '@/domains/features/registry';
import type { FeaturePageData } from '@/domains/features/types';
import { INDUSTRY_CATALOG } from '@/domains/industries/catalog';
import { INDUSTRY_REGISTRY } from '@/domains/industries/registry';
import type { IndustryPageData } from '@/domains/industries/types';
import { RESOURCE_REGISTRY } from '@/domains/resources/registry';
import { getResourceRenderedSectionTypes } from '@/domains/resources/templates/ResourcePageTemplate';
import type { ResourceData, ResourceSection } from '@/domains/resources/types';
import { SERVICE_DOMAIN_REGISTRY } from '@/domains/services/pageData';
import type { ServicePageData } from '@/domains/services/types';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

import type { ContentGraphNode } from '../content-graph/types';

export type SystemInvariantDomain =
  | 'service'
  | 'feature'
  | 'industry-category'
  | 'industry-detail'
  | 'blog'
  | 'resource'
  | 'case-study';

type SystemEntryData =
  | ServicePageData
  | FeaturePageData
  | IndustryPageData
  | BlogPostData
  | ResourceData
  | CaseStudyData;

export type SystemInvariantEntry = {
  domain: SystemInvariantDomain;
  id: string;
  slug: string;
  title: string;
  canonical: string;
  seo: Record<string, unknown>;
  sections: unknown;
  cta?: unknown;
  data: SystemEntryData;
  imageDomain: string;
};

export type InvariantFinding = {
  code: string;
  message: string;
  domain?: SystemInvariantDomain;
  slug?: string;
};

function createFinding(
  code: string,
  message: string,
  entry?: Pick<SystemInvariantEntry, 'domain' | 'slug'>
): InvariantFinding {
  return {
    code,
    message,
    ...(entry ? { domain: entry.domain, slug: entry.slug } : {}),
  };
}

function createEntry<TData extends SystemEntryData>(
  domain: SystemInvariantDomain,
  id: string,
  data: TData,
  imageDomain: string,
  canonicalFallback: string,
  slugOverride?: string
): SystemInvariantEntry {
  const metadata = resolveMetadata(data, canonicalFallback);
  const source = data as Record<string, unknown>;

  return {
    domain,
    id,
    slug: slugOverride ?? String(source.slug ?? ''),
    title: metadata.title ?? '',
    canonical: metadata.canonical,
    seo: metadata.seo ?? {},
    sections: source.sections,
    cta: source.cta,
    data,
    imageDomain,
  };
}

export function getSystemInvariantEntries(): SystemInvariantEntry[] {
  const services = Object.values(SERVICE_DOMAIN_REGISTRY).map(entry =>
    createEntry('service', entry.id, entry.data, 'services', `/services/${entry.slug}`, entry.slug)
  );

  const features = Object.values(FEATURE_DOMAIN_REGISTRY).map(entry =>
    createEntry('feature', entry.id, entry.data, 'features', `/features/${entry.slug}`, entry.slug)
  );

  const industries = Object.values(INDUSTRY_REGISTRY).map(entry => {
    const industryDomain: 'industry-detail' | 'industry-category' =
      entry.type === 'detail' ? 'industry-detail' : 'industry-category';

    return createEntry(
      industryDomain,
      `${industryDomain}:${entry.slug}`,
      entry,
      'industries',
      entry.type === 'detail'
        ? `/industries/${entry.parentSlug}/${entry.slug}`
        : `/industries/${entry.slug}`,
      entry.slug
    );
  });

  const blogPosts = Object.values(BLOG_POSTS).map(entry =>
    createEntry('blog', `blog:${entry.slug}`, entry, 'blog', `/blog/${entry.slug}`, entry.slug)
  );

  const resources = Object.values(RESOURCE_REGISTRY).map(entry =>
    createEntry(
      'resource',
      `resource:${entry.slug}`,
      entry,
      'resources',
      `/resources/${entry.slug}`,
      entry.slug
    )
  );

  const caseStudies = Object.values(CASE_STUDY_REGISTRY).map(entry =>
    createEntry(
      'case-study',
      `case-study:${entry.slug}`,
      entry,
      'case-studies',
      `/case-studies/${entry.slug}`,
      entry.slug
    )
  );

  return [...services, ...features, ...industries, ...blogPosts, ...resources, ...caseStudies];
}

export function getExpectedCanonical(entry: SystemInvariantEntry) {
  switch (entry.domain) {
    case 'service':
      return `/services/${entry.slug}`;
    case 'feature':
      return `/features/${entry.slug}`;
    case 'blog':
      return `/blog/${entry.slug}`;
    case 'resource':
      return `/resources/${entry.slug}`;
    case 'case-study':
      return `/case-studies/${entry.slug}`;
    case 'industry-category':
      return `/industries/${entry.slug}`;
    case 'industry-detail':
      return `/industries/${(entry.data as IndustryPageData).parentSlug}/${entry.slug}`;
  }
}

export function getAuthoredSectionTypes(entry: SystemInvariantEntry) {
  if (entry.domain === 'blog') {
    return (entry.data as BlogPostData).sections.map(section => section.type);
  }

  if (entry.domain === 'resource') {
    return (entry.data as ResourceData).sections
      .filter(section => section.type !== 'sidebar-cta')
      .map(section => section.type);
  }

  if (entry.domain === 'case-study') {
    return (entry.data as CaseStudyData).sections.map(section => section.type);
  }

  if (
    (entry.domain === 'industry-category' || entry.domain === 'industry-detail') &&
    Array.isArray((entry.data as IndustryPageData).sections)
  ) {
    return ((entry.data as IndustryPageData).sections ?? []).map(section => section.type);
  }

  return [];
}

export function getRenderedSectionTypes(entry: SystemInvariantEntry) {
  if (entry.domain === 'blog') {
    return getBlogRenderedSectionTypes((entry.data as BlogPostData).sections);
  }

  if (entry.domain === 'resource') {
    return getResourceRenderedSectionTypes(
      (entry.data as ResourceData).sections as ResourceSection[]
    );
  }

  if (entry.domain === 'case-study') {
    return getCaseStudyRenderedSectionTypes((entry.data as CaseStudyData).sections);
  }

  if (
    (entry.domain === 'industry-category' || entry.domain === 'industry-detail') &&
    Array.isArray((entry.data as IndustryPageData).sections)
  ) {
    return ((entry.data as IndustryPageData).sections ?? []).map(section => section.type);
  }

  return [];
}

export function collectSystemInvariantFindings(graphNodes: ContentGraphNode[]) {
  const entries = getSystemInvariantEntries();
  const issues: InvariantFinding[] = [];
  const warnings: InvariantFinding[] = [];

  const seenSlugs = new Map<string, SystemInvariantEntry>();
  for (const entry of entries) {
    const slugKey = `${entry.domain}:${entry.slug}`;
    const previous = seenSlugs.get(slugKey);
    if (previous) {
      issues.push(
        createFinding(
          'duplicate_domain_slug',
          `Duplicate slug detected within ${entry.domain}: ${entry.slug}.`
        )
      );
      continue;
    }

    seenSlugs.set(slugKey, entry);
  }

  const seenIds = new Map<string, SystemInvariantEntry>();
  for (const entry of entries) {
    const previous = seenIds.get(entry.id);
    if (previous) {
      issues.push(createFinding('duplicate_id', `Duplicate entry id detected: ${entry.id}.`));
      continue;
    }

    seenIds.set(entry.id, entry);
  }

  const graphIdSet = new Set<string>();
  for (const node of graphNodes) {
    if (graphIdSet.has(node.id)) {
      issues.push(
        createFinding('duplicate_graph_id', `Duplicate graph node id detected: ${node.id}.`)
      );
      continue;
    }

    graphIdSet.add(node.id);
  }

  const crossDomainSlugs = new Map<string, Set<SystemInvariantDomain>>();
  for (const entry of entries) {
    const owners = crossDomainSlugs.get(entry.slug) ?? new Set<SystemInvariantDomain>();
    owners.add(entry.domain);
    crossDomainSlugs.set(entry.slug, owners);
  }

  for (const [slug, owners] of crossDomainSlugs) {
    if (owners.size <= 1) {
      continue;
    }

    warnings.push(
      createFinding(
        'duplicate_slug_cross_domain',
        `Cross-domain duplicate slug ${slug} is allowed only through typed domain lookups (${[...owners].join(', ')}).`
      )
    );
  }

  for (const entry of INDUSTRY_CATALOG) {
    const expectedHref =
      entry.slug === entry.category
        ? `/industries/${entry.slug}`
        : `/industries/${entry.category}/${entry.slug}`;

    if (entry.href !== expectedHref) {
      issues.push(
        createFinding(
          'industry_catalog_href_mismatch',
          `Industry catalog href mismatch for ${entry.slug}. Expected ${expectedHref} but found ${entry.href}.`
        )
      );
    }
  }

  for (const entry of entries) {
    const resolvedMetadata = resolveMetadata(entry.data, getExpectedCanonical(entry));

    if (!entry.slug || !entry.title || !entry.seo) {
      issues.push(
        createFinding(
          'registry_incomplete',
          `${entry.domain}/${entry.slug || entry.id} is missing required registry fields (slug, title, seo).`,
          entry
        )
      );
    }

    if (!resolvedMetadata.title || !resolvedMetadata.description || !resolvedMetadata.canonical) {
      issues.push(
        createFinding(
          'metadata_incomplete',
          `${entry.domain}/${entry.slug} is missing resolved metadata fields (title, description, canonical).`,
          entry
        )
      );
    }

    if (
      (entry.domain === 'blog' || entry.domain === 'resource' || entry.domain === 'case-study') &&
      !getAuthoredSectionTypes(entry).includes('cta')
    ) {
      issues.push(
        createFinding(
          'missing_cta',
          `${entry.domain}/${entry.slug} is missing an authored CTA section.`,
          entry
        )
      );
    }

    if (
      !(
        entry.data &&
        typeof entry.data === 'object' &&
        'slug' in entry.data &&
        'seo' in entry.data &&
        ('sections' in entry.data ||
          entry.domain === 'industry-category' ||
          entry.domain === 'industry-detail')
      )
    ) {
      issues.push(
        createFinding(
          'cross_domain_contract_mismatch',
          `${entry.domain}/${entry.slug} is missing the shared top-level contract (slug, sections, seo).`,
          entry
        )
      );
    }

    const expectedCanonical = getExpectedCanonical(entry);
    if (entry.canonical !== expectedCanonical) {
      issues.push(
        createFinding(
          'canonical_mismatch',
          `${entry.domain}/${entry.slug} canonical must be ${expectedCanonical}.`,
          entry
        )
      );
    }

    const authoredSectionTypes = getAuthoredSectionTypes(entry);
    const renderedSectionTypes = getRenderedSectionTypes(entry);
    if (authoredSectionTypes.length > 0) {
      if (JSON.stringify(authoredSectionTypes) !== JSON.stringify(renderedSectionTypes)) {
        issues.push(
          createFinding(
            'render_order_mismatch',
            `${entry.domain}/${entry.slug} rendered section order does not match authored section order.`,
            entry
          )
        );
      }

      const missingRenderedTypes = authoredSectionTypes.filter(
        (type, index) => renderedSectionTypes[index] !== type
      );
      if (missingRenderedTypes.length > 0) {
        issues.push(
          createFinding(
            'silent_section_drop',
            `${entry.domain}/${entry.slug} contains authored sections that are not rendered: ${missingRenderedTypes.join(', ')}.`,
            entry
          )
        );
      }

      const unexpectedRenderedTypes = renderedSectionTypes.filter(
        (type, index) => authoredSectionTypes[index] !== type
      );
      if (unexpectedRenderedTypes.length > 0) {
        issues.push(
          createFinding(
            'unexpected_rendered_sections',
            `${entry.domain}/${entry.slug} renders unexpected section types or injected sections: ${unexpectedRenderedTypes.join(', ')}.`,
            entry
          )
        );
      }
    }

    const graphNode = graphNodes.find(node => node.id === entry.id);
    if (!graphNode) {
      issues.push(
        createFinding(
          'missing_graph_node',
          `${entry.domain}/${entry.slug} has no graph node.`,
          entry
        )
      );
      continue;
    }

    if (graphNode.slug !== entry.slug) {
      issues.push(
        createFinding(
          'graph_slug_mismatch',
          `${entry.domain}/${entry.slug} graph node slug does not match registry slug.`,
          entry
        )
      );
    }

    if (graphNode.path !== entry.canonical) {
      issues.push(
        createFinding(
          'graph_path_mismatch',
          `${entry.domain}/${entry.slug} graph path does not match canonical path.`,
          entry
        )
      );
    }
  }

  const entryIds = new Set(entries.map(entry => entry.id));
  for (const node of graphNodes) {
    if (!entryIds.has(node.id)) {
      issues.push(
        createFinding('orphan_graph_node', `Graph node ${node.id} has no matching registry entry.`)
      );
    }
  }

  return { entries, issues, warnings };
}

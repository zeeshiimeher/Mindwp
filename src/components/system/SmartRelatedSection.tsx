'use client';

import { useEffect, useId, useState } from 'react';

import { usePageIdentity, useRelatedContentRegistry } from '@/components/system/PageEnforcement';
import RelatedContentSection from '@/components/system/RelatedContentSection';
import { SECTION_BEHAVIOR } from '@/config/section-intelligence';
import type { ContentNodeType } from '@/lib/graph/query';
import type { PageType } from '@/lib/page/pageIdentity';
import { buildRelatedContent } from '@/lib/related/buildRelatedContent';
import {
  registerRelatedContentZone,
  unregisterRelatedContentZone,
} from '@/lib/related/relatedRegistry';

interface SmartRelatedSectionProps {
  pageId?: string;
  pageType?: PageType;
  slug?: string;
  nodeType?: ContentNodeType;
  categorySlug?: string;
  systems?: string[];
  industries?: string[];
  includeCaseStudies?: boolean;
  includeServices?: boolean;
  items?: unknown;
  groups?: unknown;
  manualContent?: unknown;
  manualItems?: unknown;
  manualList?: unknown;
  /** Section type — controls behavior via section-intelligence rules */
  sectionType?: string;
}

export function SmartRelatedSection({
  pageId,
  pageType,
  slug,
  nodeType,
  categorySlug: _categorySlug,
  systems: _systems,
  industries: _industries,
  includeCaseStudies: _includeCaseStudies,
  includeServices: _includeServices,
  items: _items,
  groups: _groups,
  manualContent: _manualContent,
  manualItems: _manualItems,
  manualList: _manualList,
  sectionType,
}: SmartRelatedSectionProps) {
  const identity = usePageIdentity();
  const registry = useRelatedContentRegistry();
  const zoneId = useId();
  const [registrationError, setRegistrationError] = useState<Error | null>(null);
  const behavior = sectionType ? SECTION_BEHAVIOR[sectionType] : undefined;

  const resolvedPageId = pageId ?? identity?.pageId;
  const resolvedPageType = pageType ?? identity?.pageType;

  useEffect(() => {
    if (!registry || !resolvedPageId || behavior?.allowLinks === false) {
      return;
    }

    try {
      registerRelatedContentZone(registry, resolvedPageId, zoneId);
      setRegistrationError(null);
    } catch (error) {
      setRegistrationError(
        error instanceof Error ? error : new Error('Related content registration failed.')
      );
    }

    return () => {
      unregisterRelatedContentZone(registry, resolvedPageId, zoneId);
    };
  }, [behavior?.allowLinks, registry, resolvedPageId, zoneId]);

  if (behavior && !behavior.allowLinks) {
    return null;
  }

  if (!resolvedPageId || !resolvedPageType) {
    throw new Error(
      'SmartRelatedSection requires page identity from props or CTARegistryProvider.'
    );
  }

  if (!registry) {
    throw new Error('SmartRelatedSection requires CTARegistryProvider at the template level.');
  }

  if (registrationError) {
    throw registrationError;
  }

  const content = buildRelatedContent({
    pageId: resolvedPageId,
    pageType: resolvedPageType,
    slug,
    nodeType,
  });

  return <RelatedContentSection content={content} />;
}

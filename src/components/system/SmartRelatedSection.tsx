"use client";

import { useEffect, useId, useState } from 'react';

import RelatedContentSection from '@/components/system/RelatedContentSection';
import { usePageIdentity, useRelatedContentRegistry } from '@/components/system/PageEnforcement';
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
  /** Section type — controls behavior via section-intelligence rules */
  sectionType?: string;
}

export function SmartRelatedSection({
  pageId,
  pageType,
  slug,
  nodeType,
  categorySlug,
  systems,
  industries,
  includeCaseStudies,
  includeServices,
  sectionType,
}: SmartRelatedSectionProps) {
  const identity = usePageIdentity();
  const registry = useRelatedContentRegistry();
  const zoneId = useId();
  const [registrationError, setRegistrationError] = useState<Error | null>(null);
  const behavior = sectionType ? SECTION_BEHAVIOR[sectionType] : undefined;

  if (behavior && !behavior.allowLinks) return null;

  const resolvedPageId = pageId ?? identity?.pageId;
  const resolvedPageType = pageType ?? identity?.pageType;

  if (!resolvedPageId || !resolvedPageType) {
    throw new Error(
      'SmartRelatedSection requires page identity from props or CTARegistryProvider.'
    );
  }

  if (!registry) {
    throw new Error('SmartRelatedSection requires CTARegistryProvider at the template level.');
  }

  useEffect(() => {
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
  }, [registry, resolvedPageId, zoneId]);

  if (registrationError) {
    throw registrationError;
  }

  const content = buildRelatedContent({
    pageId: resolvedPageId,
    pageType: resolvedPageType,
    slug,
    nodeType,
    categorySlug,
    systems,
    industries,
    includeCaseStudies,
    includeServices,
  });

  return <RelatedContentSection content={content} />;
}

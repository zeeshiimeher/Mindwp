'use client';

import { useEffect, useId } from 'react';

import RelatedContentSection from '@/components/system/RelatedContentSection';
import { SECTION_BEHAVIOR } from '@/config/section-intelligence';
import type { PageType } from '@/lib/page/pageIdentity';
import type { RelatedContentOutput } from '@/lib/related/buildRelatedContent';
import {
  registerRelatedContentZone,
  unregisterRelatedContentZone,
} from '@/lib/related/relatedRegistry';

import { reportPageEnforcementError, useRelatedContentRegistry } from './PageEnforcement';

interface SmartRelatedSectionClientProps {
  pageId: string;
  pageType: PageType;
  content: RelatedContentOutput;
  sectionType?: string;
}

export function SmartRelatedSectionClient({
  pageId,
  pageType: _pageType,
  content,
  sectionType,
}: SmartRelatedSectionClientProps) {
  const registry = useRelatedContentRegistry();
  const zoneId = useId();
  const behavior = sectionType ? SECTION_BEHAVIOR[sectionType] : undefined;

  if (!registry) {
    throw new Error('SmartRelatedSection requires CTARegistryProvider at the template level.');
  }

  useEffect(() => {
    if (behavior?.allowLinks === false) {
      return;
    }

    try {
      registerRelatedContentZone(registry, pageId, zoneId);
    } catch (error) {
      reportPageEnforcementError(
        error instanceof Error ? error : new Error('Related content registration failed.')
      );
      return;
    }

    return () => {
      unregisterRelatedContentZone(registry, pageId, zoneId);
    };
  }, [behavior?.allowLinks, pageId, registry, zoneId]);

  if (behavior && !behavior.allowLinks) {
    return null;
  }

  return <RelatedContentSection content={content} />;
}

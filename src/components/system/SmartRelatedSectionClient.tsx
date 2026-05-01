'use client';

import { useEffect, useId } from 'react';

import { RelatedContentSection } from '@/components/sections/RelatedContentSection';
import { SECTION_BEHAVIOR } from '@/config/section-intelligence';
import { RELATED_CONTENT_CTA_LABEL } from '@/domains/shared/systemUiContent';
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

  if (behavior?.allowLinks === false) {
    throw new Error('[SmartRelatedSectionClient] Invalid data');
  }

  useEffect(() => {
    try {
      registerRelatedContentZone(registry, pageId, zoneId);
    } catch (error) {
      reportPageEnforcementError(
        error instanceof Error ? error : new Error('Related content registration failed.')
      );
    }

    return () => {
      unregisterRelatedContentZone(registry, pageId, zoneId);
    };
  }, [pageId, registry, zoneId]);

  if (content.groups.length === 0) {
    throw new Error('[SmartRelatedSectionClient] Invalid data');
  }

  const items = content.groups.flatMap((group, groupIndex) =>
    group.items.map((item, itemIndex) => ({
      id: `${groupIndex}-${itemIndex}-${item.href}`,
      step: group.label,
      title: item.title,
      description: item.description,
      cta: RELATED_CONTENT_CTA_LABEL,
      href: item.href,
    }))
  );

  const firstGroup = content.groups[0];
  if (!firstGroup) {
    throw new Error('[SmartRelatedSectionClient] Invalid data');
  }

  const heading = {
    title: firstGroup.label,
    description: firstGroup.description,
  };

  return <RelatedContentSection heading={heading} items={items} />;
}

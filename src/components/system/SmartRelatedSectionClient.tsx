'use client';

import { useEffect, useId, useState } from 'react';

import RelatedContentSection from '@/components/system/RelatedContentSection';
import { SECTION_BEHAVIOR } from '@/config/section-intelligence';
import type { PageType } from '@/lib/page/pageIdentity';
import type { RelatedContentOutput } from '@/lib/related/buildRelatedContent';
import {
  registerRelatedContentZone,
  unregisterRelatedContentZone,
} from '@/lib/related/relatedRegistry';

import { useRelatedContentRegistry } from './PageEnforcement';

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
  const [registrationError, setRegistrationError] = useState<Error | null>(null);
  const behavior = sectionType ? SECTION_BEHAVIOR[sectionType] : undefined;

  useEffect(() => {
    if (!registry || behavior?.allowLinks === false) {
      return;
    }

    try {
      registerRelatedContentZone(registry, pageId, zoneId);
      setRegistrationError(null);
    } catch (error) {
      setRegistrationError(
        error instanceof Error ? error : new Error('Related content registration failed.')
      );
    }

    return () => {
      unregisterRelatedContentZone(registry, pageId, zoneId);
    };
  }, [behavior?.allowLinks, pageId, registry, zoneId]);

  if (behavior && !behavior.allowLinks) {
    return null;
  }

  if (!registry) {
    throw new Error('SmartRelatedSection requires CTARegistryProvider at the template level.');
  }

  if (registrationError) {
    throw registrationError;
  }

  return <RelatedContentSection content={content} />;
}

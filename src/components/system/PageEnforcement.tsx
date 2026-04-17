'use client';

import { createContext, useContext, type ReactNode } from 'react';

import { createCTARegistry, type CTARegistry } from '@/lib/cta/ctaRegistry';
import type { PageIdentity, PageType } from '@/lib/page/pageIdentity';
import {
  createRelatedContentRegistry,
  type RelatedContentRegistry,
} from '@/lib/related/relatedRegistry';

const PageIdentityContext = createContext<PageIdentity | undefined>(undefined);
const CTARegistryContext = createContext<CTARegistry | undefined>(undefined);
const RelatedContentRegistryContext = createContext<RelatedContentRegistry | undefined>(undefined);

type CTARegistryProviderProps = {
  pageId: string;
  pageType: PageType;
  children: ReactNode;
};

export function CTARegistryProvider({ pageId, pageType, children }: CTARegistryProviderProps) {
  const pageIdentity: PageIdentity = {
    pageId,
    pageType,
  };
  const ctaRegistry = createCTARegistry(pageIdentity);
  const relatedRegistry = createRelatedContentRegistry(pageIdentity);

  return (
    <PageIdentityContext.Provider value={pageIdentity}>
      <CTARegistryContext.Provider value={ctaRegistry}>
        <RelatedContentRegistryContext.Provider value={relatedRegistry}>
          {children}
        </RelatedContentRegistryContext.Provider>
      </CTARegistryContext.Provider>
    </PageIdentityContext.Provider>
  );
}

export function usePageIdentity() {
  return useContext(PageIdentityContext);
}

export function useCTARegistry() {
  return useContext(CTARegistryContext);
}

export function useRelatedContentRegistry() {
  return useContext(RelatedContentRegistryContext);
}

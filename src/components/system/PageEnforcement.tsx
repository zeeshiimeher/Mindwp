'use client';

import { createContext, type ReactNode, useContext, useMemo } from 'react';

import { createCTARegistry, type CTARegistry, getCTARegistrySnapshot } from '@/lib/cta/ctaRegistry';
import type { PageIdentity, PageType } from '@/lib/page/pageIdentity';
import {
  createRelatedContentRegistry,
  type RelatedContentRegistry,
} from '@/lib/related/relatedRegistry';

const PageIdentityContext = createContext<PageIdentity | undefined>(undefined);
const CTARegistryContext = createContext<CTARegistry | undefined>(undefined);
const RelatedContentRegistryContext = createContext<RelatedContentRegistry | undefined>(undefined);

const PAGE_ENFORCEMENT_STATE = new Map<string, RegisteredPageEnforcement>();

type RegisteredPageEnforcement = {
  pageIdentity: PageIdentity;
  ctaRegistry: CTARegistry;
  relatedRegistry: RelatedContentRegistry;
};

export type PageEnforcementSnapshot = {
  pageIdentity: PageIdentity;
  cta: ReturnType<typeof getCTARegistrySnapshot>;
  relatedZoneCount: number;
};

export function reportPageEnforcementError(error: Error) {
  throw error;
}

function registerPageEnforcementState(state: RegisteredPageEnforcement) {
  PAGE_ENFORCEMENT_STATE.set(state.pageIdentity.pageId, state);
}

export function resetPageEnforcementSnapshots() {
  PAGE_ENFORCEMENT_STATE.clear();
}

export function getPageEnforcementSnapshots(): PageEnforcementSnapshot[] {
  return Array.from(PAGE_ENFORCEMENT_STATE.values()).map(state => ({
    pageIdentity: state.pageIdentity,
    cta: getCTARegistrySnapshot(state.ctaRegistry),
    relatedZoneCount: state.relatedRegistry.zoneIds.size,
  }));
}

type CTARegistryProviderProps = {
  pageId: string;
  pageType: PageType;
  primarySystem: string;
  children: ReactNode;
};

export function CTARegistryProvider({
  pageId,
  pageType,
  primarySystem,
  children,
}: CTARegistryProviderProps) {
  const pageIdentity = useMemo<PageIdentity>(
    () => ({
      pageId,
      pageType,
      primarySystem,
    }),
    [pageId, pageType, primarySystem]
  );
  const ctaRegistry = useMemo(() => createCTARegistry(pageIdentity), [pageIdentity]);
  const relatedRegistry = useMemo(() => createRelatedContentRegistry(pageIdentity), [pageIdentity]);

  registerPageEnforcementState({
    pageIdentity,
    ctaRegistry,
    relatedRegistry,
  });

  const registeredState = PAGE_ENFORCEMENT_STATE.get(pageIdentity.pageId);
  if (registeredState) {
    registeredState.pageIdentity = pageIdentity;
    registeredState.ctaRegistry = ctaRegistry;
    registeredState.relatedRegistry = relatedRegistry;
  }

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

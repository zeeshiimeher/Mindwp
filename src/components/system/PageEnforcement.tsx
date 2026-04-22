'use client';

import { createContext, type ReactNode, useContext, useMemo } from 'react';

import { createCTARegistry, type CTARegistry, getCTARegistrySnapshot } from '@/lib/cta/ctaRegistry';
import { enforceInlineLinkUsage } from '@/lib/page/inlineLinkEnforcement';
import type { PageIdentity, PageType } from '@/lib/page/pageIdentity';
import {
  createRelatedContentRegistry,
  type RelatedContentRegistry,
} from '@/lib/related/relatedRegistry';

const PageIdentityContext = createContext<PageIdentity | undefined>(undefined);
const CTARegistryContext = createContext<CTARegistry | undefined>(undefined);
const RelatedContentRegistryContext = createContext<RelatedContentRegistry | undefined>(undefined);
const PageEnforcementContext = createContext<PageEnforcement | undefined>(undefined);

const PAGE_ENFORCEMENT_STATE = new Map<string, RegisteredPageEnforcement>();

type RegisteredPageEnforcement = {
  pageIdentity: PageIdentity;
  ctaRegistry: CTARegistry;
  relatedRegistry: RelatedContentRegistry;
  inlineLinkPageTypes: Set<PageType>;
};

export type PageEnforcementSnapshot = {
  pageIdentity: PageIdentity;
  cta: ReturnType<typeof getCTARegistrySnapshot>;
  relatedZoneCount: number;
  inlineLinkPageTypes: PageType[];
};

export type PageEnforcement = {
  pageIdentity: PageIdentity;
  registerInlineLinkUsage: (sourcePageType: PageType) => void;
};

function isDevelopment() {
  return process.env.NODE_ENV !== 'production';
}

export function reportPageEnforcementError(error: Error) {
  if (isDevelopment()) {
    throw error;
  }

  globalThis.reportError?.(error);
}

function createPageEnforcement(
  pageIdentity: PageIdentity,
  inlineLinkPageTypes: Set<PageType>
): PageEnforcement {
  return {
    pageIdentity,
    registerInlineLinkUsage(sourcePageType) {
      enforceInlineLinkUsage(pageIdentity, sourcePageType);

      inlineLinkPageTypes.add(sourcePageType);
    },
  };
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
    inlineLinkPageTypes: Array.from(state.inlineLinkPageTypes.values()),
  }));
}

type CTARegistryProviderProps = {
  pageId: string;
  pageType: PageType;
  children: ReactNode;
};

export function CTARegistryProvider({ pageId, pageType, children }: CTARegistryProviderProps) {
  const pageIdentity = useMemo<PageIdentity>(
    () => ({
      pageId,
      pageType,
    }),
    [pageId, pageType]
  );
  const ctaRegistry = useMemo(() => createCTARegistry(pageIdentity), [pageIdentity]);
  const relatedRegistry = useMemo(() => createRelatedContentRegistry(pageIdentity), [pageIdentity]);
  const inlineLinkPageTypes = useMemo(() => new Set<PageType>(), []);
  const pageEnforcement = useMemo(
    () => createPageEnforcement(pageIdentity, inlineLinkPageTypes),
    [inlineLinkPageTypes, pageIdentity]
  );

  registerPageEnforcementState({
    pageIdentity,
    ctaRegistry,
    relatedRegistry,
    inlineLinkPageTypes,
  });

  const registeredState = PAGE_ENFORCEMENT_STATE.get(pageIdentity.pageId);
  if (registeredState) {
    registeredState.pageIdentity = pageIdentity;
    registeredState.ctaRegistry = ctaRegistry;
    registeredState.relatedRegistry = relatedRegistry;
  }

  return (
    <PageIdentityContext.Provider value={pageIdentity}>
      <PageEnforcementContext.Provider value={pageEnforcement}>
        <CTARegistryContext.Provider value={ctaRegistry}>
          <RelatedContentRegistryContext.Provider value={relatedRegistry}>
            {children}
          </RelatedContentRegistryContext.Provider>
        </CTARegistryContext.Provider>
      </PageEnforcementContext.Provider>
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

export function usePageEnforcement() {
  return useContext(PageEnforcementContext);
}

export function useInlineLinkEnforcement(
  sourcePageType: PageType,
  pageIdentityOverride?: PageIdentity
) {
  const enforcement = usePageEnforcement();

  if (enforcement) {
    enforcement.registerInlineLinkUsage(sourcePageType);
    return;
  }

  if (!pageIdentityOverride) {
    throw new Error('Inline link enforcement requires page identity or CTARegistryProvider.');
  }

  try {
    enforceInlineLinkUsage(pageIdentityOverride, sourcePageType);
  } catch (error) {
    reportPageEnforcementError(
      error instanceof Error ? error : new Error('Inline link enforcement failed.')
    );
  }
}

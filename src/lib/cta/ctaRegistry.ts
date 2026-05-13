import {
  type CTAIntent,
  type CTAPosition,
  type PageIdentity,
  type PageType,
} from '@/lib/page/pageIdentity';

export type CTARegistration = PageIdentity & {
  instanceId: string;
  intent: CTAIntent;
  position: CTAPosition;
};

export type CTARegistry = {
  pageId: string;
  pageType: PageType;
  entries: Map<string, CTARegistration>;
  countsByIntent: Record<CTAIntent, number>;
  countsByPosition: Record<CTAPosition, number>;
};

type CTARegistrySnapshot = Pick<CTARegistry, 'countsByIntent' | 'countsByPosition'> & {
  totalPanels: number;
  entries: CTARegistration[];
};

function createIntentCounts(): Record<CTAIntent, number> {
  return {
    entry: 0,
    diagnostic: 0,
    comparison: 0,
    conversion: 0,
  };
}

function createPositionCounts(): Record<CTAPosition, number> {
  return {
    hero: 0,
    'pre-mid': 0,
    mid: 0,
    sidebar: 0,
    footer: 0,
  };
}

export function createCTARegistry(pageIdentity: PageIdentity): CTARegistry {
  return {
    pageId: pageIdentity.pageId,
    pageType: pageIdentity.pageType,
    entries: new Map(),
    countsByIntent: createIntentCounts(),
    countsByPosition: createPositionCounts(),
  };
}

function syncRegistryCounts(registry: CTARegistry) {
  const intentCounts = createIntentCounts();
  const positionCounts = createPositionCounts();

  for (const entry of registry.entries.values()) {
    intentCounts[entry.intent] += 1;
    positionCounts[entry.position] += 1;
  }

  registry.countsByIntent = intentCounts;
  registry.countsByPosition = positionCounts;
}

export function getCTARegistrySnapshot(registry: CTARegistry): CTARegistrySnapshot {
  return {
    countsByIntent: registry.countsByIntent,
    countsByPosition: registry.countsByPosition,
    totalPanels: registry.entries.size,
    entries: Array.from(registry.entries.values()),
  };
}

export function registerCTA(registry: CTARegistry, registration: CTARegistration) {
  registry.entries.set(registration.instanceId, registration);
  syncRegistryCounts(registry);
}

export function unregisterCTA(registry: CTARegistry, instanceId: string) {
  registry.entries.delete(instanceId);
  syncRegistryCounts(registry);
}

export function reportCTAError(error: Error) {
  globalThis.reportError?.(error);
}

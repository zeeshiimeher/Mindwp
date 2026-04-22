import { CTA_RULES_BY_PAGE_TYPE } from '@/config/section-intelligence';
import {
  type CTAIntent,
  type CTAPosition,
  isHomepage,
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

function isDevelopment() {
  return process.env.NODE_ENV !== 'production';
}

function formatCTAError(message: string, registration: CTARegistration) {
  return `${message} (pageId="${registration.pageId}", pageType="${registration.pageType}", intent="${registration.intent}", position="${registration.position}")`;
}

function assertCTA(condition: boolean, message: string, registration: CTARegistration) {
  if (condition) {
    return;
  }

  throw new Error(formatCTAError(message, registration));
}

function isInlinePosition(position: CTAPosition) {
  return position === 'pre-mid' || position === 'mid' || position === 'sidebar';
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

function validateCTAPlacement(registration: CTARegistration) {
  const { intent, position, pageType, pageId } = registration;
  const homepage = isHomepage(pageId);

  assertCTA(
    !(intent === 'conversion' && isInlinePosition(position)),
    'Inline CTA cannot use conversion intent',
    registration
  );

  if (homepage) {
    return;
  }

  const pageRule = CTA_RULES_BY_PAGE_TYPE[pageType];

  assertCTA(
    pageRule.allowedPositions.includes(position),
    'CTA position is not allowed for this page type',
    registration
  );

  if (intent === 'conversion') {
    assertCTA(
      pageRule.allowedConversionPositions.includes(position),
      'Conversion CTA position is not allowed for this page type',
      registration
    );
    return;
  }

  assertCTA(
    pageRule.allowedNonConversionIntents.includes(intent),
    'CTA intent is not allowed for this page type',
    registration
  );
}

export function registerCTA(registry: CTARegistry, registration: CTARegistration) {
  assertCTA(
    registry.pageId === registration.pageId && registry.pageType === registration.pageType,
    'CTA registry mismatch for page identity',
    registration
  );

  validateCTAPlacement(registration);

  const activeEntries = Array.from(registry.entries.values()).filter(
    entry => entry.instanceId !== registration.instanceId
  );
  const nextConversionCount =
    activeEntries.filter(entry => entry.intent === 'conversion').length +
    (registration.intent === 'conversion' ? 1 : 0);

  if (registration.intent === 'conversion') {
    assertCTA(nextConversionCount <= 1, 'Duplicate conversion CTA detected', registration);
  } else if (!isHomepage(registration.pageId)) {
    const duplicateIntent = activeEntries.find(entry => entry.intent === registration.intent);
    assertCTA(!duplicateIntent, 'Duplicate CTA intent detected', registration);
  }

  if (!isHomepage(registration.pageId)) {
    const pageRule = CTA_RULES_BY_PAGE_TYPE[registration.pageType];
    assertCTA(
      activeEntries.length < pageRule.maxPanels,
      'CTA panel count exceeds page limit',
      registration
    );
  }

  registry.entries.set(registration.instanceId, registration);
  syncRegistryCounts(registry);
}

export function unregisterCTA(registry: CTARegistry, instanceId: string) {
  registry.entries.delete(instanceId);
  syncRegistryCounts(registry);
}

export function reportCTAError(error: Error) {
  if (isDevelopment()) {
    throw error;
  }

  globalThis.reportError?.(error);
}

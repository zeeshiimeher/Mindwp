import {
  type CTAIntent,
  type CTAPosition,
  type PageIdentity,
  isHomepage,
} from '@/lib/page/pageIdentity';

export type CTARegistration = PageIdentity & {
  instanceId: string;
  intent: CTAIntent;
  position: CTAPosition;
};

export type CTARegistry = {
  pageId: string;
  entries: Map<string, CTARegistration>;
};

export function createCTARegistry(pageIdentity: PageIdentity): CTARegistry {
  return {
    pageId: pageIdentity.pageId,
    entries: new Map(),
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

function validateCTAPlacement(registration: CTARegistration) {
  const { intent, position, pageType, pageId } = registration;
  const homepage = isHomepage(pageId);

  if (intent === 'conversion') {
    assertCTA(position === 'footer', 'Conversion CTA must render at footer', registration);
    return;
  }

  if (position === 'footer') {
    assertCTA(false, 'Footer CTA must use conversion intent', registration);
  }

  if (position === 'sidebar') {
    return;
  }

  assertCTA(
    position === 'hero' || position === 'pre-mid' || position === 'mid',
    'Inline CTA must render before or at mid-page',
    registration
  );

  if (!homepage && pageType === 'service' && position === 'hero') {
    return;
  }
}

export function registerCTA(registry: CTARegistry, registration: CTARegistration) {
  validateCTAPlacement(registration);

  const activeEntries = Array.from(registry.entries.values()).filter(
    entry => entry.instanceId !== registration.instanceId
  );

  if (registration.intent === 'conversion') {
    const existingConversion = activeEntries.find(entry => entry.intent === 'conversion');
    assertCTA(!existingConversion, 'Duplicate conversion CTA detected', registration);
  } else if (!isHomepage(registration.pageId)) {
    const duplicateIntent = activeEntries.find(entry => entry.intent === registration.intent);
    assertCTA(!duplicateIntent, 'Duplicate CTA intent detected', registration);
  }

  registry.entries.set(registration.instanceId, registration);
}

export function unregisterCTA(registry: CTARegistry, instanceId: string) {
  registry.entries.delete(instanceId);
}

export function reportCTAError(error: Error) {
  if (isDevelopment()) {
    throw error;
  }

  console.error(error);
}
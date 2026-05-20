import type { ActiveSystem } from '@/lib/content-graph/canonical';

import type { FeaturePageData } from './types';

export type FeatureOwnership = {
  primarySystem: ActiveSystem;
  supportingSystems?: readonly ActiveSystem[];
  publicMeaning: string;
  avoid: string;
};

export const FEATURE_OWNERSHIP = {
  inbox: {
    primarySystem: 'lead-response-handling',
    publicMeaning: 'enquiry and message visibility inside the handling path',
    avoid: 'SaaS inbox product positioning',
  },
  'voice-calls': {
    primarySystem: 'lead-response-handling',
    publicMeaning: 'calls, missed calls, and the first response path',
    avoid: 'AI receptionist or call-center product positioning',
  },
  calendars: {
    primarySystem: 'follow-up-crm',
    publicMeaning: 'booking, appointment, and next-step visibility',
    avoid: 'scheduling software positioning',
  },
  reputation: {
    primarySystem: 'reputation-review-systems',
    publicMeaning: 'reviews, proof, and feedback visibility',
    avoid: 'reputation software or review manipulation positioning',
  },
  crm: {
    primarySystem: 'follow-up-crm',
    publicMeaning: 'owner, status, and next-step visibility',
    avoid: 'CRM platform setup positioning',
  },
  'handling-paths': {
    primarySystem: 'follow-up-crm',
    supportingSystems: ['lead-response-handling'],
    publicMeaning: 'handling paths and follow-up paths after enquiries arrive',
    avoid: 'automation workflow product positioning',
  },
  'website-chat': {
    primarySystem: 'lead-response-handling',
    publicMeaning: 'website chat and contact response path',
    avoid: 'AI chatbot as the offer',
  },
} as const satisfies Record<string, FeatureOwnership>;

export type CanonicalFeatureSlug = keyof typeof FEATURE_OWNERSHIP;

function sameSystems(left: readonly ActiveSystem[] = [], right: readonly ActiveSystem[] = []) {
  return [...left].sort().join('|') === [...right].sort().join('|');
}

export function assertFeatureOwnership(data: FeaturePageData) {
  const ownership = FEATURE_OWNERSHIP[data.slug as CanonicalFeatureSlug];

  if (!ownership) {
    throw new Error(`Feature "${data.slug}" is missing active-system ownership.`);
  }

  if (data.primarySystem !== ownership.primarySystem) {
    throw new Error(
      `Feature "${data.slug}" must belong to ${ownership.primarySystem}, not ${data.primarySystem}.`
    );
  }

  const expectedSupportingSystems =
    'supportingSystems' in ownership ? ownership.supportingSystems : undefined;

  if (!sameSystems(data.supportingSystems, expectedSupportingSystems)) {
    throw new Error(`Feature "${data.slug}" supportingSystems do not match ownership rules.`);
  }
}

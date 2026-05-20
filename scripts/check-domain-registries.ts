#!/usr/bin/env tsx
/* eslint-disable no-console */

import fs from 'node:fs';
import path from 'node:path';

import { CASE_STUDY_REGISTRY } from '../src/domains/case-studies/registry';
import { FEATURE_OWNERSHIP } from '../src/domains/features/ownership';
import { FEATURE_DOMAIN_REGISTRY } from '../src/domains/features/pageData';
import { INDUSTRY_REGISTRY } from '../src/domains/industries/registry';
import { SERVICE_DOMAIN_REGISTRY } from '../src/domains/services/pageData';

type RegistryEntry = {
  slug?: unknown;
  data?: unknown;
  renderer?: unknown;
};

type PageData = {
  slug?: unknown;
  seo?: {
    title?: unknown;
    description?: unknown;
    canonical?: unknown;
  };
  primarySystem?: unknown;
  supportingSystems?: unknown;
  topics?: unknown;
  hero?: {
    title?: unknown;
    description?: unknown;
  };
};

type Failure = {
  registry: string;
  key: string;
  message: string;
};

const failures: Failure[] = [];

const expectedPrimaryServiceSlugs = [
  'smart-website-systems',
  'local-seo-authority',
  'lead-response-handling',
  'follow-up-crm',
  'reputation-review-systems',
] as const;

const expectedImplementationServiceSlugs = [
  'implementation/wordpress-development',
  'implementation/elementor',
  'implementation/bricks-builder',
  'implementation/divi5',
  'implementation/woocommerce',
  'implementation/website-redesign-system-rebuild',
] as const;

const expectedFeatureSlugs = [
  'inbox',
  'voice-calls',
  'calendars',
  'reputation',
  'crm',
  'handling-paths',
  'website-chat',
] as const;

const forbiddenPublicRoutePaths = [
  'src/app/systems',
  'src/app/topics',
  'src/app/blog/topic',
  'src/app/portfolio',
] as const;

const forbiddenOldFeaturePaths = [
  'src/domains/features/data/aichat.ts',
  'src/domains/features/data/workflows.ts',
  'src/domains/features/renderers/AIChatRenderer.tsx',
  'src/domains/features/renderers/WorkflowsRenderer.tsx',
  'src/domains/features/pages/aichat',
  'src/domains/features/pages/workflows',
] as const;

const expectedIndustrySlugs = [
  'home-services',
  'healthcare-practices',
  'home-services/hvac-companies',
  'home-services/plumbing-companies',
  'home-services/roofing-companies',
  'home-services/foundation-repair-companies',
  'home-services/septic-services-companies',
  'home-services/tree-service-companies',
  'healthcare-practices/dental-implant-clinics',
  'healthcare-practices/orthodontic-clinics',
  'healthcare-practices/oral-surgery-clinics',
  'healthcare-practices/dermatology-clinics',
  'healthcare-practices/ent-sinus-clinics',
  'healthcare-practices/podiatry-clinics',
  'healthcare-practices/hearing-aid-clinics',
  'healthcare-practices/physiotherapy-clinics',
  'healthcare-practices/optometry-clinics',
  'healthcare-practices/orthopedic-clinics',
] as const;

const expectedCaseStudySlugs = [
  'hvac-seasonal-enquiry-follow-up',
  'plumbing-website-to-response-path',
  'roofing-quote-follow-up',
  'foundation-repair-consultation-path',
  'septic-service-reminder-and-repeat-booking',
  'dental-implant-consultation-follow-up',
  'orthodontic-treatment-enquiry-path',
  'dermatology-booking-and-trust-path',
  'ent-sinus-consultation-request-path',
  'hearing-aid-clinic-follow-up-and-reviews',
] as const;

const forbiddenServiceSlugs = new Set([
  'ai-lead-handling',
  'crm-automation',
  'revenue-growth',
  'growth-revenue-systems',
  'conversion-layer',
  'lead-reactivation-system',
  'missed-call-recovery-system',
  'unified-communication-system',
  'system-migration-platform-consolidation',
  'conversion-funnel-system-vs-landing-page-development',
  'service-pages-vs-one-generic-services-page',
  'website-crm-integration-vs-manual-lead-handling',
]);

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function addFailure(registry: string, key: string, message: string) {
  failures.push({ registry, key, message });
}

function existsFromRoot(relativePath: string) {
  return fs.existsSync(path.join(process.cwd(), relativePath));
}

function checkExactKeys(registryName: string, actualKeys: string[], expectedKeys: readonly string[]) {
  for (const expectedKey of expectedKeys) {
    if (!actualKeys.includes(expectedKey)) {
      addFailure(registryName, expectedKey, 'expected approved slug is missing');
    }
  }

  for (const key of actualKeys) {
    if (!expectedKeys.includes(key)) {
      addFailure(registryName, key, 'slug is not part of the approved active inventory');
    }
  }
}

function checkRegistry(registryName: string, registry: Record<string, RegistryEntry>) {
  for (const [key, entry] of Object.entries(registry)) {
    if (!isNonEmptyString(key)) {
      addFailure(registryName, key || '<empty>', 'registry key must be a non-empty string');
    }

    if (!isNonEmptyString(entry.slug)) {
      addFailure(registryName, key, 'entry.slug must be a non-empty string');
    }

    if (!entry.data || typeof entry.data !== 'object') {
      addFailure(registryName, key, 'entry.data must exist');
      continue;
    }

    if (typeof entry.renderer !== 'function') {
      addFailure(registryName, key, 'entry.renderer must be a function');
    }

    const data = entry.data as PageData;

    if (data.slug !== entry.slug && !String(entry.slug).startsWith('implementation/')) {
      addFailure(registryName, key, `entry.data.slug must equal entry.slug (${String(entry.slug)})`);
    }

    if (key !== entry.slug) {
      addFailure(registryName, key, `registry key must equal entry.slug (${String(entry.slug)})`);
    }

    if (!isNonEmptyString(data.seo?.title)) {
      addFailure(registryName, key, 'data.seo.title must be a non-empty string');
    }

    if (!isNonEmptyString(data.seo?.description)) {
      addFailure(registryName, key, 'data.seo.description must be a non-empty string');
    }

    if (!isNonEmptyString(data.seo?.canonical)) {
      addFailure(registryName, key, 'data.seo.canonical must be a non-empty string');
    }

    if (!isNonEmptyString(data.primarySystem)) {
      addFailure(registryName, key, 'data.primarySystem must be a non-empty string');
    }

    if (data.supportingSystems !== undefined && !Array.isArray(data.supportingSystems)) {
      addFailure(registryName, key, 'data.supportingSystems must be an array when present');
    }

    if (!Array.isArray(data.topics)) {
      addFailure(registryName, key, 'data.topics must be an array');
    }

    if (!isNonEmptyString(data.hero?.title)) {
      addFailure(registryName, key, 'data.hero.title must be a non-empty string');
    }

    if (!isNonEmptyString(data.hero?.description)) {
      addFailure(registryName, key, 'data.hero.description must be a non-empty string');
    }
  }
}

function checkServiceModel() {
  const serviceKeys = Object.keys(SERVICE_DOMAIN_REGISTRY);
  const expectedKeys = [...expectedPrimaryServiceSlugs, ...expectedImplementationServiceSlugs];

  checkExactKeys('services', serviceKeys, expectedKeys);

  for (const key of serviceKeys) {
    if (forbiddenServiceSlugs.has(key)) {
      addFailure('services', key, 'removed service slug must not be active');
    }
  }

  for (const implementationKey of expectedImplementationServiceSlugs) {
    const entry = SERVICE_DOMAIN_REGISTRY[implementationKey];
    const data = entry?.data as PageData | undefined;

    if (data?.primarySystem !== 'smart-website-systems') {
      addFailure(
        'services',
        implementationKey,
        'implementation services must map to smart-website-systems'
      );
    }
  }
}

function checkFeatureModel() {
  checkExactKeys('features', Object.keys(FEATURE_DOMAIN_REGISTRY), expectedFeatureSlugs);

  for (const key of expectedFeatureSlugs) {
    const entry = FEATURE_DOMAIN_REGISTRY[key];
    const ownership = FEATURE_OWNERSHIP[key];
    const data = entry?.data as PageData | undefined;

    if (!ownership) {
      addFailure('features', key, 'feature ownership entry is missing');
      continue;
    }

    if (data?.primarySystem !== ownership.primarySystem) {
      addFailure('features', key, `primarySystem must be ${ownership.primarySystem}`);
    }

    const dataSupporting = Array.isArray(data?.supportingSystems)
      ? [...data.supportingSystems].sort().join('|')
      : '';
    const expectedSupporting = [
      ...('supportingSystems' in ownership ? (ownership.supportingSystems ?? []) : []),
    ]
      .sort()
      .join('|');

    if (dataSupporting !== expectedSupporting) {
      addFailure('features', key, 'supportingSystems must match feature ownership');
    }
  }
}

function checkIndustryModel() {
  const industryKeys = Object.keys(INDUSTRY_REGISTRY);
  checkExactKeys('industries', industryKeys, expectedIndustrySlugs);

  for (const [key, data] of Object.entries(INDUSTRY_REGISTRY)) {
    if (data.seo?.canonical !== `/industries/${key}`) {
      addFailure('industries', key, `canonical must be /industries/${key}`);
    }
  }
}

function checkCaseStudyModel() {
  const caseStudyKeys = Object.keys(CASE_STUDY_REGISTRY);
  checkExactKeys('case-studies', caseStudyKeys, expectedCaseStudySlugs);

  for (const [key, data] of Object.entries(CASE_STUDY_REGISTRY)) {
    if (data.slug !== key) {
      addFailure('case-studies', key, 'data.slug must equal registry key');
    }

    if (data.seo?.canonical !== `/case-studies/${key}`) {
      addFailure('case-studies', key, `canonical must be /case-studies/${key}`);
    }

    if (data.client !== 'Scenario study') {
      addFailure('case-studies', key, 'wave-1 entries must stay clearly marked as scenarios');
    }
  }
}

function checkForbiddenStructure() {
  for (const relativePath of [...forbiddenPublicRoutePaths, ...forbiddenOldFeaturePaths]) {
    if (existsFromRoot(relativePath)) {
      addFailure('structure', relativePath, 'removed public route or old feature file still exists');
    }
  }
}

checkRegistry('services', SERVICE_DOMAIN_REGISTRY);
checkRegistry('features', FEATURE_DOMAIN_REGISTRY);
checkServiceModel();
checkFeatureModel();
checkIndustryModel();
checkCaseStudyModel();
checkForbiddenStructure();

if (failures.length === 0) {
  console.log('check:domain-registries passed.');
  console.log(`- services: ${Object.keys(SERVICE_DOMAIN_REGISTRY).length} entries`);
  console.log(`- features: ${Object.keys(FEATURE_DOMAIN_REGISTRY).length} entries`);
  console.log(`- industries: ${Object.keys(INDUSTRY_REGISTRY).length} entries`);
  console.log(`- case studies: ${Object.keys(CASE_STUDY_REGISTRY).length} entries`);
  process.exit(0);
}

console.error(`check:domain-registries failed (${failures.length} failure(s)):\n`);
for (const failure of failures) {
  console.error(`${failure.registry}:${failure.key} ${failure.message}`);
}

process.exit(1);

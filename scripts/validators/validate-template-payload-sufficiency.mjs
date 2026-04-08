#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { RESOURCE_REGISTRY } from '@/domains/resources/registry';

import {
  hasText,
  isActionableButton,
  loadFeaturePages,
  loadIndustryPages,
  loadServicePages,
} from './lib/contentValidationHelpers.mjs';

const args = new Set(process.argv.slice(2));
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const reportPath = path.join(root, 'reports', 'template-payload-report.json');

const violations = [];

function pushViolation(pageType, slug, rule, detail) {
  violations.push({ pageType, slug, rule, detail });
}

function validateServicePages(pages) {
  for (const page of pages) {
    if (!hasText(page.hero.title) || !hasText(page.hero.description)) {
      pushViolation('service', page.slug, 'hero-incomplete', 'Hero requires title and description.');
    }

    if (page.cta) {
      if (!hasText(page.cta.title) || !hasText(page.cta.description)) {
        pushViolation('service', page.slug, 'cta-copy-incomplete', 'CTA block requires title and description.');
      }

      if (!hasText(page.cta.buttonText) || !hasText(page.cta.buttonHref)) {
        pushViolation('service', page.slug, 'cta-action-missing', 'CTA block requires buttonText and buttonHref.');
      }
    }

    if (page.inlineCta) {
      if (!hasText(page.inlineCta.title) || !hasText(page.inlineCta.description)) {
        pushViolation('service', page.slug, 'inline-cta-copy-incomplete', 'Inline CTA requires title and description.');
      }

      if (!hasText(page.inlineCta.buttonText) || !hasText(page.inlineCta.buttonHref)) {
        pushViolation('service', page.slug, 'inline-cta-action-missing', 'Inline CTA requires buttonText and buttonHref.');
      }
    }
  }
}

function validateFeaturePages(pages) {
  const requiredSections = ['process', 'benefits', 'useCases', 'capabilities', 'faq', 'explore'];

  for (const page of pages) {
    if (!hasText(page.hero.title) || !hasText(page.hero.description)) {
      pushViolation('feature', page.slug, 'hero-incomplete', 'Hero requires title and description.');
    }

    for (const sectionKey of requiredSections) {
      if (!page.sections[sectionKey]) {
        pushViolation('feature', page.slug, 'missing-required-section', `Missing required section: ${sectionKey}.`);
      }
    }

    if (!isActionableButton(page.cta?.primaryAction)) {
      pushViolation('feature', page.slug, 'cta-action-missing', 'Feature CTA requires a primary actionable control.');
    }
  }
}

function validateResourcePages(resources) {
  const requiredTypes = ['hero', 'problem', 'diy', 'cta', 'related-resources'];

  for (const resource of resources) {
    const sectionTypes = new Set(resource.sections.map(section => section.type));

    for (const requiredType of requiredTypes) {
      if (!sectionTypes.has(requiredType)) {
        pushViolation('resource', resource.slug, 'missing-required-section', `Missing required section: ${requiredType}.`);
      }
    }

    const cta = resource.sections.find(section => section.type === 'cta');
    if (!cta || !hasText(cta.heading) || !hasText(cta.content) || !hasText(cta.button?.text) || !hasText(cta.button?.url)) {
      pushViolation('resource', resource.slug, 'cta-incomplete', 'Resource CTA requires heading, content, button text, and button url.');
    }

    const related = resource.sections.find(section => section.type === 'related-resources');
    if (!related || !Array.isArray(related.resources) || related.resources.length === 0) {
      pushViolation('resource', resource.slug, 'related-resources-missing', 'Resource page requires at least one related resource.');
    }
  }
}

function validateCaseStudies(caseStudies) {
  for (const caseStudy of caseStudies) {
    const sectionTypes = new Set(caseStudy.sections.map(section => section.type));

    if (!sectionTypes.has('hero')) {
      pushViolation('case-study', caseStudy.slug, 'missing-required-section', 'Missing required hero section.');
    }

    const cta = caseStudy.sections.find(section => section.type === 'cta');
    if (!cta) {
      pushViolation('case-study', caseStudy.slug, 'missing-required-section', 'Missing required cta section.');
      continue;
    }

    if (!hasText(cta.heading) || !hasText(cta.body)) {
      pushViolation('case-study', caseStudy.slug, 'cta-copy-incomplete', 'Case study CTA requires heading and body.');
    }
  }
}

function validateIndustryPages(pages) {
  for (const page of pages) {
    if (!hasText(page.hero.title) || !hasText(page.hero.description)) {
      pushViolation('industry', page.slug, 'hero-incomplete', 'Hero requires title and description.');
    }

    if (!isActionableButton(page.cta?.primaryAction) && !isActionableButton(page.cta?.secondaryAction)) {
      pushViolation('industry', page.slug, 'cta-action-missing', 'Industry CTA requires at least one actionable control.');
    }

    if (page.type === 'detail') {
      if (!page.faq || !Array.isArray(page.faq.faqs) || page.faq.faqs.length === 0) {
        pushViolation('industry', page.slug, 'faq-missing', 'Industry detail pages require a populated FAQ block.');
      }
    }
  }
}

async function main() {
  const [servicePages, featurePages, industryPages] = await Promise.all([
    loadServicePages(),
    loadFeaturePages(),
    loadIndustryPages(),
  ]);

  validateServicePages(servicePages);
  validateFeaturePages(featurePages);
  validateResourcePages(Object.values(RESOURCE_REGISTRY));
  validateCaseStudies(Object.values(CASE_STUDY_REGISTRY));
  validateIndustryPages(industryPages);

  const report = {
    generatedAt: new Date().toISOString(),
    sources: {
      services: servicePages.length,
      features: featurePages.length,
      resources: Object.keys(RESOURCE_REGISTRY).length,
      caseStudies: Object.keys(CASE_STUDY_REGISTRY).length,
      industries: industryPages.length,
    },
    violationCount: violations.length,
    violations,
  };

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');

  if (args.has('--report-json')) {
    console.log(JSON.stringify(report, null, 2));
  }

  if (violations.length > 0) {
    console.error(`✗ Template payload sufficiency validation failed with ${violations.length} issue(s).`);
    for (const violation of violations.slice(0, 20)) {
      console.error(`- [${violation.pageType}] ${violation.slug}: ${violation.rule} — ${violation.detail}`);
    }
    if (violations.length > 20) {
      console.error(`- ... ${violations.length - 20} additional issue(s) omitted`);
    }
    process.exit(1);
  }

  console.log(
    `✓ Template payload sufficiency validation passed (${servicePages.length + featurePages.length + Object.keys(RESOURCE_REGISTRY).length + Object.keys(CASE_STUDY_REGISTRY).length + industryPages.length} pages checked)`
  );
}

await main();
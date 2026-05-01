#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { BLOG_POSTS } from '../../src/domains/blog/registry.ts';
import { CASE_STUDY_REGISTRY } from '../../src/domains/case-studies/registry.ts';
import { RESOURCE_REGISTRY } from '../../src/domains/resources/registry.ts';
import { resolveContentRules } from '../../src/lib/config/contentRules';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { systemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import {
  hasText,
  isActionableButton,
  loadPagesByType,
} from '../lib/content-validation-helpers.mjs';

const args = new Set(process.argv.slice(2));
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const reportPath = path.join(root, 'reports', 'template-payload-report.json');
const logger = createLogger({
  label: 'validate-template-payload',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: root,
});

const violations = [];

function pushViolation(pageType, slug, rule, detail) {
  violations.push({ pageType, slug, rule, detail });
}

function validateServicePages(pages) {
  for (const page of pages) {
    const rules = resolveContentRules('service', page.slug).templatePayload;
    const serviceRules = rules.service;

    if (
      (serviceRules.heroTitleRequired && !hasText(page.hero.title)) ||
      (serviceRules.heroDescriptionRequired && !hasText(page.hero.description))
    ) {
      pushViolation(
        'service',
        page.slug,
        'hero-incomplete',
        'Hero requires title and description.'
      );
    }

    if (page.cta) {
      if (
        (serviceRules.ctaTitleRequired && !hasText(page.cta.heading?.title)) ||
        (serviceRules.ctaDescriptionRequired && !hasText(page.cta.heading?.description))
      ) {
        pushViolation(
          'service',
          page.slug,
          'cta-copy-incomplete',
          'CTA block requires heading.title and heading.description.'
        );
      }
    }

  }
}

function validateFeaturePages(pages) {
  for (const page of pages) {
    const rules = resolveContentRules('feature', page.slug).templatePayload;
    const featureRules = rules.feature;

    if (
      (featureRules.heroTitleRequired && !hasText(page.hero.title)) ||
      (featureRules.heroDescriptionRequired && !hasText(page.hero.description))
    ) {
      pushViolation(
        'feature',
        page.slug,
        'hero-incomplete',
        'Hero requires title and description.'
      );
    }

    for (const sectionKey of featureRules.requiredSectionKeys) {
      if (!page.sections[sectionKey]) {
        pushViolation(
          'feature',
          page.slug,
          'missing-required-section',
          `Missing required section: ${sectionKey}.`
        );
      }
    }

    if (
      (featureRules.ctaTitleRequired && !hasText(page.cta?.heading?.title)) ||
      (featureRules.ctaDescriptionRequired && !hasText(page.cta?.heading?.description))
    ) {
      pushViolation(
        'feature',
        page.slug,
        'cta-copy-incomplete',
        'Feature CTA requires heading.title and heading.description.'
      );
    }
  }
}

function validateResourcePages(resources) {
  for (const resource of resources) {
    const rules = resolveContentRules('resource', resource.slug).templatePayload;
    const resourceRules = rules.resource;
    const sectionTypes = new Set(resource.sections.map(section => section.type));

    if (resource.sections.length < resourceRules.minimumSections) {
      pushViolation(
        'resource',
        resource.slug,
        'insufficient-sections',
        `Resource page requires at least ${resourceRules.minimumSections} authored sections.`
      );
    }

    for (const requiredType of resourceRules.requiredSectionTypes) {
      if (!sectionTypes.has(requiredType)) {
        pushViolation(
          'resource',
          resource.slug,
          'missing-required-section',
          `Missing required section: ${requiredType}.`
        );
      }
    }

    const cta = resource.sections.find(section => section.type === 'cta');
    if (
      !cta ||
      (resourceRules.ctaHeadingRequired && !hasText(cta.heading)) ||
      (resourceRules.ctaContentRequired && !hasText(cta.content))
    ) {
      pushViolation(
        'resource',
        resource.slug,
        'cta-incomplete',
        'Resource CTA requires heading and content.'
      );
    }

    const related = resource.sections.find(section => section.type === 'related-resources');
    if (
      resourceRules.relatedResourcesMin > 0 &&
      (!related ||
        !Array.isArray(related.resources) ||
        related.resources.length < resourceRules.relatedResourcesMin)
    ) {
      pushViolation(
        'resource',
        resource.slug,
        'related-resources-missing',
        'Resource page requires at least one related resource.'
      );
    }
  }
}

function validateBlogPosts(posts) {
  for (const post of posts) {
    const rules = resolveContentRules('blog', post.slug).templatePayload;

    if (post.sections.length < rules.blog.minimumSections) {
      pushViolation(
        'blog',
        post.slug,
        'insufficient-sections',
        `Blog post requires at least ${rules.blog.minimumSections} authored sections.`
      );
    }

    const cta = post.sections.find(section => section.type === 'cta');
    if (cta && (!hasText(cta.heading) || !hasText(cta.content))) {
      pushViolation(
        'blog',
        post.slug,
        'cta-incomplete',
        'Blog CTA requires heading and content when a CTA section is present.'
      );
    }
  }
}

function validateCaseStudies(caseStudies) {
  for (const caseStudy of caseStudies) {
    const rules = resolveContentRules('case-study', caseStudy.slug).templatePayload;
    const caseStudyRules = rules.caseStudy;
    const sectionTypes = new Set(caseStudy.sections.map(section => section.type));

    if (caseStudyRules.heroSectionRequired && !sectionTypes.has('hero')) {
      pushViolation(
        'case-study',
        caseStudy.slug,
        'missing-required-section',
        'Missing required hero section.'
      );
    }

    const cta = caseStudy.sections.find(section => section.type === 'cta');
    if (caseStudyRules.ctaSectionRequired && !cta) {
      pushViolation(
        'case-study',
        caseStudy.slug,
        'missing-required-section',
        'Missing required cta section.'
      );
      continue;
    }

    if (
      !cta ||
      (caseStudyRules.ctaHeadingRequired && !hasText(cta.heading)) ||
      (caseStudyRules.ctaBodyRequired && !hasText(cta.body))
    ) {
      pushViolation(
        'case-study',
        caseStudy.slug,
        'cta-copy-incomplete',
        'Case study CTA requires heading and body.'
      );
    }

    const lastNarrativeSection = [...caseStudy.sections]
      .reverse()
      .find(section => section.type !== 'more');
    if (lastNarrativeSection?.type !== 'cta') {
      pushViolation(
        'case-study',
        caseStudy.slug,
        'cta-not-last',
        'Case study CTA must be the last narrative section.'
      );
    }
  }
}

function validateIndustryPages(pages) {
  for (const page of pages) {
    const rules = resolveContentRules('industry', page.slug).templatePayload;
    const industryRules = rules.industry;

    if (
      (industryRules.heroTitleRequired && !hasText(page.hero.title)) ||
      (industryRules.heroDescriptionRequired && !hasText(page.hero.description))
    ) {
      pushViolation(
        'industry',
        page.slug,
        'hero-incomplete',
        'Hero requires title and description.'
      );
    }

    if (
      (industryRules.ctaTitleRequired && !hasText(page.cta?.heading?.title)) ||
      (industryRules.ctaDescriptionRequired && !hasText(page.cta?.heading?.description))
    ) {
      pushViolation(
        'industry',
        page.slug,
        'cta-copy-incomplete',
        'Industry CTA requires heading.title and heading.description.'
      );
    }

    if (page.type === 'detail') {
      if (
        !page.faq ||
        !Array.isArray(page.faq.faqs) ||
        page.faq.faqs.length < industryRules.detailFaqMin
      ) {
        pushViolation(
          'industry',
          page.slug,
          'faq-missing',
          'Industry detail pages require a populated FAQ block.'
        );
      }
    }
  }
}

async function main() {
  const [servicePages, featurePages, industryPages] = await Promise.all([
    loadPagesByType('service'),
    loadPagesByType('feature'),
    loadPagesByType('industry'),
  ]);

  validateServicePages(servicePages);
  validateFeaturePages(featurePages);
  validateBlogPosts(Object.values(BLOG_POSTS));
  validateResourcePages(Object.values(RESOURCE_REGISTRY));
  validateCaseStudies(Object.values(CASE_STUDY_REGISTRY));
  validateIndustryPages(industryPages);

  const report = {
    generatedAt: new Date().toISOString(),
    sources: {
      services: servicePages.length,
      features: featurePages.length,
      blog: Object.keys(BLOG_POSTS).length,
      resources: Object.keys(RESOURCE_REGISTRY).length,
      caseStudies: Object.keys(CASE_STUDY_REGISTRY).length,
      industries: industryPages.length,
    },
    violationCount: violations.length,
    violations,
  };

  logger.writeReport(reportPath, report);

  if (args.has('--report-json')) {
    logger.printSummary('report-json flag active; full payload preserved in file output');
  }

  if (violations.length > 0) {
    logger.printErrors(
      violations.map(
        violation =>
          `[${violation.pageType}] ${violation.slug}: ${violation.rule} - ${violation.detail}`
      ),
      'violations',
      20
    );
    process.exit(1);
  }

  logger.printSummary(
    `passed (${servicePages.length + featurePages.length + Object.keys(BLOG_POSTS).length + Object.keys(RESOURCE_REGISTRY).length + Object.keys(CASE_STUDY_REGISTRY).length + industryPages.length} pages checked)`
  );
}

await main();

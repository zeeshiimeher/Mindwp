#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { RESOURCE_REGISTRY } from '@/domains/resources/registry';

import { loadFeaturePages, loadServicePages } from './lib/contentValidationHelpers.mjs';

const args = new Set(process.argv.slice(2));
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const reportPath = path.join(root, 'reports', 'section-structure-report.json');

const violations = [];

function pushViolation(pageType, slug, rule, detail) {
  violations.push({ pageType, slug, rule, detail });
}

function requireCount(pageType, slug, label, value, minimum) {
  if (!Array.isArray(value) || value.length < minimum) {
    pushViolation(pageType, slug, 'cardinality', `${label} requires at least ${minimum} item(s).`);
  }
}

function validateServicePages(pages) {
  for (const page of pages) {
    const sections = page.sections ?? {};

    if (sections.comparison) {
      requireCount('service', page.slug, 'comparison.items', sections.comparison.items, 2);
    }

    if (sections.value) {
      requireCount('service', page.slug, 'value.items', sections.value.items, 2);
    }

    if (sections.coreLayer) {
      requireCount('service', page.slug, 'coreLayer.cards', sections.coreLayer.cards, 2);
      for (const [index, card] of (sections.coreLayer.cards ?? []).entries()) {
        requireCount('service', page.slug, `coreLayer.cards[${index}].points`, card.points, 1);
      }
    }

    if (sections.types) {
      requireCount('service', page.slug, 'types.items', sections.types.items, 2);
    }

    if (sections.included) {
      requireCount('service', page.slug, 'included.items', sections.included.items, 2);
    }

    if (sections.process) {
      requireCount('service', page.slug, 'process.steps', sections.process.steps, 2);
    }

    if (sections.visibilityFoundations) {
      requireCount(
        'service',
        page.slug,
        'visibilityFoundations.narrativeParagraphs',
        sections.visibilityFoundations.narrativeParagraphs,
        1
      );
      requireCount('service', page.slug, 'visibilityFoundations.items', sections.visibilityFoundations.items, 2);
    }

    if (sections.technologies) {
      requireCount('service', page.slug, 'technologies.items', sections.technologies.items, 2);
    }

    if (sections.businessSizes) {
      requireCount('service', page.slug, 'businessSizes.items', sections.businessSizes.items, 2);
    }

    if (sections.concerns) {
      requireCount('service', page.slug, 'concerns.items', sections.concerns.items, 2);
    }

    if (sections.qualification) {
      requireCount(
        'service',
        page.slug,
        'qualification.strongFit',
        sections.qualification.strongFit ?? sections.qualification.strongFitItems,
        1
      );
      requireCount(
        'service',
        page.slug,
        'qualification.notFor',
        sections.qualification.notFor ?? sections.qualification.notDesignedItems,
        1
      );
    }

    if (sections.faq) {
      requireCount('service', page.slug, 'faq.items', sections.faq.items, 2);
    }
  }
}

function validateFeaturePages(pages) {
  for (const page of pages) {
    requireCount('feature', page.slug, 'sections.process.steps', page.sections.process?.steps, 2);
    requireCount('feature', page.slug, 'sections.benefits.items', page.sections.benefits?.items, 2);
    requireCount('feature', page.slug, 'sections.useCases.items', page.sections.useCases?.items, 2);
    requireCount(
      'feature',
      page.slug,
      'sections.capabilities.featureCategories',
      page.sections.capabilities?.featureCategories,
      1
    );
    requireCount('feature', page.slug, 'sections.faq.items', page.sections.faq?.items, 2);
    requireCount('feature', page.slug, 'sections.explore.cards', page.sections.explore?.cards, 2);

    if (page.sections.channels) {
      requireCount('feature', page.slug, 'sections.channels.items', page.sections.channels.items, 1);
    }

    if (page.sections.painPoints) {
      requireCount('feature', page.slug, 'sections.painPoints.items', page.sections.painPoints.items, 2);
    }

    if (page.sections.testimonials) {
      requireCount('feature', page.slug, 'sections.testimonials.items', page.sections.testimonials.items, 1);
    }
  }
}

function validateResourcePages(resources) {
  for (const resource of resources) {
    for (const section of resource.sections) {
      switch (section.type) {
        case 'takeaways':
          requireCount('resource', resource.slug, 'takeaways.items', section.items, 2);
          break;
        case 'problem':
          requireCount('resource', resource.slug, 'problem.items', section.items, 2);
          break;
        case 'business-costs':
          requireCount('resource', resource.slug, 'business-costs.items', section.items, 2);
          break;
        case 'diy':
          requireCount('resource', resource.slug, 'diy.steps', section.steps, 2);
          break;
        case 'solution-cards':
          requireCount('resource', resource.slug, 'solution-cards.solutions', section.solutions, 2);
          break;
        case 'templates':
          requireCount('resource', resource.slug, 'templates.items', section.items, 2);
          break;
        case 'checklist':
          requireCount('resource', resource.slug, 'checklist.items', section.items, 2);
          break;
        case 'faq':
          requireCount('resource', resource.slug, 'faq.items', section.items, 2);
          break;
        case 'comparison':
          requireCount('resource', resource.slug, 'comparison.before.items', section.before?.items, 1);
          requireCount('resource', resource.slug, 'comparison.after.items', section.after?.items, 1);
          break;
        case 'related-resources':
          requireCount('resource', resource.slug, 'related-resources.resources', section.resources, 1);
          break;
        default:
          break;
      }
    }
  }
}

function validateCaseStudies(caseStudies) {
  for (const caseStudy of caseStudies) {
    for (const section of caseStudy.sections) {
      switch (section.type) {
        case 'metrics':
          requireCount('case-study', caseStudy.slug, 'metrics.keyMetrics', section.keyMetrics, 2);
          break;
        case 'problem':
          requireCount('case-study', caseStudy.slug, 'problem.painPoints', section.painPoints, 2);
          break;
        case 'solution':
          requireCount('case-study', caseStudy.slug, 'solution.whatWeDid', section.whatWeDid, 2);
          break;
        case 'process':
          requireCount('case-study', caseStudy.slug, 'process.howWeDidIt', section.howWeDidIt, 2);
          break;
        case 'features':
          requireCount('case-study', caseStudy.slug, 'features.featuresUsed', section.featuresUsed, 2);
          break;
        case 'results':
          requireCount('case-study', caseStudy.slug, 'results.results', section.results, 2);
          break;
        case 'deliverables':
          requireCount('case-study', caseStudy.slug, 'deliverables.items', section.items, 2);
          break;
        case 'workflows':
          requireCount('case-study', caseStudy.slug, 'workflows.workflows', section.workflows, 1);
          for (const [index, workflow] of (section.workflows ?? []).entries()) {
            requireCount('case-study', caseStudy.slug, `workflows.workflows[${index}].actions`, workflow.actions, 1);
          }
          break;
        case 'faq':
          requireCount('case-study', caseStudy.slug, 'faq.items', section.items, 2);
          break;
        default:
          break;
      }
    }
  }
}

async function main() {
  const [servicePages, featurePages] = await Promise.all([loadServicePages(), loadFeaturePages()]);

  validateServicePages(servicePages);
  validateFeaturePages(featurePages);
  validateResourcePages(Object.values(RESOURCE_REGISTRY));
  validateCaseStudies(Object.values(CASE_STUDY_REGISTRY));

  const report = {
    generatedAt: new Date().toISOString(),
    sources: {
      services: servicePages.length,
      features: featurePages.length,
      resources: Object.keys(RESOURCE_REGISTRY).length,
      caseStudies: Object.keys(CASE_STUDY_REGISTRY).length,
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
    console.error(`✗ Section structure validation failed with ${violations.length} issue(s).`);
    for (const violation of violations.slice(0, 20)) {
      console.error(`- [${violation.pageType}] ${violation.slug}: ${violation.detail}`);
    }
    if (violations.length > 20) {
      console.error(`- ... ${violations.length - 20} additional issue(s) omitted`);
    }
    process.exit(1);
  }

  console.log(
    `✓ Section structure validation passed (${servicePages.length + featurePages.length + Object.keys(RESOURCE_REGISTRY).length + Object.keys(CASE_STUDY_REGISTRY).length} pages checked)`
  );
}

await main();
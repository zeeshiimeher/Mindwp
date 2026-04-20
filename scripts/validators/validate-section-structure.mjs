#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { RESOURCE_REGISTRY } from '@/domains/resources/registry';
import { resolveContentRules } from '@/lib/config/contentRules';

import { loadPagesByType } from '../lib/content-validation-helpers.mjs';

const args = new Set(process.argv.slice(2));
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const reportPath = path.join(root, 'reports', 'section-structure-report.json');
const logger = createLogger({
  label: 'validate-section-structure',
  mode: resolveLoggingMode(process.argv.slice(2), process.env),
  rootDir: root,
});

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
    const rules = resolveContentRules('service', page.slug).sectionStructure;
    const serviceRules = rules.service;
    const sections = page.sections ?? {};

    if (sections.comparison) {
      requireCount(
        'service',
        page.slug,
        'comparison.items',
        sections.comparison.items,
        serviceRules.comparisonItemsMin
      );
    }

    if (sections.value) {
      requireCount('service', page.slug, 'value.items', sections.value.items, serviceRules.valueItemsMin);
    }

    if (sections.coreLayer) {
      requireCount('service', page.slug, 'coreLayer.cards', sections.coreLayer.cards, serviceRules.coreLayerCardsMin);
      for (const [index, card] of (sections.coreLayer.cards ?? []).entries()) {
        requireCount(
          'service',
          page.slug,
          `coreLayer.cards[${index}].points`,
          card.points,
          serviceRules.coreLayerCardPointsMin
        );
      }
    }

    if (sections.types) {
      requireCount('service', page.slug, 'types.items', sections.types.items, serviceRules.typesItemsMin);
    }

    if (sections.included) {
      requireCount('service', page.slug, 'included.items', sections.included.items, serviceRules.includedItemsMin);
    }

    if (sections.process) {
      requireCount('service', page.slug, 'process.steps', sections.process.steps, serviceRules.processStepsMin);
    }

    if (sections.visibilityFoundations) {
      requireCount(
        'service',
        page.slug,
        'visibilityFoundations.narrativeParagraphs',
        sections.visibilityFoundations.narrativeParagraphs,
        serviceRules.visibilityFoundationsNarrativeParagraphsMin
      );
      requireCount(
        'service',
        page.slug,
        'visibilityFoundations.items',
        sections.visibilityFoundations.items,
        serviceRules.visibilityFoundationsItemsMin
      );
    }

    if (sections.technologies) {
      requireCount(
        'service',
        page.slug,
        'technologies.items',
        sections.technologies.items,
        serviceRules.technologiesItemsMin
      );
    }

    if (sections.businessSizes) {
      requireCount(
        'service',
        page.slug,
        'businessSizes.items',
        sections.businessSizes.items,
        serviceRules.businessSizesItemsMin
      );
    }

    if (sections.concerns) {
      requireCount('service', page.slug, 'concerns.items', sections.concerns.items, serviceRules.concernsItemsMin);
    }

    if (sections.qualification) {
      requireCount(
        'service',
        page.slug,
        'qualification.strongFit',
        sections.qualification.strongFit ?? sections.qualification.strongFitItems,
        serviceRules.qualificationStrongFitMin
      );
      requireCount(
        'service',
        page.slug,
        'qualification.notFor',
        sections.qualification.notFor ?? sections.qualification.notDesignedItems,
        serviceRules.qualificationNotForMin
      );
    }

    if (sections.faq) {
      requireCount('service', page.slug, 'faq.items', sections.faq.items, serviceRules.faqItemsMin);
    }
  }
}

function validateFeaturePages(pages) {
  for (const page of pages) {
    const rules = resolveContentRules('feature', page.slug).sectionStructure;
    const featureRules = rules.feature;
    requireCount('feature', page.slug, 'sections.process.steps', page.sections.process?.steps, featureRules.processStepsMin);
    requireCount('feature', page.slug, 'sections.benefits.items', page.sections.benefits?.items, featureRules.benefitsItemsMin);
    requireCount('feature', page.slug, 'sections.useCases.items', page.sections.useCases?.items, featureRules.useCasesItemsMin);
    requireCount(
      'feature',
      page.slug,
      'sections.capabilities.featureCategories',
      page.sections.capabilities?.featureCategories,
      featureRules.capabilitiesFeatureCategoriesMin
    );
    requireCount('feature', page.slug, 'sections.faq.items', page.sections.faq?.items, featureRules.faqItemsMin);
    requireCount('feature', page.slug, 'sections.explore.cards', page.sections.explore?.cards, featureRules.exploreCardsMin);

    if (page.sections.channels) {
      requireCount('feature', page.slug, 'sections.channels.items', page.sections.channels.items, featureRules.channelsItemsMin);
    }

    if (page.sections.painPoints) {
      requireCount('feature', page.slug, 'sections.painPoints.items', page.sections.painPoints.items, featureRules.painPointsItemsMin);
    }

    if (page.sections.testimonials) {
      requireCount(
        'feature',
        page.slug,
        'sections.testimonials.items',
        page.sections.testimonials.items,
        featureRules.testimonialsItemsMin
      );
    }
  }
}

function validateResourcePages(resources) {
  for (const resource of resources) {
    const rules = resolveContentRules('resource', resource.slug).sectionStructure;
    const resourceRules = rules.resource;
    for (const section of resource.sections) {
      switch (section.type) {
        case 'takeaways':
          requireCount('resource', resource.slug, 'takeaways.items', section.items, resourceRules.takeawaysItemsMin);
          break;
        case 'problem':
          requireCount('resource', resource.slug, 'problem.items', section.items, resourceRules.problemItemsMin);
          break;
        case 'business-costs':
          requireCount('resource', resource.slug, 'business-costs.items', section.items, resourceRules.businessCostsItemsMin);
          break;
        case 'diy':
          requireCount('resource', resource.slug, 'diy.steps', section.steps, resourceRules.diyStepsMin);
          break;
        case 'solution-cards':
          requireCount('resource', resource.slug, 'solution-cards.solutions', section.solutions, resourceRules.solutionCardsMin);
          break;
        case 'templates':
          requireCount('resource', resource.slug, 'templates.items', section.items, resourceRules.templatesItemsMin);
          break;
        case 'checklist':
          requireCount('resource', resource.slug, 'checklist.items', section.items, resourceRules.checklistItemsMin);
          break;
        case 'faq':
          requireCount('resource', resource.slug, 'faq.items', section.items, resourceRules.faqItemsMin);
          break;
        case 'comparison':
          requireCount('resource', resource.slug, 'comparison.before.items', section.before?.items, resourceRules.comparisonBeforeItemsMin);
          requireCount('resource', resource.slug, 'comparison.after.items', section.after?.items, resourceRules.comparisonAfterItemsMin);
          break;
        case 'related-resources':
          requireCount('resource', resource.slug, 'related-resources.resources', section.resources, resourceRules.relatedResourcesMin);
          break;
        default:
          break;
      }
    }
  }
}

function validateCaseStudies(caseStudies) {
  for (const caseStudy of caseStudies) {
    const rules = resolveContentRules('case-study', caseStudy.slug).sectionStructure;
    const caseStudyRules = rules.caseStudy;
    for (const section of caseStudy.sections) {
      switch (section.type) {
        case 'metrics':
          requireCount('case-study', caseStudy.slug, 'metrics.keyMetrics', section.keyMetrics, caseStudyRules.metricsKeyMetricsMin);
          break;
        case 'problem':
          requireCount('case-study', caseStudy.slug, 'problem.painPoints', section.painPoints, caseStudyRules.problemPainPointsMin);
          break;
        case 'solution':
          requireCount('case-study', caseStudy.slug, 'solution.whatWeDid', section.whatWeDid, caseStudyRules.solutionWhatWeDidMin);
          break;
        case 'process':
          requireCount('case-study', caseStudy.slug, 'process.howWeDidIt', section.howWeDidIt, caseStudyRules.processHowWeDidItMin);
          break;
        case 'features':
          requireCount('case-study', caseStudy.slug, 'features.featuresUsed', section.featuresUsed, caseStudyRules.featuresUsedMin);
          break;
        case 'results':
          requireCount('case-study', caseStudy.slug, 'results.results', section.results, caseStudyRules.resultsMin);
          break;
        case 'deliverables':
          requireCount('case-study', caseStudy.slug, 'deliverables.items', section.items, caseStudyRules.deliverablesItemsMin);
          break;
        case 'workflows':
          requireCount('case-study', caseStudy.slug, 'workflows.workflows', section.workflows, caseStudyRules.workflowsMin);
          for (const [index, workflow] of (section.workflows ?? []).entries()) {
            requireCount(
              'case-study',
              caseStudy.slug,
              `workflows.workflows[${index}].actions`,
              workflow.actions,
              caseStudyRules.workflowActionsMin
            );
          }
          break;
        case 'faq':
          requireCount('case-study', caseStudy.slug, 'faq.items', section.items, caseStudyRules.faqItemsMin);
          break;
        default:
          break;
      }
    }
  }
}

async function main() {
  const [servicePages, featurePages] = await Promise.all([
    loadPagesByType('service'),
    loadPagesByType('feature'),
  ]);

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

  logger.writeReport(reportPath, report);

  if (args.has('--report-json')) {
    logger.printSummary('report-json flag active; full payload preserved in file output');
  }

  if (violations.length > 0) {
    logger.printErrors(
      violations.map(violation => `[${violation.pageType}] ${violation.slug}: ${violation.detail}`),
      'violations',
      20
    );
    process.exit(1);
  }

  logger.printSummary(
    `passed (${servicePages.length + featurePages.length + Object.keys(RESOURCE_REGISTRY).length + Object.keys(CASE_STUDY_REGISTRY).length} pages checked)`
  );
}

await main();
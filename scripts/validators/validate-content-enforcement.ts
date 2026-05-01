#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { Node, type ObjectLiteralExpression, Project, type SourceFile, SyntaxKind } from 'ts-morph';

import { createLogger } from '../../lib/logger/index.mjs';
import { normalizeRawReport } from '../lib/report-schema.mjs';

type RuleName =
  | 'hero-list-length'
  | 'heading-hierarchy'
  | 'seo-position'
  | 'faq-position'
  | 'button-rule'
  | 'badge-length'
  | 'no-hardcoded-content'
  | 'variant-required-data';

type Issue = {
  rule: RuleName;
  domain: string;
  file: string;
  issueType: string;
  message: string;
  slug?: string;
};

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const ruleArg = process.argv.slice(2).find(arg => arg.startsWith('--rule='));
const reportJson = args.has('--report-json');
const rule = (ruleArg?.slice('--rule='.length) ?? '') as RuleName;
const logger = createLogger({
  label: 'validate-content-enforcement',
  mode: 'summary',
  rootDir: root,
});
const project = new Project({ tsConfigFilePath: path.join(root, 'tsconfig.json') });

const REPORT_FILE_BY_RULE: Record<RuleName, string> = {
  'hero-list-length': 'hero-list-length-report.json',
  'heading-hierarchy': 'heading-hierarchy-report.json',
  'seo-position': 'seo-position-report.json',
  'faq-position': 'faq-position-report.json',
  'button-rule': 'button-rule-report.json',
  'badge-length': 'badge-length-report.json',
  'no-hardcoded-content': 'no-hardcoded-content-report.json',
  'variant-required-data': 'variant-required-data-report.json',
};

const SOURCE_COMMAND_BY_RULE: Record<RuleName, string> = {
  'hero-list-length':
    'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=hero-list-length',
  'heading-hierarchy':
    'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=heading-hierarchy',
  'seo-position':
    'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=seo-position',
  'faq-position':
    'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=faq-position',
  'button-rule':
    'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=button-rule',
  'badge-length':
    'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=badge-length',
  'no-hardcoded-content':
    'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=no-hardcoded-content',
  'variant-required-data':
    'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=variant-required-data',
};

const DATA_GLOBS = {
  services: 'src/domains/services/data/*.{ts,tsx}',
  features: 'src/domains/features/data/*.{ts,tsx}',
  industries: 'src/domains/industries/pages/**/*.{ts,tsx}',
  blog: 'src/domains/blog/content/*.{ts,tsx}',
  resources: 'src/domains/resources/content/*.{ts,tsx}',
  'case-studies': 'src/domains/case-studies/content/*.{ts,tsx}',
} as const;

function toRelative(filePath: string) {
  return path.relative(root, filePath).replace(/\\/g, '/');
}

function countWords(value: string) {
  return (value.match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*/g) ?? []).length;
}

function getStringValue(node: Node | undefined): string | undefined {
  if (!node) return undefined;

  if (Node.isStringLiteral(node) || Node.isNoSubstitutionTemplateLiteral(node)) {
    return node.getLiteralText();
  }

  if (Node.isTemplateExpression(node)) {
    const head = node.getHead().getLiteralText();
    const spans = node.getTemplateSpans();
    if (
      spans.every(
        span =>
          Node.isStringLiteral(span.getExpression()) ||
          Node.isNoSubstitutionTemplateLiteral(span.getExpression())
      )
    ) {
      return [
        head,
        ...spans.flatMap(span => [
          getStringValue(span.getExpression()) ?? '',
          span.getLiteral().getLiteralText(),
        ]),
      ].join('');
    }
  }

  return undefined;
}

function getArrayStringValues(node: Node | undefined): string[] | undefined {
  if (!node || !Node.isArrayLiteralExpression(node)) {
    return undefined;
  }

  const values: string[] = [];
  for (const element of node.getElements()) {
    const value = getStringValue(element);
    if (!value) {
      return undefined;
    }
    values.push(value);
  }

  return values;
}

function resolveNodeFromIdentifier(
  sourceFile: SourceFile,
  node: Node | undefined
): Node | undefined {
  if (!node) return undefined;
  if (!Node.isIdentifier(node)) return node;

  const declaration = node.getDefinitions()[0]?.getDeclarationNode();
  if (declaration && Node.isVariableDeclaration(declaration)) {
    return declaration.getInitializer();
  }

  const fallbackDeclaration = sourceFile.getVariableDeclaration(node.getText());
  return fallbackDeclaration?.getInitializer();
}

function getPropertyInitializer(
  sourceFile: SourceFile,
  objectLiteral: ObjectLiteralExpression,
  name: string
): Node | undefined {
  const property = objectLiteral.getProperty(name);
  if (!property || !Node.isPropertyAssignment(property)) {
    for (const candidate of objectLiteral.getProperties()) {
      if (!Node.isSpreadAssignment(candidate)) continue;
      const spreadObject = toObjectLiteral(sourceFile, candidate.getExpression());
      if (!spreadObject) continue;
      const initializer = getPropertyInitializer(sourceFile, spreadObject, name);
      if (initializer) {
        return initializer;
      }
    }

    return undefined;
  }
  return resolveNodeFromIdentifier(sourceFile, property.getInitializer());
}

function toObjectLiteral(
  sourceFile: SourceFile,
  node: Node | undefined
): ObjectLiteralExpression | undefined {
  if (!node) return undefined;
  const resolvedNode = resolveNodeFromIdentifier(sourceFile, node);
  if (!resolvedNode) return undefined;
  if (Node.isObjectLiteralExpression(resolvedNode)) return resolvedNode;
  if (Node.isAsExpression(resolvedNode) || Node.isSatisfiesExpression(resolvedNode)) {
    return toObjectLiteral(sourceFile, resolvedNode.getExpression());
  }
  return undefined;
}

function findReturnedObjectLiteral(sourceFile: SourceFile, callName: string) {
  const fn = sourceFile.getFunction(callName);
  if (!fn) return undefined;

  for (const statement of fn.getDescendantsOfKind(SyntaxKind.ReturnStatement)) {
    const objectLiteral = toObjectLiteral(sourceFile, statement.getExpression());
    if (objectLiteral) {
      return objectLiteral;
    }
  }

  return undefined;
}

function getExportedObjectLiteral(sourceFile: SourceFile): ObjectLiteralExpression | undefined {
  for (const declaration of sourceFile.getVariableDeclarations()) {
    if (!declaration.getVariableStatement()?.isExported()) {
      continue;
    }

    const initializer = declaration.getInitializer();
    const objectLiteral = toObjectLiteral(sourceFile, initializer);
    if (objectLiteral) {
      return objectLiteral;
    }

    if (initializer && Node.isCallExpression(initializer)) {
      const callName = initializer.getExpression().getText();
      const returnedObject = findReturnedObjectLiteral(sourceFile, callName);
      if (returnedObject) {
        return returnedObject;
      }
    }
  }

  return undefined;
}

function getObjectPropertyNames(objectLiteral: ObjectLiteralExpression) {
  return objectLiteral
    .getProperties()
    .filter(Node.isPropertyAssignment)
    .map(property => property.getName());
}

function getLiteralText(node: Node) {
  if (Node.isStringLiteral(node) || Node.isNoSubstitutionTemplateLiteral(node)) {
    return node.getLiteralText();
  }

  return undefined;
}

function getEnclosingPropertyName(node: Node) {
  return node.getFirstAncestorByKind(SyntaxKind.PropertyAssignment)?.getName();
}

function getEnclosingJsxAttributeName(node: Node) {
  return node.getFirstAncestorByKind(SyntaxKind.JsxAttribute)?.getNameNode().getText();
}

function getEnclosingVariableName(node: Node) {
  return node.getFirstAncestorByKind(SyntaxKind.VariableDeclaration)?.getName();
}

function getEnclosingParameterName(node: Node) {
  return node.getFirstAncestorByKind(SyntaxKind.Parameter)?.getName();
}

function getEnclosingBindingElementName(node: Node) {
  return node.getFirstAncestorByKind(SyntaxKind.BindingElement)?.getName();
}

function getEnclosingCallName(node: Node) {
  const callExpression = node.getFirstAncestorByKind(SyntaxKind.CallExpression);
  if (callExpression) {
    return callExpression.getExpression().getText();
  }

  const newExpression = node.getFirstAncestorByKind(SyntaxKind.NewExpression);
  return newExpression?.getExpression().getText();
}

const ALLOWED_HARDCODED_CONTENT_PROPS = new Set([
  'align',
  'aria-controls',
  'aria-hidden',
  'aria-labelledby',
  'className',
  'containerClassName',
  'decoding',
  'data-state',
  'data-testid',
  'density',
  'href',
  'iconKey',
  'id',
  'loading',
  'role',
  'sectionClassName',
  'shellTone',
  'sourceType',
  'src',
  'status',
  'tone',
  'type',
  'variant',
]);

const ALLOWED_HARDCODED_CONTENT_CALLS = new Set([
  'Error',
  'requireHeadingDescription',
  'requireNonEmptyValue',
]);

const ALLOWED_HARDCODED_CONTENT_PARAMETER_NAMES = new Set([
  'align',
  'density',
  'kind',
  'tone',
  'variant',
]);

const ALLOWED_HARDCODED_CONTENT_VALUES = new Set([
  'after',
  'async',
  'before',
  'change',
  'default',
  'good',
  'lazy',
  'light',
  'not',
  'soft',
  'spacious',
  'use client',
]);

function isAllowedHardcodedContentLiteral(node: Node) {
  const value = getLiteralText(node);
  if (!value || value.trim().length === 0) {
    return true;
  }

  if (node.getFirstAncestorByKind(SyntaxKind.ImportDeclaration)) {
    return true;
  }

  if (node.getFirstAncestorByKind(SyntaxKind.ExportDeclaration)) {
    return true;
  }

  if (node.getFirstAncestorByKind(SyntaxKind.LiteralType)) {
    return true;
  }

  const propertyName = getEnclosingPropertyName(node);
  const jsxAttributeName = getEnclosingJsxAttributeName(node);
  if (
    (propertyName && ALLOWED_HARDCODED_CONTENT_PROPS.has(propertyName)) ||
    (jsxAttributeName && ALLOWED_HARDCODED_CONTENT_PROPS.has(jsxAttributeName))
  ) {
    return true;
  }

  const variableName = getEnclosingVariableName(node);
  if (variableName && /(_ICON_KEYS|_CLASS|_DOT)$/.test(variableName)) {
    return true;
  }

  const parameterName = getEnclosingParameterName(node);
  if (parameterName && ALLOWED_HARDCODED_CONTENT_PARAMETER_NAMES.has(parameterName)) {
    return true;
  }

  const bindingElementName = getEnclosingBindingElementName(node);
  if (bindingElementName && ALLOWED_HARDCODED_CONTENT_PARAMETER_NAMES.has(bindingElementName)) {
    return true;
  }

  const callName = getEnclosingCallName(node);
  if (callName && ALLOWED_HARDCODED_CONTENT_CALLS.has(callName)) {
    return true;
  }

  if (ALLOWED_HARDCODED_CONTENT_VALUES.has(value)) {
    return true;
  }

  if (value.includes('Invalid data')) {
    return true;
  }

  if (/^(rd|bg|cta|hero|image|grid|layer|process|proof|fit|accordion|related|scope)-[a-z0-9-]+$/.test(value)) {
    return true;
  }

  if (/^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(value)) {
    return true;
  }

  const parentNode = node.getParent();
  if (
    parentNode &&
    Node.isBinaryExpression(parentNode) &&
    ['===', '!=='].includes(parentNode.getOperatorToken().getText()) &&
    (parentNode.getLeft().getText().startsWith('typeof ') ||
      parentNode.getRight().getText().startsWith('typeof '))
  ) {
    return true;
  }

  if (/^[0-9.]+$/.test(value)) {
    return true;
  }

  if (value.startsWith('@/') || value.startsWith('./') || value.startsWith('../')) {
    return true;
  }

  if (value.startsWith('/') && !value.includes(' ')) {
    return true;
  }

  return false;
}

function pushIssue(issues: Issue[], issue: Issue) {
  issues.push(issue);
}

function scanServiceAndIndustryHeroLists(): Issue[] {
  const issues: Issue[] = [];

  const domains: Array<{ domain: 'services' | 'industries'; glob: string }> = [
    { domain: 'services', glob: DATA_GLOBS.services },
    { domain: 'industries', glob: DATA_GLOBS.industries },
  ];

  for (const { domain, glob } of domains) {
    for (const sourceFile of project.getSourceFiles(glob)) {
      const objectLiteral = getExportedObjectLiteral(sourceFile);
      if (!objectLiteral) continue;

      const heroObject = toObjectLiteral(
        sourceFile,
        getPropertyInitializer(sourceFile, objectLiteral, 'hero')
      );
      if (!heroObject) continue;

      const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
      const list = getArrayStringValues(getPropertyInitializer(sourceFile, heroObject, 'list'));

      if (!list) {
        pushIssue(issues, {
          rule: 'hero-list-length',
          domain,
          file: toRelative(sourceFile.getFilePath()),
          issueType: 'missing_hero_list',
          message: `${domain}/${slug ?? sourceFile.getBaseName()} is missing hero.list.`,
          slug,
        });
        continue;
      }

      if (list.length !== 3) {
        pushIssue(issues, {
          rule: 'hero-list-length',
          domain,
          file: toRelative(sourceFile.getFilePath()),
          issueType: 'invalid_hero_list_count',
          message: `${domain}/${slug ?? sourceFile.getBaseName()} hero.list must contain exactly 3 items; found ${list.length}.`,
          slug,
        });
      }
    }
  }

  return issues;
}

function scanHeadingHierarchy(): Issue[] {
  const issues: Issue[] = [];

  const sourceChecks: Array<{ file: string; needle: string; issueType: string; message: string }> =
    [
      {
        file: 'src/components/reusable/single/SimpleHero.tsx',
        needle: "headingTag = 'h1'",
        issueType: 'hero_not_h1',
        message: 'SimpleHero must default hero headingTag to h1.',
      },
      {
        file: 'src/components/reusable/single/SplitHeroSection.tsx',
        needle: "headingTag = 'h1'",
        issueType: 'hero_not_h1',
        message: 'SplitHeroSection must default hero headingTag to h1.',
      },
      {
        file: 'src/components/reusable/sections/case-studies/CaseStudyHeroSection.tsx',
        needle: "headingTag = 'h1'",
        issueType: 'hero_not_h1',
        message: 'CaseStudyHeroSection must default hero headingTag to h1.',
      },
      {
        file: 'src/components/reusable/single/SectionIntro.tsx',
        needle: "headingLevel = 'h2'",
        issueType: 'section_not_h2',
        message: 'SectionIntro must default section headings to h2.',
      },
    ];

  for (const check of sourceChecks) {
    const fullPath = path.join(root, check.file);
    const sourceText = fs.readFileSync(fullPath, 'utf8');
    if (!sourceText.includes(check.needle)) {
      pushIssue(issues, {
        rule: 'heading-hierarchy',
        domain: 'shared',
        file: check.file,
        issueType: check.issueType,
        message: check.message,
      });
    }
  }

  for (const sourceFile of project.getSourceFiles(DATA_GLOBS.services)) {
    const objectLiteral = getExportedObjectLiteral(sourceFile);
    if (!objectLiteral) continue;
    const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
    const sectionsObject = toObjectLiteral(
      sourceFile,
      getPropertyInitializer(sourceFile, objectLiteral, 'sections')
    );
    if (!sectionsObject) continue;

    for (const property of sectionsObject.getProperties()) {
      if (!Node.isPropertyAssignment(property)) continue;
      const sectionObject = toObjectLiteral(sourceFile, property.getInitializer());
      if (!sectionObject) continue;
      const hasTitle = Boolean(
        getStringValue(getPropertyInitializer(sourceFile, sectionObject, 'title'))
      );
      const headerObject = toObjectLiteral(
        sourceFile,
        getPropertyInitializer(sourceFile, sectionObject, 'header')
      );
      const hasHeaderTitle = headerObject
        ? Boolean(getStringValue(getPropertyInitializer(sourceFile, headerObject, 'title')))
        : false;
      if (!hasTitle && !hasHeaderTitle) {
        pushIssue(issues, {
          rule: 'heading-hierarchy',
          domain: 'services',
          file: toRelative(sourceFile.getFilePath()),
          issueType: 'missing_section_title',
          message: `services/${slug ?? sourceFile.getBaseName()} section ${property.getName()} is missing a title/header.title.`,
          slug,
        });
      }
    }
  }

  for (const sourceFile of project.getSourceFiles(DATA_GLOBS.features)) {
    const objectLiteral = getExportedObjectLiteral(sourceFile);
    if (!objectLiteral) continue;
    const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
    const sectionsObject = toObjectLiteral(
      sourceFile,
      getPropertyInitializer(sourceFile, objectLiteral, 'sections')
    );
    if (!sectionsObject) continue;

    for (const property of sectionsObject.getProperties()) {
      if (!Node.isPropertyAssignment(property)) continue;
      const sectionObject = toObjectLiteral(sourceFile, property.getInitializer());
      if (!sectionObject) continue;
      const hasTitle = Boolean(
        getStringValue(getPropertyInitializer(sourceFile, sectionObject, 'title'))
      );
      if (!hasTitle) {
        pushIssue(issues, {
          rule: 'heading-hierarchy',
          domain: 'features',
          file: toRelative(sourceFile.getFilePath()),
          issueType: 'missing_section_title',
          message: `features/${slug ?? sourceFile.getBaseName()} section ${property.getName()} is missing a title.`,
          slug,
        });
      }
    }
  }

  return issues;
}

function scanSeoPosition(): Issue[] {
  const issues: Issue[] = [];
  const domains = Object.entries(DATA_GLOBS);

  for (const [domain, glob] of domains) {
    for (const sourceFile of project.getSourceFiles(glob)) {
      const objectLiteral = getExportedObjectLiteral(sourceFile);
      if (!objectLiteral) continue;
      const propertyNames = getObjectPropertyNames(objectLiteral);
      const seoIndex = propertyNames.indexOf('seo');
      const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));

      if (seoIndex === -1) {
        pushIssue(issues, {
          rule: 'seo-position',
          domain,
          file: toRelative(sourceFile.getFilePath()),
          issueType: 'missing_seo',
          message: `${domain}/${slug ?? sourceFile.getBaseName()} is missing seo.`,
          slug,
        });
        continue;
      }

      if (seoIndex !== 0) {
        pushIssue(issues, {
          rule: 'seo-position',
          domain,
          file: toRelative(sourceFile.getFilePath()),
          issueType: 'seo_not_first_property',
          message: `${domain}/${slug ?? sourceFile.getBaseName()} must place seo as the first top-level property.`,
          slug,
        });
      }
    }
  }

  return issues;
}

function scanFaqPosition(): Issue[] {
  const issues: Issue[] = [];

  for (const sourceFile of project.getSourceFiles([
    DATA_GLOBS.blog,
    DATA_GLOBS.resources,
    DATA_GLOBS['case-studies'],
  ])) {
    const objectLiteral = getExportedObjectLiteral(sourceFile);
    if (!objectLiteral) continue;
    const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
    const propertyNames = getObjectPropertyNames(objectLiteral);
    if (propertyNames.includes('faq')) {
      pushIssue(issues, {
        rule: 'faq-position',
        domain: sourceFile.getFilePath().includes('/blog/')
          ? 'blog'
          : sourceFile.getFilePath().includes('/resources/')
            ? 'resources'
            : 'case-studies',
        file: toRelative(sourceFile.getFilePath()),
        issueType: 'top_level_faq',
        message: `${slug ?? sourceFile.getBaseName()} must not define a top-level faq block.`,
        slug,
      });
    }
  }

  for (const sourceFile of project.getSourceFiles(DATA_GLOBS.industries)) {
    const objectLiteral = getExportedObjectLiteral(sourceFile);
    if (!objectLiteral) continue;
    const type = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'type'));
    if (type !== 'detail') continue;
    const propertyNames = getObjectPropertyNames(objectLiteral);
    const faqIndex = propertyNames.indexOf('faq');
    const ctaIndex = propertyNames.indexOf('cta');
    const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));

    if (faqIndex === -1) {
      pushIssue(issues, {
        rule: 'faq-position',
        domain: 'industries',
        file: toRelative(sourceFile.getFilePath()),
        issueType: 'missing_faq',
        message: `industries/${slug ?? sourceFile.getBaseName()} detail page is missing faq.`,
        slug,
      });
      continue;
    }

    if (ctaIndex === -1 || faqIndex !== ctaIndex - 1) {
      pushIssue(issues, {
        rule: 'faq-position',
        domain: 'industries',
        file: toRelative(sourceFile.getFilePath()),
        issueType: 'faq_not_positioned_with_render_order',
        message: `industries/${slug ?? sourceFile.getBaseName()} must place faq immediately before cta.`,
        slug,
      });
    }
  }

  return issues;
}

function scanButtonRule(): Issue[] {
  const issues: Issue[] = [];

  const sourceChecks: Array<{
    file: string;
    expected: string[];
    forbidden?: string[];
    issueType: string;
    message: string;
  }> = [
      {
        file: 'src/components/sections/PrimaryCTASection.tsx',
        expected: [
          'throw new Error(\'PrimaryCTASection requires heading.title\');',
          'throw new Error(\'PrimaryCTASection requires heading.description\');',
          'throw new Error(\'PrimaryCTASection requires actions\');',
          'throw new Error(\'PrimaryCTASection must have exactly one CTA\');',
        ],
        forbidden: ['allowSecondaryCTA', 'secondaryAction && <Button', 'ctaList'],
        issueType: 'missing_primary_cta_guard',
        message:
          'PrimaryCTASection must enforce the strict heading/actions single-CTA contract with no secondary or list logic.',
      },
      {
        file: 'src/components/sections/SectionShell.tsx',
        expected: [
          'throw new Error(\'SectionShell requires heading.title when heading is provided.\');',
          'throw new Error(\'SectionShell requires heading.description when heading is provided.\');',
          "<p className='rd-section-description'>{heading.description}</p>",
        ],
        forbidden: ['heading.description ?'],
        issueType: 'missing_section_shell_guard',
        message: 'SectionShell must require and always render heading.description when heading is provided.',
      },
      {
        file: 'src/components/sections/HeroSplitSection.tsx',
        expected: [
          "throw new Error('[HeroSplitSection] Invalid data');",
          "<p className='hero-split__description'>{heading.description}</p>",
        ],
        forbidden: ['heading.description ?', 'rd-btn--secondary'],
        issueType: 'invalid_hero_split_contract',
        message: 'HeroSplitSection must require heading copy and only render a single primary action.',
      },
      {
        file: 'src/components/sections/ImageStorySection.tsx',
        expected: [
          "throw new Error('[ImageStorySection] Invalid data');",
          "<p className='image-story__lede'>{heading.description}</p>",
        ],
        forbidden: ['heading.description ?'],
        issueType: 'invalid_image_story_contract',
        message: 'ImageStorySection must require and always render heading.description.',
      },
      {
        file: 'src/components/sections/LayerStackSection.tsx',
        expected: ["throw new Error('[LayerStackSection] Invalid data');"],
        forbidden: ['return null'],
        issueType: 'invalid_layer_stack_contract',
        message: 'LayerStackSection must fail loud instead of returning null.',
      },
      {
        file: 'src/components/sections/GridCardsSection.tsx',
        expected: ["throw new Error('[GridCardsSection] Invalid data');"],
        issueType: 'invalid_grid_cards_contract',
        message: 'GridCardsSection must fail loud on invalid item data.',
      },
      {
        file: 'src/components/sections/ProcessStepsSection.tsx',
        expected: ["throw new Error('[ProcessStepsSection] Invalid data');"],
        issueType: 'invalid_process_steps_contract',
        message: 'ProcessStepsSection must fail loud on invalid step data.',
      },
      {
        file: 'src/components/sections/RelatedContentSection.tsx',
        expected: ['heading: SectionHeading;', "throw new Error('[RelatedContentSection] Invalid data');"],
        forbidden: ["item.cta ?? 'Read more'"],
        issueType: 'invalid_related_content_contract',
        message: 'RelatedContentSection must require a heading and must not apply CTA label fallback logic.',
      },
      {
        file: 'src/components/system/SmartRelatedSectionClient.tsx',
        expected: [
          "throw new Error('[SmartRelatedSectionClient] Invalid data');",
          'cta: RELATED_CONTENT_CTA_LABEL',
        ],
        forbidden: ['return null', 'emptyState', "'Read more'"],
        issueType: 'invalid_smart_related_system_contract',
        message: 'SmartRelatedSectionClient must fail loud and must not inject hardcoded CTA or empty-state fallbacks.',
      },
      {
        file: 'src/components/system/RetryButtonIsland.tsx',
        expected: ['label: string;'],
        forbidden: ["label = 'Refresh Page'"],
        issueType: 'invalid_retry_button_contract',
        message: 'RetryButtonIsland must require its label instead of applying hardcoded fallback copy.',
      },
      {
        file: 'src/components/system/GenericErrorFallback.tsx',
        expected: ['GENERIC_ERROR_FALLBACK_CONTENT.title', 'GENERIC_ERROR_FALLBACK_CONTENT.description'],
        forbidden: ["Something went wrong", 'Please try refreshing'],
        issueType: 'invalid_generic_error_fallback_contract',
        message: 'GenericErrorFallback must read user-facing copy from the data layer.',
      },
      {
        file: 'src/components/system/GraphAwareSidebar.tsx',
        expected: ["throw new Error('[GraphAwareSidebar] Invalid data');"],
        forbidden: ['return null'],
        issueType: 'invalid_graph_sidebar_contract',
        message: 'GraphAwareSidebar must fail loud instead of silently skipping rendering.',
      },
      {
        file: 'src/components/system/ClusterPageLayout.tsx',
        expected: [
          'sections: ClusterPageSection[];',
          "throw new Error('[ClusterPageLayout] Invalid data');",
        ],
        forbidden: ['getTopicCluster', 'getSystemCluster', 'getContentByIndustry', 'return null'],
        issueType: 'invalid_cluster_page_layout_contract',
        message: 'ClusterPageLayout must be a pure renderer with no fetching, grouping, or silent skips.',
      },
      {
        file: 'src/lib/related/buildRelatedContent.ts',
        expected: [
          "throw new Error('buildRelatedContent requires an explicit page slug and supported page type.');",
          'throw new Error(`No related content available for ${nodeType}:${slug}.`);',
        ],
        forbidden: ['emptyState'],
        issueType: 'invalid_build_related_content_contract',
        message: 'buildRelatedContent must fail loud and must not inject fallback empty-state content.',
      },
      {
        file: 'src/lib/contact/contactHref.ts',
        expected: [
          "throw new Error('normalizeContactContext requires explicit system and source values.');",
        ],
        forbidden: ['DEFAULT_CONTACT_SYSTEM', 'DEFAULT_CONTACT_SOURCE', 'unknown-system', 'direct-visit'],
        issueType: 'invalid_contact_href_contract',
        message: 'Contact href helpers must require explicit contact attribution instead of injecting defaults.',
      },
      {
        file: 'src/components/system/ActionButtons.tsx',
        expected: ["throw new Error('ActionButtons requires an explicit primarySystem.');"],
        forbidden: ["?? 'smart-website-systems'"],
        issueType: 'invalid_action_buttons_contract',
        message: 'ActionButtons must require an explicit primarySystem and must not apply ownership defaults.',
      },
      {
        file: 'src/components/system/PageEnforcement.tsx',
        expected: ['primarySystem: string;'],
        forbidden: ["?? 'smart-website-systems'"],
        issueType: 'invalid_page_enforcement_contract',
        message: 'CTARegistryProvider must require an explicit primarySystem.',
      },
      {
        file: 'src/domains/services/config.tsx',
        expected: ['throw new Error(`Service config requires systems[0] for ${slug}.`);'],
        forbidden: ["?? 'smart-website-systems'"],
        issueType: 'invalid_service_config_contract',
        message: 'Service config must require systems[0] instead of defaulting ownership.',
      },
      {
        file: 'src/domains/features/config.tsx',
        expected: ['throw new Error(`Feature config requires systems[0] for ${slug}.`);'],
        forbidden: ["?? 'smart-website-systems'"],
        issueType: 'invalid_feature_config_contract',
        message: 'Feature config must require systems[0] instead of defaulting ownership.',
      },
      {
        file: 'src/domains/industries/config.tsx',
        expected: ['throw new Error(`Industry config requires systems[0] for ${data.slug}.`);'],
        forbidden: ["?? 'smart-website-systems'"],
        issueType: 'invalid_industry_config_contract',
        message: 'Industry config must require systems[0] instead of defaulting ownership.',
      },
      {
        file: 'src/lib/schema/buildFaqSchema.ts',
        expected: ["throw new Error('buildFaqSchema requires question and answer for every FAQ item.');"],
        forbidden: ['?? faq.q', '?? faq.a'],
        issueType: 'invalid_faq_schema_contract',
        message: 'buildFaqSchema must only support the current question/answer shape.',
      },
      {
        file: 'src/lib/site/staticPages.ts',
        expected: ['STATIC_ROUTE_CONTENT.filter(', "from '@/domains/shared/staticPages'"],
        forbidden: ['const ALL_STATIC_ROUTE_DEFINITIONS'],
        issueType: 'invalid_static_pages_boundary',
        message: 'staticPages lib module must not own authored route content.',
      },
      {
        file: 'src/domains/services/renderers/SmartWebsiteSystemsRenderer.tsx',
        expected: [
          'function requireHeadingDescription(description: string | undefined, section: string)',
          "throw new Error('[comparison section] Invalid data');",
          "throw new Error('[proof section] Invalid data');",
          "heading={data.cta.heading}",
          "actions={data.cta.actions}",
        ],
        forbidden: ['return null', "?? ''", "|| ''"],
        issueType: 'invalid_anchor_renderer_contract',
        message: 'SmartWebsiteSystemsRenderer must stay fail-loud and use the locked PrimaryCTASection contract.',
      },
      {
        file: 'src/domains/services/renderers/LocalSeoAuthorityRenderer.tsx',
        expected: [
          'function requireHeadingDescription(description: string | undefined, section: string)',
          "throw new Error('[comparison section] Invalid data');",
          "throw new Error('[proof section] Invalid data');",
          "heading={data.cta.heading}",
          "actions={data.cta.actions}",
        ],
        forbidden: ['return null', "?? ''", "|| ''"],
        issueType: 'invalid_anchor_renderer_contract',
        message: 'LocalSeoAuthorityRenderer must stay fail-loud and use the locked PrimaryCTASection contract.',
      },
      {
        file: 'src/components/reusable/single/SectionIntro.tsx',
        expected: [],
        forbidden: ['allowSecondaryCTA', 'secondaryAction', 'showSecondaryAction'],
        issueType: 'invalid_sectionintro_secondary_logic',
        message: 'SectionIntro must not expose secondary CTA logic.',
      },
      {
        file: 'src/components/reusable/sections/core/DarkSplitShowcaseSection.tsx',
        expected: [],
        forbidden: ['allowSecondaryCTA', 'secondaryAction'],
        issueType: 'invalid_component_secondary_logic',
        message: 'DarkSplitShowcaseSection must not expose secondary CTA logic.',
      },
      {
        file: 'src/components/reusable/sections/core/NarrativeStatsSection.tsx',
        expected: [],
        forbidden: ['allowSecondaryCTA', 'secondaryAction'],
        issueType: 'invalid_component_secondary_logic',
        message: 'NarrativeStatsSection must not expose secondary CTA logic.',
      },
      {
        file: 'src/components/reusable/sections/core/TestimonialSpotlightSplitSection.tsx',
        expected: [],
        forbidden: ['allowSecondaryCTA', 'secondaryAction'],
        issueType: 'invalid_component_secondary_logic',
        message: 'TestimonialSpotlightSplitSection must not expose secondary CTA logic.',
      },
      {
        file: 'src/components/reusable/sections/core/StackedFeatureListSection.tsx',
        expected: [],
        forbidden: ['allowSecondaryCTA', 'secondaryAction'],
        issueType: 'invalid_component_secondary_logic',
        message: 'StackedFeatureListSection must not expose secondary CTA logic.',
      },
    ];

  for (const check of sourceChecks) {
    const sourceText = fs.readFileSync(path.join(root, check.file), 'utf8');
    const missingExpected = !check.expected.every(needle => sourceText.includes(needle));
    const hasForbidden = (check.forbidden ?? []).some(needle => sourceText.includes(needle));
    if (missingExpected || hasForbidden) {
      pushIssue(issues, {
        rule: 'button-rule',
        domain: 'shared',
        file: check.file,
        issueType: check.issueType,
        message: check.message,
      });
    }
  }

  if (
    fs
      .readFileSync(
        path.join(root, 'src/domains/industries/templates/IndustryCategoryPageTemplate.tsx'),
        'utf8'
      )
      .includes('IndustrySubIndustriesSection')
  ) {
    pushIssue(issues, {
      rule: 'button-rule',
      domain: 'industries',
      file: 'src/domains/industries/templates/IndustryCategoryPageTemplate.tsx',
      issueType: 'implicit_section_injection',
      message: 'IndustryCategoryPageTemplate must not inject fallback sub-industry sections.',
    });
  }

  return issues;
}

function scanBadgeLength(): Issue[] {
  const issues: Issue[] = [];

  for (const sourceFile of project.getSourceFiles(DATA_GLOBS.services)) {
    const objectLiteral = getExportedObjectLiteral(sourceFile);
    if (!objectLiteral) continue;
    const badge = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'badge'));
    const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
    if (badge && countWords(badge) > 3) {
      pushIssue(issues, {
        rule: 'badge-length',
        domain: 'services',
        file: toRelative(sourceFile.getFilePath()),
        issueType: 'badge_too_long',
        message: `services/${slug ?? sourceFile.getBaseName()} badge must be 3 words or fewer: "${badge}".`,
        slug,
      });
    }
  }

  for (const sourceFile of project.getSourceFiles(DATA_GLOBS.features)) {
    const objectLiteral = getExportedObjectLiteral(sourceFile);
    if (!objectLiteral) continue;
    const badge = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'badge'));
    const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
    if (badge && countWords(badge) > 3) {
      pushIssue(issues, {
        rule: 'badge-length',
        domain: 'features',
        file: toRelative(sourceFile.getFilePath()),
        issueType: 'badge_too_long',
        message: `features/${slug ?? sourceFile.getBaseName()} badge must be 3 words or fewer: "${badge}".`,
        slug,
      });
    }
  }

  for (const sourceFile of project.getSourceFiles(DATA_GLOBS.industries)) {
    const objectLiteral = getExportedObjectLiteral(sourceFile);
    if (!objectLiteral) continue;
    const heroObject = toObjectLiteral(
      sourceFile,
      getPropertyInitializer(sourceFile, objectLiteral, 'hero')
    );
    const badge = heroObject
      ? getStringValue(getPropertyInitializer(sourceFile, heroObject, 'badge'))
      : undefined;
    const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
    if (badge && countWords(badge) > 3) {
      pushIssue(issues, {
        rule: 'badge-length',
        domain: 'industries',
        file: toRelative(sourceFile.getFilePath()),
        issueType: 'badge_too_long',
        message: `industries/${slug ?? sourceFile.getBaseName()} hero badge must be 3 words or fewer: "${badge}".`,
        slug,
      });
    }
  }

  return issues;
}

function scanNoHardcodedContent(): Issue[] {
  const issues: Issue[] = [];
  const targets = [
    ...project.getSourceFiles('src/components/sections/*.tsx'),
    project.getSourceFile('src/domains/services/renderers/SmartWebsiteSystemsRenderer.tsx') ??
    project.addSourceFileAtPath(
      path.join(root, 'src/domains/services/renderers/SmartWebsiteSystemsRenderer.tsx')
    ),
    project.getSourceFile('src/domains/services/renderers/LocalSeoAuthorityRenderer.tsx') ??
    project.addSourceFileAtPath(
      path.join(root, 'src/domains/services/renderers/LocalSeoAuthorityRenderer.tsx')
    ),
  ];

  const seen = new Set<string>();

  for (const sourceFile of targets) {
    for (const node of sourceFile.getDescendants()) {
      if (!Node.isStringLiteral(node) && !Node.isNoSubstitutionTemplateLiteral(node)) {
        continue;
      }

      if (isAllowedHardcodedContentLiteral(node)) {
        continue;
      }

      const value = getLiteralText(node);
      if (!value) {
        continue;
      }

      const key = `${toRelative(sourceFile.getFilePath())}:${node.getStartLineNumber()}:${value}`;
      if (seen.has(key)) {
        continue;
      }
      seen.add(key);

      pushIssue(issues, {
        rule: 'no-hardcoded-content',
        domain: sourceFile.getFilePath().includes('/renderers/') ? 'services' : 'shared',
        file: toRelative(sourceFile.getFilePath()),
        issueType: 'hardcoded_content_literal',
        message: `${toRelative(sourceFile.getFilePath())} contains hardcoded content literal ${JSON.stringify(value)}.`,
      });
    }
  }

  return issues;
}

function scanVariantRequiredData(): Issue[] {
  const issues: Issue[] = [];

  const sourceChecks: Array<{
    file: string;
    expected: string[];
    issueType: string;
    message: string;
  }> = [
      {
        file: 'src/components/sections/HeroSplitSection.tsx',
        expected: [
          "actions[0].label.trim().length === 0 || actions[0].href.trim().length === 0",
          "row.label.trim().length === 0 || row.value.trim().length === 0",
          "visual.footerPrimary !== undefined && visual.footerPrimary.trim().length === 0",
        ],
        issueType: 'hero_split_missing_required_variant_guards',
        message: 'HeroSplitSection must validate the authored action, row, and footer fields it renders.',
      },
      {
        file: 'src/components/sections/GridCardsSection.tsx',
        expected: ['!item.id || item.id.trim().length === 0 || item.title.trim().length === 0', 'key={item.id}'],
        issueType: 'grid_cards_missing_required_variant_guards',
        message: 'GridCardsSection must require explicit item ids and fail loud instead of generating fallback keys.',
      },
      {
        file: 'src/components/sections/LayerStackSection.tsx',
        expected: [
          "layer.meta !== undefined && layer.meta.trim().length === 0",
          "layer.bullets?.some(bullet => bullet.trim().length === 0)",
          'aria-label={heading.title}',
        ],
        issueType: 'layer_stack_missing_required_variant_guards',
        message: 'LayerStackSection must validate rendered meta and bullets and derive its aria label from data.',
      },
      {
        file: 'src/components/sections/ProcessStepsSection.tsx',
        expected: ["step.outcome !== undefined && step.outcome.trim().length === 0"],
        issueType: 'process_steps_missing_required_variant_guards',
        message: 'ProcessStepsSection must validate authored outcome copy when it is rendered.',
      },
      {
        file: 'src/components/sections/ImageStorySection.tsx',
        expected: [
          "body !== undefined && body.trim().length === 0",
          "caption !== undefined && caption.trim().length === 0",
          'highlights?.some(',
        ],
        issueType: 'image_story_missing_required_variant_guards',
        message: 'ImageStorySection must validate the authored body, caption, bullets, and highlights it renders.',
      },
      {
        file: 'src/components/sections/BeforeAfterSection.tsx',
        expected: [
          'before.items.some(item => item.trim().length === 0)',
          'after.items.some(item => item.trim().length === 0)',
        ],
        issueType: 'before_after_missing_required_variant_guards',
        message: 'BeforeAfterSection must validate every authored comparison item it renders.',
      },
      {
        file: 'src/components/sections/ProofStorySection.tsx',
        expected: [
          "column.metric !== undefined && column.metric.trim().length === 0",
          "column.metricCaption !== undefined && column.metricCaption.trim().length === 0",
          "attribution !== undefined && attribution.trim().length === 0",
        ],
        issueType: 'proof_story_missing_required_variant_guards',
        message: 'ProofStorySection must validate all authored optional proof fields before rendering them.',
      },
      {
        file: 'src/components/sections/FitCheckSection.tsx',
        expected: ["item.note !== undefined && item.note.trim().length === 0"],
        issueType: 'fit_check_missing_required_variant_guards',
        message: 'FitCheckSection must validate authored note copy before rendering it.',
      },
      {
        file: 'src/components/sections/AccordionFAQSection.tsx',
        expected: ['defaultOpenId !== undefined && !items.some(item => item.id === defaultOpenId)'],
        issueType: 'accordion_faq_missing_required_variant_guards',
        message: 'AccordionFAQSection must validate defaultOpenId against authored FAQ ids.',
      },
    ];

  for (const check of sourceChecks) {
    const sourceText = fs.readFileSync(path.join(root, check.file), 'utf8');
    if (!check.expected.every(needle => sourceText.includes(needle))) {
      pushIssue(issues, {
        rule: 'variant-required-data',
        domain: 'shared',
        file: check.file,
        issueType: check.issueType,
        message: check.message,
      });
    }
  }

  return issues;
}

function collectIssues(activeRule: RuleName): Issue[] {
  switch (activeRule) {
    case 'hero-list-length':
      return scanServiceAndIndustryHeroLists();
    case 'heading-hierarchy':
      return scanHeadingHierarchy();
    case 'seo-position':
      return scanSeoPosition();
    case 'faq-position':
      return scanFaqPosition();
    case 'button-rule':
      return scanButtonRule();
    case 'badge-length':
      return scanBadgeLength();
    case 'no-hardcoded-content':
      return scanNoHardcodedContent();
    case 'variant-required-data':
      return scanVariantRequiredData();
    default:
      throw new Error(`Unsupported rule: ${activeRule}`);
  }
}

async function main() {
  if (!(rule in REPORT_FILE_BY_RULE)) {
    throw new Error(`Missing or unsupported --rule value: ${rule}`);
  }

  const issues = collectIssues(rule);
  const reportPath = path.join(root, 'reports', REPORT_FILE_BY_RULE[rule]);
  const normalizedReport = normalizeRawReport({
    name: rule,
    payload: issues,
    sourceCommand: SOURCE_COMMAND_BY_RULE[rule],
  });

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, `${JSON.stringify(normalizedReport, null, 2)}\n`, 'utf8');

  if (reportJson) {
    logger.printSummary(`report-json flag active; report -> ${logger.relativePath(reportPath)}`);
  }

  if ((normalizedReport.summary.failed ?? 0) > 0) {
    logger.printErrors(
      issues.map(issue => `${issue.file}: ${issue.message}`),
      'violations',
      50
    );
    process.exit(1);
  }

  logger.printSummary(`passed (${rule})`);
}

await main();

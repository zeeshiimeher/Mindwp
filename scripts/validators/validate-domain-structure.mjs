#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { Project, SyntaxKind } from 'ts-morph';

import { FEATURE_REGISTRY } from '../../src/domains/features/registry.ts';
import { INDUSTRY_REGISTRY } from '../../src/domains/industries/registry.ts';
import { SERVICE_REGISTRY } from '../../src/domains/services/registry.ts';

import {
  extractSectionsOrderFromRenderer,
  getPropertyInitializer,
  getPropertyAssignment,
  getSectionsObjectLiteral,
  getSectionsOrder,
  resolveStringValue,
  getStringLiteralValue,
  hasProperty,
  importPathToFile,
  toObjectLiteral,
} from '../lib/validator-helpers.mjs';

const args = process.argv.slice(2);
const argsSet = new Set(args);
const shouldReportJson = argsSet.has('--report-json');
const requestedTypeIndex = args.indexOf('--type');
const requestedType = requestedTypeIndex >= 0 ? args[requestedTypeIndex + 1] : null;

if (argsSet.has('--fix')) {
  console.warn('[validate-domain-structure] --fix is not supported in the merged validator. Running in read-only mode.');
}

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'domain-structure-report.json');
const project = new Project({ tsConfigFilePath: path.join(root, 'tsconfig.json') });

function normalizeRequestedType(value) {
  if (!value) return null;

  const normalized = value.trim().toLowerCase();
  if (normalized === 'services') return 'service';
  if (normalized === 'features') return 'feature';
  if (normalized === 'industries') return 'industry';
  if (normalized === 'case-studies') return 'case-study';
  return normalized;
}

function getExportedObjectLiteral(sourceFile) {
  const declaration = sourceFile
    .getVariableDeclarations()
    .find(item => item.getVariableStatement()?.isExported());

  if (!declaration) return null;

  return {
    declaration,
    objectLiteral: toObjectLiteral(declaration.getInitializer()),
  };
}

function pushIssue(issues, type, file, code, message) {
  issues.push({ type, file, code, message });
}

function validateRegistryCoverage(issues, type, file, registryLabel, sourceSlugs, registrySlugs) {
  const missingRegistrySlugs = [...sourceSlugs]
    .filter(slug => !registrySlugs.has(slug))
    .sort((left, right) => left.localeCompare(right));
  const extraRegistrySlugs = [...registrySlugs]
    .filter(slug => !sourceSlugs.has(slug))
    .sort((left, right) => left.localeCompare(right));

  if (missingRegistrySlugs.length > 0) {
    pushIssue(
      issues,
      type,
      file,
      'missing_registry_entry',
      `${registryLabel} is missing source-backed slug(s): ${missingRegistrySlugs.join(', ')}.`
    );
  }

  if (extraRegistrySlugs.length > 0) {
    pushIssue(
      issues,
      type,
      file,
      'stale_registry_entry',
      `${registryLabel} contains slug(s) with no matching source file: ${extraRegistrySlugs.join(', ')}.`
    );
  }
}

function hasNonEmptyString(initializer, sourceFile) {
  const value = resolveStringValue(initializer, sourceFile);
  return typeof value === 'string' && value.trim().length > 0;
}

function getObjectPropertyLiteral(objectLiteral, key) {
  return toObjectLiteral(getPropertyInitializer(objectLiteral, key));
}

function getArrayItemCount(initializer) {
  return initializer?.asKind(SyntaxKind.ArrayLiteralExpression)?.getElements().length ?? 0;
}

function hasResolvableOrDelegatedList(initializer) {
  if (!initializer) {
    return false;
  }

  const arrayLiteral = initializer.asKind(SyntaxKind.ArrayLiteralExpression);
  if (arrayLiteral) {
    return arrayLiteral.getElements().length > 0;
  }

  return true;
}

function hasSpreadAssignment(objectLiteral) {
  return objectLiteral.getProperties().some(property => property.getKind() === SyntaxKind.SpreadAssignment);
}

function validateServiceConversionContracts(issues, rel, sourceFile, exportedObject, sectionsObject) {
  const heroObject = getObjectPropertyLiteral(exportedObject, 'hero');
  if (!heroObject || !hasNonEmptyString(getPropertyInitializer(heroObject, 'title'), sourceFile)) {
    pushIssue(issues, 'service', rel, 'missing_conversion_hero_title', 'hero.title must be a non-empty string.');
  }

  if (!heroObject || !hasNonEmptyString(getPropertyInitializer(heroObject, 'description'), sourceFile)) {
    pushIssue(issues, 'service', rel, 'missing_conversion_hero_description', 'hero.description must be a non-empty string.');
  }

  const ctaObject = getObjectPropertyLiteral(exportedObject, 'cta');
  if (!ctaObject) {
    pushIssue(issues, 'service', rel, 'missing_conversion_cta', 'Service pages must define a top-level cta block.');
  } else {
    if (!hasNonEmptyString(getPropertyInitializer(ctaObject, 'title'), sourceFile)) {
      pushIssue(issues, 'service', rel, 'missing_conversion_cta_title', 'cta.title must be a non-empty string.');
    }

    if (!hasNonEmptyString(getPropertyInitializer(ctaObject, 'description'), sourceFile)) {
      pushIssue(issues, 'service', rel, 'missing_conversion_cta_description', 'cta.description must be a non-empty string.');
    }
  }

  const inlineCtaObject = getObjectPropertyLiteral(exportedObject, 'inlineCta');
  if (inlineCtaObject) {
    if (!hasNonEmptyString(getPropertyInitializer(inlineCtaObject, 'title'), sourceFile)) {
      pushIssue(issues, 'service', rel, 'invalid_inline_cta_title', 'inlineCta.title must be a non-empty string when inlineCta is present.');
    }

    if (!hasNonEmptyString(getPropertyInitializer(inlineCtaObject, 'description'), sourceFile)) {
      pushIssue(issues, 'service', rel, 'invalid_inline_cta_description', 'inlineCta.description must be a non-empty string when inlineCta is present.');
    }
  }

  const qualificationObject = getObjectPropertyLiteral(sectionsObject, 'qualification');
  if (qualificationObject) {
    const qualificationUsesSpread = hasSpreadAssignment(qualificationObject);
    const qualificationHeader = getObjectPropertyLiteral(qualificationObject, 'header');
    const hasQualificationTitle =
      hasNonEmptyString(getPropertyInitializer(qualificationObject, 'title'), sourceFile) ||
      (qualificationHeader &&
        hasNonEmptyString(getPropertyInitializer(qualificationHeader, 'title'), sourceFile));
    const hasQualificationDescription =
      hasNonEmptyString(getPropertyInitializer(qualificationObject, 'description'), sourceFile) ||
      (qualificationHeader &&
        hasNonEmptyString(getPropertyInitializer(qualificationHeader, 'description'), sourceFile));

    if (!hasQualificationTitle && !qualificationUsesSpread) {
      pushIssue(issues, 'service', rel, 'invalid_qualification_title', 'sections.qualification.title must be a non-empty string.');
    }

    if (!hasQualificationDescription && !qualificationUsesSpread) {
      pushIssue(issues, 'service', rel, 'invalid_qualification_description', 'sections.qualification.description must be a non-empty string.');
    }

    const hasStrongFitTitle = hasNonEmptyString(getPropertyInitializer(qualificationObject, 'strongFitTitle'), sourceFile);
    const hasNotFitTitle =
      hasNonEmptyString(getPropertyInitializer(qualificationObject, 'notDesignedTitle'), sourceFile) ||
      hasNonEmptyString(getPropertyInitializer(qualificationObject, 'notForTitle'), sourceFile);
    const hasStrongFitItems =
      hasResolvableOrDelegatedList(getPropertyInitializer(qualificationObject, 'strongFitItems')) ||
      hasResolvableOrDelegatedList(getPropertyInitializer(qualificationObject, 'strongFit'));
    const hasNotFitItems =
      hasResolvableOrDelegatedList(getPropertyInitializer(qualificationObject, 'notDesignedItems')) ||
      hasResolvableOrDelegatedList(getPropertyInitializer(qualificationObject, 'notFor'));

    if (
      (!hasStrongFitTitle || !hasNotFitTitle || !hasStrongFitItems || !hasNotFitItems) &&
      !qualificationUsesSpread
    ) {
      pushIssue(
        issues,
        'service',
        rel,
        'invalid_qualification_contract',
        'sections.qualification must define titled strong-fit and not-fit lists with at least one item each.'
      );
    }
  }

  const proofObject = getObjectPropertyLiteral(sectionsObject, 'proof');
  if (proofObject) {
    const proofUsesSpread = hasSpreadAssignment(proofObject);
    const proofHeader = getObjectPropertyLiteral(proofObject, 'header');
    const hasProofItems =
      hasResolvableOrDelegatedList(getPropertyInitializer(proofObject, 'cards')) ||
      hasResolvableOrDelegatedList(getPropertyInitializer(proofObject, 'items'));

    if (!proofHeader || !hasNonEmptyString(getPropertyInitializer(proofHeader, 'title'), sourceFile)) {
      pushIssue(issues, 'service', rel, 'invalid_proof_header_title', 'sections.proof.header.title must be a non-empty string.');
    }

    if (!proofHeader || !hasNonEmptyString(getPropertyInitializer(proofHeader, 'description'), sourceFile)) {
      pushIssue(issues, 'service', rel, 'invalid_proof_header_description', 'sections.proof.header.description must be a non-empty string.');
    }

    if (!hasProofItems && !proofUsesSpread) {
      pushIssue(issues, 'service', rel, 'invalid_proof_items', 'sections.proof must define at least one card or item.');
    }
  }

  const transformationProofObject = getObjectPropertyLiteral(exportedObject, 'transformationProof');
  if (transformationProofObject) {
    const beforeObject = getObjectPropertyLiteral(transformationProofObject, 'before');
    const buildObject = getObjectPropertyLiteral(transformationProofObject, 'build');
    const afterObject = getObjectPropertyLiteral(transformationProofObject, 'after');

    if (!beforeObject || !hasNonEmptyString(getPropertyInitializer(beforeObject, 'title'), sourceFile)) {
      pushIssue(issues, 'service', rel, 'invalid_transformation_proof_before_title', 'transformationProof.before.title must be a non-empty string.');
    }

    if (!buildObject || !hasNonEmptyString(getPropertyInitializer(buildObject, 'title'), sourceFile)) {
      pushIssue(issues, 'service', rel, 'invalid_transformation_proof_build_title', 'transformationProof.build.title must be a non-empty string.');
    }

    if (!buildObject || !hasNonEmptyString(getPropertyInitializer(buildObject, 'description'), sourceFile)) {
      pushIssue(issues, 'service', rel, 'invalid_transformation_proof_build_description', 'transformationProof.build.description must be a non-empty string.');
    }

    if (!afterObject || !hasNonEmptyString(getPropertyInitializer(afterObject, 'title'), sourceFile)) {
      pushIssue(issues, 'service', rel, 'invalid_transformation_proof_after_title', 'transformationProof.after.title must be a non-empty string.');
    }

    const beforePoints = beforeObject ? getArrayItemCount(getPropertyInitializer(beforeObject, 'points')) : 0;
    const buildHighlights = buildObject ? getArrayItemCount(getPropertyInitializer(buildObject, 'highlights')) : 0;
    const afterResults = afterObject ? getArrayItemCount(getPropertyInitializer(afterObject, 'results')) : 0;

    if (beforePoints === 0 || buildHighlights === 0 || afterResults === 0) {
      pushIssue(
        issues,
        'service',
        rel,
        'invalid_transformation_proof_contract',
        'transformationProof must define before.points, build.highlights, and after.results with at least one item each.'
      );
    }
  }
}

function getSeoCanonicalValue(initializer, sourceFile) {
  const seoObject = initializer?.asKind(SyntaxKind.ObjectLiteralExpression);
  if (seoObject) {
    return resolveStringValue(getPropertyAssignment(seoObject, 'canonical')?.getInitializer(), sourceFile);
  }

  const seoBuilderCall = initializer?.asKind(SyntaxKind.CallExpression);
  if (!seoBuilderCall) return null;

  const builderName = seoBuilderCall.getExpression().getText();
  if (builderName !== 'buildServiceSeo' && builderName !== 'buildFeatureSeo') {
    return null;
  }

  const config = seoBuilderCall.getArguments()[0]?.asKind(SyntaxKind.ObjectLiteralExpression);
  if (!config) return null;

  const slug = resolveStringValue(getPropertyInitializer(config, 'slug'), sourceFile);
  if (!slug) return null;

  return builderName === 'buildServiceSeo' ? `/services/${slug}` : `/features/${slug}`;
}

function buildServiceRendererOrder() {
  const configPath = path.join(root, 'src', 'domains', 'services', 'config.tsx');
  const sourceFile = project.addSourceFileAtPathIfExists(configPath);
  if (!sourceFile) return { orderBySlug: {}, slugByFile: new Map() };

  const importMap = new Map();
  for (const declaration of sourceFile.getImportDeclarations()) {
    const moduleSpecifier = declaration.getModuleSpecifierValue();
    const defaultImport = declaration.getDefaultImport();
    if (defaultImport) importMap.set(defaultImport.getText(), moduleSpecifier);
    for (const namedImport of declaration.getNamedImports()) {
      importMap.set(namedImport.getName(), moduleSpecifier);
    }
  }

  const declaration = sourceFile.getVariableDeclaration('SERVICE_ENTRY_BY_SLUG');
  const initializer = declaration?.getInitializer();
  const objectLiteral = initializer?.getKind() === SyntaxKind.ObjectLiteralExpression
    ? initializer
    : initializer?.getKind() === SyntaxKind.AsExpression
      ? initializer.getExpression().asKind(SyntaxKind.ObjectLiteralExpression)
      : initializer?.getKind() === SyntaxKind.SatisfiesExpression
        ? initializer.getExpression().asKind(SyntaxKind.ObjectLiteralExpression)
        : null;

  if (!objectLiteral) return { orderBySlug: {}, slugByFile: new Map() };

  const orderBySlug = {};
  const slugByFile = new Map();
  const configDir = path.dirname(configPath);

  for (const property of objectLiteral.getProperties()) {
    if (property.getKind() !== SyntaxKind.PropertyAssignment) continue;
    const slug = property.getName().replace(/^['"]|['"]$/g, '');
    const callExpression = property.getInitializerIfKind(SyntaxKind.CallExpression);
    if (!callExpression) continue;

    const dataArg = callExpression.getArguments()[0];
    if (dataArg?.getKind() === SyntaxKind.Identifier) {
      const dataPath = importPathToFile(importMap.get(dataArg.getText()), configDir);
      if (dataPath) slugByFile.set(path.normalize(dataPath), slug);
    }

    const renderArg = callExpression.getArguments()[1];
    const jsxSelfClosing = renderArg?.getFirstDescendantByKind(SyntaxKind.JsxSelfClosingElement);
    const jsxOpening = renderArg?.getFirstDescendantByKind(SyntaxKind.JsxOpeningElement);
    const rendererName = jsxSelfClosing?.getTagNameNode().getText() ?? jsxOpening?.getTagNameNode().getText();
    if (!rendererName) continue;

    const rendererPath = importPathToFile(importMap.get(rendererName), configDir);
    if (!rendererPath) continue;
    orderBySlug[slug] = extractSectionsOrderFromRenderer(rendererPath);
  }

  return { orderBySlug, slugByFile };
}

function collectIndustrySourceSlugs() {
  const industriesRoot = path.join(root, 'src', 'domains', 'industries', 'pages');
  const sourceSlugs = new Set();

  function visit(dirPath) {
    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        visit(fullPath);
        continue;
      }

      if (!entry.name.endsWith('.ts') && !entry.name.endsWith('.tsx')) {
        continue;
      }

      const sourceFile = project.addSourceFileAtPathIfExists(fullPath);
      const exportedDeclaration = sourceFile
        ?.getVariableDeclarations()
        .find(item => item.getVariableStatement()?.isExported());
      const pageObject = exportedDeclaration ? getIndustryObjectLiteral(exportedDeclaration) : null;
      if (!pageObject) {
        continue;
      }

      const seoObject = getPropertyAssignment(pageObject, 'seo')?.getInitializerIfKind(
        SyntaxKind.ObjectLiteralExpression
      );
      const canonical = seoObject
        ? getStringLiteralValue(getPropertyAssignment(seoObject, 'canonical')?.getInitializer())
        : null;

      if (!canonical || !canonical.startsWith('/industries/')) {
        continue;
      }

      sourceSlugs.add(canonical.replace(/^\/industries\//, ''));
    }
  }

  if (fs.existsSync(industriesRoot)) {
    visit(industriesRoot);
  }

  return sourceSlugs;
}

function validateServiceStructure(issues) {
  const requiredKeys = ['keywords', 'badge', 'category', 'seo', 'hero', 'sections', 'cta'];
  const sourceFiles = project.getSourceFiles('src/domains/services/data/*.ts');
  const { orderBySlug, slugByFile } = buildServiceRendererOrder();
  const sourceSlugs = new Set();

  for (const sourceFile of sourceFiles) {
    const rel = path.relative(root, sourceFile.getFilePath());
    const exported = getExportedObjectLiteral(sourceFile);
    if (!exported?.objectLiteral) {
      pushIssue(issues, 'service', rel, 'missing_export', 'Missing exported service data object literal.');
      continue;
    }

    const expectedSlug = slugByFile.get(path.normalize(sourceFile.getFilePath())) ?? path.basename(sourceFile.getFilePath(), '.ts');
    sourceSlugs.add(expectedSlug);
    for (const key of requiredKeys) {
      if (!hasProperty(exported.objectLiteral, key)) {
        pushIssue(issues, 'service', rel, 'missing_required_key', `Missing required key "${key}".`);
      }
    }

    const canonical = getSeoCanonicalValue(
      getPropertyInitializer(exported.objectLiteral, 'seo'),
      sourceFile
    );
    if (canonical !== `/services/${expectedSlug}`) {
      pushIssue(issues, 'service', rel, 'canonical_mismatch', `seo.canonical must be /services/${expectedSlug}.`);
    }

    const sectionsObject = getSectionsObjectLiteral(exported.objectLiteral);
    const expectedOrder = orderBySlug[expectedSlug] ?? [];
    if (!sectionsObject) {
      pushIssue(issues, 'service', rel, 'invalid_sections', 'sections must be an object literal.');
      continue;
    }

    if (expectedOrder.length > 0) {
      const currentOrder = getSectionsOrder(sectionsObject);
      const missingKeys = expectedOrder.filter(key => !currentOrder.includes(key));
      if (missingKeys.length > 0) {
        pushIssue(
          issues,
          'service',
          rel,
          'missing_renderer_section',
          `sections is missing renderer-referenced key(s) for ${expectedSlug}: ${missingKeys.join(', ')}.`
        );
      }
    }

    validateServiceConversionContracts(issues, rel, sourceFile, exported.objectLiteral, sectionsObject);
  }

  validateRegistryCoverage(
    issues,
    'service',
    path.relative(root, path.join(root, 'src', 'domains', 'services', 'registry.ts')),
    'SERVICE_REGISTRY',
    sourceSlugs,
    new Set(Object.keys(SERVICE_REGISTRY))
  );

  return sourceFiles.length;
}

function buildFeatureRendererOrder() {
  const configPath = path.join(root, 'src', 'domains', 'features', 'config.tsx');
  const sourceFile = project.addSourceFileAtPathIfExists(configPath);
  if (!sourceFile) return {};

  const importMap = new Map();
  for (const declaration of sourceFile.getImportDeclarations()) {
    const moduleSpecifier = declaration.getModuleSpecifierValue();
    const defaultImport = declaration.getDefaultImport();
    if (defaultImport) importMap.set(defaultImport.getText(), moduleSpecifier);
    for (const namedImport of declaration.getNamedImports()) {
      importMap.set(namedImport.getName(), moduleSpecifier);
    }
  }

  const declaration = sourceFile.getVariableDeclaration('FEATURE_ENTRY_BY_SLUG');
  const objectLiteral = declaration?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
  if (!objectLiteral) return {};

  const orderBySlug = {};
  const configDir = path.dirname(configPath);

  for (const property of objectLiteral.getProperties()) {
    if (property.getKind() !== SyntaxKind.PropertyAssignment) continue;
    const slug = property.getName().replace(/^['"]|['"]$/g, '');
    const callExpression = property.getInitializerIfKind(SyntaxKind.CallExpression);
    const pageIdentifier = callExpression?.getArguments()[1];
    if (!pageIdentifier || pageIdentifier.getKind() !== SyntaxKind.Identifier) continue;

    const pagePath = importPathToFile(importMap.get(pageIdentifier.getText()), configDir);
    if (!pagePath || !fs.existsSync(pagePath)) continue;

    const pageText = fs.readFileSync(pagePath, 'utf8');
    const rendererMatch = pageText.match(/import\s+\w+\s+from\s+['"](@\/domains\/features\/renderers\/[^'"]+)['"]/m);
    const rendererPath = rendererMatch ? importPathToFile(rendererMatch[1], path.dirname(pagePath)) : null;
    if (!rendererPath) continue;
    orderBySlug[slug] = extractSectionsOrderFromRenderer(rendererPath);
  }

  return orderBySlug;
}

function validateFeatureStructure(issues) {
  const requiredKeys = ['slug', 'seo', 'hero', 'sections', 'cta'];
  const sourceFiles = project.getSourceFiles('src/domains/features/data/*.ts');
  const orderBySlug = buildFeatureRendererOrder();
  const sourceSlugs = new Set();

  for (const sourceFile of sourceFiles) {
    const rel = path.relative(root, sourceFile.getFilePath());
    const exported = getExportedObjectLiteral(sourceFile);
    if (!exported?.objectLiteral) {
      pushIssue(issues, 'feature', rel, 'missing_export', 'Missing exported feature data object literal.');
      continue;
    }

    const expectedSlug = path.basename(sourceFile.getFilePath(), '.ts');
    sourceSlugs.add(expectedSlug);
    for (const key of requiredKeys) {
      if (!hasProperty(exported.objectLiteral, key)) {
        pushIssue(issues, 'feature', rel, 'missing_required_key', `Missing required key "${key}".`);
      }
    }

    const slug = resolveStringValue(getPropertyInitializer(exported.objectLiteral, 'slug'), sourceFile);
    if (slug !== expectedSlug) {
      pushIssue(issues, 'feature', rel, 'slug_mismatch', `slug must match file name ${expectedSlug}.`);
    }

    const canonical = getSeoCanonicalValue(
      getPropertyInitializer(exported.objectLiteral, 'seo'),
      sourceFile
    );
    if (canonical !== `/features/${expectedSlug}`) {
      pushIssue(issues, 'feature', rel, 'canonical_mismatch', `seo.canonical must be /features/${expectedSlug}.`);
    }

    const sectionsObject = getSectionsObjectLiteral(exported.objectLiteral);
    const expectedOrder = orderBySlug[expectedSlug] ?? [];
    if (!sectionsObject) {
      pushIssue(issues, 'feature', rel, 'invalid_sections', 'sections must be an object literal.');
      continue;
    }

    if (expectedOrder.length > 0) {
      const currentOrder = getSectionsOrder(sectionsObject);
      const filteredCurrent = currentOrder.filter(key => expectedOrder.includes(key));
      const filteredExpected = expectedOrder.filter(key => currentOrder.includes(key));
      const matches = filteredCurrent.length === filteredExpected.length && filteredCurrent.every((key, index) => key === filteredExpected[index]);
      if (!matches) {
        pushIssue(issues, 'feature', rel, 'section_order_mismatch', `sections order does not match renderer order for ${expectedSlug}.`);
      }
    }
  }

  validateRegistryCoverage(
    issues,
    'feature',
    path.relative(root, path.join(root, 'src', 'domains', 'features', 'registry.ts')),
    'FEATURE_REGISTRY',
    sourceSlugs,
    new Set(FEATURE_REGISTRY.map(feature => feature.slug))
  );

  return sourceFiles.length;
}

function validateHomeStructure(issues) {
  const filePath = path.join(root, 'src', 'domains', 'home', 'data', 'homepage.ts');
  const sourceFile = project.addSourceFileAtPathIfExists(filePath);
  const rel = path.relative(root, filePath);
  const requiredKeys = [
    'seo',
    'hero',
    'infrastructureGaps',
    'smartWebsiteFramework',
    'implementationSection',
    'clientJourney',
    'systemCapabilities',
    'infrastructureLayers',
    'industries',
    'visibilityTimeline',
    'caseStudies',
    'faq',
    'cta',
  ];

  if (!sourceFile) {
    pushIssue(issues, 'home', rel, 'missing_file', 'Missing homepage data file.');
    return 0;
  }

  const declaration = sourceFile.getVariableDeclaration('homepageData');
  const objectLiteral = declaration ? toObjectLiteral(declaration.getInitializer()) : null;
  if (!objectLiteral) {
    pushIssue(issues, 'home', rel, 'missing_export', 'Expected homepageData object literal export.');
    return 1;
  }

  for (const key of requiredKeys) {
    if (!hasProperty(objectLiteral, key)) {
      pushIssue(issues, 'home', rel, 'missing_required_key', `Missing required key "${key}".`);
    }
  }

  const seoObject = getPropertyAssignment(objectLiteral, 'seo')?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
  const canonical = seoObject ? getStringLiteralValue(getPropertyAssignment(seoObject, 'canonical')?.getInitializer()) : null;
  if (canonical !== '/') {
    pushIssue(issues, 'home', rel, 'canonical_mismatch', 'homepageData.seo.canonical must be /.');
  }

  const heroObject = getPropertyAssignment(objectLiteral, 'hero')?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
  if (!heroObject || !hasProperty(heroObject, 'primaryAction')) {
    pushIssue(issues, 'home', rel, 'missing_primary_action', 'homepageData.hero.primaryAction is required.');
  }

  return 1;
}

function getIndustryObjectLiteral(variableDeclaration) {
  const initializer = variableDeclaration?.getInitializer();
  if (!initializer) return null;
  if (initializer.getKind() === SyntaxKind.ObjectLiteralExpression) return initializer;
  if (initializer.getKind() === SyntaxKind.SatisfiesExpression) {
    return initializer.getExpression().asKind(SyntaxKind.ObjectLiteralExpression);
  }
  if (initializer.getKind() !== SyntaxKind.CallExpression) return null;

  const builderName = initializer.getExpression().getText();
  const builder = variableDeclaration.getSourceFile().getFunction(builderName);
  const returns = builder?.getDescendantsOfKind(SyntaxKind.ReturnStatement) ?? [];
  for (const statement of returns) {
    const expression = statement.getExpression();
    if (expression?.getKind() === SyntaxKind.ObjectLiteralExpression) {
      return expression;
    }
  }

  return null;
}

function validateIndustryStructure(issues) {
  const registryPath = path.join(root, 'src', 'domains', 'industries', 'registry.ts');
  const registrySource = project.addSourceFileAtPathIfExists(registryPath);
  if (!registrySource) {
    pushIssue(issues, 'industry', path.relative(root, registryPath), 'missing_registry', 'Missing industry registry.');
    return 0;
  }

  const importMap = new Map();
  for (const declaration of registrySource.getImportDeclarations()) {
    const moduleSpecifier = declaration.getModuleSpecifierValue();
    const defaultImport = declaration.getDefaultImport();
    if (defaultImport) importMap.set(defaultImport.getText(), moduleSpecifier);
    for (const namedImport of declaration.getNamedImports()) {
      importMap.set(namedImport.getName(), moduleSpecifier);
    }
  }

  const declaration =
    registrySource.getVariableDeclaration('INDUSTRY_PAGES') ??
    registrySource.getVariableDeclaration('INDUSTRY_REGISTRY');
  const initializer = declaration?.getInitializer();
  const objectLiteral = toObjectLiteral(initializer);
  if (!objectLiteral) {
    pushIssue(issues, 'industry', path.relative(root, registryPath), 'invalid_registry', 'Industry registry export must be an object literal.');
    return 0;
  }

  let scanned = 0;
  for (const property of objectLiteral.getProperties()) {
    if (property.getKind() !== SyntaxKind.PropertyAssignment) continue;
    scanned++;
    const slug = property.getName().replace(/^['"]|['"]$/g, '');
    const identifier = property.getInitializerIfKind(SyntaxKind.Identifier);
    const importPath = identifier ? importMap.get(identifier.getText()) : null;
    const filePath = importPath ? importPathToFile(importPath, path.dirname(registryPath)) : null;
    const rel = filePath ? path.relative(root, filePath) : path.relative(root, registryPath);
    const sourceFile = filePath ? project.addSourceFileAtPathIfExists(filePath) : null;
    const variableDeclaration = sourceFile && identifier ? sourceFile.getVariableDeclaration(identifier.getText()) : null;
    const pageObject = variableDeclaration ? getIndustryObjectLiteral(variableDeclaration) : null;

    if (!pageObject) {
      pushIssue(issues, 'industry', rel, 'missing_export', `Unable to resolve industry page data for ${slug}.`);
      continue;
    }

    for (const key of ['slug', 'type', 'seo', 'hero', 'cta']) {
      if (!hasProperty(pageObject, key)) {
        pushIssue(issues, 'industry', rel, 'missing_required_key', `Missing required key "${key}".`);
      }
    }

    const type = getStringLiteralValue(getPropertyAssignment(pageObject, 'type')?.getInitializer());
    if (type !== 'category' && type !== 'detail') {
      pushIssue(issues, 'industry', rel, 'invalid_type', 'type must be "category" or "detail".');
    }

    if (type === 'category' && !hasProperty(pageObject, 'category')) {
      pushIssue(issues, 'industry', rel, 'missing_category_key', 'Category pages require a category key.');
    }

    if (type === 'detail') {
      for (const key of ['parentSlug', 'faq']) {
        if (!hasProperty(pageObject, key)) {
          pushIssue(issues, 'industry', rel, 'missing_detail_key', `Detail pages require "${key}".`);
        }
      }
    }

    const seoObject = getPropertyAssignment(pageObject, 'seo')?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    const canonical = seoObject ? getStringLiteralValue(getPropertyAssignment(seoObject, 'canonical')?.getInitializer()) : null;
    if (canonical !== `/industries/${slug}`) {
      pushIssue(issues, 'industry', rel, 'canonical_mismatch', `seo.canonical must be /industries/${slug}.`);
    }
  }

  validateRegistryCoverage(
    issues,
    'industry',
    path.relative(root, registryPath),
    'INDUSTRY_REGISTRY',
    collectIndustrySourceSlugs(),
    new Set(Object.keys(INDUSTRY_REGISTRY))
  );

  return scanned;
}

function getCaseStudySections(buildFn) {
  const declaration = buildFn
    .getBodyOrThrow()
    .getDescendantsOfKind(SyntaxKind.VariableDeclaration)
    .find(item => item.getName() === 'sections');

  const arrayLiteral = declaration?.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
  if (!arrayLiteral) return null;

  const identifierMap = {
    problemSection: 'problem',
    solutionSection: 'solution',
    processSection: 'process',
    featuresSection: 'features',
    resultsSection: 'results',
    testimonialSection: 'testimonial',
    investmentSection: 'investment',
    businessImpactSection: 'business-impact',
    deliverablesSection: 'deliverables',
    workflowsSection: 'workflows',
    faqSection: 'faq',
    ctaSection: 'cta',
  };

  return arrayLiteral.getElements().map(element => {
    if (element.isKind(SyntaxKind.ObjectLiteralExpression)) {
      return getStringLiteralValue(getPropertyAssignment(element, 'type')?.getInitializer());
    }
    if (element.isKind(SyntaxKind.Identifier)) {
      return identifierMap[element.getText()] ?? null;
    }
    return null;
  }).filter(Boolean);
}

function validateCaseStudyStructure(issues) {
  const contentDir = path.join(root, 'src', 'domains', 'case-studies', 'content');
  const files = fs.existsSync(contentDir)
    ? fs.readdirSync(contentDir, { withFileTypes: true }).filter(item => item.isFile() && item.name.endsWith('.tsx')).map(item => path.join(contentDir, item.name))
    : [];

  for (const filePath of files) {
    const sourceFile = project.addSourceFileAtPathIfExists(filePath);
    const rel = path.relative(root, filePath);
    const buildFn = sourceFile?.getFunctions().find(fn => fn.getName()?.startsWith('build') && fn.getBody());

    if (!buildFn) {
      pushIssue(issues, 'case-study', rel, 'missing_builder', 'Missing build* case-study function.');
      continue;
    }

    const sections = getCaseStudySections(buildFn);
    if (!sections) {
      pushIssue(issues, 'case-study', rel, 'invalid_sections', 'Unable to parse sections array.');
      continue;
    }

    if (!sections.includes('hero')) {
      pushIssue(issues, 'case-study', rel, 'missing_hero', 'Case study sections must include hero.');
    }
    if (!sections.includes('cta')) {
      pushIssue(issues, 'case-study', rel, 'missing_cta', 'Case study sections must include cta.');
    }
    if (sections.at(-1) !== 'cta') {
      pushIssue(issues, 'case-study', rel, 'cta_not_terminal', 'cta must be the final section.');
    }

    const returnStatement = buildFn.getDescendantsOfKind(SyntaxKind.ReturnStatement).find(statement => statement.getExpression()?.isKind(SyntaxKind.ObjectLiteralExpression));
    const returnObject = returnStatement?.getExpression()?.asKind(SyntaxKind.ObjectLiteralExpression);
    const slug = getStringLiteralValue(getPropertyAssignment(returnObject, 'slug')?.getInitializer());
    const seoObject = getPropertyAssignment(returnObject, 'seo')?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    const canonical = seoObject ? getStringLiteralValue(getPropertyAssignment(seoObject, 'canonical')?.getInitializer()) : null;

    if (!slug) {
      pushIssue(issues, 'case-study', rel, 'missing_slug', 'Case study return object requires slug.');
    }

    if (slug && canonical !== `/case-study/${slug}`) {
      pushIssue(issues, 'case-study', rel, 'canonical_mismatch', `seo.canonical must be /case-study/${slug}.`);
    }
  }

  return files.length;
}

const validators = {
  service: validateServiceStructure,
  feature: validateFeatureStructure,
  home: validateHomeStructure,
  industry: validateIndustryStructure,
  'case-study': validateCaseStudyStructure,
};

function main() {
  const issues = [];
  const scannedByType = {};
  const selectedType = normalizeRequestedType(requestedType);

  if (selectedType && !validators[selectedType]) {
    console.error(`[validate-domain-structure] Unknown type "${requestedType}".`);
    process.exitCode = 1;
    return;
  }

  const activeTypes = selectedType ? [selectedType] : Object.keys(validators);
  for (const type of activeTypes) {
    scannedByType[type] = validators[type](issues);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    passed: issues.length === 0,
    scannedByType,
    issueCount: issues.length,
    issues,
  };

  if (shouldReportJson) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
  }

  if (issues.length === 0) {
    console.log(`✓ Domain structure validation passed (${activeTypes.join(', ')}).`);
    return;
  }

  console.error(`✗ Domain structure validation found ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`  - [${issue.type}] ${issue.file}: ${issue.message}`);
  }
  process.exitCode = 1;
}

main();
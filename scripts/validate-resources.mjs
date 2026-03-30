#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { Project, SyntaxKind } from 'ts-morph';

import {
  assert,
  uniq,
  listFilesRecursive,
  pascalToKebab,
  importPathToFile,
  getPropertyAssignment,
  getPropertyInitializer,
  hasProperty,
  toObjectLiteral,
  getStringLiteralValue,
  resolveStringValue,
  parseIso,
} from './lib/validator-helpers.mjs';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const APP_SRC_ROOT = path.join('src');
const tsConfigPath = path.join(root, 'tsconfig.json');

const resourcesDataPath = path.join(
  root,
  APP_SRC_ROOT,
  'domains',
  'resources',
  'data',
  'resources.ts'
);
const resourcesRegistryPath = path.join(
  root,
  APP_SRC_ROOT,
  'domains',
  'resources',
  'generatedRegistry.ts'
);
const resourceContentDir = path.join(root, APP_SRC_ROOT, 'domains', 'resources', 'content');
const ALLOWED_RESOURCE_SECTION_TYPES = new Set([
  'hero',
  'takeaways',
  'problem',
  'business-costs',
  'diy',
  'solution-cards',
  'case',
  'comparison',
  'templates',
  'checklist',
  'faq',
  'cta',
  'related-resources',
  'sidebar-cta',
]);

const project = new Project({ tsConfigFilePath: tsConfigPath });

function listResourceContentSlugs() {
  const out = new Set();
  if (!fs.existsSync(resourceContentDir)) return out;

  const entries = listFilesRecursive(resourceContentDir, {
    exts: ['.tsx'],
    ignoreDirNames: ['node_modules', 'build', 'dist'],
  });
  for (const entry of entries) {
    out.add(pascalToKebab(path.basename(entry).replace(/\.tsx$/, '')));
  }

  return out;
}

function extractHardcodedResourceRefsFromText(text) {
  const resourceSlugs = [];
  const categorySlugs = [];

  const relResourceRe = /(['"`])\/resources\/(?!category\/)([a-z0-9-]+)(?=\/|\1|[?#])/g;
  let m;
  while ((m = relResourceRe.exec(text))) resourceSlugs.push(m[2]);

  const absResourceRe = /https?:\/\/[^'"`\s]+\/resources\/(?!category\/)([a-z0-9-]+)(?=\/|['"`]|[?#])/g;
  while ((m = absResourceRe.exec(text))) resourceSlugs.push(m[1]);

  const relCatRe = /(['"`])\/resources\/category\/([a-z0-9-]+)(?=\/|\1|[?#])/g;
  while ((m = relCatRe.exec(text))) categorySlugs.push(m[2]);

  const absCatRe = /https?:\/\/[^'"`\s]+\/resources\/category\/([a-z0-9-]+)(?=\/|['"`]|[?#])/g;
  while ((m = absCatRe.exec(text))) categorySlugs.push(m[1]);

  return { resourceSlugs, categorySlugs };
}

function countDynamicResourceRefsFromText(text) {
  let dynamicResourceRefs = 0;
  let dynamicCategoryRefs = 0;

  dynamicResourceRefs += (text.match(/`[^`]*\/resources\/(?!category\/)[^`]*\$\{[^`]+\}[^`]*`/g) || [])
    .length;
  dynamicCategoryRefs += (text.match(/`[^`]*\/resources\/category\/[^`]*\$\{[^`]+\}[^`]*`/g) || [])
    .length;

  dynamicResourceRefs += (text.match(/(['"])\/resources\/(?!category\/)[^'"\n]*\1\s*\+\s*/g) || []).length;
  dynamicCategoryRefs += (text.match(/(['"])\/resources\/category\/[^'"\n]*\1\s*\+\s*/g) || [])
    .length;

  dynamicResourceRefs += (text.match(/\+\s*(['"])\/resources\/(?!category\/)[^'"\n]*\1/g) || []).length;
  dynamicCategoryRefs += (text.match(/\+\s*(['"])\/resources\/category\/[^'"\n]*\1/g) || []).length;

  return { dynamicResourceRefs, dynamicCategoryRefs };
}

function resolveSourceFilePath(moduleSpecifier, sourceFilePath) {
  const candidateBase = moduleSpecifier.startsWith('@/')
    ? path.join(root, APP_SRC_ROOT, moduleSpecifier.slice(2))
    : path.resolve(path.dirname(sourceFilePath), moduleSpecifier);
  return importPathToFile(candidateBase, path.dirname(sourceFilePath), root);
}

function getResourceObjectLiteral(resourceConstName, sourceFile) {
  const declaration = sourceFile.getVariableDeclaration(resourceConstName);
  if (!declaration) return null;
  return toObjectLiteral(declaration.getInitializer());
}

function main() {
  assert(fs.existsSync(resourcesDataPath), '[resources] missing canonical data file: src/domains/resources/data/resources.ts');
  assert(
    fs.existsSync(resourcesRegistryPath),
    '[resources] missing generated registry file: src/domains/resources/generatedRegistry.ts'
  );

  const sourceFile = project.addSourceFileAtPathIfExists(resourcesDataPath);
  const registrySourceFile = project.addSourceFileAtPathIfExists(resourcesRegistryPath);
  assert(sourceFile, '[resources] unable to parse canonical resources data file');
  assert(registrySourceFile, '[resources] unable to parse generated resources registry file');

  const hubDecl = sourceFile.getVariableDeclaration('RESOURCE_HUB_DATA');
  assert(hubDecl, '[resources] missing RESOURCE_HUB_DATA export');
  const hubObject = toObjectLiteral(hubDecl.getInitializer());
  assert(hubObject, '[resources] RESOURCE_HUB_DATA must be an object literal');

  const hubSeoProperty = getPropertyAssignment(hubObject, 'seo');
  const hubSeoObject = hubSeoProperty?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
  assert(hubSeoObject, '[resources] RESOURCE_HUB_DATA.seo must be an object literal');
  for (const key of ['title', 'description', 'canonical']) {
    assert(hasProperty(hubSeoObject, key), `[resources] missing RESOURCE_HUB_DATA.seo.${key}`);
  }
  const hubCanonical = resolveStringValue(getPropertyInitializer(hubSeoObject, 'canonical'));
  assert(hubCanonical === '/resources', '[resources] RESOURCE_HUB_DATA.seo.canonical must be /resources');

  const categoriesDecl = sourceFile.getVariableDeclaration('RESOURCE_CATEGORIES');
  assert(categoriesDecl, '[resources] missing RESOURCE_CATEGORIES export');
  const categoriesInitializer = categoriesDecl.getInitializer();
  const categoriesArray = categoriesInitializer?.asKind(SyntaxKind.ArrayLiteralExpression);
  assert(categoriesArray, '[resources] RESOURCE_CATEGORIES must be an array literal');

  const categorySlugs = [];
  const categoryIds = [];

  for (const element of categoriesArray.getElements()) {
    const categoryObject = element.asKind(SyntaxKind.ObjectLiteralExpression);
    if (!categoryObject) continue;

    const slugValue = getStringLiteralValue(getPropertyAssignment(categoryObject, 'slug')?.getInitializer());
    const labelValue = getStringLiteralValue(getPropertyAssignment(categoryObject, 'label')?.getInitializer());
    const idAssignment = getPropertyAssignment(categoryObject, 'id');
    const idValue = idAssignment?.getInitializer()?.getText() ?? null;

    assert(slugValue, '[resources] category slug is required');
    assert(labelValue, `[resources] category label is required for slug ${slugValue ?? 'unknown'}`);
    assert(idValue, `[resources] category id is required for slug ${slugValue}`);

    categorySlugs.push(slugValue);
    categoryIds.push(idValue);
  }

  assert(categorySlugs.length > 0, '[resources] at least one category is required');
  assert(uniq(categorySlugs).length === categorySlugs.length, '[resources] duplicate category slugs detected');

  const registryDecl = registrySourceFile.getVariableDeclaration('RESOURCE_REGISTRY');
  assert(registryDecl, '[resources] missing RESOURCE_REGISTRY export');
  const registryObject = toObjectLiteral(registryDecl.getInitializer());
  assert(registryObject, '[resources] RESOURCE_REGISTRY must be an object literal');

  const importMap = new Map();
  for (const imp of registrySourceFile.getImportDeclarations()) {
    const moduleSpecifier = imp.getModuleSpecifierValue();
    for (const namedImport of imp.getNamedImports()) {
      importMap.set(namedImport.getName(), moduleSpecifier);
    }
  }

  const registryEntries = [];

  for (const property of registryObject.getProperties()) {
    if (property.getKind() !== SyntaxKind.PropertyAssignment) continue;

    const key = property.getName().replace(/^['"]|['"]$/g, '');
    const valueIdentifier = property.getInitializerIfKind(SyntaxKind.Identifier);
    assert(valueIdentifier, `[resources] registry entry "${key}" must reference an imported resource constant`);

    const importSource = importMap.get(valueIdentifier.getText());
    assert(importSource, `[resources] registry entry "${key}" value is not an imported symbol`);

    const importedFilePath = resolveSourceFilePath(importSource, resourcesRegistryPath);
    assert(importedFilePath, `[resources] cannot resolve import for registry entry "${key}": ${importSource}`);

    registryEntries.push({
      key,
      constName: valueIdentifier.getText(),
      importSource,
      importedFilePath,
    });
  }

  assert(registryEntries.length > 0, '[resources] no resources registered in RESOURCE_REGISTRY');

  const registeredSlugs = [];
  const registeredCanonicals = [];

  for (const entry of registryEntries) {
    const importedSource = project.addSourceFileAtPathIfExists(entry.importedFilePath);
    assert(importedSource, `[resources] cannot parse imported resource file: ${path.relative(root, entry.importedFilePath)}`);

    const resourceObject = getResourceObjectLiteral(entry.constName, importedSource);
    assert(resourceObject, `[resources] missing object literal export ${entry.constName} in ${path.relative(root, entry.importedFilePath)}`);

    for (const key of ['slug', 'title', 'description', 'category', 'publishedAt', 'seo', 'sections']) {
      assert(hasProperty(resourceObject, key), `[resources] ${entry.constName} missing required key: ${key}`);
    }

    const slug = resolveStringValue(getPropertyInitializer(resourceObject, 'slug'), importedSource);
    assert(slug, `[resources] ${entry.constName} slug must be a string literal`);
    assert(slug === entry.key, `[resources] registry key (${entry.key}) must match resource slug (${slug})`);

    const publishedAt = resolveStringValue(
      getPropertyInitializer(resourceObject, 'publishedAt'),
      importedSource
    );
    assert(publishedAt, `[resources] ${slug} publishedAt must be a string literal`);
    const publishedAtEpoch = parseIso('publishedAt', publishedAt, slug);

    const updatedAt = resolveStringValue(
      getPropertyInitializer(resourceObject, 'updatedAt'),
      importedSource
    );

    if (updatedAt) {
      const updatedAtEpoch = parseIso('updatedAt', updatedAt, slug);
      assert(updatedAtEpoch >= publishedAtEpoch, `[resources] updatedAt must be >= publishedAt (${slug})`);
    }

    const categoryInitializer = getPropertyInitializer(resourceObject, 'category');
    const categoryValue = categoryInitializer?.getText() ?? '';
    assert(categoryValue.length > 0, `[resources] ${slug} category is required`);
    assert(
      categoryIds.includes(categoryValue),
      `[resources] ${slug} category is not a known ResourceCategory: ${categoryValue}`
    );

    const seoProperty = getPropertyAssignment(resourceObject, 'seo');
    const seoObject = seoProperty?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    assert(seoObject, `[resources] ${slug} seo must be an object literal`);

    const seoTitle = resolveStringValue(getPropertyInitializer(seoObject, 'title'), importedSource);
    const seoDescription = resolveStringValue(
      getPropertyInitializer(seoObject, 'description'),
      importedSource
    );
    const canonical = resolveStringValue(
      getPropertyInitializer(seoObject, 'canonical'),
      importedSource
    );

    assert(seoTitle, `[resources] ${slug} seo.title is required`);
    assert(seoDescription, `[resources] ${slug} seo.description is required`);
    assert(canonical, `[resources] ${slug} seo.canonical is required`);
    assert(
      canonical === `/resources/${slug}`,
      `[resources] ${slug} seo.canonical must be /resources/${slug} (got: ${canonical})`
    );

    const sectionsArray = getPropertyInitializer(resourceObject, 'sections')?.asKind(
      SyntaxKind.ArrayLiteralExpression
    );

    if (sectionsArray) {
      for (const section of sectionsArray.getElements()) {
        const obj = section.asKind(SyntaxKind.ObjectLiteralExpression);
        if (!obj) continue;

        const type = resolveStringValue(getPropertyInitializer(obj, 'type'), importedSource);

        assert(type, `[resources] ${slug} section type must be a string literal`);
        assert(
          ALLOWED_RESOURCE_SECTION_TYPES.has(type),
          `[resources] ${slug} invalid section type: ${type}`
        );
      }
    }

    registeredSlugs.push(slug);
    registeredCanonicals.push(canonical);
  }

  assert(uniq(registeredSlugs).length === registeredSlugs.length, '[resources] duplicate registered resource slugs detected');

  const canonicalSet = new Set(registeredCanonicals);

  const contentSlugs = listResourceContentSlugs();

  for (const slug of registeredSlugs) {
    assert(contentSlugs.has(slug), `[resources] registered resource missing content file: ${slug}`);
  }

  for (const slug of contentSlugs) {
    assert(registeredSlugs.includes(slug), `[resources] content file has no registry entry: ${slug}`);
  }

  const allowedResourceSlugSet = new Set(registeredSlugs);
  const allowedCategorySlugSet = new Set(categorySlugs);

  const srcRoot = path.join(root, APP_SRC_ROOT);
  const sourceFiles = listFilesRecursive(srcRoot, {
    exts: ['.ts', '.tsx'],
    ignoreDirNames: ['node_modules', 'build', 'dist'],
  });

  const badResourceRefs = [];
  const badCategoryRefs = [];
  let totalResourceRefs = 0;
  let totalCategoryRefs = 0;
  let observedDynamicResourceRefs = 0;
  let observedDynamicCategoryRefs = 0;

  for (const abs of sourceFiles) {
    const rel = path.relative(root, abs);
    const fileText = fs.readFileSync(abs, 'utf8');

    const found = extractHardcodedResourceRefsFromText(fileText);
    const dynamicCounts = countDynamicResourceRefsFromText(fileText);

    observedDynamicResourceRefs += dynamicCounts.dynamicResourceRefs;
    observedDynamicCategoryRefs += dynamicCounts.dynamicCategoryRefs;

    if (found.resourceSlugs.length > 0) {
      totalResourceRefs += found.resourceSlugs.length;
      const invalid = uniq(found.resourceSlugs.filter(slug => !allowedResourceSlugSet.has(slug)));
      if (invalid.length > 0) badResourceRefs.push(`${rel}: ${invalid.join(', ')}`);
    }

    if (found.categorySlugs.length > 0) {
      totalCategoryRefs += found.categorySlugs.length;
      const invalid = uniq(found.categorySlugs.filter(slug => !allowedCategorySlugSet.has(slug)));
      if (invalid.length > 0) badCategoryRefs.push(`${rel}: ${invalid.join(', ')}`);
    }
  }

  assert(
    badResourceRefs.length === 0,
    `[resources] Found invalid hard-coded /resources/<slug> references:\n${badResourceRefs.join('\n')}`
  );

  assert(
    badCategoryRefs.length === 0,
    `[resources] Found invalid hard-coded /resources/category/<slug> references:\n${badCategoryRefs.join('\n')}`
  );

  // eslint-disable-next-line no-console
  console.log(
    `✅ Resources validated (${registeredSlugs.length} guides, ${contentSlugs.size} content files; scanned ${sourceFiles.length} source files; checked ${totalResourceRefs} hard-coded /resources refs + ${totalCategoryRefs} hard-coded /resources/category refs; observed ${observedDynamicResourceRefs} dynamic /resources refs + ${observedDynamicCategoryRefs} dynamic /resources/category refs)`
  );
}

try {
  main();
  if (shouldReportJson) {
    const reportPath = path.join(root, 'reports', 'resources-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), passed: true }, null, 2));
  }
} catch (err) {
  if (shouldReportJson) {
    const reportPath = path.join(root, 'reports', 'resources-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), passed: false, error: err instanceof Error ? err.message : String(err) }, null, 2));
  }
  // eslint-disable-next-line no-console
  console.error(`[validate-resources] ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
}

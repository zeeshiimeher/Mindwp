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
  toArrayLiteral,
  getStringLiteralValue,
  resolveStringValue,
  getStringArrayValues,
  getStringArrayDeclarationValues,
  parseIso,
} from './lib/validator-helpers.mjs';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const APP_SRC_ROOT = path.join('src');
const tsConfigPath = path.join(root, 'tsconfig.json');

const blogDataPath = path.join(root, APP_SRC_ROOT, 'domains', 'blog', 'data', 'blog.ts');
const blogRegistryPath = path.join(root, APP_SRC_ROOT, 'domains', 'blog', 'registry.ts');
const blogContentDir = path.join(root, APP_SRC_ROOT, 'domains', 'blog', 'content');
const canonicalTaxonomyPath = path.join(
  root,
  APP_SRC_ROOT,
  'lib',
  'content-graph',
  'canonical.ts'
);
const project = new Project({ tsConfigFilePath: tsConfigPath });

function listBlogContentSlugs() {
  const out = new Set();
  if (!fs.existsSync(blogContentDir)) return out;

  const entries = fs.readdirSync(blogContentDir, { withFileTypes: true });
  for (const ent of entries) {
    if (!ent.isFile() || !ent.name.endsWith('.tsx')) continue;
    out.add(pascalToKebab(ent.name.replace(/\.tsx$/, '')));
  }

  return out;
}

function assertLengthBetween(fieldName, value, min, max, slug) {
  const length = value.trim().length;
  assert(
    length >= min && length <= max,
    `[blog] ${slug} ${fieldName} must be between ${min}-${max} characters (got ${length})`
  );
}

function assertContainsKeyword(fieldName, value, keyword, slug) {
  assert(
    value.toLowerCase().includes(keyword.toLowerCase()),
    `[blog] ${slug} primaryKeyword must appear in ${fieldName}`
  );
}

function assertCanonicalValues(fieldName, values, allowedValues, slug) {
  const invalidValues = uniq(values.filter(value => !allowedValues.has(value)));
  assert(
    invalidValues.length === 0,
    `[blog] ${slug} ${fieldName} contains unknown values: ${invalidValues.join(', ')}`
  );
}

function resolveSourceFilePath(moduleSpecifier, sourceFilePath) {
  const resolvedImportPath = moduleSpecifier.startsWith('@/')
    ? path.join(root, APP_SRC_ROOT, moduleSpecifier.slice(2))
    : path.resolve(path.dirname(sourceFilePath), moduleSpecifier);
  return importPathToFile(resolvedImportPath, path.dirname(sourceFilePath), root) ?? (() => {
    const candidateBase = resolvedImportPath;
    const candidates = [candidateBase, `${candidateBase}.ts`, `${candidateBase}.tsx`, path.join(candidateBase, 'index.ts'), path.join(candidateBase, 'index.tsx')];
    for (const candidate of candidates) {
      if (!fs.existsSync(candidate)) continue;
      const stat = fs.statSync(candidate);
      if (stat.isFile()) return candidate;
    }
    return null;
  })();
}

function extractHardcodedBlogRefsFromText(text) {
  const postSlugs = [];
  const categorySlugs = [];

  const dynamic = {
    post: 0,
    category: 0,
  };

  const relPostRe = /(['"`])\/blog\/(?!category\/|topic\/)([a-z0-9-]+)(?=\/|\1|[?#])/g;
  let m;
  while ((m = relPostRe.exec(text))) postSlugs.push(m[2]);

  const absPostRe = /https?:\/\/[^'"`\s]+\/blog\/(?!category\/|topic\/)([a-z0-9-]+)(?=\/|['"`]|[?#])/g;
  while ((m = absPostRe.exec(text))) postSlugs.push(m[1]);

  const relCatRe = /(['"`])\/blog\/category\/([a-z0-9-]+)(?=\/|\1|[?#])/g;
  while ((m = relCatRe.exec(text))) categorySlugs.push(m[2]);

  const absCatRe = /https?:\/\/[^'"`\s]+\/blog\/category\/([a-z0-9-]+)(?=\/|['"`]|[?#])/g;
  while ((m = absCatRe.exec(text))) categorySlugs.push(m[1]);

  dynamic.category += (text.match(/\/blog\/category\/\$\{/g) || []).length;
  dynamic.post += (text.match(/\/blog\/(?!category\/|topic\/)(?:[^\S\r\n]*)\$\{/g) || []).length;

  dynamic.category += (text.match(/\/blog\/category\/['"]\s*\+\s*/g) || []).length;
  dynamic.post += (text.match(/\/blog\/(?!category\/|topic\/)["']\s*\+\s*/g) || []).length;

  return { postSlugs, categorySlugs, dynamic };
}

function main() {
  assert(fs.existsSync(blogDataPath), '[blog] missing canonical data file: src/domains/blog/data/blog.ts');
  assert(fs.existsSync(blogRegistryPath), '[blog] missing blog registry: src/domains/blog/registry.ts');
  assert(
    fs.existsSync(canonicalTaxonomyPath),
    '[blog] missing canonical taxonomy file: src/lib/content-graph/canonical.ts'
  );

  const dataSource = project.addSourceFileAtPathIfExists(blogDataPath);
  const registrySource = project.addSourceFileAtPathIfExists(blogRegistryPath);
  const canonicalSource = project.addSourceFileAtPathIfExists(canonicalTaxonomyPath);

  assert(dataSource, '[blog] unable to parse domains/blog/data/blog.ts');
  assert(registrySource, '[blog] unable to parse domains/blog/registry.ts');
  assert(canonicalSource, '[blog] unable to parse lib/content-graph/canonical.ts');

  const canonicalSystems = new Set(
    getStringArrayDeclarationValues(canonicalSource, 'CANONICAL_SYSTEMS')
  );
  const canonicalIndustries = new Set(
    getStringArrayDeclarationValues(canonicalSource, 'CANONICAL_INDUSTRIES')
  );
  const canonicalTopics = new Set(
    getStringArrayDeclarationValues(canonicalSource, 'CANONICAL_TOPICS')
  );
  const warnings = [];

  const authorsDecl = dataSource.getVariableDeclaration('BLOG_AUTHORS');
  assert(authorsDecl, '[blog] missing BLOG_AUTHORS export');
  const authorsObject = toObjectLiteral(authorsDecl.getInitializer());
  assert(authorsObject, '[blog] BLOG_AUTHORS must be an object literal');

  const authorKeys = authorsObject
    .getProperties()
    .map(property => property.getName())
    .filter(Boolean);

  assert(authorKeys.length > 0, '[blog] BLOG_AUTHORS must include at least one author');

  const categoriesDecl = dataSource.getVariableDeclaration('BLOG_CATEGORIES');
  assert(categoriesDecl, '[blog] missing BLOG_CATEGORIES export');
  const categoriesArray = categoriesDecl
    .getInitializer()
    ?.asKind(SyntaxKind.ArrayLiteralExpression);

  assert(categoriesArray, '[blog] BLOG_CATEGORIES must be an array literal');

  const categoryValues = [];
  const categorySlugs = [];

  for (const element of categoriesArray.getElements()) {
    const categoryObject = element.asKind(SyntaxKind.ObjectLiteralExpression);
    if (!categoryObject) continue;

    const categoryValue = resolveStringValue(
      getPropertyInitializer(categoryObject, 'category'),
      dataSource
    );
    const categorySlug = resolveStringValue(getPropertyInitializer(categoryObject, 'slug'), dataSource);

    assert(categoryValue, '[blog] category entry missing category enum value');
    assert(categorySlug, '[blog] category entry missing slug string');

    categoryValues.push(categoryValue);
    categorySlugs.push(categorySlug);
  }

  assert(categorySlugs.length > 0, '[blog] BLOG_CATEGORIES must include at least one category');
  assert(uniq(categorySlugs).length === categorySlugs.length, '[blog] duplicate category slugs detected');

  const landingSeoDecl = dataSource.getVariableDeclaration('BLOG_LANDING_SEO');
  if (landingSeoDecl) {
    const landingSeoObject = toObjectLiteral(landingSeoDecl.getInitializer());
    if (landingSeoObject) {
      const pathValue = resolveStringValue(getPropertyInitializer(landingSeoObject, 'path'), dataSource);
      assert(pathValue === '/blog', '[blog] BLOG_LANDING_SEO.path must be /blog');
    }
  }

  const registryDecl = registrySource.getVariableDeclaration('BLOG_POSTS');
  assert(registryDecl, '[blog] missing BLOG_POSTS export in domains/blog/registry.ts');
  const registryObject = toObjectLiteral(registryDecl.getInitializer());
  assert(registryObject, '[blog] BLOG_POSTS must be an object literal');

  const importMap = new Map();
  for (const imp of registrySource.getImportDeclarations()) {
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
    assert(valueIdentifier, `[blog] registry entry "${key}" must reference an imported post constant`);

    const importSource = importMap.get(valueIdentifier.getText());
    assert(importSource, `[blog] registry entry "${key}" value is not an imported symbol`);

    const importedFilePath = resolveSourceFilePath(importSource, blogRegistryPath);
    assert(importedFilePath, `[blog] cannot resolve import for registry entry "${key}": ${importSource}`);

    registryEntries.push({
      key,
      constName: valueIdentifier.getText(),
      importedFilePath,
    });
  }

  assert(registryEntries.length > 0, '[blog] no blog posts registered in BLOG_POSTS');

  const registeredSlugs = [];

  for (const entry of registryEntries) {
    const importedSource = project.addSourceFileAtPathIfExists(entry.importedFilePath);
    assert(importedSource, `[blog] cannot parse imported post file: ${path.relative(root, entry.importedFilePath)}`);

    const declaration = importedSource.getVariableDeclaration(entry.constName);
    assert(declaration, `[blog] missing exported post constant ${entry.constName}`);

    const postObject = toObjectLiteral(declaration.getInitializer());
    assert(postObject, `[blog] ${entry.constName} must be an object literal`);

    for (const key of [
      'slug',
      'title',
      'metaTitle',
      'metaDescription',
      'seo',
      'publishDate',
      'authorKey',
      'category',
      'systems',
      'industries',
      'topics',
      'primaryKeyword',
      'supportingKeywords',
      'tags',
      'sections',
    ]) {
      assert(hasProperty(postObject, key), `[blog] ${entry.constName} missing required key: ${key}`);
    }

    const slug = resolveStringValue(getPropertyInitializer(postObject, 'slug'), importedSource);
    assert(slug, `[blog] ${entry.constName} slug must be a string`);
    assert(slug === entry.key, `[blog] registry key (${entry.key}) must match post slug (${slug})`);
    assert(/^[a-z0-9-]+$/.test(slug), `[blog] post slug must be kebab-case (${slug})`);

    const title = resolveStringValue(getPropertyInitializer(postObject, 'title'), importedSource);
    assert(title, `[blog] ${slug} title is required`);

    const metaTitle = resolveStringValue(
      getPropertyInitializer(postObject, 'metaTitle'),
      importedSource
    );
    assert(metaTitle, `[blog] ${slug} metaTitle is required`);

    const metaDescription = resolveStringValue(
      getPropertyInitializer(postObject, 'metaDescription'),
      importedSource
    );
    assert(metaDescription, `[blog] ${slug} metaDescription is required`);

    const primaryKeyword = resolveStringValue(
      getPropertyInitializer(postObject, 'primaryKeyword'),
      importedSource
    );
    assert(primaryKeyword, `[blog] ${slug} primaryKeyword is required`);

    assertLengthBetween('metaTitle', metaTitle, 40, 60, slug);
    assertLengthBetween('metaDescription', metaDescription, 140, 160, slug);
    assertContainsKeyword('title', title, primaryKeyword, slug);
    assertContainsKeyword('metaTitle', metaTitle, primaryKeyword, slug);
    assertContainsKeyword('metaDescription', metaDescription, primaryKeyword, slug);

    const publishDate = resolveStringValue(getPropertyInitializer(postObject, 'publishDate'), importedSource);
    assert(publishDate, `[blog] ${slug} publishDate is required`);
    const publishTimestamp = parseIso('publishDate', publishDate, slug);
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    assert(publishTimestamp <= today.getTime(), `[blog] ${slug} publishDate must not be in the future`);

    const authorKey = resolveStringValue(getPropertyInitializer(postObject, 'authorKey'), importedSource);
    assert(authorKey, `[blog] ${slug} authorKey is required`);
    assert(authorKeys.includes(authorKey), `[blog] ${slug} uses unknown authorKey: ${authorKey}`);

    const categoryValue = resolveStringValue(
      getPropertyInitializer(postObject, 'category'),
      importedSource
    );
    assert(categoryValue, `[blog] ${slug} category is required`);
    assert(categoryValues.includes(categoryValue), `[blog] ${slug} category is not in BLOG_CATEGORIES: ${categoryValue}`);

    const systems = getPropertyInitializer(postObject, 'systems')?.asKind(
      SyntaxKind.ArrayLiteralExpression
    );
    assert(systems, `[blog] ${slug} systems must be an array literal`);
    const systemValues = getStringArrayValues(systems, importedSource, `${slug} systems`);
    assertCanonicalValues('systems', systemValues, canonicalSystems, slug);

    const industries = getPropertyInitializer(postObject, 'industries')?.asKind(
      SyntaxKind.ArrayLiteralExpression
    );
    assert(industries, `[blog] ${slug} industries must be an array literal`);
    const industryValues = getStringArrayValues(industries, importedSource, `${slug} industries`);
    assertCanonicalValues('industries', industryValues, canonicalIndustries, slug);

    const topics = getPropertyInitializer(postObject, 'topics')?.asKind(
      SyntaxKind.ArrayLiteralExpression
    );
    assert(topics, `[blog] ${slug} topics must be an array literal`);
    const topicValues = getStringArrayValues(topics, importedSource, `${slug} topics`);
    assertCanonicalValues('topics', topicValues, canonicalTopics, slug);

    const supportingKeywords = getPropertyInitializer(postObject, 'supportingKeywords')?.asKind(
      SyntaxKind.ArrayLiteralExpression
    );
    assert(supportingKeywords, `[blog] ${slug} supportingKeywords must be an array literal`);
    assert(supportingKeywords.getElements().length > 0, `[blog] ${slug} supportingKeywords must not be empty`);

    const tags = getPropertyInitializer(postObject, 'tags')?.asKind(SyntaxKind.ArrayLiteralExpression);
    assert(tags, `[blog] ${slug} tags must be an array literal`);
    const tagValues = getStringArrayValues(tags, importedSource, `${slug} tags`);
    assert(tagValues.length > 0, `[blog] ${slug} tags must not be empty`);
    assert(
      uniq(tagValues.map(tag => tag.toLowerCase())).length === tagValues.length,
      `[blog] ${slug} tags must be unique`
    );

    const seoObject = getPropertyInitializer(postObject, 'seo')?.asKind(
      SyntaxKind.ObjectLiteralExpression
    );
    assert(seoObject, `[blog] ${slug} seo must be an object literal`);

    const seoTitle = resolveStringValue(getPropertyInitializer(seoObject, 'title'), importedSource);
    const seoDescription = resolveStringValue(
      getPropertyInitializer(seoObject, 'description'),
      importedSource
    );
    const seoCanonical = resolveStringValue(
      getPropertyInitializer(seoObject, 'canonical'),
      importedSource
    );
    const seoKeywords = getPropertyInitializer(seoObject, 'keywords')?.asKind(
      SyntaxKind.ArrayLiteralExpression
    );
    const seoOpenGraph = getPropertyInitializer(seoObject, 'openGraph')?.asKind(
      SyntaxKind.ObjectLiteralExpression
    );

    assert(seoTitle, `[blog] ${slug} seo.title is required`);
    assert(seoDescription, `[blog] ${slug} seo.description is required`);
    assert(seoCanonical, `[blog] ${slug} seo.canonical is required`);
    assert(
      seoCanonical === `/blog/${slug}`,
      `[blog] ${slug} seo.canonical must be /blog/${slug} (got: ${seoCanonical})`
    );

    assert(seoKeywords, `[blog] ${slug} seo.keywords must be an array literal`);
    assert(seoKeywords.getElements().length > 0, `[blog] ${slug} seo.keywords must not be empty`);

    assert(seoOpenGraph, `[blog] ${slug} seo.openGraph must be an object literal`);
    const openGraphTitle = resolveStringValue(
      getPropertyInitializer(seoOpenGraph, 'title'),
      importedSource
    );
    const openGraphDescription = resolveStringValue(
      getPropertyInitializer(seoOpenGraph, 'description'),
      importedSource
    );
    assert(openGraphTitle, `[blog] ${slug} seo.openGraph.title is required`);
    assert(openGraphDescription, `[blog] ${slug} seo.openGraph.description is required`);

    const sections = getPropertyInitializer(postObject, 'sections')?.asKind(
      SyntaxKind.ArrayLiteralExpression
    );
    assert(sections, `[blog] ${slug} sections must be an array literal`);

    sections.getElements().forEach((sectionElement, sectionIndex) => {
      const sectionObject = toObjectLiteral(sectionElement);
      if (!sectionObject) return;

      const sectionType = resolveStringValue(
        getPropertyInitializer(sectionObject, 'type'),
        importedSource
      );
      if (sectionType !== 'faq') return;

      const items = getPropertyInitializer(sectionObject, 'items')?.asKind(
        SyntaxKind.ArrayLiteralExpression
      );
      assert(items, `[blog] ${slug} faq section ${sectionIndex} must include an items array`);

      items.getElements().forEach((itemElement, itemIndex) => {
        const itemObject = toObjectLiteral(itemElement);
        assert(
          itemObject,
          `[blog] ${slug} faq section ${sectionIndex} item ${itemIndex} must be an object literal`
        );

        const question = resolveStringValue(
          getPropertyInitializer(itemObject, 'question'),
          importedSource
        );
        const answer = resolveStringValue(
          getPropertyInitializer(itemObject, 'answer'),
          importedSource
        );

        assert(
          typeof question === 'string' && question.trim().length > 0,
          `[blog] ${slug} faq section ${sectionIndex} item ${itemIndex} question must be a non-empty string`
        );
        assert(
          typeof answer === 'string' && answer.trim().length > 0,
          `[blog] ${slug} faq section ${sectionIndex} item ${itemIndex} answer must be a non-empty string`
        );
      });
    });

    registeredSlugs.push(slug);
  }

  assert(uniq(registeredSlugs).length === registeredSlugs.length, '[blog] duplicate post slugs detected');

  const contentSlugs = listBlogContentSlugs();
  const registeredSlugSet = new Set(registeredSlugs);

  for (const slug of registeredSlugSet) {
    assert(contentSlugs.has(slug), `[blog] registered post missing content file: ${slug}`);
  }

  for (const slug of contentSlugs) {
    assert(registeredSlugSet.has(slug), `[blog] content file has no registry entry: ${slug}`);
  }

  const srcRoot = path.join(root, APP_SRC_ROOT);
  const sourceFiles = listFilesRecursive(srcRoot, {
    exts: ['.ts', '.tsx'],
    ignoreDirNames: ['node_modules', 'build', 'dist'],
  });

  const allowedPostSlugs = new Set(registeredSlugs);
  const allowedCategorySlugs = new Set(categorySlugs);

  const badPostRefs = [];
  const badCategoryRefs = [];
  let totalPostRefs = 0;
  let totalCategoryRefs = 0;
  let totalDynamicPostRefs = 0;
  let totalDynamicCategoryRefs = 0;

  for (const abs of sourceFiles) {
    const rel = path.relative(root, abs);
    const text = fs.readFileSync(abs, 'utf8');
    const found = extractHardcodedBlogRefsFromText(text);

    totalDynamicPostRefs += found.dynamic.post;
    totalDynamicCategoryRefs += found.dynamic.category;

    if (found.postSlugs.length > 0) {
      totalPostRefs += found.postSlugs.length;
      const invalid = uniq(found.postSlugs.filter(slug => !allowedPostSlugs.has(slug)));
      if (invalid.length > 0) badPostRefs.push(`${rel}: ${invalid.join(', ')}`);
    }

    if (found.categorySlugs.length > 0) {
      totalCategoryRefs += found.categorySlugs.length;
      const invalid = uniq(found.categorySlugs.filter(slug => !allowedCategorySlugs.has(slug)));
      if (invalid.length > 0) badCategoryRefs.push(`${rel}: ${invalid.join(', ')}`);
    }
  }

  assert(
    badPostRefs.length === 0,
    `[blog] Found invalid hard-coded /blog/<slug> references:\n${badPostRefs.join('\n')}`
  );

  assert(
    badCategoryRefs.length === 0,
    `[blog] Found invalid hard-coded /blog/category/<slug> references:\n${badCategoryRefs.join('\n')}`
  );

  // eslint-disable-next-line no-console
  console.log(
    `✅ Blog validated (${registeredSlugs.length} posts, ${contentSlugs.size} content files; scanned ${sourceFiles.length} source files; checked ${totalPostRefs} hard-coded /blog refs + ${totalCategoryRefs} hard-coded /blog/category refs; observed ${totalDynamicPostRefs} dynamic /blog refs + ${totalDynamicCategoryRefs} dynamic /blog/category refs)`
  );

  if (warnings.length > 0) {
    // eslint-disable-next-line no-console
    console.warn(warnings.join('\n'));
  }
}

try {
  main();
  if (shouldReportJson) {
    const reportPath = path.join(root, 'reports', 'blog-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), passed: true }, null, 2));
  }
} catch (err) {
  if (shouldReportJson) {
    const reportPath = path.join(root, 'reports', 'blog-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), passed: false, error: err instanceof Error ? err.message : String(err) }, null, 2));
  }
  // eslint-disable-next-line no-console
  console.error(`[validate-blog] ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
}

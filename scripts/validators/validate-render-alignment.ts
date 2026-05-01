#!/usr/bin/env node

// @ts-nocheck

import fs from 'node:fs';
import path from 'node:path';
import { Project, SyntaxKind } from 'ts-morph';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { systemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import {
  getPropertyInitializer,
  getSectionsObjectLiteral,
  getSectionsOrder,
  importPathToFile,
  listFilesRecursive,
  toObjectLiteral,
} from '../lib/validator-helpers.mjs';

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const logger = createLogger({
  label: 'validate-render-alignment',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: root,
});
const reportPath = path.join(root, 'reports', 'render-alignment-report.json');
const project = new Project({ tsConfigFilePath: path.join(root, 'tsconfig.json') });
const strictUnknownFields = !args.has('--warn-unknown-fields');

const INDUSTRY_CATEGORY_RENDER_ORDER = [
  'hero',
  'imageStrip',
  'operatingPatterns',
  'challenges',
  'spectrum',
  'serviceEnvironments',
  'decisionChecklist',
  'solutions',
  'systemLayers',
  'detailRoutes',
  'process',
  'comparison',
  'packages',
  'pathways',
  'explore',
  'caseStudies',
  'cta',
];

const INDUSTRY_DETAIL_RENDER_ORDER = [
  'hero',
  'imageStrip',
  'operatingPatterns',
  'challenges',
  'comparison',
  'packages',
  'pathways',
  'workflowExamples',
  'solutions',
  'systemLayers',
  'explore',
  'caseStudies',
  'faq',
  'cta',
];

const INDUSTRY_RENDER_KEYS = new Set([
  ...INDUSTRY_CATEGORY_RENDER_ORDER,
  ...INDUSTRY_DETAIL_RENDER_ORDER,
]);

function hasJsxContext(node) {
  return Boolean(
    node.getFirstAncestor(ancestor =>
      [
        SyntaxKind.JsxElement,
        SyntaxKind.JsxSelfClosingElement,
        SyntaxKind.JsxFragment,
        SyntaxKind.JsxExpression,
      ].includes(ancestor.getKind())
    )
  );
}

function extractRendererOrder(rendererFilePath) {
  if (!rendererFilePath || !fs.existsSync(rendererFilePath)) {
    return [];
  }

  const sourceFile =
    project.getSourceFile(rendererFilePath) ?? project.addSourceFileAtPath(rendererFilePath);
  const occurrences = [];
  const destructuredKeys = new Set();
  const aliasedKeys = new Map();

  for (const declaration of sourceFile.getDescendantsOfKind(SyntaxKind.VariableDeclaration)) {
    const initializer = declaration.getInitializer();
    if (!initializer) {
      continue;
    }

    if (initializer.getText() === 'sections' || initializer.getText() === 'optionalSections') {
      const nameNode = declaration.getNameNode();
      if (nameNode.getKind() !== SyntaxKind.ObjectBindingPattern) {
        continue;
      }

      for (const element of nameNode.getElements()) {
        destructuredKeys.add(element.getNameNode().getText());
      }
      continue;
    }

    if (initializer.getKind() === SyntaxKind.PropertyAccessExpression) {
      const owner = initializer.getExpression().getText();
      if (owner === 'sections' || owner === 'data.sections' || owner === 'optionalSections') {
        aliasedKeys.set(declaration.getName(), initializer.getName());
      }
    }
  }

  for (const expression of sourceFile.getDescendantsOfKind(SyntaxKind.PropertyAccessExpression)) {
    const owner = expression.getExpression().getText();
    const variableDeclaration = expression.getFirstAncestorByKind(SyntaxKind.VariableDeclaration);
    if (variableDeclaration?.getInitializer() === expression) {
      continue;
    }

    if (!hasJsxContext(expression)) {
      continue;
    }

    if (owner === 'sections' || owner === 'data.sections' || owner === 'optionalSections') {
      occurrences.push({ key: expression.getName(), index: expression.getStart() });
    }
  }

  for (const identifier of sourceFile.getDescendantsOfKind(SyntaxKind.Identifier)) {
    const identifierText = identifier.getText();
    const aliasedKey = aliasedKeys.get(identifierText);
    const key = destructuredKeys.has(identifierText) ? identifierText : aliasedKey;

    if (!key) {
      continue;
    }

    const parent = identifier.getParent();
    if (
      !hasJsxContext(identifier) ||
      parent.getKind() === SyntaxKind.BindingElement ||
      parent.getKind() === SyntaxKind.VariableDeclaration ||
      (parent.getKind() === SyntaxKind.PropertyAccessExpression &&
        parent.getNameNode() === identifier) ||
      (parent.getKind() === SyntaxKind.ShorthandPropertyAssignment &&
        parent.getNameNode() === identifier) ||
      (parent.getKind() === SyntaxKind.PropertyAssignment && parent.getNameNode() === identifier)
    ) {
      continue;
    }

    occurrences.push({ key, index: identifier.getStart() });
  }

  occurrences.sort((left, right) => left.index - right.index);

  const ordered = [];
  for (const occurrence of occurrences) {
    if (!ordered.includes(occurrence.key)) {
      ordered.push(occurrence.key);
    }
  }

  return ordered;
}

function relative(filePath) {
  return path.relative(root, filePath).replaceAll(path.sep, '/');
}

function parseImports(sourceText) {
  const imports = new Map();
  const importPattern = /import\s+([^;]+?)\s+from\s+['"]([^'"]+)['"];?/g;

  for (const match of sourceText.matchAll(importPattern)) {
    const clause = match[1].trim();
    const specifier = match[2];

    if (!clause.startsWith('{')) {
      const defaultImport = clause.split(',')[0]?.trim();
      if (defaultImport) {
        imports.set(defaultImport, specifier);
      }
    }

    const namedBlockMatch = clause.match(/\{([^}]+)\}/);
    if (!namedBlockMatch) {
      continue;
    }

    for (const part of namedBlockMatch[1].split(',')) {
      const cleaned = part.trim();
      if (!cleaned) {
        continue;
      }

      const [imported, alias] = cleaned.split(/\s+as\s+/i).map(value => value.trim());
      imports.set(alias ?? imported, specifier);
    }
  }

  return imports;
}

function readSource(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function getExportedObjectLiteralFromFile(filePath) {
  const sourceFile = project.getSourceFile(filePath) ?? project.addSourceFileAtPath(filePath);

  for (const declaration of sourceFile.getVariableDeclarations()) {
    if (!declaration.getVariableStatement()?.isExported()) {
      continue;
    }

    const initializer = declaration.getInitializer();
    const objectLiteral = toObjectLiteral(initializer);
    if (objectLiteral) {
      return { sourceFile, objectLiteral };
    }
  }

  return { sourceFile, objectLiteral: null };
}

function compareOrder({ domain, slug, file, authoredKeys, expectedKeys, issues, warnings }) {
  const filteredExpected = expectedKeys.filter(key => authoredKeys.includes(key));
  const unknownKeys = authoredKeys.filter(key => !expectedKeys.includes(key));

  if (unknownKeys.length > 0) {
    const issue = {
      code: strictUnknownFields ? 'unknown_section_key' : 'unknown_section_key_warning',
      domain,
      slug,
      file,
      message: `${domain}/${slug} declares unknown render keys: ${unknownKeys.join(', ')}.`,
    };

    if (strictUnknownFields) {
      issues.push(issue);
    } else {
      warnings.push(issue);
    }
  }

  if (JSON.stringify(authoredKeys) !== JSON.stringify(filteredExpected)) {
    issues.push({
      code: 'render_alignment_mismatch',
      domain,
      slug,
      file,
      message: `${domain}/${slug} authored order [${authoredKeys.join(', ')}] does not match renderer order [${filteredExpected.join(', ')}].`,
    });
  }
}

function collectServiceIssues(issues, warnings) {
  const registryPath = path.join(root, 'src', 'domains', 'services', 'pageData.ts');
  const sourceText = readSource(registryPath);
  const imports = parseImports(sourceText);
  const registryDir = path.dirname(registryPath);
  const entryPattern =
    /['"]([^'"]+)['"]:\s*createServiceEntry\(\s*['"][^'"]+['"],\s*([A-Za-z0-9_]+),\s*([A-Za-z0-9_]+)\s*\)/g;

  for (const match of sourceText.matchAll(entryPattern)) {
    const slug = match[1];
    const dataIdentifier = match[2];
    const rendererIdentifier = match[3];
    const dataFile = importPathToFile(imports.get(dataIdentifier), registryDir, root);
    const rendererFile = importPathToFile(imports.get(rendererIdentifier), registryDir, root);

    if (!dataFile || !rendererFile) {
      issues.push({
        code: 'unresolved_registry_entry',
        domain: 'service',
        slug,
        file: relative(registryPath),
        message: `service/${slug} could not resolve data or renderer file from the registry.`,
      });
      continue;
    }

    const { objectLiteral } = getExportedObjectLiteralFromFile(dataFile);
    if (!objectLiteral) {
      issues.push({
        code: 'missing_exported_data_object',
        domain: 'service',
        slug,
        file: relative(dataFile),
        message: `service/${slug} does not export a data object literal.`,
      });
      continue;
    }

    const sectionsObject = getSectionsObjectLiteral(objectLiteral);
    if (!sectionsObject) {
      issues.push({
        code: 'missing_sections_object',
        domain: 'service',
        slug,
        file: relative(dataFile),
        message: `service/${slug} is missing a sections object.`,
      });
      continue;
    }

    const authoredKeys = getSectionsOrder(sectionsObject);
    const rendererKeys = extractRendererOrder(rendererFile);

    compareOrder({
      domain: 'service',
      slug,
      file: relative(dataFile),
      authoredKeys,
      expectedKeys: rendererKeys,
      issues,
      warnings,
    });
  }
}

function resolveFeatureRendererFile(pageFile) {
  const pageText = readSource(pageFile);
  const pageImports = parseImports(pageText);
  const rendererSpecifier = [...pageImports.values()].find(specifier =>
    specifier.includes('/domains/features/renderers/')
  );

  return rendererSpecifier
    ? importPathToFile(rendererSpecifier, path.dirname(pageFile), root)
    : null;
}

function collectFeatureIssues(issues, warnings) {
  const registryPath = path.join(root, 'src', 'domains', 'features', 'registry.ts');
  const sourceText = readSource(registryPath);
  const imports = parseImports(sourceText);
  const registryDir = path.dirname(registryPath);
  const entryPattern =
    /([A-Za-z0-9_-]+):\s*createFeatureEntry\(\s*['"]([^'"]+)['"],\s*([A-Za-z0-9_]+),\s*([A-Za-z0-9_]+),/g;

  for (const match of sourceText.matchAll(entryPattern)) {
    const slug = match[2];
    const dataIdentifier = match[3];
    const pageIdentifier = match[4];
    const dataFile = importPathToFile(imports.get(dataIdentifier), registryDir, root);
    const pageFile = importPathToFile(imports.get(pageIdentifier), registryDir, root);
    const rendererFile = pageFile ? resolveFeatureRendererFile(pageFile) : null;

    if (!dataFile || !rendererFile) {
      issues.push({
        code: 'unresolved_registry_entry',
        domain: 'feature',
        slug,
        file: relative(registryPath),
        message: `feature/${slug} could not resolve data or renderer file from the registry.`,
      });
      continue;
    }

    const { objectLiteral } = getExportedObjectLiteralFromFile(dataFile);
    if (!objectLiteral) {
      issues.push({
        code: 'missing_exported_data_object',
        domain: 'feature',
        slug,
        file: relative(dataFile),
        message: `feature/${slug} does not export a data object literal.`,
      });
      continue;
    }

    const sectionsObject = getSectionsObjectLiteral(objectLiteral);
    if (!sectionsObject) {
      issues.push({
        code: 'missing_sections_object',
        domain: 'feature',
        slug,
        file: relative(dataFile),
        message: `feature/${slug} is missing a sections object.`,
      });
      continue;
    }

    const authoredKeys = getSectionsOrder(sectionsObject);
    const rendererKeys = extractRendererOrder(rendererFile);

    compareOrder({
      domain: 'feature',
      slug,
      file: relative(dataFile),
      authoredKeys,
      expectedKeys: rendererKeys,
      issues,
      warnings,
    });
  }
}

function getIndustryPageFiles() {
  return listFilesRecursive(path.join(root, 'src', 'domains', 'industries', 'pages'), {
    exts: ['.ts', '.tsx'],
    ignoreDirNames: ['node_modules'],
  });
}

function collectIndustryIssues(issues, warnings) {
  for (const filePath of getIndustryPageFiles()) {
    const { objectLiteral } = getExportedObjectLiteralFromFile(filePath);
    if (!objectLiteral) {
      continue;
    }

    const slugNode = getPropertyInitializer(objectLiteral, 'slug');
    const typeNode = getPropertyInitializer(objectLiteral, 'type');
    const slug = slugNode?.getText().replace(/^['"]|['"]$/g, '') ?? relative(filePath);
    const type = typeNode?.getText().replace(/^['"]|['"]$/g, '');

    if (type !== 'category' && type !== 'detail') {
      continue;
    }

    const authoredKeys = objectLiteral
      .getProperties()
      .map(property => {
        if (
          property.getKind() === SyntaxKind.PropertyAssignment ||
          property.getKind() === SyntaxKind.ShorthandPropertyAssignment
        ) {
          return property.getName();
        }
        return null;
      })
      .filter(Boolean)
      .filter(key => INDUSTRY_RENDER_KEYS.has(key));

    compareOrder({
      domain: type === 'category' ? 'industry-category' : 'industry-detail',
      slug,
      file: relative(filePath),
      authoredKeys,
      expectedKeys:
        type === 'category'
          ? [...INDUSTRY_CATEGORY_RENDER_ORDER]
          : [...INDUSTRY_DETAIL_RENDER_ORDER],
      issues,
      warnings,
    });
  }
}

function main() {
  const issues = [];
  const warnings = [];

  collectServiceIssues(issues, warnings);
  collectFeatureIssues(issues, warnings);
  collectIndustryIssues(issues, warnings);

  const report = {
    generatedAt: new Date().toISOString(),
    passed: issues.length === 0,
    strictUnknownFields,
    issueCount: issues.length,
    warningCount: warnings.length,
    issues,
    warnings,
  };

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  logger.writeReport(reportPath, report);

  if (issues.length > 0) {
    logger.printErrors(
      issues.map(issue => issue.message),
      'violations',
      20
    );
    process.exit(1);
  }

  logger.printSummary(`passed (${warnings.length} warning${warnings.length === 1 ? '' : 's'})`);
}

main();

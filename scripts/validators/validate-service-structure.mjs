#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { Project, SyntaxKind } from 'ts-morph';

import {
  listSourceFiles,
  importPathToFile,
  parseDestructuredSectionsKeys,
  extractSectionsOrderFromRenderer,
  getObjectPropertyName,
  getSectionsObjectLiteral,
  getSectionsOrder,
  buildReorderedSectionsText,
} from '../lib/validator-helpers.mjs';

const args = new Set(process.argv.slice(2));
const shouldFix = args.has('--fix');
const shouldReportJson = args.has('--report-json');

const repoRoot = process.cwd();
const tsConfigPath = path.join(repoRoot, 'tsconfig.json');
const reportPath = path.join(repoRoot, 'reports', 'service-structure-report.json');
const serviceConfigPath = path.join(repoRoot, 'src', 'domains', 'services', 'config.tsx');
const appSrcPath = path.join(repoRoot, 'src');

const project = new Project({ tsConfigFilePath: tsConfigPath });
const sourceFiles = project.getSourceFiles('src/domains/services/data/*.ts');

const requiredTopLevelKeys = ['keywords', 'badge', 'category', 'seo', 'hero', 'sections'];

const issues = [];
const fixes = [];

const findLegacyServiceImportIssues = () => {
  for (const filePath of listSourceFiles(appSrcPath)) {
    const text = fs.readFileSync(filePath, 'utf8');
    if (!text.includes('@/lib/services') && !text.includes('src/lib/services')) continue;

    issues.push({
      file: path.relative(repoRoot, filePath),
      code: 'legacy_services_import',
      message: "Legacy services import detected. Replace '@/lib/services/*' with '@/domains/services/*'.",
    });
  }
};

const buildRendererOrderByServiceSlug = sourceProject => {
  const configSourceFile = sourceProject.addSourceFileAtPathIfExists(serviceConfigPath);
  if (!configSourceFile) return {};

  const configDir = path.dirname(serviceConfigPath);
  const importPathByLocalName = new Map();

  for (const importDeclaration of configSourceFile.getImportDeclarations()) {
    const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
    const defaultImport = importDeclaration.getDefaultImport();
    if (defaultImport) {
      importPathByLocalName.set(defaultImport.getText(), moduleSpecifier);
    }

    for (const namedImport of importDeclaration.getNamedImports()) {
      importPathByLocalName.set(namedImport.getName(), moduleSpecifier);
    }
  }

  const serviceEntryDeclaration = configSourceFile.getVariableDeclaration('SERVICE_ENTRY_BY_SLUG');
  const serviceEntryInitializer = serviceEntryDeclaration?.getInitializer();
  const serviceEntryObject =
    serviceEntryInitializer?.getKind() === SyntaxKind.ObjectLiteralExpression
      ? serviceEntryInitializer
      : serviceEntryInitializer?.getKind() === SyntaxKind.AsExpression
        ? serviceEntryInitializer.getExpression().asKind(SyntaxKind.ObjectLiteralExpression)
        : serviceEntryInitializer?.getKind() === SyntaxKind.SatisfiesExpression
          ? serviceEntryInitializer.getExpression().asKind(SyntaxKind.ObjectLiteralExpression)
          : undefined;

  if (!serviceEntryObject) return {};

  const rendererOrderBySlug = {};

  for (const property of serviceEntryObject.getProperties()) {
    if (property.getKind() !== SyntaxKind.PropertyAssignment) continue;

    const slug = property.getName().replace(/^['"]|['"]$/g, '');
    const initializer = property.getInitializerIfKind(SyntaxKind.CallExpression);
    if (!initializer) continue;

    const args = initializer.getArguments();
    const renderArgument = args[1];
    if (!renderArgument) continue;

    const jsxSelfClosing = renderArgument.getFirstDescendantByKind(SyntaxKind.JsxSelfClosingElement);
    const jsxOpening = renderArgument.getFirstDescendantByKind(SyntaxKind.JsxOpeningElement);
    const rendererName = jsxSelfClosing?.getTagNameNode().getText() ?? jsxOpening?.getTagNameNode().getText();

    if (!rendererName) continue;

    const moduleSpecifier = importPathByLocalName.get(rendererName);
    if (!moduleSpecifier) continue;

    const rendererFilePath = importPathToFile(moduleSpecifier, configDir);
    if (!rendererFilePath) continue;

    rendererOrderBySlug[slug] = extractSectionsOrderFromRenderer(rendererFilePath);
  }

  return rendererOrderBySlug;
};

const buildServiceSlugByDataFilePath = sourceProject => {
  const configSourceFile = sourceProject.addSourceFileAtPathIfExists(serviceConfigPath);
  if (!configSourceFile) return new Map();

  const configDir = path.dirname(serviceConfigPath);
  const importPathByLocalName = new Map();

  for (const importDeclaration of configSourceFile.getImportDeclarations()) {
    const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
    const defaultImport = importDeclaration.getDefaultImport();
    if (defaultImport) {
      importPathByLocalName.set(defaultImport.getText(), moduleSpecifier);
    }

    for (const namedImport of importDeclaration.getNamedImports()) {
      importPathByLocalName.set(namedImport.getName(), moduleSpecifier);
    }
  }

  const serviceEntryDeclaration = configSourceFile.getVariableDeclaration('SERVICE_ENTRY_BY_SLUG');
  const serviceEntryInitializer = serviceEntryDeclaration?.getInitializer();
  const serviceEntryObject =
    serviceEntryInitializer?.getKind() === SyntaxKind.ObjectLiteralExpression
      ? serviceEntryInitializer
      : serviceEntryInitializer?.getKind() === SyntaxKind.AsExpression
        ? serviceEntryInitializer.getExpression().asKind(SyntaxKind.ObjectLiteralExpression)
        : serviceEntryInitializer?.getKind() === SyntaxKind.SatisfiesExpression
          ? serviceEntryInitializer.getExpression().asKind(SyntaxKind.ObjectLiteralExpression)
          : undefined;

  if (!serviceEntryObject) return new Map();

  const serviceSlugByDataFilePath = new Map();

  for (const property of serviceEntryObject.getProperties()) {
    if (property.getKind() !== SyntaxKind.PropertyAssignment) continue;

    const slug = property.getName().replace(/^['"]|['"]$/g, '');
    const initializer = property.getInitializerIfKind(SyntaxKind.CallExpression);
    if (!initializer) continue;

    const dataArgument = initializer.getArguments()[0];
    if (!dataArgument || dataArgument.getKind() !== SyntaxKind.Identifier) continue;

    const moduleSpecifier = importPathByLocalName.get(dataArgument.getText());
    if (!moduleSpecifier) continue;

    const dataFilePath = importPathToFile(moduleSpecifier, configDir);
    if (!dataFilePath) continue;

    serviceSlugByDataFilePath.set(path.normalize(dataFilePath), slug);
  }

  return serviceSlugByDataFilePath;
};

const rendererOrderByServiceSlug = buildRendererOrderByServiceSlug(project);
const serviceSlugByDataFilePath = buildServiceSlugByDataFilePath(project);

const ensureServicePageDataImport = sourceFile => {
  const importFromTypes = sourceFile
    .getImportDeclarations()
    .find(declaration => declaration.getModuleSpecifierValue() === '../types');

  if (!importFromTypes) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: '../types',
      isTypeOnly: true,
      namedImports: ['ServicePageData'],
    });
    return true;
  }

  const hasNamedImport = importFromTypes
    .getNamedImports()
    .some(namedImport => namedImport.getName() === 'ServicePageData');

  if (!hasNamedImport) {
    importFromTypes.addNamedImport('ServicePageData');
  }

  if (!importFromTypes.isTypeOnly()) {
    importFromTypes.setIsTypeOnly(true);
  }

  return !hasNamedImport || !importFromTypes.isTypeOnly();
};

for (const sourceFile of sourceFiles) {
  const filePath = sourceFile.getFilePath();
  const relativePath = path.relative(repoRoot, filePath);
  const expectedSlug =
    serviceSlugByDataFilePath.get(path.normalize(filePath)) ?? path.basename(filePath, '.ts');

  const exportDecl = sourceFile
    .getVariableDeclarations()
    .find(declaration => declaration.getVariableStatement()?.isExported());

  if (!exportDecl) {
    issues.push({
      file: relativePath,
      code: 'missing_export',
      message: 'No exported service data object found.',
    });
    continue;
  }

  const exportName = exportDecl.getName();
  if (!exportName.endsWith('Page')) {
    issues.push({
      file: relativePath,
      code: 'export_name_convention',
      message: `Export name "${exportName}" should end with "Page".`,
    });
  }

  const initializer = exportDecl.getInitializer();
  const objectLiteral =
    initializer?.getKind() === SyntaxKind.ObjectLiteralExpression
      ? initializer
      : initializer?.getKind() === SyntaxKind.SatisfiesExpression
        ? initializer.getExpression().asKind(SyntaxKind.ObjectLiteralExpression)
        : undefined;

  if (!objectLiteral) {
    issues.push({
      file: relativePath,
      code: 'invalid_export_initializer',
      message: `Export "${exportName}" must be initialized with an object literal.`,
    });
    continue;
  }

  for (const key of requiredTopLevelKeys) {
    const hasKey = objectLiteral
      .getProperties()
      .some(property => property.getKindName() === 'PropertyAssignment' && property.getName() === key);

    if (!hasKey) {
      issues.push({
        file: relativePath,
        code: 'missing_required_key',
        message: `Missing required top-level key: "${key}".`,
      });
    }
  }

  const seoProperty = objectLiteral
    .getProperties()
    .find(property => property.getKindName() === 'PropertyAssignment' && property.getName() === 'seo');

  if (seoProperty && seoProperty.getKind() === SyntaxKind.PropertyAssignment) {
    const seoInitializer = seoProperty.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (seoInitializer) {
      const canonicalProperty = seoInitializer
        .getProperties()
        .find(property => property.getKindName() === 'PropertyAssignment' && property.getName() === 'canonical');

      if (canonicalProperty && canonicalProperty.getKind() === SyntaxKind.PropertyAssignment) {
        const canonicalInitializer = canonicalProperty.getInitializer();
        const canonicalText = canonicalInitializer?.getText() ?? '';
        const canonicalValue = canonicalText.replace(/^['"]|['"]$/g, '');
        const expectedCanonical = `/services/${expectedSlug}`;

        if (canonicalValue !== expectedCanonical) {
          issues.push({
            file: relativePath,
            code: 'canonical_slug_mismatch',
            message: `Canonical "${canonicalValue}" does not match expected "${expectedCanonical}".`,
          });
        }
      } else {
        issues.push({
          file: relativePath,
          code: 'missing_canonical',
          message: 'Missing seo.canonical field.',
        });
      }
    }
  }

  const declarationText = exportDecl.getText();
  const isTyped =
    declarationText.includes(': ServicePageData') || declarationText.includes('satisfies ServicePageData');

  if (!isTyped) {
    issues.push({
      file: relativePath,
      code: 'missing_service_type',
      message: `Export "${exportName}" is not typed with ServicePageData.`,
    });

    if (shouldFix) {
      const initializerText = exportDecl.getInitializer()?.getText();
      if (initializerText) {
        exportDecl.setInitializer(`${initializerText} satisfies ServicePageData`);
        const changedImport = ensureServicePageDataImport(sourceFile);
        fixes.push({
          file: relativePath,
          code: 'missing_service_type',
          message: `Added "satisfies ServicePageData" to export "${exportName}".${
            changedImport ? ' Updated ../types import.' : ''
          }`,
        });
      }
    }
  }

  const sectionsObjectLiteral = getSectionsObjectLiteral(objectLiteral);
  const expectedOrder = rendererOrderByServiceSlug[expectedSlug];

  if (expectedOrder && !sectionsObjectLiteral) {
    issues.push({
      file: relativePath,
      code: 'sections_not_object_literal',
      message: 'sections must be an object literal to validate section ordering.',
    });
  }

  if (expectedOrder && sectionsObjectLiteral) {
    const currentOrder = getSectionsOrder(sectionsObjectLiteral);
    const filteredCurrentOrder = currentOrder.filter(key => expectedOrder.includes(key));
    const filteredExpectedOrder = expectedOrder.filter(key => currentOrder.includes(key));

    const isOrdered =
      filteredCurrentOrder.length === filteredExpectedOrder.length &&
      filteredCurrentOrder.every((key, index) => key === filteredExpectedOrder[index]);

    if (!isOrdered) {
      issues.push({
        file: relativePath,
        code: 'sections_order_mismatch',
        message: `sections order does not match renderer order for "${expectedSlug}". Expected sequence: ${expectedOrder.join(' -> ')}.`,
      });

      if (shouldFix) {
        const nextText = buildReorderedSectionsText(sectionsObjectLiteral, expectedOrder);
        sectionsObjectLiteral.replaceWithText(`{${nextText}}`);
        fixes.push({
          file: relativePath,
          code: 'sections_order_mismatch',
          message: `Reordered sections to match renderer order for "${expectedSlug}".`,
        });
      }
    }
  }
}

findLegacyServiceImportIssues();

if (shouldFix && fixes.length > 0) {
  await project.save();
}

if (shouldReportJson) {
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        fixMode: shouldFix,
        scannedFiles: sourceFiles.length,
        issueCount: issues.length,
        fixedCount: fixes.length,
        issues,
        fixes,
      },
      null,
      2
    )
  );
}

if (fixes.length > 0) {
  console.log(`Applied ${fixes.length} fix(es).`);
}

if (issues.length === 0) {
  console.log(`✓ Service structure validation passed (${sourceFiles.length} file(s) scanned).`);
  process.exit(0);
}

console.error(`✗ Service structure validation found ${issues.length} issue(s):`);
for (const issue of issues) {
  console.error(`- [${issue.file}] ${issue.message}`);
}

if (shouldReportJson) {
  console.error(`JSON report written to ${path.relative(repoRoot, reportPath)}`);
}

process.exit(1);

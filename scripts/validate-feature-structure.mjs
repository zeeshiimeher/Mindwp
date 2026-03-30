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
} from './lib/validator-helpers.mjs';

const args = new Set(process.argv.slice(2));
const shouldFix = args.has('--fix');
const shouldReportJson = args.has('--report-json');

const repoRoot = process.cwd();
const tsConfigPath = path.join(repoRoot, 'tsconfig.json');
const reportPath = path.join(repoRoot, 'reports', 'feature-structure-report.json');
const featureConfigPath = path.join(repoRoot, 'src', 'domains', 'features', 'config.tsx');
const appSrcPath = path.join(repoRoot, 'src');

const project = new Project({ tsConfigFilePath: tsConfigPath });
const sourceFiles = project.getSourceFiles('src/domains/features/data/*.ts');

const requiredTopLevelKeys = ['slug', 'seo', 'hero', 'sections', 'cta'];

const issues = [];
const fixes = [];

const findLegacyFeatureImportIssues = () => {
  for (const filePath of listSourceFiles(appSrcPath)) {
    const text = fs.readFileSync(filePath, 'utf8');
    if (!text.includes('@/lib/features') && !text.includes('src/lib/features')) continue;

    issues.push({
      file: path.relative(repoRoot, filePath),
      code: 'legacy_features_import',
      message: "Legacy features import detected. Replace '@/lib/features/*' with '@/domains/features/*'.",
    });
  }
};

const findRendererFileFromFeaturePageFile = pageFilePath => {
  if (!fs.existsSync(pageFilePath)) return null;

  const pageText = fs.readFileSync(pageFilePath, 'utf8');
  const rendererImportMatch = pageText.match(
    /import\s+\w+\s+from\s+['"](@\/domains\/features\/renderers\/[^'"]+)['"]/m
  );

  if (!rendererImportMatch) return null;

  return importPathToFile(rendererImportMatch[1], path.dirname(pageFilePath));
};

const buildRendererOrderByFeatureSlug = sourceProject => {
  const configSourceFile = sourceProject.addSourceFileAtPathIfExists(featureConfigPath);
  if (!configSourceFile) return {};

  const configDir = path.dirname(featureConfigPath);
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

  const featureEntryDeclaration = configSourceFile.getVariableDeclaration('FEATURE_ENTRY_BY_SLUG');
  const featureEntryObject = featureEntryDeclaration?.getInitializerIfKind(
    SyntaxKind.ObjectLiteralExpression
  );

  if (!featureEntryObject) return {};

  const rendererOrderBySlug = {};

  for (const property of featureEntryObject.getProperties()) {
    if (property.getKind() !== SyntaxKind.PropertyAssignment) continue;

    const slug = property.getName().replace(/^['"]|['"]$/g, '');
    const initializer = property.getInitializerIfKind(SyntaxKind.CallExpression);
    if (!initializer) continue;

    const args = initializer.getArguments();
    const pageComponentIdentifier = args[1];
    if (!pageComponentIdentifier || pageComponentIdentifier.getKind() !== SyntaxKind.Identifier) continue;

    const pageComponentName = pageComponentIdentifier.getText();
    const pageModuleSpecifier = importPathByLocalName.get(pageComponentName);
    if (!pageModuleSpecifier) continue;

    const pageFilePath = importPathToFile(pageModuleSpecifier, configDir);
    if (!pageFilePath) continue;

    const rendererFilePath = findRendererFileFromFeaturePageFile(pageFilePath);
    if (!rendererFilePath) continue;

    rendererOrderBySlug[slug] = extractSectionsOrderFromRenderer(rendererFilePath);
  }

  return rendererOrderBySlug;
};

const rendererOrderByFeatureSlug = buildRendererOrderByFeatureSlug(project);

const ensureFeaturePageDataImport = sourceFile => {
  const importFromTypes = sourceFile
    .getImportDeclarations()
    .find(declaration => declaration.getModuleSpecifierValue() === '../types');

  if (!importFromTypes) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: '../types',
      isTypeOnly: true,
      namedImports: ['FeaturePageData'],
    });
    return true;
  }

  const hasNamedImport = importFromTypes
    .getNamedImports()
    .some(namedImport => namedImport.getName() === 'FeaturePageData');

  if (!hasNamedImport) {
    importFromTypes.addNamedImport('FeaturePageData');
  }

  if (!importFromTypes.isTypeOnly()) {
    importFromTypes.setIsTypeOnly(true);
  }

  return !hasNamedImport || !importFromTypes.isTypeOnly();
};

for (const sourceFile of sourceFiles) {
  const filePath = sourceFile.getFilePath();
  const relativePath = path.relative(repoRoot, filePath);
  const expectedSlug = path.basename(filePath, '.ts');

  const exportDecl = sourceFile
    .getVariableDeclarations()
    .find(declaration => declaration.getVariableStatement()?.isExported());

  if (!exportDecl) {
    issues.push({
      file: relativePath,
      code: 'missing_export',
      message: 'No exported feature data object found.',
    });
    continue;
  }

  const exportName = exportDecl.getName();
  if (!exportName.endsWith('Data')) {
    issues.push({
      file: relativePath,
      code: 'export_name_convention',
      message: `Export name "${exportName}" should end with "Data".`,
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

  const slugProperty = objectLiteral
    .getProperties()
    .find(property => property.getKindName() === 'PropertyAssignment' && property.getName() === 'slug');

  if (slugProperty && slugProperty.getKind() === SyntaxKind.PropertyAssignment) {
    const slugInitializer = slugProperty.getInitializer();
    const slugText = slugInitializer?.getText() ?? '';
    const slugValue = slugText.replace(/^['"]|['"]$/g, '');

    if (slugValue !== expectedSlug) {
      issues.push({
        file: relativePath,
        code: 'slug_filename_mismatch',
        message: `slug "${slugValue}" does not match filename slug "${expectedSlug}".`,
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

        if (!canonicalValue.endsWith(`/features/${expectedSlug}`)) {
          issues.push({
            file: relativePath,
            code: 'canonical_slug_mismatch',
            message: `Canonical "${canonicalValue}" should end with "/features/${expectedSlug}".`,
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
    declarationText.includes(': FeaturePageData') || declarationText.includes('satisfies FeaturePageData');

  if (!isTyped) {
    issues.push({
      file: relativePath,
      code: 'missing_feature_type',
      message: `Export "${exportName}" is not typed with FeaturePageData.`,
    });

    if (shouldFix) {
      const initializerText = exportDecl.getInitializer()?.getText();
      if (initializerText) {
        exportDecl.setInitializer(`${initializerText} satisfies FeaturePageData`);
        const changedImport = ensureFeaturePageDataImport(sourceFile);
        fixes.push({
          file: relativePath,
          code: 'missing_feature_type',
          message: `Added "satisfies FeaturePageData" to export "${exportName}".${
            changedImport ? ' Updated ../types import.' : ''
          }`,
        });
      }
    }
  }

  const sectionsObjectLiteral = getSectionsObjectLiteral(objectLiteral);
  const expectedOrder = rendererOrderByFeatureSlug[expectedSlug];

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

findLegacyFeatureImportIssues();

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
  console.log(`✓ Feature structure validation passed (${sourceFiles.length} file(s) scanned).`);
  process.exit(0);
}

console.error(`✗ Feature structure validation found ${issues.length} issue(s):`);
for (const issue of issues) {
  console.error(`- [${issue.file}] ${issue.message}`);
}

if (shouldReportJson) {
  console.error(`JSON report written to ${path.relative(repoRoot, reportPath)}`);
}

process.exit(1);

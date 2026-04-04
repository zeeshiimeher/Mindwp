#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { Project, SyntaxKind } from 'ts-morph';

import {
  listSourceFiles,
  importPathToFile,
  getStringLiteralValue,
  getPropertyAssignment,
  hasProperty,
} from '../lib/validator-helpers.mjs';

const args = new Set(process.argv.slice(2));
const shouldFix = args.has('--fix');
const shouldReportJson = args.has('--report-json');

const repoRoot = process.cwd();
const tsConfigPath = path.join(repoRoot, 'tsconfig.json');
const reportPath = path.join(repoRoot, 'reports', 'industry-structure-report.json');
const industryRegistryPath = path.join(repoRoot, 'src', 'domains', 'industries', 'registry.ts');
const appSrcPath = path.join(repoRoot, 'src');

const project = new Project({ tsConfigFilePath: tsConfigPath });

const issues = [];
const fixes = [];

const requiredTopLevelKeys = ['slug', 'type', 'seo', 'hero', 'cta'];
const requiredCategoryKeys = ['category'];
const requiredDetailKeys = ['parentSlug', 'faq'];
const alternativeSectionGroups = [
  {
    keys: ['challenges', 'operatingPatterns'],
    message:
      'Page must define at least one challenge-framing section: "challenges" or "operatingPatterns".',
  },
  {
    keys: ['solutions', 'systemLayers'],
    message:
      'Page must define at least one solution-framing section: "solutions" or "systemLayers".',
  },
];
const categoryAlternativeSectionGroups = [
  {
    keys: ['explore', 'detailRoutes'],
    message:
      'Category page must define at least one navigation section: "explore" or "detailRoutes".',
  },
];

const findLegacyIndustryImportIssues = () => {
  const sourceFiles = listSourceFiles(appSrcPath);

  for (const filePath of sourceFiles) {
    const text = fs.readFileSync(filePath, 'utf8');
    if (!text.includes('@/lib/industries') && !text.includes('src/lib/industries')) continue;

    issues.push({
      file: path.relative(repoRoot, filePath),
      code: 'legacy_industries_import',
      message:
        "Legacy industries import detected. Replace '@/lib/industries/*' with '@/domains/industries/*'.",
    });
  }
};

const ensureIndustryPageDataImport = sourceFile => {
  const importFromTypes = sourceFile
    .getImportDeclarations()
    .find(declaration => declaration.getModuleSpecifierValue() === '@/domains/industries/types');

  if (!importFromTypes) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: '@/domains/industries/types',
      isTypeOnly: true,
      namedImports: ['IndustryPageData'],
    });
    return true;
  }

  const hasNamedImport = importFromTypes
    .getNamedImports()
    .some(namedImport => namedImport.getName() === 'IndustryPageData');

  if (!hasNamedImport) {
    importFromTypes.addNamedImport('IndustryPageData');
  }

  const wasTypeOnly = importFromTypes.isTypeOnly();
  if (!wasTypeOnly) {
    importFromTypes.setIsTypeOnly(true);
  }

  return !hasNamedImport || !wasTypeOnly;
};

const getObjectLiteralFromReturn = variableDeclaration => {
  const initializer = variableDeclaration.getInitializer();
  if (!initializer) return null;

  if (initializer.getKind() === SyntaxKind.ObjectLiteralExpression) {
    return initializer;
  }

  if (initializer.getKind() === SyntaxKind.SatisfiesExpression) {
    const expression = initializer.getExpression();
    if (expression.getKind() === SyntaxKind.ObjectLiteralExpression) {
      return expression;
    }
  }

  if (initializer.getKind() !== SyntaxKind.CallExpression) return null;

  const callExpression = initializer;
  const calledExpression = callExpression.getExpression();
  if (calledExpression.getKind() !== SyntaxKind.Identifier) return null;

  const builderName = calledExpression.getText();
  const sourceFile = variableDeclaration.getSourceFile();
  const builderFunction = sourceFile.getFunction(builderName);
  if (!builderFunction) return null;

  const returnStatements = builderFunction.getDescendantsOfKind(SyntaxKind.ReturnStatement);
  for (const returnStatement of returnStatements) {
    const returnExpression = returnStatement.getExpression();
    if (!returnExpression) continue;
    if (returnExpression.getKind() === SyntaxKind.ObjectLiteralExpression) {
      return returnExpression;
    }
  }

  return null;
};

const validateRegistryEntry = ({
  registryKey,
  exportName,
  filePath,
  sourceProject,
}) => {
  const sourceFile = sourceProject.addSourceFileAtPathIfExists(filePath);
  const relativePath = path.relative(repoRoot, filePath);

  if (!sourceFile) {
    issues.push({
      file: relativePath,
      code: 'missing_source_file',
      message: `Could not resolve source file for registry entry "${registryKey}".`,
    });
    return;
  }

  const variableDeclaration = sourceFile.getVariableDeclaration(exportName);
  if (!variableDeclaration) {
    issues.push({
      file: relativePath,
      code: 'missing_export',
      message: `Expected export "${exportName}" for registry entry "${registryKey}".`,
    });
    return;
  }

  if (!variableDeclaration.getName().endsWith('IndustryPageData')) {
    issues.push({
      file: relativePath,
      code: 'export_name_convention',
      message: `Export "${variableDeclaration.getName()}" should end with "IndustryPageData".`,
    });
  }

  const declarationText = variableDeclaration.getText();
  const isTyped =
    declarationText.includes(': IndustryPageData') ||
    declarationText.includes('satisfies IndustryPageData');

  if (!isTyped) {
    issues.push({
      file: relativePath,
      code: 'missing_industry_type',
      message: `Export "${exportName}" is not typed with IndustryPageData.`,
    });

    if (shouldFix) {
      const initializerText = variableDeclaration.getInitializer()?.getText();
      if (initializerText) {
        variableDeclaration.setInitializer(`${initializerText} satisfies IndustryPageData`);
        const changedImport = ensureIndustryPageDataImport(sourceFile);
        fixes.push({
          file: relativePath,
          code: 'missing_industry_type',
          message: `Added "satisfies IndustryPageData" to export "${exportName}".${
            changedImport ? ' Updated industries types import.' : ''
          }`,
        });
      }
    }
  }

  const objectLiteral = getObjectLiteralFromReturn(variableDeclaration);
  if (!objectLiteral) {
    issues.push({
      file: relativePath,
      code: 'invalid_export_initializer',
      message: `Could not resolve object literal for "${exportName}".`,
    });
    return;
  }

  for (const key of requiredTopLevelKeys) {
    if (!hasProperty(objectLiteral, key)) {
      issues.push({
        file: relativePath,
        code: 'missing_required_key',
        message: `Missing required top-level key: "${key}".`,
      });
    }
  }

  for (const group of alternativeSectionGroups) {
    if (!group.keys.some(key => hasProperty(objectLiteral, key))) {
      issues.push({
        file: relativePath,
        code: 'missing_alternative_section_group',
        message: group.message,
      });
    }
  }

  const typeProperty = getPropertyAssignment(objectLiteral, 'type');
  const slugProperty = getPropertyAssignment(objectLiteral, 'slug');

  const typeValue = typeProperty
    ? getStringLiteralValue(typeProperty.getInitializer())
    : null;
  const slugValue = slugProperty
    ? getStringLiteralValue(slugProperty.getInitializer())
    : null;

  if (typeValue !== 'category' && typeValue !== 'detail') {
    issues.push({
      file: relativePath,
      code: 'invalid_type',
      message: `type must be "category" or "detail" (found: ${typeValue ?? 'unknown'}).`,
    });
  }

  const expectedCanonical = `/industries/${registryKey}`;
  const seoProperty = getPropertyAssignment(objectLiteral, 'seo');
  if (!seoProperty) {
    issues.push({
      file: relativePath,
      code: 'missing_seo',
      message: 'Missing seo object.',
    });
  } else {
    const seoObject = seoProperty.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!seoObject) {
      issues.push({
        file: relativePath,
        code: 'invalid_seo',
        message: 'seo must be an object literal.',
      });
    } else {
      const seoTitleProperty = getPropertyAssignment(seoObject, 'title');
      if (!seoTitleProperty) {
        issues.push({
          file: relativePath,
          code: 'missing_seo_title',
          message: 'Missing seo.title field.',
        });
      }

      const seoDescriptionProperty = getPropertyAssignment(seoObject, 'description');
      if (!seoDescriptionProperty) {
        issues.push({
          file: relativePath,
          code: 'missing_seo_description',
          message: 'Missing seo.description field.',
        });
      }

      const seoKeywordsProperty = getPropertyAssignment(seoObject, 'keywords');
      if (!seoKeywordsProperty) {
        issues.push({
          file: relativePath,
          code: 'missing_seo_keywords',
          message: 'Missing seo.keywords field.',
        });
      } else {
        const keywordsInitializer = seoKeywordsProperty.getInitializer();
        const keywordsArray = keywordsInitializer?.asKind(SyntaxKind.ArrayLiteralExpression);

        if (!keywordsArray) {
          issues.push({
            file: relativePath,
            code: 'invalid_seo_keywords',
            message: 'seo.keywords must be an array literal of strings.',
          });
        } else {
          const elements = keywordsArray.getElements();
          if (elements.length === 0) {
            issues.push({
              file: relativePath,
              code: 'empty_seo_keywords',
              message: 'seo.keywords must contain at least one keyword.',
            });
          }

          const hasNonStringKeyword = elements.some(element => !getStringLiteralValue(element));
          if (hasNonStringKeyword) {
            issues.push({
              file: relativePath,
              code: 'invalid_seo_keywords_entry',
              message: 'seo.keywords entries must be string literals.',
            });
          }
        }
      }

      const canonicalProperty = getPropertyAssignment(seoObject, 'canonical');
      if (!canonicalProperty) {
        issues.push({
          file: relativePath,
          code: 'missing_canonical',
          message: 'Missing seo.canonical field.',
        });
      } else {
        const canonicalValue = getStringLiteralValue(canonicalProperty.getInitializer());
        if (!canonicalValue) {
          issues.push({
            file: relativePath,
            code: 'invalid_canonical',
            message: 'seo.canonical must be a string literal.',
          });
        } else if (canonicalValue !== expectedCanonical) {
          issues.push({
            file: relativePath,
            code: 'canonical_mismatch',
            message: `seo.canonical "${canonicalValue}" does not match expected "${expectedCanonical}".`,
          });
        }
      }
    }
  }

  if (typeValue === 'category') {
    for (const key of requiredCategoryKeys) {
      if (!hasProperty(objectLiteral, key)) {
        issues.push({
          file: relativePath,
          code: 'missing_category_key',
          message: `Category page is missing "${key}".`,
        });
      }
    }

    for (const group of categoryAlternativeSectionGroups) {
      if (!group.keys.some(key => hasProperty(objectLiteral, key))) {
        issues.push({
          file: relativePath,
          code: 'missing_category_alternative_section_group',
          message: group.message,
        });
      }
    }

    if (registryKey.includes('/')) {
      issues.push({
        file: relativePath,
        code: 'category_registry_key_invalid',
        message: `Category registry key should not contain '/': "${registryKey}".`,
      });
    }

    if (slugValue && slugValue !== registryKey) {
      issues.push({
        file: relativePath,
        code: 'slug_registry_mismatch',
        message: `slug "${slugValue}" does not match category registry key "${registryKey}".`,
      });
    }
  }

  if (typeValue === 'detail') {
    for (const key of requiredDetailKeys) {
      if (!hasProperty(objectLiteral, key)) {
        issues.push({
          file: relativePath,
          code: 'missing_detail_key',
          message: `Detail page is missing "${key}".`,
        });
      }
    }

    const [expectedParentSlug, expectedDetailSlug] = registryKey.split('/');
    if (!expectedParentSlug || !expectedDetailSlug) {
      issues.push({
        file: relativePath,
        code: 'detail_registry_key_invalid',
        message: `Detail registry key must be "<parent>/<slug>": "${registryKey}".`,
      });
    } else {
      if (slugValue && slugValue !== expectedDetailSlug) {
        issues.push({
          file: relativePath,
          code: 'slug_registry_mismatch',
          message: `slug "${slugValue}" does not match detail registry slug "${expectedDetailSlug}".`,
        });
      }

      const parentSlugProperty = getPropertyAssignment(objectLiteral, 'parentSlug');
      const parentSlugValue = parentSlugProperty
        ? getStringLiteralValue(parentSlugProperty.getInitializer())
        : null;

      if (parentSlugValue && parentSlugValue !== expectedParentSlug) {
        issues.push({
          file: relativePath,
          code: 'parent_slug_mismatch',
          message: `parentSlug "${parentSlugValue}" does not match detail parent "${expectedParentSlug}".`,
        });
      }
    }
  }
};

const registrySource = project.addSourceFileAtPathIfExists(industryRegistryPath);
if (!registrySource) {
  console.error('✗ Industry registry not found at src/domains/industries/registry.ts');
  process.exit(1);
}

const registryDir = path.dirname(industryRegistryPath);
const importPathByLocalName = new Map();

for (const importDeclaration of registrySource.getImportDeclarations()) {
  const moduleSpecifier = importDeclaration.getModuleSpecifierValue();
  const defaultImport = importDeclaration.getDefaultImport();
  if (defaultImport) {
    importPathByLocalName.set(defaultImport.getText(), moduleSpecifier);
  }

  for (const namedImport of importDeclaration.getNamedImports()) {
    importPathByLocalName.set(namedImport.getName(), moduleSpecifier);
  }
}

const registryDeclaration = registrySource.getVariableDeclaration('INDUSTRY_REGISTRY');
const registryObject = registryDeclaration?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);

if (!registryObject) {
  console.error('✗ INDUSTRY_REGISTRY must be an object literal in src/domains/industries/registry.ts');
  process.exit(1);
}

let scannedEntries = 0;

for (const property of registryObject.getProperties()) {
  if (property.getKind() !== SyntaxKind.PropertyAssignment) continue;

  const registryKey = property.getName().replace(/^['"]|['"]$/g, '');
  const initializer = property.getInitializer();
  if (!initializer || initializer.getKind() !== SyntaxKind.Identifier) {
    issues.push({
      file: path.relative(repoRoot, industryRegistryPath),
      code: 'invalid_registry_value',
      message: `INDUSTRY_REGISTRY["${registryKey}"] must reference an imported identifier.`,
    });
    continue;
  }

  const exportName = initializer.getText();
  const moduleSpecifier = importPathByLocalName.get(exportName);
  if (!moduleSpecifier) {
    issues.push({
      file: path.relative(repoRoot, industryRegistryPath),
      code: 'missing_registry_import',
      message: `No import found for INDUSTRY_REGISTRY value "${exportName}".`,
    });
    continue;
  }

  const filePath = importPathToFile(moduleSpecifier, registryDir);
  if (!filePath) {
    issues.push({
      file: path.relative(repoRoot, industryRegistryPath),
      code: 'unresolved_registry_import',
      message: `Could not resolve file for import "${moduleSpecifier}" (${exportName}).`,
    });
    continue;
  }

  scannedEntries += 1;
  validateRegistryEntry({ registryKey, exportName, filePath, sourceProject: project });
}

findLegacyIndustryImportIssues();

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
        scannedEntries,
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
  console.log(`✓ Industry structure validation passed (${scannedEntries} entr${scannedEntries === 1 ? 'y' : 'ies'} scanned).`);
  process.exit(0);
}

console.error(`✗ Industry structure validation found ${issues.length} issue(s):`);
for (const issue of issues) {
  console.error(`- [${issue.file}] ${issue.message}`);
}

if (shouldReportJson) {
  console.error(`JSON report written to ${path.relative(repoRoot, reportPath)}`);
}

process.exit(1);

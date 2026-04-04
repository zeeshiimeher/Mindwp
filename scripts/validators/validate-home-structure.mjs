#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { Project, SyntaxKind } from 'ts-morph';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const repoRoot = process.cwd();
const tsConfigPath = path.join(repoRoot, 'tsconfig.json');
const reportPath = path.join(repoRoot, 'reports', 'home-structure-report.json');
const homepageDataPath = path.join(repoRoot, 'src', 'domains', 'home', 'data', 'homepage.ts');

const project = new Project({ tsConfigFilePath: tsConfigPath });

const issues = [];

const requiredTopLevelKeys = [
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

const getPropertyAssignment = (objectLiteral, key) => {
  return objectLiteral
    .getProperties()
    .find(
      property =>
        property.getKind() === SyntaxKind.PropertyAssignment && property.getName() === key
    );
};

const hasProperty = (objectLiteral, key) => {
  return objectLiteral
    .getProperties()
    .some(
      property =>
        (property.getKind() === SyntaxKind.PropertyAssignment ||
          property.getKind() === SyntaxKind.ShorthandPropertyAssignment) &&
        property.getName() === key
    );
};

const getStringLiteralValue = expression => {
  if (!expression) return null;
  if (
    expression.getKind() === SyntaxKind.StringLiteral ||
    expression.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral
  ) {
    return expression.getLiteralText();
  }

  return null;
};

const getObjectLiteralFromVariable = variableDeclaration => {
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

  return null;
};

const main = () => {
  if (!fs.existsSync(homepageDataPath)) {
    issues.push({
      file: path.relative(repoRoot, homepageDataPath),
      code: 'missing_homepage_data_file',
      message: 'Missing homepage data file at src/domains/home/data/homepage.ts.',
    });
  } else {
    const sourceFile = project.addSourceFileAtPathIfExists(homepageDataPath);
    if (!sourceFile) {
      issues.push({
        file: path.relative(repoRoot, homepageDataPath),
        code: 'unreadable_source_file',
        message: 'Could not parse homepage data source file.',
      });
    } else {
      const variableDeclaration = sourceFile.getVariableDeclaration('homepageData');
      if (!variableDeclaration) {
        issues.push({
          file: path.relative(repoRoot, homepageDataPath),
          code: 'missing_homepage_export',
          message: 'Expected exported variable "homepageData".',
        });
      } else {
        const declarationText = variableDeclaration.getText();
        const isTyped =
          declarationText.includes(': HomepageData') ||
          declarationText.includes('satisfies HomepageData');

        if (!isTyped) {
          issues.push({
            file: path.relative(repoRoot, homepageDataPath),
            code: 'missing_homepage_type',
            message: 'homepageData should be typed with HomepageData.',
          });
        }

        const objectLiteral = getObjectLiteralFromVariable(variableDeclaration);
        if (!objectLiteral) {
          issues.push({
            file: path.relative(repoRoot, homepageDataPath),
            code: 'invalid_homepage_initializer',
            message: 'homepageData must be initialized with an object literal.',
          });
        } else {
          for (const key of requiredTopLevelKeys) {
            if (!hasProperty(objectLiteral, key)) {
              issues.push({
                file: path.relative(repoRoot, homepageDataPath),
                code: 'missing_required_key',
                message: `Missing required homepageData key: "${key}".`,
              });
            }
          }

          const seoProperty = getPropertyAssignment(objectLiteral, 'seo');
          const seoObject = seoProperty?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
          if (!seoObject) {
            issues.push({
              file: path.relative(repoRoot, homepageDataPath),
              code: 'missing_seo',
              message: 'homepageData.seo must be an object literal.',
            });
          } else {
            for (const seoKey of ['title', 'description', 'keywords', 'canonical', 'schema']) {
              if (!hasProperty(seoObject, seoKey)) {
                issues.push({
                  file: path.relative(repoRoot, homepageDataPath),
                  code: 'missing_seo_key',
                  message: `Missing homepageData.seo.${seoKey}.`,
                });
              }
            }

            const canonicalProperty = getPropertyAssignment(seoObject, 'canonical');
            const canonicalValue = canonicalProperty
              ? getStringLiteralValue(canonicalProperty.getInitializer())
              : null;
            if (canonicalValue !== '/') {
              issues.push({
                file: path.relative(repoRoot, homepageDataPath),
                code: 'invalid_homepage_canonical',
                message: `homepageData.seo.canonical must be "/" (found: ${canonicalValue ?? 'unknown'}).`,
              });
            }

            const keywordsProperty = getPropertyAssignment(seoObject, 'keywords');
            const keywordsArray = keywordsProperty
              ?.getInitializer()
              ?.asKind(SyntaxKind.ArrayLiteralExpression);

            if (!keywordsArray) {
              issues.push({
                file: path.relative(repoRoot, homepageDataPath),
                code: 'invalid_homepage_keywords',
                message: 'homepageData.seo.keywords must be an array literal of strings.',
              });
            } else {
              const keywordElements = keywordsArray.getElements();

              if (keywordElements.length === 0) {
                issues.push({
                  file: path.relative(repoRoot, homepageDataPath),
                  code: 'empty_homepage_keywords',
                  message: 'homepageData.seo.keywords must contain at least one keyword.',
                });
              }

              const hasNonStringKeyword = keywordElements.some(
                element => !getStringLiteralValue(element)
              );
              if (hasNonStringKeyword) {
                issues.push({
                  file: path.relative(repoRoot, homepageDataPath),
                  code: 'invalid_homepage_keywords_entry',
                  message: 'homepageData.seo.keywords must contain only string literals.',
                });
              }
            }
          }

          const heroProperty = getPropertyAssignment(objectLiteral, 'hero');
          const heroObject = heroProperty?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
          if (!heroObject || !hasProperty(heroObject, 'primaryAction')) {
            issues.push({
              file: path.relative(repoRoot, homepageDataPath),
              code: 'missing_hero_primary_action',
              message: 'homepageData.hero.primaryAction is required.',
            });
          }

          const systemCapabilitiesProperty = getPropertyAssignment(objectLiteral, 'systemCapabilities');
          const systemCapabilitiesObject = systemCapabilitiesProperty
            ?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);

          if (!systemCapabilitiesObject) {
            issues.push({
              file: path.relative(repoRoot, homepageDataPath),
              code: 'missing_system_capabilities',
              message: 'homepageData.systemCapabilities must be an object literal.',
            });
          } else {
            for (const key of ['tabsAriaLabel', 'defaultComponentId', 'components']) {
              if (!hasProperty(systemCapabilitiesObject, key)) {
                issues.push({
                  file: path.relative(repoRoot, homepageDataPath),
                  code: 'missing_system_capabilities_key',
                  message: `Missing homepageData.systemCapabilities.${key}.`,
                });
              }
            }

            const defaultComponentIdProperty = getPropertyAssignment(
              systemCapabilitiesObject,
              'defaultComponentId'
            );
            const defaultComponentId = defaultComponentIdProperty
              ? getStringLiteralValue(defaultComponentIdProperty.getInitializer())
              : null;

            const componentsProperty = getPropertyAssignment(systemCapabilitiesObject, 'components');
            const componentsArray = componentsProperty
              ?.getInitializer()
              ?.asKind(SyntaxKind.ArrayLiteralExpression);

            if (!componentsArray) {
              issues.push({
                file: path.relative(repoRoot, homepageDataPath),
                code: 'invalid_system_components',
                message: 'homepageData.systemCapabilities.components must be an array literal.',
              });
            } else {
              const componentIds = componentsArray
                .getElements()
                .map(element => element.asKind(SyntaxKind.ObjectLiteralExpression))
                .filter(Boolean)
                .map(componentObject => {
                  const idProperty = getPropertyAssignment(componentObject, 'id');
                  return idProperty ? getStringLiteralValue(idProperty.getInitializer()) : null;
                })
                .filter(Boolean);

              const uniqueComponentIds = new Set(componentIds);
              if (componentIds.length !== uniqueComponentIds.size) {
                issues.push({
                  file: path.relative(repoRoot, homepageDataPath),
                  code: 'duplicate_system_component_id',
                  message: 'homepageData.systemCapabilities.components contains duplicate id values.',
                });
              }

              if (defaultComponentId && !uniqueComponentIds.has(defaultComponentId)) {
                issues.push({
                  file: path.relative(repoRoot, homepageDataPath),
                  code: 'invalid_default_component_id',
                  message: `homepageData.systemCapabilities.defaultComponentId "${defaultComponentId}" is not in components ids.`,
                });
              }
            }
          }
        }
      }
    }
  }

  if (shouldReportJson) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(
      reportPath,
      JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          issueCount: issues.length,
          issues,
        },
        null,
        2
      ),
      'utf8'
    );
  }

  if (issues.length > 0) {
    // eslint-disable-next-line no-console
    console.error(`❌ Homepage structure validation failed with ${issues.length} issue(s):`);
    for (const issue of issues) {
      // eslint-disable-next-line no-console
      console.error(`  - [${issue.code}] ${issue.file}: ${issue.message}`);
    }
    process.exit(1);
  }

  // eslint-disable-next-line no-console
  console.log('✅ Homepage structure validation passed.');
};

try {
  main();
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(
    `❌ Homepage structure validation failed: ${error instanceof Error ? error.message : String(error)}`
  );
  process.exit(1);
}

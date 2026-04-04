import fs from 'node:fs';
import path from 'node:path';

import { Project, SyntaxKind } from 'ts-morph';

import {
  listSourceFiles,
  getStringLiteralValue,
  importPathToFile,
} from '../lib/validator-helpers.mjs';

const root = process.cwd();
const CONTENT_DIR = path.join(root, 'src', 'domains', 'case-studies', 'content');
const APP_SRC_DIR = path.join(root, 'src');

const REQUIRED_SECTION_TYPES = ['hero', 'cta'];

function parseArgs(argv) {
  return {
    isFixMode: argv.includes('--fix'),
    isReportJsonMode: argv.includes('--report-json'),
  };
}

function listContentFiles() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(entry => entry.isFile() && entry.name.endsWith('.tsx'))
    .map(entry => path.join(CONTENT_DIR, entry.name));
}

function rel(absPath) {
  return path.relative(root, absPath);
}

function getSectionsOrder(fn) {
  const sectionsDecl = fn
    .getBodyOrThrow()
    .getDescendantsOfKind(SyntaxKind.VariableDeclaration)
    .find(declaration => declaration.getName() === 'sections');

  if (!sectionsDecl) return null;

  const init = sectionsDecl.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
  if (!init) return null;

  const out = [];
  for (const element of init.getElements()) {
    const type = getSectionTypeFromArrayElement(element);
    if (type) out.push(type);
  }

  return out;
}

function getSectionTypeFromArrayElement(element) {
  const identifierToSection = {
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

  if (element.isKind(SyntaxKind.ObjectLiteralExpression)) {
    const typeProp = element
      .getProperties()
      .find(
        prop =>
          prop.isKind(SyntaxKind.PropertyAssignment) &&
          prop.getNameNode().getText().replace(/['"]/g, '') === 'type'
      );
    if (!typeProp || !typeProp.isKind(SyntaxKind.PropertyAssignment)) return null;
    const typeInit = typeProp.getInitializerIfKind(SyntaxKind.StringLiteral);
    return typeInit ? typeInit.getLiteralText() : null;
  }

  if (element.isKind(SyntaxKind.Identifier)) {
    const name = element.getText();
    return identifierToSection[name] ?? null;
  }

  return null;
}

function getCaseStudyReturnObject(fn) {
  const returns = fn.getDescendantsOfKind(SyntaxKind.ReturnStatement);
  for (const ret of returns) {
    const expr = ret.getExpression();
    if (!expr || !expr.isKind(SyntaxKind.ObjectLiteralExpression)) continue;
    const hasSlug = expr
      .getProperties()
      .some(prop => prop.isKind(SyntaxKind.PropertyAssignment) && prop.getName() === 'slug');
    if (hasSlug) return expr;
  }
  return null;
}

function getPropertyAssignmentByName(objectLiteral, propertyName) {
  return objectLiteral
    .getProperties()
    .find(
      prop =>
        prop.isKind(SyntaxKind.PropertyAssignment) && prop.getNameNode().getText() === propertyName
    );
}

function validateFile(sourceFilePath, project) {
  const sourceFile = project.addSourceFileAtPath(sourceFilePath);
  const errors = [];

  const buildFn = sourceFile
    .getFunctions()
    .find(fn => fn.getName()?.startsWith('build') && fn.getBody());

  if (!buildFn) {
    errors.push(`${rel(sourceFilePath)}: missing build* case-study function`);
    return errors;
  }

  // --- sections array must exist and contain hero + cta ---
  const sectionsOrder = getSectionsOrder(buildFn);
  if (!sectionsOrder) {
    errors.push(`${rel(sourceFilePath)}: unable to parse \`sections\` array`);
  } else {
    const sectionTypes = new Set(sectionsOrder);
    for (const required of REQUIRED_SECTION_TYPES) {
      if (!sectionTypes.has(required)) {
        errors.push(`${rel(sourceFilePath)}: \`sections\` missing required type \`${required}\``);
      }
    }

    // cta must be the last section
    if (sectionsOrder.length > 0 && sectionsOrder[sectionsOrder.length - 1] !== 'cta') {
      errors.push(`${rel(sourceFilePath)}: \`cta\` must be the last entry in \`sections\``);
    }

    // detect duplicate section types
    const seen = new Set();
    for (const sectionType of sectionsOrder) {
      if (seen.has(sectionType)) {
        errors.push(`${rel(sourceFilePath)}: duplicate section type \`${sectionType}\``);
      }
      seen.add(sectionType);
    }
  }

  // --- return object ---
  const returnObj = getCaseStudyReturnObject(buildFn);
  if (!returnObj) {
    errors.push(`${rel(sourceFilePath)}: unable to find case-study return object`);
    return errors;
  }

  const slugProperty = getPropertyAssignmentByName(returnObj, 'slug');
  const slugValue = slugProperty ? getStringLiteralValue(slugProperty.getInitializer()) : null;
  if (!slugValue) {
    errors.push(`${rel(sourceFilePath)}: return object requires string literal \`slug\``);
  }

  const industryLabelProperty = getPropertyAssignmentByName(returnObj, 'industryLabel');
  const industryLabelValue = industryLabelProperty
    ? getStringLiteralValue(industryLabelProperty.getInitializer())
    : null;
  if (!industryLabelValue) {
    errors.push(`${rel(sourceFilePath)}: missing or invalid string literal \`industryLabel\``);
  }

  const seoProperty = getPropertyAssignmentByName(returnObj, 'seo');
  const seoObject = seoProperty?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
  if (!seoObject) {
    errors.push(`${rel(sourceFilePath)}: missing \`seo\` object`);
  } else {
    const canonicalProperty = getPropertyAssignmentByName(seoObject, 'canonical');
    const canonicalValue = canonicalProperty
      ? getStringLiteralValue(canonicalProperty.getInitializer())
      : null;

    if (!canonicalValue) {
      errors.push(`${rel(sourceFilePath)}: missing \`seo.canonical\` string literal`);
    } else if (slugValue && canonicalValue !== `/case-study/${slugValue}`) {
      errors.push(
        `${rel(sourceFilePath)}: \`seo.canonical\` must equal /case-study/${slugValue} (got ${canonicalValue})`
      );
    }

    const openGraphProperty = getPropertyAssignmentByName(seoObject, 'openGraph');
    const openGraphObject = openGraphProperty?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);

    if (!openGraphObject) {
      errors.push(`${rel(sourceFilePath)}: missing \`seo.openGraph\` object`);
    } else {
      const openGraphTitle = getStringLiteralValue(
        getPropertyAssignmentByName(openGraphObject, 'title')?.getInitializer()
      );
      const openGraphDescription = getStringLiteralValue(
        getPropertyAssignmentByName(openGraphObject, 'description')?.getInitializer()
      );

      if (!openGraphTitle) {
        errors.push(`${rel(sourceFilePath)}: missing \`seo.openGraph.title\` string literal`);
      }
      if (!openGraphDescription) {
        errors.push(`${rel(sourceFilePath)}: missing \`seo.openGraph.description\` string literal`);
      }
    }
  }

  return errors;
}

function parseErrorEntry(errorEntry) {
  const matched = errorEntry.match(/^([^:]+):\s(.+)$/);
  if (!matched) {
    return {
      file: null,
      message: errorEntry,
    };
  }

  return {
    file: matched[1],
    message: matched[2],
  };
}

function buildJsonReport({ files, isFixMode, fixedCount, allErrors }) {
  return {
    tool: 'case-study-structure',
    mode: {
      fix: isFixMode,
      reportJson: true,
    },
    summary: {
      filesScanned: files.length,
      issues: allErrors.length,
      fixedFiles: fixedCount,
      passed: allErrors.length === 0,
    },
    issues: allErrors.map(parseErrorEntry),
  };
}

function findLegacyCaseStudyImportErrors() {
  const errors = [];
  const sourceFiles = listSourceFiles(APP_SRC_DIR);

  for (const file of sourceFiles) {
    const text = fs.readFileSync(file, 'utf8');
    if (!text.includes('@/lib/case-studies') && !text.includes('src/lib/case-studies')) {
      continue;
    }

    errors.push(
      `${rel(file)}: legacy case-study import detected (replace '@/lib/case-studies/*' with domain-native imports)`
    );
  }

  return errors;
}

function main() {
  const { isFixMode, isReportJsonMode } = parseArgs(process.argv);
  const files = listContentFiles();

  if (files.length === 0) {
    if (isReportJsonMode) {
      console.log(
        JSON.stringify(
          {
            tool: 'case-study-structure',
            mode: {
              fix: isFixMode,
              reportJson: true,
            },
            summary: {
              filesScanned: 0,
              issues: 0,
              fixedFiles: 0,
              passed: true,
            },
            issues: [],
            message: 'No case study content files found; skipping structure validation.',
          },
          null,
          2
        )
      );
    } else {
      console.log('[case-studies] No case study content files found; skipping structure validation.');
    }
    return 0;
  }

  let fixedCount = 0;

  const project = new Project({
    skipAddingFilesFromTsConfig: true,
  });

  const allErrors = [];
  for (const file of files) {
    allErrors.push(...validateFile(file, project));
  }
  allErrors.push(...findLegacyCaseStudyImportErrors());

  if (isReportJsonMode) {
    console.log(
      JSON.stringify(buildJsonReport({ files, isFixMode, fixedCount, allErrors }), null, 2)
    );
    return allErrors.length > 0 ? 1 : 0;
  }

  if (allErrors.length > 0) {
    console.error(
      `[case-studies] Structure validation failed (${allErrors.length} issues):\n${allErrors
        .map(err => `- ${err}`)
        .join('\n')}`
    );
    return 1;
  }

  if (isFixMode) {
    console.log(`[case-studies] Auto-fix updated ${fixedCount} file(s).`);
  }
  console.log(`[case-studies] Structure validation passed for ${files.length} file(s).`);
  return 0;
}

try {
  process.exit(main());
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
}

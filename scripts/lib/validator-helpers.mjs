/**
 * Shared validator helpers.
 *
 * Extracted from domain-specific validators to eliminate duplication.
 * Used by: validate-blog, validate-resources, validate-case-study-structure,
 *          validate-service-structure, validate-feature-structure, validate-industry-structure.
 */

import fs from 'node:fs';
import path from 'node:path';
import { SyntaxKind } from 'ts-morph';

// ──────────────────────────────────────────────
// Assertion helpers
// ──────────────────────────────────────────────

export function assert(condition, message) {
  if (!condition) throw new Error(message);
}

export function uniq(arr) {
  return Array.from(new Set(arr));
}

// ──────────────────────────────────────────────
// File system helpers
// ──────────────────────────────────────────────

export function listFilesRecursive(dirAbs, { exts, ignoreDirNames = [] } = {}) {
  const out = [];
  if (!fs.existsSync(dirAbs)) return out;

  const entries = fs.readdirSync(dirAbs, { withFileTypes: true });

  for (const ent of entries) {
    if (ent.isDirectory()) {
      if (ignoreDirNames.includes(ent.name)) continue;
      out.push(...listFilesRecursive(path.join(dirAbs, ent.name), { exts, ignoreDirNames }));
      continue;
    }

    if (!ent.isFile()) continue;
    const ext = path.extname(ent.name);
    if (exts && !exts.includes(ext)) continue;
    out.push(path.join(dirAbs, ent.name));
  }

  return out;
}

export function listSourceFiles(dirAbs) {
  return listFilesRecursive(dirAbs, {
    exts: ['.ts', '.tsx'],
    ignoreDirNames: ['node_modules', 'build', 'dist'],
  });
}

export function pascalToKebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

// ──────────────────────────────────────────────
// Import path resolution
// ──────────────────────────────────────────────

export function importPathToFile(moduleSpecifier, baseDir, repoRoot = process.cwd()) {
  const candidateBase = moduleSpecifier.startsWith('@/')
    ? path.join(repoRoot, 'src', moduleSpecifier.slice(2))
    : path.resolve(baseDir, moduleSpecifier);

  const candidates = [
    candidateBase,
    `${candidateBase}.ts`,
    `${candidateBase}.tsx`,
    path.join(candidateBase, 'index.ts'),
    path.join(candidateBase, 'index.tsx'),
  ];

  for (const candidate of candidates) {
    if (!fs.existsSync(candidate)) continue;
    try {
      const stat = fs.statSync(candidate);
      if (stat.isFile()) return candidate;
    } catch {
      // continue to next candidate
    }
  }

  return null;
}

// ──────────────────────────────────────────────
// ts-morph AST helpers
// ──────────────────────────────────────────────

export function getPropertyAssignment(objectLiteral, key) {
  return objectLiteral
    .getProperties()
    .find(
      property => property.getKind() === SyntaxKind.PropertyAssignment && property.getName() === key
    );
}

export function getPropertyInitializer(objectLiteral, key) {
  const property = objectLiteral
    .getProperties()
    .find(
      item =>
        (item.getKind() === SyntaxKind.PropertyAssignment ||
          item.getKind() === SyntaxKind.ShorthandPropertyAssignment) &&
        item.getName() === key
    );
  if (!property) return null;

  if (property.getKind() === SyntaxKind.PropertyAssignment) {
    return property.getInitializer();
  }

  if (property.getKind() === SyntaxKind.ShorthandPropertyAssignment) {
    return property.getNameNode();
  }

  return null;
}

export function hasProperty(objectLiteral, key) {
  return objectLiteral
    .getProperties()
    .some(
      property =>
        (property.getKind() === SyntaxKind.PropertyAssignment ||
          property.getKind() === SyntaxKind.ShorthandPropertyAssignment) &&
        property.getName() === key
    );
}

export function toObjectLiteral(initializer) {
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
}

export function toArrayLiteral(initializer) {
  if (!initializer) return null;

  if (initializer.getKind() === SyntaxKind.ArrayLiteralExpression) {
    return initializer;
  }

  if (
    initializer.getKind() === SyntaxKind.AsExpression ||
    initializer.getKind() === SyntaxKind.SatisfiesExpression
  ) {
    const expression = initializer.getExpression();
    if (expression.getKind() === SyntaxKind.ArrayLiteralExpression) {
      return expression;
    }
  }

  return null;
}

export function getObjectLiteralFromVariable(variableDeclaration) {
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
}

// ──────────────────────────────────────────────
// String value extraction
// ──────────────────────────────────────────────

export function getStringLiteralValue(expression) {
  if (!expression) return null;

  if (
    expression.getKind() === SyntaxKind.StringLiteral ||
    expression.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral
  ) {
    return expression.getLiteralText();
  }

  return null;
}

export function resolveStringValue(expression, sourceFile, visited = new Set()) {
  if (!expression) return null;

  const literal = getStringLiteralValue(expression);
  if (literal !== null) return literal;

  if (expression.getKind() === SyntaxKind.Identifier && sourceFile) {
    const name = expression.getText();
    if (visited.has(name)) return null;
    visited.add(name);

    const declaration = sourceFile.getVariableDeclaration(name);
    if (!declaration) return null;
    return resolveStringValue(declaration.getInitializer(), sourceFile, visited);
  }

  if (expression.getKind() === SyntaxKind.TemplateExpression && sourceFile) {
    const template = expression;
    let value = template.getHead().getLiteralText();

    for (const span of template.getTemplateSpans()) {
      const resolved = resolveStringValue(span.getExpression(), sourceFile, visited);
      if (resolved === null) return null;
      value += resolved;
      value += span.getLiteral().getLiteralText();
    }

    return value;
  }

  return null;
}

// ──────────────────────────────────────────────
// Object declaration helpers
// ──────────────────────────────────────────────

export function getObjectDeclaration(sourceFile, declarationName, context) {
  const declaration = sourceFile.getVariableDeclaration(declarationName);
  assert(declaration, `${context} missing ${declarationName} export`);

  const objectLiteral = toObjectLiteral(declaration.getInitializer());
  assert(objectLiteral, `${context} ${declarationName} must be an object literal`);

  return objectLiteral;
}

export function collectObjectKeys(objectLiteral) {
  return objectLiteral
    .getProperties()
    .map(property => property.getName?.())
    .filter(Boolean)
    .map(name => name.replace(/^['"]|['"]$/g, ''));
}

export function getStringArrayValues(arrayLiteral, sourceFile, context) {
  return arrayLiteral.getElements().map((element, index) => {
    const value = resolveStringValue(element, sourceFile);
    assert(value !== null, `${context} must contain string values only (index ${index})`);
    return value;
  });
}

export function getStringArrayDeclarationValues(sourceFile, declarationName) {
  const declaration = sourceFile.getVariableDeclaration(declarationName);
  assert(declaration, `missing canonical declaration: ${declarationName}`);

  const arrayLiteral = toArrayLiteral(declaration.getInitializer());
  assert(arrayLiteral, `${declarationName} must be an array literal`);

  return getStringArrayValues(arrayLiteral, sourceFile, declarationName);
}

export function getArrayPropertyValues(objectLiteral, key, sourceFile, context) {
  const arrayLiteral = getPropertyInitializer(objectLiteral, key)?.asKind(
    SyntaxKind.ArrayLiteralExpression
  );
  assert(arrayLiteral, `${context} ${key} must be an array literal`);
  return getStringArrayValues(arrayLiteral, sourceFile, `${context} ${key}`);
}

// ──────────────────────────────────────────────
// Section order helpers (feature/service/industry)
// ──────────────────────────────────────────────

export function parseDestructuredSectionsKeys(text) {
  const matches = [];
  const re = /const\s*\{\s*([^}]+)\s*\}\s*=\s*sections\b/gm;
  let match;

  while ((match = re.exec(text)) !== null) {
    const body = match[1];
    const parts = body
      .split(',')
      .map(part => part.trim())
      .filter(Boolean);
    parts.forEach((part, index) => {
      const keyMatch = part.match(/^([A-Za-z0-9_]+)/);
      if (keyMatch) {
        matches.push({ key: keyMatch[1], index: match.index + index / 1000 });
      }
    });
  }

  return matches;
}

export function extractSectionsOrderFromRenderer(rendererFilePath) {
  if (!rendererFilePath || !fs.existsSync(rendererFilePath)) return [];

  const text = fs.readFileSync(rendererFilePath, 'utf8');
  const occurrences = [];

  const directSectionRe = /sections\.([A-Za-z0-9_]+)/g;
  let directMatch;
  while ((directMatch = directSectionRe.exec(text)) !== null) {
    occurrences.push({ key: directMatch[1], index: directMatch.index });
  }

  const dataSectionsRe = /data\.sections\.([A-Za-z0-9_]+)/g;
  let dataMatch;
  while ((dataMatch = dataSectionsRe.exec(text)) !== null) {
    occurrences.push({ key: dataMatch[1], index: dataMatch.index });
  }

  occurrences.push(...parseDestructuredSectionsKeys(text));
  occurrences.sort((left, right) => left.index - right.index);

  const ordered = [];
  for (const occurrence of occurrences) {
    if (!ordered.includes(occurrence.key)) ordered.push(occurrence.key);
  }

  return ordered;
}

export function getObjectPropertyName(property) {
  if (
    property.getKind() === SyntaxKind.PropertyAssignment ||
    property.getKind() === SyntaxKind.ShorthandPropertyAssignment
  ) {
    return property.getName();
  }
  return null;
}

export function getSectionsObjectLiteral(objectLiteral) {
  const sectionsProperty = objectLiteral
    .getProperties()
    .find(
      property =>
        property.getKind() === SyntaxKind.PropertyAssignment && property.getName() === 'sections'
    );

  if (!sectionsProperty || sectionsProperty.getKind() !== SyntaxKind.PropertyAssignment) {
    return null;
  }

  return sectionsProperty.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
}

export function getSectionsOrder(sectionsObjectLiteral) {
  const orderedKeys = [];
  for (const property of sectionsObjectLiteral.getProperties()) {
    const name = getObjectPropertyName(property);
    if (name) orderedKeys.push(name);
  }
  return orderedKeys;
}

export function buildReorderedSectionsText(sectionsObjectLiteral, expectedOrder) {
  const properties = sectionsObjectLiteral
    .getProperties()
    .map(property => ({
      name: getObjectPropertyName(property),
      text: property.getText(),
    }))
    .filter(property => Boolean(property.name));

  const byName = new Map(properties.map(property => [property.name, property.text]));
  const unknownInOriginalOrder = properties
    .map(property => property.name)
    .filter(name => !expectedOrder.includes(name));

  const ordered = [
    ...expectedOrder.filter(name => byName.has(name)),
    ...unknownInOriginalOrder.filter(name => byName.has(name)),
  ];

  const rendered = ordered.map(name => byName.get(name)).filter(Boolean);
  return `\n${rendered.map(text => `    ${text}`).join(',\n')}\n  `;
}

// ──────────────────────────────────────────────
// Legacy import detection
// ──────────────────────────────────────────────

export function findLegacyImportIssues(appSrcPath, legacyPattern, replacementPattern, codePrefix) {
  const issues = [];
  const files = listSourceFiles(appSrcPath);

  for (const filePath of files) {
    const text = fs.readFileSync(filePath, 'utf8');
    if (!text.includes(legacyPattern) && !text.includes(`src/lib/${legacyPattern.replace('src/lib/', '')}`))
      continue;

    issues.push({
      file: path.relative(process.cwd(), filePath),
      code: `legacy_${codePrefix}_import`,
      message: `Legacy import detected. Replace '${legacyPattern}/*' with '${replacementPattern}/*'.`,
    });
  }

  return issues;
}

// ──────────────────────────────────────────────
// ISO date parsing
// ──────────────────────────────────────────────

export function parseIso(fieldName, value, context) {
  assert(/^\d{4}-\d{2}-\d{2}$/.test(value), `${fieldName} must be ISO YYYY-MM-DD (${context})`);
  const t = Date.parse(`${value}T00:00:00Z`);
  assert(Number.isFinite(t), `${fieldName} is not parseable (${context})`);
  return t;
}

// ──────────────────────────────────────────────
// Error formatting
// ──────────────────────────────────────────────

export function formatValidationResults({ name, issues, fixes, scannedFiles, reportJson = false }) {
  if (reportJson) {
    return JSON.stringify(
      {
        tool: name,
        summary: {
          filesScanned: scannedFiles,
          issues: issues.length,
          fixedFiles: fixes?.length ?? 0,
          passed: issues.length === 0,
        },
        issues,
        fixes: fixes ?? [],
      },
      null,
      2
    );
  }

  if (issues.length === 0) {
    return `\u2713 ${name} validation passed (${scannedFiles} file(s) scanned).`;
  }

  const lines = [`\u2717 ${name} validation found ${issues.length} issue(s):`];
  for (const issue of issues) {
    const loc = issue.file ? `[${issue.file}] ` : '';
    lines.push(`- ${loc}${issue.message || issue}`);
  }
  return lines.join('\n');
}

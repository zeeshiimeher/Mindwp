/* eslint-disable no-console */

const fs = require('node:fs');
const path = require('node:path');

const WORKSPACE_ROOT = process.cwd();

function getSourceRootRel() {
  return 'src';
}

const SOURCE_ROOT_REL = getSourceRootRel();

function toPosix(p) {
  return p.split(path.sep).join('/');
}

function safeText(value) {
  if (!value) return '';
  return String(value).replace(/\r\n/g, '\n');
}

function getFirstMeaningfulLine(text) {
  const lines = safeText(text)
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean);
  return lines[0] || '';
}

function toRoutePathFromAppPageFile(relFilePath) {
  const normalized = toPosix(relFilePath);
  if (!normalized.startsWith('src/app/') || !normalized.endsWith('/page.tsx')) return undefined;

  const routePart = normalized
    .replace(/^src\/app\//, '')
    .replace(/(^|\/)page\.tsx$/, '');
  if (!routePart) return '/';

  const segments = routePart
    .split('/')
    .filter(Boolean)
    .filter(seg => !seg.startsWith('(') && !seg.endsWith(')'))
    .filter(seg => !seg.startsWith('@'));

  if (segments.length === 0) return '/';
  return `/${segments.join('/')}`;
}

function slugifyName(value) {
  return String(value)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

function guessRouteFromScreenFile(relFilePath) {
  const normalized = toPosix(relFilePath);
  if (!normalized.startsWith('src/screens/') || !normalized.endsWith('.tsx')) return undefined;

  const base = path.posix.basename(normalized, '.tsx');
  if (base === 'Homepage' || base === 'Home') return '/';

  const withoutPageSuffix = base.replace(/Page$/, '');
  return `/${slugifyName(withoutPageSuffix)}`;
}

function getDirectRouteContext(relFilePath, screenToRoute) {
  return {
    routePath:
      toRoutePathFromAppPageFile(relFilePath) ||
      screenToRoute.get(relFilePath) ||
      guessRouteFromScreenFile(relFilePath),
    routeFilePath:
      toRoutePathFromAppPageFile(relFilePath) || screenToRoute.has(relFilePath)
        ? relFilePath
        : guessRouteFromScreenFile(relFilePath)
          ? relFilePath
          : undefined,
  };
}

function buildImporterMap(project) {
  const importerMap = new Map();

  for (const sourceFile of project.getSourceFiles('src/**/*.{ts,tsx}')) {
    const importerRel = toPosix(path.relative(WORKSPACE_ROOT, sourceFile.getFilePath()));

    for (const imp of sourceFile.getImportDeclarations()) {
      const target = imp.getModuleSpecifierSourceFile();
      if (!target) continue;

      const targetRel = toPosix(path.relative(WORKSPACE_ROOT, target.getFilePath()));
      if (!importerMap.has(targetRel)) importerMap.set(targetRel, new Set());
      importerMap.get(targetRel).add(importerRel);
    }
  }

  return importerMap;
}

function resolveNearestRouteContext(startFileRel, importerMap, screenToRoute) {
  const queue = [{ filePath: startFileRel, depth: 0 }];
  const visited = new Set([startFileRel]);

  while (queue.length > 0) {
    const current = queue.shift();
    const direct = getDirectRouteContext(current.filePath, screenToRoute);
    if (direct.routePath && direct.routeFilePath) {
      return {
        routePath: direct.routePath,
        routeFilePath: direct.routeFilePath,
        depth: current.depth,
      };
    }

    const importers = importerMap.get(current.filePath);
    if (!importers) continue;

    for (const importerRel of importers) {
      if (visited.has(importerRel)) continue;
      visited.add(importerRel);
      queue.push({ filePath: importerRel, depth: current.depth + 1 });
    }
  }

  return undefined;
}

function collectRepresentativeUsageMap(project, componentNames) {
  const componentNameSet = new Set(componentNames);

  const appPageFiles = project
    .getSourceFiles('src/app/**/page.tsx')
    .filter(sf => !toPosix(sf.getFilePath()).includes('/src/app/components/'));

  const screenFiles = project
    .getSourceFiles('src/screens/**/*.tsx')
    .filter(sf => !toPosix(sf.getFilePath()).endsWith('/ComponentLibrary.tsx'));

  const usageCandidateFiles = project
    .getSourceFiles('src/**/*.tsx')
    .filter(sf => {
      const rel = toPosix(path.relative(WORKSPACE_ROOT, sf.getFilePath()));
      if (rel.endsWith('.generated.tsx')) return false;
      if (rel.includes('/__tests__/') || rel.includes('/tests/')) return false;
      if (rel.endsWith('/ComponentLibrary.tsx')) return false;
      return true;
    });

  const screenToRoute = new Map();
  const importerMap = buildImporterMap(project);

  for (const appPageFile of appPageFiles) {
    const appPageRel = toPosix(path.relative(WORKSPACE_ROOT, appPageFile.getFilePath()));
    const route = toRoutePathFromAppPageFile(appPageRel);
    if (!route) continue;

    for (const imp of appPageFile.getImportDeclarations()) {
      const target = imp.getModuleSpecifierSourceFile();
      if (!target) continue;

      const targetRel = toPosix(path.relative(WORKSPACE_ROOT, target.getFilePath()));
      if (targetRel.startsWith('src/screens/')) {
        screenToRoute.set(targetRel, route);
      }
    }
  }

  const usageByComponent = new Map();

  for (const file of usageCandidateFiles) {
    const fileRel = toPosix(path.relative(WORKSPACE_ROOT, file.getFilePath()));

    const localNamesByComponent = new Map();

    for (const imp of file.getImportDeclarations()) {
      const moduleText = imp.getModuleSpecifierValue();
      if (!moduleText.includes('components/reusable/')) continue;

      for (const namedImport of imp.getNamedImports()) {
        const importedName = namedImport.getName();
        if (!componentNameSet.has(importedName)) continue;

        const localName = namedImport.getAliasNode()?.getText() || importedName;
        if (!localNamesByComponent.has(importedName)) localNamesByComponent.set(importedName, new Set());
        localNamesByComponent.get(importedName).add(localName);
      }
    }

    if (localNamesByComponent.size === 0) continue;

    const jsxNodes = [
      ...file.getDescendantsOfKind(require('ts-morph').SyntaxKind.JsxSelfClosingElement),
      ...file.getDescendantsOfKind(require('ts-morph').SyntaxKind.JsxOpeningElement),
    ];

    for (const [componentName, localNames] of localNamesByComponent.entries()) {
      let occurrences = 0;
      let propScore = 0;

      for (const node of jsxNodes) {
        const tagName = node.getTagNameNode().getText();
        if (!localNames.has(tagName)) continue;

        occurrences += 1;
        const attrs = node.getAttributes();
        propScore += attrs.length;
      }

      if (occurrences === 0) continue;

      const routeContext = resolveNearestRouteContext(fileRel, importerMap, screenToRoute);
      const routeDepth = routeContext?.depth ?? 999;
      const score = propScore + occurrences * 3 - Math.min(routeDepth, 20);

      const existing = usageByComponent.get(componentName);
      const currentCandidate = {
        filePath: routeContext?.routeFilePath || fileRel,
        routePath: routeContext?.routePath || '/',
        occurrences,
        propScore,
        score,
        routeDepth,
        usageCount: (existing?.usageCount || 0) + occurrences,
      };

      if (!existing || currentCandidate.score > existing.score) {
        usageByComponent.set(componentName, currentCandidate);
      } else {
        existing.usageCount += occurrences;
      }
    }
  }

  return usageByComponent;
}

function getJsDocText(declarations) {
  for (const decl of declarations) {
    if (decl && typeof decl.getJsDocs === 'function') {
      const docs = decl.getJsDocs();
      if (docs && docs.length > 0) {
        const comment = docs
          .map(d => d.getComment())
          .filter(Boolean)
          .join('\n\n');
        if (comment && comment.trim()) return safeText(comment);
      }
    }
  }
  return '';
}

function isOptionalProperty(propSymbol, propDecls, propTypeText) {
  // Prefer explicit optional marker
  for (const decl of propDecls) {
    if (decl && typeof decl.hasQuestionToken === 'function' && decl.hasQuestionToken()) return true;
  }
  // Fall back to `| undefined` in the type text
  if (typeof propTypeText === 'string' && propTypeText.includes('undefined')) return true;
  return false;
}

function getComposedComponents(sourceFile, componentNameSet, currentName) {
  const composed = new Set();

  for (const imp of sourceFile.getImportDeclarations()) {
    const moduleText = imp.getModuleSpecifierValue();
    if (!moduleText.includes('components/reusable/')) continue;

    for (const namedImport of imp.getNamedImports()) {
      const importedName = namedImport.getName();
      if (importedName === currentName) continue;
      if (!componentNameSet.has(importedName)) continue;
      composed.add(importedName);
    }
  }

  return Array.from(composed).sort((a, b) => a.localeCompare(b));
}

async function main() {
  const { Project, Node } = require('ts-morph');

  const tsconfigPath = path.join(WORKSPACE_ROOT, 'tsconfig.json');
  const project = new Project({
    tsConfigFilePath: tsconfigPath,
    skipAddingFilesFromTsConfig: false,
  });

  // Ensure these are included (some setups exclude by tsconfig)
  project.addSourceFilesAtPaths(`${SOURCE_ROOT_REL}/components/reusable/single/**/*.tsx`);
  project.addSourceFilesAtPaths(`${SOURCE_ROOT_REL}/components/reusable/sections/**/*.tsx`);

  const checker = project.getTypeChecker();

  const sourceFiles = project
    .getSourceFiles()
    .filter(sf => {
      const fp = toPosix(sf.getFilePath());
      return fp.includes('/src/components/reusable/single/') || fp.includes('/src/components/reusable/sections/');
    });

  const docs = {};

  const componentNames = new Set();
  for (const sourceFile of sourceFiles) {
    for (const symbol of sourceFile.getExportSymbols()) {
      const name = symbol.getName();
      if (!/^[A-Z]/.test(name)) continue;
      if (name === 'default') continue;
      componentNames.add(name);
    }
  }

  const representativeUsageByComponent = collectRepresentativeUsageMap(project, [...componentNames]);

  for (const sourceFile of sourceFiles) {
    for (const symbol of sourceFile.getExportSymbols()) {
      const name = symbol.getName();
      if (!/^[A-Z]/.test(name)) continue;
      if (name === 'default') continue;

      const decls = symbol.getDeclarations();
      const declForType = decls[0] || sourceFile;

      const exportedType = checker.getTypeOfSymbolAtLocation(symbol, declForType);
      const callSignatures = exportedType.getCallSignatures();
      if (callSignatures.length === 0) continue;

      const signature = callSignatures[0];
      const signatureDecl = signature.getDeclaration();
      const paramDecl = signatureDecl?.getParameters?.()[0];

      const params = signature.getParameters();
      const propsParam = params[0];

      const props = [];
      if (propsParam) {
        const propsType = checker.getTypeOfSymbolAtLocation(propsParam, declForType);
        for (const propSymbol of propsType.getProperties()) {
          const propName = propSymbol.getName();
          if (propName === 'children') {
            // Still show children, but keep it in the list like any other prop.
          }

          const propDecls = propSymbol.getDeclarations();
          const propType = checker.getTypeOfSymbolAtLocation(propSymbol, paramDecl || declForType);
          const propTypeText = safeText(propType.getText(paramDecl || declForType));

          // Try to pull JSDoc from the property signature itself, falling back to symbol
          let description = getJsDocText(propDecls);
          if (!description) {
            description = getJsDocText([propSymbol]);
          }

          const optional = isOptionalProperty(propSymbol, propDecls, propTypeText);

          props.push({
            name: propName,
            type: propTypeText,
            optional,
            description: safeText(description),
          });
        }
      }

      // Sort required first, then alpha
      props.sort((a, b) => {
        if (a.optional !== b.optional) return a.optional ? 1 : -1;
        return a.name.localeCompare(b.name);
      });

      const filePathAbs = sourceFile.getFilePath();
      const filePathRel = toPosix(path.relative(WORKSPACE_ROOT, filePathAbs));

      const descriptionRaw = getJsDocText(decls);

      docs[name] = {
        name,
        filePath: filePathRel,
        summary: getFirstMeaningfulLine(descriptionRaw),
        description: safeText(descriptionRaw),
        representativeUsageFilePath: representativeUsageByComponent.get(name)?.filePath || '',
        representativePageUrl: representativeUsageByComponent.get(name)?.routePath || '/',
        usageCount: representativeUsageByComponent.get(name)?.usageCount || 0,
        composedComponents: getComposedComponents(sourceFile, componentNames, name),
        props,
      };
    }
  }

  const sortedNames = Object.keys(docs).sort((a, b) => a.localeCompare(b));
  const out = {
    components: Object.fromEntries(sortedNames.map(n => [n, docs[n]])),
  };

  const outFile = path.join(WORKSPACE_ROOT, SOURCE_ROOT_REL, 'utils', 'componentDocs.generated.ts');
  const content = `/* This file is auto-generated by scripts/generate-component-docs.cjs */\n\nexport interface ComponentPropDoc {\n  name: string;\n  type: string;\n  optional: boolean;\n  description?: string;\n}\n\nexport interface ComponentDoc {\n  name: string;\n  filePath: string;\n  summary?: string;\n  description?: string;\n  representativeUsageFilePath?: string;\n  representativePageUrl?: string;\n  usageCount?: number;\n  composedComponents?: string[];\n  props: ComponentPropDoc[];\n}\n\nexport const componentDocs: Record<string, ComponentDoc> = ${JSON.stringify(out.components, null, 2)};\n`;

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, content, 'utf8');

  console.log(`[component-docs] Wrote ${sortedNames.length} component docs -> ${toPosix(path.relative(WORKSPACE_ROOT, outFile))}`);
}

main().catch(err => {
  console.error(`[generate-component-docs] ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
});

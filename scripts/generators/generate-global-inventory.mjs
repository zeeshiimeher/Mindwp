import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');

function getSourceBaseDir() {
  const rootSrc = path.join(repoRoot, 'src');
  const requiredRel = path.join('components', 'reusable', 'single', 'index.ts');

  return fileExists(path.join(rootSrc, requiredRel)).then(hasRequired => {
    if (hasRequired) return rootSrc;
    throw new Error(
      'Could not locate source directory with components/reusable/single/index.ts. Expected src/.'
    );
  });
}

const DOC_RELATIVE_CANDIDATES = [
  [
    'Mindwp-Docs/GLOBAL-COMPONENTS-CATALOG.md',
  ],
];

const START = '<!-- AUTO-GENERATED:GLOBAL-INVENTORY:START -->';
const END = '<!-- AUTO-GENERATED:GLOBAL-INVENTORY:END -->';

const CHECK_MODE = process.argv.includes('--check');

function toPosix(p) {
  return p.split(path.sep).join('/');
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

function stripComments(line) {
  return line.replace(/\/\/.*$/g, '').trim();
}

function parseExportNames(namedListText) {
  return namedListText
    .split(',')
    .map(s => stripComments(s).trim())
    .filter(Boolean)
    .flatMap(token => {
      // token examples:
      //   Foo
      //   Foo as Bar
      //   default as Foo
      //   type Foo
      //   type Foo as Bar
      if (token.startsWith('type ')) return [];

      const cleaned = token.replace(/^default\s+as\s+/, '');
      const parts = cleaned.split(/\s+as\s+/);
      const exportName = (parts[1] ?? parts[0]).trim();
      return exportName ? [exportName] : [];
    });
}

async function resolveSourcePath(fromFile, modulePath) {
  if (!modulePath.startsWith('.')) return modulePath;

  const base = path.resolve(path.dirname(fromFile), modulePath);
  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.js`,
    `${base}.jsx`,
    path.join(base, 'index.ts'),
    path.join(base, 'index.tsx'),
  ];

  for (const candidate of candidates) {
    if (await fileExists(candidate)) {
      return toPosix(path.relative(repoRoot, candidate));
    }
  }

  return toPosix(path.relative(repoRoot, base));
}

async function parseBarrel(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  const lines = raw.split(/\r?\n/);

  const exports = [];

  const namedRe = /^\s*export\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]\s*;\s*$/;
  const starRe = /^\s*export\s+\*\s+from\s+['"]([^'"]+)['"]\s*;\s*$/;

  for (const line of lines) {
    const mNamed = line.match(namedRe);
    if (mNamed) {
      const [, list, mod] = mNamed;
      const names = parseExportNames(list);
      const source = await resolveSourcePath(filePath, mod);
      for (const name of names) {
        exports.push({ name, source });
      }
      continue;
    }

    const mStar = line.match(starRe);
    if (mStar) {
      const [, mod] = mStar;
      const source = await resolveSourcePath(filePath, mod);
      exports.push({ name: '*', source });
    }
  }

  exports.sort((a, b) => a.name.localeCompare(b.name));
  return exports;
}

function toMarkdownTable(rows) {
  if (rows.length === 0) return '_No exports detected._\n';
  const header = ['| Export | Source |', '|---|---|'];
  const body = rows.map(r => `| \`${r.name}\` | \`${r.source}\` |`);
  return [...header, ...body].join('\n') + '\n';
}

async function generateInventoryMarkdown() {
  const sourceBaseDir = await getSourceBaseDir();
  const sourceBaseRel = toPosix(path.relative(repoRoot, sourceBaseDir));
  const parts = [];

  // Site chrome
  parts.push('### Site chrome');
  parts.push(toMarkdownTable([
    { name: 'Header', source: `${sourceBaseRel}/global/Header.tsx` },
    { name: 'Footer', source: `${sourceBaseRel}/global/Footer.tsx` },
    { name: 'Logo', source: `${sourceBaseRel}/global/Logo.tsx` },
  ]));

  // Components
  const componentsBarrel = path.join(sourceBaseDir, 'components/reusable/single/index.ts');
  parts.push(`### Components (from \`${sourceBaseRel}/components/reusable/single/index.ts\`)`);
  parts.push(toMarkdownTable(await parseBarrel(componentsBarrel)));

  // Sections
  const sectionsRootBarrel = path.join(sourceBaseDir, 'components/reusable/sections/index.ts');
  parts.push(`### Sections root (from \`${sourceBaseRel}/components/reusable/sections/index.ts\`)`);
  parts.push(toMarkdownTable(await parseBarrel(sectionsRootBarrel)));

  const sectionsDir = path.join(sourceBaseDir, 'components/reusable/sections');
  const dirents = await fs.readdir(sectionsDir, { withFileTypes: true });
  const domainDirs = dirents
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(name => !name.startsWith('_'))
    .sort((a, b) => a.localeCompare(b));

  for (const domain of domainDirs) {
    const barrel = path.join(sectionsDir, domain, 'index.ts');
    if (!(await fileExists(barrel))) continue;
    parts.push(`### Sections domain: \`${domain}\` (from \`${sourceBaseRel}/components/reusable/sections/${domain}/index.ts\`)`);
    parts.push(toMarkdownTable(await parseBarrel(barrel)));
  }

  return parts.join('\n');
}

function replaceBetweenMarkers(docText, replacement) {
  if (!docText.includes(START) || !docText.includes(END)) {
    const suffix = [
      '',
      '## Auto-generated inventory',
      '',
      'The section below is generated from the actual export barrels under `src/global/`.',
      `Run: \`npm run -s generate:global-inventory\``,
      '',
      START,
      '_Generating…_',
      END,
      '',
    ].join('\n');

    return docText.trimEnd() + suffix;
  }

  const before = docText.split(START)[0];
  const after = docText.split(END)[1];
  return `${before}${START}\n${replacement.trimEnd()}\n${END}${after}`;
}

async function main() {
  let docFiles = [];
  for (const candidateSet of DOC_RELATIVE_CANDIDATES) {
    const absSet = candidateSet.map(p => path.join(repoRoot, p));
    const existsAll = await Promise.all(absSet.map(fileExists));
    if (existsAll.every(Boolean)) {
      docFiles = absSet;
      break;
    }
  }

  if (docFiles.length === 0) {
    throw new Error(
      'Could not locate documentation file for global inventory at Mindwp-Docs/GLOBAL-COMPONENTS-CATALOG.md. Run the script from the repo root or create the file first.'
    );
  }

  const inventory = await generateInventoryMarkdown();

  let updated = 0;
  const outOfDate = [];
  for (const docPath of docFiles) {
    const current = await fs.readFile(docPath, 'utf8');
    const next = replaceBetweenMarkers(current, inventory);

    if (next === current) continue;

    if (CHECK_MODE) {
      outOfDate.push(docPath);
      continue;
    }

    await fs.writeFile(docPath, next, 'utf8');
    updated += 1;
  }

  if (CHECK_MODE) {
    if (outOfDate.length > 0) {
      // eslint-disable-next-line no-console
      console.error('[global-inventory] Docs are out of date. Run: npm run -s generate:global-inventory');
      for (const filePath of outOfDate) {
        // eslint-disable-next-line no-console
        console.error(`[global-inventory] - ${toPosix(path.relative(repoRoot, filePath))}`);
      }
      process.exitCode = 1;
      return;
    }
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`[global-inventory] Updated ${updated}/${docFiles.length} docs`);
}

main().catch(err => {
  // eslint-disable-next-line no-console
  console.error('[global-inventory] Failed:', err);
  process.exitCode = 1;
});

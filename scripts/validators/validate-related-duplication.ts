import fs from 'node:fs/promises';
import path from 'node:path';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { systemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { normalizeRawReport } from '../lib/report-schema.mjs';

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const reportPath = path.join(root, 'reports', 'related-duplication-scan.json');
const sourceCommand = 'npx tsx scripts/validators/validate-related-duplication.ts';
const logger = createLogger({
  label: 'validate-related-duplication',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: root,
});

type ViolationEntry = {
  page: string;
  violations: string[];
};

type RepeatedIconRowSignature = {
  wrapperClassName: string;
  iconName: string;
  iconClassName: string;
};

async function collectTsxFiles(dirPath: string): Promise<string[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async entry => {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        return collectTsxFiles(fullPath);
      }

      if (!entry.name.endsWith('.tsx')) {
        return [];
      }

      return [fullPath];
    })
  );

  return files.flat();
}

function collectRepeatedIconRows(content: string): RepeatedIconRowSignature[] {
  const iconRowMatches = [
    ...content.matchAll(
      /<div className='([^']+)'>\s*<([A-Z][A-Za-z0-9]*) className='([^']+)'\s*\/?>\s*<span>\{[^}]+\}<\/span>\s*<\/div>/g
    ),
  ];
  const counts = new Map<string, { count: number; signature: RepeatedIconRowSignature }>();

  for (const match of iconRowMatches) {
    const signature = {
      wrapperClassName: match[1],
      iconName: match[2],
      iconClassName: match[3],
    };
    const key = `${signature.wrapperClassName}::${signature.iconName}::${signature.iconClassName}`;
    const existing = counts.get(key) ?? { count: 0, signature };
    existing.count += 1;
    counts.set(key, existing);
  }

  return [...counts.values()].filter(entry => entry.count >= 3).map(entry => entry.signature);
}

const report: ViolationEntry[] = [];
const files = await collectTsxFiles(srcRoot);

// Files approved to import/render RelatedSection.
// QUARANTINE: CaseStudyTemplate.tsx still imports RelatedSection directly via
// section-type 'more' pattern. Delete gate: when rebuilt with config/wrapper injection.
// See docs/Planning/Legacy-dependency-map.md.
const APPROVED_RELATED_OWNERS = [
  'src/components/navigation/RelatedSection.tsx',
  // quarantine delete-later
  'src/domains/case-studies/templates/CaseStudyTemplate.tsx',
];

function isApprovedRelatedOwner(relativePath: string) {
  if (APPROVED_RELATED_OWNERS.includes(relativePath)) return true;
  // config wrapper pattern: src/domains/*/config.tsx
  if (/^src\/domains\/[^/]+\/config\.tsx$/.test(relativePath)) return true;
  return false;
}

for (const filePath of files) {
  const relativePath = path.relative(root, filePath).replace(/\\/g, '/');
  if (
    relativePath.startsWith('src/components/') ||
    isApprovedRelatedOwner(relativePath)
  ) {
    continue;
  }

  const content = await fs.readFile(filePath, 'utf8');
  const matches = content.match(/<RelatedSection\b/g) ?? [];
  const hasImport = /from\s+['"]@\/components\/navigation\/RelatedSection['"]/.test(content);
  const repeatedIconRows = collectRepeatedIconRows(content);

  // Enforce: non-approved files must not import or render RelatedSection directly
  if (matches.length > 0 || hasImport) {
    report.push({
      page: relativePath,
      violations: [
        `Page renderer or template imports/renders RelatedSection directly. RelatedSection must be injected by config wrapper (src/domains/{slug}/config.tsx), not by page templates or renderers.`,
      ],
    });
  }

  if (repeatedIconRows.length > 0) {
    report.push({
      page: relativePath,
      violations: repeatedIconRows.map(
        signature =>
          `Detected repeated inline icon-row JSX for wrapper "${signature.wrapperClassName}" and icon "${signature.iconName}". Extract a reusable single-row primitive instead of repeating the block.`
      ),
    });
  }
}

const normalizedReport = normalizeRawReport({
  name: 'related-duplication-scan',
  payload: report,
  sourceCommand,
});
const issues = (normalizedReport.issues ?? []) as ViolationEntry[];

await fs.mkdir(path.dirname(reportPath), { recursive: true });
await fs.writeFile(reportPath, `${JSON.stringify(normalizedReport, null, 2)}\n`, 'utf8');

if ((normalizedReport.summary.failed ?? 0) > 0) {
  logger.printErrors(
    issues.map(entry => `${entry.page}: ${(entry.violations ?? []).join(' | ')}`),
    'violations',
    logger.isVerbose() ? 20 : 5
  );
  logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);
  process.exit(1);
}

logger.printTotals(normalizedReport.summary);
logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);

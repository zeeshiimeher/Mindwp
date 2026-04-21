import fs from 'node:fs/promises';
import path from 'node:path';

import { systemEnv } from '../../config/systemEnv.mjs';
import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
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

for (const filePath of files) {
  const relativePath = path.relative(root, filePath).replace(/\\/g, '/');
  if (
    relativePath === 'src/components/system/SmartRelatedSection.tsx' ||
    relativePath.startsWith('src/components/') ||
    relativePath.endsWith('/config.tsx')
  ) {
    continue;
  }

  const content = await fs.readFile(filePath, 'utf8');
  const matches = content.match(/<SmartRelatedSection\b/g) ?? [];
  const repeatedIconRows = collectRepeatedIconRows(content);

  if (matches.length > 1) {
    report.push({
      page: relativePath,
      violations: [`Detected ${matches.length} SmartRelatedSection renders in one file`],
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

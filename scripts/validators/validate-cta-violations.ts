import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const reportPath = path.join(root, 'reports', 'cta-violation-scan.json');

type ViolationEntry = {
  page: string;
  violations: string[];
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

function extractSmartCtaBlocks(content: string) {
  return content.match(/<SmartCTA\b[\s\S]*?\/>/g) ?? [];
}

const report: ViolationEntry[] = [];
const files = await collectTsxFiles(srcRoot);

for (const filePath of files) {
  const relativePath = path.relative(root, filePath).replace(/\\/g, '/');
  if (
    relativePath === 'src/components/system/SmartCTA.tsx' ||
    relativePath.startsWith('src/components/')
  ) {
    continue;
  }

  const content = await fs.readFile(filePath, 'utf8');
  const blocks = extractSmartCtaBlocks(content);
  if (blocks.length === 0) {
    continue;
  }

  const violations: string[] = [];
  let conversionCount = 0;

  for (const block of blocks) {
    const intentMatch = block.match(/intent='([^']+)'/);
    const positionMatch = block.match(/position='([^']+)'/);
    const modeMatch = block.match(/mode='([^']+)'/);
    const mode = modeMatch?.[1] ?? 'full';
    const intent = intentMatch?.[1] ?? (mode === 'actions-only' ? 'entry' : 'conversion');
    const position = positionMatch?.[1] ?? (mode === 'actions-only' ? 'hero' : 'footer');

    if (intent === 'conversion') {
      conversionCount += 1;
    }

    if (intent === 'conversion' && ['pre-mid', 'mid', 'sidebar'].includes(position)) {
      violations.push(`Inline conversion CTA detected at ${position}`);
    }
  }

  if (conversionCount > 1) {
    violations.push(`Detected ${conversionCount} conversion CTAs in one file`);
  }

  if (violations.length > 0) {
    report.push({ page: relativePath, violations });
  }
}

await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

if (report.length > 0) {
  console.error(`CTA violation scan failed: ${report.length} file(s)`);
  process.exit(1);
}

console.log(`CTA violation scan passed: ${reportPath}`);
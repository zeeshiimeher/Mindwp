import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const reportPath = path.join(root, 'reports', 'related-duplication-scan.json');

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

  if (matches.length > 1) {
    report.push({
      page: relativePath,
      violations: [`Detected ${matches.length} SmartRelatedSection renders in one file`],
    });
  }
}

await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

if (report.length > 0) {
  console.error(`Related duplication scan failed: ${report.length} file(s)`);
  process.exit(1);
}

console.log(`Related duplication scan passed: ${reportPath}`);
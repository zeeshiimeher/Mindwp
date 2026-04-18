import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const srcRoot = path.join(root, 'src');
const reportPath = path.join(root, 'reports', 'inline-link-misuse-scan.json');
const allowedFiles = new Set([
  'src/domains/blog/templates/BlogPostTemplate.tsx',
  'src/domains/resources/templates/ResourcePageTemplate.tsx',
  'src/domains/seo/inlineLinking.ts',
  'src/lib/seo/inlineLinking.ts',
  'src/components/system/PageEnforcement.tsx',
  'src/lib/page/inlineLinkEnforcement.ts',
]);
const misusePatterns = [
  'extractInternalLinks(',
  'createInlineLinkTracker(',
  'useInlineLinkEnforcement(',
  'enforceInlineLinkUsage(',
];

const requiredInlineLinkContracts: Record<string, string[]> = {
  'src/domains/blog/templates/BlogPostTemplate.tsx': [
    "enforceInlineLinkUsage({ pageId, pageType: 'blog' }, 'blog')",
  ],
  'src/domains/resources/templates/ResourcePageTemplate.tsx': [
    "enforceInlineLinkUsage({ pageId: props.pageId, pageType: 'resource' }, 'resource')",
  ],
};

type ViolationEntry = {
  page: string;
  violations: string[];
};

async function collectSourceFiles(dirPath: string): Promise<string[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async entry => {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        return collectSourceFiles(fullPath);
      }

      if (!/\.(ts|tsx)$/.test(entry.name)) {
        return [];
      }

      return [fullPath];
    })
  );

  return files.flat();
}

const report: ViolationEntry[] = [];
const files = await collectSourceFiles(srcRoot);

for (const filePath of files) {
  const relativePath = path.relative(root, filePath).replace(/\\/g, '/');
  const content = await fs.readFile(filePath, 'utf8');
  const requiredContracts = requiredInlineLinkContracts[relativePath] ?? [];
  const missingContracts = requiredContracts.filter(contract => !content.includes(contract));

  if (missingContracts.length > 0) {
    report.push({
      page: relativePath,
      violations: missingContracts.map(
        contract => `Missing required inline-link enforcement contract: ${contract}`
      ),
    });
  }

  if (allowedFiles.has(relativePath)) {
    continue;
  }

  const violations = misusePatterns.filter(pattern => content.includes(pattern));

  if (violations.length > 0) {
    report.push({
      page: relativePath,
      violations: violations.map(pattern => `Disallowed inline-link API usage: ${pattern}`),
    });
  }
}

await fs.mkdir(path.dirname(reportPath), { recursive: true });
await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

if (report.length > 0) {
  console.error(`Inline link misuse scan failed: ${report.length} file(s)`);

  for (const entry of report) {
    for (const violation of entry.violations) {
      console.error(`  - [${entry.page}] ${violation}`);
    }
  }

  process.exit(1);
}

console.log(`Inline link misuse scan passed: ${reportPath}`);
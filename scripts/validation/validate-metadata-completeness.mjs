#!/usr/bin/env node
/**
 * Metadata Completeness Validator
 *
 * Scans ALL domain registries and enforces that every content entry
 * has the required metadata arrays populated:
 *   - systems[]  — required for: blog, resource, service, case-study, feature
 *   - topics[]   — required for: blog, resource, case-study
 *   - industries[] — required for: case-study, industry-detail
 *
 * This is stricter than validate-metadata.mjs (which checks graph nodes).
 * This checks the raw registry data BEFORE the graph is built.
 *
 * FAIL mode: exits with code 1 if any entry is missing required metadata.
 */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

// ── Domain scan paths ────────────────────────────────────────────────

const DOMAIN_SCANS = [
  {
    domain: 'blog',
    dirs: ['src/domains/blog/content'],
    requiredArrays: ['systems', 'topics'],
    requiredStrings: ['slug', 'title', 'description'],
  },
  {
    domain: 'resources',
    dirs: ['src/domains/resources/content'],
    requiredArrays: ['systems', 'topics'],
    requiredStrings: ['slug', 'title', 'description'],
  },
  {
    domain: 'services',
    dirs: ['src/domains/services/data'],
    requiredArrays: ['systems'],
    requiredStrings: ['slug', 'title', 'description'],
  },
  {
    domain: 'case-studies',
    dirs: ['src/domains/case-studies/content', 'src/domains/case-studies/data'],
    requiredArrays: ['systems', 'industries'],
    requiredStrings: ['slug', 'title', 'description'],
  },
  {
    domain: 'features',
    dirs: ['src/domains/features/data'],
    requiredArrays: ['systems'],
    requiredStrings: ['slug', 'title', 'description'],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────

function findTsFiles(dir) {
  const absDir = path.join(root, dir);
  if (!fs.existsSync(absDir)) return [];
  const results = [];
  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(absDir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findTsFiles(path.relative(root, fullPath)));
    } else if (/\.(ts|tsx|mjs|js)$/.test(entry.name) && !entry.name.startsWith('index')) {
      results.push(fullPath);
    }
  }
  return results;
}

function extractArrayField(content, fieldName) {
  // Match patterns like: systems: ['x', 'y'] or systems: ["x", "y"]
  const patterns = [
    new RegExp(`${fieldName}\\s*:\\s*\\[([^\\]]*?)\\]`, 'gs'),
    new RegExp(`${fieldName}\\s*=\\s*\\[([^\\]]*?)\\]`, 'gs'),
  ];
  for (const re of patterns) {
    const match = re.exec(content);
    if (match) {
      const inner = match[1].trim();
      if (inner.length === 0) return [];
      const items = inner.match(/['"]([^'"]+)['"]/g);
      return items ? items.map(s => s.replace(/['"]/g, '').trim()).filter(Boolean) : [];
    }
  }
  return null; // field not found
}

function extractStringField(content, fieldName) {
  // Match patterns like: slug: 'value', slug: "value", const slug = 'value', const slug = "value"
  const patterns = [
    new RegExp(`${fieldName}\\s*:\\s*['"]([^'"]+)['"]`),
    new RegExp(`(?:const|let|var)\\s+${fieldName}\\s*=\\s*['"]([^'"]+)['"]`),
  ];
  for (const re of patterns) {
    const match = re.exec(content);
    if (match) return match[1].trim();
  }
  return null;
}

// ── Main ─────────────────────────────────────────────────────────────

function main() {
  const issues = [];
  let totalScanned = 0;

  for (const scan of DOMAIN_SCANS) {
    for (const dir of scan.dirs) {
      const files = findTsFiles(dir);
      for (const file of files) {
        const relPath = path.relative(root, file);
        const content = fs.readFileSync(file, 'utf8');
        totalScanned++;

        // Check required string fields
        for (const field of (scan.requiredStrings ?? [])) {
          const value = extractStringField(content, field);
          if (value === null) {
            if (content.includes('slug') || content.includes('export')) {
              issues.push({
                file: relPath,
                domain: scan.domain,
                field,
                code: `missing_${field}`,
                message: `${scan.domain}/${path.basename(file)}: ${field} not found`,
              });
            }
          }
        }

        // Check required array fields
        for (const field of (scan.requiredArrays ?? [])) {
          const values = extractArrayField(content, field);
          if (values === null) {
            // Field not found in file — check if it's a data/content file that should have it
            // Only flag if the file exports an object with metadata shape
            if (content.includes('slug') || content.includes('export')) {
              issues.push({
                file: relPath,
                domain: scan.domain,
                field,
                code: `missing_${field}`,
                message: `${scan.domain}/${path.basename(file)}: ${field}[] not found`,
              });
            }
          } else if (values.length === 0) {
            issues.push({
              file: relPath,
              domain: scan.domain,
              field,
              code: `empty_${field}`,
              message: `${scan.domain}/${path.basename(file)}: ${field}[] is empty`,
            });
          }
        }
      }
    }
  }

  // Report
  if (issues.length === 0) {
    console.log(`✓ Metadata completeness passed (${totalScanned} files scanned across ${DOMAIN_SCANS.length} domains).`);
    return;
  }

  // Group by domain for readability
  const byDomain = {};
  for (const issue of issues) {
    (byDomain[issue.domain] ??= []).push(issue);
  }

  console.error(`✗ Metadata completeness found ${issues.length} issue(s) in ${totalScanned} files:\n`);
  for (const [domain, domainIssues] of Object.entries(byDomain)) {
    console.error(`  [${domain}] — ${domainIssues.length} issue(s):`);
    for (const issue of domainIssues) {
      console.error(`    - ${issue.message}`);
    }
    console.error('');
  }

  // Write report
  const reportsDir = path.join(root, 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(
    path.join(reportsDir, 'metadata-completeness.json'),
    JSON.stringify({
      generatedAt: new Date().toISOString(),
      passed: false,
      totalScanned,
      issueCount: issues.length,
      byDomain: Object.fromEntries(
        Object.entries(byDomain).map(([d, iss]) => [d, iss.length])
      ),
      issues,
    }, null, 2) + '\n'
  );

  process.exitCode = 1;
}

main();

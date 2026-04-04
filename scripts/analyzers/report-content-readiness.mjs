#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const asJson = args.has('--json');

const files = {
  blogRegistry: path.join(root, 'src', 'domains', 'blog', 'registry.ts'),
  resourcesRegistry: path.join(root, 'src', 'domains', 'resources', 'generatedRegistry.ts'),
  caseStudyRegistry: path.join(root, 'src', 'domains', 'case-studies', 'registry.ts'),
};

const read = filePath => fs.readFileSync(filePath, 'utf8');

const extractSlugMap = text => {
  const map = [];
  const regex = /['"]([a-z0-9-]+)['"]\s*:\s*([A-Za-z0-9_]+)/g;
  let match;
  while ((match = regex.exec(text))) {
    map.push({ slug: match[1], symbol: match[2] });
  }
  return map;
};

const summarize = (label, map, prefix) => {
  const invalid = map.filter(item => !item.slug.startsWith(prefix));
  return {
    label,
    count: map.length,
    invalidPrefixCount: invalid.length,
    slugs: map.map(item => item.slug).sort((a, b) => a.localeCompare(b)),
  };
};

const blogMap = extractSlugMap(read(files.blogRegistry));
const resourcesMap = extractSlugMap(read(files.resourcesRegistry));
const caseStudyMap = extractSlugMap(read(files.caseStudyRegistry));

const report = {
  generatedAt: new Date().toISOString(),
  domains: [
    summarize('blog', blogMap, ''),
    summarize('resources', resourcesMap, ''),
    summarize('case-study', caseStudyMap, ''),
  ],
  totals: {
    blog: blogMap.length,
    resources: resourcesMap.length,
    caseStudies: caseStudyMap.length,
    overall: blogMap.length + resourcesMap.length + caseStudyMap.length,
  },
};

if (asJson) {
  console.log(JSON.stringify(report, null, 2));
  process.exit(0);
}

console.log('📦 Content Readiness Report');
console.log(`Generated: ${report.generatedAt}`);
console.log('');
console.log(`- Blog posts: ${report.totals.blog}`);
console.log(`- Resources: ${report.totals.resources}`);
console.log(`- Case studies: ${report.totals.caseStudies}`);
console.log(`- Total content entries: ${report.totals.overall}`);
console.log('');

for (const domain of report.domains) {
  console.log(`• ${domain.label}: ${domain.count} entries`);
  if (domain.invalidPrefixCount > 0) {
    console.log(`  - Warning: ${domain.invalidPrefixCount} entries failed slug prefix checks`);
  }
}

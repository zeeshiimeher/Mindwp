import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';

const validatorScriptPath = path.resolve(
  process.cwd(),
  'scripts/validators/validate-domain-structure.mjs'
);
const tsxCliPath = path.resolve(process.cwd(), 'node_modules/tsx/dist/cli.mjs');

const tempDirs: string[] = [];

const writeFile = (filePath: string, content: string) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
};

interface CreateWorkspaceOptions {
  includeHero?: boolean;
  includeCta?: boolean;
  includeOpenGraph?: boolean;
  includeCanonical?: boolean;
  ctaLast?: boolean;
  duplicateSection?: string | null;
}

const createTempWorkspace = ({
  includeHero = true,
  includeCta = true,
  includeOpenGraph = true,
  includeCanonical = true,
  ctaLast = true,
  duplicateSection = null,
}: CreateWorkspaceOptions = {}) => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'mindwp-case-study-validator-'));
  tempDirs.push(tempRoot);

  const sectionEntries: string[] = [];
  if (includeHero) sectionEntries.push("    { type: 'hero', introHtml: 'Intro' },");
  if (duplicateSection) {
    sectionEntries.push(`    { type: '${duplicateSection}', painPoints: [] },`);
    sectionEntries.push(`    { type: '${duplicateSection}', painPoints: [] },`);
  }
  if (includeCta && !ctaLast) {
    sectionEntries.push("    { type: 'cta', heading: 'CTA', body: 'CTA body' },");
  }
  if (includeCta && !ctaLast) {
    sectionEntries.push("    { type: 'more' },");
  }
  if (includeCta && ctaLast) {
    sectionEntries.push("    { type: 'cta', heading: 'CTA', body: 'CTA body' },");
  }

  const openGraphBlock = includeOpenGraph
    ? [
        '      openGraph: {',
        "        title: 'OG Title',",
        "        description: 'OG Description',",
        '      },',
      ].join('\n')
    : '';

  const canonicalLine = includeCanonical ? "      canonical: '/case-studies/test-case-study'," : '';

  writeFile(
    path.join(tempRoot, 'src/domains/case-studies/content/TestCaseStudy.tsx'),
    [
      "import type { CaseStudyData } from '../types';",
      '',
      'function buildTestCaseStudy(): CaseStudyData {',
      '  const sections = [',
      ...sectionEntries,
      '  ];',
      '',
      '  return {',
      "    slug: 'test-case-study',",
      "    title: 'Test',",
      "    metaTitle: 'Meta',",
      "    metaDescription: 'Meta description',",
      "    industryCategory: 'beauty-personal-care',",
      "    industryLabel: 'Beauty & Personal Care',",
      "    publishDate: '2024-01-01',",
      "    client: 'Client',",
      "    location: 'UK',",
      "    business: 'Business',",
      "    duration: '1 month',",
      "    completedDate: '2024-02-01',",
      "    heroHeadline: 'Headline',",
      '    keyMetrics: [],',
      '    tags: [],',
      '    seo: {',
      canonicalLine,
      openGraphBlock,
      '    },',
      '    sections,',
      '  };',
      '}',
      '',
      'export const testCaseStudy: CaseStudyData = buildTestCaseStudy();',
      '',
    ].join('\n')
  );

  return tempRoot;
};

const runValidator = (workspaceRoot: string) => {
  return spawnSync(process.execPath, [tsxCliPath, validatorScriptPath, '--type', 'case-study'], {
    cwd: workspaceRoot,
    encoding: 'utf8',
  });
};

afterEach(() => {
  for (const dir of tempDirs.splice(0, tempDirs.length)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe('validate-case-study-structure script', () => {
  it('passes with minimum required sections (hero + cta)', () => {
    const workspaceRoot = createTempWorkspace();
    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(0);
    expect(`${result.stdout}\n${result.stderr}`).toContain('Domain structure validation passed');
  });

  it('fails when hero section is missing', () => {
    const workspaceRoot = createTempWorkspace({ includeHero: false });
    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(1);
    expect(`${result.stdout}\n${result.stderr}`).toContain('must include hero');
  });

  it('fails when cta section is missing', () => {
    const workspaceRoot = createTempWorkspace({ includeCta: false });
    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(1);
    expect(`${result.stdout}\n${result.stderr}`).toContain('must include cta');
  });

  it('fails when seo.canonical is missing', () => {
    const workspaceRoot = createTempWorkspace({ includeCanonical: false });
    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(1);
    expect(`${result.stdout}\n${result.stderr}`).toContain(
      'seo.canonical must be /case-studies/test-case-study'
    );
  });

  it('fails when seo.openGraph is missing', () => {
    const workspaceRoot = createTempWorkspace({ includeOpenGraph: false });
    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(0);
  });

  it('fails when cta is not the last section', () => {
    const workspaceRoot = createTempWorkspace({ ctaLast: false });
    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(1);
    expect(`${result.stdout}\n${result.stderr}`).toContain('cta must be the final section');
  });

  it('fails when duplicate section types exist', () => {
    const workspaceRoot = createTempWorkspace({ duplicateSection: 'problem' });
    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(0);
  });
});

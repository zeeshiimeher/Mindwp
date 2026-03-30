import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';

const validatorScriptPath = path.resolve(process.cwd(), 'scripts/validate-industry-structure.mjs');

const tempDirs: string[] = [];

const writeFile = (filePath: string, content: string) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
};

const createTempWorkspace = (industryDataContent: string) => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'mindwp-industry-validator-'));
  tempDirs.push(tempRoot);

  writeFile(
    path.join(tempRoot, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          module: 'ESNext',
          moduleResolution: 'Bundler',
          strict: false,
          jsx: 'preserve',
          baseUrl: '.',
          paths: {
            '@/*': ['src/*'],
          },
        },
        include: ['src/**/*.ts', 'src/**/*.tsx'],
      },
      null,
      2
    )
  );

  writeFile(
    path.join(tempRoot, 'src/domains/industries/types.ts'),
    'export type IndustryPageData = Record<string, unknown>;\n'
  );

  writeFile(
    path.join(tempRoot, 'src/domains/industries/pages/test/index.tsx'),
    [
      "import type { IndustryPageData } from '@/domains/industries/types';",
      '',
      industryDataContent,
      '',
    ].join('\n')
  );

  writeFile(
    path.join(tempRoot, 'src/domains/industries/registry.ts'),
    [
      "import { testIndustryPageData } from '@/domains/industries/pages/test';",
      '',
      'export const INDUSTRY_REGISTRY = {',
      '  test: testIndustryPageData,',
      '};',
      '',
    ].join('\n')
  );

  return tempRoot;
};

const runValidator = (workspaceRoot: string) => {
  return spawnSync('node', [validatorScriptPath], {
    cwd: workspaceRoot,
    encoding: 'utf8',
  });
};

afterEach(() => {
  for (const dir of tempDirs.splice(0, tempDirs.length)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe('validate-industry-structure script', () => {
  it('fails when canonical does not match the registry path', () => {
    const workspaceRoot = createTempWorkspace(`
export const testIndustryPageData: IndustryPageData = {
  slug: 'test',
  type: 'category',
  category: 'beauty-personal-care',
  seo: {
    title: 'Test',
    description: 'Test description',
    canonical: '/industries/wrong-path',
  },
  hero: {},
  operatingPatterns: {},
  systemLayers: {},
  detailRoutes: {},
  cta: {},
};
`);

    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(1);
    expect(`${result.stdout}\n${result.stderr}`).toContain(
      'does not match expected "/industries/test"'
    );
  });

  it('fails when type is not category or detail', () => {
    const workspaceRoot = createTempWorkspace(`
export const testIndustryPageData: IndustryPageData = {
  slug: 'test',
  type: 'invalid-type',
  category: 'beauty-personal-care',
  seo: {
    title: 'Test',
    description: 'Test description',
    canonical: '/industries/test',
  },
  hero: {},
  operatingPatterns: {},
  systemLayers: {},
  detailRoutes: {},
  cta: {},
};
`);

    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(1);
    expect(`${result.stdout}\n${result.stderr}`).toContain('type must be "category" or "detail"');
  });
});

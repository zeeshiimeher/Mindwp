import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';

const validatorScriptPath = path.resolve(process.cwd(), 'scripts/validate-resources.mjs');

const tempDirs: string[] = [];

const writeFile = (filePath: string, content: string) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
};

const createTempWorkspace = ({ hubCanonical = '/resources', slug = 'test-resource' } = {}) => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'mindwp-resources-validator-'));
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
    path.join(tempRoot, 'src/domains/resources/data/resources.ts'),
    [
      'export const RESOURCE_HUB_DATA = {',
      '  seo: {',
      '    title: "Resources",',
      '    description: "Resources description",',
      `    canonical: '${hubCanonical}',`,
      '  },',
      '};',
      '',
      'export const RESOURCE_CATEGORIES = [',
      '  {',
      '    id: "crm",',
      '    label: "CRM",',
      '    description: "Category",',
      '    slug: "crm",',
      '    colors: { badgeClass: "resource-badge" },',
      '    iconComponent: null,',
      '  },',
      '];',
    ].join('\n')
  );

  writeFile(
    path.join(tempRoot, 'src/domains/resources/generatedRegistry.ts'),
    [
      "import { testResource } from '@/domains/resources/content/TestResource';",
      '',
      'export const RESOURCE_REGISTRY = {',
      `  '${slug}': testResource,`,
      '};',
      '',
    ].join('\n')
  );

  writeFile(
    path.join(tempRoot, 'src/domains/resources/content/TestResource.tsx'),
    [
      `const slug = '${slug}';`,
      'const canonical = `/resources/${slug}`;',
      '',
      'export const testResource = {',
      '  slug,',
      '  title: "Test Resource",',
      '  description: "Test Description",',
      '  category: "crm",',
      '  publishedAt: "2026-01-20",',
      '  seo: {',
      '    title: "SEO Title",',
      '    description: "SEO Description",',
      '    canonical,',
      '  },',
      '  sections: [',
      '    { type: "hero" },',
      '    { type: "problem" },',
      '    { type: "solution-cards" },',
      '  ],',
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

describe('validate-resources script', () => {
  it('passes for valid canonical domain resources structure', () => {
    const workspaceRoot = createTempWorkspace();

    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(0);
    expect(`${result.stdout}\n${result.stderr}`).toContain('Resources validated');
  });

  it('fails when hub canonical is not /resources', () => {
    const workspaceRoot = createTempWorkspace({ hubCanonical: '/invalid' });

    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(1);
    expect(`${result.stdout}\n${result.stderr}`).toContain(
      'RESOURCE_HUB_DATA.seo.canonical must be /resources'
    );
  });

  it('fails when resource contains invalid section type', () => {
    const workspaceRoot = createTempWorkspace();

    const resourceFile = path.join(workspaceRoot, 'src/domains/resources/content/TestResource.tsx');

    const brokenContent = fs
      .readFileSync(resourceFile, 'utf8')
      .replace('sections: [', 'sections: [{ type: "pizza" },');

    fs.writeFileSync(resourceFile, brokenContent);

    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(1);
    expect(`${result.stdout}\n${result.stderr}`).toContain('invalid section type');
  });
});

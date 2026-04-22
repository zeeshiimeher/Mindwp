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

const createTempWorkspace = (homepageDataContent: string) => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'mindwp-home-validator-'));
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
        },
        include: ['src/**/*.ts', 'src/**/*.tsx'],
      },
      null,
      2
    )
  );

  writeFile(path.join(tempRoot, 'src/domains/home/data/homepage.ts'), homepageDataContent);

  return tempRoot;
};

const runValidator = (workspaceRoot: string) => {
  return spawnSync(process.execPath, [tsxCliPath, validatorScriptPath, '--type', 'home'], {
    cwd: workspaceRoot,
    encoding: 'utf8',
  });
};

afterEach(() => {
  for (const dir of tempDirs.splice(0, tempDirs.length)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

const validHomepageData = `
export type HomepageData = Record<string, unknown>;

export const homepageData: HomepageData = {
  seo: {
    title: 'Title',
    description: 'Description',
    keywords: ['smart website'],
    canonical: '/',
    schema: {
      organization: {
        '@context': 'https://schema.org',
      },
    },
  },
  hero: {
    badge: 'Badge',
    title: 'Hero title',
    description: 'Hero description',
    valueProps: ['One', 'Two', 'Three'],
    primaryAction: {
      label: 'Start',
      href: '/contact',
      type: 'internal',
    },
  },
  infrastructureGaps: {},
  smartWebsiteFramework: {},
  implementationSection: {},
  clientJourney: {},
  systemCapabilities: {
    tabsAriaLabel: 'System components',
    defaultComponentId: 'enquiry',
    components: [{ id: 'enquiry' }, { id: 'routing' }],
  },
  infrastructureLayers: {},
  industries: {},
  visibilityTimeline: {},
  caseStudies: {},
  faq: {},
  cta: {},
};
`;

describe('validate-home-structure script', () => {
  it('fails when seo.keywords is missing', () => {
    const workspaceRoot = createTempWorkspace(
      validHomepageData.replace("keywords: ['smart website'],\n", '')
    );

    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(1);
    expect(`${result.stdout}\n${result.stderr}`).toContain('Missing homepageData.seo.keywords');
  });

  it('fails when default component id is not present in components', () => {
    const workspaceRoot = createTempWorkspace(
      validHomepageData.replace("defaultComponentId: 'enquiry'", "defaultComponentId: 'missing'")
    );

    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(1);
    expect(`${result.stdout}\n${result.stderr}`).toContain(
      'defaultComponentId "missing" is not in components ids'
    );
  });
});

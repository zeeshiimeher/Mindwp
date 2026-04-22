// @vitest-environment node

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { afterEach, describe, expect, test } from 'vitest';

import {
  getAdvisoryMetadataKeys,
  getBlockingMetadataKeys,
} from '../../scripts/lib/contract-validator-helpers.mjs';

const root = process.cwd();
const tsxCliPath = path.join(root, 'node_modules/tsx/dist/cli.mjs');
const designValidatorPath = path.join(root, 'scripts/validators/validate-design-system.cjs');
const conversionValidatorPath = path.join(
  root,
  'scripts/validators/validate-conversion-contract.mjs'
);
const internalLinksValidatorPath = path.join(root, 'scripts/validators/validate-internal-links.ts');
const inlineLinkMisuseValidatorPath = path.join(
  root,
  'scripts/validators/validate-inline-link-misuse.ts'
);

const tempDirs: string[] = [];

function createWorkspace(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mindwp-validator-contracts-'));
  tempDirs.push(dir);
  return dir;
}

function writeFile(workspaceRoot: string, relativePath: string, content: string) {
  const filePath = path.join(workspaceRoot, relativePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

function writePackageJson(workspaceRoot: string) {
  writeFile(
    workspaceRoot,
    'package.json',
    JSON.stringify(
      {
        name: 'validator-fixture',
        private: true,
        type: 'module',
      },
      null,
      2
    )
  );
}

afterEach(() => {
  for (const dir of tempDirs.splice(0, tempDirs.length)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe('integration: validator contracts', () => {
  test('content contract treats publishable metadata as blocking instead of advisory', () => {
    expect(getBlockingMetadataKeys('blog')).toEqual([
      'slug',
      'systems',
      'title',
      'description',
      'canonical',
      'openGraph',
      'robots',
    ]);
    expect(getBlockingMetadataKeys('case-study')).toEqual([
      'slug',
      'systems',
      'title',
      'description',
      'canonical',
      'openGraph',
      'robots',
    ]);
    expect(getAdvisoryMetadataKeys('blog')).toEqual([]);
    expect(getAdvisoryMetadataKeys('case-study')).toEqual([]);
  });

  test('design system validator fails on real UI contract violations and passes clean fixtures', () => {
    const failingWorkspace = createWorkspace();
    writePackageJson(failingWorkspace);
    writeFile(
      failingWorkspace,
      'src/components/FailingCard.tsx',
      [
        "import { Button } from '@/components/ui/button';",
        '',
        'export function FailingCard() {',
        '  return (',
        '    <section>',
        '      <h2>Book a Demo</h2>',
        '      <p>See the system in action.</p>',
        "      <a href='/contact' className='btn bg-red-500 px-4'>Contact</a>",
        '      <Button>Broken</Button>',
        '    </section>',
        '  );',
        '}',
      ].join('\n')
    );

    const failingResult = spawnSync('node', [designValidatorPath], {
      cwd: failingWorkspace,
      encoding: 'utf8',
    });

    expect(failingResult.status).toBe(1);
    expect(`${failingResult.stdout}\n${failingResult.stderr}`).toContain('BUTTON_VIOLATION');

    const passingWorkspace = createWorkspace();
    writePackageJson(passingWorkspace);
    writeFile(
      passingWorkspace,
      'src/components/PassingCard.tsx',
      [
        'export function PassingCard() {',
        '  return (',
        "    <section className='footer-cta'>",
        "      <div className='cta__panel'>",
        '        <h2>Book a Demo</h2>',
        '        <p>See the system in action.</p>',
        "        <a href='/demo' className='btn btn-primary'>Contact</a>",
        '      </div>',
        '    </section>',
        '  );',
        '}',
      ].join('\n')
    );

    const passingResult = spawnSync('node', [designValidatorPath], {
      cwd: passingWorkspace,
      encoding: 'utf8',
    });

    expect(passingResult.status ?? 0).toBe(0);
  });

  test('conversion validator fails on hardcoded contact URLs and passes canonical builders', () => {
    const failingWorkspace = createWorkspace();
    writePackageJson(failingWorkspace);
    writeFile(
      failingWorkspace,
      'src/components/FailingCta.tsx',
      [
        'export function FailingCta() {',
        "  return <a href='/contact?system=smart-website-systems&source=page/home'>Contact</a>;",
        '}',
      ].join('\n')
    );

    const failingResult = spawnSync('node', [conversionValidatorPath], {
      cwd: failingWorkspace,
      encoding: 'utf8',
    });

    expect(failingResult.status).toBe(1);
    expect(`${failingResult.stdout}\n${failingResult.stderr}`).toContain(
      'Contact URLs must be generated via buildContactHref()'
    );

    const passingWorkspace = createWorkspace();
    writePackageJson(passingWorkspace);
    writeFile(
      passingWorkspace,
      'src/components/PassingCta.tsx',
      [
        "import { buildContactHref } from '@/lib/contact/contactHref';",
        '',
        'export function PassingCta() {',
        "  return <a href={buildContactHref({ system: 'smart-website-systems', sourceType: 'page', slug: 'home' })}>Contact</a>;",
        '}',
      ].join('\n')
    );

    const passingResult = spawnSync('node', [conversionValidatorPath], {
      cwd: passingWorkspace,
      encoding: 'utf8',
    });

    expect(passingResult.status ?? 0).toBe(0);
  });

  test('internal links validator fails on dead authored targets and passes valid publishable routes', () => {
    const failingWorkspace = createWorkspace();
    writePackageJson(failingWorkspace);
    writeFile(
      failingWorkspace,
      'src/domains/resources/content/FailingLinks.tsx',
      ['export const failingLinks = {', "  href: '/definitely-missing-route',", '};'].join('\n')
    );

    const failingResult = spawnSync(process.execPath, [tsxCliPath, internalLinksValidatorPath], {
      cwd: root,
      encoding: 'utf8',
      env: {
        ...process.env,
        MINDWP_LINK_SCAN_ROOT: failingWorkspace,
      },
    });

    expect(failingResult.status).toBe(1);
    expect(`${failingResult.stdout}\n${failingResult.stderr}`).toContain('invalid-authored-target');

    const passingWorkspace = createWorkspace();
    writePackageJson(passingWorkspace);
    writeFile(
      passingWorkspace,
      'src/domains/resources/content/PassingLinks.tsx',
      ['export const passingLinks = {', "  href: '/contact',", '};'].join('\n')
    );

    const passingResult = spawnSync(process.execPath, [tsxCliPath, internalLinksValidatorPath], {
      cwd: root,
      encoding: 'utf8',
      env: {
        ...process.env,
        MINDWP_LINK_SCAN_ROOT: passingWorkspace,
      },
    });

    expect(passingResult.status ?? 0).toBe(0);
  }, 15000);

  test('inline-link misuse validator requires the mirrored runtime helper contract on allowed templates', () => {
    const failingWorkspace = createWorkspace();
    writePackageJson(failingWorkspace);
    writeFile(
      failingWorkspace,
      'src/domains/blog/templates/BlogPostTemplate.tsx',
      [
        "import { createInlineLinkTracker } from '@/lib/seo/inlineLinking';",
        '',
        'export function BlogPostTemplate() {',
        "  createInlineLinkTracker({ pagePath: '/blog/example' });",
        '  return null;',
        '}',
      ].join('\n')
    );

    const failingResult = spawnSync(process.execPath, [tsxCliPath, inlineLinkMisuseValidatorPath], {
      cwd: failingWorkspace,
      encoding: 'utf8',
      env: {
        ...process.env,
        NODE_ENV: 'test',
        NEXT_PUBLIC_SITE_URL: 'https://mindwp.com',
        BASE_URL: 'http://127.0.0.1:3009',
        COMPONENT_CAPTURE_BASE_URL: 'http://127.0.0.1:3001/components',
      },
    });

    expect(failingResult.status).toBe(1);
    expect(`${failingResult.stdout}\n${failingResult.stderr}`).toContain(
      'Missing required inline-link enforcement contract'
    );

    const passingWorkspace = createWorkspace();
    writePackageJson(passingWorkspace);
    writeFile(
      passingWorkspace,
      'src/domains/blog/templates/BlogPostTemplate.tsx',
      [
        "import { createInlineLinkTracker } from '@/lib/seo/inlineLinking';",
        "import { enforceInlineLinkUsage } from '@/lib/page/inlineLinkEnforcement';",
        '',
        'export function BlogPostTemplate({ pageId }: { pageId: string }) {',
        "  createInlineLinkTracker({ pagePath: '/blog/example' });",
        "  enforceInlineLinkUsage({ pageId, pageType: 'blog' }, 'blog');",
        '  return null;',
        '}',
      ].join('\n')
    );

    const passingResult = spawnSync(process.execPath, [tsxCliPath, inlineLinkMisuseValidatorPath], {
      cwd: passingWorkspace,
      encoding: 'utf8',
      env: {
        ...process.env,
        NODE_ENV: 'test',
        NEXT_PUBLIC_SITE_URL: 'https://mindwp.com',
        BASE_URL: 'http://127.0.0.1:3009',
        COMPONENT_CAPTURE_BASE_URL: 'http://127.0.0.1:3001/components',
      },
    });

    expect(passingResult.status ?? 0).toBe(0);
  }, 20000);
});

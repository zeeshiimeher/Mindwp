// @vitest-environment node

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { afterEach, describe, expect, test } from 'vitest';

const root = process.cwd();
const designValidatorPath = path.join(root, 'scripts/validators/validate-design-system.cjs');
const conversionValidatorPath = path.join(root, 'scripts/validators/validate-conversion-contract.mjs');

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
        "    <section>",
        "      <h2>Book a Demo</h2>",
        "      <p>See the system in action.</p>",
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
        "        <h2>Book a Demo</h2>",
        "        <p>See the system in action.</p>",
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
});
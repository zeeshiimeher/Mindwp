// @vitest-environment node

import { spawnSync } from 'node:child_process';

import { describe, expect, test } from 'vitest';

const GRAPH_COLD_START_BUDGET_MS = 5_000;

describe('system invariant: graph cold-start budget', () => {
  test('graph initializes within the cold-start budget in a fresh process', () => {
    const probe = [
      '(async () => {',
      "process.env.NODE_ENV = 'production';",
      'const startedAt = performance.now();',
      "const { ensureGraphInitialized } = await import('./src/domains/init/ensureGraphInitialized.ts');",
      'await ensureGraphInitialized();',
      'console.log(JSON.stringify({ duration: performance.now() - startedAt }));',
      '})().catch(error => {',
      'console.error(error);',
      'process.exit(1);',
      '});',
    ].join(' ');

    const result = spawnSync('npx', ['tsx', '--eval', probe], {
      cwd: process.cwd(),
      encoding: 'utf8',
      timeout: 30_000,
    });

    expect(result.status, result.stderr || result.stdout).toBe(0);

    const payload = JSON.parse(result.stdout.trim().split('\n').at(-1) ?? '{}') as {
      duration?: number;
    };

    expect(typeof payload.duration).toBe('number');
    expect(payload.duration, 'Graph cold-start exceeded budget').toBeLessThan(
      GRAPH_COLD_START_BUDGET_MS
    );
  }, 40_000);
});
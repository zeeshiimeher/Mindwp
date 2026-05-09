// @vitest-environment node

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, test } from 'vitest';

const rendererDir = join(process.cwd(), 'src/domains/services/renderers');
const rejectedFileStem = ['Service', 'Skeleton', 'Renderer'].join('');
const rejectedRenderFunction = ['render', 'Service', 'Skeleton', 'Page'].join('');

describe('system simulation: service renderers', () => {
  test('reset service renderers stay direct', () => {
    expect(existsSync(join(rendererDir, `${rejectedFileStem}.tsx`))).toBe(false);

    const rendererFiles = readdirSync(rendererDir).filter(fileName => fileName.endsWith('.tsx'));

    for (const fileName of rendererFiles) {
      const source = readFileSync(join(rendererDir, fileName), 'utf8');

      expect(source).not.toContain(rejectedFileStem);
      expect(source).not.toContain(rejectedRenderFunction);
    }
  });
});

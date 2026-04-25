// @vitest-environment node

import { describe, expect, test } from 'vitest';

import { formatViolationReport } from '@/../scripts/validators/validate-cta-violations';

describe('unit: CTA violation failure formatting', () => {
  test('includes file, cause, and fix hint for each violation', () => {
    const output = formatViolationReport([
      {
        page: 'src/app/example/page.tsx',
        violations: [
          'Route files must not render PrimaryCTASection directly. Own CTA intent and position in page adapters or renderers.',
        ],
      },
      {
        page: 'src/domains/example/data/page.tsx',
        violations: ['Inline conversion CTA detected at mid'],
      },
    ]);

    expect(output).toContain('src/app/example/page.tsx');
    expect(output).toContain('cause: Route files must not render PrimaryCTASection directly.');
    expect(output).toContain(
      'fix: Move PrimaryCTASection ownership into a page adapter, template, or renderer outside src/app.'
    );
    expect(output).toContain('src/domains/example/data/page.tsx');
    expect(output).toContain('cause: Inline conversion CTA detected at mid');
    expect(output).toContain(
      'fix: Use entry, diagnostic, or comparison for inline CTA positions and keep conversion CTAs at the footer.'
    );
    expect(output).toContain('Report:');
  });
});

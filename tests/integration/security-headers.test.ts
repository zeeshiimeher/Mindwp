// @vitest-environment node

import { describe, expect, test } from 'vitest';

async function loadSecurityHeaders() {
  const { default: nextConfig } = await import('../../next.config.mjs');

  if (typeof nextConfig.headers !== 'function') {
    throw new Error('Expected next.config.mjs to expose a headers() function.');
  }

  const rules = await nextConfig.headers();
  const globalRule = rules.find(rule => rule.source === '/:path*');

  if (!globalRule) {
    throw new Error('Expected a global security header rule for /:path*.');
  }

  return Object.fromEntries(
    globalRule.headers.map(header => [header.key.toLowerCase(), header.value])
  );
}

describe('integration: security headers', () => {
  test('defines a global security header policy', async () => {
    const headers = await loadSecurityHeaders();

    expect(headers['x-content-type-options']).toBe('nosniff');
    expect(headers['x-frame-options']).toBe('DENY');
    expect(headers['strict-transport-security']).toContain('max-age=63072000');
    expect(headers['referrer-policy']).toBe('strict-origin-when-cross-origin');
    expect(headers['permissions-policy']).toContain('camera=()');
  });

  test('content security policy allowlists current runtime dependencies', async () => {
    const headers = await loadSecurityHeaders();
    const csp = headers['content-security-policy'];

    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain('https://www.googletagmanager.com');
    expect(csp).toContain('https://challenges.cloudflare.com');
    expect(csp).toContain('https://images.unsplash.com');
    expect(csp).toContain('https://images.pexels.com');
    expect(csp).toContain('https://pixabay.com');
  });
});

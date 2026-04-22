// @vitest-environment node

import { afterEach, describe, expect, test, vi } from 'vitest';

import { NextRequest } from 'next/server';

import { POST as runScriptPost } from '@/app/api/run-script/route';
import { proxy } from '@/proxy';

const mutableEnv = process.env as Record<string, string | undefined>;

const originalEnv = {
  NODE_ENV: process.env.NODE_ENV,
  SYSTEM_ENABLED: process.env.SYSTEM_ENABLED,
};

describe('system invariant: production route protection', () => {
  afterEach(() => {
    vi.resetModules();
    mutableEnv.NODE_ENV = originalEnv.NODE_ENV;
    mutableEnv.SYSTEM_ENABLED = originalEnv.SYSTEM_ENABLED;
  });

  test('rewrites protected internal surfaces to not-found when system mode is disabled', () => {
    mutableEnv.NODE_ENV = 'production';
    mutableEnv.SYSTEM_ENABLED = 'false';

    const devResponse = proxy(new NextRequest('https://mindwp.com/dev/cta-label-contract'));
    const dashboardResponse = proxy(
      new NextRequest('https://mindwp.com/dashboard')
    );
    const imageDashboardResponse = proxy(
      new NextRequest('https://mindwp.com/image-dashboard')
    );

    expect(devResponse.headers.get('x-middleware-rewrite')).toBe('https://mindwp.com/not-found');
    expect(dashboardResponse.headers.get('x-middleware-rewrite')).toBe(
      'https://mindwp.com/not-found'
    );
    expect(imageDashboardResponse.headers.get('x-middleware-rewrite')).toBe(
      'https://mindwp.com/not-found'
    );
  });

  test('keeps public routes available and allows protected routes only when system mode is enabled', () => {
    mutableEnv.NODE_ENV = 'production';
    mutableEnv.SYSTEM_ENABLED = 'false';

    const publicResponse = proxy(new NextRequest('https://mindwp.com/blog'));
    expect(publicResponse.headers.get('x-middleware-rewrite')).toBeNull();

    mutableEnv.SYSTEM_ENABLED = 'true';
    const enabledResponse = proxy(
      new NextRequest('https://mindwp.com/dev/cta-label-contract')
    );
    expect(enabledResponse.headers.get('x-middleware-rewrite')).toBeNull();
  });

  test('removes internal routes from the static route inventory when system mode is disabled', async () => {
    mutableEnv.SYSTEM_ENABLED = 'false';
    vi.resetModules();

    const { STATIC_ROUTE_DEFINITIONS } = await import('@/lib/site/staticPages');
    const paths = new Set(STATIC_ROUTE_DEFINITIONS.map(route => route.path));

    expect(paths.has('/dashboard')).toBe(false);
    expect(paths.has('/dev/system-dashboard')).toBe(false);
    expect(paths.has('/image-dashboard')).toBe(false);
    expect(paths.has('/components')).toBe(false);
    expect(paths.has('/blog')).toBe(true);
  });

  test('keeps internal routes and execution API available in development when system mode is enabled', async () => {
    mutableEnv.NODE_ENV = 'development';
    mutableEnv.SYSTEM_ENABLED = 'true';

    const routeResponse = proxy(new NextRequest('https://mindwp.local/dev/system-dashboard'));
    expect(routeResponse.headers.get('x-middleware-rewrite')).toBeNull();

    const apiResponse = await runScriptPost(
      new Request('https://mindwp.local/api/run-script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
    );

    expect(apiResponse.status).toBe(400);
  });

  test('rejects script execution API access outside development', async () => {
    mutableEnv.NODE_ENV = 'production';
    mutableEnv.SYSTEM_ENABLED = 'false';

    const response = await runScriptPost(
      new Request('https://mindwp.com/api/run-script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ scriptId: 'validate-all' }),
      })
    );

    expect(response.status).toBe(404);
  });
});

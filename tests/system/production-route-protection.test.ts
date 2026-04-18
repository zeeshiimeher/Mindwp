// @vitest-environment node

import { afterEach, describe, expect, test } from 'vitest';

import { NextRequest } from 'next/server';

import { POST as runScriptPost } from '@/app/api/run-script/route';
import { middleware } from '@/middleware';

const mutableEnv = process.env as Record<string, string | undefined>;

const originalEnv = {
  NODE_ENV: process.env.NODE_ENV,
  ENABLE_DEV_DASHBOARD: process.env.ENABLE_DEV_DASHBOARD,
};

describe('system invariant: production route protection', () => {
  afterEach(() => {
    mutableEnv.NODE_ENV = originalEnv.NODE_ENV;
    mutableEnv.ENABLE_DEV_DASHBOARD = originalEnv.ENABLE_DEV_DASHBOARD;
  });

  test('rewrites protected dev surfaces to not-found in production when disabled', () => {
    mutableEnv.NODE_ENV = 'production';
    mutableEnv.ENABLE_DEV_DASHBOARD = 'false';

    const devResponse = middleware(new NextRequest('https://mindwp.com/dev/cta-label-contract'));
    const dashboardResponse = middleware(new NextRequest('https://mindwp.com/dev/system-dashboard'));

    expect(devResponse.headers.get('x-middleware-rewrite')).toBe('https://mindwp.com/not-found');
    expect(dashboardResponse.headers.get('x-middleware-rewrite')).toBe('https://mindwp.com/not-found');
  });

  test('keeps public routes available in production and allows protected routes only when explicitly enabled', () => {
    mutableEnv.NODE_ENV = 'production';
    mutableEnv.ENABLE_DEV_DASHBOARD = 'false';

    const publicResponse = middleware(new NextRequest('https://mindwp.com/blog'));
    expect(publicResponse.headers.get('x-middleware-rewrite')).toBeNull();

    mutableEnv.ENABLE_DEV_DASHBOARD = 'true';
    const enabledResponse = middleware(new NextRequest('https://mindwp.com/dev/cta-label-contract'));
    expect(enabledResponse.headers.get('x-middleware-rewrite')).toBeNull();
  });

  test('rejects script execution API access outside development', async () => {
    mutableEnv.NODE_ENV = 'production';

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
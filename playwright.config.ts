import { defineConfig } from '@playwright/test';

import { buildProcessEnv, env } from './src/env';

const playwrightPort = Number(env.PLAYWRIGHT_PORT);
const playwrightBaseUrl = `http://localhost:${playwrightPort}`;

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  retries: env.CI ? 2 : 0,
  reporter: 'list',
  use: {
    baseURL: playwrightBaseUrl,
    trace: 'retain-on-failure',
    headless: true,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
  webServer: {
    command:
      `node scripts/runners/run-next.mjs build && node scripts/runners/run-next.mjs --filter start -- -p ${playwrightPort}`,
    env: buildProcessEnv({
      NEXT_PUBLIC_TURNSTILE_SITE_KEY: env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || 'test-turnstile-site-key',
    }),
    port: playwrightPort,
    reuseExistingServer: false,
    timeout: 120_000,
  },
});

import { defineConfig } from '@playwright/test';

import { buildProcessEnv, env } from './src/env';

const playwrightPort = Number(env.PLAYWRIGHT_PORT);
const playwrightBaseUrl = `http://localhost:${playwrightPort}`;
const playwrightWebServerEnv = Object.fromEntries(
  Object.entries(
    buildProcessEnv({
      PORT: String(playwrightPort),
      SYSTEM_ENABLED: 'false',
      SUPPRESS_DIRTY_WORKSPACE_WARNING: '1',
      NEXT_PUBLIC_TURNSTILE_SITE_KEY:
        env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || 'test-turnstile-site-key',
    })
  ).filter((entry): entry is [string, string] => typeof entry[1] === 'string')
);

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
    command: 'pnpm build && NODE_ENV=production pnpm start',
    env: playwrightWebServerEnv,
    port: playwrightPort,
    reuseExistingServer: !env.CI,
    timeout: 120_000,
  },
});

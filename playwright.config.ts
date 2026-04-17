import { defineConfig } from '@playwright/test';

const playwrightPort = Number(process.env.PLAYWRIGHT_PORT ?? 3001);
const playwrightBaseUrl = `http://localhost:${playwrightPort}`;

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  retries: process.env.CI ? 2 : 0,
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
    port: playwrightPort,
    reuseExistingServer: false,
    timeout: 120_000,
  },
});

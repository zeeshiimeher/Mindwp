#!/usr/bin/env node
/* eslint-disable no-console */

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';

const requestedRoutes = [
  '/',
  '/services/smart-website-systems',
  '/services/local-seo-authority',
  '/industries',
  '/contact',
];

const fatalBodyPatterns = [
  /Application error/i,
  /Unhandled Runtime Error/i,
  /Hydration failed/i,
  /Cannot read properties of undefined/i,
  /Minified React error/i,
];

const ignoredConsoleErrorPatterns = [/Failed to fetch `.+` from Google Fonts/i, /next\/font/i];

function canListen(port) {
  return new Promise(resolve => {
    const server = net.createServer();
    server.unref();
    server.once('error', () => resolve(false));
    server.listen(port, () => server.close(() => resolve(true)));
  });
}

async function findAvailablePort(startPort = 3100) {
  for (let port = startPort; port < startPort + 400; port += 1) {
    if (await canListen(port)) {
      return port;
    }
  }

  throw new Error(`No available port found from ${startPort} to ${startPort + 399}.`);
}

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function waitForServer(baseUrl, serverProcess) {
  const startedAt = Date.now();
  const timeoutMs = 90_000;

  while (Date.now() - startedAt < timeoutMs) {
    if (serverProcess.exitCode !== null) {
      throw new Error(`Next server exited before becoming ready (code ${serverProcess.exitCode}).`);
    }

    try {
      const response = await fetch(baseUrl, { redirect: 'manual' });
      if (response.status < 500) {
        return;
      }
    } catch {
      // Server is still starting.
    }

    await wait(500);
  }

  throw new Error(`Timed out waiting for ${baseUrl}.`);
}

function isIgnoredConsoleError(message) {
  return ignoredConsoleErrorPatterns.some(pattern => pattern.test(message));
}

async function stopServer(serverProcess) {
  if (serverProcess.exitCode !== null) {
    return;
  }

  serverProcess.kill('SIGTERM');

  await Promise.race([
    new Promise(resolve => serverProcess.once('exit', resolve)),
    wait(5_000).then(() => {
      if (serverProcess.exitCode === null) {
        serverProcess.kill('SIGKILL');
      }
    }),
  ]);
}

async function checkRoute(page, baseUrl, route) {
  const pageErrors = [];
  const consoleErrors = [];

  const onPageError = error => {
    pageErrors.push(error?.message ?? String(error));
  };

  const onConsole = message => {
    if (message.type() !== 'error') {
      return;
    }

    const text = message.text();
    if (!isIgnoredConsoleError(text)) {
      consoleErrors.push(text);
    }
  };

  page.on('pageerror', onPageError);
  page.on('console', onConsole);

  try {
    const url = new URL(route, baseUrl).toString();
    const response = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 45_000,
    });

    if (!response) {
      throw new Error('No document response received.');
    }

    const status = response.status();
    if (status < 200 || status >= 300) {
      throw new Error(`Non-2xx response: ${status}`);
    }

    try {
      await page.waitForLoadState('networkidle', { timeout: 5_000 });
    } catch {
      // Dev servers can keep background connections open; DOM readiness is the hard requirement.
    }

    await page.waitForSelector('body', { timeout: 10_000 });

    const bodyText = await page.locator('body').innerText({ timeout: 10_000 });
    const normalizedBodyText = bodyText.replace(/\s+/g, ' ').trim();

    if (normalizedBodyText.length < 40) {
      throw new Error('No meaningful page content rendered.');
    }

    const fatalPattern = fatalBodyPatterns.find(pattern => pattern.test(normalizedBodyText));
    if (fatalPattern) {
      throw new Error(`Fatal body text detected: ${fatalPattern}`);
    }

    if (pageErrors.length > 0) {
      throw new Error(`Uncaught page error: ${pageErrors.join(' | ')}`);
    }

    if (consoleErrors.length > 0) {
      throw new Error(`Console error: ${consoleErrors.join(' | ')}`);
    }
  } finally {
    page.off('pageerror', onPageError);
    page.off('console', onConsole);
  }
}

async function main() {
  const port = await findAvailablePort();
  const baseUrl = `http://localhost:${port}`;
  const nextBin = path.join(
    process.cwd(),
    'node_modules',
    '.bin',
    process.platform === 'win32' ? 'next.cmd' : 'next'
  );

  if (!fs.existsSync(nextBin)) {
    throw new Error(`Next binary not found at ${nextBin}. Run npm install first.`);
  }

  const serverProcess = spawn(nextBin, ['dev', '--webpack', '-p', String(port)], {
    cwd: process.cwd(),
    env: {
      ...process.env,
      PORT: String(port),
      SYSTEM_ENABLED: 'false',
      SUPPRESS_DIRTY_WORKSPACE_WARNING: '1',
      ENABLE_CAPTCHA_SERVICE: 'false',
      NEXT_PUBLIC_TURNSTILE_SITE_KEY: '',
      TURNSTILE_SECRET_KEY: '',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  serverProcess.stdout.on('data', chunk => {
    process.stdout.write(chunk);
  });

  serverProcess.stderr.on('data', chunk => {
    process.stderr.write(chunk);
  });

  let browser;

  try {
    await waitForServer(baseUrl, serverProcess);

    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    const checkedRoutes = [];

    for (const route of requestedRoutes) {
      try {
        await checkRoute(page, baseUrl, route);
        checkedRoutes.push(route);
        console.log(`[check:frontend] ok ${route}`);
      } catch (error) {
        console.error(`[check:frontend] failed ${route}`);
        console.error(error instanceof Error ? error.message : String(error));
        process.exitCode = 1;
        return;
      }
    }

    console.log(`[check:frontend] passed (${checkedRoutes.length} routes):`);
    for (const route of checkedRoutes) {
      console.log(`- ${route}`);
    }
  } finally {
    if (browser) {
      await browser.close();
    }

    await stopServer(serverProcess);
  }
}

main().catch(error => {
  console.error('[check:frontend] failed');
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});

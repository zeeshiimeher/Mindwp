import { expect, test } from '@playwright/test';

test.skip(
  process.env.COMPONENT_LIBRARY_ENABLED !== 'true',
  'Component library route is dev-only unless explicitly enabled.'
);

test('Component Library renders all previews without fallback errors', async ({ page }) => {
  const consoleErrors: string[] = [];
  const consoleWarnings: string[] = [];
  const pageErrors: string[] = [];
  const requestFailures: Array<{ url: string; method: string; resourceType: string; error: string }> =
    [];
  const badResponses: Array<{ url: string; status: number; method: string; resourceType: string }> =
    [];
  let baseOrigin = '';

  page.on('console', msg => {
    const text = msg.text();
    // Ignore noisy but harmless messages.
    if (/Download the React DevTools|React DevTools/i.test(text)) return;
    if (/favicon\.ico.*404|404 \(Not Found\).*favicon\.ico/i.test(text)) return;

    if (msg.type() === 'error') consoleErrors.push(text);
    if (msg.type() === 'warning') consoleWarnings.push(text);
  });

  page.on('pageerror', err => {
    pageErrors.push(String(err?.message ?? err));
  });

  page.on('requestfailed', req => {
    try {
      const url = req.url();
      const origin = new URL(url).origin;
      if (origin !== baseOrigin) return;
      if (url.endsWith('/favicon.ico')) return;
      requestFailures.push({
        url,
        method: req.method(),
        resourceType: req.resourceType(),
        error: req.failure()?.errorText ?? 'requestfailed',
      });
    } catch {
      // ignore
    }
  });

  page.on('response', res => {
    try {
      const url = res.url();
      const origin = new URL(url).origin;
      if (origin !== baseOrigin) return;
      if (url.endsWith('/favicon.ico')) return;
      const status = res.status();
      if (status < 400) return;
      const req = res.request();
      badResponses.push({
        url,
        status,
        method: req.method(),
        resourceType: req.resourceType(),
      });
    } catch {
      // ignore
    }
  });

  await page.goto('/components', { waitUntil: 'domcontentloaded' });
  baseOrigin = new URL(page.url()).origin;

  // Trigger lazy-loaded assets (images, etc.) by scrolling through the page.
  await page.evaluate(async () => {
    const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
    const maxScrolls = 40;
    for (let i = 0; i < maxScrolls; i++) {
      window.scrollBy(0, Math.max(400, Math.floor(window.innerHeight * 0.8)));
      await sleep(50);
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 4) break;
    }
  });
  await page.waitForTimeout(500);

  const failedToLoadCount = await page.locator('text=Failed to load').count();
  const failedPreviewLabels = await page
    .locator('div.font-semibold:has-text("Failed to render:")')
    .allTextContents();

  if (failedToLoadCount > 0 || failedPreviewLabels.length > 0) {
    // Helpful diagnostics in CI / terminal output
    // eslint-disable-next-line no-console
    console.log('[components] Failed to load count:', failedToLoadCount);
    // eslint-disable-next-line no-console
    console.log('[components] Failed preview labels:', failedPreviewLabels);
  }

  if (consoleErrors.length > 0 || pageErrors.length > 0) {
    // eslint-disable-next-line no-console
    console.log('[components] Console errors:', consoleErrors);
    // eslint-disable-next-line no-console
    console.log('[components] Page errors:', pageErrors);
    // eslint-disable-next-line no-console
    console.log('[components] Console warnings:', consoleWarnings);
  }

  if (requestFailures.length > 0 || badResponses.length > 0) {
    // eslint-disable-next-line no-console
    console.log('[components] Request failures:', requestFailures);
    // eslint-disable-next-line no-console
    console.log('[components] Bad responses (>=400):', badResponses);
  }

  expect(failedToLoadCount, 'Missing components in the registry').toBe(0);
  expect(failedPreviewLabels, 'Some previews hit the ErrorBoundary fallback').toEqual([]);

  expect(consoleErrors, 'Console errors present on /components').toEqual([]);
  expect(pageErrors, 'Uncaught page errors present on /components').toEqual([]);
  expect(consoleWarnings, 'Console warnings present on /components').toEqual([]);

  expect(requestFailures, 'Network request failures on /components').toEqual([]);
  expect(badResponses, '4xx/5xx responses on /components').toEqual([]);
});

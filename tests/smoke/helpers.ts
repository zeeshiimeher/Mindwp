import { expect, type Page, type Response } from '@playwright/test';

/**
 * Console error patterns that are benign and should not fail smoke tests.
 * Mirrors the ignore list in scripts/check-frontend.mjs.
 */
const ignoredConsoleErrorPatterns: readonly RegExp[] = [
  /Failed to fetch `.+` from Google Fonts/i,
  /next\/font/i,
];

/**
 * Body-content patterns that indicate the page rendered a runtime/hydration
 * error overlay or React error boundary. Mirrors scripts/check-frontend.mjs.
 */
const fatalBodyPatterns: readonly RegExp[] = [
  /Application error/i,
  /Unhandled Runtime Error/i,
  /Hydration failed/i,
  /Cannot read properties of undefined/i,
  /Minified React error/i,
];

export type PageErrorTracker = {
  pageErrors: string[];
  consoleErrors: string[];
};

/**
 * Attach listeners that capture runtime errors and meaningful console errors.
 * Call once per test before page.goto() so the listeners catch initial load.
 */
export function trackPageErrors(page: Page): PageErrorTracker {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];

  page.on('pageerror', error => {
    pageErrors.push(error?.message ?? String(error));
  });

  page.on('console', message => {
    if (message.type() !== 'error') return;
    const text = message.text();
    if (ignoredConsoleErrorPatterns.some(pattern => pattern.test(text))) return;
    consoleErrors.push(text);
  });

  return { pageErrors, consoleErrors };
}

/**
 * Assert a page rendered cleanly: HTTP 2xx/3xx response, no runtime errors,
 * no meaningful console errors, and no error-overlay body content.
 */
export async function assertCleanLoad(
  page: Page,
  response: Response | null,
  tracker: PageErrorTracker,
  route: string
) {
  expect(response, `${route} returned no response`).not.toBeNull();
  expect(response!.status(), `${route} HTTP status`).toBeLessThan(400);

  const body = await page.content();
  for (const pattern of fatalBodyPatterns) {
    expect(body, `${route} body contained fatal pattern ${pattern}`).not.toMatch(pattern);
  }

  expect(tracker.pageErrors, `${route} page errors`).toEqual([]);
  expect(tracker.consoleErrors, `${route} console errors`).toEqual([]);
}

/**
 * Assert the page exposes a visible primary heading. Accepts the first
 * heading element of any level — list/index pages that have not yet been
 * rebuilt with HeroFrame may legitimately open with h2 inside SectionShell.
 * For pages with HeroFrame, the first heading will be h1; for SectionShell-
 * only pages it will be h2. Both qualify as a primary heading.
 */
export async function assertVisibleHeading(page: Page, route: string) {
  const heading = page.getByRole('heading').first();
  await expect(heading, `${route} primary heading visibility`).toBeVisible();
  const text = (await heading.textContent())?.trim() ?? '';
  expect(text.length, `${route} primary heading has non-empty text`).toBeGreaterThan(0);
}

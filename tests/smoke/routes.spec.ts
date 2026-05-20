import { expect, test } from '@playwright/test';

import { assertCleanLoad, assertVisibleHeading, trackPageErrors } from './helpers';

/**
 * Routes that must load cleanly and expose an h1. Kept small on purpose —
 * `pnpm check:frontend` runs the broader 28-route smoke check; this suite
 * locks in the routes the rebuild absolutely cannot regress.
 */
const coreRoutes: readonly string[] = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/industries',
  '/features',
  '/resources',
  '/blog',
  '/case-studies',
];

const primaryServiceRoutes: readonly string[] = [
  '/services/smart-website-systems',
  '/services/local-seo-authority',
  '/services/lead-response-handling',
  '/services/follow-up-crm',
  '/services/reputation-review-systems',
];

/**
 * The renamed feature slugs replaced the removed /features/aichat and
 * /features/workflows. Their presence is a load-bearing rebuild invariant.
 */
const renamedFeatureRoutes: readonly string[] = [
  '/features/website-chat',
  '/features/handling-paths',
];

/**
 * Removed public route families. Each must return a 404 — the rebuild must
 * never accidentally revive these as live pages, even via catch-all routing.
 */
const removedRoutes: readonly string[] = [
  '/systems',
  '/topics',
  '/portfolio',
  '/blog/topic/test',
];

for (const route of [...coreRoutes, ...primaryServiceRoutes, ...renamedFeatureRoutes]) {
  test(`${route} loads cleanly and exposes a primary heading`, async ({ page }) => {
    const tracker = trackPageErrors(page);
    const response = await page.goto(route, { waitUntil: 'networkidle' });
    await assertCleanLoad(page, response, tracker, route);
    await assertVisibleHeading(page, route);
  });
}

for (const route of removedRoutes) {
  test(`${route} is not a valid public page`, async ({ page }) => {
    const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
    expect(response, `${route} returned no response`).not.toBeNull();
    expect(
      response!.status(),
      `${route} must return 404 — removed public route family revived`
    ).toBe(404);
  });
}

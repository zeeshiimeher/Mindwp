import { expect, test } from '@playwright/test';

import { assertCleanLoad, assertVisibleHeading, trackPageErrors } from './helpers';

test.describe('homepage smoke', () => {
  test('loads without runtime, hydration, or console errors', async ({ page }) => {
    const tracker = trackPageErrors(page);
    const response = await page.goto('/', { waitUntil: 'networkidle' });
    await assertCleanLoad(page, response, tracker, '/');
  });

  test('exposes a visible primary heading', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await assertVisibleHeading(page, '/');
  });

  test('shows the primary diagnostic CTA label', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    // PRIMARY_CTA_LABEL = 'Request a System Review' (src/lib/cta/primaryAction.ts)
    // The label appears in the header CTA and in the homepage hero or final
    // diagnostic CTA. At least one occurrence must be visible.
    const cta = page.getByRole('link', { name: /Request a System Review/i }).first();
    await expect(cta, 'homepage diagnostic CTA visibility').toBeVisible();
  });
});

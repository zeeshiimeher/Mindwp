import { expect, test } from '@playwright/test';

async function fillRequiredStructuredFields(page: Parameters<typeof test>[1] extends never ? never : any) {
  await page.locator('select[name="businessType"]').selectOption('local-service');
  await page.locator('select[name="primaryGoal"]').selectOption('more-leads');
  await page.locator('select[name="revenueRange"]').selectOption('1k-5k');
  await page.locator('select[name="timeline"]').selectOption('exploring');
}

test('homepage CTA carries canonical contact context through form submission', async ({ page }) => {
  let submittedBody: Record<string, unknown> | null = null;

  await page.route('**/api/contact', async route => {
    submittedBody = JSON.parse(route.request().postData() ?? '{}') as Record<string, unknown>;
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true }),
    });
  });

  await page.goto('/');

  await page.locator('#hero a[href^="/contact?"]').first().click();

  await expect(page).toHaveURL(/\/contact\?system=smart-website-systems&source=page(?:%2F|\/)home/);
  await expect(page.locator('input[name="system"]')).toHaveValue('smart-website-systems');
  await expect(page.locator('input[name="source"]')).toHaveValue('page/home');

  await page.evaluate(() => {
    window.mindwpTurnstileSuccess?.('turnstile-token');
  });

  await page.locator('input[name="name"]').fill('Conversion Test');
  await page.locator('input[name="email"]').fill('conversion@example.com');
  await fillRequiredStructuredFields(page);
  await page.locator('textarea[name="message"]').fill('Testing canonical CTA context handoff.');
  await expect(page.locator('button[type="submit"]')).toBeEnabled();
  await page.locator('button[type="submit"]').click();

  await expect.poll(() => submittedBody).not.toBeNull();
  await expect(page.getByText("Thanks — we'll respond within 24 hours")).toBeVisible();
  expect(submittedBody).toMatchObject({
    name: 'Conversion Test',
    email: 'conversion@example.com',
    message: 'Testing canonical CTA context handoff.',
    captchaToken: 'turnstile-token',
    system: 'smart-website-systems',
    source: 'page/home',
  });
});

test('direct contact access stays submittable with normalized fallback context', async ({ page }) => {
  let submittedBody: Record<string, unknown> | null = null;

  await page.route('**/api/contact', async route => {
    submittedBody = JSON.parse(route.request().postData() ?? '{}') as Record<string, unknown>;
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true }),
    });
  });

  await page.goto('/contact');

  await expect(page.locator('input[name="system"]')).toHaveValue('unknown-system');
  await expect(page.locator('input[name="source"]')).toHaveValue('direct-visit');

  await page.evaluate(() => {
    window.mindwpTurnstileSuccess?.('turnstile-token');
  });

  await page.locator('input[name="name"]').fill('Direct Contact Test');
  await page.locator('input[name="email"]').fill('direct@example.com');
  await fillRequiredStructuredFields(page);
  await page.locator('textarea[name="message"]').fill('Testing direct contact submission fallback.');
  await expect(page.locator('button[type="submit"]')).toBeEnabled();
  await page.locator('button[type="submit"]').click();

  await expect.poll(() => submittedBody).not.toBeNull();
  expect(submittedBody).toMatchObject({
    system: 'unknown-system',
    source: 'direct-visit',
  });
});

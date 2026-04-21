import { expect, test } from '@playwright/test';

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

test('direct contact access without canonical context is blocked', async ({ page }) => {
  await page.goto('/contact');

  await expect(page.locator('input[name="system"]')).toHaveValue('');
  await expect(page.locator('input[name="source"]')).toHaveValue('');
  await expect(
    page.getByText(
      'This form requires a valid system and source context. Please reopen it from a page CTA.'
    )
  ).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toBeDisabled();
});

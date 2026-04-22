import { expect, test } from '@playwright/test';

test('homepage interactions: mobile menu, tabs, and faq', async ({ page }) => {
  await page.goto('/');

  await page.setViewportSize({ width: 390, height: 844 });

  const mobileToggle = page.locator('.header-mobile-toggle').first();
  await expect(mobileToggle).toBeVisible();
  await mobileToggle.click();
  await expect(page.locator('.header-mobile-menu')).toBeVisible();

  await page.setViewportSize({ width: 1280, height: 900 });
  await page.reload();

  const tabs = page.locator('.c-system-capabilities__tab');
  await expect(tabs.first()).toBeVisible();
  await tabs.nth(1).click();
  await expect(tabs.nth(1)).toHaveAttribute('data-state', 'active');

  const faqButtons = page.locator('.faq__question-btn');
  await expect(faqButtons.nth(1)).toBeVisible();
  await faqButtons.nth(1).click();
  await expect(faqButtons.nth(1)).toHaveAttribute('aria-expanded', 'true');
});

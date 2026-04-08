import { expect, test } from '@playwright/test';

async function getRepresentativeRoutes() {
  const reactModule = await import('react');
  globalThis.React ??= reactModule.default;

  const { ensureGraphInitialized } = await import('../../src/domains/init/ensureGraphInitialized');
  const { getContentGraph } = await import('../../src/lib/content-graph/registry');

  await ensureGraphInitialized();

  const nodes = Object.values(getContentGraph());

  return {
    service: nodes.filter(node => node.type === 'service').sort((a, b) => a.path.localeCompare(b.path))[0],
    feature: nodes.filter(node => node.type === 'feature').sort((a, b) => a.path.localeCompare(b.path))[0],
    blog: nodes.filter(node => node.type === 'blog').sort((a, b) => a.path.localeCompare(b.path))[0],
  };
}

async function captureContactSubmission(page: import('@playwright/test').Page) {
  let submittedBody: Record<string, unknown> | null = null;

  await page.route('**/api/contact', async route => {
    submittedBody = JSON.parse(route.request().postData() ?? '{}') as Record<string, unknown>;
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true }),
    });
  });

  return () => submittedBody;
}

async function clickPrimaryContactLink(page: import('@playwright/test').Page) {
  const link = page.locator('main a[href^="/contact?"]').first();
  await expect(link).toBeVisible();
  const href = await link.getAttribute('href');
  expect(href).toBeTruthy();
  await link.click();
  return href as string;
}

async function submitContactForm(page: import('@playwright/test').Page) {
  await page.locator('input[name="name"]').fill('MindWP E2E');
  await page.locator('input[name="email"]').fill('e2e@example.com');
  await page.locator('textarea[name="message"]').fill('Testing the deterministic CTA flow.');
  await page.locator('button[type="submit"]').click();
}

test('service page CTA reaches contact and submits with preserved query context', async ({ page }) => {
  const { service } = await getRepresentativeRoutes();
  const getSubmittedBody = await captureContactSubmission(page);

  await page.goto(service.path);

  const href = await clickPrimaryContactLink(page);
  const url = new URL(href, 'https://mindwp.local');

  await expect(page).toHaveURL(new RegExp(url.pathname.replace('/', '\\/')));
  await expect(page.locator('input[name="system"]')).toHaveValue(url.searchParams.get('system') ?? '');
  await expect(page.locator('input[name="source"]')).toHaveValue(url.searchParams.get('source') ?? '');

  await submitContactForm(page);

  await expect.poll(getSubmittedBody).not.toBeNull();
  expect(getSubmittedBody()).toMatchObject({
    system: url.searchParams.get('system'),
    source: url.searchParams.get('source'),
  });
});

test('feature page CTA reaches contact and submits with preserved query context', async ({ page }) => {
  const { feature } = await getRepresentativeRoutes();
  const getSubmittedBody = await captureContactSubmission(page);

  await page.goto(feature.path);

  const href = await clickPrimaryContactLink(page);
  const url = new URL(href, 'https://mindwp.local');

  await expect(page.locator('input[name="system"]')).toHaveValue(url.searchParams.get('system') ?? '');
  await expect(page.locator('input[name="source"]')).toHaveValue(url.searchParams.get('source') ?? '');

  await submitContactForm(page);

  await expect.poll(getSubmittedBody).not.toBeNull();
  expect(getSubmittedBody()).toMatchObject({
    system: url.searchParams.get('system'),
    source: url.searchParams.get('source'),
  });
});

test('blog page CTA reaches contact with page-specific context', async ({ page }) => {
  const { blog } = await getRepresentativeRoutes();

  await page.goto(blog.path);

  const href = await clickPrimaryContactLink(page);
  const url = new URL(href, 'https://mindwp.local');

  await expect(page).toHaveURL(/\/contact\?/);
  expect(url.searchParams.get('source')).toBe(`blog/${blog.slug}`);
  await expect(page.locator('input[name="source"]')).toHaveValue(`blog/${blog.slug}`);
});

test('invalid contact access is blocked for missing and forged query context', async ({ page }) => {
  await page.goto('/contact');

  await expect(page.locator('button[type="submit"]')).toBeDisabled();
  await expect(
    page.getByText('This form requires a valid system and source context. Please reopen it from a page CTA.')
  ).toBeVisible();

  await page.goto('/contact?system=invalid-system&source=fake/source');
  await expect(page.locator('button[type="submit"]')).toBeDisabled();
  await expect(
    page.getByText('This form requires a valid system and source context. Please reopen it from a page CTA.')
  ).toBeVisible();
});
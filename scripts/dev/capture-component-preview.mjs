import fs from 'node:fs/promises';
import path from 'node:path';

import { chromium } from '@playwright/test';

const componentName = process.argv[2];

if (!componentName) {
  console.error('Usage: node scripts/dev/capture-component-preview.mjs <ComponentName>');
  process.exit(1);
}

const baseUrl = process.env.COMPONENT_CAPTURE_BASE_URL || 'http://127.0.0.1:3001/components';
const outDir = path.resolve(process.cwd(), 'reports', 'component-visual-pass', componentName);

const viewports = [
  {
    id: 'desktop',
    width: 1440,
    height: 1800,
    buttonLabel: 'Desktop',
  },
  {
    id: 'mobile',
    width: 430,
    height: 1400,
    buttonLabel: 'Mobile 392px',
  },
];

async function expandAllCategories(page) {
  await page.evaluate(() => {
    document
      .querySelectorAll('.component-library__category-details')
      .forEach(node => {
        node.open = true;
      });
  });
}

async function focusComponent(page, name) {
  const searchInput = page.locator('.component-library__search-input');
  await searchInput.fill(name);
  await expandAllCategories(page);
  const root = page.locator(`#component-${name}`);
  await root.waitFor({ state: 'visible', timeout: 60000 });
  await root.scrollIntoViewIfNeeded();
  return root;
}

async function captureViewport(page, root, viewport) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height });

  const viewportButton = root
    .locator('.component-library__segmented-button')
    .filter({ hasText: viewport.buttonLabel })
    .first();

  await viewportButton.click();

  const previewFrame = root.locator('.component-library__preview-frame').first();
  await previewFrame.scrollIntoViewIfNeeded();
  await previewFrame.waitFor({ state: 'visible' });

  const filePath = path.join(outDir, `${viewport.id}.png`);
  await previewFrame.screenshot({
    path: filePath,
    animations: 'disabled',
  });

  return filePath;
}

const browser = await chromium.launch({ headless: true });

try {
  await fs.mkdir(outDir, { recursive: true });

  const page = await browser.newPage();
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  const root = await focusComponent(page, componentName);

  const captures = [];
  for (const viewport of viewports) {
    captures.push(await captureViewport(page, root, viewport));
  }

  console.log(JSON.stringify({ componentName, captures }, null, 2));
} finally {
  await browser.close();
}
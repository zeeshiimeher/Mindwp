import path from 'node:path';

import { expect, test } from '@playwright/test';

test.skip(
  process.env.COMPONENT_LIBRARY_ENABLED !== 'true',
  'Component library route is dev-only unless explicitly enabled.'
);

const TARGET_COMPONENTS = [
  'ImageStatsServicesSection',
  'TestimonialSpotlightSplitSection',
  'TabbedFeatureCardsSection',
  'FeatureStatsMockupSection',
  'StepCardsSplitSection',
  'DualToneChecklistComparisonSection',
  'ImageAccordionStripSection',
  'ServiceSpectrumCardsSection',
  'DualFeatureCardsSection',
  'StackedFeatureListSection',
  'DarkSplitShowcaseSection',
  'NarrativeStatsSection',
] as const;

async function injectAxe(page: import('@playwright/test').Page) {
  const axePath = path.join(process.cwd(), 'node_modules', 'axe-core', 'axe.min.js');
  await page.addScriptTag({ path: axePath });
}

async function expandAllComponentCategories(page: import('@playwright/test').Page) {
  await page.evaluate(() => {
    document
      .querySelectorAll<HTMLDetailsElement>('.component-library__category-details')
      .forEach(node => {
        node.open = true;
      });
  });
}

async function focusComponent(page: import('@playwright/test').Page, componentName: string) {
  const searchInput = page.locator('.component-library__search-input');
  await searchInput.fill(componentName);
  await expandAllComponentCategories(page);
  await expect(page.locator(`#component-${componentName}`)).toBeVisible();
}

async function assertNoBrokenImages(
  rootLocator: import('@playwright/test').Locator,
  componentName: string
) {
  const brokenCount = await rootLocator.locator('img').evaluateAll(images => {
    return images.filter(image => {
      const el = image as HTMLImageElement;
      return !el.complete || el.naturalWidth === 0;
    }).length;
  });

  expect(brokenCount, `${componentName} has broken images in preview`).toBe(0);
}

async function assertColorContrast(
  page: import('@playwright/test').Page,
  componentName: string,
  includeSelector: string
) {
  const violations = await page.evaluate(async selector => {
    const axe = (window as unknown as { axe?: { run: (...args: unknown[]) => Promise<unknown> } })
      .axe;
    if (!axe) return [];

    const result = (await axe.run(
      {
        include: [[selector]],
      },
      {
        runOnly: {
          type: 'rule',
          values: ['color-contrast'],
        },
      }
    )) as {
      violations?: Array<{
        id: string;
        help: string;
        impact: string | null;
        nodes: Array<{ target: string[] }>;
      }>;
    };

    return (result.violations ?? []).map(violation => ({
      id: violation.id,
      help: violation.help,
      impact: violation.impact,
      targets: violation.nodes.map(node => node.target),
    }));
  }, includeSelector);

  expect(violations, `${componentName} failed color-contrast checks`).toEqual([]);
}

test.describe('Core section visual QA', () => {
  test.setTimeout(300_000);

  test('tab interaction works in TabbedFeatureCardsSection', async ({ page }) => {
    await page.goto('/components', { waitUntil: 'domcontentloaded' });
    await expandAllComponentCategories(page);
    await focusComponent(page, 'TabbedFeatureCardsSection');

    const section = page
      .locator('#component-TabbedFeatureCardsSection .component-library__variation-body:visible')
      .first();
    await section.scrollIntoViewIfNeeded();
    await expect(section).toBeVisible();

    const tabs = section.locator('.c-tabbed-feature-cards-section__tab');
    await expect(tabs.first()).toBeVisible();

    const secondTab = tabs.nth(1);
    await secondTab.click();

    const secondTabInputId = await secondTab.getAttribute('for');
    expect(secondTabInputId, 'Second tab should be linked to a radio input').toBeTruthy();

    const secondTabInput = section.locator(`#${secondTabInputId}`);
    await expect(secondTabInput).toBeChecked();
  });

  test('captures desktop and mobile previews with contrast checks', async ({ page }, testInfo) => {
    await page.goto('/components', { waitUntil: 'domcontentloaded' });
    await expandAllComponentCategories(page);
    await injectAxe(page);

    const viewports = [
      { name: 'desktop', width: 1440, height: 2200 },
      { name: 'mobile', width: 390, height: 2200 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      for (const componentName of TARGET_COMPONENTS) {
        await focusComponent(page, componentName);

        const visibleVariationSelector = `#component-${componentName} .component-library__variation-body:visible`;
        const axeVariationSelector = `#component-${componentName} .component-library__variation-body`;
        const fallbackSelector = `#component-${componentName}`;

        const hasVisibleVariation = (await page.locator(visibleVariationSelector).count()) > 0;
        const previewSelector = hasVisibleVariation ? visibleVariationSelector : fallbackSelector;
        const includeSelector = hasVisibleVariation ? axeVariationSelector : fallbackSelector;
        const preview = page.locator(previewSelector).first();

        await preview.scrollIntoViewIfNeeded();
        await expect(preview, `${componentName} preview should be visible`).toBeVisible();

        await assertNoBrokenImages(preview, componentName);
        await assertColorContrast(page, componentName, includeSelector);

        await preview.screenshot({
          path: testInfo.outputPath(`${viewport.name}-${componentName}.png`),
          animations: 'disabled',
        });
      }
    }
  });
});

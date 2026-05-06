/**
 * screenshot-sections.mjs
 *
 * Captures one screenshot per <section> element on a given page.
 * - Targets every <section> tag — no IDs or renderer changes needed.
 * - Uses element.screenshot() so each image is cropped exactly to the section bounds.
 * - Disables CSS animations so rd-animate-up elements are visible.
 * - Splits sections taller than MAX_VIEWPORT_HEIGHT into top/bottom chunks.
 *
 * Usage:
 *   node scripts/screenshot-sections.mjs [url] [outputDir]
 *
 * Defaults:
 *   url        = http://localhost:3000/services/smart-website-systems
 *   outputDir  = _tmp/screenshots
 */

import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] ?? 'http://localhost:3000/services/smart-website-systems';
const outputDir = process.argv[3] ?? '_tmp/screenshots';
const VIEWPORT_WIDTH = 1440;
const VIEWPORT_HEIGHT = 900;
const MAX_SINGLE_HEIGHT = 1600; // taller sections get split

fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT });

console.log(`Opening: ${url}`);
await page.goto(url, { waitUntil: 'networkidle' });

// Disable all CSS transitions and animations so rd-animate-up content is visible
await page.addStyleTag({
    content: `
    *, *::before, *::after {
      animation-duration: 0s !important;
      animation-delay: 0s !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
    .rd-animate-up, .rd-animate-stagger > * {
      opacity: 1 !important;
      transform: none !important;
    }
  `,
});

// Give the page a moment to settle after style injection
await page.waitForTimeout(300);

// Collect all <section> elements
const sections = await page.locator('section').all();
console.log(`Found ${sections.length} section(s)\n`);

for (let i = 0; i < sections.length; i++) {
    const el = sections[i];

    // Scroll section into view
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(100);

    // Derive a filename from the section's BEM class.
    // Sections render as: rd-section bg-* rd-animate-section [bem-name] [modifier]
    // Skip utility prefixes to get the first real BEM block name.
    const SKIP = new Set(['rd-section', 'rd-animate-section', 'rd-section--compact']);
    const classAttr = await el.getAttribute('class') ?? '';
    const bemClass = classAttr
        .split(' ')
        .map(c => c.trim())
        .filter(c => c && !c.startsWith('rd-') && !c.startsWith('bg-') && !SKIP.has(c) && !c.includes('--'))
        .find(c => c.length > 0) ?? `section-${i + 1}`;

    const padded = String(i + 1).padStart(2, '0');
    const baseName = `${padded}--${bemClass}`;

    // Get element bounding box
    const box = await el.boundingBox();
    if (!box) {
        console.warn(`  [skip] ${baseName} — no bounding box`);
        continue;
    }

    const height = Math.round(box.height);
    console.log(`  [${padded}] ${bemClass} — ${Math.round(box.width)}×${height}px`);

    if (height <= MAX_SINGLE_HEIGHT) {
        // Single screenshot of the full section
        const outPath = path.join(outputDir, `${baseName}.png`);
        await el.screenshot({ path: outPath });
        console.log(`       → ${outPath}`);
    } else {
        // Tall section — split into viewport-height chunks
        const chunks = Math.ceil(height / VIEWPORT_HEIGHT);
        for (let c = 0; c < chunks; c++) {
            const chunkY = box.y + c * VIEWPORT_HEIGHT;
            const chunkHeight = Math.min(VIEWPORT_HEIGHT, box.y + height - chunkY);

            await page.evaluate(y => window.scrollTo(0, y - 60), chunkY);
            await page.waitForTimeout(80);

            const outPath = path.join(outputDir, `${baseName}--part${c + 1}.png`);
            await page.screenshot({
                path: outPath,
                clip: {
                    x: box.x,
                    y: chunkY,
                    width: box.width,
                    height: chunkHeight,
                },
            });
            console.log(`       → ${outPath} (part ${c + 1}/${chunks})`);
        }
    }
}

await browser.close();
console.log(`\nDone. Screenshots saved to: ${outputDir}`);

/**
 * Phase 7 Visual Audit — Automated Screenshot + Analysis
 * Captures full-page screenshots + hover state analysis + section flow data
 */
import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const OUT_DIR = path.join(ROOT, 'reports', 'visual-audit');
const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:3009';

const PAGES = [
  { name: 'homepage', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'blog', path: '/blog' },
  { name: 'features', path: '/features' },
  { name: 'case-studies', path: '/case-studies' },
];

fs.mkdirSync(OUT_DIR, { recursive: true });

async function capturePageData(page, route) {
  const url = `${BASE_URL}${route.path}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // Full page screenshot
  await page.screenshot({ 
    path: path.join(OUT_DIR, `${route.name}-full.png`), 
    fullPage: true 
  });

  // Desktop viewport
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({ 
    path: path.join(OUT_DIR, `${route.name}-desktop.png`), 
    fullPage: false 
  });

  // Extract section flow data
  const sectionData = await page.evaluate(() => {
    const sections = document.querySelectorAll('section, [class*="l-section"]');
    return Array.from(sections).map((s, i) => {
      const style = getComputedStyle(s);
      const rect = s.getBoundingClientRect();
      const cls = typeof s.className === 'string' ? s.className : s.getAttribute('class') || '';
      return {
        index: i,
        tag: s.tagName,
        classes: cls.substring(0, 200),
        bgColor: style.backgroundColor,
        bgImage: style.backgroundImage.substring(0, 200),
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        height: Math.round(rect.height),
        top: Math.round(rect.top + window.scrollY),
      };
    });
  });

  // Extract hover targets analysis
  const hoverData = await page.evaluate(() => {
    const interactiveEls = document.querySelectorAll('a, button, [role="button"], .btn, [class*="card"]');
    const results = [];
    for (const el of Array.from(interactiveEls).slice(0, 80)) {
      const style = getComputedStyle(el);
      results.push({
        tag: el.tagName,
        classes: (typeof el.className === 'string' ? el.className : el.getAttribute('class') || '').substring(0, 150),
        cursor: style.cursor,
        transition: style.transition.substring(0, 200),
        transform: style.transform,
      });
    }
    return results;
  });

  // Extract card consistency data 
  const cardData = await page.evaluate(() => {
    const cards = document.querySelectorAll('[class*="card"]');
    return Array.from(cards).slice(0, 40).map(c => {
      const style = getComputedStyle(c);
      return {
        classes: (typeof c.className === 'string' ? c.className : c.getAttribute('class') || '').substring(0, 150),
        bgColor: style.backgroundColor,
        border: style.border,
        borderRadius: style.borderRadius,
        boxShadow: style.boxShadow.substring(0, 150),
        padding: style.padding,
      };
    });
  });

  // Extract gradient usage
  const gradientData = await page.evaluate(() => {
    const all = document.querySelectorAll('*');
    const gradients = [];
    for (const el of all) {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && bg.includes('gradient')) {
        gradients.push({
          classes: (typeof el.className === 'string' ? el.className : el.getAttribute('class') || '').substring(0, 100),
          gradient: bg.substring(0, 250),
        });
      }
    }
    return gradients;
  });

  // Extract heading hierarchy
  const headingData = await page.evaluate(() => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    return Array.from(headings).slice(0, 30).map(h => {
      const style = getComputedStyle(h);
      return {
        tag: h.tagName,
        text: h.textContent.substring(0, 60),
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        color: style.color,
        marginBottom: style.marginBottom,
        lineHeight: style.lineHeight,
      };
    });
  });

  // Extract contrast issues (dark bg + dark text)
  const contrastIssues = await page.evaluate(() => {
    const issues = [];
    const sections = document.querySelectorAll('section, div[class*="section"], div[class*="hero"]');
    for (const s of sections) {
      const sBg = getComputedStyle(s).backgroundColor;
      // Check if background is dark
      const match = sBg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!match) continue;
      const [, r, g, b] = match.map(Number);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      if (luminance < 0.3) {
        // Dark background — check child text colors
        const texts = s.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, li, a');
        for (const t of Array.from(texts).slice(0, 10)) {
          const tColor = getComputedStyle(t).color;
          const tMatch = tColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (!tMatch) continue;
          const [, tr, tg, tb] = tMatch.map(Number);
          const tLum = (0.299 * tr + 0.587 * tg + 0.114 * tb) / 255;
          if (tLum < 0.5) {
            const sCls = typeof s.className === 'string' ? s.className : s.getAttribute('class') || '';
            const tCls = typeof t.className === 'string' ? t.className : t.getAttribute('class') || '';
            issues.push({
              section: sCls.substring(0, 100),
              textClasses: tCls.substring(0, 80),
              bgLuminance: luminance.toFixed(2),
              textLuminance: tLum.toFixed(2),
              textSample: t.textContent.substring(0, 60),
            });
          }
        }
      }
    }
    return issues;
  });

  return {
    page: route.name,
    url,
    sections: sectionData,
    hovers: hoverData,
    cards: cardData,
    gradients: gradientData,
    headings: headingData,
    contrastIssues,
  };
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const allData = {};

  for (const route of PAGES) {
    console.log(`[audit] capturing: ${route.name}`);
    allData[route.name] = await capturePageData(page, route);
  }

  // Write JSON report
  fs.writeFileSync(
    path.join(OUT_DIR, 'visual-audit-data.json'),
    JSON.stringify(allData, null, 2)
  );

  console.log(`\n[audit] ✅ Complete — ${PAGES.length} pages captured`);
  console.log(`[audit] Screenshots: ${OUT_DIR}/`);
  console.log(`[audit] Data: ${OUT_DIR}/visual-audit-data.json`);

  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });

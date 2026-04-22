/**
 * Heading Hierarchy Audit
 * Captures full heading tree (H1-H6) per section for every audited page.
 * Fixes: SVG className is not a string — use getAttribute('class') fallback.
 *
 * Usage: npx playwright test --config=playwright.config.ts scripts/analyzers/heading-audit.cjs
 *   OR:  node --import tsx/esm scripts/analyzers/heading-audit.cjs
 */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const OUT_DIR = path.join(ROOT, 'reports', 'visual-audit');
const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:3009';

const PAGES = [
  { name: 'homepage', url: '/' },
  { name: 'services', url: '/services' },
  { name: 'features', url: '/features' },
  { name: 'blog', url: '/blog' },
  { name: 'case-studies', url: '/case-studies' },
  { name: 'resources', url: '/resources' },
  { name: 'industries', url: '/industries' },
  // Detail pages — these will be resolved dynamically
];

// Add detail pages from the existing screenshots
const DETAIL_URLS = [
  // Service details
  { name: 'service-detail-1', url: '/services/smart-website-systems' },
  { name: 'service-detail-2', url: '/services/booking-scheduling-system' },
  // Feature details
  { name: 'feature-detail-1', url: '/features/voicecalls' },
  { name: 'feature-detail-2', url: '/features/aichat' },
  // Blog details
  { name: 'blog-detail-1', url: '/blog/ai-reception-for-automotive-shops' },
  { name: 'blog-detail-2', url: '/blog/authority-signals-for-local-search' },
  // Case study details
  { name: 'case-study-detail-1', url: '/case-study/auto-repair-missed-call-recovery' },
  { name: 'case-study-detail-2', url: '/case-study/salon-booking-automation' },
  // Resource details
  { name: 'resource-detail-1', url: '/resources/lead-automation-framework' },
  { name: 'resource-detail-2', url: '/resources/crm-pipeline-architecture' },
  // Industry details
  { name: 'industry-category-1', url: '/industries/home-services' },
  { name: 'industry-detail-1', url: '/industries/beauty-personal-care/hair-salons' },
  { name: 'industry-detail-2', url: '/industries/automotive-services/auto-repair' },
];

async function auditHeadings(page) {
  return page.evaluate(() => {
    function getClasses(el) {
      if (typeof el.className === 'string') return el.className;
      return el.getAttribute('class') || '';
    }

    // Page-level heading counts
    const allH1 = document.querySelectorAll('h1');
    const allH2 = document.querySelectorAll('h2');
    const allH3 = document.querySelectorAll('h3');
    const allH4 = document.querySelectorAll('h4');
    const allH5 = document.querySelectorAll('h5');
    const allH6 = document.querySelectorAll('h6');

    // Full heading list (all on page)
    const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingList = Array.from(allHeadings).map(h => {
      const style = getComputedStyle(h);
      return {
        tag: h.tagName,
        text: (h.textContent || '').trim().substring(0, 80),
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        color: style.color,
        marginBottom: style.marginBottom,
        parentSection: getClasses(
          h.closest('section, [class*="l-section"]') || h.parentElement
        ).substring(0, 120),
      };
    });

    // Per-section breakdown
    const sections = document.querySelectorAll('section, [class*="l-section"]');
    const sectionData = Array.from(sections).map(s => {
      const sClasses = getClasses(s).substring(0, 200);
      const headings = s.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const headingArr = Array.from(headings).map(h => {
        const style = getComputedStyle(h);
        return {
          tag: h.tagName,
          text: (h.textContent || '').trim().substring(0, 80),
          fontSize: style.fontSize,
        };
      });

      return {
        classes: sClasses,
        tag: s.tagName,
        firstHeadingTag: headingArr[0]?.tag || null,
        firstHeadingText: headingArr[0]?.text || null,
        headingCount: headingArr.length,
        headings: headingArr,
        hasH1: headingArr.some(h => h.tag === 'H1'),
        hasH2: headingArr.some(h => h.tag === 'H2'),
        firstHeadingIsH2: headingArr[0]?.tag === 'H2',
      };
    });

    // Hierarchy violations
    const violations = [];
    let prevLevel = 0;
    for (const h of headingList) {
      const level = parseInt(h.tag.substring(1), 10);
      if (prevLevel > 0 && level > prevLevel + 1) {
        violations.push({
          expected: `H${prevLevel + 1}`,
          found: h.tag,
          text: h.text,
          after: headingList[headingList.indexOf(h) - 1]?.text || '(start)',
        });
      }
      prevLevel = level;
    }

    return {
      pageH1Count: allH1.length,
      pageH2Count: allH2.length,
      pageH3Count: allH3.length,
      pageH4Count: allH4.length,
      pageH5Count: allH5.length,
      pageH6Count: allH6.length,
      pageH1Text: allH1[0]?.textContent?.trim().substring(0, 80) || null,
      headings: headingList,
      sections: sectionData,
      hierarchyViolations: violations,
    };
  });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const allPages = [...PAGES, ...DETAIL_URLS];
  const results = {};

  for (const pg of allPages) {
    console.log(`[heading-audit] ${pg.name} → ${pg.url}`);
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();

    try {
      await page.goto(`${BASE_URL}${pg.url}`, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForSelector('body', { timeout: 5000 });
      await page.waitForTimeout(500);

      const desktop = await auditHeadings(page);

      // Mobile viewport
      await page.setViewportSize({ width: 390, height: 844 });
      await page.waitForTimeout(300);
      const mobile = await auditHeadings(page);

      results[pg.name] = { url: pg.url, desktop, mobile };
    } catch (err) {
      results[pg.name] = {
        url: pg.url,
        desktop: { error: err.message },
        mobile: { error: err.message },
      };
      console.error(`  ERROR: ${err.message.substring(0, 80)}`);
    }

    await context.close();
  }

  const outPath = path.join(OUT_DIR, 'heading-audit-data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`\n[heading-audit] ✅ Written to ${outPath}`);

  // Print summary
  for (const [name, data] of Object.entries(results)) {
    const vp = data.desktop;
    if (vp?.error) {
      console.log(`  ${name}: ERROR`);
      continue;
    }
    const viols = vp.hierarchyViolations?.length || 0;
    console.log(
      `  ${name}: H1=${vp.pageH1Count} H2=${vp.pageH2Count} H3=${vp.pageH3Count} H4=${vp.pageH4Count} violations=${viols}`
    );
  }

  await browser.close();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});

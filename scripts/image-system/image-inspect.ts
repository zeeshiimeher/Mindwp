#!/usr/bin/env node
// Keep the image system seperate ignore image system related files
// ─── Image Inspector ────────────────────────────────────────────────
// Analyzes generated images for overlay quality, contrast, and title fit

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

import { createLogger } from '../../lib/logger/index.mjs';

const logger = createLogger({ label: 'image-inspect', mode: 'summary', rootDir: process.cwd() });

interface InspectResult {
  file: string;
  width: number;
  height: number;
  avgBrightness: number;
  centerBrightness: number;
  contrastRatio: number;
  wcagPass: boolean;
  overlayStrength: string;
}

async function inspectImage(imgPath: string): Promise<InspectResult | null> {
  if (!fs.existsSync(imgPath)) {
    logger.warn(`Not found: ${imgPath}`);
    return null;
  }

  const buf = fs.readFileSync(imgPath);
  const meta = await sharp(buf).metadata();
  const w = meta.width ?? 1600;
  const h = meta.height ?? 900;

  // Overall brightness
  const { data: fullData, info: fullInfo } = await sharp(buf)
    .resize(50, 50, { fit: 'cover' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const ch = fullInfo.channels;
  let totalLuma = 0;
  const px = fullInfo.width * fullInfo.height;
  for (let i = 0; i < fullData.length; i += ch) {
    totalLuma += 0.299 * fullData[i] + 0.587 * fullData[i + 1] + 0.114 * fullData[i + 2];
  }
  const avgBrightness = totalLuma / px;

  // Center region (where title is rendered)
  const extractLeft = Math.floor(w * 0.1);
  const extractTop = Math.floor(h * 0.3);
  const extractW = Math.floor(w * 0.8);
  const extractH = Math.floor(h * 0.4);

  const { data: centerData, info: centerInfo } = await sharp(buf)
    .extract({ left: extractLeft, top: extractTop, width: extractW, height: extractH })
    .resize(50, 50)
    .raw()
    .toBuffer({ resolveWithObject: true });

  let centerLuma = 0;
  const cPx = centerInfo.width * centerInfo.height;
  for (let i = 0; i < centerData.length; i += centerInfo.channels) {
    centerLuma +=
      0.299 * centerData[i] + 0.587 * centerData[i + 1] + 0.114 * centerData[i + 2];
  }
  const centerAvg = centerLuma / cPx;

  // WCAG contrast ratio (white #fff text on center background)
  const bgL = centerAvg / 255;
  const bgLinear = bgL <= 0.03928 ? bgL / 12.92 : Math.pow((bgL + 0.055) / 1.055, 2.4);
  const whiteLinear = 1.0;
  const ratio = (whiteLinear + 0.05) / (bgLinear + 0.05);

  let overlayStrength = 'NONE';
  if (centerAvg < 40) overlayStrength = 'STRONG';
  else if (centerAvg < 70) overlayStrength = 'GOOD';
  else if (centerAvg < 100) overlayStrength = 'MODERATE';
  else if (centerAvg < 130) overlayStrength = 'LIGHT';
  else overlayStrength = 'TOO LIGHT / NONE';

  return {
    file: imgPath,
    width: w,
    height: h,
    avgBrightness,
    centerBrightness: centerAvg,
    contrastRatio: ratio,
    wcagPass: ratio >= 4.5,
    overlayStrength,
  };
}

async function main() {
  logger.info('');
  logger.info('╔══════════════════════════════════════════════════════╗');
  logger.info('║        MindWP Image Inspector — Visual QA          ║');
  logger.info('╚══════════════════════════════════════════════════════╝');
  logger.info('');

  const images = [
    {
      domain: 'blog',
      path: 'public/images/blog/lead-response-time-for-service-businesses/featured.webp',
    },
    {
      domain: 'case-studies',
      path: 'public/images/case-studies/appointment-business-booking-automation/featured.webp',
    },
    {
      domain: 'resources',
      path: 'public/images/resources/authority-signals-for-local-search/featured.webp',
    },
  ];

  // Also check for any other generated images
  const domains = ['blog', 'case-studies', 'resources', 'industries'];
  for (const domain of domains) {
    const dir = `public/images/${domain}`;
    if (!fs.existsSync(dir)) continue;
    for (const slug of fs.readdirSync(dir)) {
      const p = `${dir}/${slug}/featured.webp`;
      if (fs.existsSync(p) && !images.find((i) => i.path === p)) {
        images.push({ domain, path: p });
      }
    }
  }

  let allPass = true;

  for (const img of images) {
    logger.info(`📁 ${img.domain.toUpperCase()}: ${path.basename(path.dirname(img.path))}`);

    const result = await inspectImage(img.path);
    if (!result) continue;

    const fileSizeKB = (fs.statSync(img.path).size / 1024).toFixed(0);

    logger.info(`   📐 Dimensions: ${result.width}×${result.height}`);
    logger.info(`   💾 File size: ${fileSizeKB}KB`);
    logger.info(`   ☀️  Overall brightness: ${result.avgBrightness.toFixed(1)}`);
    logger.info(`   🎯 Center brightness: ${result.centerBrightness.toFixed(1)}`);
    logger.info(`   🎨 Overlay strength: ${result.overlayStrength}`);
    logger.info(
      `   📊 Contrast ratio: ${result.contrastRatio.toFixed(2)}:1 ${result.wcagPass ? '✅ WCAG AA' : '❌ FAIL (need 4.5:1)'}`
    );

    if (!result.wcagPass) allPass = false;
    logger.info('');
  }

  logger.info('────────────────────────────────────────────────────────');
  if (allPass) {
    logger.info('✅ All images pass WCAG AA contrast requirements');
  } else {
    logger.warn('❌ Some images FAIL contrast. Run --regenerate to fix overlay.');
  }
  logger.info('');
}

main().catch(error => {
  logger.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});

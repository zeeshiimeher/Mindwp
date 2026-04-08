// ─── Image Downloader ───────────────────────────────────────────────
// Downloads images with rate limiting and retry logic

/* eslint-disable no-console */

import { RATE_LIMIT } from '../config';

let downloadCount = 0;
let windowStart = Date.now();

/** Check if we can download (respects rate limit) */
function canDownload(): boolean {
  const now = Date.now();
  const elapsed = now - windowStart;

  if (elapsed > 3600000) {
    // Reset window every hour
    downloadCount = 0;
    windowStart = now;
  }

  return downloadCount < RATE_LIMIT.maxDownloadsPerHour;
}

/** Wait until the next rate limit window */
async function waitForWindow(): Promise<void> {
  const elapsed = Date.now() - windowStart;
  const remaining = 3600000 - elapsed;
  console.log(
    `[downloader] Rate limit reached. Waiting ${Math.ceil(remaining / 60000)} minutes...`
  );
  await new Promise(resolve => setTimeout(resolve, remaining + 1000));
  downloadCount = 0;
  windowStart = Date.now();
}

/** Download an image from a URL and return the buffer */
export async function downloadImage(url: string): Promise<Buffer> {
  if (!canDownload()) {
    await waitForWindow();
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      cache: 'no-store' as RequestCache,
    });

    if (!response.ok) {
      throw new Error(`Download failed (${response.status}): ${url}`);
    }

    console.log(`[download] Image URL: ${url}`);

    const arrayBuffer = await response.arrayBuffer();
    downloadCount++;

    return Buffer.from(arrayBuffer);
  } finally {
    clearTimeout(timeoutId);
  }
}

/** Get current rate limit status */
export function getRateLimitStatus(): { used: number; remaining: number; resetsIn: number } {
  const elapsed = Date.now() - windowStart;
  const resetsIn = Math.max(0, 3600000 - elapsed);

  return {
    used: downloadCount,
    remaining: RATE_LIMIT.maxDownloadsPerHour - downloadCount,
    resetsIn,
  };
}

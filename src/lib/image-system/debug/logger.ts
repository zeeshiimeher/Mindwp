// ─── Image Generation Logger ────────────────────────────────────────
// Logs every image generation result to a JSON file for dashboard use.

import fs from 'fs';
import path from 'path';

import { DATA_DIR } from '../config';
import type { ImageLogEntry } from '../types';

const LOG_FILE = path.join(DATA_DIR, 'imageLog.json');
const MAX_ENTRIES = 200;

export function loadImageLog(): ImageLogEntry[] {
  const filePath = path.resolve(LOG_FILE);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as ImageLogEntry[];
  }
  return [];
}

export function appendImageLog(entry: ImageLogEntry): void {
  const log = loadImageLog();
  log.push(entry);

  // Keep only the most recent entries
  const trimmed = log.length > MAX_ENTRIES ? log.slice(-MAX_ENTRIES) : log;

  const filePath = path.resolve(LOG_FILE);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(trimmed, null, 2));
}

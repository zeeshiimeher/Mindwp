import fs from 'node:fs';
import path from 'node:path';

export function readJsonFile(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

export function readReportJson(root, fileName) {
  return readJsonFile(path.join(root, 'reports', fileName));
}
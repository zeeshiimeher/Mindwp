import fs from 'node:fs';
import path from 'node:path';

export function readJsonFile<T>(filePath: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
  } catch {
    return null;
  }
}

export function readReportJson<T>(fileName: string, root = process.cwd()): T | null {
  return readJsonFile<T>(path.join(root, 'reports', fileName));
}

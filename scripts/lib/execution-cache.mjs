import fs from 'node:fs';
import path from 'node:path';

/**
 * @param {string} targetPath
 * @returns {string[]}
 */
function listFilesRecursive(targetPath) {
  if (!fs.existsSync(targetPath)) {
    return [];
  }

  const stats = fs.statSync(targetPath);
  if (stats.isFile()) {
    return [targetPath];
  }

  const files = [];

  for (const entry of fs.readdirSync(targetPath, { withFileTypes: true })) {
    if (entry.name === '.DS_Store') {
      continue;
    }

    files.push(...listFilesRecursive(path.join(targetPath, entry.name)));
  }

  return files;
}

/**
 * @param {string} filePath
 * @returns {number | null}
 */
function readMtimeMs(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.statSync(filePath).mtimeMs;
}

/**
 * @param {string[]} [inputPaths]
 * @returns {string[]}
 */
export function collectInputFiles(inputPaths = []) {
  return [...new Set(inputPaths.flatMap(listFilesRecursive))].sort((left, right) =>
    left.localeCompare(right)
  );
}

/**
 * @param {string[]} [inputPaths]
 * @returns {{ files: string[]; latestMtimeMs: number }}
 */
export function getLatestInputMtime(inputPaths = []) {
  const files = collectInputFiles(inputPaths);
  let latestMtimeMs = 0;

  for (const filePath of files) {
    const mtimeMs = readMtimeMs(filePath);
    if (mtimeMs && mtimeMs > latestMtimeMs) {
      latestMtimeMs = mtimeMs;
    }
  }

  return {
    files,
    latestMtimeMs,
  };
}

/**
 * @param {string[]} [outputPaths]
 * @returns {number | null}
 */
export function getEarliestOutputMtime(outputPaths = []) {
  if (outputPaths.length === 0) {
    return null;
  }

  let earliestMtimeMs = Number.POSITIVE_INFINITY;

  for (const outputPath of outputPaths) {
    const mtimeMs = readMtimeMs(outputPath);
    if (!mtimeMs) {
      return null;
    }

    if (mtimeMs < earliestMtimeMs) {
      earliestMtimeMs = mtimeMs;
    }
  }

  return Number.isFinite(earliestMtimeMs) ? earliestMtimeMs : null;
}

/**
 * @param {{ inputPaths?: string[]; outputPaths?: string[] }} options
 * @returns {{ valid: boolean; latestInputMtimeMs: number; earliestOutputMtimeMs: number | null }}
 */
export function isExecutionCacheValid({ inputPaths = [], outputPaths = [] }) {
  const earliestOutputMtimeMs = getEarliestOutputMtime(outputPaths);
  if (earliestOutputMtimeMs === null) {
    return {
      valid: false,
      latestInputMtimeMs: 0,
      earliestOutputMtimeMs: null,
    };
  }

  const { latestMtimeMs } = getLatestInputMtime(inputPaths);

  return {
    valid: earliestOutputMtimeMs >= latestMtimeMs,
    latestInputMtimeMs: latestMtimeMs,
    earliestOutputMtimeMs,
  };
}

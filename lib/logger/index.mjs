import fs from 'node:fs';
import path from 'node:path';

import { normalizeLoggingMode } from '../../config/loggingConfig.mjs';

function toRelativePath(rootDir, filePath) {
  const relativePath = path.relative(rootDir, filePath);
  return relativePath && !relativePath.startsWith('..')
    ? relativePath.replaceAll(path.sep, '/')
    : filePath;
}

function formatValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  if (typeof value === 'boolean') {
    return value ? 'yes' : 'no';
  }

  return String(value);
}

function toMetricLine(data) {
  return Object.entries(data)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key}: ${formatValue(value)}`)
    .join(' | ');
}

function formatNodeData(data) {
  if (typeof data === 'string') {
    return data;
  }

  const { scope, slug, label, relates, supports, validates, total, ...rest } = data;

  const left = scope && slug ? `[${scope}] ${slug}` : (label ?? slug ?? scope ?? 'item');
  const right = toMetricLine({
    relates,
    supports,
    validates,
    total,
    ...rest,
  });

  return right ? `${left} -> ${right}` : left;
}

function serializeReportData(data) {
  if (typeof data === 'string') {
    return data.endsWith('\n') ? data : `${data}\n`;
  }

  return `${JSON.stringify(data, null, 2)}\n`;
}

export function createLogger(options = {}) {
  const mode = normalizeLoggingMode(options.mode);
  const label = options.label ?? 'system';
  const rootDir = options.rootDir ?? process.cwd();

  const prefix = `[${label}]`;

  return {
    mode,
    isVerbose() {
      return mode === 'verbose' || mode === 'debug';
    },
    isDebug() {
      return mode === 'debug';
    },
    step(title) {
      process.stdout.write(`${prefix} step -> ${title}\n`);
    },
    info(summary) {
      const line = typeof summary === 'string' ? summary : toMetricLine(summary);
      process.stdout.write(`${prefix} ${line}\n`);
    },
    warn(summary) {
      const line = typeof summary === 'string' ? summary : toMetricLine(summary);
      process.stderr.write(`${prefix} warn -> ${line}\n`);
    },
    error(summary) {
      const line = typeof summary === 'string' ? summary : toMetricLine(summary);
      process.stderr.write(`${prefix} error -> ${line}\n`);
    },
    printSection(title) {
      process.stdout.write(`${prefix} ${title}\n`);
    },
    printSummary(summary) {
      const line = typeof summary === 'string' ? summary : toMetricLine(summary);
      process.stdout.write(`${prefix} ${line}\n`);
    },
    printNodeLine(data) {
      if (mode !== 'verbose') {
        if (mode !== 'debug') {
          return;
        }
      }

      process.stdout.write(`${prefix} ${formatNodeData(data)}\n`);
    },
    printDebug(labelText, data) {
      if (mode !== 'debug') {
        return;
      }

      const detail = typeof data === 'string' ? data : toMetricLine(data);
      process.stdout.write(`${prefix} debug -> ${labelText}${detail ? ` | ${detail}` : ''}\n`);
    },
    printTotals(data) {
      process.stdout.write(`${prefix} totals -> ${toMetricLine(data)}\n`);
    },
    printErrors(errors, title = 'errors', limit = 5) {
      if (!Array.isArray(errors) || errors.length === 0) {
        return;
      }

      process.stderr.write(`${prefix} ${title} -> ${errors.slice(0, limit).join(' | ')}\n`);
      if (errors.length > limit) {
        process.stderr.write(
          `${prefix} ${title} -> ${errors.length - limit} additional item(s) omitted\n`
        );
      }
    },
    writeReport(filePath, data) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, serializeReportData(data), 'utf8');
      return toRelativePath(rootDir, filePath);
    },
    relativePath(filePath) {
      return toRelativePath(rootDir, filePath);
    },
  };
}

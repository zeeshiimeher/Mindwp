#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const reportsDir = path.join(root, 'reports');
const removableDirectories = [
  path.join(reportsDir, 'dashboard'),
  path.join(reportsDir, 'system-snapshots'),
  path.join(reportsDir, '.system-full'),
];

function removeIfExists(targetPath) {
  if (!fs.existsSync(targetPath)) {
    return;
  }

  fs.rmSync(targetPath, { recursive: true, force: true });
}

function main() {
  for (const directoryPath of removableDirectories) {
    removeIfExists(directoryPath);
  }

  if (fs.existsSync(reportsDir)) {
    for (const entry of fs.readdirSync(reportsDir, { withFileTypes: true })) {
      const targetPath = path.join(reportsDir, entry.name);

      if (entry.isDirectory()) {
        if (
          entry.name === 'dashboard' ||
          entry.name === 'system-snapshots' ||
          entry.name === '.system-full'
        ) {
          continue;
        }
        continue;
      }

      if (/\.(json|md)$/i.test(entry.name)) {
        fs.rmSync(targetPath, { force: true });
      }
    }
  }

  process.stdout.write('[system:clean] removed generated report artifacts\n');
}

main();

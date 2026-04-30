#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const artifactsDir = path.join(root, 'artifacts');
const snapshotPath = path.join(artifactsDir, 'system-snapshot.json');
const rollbackSnapshotPath = path.join(artifactsDir, 'last-snapshot.json');

if (!fs.existsSync(rollbackSnapshotPath)) {
  throw new Error('No rollback snapshot found at artifacts/last-snapshot.json');
}

fs.mkdirSync(artifactsDir, { recursive: true });
fs.copyFileSync(rollbackSnapshotPath, snapshotPath);
process.stdout.write('[deploy] Rolled back snapshot\n');

#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const artifactsDir = path.join(root, 'artifacts');
const snapshotPath = path.join(artifactsDir, 'system-snapshot.json');
const rollbackSnapshotPath = path.join(artifactsDir, 'last-snapshot.json');

function ensureArtifactsDir() {
    fs.mkdirSync(artifactsDir, { recursive: true });
}

export function generateSnapshotArtifact() {
    ensureArtifactsDir();

    if (fs.existsSync(snapshotPath)) {
        fs.copyFileSync(snapshotPath, rollbackSnapshotPath);
    }

    const result = spawnSync(
        process.execPath,
        ['--import', 'tsx/esm', 'scripts/core/build-system-snapshot.mjs'],
        {
            cwd: root,
            encoding: 'utf8',
            env: process.env,
        }
    );

    if ((result.status ?? 1) !== 0) {
        throw new Error(result.stderr?.trim() || 'Snapshot generation failed.');
    }

    const builtSnapshotPath = result.stdout.trim();
    if (!builtSnapshotPath || !fs.existsSync(builtSnapshotPath)) {
        throw new Error('Snapshot builder did not return a valid snapshot path.');
    }

    fs.copyFileSync(builtSnapshotPath, snapshotPath);
    return snapshotPath;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    const artifactPath = generateSnapshotArtifact();
    process.stdout.write(`${path.relative(root, artifactPath)}\n`);
}
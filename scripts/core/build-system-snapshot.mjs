#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { getStructuredContentGraph } from '../../src/lib/content-graph/registry';
import { buildRouteInventory } from '../../src/lib/content-quality/inventory';

import { getApprovedPublicTopics } from '../../config/indexingPolicy';
import { attachGeneratedJsonMetadata } from '../lib/generated-file-metadata.mjs';

const root = process.cwd();

export async function buildSystemSnapshot(targetRoot = root) {
  await ensureGraphInitialized();

  const generatedAt = new Date().toISOString();
  const snapshot = attachGeneratedJsonMetadata(
    {
      generatedAt,
      buildCount: 1,
      env: {
        nodeEnv: process.env.NODE_ENV ?? 'development',
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? null,
        mailEnabled: process.env.ENABLE_MAIL_SERVICE === 'true',
        captchaEnabled: process.env.ENABLE_CAPTCHA_SERVICE === 'true',
      },
      topicAuthority: {
        approvedTopics: getApprovedPublicTopics(),
      },
      graph: getStructuredContentGraph(),
      routeInventory: await buildRouteInventory(),
    },
    {
      source: 'content graph, route inventory, indexing policy',
      type: 'snapshot',
    }
  );

  const snapshotDir = path.join(targetRoot, 'reports', '.system-full');
  const snapshotPath = path.join(snapshotDir, 'system-snapshot.json');
  fs.mkdirSync(snapshotDir, { recursive: true });
  fs.writeFileSync(snapshotPath, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8');
  return snapshotPath;
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const snapshotPath = await buildSystemSnapshot();
  process.stdout.write(`${snapshotPath}\n`);
}

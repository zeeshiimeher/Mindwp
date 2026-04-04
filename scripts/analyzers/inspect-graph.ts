#!/usr/bin/env node
/**
 * Dev runner for graph-inspector.
 * Usage: npm run graph:inspect
 */

import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { inspectGraph } from '../../src/dev/graph-inspector';

async function main() {
  (process.env as Record<string, string>).NODE_ENV = 'development';
  await ensureGraphInitialized();
  inspectGraph();
}

main().catch(console.error);

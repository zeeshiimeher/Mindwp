import fs from 'node:fs';
import path from 'node:path';

import { DOMAIN_GRAPH_SOURCES } from '@/domains/contentModel';
import { env } from '@/env';
import {
  getContentGraph,
  initContentGraph,
  initContentGraphFromSnapshot,
} from '@/lib/content-graph/registry';

import { setInitMetrics } from './metrics';

const shouldProfile = env.PROFILE_GRAPH === 'true' || process.env.SYSTEM_LOGGING_MODE === 'debug';

let initialized = false;
let initPromise: Promise<void> | null = null;

type SystemSnapshot = {
  graph?: Parameters<typeof initContentGraphFromSnapshot>[0];
};

function readSystemSnapshot(): SystemSnapshot | null {
  const snapshotPath = process.env.SYSTEM_SNAPSHOT_PATH;
  if (!snapshotPath) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(snapshotPath, 'utf8')) as SystemSnapshot;
  } catch {
    return null;
  }
}

export async function ensureGraphInitialized(): Promise<void> {
  if (initialized) return;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const t0 = performance.now();

    const snapshot = readSystemSnapshot();

    if (snapshot?.graph) {
      initContentGraphFromSnapshot(snapshot.graph);
    } else {
      initContentGraph(DOMAIN_GRAPH_SOURCES);
    }

    const t1 = performance.now();
    const metrics = {
      totalTime: t1 - t0,
      contentGraphTime: t1 - t0,
    };

    setInitMetrics(metrics);

    const metricsPath = process.env.MINDWP_GRAPH_INIT_METRICS_FILE;
    if (metricsPath) {
      fs.mkdirSync(path.dirname(metricsPath), { recursive: true });
      fs.writeFileSync(metricsPath, JSON.stringify(metrics, null, 2) + '\n', 'utf8');
    }

    if (shouldProfile) {
      // eslint-disable-next-line no-console
      console.debug('[graph:init]', metrics);
    }

    initialized = true;
  })();

  return initPromise;
}

export async function getInitializedContentGraph() {
  await ensureGraphInitialized();
  return getContentGraph();
}

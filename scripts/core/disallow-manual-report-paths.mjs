#!/usr/bin/env node

const [recommendedCommand = 'system:full'] = process.argv.slice(2);

console.error(
  `[production-mode] This execution path is locked. Use \`npm run ${recommendedCommand}\` so schema validation, snapshots, dashboards, and registries stay in sync.`
);
process.exit(1);
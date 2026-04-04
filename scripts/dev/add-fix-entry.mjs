#!/usr/bin/env node

/**
 * Add Fix Entry
 *
 * Appends a fix entry to reports/fix-log.json.
 * Preserves the existing analytics contract while also storing richer metadata.
 *
 * Usage:
 *   node scripts/dev/add-fix-entry.mjs \
 *     --title "Fix CTA spacing" \
 *     --component "CTASection" \
 *     --type "ui" \
 *     --impact "high" \
 *     --slug "/services/wordpress-development" \
 *     --before "72" \
 *     --after "84" \
 *     [--notes "Optional notes"]
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import { dirname, resolve } from 'node:path';

const LOG_PATH = resolve(process.cwd(), 'reports/fix-log.json');
const VALID_TYPES = new Set(['ui', 'bug', 'refactor']);
const VALID_IMPACTS = new Set(['high', 'medium', 'low']);

function printUsage() {
  console.error(`Usage: node scripts/dev/add-fix-entry.mjs \\
  --title "Fix CTA spacing" \\
  --component "CTASection" \\
  --type "ui|bug|refactor" \\
  --impact "high|medium|low" \\
  --slug "/services/wordpress-development" \\
  --before "72" \\
  --after "84" \\
  [--notes "Optional notes"]`);
}

function parseArgs(argv) {
  const parsed = {};

  for (let index = 0; index < argv.length; index++) {
    const token = argv[index];
    if (!token?.startsWith('--')) {
      continue;
    }

    const trimmed = token.slice(2);
    const equalsIndex = trimmed.indexOf('=');

    if (equalsIndex >= 0) {
      const key = trimmed.slice(0, equalsIndex);
      const value = trimmed.slice(equalsIndex + 1);
      if (key) {
        parsed[key] = value;
      }
      continue;
    }

    const key = trimmed;
    const nextToken = argv[index + 1];
    if (!key) {
      continue;
    }

    if (!nextToken || nextToken.startsWith('--')) {
      parsed[key] = 'true';
      continue;
    }

    parsed[key] = nextToken;
    index++;
  }

  return parsed;
}

function readExistingLog() {
  if (!existsSync(LOG_PATH)) {
    return [];
  }

  try {
    const raw = readFileSync(LOG_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      throw new Error('reports/fix-log.json must contain a JSON array');
    }
    return parsed;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Unable to read reports/fix-log.json: ${message}`);
  }
}

function requireArg(args, key) {
  const value = args[key];
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Missing required argument --${key}`);
  }
  return value.trim();
}

function parseScore(label, value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`--${label} must be a valid number`);
  }
  return parsed;
}

function validateEnum(label, value, allowed) {
  if (!allowed.has(value)) {
    throw new Error(`--${label} must be one of: ${[...allowed].join(', ')}`);
  }
}

function createUniqueId(existingEntries) {
  const existingIds = new Set(
    existingEntries
      .map(entry => (entry && typeof entry === 'object' ? entry.id : undefined))
      .filter(id => typeof id === 'string' && id.length > 0)
  );

  let nextId = randomUUID();
  while (existingIds.has(nextId)) {
    nextId = randomUUID();
  }

  return nextId;
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help === 'true') {
    printUsage();
    process.exit(0);
  }

  try {
    const title = requireArg(args, 'title');
    const component = requireArg(args, 'component');
    const type = requireArg(args, 'type');
    const impact = requireArg(args, 'impact');
    const slug = requireArg(args, 'slug');
    const before = parseScore('before', requireArg(args, 'before'));
    const after = parseScore('after', requireArg(args, 'after'));
    const notes = typeof args.notes === 'string' && args.notes.trim() ? args.notes.trim() : undefined;

    validateEnum('type', type, VALID_TYPES);
    validateEnum('impact', impact, VALID_IMPACTS);

    const existingLog = readExistingLog();
    const timestamp = new Date().toISOString();
    const id = createUniqueId(existingLog);

    const entry = {
      id,
      timestamp,
      title,
      component,
      type,
      impact,
      status: 'completed',
      date: timestamp,
      slug,
      fixType: type,
      scoreBefore: before,
      scoreAfter: after,
      ...(notes ? { notes } : { notes: title }),
    };

    const nextLog = [...existingLog, entry];
    mkdirSync(dirname(LOG_PATH), { recursive: true });
    writeFileSync(LOG_PATH, JSON.stringify(nextLog, null, 2) + '\n');

    console.log(`✅ Fix entry added (${nextLog.length} total entries)`);
    console.log(`   id: ${id}`);
    console.log(`   slug: ${slug}`);
    console.log(`   improvement: ${after - before}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Error: ${message}`);
    printUsage();
    process.exit(1);
  }
}

main();
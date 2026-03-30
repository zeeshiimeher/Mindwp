/**
 * Add Session Entry
 *
 * CLI script to add a session entry to reports/session-log.json.
 * Usage: node scripts/dev/add-session-entry.mjs --action "Fixed CTAs" --slugs "slug1,slug2" --before "slug1:30,slug2:40" --after "slug1:60,slug2:70" --notes "Optional notes"
 *
 * Source: CONTENT-GOVERNANCE.md (Session Tracker System)
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const LOG_PATH = resolve(process.cwd(), 'reports/session-log.json');

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i]?.replace(/^--/, '');
    const value = args[i + 1];
    if (key && value) parsed[key] = value;
  }
  return parsed;
}

function parseScores(str) {
  const scores = {};
  if (!str) return scores;
  for (const pair of str.split(',')) {
    const [slug, score] = pair.split(':');
    if (slug && score) scores[slug.trim()] = Number(score.trim());
  }
  return scores;
}

function main() {
  const args = parseArgs();

  if (!args.action || !args.slugs) {
    console.error('Usage: node scripts/dev/add-session-entry.mjs --action "..." --slugs "slug1,slug2" --before "slug1:30" --after "slug1:60" [--notes "..."]');
    process.exit(1);
  }

  const entry = {
    date: new Date().toISOString(),
    action: args.action,
    slugsAffected: args.slugs.split(',').map(s => s.trim()),
    scoresBefore: parseScores(args.before),
    scoresAfter: parseScores(args.after),
  };

  if (args.notes) {
    entry.notes = args.notes;
  }

  let log = [];
  try {
    const raw = readFileSync(LOG_PATH, 'utf-8');
    log = JSON.parse(raw);
    if (!Array.isArray(log)) log = [];
  } catch {
    log = [];
  }

  log.push(entry);
  writeFileSync(LOG_PATH, JSON.stringify(log, null, 2) + '\n');
  console.log(`✅ Session entry added (${entry.slugsAffected.length} slugs affected)`);
}

main();

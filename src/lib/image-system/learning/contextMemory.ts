// ─── Image Context Memory System ────────────────────────────────────
// Remembers successful image queries per topic for improved future selection

import fs from 'fs';
import path from 'path';

import { DATA_FILES } from '../config';
import type { ContextMemory, ProviderName, TopicMemory } from '../types';

/** Load context memory from disk */
export function loadContextMemory(): ContextMemory {
  const filePath = path.resolve(DATA_FILES.contextMemory);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as ContextMemory;
  }
  return {};
}

/** Save context memory to disk */
export function saveContextMemory(memory: ContextMemory): void {
  const filePath = path.resolve(DATA_FILES.contextMemory);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(memory, null, 2));
}

/** Get stored queries for a topic (for query optimization) */
export function getTopicQueries(topic: string): TopicMemory | null {
  const memory = loadContextMemory();
  return memory[topic] ?? null;
}

/** Update context memory after a successful image selection */
export function updateContextMemory(
  topic: string,
  query: string,
  provider: ProviderName,
  score: number
): void {
  const memory = loadContextMemory();
  const existing = memory[topic];

  if (existing) {
    // Update existing topic entry
    if (!existing.queries.includes(query)) {
      existing.queries.push(query);
      if (existing.queries.length > 5) existing.queries.shift(); // Keep max 5
    }
    existing.avgScore = Math.round(
      (existing.avgScore * existing.count + score) / (existing.count + 1)
    );
    existing.count++;
    if (score > existing.avgScore) {
      existing.provider = provider; // Update preferred provider if this one scored better
    }
  } else {
    memory[topic] = {
      queries: [query],
      provider,
      avgScore: score,
      count: 1,
    };
  }

  saveContextMemory(memory);
}

// ─── Learning Memory System ─────────────────────────────────────────
// Stores winning configurations per domain + title-length bucket.
// When a score ≥ 8 is achieved, the config is saved. Future generations
// for the same domain+bucket start from these learned settings.

import fs from 'fs';
import path from 'path';

import { DATA_DIR } from '../config';
import type {
  ContentDomain,
  LayoutVariant,
  LearnedConfig,
  LearningMemory,
  TitleBucket,
  TuneOverrides,
} from '../types';

const MEMORY_FILE = path.join(DATA_DIR, 'learningMemory.json');

// ─── Bucket Classification ──────────────────────────────────────────

export function titleBucket(titleLength: number): TitleBucket {
  if (titleLength < 40) return 'short';
  if (titleLength < 80) return 'medium';
  return 'long';
}

function memoryKey(domain: ContentDomain, bucket: TitleBucket): string {
  return `${domain}-${bucket}`;
}

// ─── Load / Save ────────────────────────────────────────────────────

export function loadLearningMemory(): LearningMemory {
  const filePath = path.resolve(MEMORY_FILE);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as LearningMemory;
  }
  return {};
}

function saveLearningMemory(memory: LearningMemory): void {
  const filePath = path.resolve(MEMORY_FILE);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(memory, null, 2));
}

// ─── Store Winner ───────────────────────────────────────────────────

export function saveWinningConfig(
  domain: ContentDomain,
  title: string,
  config: {
    titleScale: number;
    maxTextWidth: number;
    gradientStrength: number;
    layout: LayoutVariant;
    vignetteStrength: number;
    score: number;
  }
): void {
  const memory = loadLearningMemory();
  const key = memoryKey(domain, titleBucket(title.length));
  const existing = memory[key];

  if (existing) {
    // Rolling average — blend new config with existing
    const n = existing.count;
    existing.titleScale = (existing.titleScale * n + config.titleScale) / (n + 1);
    existing.maxTextWidth = Math.round(
      (existing.maxTextWidth * n + config.maxTextWidth) / (n + 1)
    );
    existing.gradientStrength =
      (existing.gradientStrength * n + config.gradientStrength) / (n + 1);
    existing.vignetteStrength =
      (existing.vignetteStrength * n + config.vignetteStrength) / (n + 1);
    existing.avgScore = (existing.avgScore * n + config.score) / (n + 1);
    existing.count = n + 1;
    // Keep the layout of the highest-scoring config
    if (config.score > existing.avgScore) {
      existing.layout = config.layout;
    }
  } else {
    memory[key] = {
      titleScale: config.titleScale,
      maxTextWidth: config.maxTextWidth,
      gradientStrength: config.gradientStrength,
      layout: config.layout,
      vignetteStrength: config.vignetteStrength,
      count: 1,
      avgScore: config.score,
    };
  }

  saveLearningMemory(memory);
}

// ─── Load Learned Overrides ─────────────────────────────────────────

export function loadLearnedOverrides(
  domain: ContentDomain,
  title: string
): TuneOverrides | null {
  const memory = loadLearningMemory();
  const key = memoryKey(domain, titleBucket(title.length));
  const learned = memory[key];

  if (!learned || learned.count < 2) return null; // Need at least 2 data points

  return {
    titleScale: learned.titleScale,
    maxTextWidth: learned.maxTextWidth,
    gradientStrength: learned.gradientStrength,
    vignetteStrength: learned.vignetteStrength,
  };
}

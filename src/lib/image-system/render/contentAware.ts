import type { BrightnessResult, ContentDomain } from '../types';

import { tokens } from './design-system/tokens';

const CENTER_TEXT_WIDTH = 810;
const SPLIT_TEXT_WIDTH = 560;
const FONT_SIZE = tokens.typography.title.fontSize;
const CANVAS_WIDTH = 1200;
const CENTER_CONTAINER_WIDTH = `${Math.round(CANVAS_WIDTH * 0.75)}px`;

function estimateWordWidth(word: string): number {
  return word.length * FONT_SIZE * 0.5;
}

export function getBrightness(imageData: BrightnessResult): 'light' | 'dark' {
  return imageData.average > 160 ? 'light' : 'dark';
}

export function getOverlayStrength(brightness: 'light' | 'dark', domain: ContentDomain): string {
  if (domain === 'resources') {
    return brightness === 'light' ? 'rgba(0,0,0,0.78)' : 'rgba(0,0,0,0.84)';
  }

  if (domain === 'blog' || domain === 'industries') {
    return brightness === 'light' ? 'rgba(0,0,0,0.72)' : 'rgba(0,0,0,0.78)';
  }

  return brightness === 'light' ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.65)';
}

function getLineLimit(domain: ContentDomain): number {
  switch (domain) {
    case 'resources':
      return 3;
    case 'blog':
    case 'case-studies':
      return 2;
    default:
      return 2;
  }
}

function getTextWidth(domain: ContentDomain): number {
  if (domain === 'services' || domain === 'features') {
    return SPLIT_TEXT_WIDTH;
  }

  if (domain === 'case-studies') {
    return 660;
  }

  if (domain === 'industries') {
    return 640;
  }

  if (domain === 'resources') {
    return 700;
  }

  return CENTER_TEXT_WIDTH;
}

export function wrapTitle(title: string, domain: ContentDomain): string[] {
  const normalized = title.replace(/\s+/g, ' ').trim();
  if (!normalized) return ['Untitled'];

  const maxLines = getLineLimit(domain);
  const maxWidth = getTextWidth(domain);
  const words = normalized.split(' ');
  const lines: string[] = [];
  let currentWords: string[] = [];
  let currentWidth = 0;

  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    const nextWordWidth = estimateWordWidth(word);
    const nextWidth = currentWords.length === 0 ? nextWordWidth : currentWidth + FONT_SIZE * 0.28 + nextWordWidth;

    if (nextWidth <= maxWidth || currentWords.length === 0) {
      currentWords.push(word);
      currentWidth = nextWidth;
      continue;
    }

    if (lines.length === maxLines - 1) break;

    lines.push(currentWords.join(' '));
    currentWords = [word];
    currentWidth = nextWordWidth;

    if (lines.length === maxLines - 1) {
      currentWords = [word, ...words.slice(index + 1)];
      break;
    }
  }

  if (currentWords.length > 0) {
    lines.push(currentWords.join(' '));
  }

  return lines.slice(0, maxLines);
}

export function getTextColor(layoutType: 'split' | 'center'): {
  title: string;
  subtitle: string;
} {
  return {
    title: tokens.colors.lightText,
    subtitle: layoutType === 'split' ? tokens.colors.subLight : 'rgba(255,255,255,0.82)',
  };
}

export function getContainerWidth(): string {
  return CENTER_CONTAINER_WIDTH;
}
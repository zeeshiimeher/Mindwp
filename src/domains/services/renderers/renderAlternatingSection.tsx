import type { ReactNode } from 'react';

import { AlternatingDetailRowsSection } from '@/components/reusable/sections';

type AlternatingItemInput = {
  title: string;
  description: string;
  points: string[];
};

type AlternatingSectionRenderData = {
  badge?: string;
  title: string;
  description?: string;
  alternatingItems?: AlternatingItemInput[];
  backgroundColor?: string;
  cssPrefix?: string;
};

const TITLE_MAX_WORDS = 7;
const POINT_MAX_WORDS = 12;
const POINT_MAX_ITEMS = 5;
const LEADING_FILLER_WORDS = new Set(['a', 'an', 'the']);

function cleanText(value: string) {
  return value
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.!?,;:]+$/g, '');
}

function truncateWords(value: string, maxWords: number) {
  const words = cleanText(value).split(' ').filter(Boolean);
  return words.slice(0, maxWords).join(' ');
}

export function normalizeTitle(title: string) {
  const cleaned = cleanText(title);
  const words = cleaned.split(' ').filter(Boolean);

  if (words.length <= TITLE_MAX_WORDS) {
    return cleaned;
  }

  const meaningfulWords = [...words];
  while (meaningfulWords.length > 1 && LEADING_FILLER_WORDS.has(meaningfulWords[0].toLowerCase())) {
    meaningfulWords.shift();
  }

  return meaningfulWords.slice(0, TITLE_MAX_WORDS).join(' ');
}

function normalizePoint(point: string) {
  const cleaned = cleanText(point);
  const words = cleaned.split(' ').filter(Boolean);

  if (words.length <= POINT_MAX_WORDS) {
    return cleaned;
  }

  return truncateWords(cleaned, POINT_MAX_WORDS);
}

export function normalizePoints(points: string[], description?: string) {
  const normalizedDescription = description ? cleanText(description).toLowerCase() : '';
  const seen = new Set<string>();

  return points
    .map(normalizePoint)
    .filter(point => point.length > 0)
    .filter(point => point.toLowerCase() !== normalizedDescription)
    .filter(point => {
      const key = point.toLowerCase();
      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    })
    .slice(0, POINT_MAX_ITEMS);
}

export function normalizeAlternatingItems(items: AlternatingItemInput[] = []) {
  return items
    .map(item => ({
      title: normalizeTitle(item.title),
      description: item.description,
      points: normalizePoints(item.points, item.description),
    }))
    .filter(item => item.points.length >= 2);
}

export function renderAlternatingSection(
  data: AlternatingSectionRenderData | null | undefined,
  fallback: ReactNode
) {
  if (!data) {
    throw new Error('renderAlternatingSection requires section data.');
  }

  const items = normalizeAlternatingItems(data.alternatingItems);

  if (!items.length) {
    return fallback;
  }

  return (
    <AlternatingDetailRowsSection
      {...(data.badge !== undefined && { badge: data.badge })}
      title={data.title}
      {...(data.description !== undefined && { description: data.description })}
      items={items}
      backgroundColor={data.backgroundColor}
      cssPrefix={data.cssPrefix}
    />
  );
}

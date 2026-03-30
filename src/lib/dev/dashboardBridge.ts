/**
 * Dashboard Bridge Engine
 *
 * Connects Content Dashboard (SEO + structure) with
 * Authority Dashboard (conversion + optimization).
 *
 * Answers: "What should I create vs fix vs what gives best ROI?"
 *
 * Reuses existing analyzers — no duplicate logic.
 *
 * Source: CONTENT-GOVERNANCE.md §3 Domain Behavior Rules
 */

import { getContentGraph } from '@/lib/content-graph/registry';
import type { ContentNodeType } from '@/lib/content-graph/types';

import { getWeakTopics, type TopicScore } from './authorityAnalyzer';
import { analyzeAllConversions, type ConversionScore } from './conversionAnalyzer';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface BridgeInsights {
  highAuthorityLowConversion: {
    slug: string;
    authorityScore: number;
    conversionScore: number;
  }[];

  weakTopicsHighConversion: {
    topic: string;
    avgConversionScore: number;
  }[];

  bestContentTypes: {
    type: string;
    avgConversionScore: number;
  }[];

  contentOpportunities: {
    topic: string;
    suggestion: string;
  }[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Map content graph nodes to their topics for topic→conversion lookups. */
function buildTopicConversionMap(conversions: ConversionScore[]): Map<string, number[]> {
  const graph = getContentGraph();
  const map = new Map<string, number[]>();

  for (const c of conversions) {
    const node = graph[c.slug];
    if (!node?.topics) continue;
    for (const topic of node.topics) {
      const arr = map.get(topic);
      if (arr) {
        arr.push(c.totalScore);
      } else {
        map.set(topic, [c.totalScore]);
      }
    }
  }

  return map;
}

function avg(nums: number[]): number {
  if (nums.length === 0) return 0;
  return Math.round(nums.reduce((s, n) => s + n, 0) / nums.length);
}

// ─── Core engine ─────────────────────────────────────────────────────────────

export function getBridgeInsights(): BridgeInsights {
  const conversions = analyzeAllConversions();
  const weakTopics = getWeakTopics(50);
  const topicConversionMap = buildTopicConversionMap(conversions);

  // 2.1 — High authority + low conversion → FIX pages
  const highAuthorityLowConversion = conversions
    .filter(c => c.authorityScore > 70 && c.totalScore < 60)
    .map(c => ({
      slug: c.slug,
      authorityScore: c.authorityScore,
      conversionScore: c.totalScore,
    }))
    .slice(0, 15);

  // 2.2 — Weak topics but high conversion → CREATE more content
  const weakTopicsHighConversion: BridgeInsights['weakTopicsHighConversion'] = [];
  for (const topic of weakTopics) {
    const scores = topicConversionMap.get(topic.topic);
    if (!scores || scores.length === 0) continue;
    const avgScore = avg(scores);
    if (avgScore > 70) {
      weakTopicsHighConversion.push({ topic: topic.topic, avgConversionScore: avgScore });
    }
  }
  weakTopicsHighConversion.sort((a, b) => b.avgConversionScore - a.avgConversionScore);

  // 2.3 — Best performing content types
  const typeScores = new Map<string, number[]>();
  for (const c of conversions) {
    const arr = typeScores.get(c.type);
    if (arr) {
      arr.push(c.totalScore);
    } else {
      typeScores.set(c.type, [c.totalScore]);
    }
  }
  const bestContentTypes: BridgeInsights['bestContentTypes'] = [];
  for (const [type, scores] of typeScores) {
    bestContentTypes.push({ type, avgConversionScore: avg(scores) });
  }
  bestContentTypes.sort((a, b) => b.avgConversionScore - a.avgConversionScore);

  // 2.4 — Content opportunities
  const contentOpportunities: BridgeInsights['contentOpportunities'] = [];

  // Weak topic + high conversion → create more content
  for (const wt of weakTopicsHighConversion.slice(0, 5)) {
    contentOpportunities.push({
      topic: wt.topic,
      suggestion: `Create case study or resource for "${wt.topic}" — strong conversion, weak authority`,
    });
  }

  // Strong topic + low conversion → optimise existing pages
  const strongTopicLowConversion = findStrongTopicLowConversion(conversions, topicConversionMap);
  for (const entry of strongTopicLowConversion.slice(0, 5)) {
    contentOpportunities.push({
      topic: entry.topic,
      suggestion: `Optimise existing "${entry.topic}" pages — strong authority but low conversion (avg ${entry.avgConversionScore})`,
    });
  }

  return {
    highAuthorityLowConversion,
    weakTopicsHighConversion,
    bestContentTypes,
    contentOpportunities,
  };
}

// ─── Strong topic + low conversion helper ────────────────────────────────────

function findStrongTopicLowConversion(
  _conversions: ConversionScore[],
  topicConversionMap: Map<string, number[]>
): { topic: string; avgConversionScore: number }[] {
  // Topics with many pages (strong authority) but low avg conversion
  const results: { topic: string; avgConversionScore: number }[] = [];

  for (const [topic, scores] of topicConversionMap) {
    if (scores.length < 3) continue; // need minimum coverage to be "strong"
    const avgScore = avg(scores);
    if (avgScore < 50) {
      results.push({ topic, avgConversionScore: avgScore });
    }
  }

  return results.sort((a, b) => a.avgConversionScore - b.avgConversionScore);
}

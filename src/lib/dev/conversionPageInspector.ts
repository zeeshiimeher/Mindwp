/**
 * Conversion Page Inspector
 *
 * Single-page deep inspection: aggregates conversion signals, scores,
 * link health, and link suggestions for a given slug.
 */

import { getNodeBySlug } from '@/lib/content-graph/registry';
import type { ContentGraphNode } from '@/lib/content-graph/types';
import { calculateConversionScore, type ConversionScore } from '@/lib/dev/conversionAnalyzer';
import { type ConversionSignals, getConversionSignals } from '@/lib/dev/conversionSignals';
import { simulateFixesForPage, type SimulationResult } from '@/lib/dev/fixSimulationEngine';
import { generateGuidedFlow, type GuidedFlow } from '@/lib/dev/guidedFlowEngine';
import type { LinkHealthResult } from '@/lib/dev/linkHealthAnalyzer';
import { analyzePageHealth } from '@/lib/dev/linkHealthAnalyzer';
import type { PageSuggestions } from '@/lib/dev/linkSuggestionEngine';
import { suggestLinksForPage } from '@/lib/dev/linkSuggestionEngine';
import { generateUISuggestions, type UISuggestion } from '@/lib/dev/uiSuggestionsEngine';

export interface PageInspection {
  node: ContentGraphNode;
  signals: ConversionSignals;
  conversionScore: ConversionScore;
  linkHealth: LinkHealthResult;
  linkSuggestions: PageSuggestions;
  uiSuggestions: UISuggestion[];
  simulation: SimulationResult;
  guidedFlow: GuidedFlow;
}

/**
 * Inspects a single page by slug.
 * Returns null if the slug does not exist in the content graph.
 */
export function inspectPage(slug: string): PageInspection | null {
  const node = getNodeBySlug(slug);
  if (!node) return null;

  const signals = getConversionSignals(node.slug, node.type);
  const conversionScore = calculateConversionScore(node.slug, node.type);
  const linkHealth = analyzePageHealth(node.slug, node.type);
  const linkSuggestions = suggestLinksForPage(node.slug, node.type);
  const uiSuggestions = generateUISuggestions(signals, conversionScore, linkHealth);
  const simulation = simulateFixesForPage(node.slug, node.type);
  const guidedFlow = generateGuidedFlow(node.slug, node.type);

  return {
    node,
    signals,
    conversionScore,
    linkHealth,
    linkSuggestions,
    uiSuggestions,
    simulation,
    guidedFlow,
  };
}

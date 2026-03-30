/**
 * Fix Checklist Engine
 *
 * Generates a consolidated fix checklist for a page by combining:
 * inspector data + UI suggestions + rewrite suggestions + simulation + guided flow.
 * Sorted HIGH → MEDIUM → LOW. Does NOT auto-apply any fixes.
 */

import { getAutoFixRecommendations } from '@/lib/dev/autoFixRecommendationEngine';
import { generateRewriteSuggestion } from '@/lib/dev/contentRewriteEngine';
import { inspectPage } from '@/lib/dev/conversionPageInspector';

// ─── Types ───────────────────────────────────────────────────────────────────

export type ChecklistPriority = 'high' | 'medium' | 'low';

export interface ChecklistItem {
  id: string;
  priority: ChecklistPriority;
  category: string;
  title: string;
  description: string;
  action: string;
  expectedImprovement: string;
}

export interface FixChecklist {
  slug: string;
  generatedAt: string;
  currentScore: number;
  items: ChecklistItem[];
  highCount: number;
  mediumCount: number;
  lowCount: number;
}

// ─── Priority ordering ──────────────────────────────────────────────────────

const PRIORITY_ORDER: Record<ChecklistPriority, number> = {
  high: 0,
  medium: 1,
  low: 2,
};

// ─── Engine ──────────────────────────────────────────────────────────────────

/**
 * Generate a consolidated fix checklist for a page.
 * Returns null if the slug doesn't exist.
 */
export function generateFixChecklist(slug: string): FixChecklist | null {
  const inspection = inspectPage(slug);
  if (!inspection) return null;

  const rewrite = generateRewriteSuggestion(slug);
  const issues = inspection.uiSuggestions.map(s => s.rule);
  const recommendations = getAutoFixRecommendations(issues);

  const items: ChecklistItem[] = [];
  let idCounter = 1;

  // 1. From UI Suggestions (critical → high, warning → medium, info → low)
  for (const s of inspection.uiSuggestions) {
    const priority: ChecklistPriority =
      s.severity === 'critical' ? 'high' : s.severity === 'warning' ? 'medium' : 'low';
    items.push({
      id: `ui-${idCounter++}`,
      priority,
      category: 'UI Suggestion',
      title: s.title,
      description: s.description,
      action: s.action,
      expectedImprovement: 'Addresses conversion gap',
    });
  }

  // 2. From Fix Simulation (only add if not already covered by UI suggestions)
  const coveredFixes = new Set(inspection.uiSuggestions.map(s => s.rule));
  for (const fix of inspection.simulation.fixes) {
    if (fix.improvement <= 0) continue;
    const fixRuleId = fix.fixType.replace('add-', 'missing-').replace('add-', 'no-');
    if (coveredFixes.has(fixRuleId)) continue;

    items.push({
      id: `sim-${idCounter++}`,
      priority: fix.improvement >= 15 ? 'high' : fix.improvement >= 5 ? 'medium' : 'low',
      category: 'Fix Simulation',
      title: fix.label,
      description: `Simulated improvement: +${fix.improvement} points (${fix.currentScore} → ${fix.simulatedScore})`,
      action: `Apply ${fix.fixType} fix to gain ${fix.improvement} points`,
      expectedImprovement: `+${fix.improvement} pts`,
    });
  }

  // 3. From Rewrite Suggestions (structure suggestions)
  if (rewrite) {
    for (const ss of rewrite.structureSuggestions) {
      items.push({
        id: `rw-${idCounter++}`,
        priority: 'medium',
        category: 'Content Structure',
        title: `Add ${ss.element}`,
        description: ss.reason,
        action: `Place ${ss.element} at: ${ss.placement}`,
        expectedImprovement: 'Improves content conversion structure',
      });
    }
  }

  // 4. From Auto Fix Recommendations (only high-confidence ones not already covered)
  const coveredIssues = new Set(items.map(i => i.title.toLowerCase()));
  for (const rec of recommendations) {
    if (coveredIssues.has(rec.issue.toLowerCase())) continue;
    if (rec.confidence < 40) continue;

    items.push({
      id: `rec-${idCounter++}`,
      priority: rec.confidence >= 70 ? 'high' : 'medium',
      category: 'Auto Recommendation',
      title: rec.issue,
      description: rec.reason,
      action: `Recommended fix: ${rec.recommendedFix}`,
      expectedImprovement: `Confidence: ${rec.confidence}%`,
    });
  }

  // 5. From Guided Flow (any steps not already covered)
  for (const step of inspection.guidedFlow.steps) {
    const alreadyCovered = items.some(i =>
      i.title.toLowerCase().includes(step.label.toLowerCase())
    );
    if (alreadyCovered) continue;

    items.push({
      id: `flow-${idCounter++}`,
      priority: step.improvement >= 15 ? 'high' : step.improvement >= 5 ? 'medium' : 'low',
      category: 'Optimization Guide',
      title: `Step ${step.stepNumber}: ${step.label}`,
      description: step.instructions,
      action: `Follow guided step to achieve +${step.improvement} point improvement`,
      expectedImprovement: `+${step.improvement} pts (cumulative: ${step.cumulativeTotal})`,
    });
  }

  // Sort: HIGH → MEDIUM → LOW
  items.sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]);

  return {
    slug,
    generatedAt: new Date().toISOString(),
    currentScore: inspection.conversionScore.totalScore,
    items,
    highCount: items.filter(i => i.priority === 'high').length,
    mediumCount: items.filter(i => i.priority === 'medium').length,
    lowCount: items.filter(i => i.priority === 'low').length,
  };
}

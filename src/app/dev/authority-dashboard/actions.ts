'use server';

/**
 * Server actions for the authority dashboard.
 * Provides on-demand page inspection, rewrite suggestions,
 * and fix checklists from client components.
 */

import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { generateRewriteSuggestion, type RewriteSuggestion } from '@/lib/dev/contentRewriteEngine';
import { inspectPage, type PageInspection } from '@/lib/dev/conversionPageInspector';
import { type FixChecklist, generateFixChecklist } from '@/lib/dev/fixChecklistEngine';

export async function getPageInspection(slug: string): Promise<PageInspection | null> {
  await ensureGraphInitialized();
  return inspectPage(slug);
}

export async function getRewriteSuggestion(slug: string): Promise<RewriteSuggestion | null> {
  await ensureGraphInitialized();
  return generateRewriteSuggestion(slug);
}

export async function getFixChecklistAction(slug: string): Promise<FixChecklist | null> {
  await ensureGraphInitialized();
  return generateFixChecklist(slug);
}

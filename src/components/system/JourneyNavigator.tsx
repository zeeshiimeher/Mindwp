/**
 * JourneyNavigator
 *
 * "Next Steps Engine" — shows the single best next step based on graph relationships.
 * Uses the content journey flow: Blog → Resource → Case Study → Service
 *
 * Data flow: slug + type → getRelatedContent() → JOURNEY_CONFIG → pick first non-empty slot → render card
 *
 * Rules:
 * - All data from graph query API
 * - No hardcoded slugs
 * - Deterministic: same input = same output
 */

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/reusable/single/Button';
import { SECTION_BEHAVIOR } from '@/config/section-intelligence';
import { JOURNEY_CONFIG } from '@/config/ui-intelligence';
import type { AuthorityMapItem } from '@/lib/authority/generated/authorityMap';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { getRelatedContent, type RelatedContent } from '@/lib/graph/query';

// ── Types ────────────────────────────────────────────────────────────

interface JourneyNavigatorProps {
  slug: string;
  type: ContentNodeType;
  /** Section type — controls behavior via section-intelligence rules */
  sectionType?: string;
}

// ── Component ────────────────────────────────────────────────────────

export function JourneyNavigator({ slug, type, sectionType }: JourneyNavigatorProps) {
  // If section behavior says no links, skip rendering
  const behavior = sectionType ? SECTION_BEHAVIOR[sectionType] : undefined;
  if (behavior && !behavior.allowLinks) return null;

  const config = JOURNEY_CONFIG[type];

  // No journey defined for this type (e.g., service pages are the destination)
  if (!config || config.slotPriority.length === 0) return null;

  const related = getRelatedContent(slug, type);

  // Pick the first non-empty slot from priority order
  let nextItem: AuthorityMapItem | null = null;

  for (const slotKey of config.slotPriority) {
    const items: AuthorityMapItem[] | undefined = related[slotKey as keyof RelatedContent];
    if (items && items.length > 0) {
      nextItem = items[0];
      break;
    }
  }

  if (!nextItem) return null;

  return (
    <nav className='journey-navigator' aria-label='Content journey'>
      <div className='l-container'>
        <div className='journey-navigator__card'>
          <span className='journey-navigator__label'>{config.label}</span>
          <h3 className='journey-navigator__title'>{nextItem.title}</h3>
          <p className='journey-navigator__description'>{nextItem.description}</p>
          <Button variant='outline' href={nextItem.path} icon={ArrowRight}>
            Continue
          </Button>
        </div>
      </div>
    </nav>
  );
}

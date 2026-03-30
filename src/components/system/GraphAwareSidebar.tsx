/**
 * GraphAwareSidebar
 *
 * Sidebar widget for blog/resource pages that shows:
 * 1. Related content from the same topic/system cluster
 * 2. Journey "next step" teaser
 *
 * No logic — consumes query API only.
 *
 * Data flow: slug + type → getRelatedContent() → pick top items → render list
 */

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/reusable/single/Button';
import { SECTION_BEHAVIOR } from '@/config/section-intelligence';
import { JOURNEY_CONFIG, RELATED_SECTION_LABELS } from '@/config/ui-intelligence';
import type { AuthorityMapItem } from '@/lib/authority/generated/authorityMap';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { getRelatedContent, type RelatedContent } from '@/lib/graph/query';

// ── Types ────────────────────────────────────────────────────────────

interface GraphAwareSidebarProps {
  slug: string;
  type: ContentNodeType;
  /** Max items to show per slot */
  maxItems?: number;
  /** Section type — controls behavior via section-intelligence rules */
  sectionType?: string;
}

const SIDEBAR_MAX = 3;

// ── Component ────────────────────────────────────────────────────────

export function GraphAwareSidebar({
  slug,
  type,
  maxItems = SIDEBAR_MAX,
  sectionType,
}: GraphAwareSidebarProps) {
  // If section behavior says no links, skip rendering
  const behavior = sectionType ? SECTION_BEHAVIOR[sectionType] : undefined;
  if (behavior && !behavior.allowLinks) return null;

  const related = getRelatedContent(slug, type);
  const labels = RELATED_SECTION_LABELS[type] ?? {};
  const journeyConfig = JOURNEY_CONFIG[type];

  // Collect sidebar items from first non-empty slot
  const slotKeys = Object.keys(labels) as (keyof RelatedContent)[];
  let sidebarItems: AuthorityMapItem[] = [];
  let sidebarTitle = 'Related';

  for (const key of slotKeys) {
    const items = related[key];
    if (items && items.length > 0) {
      sidebarItems = items.slice(0, maxItems);
      sidebarTitle = labels[key]?.title ?? 'Related';
      break;
    }
  }

  // Journey next step
  let journeyItem: AuthorityMapItem | null = null;
  if (journeyConfig && journeyConfig.slotPriority.length > 0) {
    for (const slotKey of journeyConfig.slotPriority) {
      const items = related[slotKey as keyof RelatedContent];
      if (items && items.length > 0) {
        journeyItem = items[0];
        break;
      }
    }
  }

  if (sidebarItems.length === 0 && !journeyItem) return null;

  return (
    <div className='graph-sidebar'>
      {sidebarItems.length > 0 && (
        <div className='graph-sidebar__section'>
          <h4 className='graph-sidebar__heading'>{sidebarTitle}</h4>
          <ul className='graph-sidebar__list'>
            {sidebarItems.map(item => (
              <li key={item.slug} className='graph-sidebar__item'>
                <a href={item.path} className='graph-sidebar__link'>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {journeyItem && journeyConfig && (
        <div className='graph-sidebar__journey'>
          <span className='graph-sidebar__journey-label'>{journeyConfig.label}</span>
          <p className='graph-sidebar__journey-title'>{journeyItem.title}</p>
          <Button variant='outline' size='sm' href={journeyItem.path} icon={ArrowRight}>
            Continue
          </Button>
        </div>
      )}
    </div>
  );
}

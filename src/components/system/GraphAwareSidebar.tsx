/**
 * GraphAwareSidebar
 *
 * Sidebar widget for blog/resource pages that shows:
 * 1. Related content from the same topic/system cluster
 *
 * No logic — consumes query API only.
 *
 * Data flow: slug + type → getRelatedContent() → pick top items → render list
 */

import { SECTION_BEHAVIOR } from '@/config/section-intelligence';
import { RELATED_SECTION_LABELS } from '@/config/ui-intelligence';
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

  if (sidebarItems.length === 0) return null;

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
    </div>
  );
}

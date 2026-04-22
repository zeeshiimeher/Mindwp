import { SECTION_BEHAVIOR } from '@/config/section-intelligence';

interface GraphAwareSidebarProps {
  title: string;
  items: Array<{
    slug: string;
    path: string;
    title: string;
  }>;
  /** Section type — controls behavior via section-intelligence rules */
  sectionType?: string;
}

export function GraphAwareSidebar({ title, items, sectionType }: GraphAwareSidebarProps) {
  const behavior = sectionType ? SECTION_BEHAVIOR[sectionType] : undefined;
  if (behavior && !behavior.allowLinks) return null;

  if (items.length === 0) return null;

  return (
    <div className='graph-sidebar'>
      <div className='graph-sidebar__section'>
        <h4 className='graph-sidebar__heading'>{title}</h4>
        <ul className='graph-sidebar__list'>
          {items.map(item => (
            <li key={item.slug} className='graph-sidebar__item'>
              <a href={item.path} className='graph-sidebar__link'>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

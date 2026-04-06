import { LucideIcon } from 'lucide-react';

const BLOCK = 'feature-list';

/**
 * IconListCard - Feature list card component
 *
 * Displays a list of features with an icon, title, and feature items.
 * Used for showcasing feature lists like "Voice AI / Receptionist", "Conversation AI", etc.
 * Each feature includes an icon, name, and description.
 *
 * @example
 * ```tsx
 * <IconListCard
 *   title="AI Features"
 *   icon={Bot}
 *   features={[
 *     { icon: MessageCircle, name: "Chat Support", detail: "24/7 automated responses" },
 *     { icon: Phone, name: "Voice Calls", detail: "Natural conversation handling" }
 *   ]}
 * />
 * ```
 */
export interface FeatureItem {
  icon: LucideIcon;
  name: string;
  detail: string;
}

interface IconListCardProps {
  title: string;
  icon: LucideIcon;
  features: FeatureItem[];
  color?: string; // Optional color theme (violet, purple, pink, etc.)
  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`feature-list`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function IconListCard({
  title,
  icon: Icon,
  features,
  color: _color = 'primary',
  cssPrefix = '',
}: IconListCardProps) {
  return (
    <div className={[BLOCK, cssPrefix].filter(Boolean).join(' ')}>
      <div className={`${BLOCK}__header`}>
        <div className={`${BLOCK}__icon-wrap`}>
          <Icon className={`${BLOCK}__icon`} />
        </div>
        <div>
          <h3 className={`${BLOCK}__heading`}>{title}</h3>
        </div>
      </div>

      <div className={`${BLOCK}__list`}>
        {features.map(feature => {
          const FeatureIcon = feature.icon;
          return (
            <div key={feature.name} className={`${BLOCK}__item`}>
              <FeatureIcon className={`${BLOCK}__item-icon`} />
              <div className={`${BLOCK}__content`}>
                <p className={`${BLOCK}__name`}>{feature.name}</p>
                <p className={`${BLOCK}__detail`}>{feature.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

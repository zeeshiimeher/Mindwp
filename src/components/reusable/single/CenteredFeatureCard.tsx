import React from 'react';

import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'centered-icon-card';

/**
 * CenteredFeatureCard - Service integration card with centered icon layout
 *
 * Displays a service or integration with a large centered icon at the top,
 * followed by title and description. Used for showcasing related services,
 * integrations, or complementary offerings in a clean, centered layout.
 *
 * @example
 * ```tsx
 * <CenteredFeatureCard
 *   icon={Layers}
 *   title="Smart Websites"
 *   description="A well-built website is the foundation for all SEO..."
 * />
 * ```
 */
interface CenteredFeatureCardProps {
  /** Lucide React icon component */
  icon: React.ComponentType<{ className?: string }>;

  /** Card title */
  title: string;

  /** Card description */
  description: string;

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`centered-icon-card`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function CenteredFeatureCard({
  icon: Icon,
  title,
  description,
  cssPrefix = '',
}: CenteredFeatureCardProps) {
  return (
    <Card className={cn(BLOCK, cssPrefix)}>
      <div className={`${BLOCK}__inner`}>
        <div className={`${BLOCK}__icon-wrap`}>
          <Icon className={cn(`${BLOCK}__icon`, 'icon-text-primary')} aria-hidden='true' />
        </div>
        <div className={`${BLOCK}__body`}>
          <h4 className={`${BLOCK}__title`}>{title}</h4>
          <p className={`${BLOCK}__description`}>{description}</p>
        </div>
      </div>
    </Card>
  );
}

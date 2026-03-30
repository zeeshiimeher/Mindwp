import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/reusable/single/Button';
import { cn } from '@/components/ui/utils';

const BLOCK = 'card-style-link';

/**
 * LinkCard - Link card component
 *
 * Displays a card with title, description, and optional link.
 * Used for related content, features, or navigation cards.
 */
export interface LinkCardProps {
  title: string;
  desc: string;
  href?: string; // Optional link
  showArrow?: boolean; // Show arrow icon (defaults to true)
  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`card-style-link`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function LinkCard({ title, desc, href, showArrow = true, cssPrefix = '' }: LinkCardProps) {
  const CardContent = (
    <div className={`${BLOCK}__inner`}>
      <div className={`${BLOCK}__body`}>
        <h3 id={`${BLOCK}-title`} className={`${BLOCK}__title`}>
          {title}
        </h3>
        <p className={`${BLOCK}__desc`}>{desc}</p>
      </div>
      {href && (
        <div className={`${BLOCK}__footer`}>
          <div className={`${BLOCK}__footer-row`}>
            <Button
              as='span'
              variant='link'
              label='Learn more'
              cssPrefix={`${BLOCK}__link`}
              showDefaultIcon={showArrow}
              {...(showArrow && { icon: ArrowRight })}
              iconClassName={`${BLOCK}__arrow`}
            />
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(BLOCK, `${BLOCK}--link`, cssPrefix)}
        aria-label={`Learn more about ${title}`}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className={cn(BLOCK, cssPrefix)} role='region' aria-labelledby={`${BLOCK}-title`}>
      {CardContent}
    </div>
  );
}

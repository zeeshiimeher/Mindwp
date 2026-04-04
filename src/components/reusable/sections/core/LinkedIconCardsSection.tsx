import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';
import { getVariantStyles } from '@/lib/ui/variantStyles';

const BLOCK = 'c-linked-icon-cards-section';

export interface LinkedIconCardItem {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
}

export interface LinkedIconCardsSectionProps {
  title?: string;
  description?: string;
  items: LinkedIconCardItem[];
  cssPrefix?: string;
}

export function LinkedIconCardsSection({
  title = 'Recommended Features',
  description,
  items,
  cssPrefix = '',
}: LinkedIconCardsSectionProps) {
  return (
    <SectionWrapper className={cn(BLOCK, cssPrefix)}>
      <div className={`${BLOCK}__head`}>
        <h2>{title}</h2>
        {description && <p className={`${BLOCK}__desc`}>{description}</p>}
      </div>

      <CardGrid columns={3} gap={6} mode='controlled'>
        {items.map((item, index) => (
          <Card key={index} className={`${BLOCK}__card`}>
            <div className={`${BLOCK}__content`}>
              {item.icon && (
                <div
                  className={cn(
                    `${BLOCK}__icon`,
                    'icon-container-md',
                    getVariantStyles('primary').icon.bg
                  )}
                >
                  <item.icon
                    className={cn(`${BLOCK}__icon-svg`, getVariantStyles('primary').icon.text)}
                  />
                </div>
              )}
              <h4>{item.title}</h4>
              <p className={`${BLOCK}__text`}>{item.description}</p>
              <Button
                href={item.href}
                variant='link'
                label='Learn more'
                icon={ArrowRight}
                showDefaultIcon
                cssPrefix={`${BLOCK}__link`}
                iconClassName={`${BLOCK}__arrow`}
              />
            </div>
          </Card>
        ))}
      </CardGrid>
    </SectionWrapper>
  );
}

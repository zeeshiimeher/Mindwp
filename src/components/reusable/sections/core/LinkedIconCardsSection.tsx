import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

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
    <section className={cn(BLOCK, 'l-section', cssPrefix)}>
      <div className='l-container'>
        <div className={`${BLOCK}__head`}>
          <h2>{title}</h2>
          {description && <p className={`${BLOCK}__desc`}>{description}</p>}
        </div>

        <div className={`${BLOCK}__grid`}>
          {items.map((item, index) => (
            <Card key={index} className={`${BLOCK}__card`}>
              <div className={`${BLOCK}__content`}>
                {item.icon && (
                  <div className={cn(`${BLOCK}__icon`, 'icon-container-md', 'icon-bg-primary')}>
                    <item.icon className={cn(`${BLOCK}__icon-svg`, 'icon-text-primary')} />
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
        </div>
      </div>
    </section>
  );
}

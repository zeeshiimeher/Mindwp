import { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';
import { getIconStyles } from '@/lib/ui/iconStyles';

const BLOCK = 'c-technology-cards-section';

interface TechnologyItem {
  name: string;
  description: string;
  icon: LucideIcon;

  iconFrom?: string;
  iconTo?: string;

  iconContainerClassName?: string;
  iconClassName?: string;
  cardClassName?: string;
}

interface TechnologiesSectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;

  badge?: string;
  title?: string;
  description?: string;
  technologies: TechnologyItem[];
  columns?: 2 | 3 | 4 | 6;
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  backgroundColor?: string;

  footer?: ReactNode;
}

export function TechnologyCardsSection({
  id,
  className,
  containerClassName,
  badge,
  title,
  description,
  technologies,
  columns = 3,
  cssPrefix = '',
  backgroundColor = '',
  footer,
}: TechnologiesSectionProps) {
  return (
    <section id={id} className={cn(BLOCK, 'l-section', backgroundColor, cssPrefix, className)}>
      <div className={cn(`${BLOCK}__container`, 'l-container', containerClassName)}>
        {(badge || title || description) && (
          <SectionIntro
            {...(badge !== undefined && { badge })}
            title={title || ''}
            {...(description !== undefined && { description })}
            className={`${BLOCK}__header`}
          />
        )}

        <div className={cn(`${BLOCK}__grid`, `${BLOCK}__grid--${columns}`)}>
          {technologies.map((tech, index) => {
            const TechIcon = tech.icon;

            return (
              <Card key={index} className={cn(`${BLOCK}__card`, tech.cardClassName)}>
                <div
                  className={cn(
                    `${BLOCK}__icon-container icon-container-md ${getIconStyles('primary').bg}`,
                    tech.iconFrom && tech.iconTo ? `${BLOCK}__icon-container--grad` : '',
                    tech.iconContainerClassName
                  )}
                >
                  <TechIcon
                    className={cn(`${BLOCK}__icon`, getIconStyles('primary').text, tech.iconClassName)}
                  />
                </div>

                <div className={`${BLOCK}__name`}>{tech.name}</div>
                <div className={`${BLOCK}__description`}>{tech.description}</div>
              </Card>
            );
          })}
        </div>

        {footer && <div className={`${BLOCK}__footer`}>{footer}</div>}
      </div>
    </section>
  );
}

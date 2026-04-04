import { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';
import { getVariantStyles } from '@/lib/ui/variantStyles';

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
    <SectionWrapper
      id={id}
      background={backgroundColor}
      container='none'
      className={cn(BLOCK, cssPrefix, className)}
    >
      <div className={cn('l-container', containerClassName)}>
        {(badge || title || description) && (
          <SectionIntro
            {...(badge !== undefined && { badge })}
            title={title || ''}
            {...(description !== undefined && { description })}
            className={`${BLOCK}__header`}
          />
        )}

        <CardGrid
          columns={1}
          gap={4}
          mode='controlled'
          className={cn(
            'l-grid-2',
            columns === 3 && 'md:l-grid-3',
            columns === 4 && 'md:l-grid-4',
            columns === 6 && 'lg:l-grid-6'
          )}
        >
          {technologies.map((tech, index) => {
            const TechIcon = tech.icon;

            return (
              <Card key={index} className={cn(`${BLOCK}__card`, tech.cardClassName)}>
                <div
                  className={cn(
                    `${BLOCK}__icon-container icon-container-md ${getVariantStyles('primary').icon.bg}`,
                    tech.iconFrom && tech.iconTo ? `${BLOCK}__icon-container--grad` : '',
                    tech.iconContainerClassName
                  )}
                >
                  <TechIcon
                    className={cn(
                      `${BLOCK}__icon`,
                      getVariantStyles('primary').icon.text,
                      tech.iconClassName
                    )}
                  />
                </div>

                <div className={`${BLOCK}__name`}>{tech.name}</div>
                <div className={`${BLOCK}__description`}>{tech.description}</div>
              </Card>
            );
          })}
        </CardGrid>

        {footer && <div className={`${BLOCK}__footer`}>{footer}</div>}
      </div>
    </SectionWrapper>
  );
}

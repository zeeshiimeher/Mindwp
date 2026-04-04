import type { ReactNode } from 'react';

import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import {
  IconBenefitCard,
  SectionIntro,
  type ServiceBenefitItem,
} from '@/components/reusable/single';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-icon-benefit-cards-section';

interface BenefitsSectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  badge?: string;
  title: string;
  description?: string;
  benefits: Array<
    ServiceBenefitItem & {
      href?: string;
      buttonText?: string;
      buttonVariant?: 'primary' | 'secondary';
    }
  >;
  columns?: 2 | 3 | 4;
  wrapper?: 'section' | 'none';
  backgroundColor?: string;
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  footer?: ReactNode;
}

export function IconBenefitCardsSection({
  id,
  className = '',
  containerClassName = '',
  badge,
  title,
  description,
  benefits,
  columns = 3,
  backgroundColor = '',
  cssPrefix = '',
  wrapper = 'section',
  footer,
}: BenefitsSectionProps) {
  return (
    <SectionWrapper
      as={wrapper === 'section' ? 'section' : 'div'}
      id={id}
      padding={wrapper === 'section' ? 'default' : 'none'}
      background={backgroundColor}
      className={cn(BLOCK, className, cssPrefix)}
      container='none'
    >
      <div className={cn('l-container', containerClassName)}>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />

        <CardGrid columns={columns} className={`${BLOCK}__grid ${BLOCK}__grid--cols-${columns}`}>
          {benefits.map((benefit, index) => (
            <IconBenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              iconType={benefit.iconType}
              {...(benefit.href !== undefined && { href: benefit.href })}
              {...(benefit.buttonText !== undefined && { buttonText: benefit.buttonText })}
              {...(benefit.buttonVariant !== undefined && { buttonVariant: benefit.buttonVariant })}
            />
          ))}
        </CardGrid>

        {footer && <div className={`${BLOCK}__footer`}>{footer}</div>}
      </div>
    </SectionWrapper>
  );
}

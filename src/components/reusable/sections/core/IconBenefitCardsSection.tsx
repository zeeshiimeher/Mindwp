import type { ReactNode } from 'react';

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
  const Wrapper = wrapper === 'section' ? 'section' : 'div';

  const wrapperClasses = cn(
    BLOCK,
    wrapper === 'section' && 'l-section',
    backgroundColor,
    className,
    cssPrefix
  );

  const gridColumnsClass =
    columns === 2
      ? `${BLOCK}__grid ${BLOCK}__grid--cols-2`
      : columns === 4
        ? `${BLOCK}__grid ${BLOCK}__grid--cols-4`
        : `${BLOCK}__grid ${BLOCK}__grid--cols-3`;

  return (
    <Wrapper {...(id !== undefined && { id })} className={wrapperClasses}>
      <div className={`l-container ${containerClassName}`.trim()}>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />

        <div className={gridColumnsClass}>
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
        </div>

        {footer && <div className={`${BLOCK}__footer`}>{footer}</div>}
      </div>
    </Wrapper>
  );
}

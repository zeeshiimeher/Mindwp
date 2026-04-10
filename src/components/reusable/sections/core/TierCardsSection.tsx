import { Check } from 'lucide-react';

import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import { Badge } from '@/components/reusable/single/Badge';
import { Card } from '@/components/reusable/single/Card';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { SmartCTA, type SmartCTAProps } from '@/components/system/SmartCTA';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-tier-cards-section';

export interface PackageItem {
  name: string;
  description: string;
  price: string;
  priceDetail?: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  buttonHref?: string;
  ctaVariant?: string;
}

export interface TierCardsSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  packages: PackageItem[];
  smartCta: Pick<SmartCTAProps, 'system' | 'pageType' | 'slug'>;
  cssPrefix?: string;
  backgroundColor?: string;
}

function resolvePrimaryActionVariant(
  variant: string | undefined,
  popular: boolean | undefined
): SmartCTAProps['primaryActionVariant'] {
  if (
    variant === 'primary' ||
    variant === 'outline' ||
    variant === 'outline-light' ||
    variant === 'secondary' ||
    variant === 'white' ||
    variant === 'link'
  ) {
    return variant;
  }

  return popular ? 'primary' : 'outline';
}

export function TierCardsSection({
  badge,
  title,
  description,
  packages,
  smartCta,
  cssPrefix = '',
  backgroundColor = '',
}: TierCardsSectionProps) {
  if (!smartCta) {
    throw new Error('TierCardsSection requires smartCta for CTA rendering.');
  }

  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      {(badge || title || description) && (
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title || ''}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />
      )}

      <CardGrid columns={3} gap={8} mode='controlled'>
        {packages.map((pkg, index) => (
          <Card
            key={index}
            className={cn(`${BLOCK}__card`, pkg.popular && `${BLOCK}__card--popular`)}
          >
            {pkg.popular && (
              <div className={`${BLOCK}__popular-badge`}>
                <Badge variant='primary' size='sm' context='meta'>
                  Most Popular
                </Badge>
              </div>
            )}

            <div className={`${BLOCK}__content l-stack l-stack--loose`}>
              <div>
                <h3 className={`${BLOCK}__name`}>{pkg.name}</h3>
                <p className={`${BLOCK}__desc`}>{pkg.description}</p>
              </div>

              <div className={`${BLOCK}__price`}>
                <span className={`${BLOCK}__price-value`}>{pkg.price}</span>
                {pkg.priceDetail && (
                  <div className={`${BLOCK}__price-detail`}>{pkg.priceDetail}</div>
                )}
              </div>

              <ul className={`${BLOCK}__features l-stack`}>
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`${BLOCK}__feature`}>
                    <Check className={`${BLOCK}__check`} />
                    <span className={`${BLOCK}__feature-text`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <SmartCTA
                system={smartCta.system}
                pageType={smartCta.pageType}
                slug={smartCta.slug}
                mode='actions-only'
                primaryActionVariant={resolvePrimaryActionVariant(pkg.ctaVariant, pkg.popular)}
                primaryButtonCssPrefix='btn-block'
              />
            </div>
          </Card>
        ))}
      </CardGrid>
    </SectionWrapper>
  );
}

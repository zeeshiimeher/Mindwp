import { Check } from 'lucide-react';

import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import { Badge } from '@/components/reusable/single/Badge';
import { Button, type ButtonProps } from '@/components/reusable/single/Button';
import { Card } from '@/components/reusable/single/Card';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { cn } from '@/components/ui/utils';
import { buildContactHref } from '@/lib/contact/contactHref';
import { getPrimaryCTA } from '@/lib/cta/primaryAction';
import { type PageType, toContactSourceType } from '@/lib/page/pageIdentity';

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
  heroActions?: {
    system: string;
    pageType: PageType;
    slug: string;
  };
  cssPrefix?: string;
  backgroundColor?: string;
}

function buildPackageHref(
  heroActions: NonNullable<TierCardsSectionProps['heroActions']>,
  pkg: PackageItem
) {
  if (pkg.buttonHref) {
    return pkg.buttonHref;
  }

  return buildContactHref({
    system: heroActions.system,
    sourceType: toContactSourceType(heroActions.pageType),
    slug: heroActions.slug,
  });
}

function buildPackageLabel(pkg: PackageItem) {
  if (pkg.buttonHref) {
    return pkg.buttonText?.trim() || 'View Package';
  }

  return getPrimaryCTA();
}

function resolvePrimaryActionVariant(
  variant: string | undefined,
  popular: boolean | undefined
): ButtonProps['variant'] {
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
  heroActions,
  cssPrefix = '',
  backgroundColor = '',
}: TierCardsSectionProps) {
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
        {packages.map(pkg => (
          <Card
            key={pkg.name}
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
                {pkg.features.map(feature => (
                  <li key={feature} className={`${BLOCK}__feature`}>
                    <Check className={`${BLOCK}__check`} />
                    <span className={`${BLOCK}__feature-text`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {heroActions ? (
                <Button
                  href={buildPackageHref(heroActions, pkg)}
                  variant={resolvePrimaryActionVariant(pkg.ctaVariant, pkg.popular)}
                  label={buildPackageLabel(pkg)}
                  cssPrefix='btn-block'
                />
              ) : null}
            </div>
          </Card>
        ))}
      </CardGrid>
    </SectionWrapper>
  );
}

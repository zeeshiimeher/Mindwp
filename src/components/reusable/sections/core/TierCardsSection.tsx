import { ArrowRight, Check } from 'lucide-react';

import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/reusable/single/Card';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
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
}

export interface TierCardsSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  packages: PackageItem[];
  cssPrefix?: string;
  backgroundColor?: string;
}

export function TierCardsSection({
  badge,
  title,
  description,
  packages,
  cssPrefix = '',
  backgroundColor = '',
}: TierCardsSectionProps) {
  return (
    <section className={cn(BLOCK, 'l-section', backgroundColor, cssPrefix)}>
      <div className='l-container'>
        {(badge || title || description) && (
          <SectionIntro
            {...(badge !== undefined && { badge })}
            title={title || ''}
            {...(description !== undefined && { description })}
            className={`${BLOCK}__header`}
          />
        )}

        <div className={`${BLOCK}__grid`}>
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={cn(`${BLOCK}__card`, pkg.popular && `${BLOCK}__card--popular`)}
            >
              {pkg.popular && (
                <div className={`${BLOCK}__popular-badge`}>
                  <Badge variant='primary' size='sm' cssPrefix='badge--meta'>
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

                <Button
                  href={pkg.buttonHref || '/contact'}
                  variant={pkg.popular ? 'primary' : 'outline'}
                  label={pkg.buttonText || 'Request Details'}
                  showDefaultIcon={pkg.popular}
                  {...(pkg.popular && { icon: ArrowRight })}
                  cssPrefix='btn-block'
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

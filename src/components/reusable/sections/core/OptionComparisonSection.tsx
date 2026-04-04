import { Check } from 'lucide-react';

import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-option-comparison-section';

interface PlatformFeature {
  title: string;
  description: string;
  features: string[];
}

interface PlatformComparisonSectionProps {
  title?: string;
  platforms: PlatformFeature[];
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  /** Background variant or additive class string (prefer variants). */
  backgroundColor?: string;
}

export function OptionComparisonSection({
  title,
  platforms,
  cssPrefix = '',
  backgroundColor = '',
}: PlatformComparisonSectionProps) {
  return (
    <SectionWrapper container='none' background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <div className={`${BLOCK}__container l-container`}>
        {title && (
          <div className={`${BLOCK}__header`}>
            <h2 className={`${BLOCK}__heading`}>{title}</h2>
          </div>
        )}
        <CardGrid columns={2} gap={6} mode='controlled' className={`${BLOCK}__grid`}>
          {platforms.map((platform, index) => (
            <Card key={index} className={`${BLOCK}__card`}>
              <h3 className={`${BLOCK}__title`}>{platform.title}</h3>
              <p className={`${BLOCK}__description`}>{platform.description}</p>
              <ul className={`${BLOCK}__features`}>
                {platform.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`${BLOCK}__feature`}>
                    <Check className={`${BLOCK}__check`} aria-hidden='true' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </CardGrid>
      </div>
    </SectionWrapper>
  );
}

import React from 'react';
import { ShieldCheck } from 'lucide-react';

import { SectionWrapper, SplitLayout } from '@/components/reusable/primitives';
import { Button, type ButtonProps, SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-stacked-feature-list-section';

interface StackedFeatureItem {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface StackedFeatureListSectionProps {
  badge?: string;
  title: string;
  description?: string;
  features: StackedFeatureItem[];
  tagline?: string;
  narrativeTitle: string;
  narrativeParagraphs: string[];
  primaryAction?: ButtonProps;
  secondaryAction?: ButtonProps;
  variant?: 'icon' | 'media';
  backgroundColor?: string;
  cssPrefix?: string;
}

export function StackedFeatureListSection({
  badge,
  title,
  description,
  features,
  tagline,
  narrativeTitle,
  narrativeParagraphs,
  primaryAction,
  secondaryAction,
  variant = 'icon',
  backgroundColor = '',
  cssPrefix = '',
}: StackedFeatureListSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <SplitLayout breakpoint='lg' gap={8} align='center' className={`${BLOCK}__layout`}>
        <div className={`${BLOCK}__features`}>
          {features.map((feature, index) => (
            <Card
              key={`${feature.title}-${index}`}
              className={cn(`${BLOCK}__feature`, `${BLOCK}__feature--offset-${(index % 3) + 1}`)}
            >
              {variant === 'media' ? (
                <div className={`${BLOCK}__feature-media`} aria-hidden='true' />
              ) : (
                <div className={`${BLOCK}__feature-icon-wrap`} aria-hidden='true'>
                  {React.createElement(feature.icon || ShieldCheck, {
                    className: `${BLOCK}__feature-icon`,
                  })}
                </div>
              )}
              <div className={`${BLOCK}__feature-copy`}>
                <h3 className={`${BLOCK}__feature-title`}>{feature.title}</h3>
                <p className={`${BLOCK}__feature-description`}>{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className={`${BLOCK}__content`}>
          {tagline && <p className={`${BLOCK}__tagline`}>{tagline}</p>}
          <h3 className={`${BLOCK}__narrative-title`}>{narrativeTitle}</h3>
          <div className={`${BLOCK}__narrative`}>
            {narrativeParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {(primaryAction || secondaryAction) && (
            <div className={`${BLOCK}__actions`}>
              {primaryAction && <Button variant='primary' {...primaryAction} />}
              {secondaryAction && <Button variant='link' {...secondaryAction} />}
            </div>
          )}
        </div>
      </SplitLayout>
    </SectionWrapper>
  );
}

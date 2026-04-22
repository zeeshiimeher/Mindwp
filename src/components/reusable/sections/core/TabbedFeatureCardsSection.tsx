import React from 'react';
import Image from 'next/image';
import { FileText } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-tabbed-feature-cards-section';

interface TabbedFeatureCardItem {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface TabbedImageGridItem {
  src: string;
  alt: string;
}

export interface TabbedFeatureCardsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  tabs: string[];
  activeTab?: string;
  cards: TabbedFeatureCardItem[];
  imageGrid?: TabbedImageGridItem[];
  showImageGrid?: boolean;
  backgroundColor?: string;
  cssPrefix?: string;
}

export function TabbedFeatureCardsSection({
  badge,
  title,
  description,
  tabs,
  activeTab,
  cards,
  imageGrid,
  showImageGrid = false,
  backgroundColor = '',
  cssPrefix = '',
}: TabbedFeatureCardsSectionProps) {
  if (tabs.length === 0) {
    throw new Error('TabbedFeatureCardsSection requires at least one tab.');
  }

  if (tabs.some(tab => tab.trim().length === 0)) {
    throw new Error('TabbedFeatureCardsSection tabs must be non-empty strings.');
  }

  if (cards.length === 0) {
    throw new Error('TabbedFeatureCardsSection requires at least one card.');
  }

  if (activeTab && !tabs.includes(activeTab)) {
    throw new Error('TabbedFeatureCardsSection activeTab must match one of the provided tabs.');
  }

  const selectedTab = activeTab ?? tabs[0] ?? '';
  const tabGroupName = `${BLOCK}-tabs-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <div className={`${BLOCK}__tabs`} role='tablist' aria-label='Feature groups'>
        {tabs.map((tab, index) => {
          const tabId = `${tabGroupName}-${index}`;

          return (
            <React.Fragment key={tabId}>
              <input
                id={tabId}
                type='radio'
                name={tabGroupName}
                className={`${BLOCK}__tab-input`}
                defaultChecked={selectedTab === tab}
              />
              <label htmlFor={tabId} className={`${BLOCK}__tab`}>
                {tab}
              </label>
            </React.Fragment>
          );
        })}
      </div>

      {showImageGrid && imageGrid && imageGrid.length > 0 && (
        <div className={`${BLOCK}__image-grid`}>
          {imageGrid.map((item, index) => (
            <Card key={`${item.src}-${index}`} className={`${BLOCK}__image-item`}>
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={176}
                className={`${BLOCK}__image`}
              />
            </Card>
          ))}
        </div>
      )}

      <div className={`${BLOCK}__cards`}>
        {cards.map((card, index) => (
          <Card key={`${card.title}-${index}`} className={`${BLOCK}__card`}>
            <div className={`${BLOCK}__card-icon-wrap`} aria-hidden='true'>
              {React.createElement(card.icon || FileText, {
                className: `${BLOCK}__card-icon`,
              })}
            </div>
            <h3 className={`${BLOCK}__card-title`}>{card.title}</h3>
            <p className={`${BLOCK}__card-description`}>{card.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

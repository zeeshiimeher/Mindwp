import React from 'react';

import {
  FAQSection as RichFAQSection,
  type FAQSectionProps as RichFAQSectionProps,
} from '@/components/reusable/single/FAQSection';

export interface ResourceFAQItem {
  question: string;
  answer: string;
}

export interface ResourceFAQSectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: ResourceFAQItem[];
  className?: string;

  // Pass-through customization to the rich FAQ component
  backgroundColor?: RichFAQSectionProps['backgroundColor'];
  displayMode?: RichFAQSectionProps['displayMode'];
  showIcon?: RichFAQSectionProps['showIcon'];
  icon?: RichFAQSectionProps['icon'];
  allowMultiple?: RichFAQSectionProps['allowMultiple'];
  variant?: RichFAQSectionProps['variant'];
}

export function ResourceFAQSection({
  badge,
  title,
  subtitle,
  items,
  className = '',
  backgroundColor = 'bg-background',
  displayMode = 'accordion',
  showIcon = true,
  icon,
  allowMultiple = false,
  variant = 'default',
}: ResourceFAQSectionProps) {
  return (
    <div className={className}>
      <RichFAQSection
        {...(badge !== undefined && { badge })}
        title={title}
        {...(subtitle !== undefined && { description: subtitle })}
        faqs={items}
        cssPrefix='resource-faq'
        backgroundColor={backgroundColor}
        displayMode={displayMode}
        showIcon={showIcon}
        {...(icon !== undefined && { icon })}
        allowMultiple={allowMultiple}
        variant={variant}
      />
    </div>
  );
}

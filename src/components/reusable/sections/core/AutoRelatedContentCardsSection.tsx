'use client';

import { useEffect, useState } from 'react';

import type { RelatedCardsSectionProps } from '@/components/reusable/sections/core/RelatedCardsSection';
import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';

type AutoRelatedContentCardsSectionProps = Omit<
  RelatedCardsSectionProps,
  'styleVariant' | 'sessionResolvedVariant'
> & {
  sessionVariantKey?: string;
};

export function AutoRelatedContentCardsSection({
  sessionVariantKey = 'mindwp_related_cards_style',
  ...props
}: AutoRelatedContentCardsSectionProps) {
  const [variant, setVariant] = useState<'default' | 'style1'>('default');

  useEffect(() => {
    const stored = window.sessionStorage.getItem(sessionVariantKey);
    if (stored === 'default' || stored === 'style1') {
      setVariant(stored);
      return;
    }

    const selected = Math.random() < 0.5 ? 'default' : 'style1';
    window.sessionStorage.setItem(sessionVariantKey, selected);
    setVariant(selected);
  }, [sessionVariantKey]);

  return (
    <RelatedCardsSection {...props} styleVariant='session-auto' sessionResolvedVariant={variant} />
  );
}

import type { ComponentProps } from 'react';

import { ExploreCardsSection } from '@/components/reusable/sections/core/ExploreCardsSection';

export type IndustryExploreSectionProps = ComponentProps<typeof ExploreCardsSection>;

export function IndustryExploreSection(props: IndustryExploreSectionProps) {
  const desktopCards: typeof props.cards = [];
  const mobileCards: typeof props.cards = [];

  for (let index = 0; index < props.cards.length; index += 1) {
    const card = props.cards[index];
    if (index < 4) {
      desktopCards.push(card);
    }
    if (index < 2) {
      mobileCards.push(card);
    }
  }

  return (
    <>
      <div className='sm:hidden'>
        <ExploreCardsSection {...props} cards={mobileCards} columns={1} />
      </div>
      <div className='hidden sm:block'>
        <ExploreCardsSection {...props} cards={desktopCards} columns={2} />
      </div>
    </>
  );
}

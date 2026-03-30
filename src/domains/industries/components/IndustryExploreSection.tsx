import type { ComponentProps } from 'react';

import { ExploreCardsSection } from '@/components/reusable/sections/core/ExploreCardsSection';

export type IndustryExploreSectionProps = ComponentProps<typeof ExploreCardsSection>;

export function IndustryExploreSection(props: IndustryExploreSectionProps) {
  const desktopCards = props.cards.slice(0, 4);
  const mobileCards = desktopCards.slice(0, 2);

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

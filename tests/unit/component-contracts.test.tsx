import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TierCardsSection } from '@/components/reusable/sections/core/TierCardsSection';
import { TabbedFeatureCardsSection } from '@/components/reusable/sections/core/TabbedFeatureCardsSection';
import { Button } from '@/components/reusable/single/Button';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';

describe('unit: reusable component contracts', () => {
  test('Button rejects empty content and conflicting interaction props', () => {
    expect(() => render(<Button />)).toThrow('Button requires non-empty content');

    expect(() => render(<Button label='Contact' href='/contact' onClick={() => undefined} />)).toThrow(
      'Button cannot receive both href and onClick'
    );

    expect(() =>
      render(
        <Button href='/contact' label='Contact'>
          Duplicate
        </Button>
      )
    ).toThrow('Button accepts only one content source');
  });

  test('Button renders valid link-style actions', () => {
    render(<Button href='/contact' label='Contact' />);

    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
  });

  test('TierCardsSection resolves contact CTA labels from the shared config', () => {
    render(
      <TierCardsSection
        packages={[
          {
            name: 'Growth',
            description: 'Structured conversion support.',
            price: 'From PS500',
            features: ['Lead capture'],
            buttonText: 'Book Strategy Call',
          },
          {
            name: 'Explore',
            description: 'View supporting detail.',
            price: 'Included',
            features: ['Feature overview'],
            buttonText: 'View Package',
            buttonHref: '/services',
          },
        ]}
        smartCta={{
          system: 'smart-website-systems',
          pageType: 'service',
          slug: 'smart-website-systems',
        }}
      />
    );

    expect(screen.getByRole('link', { name: 'Start Conversation' })).toHaveAttribute(
      'href',
      '/contact?system=smart-website-systems&source=service%2Fsmart-website-systems'
    );
    expect(screen.getByRole('link', { name: 'View Package' })).toHaveAttribute('href', '/services');
  });

  test('SectionIntro rejects empty titles', () => {
    expect(() => render(<SectionIntro title='   ' />)).toThrow('SectionIntro requires a non-empty title');
  });

  test('TabbedFeatureCardsSection validates tabs and cards', () => {
    expect(() =>
      render(
        <TabbedFeatureCardsSection
          title='Feature groups'
          tabs={[]}
          cards={[{ title: 'Lead capture', description: 'Captures demand.' }]}
        />
      )
    ).toThrow('TabbedFeatureCardsSection requires at least one tab');

    expect(() =>
      render(
        <TabbedFeatureCardsSection
          title='Feature groups'
          tabs={['Inbound']}
          activeTab='Outbound'
          cards={[{ title: 'Lead capture', description: 'Captures demand.' }]}
        />
      )
    ).toThrow('TabbedFeatureCardsSection activeTab must match');

    render(
      <TabbedFeatureCardsSection
        title='Feature groups'
        tabs={['Inbound', 'Follow-up']}
        activeTab='Inbound'
        cards={[{ title: 'Lead capture', description: 'Captures demand.' }]}
      />
    );

    expect(screen.getByRole('tablist', { name: 'Feature groups' })).toBeInTheDocument();
    expect(screen.getByText('Lead capture')).toBeInTheDocument();
  });
});
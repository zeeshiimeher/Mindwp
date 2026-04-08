import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TabbedFeatureCardsSection } from '@/components/reusable/sections/core/TabbedFeatureCardsSection';
import { Button } from '@/components/reusable/single/Button';
import { CTASection } from '@/components/reusable/single/CTASection';
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

  test('CTASection requires an actionable control', () => {
    expect(() => render(<CTASection title='Book now' description='No action' />)).toThrow(
      'CTASection requires at least one actionable'
    );

    render(
      <CTASection
        title='Book now'
        description='Schedule a system review.'
        primaryAction={{ label: 'Start a Conversation', href: '/contact?system=smart-website-systems&source=page/home' }}
      />
    );

    expect(screen.getByRole('link', { name: 'Start a Conversation' })).toBeInTheDocument();
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
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TierCardsSection } from '@/components/reusable/sections/core/TierCardsSection';
import { TabbedFeatureCardsSection } from '@/components/reusable/sections/core/TabbedFeatureCardsSection';
import { Button } from '@/components/reusable/single/Button';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import {
  AuthoritySignalMapSection,
  CriteriaComparisonSection,
  JourneyLeakMapSection,
  ServiceBridgeSection,
} from '@/components/sections';

describe('unit: reusable component contracts', () => {
  test('Button rejects empty content and conflicting interaction props', () => {
    expect(() => render(<Button />)).toThrow('Button requires non-empty content');

    expect(() =>
      render(<Button label='Contact' href='/contact' onClick={() => undefined} />)
    ).toThrow('Button cannot receive both href and onClick');

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
        heroActions={{
          system: 'smart-website-systems',
          pageType: 'service',
          slug: 'smart-website-systems',
        }}
      />
    );

    expect(screen.getByRole('link', { name: 'Start a Conversation' })).toHaveAttribute(
      'href',
      '/contact?system=smart-website-systems&source=service%2Fsmart-website-systems'
    );
    expect(screen.getByRole('link', { name: 'View Package' })).toHaveAttribute('href', '/services');
  });

  test('SectionIntro rejects empty titles', () => {
    expect(() => render(<SectionIntro title='   ' />)).toThrow(
      'SectionIntro requires a non-empty title'
    );
  });

  test('SectionIntro rejects empty descriptions when authored', () => {
    expect(() => render(<SectionIntro title='Section title' description='   ' />)).toThrow(
      'SectionIntro requires a non-empty description'
    );
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

// ─── Phase 1 component contract tests ────────────────────────────────────────

const VALID_HEADING = {
  title: 'Test heading',
  description: 'Test description for the section.',
};

describe('unit: JourneyLeakMapSection contracts', () => {
  const validStages = [
    {
      id: 'a',
      label: 'Stage A',
      title: 'Title A',
      leak: 'Leak detail A',
      impact: 'Impact A',
    },
    {
      id: 'b',
      label: 'Stage B',
      title: 'Title B',
      leak: 'Leak detail B',
      impact: 'Impact B',
    },
    {
      id: 'c',
      label: 'Stage C',
      title: 'Title C',
      leak: 'Leak detail C',
      impact: 'Impact C',
    },
  ];

  test('throws when fewer than 3 stages provided', () => {
    expect(() =>
      render(
        <JourneyLeakMapSection
          heading={VALID_HEADING}
          stages={validStages.slice(0, 2)}
        />
      )
    ).toThrow('[JourneyLeakMapSection] Invalid data: 3–5 stages required');
  });

  test('throws when more than 5 stages provided', () => {
    const sixStages = [
      ...validStages,
      { id: 'd', label: 'D', title: 'D', leak: 'D', impact: 'D' },
      { id: 'e', label: 'E', title: 'E', leak: 'E', impact: 'E' },
      { id: 'f', label: 'F', title: 'F', leak: 'F', impact: 'F' },
    ];
    expect(() =>
      render(<JourneyLeakMapSection heading={VALID_HEADING} stages={sixStages} />)
    ).toThrow('[JourneyLeakMapSection] Invalid data: 3–5 stages required');
  });

  test('renders valid stages', () => {
    render(<JourneyLeakMapSection heading={VALID_HEADING} stages={validStages} />);
    expect(screen.getByText('Title A')).toBeInTheDocument();
    expect(screen.getByText('Leak detail A')).toBeInTheDocument();
  });
});

describe('unit: ServiceBridgeSection contracts', () => {
  const validBridges = [
    { id: 'a', from: 'System A', to: 'System B', handoff: 'Data passed', boundary: 'A owns X' },
    { id: 'b', from: 'System B', to: 'System C', handoff: 'Result forwarded', boundary: 'B owns Y' },
  ];

  test('throws when fewer than 2 bridges provided', () => {
    expect(() =>
      render(
        <ServiceBridgeSection heading={VALID_HEADING} bridges={[validBridges[0]]} />
      )
    ).toThrow('[ServiceBridgeSection] Invalid data: 2–4 bridges required');
  });

  test('throws when more than 4 bridges provided', () => {
    const fiveBridges = [
      ...validBridges,
      { id: 'c', from: 'C', to: 'D', handoff: 'H', boundary: 'B' },
      { id: 'd', from: 'D', to: 'E', handoff: 'H', boundary: 'B' },
      { id: 'e', from: 'E', to: 'F', handoff: 'H', boundary: 'B' },
    ];
    expect(() =>
      render(<ServiceBridgeSection heading={VALID_HEADING} bridges={fiveBridges} />)
    ).toThrow('[ServiceBridgeSection] Invalid data: 2–4 bridges required');
  });

  test('renders valid bridges with from/to flow', () => {
    render(<ServiceBridgeSection heading={VALID_HEADING} bridges={validBridges} />);
    expect(screen.getByText('System A')).toBeInTheDocument();
    expect(screen.getAllByText('System B').length).toBeGreaterThan(0);
    expect(screen.getByText('Data passed')).toBeInTheDocument();
  });
});

describe('unit: CriteriaComparisonSection contracts', () => {
  const validRow = (id: string) => ({
    id,
    label: `Criterion ${id}`,
    currentApproach: `Current approach ${id}`,
    systemApproach: `System approach ${id}`,
    decisionSignal: `Why it matters ${id}`,
  });

  test('throws when fewer than 3 criteria provided', () => {
    expect(() =>
      render(
        <CriteriaComparisonSection
          heading={VALID_HEADING}
          criteria={[validRow('a'), validRow('b')]}
        />
      )
    ).toThrow('[CriteriaComparisonSection] Invalid data: 3–6 criteria rows required');
  });

  test('throws when more than 6 criteria provided', () => {
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g'].map(validRow);
    expect(() =>
      render(<CriteriaComparisonSection heading={VALID_HEADING} criteria={rows} />)
    ).toThrow('[CriteriaComparisonSection] Invalid data: 3–6 criteria rows required');
  });

  test('renders valid criteria rows', () => {
    render(
      <CriteriaComparisonSection
        heading={VALID_HEADING}
        criteria={['a', 'b', 'c'].map(validRow)}
        leftLabel='Old way'
        rightLabel='New way'
      />
    );
    expect(screen.getByText('Criterion a')).toBeInTheDocument();
    expect(screen.getByText('Old way')).toBeInTheDocument();
    expect(screen.getByText('New way')).toBeInTheDocument();
  });
});

describe('unit: AuthoritySignalMapSection contracts', () => {
  const validFamily = (id: string) => ({
    id,
    title: `Family ${id}`,
    signals: [
      { id: `${id}-1`, label: 'Signal one', state: 'strong' as const },
      { id: `${id}-2`, label: 'Signal two', state: 'missing' as const },
    ],
  });

  test('throws when fewer than 2 families provided', () => {
    expect(() =>
      render(
        <AuthoritySignalMapSection heading={VALID_HEADING} families={[validFamily('a')]} />
      )
    ).toThrow('[AuthoritySignalMapSection] Invalid data: 2–4 families required');
  });

  test('throws when more than 4 families provided', () => {
    const families = ['a', 'b', 'c', 'd', 'e'].map(validFamily);
    expect(() =>
      render(<AuthoritySignalMapSection heading={VALID_HEADING} families={families} />)
    ).toThrow('[AuthoritySignalMapSection] Invalid data: 2–4 families required');
  });

  test('throws when a family has only 1 signal', () => {
    const badFamily = {
      id: 'bad',
      title: 'Bad family',
      signals: [{ id: 'x', label: 'Only signal', state: 'strong' as const }],
    };
    expect(() =>
      render(
        <AuthoritySignalMapSection
          heading={VALID_HEADING}
          families={[badFamily, validFamily('b')]}
        />
      )
    ).toThrow('[AuthoritySignalMapSection] Invalid data: family "bad" must have 2–4 signals');
  });

  test('renders signal families and state badges', () => {
    render(
      <AuthoritySignalMapSection
        heading={VALID_HEADING}
        families={[validFamily('a'), validFamily('b')]}
      />
    );
    expect(screen.getByText('Family a')).toBeInTheDocument();
    expect(screen.getAllByText('Strong').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Missing').length).toBeGreaterThan(0);
  });
});

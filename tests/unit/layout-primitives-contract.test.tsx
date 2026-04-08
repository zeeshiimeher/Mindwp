import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { CardGrid } from '@/components/reusable/primitives/CardGrid';
import { SplitLayout } from '@/components/reusable/primitives/SplitLayout';

describe('unit: layout primitive contracts', () => {
  test('CardGrid rejects empty children', () => {
    expect(() =>
      render(
        <CardGrid>
          {null}
        </CardGrid>
      )
    ).toThrow('CardGrid requires at least one child');
  });

  test('CardGrid renders when content exists', () => {
    render(
      <CardGrid columns={2}>
        <div>Card one</div>
        <div>Card two</div>
      </CardGrid>
    );

    expect(screen.getByText('Card one')).toBeInTheDocument();
    expect(screen.getByText('Card two')).toBeInTheDocument();
  });

  test('SplitLayout requires exactly two children', () => {
    expect(() =>
      render(
        <SplitLayout>
          <div>Only one</div>
        </SplitLayout>
      )
    ).toThrow('SplitLayout requires exactly 2 children');

    render(
      <SplitLayout>
        <div>Left pane</div>
        <div>Right pane</div>
      </SplitLayout>
    );

    expect(screen.getByText('Left pane')).toBeInTheDocument();
    expect(screen.getByText('Right pane')).toBeInTheDocument();
  });
});
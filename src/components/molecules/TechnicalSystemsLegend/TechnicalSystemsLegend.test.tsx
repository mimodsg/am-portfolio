import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { technicalSystemNodes } from '@/data/technicalSystems';

import { TechnicalSystemsLegend } from './TechnicalSystemsLegend';

describe('TechnicalSystemsLegend', () => {
  it('renders node cluster, label, and summary', () => {
    const node = technicalSystemNodes.find((item) => item.id === 'react');

    if (!node) {
      throw new Error('Expected React technical system node to exist.');
    }

    render(<TechnicalSystemsLegend node={node} />);
    expect(screen.getByText(node.cluster)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: node.label })).toBeInTheDocument();
    expect(screen.getByText(node.summary)).toBeInTheDocument();
  });
});

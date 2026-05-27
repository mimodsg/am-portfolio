import { render, screen } from '@testing-library/react';

import { HorizontalBarGraph } from './HorizontalBarGraph';
import { getVioletStep } from './horizontalBarGraphUtils';

describe('HorizontalBarGraph', () => {
  it('renders label, progressbar, and percentage', () => {
    render(<HorizontalBarGraph label="React" percentage={56} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('56%')).toBeInTheDocument();
    expect(screen.getByRole('progressbar', { name: 'React' }))
      .toHaveAttribute('aria-valuenow', '56');
  });

  it('rounds percentage-derived violet color to the nearest 100 step', () => {
    expect(getVioletStep(56)).toBe(400);
    expect(getVioletStep(63)).toBe(500);
  });

  it('clamps displayed percentages and color steps', () => {
    const { rerender } = render(
      <HorizontalBarGraph label="Low" percentage={-10} />,
    );

    expect(screen.getByText('0%')).toBeInTheDocument();
    expect(screen.getByRole('progressbar', { name: 'Low' }))
      .toHaveAttribute('aria-valuenow', '0');
    expect(getVioletStep(-10)).toBe(100);

    rerender(<HorizontalBarGraph label="High" percentage={120} />);

    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByRole('progressbar', { name: 'High' }))
      .toHaveAttribute('aria-valuenow', '100');
    expect(getVioletStep(120)).toBe(800);
  });
});

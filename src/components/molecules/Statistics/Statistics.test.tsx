import { render, screen, within } from '@testing-library/react';

import { Statistics } from './Statistics';

const statistics = [
  { label: 'Frontend', percentage: 92 },
  { label: 'Backend', percentage: 76 },
  { label: 'Platform', percentage: 64 },
];

describe('Statistics', () => {
  it('renders a bar graph for each statistic', () => {
    render(<Statistics items={statistics} />);

    statistics.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(`${item.percentage}%`)).toBeInTheDocument();
      expect(screen.getByRole('progressbar', { name: item.label }))
        .toHaveAttribute('aria-valuenow', String(item.percentage));
    });
  });

  it('separates each item except the last one', () => {
    const { container } = render(<Statistics items={statistics} />);
    const items = container.querySelectorAll('.statistics__item');

    expect(items).toHaveLength(3);
    expect(items[0]).toHaveClass('statistics__item');
    expect(within(items[2] as HTMLElement).getByText('Platform'))
      .toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';

import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders the primary page heading', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /senior engineering for structured frontend systems/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders work and contact links with meaningful names', () => {
    render(<HomePage />);

    expect(screen.getByRole('link', { name: 'View work' })).toHaveAttribute(
      'href',
      '#work',
    );
    expect(screen.getByRole('link', { name: 'Start a conversation' }))
      .toHaveAttribute('href', 'mailto:hello@example.com');
  });
});

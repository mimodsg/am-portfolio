import { render, screen } from '@testing-library/react';

import { Link } from './Link';

describe('Link', () => {
  it('renders a named link with the requested href', () => {
    render(<Link href="/work">Selected work</Link>);

    expect(screen.getByRole('link', { name: 'Selected work' })).toHaveAttribute(
      'href',
      '/work',
    );
  });
});

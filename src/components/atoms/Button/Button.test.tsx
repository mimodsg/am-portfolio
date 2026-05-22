import { render, screen } from '@testing-library/react';

import { Button, ButtonLink } from './Button';

describe('Button', () => {
  it('renders an accessible button with the requested label', () => {
    render(<Button>Contact</Button>);

    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders an accessible link button', () => {
    render(<ButtonLink href="#work">View work</ButtonLink>);

    expect(screen.getByRole('link', { name: 'View work' })).toHaveAttribute(
      'href',
      '#work',
    );
  });
});

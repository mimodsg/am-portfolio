import { render, screen } from '@testing-library/react';

import { HeroIcon } from './HeroIcon';

describe('HeroIcon', () => {
  it('is hidden from assistive technology by default', () => {
    const { container } = render(<HeroIcon name="envelope" />);

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('supports an accessible label when provided', () => {
    render(<HeroIcon aria-label="Email" name="envelope" />);

    expect(screen.getByRole('img', { name: 'Email' })).toBeInTheDocument();
  });

  it('renders the LinkedIn brand icon', () => {
    const { container } = render(<HeroIcon name="linkedin" />);

    expect(container.querySelector('path')).toHaveAttribute('fill', 'currentColor');
  });
});

import { render, screen } from '@testing-library/react';

import { homePageContent } from '@/data/homePage';

import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders the primary page heading', () => {
    render(<HomePage />);

    const expectedHeading = homePageContent.hero.heading.replace(/\s+/g, ' ').trim();

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: expectedHeading,
      }),
    ).toBeInTheDocument();
  });

  it('renders the contact call to action', () => {
    render(<HomePage />);

    expect(screen.getByRole('link', { name: homePageContent.contact.ctaLabel }))
      .toHaveAttribute('href', homePageContent.contact.ctaHref);
  });
});

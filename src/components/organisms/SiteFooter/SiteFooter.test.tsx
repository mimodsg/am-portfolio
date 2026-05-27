import { render, screen } from '@testing-library/react';

import { SiteFooter } from './SiteFooter';

const contactItems = [
  {
    href: 'mailto:hey@alvaromena.com',
    icon: 'envelope' as const,
    label: 'Email',
    value: 'hey@alvaromena.com',
  },
  {
    href: 'https://www.linkedin.com/in/alvaro-mena',
    icon: 'linkedin' as const,
    label: 'LinkedIn',
    value: 'linkedin.com/in/alvaro-mena',
  },
];

describe('SiteFooter', () => {
  it('renders quote, cta, contact details, and copyright', () => {
    render(
      <SiteFooter
        citation="Dieter Rams"
        contactItems={contactItems}
        ctaHref="mailto:hey@alvaromena.com"
        ctaLabel="Connect"
        quote="Good design is as little design as possible."
        siteLabel="alvaromena.com"
        year={2026}
      />,
    );

    expect(
      screen.getByText('Good design is as little design as possible.'),
    ).toBeInTheDocument();
    expect(screen.getByText('Dieter Rams')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Connect' })).toHaveAttribute(
      'href',
      'mailto:hey@alvaromena.com',
    );
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:hey@alvaromena.com',
    );
    expect(screen.getByText(/© 2026/i)).toBeInTheDocument();
    expect(screen.getByText('alvaromena.com')).toBeInTheDocument();
  });
});

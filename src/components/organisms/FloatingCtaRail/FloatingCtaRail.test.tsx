import { render, screen } from '@testing-library/react';

import { FloatingCtaRail } from './FloatingCtaRail';

describe('FloatingCtaRail', () => {
  it('renders the contact and cv download actions', () => {
    render(
      <FloatingCtaRail
        contactHref="mailto:hey@alvaromena.com"
        contactLabel="Get in touch"
        downloadFileName="cv-alvaro-mena.pdf"
        downloadHref="/assets/pdf/cv-alvaro-mena.pdf"
        downloadLabel="Download CV"
      />,
    );

    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute(
      'href',
      'mailto:hey@alvaromena.com',
    );
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute(
      'href',
      '/assets/pdf/cv-alvaro-mena.pdf',
    );
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute(
      'download',
      'cv-alvaro-mena.pdf',
    );
  });
});

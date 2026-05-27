import { render, screen } from '@testing-library/react';

import { ProfileOverview } from './ProfileOverview';

const statistics = [
  { label: 'Frontend', percentage: 92 },
  { label: 'Backend', percentage: 76 },
  { label: 'Systems', percentage: 88 },
];

const contactItems = [
  {
    href: 'mailto:hello@example.com',
    icon: 'envelope' as const,
    label: 'Email',
    value: 'hello@example.com',
  },
  {
    href: 'https://www.linkedin.com/in/example',
    icon: 'linkedin' as const,
    label: 'LinkedIn',
    value: 'linkedin.com/in/example',
  },
];

describe('ProfileOverview', () => {
  it('renders teaser, profile image, statistics, and contact metadata', () => {
    render(
      <ProfileOverview
        contactItems={contactItems}
        eyebrow="Profile"
        heading="Systems-minded engineering with design sensitivity."
        imageAlt="Portrait of Alvaro"
        imageSrc="/profile.jpg"
        intro="A compact view of practice, focus, and contact channels."
        statistics={statistics}
      />,
    );

    expect(
      screen.getByRole('heading', {
        name: 'Systems-minded engineering with design sensitivity.',
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Portrait of Alvaro' }))
      .toHaveAttribute('src', '/profile.jpg');
    expect(screen.getByRole('progressbar', { name: 'Frontend' }))
      .toHaveAttribute('aria-valuenow', '92');
    expect(screen.getByRole('link', { name: 'Email' }))
      .toHaveAttribute('href', 'mailto:hello@example.com');
  });

  it('supports section content alignment', () => {
    const { container } = render(
      <ProfileOverview
        align="right"
        contactItems={contactItems}
        eyebrow="Profile"
        heading="Systems-minded engineering with design sensitivity."
        imageAlt="Portrait of Alvaro"
        imageSrc="/profile.jpg"
        statistics={statistics}
      />,
    );

    expect(container.firstChild).toHaveClass('profile-overview--right');
  });
});

import { render, screen } from '@testing-library/react';

import type { ContactMetaItem } from './ContactMetaBox';
import { ContactMetaBox } from './ContactMetaBox';

const contactItems: ContactMetaItem[] = [
  {
    href: 'mailto:hello@example.com',
    icon: 'envelope',
    label: 'Email',
    value: 'hello@example.com',
  },
  {
    href: 'tel:+15555550100',
    icon: 'phone',
    label: 'Phone',
    value: '+1 555 555 0100',
  },
  {
    href: 'https://www.linkedin.com/in/example',
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/example',
  },
];

describe('ContactMetaBox', () => {
  it('renders contact links with accessible labels and values', () => {
    render(<ContactMetaBox items={contactItems} />);

    contactItems.forEach((item) => {
      expect(screen.getByText(item.value)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: item.label }))
        .toHaveAttribute('href', item.href);
    });
  });

  it('does not render visible item labels', () => {
    render(<ContactMetaBox items={contactItems} />);

    expect(screen.queryByText('Email')).not.toBeInTheDocument();
    expect(screen.queryByText('Phone')).not.toBeInTheDocument();
    expect(screen.queryByText('LinkedIn')).not.toBeInTheDocument();
  });
});

import type { Meta, StoryObj } from '@storybook/react-vite';

import { SiteFooter } from './SiteFooter';

const meta = {
  title: 'Organisms/SiteFooter',
  component: SiteFooter,
  args: {
    citation: 'Dieter Rams',
    contactItems: [
      {
        href: 'mailto:hey@alvaromena.com',
        icon: 'envelope',
        label: 'Email',
        value: 'hey@alvaromena.com',
      },
      {
        href: 'tel:+593987015263',
        icon: 'phone',
        label: 'Phone',
        value: '+593 9 8701 5263',
      },
      {
        href: 'https://www.linkedin.com/in/alvaro-mena',
        icon: 'linkedin',
        label: 'LinkedIn',
        value: 'linkedin.com/in/alvaro-mena',
      },
    ],
    ctaHref: 'mailto:hey@alvaromena.com',
    ctaLabel: 'Connect',
    quote: 'Design is not just what it looks like and feels like. Design is how it works.',
    siteLabel: 'alvaromena.com',
    year: 2026,
  },
} satisfies Meta<typeof SiteFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

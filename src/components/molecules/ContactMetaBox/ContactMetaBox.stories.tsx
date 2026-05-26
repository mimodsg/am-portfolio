import type { Meta, StoryObj } from '@storybook/react-vite';

import { ContactMetaBox } from './ContactMetaBox';

const meta = {
  title: 'Molecules/ContactMetaBox',
  component: ContactMetaBox,
} satisfies Meta<typeof ContactMetaBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
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
    ],
  },
};

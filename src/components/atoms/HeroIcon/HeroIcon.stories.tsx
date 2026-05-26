import type { Meta, StoryObj } from '@storybook/react-vite';

import { HeroIcon } from './HeroIcon';

const meta = {
  title: 'Atoms/HeroIcon',
  component: HeroIcon,
} satisfies Meta<typeof HeroIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Envelope: Story = {
  args: {
    'aria-label': 'Email',
    name: 'envelope',
  },
};

export const Phone: Story = {
  args: {
    'aria-label': 'Phone',
    name: 'phone',
  },
};

export const Link: Story = {
  args: {
    'aria-label': 'Link',
    name: 'link',
  },
};

export const LinkedIn: Story = {
  args: {
    'aria-label': 'LinkedIn',
    name: 'linkedin',
  },
};

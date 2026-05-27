import type { Meta, StoryObj } from '@storybook/react-vite';

import { Statistics } from './Statistics';

const meta = {
  title: 'Molecules/Statistics',
  component: Statistics,
  args: {
    items: [
      { label: 'Frontend', percentage: 92 },
      { label: 'Backend', percentage: 76 },
      { label: 'Platform', percentage: 64 },
      { label: 'Systems', percentage: 88 },
    ],
  },
} satisfies Meta<typeof Statistics>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

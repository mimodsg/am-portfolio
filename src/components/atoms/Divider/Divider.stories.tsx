import type { Meta, StoryObj } from '@storybook/react-vite';

import { Divider } from './Divider';

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react-vite';

import { RailStatus } from './RailStatus';

const meta = {
  title: 'Atoms/RailStatus',
  component: RailStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Status',
    value: 'Available',
  },
} satisfies Meta<typeof RailStatus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomValue: Story = {
  args: {
    value: 'Consulting',
  },
};

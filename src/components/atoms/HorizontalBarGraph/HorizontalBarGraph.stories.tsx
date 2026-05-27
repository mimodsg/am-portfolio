import type { Meta, StoryObj } from '@storybook/react-vite';

import { HorizontalBarGraph } from './HorizontalBarGraph';

const meta = {
  title: 'Atoms/HorizontalBarGraph',
  component: HorizontalBarGraph,
  args: {
    label: 'React',
    percentage: 56,
  },
} satisfies Meta<typeof HorizontalBarGraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Low: Story = {
  args: {
    label: 'Systems',
    percentage: 24,
  },
};

export const High: Story = {
  args: {
    label: 'Architecture',
    percentage: 88,
  },
};

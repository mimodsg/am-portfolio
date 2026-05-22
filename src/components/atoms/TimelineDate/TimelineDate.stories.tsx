import type { Meta, StoryObj } from '@storybook/react-vite';

import { TimelineDate } from './TimelineDate';

const meta = {
  title: 'Atoms/TimelineDate',
  component: TimelineDate,
} satisfies Meta<typeof TimelineDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '2024 - Present',
  },
};

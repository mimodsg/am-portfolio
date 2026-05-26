import type { Meta, StoryObj } from '@storybook/react-vite';

import { featuredProject } from '@/data/projects';

import { FeaturedProject } from './FeaturedProject';

const meta = {
  title: 'Molecules/FeaturedProject',
  component: FeaturedProject,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeaturedProject>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: featuredProject,
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';

import { featuredProjects } from '@/data/projects';

import { ProjectCollection } from './ProjectCollection';

const meta = {
  title: 'Organisms/ProjectCollection',
  component: ProjectCollection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProjectCollection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ThreeItems: Story = {
  args: {
    projects: featuredProjects,
  },
};

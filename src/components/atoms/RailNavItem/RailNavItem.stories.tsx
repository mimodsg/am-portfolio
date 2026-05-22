import type { Meta, StoryObj } from '@storybook/react-vite';

import { RailNavItem } from './RailNavItem';

import './rail-nav-item.stories.css';

const meta = {
  title: 'Atoms/RailNavItem',
  component: RailNavItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    href: '#projects',
    index: 4,
    isActive: false,
    label: 'Projects',
  },
} satisfies Meta<typeof RailNavItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ol className="rail-nav-item-story">
      <RailNavItem {...args} />
    </ol>
  ),
};

export const Active: Story = {
  args: {
    isActive: true,
  },
  render: Default.render,
};

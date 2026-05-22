import type { Meta, StoryObj } from '@storybook/react-vite';

import { RailNavItemGroup } from './RailNavItemGroup';

import './rail-nav-item-group.stories.css';

const items = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Systems', href: '#systems' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
] as const;

const meta = {
  title: 'Molecules/RailNavItemGroup',
  component: RailNavItemGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    activeSectionId: 'projects',
    items: [...items],
  },
  decorators: [
    (Story) => (
      <div className="rail-nav-item-group-story">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RailNavItemGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FirstItemActive: Story = {
  args: {
    activeSectionId: 'home',
  },
};

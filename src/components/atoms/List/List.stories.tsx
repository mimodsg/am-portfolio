import type { Meta, StoryObj } from '@storybook/react-vite';

import { List } from './List';

const meta = {
  title: 'Atoms/List',
  component: List,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'ruled', 'metadata'],
    },
  },
  args: {
    items: [
      { text: 'Frontend architecture and implementation systems' },
      { text: 'CMS and platform delivery' },
      { text: 'Technical planning across product and design teams' },
    ],
    variant: 'default',
  },
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Ruled: Story = {
  args: {
    variant: 'ruled',
  },
};

export const Metadata: Story = {
  args: {
    items: [
      { label: 'Role', text: 'Lead engineer' },
      { label: 'Focus', text: 'Frontend architecture' },
      { label: 'Mode', text: 'Systems-oriented delivery' },
    ],
    variant: 'metadata',
  },
};

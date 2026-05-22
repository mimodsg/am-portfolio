import type { Meta, StoryObj } from '@storybook/react-vite';

import { Link } from './Link';

const meta = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['inline', 'standalone', 'nav', 'metadata'],
    },
  },
  args: {
    children: 'Read the project dossier',
    href: '#work',
    variant: 'inline',
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Inline: Story = {};

export const Standalone: Story = {
  args: {
    children: 'View selected work',
    variant: 'standalone',
  },
};

export const Navigation: Story = {
  args: {
    children: 'Experience',
    variant: 'nav',
  },
};

export const Metadata: Story = {
  args: {
    children: 'Repository',
    variant: 'metadata',
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';

import { RailLogo } from './RailLogo';

const meta = {
  title: 'Atoms/RailLogo',
  component: RailLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    href: '#home',
    label: 'AM Portfolio home',
  },
} satisfies Meta<typeof RailLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

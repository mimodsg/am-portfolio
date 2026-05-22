import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button, ButtonLink } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
  },
  args: {
    children: 'View work',
    variant: 'primary',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    children: 'Contact',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Read dossier',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Details',
    variant: 'ghost',
  },
};

export const LinkButton: StoryObj<typeof ButtonLink> = {
  render: (args) => <ButtonLink {...args} />,
  args: {
    children: 'Start a conversation',
    href: 'mailto:hello@example.com',
    variant: 'secondary',
  },
};

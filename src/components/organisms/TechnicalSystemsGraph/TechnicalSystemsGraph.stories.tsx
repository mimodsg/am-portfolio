import type { Meta, StoryObj } from '@storybook/react-vite';

import { TechnicalSystemsGraph } from './TechnicalSystemsGraph';

const meta = {
  title: 'Organisms/TechnicalSystemsGraph',
  component: TechnicalSystemsGraph,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TechnicalSystemsGraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Center: Story = {
  args: {
    align: 'center',
  },
};

export const Right: Story = {
  args: {
    align: 'right',
  },
};

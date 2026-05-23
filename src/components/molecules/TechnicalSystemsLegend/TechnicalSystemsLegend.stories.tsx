import type { Meta, StoryObj } from '@storybook/react-vite';

import { technicalSystemNodes } from '@/data/technicalSystems';

import { TechnicalSystemsLegend } from './TechnicalSystemsLegend';

const meta = {
  title: 'Molecules/TechnicalSystemsLegend',
  component: TechnicalSystemsLegend,
  args: {
    node: technicalSystemNodes[0],
  },
} satisfies Meta<typeof TechnicalSystemsLegend>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

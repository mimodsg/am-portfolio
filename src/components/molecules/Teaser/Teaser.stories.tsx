import type { Meta, StoryObj } from '@storybook/react-vite';

import { Teaser } from './Teaser';

import './teaser.stories.css';

const meta = {
  title: 'Molecules/Teaser',
  component: Teaser,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Teaser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: 'Experience',
    heading: 'A timeline of systems, delivery, and craft.',
    intro:
      'A compact view of the roles and operating modes that shaped a systems-oriented engineering practice.',
  },
  render: (args) => (
    <main className="teaser-story">
      <Teaser {...args} />
    </main>
  ),
};

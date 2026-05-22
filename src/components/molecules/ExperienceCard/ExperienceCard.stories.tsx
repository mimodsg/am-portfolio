import type { Meta, StoryObj } from '@storybook/react-vite';

import { workExperienceTimeline } from '@/data/experience';

import { ExperienceCard } from './ExperienceCard';

import './experience-card.stories.css';

const meta = {
  title: 'Molecules/ExperienceCard',
  component: ExperienceCard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ExperienceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: workExperienceTimeline[0],
  },
  render: (args) => (
    <main className="experience-card-story">
      <ExperienceCard {...args} />
    </main>
  ),
};

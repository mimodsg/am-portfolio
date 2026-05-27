import type { Meta, StoryObj } from '@storybook/react-vite';

import { WorkExperienceTimeline } from './WorkExperienceTimeline';

import './work-experience-timeline.stories.css';

const meta = {
  title: 'Organisms/WorkExperienceTimeline',
  component: WorkExperienceTimeline,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof WorkExperienceTimeline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <main className="work-experience-timeline-story">
      <WorkExperienceTimeline {...args} />
    </main>
  ),
};

export const Center: Story = {
  args: {
    align: 'center',
  },
  render: Default.render,
};

export const Right: Story = {
  args: {
    align: 'right',
  },
  render: Default.render,
};

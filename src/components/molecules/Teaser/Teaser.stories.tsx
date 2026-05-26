import type { Meta, StoryObj } from '@storybook/react-vite';

import backgroundVideoFrameUrl from '../../../../assets/images/background-video-first-frame.jpg';
import backgroundVideoUrl from '../../../../assets/video/background video.mp4';

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

export const Stacked: Story = {
  args: {
    ...Default.args,
    variant: 'stacked',
  },
  render: (args) => (
    <main className="teaser-story">
      <Teaser {...args} />
    </main>
  ),
};

export const Big: Story = {
  args: {
    ...Default.args,
    variant: 'big',
  },
  render: (args) => (
    <main className="teaser-story">
      <Teaser {...args} />
    </main>
  ),
};

export const BigMediaImage: Story = {
  args: {
    ...Default.args,
    backgroundMedia: {
      src: backgroundVideoFrameUrl,
      type: 'image',
    },
    context: 'dark',
    variant: 'big-media',
  },
  render: (args) => (
    <main className="teaser-story teaser-story--media">
      <Teaser {...args} />
    </main>
  ),
};

export const BigMediaVideo: Story = {
  args: {
    ...Default.args,
    backgroundMedia: {
      fallbackImageSrc: backgroundVideoFrameUrl,
      src: backgroundVideoUrl,
      type: 'video',
    },
    context: 'dark',
    variant: 'big-media',
  },
  render: (args) => (
    <main className="teaser-story teaser-story--media">
      <Teaser {...args} />
    </main>
  ),
};

export const Small: Story = {
  args: {
    eyebrow: 'Experience',
    heading: 'Selected delivery timeline.',
    variant: 'small',
  },
  render: (args) => (
    <main className="teaser-story">
      <Teaser {...args} />
    </main>
  ),
};

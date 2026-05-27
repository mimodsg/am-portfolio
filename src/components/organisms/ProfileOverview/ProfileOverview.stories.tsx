import type { Meta, StoryObj } from '@storybook/react-vite';

import profileImageUrl from '../../../../assets/images/landscape.jpg';

import { ProfileOverview } from './ProfileOverview';

import './profile-overview.stories.css';

const meta = {
  title: 'Organisms/ProfileOverview',
  component: ProfileOverview,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    contactItems: [
      {
        href: 'mailto:hello@example.com',
        icon: 'envelope',
        label: 'Email',
        value: 'hello@example.com',
      },
      {
        href: 'tel:+15555550100',
        icon: 'phone',
        label: 'Phone',
        value: '+1 555 555 0100',
      },
      {
        href: 'https://www.linkedin.com/in/example',
        icon: 'linkedin',
        label: 'LinkedIn',
        value: 'linkedin.com/in/example',
      },
    ],
    eyebrow: 'Profile',
    heading: 'Systems-minded engineering with design sensitivity.',
    imageAlt: 'Editorial profile placeholder.',
    imageSrc: profileImageUrl,
    intro:
      'A compact view of practice, focus, and contact channels for senior frontend and systems work.',
    statistics: [
      { label: 'Frontend', percentage: 92 },
      { label: 'Backend', percentage: 76 },
      { label: 'Platform', percentage: 64 },
      { label: 'Systems', percentage: 88 },
    ],
  },
} satisfies Meta<typeof ProfileOverview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <main className="profile-overview-story">
      <ProfileOverview {...args} />
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

import type { Meta, StoryObj } from '@storybook/react-vite';

import { FloatingNavigationRail } from './FloatingNavigationRail';

import './floating-navigation-rail.stories.css';

const meta = {
  title: 'Organisms/FloatingNavigationRail',
  component: FloatingNavigationRail,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FloatingNavigationRail>;

export default meta;

type Story = StoryObj<typeof meta>;

const sectionLabels = [
  'Home',
  'About',
  'Experience',
  'Projects',
  'Systems',
  'Writing',
  'Contact',
];

export const Default: Story = {
  render: (args) => (
    <>
      <FloatingNavigationRail {...args} />
      <main className="floating-navigation-rail-story">
        {sectionLabels.map((label) => (
          <section
            className="floating-navigation-rail-story__section"
            id={label.toLowerCase()}
            key={label}
          >
            <p className="floating-navigation-rail-story__eyebrow">{label}</p>
            <h2 className="floating-navigation-rail-story__title">
              {label} section
            </h2>
          </section>
        ))}
      </main>
    </>
  ),
};

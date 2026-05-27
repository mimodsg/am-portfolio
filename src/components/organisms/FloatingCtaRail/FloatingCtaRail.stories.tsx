import type { Meta, StoryObj } from '@storybook/react-vite';

import { FloatingCtaRail } from './FloatingCtaRail';

import './floating-cta-rail.stories.css';

const meta = {
  title: 'Organisms/FloatingCtaRail',
  component: FloatingCtaRail,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    contactHref: 'mailto:hey@alvaromena.com',
    contactLabel: 'Get in touch',
    downloadFileName: 'cv-alvaro-mena.pdf',
    downloadHref: '/assets/pdf/cv-alvaro-mena.pdf',
    downloadLabel: 'Download CV',
  },
} satisfies Meta<typeof FloatingCtaRail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <>
      <FloatingCtaRail {...args} />
      <main className="floating-cta-rail-story">
        <section className="floating-cta-rail-story__section">
          <p className="floating-cta-rail-story__eyebrow">Preview</p>
          <h2 className="floating-cta-rail-story__title">Homepage section</h2>
        </section>
      </main>
    </>
  ),
};

import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { Teaser } from './Teaser';

const gsapMocks = vi.hoisted(() => ({
  fromTo: vi.fn(),
  registerPlugin: vi.fn(),
  revert: vi.fn(),
}));

vi.mock('gsap', () => ({
  gsap: {
    context: (callback: () => void) => {
      callback();

      return {
        revert: gsapMocks.revert,
      };
    },
    fromTo: gsapMocks.fromTo,
    registerPlugin: gsapMocks.registerPlugin,
  },
}));

vi.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {},
}));

describe('Teaser', () => {
  beforeEach(() => {
    gsapMocks.fromTo.mockClear();
    gsapMocks.registerPlugin.mockClear();
    gsapMocks.revert.mockClear();
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockImplementation(() => ({
        addEventListener: vi.fn(),
        addListener: vi.fn(),
        dispatchEvent: vi.fn(),
        matches: false,
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        removeEventListener: vi.fn(),
        removeListener: vi.fn(),
      })),
    });
  });

  it('renders an eyebrow, heading, and intro', () => {
    render(
      <Teaser
        eyebrow="Experience"
        heading="Experience timeline"
        headingId="experience-title"
        intro="Selected roles and operating modes."
      />,
    );

    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Experience timeline' }),
    ).toHaveAttribute('id', 'experience-title');
    expect(
      screen.getByText('Selected roles and operating modes.'),
    ).toBeInTheDocument();
  });

  it('uses the horizontal layout variant by default', () => {
    const { container } = render(
      <Teaser eyebrow="Experience" heading="Experience timeline" />,
    );

    expect(container.firstChild).toHaveClass('teaser--horizontal');
    expect(container.firstChild).toHaveClass('teaser--light');
  });

  it('supports a stacked layout variant', () => {
    const { container } = render(
      <Teaser
        eyebrow="Experience"
        heading="Experience timeline"
        variant="stacked"
      />,
    );

    expect(container.firstChild).toHaveClass('teaser--stacked');
  });

  it('supports a big layout variant', () => {
    const { container } = render(
      <Teaser eyebrow="Experience" heading="Experience timeline" variant="big" />,
    );

    expect(container.firstChild).toHaveClass('teaser--big');
  });

  it('supports a big media variant with a background image', () => {
    const { container } = render(
      <Teaser
        backgroundMedia={{
          src: '/project-preview.jpg',
          type: 'image',
        }}
        eyebrow="Experience"
        heading="Experience timeline"
        variant="big-media"
      />,
    );

    expect(container.firstChild).toHaveClass('teaser--big-media');
    expect(container.querySelector('.teaser__media-image')).toHaveAttribute(
      'src',
      '/project-preview.jpg',
    );
  });

  it('supports a big media variant with video and mobile fallback image', () => {
    const { container } = render(
      <Teaser
        backgroundMedia={{
          fallbackImageSrc: '/project-preview-mobile.jpg',
          posterSrc: '/project-preview-poster.jpg',
          src: '/project-preview.mp4',
          type: 'video',
        }}
        context="dark"
        eyebrow="Experience"
        heading="Experience timeline"
        variant="big-media"
      />,
    );

    expect(container.firstChild).toHaveClass('teaser--dark');
    expect(
      container.querySelector('.teaser__media-image--fallback'),
    ).toHaveAttribute('src', '/project-preview-mobile.jpg');
    expect(container.querySelector('video')).toHaveAttribute(
      'poster',
      '/project-preview-poster.jpg',
    );
    expect(container.querySelector('source')).toHaveAttribute(
      'src',
      '/project-preview.mp4',
    );
  });

  it('supports a small layout variant without rendering intro copy', () => {
    const { container } = render(
      <Teaser
        eyebrow="Experience"
        heading="Experience timeline"
        intro="Selected roles and operating modes."
        variant="small"
      />,
    );

    expect(container.firstChild).toHaveClass('teaser--small');
    expect(
      screen.queryByText('Selected roles and operating modes.'),
    ).not.toBeInTheDocument();
    expect(gsapMocks.fromTo).not.toHaveBeenCalled();
  });

  it('supports a dark context', () => {
    const { container } = render(
      <Teaser
        context="dark"
        eyebrow="Experience"
        heading="Experience timeline"
      />,
    );

    expect(container.firstChild).toHaveClass('teaser--dark');
  });

  it('supports alignment modifiers', () => {
    const { container } = render(
      <Teaser
        align="right"
        eyebrow="Experience"
        heading="Experience timeline"
        intro="Selected roles and operating modes."
        variant="stacked"
      />,
    );

    expect(container.firstChild).toHaveClass('teaser--right');
  });

  it('supports a custom heading level', () => {
    render(
      <Teaser
        eyebrow="Experience"
        heading="Experience timeline"
        headingLevel={1}
      />,
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Experience timeline',
      }),
    ).toBeInTheDocument();
  });

  it('renders manual line breaks in heading and intro content', () => {
    const { container } = render(
      <Teaser
        eyebrow="Experience"
        heading={'First line\n\nSecond line'}
        intro={'Intro line one\nIntro line two'}
      />,
    );

    expect(
      screen.getByRole('heading', { name: /First line Second line/i }),
    ).toBeInTheDocument();
    expect(container.querySelectorAll('.teaser__title br')).toHaveLength(2);
    expect(container.querySelectorAll('.teaser__lede br')).toHaveLength(1);
  });

  it('registers a heading parallax animation for non-small variants', () => {
    render(
      <Teaser
        eyebrow="Experience"
        heading="Experience timeline"
        intro="Selected roles and operating modes."
        variant="stacked"
      />,
    );

    expect(gsapMocks.registerPlugin).toHaveBeenCalled();
    expect(gsapMocks.fromTo).toHaveBeenCalled();
  });
});

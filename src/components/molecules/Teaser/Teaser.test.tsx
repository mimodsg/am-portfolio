import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Teaser } from './Teaser';

describe('Teaser', () => {
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
});

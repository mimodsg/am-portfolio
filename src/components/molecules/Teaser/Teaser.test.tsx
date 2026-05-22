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
});

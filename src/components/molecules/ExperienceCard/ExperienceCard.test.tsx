import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { WorkExperienceTimelineEntry } from '@/data/experience';

import { ExperienceCard } from './ExperienceCard';

const item: WorkExperienceTimelineEntry = {
  id: 'systems-lead',
  highlights: ['Defined the interface system.', 'Aligned delivery standards.'],
  location: 'Remote',
  organization: 'Portfolio Systems',
  period: '2024 - Present',
  role: 'Systems Lead',
  summary:
    'Led structured frontend delivery across product and content surfaces.',
};

describe('ExperienceCard', () => {
  it('renders the role, metadata, summary, and highlights', () => {
    render(<ExperienceCard item={item} />);

    expect(
      screen.getByRole('heading', { name: 'Systems Lead' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Portfolio Systems / Remote')).toBeInTheDocument();
    expect(screen.getByText(item.summary)).toBeInTheDocument();
    expect(
      screen.getByText('Defined the interface system.'),
    ).toBeInTheDocument();
  });
});

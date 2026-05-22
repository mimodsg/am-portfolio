import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TimelineDate } from './TimelineDate';

describe('TimelineDate', () => {
  it('renders the provided timeline label', () => {
    render(<TimelineDate>2024 - Present</TimelineDate>);

    expect(screen.getByText('2024 - Present')).toBeInTheDocument();
  });
});

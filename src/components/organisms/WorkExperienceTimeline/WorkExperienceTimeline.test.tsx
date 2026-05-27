import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { WorkExperienceTimelineEntry } from '@/data/experience';

import { WorkExperienceTimeline } from './WorkExperienceTimeline';

const gsapMocks = vi.hoisted(() => ({
  fromTo: vi.fn(),
  killTweensOf: vi.fn(),
  registerPlugin: vi.fn(),
  revert: vi.fn(),
  set: vi.fn(),
  to: vi.fn(),
}));

vi.mock('gsap', () => ({
  gsap: {
    context: vi.fn((callback: () => void) => {
      callback();

      return {
        revert: gsapMocks.revert,
      };
    }),
    fromTo: gsapMocks.fromTo,
    killTweensOf: gsapMocks.killTweensOf,
    registerPlugin: gsapMocks.registerPlugin,
    set: gsapMocks.set,
    to: gsapMocks.to,
    utils: {
      toArray: (selector: string) =>
        Array.from(document.querySelectorAll(selector)),
    },
  },
}));

vi.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {
    refresh: vi.fn(),
  },
}));

const customItems: WorkExperienceTimelineEntry[] = [
  {
    id: 'systems-lead',
    highlights: [
      'Defined the interface system.',
      'Aligned delivery standards.',
    ],
    location: 'Remote',
    organization: 'Portfolio Systems',
    period: '2024 - Present',
    role: 'Systems Lead',
    summary:
      'Led structured frontend delivery across product and content surfaces.',
  },
];

const expandableItems: WorkExperienceTimelineEntry[] = Array.from(
  { length: 5 },
  (_, index) => ({
    id: `experience-${index + 1}`,
    highlights: [`Highlight ${index + 1}`],
    location: 'Remote',
    organization: 'Portfolio Systems',
    period: `20${24 - index}`,
    role: `Experience ${index + 1}`,
    summary: `Summary ${index + 1}`,
  }),
);

describe('WorkExperienceTimeline', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('renders timeline entries with accessible section labeling', () => {
    render(
      <WorkExperienceTimeline
        heading="Experience timeline"
        intro="Selected roles and operating modes."
        items={customItems}
      />,
    );

    expect(
      screen.getByRole('region', { name: 'Experience timeline' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Systems Lead' }),
    ).toBeInTheDocument();
    expect(screen.getByText('2024 - Present')).toBeInTheDocument();
    expect(
      screen.getByText('Defined the interface system.'),
    ).toBeInTheDocument();
  });

  it('supports section content alignment', () => {
    const { container } = render(
      <WorkExperienceTimeline align="center" items={customItems} />,
    );

    expect(container.firstChild).toHaveClass('work-experience-timeline--center');
  });

  it('initializes and cleans up GSAP scroll effects when motion is allowed', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockReturnValue({
        addEventListener: vi.fn(),
        addListener: vi.fn(),
        dispatchEvent: vi.fn(),
        matches: false,
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        removeEventListener: vi.fn(),
        removeListener: vi.fn(),
      }),
    );

    const { unmount } = render(<WorkExperienceTimeline items={customItems} />);

    expect(gsapMocks.registerPlugin).toHaveBeenCalled();
    expect(gsapMocks.fromTo).toHaveBeenCalled();

    unmount();

    expect(gsapMocks.revert).toHaveBeenCalled();
  });

  it('does not initialize GSAP when reduced motion is preferred', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockReturnValue({
        addEventListener: vi.fn(),
        addListener: vi.fn(),
        dispatchEvent: vi.fn(),
        matches: true,
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        removeEventListener: vi.fn(),
        removeListener: vi.fn(),
      }),
    );

    render(<WorkExperienceTimeline items={customItems} />);

    expect(gsapMocks.fromTo).not.toHaveBeenCalled();
  });

  it('shows the latest four entries before expanding the full timeline', () => {
    render(
      <WorkExperienceTimeline
        heading="Experience timeline"
        initialVisibleCount={4}
        items={expandableItems}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Experience 1' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Experience 4' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Experience 5' }),
    ).not.toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'View all experience' });

    expect(button).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(button);

    expect(
      screen.getByRole('heading', { name: 'Experience 5' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Show less experience' }),
    ).toHaveAttribute('aria-expanded', 'true');
  });
});

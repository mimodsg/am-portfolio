import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { featuredProjects } from '@/data/projects';

import { ProjectCollection } from './ProjectCollection';

const gsapMocks = vi.hoisted(() => ({
  create: vi.fn(),
  registerPlugin: vi.fn(),
  revert: vi.fn(),
  to: vi.fn(),
}));

vi.mock('gsap', () => ({
  gsap: {
    context: (callback: () => void) => {
      callback();

      return {
        revert: gsapMocks.revert,
      };
    },
    registerPlugin: gsapMocks.registerPlugin,
    to: gsapMocks.to,
    utils: {
      toArray: (selector: string) =>
        Array.from(document.querySelectorAll<HTMLElement>(selector)),
    },
  },
}));

vi.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {
    create: gsapMocks.create,
  },
}));

describe('ProjectCollection', () => {
  it('renders each featured project in the collection', () => {
    render(<ProjectCollection projects={featuredProjects} />);

    expect(
      screen.getByRole('region', { name: 'Featured projects' }),
    ).toBeInTheDocument();

    featuredProjects.forEach((project) => {
      expect(
        screen.getByRole('heading', { name: project.title }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(`Collaborated with ${project.client}`),
      ).toBeInTheDocument();
    });
  });

  it('supports section content alignment', () => {
    const { container } = render(
      <ProjectCollection align="center" projects={featuredProjects} />,
    );

    expect(container.firstChild).toHaveClass('project-collection--center');
  });
});

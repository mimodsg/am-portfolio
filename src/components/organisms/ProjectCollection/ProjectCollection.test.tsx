import { render, screen } from '@testing-library/react';

import { featuredProjects } from '@/data/projects';

import { ProjectCollection } from './ProjectCollection';

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
});

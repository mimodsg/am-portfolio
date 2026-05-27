import { render, screen } from '@testing-library/react';

import { featuredProject, featuredProjects } from '@/data/projects';

import { FeaturedProject } from './FeaturedProject';

describe('FeaturedProject', () => {
  it('renders the featured project content and image when a description exists', () => {
    const describedProject = featuredProjects.find(
      (project): project is typeof project & { description: string } =>
        typeof project.description === 'string',
    );

    if (!describedProject) {
      throw new Error('Expected at least one featured project with a description.');
    }

    render(<FeaturedProject project={describedProject} />);

    expect(
      screen.getByText(`Collaborated with ${describedProject.client}`),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: describedProject.title }),
    ).toHaveAttribute('id', 'featured-project-title');
    expect(screen.getByText(describedProject.description)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: describedProject.imageAlt }))
      .toHaveAttribute('src', describedProject.imageSrc);
  });

  it('omits the intro when the project has no description', () => {
    render(<FeaturedProject project={featuredProject} />);

    expect(
      screen.queryByText(/foundation|workflow|implementation patterns/i),
    ).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: featuredProject.imageAlt }))
      .toHaveAttribute('src', featuredProject.imageSrc);
  });

  it('applies the configured palette class', () => {
    const { container } = render(
      <FeaturedProject project={featuredProject} />,
    );

    expect(container.firstChild).toHaveClass(
      `featured-project--${featuredProject.palette}`,
    );
  });
});

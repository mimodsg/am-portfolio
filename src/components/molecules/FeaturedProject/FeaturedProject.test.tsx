import { render, screen } from '@testing-library/react';

import { featuredProject } from '@/data/projects';

import { FeaturedProject } from './FeaturedProject';

describe('FeaturedProject', () => {
  it('renders the featured project content and image', () => {
    render(<FeaturedProject project={featuredProject} />);

    expect(
      screen.getByText(`Collaborated with ${featuredProject.client}`),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: featuredProject.title }),
    ).toHaveAttribute('id', 'featured-project-title');
    expect(screen.getByText(featuredProject.description)).toBeInTheDocument();
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

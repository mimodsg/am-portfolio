import { Teaser } from '@/components/molecules/Teaser';
import type { FeaturedProject as FeaturedProjectData } from '@/data/projects';
import { cn } from '@/lib/cn';

import './featured-project.css';

export interface FeaturedProjectProps {
  className?: string;
  project: FeaturedProjectData;
  titleId?: string;
}

export function FeaturedProject({
  className,
  project,
  titleId = 'featured-project-title',
}: FeaturedProjectProps) {
  const isDark = project.tone === 'dark';

  return (
    <section
      aria-labelledby={titleId}
      className={cn(
        'featured-project',
        `featured-project--${project.palette}`,
        isDark && 'featured-project--dark',
        className,
      )}
    >
      <div className="featured-project__inner">
        <Teaser
          className="featured-project__teaser"
          context={project.tone}
          eyebrow={`Collaborated with ${project.client}`}
          heading={project.title}
          headingId={titleId}
          variant="small"
        />
        {project.description ? (
          <p className="featured-project__intro">
            {project.description}
          </p>
        ) : null}
        <img
          alt={project.imageAlt}
          className="featured-project__image"
          loading="lazy"
          src={project.imageSrc}
        />
      </div>
    </section>
  );
}

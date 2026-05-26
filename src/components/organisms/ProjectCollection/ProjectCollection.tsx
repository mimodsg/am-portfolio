import type { HTMLAttributes } from 'react';

import { FeaturedProject } from '@/components/molecules/FeaturedProject';
import type { FeaturedProject as FeaturedProjectData } from '@/data/projects';
import { cn } from '@/lib/cn';

import './project-collection.css';

export interface ProjectCollectionProps extends HTMLAttributes<HTMLElement> {
  projects: FeaturedProjectData[];
}

export function ProjectCollection({
  className,
  projects,
  ...props
}: ProjectCollectionProps) {
  return (
    <section
      aria-label="Featured projects"
      className={cn('project-collection', className)}
      id="projects"
      {...props}
    >
      {projects.map((project, index) => (
        <FeaturedProject
          className="project-collection__item"
          key={`${project.client}-${project.title}`}
          project={project}
          titleId={`featured-project-title-${index + 1}`}
        />
      ))}
    </section>
  );
}

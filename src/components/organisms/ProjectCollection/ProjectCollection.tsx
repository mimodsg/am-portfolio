import type { HTMLAttributes } from 'react';

import { FeaturedProject } from '@/components/molecules/FeaturedProject';
import type { FeaturedProject as FeaturedProjectData } from '@/data/projects';
import { cn } from '@/lib/cn';
import type { SectionAlign } from '@/types/sectionAlignment';

import './project-collection.css';

export interface ProjectCollectionProps extends HTMLAttributes<HTMLElement> {
  align?: SectionAlign;
  projects: FeaturedProjectData[];
}

export function ProjectCollection({
  align = 'left',
  className,
  projects,
  ...props
}: ProjectCollectionProps) {
  return (
    <section
      aria-label="Featured projects"
      className={cn('project-collection', `project-collection--${align}`, className)}
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

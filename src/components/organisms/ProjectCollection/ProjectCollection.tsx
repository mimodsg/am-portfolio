import { useEffect, useRef, type HTMLAttributes } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { FeaturedProject } from '@/components/molecules/FeaturedProject';
import type { FeaturedProject as FeaturedProjectData } from '@/data/projects';
import { cn } from '@/lib/cn';
import type { SectionAlign } from '@/types/sectionAlignment';

import './project-collection.css';

export interface ProjectCollectionProps extends HTMLAttributes<HTMLElement> {
  align?: SectionAlign;
  projects: FeaturedProjectData[];
}

function allowsScrollAnimation() {
  if (typeof window.matchMedia !== 'function') {
    return false;
  }

  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function parseLengthToPixels(length: string) {
  const trimmedLength = length.trim();

  if (!trimmedLength) {
    return 0;
  }

  if (trimmedLength.endsWith('rem')) {
    const rootFontSize = Number.parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );

    return Number.parseFloat(trimmedLength) * rootFontSize;
  }

  return Number.parseFloat(trimmedLength) || 0;
}

export function ProjectCollection({
  align = 'left',
  className,
  projects,
  ...props
}: ProjectCollectionProps) {
  const collectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = collectionRef.current;

    if (!root || !allowsScrollAnimation()) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const overlap = parseLengthToPixels(
        getComputedStyle(root).getPropertyValue('--project-collection-overlap'),
      );
      const stacks = gsap.utils.toArray<HTMLElement>('.project-collection__stack');

      stacks.forEach((stack, index) => {
        if (index === stacks.length - 1) {
          return;
        }

        const card = stack.querySelector<HTMLElement>('.project-collection__card');
        const item = stack.querySelector<HTMLElement>('.project-collection__item');

        if (!card || !item) {
          return;
        }

        const getOverflow = () => Math.max(item.offsetHeight - window.innerHeight, 0);
        const getPinDuration = () => getOverflow() + overlap;
        const applyPinSpace = () => {
          gsap.set(stack, {
            paddingBottom: getPinDuration(),
          });
        };

        applyPinSpace();

        ScrollTrigger.create({
          end: () => `+=${getPinDuration()}`,
          invalidateOnRefresh: true,
          onRefresh: applyPinSpace,
          pin: card,
          pinSpacing: false,
          start: 'top top',
          trigger: stack,
        });

        if (getOverflow() > 0) {
          gsap.to(item, {
            ease: 'none',
            scrollTrigger: {
              end: () => `+=${getOverflow()}`,
              invalidateOnRefresh: true,
              scrub: true,
              start: 'top top',
              trigger: stack,
            },
            y: () => getOverflow() * -1,
          });
        }
      });
    }, root);

    return () => {
      context.revert();
    };
  }, [projects.length]);

  return (
    <section
      aria-label="Featured projects"
      className={cn('project-collection', `project-collection--${align}`, className)}
      id="projects"
      ref={collectionRef}
      {...props}
    >
      {projects.map((project, index) => (
        <div
          className="project-collection__stack"
          key={`${project.client}-${project.title}`}
        >
          <div className="project-collection__card">
            <FeaturedProject
              className="project-collection__item"
              project={project}
              titleId={`featured-project-title-${index + 1}`}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

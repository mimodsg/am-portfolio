import type { HTMLAttributes } from 'react';

import type { WorkExperienceTimelineEntry } from '@/data/experience';
import { cn } from '@/lib/cn';

import './experience-card.css';

export interface ExperienceCardProps extends HTMLAttributes<HTMLElement> {
  item: WorkExperienceTimelineEntry;
}

export function ExperienceCard({
  className,
  item,
  ...props
}: ExperienceCardProps) {
  return (
    <article className={cn('experience-card', className)} {...props}>
      <p className="experience-card__meta">
        {item.organization} / {item.location}
      </p>
      <h3 className="experience-card__role">{item.role}</h3>
      <p className="experience-card__summary">{item.summary}</p>
      <ul className="experience-card__highlights">
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}

import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

import './teaser.css';

export interface TeaserProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow: string;
  heading: string;
  headingId?: string;
  intro?: string;
}

export function Teaser({
  className,
  eyebrow,
  heading,
  headingId,
  intro,
  ...props
}: TeaserProps) {
  return (
    <div className={cn('teaser', className)} {...props}>
      <p className="teaser__eyebrow">{eyebrow}</p>
      <div className="teaser__content">
        <h2 className="teaser__title" id={headingId}>
          {heading}
        </h2>
        {intro ? <p className="teaser__lede">{intro}</p> : null}
      </div>
    </div>
  );
}

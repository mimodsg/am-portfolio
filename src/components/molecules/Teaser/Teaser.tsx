import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

import './teaser.css';

export type TeaserVariant = 'horizontal' | 'stacked' | 'big' | 'small';

export interface TeaserProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow: string;
  heading: string;
  headingId?: string;
  intro?: string;
  variant?: TeaserVariant;
}

export function Teaser({
  className,
  eyebrow,
  heading,
  headingId,
  intro,
  variant = 'horizontal',
  ...props
}: TeaserProps) {
  const shouldShowIntro = variant !== 'small' && intro;

  return (
    <div className={cn('teaser', `teaser--${variant}`, className)} {...props}>
      <p className="teaser__eyebrow">{eyebrow}</p>
      <div className="teaser__content">
        <h2 className="teaser__title" id={headingId}>
          {heading}
        </h2>
        {shouldShowIntro ? <p className="teaser__lede">{intro}</p> : null}
      </div>
    </div>
  );
}

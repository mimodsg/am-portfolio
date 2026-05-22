import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

import './timeline-date.css';

export interface TimelineDateProps extends HTMLAttributes<HTMLDivElement> {
  children: string;
}

export function TimelineDate({
  children,
  className,
  ...props
}: TimelineDateProps) {
  return (
    <div className={cn('timeline-date', className)} {...props}>
      <span>{children}</span>
    </div>
  );
}

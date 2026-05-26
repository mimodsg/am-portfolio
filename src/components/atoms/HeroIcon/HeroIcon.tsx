import type { SVGAttributes } from 'react';

import { cn } from '@/lib/cn';

import './hero-icon.css';

export type HeroIconName = 'envelope' | 'linkedin' | 'link' | 'phone';

export interface HeroIconProps extends SVGAttributes<SVGSVGElement> {
  name: HeroIconName;
}

interface HeroIconPath {
  d: string;
  fill?: string;
  stroke?: string;
}

const iconPaths: Record<HeroIconName, HeroIconPath[]> = {
  envelope: [
    {
      d: 'M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z',
    },
    {
      d: 'm19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z',
    },
  ],
  linkedin: [
    {
      d: 'M18.5 0h-17C.672 0 0 .672 0 1.5v17c0 .828.672 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5v-17C20 .672 19.328 0 18.5 0ZM6.04 17H3.36V7.96h2.68V17ZM4.7 6.72a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM17 17h-2.67v-4.39c0-1.05-.02-2.4-1.47-2.4-1.47 0-1.69 1.15-1.69 2.32V17H8.5V7.96h2.56V9.2h.04c.36-.68 1.23-1.39 2.53-1.39 2.7 0 3.2 1.78 3.2 4.09V17H17Z',
    },
  ],
  link: [
    {
      d: 'M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.061l1.224-1.225a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z',
    },
    {
      d: 'M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.061l-1.224 1.225a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z',
    },
  ],
  phone: [
    {
      d: 'M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-.608 1.58l-1.12.747a11.042 11.042 0 0 0 5.175 5.175l.747-1.12a1.5 1.5 0 0 1 1.58-.608l3.223.716A1.5 1.5 0 0 1 17 14.352V15.5a1.5 1.5 0 0 1-1.5 1.5H14C7.373 17 2 11.627 2 5V3.5Z',
    },
  ],
};

export function HeroIcon({
  className,
  name,
  role = 'img',
  ...props
}: HeroIconProps) {
  return (
    <svg
      aria-hidden={props['aria-label'] ? undefined : true}
      className={cn('hero-icon', className)}
      role={props['aria-label'] ? role : undefined}
      viewBox="0 0 20 20"
      {...props}
    >
      {iconPaths[name].map((path) => (
        <path
          d={path.d}
          fill={path.fill ?? 'currentColor'}
          key={path.d}
          stroke={path.stroke ?? 'none'}
        />
      ))}
    </svg>
  );
}

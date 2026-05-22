import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/cn';

import './link.css';

type LinkVariant = 'inline' | 'standalone' | 'nav' | 'metadata';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: LinkVariant;
}

export function Link({
  children,
  className,
  variant = 'inline',
  ...props
}: LinkProps) {
  return (
    <a className={cn('link', `link--${variant}`, className)} {...props}>
      {children}
    </a>
  );
}

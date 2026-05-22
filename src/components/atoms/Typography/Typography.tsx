import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/cn';

import './typography.css';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize =
  | 'display-xl'
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'hero'
  | 'hero-title'
  | 'section-title'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';
type TextVariant =
  | 'body'
  | 'lead'
  | 'lede'
  | 'large'
  | 'small'
  | 'extra-small'
  | 'muted'
  | 'caption'
  | 'metadata'
  | 'overline';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  children: ReactNode;
  size?: HeadingSize;
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  variant?: TextVariant;
}

export function Heading({
  as: Component = 'h2',
  children,
  className,
  size = 'h2',
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn('type-heading', `type-heading--${size}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Text({
  children,
  className,
  variant = 'body',
  ...props
}: TextProps) {
  return (
    <p
      className={cn('type-text', `type-text--${variant}`, className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function Eyebrow({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('type-eyebrow', className)} {...props}>
      {children}
    </p>
  );
}

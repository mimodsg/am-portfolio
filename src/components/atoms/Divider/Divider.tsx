import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

import './divider.css';

export function Divider({
  className,
  ...props
}: HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn('divider', className)} {...props} />;
}

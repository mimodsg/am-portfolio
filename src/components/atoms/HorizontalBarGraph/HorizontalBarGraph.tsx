import type { CSSProperties, HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

import {
  clampPercentage,
  getVioletStep,
  VIOLET_SCALE,
} from './horizontalBarGraphUtils';

import './horizontal-bar-graph.css';

export interface HorizontalBarGraphProps
  extends HTMLAttributes<HTMLDivElement> {
  label: string;
  percentage: number;
}

export function HorizontalBarGraph({
  className,
  label,
  percentage,
  ...props
}: HorizontalBarGraphProps) {
  const clampedPercentage = clampPercentage(percentage);
  const violetStep = getVioletStep(clampedPercentage);
  const style = {
    '--horizontal-bar-graph-fill': VIOLET_SCALE[violetStep],
    '--horizontal-bar-graph-value': `${clampedPercentage}%`,
  } as CSSProperties;

  return (
    <div
      className={cn('horizontal-bar-graph', className)}
      style={style}
      {...props}
    >
      <span className="horizontal-bar-graph__label">{label}</span>
      <div
        aria-label={label}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={clampedPercentage}
        className="horizontal-bar-graph__track"
        role="progressbar"
      >
        <span className="horizontal-bar-graph__fill" />
      </div>
      <span className="horizontal-bar-graph__percentage">
        {clampedPercentage}%
      </span>
    </div>
  );
}

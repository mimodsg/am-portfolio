import type { HTMLAttributes } from 'react';

import type { TechnicalSystemNode } from '@/data/technicalSystems';
import { cn } from '@/lib/cn';

import './technical-systems-legend.css';

export type TechnicalSystemsLegendPlacement =
  | 'center'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export interface TechnicalSystemsLegendProps
  extends HTMLAttributes<HTMLElement> {
  node: TechnicalSystemNode;
  placement?: TechnicalSystemsLegendPlacement;
}

export function TechnicalSystemsLegend({
  className,
  node,
  placement = 'bottom-left',
  ...props
}: TechnicalSystemsLegendProps) {
  return (
    <aside
      className={cn(
        'technical-systems-legend',
        `technical-systems-legend--${placement}`,
        className,
      )}
      {...props}
    >
      <p className="technical-systems-legend__eyebrow">{node.cluster}</p>
      <h3 className="technical-systems-legend__title">{node.label}</h3>
      <p className="technical-systems-legend__content">{node.summary}</p>
    </aside>
  );
}

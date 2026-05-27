import type { HTMLAttributes } from 'react';

import { HorizontalBarGraph } from '@/components/atoms/HorizontalBarGraph';
import { cn } from '@/lib/cn';

import './statistics.css';

export interface StatisticItem {
  label: string;
  percentage: number;
}

export interface StatisticsProps extends HTMLAttributes<HTMLDivElement> {
  items: StatisticItem[];
}

export function Statistics({
  className,
  items,
  ...props
}: StatisticsProps) {
  return (
    <div className={cn('statistics', className)} {...props}>
      {items.map((item) => (
        <div className="statistics__item" key={item.label}>
          <HorizontalBarGraph
            label={item.label}
            percentage={item.percentage}
          />
        </div>
      ))}
    </div>
  );
}

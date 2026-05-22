import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/cn';

import './list.css';

type ListVariant = 'default' | 'ruled' | 'metadata';

export interface ListItem {
  label?: string;
  text: ReactNode;
}

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  items: ListItem[];
  variant?: ListVariant;
}

export function List({
  className,
  items,
  variant = 'default',
  ...props
}: ListProps) {
  return (
    <ul className={cn('list', `list--${variant}`, className)} {...props}>
      {items.map((item, index) => (
        <li className="list__item" key={`${item.label ?? 'item'}-${index}`}>
          {item.label ? (
            <span className="list__label">{item.label}</span>
          ) : null}
          <span className="list__text">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

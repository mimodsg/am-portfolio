import type { MouseEvent } from 'react';

import './rail-nav-item.css';

export interface RailNavItemProps {
  href: `#${string}`;
  index: number;
  isActive?: boolean;
  label: string;
  onSelect?: (event: MouseEvent<HTMLAnchorElement>, href: `#${string}`) => void;
}

export function RailNavItem({
  href,
  index,
  isActive = false,
  label,
  onSelect,
}: RailNavItemProps) {
  return (
    <li className="rail-nav-item">
      <a
        className="rail-nav-item__link"
        href={href}
        aria-current={isActive ? 'true' : undefined}
        onClick={(event) => onSelect?.(event, href)}
      >
        <span className="rail-nav-item__index">{String(index).padStart(2, '0')}</span>
        <span className="rail-nav-item__label">{label}</span>
      </a>
    </li>
  );
}

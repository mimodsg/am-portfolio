import type { MouseEvent } from 'react';

import { RailNavItem } from '@/components/atoms/RailNavItem';

import './rail-nav-item-group.css';

export interface RailNavItemGroupItem {
  label: string;
  href: `#${string}`;
}

export interface RailNavItemGroupProps {
  activeSectionId?: string;
  items: RailNavItemGroupItem[];
  onItemSelect?: (event: MouseEvent<HTMLAnchorElement>, href: `#${string}`) => void;
}

function getSectionId(href: string) {
  return href.replace(/^#/, '');
}

export function RailNavItemGroup({
  activeSectionId,
  items,
  onItemSelect,
}: RailNavItemGroupProps) {
  return (
    <ol className="rail-nav-item-group">
      {items.map((item, index) => {
        const sectionId = getSectionId(item.href);

        return (
          <RailNavItem
            href={item.href}
            index={index + 1}
            isActive={sectionId === activeSectionId}
            key={item.href}
            label={item.label}
            onSelect={onItemSelect}
          />
        );
      })}
    </ol>
  );
}

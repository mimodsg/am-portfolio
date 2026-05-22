export interface FloatingNavigationRailItem {
  label: string;
  href: `#${string}`;
}

export interface FloatingNavigationRailProps {
  ariaLabel?: string;
  items?: FloatingNavigationRailItem[];
  statusLabel?: string;
  statusValue?: string;
}

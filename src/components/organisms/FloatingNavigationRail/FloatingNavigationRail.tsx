import { useEffect, useMemo, useState } from 'react';
import type { MouseEvent } from 'react';

import { RailLogo } from '@/components/atoms/RailLogo';
import { RailStatus } from '@/components/atoms/RailStatus';
import { RailNavItemGroup } from '@/components/molecules/RailNavItemGroup';

import type {
  FloatingNavigationRailItem,
  FloatingNavigationRailProps,
} from './FloatingNavigationRail.types';

import './floating-navigation-rail.css';

const DEFAULT_ITEMS: FloatingNavigationRailItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Knowledge', href: '#knowledge' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

function getSectionId(href: string) {
  return href.replace(/^#/, '');
}

export function FloatingNavigationRail({
  ariaLabel = 'Primary navigation',
  items = DEFAULT_ITEMS,
  statusLabel = 'Status',
  statusValue = 'Available',
}: FloatingNavigationRailProps) {
  const sectionIds = useMemo(() => items.map((item) => getSectionId(item.href)), [items]);
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0]);

  useEffect(() => {
    setActiveSectionId(sectionIds[0]);
  }, [sectionIds]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return undefined;
    }

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              firstEntry.boundingClientRect.top - secondEntry.boundingClientRect.top,
          )[0];

        if (visibleEntry?.target.id) {
          setActiveSectionId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.01],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  function handleLinkClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const section = document.getElementById(getSectionId(href));

    if (!section) {
      return;
    }

    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSectionId(section.id);
  }

  return (
    <aside className="floating-navigation-rail" aria-label="Site navigation">
      <RailLogo />

      <nav className="floating-navigation-rail__nav" aria-label={ariaLabel}>
        <RailNavItemGroup
          activeSectionId={activeSectionId}
          items={items}
          onItemSelect={handleLinkClick}
        />
      </nav>

      <RailStatus label={statusLabel} value={statusValue} />
    </aside>
  );
}

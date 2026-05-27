import type { HTMLAttributes } from 'react';

import { ContactMetaBox, type ContactMetaItem } from '@/components/molecules/ContactMetaBox';
import { Statistics, type StatisticItem } from '@/components/molecules/Statistics';
import { Teaser, type TeaserContext } from '@/components/molecules/Teaser';
import { cn } from '@/lib/cn';
import type { SectionAlign } from '@/types/sectionAlignment';

import './profile-overview.css';

export type ProfileOverviewAlign = SectionAlign;

export interface ProfileOverviewProps extends HTMLAttributes<HTMLElement> {
  align?: ProfileOverviewAlign;
  contactItems: ContactMetaItem[];
  eyebrow?: string;
  heading: string;
  headingId?: string;
  imageAlt: string;
  imageSrc: string;
  intro?: string;
  statistics: StatisticItem[];
  teaserContext?: TeaserContext;
}

export function ProfileOverview({
  align = 'left',
  className,
  contactItems,
  eyebrow,
  heading,
  headingId = 'profile-overview-title',
  imageAlt,
  imageSrc,
  intro,
  statistics,
  teaserContext = 'light',
  ...props
}: ProfileOverviewProps) {
  return (
    <section
      aria-labelledby={headingId}
      className={cn('profile-overview', `profile-overview--${align}`, className)}
      {...props}
    >
      <Teaser
        className="profile-overview__teaser"
        context={teaserContext}
        eyebrow={eyebrow}
        heading={heading}
        headingId={headingId}
        intro={intro}
        variant="stacked"
      />

      <div className="profile-overview__grid">
        <img
          alt={imageAlt}
          className="profile-overview__image"
          loading="lazy"
          src={imageSrc}
        />
        <Statistics
          className="profile-overview__statistics"
          items={statistics}
        />
        <ContactMetaBox
          className="profile-overview__contact"
          items={contactItems}
        />
      </div>
    </section>
  );
}

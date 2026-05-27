import { useEffect, useMemo, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Button } from '@/components/atoms/Button';
import { TimelineDate } from '@/components/atoms/TimelineDate';
import { ExperienceCard } from '@/components/molecules/ExperienceCard';
import { Teaser } from '@/components/molecules/Teaser';
import { workExperienceTimeline } from '@/data/experience';
import type { WorkExperienceTimelineEntry } from '@/data/experience';
import { cn } from '@/lib/cn';
import type { SectionAlign } from '@/types/sectionAlignment';

import './work-experience-timeline.css';

export interface WorkExperienceTimelineProps extends HTMLAttributes<HTMLElement> {
  align?: SectionAlign;
  eyebrow?: string;
  initialVisibleCount?: number;
  heading?: string;
  intro?: string;
  items?: WorkExperienceTimelineEntry[];
}

function allowsScrollAnimation() {
  if (typeof window.matchMedia !== 'function') {
    return false;
  }

  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function WorkExperienceTimeline({
  align = 'left',
  className,
  eyebrow = 'Experience',
  heading = 'A timeline of experience, delivery, and craft.',
  id = 'experience',
  initialVisibleCount = 3,
  intro = 'A compact view of the roles and operating modes that shaped my approach to frontend architecture, product systems, and implementation quality.',
  items = workExperienceTimeline,
  ...props
}: WorkExperienceTimelineProps) {
  const timelineRef = useRef<HTMLElement>(null);
  const headingId = `${id}-title`;
  const trackId = `${id}-timeline`;
  const [isExpanded, setIsExpanded] = useState(false);
  const canExpand = items.length > initialVisibleCount;
  const visibleItems = useMemo(
    () => (isExpanded ? items : items.slice(0, initialVisibleCount)),
    [initialVisibleCount, isExpanded, items],
  );

  useEffect(() => {
    const root = timelineRef.current;

    if (!root || !allowsScrollAnimation()) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const timelineItems = gsap.utils.toArray<HTMLElement>(
        '.work-experience-timeline__item',
      );
      const timelineNodes = gsap.utils.toArray<HTMLElement>(
        '.work-experience-timeline__node',
      );

      gsap.fromTo(
        '.work-experience-timeline__rule',
        { scaleY: 0.86 },
        {
          ease: 'none',
          scaleY: 1,
          scrollTrigger: {
            end: 'center 50%',
            scrub: true,
            start: 'top 80%',
            trigger: root,
          },
        },
      );

      timelineItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0.5, y: index % 2 === 0 ? 48 : 32 },
          {
            ease: 'none',
            opacity: 1,
            scrollTrigger: {
              end: 'center 50%',
              scrub: true,
              start: 'top 80%',
              trigger: item,
            },
            y: index % 2 === 0 ? -18 : -10,
          },
        );
      });

      timelineNodes.forEach((node) => {
        gsap.fromTo(
          node,
          { scale: 0.65 },
          {
            ease: 'none',
            scale: 1.08,
            scrollTrigger: {
              end: 'center 50%',
              scrub: true,
              start: 'top 85%',
              trigger: node,
            },
          },
        );
      });
    }, root);

    return () => {
      context.revert();
    };
  }, [visibleItems.length]);

  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        'work-experience-timeline',
        `work-experience-timeline--${align}`,
        className,
      )}
      id={id}
      ref={timelineRef}
      {...props}
    >
      <Teaser
        className="work-experience-timeline__teaser"
        eyebrow={eyebrow}
        heading={heading}
        headingId={headingId}
        intro={intro}
      />

      <ol className="work-experience-timeline__track" id={trackId}>
        <li aria-hidden="true" className="work-experience-timeline__rule" />
        {visibleItems.map((item, index) => {
          const isLeftAligned = index % 2 === 0;

          return (
            <li
              className={cn(
                'work-experience-timeline__item',
                isLeftAligned
                  ? 'work-experience-timeline__item--left'
                  : 'work-experience-timeline__item--right',
              )}
              key={item.id}
            >
              <TimelineDate className="work-experience-timeline__date">
                {item.period}
              </TimelineDate>

              <div
                className="work-experience-timeline__axis"
                aria-hidden="true"
              >
                <span className="work-experience-timeline__node" />
                <span className="work-experience-timeline__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <ExperienceCard
                className={cn(
                  'work-experience-timeline__content',
                  isLeftAligned && 'experience-card--align-end',
                )}
                item={item}
              />
            </li>
          );
        })}
      </ol>

      {canExpand ? (
        <div className="work-experience-timeline__actions">
          <Button
            aria-controls={trackId}
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((currentValue) => !currentValue)}
            type="button"
            variant="outline"
          >
            {isExpanded ? 'Show less experience' : 'View all experience'}
          </Button>
        </div>
      ) : null}
    </section>
  );
}

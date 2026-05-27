import { Fragment, useEffect, useRef, type HTMLAttributes } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { cn } from '@/lib/cn';
import type { SectionAlign } from '@/types/sectionAlignment';

import './teaser.css';

export type TeaserVariant =
  | 'horizontal'
  | 'stacked'
  | 'big'
  | 'big-media'
  | 'small';
export type TeaserContext = 'light' | 'dark';

export type TeaserBackgroundMedia =
  | {
      alt?: string;
      src: string;
      type: 'image';
    }
  | {
      fallbackImageSrc: string;
      posterSrc?: string;
      src: string;
      type: 'video';
    };

export interface TeaserProps extends HTMLAttributes<HTMLDivElement> {
  align?: SectionAlign;
  backgroundMedia?: TeaserBackgroundMedia;
  context?: TeaserContext;
  eyebrow?: string;
  heading: string;
  headingLevel?: 1 | 2 | 3;
  headingId?: string;
  intro?: string;
  variant?: TeaserVariant;
}

function allowsScrollAnimation() {
  if (typeof window.matchMedia !== 'function') {
    return false;
  }

  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function renderTextWithLineBreaks(text: string) {
  return text.split('\n').map((line, index) => (
    <Fragment key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </Fragment>
  ));
}

export function Teaser({
  align = 'left',
  backgroundMedia,
  className,
  context = 'light',
  eyebrow,
  heading,
  headingLevel = 2,
  headingId,
  intro,
  variant = 'horizontal',
  ...props
}: TeaserProps) {
  const teaserRef = useRef<HTMLDivElement>(null);
  const HeadingTag = `h${headingLevel}` as const;
  const shouldShowIntro = variant !== 'small' && intro;
  const shouldShowBackgroundMedia = variant === 'big-media' && backgroundMedia;

  useEffect(() => {
    const root = teaserRef.current;

    if (!root || variant === 'small' || !allowsScrollAnimation()) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const title = root.querySelector<HTMLElement>('.teaser__title');

      if (!title) {
        return;
      }

      gsap.fromTo(
        title,
        { y: 0 },
        {
          ease: 'none',
          scrollTrigger: {
            end: 'bottom top',
            scrub: true,
            start: 'top 384px',
            trigger: root,
          },
          yPercent: -40,
        },
      );
    }, root);

    return () => {
      context.revert();
    };
  }, [variant]);

  return (
    <div
      className={cn(
        'teaser',
        `teaser--${variant}`,
        `teaser--${context}`,
        `teaser--${align}`,
        className,
      )}
      ref={teaserRef}
      {...props}
    >
      {shouldShowBackgroundMedia ? (
        <div className="teaser__media" aria-hidden="true">
          {backgroundMedia.type === 'image' ? (
            <img
              alt={backgroundMedia.alt ?? ''}
              className="teaser__media-image"
              src={backgroundMedia.src}
            />
          ) : (
            <>
              <img
                alt=""
                className="teaser__media-image teaser__media-image--fallback"
                src={backgroundMedia.fallbackImageSrc}
              />
              <video
                autoPlay
                className="teaser__media-video"
                loop
                muted
                playsInline
                poster={backgroundMedia.posterSrc ?? backgroundMedia.fallbackImageSrc}
              >
                <source src={backgroundMedia.src} />
              </video>
            </>
          )}
        </div>
      ) : null}
      {eyebrow ? <p className="teaser__eyebrow">{eyebrow}</p> : null}
      <div className="teaser__content">
        <HeadingTag className="teaser__title" id={headingId}>
          {renderTextWithLineBreaks(heading)}
        </HeadingTag>
        {shouldShowIntro ? (
          <p className="teaser__lede">{renderTextWithLineBreaks(intro)}</p>
        ) : null}
      </div>
    </div>
  );
}

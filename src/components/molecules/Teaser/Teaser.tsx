import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

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
  backgroundMedia?: TeaserBackgroundMedia;
  context?: TeaserContext;
  eyebrow: string;
  heading: string;
  headingId?: string;
  intro?: string;
  variant?: TeaserVariant;
}

export function Teaser({
  backgroundMedia,
  className,
  context = 'light',
  eyebrow,
  heading,
  headingId,
  intro,
  variant = 'horizontal',
  ...props
}: TeaserProps) {
  const shouldShowIntro = variant !== 'small' && intro;
  const shouldShowBackgroundMedia = variant === 'big-media' && backgroundMedia;

  return (
    <div
      className={cn(
        'teaser',
        `teaser--${variant}`,
        `teaser--${context}`,
        className,
      )}
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
      <p className="teaser__eyebrow">{eyebrow}</p>
      <div className="teaser__content">
        <h2 className="teaser__title" id={headingId}>
          {heading}
        </h2>
        {shouldShowIntro ? <p className="teaser__lede">{intro}</p> : null}
      </div>
    </div>
  );
}

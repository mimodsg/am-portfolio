import type { HTMLAttributes } from 'react';

import { ButtonLink } from '@/components/atoms/Button';
import { Citation, Quote } from '@/components/atoms/Typography';
import {
  ContactMetaBox,
  type ContactMetaItem,
} from '@/components/molecules/ContactMetaBox';
import { cn } from '@/lib/cn';

import './site-footer.css';

export interface SiteFooterProps extends HTMLAttributes<HTMLElement> {
  contactItems: ContactMetaItem[];
  ctaHref: string;
  ctaLabel: string;
  citation: string;
  quote: string;
  siteLabel?: string;
  year?: number;
}

export function SiteFooter({
  citation,
  className,
  contactItems,
  ctaHref,
  ctaLabel,
  quote,
  siteLabel = 'alvaromena.com',
  year = new Date().getFullYear(),
  ...props
}: SiteFooterProps) {
  return (
    <footer className={cn('site-footer', className)} {...props}>
      <div className="site-footer__content">
        <div className="site-footer__primary">
          <div className="site-footer__quote-block">
            <Quote>{quote}</Quote>
            <Citation className="site-footer__quote-citation">{citation}</Citation>
          </div>

          <ButtonLink className="site-footer__cta" href={ctaHref} variant="secondary">
            {ctaLabel}
          </ButtonLink>
        </div>

        <div className="site-footer__meta">
          <ContactMetaBox items={contactItems} />
        </div>

        <p className="site-footer__copyright">
          <span>&copy; {year}</span>
          <span>|</span>
          <span>{siteLabel}</span>
        </p>
      </div>
    </footer>
  );
}

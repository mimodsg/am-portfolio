import { ButtonLink } from '@/components/atoms/Button';

import './floating-cta-rail.css';

export interface FloatingCtaRailProps {
  contactHref: string;
  contactLabel: string;
  downloadFileName?: string;
  downloadHref: string;
  downloadLabel: string;
}

export function FloatingCtaRail({
  contactHref,
  contactLabel,
  downloadFileName,
  downloadHref,
  downloadLabel,
}: FloatingCtaRailProps) {
  return (
    <aside className="floating-cta-rail" aria-label="Quick actions">
      <ButtonLink
        className="floating-cta-rail__button"
        href={contactHref}
        variant="primary"
      >
        {contactLabel}
      </ButtonLink>
      <ButtonLink
        className="floating-cta-rail__button"
        download={downloadFileName}
        href={downloadHref}
        variant="secondary"
      >
        {downloadLabel}
      </ButtonLink>
    </aside>
  );
}

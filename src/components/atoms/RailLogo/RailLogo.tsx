import logoUrl from '../../../../assets/images/logo.svg?url';

import './rail-logo.css';

export interface RailLogoProps {
  href?: `#${string}`;
  label?: string;
}

export function RailLogo({ href = '#home', label = 'AM Portfolio home' }: RailLogoProps) {
  return (
    <a className="rail-logo" href={href} aria-label={label}>
      <img className="rail-logo__image" src={logoUrl} alt="" width="128" height="128" />
    </a>
  );
}

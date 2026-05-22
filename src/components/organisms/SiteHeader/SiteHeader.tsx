import { navigationItems } from '@/data/navigation';

import './site-header.css';

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="/" aria-label="AM Portfolio home">
        AM
      </a>
      <nav className="site-header__nav" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a className="site-header__link" href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

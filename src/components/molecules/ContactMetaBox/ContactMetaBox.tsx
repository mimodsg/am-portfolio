import type { HTMLAttributes } from 'react';

import { HeroIcon, type HeroIconName } from '@/components/atoms/HeroIcon';
import { cn } from '@/lib/cn';

import './contact-meta-box.css';

export interface ContactMetaItem {
  href: string;
  icon: HeroIconName;
  label: string;
  value: string;
}

export interface ContactMetaBoxProps extends HTMLAttributes<HTMLElement> {
  items: ContactMetaItem[];
}

export function ContactMetaBox({
  className,
  items,
  ...props
}: ContactMetaBoxProps) {
  return (
    <aside className={cn('contact-meta-box', className)} {...props}>
      <ul className="contact-meta-box__list">
        {items.map((item) => (
          <li className="contact-meta-box__item" key={`${item.label}-${item.href}`}>
            <a
              aria-label={item.label}
              className="contact-meta-box__link"
              href={item.href}
              target="_blank"
              rel='nofollow'
            >
              <HeroIcon
                aria-hidden="true"
                className="contact-meta-box__icon"
                name={item.icon}
              />
              <span className="contact-meta-box__value">{item.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

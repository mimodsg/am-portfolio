import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { FloatingNavigationRail } from './FloatingNavigationRail';

const observe = vi.fn();
const disconnect = vi.fn();

let observerCallback: IntersectionObserverCallback;

class MockIntersectionObserver {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds = [];

  constructor(callback: IntersectionObserverCallback) {
    observerCallback = callback;
  }

  disconnect = disconnect;
  observe = observe;
  takeRecords = () => [];
  unobserve = vi.fn();
}

describe('FloatingNavigationRail', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
    HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('renders the default wayfinding links and status', () => {
    render(<FloatingNavigationRail />);

    expect(screen.getByRole('link', { name: 'AM Portfolio home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '01 Home' })).toHaveAttribute('href', '#home');
    expect(screen.getByRole('link', { name: '04 Projects' })).toHaveAttribute(
      'href',
      '#projects',
    );
    expect(screen.getByLabelText('Status: Available')).toBeInTheDocument();
  });

  it('updates the current link when a section enters the viewport', () => {
    render(
      <>
        <section id="home">Home</section>
        <section id="about">About</section>
        <FloatingNavigationRail />
      </>,
    );

    act(() => {
      observerCallback(
        [
          {
            boundingClientRect: { top: 0 },
            isIntersecting: true,
            target: document.getElementById('about') as HTMLElement,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    expect(screen.getByRole('link', { name: '02 About' })).toHaveAttribute(
      'aria-current',
      'true',
    );
  });

  it('smooth scrolls to an available section when a link is selected', () => {
    render(
      <>
        <section id="about">About</section>
        <FloatingNavigationRail />
      </>,
    );

    fireEvent.click(screen.getByRole('link', { name: '02 About' }));

    expect(document.getElementById('about')?.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  it('disconnects the section observer on unmount', () => {
    const { unmount } = render(
      <>
        <section id="home">Home</section>
        <FloatingNavigationRail />
      </>,
    );

    unmount();

    expect(disconnect).toHaveBeenCalled();
  });
});

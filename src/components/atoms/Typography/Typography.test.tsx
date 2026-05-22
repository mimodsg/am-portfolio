import { render, screen } from '@testing-library/react';

import { Eyebrow, Heading, Text } from './Typography';

describe('Typography', () => {
  it('renders a semantic heading at the requested level', () => {
    render(
      <Heading as="h1" size="hero">
        Systems Architect
      </Heading>,
    );

    expect(
      screen.getByRole('heading', { level: 1, name: 'Systems Architect' }),
    ).toBeInTheDocument();
  });

  it('renders paragraph text', () => {
    render(<Text>Structured interface work.</Text>);

    expect(screen.getByText('Structured interface work.').tagName).toBe('P');
  });

  it('renders eyebrow copy as text content', () => {
    render(<Eyebrow>Foundation</Eyebrow>);

    expect(screen.getByText('Foundation')).toBeInTheDocument();
  });
});

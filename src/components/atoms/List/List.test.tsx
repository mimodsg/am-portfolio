import { render, screen, within } from '@testing-library/react';

import { List } from './List';

describe('List', () => {
  it('renders accessible list items', () => {
    render(
      <List
        items={[{ text: 'Frontend architecture' }, { text: 'Design systems' }]}
      />,
    );

    const list = screen.getByRole('list');

    expect(within(list).getAllByRole('listitem')).toHaveLength(2);
  });

  it('renders optional item labels', () => {
    render(<List items={[{ label: 'Focus', text: 'Systems delivery' }]} />);

    expect(screen.getByText('Focus')).toBeInTheDocument();
    expect(screen.getByText('Systems delivery')).toBeInTheDocument();
  });
});

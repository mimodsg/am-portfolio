import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { TechnicalSystemsGraph } from './TechnicalSystemsGraph';

vi.mock('./ReagraphSystemsCanvas', () => ({
  ReagraphSystemsCanvas: ({
    nodes,
    onNodeDragged,
    onNodePointerOut,
    onNodePointerOver,
  }: {
    draggedNodePositions?: unknown;
    isInteractive?: boolean;
    nodes: Array<{ id: string; label?: string }>;
    onNodeDragged?: (node: { id: string }) => void;
    onNodePointerOut?: () => void;
    onNodePointerOver?: (node: { id: string }) => void;
  }) => (
    <div aria-label="Technology relationship graph">
      {nodes.map((node) => (
        <button
          key={node.id}
          onDoubleClick={() => onNodeDragged?.({ id: node.id })}
          onMouseEnter={() => onNodePointerOver?.({ id: node.id })}
          onMouseLeave={() => onNodePointerOut?.()}
          type="button"
        >
          {node.label}
        </button>
      ))}
    </div>
  ),
}));

describe('TechnicalSystemsGraph', () => {
  it('renders grouped technical system nodes', async () => {
    render(<TechnicalSystemsGraph />);

    expect(
      screen.getByRole('region', { name: 'Technical systems' }),
    ).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: 'Frontend' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Backend' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Platform' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /React/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Design Systems/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Drupal/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Laravel/i })).toBeInTheDocument();
  });

  it('supports section content alignment', () => {
    const { container } = render(<TechnicalSystemsGraph align="right" />);

    expect(container.firstChild).toHaveClass('technical-systems-graph--right');
  });

  it('shows node detail only while a node is hovered', async () => {
    const user = userEvent.setup();

    render(<TechnicalSystemsGraph />);

    expect(
      screen.queryByRole('heading', { name: 'Gutenberg' }),
    ).not.toBeInTheDocument();

    const node = screen.getByRole('button', { name: /Gutenberg/i });

    await user.hover(node);

    expect(screen.getByRole('heading', { name: 'Gutenberg' })).toBeInTheDocument();
    expect(
      screen.getByText(/Block editor workflows and componentized authoring/i),
    ).toBeInTheDocument();

    await user.unhover(node);

    expect(
      screen.queryByRole('heading', { name: 'Gutenberg' }),
    ).not.toBeInTheDocument();
  });

  it('locks graph interactions until requested', async () => {
    const user = userEvent.setup();

    render(<TechnicalSystemsGraph />);

    const unlockButton = screen.getByRole('button', {
      name: 'Interact with graph',
    });

    expect(unlockButton).toBeInTheDocument();

    await user.click(unlockButton);

    expect(
      screen.getByRole('button', { name: 'Lock graph' }),
    ).toBeInTheDocument();
  });
});

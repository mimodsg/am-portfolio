import type { Preview } from '@storybook/react-vite';

import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    a11y: {
      test: 'todo',
    },
    backgrounds: {
      default: 'paper',
      options: {
        paper: { name: 'Paper', value: '#FAFAF8' },
        neutral: { name: 'Neutral', value: '#DDD9E4' },
      },
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
};

export default preview;

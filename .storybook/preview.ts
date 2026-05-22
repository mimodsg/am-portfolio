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
        paper: { name: 'Stone 50', value: '#fafaf9' },
        neutral: { name: 'Zinc 200', value: '#e4e4e7' },
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

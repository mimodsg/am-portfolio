import { HomePage } from '@/components/templates/HomePage';

export const routes = [
  {
    path: '/',
    label: 'Home',
    element: <HomePage />,
  },
] as const;

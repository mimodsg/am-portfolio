export type TechnicalSystemCluster =
  | 'Systems'
  | 'Frontend'
  | 'Backend'
  | 'Platform';

export interface TechnicalSystemNode {
  id: string;
  label: string;
  cluster: TechnicalSystemCluster;
  summary: string;
  x: number;
  y: number;
}

export interface TechnicalSystemEdge {
  from: string;
  to: string;
}

export const technicalSystemNodes: TechnicalSystemNode[] = [
  {
    id: 'technical-systems',
    label: 'Technical Systems',
    cluster: 'Systems',
    summary:
      'A connected view of frontend, backend, and platform decisions as one technical system.',
    x: 50,
    y: 50,
  },
  {
    id: 'frontend',
    label: 'Frontend',
    cluster: 'Frontend',
    summary:
      'Interface architecture, component systems, and product-facing implementation.',
    x: 10,
    y: 18,
  },
  {
    id: 'react',
    label: 'React',
    cluster: 'Frontend',
    summary:
      'Component architecture, application foundations, and durable frontend delivery.',
    x: 30,
    y: 12,
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    cluster: 'Frontend',
    summary:
      'Typed contracts that keep interface systems explicit, maintainable, and safer to extend.',
    x: 30,
    y: 20,
  },
  {
    id: 'design-systems',
    label: 'Design Systems',
    cluster: 'Frontend',
    summary:
      'Reusable UI patterns, component APIs, and implementation standards for product teams.',
    x: 30,
    y: 28,
  },
  {
    id: 'tailwind',
    label: 'Tailwind',
    cluster: 'Frontend',
    summary:
      'Token-driven styling, utility composition, and restrained interface implementation.',
    x: 55,
    y: 25,
  },
  {
    id: 'backend',
    label: 'Backend',
    cluster: 'Backend',
    summary:
      'Server-side language fluency, CMS foundations, and framework relationships.',
    x: 10,
    y: 52,
  },
  {
    id: 'php',
    label: 'PHP',
    cluster: 'Backend',
    summary:
      'Backend fluency for CMS integrations, platform constraints, and full-stack delivery.',
    x: 30,
    y: 42,
  },
  {
    id: 'python',
    label: 'Python',
    cluster: 'Backend',
    summary:
      'Backend scripting, data handling, and pragmatic platform support work.',
    x: 30,
    y: 66,
  },
  {
    id: 'csharp',
    label: 'C#',
    cluster: 'Backend',
    summary:
      'Experience reading and working across typed backend ecosystems when systems require it.',
    x: 30,
    y: 76,
  },
  {
    id: 'drupal',
    label: 'Drupal',
    cluster: 'Backend',
    summary:
      'Structured content modeling, editorial workflows, and enterprise CMS foundations.',
    x: 55,
    y: 34,
  },
  {
    id: 'twig',
    label: 'Twig',
    cluster: 'Backend',
    summary:
      'Template architecture that keeps content, markup, and reusable view logic organized.',
    x: 77,
    y: 31,
  },
  {
    id: 'sdc',
    label: 'SDC',
    cluster: 'Backend',
    summary:
      'Single Directory Components for Drupal component ownership and frontend consistency.',
    x: 77,
    y: 38,
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    cluster: 'Backend',
    summary:
      'Editorial platforms, custom content structures, and practical CMS implementation.',
    x: 55,
    y: 47,
  },
  {
    id: 'acf',
    label: 'ACF',
    cluster: 'Backend',
    summary:
      'Field architecture for content authorship, structured data, and maintainable templates.',
    x: 77,
    y: 45,
  },
  {
    id: 'gutenberg',
    label: 'Gutenberg',
    cluster: 'Backend',
    summary:
      'Block editor workflows and componentized authoring experiences.',
    x: 77,
    y: 52,
  },
  {
    id: 'laravel',
    label: 'Laravel',
    cluster: 'Backend',
    summary:
      'Application structure, routing, and backend patterns for product-facing systems.',
    x: 55,
    y: 58,
  },
  {
    id: 'symfony',
    label: 'Symfony',
    cluster: 'Backend',
    summary:
      'Framework conventions and service-oriented foundations behind PHP platforms.',
    x: 55,
    y: 65,
  },
  {
    id: 'flask',
    label: 'Flask',
    cluster: 'Backend',
    summary:
      'Small service surfaces, API prototypes, and focused backend workflows.',
    x: 55,
    y: 75,
  },
  {
    id: 'platform',
    label: 'Platform',
    cluster: 'Platform',
    summary:
      'Build tooling, preview workflows, testing, and deployment surfaces around the code.',
    x: 10,
    y: 88,
  },
  {
    id: 'vite',
    label: 'Vite',
    cluster: 'Platform',
    summary:
      'Fast application builds, modern development ergonomics, and focused frontend tooling.',
    x: 30,
    y: 85,
  },
  {
    id: 'storybook',
    label: 'Storybook',
    cluster: 'Platform',
    summary:
      'Component documentation, visual review, and isolated states for shared UI systems.',
    x: 55,
    y: 83,
  },
  {
    id: 'vitest',
    label: 'Vitest',
    cluster: 'Platform',
    summary:
      'Behavior-focused tests that protect component contracts and implementation quality.',
    x: 55,
    y: 90,
  },
  {
    id: 'vercel',
    label: 'Vercel',
    cluster: 'Platform',
    summary:
      'Preview deployments, production delivery, and front-of-house hosting workflows.',
    x: 77,
    y: 88,
  },
];

export const technicalSystemEdges: TechnicalSystemEdge[] = [
  { from: 'technical-systems', to: 'frontend' },
  { from: 'technical-systems', to: 'backend' },
  { from: 'technical-systems', to: 'platform' },
  { from: 'frontend', to: 'react' },
  { from: 'frontend', to: 'typescript' },
  { from: 'frontend', to: 'design-systems' },
  { from: 'design-systems', to: 'tailwind' },
  { from: 'backend', to: 'php' },
  { from: 'backend', to: 'python' },
  { from: 'backend', to: 'csharp' },
  { from: 'php', to: 'drupal' },
  { from: 'php', to: 'wordpress' },
  { from: 'php', to: 'laravel' },
  { from: 'php', to: 'symfony' },
  { from: 'drupal', to: 'twig' },
  { from: 'drupal', to: 'sdc' },
  { from: 'wordpress', to: 'acf' },
  { from: 'wordpress', to: 'gutenberg' },
  { from: 'python', to: 'flask' },
  { from: 'platform', to: 'vite' },
  { from: 'vite', to: 'storybook' },
  { from: 'vite', to: 'vitest' },
  { from: 'platform', to: 'vercel' },
];

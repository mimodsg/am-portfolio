export type TechnicalSystemCluster =
  | 'Systems'
  | 'Architecture & Engineering'
  | 'Frontend'
  | 'Leadership & Communication'
  | 'Tools'
  | 'Backend';

export interface TechnicalSystemNode {
  id: string;
  label: string;
  cluster: TechnicalSystemCluster;
  summary: string;
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
      'A connected view of architecture, implementation, collaboration, platforms, and delivery workflows.',
  },

  // Architecture & Engineering

  {
    id: 'architecture-engineering',
    label: 'Architecture',
    cluster: 'Architecture & Engineering',
    summary:
      'Architecture planning, frontend systems, integration workflows, and AI-assisted engineering practices.',
  },

  {
    id: 'systems-architecture',
    label: 'Systems Architecture',
    cluster: 'Architecture & Engineering',
    summary:
      'Structured engineering patterns, maintainable architectures, and scalable platform planning.',
  },

  {
    id: 'mvc-architecture',
    label: 'MVC',
    cluster: 'Architecture & Engineering',
    summary:
      'Model-view-controller architecture for maintainable application structure.',
  },

  {
    id: 'oop',
    label: 'OOP',
    cluster: 'Architecture & Engineering',
    summary:
      'Object-oriented programming principles for scalable systems and backend applications.',
  },

  {
    id: 'cms-architecture',
    label: 'CMS Architecture',
    cluster: 'Architecture & Engineering',
    summary:
      'Structured editorial systems and scalable content management workflows.',
  },

  {
    id: 'frontend-systems',
    label: 'Frontend Systems',
    cluster: 'Architecture & Engineering',
    summary:
      'Reusable UI systems, responsive implementation, and accessibility-focused frontend development.',
  },

  {
    id: 'design-systems',
    label: 'Design Systems',
    cluster: 'Architecture & Engineering',
    summary:
      'Reusable interface systems and implementation standards for scalable products.',
  },

  {
    id: 'atomic-design',
    label: 'Atomic Design',
    cluster: 'Architecture & Engineering',
    summary:
      'Structured UI methodology for scalable component composition.',
  },

  {
    id: 'component-driven-development',
    label: 'Components',
    cluster: 'Architecture & Engineering',
    summary:
      'Component-first implementation focused on reuse and maintainability.',
  },

  {
    id: 'responsive-web-design',
    label: 'Responsive',
    cluster: 'Architecture & Engineering',
    summary:
      'Adaptive layouts and interfaces across devices and breakpoints.',
  },

  {
    id: 'accessibility',
    label: 'Accessibility',
    cluster: 'Architecture & Engineering',
    summary:
      'Accessible interfaces aligned with WCAG standards and usability best practices.',
  },

  {
    id: 'integration-delivery',
    label: 'Integration & Delivery',
    cluster: 'Architecture & Engineering',
    summary:
      'API integration, optimization, documentation, and delivery workflows.',
  },

  {
    id: 'rest-apis',
    label: 'REST APIs',
    cluster: 'Architecture & Engineering',
    summary:
      'Service integration and structured API communication workflows.',
  },

  {
    id: 'api-integrations',
    label: 'Integrations',
    cluster: 'Architecture & Engineering',
    summary:
      'Connecting platforms, systems, and external services through maintainable integrations.',
  },

  {
    id: 'performance-optimization',
    label: 'Performance',
    cluster: 'Architecture & Engineering',
    summary:
      'Frontend and backend optimization for scalable user experiences.',
  },

  {
    id: 'technical-documentation',
    label: 'Documentation',
    cluster: 'Architecture & Engineering',
    summary:
      'Technical documentation supporting maintainability and implementation clarity.',
  },

  {
    id: 'ci-cd',
    label: 'CI/CD',
    cluster: 'Architecture & Engineering',
    summary:
      'Automated delivery workflows supporting deployment and release consistency.',
  },

  {
    id: 'ai-automation',
    label: 'AI & Automation',
    cluster: 'Architecture & Engineering',
    summary:
      'AI-assisted workflows, automation systems, and LLM integration practices.',
  },

  {
    id: 'ai-development',
    label: 'AI Development',
    cluster: 'Architecture & Engineering',
    summary:
      'Applied AI workflows supporting development and technical operations.',
  },

  {
    id: 'ai-agent-systems',
    label: 'AI Agents',
    cluster: 'Architecture & Engineering',
    summary:
      'Agent-based workflows and task orchestration systems.',
  },

  {
    id: 'llm-integrations',
    label: 'LLM',
    cluster: 'Architecture & Engineering',
    summary:
      'Language model integration for automation and product workflows.',
  },

  {
    id: 'prompt-engineering',
    label: 'Prompts',
    cluster: 'Architecture & Engineering',
    summary:
      'Structured prompt design for reliable AI-assisted workflows.',
  },

  {
    id: 'ai-assisted-development',
    label: 'AI-Assisted',
    cluster: 'Architecture & Engineering',
    summary:
      'Using AI tooling to support implementation, planning, and development.',
  },

  {
    id: 'automation-workflows',
    label: 'Automation',
    cluster: 'Architecture & Engineering',
    summary:
      'Automated workflows for repetitive engineering and delivery tasks.',
  },

  // Frontend

  {
    id: 'frontend',
    label: 'Frontend',
    cluster: 'Frontend',
    summary:
      'Frontend languages, frameworks, and interface implementation systems.',
  },

  {
    id: 'frontend-programming-languages',
    label: 'Languages',
    cluster: 'Frontend',
    summary:
      'Frontend languages and styling foundations.',
  },

  {
    id: 'javascript',
    label: 'JavaScript',
    cluster: 'Frontend',
    summary:
      'Frontend scripting and application behavior for interactive experiences.',
  },

  {
    id: 'typescript',
    label: 'TypeScript',
    cluster: 'Frontend',
    summary:
      'Typed frontend systems for scalable application development.',
  },

  {
    id: 'html5',
    label: 'HTML5',
    cluster: 'Frontend',
    summary:
      'Semantic markup and structured frontend implementation.',
  },

  {
    id: 'css3',
    label: 'CSS3',
    cluster: 'Frontend',
    summary:
      'Styling systems, layouts, and responsive interface implementation.',
  },

  {
    id: 'tailwind-css',
    label: 'Tailwind',
    cluster: 'Frontend',
    summary:
      'Utility-first styling and token-driven frontend implementation.',
  },

  {
    id: 'frontend-frameworks',
    label: 'Frameworks',
    cluster: 'Frontend',
    summary:
      'Frontend libraries and application frameworks.',
  },

  {
    id: 'react',
    label: 'React',
    cluster: 'Frontend',
    summary:
      'Component architecture and scalable frontend application development.',
  },

  {
    id: 'nextjs',
    label: 'NextJS',
    cluster: 'Frontend',
    summary:
      'React framework for routed frontend applications and modern web platforms.',
  },

  {
    id: 'alpine-js',
    label: 'Alpine.js',
    cluster: 'Frontend',
    summary:
      'Lightweight frontend interactivity for progressively enhanced interfaces.',
  },

  // Backend

  {
    id: 'backend',
    label: 'Backend',
    cluster: 'Backend',
    summary:
      'Backend languages, CMS ecosystems, frameworks, APIs, and application systems.',
  },

  {
    id: 'backend-programming-languages',
    label: 'Languages',
    cluster: 'Backend',
    summary:
      'Backend languages and server-side application development.',
  },

  {
    id: 'php',
    label: 'PHP',
    cluster: 'Backend',
    summary:
      'Primary backend language across CMS systems and full-stack platforms.',
  },

  {
    id: 'cms',
    label: 'CMS',
    cluster: 'Backend',
    summary:
      'Content management systems and editorial platform ecosystems.',
  },

  {
    id: 'drupal',
    label: 'Drupal',
    cluster: 'Backend',
    summary:
      'Enterprise CMS architecture and structured content workflows.',
  },

  {
    id: 'sdc',
    label: 'SDC',
    cluster: 'Backend',
    summary:
      'Single Directory Components for structured Drupal component systems.',
  },

  {
    id: 'twig',
    label: 'Twig',
    cluster: 'Backend',
    summary:
      'Template architecture for Drupal and Symfony frontend rendering.',
  },

  {
    id: 'wordpress',
    label: 'WordPress',
    cluster: 'Backend',
    summary:
      'Custom editorial platforms and CMS-driven web experiences.',
  },

  {
    id: 'acf',
    label: 'ACF',
    cluster: 'Backend',
    summary:
      'Structured field management and editorial data modeling.',
  },

  {
    id: 'gutenberg',
    label: 'Gutenberg',
    cluster: 'Backend',
    summary:
      'Block-based editorial experiences and componentized content workflows.',
  },

  {
    id: 'shopify',
    label: 'Shopify',
    cluster: 'Backend',
    summary:
      'Commerce-oriented storefront implementation and platform customization.',
  },

  {
    id: 'backend-frameworks',
    label: 'Frameworks',
    cluster: 'Backend',
    summary:
      'Backend frameworks and application architecture systems.',
  },

  {
    id: 'laravel',
    label: 'Laravel',
    cluster: 'Backend',
    summary:
      'PHP application framework for structured backend systems.',
  },

  {
    id: 'symfony',
    label: 'Symfony',
    cluster: 'Backend',
    summary:
      'Framework conventions and service-oriented backend architecture.',
  },

  {
    id: 'python',
    label: 'Python',
    cluster: 'Backend',
    summary:
      'Automation, scripting, backend tooling, and lightweight applications.',
  },

  {
    id: 'flask',
    label: 'Flask',
    cluster: 'Backend',
    summary:
      'Lightweight backend framework for APIs and focused applications.',
  },

  {
    id: 'csharp',
    label: 'C#',
    cluster: 'Backend',
    summary:
      'Typed backend development and enterprise application support.',
  },

  {
    id: 'dotnet',
    label: '.NET',
    cluster: 'Backend',
    summary:
      'Enterprise backend framework and application platform experience.',
  },

  {
    id: 'sql',
    label: 'SQL',
    cluster: 'Backend',
    summary:
      'Relational database systems and structured data querying.',
  },

  // Leadership & Communication

  {
    id: 'leadership-communication',
    label: 'Leadership',
    cluster: 'Leadership & Communication',
    summary:
      'Technical leadership, mentorship, collaboration, communication, and engineering guidance.',
  },

  {
    id: 'soft-skills',
    label: 'Soft Skills',
    cluster: 'Leadership & Communication',
    summary:
      'Communication, mentorship, strategic thinking, and collaborative delivery practices.',
  },

  {
    id: 'technical-leadership',
    label: 'Leadership',
    cluster: 'Leadership & Communication',
    summary:
      'Guiding technical direction and engineering standards.',
  },

  {
    id: 'communication',
    label: 'Communication',
    cluster: 'Leadership & Communication',
    summary:
      'Clear communication across technical and stakeholder teams.',
  },

  {
    id: 'cross-functional-collaboration',
    label: 'Collaboration',
    cluster: 'Leadership & Communication',
    summary:
      'Cross-disciplinary collaboration across design, backend, frontend, and strategy teams.',
  },

  {
    id: 'mentorship',
    label: 'Mentorship',
    cluster: 'Leadership & Communication',
    summary:
      'Supporting engineering growth through review and guidance.',
  },

  {
    id: 'strategic-thinking',
    label: 'Strategy',
    cluster: 'Leadership & Communication',
    summary:
      'Balancing technical implementation with long-term platform direction.',
  },

  {
    id: 'problem-solving',
    label: 'Problem Solving',
    cluster: 'Leadership & Communication',
    summary:
      'Breaking down complex technical problems into practical solutions.',
  },

  {
    id: 'system-architecture-thinking',
    label: 'Systems Thinking',
    cluster: 'Leadership & Communication',
    summary:
      'Understanding technical platforms as connected organizational systems.',
  },

  {
    id: 'remote-collaboration',
    label: 'Remote',
    cluster: 'Leadership & Communication',
    summary:
      'Distributed collaboration across remote and international teams.',
  },

  {
    id: 'process-improvement',
    label: 'Process',
    cluster: 'Leadership & Communication',
    summary:
      'Improving engineering workflows and implementation practices.',
  },

  {
    id: 'agile-development',
    label: 'Agile',
    cluster: 'Leadership & Communication',
    summary:
      'Iterative planning and collaborative delivery workflows.',
  },

  {
    id: 'scrum',
    label: 'Scrum',
    cluster: 'Leadership & Communication',
    summary:
      'Sprint-based workflows and structured engineering delivery.',
  },

  {
    id: 'technical-screening',
    label: 'Screening',
    cluster: 'Leadership & Communication',
    summary:
      'Technical evaluation of engineering candidates and implementations.',
  },

  {
    id: 'technical-interview',
    label: 'Interviews',
    cluster: 'Leadership & Communication',
    summary:
      'Assessing communication, technical depth, and engineering judgment.',
  },

  {
    id: 'code-review',
    label: 'Code Review',
    cluster: 'Leadership & Communication',
    summary:
      'Reviewing implementation quality, maintainability, and standards.',
  },

  // Tools

  {
    id: 'tools',
    label: 'Tools',
    cluster: 'Tools',
    summary:
      'Frontend tooling, local environments, deployment platforms, and engineering workflows.',
  },

  {
    id: 'frontend-tooling',
    label: 'Frontend Tooling',
    cluster: 'Tools',
    summary:
      'Frontend build systems and asset pipeline tooling.',
  },

  {
    id: 'vite',
    label: 'Vite',
    cluster: 'Tools',
    summary:
      'Modern frontend build tooling and development workflows.',
  },

  {
    id: 'webpack',
    label: 'Webpack',
    cluster: 'Tools',
    summary:
      'Frontend bundling and configurable build systems.',
  },

  {
    id: 'gulp',
    label: 'Gulp',
    cluster: 'Tools',
    summary:
      'Task automation and frontend asset workflows.',
  },

  {
    id: 'compass',
    label: 'Compass',
    cluster: 'Tools',
    summary:
      'Legacy Sass tooling and frontend styling workflows.',
  },

  {
    id: 'component-ui-systems',
    label: 'Component Systems',
    cluster: 'Tools',
    summary:
      'Reusable UI systems and component documentation tooling.',
  },

  {
    id: 'pattern-lab',
    label: 'Pattern Lab',
    cluster: 'Tools',
    summary:
      'Pattern libraries and reusable frontend implementation systems.',
  },

  {
    id: 'storybook',
    label: 'Storybook',
    cluster: 'Tools',
    summary:
      'Component documentation and isolated UI development workflows.',
  },

  {
    id: 'local-development',
    label: 'Local Development',
    cluster: 'Tools',
    summary:
      'Containerized local development environments and workflows.',
  },

  {
    id: 'docker',
    label: 'Docker',
    cluster: 'Tools',
    summary:
      'Containerized development and repeatable local platform environments.',
  },

  {
    id: 'lando',
    label: 'Lando',
    cluster: 'Tools',
    summary:
      'Container-based CMS development environments.',
  },

  {
    id: 'ddev',
    label: 'DDEV',
    cluster: 'Tools',
    summary:
      'Local development tooling for PHP and CMS projects.',
  },

  {
    id: 'lamp',
    label: 'LAMP',
    cluster: 'Tools',
    summary:
      'Traditional PHP development environment stack.',
  },

  {
    id: 'version-control-database',
    label: 'Version Control',
    cluster: 'Tools',
    summary:
      'Source control systems and relational database tooling.',
  },

  {
    id: 'git',
    label: 'Git',
    cluster: 'Tools',
    summary:
      'Version control, branching workflows, and collaboration.',
  },

  {
    id: 'mysql',
    label: 'MySQL',
    cluster: 'Tools',
    summary:
      'Relational databases supporting CMS and application platforms.',
  },

  {
    id: 'hosting-platforms',
    label: 'Hosting',
    cluster: 'Tools',
    summary:
      'Hosting environments and cloud platform infrastructure.',
  },

  {
    id: 'acquia',
    label: 'Acquia',
    cluster: 'Tools',
    summary:
      'Enterprise Drupal hosting and cloud delivery workflows.',
  },

  {
    id: 'pantheon',
    label: 'Pantheon',
    cluster: 'Tools',
    summary:
      'Managed CMS hosting and deployment workflows.',
  },

  {
    id: 'aws',
    label: 'AWS',
    cluster: 'Tools',
    summary:
      'Cloud infrastructure and production platform support.',
  },
];

export const technicalSystemEdges: TechnicalSystemEdge[] = [
  { from: 'technical-systems', to: 'architecture-engineering' },
  { from: 'technical-systems', to: 'frontend' },
  { from: 'technical-systems', to: 'backend' },
  { from: 'technical-systems', to: 'leadership-communication' },
  { from: 'technical-systems', to: 'tools' },

  // Architecture & Engineering

  { from: 'architecture-engineering', to: 'systems-architecture' },
  { from: 'architecture-engineering', to: 'frontend-systems' },
  { from: 'architecture-engineering', to: 'integration-delivery' },
  { from: 'architecture-engineering', to: 'ai-automation' },

  { from: 'systems-architecture', to: 'mvc-architecture' },
  { from: 'systems-architecture', to: 'oop' },
  { from: 'systems-architecture', to: 'cms-architecture' },

  { from: 'frontend-systems', to: 'design-systems' },
  { from: 'frontend-systems', to: 'atomic-design' },
  { from: 'frontend-systems', to: 'component-driven-development' },
  { from: 'frontend-systems', to: 'responsive-web-design' },
  { from: 'frontend-systems', to: 'accessibility' },

  { from: 'integration-delivery', to: 'rest-apis' },
  { from: 'integration-delivery', to: 'api-integrations' },
  { from: 'integration-delivery', to: 'performance-optimization' },
  { from: 'integration-delivery', to: 'technical-documentation' },
  { from: 'integration-delivery', to: 'ci-cd' },

  { from: 'ai-automation', to: 'ai-development' },
  { from: 'ai-automation', to: 'ai-agent-systems' },
  { from: 'ai-automation', to: 'llm-integrations' },
  { from: 'ai-automation', to: 'prompt-engineering' },
  { from: 'ai-automation', to: 'ai-assisted-development' },
  { from: 'ai-automation', to: 'automation-workflows' },

  // Frontend

  { from: 'frontend', to: 'frontend-programming-languages' },
  { from: 'frontend', to: 'frontend-frameworks' },

  { from: 'frontend-programming-languages', to: 'javascript' },
  { from: 'frontend-programming-languages', to: 'typescript' },
  { from: 'frontend-programming-languages', to: 'html5' },
  { from: 'frontend-programming-languages', to: 'css3' },

  { from: 'css3', to: 'tailwind-css' },

  { from: 'frontend-frameworks', to: 'react' },
  { from: 'frontend-frameworks', to: 'alpine-js' },

  { from: 'react', to: 'nextjs' },

  // Backend

  { from: 'backend', to: 'backend-programming-languages' },

  { from: 'backend-programming-languages', to: 'php' },
  { from: 'backend-programming-languages', to: 'python' },
  { from: 'backend-programming-languages', to: 'csharp' },
  { from: 'backend-programming-languages', to: 'sql' },

  { from: 'php', to: 'cms' },
  { from: 'php', to: 'backend-frameworks' },

  { from: 'cms', to: 'drupal' },
  { from: 'cms', to: 'wordpress' },
  { from: 'cms', to: 'shopify' },

  { from: 'drupal', to: 'sdc' },
  { from: 'drupal', to: 'twig' },

  { from: 'wordpress', to: 'acf' },
  { from: 'wordpress', to: 'gutenberg' },

  { from: 'backend-frameworks', to: 'laravel' },
  { from: 'backend-frameworks', to: 'symfony' },

  { from: 'python', to: 'flask' },

  { from: 'csharp', to: 'dotnet' },

  // Leadership

  { from: 'leadership-communication', to: 'soft-skills' },

  { from: 'soft-skills', to: 'technical-leadership' },
  { from: 'soft-skills', to: 'communication' },
  { from: 'soft-skills', to: 'cross-functional-collaboration' },
  { from: 'soft-skills', to: 'mentorship' },
  { from: 'soft-skills', to: 'strategic-thinking' },
  { from: 'soft-skills', to: 'problem-solving' },
  { from: 'soft-skills', to: 'system-architecture-thinking' },
  { from: 'soft-skills', to: 'remote-collaboration' },
  { from: 'soft-skills', to: 'process-improvement' },
  { from: 'soft-skills', to: 'agile-development' },
  { from: 'soft-skills', to: 'scrum' },
  { from: 'soft-skills', to: 'technical-screening' },
  { from: 'soft-skills', to: 'technical-interview' },
  { from: 'soft-skills', to: 'code-review' },

  // Tools

  { from: 'tools', to: 'frontend-tooling' },
  { from: 'tools', to: 'component-ui-systems' },
  { from: 'tools', to: 'local-development' },
  { from: 'tools', to: 'version-control-database' },
  { from: 'tools', to: 'hosting-platforms' },

  { from: 'frontend-tooling', to: 'vite' },
  { from: 'frontend-tooling', to: 'webpack' },
  { from: 'frontend-tooling', to: 'gulp' },
  { from: 'frontend-tooling', to: 'compass' },

  { from: 'component-ui-systems', to: 'pattern-lab' },
  { from: 'component-ui-systems', to: 'storybook' },

  { from: 'local-development', to: 'docker' },
  { from: 'local-development', to: 'lando' },
  { from: 'local-development', to: 'ddev' },
  { from: 'local-development', to: 'lamp' },

  { from: 'version-control-database', to: 'git' },
  { from: 'version-control-database', to: 'mysql' },

  { from: 'hosting-platforms', to: 'acquia' },
  { from: 'hosting-platforms', to: 'pantheon' },
  { from: 'hosting-platforms', to: 'aws' },
];

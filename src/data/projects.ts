export type FeaturedProjectTone = 'light' | 'dark';

export interface FeaturedProject {
  client: string;
  description?: string;
  imageAlt: string;
  imageSrc: string;
  palette: 'stone' | 'ink' | 'violet';
  title: string;
  tone: FeaturedProjectTone;
}

export const featuredProjects: FeaturedProject[] = [
  {
    client: 'O3 World',
    title: 'Ironman',
    imageAlt: 'Editorial landscape placeholder for the featured project preview.',
    imageSrc: '../../assets/images/portfolio-ironman.jpg',
    description: 'Built with Drupal 10 and Acquia Site Studio, the Ironman platform focused on scalable editorial workflows, component-driven frontend implementation, and high-traffic performance.',
    tone: 'light',
    palette: 'stone',
  },
  {
    client: 'Phase 2',
    title: 'Smithsonian - National Air and Space Museum',
    description: 'Built for the Smithsonian National Air and Space Museum, the platform focused on scalable frontend systems, reusable React components, and structured design implementation within a large Drupal-based digital experience.',
    imageAlt: 'Editorial landscape placeholder for the CMS architecture preview.',
    imageSrc: '../../assets/images/portfolio-smithsonian.jpg',
    tone: 'dark',
    palette: 'violet',
  },
  {
    client: 'Continion',
    title: 'St. Edwards University',
    description: 'Built for St. Edward’s University, the platform focused on long-term Drupal modernization, content migration workflows, and scalable CMS architecture supporting the university’s ongoing digital operations.',
    imageAlt: 'Editorial landscape placeholder for the frontend delivery preview.',
    imageSrc: '../../assets/images/portfolio-stedwards.jpg',
    tone: 'dark',
    palette: 'ink',
  },
    {
    client: 'Code & Theory',
    title: 'NBC Sports Winter Olympics',
    description: 'Built for St. Edward’s University, the platform focused on long-term Drupal modernization, content migration workflows, and scalable CMS architecture supporting the university’s ongoing digital operations.',
    imageAlt: 'Editorial landscape placeholder for the frontend delivery preview.',
    imageSrc: '../../assets/images/portfolio-olympics.jpg',
    tone: 'light',
    palette: 'stone',
  },
];

export const featuredProject = featuredProjects[0];

import landscapeImageUrl from '../../assets/images/landscape.jpg';

export type FeaturedProjectTone = 'light' | 'dark';

export interface FeaturedProject {
  client: string;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  tone: FeaturedProjectTone;
  palette: 'stone' | 'ink' | 'clay';
}

export const featuredProjects: FeaturedProject[] = [
  {
    client: 'Independent product team',
    title: 'Technical Systems Portfolio',
    description:
      'A focused editorial build that pairs systems thinking, interface structure, and implementation detail in a durable React foundation.',
    imageAlt: 'Editorial landscape placeholder for the featured project preview.',
    imageSrc: landscapeImageUrl,
    tone: 'light',
    palette: 'stone',
  },
  {
    client: 'Platform engineering group',
    title: 'CMS Architecture System',
    description:
      'A structured authoring foundation for componentized publishing, reusable content models, and maintainable delivery workflows.',
    imageAlt: 'Editorial landscape placeholder for the CMS architecture preview.',
    imageSrc: landscapeImageUrl,
    tone: 'dark',
    palette: 'ink',
  },
  {
    client: 'Design systems team',
    title: 'Frontend Delivery Framework',
    description:
      'A reusable interface layer that connects design direction, technical standards, and implementation patterns across product surfaces.',
    imageAlt: 'Editorial landscape placeholder for the frontend delivery preview.',
    imageSrc: landscapeImageUrl,
    tone: 'light',
    palette: 'clay',
  },
];

export const featuredProject = featuredProjects[0];

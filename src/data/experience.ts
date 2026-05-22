export interface ExperiencePoint {
  label: string;
  value: string;
}

export interface WorkExperienceTimelineEntry {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  highlights: string[];
}

export const experiencePoints: ExperiencePoint[] = [
  { label: 'Focus', value: 'Frontend architecture' },
  { label: 'Practice', value: 'Systems-oriented implementation' },
  { label: 'Approach', value: 'Editorial restraint with technical clarity' },
];

export const workExperienceTimeline: WorkExperienceTimelineEntry[] = [
  {
    id: 'lead-engineering',
    period: '2024 - Present',
    role: 'Lead Engineer',
    organization: 'Product systems and platform delivery',
    location: 'Remote',
    summary:
      'Leading frontend architecture, implementation standards, and product system decisions across durable web experiences.',
    highlights: [
      'Established reusable interface patterns for long-term product scale.',
      'Connected design direction with production-ready technical systems.',
      'Guided implementation quality across accessibility, performance, and maintainability.',
    ],
  },
  {
    id: 'senior-fullstack',
    period: '2021 - 2024',
    role: 'Senior Fullstack Engineer',
    organization: 'CMS, commerce, and editorial platforms',
    location: 'Remote',
    summary:
      'Built structured frontend systems for content-heavy products with clear authoring models and reliable delivery paths.',
    highlights: [
      'Delivered component architectures for marketing, editorial, and product surfaces.',
      'Improved platform consistency through typed data and reusable UI contracts.',
      'Partnered with design and content teams to reduce implementation drift.',
    ],
  },
  {
    id: 'frontend-systems',
    period: '2018 - 2021',
    role: 'Frontend Engineer',
    organization: 'Design systems and application interfaces',
    location: 'Hybrid',
    summary:
      'Created modular UI foundations that balanced visual craft, accessibility, and engineering clarity.',
    highlights: [
      'Translated design language into maintainable component systems.',
      'Improved interface reliability through focused testing and documentation.',
      'Built responsive layouts for complex product and content requirements.',
    ],
  },
  {
    id: 'design-development',
    period: '2015 - 2018',
    role: 'Designer / Developer',
    organization: 'Digital product and brand systems',
    location: 'On site',
    summary:
      'Worked across visual design and implementation, shaping a practice grounded in structure, restraint, and delivery.',
    highlights: [
      'Created brand-aware web interfaces with careful typographic hierarchy.',
      'Moved fluidly between design exploration and production implementation.',
      'Developed a systems-oriented approach to visual and technical decisions.',
    ],
  },
  {
    id: 'early-web-practice',
    period: '2012 - 2015',
    role: 'Web Designer / Frontend Developer',
    organization: 'Independent digital work',
    location: 'On site',
    summary:
      'Built early web projects that joined brand expression, layout systems, and hands-on frontend implementation.',
    highlights: [
      'Designed and implemented responsive sites for small business and editorial needs.',
      'Built a foundation in typography, layout, and production constraints.',
      'Established the bridge between design judgment and technical execution.',
    ],
  },
];

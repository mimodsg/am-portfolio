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
    id: 'unlock-health',
    period: '2021 - Present',
    role: 'Lead Developer',
    organization: 'Unlock Health',
    location: 'Remote',
    summary:
      'Worked across large-scale healthcare platforms focusing on frontend architecture, reusable systems, CMS implementation, and long-term platform maintainability.',
    highlights: [
      'Built scalable Drupal platforms using component-driven architecture and modern site-building workflows.',
      'Collaborated with cross-functional teams to transform complex requirements into maintainable technical solutions.',
      'Contributed to implementation standards, frontend workflows, and long-term technical planning across multiple ongoing projects.',
    ],
  },
  {
    id: 'o3-world',
    period: '2024 - 2025',
    role: 'Senior Drupal Developer',
    organization: 'O3 World',
    location: 'Remote',
    summary:
      'Contributed to the development of the Ironman digital platform using Drupal 10, React, and Tailwind within a high-traffic decoupled architecture.',
    highlights: [
      'Implemented frontend and CMS solutions for a large-scale sports platform with ongoing editorial and performance requirements.',
      'Integrated external APIs including weather services while helping maintain platform reliability and scalability.',
      'Collaborated across frontend, backend, and sitebuilding workflows using Drupal, React, and Acquia Site Studio.',
    ],
  },
  {
    id: 'phase2',
    period: '2021 - 2022',
    role: 'Senior Drupal Developer',
    organization: 'Phase2',
    location: 'Remote',
    summary:
      'Worked on large-scale Drupal platforms for Mastercard and the Smithsonian National Air and Space Museum, focusing on frontend systems and reusable component architecture.',
    highlights: [
      'Built scalable frontend components using React, TypeScript, Storybook, and Shadow DOM.',
      'Collaborated with design and engineering teams to translate complex design systems into maintainable implementations.',
      'Contributed to reusable UI systems and frontend workflows designed for long-term scalability across multiple teams.',
    ],
  },
  {
    id: 'we-are-conduct',
    period: '2019 - 2021',
    role: 'Lead Developer',
    organization: 'We Are Conduct',
    location: 'Remote',
    summary:
      'Worked across Drupal, Laravel, Vue.js, and .NET platforms, leading modernization efforts, architecture planning, and long-term platform evolution.',
    highlights: [
      'Led Drupal 7 to Drupal 8 migrations focused on scalability, maintainability, and modern frontend architecture.',
      'Architected and implemented custom Drupal solutions, modules, and integrations across multiple enterprise platforms.',
      'Collaborated across frontend, backend, and infrastructure workflows to support complex multi-system environments.',
    ],
  },
  {
    id: 'toptal',
    period: '2017 - 2020',
    role: 'Drupal CMS Screener Developer',
    organization: 'Toptal',
    location: 'Remote',
    summary:
      'Evaluated Drupal developers through technical interviews, architecture discussions, and code review processes focused on real-world engineering standards.',
    highlights: [
      'Conducted technical screenings covering Drupal architecture, implementation quality, and problem-solving approaches.',
      'Reviewed developer communication, maintainability thinking, and long-term engineering decision-making.',
      'Assessed candidates across multiple seniority levels and development backgrounds within the Drupal ecosystem.',
    ],
  },
  {
    id: 'taoti-creative',
    period: '2018 - 2019',
    role: 'Senior Fullstack Developer',
    organization: 'Taoti Creative',
    location: 'Remote',
    summary:
      'Worked across Drupal and WordPress platforms focusing on frontend architecture, reusable systems, and long-term platform maintainability.',
    highlights: [
      'Led frontend implementation for Drupal 8 platforms using component-based architecture approaches.',
      'Translated design systems into scalable themes and reusable frontend interfaces.',
      'Collaborated on broader platform structure and architectural decisions across multiple client projects.',
    ],
  },
  {
    id: 'continion',
    period: '2017 - 2018',
    role: 'Senior Drupal Developer',
    organization: 'Continion',
    location: 'Remote',
    summary:
      'Supported and evolved the Drupal platform for St. Edward’s University while leading the migration from Drupal 7 to Drupal 8.',
    highlights: [
      'Led platform modernization efforts focused on maintainability and long-term scalability.',
      'Implemented new features, handled content migrations, and supported system integrations.',
      'Balanced ongoing production support with larger architectural and platform improvements.',
    ],
  },
  {
    id: 'longboard',
    period: '2017 - 2018',
    role: 'Senior Drupal Developer',
    organization: 'Longboard',
    location: 'Remote',
    summary:
      'Maintained and extended a Drupal 8 platform while contributing to new feature development and interface improvements.',
    highlights: [
      'Implemented new platform functionality and supported ongoing production development.',
      'Collaborated on UX and interface thinking for new product features.',
      'Balanced usability, technical implementation, and long-term maintainability across the platform.',
    ],
  },
  {
    id: 'jobsity',
    period: '2013 - 2017',
    role: 'Senior Developer',
    organization: 'Jobsity',
    location: 'Remote',
    summary:
      'Combined mentorship, technical leadership, and hands-on engineering work across Drupal, WordPress, and PHP-based client projects.',
    highlights: [
      'Mentored developers preparing for technical interviews and production engineering roles.',
      'Helped establish technical direction and foundational implementations for new client engagements.',
      'Supported developers on architecture decisions, debugging workflows, and engineering best practices.',
    ],
  },
  {
    id: 'new-target',
    period: '2014 - 2017',
    role: 'Senior Drupal Front-end Specialist',
    organization: 'New Target',
    location: 'Remote / Onsite',
    summary:
      'Worked on digital platforms and applications for NGOs and government-related organizations across remote and onsite environments.',
    highlights: [
      'Collaborated across distributed teams to build and maintain CMS-driven platforms and applications.',
      'Provided onsite support for projects operating under security-sensitive workflows and requirements.',
      'Contributed to structured frontend implementation and long-term platform maintainability.',
    ],
  },
  {
    id: 'propeople',
    period: '2014',
    role: 'Drupal Developer',
    organization: 'ProPeople',
    location: 'Remote',
    summary:
      'Collaborated on the migration of NFL team websites from Sitecore to Drupal within a large-scale multisite platform environment.',
    highlights: [
      'Supported frontend and CMS migration workflows across multiple sports platforms.',
      'Helped standardize implementation approaches across high-visibility team websites.',
      'Balanced migration work with ongoing platform and frontend implementation needs.',
    ],
  },
  {
    id: 'code-theory',
    period: '2013 - 2014',
    role: 'Senior Drupal Developer',
    organization: 'Code & Theory',
    location: 'Remote',
    summary:
      'Worked on large-scale NBC Sports Group platforms including Golf Channel and Winter Olympics digital experiences.',
    highlights: [
      'Built and maintained high-traffic Drupal platforms tied to major sports and media events.',
      'Collaborated with distributed East Coast and West Coast engineering teams.',
      'Balanced frontend implementation, backend development, and rapid production delivery within fast-moving environments.',
    ],
  },
  {
    id: 'early-career',
    period: '2004 - 2013',
    role: 'Early Career',
    organization: 'Foundational Experience',
    location: 'Ecuador / Argentina',
    summary:
      'Early professional experience across web development, design, branding, frontend implementation, and CMS-driven platforms.',
    highlights: [
      'Worked across design studios, web agencies, and custom PHP development environments.',
      'Built foundational experience in frontend development, CMS architecture, and responsive web design.',
      'Combined technical implementation with visual design, branding, and multidisciplinary digital production work.',
    ],
  },
];

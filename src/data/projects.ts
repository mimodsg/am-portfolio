export interface Project {
  title: string;
  context: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    title: 'Frontend Architecture',
    context: 'Design systems, application foundations, and reusable interfaces.',
    outcome: 'Durable UI platforms built for product teams and long-lived codebases.',
  },
  {
    title: 'Systems Delivery',
    context: 'Technical planning, engineering alignment, and implementation quality.',
    outcome: 'Clear execution across ambiguous, cross-functional product work.',
  },
];

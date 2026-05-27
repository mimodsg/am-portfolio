import backgroundVideoFrameUrl from '../../assets/images/background-video-first-frame.jpg';
import profileImageUrl from '../../assets/images/profile-picture.jpg';
import cvPdfUrl from '../../assets/pdf/cv-alvaro-mena.pdf';
import backgroundVideoUrl from '../../assets/video/background video.mp4';

import type { ContactMetaItem } from '@/components/molecules/ContactMetaBox';
import type { StatisticItem } from '@/components/molecules/Statistics';
import type {
  TeaserBackgroundMedia,
  TeaserContext,
} from '@/components/molecules/Teaser';
import type { FloatingNavigationRailItem } from '@/components/organisms/FloatingNavigationRail';
import type {
  TechnicalSystemEdge,
  TechnicalSystemNode,
} from '@/data/technicalSystems';
import {
  technicalSystemEdges,
  technicalSystemNodes,
} from '@/data/technicalSystems';
import type { WorkExperienceTimelineEntry } from '@/data/experience';
import { workExperienceTimeline } from '@/data/experience';
import type { FeaturedProject } from '@/data/projects';
import { featuredProjects } from '@/data/projects';
import type { SectionAlign } from '@/types/sectionAlignment';

export interface HomePageContent {
  contact: {
    ctaHref: string;
    ctaLabel: string;
    eyebrow: string;
    heading: string;
  };
  floatingCtaRail: {
    contactHref: string;
    contactLabel: string;
    downloadFileName: string;
    downloadHref: string;
    downloadLabel: string;
  };
  hero: {
    backgroundMedia: TeaserBackgroundMedia;
    context: TeaserContext;
    eyebrow?: string;
    heading: string;
    intro: string;
  };
  navigation: {
    items: FloatingNavigationRailItem[];
    statusLabel: string;
    statusValue: string;
  };
  profileOverview: {
    align: SectionAlign;
    contactItems: ContactMetaItem[];
    eyebrow?: string;
    heading: string;
    imageAlt: string;
    imageSrc: string;
    intro: string;
    statistics: StatisticItem[];
  };
  projectCollection: {
    align: SectionAlign;
    projects: FeaturedProject[];
  };
  knowledge: {
    align: SectionAlign;
    edges: TechnicalSystemEdge[];
    eyebrow?: string;
    heading: string;
    intro: string;
    nodes: TechnicalSystemNode[];
  };
  workExperienceTimeline: {
    align: SectionAlign;
    eyebrow?: string;
    heading: string;
    initialVisibleCount: number;
    intro: string;
    items: WorkExperienceTimelineEntry[];
  };
}

export const homePageContent: HomePageContent = {
  floatingCtaRail: {
    contactHref: 'mailto:hey@alvaromena.com',
    contactLabel: 'Get in touch',
    downloadFileName: 'cv-alvaro-mena.pdf',
    downloadHref: cvPdfUrl,
    downloadLabel: 'Download CV',
  },
  hero: {
    backgroundMedia: {
      fallbackImageSrc: backgroundVideoFrameUrl,
      src: backgroundVideoUrl,
      type: 'video',
    },
    context: 'dark',
    heading: "Hello! \n I'm Alvaro",
    intro:
      'I’m a lead fullstack developer based in Ecuador, focused on building scalable digital products, frontend systems, and modern platform experiences for teams and organizations.',
  },
  navigation: {
    items: [
      { label: 'Summary', href: '#home' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Knowledge', href: '#knowledge' },
      { label: 'Contact', href: '#contact' },
    ],
    statusLabel: 'Status',
    statusValue: 'Open to work',
  },
  profileOverview: {
    align: 'right',
    contactItems: [
      {
        href: 'mailto:hey@alvaromena.com',
        icon: 'envelope',
        label: 'Email',
        value: 'hey@alvaromena.com',
      },
      {
        href: 'tel:+593987015263',
        icon: 'phone',
        label: 'Phone',
        value: '+593 9 8701 5263',
      },
      {
        href: 'https://www.linkedin.com/in/alvaro-mena',
        icon: 'linkedin',
        label: 'LinkedIn',
        value: 'linkedin.com/in/alvaro-mena',
      },
    ],
    heading:
      'I help teams turn complex ideas into scalable and maintainable digital experiences.',
    imageAlt: 'Editorial profile placeholder.',
    imageSrc: profileImageUrl,
    intro:
      'My work usually starts by understanding how a product, platform, or organization actually operates, not just how it looks on screen. From there, I help define technical approaches, frontend architecture, component systems, and implementation strategies that allow teams to build consistently, collaborate effectively, and continue evolving their platforms over time.',
    statistics: [
      { label: 'Architecture', percentage: 95 },
      { label: 'Frontend', percentage: 93 },
      { label: 'Leadership', percentage: 92 },
      { label: 'CMS', percentage: 90 },
      { label: 'Infrastructure', percentage: 88 },
      { label: 'AI', percentage: 88 },
      { label: 'Backend', percentage: 84 },
    ],
  },
  workExperienceTimeline: {
    align: 'left',
    eyebrow: 'Experience',
    heading: 'A timeline of experience, delivery, and craft.',
    initialVisibleCount: 3,
    intro:
      'From agency environments to enterprise platforms, each role helped shape how I think about collaboration, technical decision-making, frontend implementation, and building products that can evolve sustainably over time.',
    items: workExperienceTimeline,
  },
  projectCollection: {
    align: 'left',
    projects: featuredProjects,
  },
  knowledge: {
    align: 'left',
    eyebrow: 'Knowledge',
    heading: 'Technical systems',
    intro:
      'A connected view of the technologies I use to shape frontend systems, CMS architecture, and backend platform decisions.',
    nodes: technicalSystemNodes,
    edges: technicalSystemEdges,
  },
  contact: {
    ctaHref: 'mailto:hello@example.com',
    ctaLabel: 'Start a conversation',
    eyebrow: 'Contact',
    heading: 'Available for senior frontend and systems work.',
  },
};

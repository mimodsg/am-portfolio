import { Teaser } from '@/components/molecules/Teaser';
import { ProfileOverview } from '@/components/organisms/ProfileOverview';
import { ProjectCollection } from '@/components/organisms/ProjectCollection';
import { SiteFooter } from '@/components/organisms/SiteFooter';
import { TechnicalSystemsGraph } from '@/components/organisms/TechnicalSystemsGraph';
import { WorkExperienceTimeline } from '@/components/organisms/WorkExperienceTimeline';
import { homePageContent } from '@/data/homePage';

import './home-page.css';

export function HomePage() {
  return (
    <main className="home-page">
      <section
        aria-labelledby="hero-title"
        className="home-page__hero"
        id="home"
      >
        <Teaser
          backgroundMedia={homePageContent.hero.backgroundMedia}
          context={homePageContent.hero.context}
          eyebrow={homePageContent.hero.eyebrow}
          heading={homePageContent.hero.heading}
          headingId="hero-title"
          headingLevel={1}
          intro={homePageContent.hero.intro}
          variant="big-media"
        />
      </section>

      <ProfileOverview
        align={homePageContent.profileOverview.align}
        contactItems={homePageContent.profileOverview.contactItems}
        eyebrow={homePageContent.profileOverview.eyebrow}
        heading={homePageContent.profileOverview.heading}
        id="about"
        imageAlt={homePageContent.profileOverview.imageAlt}
        imageSrc={homePageContent.profileOverview.imageSrc}
        intro={homePageContent.profileOverview.intro}
        statistics={homePageContent.profileOverview.statistics}
      />

      <WorkExperienceTimeline
        align={homePageContent.workExperienceTimeline.align}
        eyebrow={homePageContent.workExperienceTimeline.eyebrow}
        heading={homePageContent.workExperienceTimeline.heading}
        initialVisibleCount={homePageContent.workExperienceTimeline.initialVisibleCount}
        intro={homePageContent.workExperienceTimeline.intro}
        items={homePageContent.workExperienceTimeline.items}
      />

      <ProjectCollection
        align={homePageContent.projectCollection.align}
        projects={homePageContent.projectCollection.projects}
      />

      <TechnicalSystemsGraph
        align={homePageContent.knowledge.align}
        edges={homePageContent.knowledge.edges}
        eyebrow={homePageContent.knowledge.eyebrow}
        heading={homePageContent.knowledge.heading}
        id="knowledge"
        intro={homePageContent.knowledge.intro}
        nodes={homePageContent.knowledge.nodes}
      />

      <SiteFooter
        citation={homePageContent.footer.citation}
        contactItems={homePageContent.footer.contactItems}
        ctaHref={homePageContent.footer.ctaHref}
        ctaLabel={homePageContent.footer.ctaLabel}
        id="contact"
        quote={homePageContent.footer.quote}
        siteLabel={homePageContent.footer.siteLabel}
      />
    </main>
  );
}

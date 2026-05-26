import { ButtonLink } from '@/components/atoms/Button';
import { ProjectCollection } from '@/components/organisms/ProjectCollection';
import { TechnicalSystemsGraph } from '@/components/organisms/TechnicalSystemsGraph';
import { WorkExperienceTimeline } from '@/components/organisms/WorkExperienceTimeline';
import { experiencePoints } from '@/data/experience';
import { featuredProjects } from '@/data/projects';

import './home-page.css';

export function HomePage() {
  return (
    <main className="home-page">
      <section className="home-page__hero" id="home" aria-labelledby="hero-title">
        <p className="home-page__eyebrow">Systems / Interfaces / Delivery</p>
        <div className="home-page__hero-grid">
          <div>
            <h1 className="home-page__title" id="hero-title">
              Senior engineering for structured frontend systems.
            </h1>
            <p className="home-page__intro">
              I build durable interfaces, technical foundations, and product
              systems where design judgment and implementation detail carry
              equal weight.
            </p>
            <div className="home-page__actions">
              <ButtonLink href="#projects">View work</ButtonLink>
              <ButtonLink href="#contact" variant="outline">
                Contact
              </ButtonLink>
            </div>
          </div>
          <aside className="home-page__panel" aria-label="Portfolio summary">
            {experiencePoints.map((point) => (
              <div className="home-page__metric" key={point.label}>
                <dt>{point.label}</dt>
                <dd>{point.value}</dd>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <WorkExperienceTimeline />

      <ProjectCollection projects={featuredProjects} />

      <TechnicalSystemsGraph />

      <section
        className="home-page__section home-page__section--contact"
        id="contact"
        aria-labelledby="contact-title"
      >
        <p className="home-page__eyebrow">Contact</p>
        <h2 className="home-page__section-title" id="contact-title">
          Available for senior frontend and systems work.
        </h2>
        <ButtonLink href="mailto:hello@example.com" variant="secondary">
          Start a conversation
        </ButtonLink>
      </section>
    </main>
  );
}

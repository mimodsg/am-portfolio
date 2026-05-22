import { ButtonLink } from '@/components/atoms/Button';
import { experiencePoints } from '@/data/experience';
import { projects } from '@/data/projects';

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
              <ButtonLink href="#work">View work</ButtonLink>
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

      <section className="home-page__section" id="work" aria-labelledby="work-title">
        <div className="home-page__section-header">
          <p className="home-page__eyebrow">Selected Work</p>
          <h2 className="home-page__section-title" id="work-title">
            Technical editorial dossiers.
          </h2>
        </div>
        <div className="home-page__projects">
          {projects.map((project) => (
            <article className="home-page__project" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.context}</p>
              <p>{project.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="home-page__section home-page__section--narrow"
        id="systems"
        aria-labelledby="systems-title"
      >
        <p className="home-page__eyebrow">Systems Thinking</p>
        <h2 className="home-page__section-title" id="systems-title">
          Architecture is a product material.
        </h2>
        <p className="home-page__body">
          The best interface work clarifies how a system behaves, how teams can
          extend it, and how decisions remain visible after the initial build.
        </p>
      </section>

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

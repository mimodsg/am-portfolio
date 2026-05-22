import type { Meta, StoryObj } from '@storybook/react-vite';

import landscapeHalftone from '../../assets/images/landscape-halftone.png';

import './foundations.css';

function Foundations() {
  return (
    <main className="foundations">
      <section className="foundations__section">
        <p className="foundations__eyebrow">Styleguide / Foundations</p>
        <h1 className="foundations__title">Architectural Systems</h1>
        <p className="foundations__intro">
          A restrained editorial system for technical leadership, frontend
          architecture, and systems-oriented implementation work.
        </p>
      </section>

      <section className="foundations__section" aria-labelledby="colors-title">
        <div className="foundations__header">
          <p className="foundations__eyebrow">01</p>
          <h2 className="foundations__heading" id="colors-title">
            Color Tokens
          </h2>
        </div>
        <div className="foundations__swatches">
          <TokenSwatch name="Primary" value="#353533" variable="--color-primary" />
          <TokenSwatch
            name="Secondary"
            value="#626260"
            variable="--color-secondary"
            tone="secondary"
          />
          <TokenSwatch
            name="Tertiary"
            value="#722CFE"
            variable="--color-tertiary"
            tone="tertiary"
          />
          <TokenSwatch
            name="Neutral"
            value="#DDD9E4"
            variable="--color-neutral"
            tone="neutral"
          />
          <TokenSwatch
            name="Surface"
            value="#FAFAF8"
            variable="--color-surface"
            tone="surface"
          />
        </div>
      </section>

      <section className="foundations__section" aria-labelledby="type-title">
        <div className="foundations__header">
          <p className="foundations__eyebrow">02</p>
          <h2 className="foundations__heading" id="type-title">
            Typography
          </h2>
        </div>
        <div className="foundations__type-grid">
          <article>
            <p className="foundations__eyebrow">Display</p>
            <p className="foundations__display">Systems with editorial weight.</p>
          </article>
          <article>
            <p className="foundations__eyebrow">Body</p>
            <p className="foundations__body">
              Roboto Mono carries structured technical writing with a measured
              rhythm and clear scan line.
            </p>
          </article>
          <article>
            <p className="foundations__eyebrow">Metadata</p>
            <p className="foundations__meta">IBM Plex Mono / 12 PX / UPPERCASE</p>
          </article>
        </div>
      </section>

      <section className="foundations__section" aria-labelledby="image-title">
        <div className="foundations__header">
          <p className="foundations__eyebrow">03</p>
          <h2 className="foundations__heading" id="image-title">
            Image Treatment
          </h2>
        </div>
        <figure className="foundations__image-frame">
          <img
            alt="Halftone black and white landscape used as an editorial texture."
            src={landscapeHalftone}
          />
          <figcaption>
            Halftone landscape asset for editorial hero and dossier layouts.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

interface TokenSwatchProps {
  name: string;
  tone?: 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'surface';
  value: string;
  variable: string;
}

function TokenSwatch({
  name,
  tone = 'primary',
  value,
  variable,
}: TokenSwatchProps) {
  return (
    <article className="foundations__swatch">
      <div
        aria-hidden="true"
        className={`foundations__swatch-color foundations__swatch-color--${tone}`}
      />
      <h3>{name}</h3>
      <p>{variable}</p>
      <p>{value}</p>
    </article>
  );
}

const meta = {
  title: 'Foundations/Overview',
  component: Foundations,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Foundations>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

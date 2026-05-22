import type { Meta, StoryObj } from '@storybook/react-vite';

import './colors.css';

const paletteGroups = [
  {
    name: 'Surface / Stone',
    usage: 'Page backgrounds and warm editorial surfaces.',
    swatches: [
      ['stone-50', '#fafaf9'],
      ['stone-100', '#f5f5f4'],
      ['stone-200', '#e7e5e4'],
      ['stone-300', '#d6d3d1'],
    ],
  },
  {
    name: 'Ink / Zinc',
    usage: 'Primary type, rules, borders, and structural contrast.',
    swatches: [
      ['zinc-50', '#fafafa'],
      ['zinc-100', '#f4f4f5'],
      ['zinc-200', '#e4e4e7'],
      ['zinc-300', '#d4d4d8'],
      ['zinc-500', '#71717a'],
      ['zinc-700', '#3f3f46'],
      ['zinc-800', '#27272a'],
      ['zinc-900', '#18181b'],
    ],
  },
  {
    name: 'Secondary / Neutral',
    usage: 'Muted metadata, secondary labels, captions, and quiet UI text.',
    swatches: [
      ['neutral-100', '#f5f5f5'],
      ['neutral-200', '#e5e5e5'],
      ['neutral-300', '#d4d4d4'],
      ['neutral-500', '#737373'],
      ['neutral-600', '#525252'],
      ['neutral-700', '#404040'],
    ],
  },
  {
    name: 'Accent / Violet',
    usage: 'Focus states, active indicators, emphasis, and restrained accents.',
    swatches: [
      ['violet-50', '#f5f3ff'],
      ['violet-100', '#ede9fe'],
      ['violet-200', '#ddd6fe'],
      ['violet-400', '#a78bfa'],
      ['violet-500', '#8b5cf6'],
      ['violet-600', '#7c3aed'],
      ['violet-700', '#6d28d9'],
      ['violet-800', '#5b21b6'],
    ],
  },
] as const;

const currentRoles = [
  ['Surface', 'stone-50', '#fafaf9'],
  ['Primary Ink', 'zinc-800', '#27272a'],
  ['Secondary Ink', 'neutral-600', '#525252'],
  ['Neutral Fill', 'zinc-200', '#e4e4e7'],
  ['Accent', 'violet-600', '#7c3aed'],
] as const;

function Colors() {
  return (
    <main className="colors">
      <section className="colors__intro">
        <p className="colors__eyebrow">Foundations / Colors</p>
        <h1 className="colors__title">Tailwind palette in use.</h1>
        <p className="colors__body">
          The site uses Tailwind default colors selected as close matches to the
          original editorial palette. Variants below show the available shades
          for practical UI use.
        </p>
      </section>

      <section className="colors__section" aria-labelledby="roles-title">
        <div className="colors__section-header">
          <p className="colors__eyebrow">01</p>
          <h2 className="colors__heading" id="roles-title">
            Current Roles
          </h2>
        </div>
        <div className="colors__role-grid">
          {currentRoles.map(([role, utility, value]) => (
            <ColorSwatch key={role} label={role} utility={utility} value={value} />
          ))}
        </div>
      </section>

      {paletteGroups.map((group, index) => (
        <section className="colors__section" key={group.name}>
          <div className="colors__section-header">
            <p className="colors__eyebrow">{String(index + 2).padStart(2, '0')}</p>
            <div>
              <h2 className="colors__heading">{group.name}</h2>
              <p className="colors__body colors__body--muted">{group.usage}</p>
            </div>
          </div>
          <div className="colors__scale">
            {group.swatches.map(([utility, value]) => (
              <ColorSwatch key={utility} utility={utility} value={value} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

interface ColorSwatchProps {
  label?: string;
  utility: string;
  value: string;
}

function ColorSwatch({ label, utility, value }: ColorSwatchProps) {
  const swatchClassName = `colors__swatch-color colors__swatch-color--${utility.replace(
    '-',
    '_',
  )}`;

  return (
    <article className="colors__swatch">
      <div aria-hidden="true" className={swatchClassName} />
      <div>
        {label ? <h3>{label}</h3> : null}
        <p>{utility}</p>
        <p>{value}</p>
      </div>
    </article>
  );
}

const meta = {
  title: 'Foundations/Colors',
  component: Colors,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Colors>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Palette: Story = {};

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import { Link } from '@/components/atoms/Link';

import { Eyebrow, Heading, Text } from './Typography';

import './typography.css';

const displaySamples = [
  ['Display XL', 'Systems with editorial weight.', 'display-xl'],
  ['Display Large', 'Architectural interface craft.', 'display-large'],
  ['Display Medium', 'Structured technical clarity.', 'display-medium'],
  ['Display Small', 'Modular delivery systems.', 'display-small'],
] as const;

const headingSamples = [
  ['H1', 'Senior frontend architecture', 'h1', 'h1'],
  ['H2', 'Platform foundations', 'h2', 'h2'],
  ['H3', 'Project dossier', 'h3', 'h3'],
  ['H4', 'Implementation notes', 'h4', 'h4'],
  ['H5', 'Technical metadata group', 'h5', 'h5'],
  ['H6', 'Interface label heading', 'h6', 'h6'],
] as const;

const paragraphSamples = [
  ['Lead Paragraph', 'Lead copy introduces a section with direct, editorial weight.', 'lead'],
  ['Paragraph Large', 'Large body copy supports important summaries and page introductions.', 'large'],
  ['Paragraph Default', 'Default body copy carries project detail, architecture notes, and long-form context.', 'body'],
  ['Paragraph Small', 'Small copy supports secondary details, captions, and compact annotations.', 'small'],
  ['Paragraph Extra Small', 'Extra small text is reserved for dense metadata and quiet supporting labels.', 'extra-small'],
] as const;

const uiTextSamples = [
  ['Button Text', 'View work'],
  ['Button Label', 'Primary action'],
  ['Input Label', 'Email address'],
  ['Input Value', 'alvaro@example.com'],
  ['Placeholder Text', 'Enter a project name'],
  ['Helper Text', 'Use a professional email address.'],
  ['Validation Error', 'Enter a valid email address.'],
  ['Validation Success', 'Email address confirmed.'],
  ['Tooltip Text', 'Opens the project dossier.'],
  ['Badge Text', 'Available'],
  ['Tag Text', 'Architecture'],
  ['Card Title', 'Frontend platform systems'],
  ['Card Description', 'Reusable interfaces, tokens, and implementation rules.'],
  ['Modal Title', 'Contact Álvaro'],
  ['Modal Description', 'Send a concise note about the project context.'],
  ['Table Heading', 'Capability'],
  ['Table Cell', 'Design systems'],
  ['Accordion Title', 'Implementation details'],
  ['Dropdown Item', 'Selected work'],
  ['Breadcrumb Text', 'Home / Work / Platform'],
  ['Pagination Text', 'Page 1 of 4'],
] as const;

const metadataSamples = [
  ['Figure Caption', 'Fig. 01 / Landscape halftone treatment.'],
  ['Image Caption', 'Editorial image caption for project evidence.'],
  ['Video Caption', 'Playback caption for recorded implementation walkthrough.'],
  ['Article Metadata', 'Filed under Frontend Architecture'],
  ['Author Text', 'By Álvaro Mena'],
  ['Date Text', 'May 22, 2026'],
  ['Reading Time', '6 minute read'],
  ['Category Label', 'Systems'],
  ['Footnote', '1. Implementation details vary by platform constraints.'],
  ['Annotation', 'Annotation / Decision preserved for future maintainers.'],
] as const;

const stateSamples = [
  ['Default State', 'Default interactive text', 'typography-story__state'],
  ['Hover State', 'Hovered interactive text', 'typography-story__state typography-story__state--hover'],
  ['Focus State', 'Focused interactive text', 'typography-story__state typography-story__state--focus'],
  ['Active State', 'Active interactive text', 'typography-story__state typography-story__state--active'],
  ['Disabled State', 'Disabled interactive text', 'typography-story__state typography-story__state--disabled'],
  ['Error State', 'Error message text', 'typography-story__state typography-story__state--error'],
  ['Success State', 'Success message text', 'typography-story__state typography-story__state--success'],
  ['Warning State', 'Warning message text', 'typography-story__state typography-story__state--warning'],
] as const;

function TypographyStyleguide() {
  return (
    <main className="typography-story">
      <section className="typography-story__intro">
        <Eyebrow>Styleguide / Typography</Eyebrow>
        <Heading as="h1" size="display-xl">
          Typography for structured systems.
        </Heading>
        <Text variant="lead">
          A complete type specimen for portfolio pages, project dossiers,
          editorial content, system metadata, interactive states, and compact UI
          surfaces.
        </Text>
      </section>

      <SpecimenSection eyebrow="01" title="Display Scale">
        <div className="typography-story__grid">
          {displaySamples.map(([label, text, size]) => (
            <Sample label={label} key={label}>
              <Heading as="h3" size={size}>
                {text}
              </Heading>
            </Sample>
          ))}
        </div>
      </SpecimenSection>

      <SpecimenSection eyebrow="02" title="Headings">
        <div className="typography-story__grid">
          {headingSamples.map(([label, text, level, size]) => (
            <Sample label={label} key={label}>
              <Heading as={level} size={size}>
                {text}
              </Heading>
            </Sample>
          ))}
        </div>
      </SpecimenSection>

      <SpecimenSection eyebrow="03" title="Editorial Labels">
        <div className="typography-story__grid typography-story__grid--wide">
          <Sample label="Eyebrow">
            <Eyebrow>Selected Work / 2026</Eyebrow>
          </Sample>
          <Sample label="Overline">
            <Text variant="overline">Technical Leadership</Text>
          </Sample>
          <Sample label="Section Title">
            <Heading as="h2" size="section-title">
              Architecture as product material.
            </Heading>
          </Sample>
          <Sample label="Hero Title">
            <Heading as="h1" size="hero-title">
              Senior systems work.
            </Heading>
          </Sample>
        </div>
      </SpecimenSection>

      <SpecimenSection eyebrow="04" title="Paragraphs">
        <div className="typography-story__grid">
          {paragraphSamples.map(([label, text, variant]) => (
            <Sample label={label} key={label}>
              <Text variant={variant}>{text}</Text>
            </Sample>
          ))}
        </div>
      </SpecimenSection>

      <SpecimenSection eyebrow="05" title="Quotes">
        <div className="typography-story__grid">
          <Sample label="Blockquote">
            <blockquote className="typography-story__quote">
              Strong systems make future decisions easier to see.
            </blockquote>
          </Sample>
          <Sample label="Pull Quote">
            <p className="typography-story__pull-quote">
              The interface should explain the architecture without announcing
              itself.
            </p>
          </Sample>
          <Sample label="Citation">
            <cite className="typography-story__citation">Project retrospective</cite>
          </Sample>
          <Sample label="Inline Quote">
            <Text>
              The working principle was <q>make decisions visible</q> across
              the system.
            </Text>
          </Sample>
        </div>
      </SpecimenSection>

      <SpecimenSection eyebrow="06" title="Lists">
        <div className="typography-story__grid">
          <Sample label="Ordered List">
            <ol className="typography-story__list">
              <li>Define the system boundary.</li>
              <li>Document reusable primitives.</li>
              <li>Ship the smallest durable surface.</li>
            </ol>
          </Sample>
          <Sample label="Unordered List">
            <ul className="typography-story__list">
              <li>Frontend architecture</li>
              <li>Design systems</li>
              <li>CMS platform delivery</li>
            </ul>
          </Sample>
          <Sample label="Nested List">
            <ul className="typography-story__list">
              <li>
                Interface systems
                <ul className="typography-story__list">
                  <li>Tokens</li>
                  <li>Components</li>
                </ul>
              </li>
            </ul>
          </Sample>
          <Sample label="Definition List">
            <dl className="typography-story__definition-list">
              <dt>Role</dt>
              <dd>Lead engineer responsible for architecture and delivery.</dd>
              <dt>Focus</dt>
              <dd>Reusable frontend systems with clear implementation rules.</dd>
            </dl>
          </Sample>
        </div>
      </SpecimenSection>

      <SpecimenSection eyebrow="07" title="Inline Formatting">
        <div className="typography-story__grid typography-story__grid--wide">
          <Text>
            <b>Bold</b> and <strong>Strong</strong>
          </Text>
          <Text>
            <i>Italic</i> and <em>Emphasis</em>
          </Text>
          <Text>
            <u>Underline</u> and <s>Strikethrough</s>
          </Text>
          <Text>
            <mark className="typography-story__mark">Highlight</mark>
          </Text>
          <Text>
            Superscript X<sup>2</sup>
          </Text>
          <Text>
            Subscript H<sub>2</sub>O
          </Text>
          <small>Small Text / supporting legal or metadata copy.</small>
        </div>
      </SpecimenSection>

      <SpecimenSection eyebrow="08" title="Links">
        <div className="typography-story__grid typography-story__grid--wide">
          <Link href="#inline">Inline Link</Link>
          <a className="typography-story__link typography-story__link--external" href="#external">
            External Link
          </a>
          <Link href="#navigation" variant="nav">
            Navigation Link
          </Link>
          <a className="typography-story__link typography-story__link--visited" href="#visited">
            Visited Link
          </a>
          <a className="typography-story__link typography-story__link--hover" href="#hover">
            Hover Link
          </a>
        </div>
      </SpecimenSection>

      <SpecimenSection eyebrow="09" title="Code and Monospace">
        <div className="typography-story__grid">
          <Sample label="Inline Code">
            <Text>
              Use <code>apiClient.get('/endpoint')</code> at feature boundaries.
            </Text>
          </Sample>
          <Sample label="Code Block">
            <pre className="typography-story__code">
              <code>{`export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}`}</code>
            </pre>
          </Sample>
          <Sample label="Terminal Output">
            <pre className="typography-story__terminal">{`$ npm run build
✓ built in 101ms`}</pre>
          </Sample>
          <Sample label="Keyboard Input">
            <kbd className="typography-story__kbd">⌘ K</kbd>
          </Sample>
          <Sample label="Monospace Text">
            <Text variant="metadata">src/components/atoms/Typography</Text>
          </Sample>
          <Sample label="JSON Preview">
            <pre className="typography-story__code">
              <code>{`{
  "role": "lead-engineer",
  "focus": "frontend-architecture"
}`}</code>
            </pre>
          </Sample>
        </div>
      </SpecimenSection>

      <SpecimenSection eyebrow="10" title="Captions and Metadata">
        <div className="typography-story__grid typography-story__grid--wide">
          {metadataSamples.map(([label, text]) => (
            <Sample label={label} key={label}>
              <Text variant="metadata">{text}</Text>
            </Sample>
          ))}
        </div>
      </SpecimenSection>

      <SpecimenSection eyebrow="11" title="Interface Text">
        <div className="typography-story__ui-grid">
          {uiTextSamples.map(([label, text]) => (
            <div className="typography-story__ui-row" key={label}>
              <p className="typography-story__label">{label}</p>
              <Text
                className={
                  label === 'Validation Error'
                    ? 'typography-story__validation-error'
                    : label === 'Validation Success'
                      ? 'typography-story__validation-success'
                      : undefined
                }
                variant={label.includes('Description') || label.includes('Helper') ? 'small' : 'body'}
              >
                {text}
              </Text>
            </div>
          ))}
        </div>
      </SpecimenSection>

      <SpecimenSection eyebrow="12" title="Interaction States">
        <div className="typography-story__grid typography-story__grid--wide">
          {stateSamples.map(([label, text, className]) => (
            <Sample label={label} key={label}>
              <span className={className}>{text}</span>
            </Sample>
          ))}
        </div>
      </SpecimenSection>

      <SpecimenSection eyebrow="13" title="Responsive Typography">
        <div className="typography-story__responsive">
          <ResponsiveCard label="Desktop Typography" modifier="desktop" />
          <ResponsiveCard label="Tablet Typography" modifier="tablet" />
          <ResponsiveCard label="Mobile Typography" modifier="mobile" />
          <Sample label="Responsive Scale">
            <Heading as="h3" size="display-large">
              The same token adapts by breakpoint.
            </Heading>
          </Sample>
        </div>
      </SpecimenSection>
    </main>
  );
}

interface SpecimenSectionProps {
  children: ReactNode;
  eyebrow: string;
  title: string;
}

function SpecimenSection({ children, eyebrow, title }: SpecimenSectionProps) {
  return (
    <section className="typography-story__section">
      <div className="typography-story__header">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h2" size="section-title">
          {title}
        </Heading>
      </div>
      {children}
    </section>
  );
}

interface SampleProps {
  children: ReactNode;
  label: string;
}

function Sample({ children, label }: SampleProps) {
  return (
    <article className="typography-story__sample">
      <p className="typography-story__label">{label}</p>
      {children}
    </article>
  );
}

interface ResponsiveCardProps {
  label: string;
  modifier: 'desktop' | 'tablet' | 'mobile';
}

function ResponsiveCard({ label, modifier }: ResponsiveCardProps) {
  return (
    <article
      className={`typography-story__responsive-card typography-story__responsive-card--${modifier}`}
    >
      <p className="typography-story__label">{label}</p>
      <Heading as="h3" size={modifier === 'mobile' ? 'h2' : 'display-small'}>
        Interface systems should stay readable at every viewport.
      </Heading>
      <Text variant={modifier === 'mobile' ? 'small' : 'body'}>
        Responsive typography uses named tokens, not viewport-scaled font sizes.
      </Text>
    </article>
  );
}

const meta = {
  title: 'Atoms/Typography',
  component: TypographyStyleguide,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TypographyStyleguide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Specimen: Story = {};

import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonLink } from '@/components/atoms/Button';
import { Divider } from '@/components/atoms/Divider';
import { Link } from '@/components/atoms/Link';
import { List } from '@/components/atoms/List';
import { Eyebrow, Heading, Text } from '@/components/atoms/Typography';
import { SectionHeader } from '@/components/molecules/SectionHeader';

import './base-elements.css';

function BaseElements() {
  return (
    <main className="base-elements">
      <SectionHeader
        description="Reusable primitives for editorial portfolio pages, technical dossiers, and design system documentation."
        eyebrow="Styleguide / Base"
        heading="Base elements for structured systems."
        headingId="base-elements-title"
        level="h1"
        size="hero"
      />

      <Divider />

      <section
        className="base-elements__section"
        aria-labelledby="headings-title"
      >
        <Eyebrow>01 / Type</Eyebrow>
        <div className="base-elements__stack">
          <Heading id="headings-title" size="h1">
            Headings
          </Heading>
          <Heading as="h3" size="h2">
            Editorial section title
          </Heading>
          <Heading as="h4" size="h3">
            Project dossier heading
          </Heading>
          <Text variant="lede">
            Lede text introduces sections with a direct, technical voice and
            enough space to feel editorial.
          </Text>
          <Text>
            Body copy uses Roboto Mono for a precise rhythm that supports
            architecture notes, project summaries, and implementation context.
          </Text>
          <Text variant="muted">
            Muted copy supports secondary outcomes, constraints, and captions.
          </Text>
          <Text variant="metadata">Metadata / IBM Plex Mono / Uppercase</Text>
        </div>
      </section>

      <Divider />

      <section className="base-elements__section" aria-labelledby="links-title">
        <Eyebrow>02 / Actions</Eyebrow>
        <div className="base-elements__stack">
          <Heading id="links-title" size="h1">
            Links and buttons
          </Heading>
          <Text>
            Inline links can point to <Link href="#systems">systems work</Link>{' '}
            without disrupting long-form reading.
          </Text>
          <div className="base-elements__row">
            <Link href="#work" variant="standalone">
              Standalone link
            </Link>
            <Link href="#navigation" variant="nav">
              Navigation
            </Link>
            <Link href="#repository" variant="metadata">
              Metadata
            </Link>
          </div>
          <div className="base-elements__row">
            <ButtonLink href="#work">View work</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact
            </ButtonLink>
            <ButtonLink href="#details" variant="outline">
              Details
            </ButtonLink>
          </div>
        </div>
      </section>

      <Divider />

      <section className="base-elements__section" aria-labelledby="lists-title">
        <Eyebrow>03 / Lists</Eyebrow>
        <div className="base-elements__grid">
          <div className="base-elements__stack">
            <Heading id="lists-title" size="h2">
              Default list
            </Heading>
            <List
              items={[
                { text: 'Frontend architecture and design system foundations' },
                { text: 'CMS and platform implementation strategy' },
                { text: 'Design-to-development execution across teams' },
              ]}
            />
          </div>
          <div className="base-elements__stack">
            <Heading as="h3" size="h2">
              Metadata list
            </Heading>
            <List
              items={[
                { label: 'Role', text: 'Lead engineer' },
                { label: 'Focus', text: 'Frontend architecture' },
                { label: 'Method', text: 'Systems-oriented delivery' },
              ]}
              variant="metadata"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

const meta = {
  title: 'Foundations/Base Elements',
  component: BaseElements,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BaseElements>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

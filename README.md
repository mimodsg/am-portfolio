# AM Portfolio

Personal portfolio redesign and rebuild for Álvaro Mena.

The site is intended to communicate senior engineering experience, frontend
architecture expertise, systems thinking, CMS and platform depth, technical
leadership, and design sensitivity through a restrained editorial interface.

The portfolio should feel intentional, structured, calm, technical, and highly
curated. It should not read like a generic developer template, startup landing
page, or trend-driven visual experiment.

## Product Direction

The portfolio positions Álvaro as a senior fullstack and lead engineer with a
strong frontend architecture practice, design background, CMS/platform
experience, and long-term product systems mindset.

Primary product goals:

- Present a mature professional identity platform.
- Showcase technical leadership and implementation judgment.
- Demonstrate component-driven frontend architecture.
- Communicate design-to-development fluency.
- Provide a performant, accessible, maintainable production site.

## Design Direction

The visual system is based on the Architectural Systems direction documented in
`DESIGN.md` and informed by `references/brief.md`.

The interface should emphasize:

- Editorial layouts
- Architectural composition
- Technical precision
- Structured minimalism
- Intentional whitespace
- Warm brutalism
- Modular systems thinking
- Quiet premium craft

Core typography:

- `DM Serif Display` for editorial headings and major visual moments.
- `Roboto Mono` for body copy, UI text, navigation, and technical content.
- `IBM Plex Mono` for metadata and labels.

Avoid excessive gradients, glassmorphism, dense dashboards, generic SaaS
patterns, heavy animation, and overly playful interface choices.

## Stack

- React 19+
- TypeScript
- Vite 8+
- Tailwind CSS 4+
- Storybook
- ESLint
- Prettier
- Vitest
- React Testing Library

## Architecture

The codebase follows a static-first, component-driven structure:

```txt
src/
  app/
  components/
  data/
  lib/
  styles/
  test/
  types/
```

Implementation principles:

- Keep components small, typed, accessible, and reusable.
- Keep content in `src/data` where possible.
- Keep design tokens in CSS custom properties.
- Use Tailwind as the styling foundation without long utility strings in JSX.
- Avoid unnecessary runtime dependencies.
- Preserve semantic HTML, keyboard access, visible focus states, and reduced
  motion support.

## Local Development

Install dependencies before running scripts:

```bash
npm install
npm run dev
```

`npm run dev` starts both the Vite app and Storybook so the site and component
styleguide can evolve together.

## Scripts

- `npm run dev` starts the Vite development server and Storybook.
- `npm run dev:app` starts only the Vite development server.
- `npm run storybook` starts the component styleguide at port `6006`.
- `npm run build` type-checks and builds the production app and Storybook.
- `npm run build:app` type-checks and builds only the production app.
- `npm run build-storybook` builds the static Storybook output.
- `npm run lint` runs ESLint.
- `npm run test` runs Vitest.
- `npm run format:check` checks formatting with Prettier.

## Deliverables

Planned deliverables from the brief:

- Design system and Tailwind-compatible tokens
- Responsive homepage
- About page
- Experience and projects pages
- Reusable component library
- Mobile responsive behavior
- Accessibility validation
- Production-ready frontend implementation

## Current Status

The project is in initial setup. The app scaffold, Storybook configuration,
design token foundation, baseline Button component, and foundation styleguide
story are in place. Dependencies still need to be installed before linting,
testing, Storybook, or production builds can run locally.

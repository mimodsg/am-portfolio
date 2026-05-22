# AM Portfolio

# AGENTS.md

## Project Context

This project is a personal portfolio site for a senior systems-oriented engineer with a design background.

The site should communicate:

- Technical leadership
- Frontend architecture experience
- Systems thinking
- Design sensitivity
- Clean implementation
- Editorial restraint
- Professional credibility

The implementation must use the latest stable versions of:

- React
- Tailwind CSS
- Vite
- TypeScript

The codebase must prioritize clean coding, maintainability, accessibility, and long-term scalability.

---

## Core Instructions

All agents working on this project must follow these rules:

1. Use React for all UI implementation.
2. Use Tailwind CSS for styling.
3. Use TypeScript for all application code.
4. Keep components small, focused, and reusable.
5. Do not introduce unnecessary dependencies.
6. Do not use Alpine.js, Svelte, jQuery, or other UI frameworks.
7. Do not use inline styles unless absolutely required.
8. Do not hardcode repeated design values outside the design system.
9. Preserve accessibility in all UI decisions.
10. Prefer clarity over cleverness.

---

## Technology Stack

Use the following stack:

- React 19+
- TypeScript
- Vite 8+
- Tailwind CSS 4+
- CSS custom properties for design tokens
- ESLint
- Prettier
- Vitest
- React Testing Library

Optional only when needed:

- Framer Motion for subtle animation
- Radix UI for accessible primitives
- clsx for conditional class handling
- class-variance-authority for reusable component variants
- Zustand for complex state management

---

## Design System Direction

The visual system should feel:

- Editorial
- Architectural
- Restrained
- Technical
- Premium
- Minimal
- Warm
- Structured

Avoid:

- Generic SaaS aesthetics
- Overly playful visuals
- Excessive gradients
- Decorative animation
- Random color use
- Unstructured spacing
- Inconsistent typography

---

## Code Standards

### General Rules

- Prefer TypeScript over JavaScript.
- Use functional components with hooks.
- Follow the ESLint configuration.
- Write tests for new features.
- Write styles in CSS files instead of placing long Tailwind class strings directly on markup.
- Use Tailwind through component-level classes, CSS modules, or organized CSS files where appropriate.
- Use CSS custom properties for design tokens.
- Keep logic, styling, and data concerns clearly separated.

### Naming Conventions

- Components: PascalCase, for example `UserProfile.tsx`.
- Utilities: camelCase, for example `formatDate.ts`.
- Constants: SCREAMING_SNAKE_CASE.
- Types and interfaces: PascalCase with a clear suffix, for example `UserType`, `UserInterface`, or `ProjectCardProps`.
- Hooks: camelCase starting with `use`, for example `useNavigationState.ts`.
- CSS files: kebab-case, for example `project-card.css`.

### File Organization

- Colocate tests with source files.
- Group related components in folders.
- Use `index.ts` for clean imports.
- Keep component-specific types close to the component.
- Keep shared types in `src/types`.
- Keep shared utilities in `src/lib`.
- Keep static content and structured data in `src/data`.

---

## Folder Structure

Recommended structure:

```txt
src/
  app/
    App.tsx
    routes.tsx

  assets/
    images/
    icons/

  components/
    atoms/
    molecules/
    organisms/
    templates/

  data/
    navigation.ts
    projects.ts
    experience.ts

  hooks/

  lib/
    api.ts
    cn.ts

  styles/
    tokens.css
    globals.css

  types/
```

---

## Component Rules

Components should follow this structure:

```txt
components/
  atoms/
    Button/
      Button.tsx
      Button.types.ts
      Button.test.tsx
      button.css
      index.ts
```

Each component should:

- Have a single responsibility.
- Accept typed props.
- Use semantic HTML.
- Support accessibility states.
- Avoid hidden side effects.
- Avoid fetching data directly unless it is a route-level component.
- Reuse existing components before creating new ones.
- Keep functions small and focused.

---

## Tailwind Rules

Use Tailwind as the styling foundation, but avoid long utility strings directly in JSX.

Preferred approach:

- Use Tailwind inside CSS files with `@apply` when it improves readability.
- Use CSS custom properties for design tokens.
- Keep markup clean and easy to scan.
- Use component-level CSS files for repeated component styles.

### CSS Authoring Style

- Write component styles in CSS files with Tailwind `@apply`.
- Prefer nested BEM-style organization under the owning block when it improves scanability.
- Use valid native CSS nesting only:
  - Descendant elements: `& .component__element`
  - Same-node modifiers: `&.component--modifier`
  - Element modifiers: `& .component__element.component__element--modifier`
  - States: `&:hover`, `&:focus-visible`, and similar pseudo-classes
- Do not use Sass-only selector concatenation such as `&__element` or `&--modifier`; this project does not rely on Sass, and those selectors can be dropped by the browser or toolchain.
- Keep global files such as `globals.css` and `tokens.css` flat unless nesting adds clear value.

Use CSS variables for design tokens:

```css
:root {
  --color-primary: #111111;
  --color-surface: #f8f5ef;
  --color-accent: #e14b2a;
}
```

Avoid:

- Arbitrary values unless justified.
- Repeated long utility chains.
- Custom CSS for simple one-off layout.
- Tailwind config bloat.
- Mixing unrelated styling approaches.

---

## Important Patterns

### API Calls

Always use the API client from `src/lib/api`.

```typescript
import { apiClient } from "@/lib/api";

const data = await apiClient.get("/endpoint");
```

Do not call `fetch` directly inside components unless there is a clear project-approved reason.

### State Management

- Prefer local state when possible.
- Use React Context for global state.
- Consider Zustand only for complex state that becomes difficult to manage with local state or Context.
- Do not introduce global state by default.
- Do not store derived values in state unless necessary.

---

## Accessibility Rules

All UI must support:

- Keyboard navigation
- Visible focus states
- Semantic landmarks
- Proper heading hierarchy
- Sufficient color contrast
- Meaningful link text
- Alt text for meaningful images
- Reduced motion preferences

Never remove focus outlines without replacing them.

---

## Performance Rules

Optimize for:

- Fast first load
- Minimal JavaScript
- Responsive images
- Lazy loading where appropriate
- Static content when possible
- Clean bundle output
- Small reusable components
- Clear asset strategy

Avoid:

- Heavy animation libraries unless needed
- Client-side logic for static content
- Large global state solutions
- Unnecessary runtime dependencies
- Re-render-heavy component trees

---

## Performance Considerations

- Lazy load heavy components.
- Use `React.memo` only for expensive renders.
- Optimize images with responsive image sizes, proper formats, lazy loading, and explicit dimensions.
- Monitor bundle size.
- Avoid importing large libraries for small utilities.
- Keep route-level code splitting in mind.
- Prefer static data files for portfolio content unless dynamic behavior is required.

---

## Content Rules

The site content should sound:

- Professional
- Direct
- Experienced
- Human
- Confident
- Not exaggerated

Avoid:

- Buzzwords
- Corporate filler
- Overclaiming
- Generic AI-sounding phrasing
- Long dashes

---

## React Rules

Use React for stateful UI.

Use local state unless shared state is clearly required.

Use custom hooks only when logic is reused or meaningfully isolated.

Avoid:

- Global state by default
- Prop drilling across many layers
- Overusing context
- Storing derived values in state
- Mixing UI logic with data formatting
- Creating new abstractions before they are needed

---

## Testing Rules

Add tests for:

- Shared components
- Utility functions
- Complex conditional rendering
- Navigation behavior
- Accessibility-critical interactions
- New features

Use:

- Vitest
- React Testing Library

Tests should validate behavior, not implementation details.

---

## Testing Guidelines

- Write tests alongside implementation.
- Focus on user behavior, not implementation.
- Maintain more than 80% coverage for critical paths.
- Use `data-testid` only when semantic queries are not reliable.
- Prefer queries such as `getByRole`, `getByLabelText`, and `getByText`.

---

## Common Pitfalls to Avoid

Do not:

- Create new files unless necessary.
- Use `console.log` in production code.
- Ignore TypeScript errors.
- Skip tests for simple features.
- Create new components before checking existing ones.
- Add dependencies without a clear reason.
- Mix styling conventions.
- Add unrelated refactors to a focused change.
- Remove existing functionality.

Do:

- Check existing components before creating new ones.
- Follow established patterns in the codebase.
- Keep functions small and focused.
- Keep naming consistent.
- Keep files easy to scan.
- Preserve existing behavior.
- Make the smallest clean change that solves the issue.

---

## Deployment

- Main branch deploys to production.
- Pull requests generate previews on Vercel.
- Environment variables are stored in `.env.local` for local development.
- Secrets are managed through the Vercel dashboard.
- Do not commit secrets.
- Do not expose private environment variables in client-side code.

---

## Additional Resources

- Architecture decisions: `docs/architecture.md`
- API documentation: `docs/api.md`
- Component library: Storybook at `localhost:6006`

---

## Agent Behavior

When modifying code:

1. Identify the exact file being changed.
2. Preserve existing functionality.
3. Make the smallest clean change that solves the issue.
4. Return full updated files when changes are more than 2 lines.
5. Do not introduce unrelated changes.
6. Do not rename files unless explicitly required.
7. Do not add suggestions unless requested.
8. Do not use canvas.
9. Do not skip TypeScript or linting concerns.
10. Do not silently change architecture decisions.

---

## Definition of Done

A task is complete when:

- The implementation works.
- The code is typed.
- The UI follows the design system.
- Accessibility has been considered.
- Tests are added or updated when needed.
- No unrelated functionality was changed.
- The solution is simple and maintainable.
- The changed files are clearly identified.

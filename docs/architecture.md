# Architecture

AM Portfolio is a static-first React application built with Vite, TypeScript,
Tailwind CSS, and CSS custom properties.

The source tree separates application entry points, reusable components,
structured content, shared utilities, styles, and shared types:

- `src/app` contains the root application shell and route declarations.
- `src/components` contains small, focused UI components grouped by role.
- `src/data` contains static portfolio content.
- `src/lib` contains shared utilities and service clients.
- `src/styles` contains global styles and design tokens.
- `src/types` contains shared project-level TypeScript types.

The site should remain static and dependency-light unless a product requirement
creates a clear need for runtime state, routing, or backend integration.

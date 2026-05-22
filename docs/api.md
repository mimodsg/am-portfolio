# API

This portfolio does not currently depend on a remote API.

If API access is introduced later, components should not call `fetch` directly.
Use the shared client from `src/lib/api.ts` and keep data fetching at route or
feature boundaries.

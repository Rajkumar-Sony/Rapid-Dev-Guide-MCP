# Frontend Learning Projects

Use these tiny projects to practice frontend concepts one by one. Keep each app small: one screen or one focused workflow is enough.

## How To Practice

For each project:

- Build only the described scope.
- Apply the listed concepts.
- Apply the listed coding principles.
- Stop when the acceptance checklist passes.

## Project 1: Profile Card

Build a responsive user profile card with avatar, name, role, status, and actions.

- Concepts: responsive design, semantic HTML, accessibility, design tokens.
- Coding principles: KISS, Single Responsibility Principle, Explicit Over Implicit.
- Acceptance: works on mobile and desktop, has accessible buttons, and uses reusable style tokens.

## Project 2: Reusable Button Kit

Build primary, secondary, danger, loading, and disabled button variants.

- Concepts: reusable components, props, visual variants, loading state.
- Coding principles: DRY, Composition Over Inheritance, Props Discipline.
- Acceptance: one button component supports all variants without duplicated markup.

## Project 3: Search Box

Build a search input that filters a local list after the user stops typing.

- Concepts: debouncing, derived state, empty state.
- Coding principles: KISS, State Colocation, Derived State Over Duplicated State.
- Acceptance: search is debounced, no duplicate filtered state is stored, and empty results are clear.

## Project 4: Todo Form

Build a todo form with field validation, touched state, submit state, and duplicate-submit prevention.

- Concepts: form validation, touched state, dirty state, submit state, field errors.
- Coding principles: Defensive Programming, Explicit Validation, Fail Fast.
- Acceptance: invalid input shows field errors and double submit is prevented.

## Project 5: Todo List

Build a todo list with add, edit, complete, delete, and filter actions.

- Concepts: local state, immutable updates, list rendering, keys.
- Coding principles: State Colocation, Immutability, Command Query Separation.
- Acceptance: updates do not mutate state directly and filters do not break item identity.

## Project 6: Weather Widget

Build a widget that fetches weather data and shows loading, success, empty, and error states.

- Concepts: request lifecycle, API response validation, loading state, error state.
- Coding principles: Defensive Programming, Explicit Over Implicit, Fail Gracefully.
- Acceptance: every request state is visible and invalid API data is handled safely.

## Project 7: Retryable API Panel

Build a panel that fetches data, supports retry, and shows stale data while refetching.

- Concepts: stale data, retry, network resilience, request cancellation.
- Coding principles: Request Lifecycle Management, Idempotency, Network Resilience.
- Acceptance: users can retry failed requests and obsolete requests do not overwrite newer data.

## Project 8: Protected Dashboard Route

Build login, dashboard, unauthorized, and not-found routes using fake auth state.

- Concepts: protected routes, route guards, unauthorized page, not-found page.
- Coding principles: Least Privilege, Secure By Default, Explicit Over Implicit.
- Acceptance: unauthenticated users cannot view the dashboard route.

## Project 9: Modal Dialog

Build a modal with open, close, escape key close, focus return, and keyboard navigation.

- Concepts: modal, focus management, keyboard accessibility, ARIA.
- Coding principles: Accessibility First, Defensive Programming, User-Centered Design.
- Acceptance: keyboard-only users can open, use, and close the modal correctly.

## Project 10: Virtualized List Demo

Build a large list view that renders only visible rows.

- Concepts: virtualization, render optimization, list performance.
- Coding principles: Measure Before Optimizing, KISS, Render Optimization.
- Acceptance: the list stays responsive with thousands of items.

## Project 11: Optimistic Favorite Button

Build a favorite button that updates immediately and rolls back on simulated API failure.

- Concepts: optimistic UI, rollback, error feedback.
- Coding principles: Fail Gracefully, Defensive Programming, Explicit UI States.
- Acceptance: success feels instant and failure restores the previous state.

## Project 12: Theme Switcher

Build light/dark theme switching with persisted preference.

- Concepts: theme support, local storage, safe client storage.
- Coding principles: KISS, Secure By Default, Explicit Over Implicit.
- Acceptance: theme persists without storing sensitive data.

## Project 13: Feature Flag Banner

Build a banner controlled by a local feature flag config.

- Concepts: feature flags, controlled rollout, runtime config.
- Coding principles: Controlled Rollout, Config Validation, Backward Compatibility.
- Acceptance: changing the flag enables/disables the banner without code changes.

## Project 14: SEO Product Preview

Build a product preview page with meta title, description, Open Graph fields, and structured data.

- Concepts: SEO, meta tags, Open Graph, structured data.
- Coding principles: Indexability, Metadata Accuracy, Progressive Rendering.
- Acceptance: metadata is generated from product data and has safe fallbacks.

## Project 15: Error Boundary Demo

Build a small component that can crash and an error boundary that recovers the page.

- Concepts: error boundary, error boundaries, fallback UI, recovery action.
- Coding principles: Defensive Programming, Fail Gracefully, Recovery-Oriented UX.
- Acceptance: one component failure does not break the whole app.

## Project 16: Frontend Observability Demo

Build a page that records client errors and key user actions to a local log panel.

- Concepts: client logging, error tracking, analytics, observability.
- Coding principles: Observability by Design, Privacy-Safe Logging, Explicit Over Implicit.
- Acceptance: logs are useful but do not include sensitive data.

## Project 17: Component System Panel

Build a small settings panel from reusable layout, field, and action components.

- Concepts: component responsibility, Single responsibility, reusable primitives, composition, presentational/container split, props discipline, design system, UI states, state colocation.
- Coding principles: Single Responsibility Principle, Composition Over Inheritance, Design System Consistency.
- Acceptance: component responsibilities are clear, variants are consistent, and state stays near the owner.

## Project 18: Search Results Browser

Build a searchable result list with filters, sorting, pagination, and recoverable feedback.

- Concepts: Skeleton loading, lazy loading, pagination, infinite scroll, debounce, throttle, filtering, sorting, URL state, navigation state, toast.
- Coding principles: Progressive Enhancement, Feedback Visibility, Interaction Resilience.
- Acceptance: the list handles large results, preserves shareable filters, and gives clear feedback without blocking the page.

## Project 19: API Client Dashboard

Build a dashboard that reads data from two fake API clients and handles auth refresh and offline recovery.

- Concepts: API validation, REST integration, GraphQL integration, Request state, response validation, auth refresh, cancellation, offline handling, server state, normalization, global state.
- Coding principles: Request Lifecycle Management, Response Validation, Network Resilience.
- Acceptance: invalid responses are rejected, obsolete requests are ignored, and shared server data is not duplicated.

## Project 20: Secure Form Preview

Build a form preview that validates input, prevents unsafe rendering, and guards duplicate submits.

- Concepts: input validation, Type safety, XSS prevention, CSRF protection, HTTPS, secure storage, defensive rendering, backend enforcement, duplicate-submit guard, field validation, form behavior, form state.
- Coding principles: Secure By Default, Defensive Programming, Backend Enforcement.
- Acceptance: unsafe input cannot render as HTML, duplicate submits are blocked, and UI checks do not replace backend enforcement.

## Project 21: Accessibility Compatibility Pass

Build a compact interactive view and verify it across keyboard, contrast, motion, and browser constraints.

- Concepts: focus order, focus return, color contrast, keyboard navigation, reduced motion, browser compatibility, accessibility testing.
- Coding principles: Semantic HTML First, Keyboard Accessibility, Inclusive Design.
- Acceptance: keyboard-only use works, focus returns correctly, and the view remains usable on target browsers.

## Project 22: Performance Asset App

Build a media-heavy page and optimize rendering, assets, and delivery.

- Concepts: Code splitting, tree shaking, memoization, image optimization, caching, CDN, bundle size, performance monitoring, Core Web Vitals, SSR, SSG.
- Coding principles: Measure Before Optimizing, Asset Optimization, Performance Awareness.
- Acceptance: expensive work is measured, assets are optimized, and public content has a rendering strategy.

## Project 23: Frontend Quality Gate

Build a minimal app with local checks that mirror CI expectations.

- Concepts: Unit testing, component testing, E2E testing, API mocking, linting, formatting, Environment validation, build tools, Git hooks, CI/CD, dependency management.
- Coding principles: Quality Gates, Automation First, Config Validation.
- Acceptance: build, lint, format, type, and test checks can run locally and in CI with the same intent.

## Project 24: Enterprise Shell

Build a small app shell with role-aware navigation, localization hooks, and a placeholder for independent feature areas.

- Concepts: RBAC, role-based routes, route behavior, i18n, micro-frontends, theme.
- Coding principles: Permission Awareness, Operational Awareness, Use Complexity Only When Justified.
- Acceptance: role-specific UI is explicit, localization is isolated, and micro-frontend boundaries remain optional.

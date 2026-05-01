# Frontend Development Rules

Use this when building UI screens, reusable components, state management, API integration, and frontend quality checks.

## Step 1: Must Apply First

- Build accessible, responsive UI from the start.
- Create explicit loading, error, empty, and success states.
- Keep component responsibility small and clear.
- Colocate state near where it is used.
- Validate data coming from APIs before trusting it.
- Avoid unnecessary global state.
- Keep naming and folder structure consistent.
- Make forms, routing, and network failure behavior explicit.
- Apply DRY, KISS, YAGNI, and separation of concerns while implementing features.
- Prefer explicit data flow, explicit side effects, and explicit ownership.

<details>
<summary>Coding Principles name</summary>

- Accessibility First
- Responsive First
- Explicit UI States
- SOLID
- KISS
- YAGNI
- Single Responsibility Principle
- Separation of Concerns
- State Colocation
- Defensive Programming
- Explicit Over Implicit

</details>

<details>
<summary>Concepts name</summary>

- Accessibility
- responsive design
- semantic HTML
- UI states
- component responsibility
- state colocation
- API validation
- route behavior
- form behavior

</details>

## Step 2: UX And UI Patterns

- Skeleton loading for content-heavy screens.
- Lazy loading for images, routes, and heavy components.
- Pagination or infinite scroll for large result sets.
- Debouncing and throttling for search inputs and scroll handlers.
- Optimistic UI updates when rollback behavior is clear.
- Empty states for no-data screens.
- Error states for failed requests or invalid actions.
- Loading states for buttons, sections, and full pages.
- Toasts or snackbars for non-blocking feedback.
- Modals and dialogs with correct focus handling.
- Keyboard navigation, ARIA, and screen reader support.
- Mobile-first responsive design.
- Theme support, including dark mode when required.
- Retry and recovery actions for recoverable errors.
- Reduced motion support for animation-heavy interfaces.

<details>
<summary>Coding Principles name</summary>

- Progressive Enhancement
- Feedback Visibility
- Graceful Degradation
- Interaction Resilience
- User-Centered Design

</details>

<details>
<summary>Concepts name</summary>

- Skeleton loading
- lazy loading
- pagination
- infinite scroll
- debounce
- debouncing
- throttle
- optimistic UI
- rollback
- error feedback
- empty state
- error state
- toast
- modal
- theme
- theme support

</details>

## Step 3: Component Design

- Use single responsibility per component.
- Build reusable primitives such as Button, Input, Modal, Table, and FormField.
- Prefer composition over inheritance.
- Separate presentational components from data/container logic when complexity grows.
- Keep props minimal and clear.
- Avoid deeply nested component trees when simpler composition works.
- Use design tokens or shared constants for spacing, typography, color, and breakpoints.
- Keep visual variants consistent across the design system.
- Keep components small and avoid god components.
- Avoid passing through deep object chains when a clear prop or selector is better.

<details>
<summary>Coding Principles name</summary>

- Single Responsibility Principle
- SOLID
- Separation of Concerns
- Composition Over Inheritance
- DRY
- KISS
- YAGNI
- Reusability
- Props Discipline
- Law of Demeter

</details>

<details>
<summary>Concepts name</summary>

- Single responsibility
- reusable primitives
- reusable components
- props
- visual variants
- composition
- presentational/container split
- list rendering
- keys
- props discipline
- design tokens

</details>

## Step 4: State And Data

- Use local state for component-specific behavior.
- Use global state only for truly shared client state.
- Use server-state tools such as React Query or SWR when the app depends heavily on remote data.
- Compute derived values instead of storing duplicate state.
- Normalize data when many screens reuse the same entities.
- Keep state close to the component or feature that owns it.
- Use immutable updates.
- Track form state intentionally: initial values, touched fields, dirty fields, validation errors, and submit state.
- Keep URL state, filters, and route params synchronized when users need shareable or restorable views.
- Lift state only when multiple components truly need it.
- Use types and state models that make invalid UI states hard to represent.

<details>
<summary>Coding Principles name</summary>

- State Colocation
- DRY
- KISS
- Minimal Global State
- Derived State Over Duplicated State
- Immutability
- Single Source Of Truth
- Make Illegal States Unrepresentable

</details>

<details>
<summary>Concepts name</summary>

- Local state
- global state
- server state
- derived state
- normalization
- immutable updates
- form state
- form validation
- touched state
- dirty state
- submit state
- field errors
- URL state

</details>

## Step 5: Routing And Forms

- Define public, protected, and role-based routes.
- Add not-found and unauthorized pages.
- Preserve navigation state where users expect to return to the same view.
- Validate forms at field level and form level.
- Show field-level errors near the input.
- Disable or guard duplicate submits.
- Handle server-side validation errors and map them back to fields.
- Keep form reset, cancel, and unsaved-change behavior clear.

<details>
<summary>Coding Principles name</summary>

- Explicit Validation
- Fail Fast
- Defensive Programming
- Idempotency
- Fail Safely
- Duplicate Action Prevention
- Permission Awareness
- Recovery-Oriented UX

</details>

<details>
<summary>Concepts name</summary>

- Protected routes
- role-based routes
- route guards
- not-found page
- unauthorized page
- navigation state
- field validation
- duplicate-submit guard

</details>

## Step 6: API And Network Handling

- Handle loading, success, empty, and error states for every request.
- Integrate REST or GraphQL APIs through a clear data access layer.
- Use request cancellation for obsolete requests.
- Support pagination, filtering, and sorting where data can grow.
- Validate API responses with tools such as Zod or Yup when practical.
- Keep auth token refresh and protected API logic centralized.
- Avoid side effects during render.
- Use effects carefully and keep dependencies correct.
- Keep read-only derived values separate from state-changing actions.
- Handle slow networks, offline state, reconnects, stale data, and retries intentionally.
- Add retry buttons or fallback actions when users can recover.
- Keep API base URLs and runtime config environment-specific.

<details>
<summary>Coding Principles name</summary>

- Request Lifecycle Management
- Response Validation
- Fail Fast
- Defensive Programming
- Idempotency
- Side Effect Control
- Command Query Separation
- Network Resilience
- Fail Gracefully

</details>

<details>
<summary>Concepts name</summary>

- Request state
- request lifecycle
- request cancellation
- REST integration
- GraphQL integration
- cancellation
- pagination
- filtering
- sorting
- response validation
- API response validation
- auth refresh
- offline handling
- network resilience
- stale data
- retry

</details>

## Step 7: Performance

- Code split routes and heavy screens.
- Use tree shaking friendly imports.
- Memoize only when it removes measurable or obvious re-render cost.
- Virtualize large lists.
- Optimize images with modern formats, dimensions, and lazy loading.
- Use browser, HTTP, and client caching where appropriate.
- Avoid unnecessary re-renders.
- Use CDN delivery for static assets when needed.
- Minify and bundle for production.
- Track bundle size for large apps.

<details>
<summary>Coding Principles name</summary>

- Lazy Loading
- Render Optimization
- Cache Awareness
- Measure Before Optimizing
- Asset Optimization

</details>

<details>
<summary>Concepts name</summary>

- Code splitting
- tree shaking
- memoization
- virtualization
- render optimization
- list performance
- image optimization
- caching
- CDN
- bundle size

</details>

## Step 8: Safety And Security

- Prefer TypeScript for type safety.
- Validate user input.
- Prevent XSS by avoiding unsafe HTML rendering.
- Use CSRF protection when the frontend uses cookie-based authentication.
- Avoid storing sensitive data in localStorage.
- Use HTTPS in real environments.
- Add error boundaries around risky UI regions.
- Handle null and undefined values defensively.
- Enforce protected behavior on the backend too; UI checks are not security.

<details>
<summary>Coding Principles name</summary>

- Type Safety
- Defensive Programming
- Least Privilege
- Separation of Concerns
- Secure By Default
- Backend Enforcement

</details>

<details>
<summary>Concepts name</summary>

- Type safety
- input validation
- XSS prevention
- CSRF protection
- secure storage
- local storage
- safe client storage
- HTTPS
- error boundary
- error boundaries
- defensive rendering
- backend enforcement

</details>

## Step 9: Accessibility And Compatibility

- Use semantic HTML before adding ARIA.
- Keep focus order logical.
- Return focus after dialogs and menus close.
- Ensure color contrast is readable.
- Support keyboard-only usage for interactive controls.
- Respect reduced motion preferences.
- Test important flows on target browsers and mobile browsers.
- Check responsive layout at realistic small, medium, and large widths.

<details>
<summary>Coding Principles name</summary>

- Semantic HTML First
- Keyboard Accessibility
- Focus Management
- Inclusive Design
- Progressive Enhancement

</details>

<details>
<summary>Concepts name</summary>

- Semantic HTML
- ARIA
- focus management
- focus order
- focus return
- color contrast
- keyboard navigation
- keyboard accessibility
- reduced motion
- browser compatibility

</details>

## Step 10: Testing And Quality

- Write unit tests for utilities and pure logic.
- Use component tests for behavior users interact with.
- Use E2E tests for critical workflows.
- Mock APIs where external services make tests unstable.
- Keep code testable by avoiding tight coupling.
- Use ESLint and Prettier for consistent formatting.
- Test forms, protected routes, API failures, and important accessibility behavior.

<details>
<summary>Coding Principles name</summary>

- Behavior Testing
- Critical Flow Testing
- Automation First
- Quality Gates
- Test What Users Do

</details>

<details>
<summary>Concepts name</summary>

- Unit testing
- component testing
- E2E testing
- API mocking
- linting
- formatting
- accessibility testing
- loading state

</details>

## Step 11: SEO, Rendering, And Public Pages

Apply this when the app is public-facing or search visibility matters.

- Use SSR or SSG when content must be indexed or fast on first load.
- Add correct meta tags and Open Graph data.
- Use structured data where it helps search engines.
- Monitor Core Web Vitals.

<details>
<summary>Coding Principles name</summary>

- Indexability
- Metadata Accuracy
- Performance Awareness
- Progressive Rendering

</details>

<details>
<summary>Concepts name</summary>

- SSR
- SSG
- SEO
- meta tags
- Open Graph
- structured data
- Core Web Vitals
- fallback UI
- recovery action

</details>

## Step 12: Build, Monitoring, And Scaling

- Validate environment variables during app startup or build.
- Use project-standard build tools such as Vite, Webpack, or the framework default.
- Use feature flags for controlled releases.
- Add error tracking such as Sentry.
- Log important client-side failures.
- Track performance issues.
- Use analytics to understand real user behavior.
- Use a design system when many screens and teams need consistency.
- Add i18n when supporting multiple languages.
- Use RBAC when UI behavior depends on permissions.
- Use feature-based folders when the app grows.
- Use Git hooks when the team needs local lint/test checks before commit.
- Extract repeated logic into custom hooks or utilities.
- Keep code self-explanatory with clear names.
- Avoid deep nesting with early returns.
- Keep CI/CD checks aligned with local build, lint, test, and type-check commands.
- Consider micro-frontends only when independent teams or deployments justify the complexity.
- Add monitoring and error reporting as part of feature design, not only after release.

<details>
<summary>Coding Principles name</summary>

- Config Validation
- Controlled Rollout
- Backward Compatibility
- Observability
- Observability by Design
- Privacy-Safe Logging
- Design System Consistency
- Operational Awareness
- Use Complexity Only When Justified
- DRY
- Separation of Concerns
- Clean Code
- Early Return

</details>

<details>
<summary>Concepts name</summary>

- Environment validation
- runtime config
- build tools
- feature flags
- controlled rollout
- error tracking
- client logging
- performance monitoring
- analytics
- observability
- design system
- i18n
- RBAC
- dependency management
- Git hooks
- CI/CD
- micro-frontends

</details>

## Before Moving On

- The screen works on mobile and desktop.
- Loading, empty, error, and success states are handled.
- State is not global unless it needs to be.
- API errors do not break the page.
- Forms and routes handle validation, permissions, and recovery.
- Important flows work on target browsers and mobile sizes.
- Components are small enough to understand.
- Critical user flows have tests or a clear manual test path.

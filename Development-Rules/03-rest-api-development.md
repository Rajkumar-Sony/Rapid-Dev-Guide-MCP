# REST API Development Rules

Use this when designing or implementing backend APIs.

## Step 1: Must Apply First

- Use resource-based URLs.
- Use correct HTTP methods.
- Validate every input.
- Return proper status codes.
- Keep controllers thin and business logic in services.
- Add centralized error handling.
- Protect private endpoints with authentication and authorization.
- Add pagination for lists that can grow.
- Log requests, safe responses, and errors.
- Document the API.
- Add rate limiting and health checks for production APIs.
- Apply DRY, KISS, YAGNI, and separation of concerns in endpoint implementation.

<details>
<summary>Coding Principles name</summary>

- Resource-Oriented Design
- KISS
- YAGNI
- Validation At Boundaries
- Defensive Programming
- Thin Controller Principle
- Separation of Concerns
- Centralized Error Handling
- Least Privilege
- Observability First

</details>

<details>
<summary>Concepts name</summary>

- Resource URLs
- HTTP methods
- input validation
- rate limiting
- status codes
- thin controllers
- centralized errors
- auth
- protected routes
- roles
- auth security
- pagination
- logging
- request logging
- response logging
- documentation
- rate limits
- health checks

</details>

## Step 2: API Design

- Model URLs around resources, not actions.
- Prefer `/users` and `/orders/{id}` instead of `/getUsers`.
- Use HTTP methods consistently:
  - GET for reading.
  - POST for creating.
  - PUT or PATCH for updating.
  - DELETE for deleting.
- Keep APIs stateless.
- Use consistent naming conventions.
- Version APIs from the start, for example `/api/v1/users`.
- Keep ID formats, date formats, timezone behavior, and naming conventions consistent.
- Define a deprecation policy before removing or changing public behavior.
- Keep read endpoints separate from state-changing endpoints.

<details>
<summary>Coding Principles name</summary>

- REST Semantics
- Statelessness
- KISS
- Consistency
- Backward Compatibility
- Command Query Separation
- Deprecation Discipline

</details>

<details>
<summary>Concepts name</summary>

- Resource modeling
- noun URLs
- HTTP semantics
- statelessness
- naming conventions
- API versioning
- ID format
- date format
- deprecation policy
- deprecation
- backward compatibility

</details>

## Step 3: Request And Response Design

- Use JSON as the standard format unless there is a strong reason not to.
- Keep response shapes consistent.
- Use a predictable envelope where useful, such as `data`, `message`, and `error`.
- Use DTOs instead of exposing internal models directly.
- Filter output so sensitive or internal fields are not returned.
- Return field-level validation errors where possible.
- Validate body, path params, query params, and headers.
- Use cursor pagination for large or frequently changing collections.
- Keep OpenAPI or another contract as the source of truth when clients depend on the API.
- Make request and response contracts explicit instead of relying on implicit behavior.

<details>
<summary>Coding Principles name</summary>

- Explicit Contracts
- Explicit Over Implicit
- DRY
- DTO Boundary
- Input Validation
- Output Filtering
- Contract First

</details>

<details>
<summary>Concepts name</summary>

- JSON
- response envelope
- error format
- DTOs
- request contracts
- output filtering
- field errors
- body validation
- param validation
- query validation
- header validation
- cursor pagination
- OpenAPI contract

</details>

## Step 4: Status Codes And Errors

- Use `200` for successful reads or updates.
- Use `201` for successful creation.
- Use `400` for invalid client input.
- Use `401` for unauthenticated access.
- Use `403` for authenticated users without permission.
- Use `404` when a resource does not exist.
- Use `409` for conflicts.
- Use `500` only for unexpected server failures.
- Never return `200` for every response.
- Do not leak stack traces, database errors, or internal details.

<details>
<summary>Coding Principles name</summary>

- HTTP Semantics
- Fail Clearly
- Stable Error Contract
- Internal Detail Protection

</details>

<details>
<summary>Concepts name</summary>

- HTTP status semantics
- conflict handling
- centralized error format
- internal-detail protection
- stable error behavior

</details>

## Step 5: Authentication And Authorization

- Use JWT, OAuth, or another project-appropriate auth strategy.
- Separate authentication from authorization.
- Enforce roles and permissions on protected routes.
- Support token expiration and refresh where required.
- Apply least privilege access.
- Never store sensitive data in plain text.
- Configure CORS intentionally.
- Add rate limiting and throttling for public and sensitive endpoints.
- Add audit logs for sensitive actions.

<details>
<summary>Coding Principles name</summary>

- Least Privilege
- Secure By Default
- Authentication Before Authorization
- Auditability

</details>

<details>
<summary>Concepts name</summary>

- JWT
- OAuth
- authentication
- authorization
- token refresh
- least privilege
- CORS
- throttling
- audit logging

</details>

## Step 6: Reliability

- Make PUT and DELETE idempotent.
- Use idempotency keys for payments and critical create operations.
- Add timeouts for outbound calls.
- Make retry behavior safe.
- Move slow work to background jobs where possible.
- Add health check endpoints for load balancers and monitoring.
- Return stable errors when downstream dependencies fail.
- Use circuit breakers when the API depends on unstable downstream services.

<details>
<summary>Coding Principles name</summary>

- Idempotency
- Retry Safety
- Fail Fast
- Backward Compatibility
- Timeout Discipline
- Async Offloading
- Fail Gracefully
- Graceful Failure

</details>

<details>
<summary>Concepts name</summary>

- Idempotency
- idempotency keys
- outbound timeouts
- retry safety
- background jobs
- health checks
- downstream failure handling
- circuit breaker

</details>

## Step 7: Performance

- Use pagination for large collections.
- Add filtering and sorting where clients need it.
- Avoid over-fetching.
- Optimize database queries.
- Add indexes for common filters and joins.
- Use caching with ETag, Cache-Control, Redis, or another suitable layer.
- Use compression such as gzip when appropriate.

<details>
<summary>Coding Principles name</summary>

- Pagination First
- Query Efficiency
- Avoid Over-Fetching
- Cache With Purpose
- Compression Awareness

</details>

<details>
<summary>Concepts name</summary>

- Pagination
- filtering
- sorting
- over-fetching prevention
- query optimization
- indexing
- caching
- compression

</details>

## Step 8: Files And Binary Data

- Validate file type, size, extension, and ownership.
- Do not trust client-provided MIME types.
- Store uploaded files outside executable paths.
- Generate safe server-side file names.
- Use signed URLs or controlled download endpoints for private files.
- Stream large downloads instead of loading full files into memory.
- Scan files when risk is high.

<details>
<summary>Coding Principles name</summary>

- Validate At Boundaries
- Secure By Default
- Least Exposure
- Stream Large Data
- Safe File Handling

</details>

<details>
<summary>Concepts name</summary>

- Upload validation
- file validation
- MIME distrust
- safe file names
- private downloads
- signed URLs
- streaming
- file scanning

</details>

## Step 9: Code Structure

- Use layered architecture:
  - Controller
  - Service
  - Repository
- Keep controllers focused on request and response handling.
- Put business rules in the service layer.
- Put data access logic in repositories.
- Use middleware for auth, validation, and cross-cutting behavior.
- Integrate with an API Gateway when routing, auth, rate limits, or aggregation should be centralized.
- Use dependency injection where it reduces coupling.
- Keep services reusable when business behavior is shared.
- Keep functions small and names clear.
- Avoid deep nesting with early returns.
- Avoid god controllers.
- Keep business rules independent from framework and transport details.

<details>
<summary>Coding Principles name</summary>

- Separation of Concerns
- Layered Architecture
- Thin Controllers
- SOLID
- Single Responsibility Principle
- Dependency Injection
- Dependency Rule
- DRY
- KISS
- YAGNI
- Clean Code
- Early Return

</details>

<details>
<summary>Concepts name</summary>

- Layered architecture
- controller-service-repository
- thin controller
- middleware
- API Gateway integration
- dependency injection

</details>

## Step 10: Data Handling

- Use transactions when multiple writes must succeed or fail together.
- Keep data consistent at business boundaries.
- Avoid N+1 queries.
- Validate data before saving.
- Do not allow clients to update fields they should not control.

<details>
<summary>Coding Principles name</summary>

- Transactional Integrity
- Consistency Boundary
- Mass Assignment Protection
- Data Validation

</details>

<details>
<summary>Concepts name</summary>

- Transactions
- consistency boundary
- rollback
- N+1 avoidance
- persistence validation
- mass-assignment protection

</details>

## Step 11: Testing And Documentation

- Unit test business logic.
- Integration test API endpoints.
- Mock external APIs.
- Add contract tests when clients depend strongly on API shape.
- Cover edge cases in validation, auth, and error handling.
- Maintain OpenAPI or Swagger documentation.
- Include request examples, response examples, error cases, and auth flow.
- Document deprecation timelines and migration paths.
- Treat HATEOAS as optional and use it only when hypermedia navigation clearly helps clients.

<details>
<summary>Coding Principles name</summary>

- Contract Testing
- Behavior Testing
- Documentation As Contract
- Observability by Design
- Privacy-Safe Logging
- Regression Protection
- Traceability

</details>

<details>
<summary>Concepts name</summary>

- Unit tests
- API integration tests
- API mocking
- contract tests
- contract testing
- OpenAPI
- Swagger
- examples
- deprecation docs
- HATEOAS
- readiness
- response time
- structured logging
- structured logs
- async work
- non-blocking endpoint
- sensitive actions

</details>

## Before Moving On

- URLs and HTTP methods are resource-based and consistent.
- Body, params, query, and headers are validated.
- Errors use a standard response format.
- Auth and permissions are enforced.
- List endpoints are paginated with offset or cursor strategy chosen intentionally.
- Rate limits, CORS, health checks, and audit logs are handled where needed.
- Logs include enough context to debug failures.
- Correlation IDs and response times are tracked where production debugging needs them.
- API documentation matches implementation.
- Observability is designed into production endpoints before release.

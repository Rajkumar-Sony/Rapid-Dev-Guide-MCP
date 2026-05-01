# REST API Learning Projects

Use these tiny projects to practice REST API concepts one by one. Keep each API small: a few endpoints are enough.

## How To Practice

For each project:

- Build only the described API.
- Apply the listed concepts.
- Apply the listed coding principles.
- Stop when the acceptance checklist passes.

## Project 1: Notes API

Build CRUD endpoints for notes.

- Concepts: resource URLs, HTTP methods, status codes.
- Coding principles: REST Semantics, KISS, Resource-Oriented Design.
- Acceptance: `/notes` and `/notes/{id}` use GET, POST, PATCH, and DELETE correctly.

## Project 2: Validation API

Build a user registration endpoint with body, query, params, and header validation examples.

- Concepts: input validation, field errors, request contracts.
- Coding principles: Validate At Boundaries, Explicit Contracts, Fail Fast.
- Acceptance: invalid requests return clear field-level errors.

## Project 3: Response Envelope API

Build endpoints that always return a consistent success and error response shape.

- Concepts: response envelope, error format, DTOs.
- Coding principles: DRY, Explicit Over Implicit, Documentation As Contract.
- Acceptance: clients can parse success and error responses consistently.

## Project 4: Authenticated Tasks API

Build fake login plus protected task endpoints.

- Concepts: authentication, authorization, protected routes, roles.
- Coding principles: Least Privilege, Secure By Default, Authentication Before Authorization.
- Acceptance: unauthenticated or unauthorized requests are rejected correctly.

## Project 5: Paginated Products API

Build product listing with filtering, sorting, offset pagination, and cursor pagination.

- Concepts: pagination, filtering, sorting, cursor pagination.
- Coding principles: Pagination First, Query Efficiency, Avoid Over-Fetching.
- Acceptance: large result sets can be navigated predictably.

## Project 6: Idempotent Payment Request API

Build a simulated payment creation endpoint using idempotency keys.

- Concepts: idempotency keys, retry safety, conflict handling.
- Coding principles: Idempotency, Retry Safety, Backward Compatibility.
- Acceptance: repeated requests with the same key do not create duplicate payments.

## Project 7: File Upload API

Build a private file upload and download API.

- Concepts: file validation, MIME distrust, safe file names, signed URLs.
- Coding principles: Secure By Default, Validate At Boundaries, Least Exposure.
- Acceptance: invalid files are rejected and private files are not public by default.

## Project 8: Layered Users API

Build user endpoints using controller, service, repository, and DTO layers.

- Concepts: layered architecture, thin controllers, thin controller, dependency injection.
- Coding principles: Separation of Concerns, SOLID, Single Responsibility Principle.
- Acceptance: controllers only handle HTTP concerns and services hold business logic.

## Project 9: Transactional Order API

Build an order creation endpoint that writes order and order items in one transaction.

- Concepts: transactions, consistency boundary, rollback.
- Coding principles: Transactional Integrity, Defensive Programming, Data Validation.
- Acceptance: partial order writes cannot remain after failure.

## Project 10: Rate-Limited Login API

Build a login endpoint with request throttling.

- Concepts: rate limiting, throttling, auth security.
- Coding principles: Secure By Default, Least Privilege, Defensive Programming.
- Acceptance: repeated login attempts are limited.

## Project 11: Health And Metrics API

Build `/health`, `/ready`, and simple request timing logs.

- Concepts: health checks, readiness, response time, structured logging.
- Coding principles: Observability by Design, Fail Fast, Traceability.
- Acceptance: monitoring can tell whether the API is alive and ready.

## Project 12: Versioned API

Build `/api/v1/books` and `/api/v2/books` with a small response difference.

- Concepts: API versioning, backward compatibility, deprecation.
- Coding principles: Backward Compatibility, Deprecation Discipline, Contract First.
- Acceptance: v1 clients still work while v2 evolves.

## Project 13: Background Email API

Build an endpoint that accepts a request quickly and queues fake email work.

- Concepts: async work, background jobs, non-blocking endpoint.
- Coding principles: Async Offloading, KISS, Fail Gracefully.
- Acceptance: endpoint responds quickly and job failures are visible.

## Project 14: Contract-First API

Write a tiny OpenAPI spec first, then implement the matching endpoint.

- Concepts: OpenAPI, contract testing, examples.
- Coding principles: Contract First, Documentation As Contract, Explicit Over Implicit.
- Acceptance: implementation matches the documented contract.

## Project 15: Audit Log API

Build admin actions that write audit log entries.

- Concepts: audit logging, sensitive actions, structured logs.
- Coding principles: Auditability, Least Privilege, Privacy-Safe Logging.
- Acceptance: every sensitive action records actor, action, target, and time.

## Project 16: API Design Contract

Build a tiny books API that documents identifiers, dates, naming, and compatibility rules.

- Concepts: Resource modeling, noun URLs, HTTP semantics, statelessness, naming conventions, ID format, date format, deprecation policy, OpenAPI contract, documentation, Swagger, deprecation docs.
- Coding principles: REST Semantics, Consistency, Backward Compatibility.
- Acceptance: URL design, field formats, and deprecation behavior are documented before implementation changes.

## Project 17: Request Boundary Validator

Build an endpoint that validates every request boundary and returns a stable error shape.

- Concepts: JSON, body validation, param validation, query validation, header validation, output filtering, centralized errors, centralized error format, stable error behavior, internal-detail protection.
- Coding principles: Validation At Boundaries, Output Filtering, Internal Detail Protection.
- Acceptance: invalid input fails clearly and internal implementation details never appear in responses.

## Project 18: Auth Gateway API

Build an API entry point that applies auth middleware, token handling, CORS, and request logs.

- Concepts: JWT, OAuth, auth, token refresh, CORS, least privilege, rate limits, request logging, response logging, logging, API Gateway integration, middleware.
- Coding principles: Authentication Before Authorization, Least Privilege, Observability First.
- Acceptance: protected traffic goes through centralized middleware and logs enough safe context to debug failures.

## Project 19: Reliability Proxy API

Build a proxy endpoint that calls an unstable fake dependency.

- Concepts: Idempotency, outbound timeouts, downstream failure handling, circuit breaker, caching, compression, over-fetching prevention.
- Coding principles: Timeout Discipline, Fail Gracefully, Cache With Purpose.
- Acceptance: downstream failures return stable errors and repeated safe requests do not cause unsafe side effects.

## Project 20: Query Users API

Build user search endpoints that avoid common persistence and update risks.

- Concepts: query optimization, indexing, N+1 avoidance, persistence validation, mass-assignment protection, controller-service-repository.
- Coding principles: Query Efficiency, Mass Assignment Protection, Data Validation.
- Acceptance: common filters are indexed, related data avoids N+1 queries, and clients cannot update protected fields.

## Project 21: Streaming Files API

Build a larger private file download flow.

- Concepts: Upload validation, private downloads, streaming, file scanning.
- Coding principles: Stream Large Data, Safe File Handling, Least Exposure.
- Acceptance: large files stream without loading fully into memory and risky files are rejected or flagged.

## Project 22: API Test Suite

Build a small automated test suite around one existing practice API.

- Concepts: Unit tests, API integration tests, API mocking, contract tests, HATEOAS, HTTP status semantics.
- Coding principles: Contract Testing, Behavior Testing, Regression Protection.
- Acceptance: behavior, contracts, errors, and optional hypermedia links are covered without testing implementation details.

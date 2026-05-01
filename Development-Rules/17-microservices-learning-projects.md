# Backend Microservices Learning Projects

Use these tiny projects to practice backend microservice concepts one by one. Keep each system tiny: two or three services are enough.

## How To Practice

For each project:

- Build only the described services.
- Apply the listed concepts.
- Apply the listed coding principles.
- Stop when the acceptance checklist passes.

## Project 1: User Service And Profile Service

Build two services where User owns login identity and Profile owns public profile data.

- Concepts: service boundaries, data ownership, database per service, shared-database avoidance.
- Coding principles: Single Responsibility Principle, Loose Coupling, High Cohesion.
- Acceptance: Profile Service does not read User Service database directly.

## Project 2: Catalog And Inventory Services

Build Catalog for product information and Inventory for stock counts.

- Concepts: business capability split, independent deployment, API contracts.
- Coding principles: Domain-Driven Boundaries, Independent Deployability, Explicit Contracts.
- Acceptance: each service can run and change independently.

## Project 3: Order Service With Saga

Build Order Service that reserves inventory and confirms or cancels an order.

- Concepts: Saga, eventual consistency, distributed transaction avoidance.
- Coding principles: Avoid Distributed Transactions, Eventual Consistency, Fail Gracefully.
- Acceptance: failed reservation cancels the order without shared database transactions.

## Project 4: Idempotent Event Consumer

Build a service that consumes the same event multiple times but processes it once.

- Concepts: duplicate messages, idempotent consumers, processed-message store.
- Coding principles: Idempotency, Defensive Programming, Retry Safety.
- Acceptance: duplicate events do not duplicate side effects.

## Project 5: Outbox Publisher

Build a service that writes data and an outbox event in the same transaction, then publishes later.

- Concepts: outbox pattern, reliable publishing, transaction boundary.
- Coding principles: Transactional Integrity, Reliable Messaging, Explicit Over Implicit.
- Acceptance: data changes and event publishing cannot silently diverge.

## Project 6: Dead-Letter Queue Demo

Build a queue consumer that retries failed messages and sends poison messages to a DLQ.

- Concepts: retries, backoff, dead-letter queue, poison messages.
- Coding principles: Bounded Retries, Fail Fast, Poison Message Isolation.
- Acceptance: permanently failing messages stop blocking the queue.

## Project 7: Circuit Breaker Demo

Build Service A calling unstable Service B with timeout, retry, and circuit breaker behavior.

- Concepts: timeout, retry, circuit breaker, graceful degradation.
- Coding principles: Timeout Discipline, Circuit Breaker, Graceful Degradation.
- Acceptance: Service A remains responsive when Service B is failing.

## Project 8: API Gateway Mini System

Build an API Gateway that routes to User and Order services.

- Concepts: API gateway, routing, centralized auth, rate limiting.
- Coding principles: Controlled Entry Point, Least Privilege, Separation of Concerns.
- Acceptance: clients call the gateway, not each service directly.

## Project 9: BFF For Dashboard

Build a Backend-for-Frontend that aggregates User, Orders, and Notifications for one dashboard endpoint.

- Concepts: BFF, client-specific aggregation, service composition.
- Coding principles: Client-Specific Aggregation, KISS, Avoid Over-Fetching.
- Acceptance: frontend gets dashboard data from one endpoint without services becoming tightly coupled.

## Project 10: Contract Versioning Demo

Build a provider and consumer service where the provider adds a new optional field.

- Concepts: backward compatibility, contract versioning, consumer-driven contract tests.
- Coding principles: Backward Compatibility, Contract First, Consumer-Driven Testing.
- Acceptance: old consumer keeps working after provider changes.

## Project 11: Correlation ID Tracing

Build two services that pass a correlation ID across HTTP calls and logs.

- Concepts: correlation ID, structured logging, trace propagation.
- Coding principles: Observability by Design, Traceability, Explicit Over Implicit.
- Acceptance: one request can be followed across both service logs.

## Project 12: Readiness And Liveness Probes

Build service health endpoints for alive, ready, and dependency health.

- Concepts: liveness probe, readiness probe, dependency health.
- Coding principles: Health Transparency, Fail Fast, Operational Awareness.
- Acceptance: service reports not ready when a required dependency is down.

## Project 13: Feature Toggle Rollout

Build a service with old and new behavior controlled by a feature flag.

- Concepts: feature toggles, controlled rollout, backward-compatible changes.
- Coding principles: Controlled Rollout, Backward Compatibility, Deployment Independence.
- Acceptance: behavior can be switched without redeploying.

## Project 14: Race Condition Demo

Build two concurrent requests that try to reserve the last inventory item.

- Concepts: race conditions, optimistic locking, pessimistic locking.
- Coding principles: Concurrency Safety, Defensive Programming, Consistency Boundary.
- Acceptance: stock cannot go below zero.

## Project 15: Async Report Service

Build Report Service that consumes events and creates a read model for reporting.

- Concepts: read model, event-driven updates, reporting strategy.
- Coding principles: Data Ownership, Command Query Separation, Eventual Consistency.
- Acceptance: reporting does not query other services' databases directly.

## Project 16: Resilient Notification Service

Build Notification Service that sends fake email/SMS with retries and fallback logging.

- Concepts: async processing, retries, fallback, dependency failure.
- Coding principles: Bounded Retries, Graceful Degradation, Observability by Design.
- Acceptance: failed notifications are retried and visible in logs or metrics.

## Project 17: Service Starter Template

Build two tiny services from the same template with different business ownership.

- Concepts: Business capability, Domain split, capability ownership, loose coupling, high cohesion, statelessness, stateless services, shared-state avoidance, service contracts, OpenAPI, Swagger, REST, gRPC, DTOs, Layered architecture, clean architecture, hexagonal architecture, dependency injection.
- Coding principles: Single Business Capability, Domain-Driven Boundaries, Clean Architecture.
- Acceptance: each service has explicit contracts, no shared in-memory state, and domain logic is isolated from transport details.

## Project 18: Messaging Platform Lab

Build a queue-backed flow with schema versioning, ordering decisions, and consumer visibility.

- Concepts: queues, Kafka, RabbitMQ, events, Event schema, event versioning, contract-first design, Protobuf, schema versioning, message ordering, consumer lag, DLQ, inbox pattern, idempotent consumer, duplicate-event testing.
- Coding principles: Contract First, Event Versioning, At-Least-Once Awareness.
- Acceptance: event contracts are versioned, duplicate handling is tested, and queue health is visible.

## Project 19: Resilience Isolation Lab

Build two service calls where one dependency can fail, slow down, or overload.

- Concepts: Fail fast, bounded retry, bulkhead isolation, race-condition handling, idempotency.
- Coding principles: Fail Fast, Bulkhead Isolation, Retry Safety.
- Acceptance: one failing dependency does not exhaust shared resources or create duplicate side effects.

## Project 20: Observability Stack Lab

Build a two-service flow with logs, metrics, traces, and safe error reporting.

- Concepts: Structured logs, metrics, Prometheus, Jaeger, safe errors, queue health, health checks, config management.
- Coding principles: Structured Logging, Metrics First, Health Transparency.
- Acceptance: request flow, dependency state, and queue state can be diagnosed from telemetry.

## Project 21: Deployment Platform Demo

Build a local deployment model for independently scalable service instances.

- Concepts: Horizontal scaling, load balancing, Docker, Kubernetes, blue-green deployment, canary release, auto-scaling, deployment independence, backward-compatible rollout, local development setup, Docker Compose.
- Coding principles: Horizontal Scalability, Deployment Safety, Operational Simplicity.
- Acceptance: services can be packaged repeatably, scaled independently, and rolled out safely.

## Project 22: Config And Internal Security Demo

Build services that validate config at startup and protect internal calls.

- Concepts: Externalized config, startup validation, environment config, service discovery, secret management, validation, sanitization, least privilege, internal endpoint protection, Zero trust between services.
- Coding principles: Externalized Configuration, Secret Management, Secure Internal APIs.
- Acceptance: missing config fails fast, secrets stay out of code, and internal requests are still validated.

## Project 23: Advanced Architecture Migration

Build a tiny legacy endpoint and gradually move one capability behind a new service.

- Concepts: Strangler pattern, CQRS, event sourcing, multi-region deployment, service mesh, Istio, data replication, read models.
- Coding principles: Evolutionary Architecture, Use Complexity Only When Justified, Backward Compatibility.
- Acceptance: advanced patterns are documented with the reason they are or are not justified.

## Project 24: Microservice Test Harness

Build tests around a provider, consumer, and one failure-prone dependency.

- Concepts: Unit testing, integration testing, contract testing, consumer-driven contract testing, dependency mocking, failure testing, load testing, chaos testing.
- Coding principles: Contract Testing, Consumer-Driven Testing, Failure Testing.
- Acceptance: service contracts, dependency failures, and critical load assumptions are verified.

## Project 25: Performance Worker Service

Build a worker that processes heavy jobs without blocking request paths.

- Concepts: non-blocking operations, query optimization, caching, feature flags.
- Coding principles: Command Query Separation, Feature Toggle Rollout, Query Efficiency.
- Acceptance: heavy work is offloaded, reads are efficient, and behavior can be changed through a safe flag.

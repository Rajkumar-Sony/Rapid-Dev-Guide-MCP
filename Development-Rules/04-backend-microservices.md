# Backend Microservices Rules

Use this when splitting backend logic into services or when multiple services communicate with each other.

## Step 1: Must Apply First

- One service should own one business capability.
- Keep services loosely coupled and highly cohesive.
- Make services stateless.
- Give each service clear ownership of its data.
- Design service APIs or events as stable contracts.
- Add timeouts, retries with limits, and idempotency.
- Add logs, metrics, and correlation IDs from the beginning.
- Add health checks, config management, and backward-compatible rollout rules.
- Apply DRY, KISS, YAGNI, and separation of concerns in service code.
- Make service ownership, contracts, dependencies, and failure behavior explicit.

<details>
<summary>Coding Principles name</summary>

- Single Business Capability
- Single Responsibility Principle
- DRY
- KISS
- YAGNI
- Separation of Concerns
- Loose Coupling
- High Cohesion
- Statelessness
- Data Ownership
- Idempotency
- Observability First
- Explicit Over Implicit
- Observability by Design

</details>

<details>
<summary>Concepts name</summary>

- Business capability
- business capability split
- service boundaries
- loose coupling
- high cohesion
- statelessness
- data ownership
- service contracts
- API contracts
- retries
- idempotency
- health checks
- config management

</details>

## Step 2: Service Boundaries

- Split by domain or business capability, not by technical layer.
- Avoid services that need to change together for every feature.
- Keep related business rules inside the same service.
- Make each service independently deployable.
- Avoid shared in-memory state.
- Define whether clients call services directly, through an API gateway, or through a BFF.

<details>
<summary>Coding Principles name</summary>

- Domain-Driven Boundaries
- Independent Deployability
- Low Coupling
- High Cohesion
- Shared State Avoidance

</details>

<details>
<summary>Concepts name</summary>

- Domain split
- capability ownership
- independent deployment
- shared-state avoidance
- API gateway
- BFF
- OpenAPI
- Swagger

</details>

## Step 3: Data And State

- Prefer database per service.
- Avoid shared databases across services.
- Avoid distributed transactions when possible.
- Use Saga or workflow patterns for multi-service business processes.
- Design for eventual consistency where strong consistency is not practical.
- Make repeated requests safe with idempotency.
- Define reporting and read-model strategy without breaking service data ownership.
- Use data replication carefully when read models, analytics, or cross-region needs require it.

<details>
<summary>Coding Principles name</summary>

- Database Per Service
- Data Ownership
- Eventual Consistency
- Fail Gracefully
- Idempotency
- Avoid Distributed Transactions

</details>

<details>
<summary>Concepts name</summary>

- Database per service
- shared-database avoidance
- distributed transaction avoidance
- Saga
- eventual consistency
- idempotency
- read models
- read model
- reporting strategy
- data replication

</details>

## Step 4: Architecture And Code Structure

- Keep API layer, business logic, and data access separate.
- Use controller, service, repository structure where it fits.
- Use clean architecture or hexagonal architecture when framework independence matters.
- Use dependency injection to avoid tight coupling.
- Use DTOs and contracts instead of exposing internal models.
- Keep domain logic independent from frameworks, transports, and infrastructure.

<details>
<summary>Coding Principles name</summary>

- Separation of Concerns
- SOLID
- Clean Architecture
- Hexagonal Architecture
- Dependency Injection
- Dependency Rule
- Explicit Contracts

</details>

<details>
<summary>Concepts name</summary>

- Layered architecture
- clean architecture
- hexagonal architecture
- dependency injection
- DTOs
- service contracts

</details>

## Step 5: Configuration And Discovery

- Manage service configuration outside code.
- Validate required configuration at startup.
- Keep environment-specific config explicit.
- Use service discovery when service instances are dynamic.
- Keep secrets in a secret manager or secure environment system.
- Make feature flags safe for gradual rollout.

<details>
<summary>Coding Principles name</summary>

- Externalized Configuration
- Fail Fast
- Defensive Programming
- Secret Management
- Environment Parity
- Controlled Rollout

</details>

<details>
<summary>Concepts name</summary>

- Externalized config
- startup validation
- environment config
- service discovery
- secret management
- feature flags

</details>

## Step 6: Communication

- Use REST or gRPC for synchronous calls.
- Use queues or events for async work and decoupled flows, such as Kafka or RabbitMQ.
- Prefer contract-first design with OpenAPI, Protobuf, or event schemas.
- Maintain backward compatibility.
- Version APIs or events when contracts change.
- Use graceful degradation when dependent services fail.
- Use an API gateway or BFF when routing, client-specific aggregation, auth, or rate limiting should be centralized.
- Document service APIs with OpenAPI or Swagger when REST contracts are shared.
- Separate read/query flows from command/write flows when they have different scale or consistency needs.

<details>
<summary>Coding Principles name</summary>

- Contract First
- Backward Compatibility
- KISS
- Command Query Separation
- Graceful Degradation
- Appropriate Coupling
- Avoid Over-Fetching
- Controlled Entry Point
- Client-Specific Aggregation

</details>

<details>
<summary>Concepts name</summary>

- REST
- gRPC
- queues
- Kafka
- RabbitMQ
- events
- contract-first design
- contract versioning
- OpenAPI
- Protobuf
- schema versioning
- graceful degradation
- client-specific aggregation
- service composition
- API gateway
- BFF

</details>

## Step 7: Event-Driven Reliability

- Define event schemas clearly.
- Version events without breaking existing consumers.
- Handle duplicate messages with idempotent consumers.
- Decide whether message ordering matters.
- Use dead-letter queues for messages that cannot be processed.
- Use outbox or inbox patterns when reliable publishing or consumption matters.
- Monitor consumer lag and failed message processing.
- Make event-driven updates retry-safe.

<details>
<summary>Coding Principles name</summary>

- Idempotent Consumers
- Idempotency
- Reliable Messaging
- Retry Safety
- Transactional Integrity
- Event Versioning
- At-Least-Once Awareness
- Poison Message Isolation

</details>

<details>
<summary>Concepts name</summary>

- Event schema
- event versioning
- idempotent consumer
- idempotent consumers
- processed-message store
- duplicate messages
- message ordering
- DLQ
- dead-letter queue
- poison messages
- outbox pattern
- reliable publishing
- transaction boundary
- inbox pattern
- consumer lag

</details>

## Step 8: Resilience

- Fail fast when a dependency is unavailable.
- Add timeouts everywhere.
- Use retries only with limits and backoff.
- Use circuit breakers for unstable dependencies.
- Use bulkhead isolation to prevent one failure from exhausting shared resources.
- Handle race conditions and concurrent updates.
- Use optimistic or pessimistic locking when concurrent writes need protection.
- Keep retry behavior safe.

<details>
<summary>Coding Principles name</summary>

- Fail Fast
- Timeout Discipline
- Bounded Retries
- Circuit Breaker
- Bulkhead Isolation
- Concurrency Safety
- Consistency Boundary

</details>

<details>
<summary>Concepts name</summary>

- Fail fast
- timeout
- retry
- bounded retry
- backoff
- circuit breaker
- bulkhead isolation
- race-condition handling
- race conditions
- optimistic locking
- pessimistic locking

</details>

## Step 9: Security

- Never trust input from another service automatically.
- Validate and sanitize all received data.
- Apply least privilege access.
- Handle secrets through a secret manager or secure environment system.
- Do not hardcode sensitive data.
- Protect internal endpoints too.

<details>
<summary>Coding Principles name</summary>

- Zero Trust
- Least Privilege
- Defensive Programming
- Validate At Boundaries
- Secure Internal APIs
- Secret Management

</details>

<details>
<summary>Concepts name</summary>

- Zero trust between services
- validation
- sanitization
- least privilege
- secret management
- internal endpoint protection

</details>

## Step 10: Observability

- Use structured JSON logs.
- Add correlation IDs to trace requests across services.
- Propagate trace IDs across sync and async calls.
- Emit metrics for latency, error rate, throughput, and saturation.
- Use metrics systems such as Prometheus and tracing systems such as Jaeger when appropriate.
- Avoid returning stack traces to clients.
- Make errors meaningful enough to debug.
- Add readiness and liveness probes for deployable services.
- Track dependency health and queue health.

<details>
<summary>Coding Principles name</summary>

- Structured Logging
- Traceability
- Metrics First
- Operational Awareness
- Observability by Design
- Safe Errors
- Health Transparency

</details>

<details>
<summary>Concepts name</summary>

- Structured logs
- structured logging
- correlation ID
- trace propagation
- metrics
- Prometheus
- Jaeger
- safe errors
- readiness probe
- liveness probe
- dependency health
- queue health

</details>

## Step 11: Testing

- Unit test core business logic.
- Integration test service APIs.
- Contract test service boundaries.
- Load test critical service paths when throughput or latency matters.
- Use chaos testing only when the system has enough maturity to learn safely from failure simulation.
- Use consumer-driven contract tests when consumers depend on provider behavior.
- Mock external dependencies in targeted tests.
- Test retry, timeout, and failure behavior.
- Test duplicate events, message ordering assumptions, and dead-letter behavior.
- Test business logic instead of framework behavior.

<details>
<summary>Coding Principles name</summary>

- Contract Testing
- Consumer-Driven Testing
- Failure Testing
- Integration Testing
- Duplicate Event Testing

</details>

<details>
<summary>Concepts name</summary>

- Unit testing
- integration testing
- contract testing
- load testing
- chaos testing
- consumer-driven contract testing
- consumer-driven contract tests
- dependency mocking
- failure testing
- duplicate-event testing

</details>

## Step 12: Scaling And Evolution

- Design for horizontal scaling.
- Use load balancing across service instances.
- Keep services stateless.
- Use async processing for heavy work.
- Avoid blocking operations.
- Optimize database queries.
- Add caching only where it solves a real bottleneck.
- Use feature toggles for controlled rollout.
- Keep changes backward compatible.
- Roll out contract changes in provider-first or consumer-first order based on compatibility.
- Preserve deployment independence between services.
- Use containerization such as Docker for repeatable service packaging.
- Use orchestration such as Kubernetes when deployment and scaling complexity justify it.
- Use blue-green or canary deployments for safer releases.
- Use auto-scaling when traffic changes significantly.
- Keep functions small and names clear.
- Avoid deep nesting with early returns.
- Avoid god classes and god services.

<details>
<summary>Coding Principles name</summary>

- Horizontal Scalability
- Statelessness
- Backward Compatibility
- Deployment Independence
- Feature Toggle Rollout
- Deployment Safety
- Operational Simplicity
- Query Efficiency
- DRY
- KISS
- YAGNI
- Clean Code
- Early Return
- God Class Avoidance

</details>

<details>
<summary>Concepts name</summary>

- Horizontal scaling
- load balancing
- stateless services
- async processing
- non-blocking operations
- query optimization
- caching
- feature toggles
- controlled rollout
- backward compatibility
- backward-compatible changes
- Docker
- Kubernetes
- blue-green deployment
- canary release
- auto-scaling
- backward-compatible rollout
- deployment independence

</details>

## Step 13: Advanced Microservice Patterns

- Use the Strangler pattern when gradually migrating from a legacy system.
- Use CQRS when read and write models have clearly different needs.
- Use event sourcing only when storing the history of state changes is a real requirement.
- Use multi-region deployment only when availability, latency, or disaster recovery requires it.
- Use a service mesh such as Istio only when traffic policy, mTLS, or observability needs justify the operational cost.
- Use Docker Compose or equivalent tooling for local multi-service development.

<details>
<summary>Coding Principles name</summary>

- Use Complexity Only When Justified
- Backward Compatibility
- Evolutionary Architecture
- Operational Simplicity
- Explicit Over Implicit

</details>

<details>
<summary>Concepts name</summary>

- Strangler pattern
- CQRS
- event sourcing
- multi-region deployment
- service mesh
- Istio
- Docker Compose
- local development setup
- routing
- centralized auth
- rate limiting
- event-driven updates
- fallback
- dependency failure

</details>

## Before Moving On

- Service boundaries are business-based.
- No service depends on another service's database.
- Critical operations are idempotent.
- Event schemas, duplicate handling, and dead-letter behavior are defined when async messaging is used.
- Timeouts and retries are configured.
- Logs, metrics, traces, and health probes connect requests and failures across services.
- Contracts are documented and versioned.
- Services can be deployed independently without breaking consumers.

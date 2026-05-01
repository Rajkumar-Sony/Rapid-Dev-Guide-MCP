# High Level Design Rules

Use this before designing the full system architecture, service boundaries, data flow, and reliability strategy.

## Step 1: Must Apply First

- Define functional requirements.
- Define non-functional requirements: scale, latency, availability, reliability, and security.
- Identify users, clients, and external systems.
- Draw the main components and data flow.
- Choose storage based on access patterns.
- Plan for failure handling.
- Add observability and security from the start.
- Make system ownership, dependencies, data flow, and failure modes explicit.

<details>
<summary>Coding Principles name</summary>

- Requirements First
- NFR Driven Design
- Failure-Aware Design
- Security By Design
- Observability First
- Explicit Over Implicit
- Observability by Design

</details>

<details>
<summary>Concepts name</summary>

- Functional requirements
- non-functional requirements
- users
- external systems
- architecture diagram
- storage choice
- failure planning
- observability
- security

</details>

## Step 2: Core System Design Principles

- Scalability: the system can handle growth.
- Reliability: the system continues working correctly.
- Availability: the system stays reachable.
- Maintainability: the system is easy to update.
- Extensibility: new features can be added without rewriting everything.
- Fault tolerance: failures are isolated and handled gracefully.

<details>
<summary>Coding Principles name</summary>

- Scalability
- Reliability
- Availability
- Maintainability
- Extensibility
- Fault Tolerance

</details>

<details>
<summary>Concepts name</summary>

- Scalability
- reliability
- availability
- maintainability
- extensibility
- fault tolerance

</details>

## Step 3: Architecture Design

- Choose monolith or microservices based on team size, domain complexity, and deployment needs.
- Define service boundaries around domains.
- Use layered architecture where it keeps responsibilities clear.
- Use event-driven architecture when async decoupling is useful.
- Keep business rules independent from infrastructure where practical.
- Apply the dependency rule so domain logic does not depend on infrastructure details.

<details>
<summary>Coding Principles name</summary>

- Domain-Driven Boundaries
- Separation of Concerns
- KISS
- YAGNI
- Evolutionary Architecture
- Dependency Rule
- Appropriate Architecture Choice

</details>

<details>
<summary>Concepts name</summary>

- Monolith
- microservices
- service boundaries
- layered architecture
- event-driven architecture
- clean architecture

</details>

## Step 4: System Components

- API layer for client entry points.
- Application or service layer for business logic.
- Database layer for persistent data.
- Cache layer for repeated reads or expensive computation.
- Message queue or event bus for async processing.
- CDN for public static assets or frontend-heavy systems.

<details>
<summary>Coding Principles name</summary>

- Layered Responsibility
- Clear Ownership
- Separation of Concerns
- Loose Coupling

</details>

<details>
<summary>Concepts name</summary>

- API layer
- service layer
- database layer
- cache layer
- message queue
- event bus
- CDN

</details>

## Step 5: Data Design

- Choose SQL when relationships, constraints, and transactions matter.
- Choose NoSQL when flexible schema, high write scale, or specific access patterns justify it.
- Design schemas around real query patterns.
- Use partitioning or sharding only when scale requires it.
- Use replication for availability and read scaling.
- Decide where strong consistency is required and where eventual consistency is acceptable.

<details>
<summary>Coding Principles name</summary>

- Access Pattern Driven Design
- Consistency Awareness
- Data Ownership
- Fit For Purpose Storage

</details>

<details>
<summary>Concepts name</summary>

- SQL
- NoSQL
- schema design
- access patterns
- partitioning
- sharding
- replication
- consistency model

</details>

## Step 6: Scalability And Performance

- Use horizontal scaling for stateless services.
- Use load balancing across service instances.
- Use auto-scaling where traffic changes.
- Use caching with clear invalidation rules.
- Reduce unnecessary network calls.
- Optimize queries before adding infrastructure.
- Use batch processing where real-time processing is not needed.

<details>
<summary>Coding Principles name</summary>

- Horizontal Scalability
- Cache With Purpose
- Measure Before Optimizing
- Batch When Appropriate

</details>

<details>
<summary>Concepts name</summary>

- Horizontal scaling
- load balancing
- auto-scaling
- caching
- cache invalidation
- network reduction
- query optimization
- batch processing

</details>

## Step 7: Service Communication

- Use REST or gRPC for synchronous communication.
- Use queues, pub/sub, or event streams for async communication.
- Use an API gateway where routing, auth, or rate limiting should be centralized.
- Use service discovery when service instances are dynamic.
- Keep contracts backward compatible.

<details>
<summary>Coding Principles name</summary>

- Appropriate Communication Style
- Backward Compatibility
- Idempotency
- Loose Coupling
- Contract Discipline

</details>

<details>
<summary>Concepts name</summary>

- REST
- gRPC
- queues
- pub/sub
- event streams
- API gateway
- service discovery
- backward compatibility

</details>

## Step 8: Security Design

- Define authentication strategy.
- Define authorization strategy, such as RBAC.
- Encrypt sensitive data in transit and at rest.
- Add API rate limiting and throttling.
- Use secret management.
- Apply least privilege for services and users.

<details>
<summary>Coding Principles name</summary>

- Defense In Depth
- Least Privilege
- Secure By Default
- Encryption By Default

</details>

<details>
<summary>Concepts name</summary>

- Authentication
- authorization
- RBAC
- encryption in transit
- encryption at rest
- rate limiting
- throttling
- secret management
- least privilege

</details>

## Step 9: Reliability And Fault Handling

- Add request timeouts.
- Use retries with limits and backoff.
- Use circuit breakers for dependency failures.
- Provide fallback behavior where possible.
- Use graceful degradation for non-critical features.
- Use load shedding when the system is overloaded.

<details>
<summary>Coding Principles name</summary>

- Timeout Discipline
- Retry Safety
- Circuit Breaker
- Graceful Degradation
- Load Shedding

</details>

<details>
<summary>Concepts name</summary>

- Timeout
- retry
- backoff
- circuit breaker
- fallback
- graceful degradation
- load shedding

</details>

## Step 10: Observability

- Centralize logs.
- Track metrics such as latency, throughput, error rate, and resource usage.
- Use distributed tracing across services.
- Add alerts for user-impacting failures.
- Keep enough context to debug production issues.

<details>
<summary>Coding Principles name</summary>

- Observability First
- Traceability
- Actionable Alerts
- Debuggability

</details>

<details>
<summary>Concepts name</summary>

- Centralized logging
- metrics
- distributed tracing
- alerting
- production debugging context

</details>

## Step 11: Deployment And Infrastructure

- Decide cloud provider or hosting model.
- Use containers when deployment consistency matters.
- Use orchestration such as Kubernetes only when operational complexity is justified.
- Use CI/CD pipelines.
- Use blue-green or canary deployments for safer releases.
- Plan rollback strategy.

<details>
<summary>Coding Principles name</summary>

- Deployment Safety
- Rollback Readiness
- Infrastructure Consistency
- Operational Simplicity

</details>

<details>
<summary>Concepts name</summary>

- Cloud provider
- hosting model
- containers
- orchestration
- Kubernetes
- CI/CD
- blue-green deployment
- canary deployment
- rollback

</details>

## Step 12: Advanced Concepts

Apply only when the system needs them.

- Multi-region deployment.
- Disaster recovery.
- Service mesh.
- Event sourcing.
- CQRS.
- Stream processing.
- Chaos testing.

<details>
<summary>Coding Principles name</summary>

- Use Complexity Only When Justified
- Event Sourcing Discipline
- CQRS Separation
- Command Query Separation
- Disaster Recovery Planning

</details>

<details>
<summary>Concepts name</summary>

- Multi-region
- disaster recovery
- service mesh
- event sourcing
- CQRS
- stream processing
- chaos testing

</details>

## Diagrams To Create

- System architecture diagram.
- Service interaction diagram.
- Data flow diagram.
- Deployment diagram.

<details>
<summary>Coding Principles name</summary>

- Visual Communication
- Shared Understanding
- Architecture Traceability

</details>

<details>
<summary>Concepts name</summary>

- System architecture diagram
- service interaction diagram
- data flow diagram
- deployment diagram

</details>

## Before Moving On

- Requirements and scale assumptions are explicit.
- Main components and data flow are clear.
- Database choice matches access patterns.
- Caching and failure handling are defined.
- Security, observability, and deployment strategy are included.
- Diagrams explain the system without needing a long meeting.

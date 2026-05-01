# Low Level Design Rules

Use this before writing important modules, classes, services, hooks, utilities, or business logic.

## Step 1: Must Apply First

- Define one clear responsibility per class, module, component, or function.
- Keep code simple. Do not design for imaginary future requirements.
- Separate business logic, data access, validation, and presentation concerns.
- Prefer composition over inheritance.
- Make inputs, outputs, and side effects obvious.
- Validate input at boundaries.
- Design code so it can be tested without heavy setup.
- Make ownership, dependencies, and side effects explicit.

<details>
<summary>Coding Principles name</summary>

- Single Responsibility Principle
- KISS
- YAGNI
- Separation of Concerns
- Composition Over Inheritance
- Explicit Over Implicit
- Design For Testability

</details>

<details>
<summary>Concepts name</summary>

- Single responsibility
- KISS
- YAGNI
- separation of concerns
- composition
- explicit contracts
- boundary validation
- testability

</details>

## Step 2: Core Design Principles

- SOLID principles:
  - Single Responsibility: one unit should have one reason to change.
  - Open/Closed: extend behavior without rewriting stable code.
  - Liskov Substitution: subclasses or implementations must respect the parent contract.
  - Interface Segregation: keep interfaces focused.
  - Dependency Inversion: depend on abstractions where it reduces coupling.
- DRY: reuse logic through functions, utilities, hooks, services, or shared modules.
- KISS: prefer direct, readable code.
- YAGNI: do not build features before they are needed.
- Law of Demeter: avoid reaching deeply through another object or module internals.
- Tell, Don't Ask: put behavior close to the object or module that owns the data.
- Command Query Separation: keep state-changing commands separate from read-only queries.
- Dependency Rule: inner business logic should not depend on outer frameworks or infrastructure.
- Make Illegal States Unrepresentable: use types, validation, and domain models to prevent invalid states.

<details>
<summary>Coding Principles name</summary>

- SOLID
- DRY
- KISS
- YAGNI
- Dependency Inversion
- Interface Segregation
- Open/Closed Principle
- Law of Demeter
- Tell, Don't Ask
- Command Query Separation
- Dependency Rule
- Explicit Over Implicit
- Make Illegal States Unrepresentable

</details>

<details>
<summary>Concepts name</summary>

- SOLID
- DRY
- KISS
- YAGNI
- dependency inversion
- interface segregation
- open/closed design

</details>

## Step 3: Class And Object Design

- Give every class or object a clear responsibility.
- Hide internal details with encapsulation.
- Expose only necessary behavior through clear methods.
- Avoid "god classes" that coordinate everything.
- Use inheritance only when the relationship is truly "is-a".
- Use composition for flexible behavior.
- Avoid reaching through object chains to change nested internals.
- Put behavior near the data owner instead of pulling data out and deciding elsewhere.

<details>
<summary>Coding Principles name</summary>

- Single Responsibility Principle
- Encapsulation
- Abstraction
- Law of Demeter
- Tell, Don't Ask
- Composition Over Inheritance
- God Class Avoidance

</details>

<details>
<summary>Concepts name</summary>

- Responsibility assignment
- encapsulation
- abstraction
- god-class avoidance
- inheritance control
- composition

</details>

## Step 4: Relationships

- Association: one object uses or knows about another.
- Aggregation: one object has another, but both can exist independently.
- Composition: one object owns another object's lifecycle.
- Dependency: one object temporarily relies on another to complete work.

Choose the relationship that keeps ownership and lifecycle clear.

<details>
<summary>Coding Principles name</summary>

- Clear Ownership
- Lifecycle Clarity
- Low Coupling
- High Cohesion

</details>

<details>
<summary>Concepts name</summary>

- Association
- aggregation
- composition
- dependency
- ownership
- lifecycle clarity

</details>

## Step 5: Design Patterns

Use patterns when they simplify the design, not because the pattern exists.

Creational patterns:

- Factory
- Abstract Factory
- Builder
- Singleton, only when global uniqueness is truly required

Structural patterns:

- Adapter
- Decorator
- Facade
- Proxy

Behavioral patterns:

- Observer
- Strategy
- Command
- State

<details>
<summary>Coding Principles name</summary>

- Pattern Fit Over Pattern Use
- Factory Pattern
- Builder Pattern
- Adapter Pattern
- Strategy Pattern
- Observer Pattern

</details>

<details>
<summary>Concepts name</summary>

- Factory
- abstract factory
- builder
- singleton
- adapter
- decorator
- facade
- proxy
- observer
- strategy
- command
- state

</details>

## Step 6: Code Structure

- Use layered design where appropriate: controller, service, repository.
- Split large files into small modules.
- Keep reusable logic in shared utilities or services.
- Use interfaces or contracts when implementation may change.
- Keep naming direct and specific.
- Keep business/domain logic independent from framework and infrastructure details.

<details>
<summary>Coding Principles name</summary>

- Separation of Concerns
- Modularity
- Interface-Based Design
- Dependency Rule
- Naming Clarity

</details>

<details>
<summary>Concepts name</summary>

- Layered design
- modularity
- reusable logic
- interface-based design
- naming clarity

</details>

## Step 7: Data Flow And Errors

- Design methods with clear inputs and outputs.
- Use DTOs when crossing boundaries.
- Validate data before using it.
- Define an error handling strategy.
- Handle null, undefined, empty, and invalid states intentionally.
- Separate read-only queries from commands that change state.
- Use types or domain models to prevent invalid states where possible.

<details>
<summary>Coding Principles name</summary>

- Explicit Contracts
- Explicit Over Implicit
- Command Query Separation
- Validation At Boundaries
- Fail Fast
- Defensive Programming
- Make Illegal States Unrepresentable

</details>

<details>
<summary>Concepts name</summary>

- Method contract
- DTOs
- validation
- error strategy
- null handling
- invalid-state handling

</details>

## Step 8: Performance And Concurrency

- Consider time complexity and space complexity for core algorithms.
- Pick data structures based on access patterns.
- Cache only when repeated work is actually expensive.
- Handle race conditions when concurrent writes are possible.
- Use locks, synchronization, or optimistic concurrency only when needed.

<details>
<summary>Coding Principles name</summary>

- Complexity Awareness
- Data Structure Fit
- Cache With Purpose
- Concurrency Safety

</details>

<details>
<summary>Concepts name</summary>

- Big-O
- data structures
- caching
- race conditions
- locking
- synchronization
- optimistic concurrency

</details>

## Step 9: Testability

- Keep business logic separate from framework code.
- Use dependency injection where it improves testability.
- Prefer small pure functions for reusable logic.
- Avoid tight coupling to external services.
- Make important edge cases easy to test.

<details>
<summary>Coding Principles name</summary>

- Design For Testability
- Dependency Injection
- Pure Functions
- Loose Coupling

</details>

<details>
<summary>Concepts name</summary>

- Framework isolation
- dependency injection
- pure functions
- loose coupling
- edge-case testing

</details>

## Before Moving On

- Each unit has one clear responsibility.
- There is no unnecessary abstraction.
- Inputs and outputs are clear.
- Edge cases and invalid inputs are handled.
- Code can be tested without relying on the full application.
- Names explain intent without extra comments.

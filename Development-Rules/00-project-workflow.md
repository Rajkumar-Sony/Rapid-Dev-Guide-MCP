# Project Workflow Rules

Use this from requirement clarification through implementation, testing, review, and release readiness.

## Step 1: Must Apply First

- Clarify the problem before choosing the solution.
- Define success criteria before writing code.
- Identify users, roles, and affected workflows.
- Separate must-have requirements from nice-to-have ideas.
- Decide what is out of scope.
- Check existing patterns before adding new ones.
- Keep the implementation small enough to review safely.

<details>
<summary>Coding Principles name</summary>

- Problem First
- Success Criteria First
- Scope Control
- Reuse Existing Patterns
- Small Reviewable Changes

</details>

<details>
<summary>Concepts name</summary>

- Problem clarity
- success criteria
- user workflow
- scope control
- existing-pattern reuse
- reviewable change size

</details>

## Step 2: Requirement Clarification

- Write the goal in one clear sentence.
- List the user actions the feature must support.
- Define expected behavior for success, empty, loading, and error states.
- Identify permissions, data ownership, and privacy requirements.
- Confirm performance or scale expectations when they matter.
- Record assumptions that are not yet proven.

<details>
<summary>Coding Principles name</summary>

- Clarity Before Implementation
- User-Centered Requirements
- Explicit Assumptions
- Privacy By Design

</details>

<details>
<summary>Concepts name</summary>

- Goal statement
- user actions
- behavior states
- permissions
- data ownership
- privacy requirements
- assumptions

</details>

## Step 3: Feature Planning

- Break the work into small deliverable steps.
- Identify affected frontend, backend, database, cloud, and documentation areas.
- Decide whether the work needs LLD, HLD, API design, database design, or security review.
- Prefer the simplest implementation that satisfies current requirements.
- Avoid bundling unrelated refactors with feature work.
- Plan how the feature can be manually verified.

<details>
<summary>Coding Principles name</summary>

- Incremental Delivery
- Impact Awareness
- Simple Design
- Avoid Unrelated Refactors
- Verification First

</details>

<details>
<summary>Concepts name</summary>

- Work breakdown
- impact analysis
- design trigger
- simple solution
- refactor control
- verification planning

</details>

## Step 4: Design Before Code

- Define inputs, outputs, and ownership boundaries.
- Sketch the data flow between UI, API, services, database, and external systems.
- Choose where validation belongs.
- Decide where errors are created, transformed, logged, and shown.
- Check whether existing abstractions already solve the problem.
- Identify migration, compatibility, or rollout risks before implementation.

<details>
<summary>Coding Principles name</summary>

- Separation of Concerns
- Explicit Boundaries
- Validation At Boundaries
- Fail Fast
- Backward Compatibility

</details>

<details>
<summary>Concepts name</summary>

- Boundary design
- data flow
- validation placement
- error flow
- abstraction reuse
- migration risk
- compatibility risk

</details>

## Step 5: Implementation Flow

- Start with the smallest working vertical slice.
- Keep changes close to the feature boundary.
- Follow the existing folder structure and naming style.
- Add shared utilities only when repeated logic is real.
- Keep business logic separate from framework or UI glue.
- Handle failure paths while implementing, not after.
- Update documentation or examples when behavior changes.

<details>
<summary>Coding Principles name</summary>

- Vertical Slice Delivery
- Scoped Changes
- Convention Over Invention
- Abstraction Discipline
- Failure-Aware Development

</details>

<details>
<summary>Concepts name</summary>

- Vertical slice
- scoped change
- project conventions
- abstraction discipline
- separation of concerns
- failure handling

</details>

## Step 6: Testing Checkpoints

- Test core business logic with unit tests.
- Test integration points such as APIs, database access, and external services.
- Test important user workflows.
- Test edge cases, permissions, invalid input, and failure paths.
- Keep tests focused on behavior, not implementation details.
- Add manual test notes when automation is not practical.

<details>
<summary>Coding Principles name</summary>

- Risk-Based Testing
- Behavior Testing
- Edge Case Coverage
- Permission-Aware Testing

</details>

<details>
<summary>Concepts name</summary>

- Unit testing
- integration testing
- workflow testing
- edge cases
- permission testing
- manual verification

</details>

## Step 7: Review Checkpoints

- Confirm the change matches the original goal.
- Check readability, naming, and unnecessary complexity.
- Check security and privacy impact.
- Check backward compatibility.
- Check logs and errors for enough debugging context.
- Check that tests cover the risky parts.
- Remove dead code, debug output, and unused dependencies.

<details>
<summary>Coding Principles name</summary>

- Correctness First
- Readability
- Security Review
- Backward Compatibility
- Cleanup Discipline

</details>

<details>
<summary>Concepts name</summary>

- Goal fit
- readability
- security review
- backward compatibility
- logging quality
- test risk
- cleanup

</details>

## Step 8: Release Readiness

- Confirm deployment steps are known.
- Confirm configuration and environment variables are documented.
- Confirm migrations are safe to run.
- Confirm rollback or recovery path exists.
- Confirm monitoring and alerts cover important failures.
- Confirm user-facing behavior is documented when needed.

<details>
<summary>Coding Principles name</summary>

- Release Safety
- Migration Safety
- Rollback Readiness
- Observability First

</details>

<details>
<summary>Concepts name</summary>

- Deployment readiness
- environment configuration
- migration safety
- rollback path
- monitoring
- user-facing documentation

</details>

## Before Moving On

- The goal and success criteria are clear.
- Scope and non-scope are explicit.
- The affected parts of the system are known.
- Design choices are simple and consistent with the project.
- Tests or manual checks cover the main risks.
- Release and rollback expectations are clear.

# Documentation And Decision Records Rules

Use this when documenting setup, architecture decisions, API behavior, runbooks, and known limitations.

## Step 1: Must Apply First

- Document what future developers need to build, run, test, deploy, and support the project.
- Keep documentation close to the code it explains.
- Update documentation in the same change that changes behavior.
- Write decisions down when the reason matters later.
- Prefer short, accurate docs over long stale docs.
- Include known limitations and operational notes.

<details>
<summary>Coding Principles name</summary>

- Docs As Part Of Done
- Decision Traceability
- Keep Docs Close To Code
- Accuracy Over Volume

</details>

<details>
<summary>Concepts name</summary>

- Developer documentation
- support documentation
- docs near code
- behavior-change docs
- decision record
- stale-doc prevention
- known limitation

</details>

## Step 2: README Standards

- Explain what the project does.
- List prerequisites and supported versions.
- Provide setup steps from a clean machine.
- Include local run commands.
- Include test commands.
- Include build and deployment basics.
- Link to deeper docs instead of overloading the README.

<details>
<summary>Coding Principles name</summary>

- Onboarding First
- Reproducible Setup
- Command Discoverability
- Supported Version Clarity

</details>

<details>
<summary>Concepts name</summary>

- Project summary
- prerequisites
- supported versions
- setup steps
- run command
- test command
- build basics
- deployment basics

</details>

## Step 3: Architecture Documentation

- Describe main components and their responsibilities.
- Include diagrams for system architecture, data flow, and deployment when useful.
- Explain external dependencies.
- Document important data ownership boundaries.
- Keep diagrams updated when architecture changes.
- Avoid diagrams that are too detailed to maintain.

<details>
<summary>Coding Principles name</summary>

- Shared Understanding
- Component Ownership
- Diagram Maintainability
- Boundary Clarity

</details>

<details>
<summary>Concepts name</summary>

- Component responsibility
- architecture diagram
- data flow diagram
- deployment diagram
- external dependency
- data ownership
- diagram maintenance

</details>

## Step 4: API And Interface Documentation

- Document public APIs with examples.
- Include request, response, error, and auth behavior.
- Keep OpenAPI or interface contracts aligned with implementation.
- Document versioning and deprecation rules.
- Document events, queues, or webhooks when they are part of the interface.

<details>
<summary>Coding Principles name</summary>

- Documentation As Contract
- Example-Driven Docs
- Versioning Discipline
- Interface Clarity

</details>

<details>
<summary>Concepts name</summary>

- API example
- request example
- response example
- error example
- auth behavior
- OpenAPI
- interface contract
- versioning
- deprecation
- event docs

</details>

## Step 5: Architecture Decision Records

- Write an ADR when a decision is hard to reverse or affects architecture.
- Include context, decision, alternatives considered, and consequences.
- Keep ADRs short and dated.
- Mark replaced decisions as superseded instead of deleting history.
- Link ADRs from related implementation or architecture docs.

<details>
<summary>Coding Principles name</summary>

- Decision Traceability
- Context Preservation
- Alternative Awareness
- Consequence Awareness

</details>

<details>
<summary>Concepts name</summary>

- ADR
- decision context
- decision alternatives
- consequences
- superseded decision
- decision history

</details>

## Step 6: Runbooks

- Document common operational tasks.
- Include how to identify and recover from common failures.
- Include rollback, restart, and migration recovery steps.
- Link dashboards, logs, alerts, and deployment tools.
- Keep emergency instructions direct and tested where practical.

<details>
<summary>Coding Principles name</summary>

- Operational Readiness
- Recovery Clarity
- Actionable Instructions
- Emergency Simplicity

</details>

<details>
<summary>Concepts name</summary>

- Operational task
- failure recovery
- rollback step
- restart step
- migration recovery
- dashboard link
- log link
- alert link

</details>

## Step 7: Onboarding And Known Limitations

- Document project conventions.
- Explain folder structure when it is not obvious.
- List common development workflows.
- Document known limitations, tradeoffs, and planned cleanup.
- Remove outdated notes when they are no longer true.

<details>
<summary>Coding Principles name</summary>

- Onboarding Clarity
- Convention Documentation
- Honest Limitations
- Stale Doc Removal

</details>

<details>
<summary>Concepts name</summary>

- Project convention
- folder structure
- development workflow
- known limitation
- tradeoff
- cleanup plan
- outdated-doc removal

</details>

## Before Moving On

- Setup and run instructions work from a clean environment.
- API and architecture docs match implementation.
- Important decisions have ADRs.
- Runbooks exist for production-critical systems.
- Known limitations are documented honestly.

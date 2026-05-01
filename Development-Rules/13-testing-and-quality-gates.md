# Testing And Quality Gates Rules

Use this when deciding what to test, what must pass before merge, and what quality gates protect releases.

## Step 1: Must Apply First

- Test the behavior that can break users, data, money, security, or releases.
- Keep tests focused on observable behavior.
- Run automated checks before merge.
- Add integration or E2E coverage for critical workflows.
- Treat flaky tests as product risk, not background noise.
- Do not chase coverage numbers while ignoring important scenarios.
- Keep manual QA explicit when automation is not practical.

<details>
<summary>Coding Principles name</summary>

- Risk-Based Testing
- Behavior Testing
- Automation First
- Flaky Test Ownership
- Coverage Discipline

</details>

<details>
<summary>Concepts name</summary>

- Risk-based testing
- behavior testing
- automated gate
- critical workflow coverage
- flaky test ownership
- coverage discipline
- manual QA

</details>

## Step 2: Test Strategy

- Use unit tests for pure logic and business rules.
- Use integration tests for APIs, databases, queues, and service boundaries.
- Use component tests for user-facing UI behavior.
- Use E2E tests for critical user journeys.
- Use contract tests when clients and providers depend on stable interfaces.
- Use load or performance tests when scale, latency, or throughput matter.
- Use security tests for auth, authorization, input validation, and sensitive endpoints.

<details>
<summary>Coding Principles name</summary>

- Test Pyramid
- Behavior Coverage
- Contract Testing
- Performance Awareness
- Security Testing

</details>

<details>
<summary>Concepts name</summary>

- Unit test
- integration test
- component test
- E2E test
- contract test
- load test
- performance test
- security test

</details>

## Step 3: What Must Be Tested Before Merge

- New business rules.
- Bug fixes, with a regression test where practical.
- Permission and ownership checks.
- Validation and error handling.
- Data migrations and destructive operations.
- Critical UI workflows.
- API contract changes.
- Retry, timeout, and failure behavior for risky integrations.

<details>
<summary>Coding Principles name</summary>

- Regression Protection
- Permission Testing
- Validation Testing
- Failure Path Testing
- Contract Safety

</details>

<details>
<summary>Concepts name</summary>

- Business-rule test
- regression test
- permission test
- validation test
- error-path test
- migration test
- API contract test
- integration failure test

</details>

## Step 4: CI Quality Gates

- Build must pass.
- Unit tests must pass.
- Required integration or E2E tests must pass.
- Linting and formatting checks must pass.
- Type checks must pass when the project uses typed languages.
- Security and dependency checks must pass or have documented acceptance.
- Migrations must be validated when included.

<details>
<summary>Coding Principles name</summary>

- Build Gate
- Test Gate
- Type Gate
- Lint Gate
- Security Gate
- Migration Gate

</details>

<details>
<summary>Concepts name</summary>

- Build gate
- unit-test gate
- integration-test gate
- E2E gate
- lint gate
- format gate
- type-check gate
- security gate
- migration gate

</details>

## Step 5: Coverage Expectations

- Cover high-risk behavior first.
- Cover edge cases that are easy to break.
- Do not require 100 percent coverage by default.
- Avoid tests that only verify implementation details.
- Add coverage around previous production incidents.
- Review untested critical paths before release.

<details>
<summary>Coding Principles name</summary>

- Risk-First Coverage
- Edge Case Coverage
- Avoid Implementation Testing
- Incident-Driven Tests

</details>

<details>
<summary>Concepts name</summary>

- Risk-first coverage
- edge-case coverage
- coverage threshold discipline
- implementation-detail avoidance
- incident-driven coverage

</details>

## Step 6: Test Data And Fixtures

- Keep test data realistic but small.
- Make fixtures easy to understand.
- Avoid depending on production data.
- Isolate tests so one test does not require another.
- Clean up data created during tests.
- Use stable IDs, clocks, and random values where determinism matters.

<details>
<summary>Coding Principles name</summary>

- Deterministic Tests
- Test Isolation
- Production Data Avoidance
- Fixture Clarity

</details>

<details>
<summary>Concepts name</summary>

- Realistic fixture
- small fixture
- production-data avoidance
- test isolation
- data cleanup
- deterministic clock
- deterministic random

</details>

## Step 7: Flaky Test Handling

- Investigate flaky tests quickly.
- Do not ignore repeated flakes.
- Quarantine only with an owner and follow-up plan.
- Fix timing, isolation, network, and data dependency issues.
- Avoid arbitrary sleeps when deterministic waits are possible.
- Track flaky tests as release risk.

<details>
<summary>Coding Principles name</summary>

- Flake Ownership
- Deterministic Waiting
- Isolation Discipline
- Release Risk Awareness

</details>

<details>
<summary>Concepts name</summary>

- Flake investigation
- quarantine ownership
- timing fix
- test isolation
- deterministic wait
- release risk

</details>

## Step 8: Manual QA

- Define manual steps for workflows that are expensive or brittle to automate.
- Test happy path, failure path, and permission differences.
- Test target browsers, devices, and screen sizes when UI is affected.
- Verify production-like configuration when release risk is high.
- Record what was tested and what was intentionally skipped.

<details>
<summary>Coding Principles name</summary>

- Explicit Manual Verification
- Critical Flow Verification
- Production-Like Checks
- QA Traceability

</details>

<details>
<summary>Concepts name</summary>

- Manual test plan
- happy path
- failure path
- permission path
- browser check
- device check
- production-like config
- QA notes

</details>

## Step 9: When Not To Over-Test

- Do not duplicate the same assertion across many layers.
- Do not test framework behavior.
- Do not add brittle snapshot tests without clear value.
- Do not block small low-risk changes with excessive E2E requirements.
- Prefer fewer reliable tests over many noisy tests.

<details>
<summary>Coding Principles name</summary>

- Avoid Duplicate Assertions
- Avoid Framework Testing
- Snapshot Discipline
- Reliable Tests Over Many Tests

</details>

<details>
<summary>Concepts name</summary>

- Assertion deduplication
- framework-behavior avoidance
- snapshot discipline
- low-risk change
- reliable-test preference

</details>

## Before Moving On

- Risky behavior has automated or documented manual coverage.
- Required CI gates pass.
- Flaky tests are fixed or explicitly owned.
- Critical workflows are covered at the right level.
- Test data is isolated and repeatable.
- Release risk from untested behavior is understood.

# Dependency And Package Management Rules

Use this when adding, updating, auditing, or publishing dependencies and packages.

## Step 1: Must Apply First

- Add a dependency only when it clearly reduces risk, complexity, or maintenance cost.
- Prefer well-maintained libraries with active usage and clear licenses.
- Pin versions through lockfiles.
- Review security impact before adding packages.
- Remove unused dependencies.
- Keep dependency updates small and testable.

<details>
<summary>Coding Principles name</summary>

- Dependency Justification
- Security Review
- License Awareness
- Lockfile Discipline
- Small Updates

</details>

<details>
<summary>Concepts name</summary>

- Dependency justification
- maintenance check
- license check
- lockfile
- security review
- unused dependency cleanup
- small update

</details>

## Step 2: Choosing Dependencies

- Check maintenance activity and release history.
- Check documentation quality.
- Check package size and runtime impact.
- Check license compatibility.
- Check transitive dependency risk.
- Prefer platform or framework standard libraries when they are enough.
- Avoid adding large packages for small utilities.

<details>
<summary>Coding Principles name</summary>

- Prefer Simplicity
- Maintenance Awareness
- License Compatibility
- Transitive Risk Awareness

</details>

<details>
<summary>Concepts name</summary>

- Maintenance activity
- release history
- documentation quality
- package size
- runtime impact
- license compatibility
- transitive dependency risk

</details>

## Step 3: Versioning And Lockfiles

- Commit lockfiles for applications.
- Keep package manager usage consistent.
- Avoid mixing package managers in one project.
- Pin runtime versions where builds depend on them.
- Understand semantic versioning ranges before allowing automatic updates.
- Keep dependency updates separated from behavior changes when practical.

<details>
<summary>Coding Principles name</summary>

- Reproducible Builds
- Package Manager Consistency
- Runtime Pinning
- Semantic Version Awareness

</details>

<details>
<summary>Concepts name</summary>

- Application lockfile
- package manager consistency
- runtime pinning
- semantic version range
- isolated dependency update

</details>

## Step 4: Security And License Checks

- Run vulnerability checks regularly.
- Prioritize fixes for reachable production dependencies.
- Review licenses for production and distributed software.
- Avoid abandoned packages for security-sensitive code.
- Document accepted vulnerabilities when immediate update is not possible.
- Remove packages that introduce unacceptable legal or security risk.

<details>
<summary>Coding Principles name</summary>

- Vulnerability Management
- License Compliance
- Abandoned Package Avoidance
- Risk Acceptance

</details>

<details>
<summary>Concepts name</summary>

- Vulnerability scan
- reachable dependency
- license review
- abandoned package risk
- vulnerability acceptance
- legal risk

</details>

## Step 5: Updating Dependencies

- Update in small batches.
- Read changelogs for major and security updates.
- Test build, unit tests, integration tests, and critical user flows.
- Watch for deprecated APIs after updates.
- Avoid major upgrades during unrelated feature work.
- Keep rollback simple by isolating risky updates.

<details>
<summary>Coding Principles name</summary>

- Small Batch Updates
- Changelog Review
- Regression Testing
- Rollback Isolation

</details>

<details>
<summary>Concepts name</summary>

- Small-batch update
- changelog review
- major update
- security update
- regression test
- deprecated API
- rollback isolation

</details>

## Step 6: Internal Packages

- Define package ownership.
- Use semantic versioning for shared packages.
- Document public APIs and breaking changes.
- Avoid leaking app-specific behavior into shared packages.
- Test packages before publishing.
- Keep release notes for consumers.

<details>
<summary>Coding Principles name</summary>

- Package Ownership
- Semantic Versioning
- Public API Stability
- Consumer Communication

</details>

<details>
<summary>Concepts name</summary>

- Package ownership
- semantic versioning
- public API docs
- breaking change
- shared package boundary
- package release note

</details>

## Step 7: Build And Supply Chain Safety

- Use trusted package registries.
- Avoid running unknown install scripts without review.
- Protect publish tokens.
- Use reproducible builds where practical.
- Verify generated artifacts are expected before publishing.
- Monitor dependency health over time.

<details>
<summary>Coding Principles name</summary>

- Trusted Sources
- Publish Token Protection
- Reproducible Builds
- Artifact Verification

</details>

<details>
<summary>Concepts name</summary>

- Trusted registry
- install script review
- publish token protection
- reproducible build
- artifact verification
- dependency health monitoring

</details>

## Before Moving On

- The dependency is justified.
- License and security risks are acceptable.
- Lockfiles and package manager usage are consistent.
- Updates are tested and easy to roll back.
- Unused dependencies are removed.

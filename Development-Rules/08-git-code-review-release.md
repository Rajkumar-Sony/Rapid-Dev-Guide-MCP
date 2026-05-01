# Git, Code Review, And Release Rules

Use this when committing, opening pull requests, reviewing changes, versioning, releasing, and planning rollback.

## Step 1: Must Apply First

- Keep commits focused on one logical change.
- Do not mix unrelated refactors with feature or bug work.
- Write commit messages that explain the change.
- Open pull requests with clear context and verification notes.
- Review for correctness, maintainability, tests, security, and rollout risk.
- Release only when rollback or recovery is understood.

<details>
<summary>Coding Principles name</summary>

- Small Focused Changes
- Reviewability
- Clear Communication
- Release Safety
- Rollback Readiness

</details>

<details>
<summary>Concepts name</summary>

- Focused commits
- refactor isolation
- commit message clarity
- PR context
- review quality
- release rollback

</details>

## Step 2: Branching

- Use short-lived feature branches.
- Keep branch names descriptive.
- Rebase or merge from the main branch regularly according to team practice.
- Avoid long-running branches that collect unrelated changes.
- Do not commit generated or local-only files unless the project requires them.
- Keep experimental work separate from release-bound work.

<details>
<summary>Coding Principles name</summary>

- Short-Lived Branches
- Mainline Awareness
- Change Isolation
- Generated File Discipline

</details>

<details>
<summary>Concepts name</summary>

- Short-lived branch
- descriptive branch name
- mainline sync
- long-running branch avoidance
- generated-file control

</details>

## Step 3: Commits

- Make each commit buildable when practical.
- Use clear messages such as `Add user profile validation`.
- Explain why when the reason is not obvious.
- Avoid vague messages such as `fix`, `updates`, or `changes`.
- Separate formatting-only commits from behavior changes.
- Do not include secrets, credentials, or private data.

<details>
<summary>Coding Principles name</summary>

- Atomic Commits
- Clear Intent
- Secret Prevention
- Formatting Separation

</details>

<details>
<summary>Concepts name</summary>

- Buildable commit
- clear commit message
- why explanation
- formatting separation
- secret prevention

</details>

## Step 4: Pull Request Checklist

- Describe the problem and solution.
- Link the issue, task, or requirement when available.
- List user-visible behavior changes.
- Include screenshots or recordings for UI changes.
- Include migration notes for database changes.
- Include config or environment variable changes.
- Include test commands and manual verification steps.
- Call out known risks or follow-up work.

<details>
<summary>Coding Principles name</summary>

- Context First
- Evidence-Based Review
- Risk Disclosure
- Change Traceability

</details>

<details>
<summary>Concepts name</summary>

- Problem statement
- solution summary
- issue link
- behavior change
- screenshot
- migration note
- config note
- test evidence
- risk note

</details>

## Step 5: Code Review Standards

- Check whether the code solves the stated problem.
- Check edge cases, invalid input, and failure paths.
- Check naming, readability, and unnecessary complexity.
- Check whether abstractions are justified.
- Check test coverage around risky behavior.
- Check security, privacy, and permission boundaries.
- Check backward compatibility and rollout impact.

<details>
<summary>Coding Principles name</summary>

- Correctness First
- Readability
- Security Review
- Test Adequacy
- Compatibility Awareness

</details>

<details>
<summary>Concepts name</summary>

- Correctness review
- edge-case review
- readability review
- abstraction review
- test review
- security review
- compatibility review

</details>

## Step 6: Review Etiquette

- Keep comments specific and actionable.
- Distinguish blocking issues from suggestions.
- Explain the reason behind requested changes.
- Prefer code examples for unclear feedback.
- Resolve comments only after the concern is addressed or intentionally accepted.
- Do not approve changes that you would not be comfortable supporting in production.

<details>
<summary>Coding Principles name</summary>

- Actionable Feedback
- Respectful Review
- Blocking Clarity
- Production Ownership

</details>

<details>
<summary>Concepts name</summary>

- Actionable feedback
- blocking distinction
- rationale
- code example
- comment resolution
- production ownership

</details>

## Step 7: Versioning And Changelog

- Use semantic versioning when publishing libraries or APIs.
- Mark breaking changes clearly.
- Record user-visible changes in a changelog or release notes.
- Include migration instructions for breaking changes.
- Mention deprecated behavior before removing it.
- Keep internal-only refactors out of user-facing release notes unless they affect behavior.

<details>
<summary>Coding Principles name</summary>

- Semantic Versioning
- Breaking Change Discipline
- Deprecation Discipline
- User-Facing Clarity

</details>

<details>
<summary>Concepts name</summary>

- Semantic versioning
- breaking change
- changelog
- release note
- migration instruction
- deprecation notice

</details>

## Step 8: Release Checklist

- Confirm tests and required checks pass.
- Confirm database migrations are ready and ordered.
- Confirm configuration is present in the target environment.
- Confirm feature flags are set correctly.
- Confirm monitoring and alerts are in place.
- Confirm support or operations teams know about user-impacting changes.
- Confirm rollback steps are documented.

<details>
<summary>Coding Principles name</summary>

- Release Readiness
- Environment Readiness
- Monitoring Readiness
- Rollback Documentation

</details>

<details>
<summary>Concepts name</summary>

- Passing checks
- migration readiness
- environment config
- feature flag
- monitoring
- stakeholder notice
- rollback documentation

</details>

## Step 9: Rollback Expectations

- Know whether rollback is code-only, config-only, database-related, or manual.
- Avoid irreversible migrations unless there is a recovery plan.
- Keep old API behavior compatible during staged releases.
- Use feature flags to disable risky behavior quickly.
- Verify rollback in non-production when practical.
- Monitor after rollback to confirm recovery.

<details>
<summary>Coding Principles name</summary>

- Rollback Readiness
- Reversibility
- Compatibility During Rollout
- Recovery Verification

</details>

<details>
<summary>Concepts name</summary>

- Code rollback
- config rollback
- database rollback
- compatibility during rollout
- feature-flag disablement
- rollback verification

</details>

## Before Moving On

- Commits are focused and understandable.
- Pull request context is complete.
- Review checks correctness, tests, security, and rollout risk.
- Release notes or changelog are updated when needed.
- Rollback or recovery path is known.

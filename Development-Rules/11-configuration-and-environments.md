# Configuration And Environments Rules

Use this when managing environment variables, config validation, feature flags, and dev/staging/production differences.

## Step 1: Must Apply First

- Keep configuration outside application code.
- Separate secrets from normal configuration.
- Validate required config at startup or build time.
- Keep dev, staging, and production differences explicit.
- Use safe defaults only when they are truly safe.
- Document every required environment variable.
- Avoid committing real secrets.

<details>
<summary>Coding Principles name</summary>

- Externalized Configuration
- Secret Separation
- Fail Fast
- Environment Clarity
- Safe Defaults

</details>

<details>
<summary>Concepts name</summary>

- Externalized config
- secret separation
- config validation
- environment difference
- safe default
- env var docs
- secret prevention

</details>

## Step 2: Environment Variables

- Use clear and consistent variable names.
- Document purpose, example value, and required environments.
- Keep local examples in a safe template such as `.env.example`.
- Do not put production values in examples.
- Avoid optional variables with unclear fallback behavior.
- Fail fast when required config is missing.

<details>
<summary>Coding Principles name</summary>

- Explicit Configuration
- Documented Defaults
- Template Safety
- Fail Fast

</details>

<details>
<summary>Concepts name</summary>

- Env var naming
- purpose docs
- example value
- required environment
- env template
- missing-config failure

</details>

## Step 3: Secrets Versus Config

- Treat passwords, API keys, tokens, certificates, and private keys as secrets.
- Store secrets in a secret manager or protected environment system.
- Limit access by service and environment.
- Rotate secrets after exposure.
- Avoid logging secrets or derived credentials.
- Keep non-secret config reviewable where possible.

<details>
<summary>Coding Principles name</summary>

- Secret Classification
- Least Access
- Secret Rotation
- No Secret Logging

</details>

<details>
<summary>Concepts name</summary>

- Secret classification
- secret manager
- access limit
- secret rotation
- log protection
- non-secret reviewability

</details>

## Step 4: Environment Parity

- Keep dev, staging, and production behavior as similar as practical.
- Make differences intentional and documented.
- Test migrations and releases in staging before production.
- Avoid using mocked services in staging when real integration behavior matters.
- Keep dependency versions consistent across environments.

<details>
<summary>Coding Principles name</summary>

- Environment Parity
- Intentional Differences
- Production-Like Testing
- Dependency Consistency

</details>

<details>
<summary>Concepts name</summary>

- Dev parity
- staging parity
- production parity
- intentional difference
- staging migration test
- real integration test
- dependency version consistency

</details>

## Step 5: Feature Flags

- Use feature flags for risky rollout and quick disablement.
- Name flags by behavior, not ticket number.
- Define default flag values per environment.
- Remove flags after rollout is complete.
- Avoid deeply nested flag logic.
- Track who owns each long-lived flag.

<details>
<summary>Coding Principles name</summary>

- Controlled Rollout
- Quick Disablement
- Flag Ownership
- Flag Cleanup

</details>

<details>
<summary>Concepts name</summary>

- Feature flag
- risky rollout
- quick disablement
- behavior-based name
- default flag value
- flag cleanup
- flag owner

</details>

## Step 6: Runtime And Build-Time Config

- Decide whether config is needed at build time, startup, or request time.
- Avoid rebuilding frontend apps just to change runtime environment values when runtime config is available.
- Keep public frontend config separate from server-only secrets.
- Validate config before serving traffic.
- Surface config errors clearly in logs.

<details>
<summary>Coding Principles name</summary>

- Config Timing Clarity
- Public/Private Separation
- Startup Validation
- Clear Failure

</details>

<details>
<summary>Concepts name</summary>

- Build-time config
- startup config
- request-time config
- frontend runtime config
- public config
- server-only secret
- config error

</details>

## Step 7: Safe Changes

- Roll out config changes gradually when risk is high.
- Keep previous config available for rollback when practical.
- Review production config changes like code changes.
- Monitor after changing config.
- Avoid manual, undocumented production changes.

<details>
<summary>Coding Principles name</summary>

- Gradual Rollout
- Rollback Readiness
- Config Review
- Change Monitoring

</details>

<details>
<summary>Concepts name</summary>

- Gradual config rollout
- config rollback
- config review
- config monitoring
- manual-change avoidance

</details>

## Before Moving On

- Required config is documented and validated.
- Secrets are not mixed with normal config.
- Environment differences are explicit.
- Feature flags have owners and cleanup plans.
- Config changes can be reviewed, monitored, and rolled back.

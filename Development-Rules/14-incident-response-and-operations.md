# Incident Response And Operations Rules

Use this when operating production systems, responding to alerts, debugging incidents, and improving reliability after failures.

## Step 1: Must Apply First

- Define what counts as an incident before production use.
- Make alerts actionable.
- Prioritize user impact over internal noise.
- Know how to roll back or disable risky behavior.
- Keep incident communication clear and factual.
- Preserve evidence while debugging.
- Write follow-up actions after significant incidents.

<details>
<summary>Coding Principles name</summary>

- User Impact First
- Actionable Alerts
- Rollback Readiness
- Clear Communication
- Blameless Follow-Up

</details>

<details>
<summary>Concepts name</summary>

- Incident definition
- actionable alert
- user impact
- rollback readiness
- incident communication
- evidence preservation
- follow-up action

</details>

## Step 2: Incident Severity

- Define severity levels based on user impact.
- Include examples for outage, data loss, security issue, degraded performance, and partial feature failure.
- Map each severity to response urgency.
- Define who must be notified for each severity.
- Reclassify severity when impact changes.
- Avoid over-alerting for non-actionable issues.

<details>
<summary>Coding Principles name</summary>

- Impact-Based Severity
- Escalation Clarity
- Response Urgency
- Reclassification Discipline

</details>

<details>
<summary>Concepts name</summary>

- Severity level
- outage
- data loss
- security incident
- degraded performance
- partial failure
- response urgency
- escalation

</details>

## Step 3: Alert Response

- Confirm whether the alert reflects real user impact.
- Check recent deployments, config changes, dependency outages, and traffic changes.
- Identify the affected service, region, customer group, or workflow.
- Assign one person to coordinate during serious incidents.
- Keep notes with timestamps, actions, and observations.
- Escalate when the owner or fix path is unclear.

<details>
<summary>Coding Principles name</summary>

- Impact Validation
- Recent Change Review
- Blast Radius Analysis
- Incident Coordination

</details>

<details>
<summary>Concepts name</summary>

- User impact validation
- recent-change review
- blast radius
- incident coordinator
- timestamped notes
- escalation

</details>

## Step 4: Production Debugging

- Use logs, metrics, traces, dashboards, and health checks before guessing.
- Avoid making multiple risky changes at once.
- Do not inspect sensitive user data unless explicitly allowed and necessary.
- Prefer reversible config changes or feature flags for mitigation.
- Capture enough context to explain the cause later.
- Keep debugging commands and access within approved boundaries.

<details>
<summary>Coding Principles name</summary>

- Evidence-Based Debugging
- Privacy-Safe Debugging
- Change Isolation
- Reversible Mitigation

</details>

<details>
<summary>Concepts name</summary>

- Logs
- metrics
- traces
- dashboards
- health checks
- change isolation
- privacy-safe debugging
- reversible mitigation

</details>

## Step 5: Rollback And Mitigation

- Decide whether to roll back, disable a feature, scale resources, or apply a forward fix.
- Roll back quickly when the current release is clearly causing user impact.
- Use feature flags for targeted disablement when available.
- Confirm database migrations are rollback-safe before reverting code.
- Monitor after mitigation to confirm recovery.
- Communicate mitigation status to stakeholders.

<details>
<summary>Coding Principles name</summary>

- Fast Mitigation
- Rollback Readiness
- Feature Disablement
- Recovery Verification

</details>

<details>
<summary>Concepts name</summary>

- Rollback
- feature disablement
- scaling mitigation
- forward fix
- migration rollback safety
- recovery monitoring
- stakeholder update

</details>

## Step 6: Runbooks

- Keep runbooks for common alerts and operational tasks.
- Include symptoms, likely causes, dashboards, logs, and safe actions.
- Include rollback and escalation steps.
- Keep runbooks short enough to use during pressure.
- Update runbooks after incidents reveal gaps.
- Test critical runbooks when practical.

<details>
<summary>Coding Principles name</summary>

- Operational Readiness
- Actionable Runbooks
- Escalation Clarity
- Runbook Maintenance

</details>

<details>
<summary>Concepts name</summary>

- Alert runbook
- operational task
- symptoms
- likely cause
- dashboard link
- safe action
- escalation
- runbook test

</details>

## Step 7: Uptime And Health Checks

- Monitor user-facing availability.
- Monitor service health, dependency health, and queue health.
- Use readiness checks for traffic routing.
- Use liveness checks for stuck process recovery.
- Track latency, error rate, saturation, and throughput.
- Alert on symptoms users feel, not only resource thresholds.

<details>
<summary>Coding Principles name</summary>

- User-Facing Monitoring
- Health Transparency
- Symptom-Based Alerting
- Saturation Awareness

</details>

<details>
<summary>Concepts name</summary>

- Availability monitoring
- service health
- dependency health
- queue health
- readiness check
- liveness check
- latency
- error rate
- saturation
- throughput

</details>

## Step 8: Communication

- Share what is known, what is unknown, and what is being done.
- Avoid speculation in incident updates.
- Use clear timestamps and impact descriptions.
- Keep customer-facing communication consistent with internal facts.
- Announce recovery only after metrics confirm it.
- Document decisions made during the incident.

<details>
<summary>Coding Principles name</summary>

- Fact-Based Communication
- Timestamped Updates
- Impact Clarity
- Recovery Confirmation

</details>

<details>
<summary>Concepts name</summary>

- Known facts
- unknowns
- action status
- speculation avoidance
- timestamp
- impact statement
- recovery confirmation
- decision log

</details>

## Step 9: Postmortems

- Write postmortems for significant incidents.
- Focus on facts, contributing factors, and system improvements.
- Avoid blaming individuals.
- Include timeline, impact, root cause, detection, response, and prevention.
- Create follow-up actions with owners and due dates.
- Track whether follow-up actions are completed.

<details>
<summary>Coding Principles name</summary>

- Blameless Review
- Root Cause Analysis
- Action Ownership
- Continuous Improvement

</details>

<details>
<summary>Concepts name</summary>

- Postmortem
- timeline
- impact
- root cause
- detection
- response
- prevention
- owner
- due date
- blameless review

</details>

## Step 10: Operational Readiness

- Confirm dashboards exist for critical services.
- Confirm alerts have owners.
- Confirm rollback paths are documented.
- Confirm access permissions are available before emergencies.
- Confirm backups and restore procedures are understood.
- Confirm on-call or support handoff is clear.

<details>
<summary>Coding Principles name</summary>

- Dashboard Readiness
- Alert Ownership
- Emergency Access
- Backup Restore Readiness
- Handoff Clarity

</details>

<details>
<summary>Concepts name</summary>

- Dashboard readiness
- alert ownership
- rollback docs
- emergency access
- backup restore
- on-call handoff
- support handoff

</details>

## Before Moving On

- Incident severity and escalation are defined.
- Alerts are actionable and owned.
- Rollback and mitigation paths are known.
- Runbooks exist for common failures.
- Production debugging respects privacy and access rules.
- Postmortem follow-ups are tracked to completion.

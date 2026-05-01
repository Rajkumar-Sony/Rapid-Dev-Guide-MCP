# Security And Privacy Rules

Use this before production release and whenever the project handles auth, user data, uploads, payments, admin roles, or sensitive information.

## Step 1: Must Apply First

- Never trust user input.
- Authenticate users before protected actions.
- Authorize every sensitive action based on role, permission, or ownership.
- Store secrets outside the codebase.
- Validate and sanitize data at system boundaries.
- Avoid logging sensitive data.
- Encrypt sensitive data where required.
- Review security before production release.
- Prefer explicit security decisions over implicit trust.

<details>
<summary>Coding Principles name</summary>

- Zero Trust
- Least Privilege
- Secure By Default
- Validate At Boundaries
- Privacy By Design
- Explicit Over Implicit

</details>

<details>
<summary>Concepts name</summary>

- Zero trust input
- authentication
- authorization
- secret management
- validation
- sanitization
- log redaction
- encryption
- security review

</details>

## Step 2: Authentication

- Use a proven auth provider or framework when possible.
- Store passwords only with strong one-way hashing.
- Use secure session or token storage.
- Set token expiration and refresh behavior intentionally.
- Protect password reset and account recovery flows.
- Add multi-factor authentication when risk or compliance requires it.
- Rate limit login, reset, and verification endpoints.

<details>
<summary>Coding Principles name</summary>

- Use Proven Auth
- Secure Credential Storage
- Token Lifecycle Management
- Account Recovery Safety
- Rate Limit Sensitive Flows

</details>

<details>
<summary>Concepts name</summary>

- Auth provider
- password hashing
- session storage
- token storage
- token expiration
- refresh token
- account recovery
- MFA
- login rate limit

</details>

## Step 3: Authorization

- Check permissions on the server, not only in the UI.
- Use least privilege by default.
- Enforce ownership checks for user-owned resources.
- Separate admin permissions from normal user permissions.
- Deny by default when permission is missing or unclear.
- Test authorization with users from different roles.

<details>
<summary>Coding Principles name</summary>

- Server-Side Enforcement
- Least Privilege
- Deny By Default
- Ownership Enforcement

</details>

<details>
<summary>Concepts name</summary>

- Server-side authorization
- least privilege
- ownership check
- admin permission
- deny by default
- role testing

</details>

## Step 4: Secret Handling

- Do not commit secrets, tokens, certificates, or private keys.
- Use environment variables or a secret manager.
- Rotate secrets after exposure or team changes.
- Limit secret access by environment and service.
- Avoid printing secrets in logs, errors, or debug output.
- Keep production secrets separate from development secrets.

<details>
<summary>Coding Principles name</summary>

- Secret Management
- Secret Rotation
- Least Access
- No Secret Logging
- Environment Separation

</details>

<details>
<summary>Concepts name</summary>

- Secret prevention
- secret manager
- rotation
- environment isolation
- log protection
- development-production separation

</details>

## Step 5: Input Validation And Injection Prevention

- Validate type, length, format, and allowed values.
- Use parameterized queries or ORM protections for database access.
- Escape or sanitize untrusted HTML.
- Validate file names, paths, and URLs.
- Protect against command injection when shell execution is used.
- Reject unexpected fields in sensitive update requests.

<details>
<summary>Coding Principles name</summary>

- Validate At Boundaries
- Allowlist Over Blocklist
- Parameterized Access
- Injection Prevention
- Mass Assignment Protection

</details>

<details>
<summary>Concepts name</summary>

- Type validation
- length validation
- format validation
- allowlist
- parameterized query
- HTML sanitization
- path validation
- command injection prevention
- mass-assignment prevention

</details>

## Step 6: Sensitive Data Handling

- Collect only data the product needs.
- Classify personal data, payment data, tokens, secrets, and internal identifiers.
- Mask sensitive values in UI, logs, and admin tools.
- Encrypt sensitive fields when required.
- Define retention and deletion rules.
- Avoid sending sensitive data to analytics or third-party tools unless approved.

<details>
<summary>Coding Principles name</summary>

- Data Minimization
- Data Classification
- Masking
- Encryption By Default
- Retention Discipline

</details>

<details>
<summary>Concepts name</summary>

- Data minimization
- data classification
- masking
- field encryption
- retention
- deletion
- analytics privacy
- third-party sharing control

</details>

## Step 7: Upload And File Security

- Validate file type, size, and extension.
- Do not trust client-provided MIME types.
- Store uploads outside executable paths.
- Generate safe server-side file names.
- Scan files when risk is high.
- Restrict public access to private files.
- Use signed URLs or controlled download endpoints when needed.

<details>
<summary>Coding Principles name</summary>

- Validate At Boundaries
- Least Exposure
- Safe File Handling
- Private By Default

</details>

<details>
<summary>Concepts name</summary>

- File type validation
- size limit
- MIME distrust
- safe storage path
- generated file name
- malware scan
- private file access
- signed URL

</details>

## Step 8: API And Web Security

- Use HTTPS in production.
- Configure CORS intentionally.
- Use CSRF protection for cookie-based auth.
- Set secure cookie flags when using cookies.
- Add rate limiting for public and sensitive endpoints.
- Use security headers where applicable.
- Avoid exposing stack traces or internal service details.

<details>
<summary>Coding Principles name</summary>

- HTTPS Only
- CSRF Protection
- CORS Discipline
- Rate Limiting
- Secure Headers

</details>

<details>
<summary>Concepts name</summary>

- HTTPS
- CORS
- CSRF
- secure cookie
- rate limiting
- security headers
- stack-trace protection

</details>

## Step 9: Logging And Monitoring Privacy

- Log enough context to debug without exposing sensitive values.
- Redact tokens, passwords, personal data, and payment details.
- Restrict access to production logs.
- Add alerts for suspicious auth failures and permission errors.
- Keep audit logs for sensitive admin actions.
- Define log retention based on operational and privacy needs.

<details>
<summary>Coding Principles name</summary>

- Privacy-Safe Logging
- Redaction
- Least Access
- Auditability
- Retention Discipline

</details>

<details>
<summary>Concepts name</summary>

- Privacy-safe logging
- redaction
- log access control
- suspicious auth alert
- permission-error alert
- audit log
- log retention

</details>

## Step 10: Production Security Checklist

- Dependencies are scanned or reviewed.
- Known vulnerable packages are updated or accepted with documented reason.
- Secrets are not present in source code or build artifacts.
- Auth and authorization tests cover important roles.
- Sensitive endpoints have rate limits.
- Backups and logs are access controlled.
- Incident response and recovery contacts are known.

<details>
<summary>Coding Principles name</summary>

- Security Gate
- Vulnerability Management
- Secret Scanning
- Authorization Testing
- Incident Readiness

</details>

<details>
<summary>Concepts name</summary>

- Dependency scan
- vulnerability acceptance
- secret scan
- authorization test
- endpoint rate limit
- backup access control
- incident contact

</details>

## Before Moving On

- Protected actions require authentication.
- Authorization is enforced server-side.
- Secrets are stored securely.
- Inputs are validated and injection risks are handled.
- Sensitive data is masked, encrypted, or avoided.
- Uploads and files are controlled.
- Production security checklist is complete.

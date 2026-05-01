# Database And Data Modeling Rules

Use this when designing schemas, relationships, migrations, indexes, transactions, and data integrity rules.

## Step 1: Must Apply First

- Model data around real business concepts.
- Define ownership of every table, collection, or entity.
- Use constraints to protect data integrity.
- Choose indexes based on query patterns.
- Use transactions when multiple writes must succeed or fail together.
- Make migrations safe, reversible where practical, and deployable.
- Avoid exposing internal database structure directly through APIs.

<details>
<summary>Coding Principles name</summary>

- Business-Driven Modeling
- Data Ownership
- KISS
- YAGNI
- Integrity By Constraint
- Index By Query Pattern
- Migration Safety

</details>

<details>
<summary>Concepts name</summary>

- Business modeling
- data ownership
- constraints
- indexes
- transactions
- migration safety
- API isolation

</details>

## Step 2: Entity And Relationship Design

- Identify main entities and their lifecycle.
- Define one-to-one, one-to-many, and many-to-many relationships clearly.
- Use foreign keys where relational integrity matters.
- Avoid storing the same fact in multiple places unless denormalization is justified.
- Name tables, collections, columns, and fields consistently.
- Keep ownership clear when data crosses service boundaries.

<details>
<summary>Coding Principles name</summary>

- Clear Ownership
- Lifecycle Awareness
- Normalization First
- Consistent Naming

</details>

<details>
<summary>Concepts name</summary>

- Entity lifecycle
- one-to-one
- one-to-many
- many-to-many
- foreign key
- denormalization control
- naming consistency
- ownership boundary

</details>

## Step 3: Schema Constraints

- Use primary keys for stable identity.
- Use foreign keys for required relationships in relational databases.
- Use unique constraints for business uniqueness.
- Use `NOT NULL` when a value is required.
- Use check constraints or enums for limited allowed values.
- Add default values only when the default is valid business behavior.
- Validate again at the application boundary for good error messages.

<details>
<summary>Coding Principles name</summary>

- Integrity By Constraint
- Fail Fast
- Database Enforcement
- Valid Defaults

</details>

<details>
<summary>Concepts name</summary>

- Primary key
- foreign key
- unique constraint
- NOT NULL
- check constraint
- enum
- default value
- boundary validation

</details>

## Step 4: Normalization And Denormalization

- Normalize data first to avoid inconsistency.
- Denormalize only for clear read performance or reporting needs.
- Document how denormalized data is kept in sync.
- Avoid premature duplication for possible future queries.
- Keep derived values computed unless storing them solves a real problem.

<details>
<summary>Coding Principles name</summary>

- Normalize First
- Denormalize With Purpose
- Single Source Of Truth
- Consistency Awareness

</details>

<details>
<summary>Concepts name</summary>

- Normalization
- denormalization
- sync strategy
- duplication control
- derived value

</details>

## Step 5: Indexing Rules

- Add indexes for common filters, joins, sorting, and lookup keys.
- Avoid indexing every column.
- Use composite indexes based on actual query order.
- Check write cost before adding many indexes.
- Review slow queries before guessing at indexes.
- Remove unused indexes when they add write overhead.

<details>
<summary>Coding Principles name</summary>

- Query-Driven Indexing
- Write Cost Awareness
- Measure Before Optimizing
- Unused Index Cleanup

</details>

<details>
<summary>Concepts name</summary>

- Lookup index
- join index
- sort index
- composite index
- write cost
- slow query review
- unused index cleanup

</details>

## Step 6: Transactions And Consistency

- Use transactions for multi-step writes that must stay consistent.
- Keep transactions short.
- Avoid external network calls inside database transactions.
- Choose isolation level based on real consistency needs.
- Handle race conditions with locks, constraints, or optimistic concurrency.
- Design retry behavior carefully for transaction conflicts.

<details>
<summary>Coding Principles name</summary>

- Transactional Integrity
- Short Transactions
- Concurrency Safety
- Idempotency
- Retry Safety

</details>

<details>
<summary>Concepts name</summary>

- Transaction
- short transaction
- isolation level
- race condition
- lock
- constraint
- optimistic concurrency
- retry conflict

</details>

## Step 7: Migrations

- Prefer backward-compatible migrations for production systems.
- Split risky migrations into expand, backfill, switch, and cleanup steps.
- Avoid long table locks during peak traffic.
- Back up important data before destructive changes.
- Test migrations on realistic data volume when possible.
- Define rollback or recovery steps before deployment.

<details>
<summary>Coding Principles name</summary>

- Backward Compatibility
- Expand And Contract
- Rollback Readiness
- Production Safety

</details>

<details>
<summary>Concepts name</summary>

- Backward-compatible migration
- expand-backfill-switch-cleanup
- table lock avoidance
- backup
- realistic migration test
- rollback

</details>

## Step 8: Audit Fields And Soft Deletes

- Use `created_at` and `updated_at` for important records.
- Add `created_by` and `updated_by` when user accountability matters.
- Use soft deletes only when restore, audit, or legal needs require them.
- Make soft-delete filtering consistent across reads.
- Decide whether unique constraints should include deleted records.
- Keep audit logs immutable when they are used for compliance or investigation.

<details>
<summary>Coding Principles name</summary>

- Auditability
- Restore Awareness
- Accountability
- Compliance Awareness

</details>

<details>
<summary>Concepts name</summary>

- created_at
- updated_at
- created_by
- updated_by
- soft delete
- restore
- audit log
- unique constraint with deleted records

</details>

## Step 9: Data Integrity And Privacy

- Store only data the product actually needs.
- Classify sensitive fields such as personal data, secrets, payment data, and tokens.
- Encrypt sensitive data when required.
- Avoid logging sensitive values.
- Define data retention and deletion behavior.
- Make data exports and deletion requests traceable when privacy laws apply.

<details>
<summary>Coding Principles name</summary>

- Data Minimization
- Privacy By Design
- Encryption By Default
- Retention Discipline

</details>

<details>
<summary>Concepts name</summary>

- Data minimization
- sensitive field classification
- encryption
- log redaction
- retention
- deletion
- export traceability

</details>

## Step 10: Performance And Operations

- Use pagination for large reads.
- Avoid N+1 queries.
- Use read replicas only when read scale or isolation requires them.
- Monitor slow queries and lock waits.
- Plan archival for large historical tables.
- Keep seed data separate from production data.

<details>
<summary>Coding Principles name</summary>

- Pagination First
- N+1 Avoidance
- Operational Visibility
- Archival Planning

</details>

<details>
<summary>Concepts name</summary>

- Pagination
- N+1 avoidance
- read replica
- slow query monitoring
- lock wait monitoring
- archival
- seed data separation

</details>

## Before Moving On

- Entities and relationships match the business model.
- Required constraints are in the database, not only in code.
- Indexes match known query patterns.
- Transactions protect multi-write consistency.
- Migrations are production-safe.
- Sensitive data handling is explicit.

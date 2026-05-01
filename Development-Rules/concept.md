# Development Rules Index

Use these files step by step while developing a project. Start with project workflow, then use the file that matches the current work. Move from essentials to scaling rules only when the project needs them.

## Recommended Order

1. [Project Workflow Rules](./00-project-workflow.md)
   Use from requirement clarification through implementation, testing, review, and release readiness.

2. [Low Level Design Rules](./01-low-level-design.md)
   Use before writing important modules, classes, functions, or business logic.

3. [Frontend Development Rules](./02-frontend-development.md)
   Use when building UI screens, components, state, API integration, and frontend quality checks.

4. [REST API Development Rules](./03-rest-api-development.md)
   Use when designing or implementing backend APIs.

5. [Backend Microservices Rules](./04-backend-microservices.md)
   Use when splitting backend logic into services or when services communicate with each other.

6. [High Level Design Rules](./05-high-level-design.md)
   Use before designing the full system architecture, service boundaries, data flow, and reliability strategy.

7. [Cloud and Deployment Rules](./06-cloud-and-deployment.md)
   Use when deploying, scaling, securing, monitoring, and operating the system in cloud environments.

8. [Database And Data Modeling Rules](./07-database-and-data-modeling.md)
   Use when designing schemas, relationships, migrations, indexes, transactions, and data integrity rules.

9. [Git, Code Review, And Release Rules](./08-git-code-review-release.md)
   Use when committing, opening pull requests, reviewing changes, versioning, releasing, and planning rollback.

10. [Security And Privacy Rules](./09-security-and-privacy.md)
    Use before production release and whenever the project handles auth, user data, uploads, payments, admin roles, or sensitive information.

11. [Documentation And Decision Records Rules](./10-documentation-and-decision-records.md)
    Use when documenting setup, architecture decisions, API behavior, runbooks, and known limitations.

12. [Configuration And Environments Rules](./11-configuration-and-environments.md)
    Use when managing environment variables, config validation, feature flags, and dev/staging/production differences.

13. [Dependency And Package Management Rules](./12-dependency-and-package-management.md)
    Use when adding, updating, auditing, or publishing dependencies and packages.

14. [Testing And Quality Gates Rules](./13-testing-and-quality-gates.md)
    Use when deciding what to test, what must pass before merge, and what quality gates protect releases.

15. [Incident Response And Operations Rules](./14-incident-response-and-operations.md)
    Use when operating production systems, responding to alerts, debugging incidents, and improving reliability after failures.

## How To Apply

For every feature or project phase:

1. Read the "Must Apply First" section.
2. Apply only the rules relevant to the current work.
3. Use the "Before Moving On" checklist.
4. Check security and privacy before production release.
5. Keep documentation, configuration, and dependency changes updated with the code.
6. Run the relevant testing and quality gates before merge or release.
7. Apply incident response and operations rules for production systems.
8. Apply advanced/scaling rules only when the project has that complexity.

Avoid trying to apply every rule at once. These documents are meant to guide practical decisions one step at a time.

## Learning Practice Projects

Use these when you want to build small apps to practice one concept at a time:

1. [Frontend Learning Projects](./15-frontend-learning-projects.md)
   Tiny frontend app ideas mapped to frontend concepts and coding principles.

2. [REST API Learning Projects](./16-rest-api-learning-projects.md)
   Tiny REST API app ideas mapped to API concepts and coding principles.

3. [Backend Microservices Learning Projects](./17-microservices-learning-projects.md)
   Tiny microservice app ideas mapped to service, event, reliability, and scalability concepts.

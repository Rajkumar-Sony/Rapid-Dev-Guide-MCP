# Cloud And Deployment Rules

Use this when deploying, scaling, securing, monitoring, and operating systems in cloud environments.

## Step 1: Must Apply First

- Choose the right compute model: VM, container, or serverless.
- Configure networking with public and private boundaries.
- Apply IAM least privilege.
- Store secrets securely.
- Add monitoring, logging, and alerts.
- Automate deployment through CI/CD.
- Configure backups and recovery.
- Track cost from the beginning.

<details>
<summary>Coding Principles name</summary>

- Least Privilege
- Secure By Default
- Automate Deployment
- Observability First
- Recovery Readiness
- Cost Awareness

</details>

<details>
<summary>Concepts name</summary>

- Compute model
- network boundary
- IAM
- secret storage
- monitoring
- logging
- alerting
- CI/CD
- backup
- recovery
- cost tracking

</details>

## Step 2: Core Cloud Concepts

- On-demand resources.
- Pay-as-you-go pricing.
- Elasticity for scaling up and down.
- High availability through multiple zones.
- Fault tolerance through redundancy and recovery planning.

<details>
<summary>Coding Principles name</summary>

- Elasticity
- High Availability
- Fault Tolerance
- Cost Awareness

</details>

<details>
<summary>Concepts name</summary>

- On-demand resources
- pay-as-you-go
- elasticity
- high availability
- fault tolerance

</details>

## Step 3: Compute

- Use virtual machines for full server control.
- Use containers for portable app packaging.
- Use Kubernetes when orchestration needs justify the complexity.
- Use serverless functions for event-driven or short-lived workloads.
- Keep services stateless where possible.

<details>
<summary>Coding Principles name</summary>

- Fit For Purpose Compute
- Statelessness
- Operational Simplicity
- Containerization Discipline

</details>

<details>
<summary>Concepts name</summary>

- Virtual machines
- containers
- Kubernetes
- serverless functions
- stateless services

</details>

## Step 4: Storage And Databases

- Use object storage for files, images, documents, and backups.
- Use block storage for server disks.
- Use file storage when shared file systems are needed.
- Use managed relational databases for SQL workloads.
- Use managed NoSQL databases when access patterns fit.
- Configure read replicas when read traffic grows.
- Configure backups and snapshots.

<details>
<summary>Coding Principles name</summary>

- Fit For Purpose Storage
- Managed Services First
- Backup Readiness
- Data Durability

</details>

<details>
<summary>Concepts name</summary>

- Object storage
- block storage
- file storage
- managed SQL
- managed NoSQL
- read replicas
- backups
- snapshots

</details>

## Step 5: Networking

- Use a VPC or equivalent private network.
- Separate public and private subnets.
- Place databases in private networks.
- Use DNS for stable service names.
- Use load balancers for traffic distribution.
- Restrict firewall or security group rules.

<details>
<summary>Coding Principles name</summary>

- Network Segmentation
- Least Exposure
- Private By Default
- Controlled Ingress

</details>

<details>
<summary>Concepts name</summary>

- VPC
- public subnet
- private subnet
- private database
- DNS
- load balancer
- firewall rule
- security group

</details>

## Step 6: Security

- Use IAM users, roles, and policies carefully.
- Apply least privilege.
- Encrypt data at rest and in transit.
- Use secret management instead of hardcoded secrets.
- Rotate credentials when needed.
- Audit access to sensitive resources.

<details>
<summary>Coding Principles name</summary>

- Least Privilege
- Encryption By Default
- Secret Management
- Access Auditing

</details>

<details>
<summary>Concepts name</summary>

- IAM
- least privilege
- encryption at rest
- encryption in transit
- secret management
- credential rotation
- access audit

</details>

## Step 7: Scalability And Performance

- Use auto-scaling for variable workloads.
- Use horizontal scaling for stateless services.
- Use Redis or similar caching where repeated reads are expensive.
- Use CDN for static content and global delivery.
- Optimize app and database performance before over-scaling infrastructure.

<details>
<summary>Coding Principles name</summary>

- Horizontal Scalability
- Cache With Purpose
- Right-Sizing
- Optimize Before Scaling

</details>

<details>
<summary>Concepts name</summary>

- Auto-scaling
- horizontal scaling
- Redis cache
- CDN
- performance optimization
- right-sizing

</details>

## Step 8: Messaging And Async Systems

- Use message queues for background jobs and reliable async processing.
- Use pub/sub for event distribution.
- Use event streaming for high-volume ordered event processing.
- Make consumers idempotent.
- Monitor dead-letter queues.

<details>
<summary>Coding Principles name</summary>

- Async Decoupling
- Idempotency
- Fail Fast
- Reliable Processing
- Poison Message Isolation

</details>

<details>
<summary>Concepts name</summary>

- Message queue
- background job
- pub/sub
- event streaming
- idempotent consumer
- dead-letter queue

</details>

## Step 9: Monitoring And Logging

- Collect application logs.
- Collect infrastructure metrics such as CPU, memory, disk, and network.
- Track application metrics such as latency, error rate, and throughput.
- Add alerts based on user impact.
- Use tracing for distributed systems.

<details>
<summary>Coding Principles name</summary>

- Observability First
- Actionable Alerts
- Metric-Driven Operations
- Traceability

</details>

<details>
<summary>Concepts name</summary>

- Application logs
- infrastructure metrics
- application metrics
- alerts
- tracing

</details>

## Step 10: Deployment And DevOps

- Use CI/CD pipelines.
- Use Infrastructure as Code with tools such as Terraform or CloudFormation.
- Use blue-green deployments for quick rollback.
- Use canary releases for gradual rollout.
- Keep environment variables and secrets separate.
- Do not deploy manually as the normal workflow.

<details>
<summary>Coding Principles name</summary>

- Infrastructure As Code
- Deployment Automation
- Safe Rollout
- Environment Separation

</details>

<details>
<summary>Concepts name</summary>

- CI/CD
- Infrastructure as Code
- Terraform
- CloudFormation
- blue-green deployment
- canary release
- environment variables
- secrets

</details>

## Step 11: Reliability And Recovery

- Define backup frequency.
- Test restore procedures.
- Plan disaster recovery.
- Use multi-zone deployment for high availability.
- Use multi-region only when the business requirement justifies the cost and complexity.
- Define failover strategy.

<details>
<summary>Coding Principles name</summary>

- Backup Discipline
- Restore Testing
- Failover Readiness
- Disaster Recovery Planning

</details>

<details>
<summary>Concepts name</summary>

- Backup frequency
- restore test
- disaster recovery
- multi-zone deployment
- multi-region deployment
- failover

</details>

## Step 12: Cost Management

- Monitor cost by service and environment.
- Add budget alerts.
- Remove unused resources.
- Right-size compute and databases.
- Compare reserved, spot, and on-demand pricing where appropriate.

<details>
<summary>Coding Principles name</summary>

- Cost Visibility
- Right-Sizing
- Waste Reduction
- Pricing Model Awareness

</details>

<details>
<summary>Concepts name</summary>

- Cost monitoring
- budget alerts
- unused resource cleanup
- right-sizing
- reserved pricing
- spot pricing
- on-demand pricing

</details>

## Step 13: API And Container Ecosystem

- Use API Gateway for routing, auth integration, request validation, and rate limiting when useful.
- Store container images in a registry.
- Understand Kubernetes basics before using it:
  - Pods
  - Services
  - Deployments
  - ConfigMaps
  - Secrets

<details>
<summary>Coding Principles name</summary>

- Controlled Entry Point
- Image Immutability
- Kubernetes Resource Discipline
- Runtime Configuration

</details>

<details>
<summary>Concepts name</summary>

- API Gateway
- request validation
- rate limiting
- container image
- container registry
- pod
- service
- deployment
- ConfigMap
- Kubernetes secret

</details>

## Before Moving On

- Compute, storage, database, and networking choices are explicit.
- IAM and secrets are secure.
- CI/CD is configured.
- Monitoring and alerts exist.
- Backups are enabled and restore has been considered.
- Cost controls are in place.

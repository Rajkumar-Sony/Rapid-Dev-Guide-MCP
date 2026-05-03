#!/usr/bin/env node

import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

type RuleFile = {
  id: string;
  title: string;
  filename: string;
  kind: "rule" | "learning" | "index";
  aliases: string[];
};

const dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(dirname, "..");
const rulesDir = path.join(rootDir, "rules");

const ruleFiles: RuleFile[] = [
  {
    id: "index",
    title: "Development Rules Index",
    filename: "concept.md",
    kind: "index",
    aliases: ["concept", "rules-index"],
  },
  {
    id: "project-workflow",
    title: "Project Workflow Rules",
    filename: "00-project-workflow.md",
    kind: "rule",
    aliases: ["workflow", "project"],
  },
  {
    id: "low-level-design",
    title: "Low Level Design Rules",
    filename: "01-low-level-design.md",
    kind: "rule",
    aliases: ["lld", "low-level", "classes", "modules"],
  },
  {
    id: "frontend-development",
    title: "Frontend Development Rules",
    filename: "02-frontend-development.md",
    kind: "rule",
    aliases: ["frontend", "ui", "react", "component"],
  },
  {
    id: "rest-api-development",
    title: "REST API Development Rules",
    filename: "03-rest-api-development.md",
    kind: "rule",
    aliases: ["rest", "api", "http", "endpoint"],
  },
  {
    id: "backend-microservices",
    title: "Backend Microservices Rules",
    filename: "04-backend-microservices.md",
    kind: "rule",
    aliases: ["backend", "microservices", "services", "events"],
  },
  {
    id: "high-level-design",
    title: "High Level Design Rules",
    filename: "05-high-level-design.md",
    kind: "rule",
    aliases: ["hld", "architecture", "system-design"],
  },
  {
    id: "cloud-and-deployment",
    title: "Cloud And Deployment Rules",
    filename: "06-cloud-and-deployment.md",
    kind: "rule",
    aliases: ["cloud", "deployment", "devops", "infrastructure"],
  },
  {
    id: "database-and-data-modeling",
    title: "Database And Data Modeling Rules",
    filename: "07-database-and-data-modeling.md",
    kind: "rule",
    aliases: ["database", "data", "schema", "sql"],
  },
  {
    id: "git-code-review-release",
    title: "Git, Code Review, And Release Rules",
    filename: "08-git-code-review-release.md",
    kind: "rule",
    aliases: ["git", "review", "release", "pull-request"],
  },
  {
    id: "security-and-privacy",
    title: "Security And Privacy Rules",
    filename: "09-security-and-privacy.md",
    kind: "rule",
    aliases: ["security", "privacy", "auth"],
  },
  {
    id: "documentation-and-decision-records",
    title: "Documentation And Decision Records Rules",
    filename: "10-documentation-and-decision-records.md",
    kind: "rule",
    aliases: ["documentation", "docs", "adr", "decision-records"],
  },
  {
    id: "configuration-and-environments",
    title: "Configuration And Environments Rules",
    filename: "11-configuration-and-environments.md",
    kind: "rule",
    aliases: ["configuration", "config", "environment", "env"],
  },
  {
    id: "dependency-and-package-management",
    title: "Dependency And Package Management Rules",
    filename: "12-dependency-and-package-management.md",
    kind: "rule",
    aliases: ["dependencies", "dependency", "package", "npm"],
  },
  {
    id: "testing-and-quality-gates",
    title: "Testing And Quality Gates Rules",
    filename: "13-testing-and-quality-gates.md",
    kind: "rule",
    aliases: ["testing", "tests", "qa", "quality"],
  },
  {
    id: "incident-response-and-operations",
    title: "Incident Response And Operations Rules",
    filename: "14-incident-response-and-operations.md",
    kind: "rule",
    aliases: ["incident", "operations", "ops", "runbook"],
  },
  {
    id: "frontend-learning-projects",
    title: "Frontend Learning Projects",
    filename: "15-frontend-learning-projects.md",
    kind: "learning",
    aliases: ["frontend-projects", "ui-projects"],
  },
  {
    id: "rest-api-learning-projects",
    title: "REST API Learning Projects",
    filename: "16-rest-api-learning-projects.md",
    kind: "learning",
    aliases: ["rest-projects", "api-projects"],
  },
  {
    id: "microservices-learning-projects",
    title: "Backend Microservices Learning Projects",
    filename: "17-microservices-learning-projects.md",
    kind: "learning",
    aliases: ["backend-projects", "microservice-projects"],
  },
];

const keywordRules: Array<{ keywords: string[]; ids: string[] }> = [
  {
    keywords: ["frontend", "ui", "react", "vue", "component", "screen", "form", "route", "css"],
    ids: ["frontend-development", "security-and-privacy", "testing-and-quality-gates"],
  },
  {
    keywords: ["api", "rest", "http", "endpoint", "controller", "request", "response", "openapi"],
    ids: ["rest-api-development", "security-and-privacy", "testing-and-quality-gates"],
  },
  {
    keywords: ["microservice", "service", "event", "queue", "kafka", "rabbitmq", "saga", "grpc"],
    ids: ["backend-microservices", "high-level-design", "cloud-and-deployment", "testing-and-quality-gates"],
  },
  {
    keywords: ["database", "schema", "sql", "migration", "transaction", "index", "model"],
    ids: ["database-and-data-modeling", "testing-and-quality-gates"],
  },
  {
    keywords: ["cloud", "deploy", "deployment", "docker", "kubernetes", "aws", "gcp", "azure"],
    ids: ["cloud-and-deployment", "configuration-and-environments", "incident-response-and-operations"],
  },
  {
    keywords: ["security", "privacy", "auth", "authorization", "authentication", "secret", "xss", "csrf"],
    ids: ["security-and-privacy", "configuration-and-environments", "testing-and-quality-gates"],
  },
  {
    keywords: ["config", "environment", "env", "feature flag", "runtime config", "secret"],
    ids: ["configuration-and-environments", "security-and-privacy"],
  },
  {
    keywords: ["dependency", "package", "npm", "library", "version", "upgrade"],
    ids: ["dependency-and-package-management", "testing-and-quality-gates"],
  },
  {
    keywords: ["git", "branch", "pull request", "pr", "code review", "release", "rollback"],
    ids: ["git-code-review-release", "testing-and-quality-gates"],
  },
  {
    keywords: ["documentation", "docs", "readme", "adr", "decision record", "runbook"],
    ids: ["documentation-and-decision-records", "incident-response-and-operations"],
  },
  {
    keywords: ["architecture", "hld", "system design", "scalability", "reliability"],
    ids: ["high-level-design", "cloud-and-deployment", "incident-response-and-operations"],
  },
  {
    keywords: ["class", "function", "module", "lld", "low level", "design pattern"],
    ids: ["low-level-design", "testing-and-quality-gates"],
  },
  {
    keywords: ["incident", "alert", "production", "outage", "operations", "monitoring"],
    ids: ["incident-response-and-operations", "cloud-and-deployment", "documentation-and-decision-records"],
  },
];

const learningAreaIds = {
  frontend: "frontend-learning-projects",
  rest: "rest-api-learning-projects",
  api: "rest-api-learning-projects",
  backend: "microservices-learning-projects",
  microservices: "microservices-learning-projects",
} as const;

function textResponse(text: string) {
  return {
    content: [{ type: "text" as const, text }],
  };
}

function jsonResponse(value: unknown) {
  return textResponse(JSON.stringify(value, null, 2));
}

function rulePath(rule: RuleFile) {
  return path.join(rulesDir, rule.filename);
}

async function readRule(rule: RuleFile) {
  return readFile(rulePath(rule), "utf8");
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function findRule(name: string) {
  const query = normalize(name);
  return ruleFiles.find((rule) => {
    const candidates = [rule.id, rule.title, rule.filename, ...rule.aliases];
    return candidates.some((candidate) => normalize(candidate) === query);
  });
}

function resourceUri(rule: RuleFile) {
  return `rules://${rule.id}`;
}

function extractBeforeMovingOn(content: string) {
  const match = content.match(/^## Before Moving On\s*\n([\s\S]*?)(?=^## |\z)/m);
  return match?.[1]?.trim() ?? "";
}

function extractProjects(content: string) {
  const matches = content.match(/^## Project \d+: [\s\S]*?(?=^## Project \d+: |\z)/gm);
  return matches?.map((project) => project.trim()) ?? [];
}

function extractConcepts(content: string) {
  const blocks = content.match(/<summary>Concepts name<\/summary>\s*([\s\S]*?)\s*<\/details>/g) ?? [];
  const concepts = blocks.flatMap((block) =>
    [...block.matchAll(/^- (.+)$/gm)].map((match) => match[1]?.trim()).filter(Boolean),
  );
  return [...new Set(concepts)].sort((a, b) => a.localeCompare(b));
}

function extractCodingPrinciples(content: string) {
  const blocks = content.match(/<summary>Coding Principles name<\/summary>\s*([\s\S]*?)\s*<\/details>/g) ?? [];
  const principles = blocks.flatMap((block) =>
    [...block.matchAll(/^- (.+)$/gm)].map((match) => match[1]?.trim()).filter(Boolean),
  );
  return [...new Set(principles)].sort((a, b) => a.localeCompare(b));
}

function scoreRule(context: string, rule: RuleFile) {
  const source = normalize(`${rule.title} ${rule.id} ${rule.aliases.join(" ")}`);
  const words = normalize(context).split(/[^a-z0-9+#.-]+/).filter(Boolean);
  return words.reduce((score, word) => score + (source.includes(word) ? 1 : 0), 0);
}

function selectRulesForTask(context: string) {
  const selected = new Set<string>(["project-workflow"]);
  const lowerContext = normalize(context);

  for (const mapping of keywordRules) {
    if (mapping.keywords.some((keyword) => lowerContext.includes(keyword))) {
      mapping.ids.forEach((id) => selected.add(id));
    }
  }

  if (selected.size === 1) {
    ruleFiles
      .filter((rule) => rule.kind === "rule" && rule.id !== "project-workflow")
      .map((rule) => ({ rule, score: scoreRule(context, rule) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .forEach((item) => selected.add(item.rule.id));
  }

  selected.add("testing-and-quality-gates");
  return [...selected]
    .map((id) => ruleFiles.find((rule) => rule.id === id))
    .filter((rule): rule is RuleFile => Boolean(rule));
}

function searchInContent(content: string, query: string, maxMatches: number) {
  const lowerQuery = normalize(query);
  const lines = content.split(/\r?\n/);
  const matches: string[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (normalize(line).includes(lowerQuery)) {
      const start = Math.max(0, index - 1);
      const end = Math.min(lines.length, index + 2);
      matches.push(lines.slice(start, end).join("\n"));
    }
    if (matches.length >= maxMatches) {
      break;
    }
  }

  return matches;
}

function explicitAreaRules(areas: string | undefined) {
  if (!areas) {
    return [];
  }

  return areas
    .split(",")
    .map((area) => findRule(area.trim()))
    .filter((rule): rule is RuleFile => rule !== undefined && rule.kind === "rule");
}

function uniqueRules(rules: RuleFile[]) {
  const seen = new Set<string>();
  return rules.filter((rule) => {
    if (seen.has(rule.id)) {
      return false;
    }
    seen.add(rule.id);
    return true;
  });
}

type IntakeQuestion = {
  prompt: string;
  options: string[];
};

function formatQuestion(question: IntakeQuestion) {
  return [
    `- [ ] ${question.prompt}`,
    "  - Ask this question now, wait for the user's answer, then continue to the next question.",
    ...question.options.map((option) => `  - ( ) ${option}`),
  ].join("\n");
}

function intakeQuestionsFor(ruleIds: Set<string>) {
  const questions: IntakeQuestion[] = [
    {
      prompt: "What framework or platform should be used?",
      options: [
        "React",
        "Next.js",
        "Vue",
        "Angular",
        "Node.js service",
        "Spring Boot",
        "Custom or existing project standard",
      ],
    },
    {
      prompt: "What programming language should be used?",
      options: ["TypeScript", "JavaScript", "Java", "Kotlin", "Python", "Go", "Custom or existing project standard"],
    },
    {
      prompt: "What package manager/build tool should be used?",
      options: ["npm", "pnpm", "yarn", "bun", "Maven", "Gradle", "Custom or existing project standard"],
    },
    {
      prompt: "What CSS/UI library should be used? Use N/A for backend/API-only work.",
      options: ["Tailwind CSS", "Material UI", "Chakra UI", "Bootstrap", "Vanilla CSS", "N/A", "Custom or existing project standard"],
    },
    {
      prompt: "What runtime/version constraints matter?",
      options: ["Latest stable", "Node.js 20", "Node.js 22", "Java 17", "Java 21", "Python 3.12", "Custom or existing project standard"],
    },
    {
      prompt: "What test framework or quality gate should be used?",
      options: ["Vitest", "Jest", "Playwright", "Cypress", "JUnit", "pytest", "Custom or existing project standard"],
    },
    {
      prompt: "What deployment target or environment should be assumed?",
      options: ["Local only", "Vercel", "Netlify", "Docker", "Kubernetes", "AWS", "Custom or existing project standard"],
    },
    {
      prompt: "What existing project conventions, folders, or libraries must be followed?",
      options: [
        "No existing project constraints",
        "Follow current repo structure",
        "Follow existing UI/component library",
        "Follow existing backend/service conventions",
        "Follow existing testing conventions",
        "Follow existing lint/format rules",
        "Custom project constraints",
      ],
    },
  ];

  if (ruleIds.has("frontend-development")) {
    questions.push(
      {
        prompt: "Which frontend state strategy should be used?",
        options: [
          "Local state",
          "URL state",
          "Server state",
          "Global state",
          "Server state plus local UI state",
          "Global state plus server state",
          "Custom state strategy",
        ],
      },
      {
        prompt: "Which routes, protected areas, forms, loading states, empty states, and error states are required?",
        options: [
          "Simple public pages only",
          "Public pages plus authenticated dashboard",
          "Authenticated CRUD app with forms and standard loading/empty/error states",
          "Multi-route app with role-protected areas",
          "Wizard or checkout-style flow",
          "Admin panel preset",
          "Custom route/state requirements",
        ],
      },
      {
        prompt: "Which accessibility, responsive, theme, browser, and performance requirements must be met?",
        options: [
          "Basic responsive desktop/mobile support",
          "Responsive plus keyboard accessibility",
          "WCAG-focused accessibility preset",
          "Responsive plus dark/light theme",
          "High-performance preset",
          "Enterprise browser compatibility preset",
          "Custom UX/accessibility requirements",
        ],
      },
    );
  }

  if (ruleIds.has("rest-api-development")) {
    questions.push(
      {
        prompt: "Which API framework should be used?",
        options: ["Express", "Fastify", "NestJS", "Spring Boot", "ASP.NET Core", "Go Fiber", "Custom or existing project standard"],
      },
      {
        prompt: "Which auth strategy, roles, permissions, rate limits, CORS policy, and audit logging are required?",
        options: [
          "No auth",
          "JWT auth basic roles",
          "Session auth",
          "OAuth/OIDC",
          "Internal service auth",
          "Strict enterprise security preset",
          "Custom security requirements",
        ],
      },
      {
        prompt: "Which request/response contracts, validation rules, status codes, pagination, and error formats are required?",
        options: [
          "Simple JSON CRUD preset",
          "Strict DTO validation preset",
          "OpenAPI-first contract preset",
          "Cursor pagination preset",
          "Offset pagination preset",
          "RFC-style error response preset",
          "Custom API contract requirements",
        ],
      },
    );
  }

  if (ruleIds.has("backend-microservices")) {
    questions.push(
      {
        prompt: "Which service framework and communication style should be used?",
        options: [
          "REST only",
          "gRPC only",
          "Events and queues",
          "REST plus async events",
          "gRPC plus async events",
          "Modular monolith for now",
          "Custom service architecture",
        ],
      },
      {
        prompt: "What are the service boundaries, data ownership rules, contracts, and deployment boundaries?",
        options: [
          "Single service boundary",
          "Few coarse-grained services",
          "Domain-aligned service boundaries",
          "Strict per-service data ownership",
          "Shared database transitional setup",
          "Independent deployable services",
          "Custom service-boundary rules",
        ],
      },
      {
        prompt: "Which reliability patterns are required?",
        options: [
          "Basic retries and timeouts",
          "Retries, timeouts, and circuit breakers",
          "DLQ and idempotency",
          "Saga and outbox",
          "Tracing and observability preset",
          "Full resilience preset",
          "Custom reliability requirements",
        ],
      },
    );
  }

  if (ruleIds.has("database-and-data-modeling")) {
    questions.push(
      {
        prompt: "Which database engine and migration tool should be used?",
        options: ["PostgreSQL plus Prisma", "PostgreSQL plus TypeORM", "MySQL plus Prisma", "MongoDB", "SQLite", "Flyway/Liquibase", "Custom database standard"],
      },
      {
        prompt: "What entities, relationships, constraints, indexes, transactions, retention, and privacy requirements are needed?",
        options: [
          "Simple CRUD data model",
          "Relational normalized model",
          "Audit/history tracking preset",
          "Privacy-sensitive data preset",
          "High-query-performance indexing preset",
          "Transactional consistency preset",
          "Custom data-model requirements",
        ],
      },
    );
  }

  if (ruleIds.has("cloud-and-deployment")) {
    questions.push(
      {
        prompt: "Which cloud provider, compute model, container strategy, networking, scaling, monitoring, and recovery requirements apply?",
        options: [
          "Vercel/serverless preset",
          "AWS container preset",
          "Kubernetes preset",
          "VM-based deployment preset",
          "Local Docker Compose preset",
          "Managed PaaS preset",
          "Custom infrastructure requirements",
        ],
      },
    );
  }

  if (ruleIds.has("security-and-privacy")) {
    questions.push(
      {
        prompt: "Which data is sensitive, and what authentication, authorization, secret handling, logging privacy, and security review rules apply?",
        options: [
          "Basic auth and secret management preset",
          "PII-sensitive data preset",
          "Financial/compliance-sensitive preset",
          "Internal-only app preset",
          "Public internet-facing secure preset",
          "Strict least-privilege preset",
          "Custom security/privacy requirements",
        ],
      },
    );
  }

  if (ruleIds.has("documentation-and-decision-records")) {
    questions.push({
      prompt: "Which README, ADR, API docs, runbooks, or known limitations must be created or updated?",
      options: [
        "README only",
        "README plus API docs",
        "README plus ADRs",
        "Runbook plus known limitations",
        "Full documentation preset",
        "Update existing docs only",
        "Custom documentation requirements",
      ],
    });
  }

  return questions.filter(
    (question, index, all) => all.findIndex((candidate) => candidate.prompt === question.prompt) === index,
  );
}

async function buildProjectIntake(task: string, areas?: string) {
  const selectedRules = uniqueRules([...selectRulesForTask(task), ...explicitAreaRules(areas)]);
  const ruleIds = new Set(selectedRules.map((rule) => rule.id));
  const questions = intakeQuestionsFor(ruleIds);

  const conceptSections = await Promise.all(
    selectedRules
      .filter((rule) => rule.kind === "rule")
      .map(async (rule) => {
        const content = await readRule(rule);
        const concepts = extractConcepts(content);
        const principles = extractCodingPrinciples(content);
        return [
          `### ${rule.title}`,
          "",
          "Concepts to select:",
          ...concepts.map((concept) => `- [ ] ${concept}`),
          "",
          "Coding principles to select:",
          ...principles.map((principle) => `- [ ] ${principle}`),
        ].join("\n");
      }),
  );

  return [
    "# Project Intake Required Before Coding",
    "",
    `Task: ${task}`,
    "",
    "Ask the user these questions before starting implementation.",
    "Required interaction mode: ask exactly one required question at a time and wait for the user's answer before asking the next question.",
    "The user can answer briefly and may leave non-applicable items as N/A.",
    "",
    "## Required Questions",
    "",
    ...questions.map((question) => formatQuestion(question)),
    "",
    "## Optional Concept And Coding Principle Selection",
    "",
    "Ask the user to select the checkboxes that apply to this project. Default to Must Apply First concepts when the user is unsure, and do not force advanced/scaling concepts unless the project needs them.",
    "",
    ...conceptSections,
    "",
    "## Agent Requirement",
    "",
    "Do not start coding implementation until the user has answered the required questions or explicitly approved reasonable defaults.",
  ].join("\n");
}

const server = new McpServer(
  {
    name: "rapid-dev-guide-mcp",
    version: "0.1.0",
  },
  {
    instructions: [
      "Use this server before planning, coding, reviewing, or finishing software development work.",
      "For every development task, call get_rules_for_task with the user's task context before making a plan.",
      "Before coding implementation, call get_project_intake and ask the user framework, language, CSS/UI library, tooling, and concept-selection questions.",
      "Do not start coding until the user answers the intake questions or explicitly approves reasonable defaults.",
      "Apply the returned rule files during implementation.",
      "Before finishing, call get_checklist for the most relevant rule area and verify the checklist in the final answer.",
      "When the user names specific rule areas, call get_rule_set for each named area and apply those files explicitly.",
    ].join(" "),
    capabilities: {
      logging: {},
    },
  },
);

for (const rule of ruleFiles) {
  server.registerResource(
    rule.id,
    resourceUri(rule),
    {
      title: rule.title,
      description: `${rule.kind} file: ${rule.filename}`,
      mimeType: "text/markdown",
    },
    async () => ({
      contents: [
        {
          uri: resourceUri(rule),
          mimeType: "text/markdown",
          text: await readRule(rule),
        },
      ],
    }),
  );
}

server.registerPrompt(
  "apply-rapid-dev-guide",
  {
    title: "Apply Rapid Dev Guide",
    description: "Mandatory workflow prompt for applying Rapid Dev Guide MCP to a development task.",
    argsSchema: {
      task: z.string().describe("The feature, project, bugfix, review, or implementation task."),
      areas: z
        .string()
        .optional()
        .describe(
          "Optional comma-separated rule ids or aliases to force, such as frontend-development, security-and-privacy.",
        ),
    },
  },
  async ({ task, areas }) => {
    const forcedAreas = areas
      ?.split(",")
      .map((area) => area.trim())
      .filter(Boolean);
    const forcedText =
      forcedAreas && forcedAreas.length > 0
        ? `\nAlso call get_rule_set for these explicit areas and apply them: ${forcedAreas.join(", ")}.`
        : "";

    return {
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: [
              "Use Rapid Dev Guide MCP as mandatory project guidance for this task.",
              "",
              `Task: ${task}`,
              "",
              "Required workflow:",
              "1. Before planning or coding, call get_rules_for_task with the task context.",
              "2. Call get_project_intake with the task context and any forced areas.",
              "3. Ask the user the returned framework, language, CSS/UI library, tooling, and concept-selection questions before implementation.",
              "4. Do not start coding until the user answers the intake questions or explicitly approves reasonable defaults.",
              "5. Read and apply the returned rule files.",
              "6. If specific areas are named, call get_rule_set for each one and apply them explicitly.",
              "7. During implementation, use search_rules when a concept or principle needs clarification.",
              "8. Before finishing, call get_checklist for the most relevant rule area.",
              "9. In the final response, mention which Rapid Dev Guide areas were applied and whether the checklist passed.",
              forcedText,
            ].join("\n"),
          },
        },
      ],
    };
  },
);

server.registerPrompt(
  "project-intake-before-coding",
  {
    title: "Project Intake Before Coding",
    description: "Prompt that forces project intake questions and concept checkbox selection before implementation.",
    argsSchema: {
      task: z.string().describe("The feature, project, bugfix, review, or implementation task."),
      areas: z
        .string()
        .optional()
        .describe("Optional comma-separated rule ids or aliases to force."),
    },
  },
  async ({ task, areas }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: [
            "Use Rapid Dev Guide MCP to perform a mandatory project intake before coding.",
            "",
            `Task: ${task}`,
            "",
            "Required actions:",
            "1. Call get_project_intake with the task and any specified areas.",
            "2. Ask the user the returned questions.",
            "3. Present the returned concepts and coding principles as optional checkboxes for manual selection.",
            "4. Wait for the user's answers or explicit approval of reasonable defaults.",
            "5. Only then start implementation.",
            areas ? `Forced areas: ${areas}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
        },
      },
    ],
  }),
);

server.registerTool(
  "rules_mcp_status",
  {
    title: "Rules MCP Status",
    description: "Return server health and loaded rule-file counts.",
  },
  async () => {
    const rootFiles = await readdir(rulesDir);
    const markdownFiles = rootFiles.filter((file) => file.endsWith(".md")).sort();
    return jsonResponse({
      ok: true,
      rootDir,
      rulesDir,
      resources: ruleFiles.length,
      markdownFiles: markdownFiles.length,
      ruleFiles: ruleFiles.filter((rule) => rule.kind === "rule").length,
      learningFiles: ruleFiles.filter((rule) => rule.kind === "learning").length,
    });
  },
);

server.registerTool(
  "get_project_intake",
  {
    title: "Get Project Intake",
    description:
      "Return required pre-coding questions and optional checkbox concept/principle selections for a task.",
    inputSchema: {
      task: z.string().min(1).describe("Short description of the project, feature, or task."),
      areas: z
        .string()
        .optional()
        .describe("Optional comma-separated rule ids or aliases to force into the intake."),
    },
  },
  async ({ task, areas }) => textResponse(await buildProjectIntake(task, areas)),
);

server.registerTool(
  "list_rules",
  {
    title: "List Rules",
    description: "List available rule and learning-project files.",
    inputSchema: {
      kind: z.enum(["all", "rule", "learning", "index"]).optional().default("all"),
    },
  },
  async ({ kind }) => {
    const filtered = ruleFiles.filter((rule) => kind === "all" || rule.kind === kind);
    return jsonResponse(
      filtered.map((rule) => ({
        id: rule.id,
        title: rule.title,
        filename: rule.filename,
        kind: rule.kind,
        uri: resourceUri(rule),
        aliases: rule.aliases,
      })),
    );
  },
);

server.registerTool(
  "get_rule_set",
  {
    title: "Get Rule Set",
    description: "Read one rule file by id, alias, title, or filename.",
    inputSchema: {
      name: z.string().describe("Rule id, alias, title, or filename."),
    },
  },
  async ({ name }) => {
    const rule = findRule(name);
    if (!rule) {
      return textResponse(`No rule file matched "${name}". Use list_rules to see available ids.`);
    }

    return textResponse(await readRule(rule));
  },
);

server.registerTool(
  "search_rules",
  {
    title: "Search Rules",
    description: "Search all rule files for a term and return compact snippets.",
    inputSchema: {
      query: z.string().min(1),
      limit: z.number().int().min(1).max(50).optional().default(10),
      includeLearningProjects: z.boolean().optional().default(true),
    },
  },
  async ({ query, limit, includeLearningProjects }) => {
    const searchedRules = ruleFiles.filter((rule) => includeLearningProjects || rule.kind !== "learning");
    const results: Array<{ id: string; title: string; filename: string; matches: string[] }> = [];

    for (const rule of searchedRules) {
      const matches = searchInContent(await readRule(rule), query, 3);
      if (matches.length > 0) {
        results.push({
          id: rule.id,
          title: rule.title,
          filename: rule.filename,
          matches,
        });
      }
      if (results.length >= limit) {
        break;
      }
    }

    return jsonResponse(results);
  },
);

server.registerTool(
  "get_rules_for_task",
  {
    title: "Get Rules For Task",
    description: "Select relevant rule files for a future project task.",
    inputSchema: {
      context: z.string().min(1).describe("Short description of the project, feature, or task."),
      includeContent: z.boolean().optional().default(false),
    },
  },
  async ({ context, includeContent }) => {
    const selectedRules = selectRulesForTask(context);
    const summary = selectedRules.map((rule) => ({
      id: rule.id,
      title: rule.title,
      filename: rule.filename,
      uri: resourceUri(rule),
    }));

    if (!includeContent) {
      return jsonResponse(summary);
    }

    const sections = await Promise.all(
      selectedRules.map(async (rule) => `# ${rule.title}\n\n${await readRule(rule)}`),
    );
    return textResponse(sections.join("\n\n---\n\n"));
  },
);

server.registerTool(
  "get_learning_projects",
  {
    title: "Get Learning Projects",
    description: "Return learning projects for frontend, REST API, microservices, or all areas.",
    inputSchema: {
      area: z.enum(["all", "frontend", "rest", "api", "backend", "microservices"]).optional().default("all"),
      projectNumber: z.number().int().min(1).optional(),
    },
  },
  async ({ area, projectNumber }) => {
    const ids: string[] =
      area === "all"
        ? Object.values(learningAreaIds).filter((value, index, array) => array.indexOf(value) === index)
        : [learningAreaIds[area]];
    const selected = ruleFiles.filter((rule) => ids.includes(rule.id));

    const outputs = await Promise.all(
      selected.map(async (rule) => {
        const content = await readRule(rule);
        if (projectNumber === undefined) {
          return content;
        }
        const projects = extractProjects(content);
        return projects[projectNumber - 1] ?? `No project ${projectNumber} in ${rule.title}.`;
      }),
    );

    return textResponse(outputs.join("\n\n---\n\n"));
  },
);

server.registerTool(
  "get_checklist",
  {
    title: "Get Checklist",
    description: "Return the Before Moving On checklist for one rule area.",
    inputSchema: {
      area: z.string().describe("Rule id, alias, title, or filename."),
    },
  },
  async ({ area }) => {
    const rule = findRule(area);
    if (!rule) {
      return textResponse(`No rule file matched "${area}". Use list_rules to see available ids.`);
    }
    if (rule.kind !== "rule") {
      return textResponse(`${rule.title} is not a rule file with a Before Moving On checklist.`);
    }

    const checklist = extractBeforeMovingOn(await readRule(rule));
    return textResponse(checklist || `${rule.title} does not contain a Before Moving On checklist.`);
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error: unknown) => {
  console.error("Rapid Dev Guide MCP server failed:", error);
  process.exit(1);
});
